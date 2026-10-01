import { NextRequest } from 'next/server'
import { ok, route } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { getLeaderboard } from '@/server/services/leaderboard'

export const dynamic = 'force-dynamic'

export const GET = route(async (req: NextRequest) => {
  const user = await requireUser(req)
  const league = req.nextUrl.searchParams.get('league') ?? undefined
  return ok(await getLeaderboard(user.id, league ?? undefined))
})
