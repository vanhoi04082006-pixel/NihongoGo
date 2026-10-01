import { tooMany } from './api'

type Bucket = { count: number; resetAt: number }

const globalForLimiter = globalThis as unknown as {
  __rateBuckets: Map<string, Bucket> | undefined
}

const buckets = (globalForLimiter.__rateBuckets ??= new Map<string, Bucket>())

/** Rate limit trong bộ nhớ (đủ dùng cho dev / single-instance). */
export function rateLimit(key: string, limit: number, windowMs: number) {
  const now = Date.now()
  const bucket = buckets.get(key)
  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return
  }
  bucket.count++
  if (bucket.count > limit) throw tooMany()
  // Dọn dẹp định kỳ để không rò rỉ bộ nhớ
  if (buckets.size > 5000) {
    for (const [k, v] of buckets) {
      if (v.resetAt <= now) buckets.delete(k)
    }
  }
}
