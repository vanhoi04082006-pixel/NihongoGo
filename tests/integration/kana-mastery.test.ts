/// <reference types="bun-types" />
/**
 * Integration tests — "Thành thạo Kana" (server-graded practice) trên SQLite riêng
 * (tests/.tmp/kana-mastery.db — tự setup, không đụng DB dev).
 * Chạy: bun test tests/integration/kana-mastery.test.ts
 *
 * Phạm vi:
 * - start: KHÔNG lộ đáp án (shape response chặt, không có trường correct/answer);
 *   đủ 4 lựa chọn, đáp án đúng (tra DB) luôn nằm trong options; RECALL loại
 *   romaji nhập nhằng (じ/ぢ, ず/づ)
 * - answer đúng → correctCount tăng; answer sai → wrongCount tăng
 * - đạt target (kanaMasteryTarget từ settings) → completedAt được set
 * - câu hỏi dùng MỘT LẦN (trả lời lại → 400)
 * - chưa đăng nhập → 401; evil origin → 403
 * - settings: kanaMasteryTarget 3..50 hợp lệ, ngoài khoảng → 400
 */
import { execSync } from 'node:child_process'
import { mkdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { afterAll, beforeAll, describe, expect, test } from 'bun:test'

// ── Database riêng cho test — PHẢI set trước khi import bất kỳ module DB nào ──
const TMP_DIR = join(import.meta.dir, '..', '.tmp')
const DB_FILE = join(TMP_DIR, 'kana-mastery.db')
process.env.DATABASE_URL = `file:${DB_FILE}`

type AnyRecord = Record<string, any>

let registerPost: any, settingsPatch: any, settingsGet: any, meGet: any
let progressGet: any, startPost: any, answerPost: any
let db: any

function req(path: string, init: RequestInit & { cookies?: Record<string, string> } = {}) {
  const { cookies, headers, ...rest } = init
  const cookieHeader = cookies ? Object.entries(cookies).map(([k, v]) => `${k}=${v}`).join('; ') : undefined
  return new NextRequestImpl(`http://localhost:3000${path}`, {
    ...rest,
    headers: {
      // IP riêng cho file test này — tránh chia sẻ bucket rate-limit `register:local`
      // với api.test.ts khi chạy cùng lúc (2 file × tổng 12 lượt register > 10/phút).
      'X-Forwarded-For': '10.42.26.26',
      ...(rest.body ? { 'Content-Type': 'application/json' } : {}),
      ...(cookieHeader ? { Cookie: cookieHeader } : undefined),
      ...(headers ?? {}),
    },
  })
}

let NextRequestImpl: any

async function json(res: Response): Promise<AnyRecord> {
  return (await res.json()) as AnyRecord
}

async function registerUser(email: string, username: string): Promise<string> {
  const res = await registerPost(
    req('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, username, password: 'Passw0rd!123' }),
    })
  )
  expect(res.status).toBe(200)
  const token = res.cookies.get('ngg_session')?.value
  expect(token).toBeTruthy()
  return token as string
}

/** Tra DB để tìm option đúng — test đen (không tin client, không tin response). */
async function findCorrectOption(q: AnyRecord, setType: string): Promise<{ optionId: string; correctText: string }> {
  let kana: AnyRecord | null
  if (q.mode === 'RECOGNIZE') {
    kana = await db.kanaCharacter.findFirst({ where: { character: q.prompt, type: setType } })
  } else {
    kana = await db.kanaCharacter.findFirst({ where: { romaji: q.prompt, type: setType } })
  }
  expect(kana).toBeTruthy()
  const correctText = q.mode === 'RECOGNIZE' ? kana!.romaji : kana!.character
  const opt = q.options.find((o: AnyRecord) => o.text === correctText)
  expect(opt).toBeTruthy() // đáp án đúng PHẢI nằm trong options — nếu không là bug server
  return { optionId: opt!.id, correctText }
}

beforeAll(async () => {
  rmSync(DB_FILE, { force: true })
  mkdirSync(TMP_DIR, { recursive: true })
  execSync('bunx prisma db push --skip-generate --accept-data-loss', {
    cwd: join(import.meta.dir, '..', '..'),
    env: { ...process.env, DATABASE_URL: `file:${DB_FILE}` },
    stdio: 'pipe',
  })
  execSync('bun prisma/seed.ts', {
    cwd: join(import.meta.dir, '..', '..'),
    env: { ...process.env, DATABASE_URL: `file:${DB_FILE}` },
    stdio: 'pipe',
  })

  const nextServer = await import('next/server')
  NextRequestImpl = nextServer.NextRequest
  ;({ db } = await import('../../src/lib/db'))
  registerPost = (await import('../../src/app/api/auth/register/route')).POST
  settingsPatch = (await import('../../src/app/api/settings/route')).PATCH
  settingsGet = (await import('../../src/app/api/settings/route')).GET
  meGet = (await import('../../src/app/api/auth/me/route')).GET
  progressGet = (await import('../../src/app/api/kana/progress/route')).GET
  startPost = (await import('../../src/app/api/kana/practice/start/route')).POST
  answerPost = (await import('../../src/app/api/kana/practice/answer/route')).POST
}, 120_000)

