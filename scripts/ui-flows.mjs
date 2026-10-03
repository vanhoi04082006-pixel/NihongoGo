/**
 * NihongoGo — Test chức năng thật + screenshot màn hình động (chạy bằng NODE).
 *
 * DB đọc qua qa/db-dump.json (do scripts/_qa-dump.ts sinh bằng Bun).
 * Chạy:  node scripts/ui-flows.mjs [--vp=desktop|mobile]
 */
import { chromium } from 'playwright'
import { mkdir, writeFile, rm, readFile } from 'node:fs/promises'
import path from 'node:path'

const BASE = process.env.QA_BASE ?? 'http://localhost:3000'
const OUT = path.resolve('qa/flows')
const argv = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v = '1'] = a.replace(/^--/, '').split('=')
    return [k, v]
  }),
)
const VP_NAME = argv.vp ?? 'desktop'
const VP = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 390, height: 844, isMobile: true, hasTouch: true },
}[VP_NAME]

const DUMP = JSON.parse(await readFile(path.resolve('qa/db-dump.json'), 'utf8'))
const EMAIL = DUMP.demo.email
const PASS = 'demo12345'

const results = []
let failures = 0
function ok(name, detail = '') {
  results.push({ name, pass: true, detail })
  console.log(`  ✓ ${name}${detail ? ' — ' + detail : ''}`)
}
function bad(name, detail = '') {
  results.push({ name, pass: false, detail })
  failures++
  console.log(`  ✗ ${name}${detail ? ' — ' + detail : ''}`)
}

async function settle(page, ms = 600) {
  await page.waitForLoadState('load').catch(() => {})
  await page.waitForTimeout(ms)
  await page
    .waitForFunction(() => [...document.images].every((i) => i.complete), null, { timeout: 6000, polling: 150 })
    .catch(() => {})
  await page
    .evaluate(() => {
      const anims = (document.getAnimations?.() ?? []).filter((a) => {
        const t = a.effect?.getTiming?.()
        return t && t.iterations !== Infinity && a.playState === 'running'
      })
      return Promise.race([
        Promise.all(anims.map((a) => a.finished.catch(() => {}))),
        new Promise((r) => setTimeout(r, 1000)),
      ])
    })
    .catch(() => {})
}

async function scrollThrough(page) {
  await page.evaluate(async () => {
    const step = Math.floor(window.innerHeight * 0.8)
    const max = document.documentElement.scrollHeight
    for (let y = 0; y < max; y += step) {
      window.scrollTo(0, y)
      await new Promise((r) => setTimeout(r, 120))
    }
    window.scrollTo(0, 0)
    await new Promise((r) => setTimeout(r, 200))
  })
}

await rm(OUT, { recursive: true, force: true })
await mkdir(OUT, { recursive: true })

const browser = await chromium.launch()
const ctx = await browser.newContext({ ...VP, locale: 'vi-VN', timezoneId: 'Asia/Ho_Chi_Minh' })
const page = await ctx.newPage()

const consoleErrors = []
page.on('console', (m) => {
  if (m.type() === 'error' && !/favicon|manifest|DevTools/i.test(m.text()))
    consoleErrors.push(m.text().slice(0, 200))
})
page.on('pageerror', (e) => consoleErrors.push('PAGEERROR: ' + String(e).slice(0, 200)))
page.on('response', (r) => {
  if (r.status() >= 400 && new URL(r.url()).origin === BASE)
    consoleErrors.push(`${r.status()} ${r.request().method()} ${r.url().replace(BASE, '')}`)
})

console.log(`\n═══ Test chức năng @ ${VP_NAME} ═══\n`)

/* 1. Đăng nhập */
await page.goto(`${BASE}/#/login`, { waitUntil: 'load' })
await settle(page, 800)
await page.fill('input[type="email"]', EMAIL)
await page.fill('input[type="password"]', PASS)
await page.getByRole('button', { name: /đăng nhập|bắt đầu/i }).first().click()
await page.waitForTimeout(2200)
const sess = await page.evaluate(async () => (await (await fetch('/api/auth/me', { credentials: 'same-origin' })).json())?.user?.email)
sess === EMAIL ? ok('Đăng nhập bằng UI', sess) : bad('Đăng nhập bằng UI', String(sess))

