import { NextRequest } from 'next/server'
import { ok, route, assertSameOrigin } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { quitSession } from '@/server/services/lessonSession'

export const POST = route(async (req: NextRequest, ctx: { params: Promise<{ id: string }> }) => {
  assertSameOrigin(req)
  const user = await requireUser(req)
  const { id } = await ctx.params
  return ok(await quitSession(user.id, id))
})
