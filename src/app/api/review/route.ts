import { NextRequest } from 'next/server'
import { ok, route } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { userTimezone } from '@/lib/datetime'
import { getDueStats, getReviewForecast, getSrsOverview } from '@/server/services/srs'
import { getMistakeStats, getMistakes } from '@/server/services/mistakes'

export const dynamic = 'force-dynamic'

export const GET = route(async (req: NextRequest) => {
  const user = await requireUser(req)
  const tz = userTimezone(user.profile?.timezone)
  const [stats, overview, mistakes, mistakeStats, forecast] = await Promise.all([
    getDueStats(user.id),
    getSrsOverview(user.id),
    getMistakes(user.id, 30),
    getMistakeStats(user.id),
    getReviewForecast(user.id, tz, 7),
  ])
  return ok({ stats, overview, mistakes, mistakeStats, forecast })
})
