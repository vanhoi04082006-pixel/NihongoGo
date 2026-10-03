/** Verify speak + jump-ahead trên production thật (browser + mic grant). */
import { chromium } from 'playwright'
const B = 'https://nihongogo-chi.vercel.app'
const b = await chromium.launch()
const ctx = await b.newContext({
  viewport: { width: 1440, height: 900 },
  locale: 'vi-VN',
  timezoneId: 'Asia/Ho_Chi_Minh',
  permissions: ['microphone'],
})
const p = await ctx.newPage()
const errs = []
p.on('console', (m) => { if (m.type() === 'error') errs.push(m.text().slice(0, 130)) })
p.on('pageerror', (e) => errs.push('PAGEERROR ' + String(e).slice(0, 130)))

await p.goto(B + '/#/login', { waitUntil: 'load' })
await p.waitForTimeout(1500)
await p.fill('input[type="email"]', 'demo@nihongogo.local')
await p.fill('input[type="password"]', 'demo12345')
await p.getByRole('button', { name: /đăng nhập|bắt đầu/i }).first().click()
await p.waitForTimeout(3000)
console.log('ĐÃ ĐĂNG NHẬP')

/* ---- 1. Voice Nhật có sẵn không? ---- */
const voices = await p.evaluate(async () => {
  const s = window.speechSynthesis
  s?.getVoices?.()
  await new Promise((r) => setTimeout(r, 1200))
  return { total: s?.getVoices?.().length ?? 0, ja: s?.getVoices?.().filter((v) => (v.lang || '').toLowerCase().startsWith('ja')).map((v) => v.name) ?? [] }
})
console.log('VOICES:', JSON.stringify(voices))

/* ---- 2. Bảng cảnh báo giọng Nhật ---- */
await p.goto(B + '/#/learn', { waitUntil: 'load' })
await p.waitForTimeout(3000)
const notice = await p.locator('text=/chưa có giọng đọc tiếng Nhật/i').count()
console.log('BẢNG CẢNH BÁO GIỌNG NHẬT:', notice > 0 ? 'HIỆN ✓' : 'KHÔNG HIỆN (đã có giọng Nhật hoặc đã đóng)')

/* ---- 3. Nút loa có phát được không ---- */
const audio = await p.evaluate(() => {
  const btns = [...document.querySelectorAll('button')].filter((x) => /audio-label|Phát âm|Nghe|audio/i.test((x.getAttribute('aria-label') || '') + (x.textContent || '')))
  return btns.length
})
console.log('NÚT LOA trên learn:', audio)

/* ---- 4. Tính năng nói: mở node có SPEAK ---- */
const speakNode = 'cmusms6ol00atlwmhgsljk2ehv'
await p.goto(`${B}/#/lesson/${speakNode}/practice`, { waitUntil: 'load' })
await p.waitForTimeout(3000)
const speakUI = await p.evaluate(() => {
  const t = document.body.innerText
  return {
    hasMic: !!document.querySelector('button[aria-label*="Ghi âm" i], button[aria-label*="mic" i], button[aria-label*="âm thanh" i], button[aria-label*="Nói" i]'),
    hasSkip: /Bỏ qua|bỏ qua không dùng micro/i.test(t),
    hasRecord: /Ghi âm|Bắt đầu ghi|Nhấn để nói|Đọc to|phát âm/i.test(t),
    snippet: t.replace(/\n+/g, ' | ').slice(0, 220),
  }
})
console.log('SPEAK UI:', JSON.stringify(speakUI))

/* ---- 5. Jump ahead: tìm nút "Nhảy tới" ---- */
await p.goto(B + '/#/learn', { waitUntil: 'load' })
await p.waitForTimeout(2500)
const jumpBtn = await p.evaluate(() => {
  const all = [...document.querySelectorAll('button,a')]
  return all.filter((x) => /nhảy tới|bỏ qua tới|jump/i.test(x.textContent + ' ' + (x.getAttribute('aria-label') || ''))).map((x) => (x.getAttribute('aria-label') || x.textContent || '').trim().slice(0, 60))
})
console.log('NÚT NHẢY TỚI:', JSON.stringify(jumpBtn))

/* ---- 6. Quiz hằng ngày (tính năng khác) ---- */
const challenge = await p.evaluate(async () => {
  const r = await fetch('/api/challenge', { credentials: 'same-origin' })
  return r.status
})
console.log('API challenge:', challenge)

console.log('CONSOLE ERRORS:', errs.length, errs.slice(0, 4).join(' | '))
await b.close()
process.exit(0)