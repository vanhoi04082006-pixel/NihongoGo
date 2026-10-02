import { NextRequest } from 'next/server'
import { ok, route, assertSameOrigin } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { rateLimit } from '@/lib/rate-limit'
import { completeSession } from '@/server/services/lessonSession'

export const POST = route(async (req: NextRequest, ctx: { params: Promise<{ id: string }> }) => {
  assertSameOrigin(req)
  const user = await requireUser(req)
  const { id } = await ctx.params
  rateLimit(`complete:${user.id}`, 20, 60000)
  return ok(await completeSession(user.id, id))
})