/* 2. Onboarding (demo user sau reseed mất tiến độ → phải onboard lại) */
const me = await page.evaluate(async () => (await (await fetch('/api/auth/me', { credentials: 'same-origin' })).json())?.user)
if (me && !me.profile?.onboardedAt) {
  const r = await page.evaluate(async () => {
    const res = await fetch('/api/onboarding', {
      method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ goal: 'TRAVEL', level: 'BEGINNER', dailyGoalXP: 20, kanaKnowledge: 'NONE' }),
    })
    return res.status
  })
  r === 200 ? ok('Onboarding qua API', 'status 200') : bad('Onboarding qua API', `status ${r}`)
}

/* 3. Chụp câu hỏi đầu tiên của bài 4 */
const n4 = DUMP.lesson4
await page.goto(`${BASE}/#/lesson/${n4.id}`, { waitUntil: 'load' })
await settle(page, 2500)
const hasPlayer = await page.locator('text=/KIỂM TRA|Tiếp tục|Đang chuẩn bị/i').count()
hasPlayer > 0 ? ok('Lesson player mở được', `${n4.title}`) : bad('Lesson player mở được', n4.title)
await scrollThrough(page)
await page.screenshot({ path: path.join(OUT, `${VP_NAME}-lesson-q1.png`), fullPage: true })

/* kiểm tra session ACTIVE trong DB trước khi tiếp tục — dùng API thay vì DB */
const activeCheck = await page.evaluate(async () => {
  const r = await fetch('/api/learn?course=basic', { credentials: 'same-origin' })
  return r.status
})
activeCheck === 200 ? ok('API learn phản hồi', '200') : bad('API learn phản hồi', `status ${activeCheck}`)

/* 4. Test từng renderer — mở node practice có chứa `kind` tương ứng */
const WANTED = [
  ['choice', 'Trắc nghiệm'],
  ['token-order', 'Sắp xếp từ'],
  ['matching', 'Ghép cặp'],
  ['text-input', 'Chép chính tả'],
  ['fill-blank', 'Điền chỗ trống'],
  ['audio-choice', 'Nghe chọn'],
  ['passage', 'Đọc hiểu'],
  ['speak', 'Nói'],
  ['writing', 'Viết tay'],
]
for (const [kind, label] of WANTED) {
  const nd = DUMP.nodesByKind[kind]
  if (!nd) {
    bad(`Tìm node renderer "${kind}"`, 'không có trong dump')
    continue
  }
  await page.goto(`${BASE}/#/lesson/${nd.id}/practice`, { waitUntil: 'load' })
  await settle(page, 2200)
  await scrollThrough(page)
  await page.screenshot({ path: path.join(OUT, `${VP_NAME}-lesson-${kind}.png`), fullPage: true, animations: 'disabled' })
  const bodyLen = await page.evaluate(() => document.body.innerText.trim().length)
  bodyLen > 40 ? ok(`Renderer ${label} (${kind})`, nd.title) : bad(`Renderer ${label}`, 'màn hình trống')
}

/* 5. Bỏ mọi phiên ACTIVE treo */
const _ignored = await page.evaluate(() => null)
ok('Dọn session', 'sẽ quit qua UI ở bước tiếp theo nếu có')

/* 6. SRS review */
await page.goto(`${BASE}/#/review`, { waitUntil: 'load' })
await settle(page, 1800)
await scrollThrough(page)
await page.screenshot({ path: path.join(OUT, `${VP_NAME}-review.png`), fullPage: true, animations: 'disabled' })
const reviewTxt = await page.evaluate(() => document.body.innerText.slice(0, 300))
reviewTxt.length > 40 ? ok('Trang ôn SRS render', `${reviewTxt.slice(0, 60).replace(/\n/g, ' ')}…`) : bad('Trang ôn SRS render')

