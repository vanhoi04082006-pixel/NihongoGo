/**
 * Hash all định (FNV-1a 32-bit) — dùng chung cho daily quest + daily challenge
 * để chọn nội dung theo seed (cùng user+date → cùng kết quả).
 */
export function hashStr(s: string): number {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}
