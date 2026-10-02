import { NextRequest } from 'next/server'
import { z } from 'zod'
import { ok, route, assertSameOrigin, readJson, badRequest } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { rateLimit } from '@/lib/rate-limit'
import { startKanaPractice } from '@/server/services/kanaPractice'

const schema = z.object({
  set: z.enum(['HIRAGANA', 'KATAKANA']),
  mode: z.enum(['RECOGNIZE', 'RECALL']),
  count: z.number().int().min(3).max(20).optional(),
})

/**
 * Bắt đầu phiên luyện tập kana. Server sinh câu hỏi + giữ đáp án đúng trong bộ nhớ
 * (TTL 20 phút) — response KHÔNG chứa đáp án.
 */
export const POST = route(async (req: NextRequest) => {
  assertSameOrigin(req)
  const user = await requireUser(req)
  rateLimit(`kana-start:${user.id}`, 30, 60_000)
  const body = schema.safeParse(await readJson(req))
  if (!body.success) throw badRequest('Tham số luyện tập không hợp lệ')
  const { set, mode, count } = body.data
  return ok(await startKanaPractice(user.id, set, mode, count))
})