afterAll(async () => {
  await db?.$disconnect?.()
})

describe('Kana practice — start không lộ đáp án', () => {
  test('RECOGNIZE: đủ 10 câu × 4 option, shape chặt, không có trường đáp án', async () => {
    const token = await registerUser('kana_t1@test.vn', 'kana_tester1')
    const res = await startPost(
      req('/api/kana/practice/start', {
        method: 'POST',
        cookies: { ngg_session: token },
        body: JSON.stringify({ set: 'HIRAGANA', mode: 'RECOGNIZE' }),
      })
    )
    expect(res.status).toBe(200)
    const body = await json(res)
    const questions = body.questions as AnyRecord[]
    expect(questions.length).toBe(10)

    const raw = JSON.stringify(body)
    expect(raw).not.toContain('correctAnswer')
    expect(raw).not.toContain('correctOptionId')
    expect(raw).not.toContain('"correct"')

    for (const q of questions) {
      expect(q.mode).toBe('RECOGNIZE')
      expect(typeof q.prompt).toBe('string')
      expect(q.prompt.length).toBeGreaterThan(0)
      // prompt phải là ký tự hiragana thật trong DB
      const kana = await db.kanaCharacter.findFirst({ where: { character: q.prompt, type: 'HIRAGANA' } })
      expect(kana).toBeTruthy()
      // 4 option, id mờ (không lộ vị trí đáp án), text romaji duy nhất
      expect(q.options.length).toBe(4)
      const texts = q.options.map((o: AnyRecord) => o.text)
      expect(new Set(texts).size).toBe(4)
      for (const o of q.options) {
        expect(Object.keys(o).every((k) => ['id', 'text', 'big'].includes(k))).toBe(true)
        expect(/^o\d$/.test(o.id)).toBe(true)
        expect(o.big).toBe(false)
      }
      // đáp án đúng (theo DB) luôn nằm trong options
      await findCorrectOption(q, 'HIRAGANA')
    }
  })

  test('RECALL: prompt là romaji, options là ký tự kana (big), loại romaji nhập nhằng', async () => {
    const token = await registerUser('kana_t2@test.vn', 'kana_tester2')
    const res = await startPost(
      req('/api/kana/practice/start', {
        method: 'POST',
        cookies: { ngg_session: token },
        body: JSON.stringify({ set: 'KATAKANA', mode: 'RECALL', count: 5 }),
      })
    )
    expect(res.status).toBe(200)
    const body = await json(res)
    const questions = body.questions as AnyRecord[]
    expect(questions.length).toBe(5)

    for (const q of questions) {
      expect(q.mode).toBe('RECALL')
      // romaji nhập nhằng (ji/zu) không được ra đề — chỉ có 1 kana khớp duy nhất
      const matches = await db.kanaCharacter.findMany({ where: { romaji: q.prompt, type: 'KATAKANA' } })
      expect(matches.length).toBe(1)
      for (const o of q.options) {
        expect(o.big).toBe(true)
        const isKana = await db.kanaCharacter.findFirst({ where: { character: o.text, type: 'KATAKANA' } })
        expect(isKana).toBeTruthy()
      }
      await findCorrectOption(q, 'KATAKANA')
    }
  })
})

