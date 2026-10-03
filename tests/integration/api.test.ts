/// <reference types="bun-types" />
/**
 * Integration tests — API route handlers + service pipeline trên SQLite riêng
 * (tests/.tmp/integration.db — tự setup, không đụng DB dev).
 * Chạy: bun test tests/integration/api.test.ts
 *
 * Phạm vi (critical path):
 * - Auth: register / duplicate / login / sai mật khẩu / me / logout
 * - CSRF/origin: evil origin bị 403; double-submit token hợp lệ được qua
 * - RBAC: USER gọi admin API → 403
 * - Lesson flow: tạo phiên từ node thật (HTTP) + trả lời đúng (đáp án lấy từ DB)
 * - Hearts: trả lời sai mode LESSON → tim giảm, không bao giờ âm
 * - XP pipeline (service): submit + complete → XPTransaction ledger đúng số
 * - Anti-cheat: phiên quá ngắn bị từ chối; double-complete chỉ ăn 1 lần
 * - Optimistic lock: updateMany với state cũ không ghi được (0 dòng)
 */
import { execSync } from 'node:child_process'
import { mkdirSync, readFileSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { afterAll, beforeAll, describe, expect, test } from 'bun:test'

// ── Database riêng cho test — PHẢI set trước khi import bất kỳ module DB nào ──
//
// Schema đang dùng provider `postgresql` (production Neon). Test integration từng
// tự tạo DB sạch: với Postgres không thể "rm file" nên cần một database riêng.
// - Có `TEST_DATABASE_URL` → dùng database đó (KHÔNG được trỏ vào DB production).
// - Không có              → skip toàn bộ suite, in hướng dẫn.
//
// Còn SQLite thì dùng file tạm trong tests/.tmp như trước.
const TMP_DIR = join(import.meta.dir, '..', '.tmp')
const DB_FILE = join(TMP_DIR, 'integration.db')
const TEST_DB_URL = process.env.TEST_DATABASE_URL
const USING_SQLITE = !TEST_DB_URL

const SCHEMA_PROVIDER = (readFileSync(join(import.meta.dir, '..', '..', 'prisma', 'schema.prisma'), 'utf8')
  .match(/provider\s*=\s*"(\w+)"/)?.[1] ?? 'postgresql')

const SUITE_SKIPPED = SCHEMA_PROVIDER === 'postgresql' && !TEST_DB_URL
if (!SUITE_SKIPPED) {
  process.env.DATABASE_URL = USING_SQLITE ? `file:${DB_FILE}` : TEST_DB_URL!
} else {
  console.warn(
    '\n⚠ SKIP tests/integration: schema dùng provider "postgresql" nhưng thiếu TEST_DATABASE_URL.\n' +
      '  Đặt biến môi trường trỏ tới database Postgres RIÊNG cho test rồi chạy lại:\n' +
      '    TEST_DATABASE_URL="postgresql://user:pass@host:5432/nihongogo_test?sslmode=require"\n' +
      '  (Tuyệt đối không dùng database production.)\n' +
      '  Unit test (tests/unit) vẫn chạy đầy đủ và không cần database.\n',
  )
}

/** Suite chỉ chạy khi có DB test hợp lệ (xem SUITE_SKIPPED ở trên). */
const describeIfDb = SUITE_SKIPPED ? describe.skip : describe

type AnyRecord = Record<string, any>

let registerPost: any, loginPost: any, logoutPost: any, meGet: any
let adminContentGet: any, adminContentPost: any
let sessionsPost: any, answerPost: any
let lessonSession: AnyRecord // module service
let db: any

function req(path: string, init: RequestInit & { cookies?: Record<string, string> } = {}) {
  const { cookies, headers, ...rest } = init
  const cookieHeader = cookies ? Object.entries(cookies).map(([k, v]) => `${k}=${v}`).join('; ') : undefined
  return new NextRequestImpl(`http://localhost:3000${path}`, {
    ...rest,
    headers: {
      ...(rest.body ? { 'Content-Type': 'application/json' } : {}),
      ...(cookieHeader ? { Cookie: cookieHeader } : {}),
      ...(headers ?? {}),
    },
  })
}

// NextRequest constructor — import động sau khi env đã set
let NextRequestImpl: any

async function json(res: Response): Promise<AnyRecord> {
  return (await res.json()) as AnyRecord
}

beforeAll(async () => {
  if (SUITE_SKIPPED) return
  // 1) DB sạch + schema + seed
  if (USING_SQLITE) {
    rmSync(DB_FILE, { force: true })
    mkdirSync(TMP_DIR, { recursive: true })
  }
  execSync('bunx prisma db push --skip-generate --accept-data-loss --force-reset', {
    cwd: join(import.meta.dir, '..', '..'),
    env: { ...process.env, DATABASE_URL: process.env.DATABASE_URL! },
    stdio: 'pipe',
  })
  execSync('bun prisma/seed.ts', {
    cwd: join(import.meta.dir, '..', '..'),
    env: { ...process.env, DATABASE_URL: process.env.DATABASE_URL! },
    stdio: 'pipe',
  })

  // 2) Import SAU khi env đã đúng
  const nextServer = await import('next/server')
  NextRequestImpl = nextServer.NextRequest
  ;({ db } = await import('../../src/lib/db'))
  registerPost = (await import('../../src/app/api/auth/register/route')).POST
  loginPost = (await import('../../src/app/api/auth/login/route')).POST
  logoutPost = (await import('../../src/app/api/auth/logout/route')).POST
  meGet = (await import('../../src/app/api/auth/me/route')).GET
  adminContentGet = (await import('../../src/app/api/admin/content/route')).GET
  adminContentPost = (await import('../../src/app/api/admin/content/route')).POST
  sessionsPost = (await import('../../src/app/api/lesson-sessions/route')).POST
  answerPost = (await import('../../src/app/api/lesson-sessions/[id]/answer/route')).POST
  lessonSession = await import('../../src/server/services/lessonSession')
}, 120_000)

afterAll(async () => {
  await db?.$disconnect?.()
})

/* --------------------------------- Helpers --------------------------------- */

async function loginDemo() {
  const res = await loginPost(
    req('/api/auth/login', { method: 'POST', body: JSON.stringify({ email: 'demo@nihongogo.local', password: 'demo12345' }) })
  )
  expect(res.status).toBe(200)
  const token = res.cookies.get('ngg_session')?.value
  expect(token).toBeTruthy()
  return token as string
}

async function loginAdmin() {
  const res = await loginPost(
    req('/api/auth/login', { method: 'POST', body: JSON.stringify({ email: 'admin@nihongogo.local', password: 'admin12345' }) })
  )
  expect(res.status).toBe(200)
  return res.cookies.get('ngg_session')?.value as string
}

/* ---------------------------------- Tests ---------------------------------- */

describeIfDb('Auth flow (HTTP handlers)', () => {
  test('register tạo user + session cookie', async () => {
    const res = await registerPost(
      req('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({ email: 'it1@test.vn', username: 'it_user1', password: 'Passw0rd!123' }),
      })
    )
    expect(res.status).toBe(200)
    const body = await json(res)
    expect(body.user.username).toBe('it_user1')
    expect(res.cookies.get('ngg_session')?.value).toBeTruthy()
  })

  test('register trùng email → 409', async () => {
    const res = await registerPost(
      req('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({ email: 'it1@test.vn', username: 'other_name', password: 'Passw0rd!123' }),
      })
    )
    expect(res.status).toBe(409)
  })

  test('register email sai định dạng → 400', async () => {
    const res = await registerPost(
      req('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({ email: 'khong-hop-le', username: 'x_y_z', password: 'Passw0rd!123' }),
      })
    )
    expect(res.status).toBe(400)
  })

  test('login sai mật khẩu → 401 (không phân biệt sai email/mật khẩu)', async () => {
    const res = await loginPost(
      req('/api/auth/login', { method: 'POST', body: JSON.stringify({ email: 'demo@nihongogo.local', password: 'sai-roi' }) })
    )
    expect(res.status).toBe(401)
    const body = await json(res)
    expect(body.error.code).toBe('UNAUTHORIZED')
  })

  test('me với cookie hợp lệ → user demo', async () => {
    const token = await loginDemo()
    const res = await meGet(req('/api/auth/me', { cookies: { ngg_session: token } }))
    expect(res.status).toBe(200)
    const body = await json(res)
    expect(body.user.email).toBe('demo@nihongogo.local')
  })

  test('me không có cookie → 200 với user null (bootstrap pattern)', async () => {
    const res = await meGet(req('/api/auth/me'))
    expect(res.status).toBe(200)
    const body = await json(res)
    expect(body.user).toBeNull()
  })

  test('logout xóa session (token cũ không dùng lại được)', async () => {
    const token = await loginDemo()
    const res = await logoutPost(req('/api/auth/logout', { method: 'POST', cookies: { ngg_session: token } }))
    expect(res.status).toBe(200)
    const res2 = await meGet(req('/api/auth/me', { cookies: { ngg_session: token } }))
    const body2 = await json(res2)
    expect(body2.user).toBeNull() // session đã bị xóa khỏi DB
    // Token cũ cũng không login được API khác (dùng mutation cần auth)
    const res3 = await sessionsPost(
      req('/api/lesson-sessions', { method: 'POST', cookies: { ngg_session: token }, body: JSON.stringify({ nodeId: 'x' }) })
    )
    expect(res3.status).toBe(401)
  })
})

