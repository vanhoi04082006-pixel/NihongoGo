import { NextRequest } from 'next/server'
import { z } from 'zod'
import { ok, route, assertSameOrigin, readJson, badRequest } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { rateLimit } from '@/lib/rate-limit'
import { createNodeSession, createReviewSession, createMistakeSession, createJumpSession } from '@/server/services/lessonSession'

const schema = z.object({
  nodeId: z.string().max(50).optional(),
  mode: z.enum(['LESSON', 'PRACTICE']).default('LESSON'),
  source: z.enum(['node', 'review', 'mistakes', 'jump']).default('node'),
  targetLessonId: z.string().max(50).optional(),
})

export const POST = route(async (req: NextRequest) => {
  assertSameOrigin(req)
  const user = await requireUser(req)
  rateLimit(`session:${user.id}`, 30, 60000)
  const body = schema.safeParse(await readJson(req))
  if (!body.success) throw badRequest('Dữ liệu không hợp lệ')

  if (body.data.source === 'review') {
    return ok(await createReviewSession(user.id))
  }
  if (body.data.source === 'mistakes') {
    return ok(await createMistakeSession(user.id))
  }
  if (body.data.source === 'jump') {
    if (!body.data.targetLessonId) throw badRequest('Thiếu bài học mục tiêu')
    return ok(await createJumpSession(user.id, body.data.targetLessonId))
  }
  if (!body.data.nodeId) throw badRequest('Thiếu nodeId')
  return ok(await createNodeSession(user.id, body.data.nodeId, body.data.mode))
})