describe('Kana practice — answer & progress', () => {
  test('answer ĐÚNG → correctCount tăng 1, chưa completed (target 10)', async () => {
    const token = await registerUser('kana_t3@test.vn', 'kana_tester3')
    const start = await json(await startPost(
      req('/api/kana/practice/start', {
        method: 'POST',
        cookies: { ngg_session: token },
        body: JSON.stringify({ set: 'HIRAGANA', mode: 'RECOGNIZE', count: 3 }),
      })
    ))
    const q = start.questions[0]
    const { optionId } = await findCorrectOption(q, 'HIRAGANA')

    const answered = await json(await answerPost(
      req('/api/kana/practice/answer', {
        method: 'POST',
        cookies: { ngg_session: token },
        body: JSON.stringify({ questionId: q.id, choice: optionId }),
      })
    ))
    expect(answered.correct).toBe(true)
    expect(answered.progress.correctCount).toBe(1)
    expect(answered.progress.wrongCount).toBe(0)
    expect(answered.progress.completed).toBe(false)
    expect(answered.progress.target).toBe(10)

    // Progress API phản ánh đúng
    const prog = await json(await progressGet(req('/api/kana/progress?set=HIRAGANA', { cookies: { ngg_session: token } })))
    expect(prog.target).toBe(10)
    const kana = await db.kanaCharacter.findFirst({ where: { character: q.prompt, type: 'HIRAGANA' } })
    const item = (prog.items as AnyRecord[]).find((i) => i.kanaId === kana!.id)
    expect(item).toBeTruthy()
    expect(item!.correctCount).toBe(1)
    expect(item!.wrongCount).toBe(0)
    expect(item!.completed).toBe(false)
  })

  test('answer SAI → wrongCount tăng, trả về đáp án đúng', async () => {
    const token = await registerUser('kana_t4@test.vn', 'kana_tester4')
    const start = await json(await startPost(
      req('/api/kana/practice/start', {
        method: 'POST',
        cookies: { ngg_session: token },
        body: JSON.stringify({ set: 'HIRAGANA', mode: 'RECOGNIZE', count: 3 }),
      })
    ))
    const q = start.questions[0]
    const { correctText } = await findCorrectOption(q, 'HIRAGANA')
    const wrongOption = q.options.find((o: AnyRecord) => o.text !== correctText)

    const answered = await json(await answerPost(
      req('/api/kana/practice/answer', {
        method: 'POST',
        cookies: { ngg_session: token },
        body: JSON.stringify({ questionId: q.id, choice: wrongOption.id }),
      })
    ))
    expect(answered.correct).toBe(false)
    expect(answered.correctAnswer).toBe(correctText)
    expect(answered.progress.wrongCount).toBe(1)
    expect(answered.progress.correctCount).toBe(0)

    const prog = await json(await progressGet(req('/api/kana/progress?set=HIRAGANA', { cookies: { ngg_session: token } })))
    const kana = await db.kanaCharacter.findFirst({ where: { character: q.prompt, type: 'HIRAGANA' } })
    const item = (prog.items as AnyRecord[]).find((i) => i.kanaId === kana!.id)
    expect(item!.wrongCount).toBe(1)
  })

  test('đạt target → completedAt được set (target từ settings)', async () => {
    const token = await registerUser('kana_t5@test.vn', 'kana_tester5')
    // Hạ mục tiêu thành thạo xuống 3 (min cho phép)
    const patched = await settingsPatch(
      req('/api/settings', {
        method: 'PATCH',
        cookies: { ngg_session: token },
        body: JSON.stringify({ kanaMasteryTarget: 3 }),
      })
    )
    expect(patched.status).toBe(200)

    const start = await json(await startPost(
      req('/api/kana/practice/start', {
        method: 'POST',
        cookies: { ngg_session: token },
        body: JSON.stringify({ set: 'HIRAGANA', mode: 'RECOGNIZE', count: 3 }),
      })
    ))
    const q = start.questions[0]
    const kana = await db.kanaCharacter.findFirst({ where: { character: q.prompt, type: 'HIRAGANA' } })
    // Giả lập user đã trả lời đúng 2 lần trước đó (target 3 → còn thiếu 1 lần)
    await db.kanaProgress.upsert({
      where: { userId_kanaId: { userId: await currentUserId(token), kanaId: kana.id } },
      update: { correctCount: 2 },
      create: { userId: await currentUserId(token), kanaId: kana.id, correctCount: 2 },
    })

    const { optionId } = await findCorrectOption(q, 'HIRAGANA')
    const answered = await json(await answerPost(
      req('/api/kana/practice/answer', {
        method: 'POST',
        cookies: { ngg_session: token },
        body: JSON.stringify({ questionId: q.id, choice: optionId }),
      })
    ))
    expect(answered.correct).toBe(true)
    expect(answered.progress.target).toBe(3)
    expect(answered.progress.correctCount).toBe(3)
    expect(answered.progress.completed).toBe(true)

    // completedAt thực sự được ghi trong DB
    const userId = await currentUserId(token)
    const row = await db.kanaProgress.findUnique({ where: { userId_kanaId: { userId, kanaId: kana.id } } })
    expect(row.correctCount).toBe(3)
    expect(row.completedAt).not.toBeNull()
  })

  test('câu hỏi dùng MỘT LẦN — trả lời lại id cũ → 400', async () => {
    const token = await registerUser('kana_t6@test.vn', 'kana_tester6')
    const start = await json(await startPost(
      req('/api/kana/practice/start', {
        method: 'POST',
        cookies: { ngg_session: token },
        body: JSON.stringify({ set: 'KATAKANA', mode: 'RECOGNIZE', count: 3 }),
      })
    ))
    const q = start.questions[0]
    const { optionId } = await findCorrectOption(q, 'KATAKANA')
    const first = await answerPost(
      req('/api/kana/practice/answer', {
        method: 'POST',
        cookies: { ngg_session: token },
        body: JSON.stringify({ questionId: q.id, choice: optionId }),
      })
    )
    expect(first.status).toBe(200)
    const second = await answerPost(
      req('/api/kana/practice/answer', {
        method: 'POST',
        cookies: { ngg_session: token },
        body: JSON.stringify({ questionId: q.id, choice: optionId }),
      })
    )
    expect(second.status).toBe(400)
  })

  test('questionId không tồn tại → 400 (không 500)', async () => {
    const token = await registerUser('kana_t7@test.vn', 'kana_tester7')
    const res = await answerPost(
      req('/api/kana/practice/answer', {
        method: 'POST',
        cookies: { ngg_session: token },
        body: JSON.stringify({ questionId: 'kana_khong_ton_tai_123456', choice: 'o0' }),
      })
    )
    expect(res.status).toBe(400)
  })
})