describeIfDb('CSRF / origin protection', () => {
  test('POST với Origin lạ → 403 (blocked)', async () => {
    const res = await loginPost(
      req('/api/auth/login', {
        method: 'POST',
        headers: { Origin: 'https://evil.example' },
        body: JSON.stringify({ email: 'demo@nihongogo.local', password: 'demo12345' }),
      })
    )
    expect(res.status).toBe(403)
    const body = await json(res)
    expect(body.error.message).toContain('origin')
  })

  test('Origin lạ + double-submit token khớp → qua origin-check (đúng hướng xử lý, sai credentials → 401)', async () => {
    const res = await loginPost(
      req('/api/auth/login', {
        method: 'POST',
        headers: { Origin: 'https://proxy.example', 'x-csrf-token': 'abcdef1234567890abcdef' },
        cookies: { ngg_csrf: 'abcdef1234567890abcdef' },
        body: JSON.stringify({ email: 'demo@nihongogo.local', password: 'demo12345' }),
      })
    )
    expect(res.status).toBe(200) // token khớp → origin pass → login đúng
  })

  test('Origin lạ + token lệch cookie → 403', async () => {
    const res = await loginPost(
      req('/api/auth/login', {
        method: 'POST',
        headers: { Origin: 'https://evil.example', 'x-csrf-token': 'abcdef1234567890abcdef' },
        cookies: { ngg_csrf: 'khac_hoan_toan_987654' },
        body: JSON.stringify({ email: 'demo@nihongogo.local', password: 'demo12345' }),
      })
    )
    expect(res.status).toBe(403)
  })

  test('Origin cùng host (localhost) → pass không cần token', async () => {
    const res = await loginPost(
      req('/api/auth/login', {
        method: 'POST',
        headers: { Origin: 'http://localhost:3000' },
        body: JSON.stringify({ email: 'demo@nihongogo.local', password: 'demo12345' }),
      })
    )
    expect(res.status).toBe(200)
  })
})

