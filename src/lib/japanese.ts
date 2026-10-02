/**
 * Tiện ích xử lý văn bản tiếng Nhật: chuẩn hóa, chuyển kana, độ tương đồng.
 * Pure functions — dễ kiểm thử độc lập.
 */

const KATAKANA_START = 0x30a1 // ァ
const KATAKANA_END = 0x30f6 // ヶ

export function katakanaToHiragana(s: string): string {
  let out = ''
  for (const ch of s) {
    const code = ch.codePointAt(0)!
    if (code >= KATAKANA_START && code <= KATAKANA_END) {
      out += String.fromCodePoint(code - 0x60)
    } else {
      out += ch
    }
  }
  return out
}

export function hiraganaToKatakana(s: string): string {
  let out = ''
  for (const ch of s) {
    const code = ch.codePointAt(0)!
    if (code >= 0x3041 && code <= 0x3096) {
      out += String.fromCodePoint(code + 0x60)
    } else {
      out += ch
    }
  }
  return out
}

const PUNCT_MAP: Record<string, string> = {
  '。': '.',
  '、': ',',
  '！': '!',
  '？': '?',
  '「': '',
  '」': '',
  '『': '',
  '』': '',
  '・': '',
  '～': '~',
  '〜': '~',
  '　': ' ',
  '：': ':',
  '；': ';',
  '（': '(',
  '）': ')',
}

/**
 * Chuẩn hóa câu tiếng Nhật để so sánh:
 * trim + gộp khoảng trắng, katakana → hiragana, dấu câu Nhật → Latin,
 * fullwidth → halfwidth, lowercase, và BỎ dấu câu ở hai đầu chuỗi
 * (người dùng gõ "こんにちは。" hoặc " こんにちは " đều khớp "こんにちは").
 */
export function normalizeJapanese(input: string): string {
  if (!input) return ''
  let s = input.normalize('NFC').trim()
  s = s.replace(/[\s]+/g, ' ')
  let out = ''
  for (const ch of s) {
    const mapped = PUNCT_MAP[ch]
    if (mapped !== undefined) {
      out += mapped
      continue
    }
    const code = ch.codePointAt(0)!
    // Fullwidth A-Z a-z 0-9 → halfwidth
    if (code >= 0xff01 && code <= 0xff5e) {
      out += String.fromCodePoint(code - 0xfee0)
      continue
    }
    out += ch
  }
  out = katakanaToHiragana(out)
  out = out.replace(/\s+/g, '').toLowerCase()
  // Dấu câu ở hai đầu không tham gia so khớp (。-!?~,;:… và ngoặc)
  out = out.replace(/^[.\-_,!?~:;()「」『』・]+/, '').replace(/[.\-_,!?~:;()「」『』・]+$/, '')
  return out
}

/** Chỉ giữ lại ký tự kana (bỏ kanji/latin/dấu câu) — dùng cho so khớp "kana-only". */
export function kanaOnly(s: string): string {
  return Array.from(s)
    .filter((ch) => {
      const code = ch.codePointAt(0)!
      return (code >= 0x3040 && code <= 0x30ff) || ch === 'ー' || ch === '々'
    })
    .join('')
}

export function levenshtein(a: string, b: string): number {
  if (a === b) return 0
  if (!a.length) return b.length
  if (!b.length) return a.length
  const prev = new Array<number>(b.length + 1)
  const curr = new Array<number>(b.length + 1)
  for (let j = 0; j <= b.length; j++) prev[j] = j
  for (let i = 1; i <= a.length; i++) {
    curr[0] = i
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost)
    }
    for (let j = 0; j <= b.length; j++) prev[j] = curr[j]
  }
  return prev[b.length]
}

/** Độ tương đồng 0-100 giữa hai chuỗi đã normalize. */
export function similarity(a: string, b: string): number {
  const na = normalizeJapanese(a)
  const nb = normalizeJapanese(b)
  if (!na && !nb) return 100
  if (!na || !nb) return 0
  const dist = levenshtein(na, nb)
  const maxLen = Math.max(na.length, nb.length)
  return Math.max(0, Math.round((1 - dist / maxLen) * 100))
}

/**
 * Độ tương đồng cho phát âm: max của so khớp toàn văn và so khớp chỉ-kana
 * (ASR có thể trả về kanji xen kẽ → phần kana vẫn so được).
 * Lưu ý: đây là text similarity, KHÔNG phải đánh giá âm vị học.
 */
export function pronunciationSimilarity(expected: string, actual: string): number {
  const full = similarity(expected, actual)
  const kana = similarity(kanaOnly(expected), kanaOnly(actual))
  return Math.max(full, kana)
}

export function isJapaneseText(s: string): boolean {
  return /[\u3040-\u30ff\u4e00-\u9faf]/.test(s)
}
