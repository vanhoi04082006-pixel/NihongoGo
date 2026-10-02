/// <reference types="bun-types" />
/**
 * Unit tests — Japanese text utilities (pure functions, không cần DB).
 * Chạy: bun test tests/unit/japanese.test.ts
 */
import { describe, expect, test } from 'bun:test'
import {
  normalizeJapanese,
  katakanaToHiragana,
  hiraganaToKatakana,
  kanaOnly,
  levenshtein,
  similarity,
  pronunciationSimilarity,
  isJapaneseText,
} from '../../src/lib/japanese'

describe('katakanaToHiragana / hiraganaToKatakana', () => {
  test('chuyển katakana → hiragana', () => {
    expect(katakanaToHiragana('センセイ')).toBe('せんせい')
    expect(katakanaToHiragana('ニホンゴ')).toBe('にほんご')
  })
  test('chuyển hiragana → katakana', () => {
    expect(hiraganaToKatakana('せんせい')).toBe('センセイ')
  })
  test('giữ nguyên kanji/latin/ký tự khác', () => {
    expect(katakanaToHiragana('日本語ABC12')).toBe('日本語ABC12')
  })
  test('round-trip không đổi độ dài', () => {
    const s = 'カタカナ と ひらがな 123'
    expect(hiraganaToKatakana(katakanaToHiragana(s)).length).toBe(s.length)
  })
})

describe('normalizeJapanese', () => {
  test('trim + gộp khoảng trắng + bỏ hết khoảng trắng cuối', () => {
    expect(normalizeJapanese('  こんにちは  世界 ')).toBe('こんにちは世界')
  })
  test('dấu câu trong câu được map Latin, dấu câu hai đầu bị bỏ', () => {
    expect(normalizeJapanese('はい、そうです')).toBe('はい,そうです')
    expect(normalizeJapanese('こんにちは。')).toBe('こんにちは') // trailing 。 bỏ
    expect(normalizeJapanese('「はい」')).toBe('はい') // ngoặc hai đầu bỏ
  })
  test('fullwidth → halfwidth', () => {
    expect(normalizeJapanese('ＡＢＣ１２３')).toBe('abc123')
  })
  test('katakana → hiragana (センセイ == せんせい)', () => {
    expect(normalizeJapanese('センセイ')).toBe(normalizeJapanese('せんせい'))
  })
  test('chōonpu ー được giữ (không bị bỏ tùy tiện)', () => {
    expect(normalizeJapanese('ラーメン')).toBe('らーめん')
  })
  test('chuỗi rỗng', () => {
    expect(normalizeJapanese('')).toBe('')
  })
})

describe('kanaOnly', () => {
  test('giữ kana (cả hiragana lẫn katakana) + ー + 々, bỏ kanji/latin', () => {
    expect(kanaOnly('食べますラーメン')).toBe('べますラーメン')
    expect(kanaOnly('AB C 123')).toBe('')
  })
})

describe('levenshtein / similarity', () => {
  test('khoảng cách 0 khi giống nhau', () => {
    expect(levenshtein('こんにちは', 'こんにちは')).toBe(0)
  })
  test('thêm/bớt 1 ký tự = 1', () => {
    expect(levenshtein('あいう', 'あいうえ')).toBe(1)
    expect(levenshtein('あいう', 'あい')).toBe(1)
  })
  test('similarity 100 khi giống', () => {
    expect(similarity('にほんご', 'にほんご')).toBe(100)
  })
  test('similarity 0 khi một bên rỗng', () => {
    expect(similarity('にほんご', '')).toBe(0)
  })
  test('similarity đối xứng và trong khoảng 0-100', () => {
    const a = 'たべもの'
    const b = 'たべかず'
    const s = similarity(a, b)
    expect(s).toBe(similarity(b, a))
    expect(s).toBeGreaterThanOrEqual(0)
    expect(s).toBeLessThanOrEqual(100)
  })
})

describe('pronunciationSimilarity (text similarity — KHÔNG phải acoustic)', () => {
  test('luôn ≥ cả hai thành phần (max của full và kana-only)', () => {
    const expected = 'わたしはりんです'
    const asr = '私は林です'
    const full = similarity(expected, asr)
    const kana = similarity(kanaOnly(expected), kanaOnly(asr))
    const score = pronunciationSimilarity(expected, asr)
    expect(score).toBeGreaterThanOrEqual(full)
    expect(score).toBeGreaterThanOrEqual(kana)
    expect(score).toBe(Math.max(full, kana))
  })
  test('giống hệt = 100', () => {
    expect(pronunciationSimilarity('おはようございます', 'おはようございます')).toBe(100)
  })
  test('katakana vs hiragana đọc như nhau', () => {
    expect(pronunciationSimilarity('センセイ', 'せんせい')).toBe(100)
  })
})

describe('isJapaneseText', () => {
  test('phát hiện kana/kanji', () => {
    expect(isJapaneseText('こんにちは')).toBe(true)
    expect(isJapaneseText('日本')).toBe(true)
  })
  test('latin thuần = false', () => {
    expect(isJapaneseText('hello')).toBe(false)
  })
})