describeIfDb('RBAC — admin API chỉ dành cho EDITOR/ADMIN', () => {
  test('USER gọi GET admin content → 403', async () => {
    const token = await loginDemo()
    const res = await adminContentGet(req('/api/admin/content?entity=lesson', { cookies: { ngg_session: token } }))
    expect(res.status).toBe(403)
  })

  test('USER gọi POST admin content → 403', async () => {
    const token = await loginDemo()
    const res = await adminContentPost(
      req('/api/admin/content?entity=lesson', {
        method: 'POST',
        cookies: { ngg_session: token },
        body: JSON.stringify({}),
      })
    )
    expect(res.status).toBe(403)
  })

  test('ADMIN gọi GET admin content → 200', async () => {
    const token = await loginAdmin()
    const res = await adminContentGet(req('/api/admin/content?entity=lesson', { cookies: { ngg_session: token } }))
    expect(res.status).toBe(200)
  })
})

describeIfDb('Lesson flow (HTTP) — create + answer', () => {
  test('tạo phiên từ node thật + trả lời ĐÚNG (đáp án đọc từ DB) → correct', async () => {
    const token = await loginDemo()
    // Node PUBLISHED đầu tiên của bài 1
    const node = await db.lessonNode.findFirst({
      where: { status: 'PUBLISHED', lesson: { order: 1 }, exercises: { some: { status: 'PUBLISHED' } } },
      include: { exercises: { where: { status: 'PUBLISHED' }, orderBy: { order: 'asc' }, include: { questions: { orderBy: { order: 'asc' } } } } },
      orderBy: { order: 'asc' },
    })
    expect(node).toBeTruthy()
    const firstQ = node.exercises.flatMap((e: AnyRecord) => e.questions)[0]
    expect(firstQ).toBeTruthy()

    const created = await sessionsPost(
      req('/api/lesson-sessions', {
        method: 'POST',
        cookies: { ngg_session: token },
        body: JSON.stringify({ nodeId: node.id, mode: 'PRACTICE' }),
      })
    )
    expect(created.status).toBe(200)
    const createdBody = await json(created)
    const sessionId = createdBody.session.id
    expect(sessionId).toBeTruthy()
    expect(createdBody.session.total).toBeGreaterThan(0)
    expect(createdBody.question).toBeTruthy()

    // Trả lời đúng câu đầu: đọc correctData trực tiếp từ DB (test có quyền)
    const correct = JSON.parse(firstQ.correctData) as { optionId?: string; answers?: string[] }
    const qData = JSON.parse(firstQ.data) as { kind: string }
    const answer: AnyRecord = {}
    if (correct.optionId) answer.optionId = correct.optionId
    else if (correct.answers?.length) answer.text = correct.answers[0]

    const answered = await answerPost(
      req(`/api/lesson-sessions/${sessionId}/answer`, {
        method: 'POST',
        cookies: { ngg_session: token },
        body: JSON.stringify({ answer, timeSpentMs: 3000 }),
      }),
      { params: Promise.resolve({ id: sessionId }) }
    )
    expect(answered.status).toBe(200)
    const fb = await json(answered)
    expect(fb.correct).toBe(true)
    expect(fb.session.index).toBe(1)
    expect(qData.kind).toBeTruthy()
  })

  test('sai câu trong mode LESSON → tim giảm 1, không âm', async () => {
    const token = await loginDemo()
    const node = await db.lessonNode.findFirst({
      where: { status: 'PUBLISHED', lesson: { order: 1 }, exercises: { some: { status: 'PUBLISHED' } } },
      include: { exercises: { where: { status: 'PUBLISHED' }, include: { questions: { orderBy: { order: 'asc' } } } } },
      orderBy: { order: 'asc' },
    })
    const demo = await db.user.findUnique({ where: { email: 'demo@nihongogo.local' } })
    // Reset tim về 5 cho deterministic
    await db.userHeart.upsert({ where: { userId: demo.id }, update: { hearts: 5, updatedAt: new Date() }, create: { userId: demo.id, hearts: 5, maxHearts: 5 } })

    const created = await json(await sessionsPost(
      req('/api/lesson-sessions', { method: 'POST', cookies: { ngg_session: token }, body: JSON.stringify({ nodeId: node.id, mode: 'LESSON' }) })
    ))
    const sessionId = created.session.id

    // Trả lời SAI cố ý: optionId không tồn tại / text rác
    const wrong = await json(await answerPost(
      req(`/api/lesson-sessions/${sessionId}/answer`, {
        method: 'POST',
        cookies: { ngg_session: token },
        body: JSON.stringify({ answer: { optionId: 'khong-ton-tai', text: 'zzz' }, timeSpentMs: 2000 }),
      }),
      { params: Promise.resolve({ id: sessionId }) }
    ))
    expect(wrong.correct).toBe(false)
    const heartRow = await db.userHeart.findUnique({ where: { userId: demo.id } })
    expect(heartRow.hearts).toBe(4) // 5 → 4, KHÔNG âm

    // Quit phiên để không ảnh hưởng test khác
    await lessonSession.quitSession(demo.id, sessionId)
  })
})

