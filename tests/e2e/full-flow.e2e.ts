/**
 * NihongoGo — E2E luồng vàng (spec bắt buộc):
 *   1. Đăng ký tài khoản mới (UI)
 *   2. Đăng xuất → Đăng nhập lại (UI)
 *   3. Học bài mẫu (node kana đầu tiên) — trả lời ĐÚNG toàn bộ bằng đáp án
 *      đọc thẳng từ DB (server-authoritative), đủ các renderer: choice,
 *      audio-choice, fill-blank, token-order, text-input, matching
 *   4. Test-out ("Nhảy tới đây?") ở bài khóa — đạt ≥80% → server đánh dấu
 *      hoàn thành mọi bài trước đó (không cộng XP ảo)
 *   5. Kiểm chứng unlock + XP ledger
 *
 * Chạy: bun run test:e2e (cần dev server :3000 — Playwright tự khởi động nếu thiếu)
 */
process.env.DATABASE_URL ||= 'file:../db/custom.db'

import { expect, test, type Locator, type Page } from '@playwright/test'
import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

/* ------------------------------ DB utilities ------------------------------- */

interface QData {
  kind: 'choice' | 'audio-choice' | 'fill-blank' | 'token-order' | 'text-input' | 'matching' | 'speak' | 'writing' | 'passage'
  options?: { id: string; text: string }[]
  tokens?: { id: string; text: string }[]
  distractors?: { id: string; text: string }[]
  pairs?: { id: string; left: { text: string }; right: { text: string } }[]
}
interface QCorrect {
  optionId?: string
  answers?: string[]
  tokenOrder?: string[]
  pairs?: Record<string, string>
}

async function getQuestions(ids: string[]) {
  const rows = await db.question.findMany({ where: { id: { in: ids } } })
  const byId = new Map(rows.map((q) => [q.id, q]))
  return ids.map((id) => {
    const q = byId.get(id)!
    return {
      id,
      data: (typeof q.data === 'string' ? JSON.parse(q.data) : q.data) as QData,
      correct: (typeof q.correctData === 'string' ? JSON.parse(q.correctData) : q.correctData) as QCorrect,
    }
  })
}

/** Đọc thứ tự câu hỏi của phiên ACTIVE mới nhất của user (state.entries) — poll chờ UI tạo session. */
async function getSessionQuestions(userId: string, mode: 'LESSON' | 'JUMP') {
  const deadline = Date.now() + 15_000
  let s: Awaited<ReturnType<typeof db.lessonSession.findFirst>> = null
  while (Date.now() < deadline) {
    s = await db.lessonSession.findFirst({
      where: { userId, sessionType: mode, status: 'ACTIVE' },
      orderBy: { startedAt: 'desc' },
    })
    if (s) break
    await new Promise((r) => setTimeout(r, 400))
  }
  if (!s) throw new Error(`Không tìm thấy phiên ${mode} ACTIVE sau 15s`)
  const state = JSON.parse(s.state) as { entries: { qid: string; sub: number }[] }
  return { sessionId: s.id, questions: await getQuestions(state.entries.map((e) => e.qid)) }
}

/* ------------------------------ UI utilities ------------------------------- */

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

/** Click nút trong nhóm lựa chọn có CHÍNH XÁC text (span.font-extrabold). */
async function clickChoiceOption(page: Page, text: string) {
  const span = page
    .locator('div[aria-label="Các lựa chọn"] span.font-extrabold', { hasText: new RegExp(`^${escapeRe(text)}$`) })
    .first()
  await span.locator('xpath=ancestor::button[1]').click()
}

/** Click nút có textContent đúng bằng text (dùng cho fill-blank, token, matching). */
async function clickExactButton(scope: Locator, text: string) {
  const buttons = scope.locator('button')
  const n = await buttons.count()
  for (let i = 0; i < n; i++) {
    const b = buttons.nth(i)
    if ((await b.textContent())?.trim() === text && await b.isEnabled()) {
      await b.click()
      return
    }
  }
  throw new Error(`Không tìm thấy nút: ${text}`)
}

