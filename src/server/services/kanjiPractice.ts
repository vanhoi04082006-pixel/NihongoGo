import { randomBytes } from 'node:crypto'
import { db } from '@/lib/db'
import { badRequest } from '@/lib/api'
import { shuffle } from './kanaPractice'

/**
 * Luyện tập Kanji — server-authoritative (pattern giống kanaPractice):
 * - Server sinh câu hỏi từ bảng Kanji (MEANING: kanji → nghĩa,
 *   CHARACTER: nghĩa → kanji, READING: kanji → âm đọc),
 *   giữ ĐÁP ÁN ĐÚNG trong bộ nhớ (Map + TTL 20 phút, key = id ngẫu nhiên).
 * - Response chỉ chứa prompt + options đã xáo trộn — không lộ đáp án.
 * - Server chấm điểm + cập nhật SRSItem (itemType KANJI, itemKey = chữ Hán).
 * - Luyện tập KHÔNG cộng XP (XP chỉ từ lesson session do server tính).
 */

export type KanjiPracticeMode = 'MEANING' | 'CHARACTER' | 'READING'

const QUESTION_TTL_MS = 20 * 60 * 1000
export const DEFAULT_KANJI_COUNT = 10
export const MAX_KANJI_COUNT = 20

export interface KanjiQuestionView {
  id: string
  mode: KanjiPracticeMode
  /** Chữ Hán hoặc nghĩa tiếng Việt tùy mode */
  prompt: string
  promptSub?: string
  /** Âm đọc kèm khi prompt là chữ Hán (mode CHARACTER) */
  promptHint?: string
  options: { id: string; text: string; big?: boolean }[]
}

interface StoredQuestion {
  userId: string
  character: string
  mode: KanjiPracticeMode
  correctOptionId: string
  correctText: string
  /** Giải thích hiển thị sau khi trả lời */
  explanation: string
  expiresAt: number
}

// Survive HMR của dev server (pattern giống rate-limit)
const globalForStore = globalThis as unknown as {
  __kanjiQuestionStore: Map<string, StoredQuestion> | undefined
}
const store = (globalForStore.__kanjiQuestionStore ??= new Map<string, StoredQuestion>())

function sweepStore() {
  const now = Date.now()
  if (store.size < 500) return
  for (const [k, v] of store) {
    if (v.expiresAt <= now) store.delete(k)
  }
}

interface KanjiRow {
  id: string
  character: string
  meaningVi: string
  onyomi: string[]
  kunyomi: string[]
  jlpt: number
  strokeCount: number
}

function parseJsonArr(raw: string): string[] {
  try {
    const v = JSON.parse(raw)
    return Array.isArray(v) ? v.filter((x): x is string => typeof x === 'string') : []
  } catch {
    return []
  }
}

/** Âm đọc đại diện cho câu hỏi READING — ưu tiên kunyomi (phổ biến hơn với người mới). */
function primaryReading(k: KanjiRow): string | null {
  return k.kunyomi[0] ?? k.onyomi[0] ?? null
}

