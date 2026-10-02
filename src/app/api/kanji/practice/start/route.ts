import { NextRequest } from 'next/server'
import { z } from 'zod'
import { ok, route, assertSameOrigin, readJson, badRequest } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { rateLimit } from '@/lib/rate-limit'
import { startKanjiPractice } from '@/server/services/kanjiPractice'

const schema = z.object({
  mode: z.enum(['MEANING', 'CHARACTER', 'READING']),
  jlpt: z.number().int().min(1).max(5).nullable().optional(),
  count: z.number().int().min(3).max(20).optional(),
})

/**
 * Bắt đầu phiên luyện tập Kanji. Server sinh câu hỏi + giữ đáp án đúng trong bộ nhớ
 * (TTL 20 phút) — response KHÔNG chứa đáp án.
 */
export const POST = route(async (req: NextRequest) => {
  assertSameOrigin(req)
  const user = await requireUser(req)
  rateLimit(`kanji-start:${user.id}`, 30, 60_000)
  const body = schema.safeParse(await readJson(req))
  if (!body.success) throw badRequest('Tham số luyện tập không hợp lệ')
  const { mode, jlpt, count } = body.data
  return ok(await startKanjiPractice(user.id, mode, jlpt ?? null, count))
})
