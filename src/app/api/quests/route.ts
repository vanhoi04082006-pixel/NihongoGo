import { NextRequest } from 'next/server'
import { ok, route } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { getDailyQuests } from '@/server/services/quests'

export const dynamic = 'force-dynamic'

export const GET = route(async (req: NextRequest) => {
  const user = await requireUser(req)
  return ok({ quests: await getDailyQuests(user.id) })
})
