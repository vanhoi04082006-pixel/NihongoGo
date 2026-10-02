import { NextRequest } from 'next/server'
import { ok, route } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { getSession } from '@/server/services/lessonSession'

export const dynamic = 'force-dynamic'

export const GET = route(async (req: NextRequest, ctx: { params: Promise<{ id: string }> }) => {
  const user = await requireUser(req)
  const { id } = await ctx.params
  return ok(await getSession(user.id, id))
})
