import { randomBytes } from 'node:crypto'
import { db } from '@/lib/db'
import { badRequest } from '@/lib/api'

/**
 * Luyện tập kana "Thành thạo Kana" — server-authoritative:
 * - Server sinh câu hỏi (RECOGNIZE: kana → romaji, RECALL: romaji → kana),
 *   giữ ĐÁP ÁN ĐÚNG trong bộ nhớ server (Map + TTL 20 phút, key = id ngẫu nhiên).
 * - Response chỉ chứa prompt + options đã xáo trộn (Fisher-Yates) — không lộ đáp án.
 * - Server chấm điểm và upsert KanaProgress (correctCount/wrongCount/completedAt).
 */

export type KanaPracticeMode = 'RECOGNIZE' | 'RECALL'
export type KanaSet = 'HIRAGANA' | 'KATAKANA'

const QUESTION_TTL_MS = 20 * 60 * 1000
export const DEFAULT_QUESTION_COUNT = 10

export interface KanaQuestionView {
  id: string
  mode: KanaPracticeMode
  prompt: string
  promptSub?: string
  options: { id: string; text: string; big?: boolean }[]
}

interface StoredQuestion {
  userId: string
  kanaId: string
  mode: KanaPracticeMode
  correctOptionId: string
  correctText: string
  expiresAt: number
}

// Survive HMR của dev server (pattern giống src/lib/rate-limit.ts)
const globalForStore = globalThis as unknown as {
  __kanaQuestionStore: Map<string, StoredQuestion> | undefined
}
const store = (globalForStore.__kanaQuestionStore ??= new Map<string, StoredQuestion>())

function sweepStore() {
  const now = Date.now()
  if (store.size < 500) return
  for (const [k, v] of store) {
    if (v.expiresAt <= now) store.delete(k)
  }
}

/** Fisher-Yates — xáo trộn tại server, trả bản sao mới. */
export function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

interface KanaRow {
  id: string
  character: string
  romaji: string
  kanaGroup: string
  row: number
}

/**
 * Chọn distractor cùng set, ưu tiên dễ nhầm lẫn:
 * 1. cùng hàng + cùng nhóm → 2. cùng hàng, khác nhóm (か/が) → 3. cùng nhóm, khác hàng → 4. còn lại.
 * Với RECOGNIZE, text phương án là romaji → loại trùng text (じ/ぢ đều là "ji").
 */
function pickDistractors(pool: KanaRow[], target: KanaRow, mode: KanaPracticeMode, need = 3): KanaRow[] {
  const keyOf = (c: KanaRow) => (mode === 'RECOGNIZE' ? c.romaji : c.character)
  const targetKey = keyOf(target)
  const buckets: KanaRow[][] = [[], [], [], []]
  for (const c of pool) {
    if (c.id === target.id) continue
    if (keyOf(c) === targetKey) continue
    const score = (c.row === target.row ? 0 : 2) + (c.kanaGroup === target.kanaGroup ? 0 : 1)
    buckets[score].push(c)
  }
  const chosen: KanaRow[] = []
  const usedKeys = new Set<string>([targetKey])
  for (const bucket of buckets) {
    for (const c of shuffle(bucket)) {
      if (chosen.length >= need) break
      const key = keyOf(c)
      if (usedKeys.has(key)) continue
      usedKeys.add(key)
      chosen.push(c)
    }
    if (chosen.length >= need) break
  }
  return chosen
}

