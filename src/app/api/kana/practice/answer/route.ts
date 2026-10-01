import { NextRequest } from 'next/server'
import { z } from 'zod'
import { ok, route, assertSameOrigin, readJson, badRequest } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { rateLimit } from '@/lib/rate-limit'
import { gradeKanaAnswer } from '@/server/services/kanaPractice'

const schema = z.object({
  questionId: z.string().min(6).max(64),
  choice: z.string().min(1).max(64),
})

/** Chấm đáp án ở server (câu hỏi dùng một lần) + upsert KanaProgress. */
export const POST = route(async (req: NextRequest) => {
  assertSameOrigin(req)
  const user = await requireUser(req)
  rateLimit(`kana-answer:${user.id}`, 200, 60_000)
  const body = schema.safeParse(await readJson(req))
  if (!body.success) throw badRequest('Câu trả lời không hợp lệ')
  const { questionId, choice } = body.data
  return ok(await gradeKanaAnswer(user.id, questionId, choice))
})