describeIfDb('XP pipeline + anti-cheat (service layer)', () => {
  async function craftSession(opts: { startedAtMs: number; entries: number; mode?: string }): Promise<{ id: string; userId: string; answers: AnyRecord[] }> {
    const demo = await db.user.findUnique({ where: { email: 'demo@nihongogo.local' } })
    const answers: AnyRecord[] = []
    const entries: { qid: string; sub: number; inline?: unknown }[] = []
    for (let i = 0; i < opts.entries; i++) {
      const qid = `it-${i}`
      entries.push({
        qid,
        sub: 0,
        inline: {
          type: 'SELECT_MEANING',
          prompt: 'Integration',
          data: { kind: 'choice', promptJa: `てすと${i}`, options: [{ id: 'a', text: 'đúng' }, { id: 'b', text: 'sai' }, { id: 'c', text: 'khác' }] },
          correct: { optionId: 'a' },
        },
      })
      answers.push({ optionId: 'a' })
    }
    const state = {
      entries,
      index: 0,
      correctKeys: [],
      wrongKeys: [],
      combo: 0,
      maxCombo: 0,
      hearts: 5,
      startedAt: Date.now() - opts.startedAtMs,
    }
    const session = await db.lessonSession.create({
      data: {
        userId: demo.id,
        sessionType: opts.mode ?? 'PRACTICE',
        status: 'ACTIVE',
        state: JSON.stringify(state),
        totalQuestions: opts.entries,
        startedAt: new Date(Date.now() - opts.startedAtMs),
      },
    })
    return { id: session.id, userId: demo.id, answers }
  }

  test('submit đúng hết + complete → XP ledger đúng công thức, streak touch', async () => {
    const { id, userId, answers } = await craftSession({ startedAtMs: 5_000, entries: 2 })
    for (const a of answers) {
      const fb = await lessonSession.submitAnswer(userId, id, a, 1500)
      expect(fb.correct).toBe(true)
    }
    const xpBefore = (await db.xPTransaction.count({ where: { userId, reason: 'PRACTICE' } }))
    const summary = await lessonSession.completeSession(userId, id)
    // PRACTICE: 2 đúng × 10 × 50% = 10 XP
    expect(summary.passed).toBe(true)
    expect(summary.correctCount).toBe(2)
    expect(summary.xp.total).toBe(10)
    const xpAfter = (await db.xPTransaction.count({ where: { userId, reason: 'PRACTICE' } }))
    expect(xpAfter).toBe(xpBefore + 1) // đúng 1 transaction — không double-XP
    const row = await db.lessonSession.findUnique({ where: { id } })
    expect(row.status).toBe('COMPLETED')
    expect(row.xpEarned).toBe(10)
  })

  test('double-complete → bị từ chối (không cộng XP lần 2)', async () => {
    const { id, userId, answers } = await craftSession({ startedAtMs: 5_000, entries: 1 })
    await lessonSession.submitAnswer(userId, id, answers[0], 1500)
    const first = await lessonSession.completeSession(userId, id)
    expect(first.passed).toBe(true)
    await expect(lessonSession.completeSession(userId, id)).rejects.toThrow()
  })

  test('phiên hoàn thành quá nhanh → bị chặn (anti-cheat thời gian)', async () => {
    const { id, userId, answers } = await craftSession({ startedAtMs: 0, entries: 5 })
    for (const a of answers) await lessonSession.submitAnswer(userId, id, a, 100)
    // 5 câu × 600ms = 3s tối thiểu; startedAt = now → quá ngắn
    await expect(lessonSession.completeSession(userId, id)).rejects.toThrow('thời gian quá ngắn')
  })

  test('optimistic lock: updateMany với state cũ ghi 0 dòng', async () => {
    const { id, userId, answers } = await craftSession({ startedAtMs: 5_000, entries: 2 })
    const stale = await db.lessonSession.findUnique({ where: { id } })
    // Giả lập request khác đã ghi state mới
    await lessonSession.submitAnswer(userId, id, answers[0], 1000)
    // Request cũ dùng snapshot state cũ → KHÔNG được ghi đè
    const n = await db.lessonSession.updateMany({
      where: { id, state: stale.state },
      data: { correctCount: 999 },
    })
    expect(n.count).toBe(0)
    const row = await db.lessonSession.findUnique({ where: { id } })
    expect(row.correctCount).not.toBe(999)
    await lessonSession.quitSession(userId, id)
  })
})