export async function startKanaPractice(
  userId: string,
  set: KanaSet,
  mode: KanaPracticeMode,
  count = DEFAULT_QUESTION_COUNT
): Promise<{ questions: KanaQuestionView[] }> {
  const chars = (await db.kanaCharacter.findMany({
    where: { type: set },
    orderBy: [{ row: 'asc' }, { kanaGroup: 'asc' }],
  })) as KanaRow[]
  if (chars.length < 4) throw badRequest('Không đủ ký tự để tạo câu hỏi luyện tập')

  // RECALL (romaji → kana): bỏ ký tự có romaji trùng nhau trong set (じ/ぢ, ず/づ)
  // vì câu hỏi "ji → ?" sẽ có 2 đáp án đúng mà server chỉ chấm 1.
  let pool = chars
  if (mode === 'RECALL') {
    const romajiCount = new Map<string, number>()
    for (const c of chars) romajiCount.set(c.romaji, (romajiCount.get(c.romaji) ?? 0) + 1)
    pool = chars.filter((c) => romajiCount.get(c.romaji) === 1)
  }

  const n = Math.max(3, Math.min(count, 20, pool.length))
  const sampled = shuffle(pool).slice(0, n)
  const setLabel = set === 'HIRAGANA' ? 'Hiragana' : 'Katakana'

  const questions: KanaQuestionView[] = []
  for (const target of sampled) {
    const distractors = pickDistractors(pool, target, mode)
    if (distractors.length < 3) continue // bộ dữ liệu quá nhỏ — bỏ câu này
    const correctText = mode === 'RECOGNIZE' ? target.romaji : target.character
    const optionRows = [
      { text: correctText },
      ...distractors.map((d) => ({ text: mode === 'RECOGNIZE' ? d.romaji : d.character })),
    ].map((o, i) => ({ id: `o${i}`, text: o.text, big: mode === 'RECALL' }))
    const options = shuffle(optionRows)
    const correctOptionId = options.find((o) => o.text === correctText)?.id
    if (!correctOptionId) continue

    const id = `kq_${randomBytes(10).toString('hex')}`
    store.set(id, {
      userId,
      kanaId: target.id,
      mode,
      correctOptionId,
      correctText,
      expiresAt: Date.now() + QUESTION_TTL_MS,
    })
    questions.push({
      id,
      mode,
      prompt: mode === 'RECOGNIZE' ? target.character : target.romaji,
      promptSub: setLabel,
      options,
    })
  }
  if (questions.length === 0) throw badRequest('Không tạo được câu hỏi. Vui lòng thử lại.')
  sweepStore()
  return { questions }
}

export interface KanaAnswerResult {
  correct: boolean
  correctAnswer: string
  progress: {
    correctCount: number
    wrongCount: number
    completed: boolean
    target: number
  }
}

export async function gradeKanaAnswer(userId: string, questionId: string, choice: string): Promise<KanaAnswerResult> {
  const q = store.get(questionId)
  store.delete(questionId) // mỗi câu chỉ dùng một lần
  if (!q || q.userId !== userId || q.expiresAt <= Date.now()) {
    throw badRequest('Câu hỏi không còn hiệu lực (đã trả lời hoặc hết hạn 20 phút). Hãy bắt đầu phiên luyện tập mới.')
  }

  const correct = q.correctOptionId === choice
  const settings = await db.userSettings.findUnique({
    where: { userId },
    select: { kanaMasteryTarget: true },
  })
  const target = Math.max(1, settings?.kanaMasteryTarget ?? 10)
  const now = new Date()

  const row = await db.kanaProgress.upsert({
    where: { userId_kanaId: { userId, kanaId: q.kanaId } },
    update: correct
      ? { correctCount: { increment: 1 }, lastPracticedAt: now }
      : { wrongCount: { increment: 1 }, lastPracticedAt: now },
    create: {
      userId,
      kanaId: q.kanaId,
      correctCount: correct ? 1 : 0,
      wrongCount: correct ? 0 : 1,
      lastPracticedAt: now,
    },
  })

  let completed = !!row.completedAt
  if (!completed && row.correctCount >= target) {
    await db.kanaProgress.update({ where: { id: row.id }, data: { completedAt: now } })
    completed = true
  }

  return {
    correct,
    correctAnswer: q.correctText,
    progress: { correctCount: row.correctCount, wrongCount: row.wrongCount, completed, target },
  }
}

export interface KanaProgressView {
  target: number
  items: {
    kanaId: string
    character: string
    type: string
    correctCount: number
    wrongCount: number
    completed: boolean
  }[]
}

export async function getKanaProgress(userId: string, set?: KanaSet): Promise<KanaProgressView> {
  const [settings, chars] = await Promise.all([
    db.userSettings.findUnique({ where: { userId }, select: { kanaMasteryTarget: true } }),
    db.kanaCharacter.findMany({
      where: set ? { type: set } : undefined,
      orderBy: [{ type: 'asc' }, { row: 'asc' }, { kanaGroup: 'asc' }],
      include: { progress: { where: { userId } } },
    }),
  ])
  return {
    target: settings?.kanaMasteryTarget ?? 10,
    items: chars.map((c) => ({
      kanaId: c.id,
      character: c.character,
      type: c.type,
      correctCount: c.progress[0]?.correctCount ?? 0,
      wrongCount: c.progress[0]?.wrongCount ?? 0,
      completed: !!c.progress[0]?.completedAt,
    })),
  }
}
