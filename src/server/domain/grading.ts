/**
 * Grading engine — chấm câu trả lời phía server (client không tự chấm).
 * Pure function: (question đã parse, answer) → kết quả.
 */

import { normalizeJapanese, pronunciationSimilarity } from '@/lib/japanese'

export interface ChoiceOption {
  id: string
  text: string
  sub?: string
  audio?: string
  big?: boolean
}

export interface ResolvedQuestion {
  id: string
  type: string
  prompt?: string
  data: QuestionDataShape
  correct: CorrectShape
  explanation?: string
  itemRefType?: string | null
  itemRefKey?: string | null
}

export type QuestionDataShape =
  | { kind: 'choice'; promptJa?: string; promptSub?: string; options: ChoiceOption[]; layout?: 'grid' | 'list' }
  | { kind: 'audio-choice'; audioText: string; meaningVi?: string; options: ChoiceOption[]; layout?: 'grid' | 'list' }
  | { kind: 'fill-blank'; sentence: string; options: ChoiceOption[] }
  | { kind: 'token-order'; promptVi: string; tokens: { id: string; text: string }[]; distractors?: { id: string; text: string }[]; audioText?: string }
  | { kind: 'text-input'; label?: string; placeholder?: string; accept: string[]; audioText?: string }
  | { kind: 'matching'; pairs: { id: string; left: { text: string; reading?: string }; right: { text: string } }[] }
  | { kind: 'speak'; speakText: string; reading?: string; meaningVi: string; threshold?: number }
  | { kind: 'writing'; character: string; romaji?: string; meaningVi?: string; strokeCount: number; guide?: boolean }
  | {
      kind: 'passage'
      title?: string
      lines: { speaker?: string; text: string; reading?: string; vi: string }[]
      questions: { type: string; prompt?: string; data: QuestionDataShape; correct: CorrectShape; explanation?: string }[]
    }

export type CorrectShape =
  | { optionId: string }
  | { tokenOrder: string[] }
  | { answers: string[] }
  | { pairs: Record<string, string> }
  | { score: number }
  | Record<string, never>

export interface AnswerPayload {
  optionId?: string
  text?: string
  tokenOrder?: string[]
  pairs?: Record<string, string>
  /** Speaking: kết quả ASR + điểm similarity đã tính server-side */
  transcription?: string
  pronunciationScore?: number
  /** Writing: số nét user vẽ + độ tương đồng hình dạng client tính (heuristic) */
  strokeCount?: number
  shapeSimilarity?: number
}

export interface GradeResult {
  isCorrect: boolean
  /** Điểm số dạng câu (speak/write) 0-100 */
  score?: number
  /** Chuỗi hiển thị đáp án đúng cho client */
  expectedDisplay: string
}

export function gradeAnswer(q: ResolvedQuestion, answer: AnswerPayload): GradeResult {
  const d = q.data
  const c = q.correct

  switch (d.kind) {
    case 'choice':
    case 'audio-choice': {
      const correctId = (c as { optionId: string }).optionId
      const option = d.options.find((o) => o.id === answer.optionId)
      const correctOption = d.options.find((o) => o.id === correctId)
      return {
        isCorrect: answer.optionId === correctId,
        expectedDisplay: correctOption?.text ?? '',
      }
    }
    case 'fill-blank': {
      if ('optionId' in c && c.optionId) {
        const correctOption = d.options.find((o) => o.id === (c as { optionId: string }).optionId)
        return {
          isCorrect: answer.optionId === (c as { optionId: string }).optionId,
          expectedDisplay: correctOption?.text ?? '',
        }
      }
      const answers = (c as { answers: string[] }).answers ?? []
      const normalized = normalizeJapanese(answer.text ?? '')
      return {
        isCorrect: answers.some((a) => normalizeJapanese(a) === normalized),
        expectedDisplay: answers[0] ?? '',
      }
    }
    case 'token-order': {
      const expected = (c as { tokenOrder: string[] }).tokenOrder
      const got = answer.tokenOrder ?? []
      const isCorrect = expected.length === got.length && expected.every((id, i) => id === got[i])
      const textById = new Map([...d.tokens, ...(d.distractors ?? [])].map((t) => [t.id, t.text]))
      return {
        isCorrect,
        expectedDisplay: expected.map((id) => textById.get(id) ?? '').join(' '),
      }
    }
    case 'text-input': {
      const answers = (c as { answers: string[] }).answers ?? []
      const normalized = normalizeJapanese(answer.text ?? '')
      return {
        isCorrect: answers.some((a) => normalizeJapanese(a) === normalized),
        expectedDisplay: answers[0] ?? '',
      }
    }
    case 'matching': {
      const expectedPairs = (c as { pairs: Record<string, string> }).pairs ?? {}
      const got = answer.pairs ?? {}
      const keys = Object.keys(expectedPairs)
      const isCorrect = keys.every((k) => (got[k] ?? '').trim() === expectedPairs[k].trim())
      const leftById = new Map(d.pairs.map((p) => [p.id, p.left.text]))
      return {
        isCorrect,
        expectedDisplay: keys.map((k) => `${leftById.get(k) ?? k} → ${expectedPairs[k]}`).join(' · '),
      }
    }
    case 'speak': {
      // Điểm similarity text (KHÔNG phải chất lượng âm vị) — server đã ASR trước khi gọi hàm này
      const score = answer.pronunciationScore ?? pronunciationSimilarity(d.speakText, answer.transcription ?? '')
      const threshold = 'score' in c && typeof c.score === 'number' ? c.score : d.threshold ?? 65
      return {
        isCorrect: score >= threshold,
        score,
        expectedDisplay: d.speakText,
      }
    }
    case 'writing': {
      const expectedStrokes = d.strokeCount
      const gotStrokes = answer.strokeCount ?? 0
      const shape = Math.max(0, Math.min(100, answer.shapeSimilarity ?? 0))
      // 50% số nét đúng + 50% hình dạng (client heuristic, công khai trong UI)
      const strokeScore = Math.max(0, 100 - Math.abs(gotStrokes - expectedStrokes) * 25)
      const score = Math.round(strokeScore * 0.5 + shape * 0.5)
      const threshold = 'score' in c && typeof c.score === 'number' ? c.score : 60
      return {
        isCorrect: score >= threshold,
        score,
        expectedDisplay: d.character,
      }
    }
    case 'passage': {
      // Passage không chấm trực tiếp — sub-question được resolve thành question riêng
      return { isCorrect: false, expectedDisplay: '' }
    }
  }
}

/** Trả về sub-question của passage (dùng khi flatten session). */
export function getPassageSubQuestions(q: ResolvedQuestion): ResolvedQuestion[] {
  if (q.data.kind !== 'passage') return []
  return q.data.questions.map((sub, i) => ({
    id: `${q.id}:${i}`,
    type: sub.type,
    prompt: sub.prompt,
    data: sub.data,
    correct: sub.correct,
    explanation: sub.explanation,
    itemRefType: null,
    itemRefKey: null,
  }))
}
