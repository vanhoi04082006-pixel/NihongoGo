/// <reference types="bun-types" />
/**
 * Unit tests — Grading engine (server-authoritative, pure).
 * Chạy: bun test tests/unit/grading.test.ts
 *
 * Trọng tâm anti-cheat: client KHÔNG thể tự khai điểm speak (§12) —
 * kể cả đưa pronunciationScore vào payload cũng bị bỏ qua.
 */
import { describe, expect, test } from 'bun:test'
import { gradeAnswer, getPassageSubQuestions, type ResolvedQuestion } from '../../src/server/domain/grading'

const q = (data: unknown, correct: unknown, extra: Partial<ResolvedQuestion> = {}): ResolvedQuestion => ({
  id: 'q1',
  type: 'TEST',
  data: data as ResolvedQuestion['data'],
  correct: correct as ResolvedQuestion['correct'],
  ...extra,
})

describe('choice', () => {
  const data = { kind: 'choice', options: [{ id: 'a', text: 'A' }, { id: 'b', text: 'B' }, { id: 'c', text: 'C' }] }
  test('đúng khi chọn optionId khớp', () => {
    expect(gradeAnswer(q(data, { optionId: 'b' }), { optionId: 'b' }).isCorrect).toBe(true)
  })
  test('sai khi chọn khác', () => {
    expect(gradeAnswer(q(data, { optionId: 'b' }), { optionId: 'a' }).isCorrect).toBe(false)
  })
  test('sai khi không chọn', () => {
    expect(gradeAnswer(q(data, { optionId: 'b' }), {}).isCorrect).toBe(false)
  })
  test('expectedDisplay là văn bản option đúng', () => {
    expect(gradeAnswer(q(data, { optionId: 'c' }), { optionId: 'a' }).expectedDisplay).toBe('C')
  })
})

describe('fill-blank / text-input (normalize + accepted answers)', () => {
  test('đúng khi gõ đúng (bỏ khoảng trắng/dấu câu)', () => {
    const data = { kind: 'text-input', accept: ['にほんご'] }
    expect(gradeAnswer(q(data, { answers: ['にほんご'] }), { text: ' にほんご。 ' }).isCorrect).toBe(true)
  })
  test('katakana được chấp nhận như hiragana', () => {
    const data = { kind: 'text-input', accept: ['せんせい'] }
    expect(gradeAnswer(q(data, { answers: ['せんせい'] }), { text: 'センセイ' }).isCorrect).toBe(true)
  })
  test('một trong các đáp án chấp nhận đều đúng', () => {
    const data = { kind: 'text-input', accept: ['ともだち', '友達'] }
    expect(gradeAnswer(q(data, { answers: ['ともだち', '友達'] }), { text: '友達' }).isCorrect).toBe(true)
  })
  test('sai khi gõ khác', () => {
    const data = { kind: 'text-input', accept: ['にほんご'] }
    expect(gradeAnswer(q(data, { answers: ['にほんご'] }), { text: 'アメリカ' }).isCorrect).toBe(false)
  })
  test('fill-blank dạng optionId', () => {
    const data = { kind: 'fill-blank', sentence: '私は学生___。', options: [{ id: 'x', text: 'です' }, { id: 'y', text: 'ます' }] }
    expect(gradeAnswer(q(data, { optionId: 'x' }), { optionId: 'x' }).isCorrect).toBe(true)
    expect(gradeAnswer(q(data, { optionId: 'x' }), { optionId: 'y' }).isCorrect).toBe(false)
  })
})

describe('token-order', () => {
  const data = { kind: 'token-order', promptVi: 'Tôi là Linh', tokens: [{ id: 't1', text: 'わたしは' }, { id: 't2', text: 'リン' }, { id: 't3', text: 'です' }] }
  test('đúng thứ tự = đúng', () => {
    expect(gradeAnswer(q(data, { tokenOrder: ['t1', 't2', 't3'] }), { tokenOrder: ['t1', 't2', 't3'] }).isCorrect).toBe(true)
  })
  test('thiếu token = sai (không mất token)', () => {
    expect(gradeAnswer(q(data, { tokenOrder: ['t1', 't2', 't3'] }), { tokenOrder: ['t1', 't2'] }).isCorrect).toBe(false)
  })
  test('sai thứ tự = sai', () => {
    expect(gradeAnswer(q(data, { tokenOrder: ['t1', 't2', 't3'] }), { tokenOrder: ['t2', 't1', 't3'] }).isCorrect).toBe(false)
  })
})