/** Trả lời câu hỏi hiện tại theo kind — dùng đáp án đọc từ DB. */
async function answerCorrectly(page: Page, q: { data: QData; correct: QCorrect }) {
  const { kind } = q.data
  if (kind === 'choice' || kind === 'audio-choice') {
    const opt = q.data.options!.find((o) => o.id === q.correct.optionId)!
    await clickChoiceOption(page, opt.text)
  } else if (kind === 'fill-blank') {
    const opt = q.data.options!.find((o) => o.id === q.correct.optionId)!
    await clickExactButton(page.locator('main'), opt.text)
  } else if (kind === 'token-order') {
    const textById = new Map([...(q.data.tokens ?? []), ...(q.data.distractors ?? [])].map((t) => [t.id, t.text]))
    const bank = page.locator('div[aria-label="Kho từ"]')
    for (const id of q.correct.tokenOrder!) {
      await clickExactButton(bank, textById.get(id)!)
    }
  } else if (kind === 'text-input') {
    await page.locator('main input').first().fill(q.correct.answers![0])
  } else if (kind === 'matching') {
    const left = page.locator('div[aria-label="Cột ký tự"]')
    const right = page.locator('div[aria-label="Cột nghĩa"]')
    for (const p of q.data.pairs!) {
      await clickExactButton(left, p.left.text)
      await clickExactButton(right, q.correct.pairs![p.id])
    }
  } else {
    throw new Error(`E2E chưa hỗ trợ kind: ${kind}`)
  }
}

/** Vòng lặp chơi hết một phiên: trả lời → KIỂM TRA → feedback → TIẾP TỤC … → màn hoàn thành. */
async function playSession(page: Page, userId: string, mode: 'LESSON' | 'JUMP') {
  const { questions } = await getSessionQuestions(userId, mode)
  for (let i = 0; i < questions.length; i++) {
    await answerCorrectly(page, questions[i])
    const submit = page.getByRole('button', { name: /^KIỂM TRA$/ })
    await expect(submit).toBeEnabled({ timeout: 30_000 })
    await submit.click()
    await expect(page.getByText('Chính xác!', { exact: true })).toBeVisible()
    await page.getByRole('button', { name: /TIẾP TỤC/ }).click()
    // Nhịp người thật: server từ chối completeSession nếu tổng thời gian <
    // 600ms/câu (anti-cheat) — CI runner nhanh hơn sandbox nên phải đảm bảo
    // tối thiểu ~700ms/câu để phiên hợp lệ.
    await page.waitForTimeout(700)
  }
  // Màn tổng kết (accuracy 100%) — exact để tránh trùng đoạn mô tả "Độ chính xác 100%…"
  await expect(page.getByText('100%', { exact: true })).toBeVisible({ timeout: 20_000 })
  return questions.length
}

/* --------------------------------- Tests ----------------------------------- */

let userId = ''
const email = `e2e-${Date.now()}@playwright.test`
const password = 'E2ePass#2026'

/**
 * Login qua API để CHUẨN BỊ phiên cho các test sau (mỗi test có browser context
 * riêng → cookie không chia sẻ). Test 2 mới là nơi kiểm thử luồng login UI.
 * POST không kèm Origin → assertSameOrigin cho qua (như curl).
 */
async function apiLogin(page: Page) {
  const res = await page.request.post('/api/auth/login', { data: { email, password } })
  expect(res.ok()).toBeTruthy()
}

test.describe.configure({ mode: 'serial' })

