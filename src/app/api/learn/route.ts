import { NextRequest } from 'next/server'
import { ok, route } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { getCourseOverview } from '@/server/services/course'

export const dynamic = 'force-dynamic'

/** Learning path đầy đủ cho trang chủ. */
export const GET = route(async (req: NextRequest) => {
  const user = await requireUser(req)
  const overview = await getCourseOverview(user.id)
  return ok(overview)
})