export async function startKanjiPractice(
  userId: string,
  mode: KanjiPracticeMode,
  jlpt: number | null,
  count = DEFAULT_KANJI_COUNT
): Promise<{ questions: KanjiQuestionView[] }> {
  const rows = await db.kanji.findMany({
    where: jlpt ? { jlpt } : undefined,
    orderBy: [{ jlpt: 'asc' }, { strokeCount: 'asc' }],
  })
  const kanji: KanjiRow[] = rows.map((r) => ({
    id: r.id,
    character: r.character,
    meaningVi: r.meaningVi,
    onyomi: parseJsonArr(r.onyomi),
    kunyomi: parseJsonArr(r.kunyomi),
    jlpt: r.jlpt,
    strokeCount: r.strokeCount,
  }))

  // READING: chỉ lấy kanji có ít nhất 1 âm đọc; loại âm đọc trùng (2 đáp án đúng)
  let pool = kanji
  if (mode === 'READING') {
    const readingCount = new Map<string, number>()
    for (const k of kanji) {
      const r = primaryReading(k)
      if (r) readingCount.set(r, (readingCount.get(r) ?? 0) + 1)
    }
    pool = kanji.filter((k) => {
      const r = primaryReading(k)
      return r ? readingCount.get(r) === 1 : false
    })
  }
  if (pool.length < 4) throw badRequest('Không đủ Kanji để tạo câu hỏi luyện tập')

  const n = Math.max(3, Math.min(count, MAX_KANJI_COUNT, pool.length))
  const sampled = shuffle(pool).slice(0, n)

  const questions: KanjiQuestionView[] = []
  for (const target of sampled) {
    // Distractor: ưu tiên cùng JLPT (dễ nhầm hơn), loại trùng text đáp án
    const sameLevel = pool.filter((k) => k.id !== target.id && k.jlpt === target.jlpt)
    const others = pool.filter((k) => k.id !== target.id && k.jlpt !== target.jlpt)
    const candidates = [...shuffle(sameLevel), ...shuffle(others)]

    const correctText =
      mode === 'MEANING' ? target.meaningVi : mode === 'CHARACTER' ? target.character : primaryReading(target)!
    const optionTextOf = (k: KanjiRow) =>
      mode === 'MEANING' ? k.meaningVi : mode === 'CHARACTER' ? k.character : primaryReading(k)!

    const picked: string[] = []
    const used = new Set([correctText])
    for (const c of candidates) {
      if (picked.length >= 3) break
      const t = optionTextOf(c)
      if (used.has(t)) continue
      used.add(t)
      picked.push(t)
    }
    if (picked.length < 3) continue

    const optionRows = [correctText, ...picked].map((text, i) => ({
      id: `o${i}`,
      text,
      big: mode === 'CHARACTER',
    }))
    const options = shuffle(optionRows)
    const correctOptionId = options.find((o) => o.text === correctText)?.id
    if (!correctOptionId) continue

    const explanation =
      mode === 'MEANING'
        ? `${target.character} = ${target.meaningVi} · âm ${[...target.kunyomi, ...target.onyomi].slice(0, 3).join('・') || '—'}`
        : mode === 'CHARACTER'
          ? `${target.character} = ${target.meaningVi} · ${target.strokeCount} nét · JLPT N${target.jlpt}`
          : `${target.character} (${target.meaningVi}) — kun: ${target.kunyomi.join('・') || '—'} · on: ${target.onyomi.join('・') || '—'}`

    const id = `kjq_${randomBytes(10).toString('hex')}`
    store.set(id, {
      userId,
      character: target.character,
      mode,
      correctOptionId,
      correctText,
      explanation,
      expiresAt: Date.now() + QUESTION_TTL_MS,
    })
    questions.push({
      id,
      mode,
      prompt:
        mode === 'MEANING' ? target.character : mode === 'CHARACTER' ? target.meaningVi : target.character,
      promptSub:
        mode === 'MEANING' ? 'Nghĩa là gì?' : mode === 'CHARACTER' ? 'Chọn chữ Hán đúng' : 'Âm đọc nào đúng?',
      promptHint: mode === 'READING' ? target.meaningVi : undefined,
      options,
    })
  }
  if (questions.length === 0) throw badRequest('Không tạo được câu hỏi. Vui lòng thử lại.')
  sweepStore()
  return { questions }
}

export interface KanjiAnswerResult {
  correct: boolean
  correctAnswer: string
  explanation: string
  srs: { mastery: number; state: string }
}

/** Chấm đáp án ở server (câu hỏi dùng một lần) + cập nhật SRSItem cho Kanji. */
export async function gradeKanjiAnswer(userId: string, questionId: string, choice: string): Promise<KanjiAnswerResult> {
  const q = store.get(questionId)
  store.delete(questionId)
  if (!q || q.userId !== userId || q.expiresAt <= Date.now()) {
    throw badRequest('Câu hỏi không còn hiệu lực (đã trả lời hoặc hết hạn 20 phút). Hãy bắt đầu phiên luyện tập mới.')
  }

  const correct = q.correctOptionId === choice
  const now = new Date()

  // Cập nhật SRSItem (mastery 0..5) — nhẹ nhàng, không qua scheduler SM-2
  const existing = await db.sRSItem.findUnique({
    where: { userId_itemType_itemKey: { userId, itemType: 'KANJI', itemKey: q.character } },
    select: { id: true, mastery: true, reviewCount: true },
  })
  const mastery = existing
    ? Math.max(0, Math.min(5, existing.mastery + (correct ? 1 : -1)))
    : correct
      ? 1
      : 0
  const state = mastery >= 4 ? 'MASTERED' : mastery >= 1 ? 'REVIEW' : 'LEARNING'
  const data = {
    mastery,
    state,
    reviewCount: (existing?.reviewCount ?? 0) + 1,
    lapseCount: correct ? undefined : { increment: 1 },
    lastReviewedAt: now,
    nextReviewAt: new Date(now.getTime() + Math.max(1, mastery) * 24 * 60 * 60 * 1000),
  }
  if (existing) {
    await db.sRSItem.update({ where: { id: existing.id }, data })
  } else {
    await db.sRSItem.create({
      data: {
        userId,
        itemType: 'KANJI',
        itemKey: q.character,
        mastery,
        state,
        reviewCount: 1,
        lapseCount: correct ? 0 : 1,
        lastReviewedAt: now,
        nextReviewAt: data.nextReviewAt,
      },
    })
  }

  return {
    correct,
    correctAnswer: q.correctText,
    explanation: q.explanation,
    srs: { mastery, state },
  }
}