describe('matching', () => {
  const data = {
    kind: 'matching',
    pairs: [
      { id: 'p1', left: { text: 'ねこ' }, right: { text: 'con mèo' } },
      { id: 'p2', left: { text: 'いぬ' }, right: { text: 'con chó' } },
    ],
  }
  test('đủ cặp đúng = đúng', () => {
    expect(gradeAnswer(q(data, { pairs: { p1: 'con mèo', p2: 'con chó' } }), { pairs: { p1: 'con mèo', p2: 'con chó' } }).isCorrect).toBe(true)
  })
  test('một cặp sai = sai', () => {
    expect(gradeAnswer(q(data, { pairs: { p1: 'con mèo', p2: 'con chó' } }), { pairs: { p1: 'con mèo', p2: 'con mèo' } }).isCorrect).toBe(false)
  })
})

describe('speak — ANTI-CHEAT: điểm do server tính', () => {
  const data = { kind: 'speak', speakText: 'わたしはがくせいです', meaningVi: 'Tôi là sinh viên' }
  const correct = { score: 65 }
  test('transcript đúng → đúng, điểm 100', () => {
    const r = gradeAnswer(q(data, correct), { transcription: 'わたしはがくせいです' })
    expect(r.isCorrect).toBe(true)
    expect(r.score).toBe(100)
  })
  test('transcript rác → sai, điểm thấp', () => {
    const r = gradeAnswer(q(data, correct), { transcription: 'xyz abc hoàn toàn khác' })
    expect(r.isCorrect).toBe(false)
    expect(r.score ?? 100).toBeLessThan(65)
  })
  test('KHÔNG tin pronunciationScore từ client (giá trị giả 100 bị bỏ qua)', () => {
    const r = gradeAnswer(q(data, correct), {
      transcription: 'hoàn toàn sai',
      // pronunciationScore đã bị LOẠI khỏi AnswerPayload — request giả mạo
      // đưa field này vào cũng bị bỏ qua (server tự tính từ transcript)
      pronunciationScore: 100,
    } as never)
    expect(r.isCorrect).toBe(false)
    expect(r.score).not.toBe(100)
  })
  test('katakana transcript của câu hiragana vẫn tính tương đồng', () => {
    const r = gradeAnswer(q(data, correct), { transcription: 'わたしはガクセイです' })
    expect(r.score).toBeGreaterThanOrEqual(65)
  })
})

describe('writing — heuristic công khai, clamp đầu vào', () => {
  const data = { kind: 'writing', character: 'あ', strokeCount: 3 }
  test('thiếu nét nhiều + shape thấp → không đạt', () => {
    const r = gradeAnswer(q(data, { score: 60 }), { strokeCount: 0, shapeSimilarity: 50 })
    // strokeScore = 100-3*25 = 25 → 25*0.5 + 50*0.5 = 38 < 60
    expect(r.isCorrect).toBe(false)
    expect(r.score).toBe(38)
  })
  test('đủ nét + shape tốt → đạt', () => {
    const r = gradeAnswer(q(data, { score: 60 }), { strokeCount: 3, shapeSimilarity: 80 })
    expect(r.isCorrect).toBe(true)
    expect(r.score).toBe(90)
  })
  test('shapeSimilarity > 100 bị clamp về 100', () => {
    const r = gradeAnswer(q(data, { score: 60 }), { strokeCount: 3, shapeSimilarity: 9999 })
    expect(r.score).toBeLessThanOrEqual(100)
  })
})

describe('passage sub-questions', () => {
  test('flatten sub-question thành question riêng', () => {
    const data = {
      kind: 'passage',
      lines: [{ text: '本文', vi: 'nội dung' }],
      questions: [
        { type: 'SELECT_MEANING', data: { kind: 'choice', options: [{ id: 'a', text: '1' }, { id: 'b', text: '2' }] }, correct: { optionId: 'a' } },
      ],
    }
    const subs = getPassageSubQuestions(q(data, {}))
    expect(subs).toHaveLength(1)
    expect(subs[0].id).toContain(':0')
    expect(gradeAnswer(subs[0], { optionId: 'a' }).isCorrect).toBe(true)
  })
})