describe('Kana mastery — bảo mật', () => {
  test('chưa đăng nhập: progress/start/answer → 401', async () => {
    const p = await progressGet(req('/api/kana/progress'))
    expect(p.status).toBe(401)
    const s = await startPost(
      req('/api/kana/practice/start', { method: 'POST', body: JSON.stringify({ set: 'HIRAGANA', mode: 'RECOGNIZE' }) })
    )
    expect(s.status).toBe(401)
    const a = await answerPost(
      req('/api/kana/practice/answer', { method: 'POST', body: JSON.stringify({ questionId: 'kq_x', choice: 'o0' }) })
    )
    expect(a.status).toBe(401)
  })

  test('evil origin: start/answer/settings → 403', async () => {
    const token = await registerUser('kana_t8@test.vn', 'kana_tester8')
    const s = await startPost(
      req('/api/kana/practice/start', {
        method: 'POST',
        headers: { Origin: 'https://evil.example' },
        cookies: { ngg_session: token },
        body: JSON.stringify({ set: 'HIRAGANA', mode: 'RECOGNIZE' }),
      })
    )
    expect(s.status).toBe(403)
    const a = await answerPost(
      req('/api/kana/practice/answer', {
        method: 'POST',
        headers: { Origin: 'https://evil.example' },
        cookies: { ngg_session: token },
        body: JSON.stringify({ questionId: 'kq_abc', choice: 'o0' }),
      })
    )
    expect(a.status).toBe(403)
    const st = await settingsPatch(
      req('/api/settings', {
        method: 'PATCH',
        headers: { Origin: 'https://evil.example' },
        cookies: { ngg_session: token },
        body: JSON.stringify({ kanaMasteryTarget: 5 }),
      })
    )
    expect(st.status).toBe(403)
  })
})

describe('Settings — kanaMasteryTarget', () => {
  test('3..50 hợp lệ; 2 và 51 bị từ chối; GET trả đúng giá trị', async () => {
    const token = await registerUser('kana_t9@test.vn', 'kana_tester9')
    const okRes = await settingsPatch(
      req('/api/settings', {
        method: 'PATCH',
        cookies: { ngg_session: token },
        body: JSON.stringify({ kanaMasteryTarget: 7 }),
      })
    )
    expect(okRes.status).toBe(200)
    const got = await json(await settingsGet(req('/api/settings', { cookies: { ngg_session: token } })))
    expect(got.settings.kanaMasteryTarget).toBe(7)
    // progress dùng target từ settings
    const prog = await json(await progressGet(req('/api/kana/progress?set=HIRAGANA', { cookies: { ngg_session: token } })))
    expect(prog.target).toBe(7)

    for (const bad of [2, 51, 0, -5]) {
      const res = await settingsPatch(
        req('/api/settings', {
          method: 'PATCH',
          cookies: { ngg_session: token },
          body: JSON.stringify({ kanaMasteryTarget: bad }),
        })
      )
      expect(res.status).toBe(400)
    }
  })
})

/* --------------------------------- Helpers --------------------------------- */

async function currentUserId(token: string): Promise<string> {
  const me = await json(await meGet(req('/api/auth/me', { cookies: { ngg_session: token } })))
  return me.user.id as string
}
