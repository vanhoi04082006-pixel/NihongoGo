/**
 * NihongoGo — Full-system UI smoke + screenshot harness.
 *
 * Usage:
 *   node scripts/ui-audit.mjs                 # chạy tất cả, mặc định desktop+mobile
 *   node scripts/ui-audit.mjs --vp=mobile     # chỉ 1 viewport
 *   node scripts/ui-audit.mjs --only=learn,kana
 *   node scripts/ui-audit.mjs --no-login      # chỉ khách (landing/login/register)
 *
 * Ghi ra:
 *   qa/shots/<viewport>/<screen>.png   — full-page screenshot
 *   qa/report.json                     — console errors, failed requests, a11y notes
 */
import { chromium } from 'playwright'
import { mkdir, writeFile, rm } from 'node:fs/promises'
import path from 'node:path'

const BASE = process.env.QA_BASE ?? 'http://localhost:3000'
const OUT = path.resolve('qa/shots')
const argv = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v = '1'] = a.replace(/^--/, '').split('=')
    return [k, v]
  }),
)

const VIEWPORTS = {
  mobile: { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
  tablet: { width: 768, height: 1024, deviceScaleFactor: 1 },
  desktop: { width: 1440, height: 900, deviceScaleFactor: 1 },
  narrow: { width: 320, height: 640, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
}

/** Màn hình: [id, hash route, label, cần đăng nhập?] */
const SCREENS = [
  ['landing', '/', 'Landing (khách)', false],
  ['login', '/login', 'Đăng nhập', false],
  ['register', '/register', 'Đăng ký', false],
  ['onboarding', '/onboarding', 'Onboarding', true],
  ['learn', '/learn', 'Lộ trình học', true],
  ['lesson-detail', '/lessons/l4-nanji-desu-ka', 'Chi tiết bài', true],
  ['kana', '/kana', 'Bảng kana', true],
  ['kana-write', '/kana/write', 'Luyện viết kana', true],
  ['kanji', '/kanji', 'Bảng kanji', true],
  ['vocabulary', '/vocabulary', 'Từ vựng', true],
  ['grammar', '/grammar', 'Ngữ pháp', true],
  ['review', '/review', 'Ôn tập SRS', true],
  ['mistakes', '/review/mistakes', 'Sổ lỗi sai', true],
  ['leaderboard', '/leaderboard', 'Bảng xếp hạng', true],
  ['quests', '/quests', 'Nhiệm vụ', true],
  ['achievements', '/achievements', 'Thành tích', true],
  ['profile', '/profile', 'Hồ sơ & thống kê', true],
  ['settings', '/settings', 'Cài đặt', true],
  ['admin', '/admin', 'Admin CMS', true],
]

const ADMIN = { email: 'admin@nihongogo.local', password: 'admin12345' }
const DEMO = { email: 'demo@nihongogo.local', password: 'demo12345' }

const findScreen = (id) => SCREENS.find((s) => s[0] === id)

/* ------------------------------ helpers ------------------------------ */

async function settle(page, ms = 700) {
  // KHÔNG dùng networkidle: socket.io (leaderboard-live) giữ websocket sống
  // nên networkidle không bao giờ đạt. Dùng load + ngưỡng idle thủ công.
  await page.waitForLoadState('load').catch(() => {})
  await page.waitForLoadState('domcontentloaded').catch(() => {})
  await page.waitForTimeout(ms)
  // chờ spinner/biến động DOM ổn định (tối đa 3s)
  await page
    .waitForFunction(
      () => {
        const w = window
        if (w.__qaPrev === undefined) {
          w.__qaPrev = document.body.innerHTML.length
          w.__qaSame = 0
          return false
        }
        const len = document.body.innerHTML.length
        if (len === w.__qaPrev) w.__qaSame = (w.__qaSame ?? 0) + 1
        else w.__qaSame = 0
        w.__qaPrev = len
        return w.__qaSame >= 3
      },
      null,
      { polling: 120, timeout: 3000 },
    )
    .catch(() => {})
  // chờ mọi <img> decode xong — nếu không ảnh có thể chưa vẽ khi chụp
  await page
    .waitForFunction(
      () => [...document.images].every((i) => i.complete),
      null,
      { timeout: 8000, polling: 150 },
    )
    .catch(() => {})

  // Chờ animation kết thúc — BỎ QUA animation vô hạn (mascot idle, pulse, confetti):
  // a.finished của animation infinite không bao giờ settle → treo vĩnh viễn.
  await page
    .evaluate(() => {
      const anims = (document.getAnimations?.() ?? []).filter((a) => {
        const t = a.effect?.getTiming?.()
        return t && t.iterations !== Infinity && a.playState === 'running'
      })
      return Promise.race([
        Promise.all(anims.map((a) => a.finished.catch(() => {}))),
        new Promise((r) => setTimeout(r, 1200)),
      ])
    })
    .catch(() => {})
  await page.waitForTimeout(150)
}

/** Phát hiện tràn ngang + chồng lấn chữ (chỉ số production) */
async function layoutAudit(page) {
  return page.evaluate(() => {
    const de = document.documentElement
    const overflowX = de.scrollWidth - de.clientWidth
    const offenders = []
    if (overflowX > 1) {
      const vw = de.clientWidth
      for (const el of document.querySelectorAll('body *')) {
        const r = el.getBoundingClientRect()
        if (r.width === 0 || r.height === 0) continue
        if (r.right > vw + 1 || r.left < -1) {
          const cs = getComputedStyle(el)
          if (cs.position === 'fixed' || cs.visibility === 'hidden' || cs.opacity === '0') continue
          offenders.push({
            tag: el.tagName.toLowerCase(),
            cls: (el.className?.toString?.() ?? '').slice(0, 90),
            left: Math.round(r.left),
            right: Math.round(r.right),
          })
        }
        if (offenders.length >= 8) break
      }
    }
    // text quá nhỏ
    const tiny = []
    for (const el of document.querySelectorAll('p,span,a,li,dd,dt,label,button,h1,h2,h3,h4,summary')) {
      if (!el.textContent?.trim()) continue
      if (el.children.length > 0) continue
      const fs = parseFloat(getComputedStyle(el).fontSize)
      if (fs > 0 && fs < 11) {
        tiny.push({ size: fs, text: el.textContent.trim().slice(0, 40) })
        if (tiny.length >= 6) break
      }
    }
    // button/icon-button thiếu accessible name
    const unnamed = []
    for (const el of document.querySelectorAll('button,a[href],[role="button"]')) {
      const name = (
        el.getAttribute('aria-label') ||
        el.getAttribute('title') ||
        el.textContent ||
        ''
      ).trim()
      if (!name) {
        unnamed.push({ tag: el.tagName.toLowerCase(), cls: (el.className?.toString?.() ?? '').slice(0, 70) })
        if (unnamed.length >= 6) break
      }
    }
    // heading hierarchy
    const heads = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map((h) =>
      Number(h.tagName[1]),
    )
    let headingSkip = null
    for (let i = 1; i < heads.length; i++) {
      if (heads[i] - heads[i - 1] > 1) {
        headingSkip = `${heads[i - 1]} -> ${heads[i]}`
        break
      }
    }
    return {
      overflowX,
      offenders,
      tiny,
      unnamed,
      headingSkip,
      h1Count: document.querySelectorAll('h1').length,
      // alt="" là HỢP LỆ (ảnh trang trí) — chỉ flag khi thiếu hẳn thuộc tính
      imgNoAlt: [...document.querySelectorAll('img')].filter((i) => !i.hasAttribute('alt')).length,
      docHeight: document.documentElement.scrollHeight,
    }
  })
}

const DEBUG = !!argv.debug
const dbg = (...a) => DEBUG && console.log('    ·', ...a)

async function scrollThrough(page) {
  // Nội dung dùng whileInView nên phải cuộn hết trang để trigger trước khi chụp,
  // nếu không toàn bộ section dưới fold sẽ ở opacity:0 (ảnh sai).
  await page.evaluate(async () => {
    const step = Math.floor(window.innerHeight * 0.8)
    const max = document.documentElement.scrollHeight
    for (let y = 0; y < max; y += step) {
      window.scrollTo(0, y)
      await new Promise((r) => setTimeout(r, 130))
    }
    window.scrollTo(0, max)
    await new Promise((r) => setTimeout(r, 350))
    window.scrollTo(0, 0)
    await new Promise((r) => setTimeout(r, 250))
  })
  await page.waitForTimeout(300)
}

async function snap(page, file) {
  dbg('screenshot start')
  await page.screenshot({ path: file, fullPage: true, timeout: 45000, animations: 'disabled' })
  dbg('screenshot done')
}

/* ------------------------------ main ------------------------------ */

const only = argv.only ? new Set(argv.only.split(',')) : null
const targets = Object.keys(VIEWPORTS).filter((v) => !argv.vp || argv.vp.split(',').includes(v))

await rm(OUT, { recursive: true, force: true })

const report = { base: BASE, startedAt: new Date().toISOString(), viewports: {} }
let totalIssues = 0

const browser = await chromium.launch()

for (const vpName of targets) {
  const ctx = await browser.newContext({
    ...VIEWPORTS[vpName],
    locale: 'vi-VN',
    timezoneId: 'Asia/Ho_Chi_Minh',
    permissions: [],
  })
  const page = await ctx.newPage()

  const logs = []
  page.on('console', (m) => {
    if (m.type() === 'error' || m.type() === 'warning') {
      const t = m.text()
      // bỏ qua noise favicon/sw
      if (/favicon|manifest|Download the React DevTools/i.test(t)) return
      logs.push({ type: m.type(), text: t.slice(0, 400) })
    }
  })
  page.on('pageerror', (e) => logs.push({ type: 'pageerror', text: String(e).slice(0, 400) }))
  page.on('requestfailed', (r) =>
    logs.push({ type: 'requestfailed', text: `${r.method()} ${r.url()} — ${r.failure()?.errorText}` }),
  )
  page.on('response', (r) => {
    if (r.status() >= 400 && new URL(r.url()).origin === BASE) {
      logs.push({ type: 'http', text: `${r.status()} ${r.request().method()} ${r.url()}` })
    }
  })

  await mkdir(path.join(OUT, vpName), { recursive: true })
  const vpReport = { screens: {} }

  /* ---- khách: landing / login / register ---- */
  if (!argv['no-login']) {
    for (const [id, route, label, needAuth] of SCREENS) {
      if (needAuth) continue
      if (only && !only.has(id)) continue
      logs.length = 0
      dbg('goto', id)
      await page.goto(`${BASE}/#${route}`, { waitUntil: 'domcontentloaded', timeout: 20000 }).catch(e=>dbg('goto err',e.message))
      dbg('settle', id)
      await settle(page)
      dbg('scroll', id)
      await scrollThrough(page)
      dbg('audit', id)
      const audit = await layoutAudit(page)
      await snap(page, path.join(OUT, vpName, `${id}.png`))
      const issues = countIssues(audit, logs)
      totalIssues += issues
      vpReport.screens[id] = { label, route, audit, logs: [...logs], issues }
      console.log(`  ${vpName}/${id.padEnd(14)} ${issues === 0 ? 'OK ' : '⚠ ' + issues} ${logs.length ? `(${logs.length} log)` : ''}`)
    }

    /* ---- đăng nhập demo ---- */
    console.log(`  ${vpName} → đăng nhập demo…`)
    await page.goto(`${BASE}/#/login`, { waitUntil: 'domcontentloaded' })
    await settle(page, 400)
    await page.fill('input[type="email"]', DEMO.email)
    await page.fill('input[type="password"]', DEMO.password)
    await page.getByRole('button', { name: /đăng nhập|bắt đầu/i }).first().click()
    await page.waitForTimeout(1800)
    const loggedIn = await page.evaluate(async () => {
      const r = await fetch('/api/auth/me', { credentials: 'same-origin' })
      const d = await r.json()
      return d?.user?.email ?? null
    })
    console.log(`  ${vpName} session: ${loggedIn ?? '❌ KHÔNG ĐĂNG NHẬP ĐƯỢC'}`)
    vpReport.session = loggedIn
    if (!loggedIn) {
      totalIssues += 1
      continue
    }

    /* ---- các màn hình cần đăng nhập ---- */
    for (const [id, route, label] of SCREENS) {
      if (!findScreen(id)?.[3]) continue
      if (only && !only.has(id)) continue
      logs.length = 0
      dbg('goto', id, route)
      await page
        .goto(`${BASE}/#${route}`, { waitUntil: 'domcontentloaded', timeout: 20000 })
        .catch((e) => dbg('goto err', e.message))
      dbg('settle', id)
      await settle(page)
      dbg('scroll', id)
      await scrollThrough(page)
      dbg('audit', id)
      const audit = await layoutAudit(page)
      await snap(page, path.join(OUT, vpName, `${id}.png`))
      const issues = countIssues(audit, logs)
      totalIssues += issues
      vpReport.screens[id] = { label, route, audit, logs: [...logs], issues }
      console.log(`  ${vpName}/${id.padEnd(14)} ${issues === 0 ? 'OK ' : '⚠ ' + issues} ${logs.length ? `(${logs.length} log)` : ''}`)
    }
  }

  report.viewports[vpName] = vpReport
  await ctx.close()
}

await browser.close()

function countIssues(audit, logs) {
  let n = 0
  if (audit.overflowX > 1) n++
  n += audit.tiny.length ? 1 : 0
  n += audit.unnamed.length ? 1 : 0
  if (audit.headingSkip) n++
  if (audit.h1Count > 1) n++
  if (audit.imgNoAlt > 0) n++
  n += logs.length
  return n
}

await writeFile(path.resolve('qa/report.json'), JSON.stringify(report, null, 2))

console.log('\n' + '='.repeat(58))
console.log(`Tổng issue: ${totalIssues}`)
console.log(`Screenshots: ${OUT}`)
console.log('='.repeat(58))
if (totalIssues > 0) process.exitCode = 1
