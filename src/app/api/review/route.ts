import { NextRequest } from 'next/server'
import { ok, route } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { getDueStats, getSrsOverview } from '@/server/services/srs'
import { getMistakeStats, getMistakes } from '@/server/services/mistakes'

export const dynamic = 'force-dynamic'

export const GET = route(async (req: NextRequest) => {
  const user = await requireUser(req)
  const [stats, overview, mistakes, mistakeStats] = await Promise.all([
    getDueStats(user.id),
    getSrsOverview(user.id),
    getMistakes(user.id, 30),
    getMistakeStats(user.id),
  ])
  return ok({ stats, overview, mistakes, mistakeStats })
})