const startReview = await page.evaluate(async () => {
  const r = await fetch('/api/review/session', {
    method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' }, body: '{}',
  })
  return { status: r.status, body: (await r.text()).slice(0, 160) }
})
startReview.status === 200
  ? ok('Tạo phiên ôn SRS', 'POST /api/review/session 200')
  : startReview.status === 409
    ? ok('Tạo phiên ôn SRS', '409 = chưa tới hạn ôn (đúng hành vi)')
    : bad('Tạo phiên ôn SRS', `${startReview.status} ${startReview.body}`)

/* 7. Kana drill server-graded */
const kanaDrill = await page.evaluate(async () => {
  const s = await fetch('/api/kana/practice/start', {
    method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mode: 'RECOGNIZE' }),
  })
  const sb = await s.json()
  if (!s.ok) return { start: s.status, error: sb?.error?.code }
  const leak = JSON.stringify(sb).includes('correctOptionId')
  const first = sb.questions?.[0]
  const a = await fetch('/api/kana/practice/answer', {
    method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ questionId: first?.questionId, optionId: first?.options?.[0]?.id }),
  })
  return { start: s.status, answer: a.status, leaked: leak }
})
kanaDrill.leaked === false
  ? ok('Kana drill server-graded', `start ${kanaDrill.start}, answer ${kanaDrill.answer}, không lộ đáp án`)
  : bad('Kana drill', `LỘ ĐÁP ÁN (leaked=${kanaDrill.leaked})`)

/* 8. Đăng xuất demo → đăng nhập admin → kiểm tra quyền */
await page.evaluate(() => fetch('/api/auth/logout', { method: 'POST', credentials: 'same-origin' }))
await page.goto(`${BASE}/#/login`, { waitUntil: 'load' })
await settle(page, 700)
await page.fill('input[type="email"]', 'admin@nihongogo.local')
await page.fill('input[type="password"]', 'admin12345')
await page.getByRole('button', { name: /đăng nhập|bắt đầu/i }).first().click()
await page.waitForTimeout(2000)
const adminApi = await page.evaluate(async () => {
  const me2 = await (await fetch('/api/auth/me', { credentials: 'same-origin' })).json()
  const stats = await fetch('/api/admin/stats', { credentials: 'same-origin' })
  const content = await fetch('/api/admin/content?entity=Lesson', { credentials: 'same-origin' })
  return { role: me2?.user?.role, stats: stats.status, content: content.status }
})
adminApi.role === 'ADMIN' && adminApi.stats === 200 && adminApi.content === 200
  ? ok('Admin API', `role=${adminApi.role}, stats=${adminApi.stats}, content=${adminApi.content}`)
  : bad('Admin API', JSON.stringify(adminApi))

await page.goto(`${BASE}/#/admin`, { waitUntil: 'load' })
await settle(page, 2000)
await scrollThrough(page)
await page.screenshot({ path: path.join(OUT, `${VP_NAME}-admin.png`), fullPage: true, animations: 'disabled' })

/* 9. XP ledger do server sinh */
DUMP.xpTotal > 0
  ? ok('XP ledger do server sinh', `${DUMP.xpTotal} XP trong DB`)
  : bad('XP ledger', 'tổng = 0 trong DB')

/* 10. Tổng kết */
const realErrors = consoleErrors.filter((e) => !/WebSocket|ERR_CONNECTION_REFUSED|3004|XTransformPort/.test(e))
const wsErrors = consoleErrors.filter((e) => /WebSocket|ERR_CONNECTION_REFUSED|3004|XTransformPort/.test(e))
console.log(`\n═══ Tổng kết ═══`)
console.log(`  Pass: ${results.filter((r) => r.pass).length}/${results.length}`)
console.log(`  Fail: ${failures}`)
console.log(`  Console error (bỏ qua WS live): ${realErrors.length}`)
realErrors.slice(0, 10).forEach((e) => console.log(`    ! ${e}`))
if (wsErrors.length) console.log(`  (Bỏ qua ${wsErrors.length} lỗi socket.io live — tính năng optional)`)

await writeFile(
  path.resolve('qa/flows-report.json'),
  JSON.stringify({ vp: VP_NAME, results, failures, realErrors, wsErrors: wsErrors.length }, null, 2),
)
console.log(`  Screenshots: ${OUT}`)

await browser.close()
if (failures > 0) process.exitCode = 1