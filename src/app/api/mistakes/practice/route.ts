import { NextRequest } from 'next/server'
import { ok, route, assertSameOrigin } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { rateLimit } from '@/lib/rate-limit'
import { createMistakeSession } from '@/server/services/lessonSession'

export const POST = route(async (req: NextRequest) => {
  assertSameOrigin(req)
  const user = await requireUser(req)
  rateLimit(`session:${user.id}`, 30, 60000)
  return ok(await createMistakeSession(user.id))
})
