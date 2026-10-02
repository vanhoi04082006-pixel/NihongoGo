import { NextRequest } from 'next/server'
import { ok, route, assertSameOrigin } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { rateLimit } from '@/lib/rate-limit'
import { createChallengeSession } from '@/server/services/lessonSession'

/**
 * Bắt đầu Daily Challenge hôm nay. Server chọn all định 10 câu (user+date),
 * chấm server, đã hoàn thành hôm nay thì trả conflict.
 */
export const POST = route(async (req: NextRequest) => {
  assertSameOrigin(req)
  const user = await requireUser(req)
  rateLimit(`challenge-start:${user.id}`, 10, 60_000)
  return ok(await createChallengeSession(user.id))
})
