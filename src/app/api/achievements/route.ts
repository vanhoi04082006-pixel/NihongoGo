import { NextRequest } from 'next/server'
import { ok, route } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { getAchievements } from '@/server/services/achievements'

export const dynamic = 'force-dynamic'

export const GET = route(async (req: NextRequest) => {
  const user = await requireUser(req)
  return ok({ achievements: await getAchievements(user.id) })
})