test('1) Đăng ký tài khoản mới', async ({ page }) => {
  await page.goto('/#/register')
  await page.getByLabel('Tên hiển thị', { exact: true }).fill('E2E Playwright')
  await page.getByLabel('Tên đăng nhập', { exact: true }).fill(`e2e_${Date.now().toString(36)}`)
  await page.getByLabel('Email', { exact: true }).fill(email)
  await page.getByLabel('Mật khẩu', { exact: true }).fill(password)
  await page.getByRole('button', { name: /bắt đầu hành trình/i }).click()

  // Đăng ký thành công → chuyển sang onboarding
  await expect(page).toHaveURL(/#\/onboarding/, { timeout: 20_000 })
  const user = await db.user.findUnique({ where: { email } })
  expect(user).toBeTruthy()
  userId = user!.id

  // Bỏ onboarding bằng DB (E2E tập trung luồng học — onboarding đã có QA riêng)
  await db.userProfile.updateMany({ where: { userId }, data: { onboardedAt: new Date() } })
})

test('2) Đăng xuất rồi đăng nhập lại', async ({ page }) => {
  await page.goto('/')
  // Logout qua API (setup nhanh; luồng login UI mới là đối tượng kiểm thử)
  await page.request.post('/api/auth/logout')
  await page.goto('/#/login')
  // Service Worker (mới activate trong context này) có thể navigate-clobber
  // mất fragment ngay sau goto → đợi settle rồi đảm bảo hash đúng.
  await page.waitForTimeout(1_000)
  if (!page.url().includes('#/login')) {
    await page.evaluate(() => {
      location.hash = '#/login'
    })
  }
  await expect(page.getByRole('heading', { name: 'Đăng nhập' })).toBeVisible({ timeout: 20_000 })

  await page.getByLabel('Email', { exact: true }).fill(email)
  await page.getByLabel('Mật khẩu', { exact: true }).fill(password)
  await page.getByRole('button', { name: /^đăng nhập$/i }).click()

  // Về trang chủ + session persist
  await expect(page).toHaveURL(/#\/$/, { timeout: 20_000 })
  const me = await page.request.get('/api/auth/me')
  expect(me.ok()).toBeTruthy()
  expect((await me.json()).user.email).toBe(email)
})

test('3) Học bài mẫu (node kana đầu tiên) — trả lời đúng toàn bộ', async ({ page }) => {
  await apiLogin(page)
  await page.goto('/')
  await expect(page.locator('button[aria-label="Chọn khóa học"]')).toBeVisible({ timeout: 30_000 })

  // Mở ải đầu tiên đang sẵn sàng (bong bóng "Bắt đầu")
  await page.locator('button[aria-label*="sẵn sàng"]').first().click()

  const n = await playSession(page, userId, 'LESSON')
  expect(n).toBeGreaterThanOrEqual(10)

  // Về Learning Path từ màn tổng kết
  await page.getByRole('button', { name: /Tiếp tục hành trình/ }).click()
  await expect(page.locator('button[aria-label="Chọn khóa học"]')).toBeVisible({ timeout: 20_000 })

  // Node k1 đã hoàn thành trong DB
  const done = await db.nodeProgress.findFirst({
    where: { userId, node: { key: 'k1', lesson: { order: 1 } }, completedAt: { not: null } },
  })
  expect(done).toBeTruthy()

  // XP được ghi ledger (reason LESSON_COMPLETE) — server-authoritative
  const xp = await db.xPTransaction.count({ where: { userId, reason: 'LESSON_COMPLETE' } })
  expect(xp).toBeGreaterThanOrEqual(1)
})

test('4) Test-out "Nhảy tới đây?" — vượt bài kiểm tra, mở khóa + đánh dấu bài trước', async ({ page }) => {
  await apiLogin(page)
  await page.goto('/')
  await expect(page.locator('button[aria-label="Chọn khóa học"]')).toBeVisible({ timeout: 30_000 })

  // Nút "Nhảy tới đây?" ở bài 2 (đang khóa)
  const jumpBtn = page.locator('button[aria-label^="Bỏ qua tới bài 2"]').first()
  await jumpBtn.scrollIntoViewIfNeeded()
  await jumpBtn.click()
  await page.getByRole('button', { name: /Làm bài kiểm tra/ }).click()

  const n = await playSession(page, userId, 'JUMP')
  expect(n).toBeLessThanOrEqual(10)

  await page.getByRole('button', { name: /Về Learning Path/ }).click()
  await expect(page.locator('button[aria-label="Chọn khóa học"]')).toBeVisible({ timeout: 20_000 })

  // TOÀN BỘ node của bài 1 được đánh dấu hoàn thành (kể cả chưa học)
  const lesson1 = await db.lesson.findFirst({
    where: { order: 1 },
    include: {
      nodes: {
        include: {
          exercises: { select: { id: true } },
          nodeProgress: { where: { userId } },
        },
      },
    },
  })
  const playable = lesson1!.nodes.filter((nd) => nd.exercises.length > 0 || nd.nodeProgress.length > 0)
  for (const nd of playable) {
    const p = nd.nodeProgress[0]
    expect(p, `node ${nd.key} phải có tiến độ`).toBeTruthy()
    expect(['COMPLETED', 'MASTERED']).toContain(p!.status)
    expect(p!.completedAt).toBeTruthy()
  }

  // KHÔNG cộng XP ảo cho các bài bị bỏ qua: ledger chỉ có XP từ LESSON hoàn
  // thành thật + JUMP test, không có bản ghi "trả sau" cho bài bị skip.
  const reasons = await db.xPTransaction.groupBy({ by: ['reason'], where: { userId } })
  const reasonSet = new Set(reasons.map((r) => r.reason))
  for (const r of reasonSet) expect(r).not.toMatch(/SKIP|AUTO|FAKE/)

  // Bài 2 đã mở khóa: có node AVAILABLE trong learn view
  const learn = await page.request.get('/api/learn')
  const data = (await learn.json()) as {
    sections: { lessons: { order: number; nodes: { state: string }[] }[] }[]
  }
  const lesson2 = data.sections.flatMap((s) => s.lessons).find((l) => l.order === 2)
  expect(lesson2).toBeTruthy()
  expect(lesson2!.nodes.some((nd) => nd.state === 'AVAILABLE' || nd.state === 'IN_PROGRESS')).toBe(true)
})

test.afterAll(async () => {
  await db.$disconnect()
})
