import { NextRequest } from 'next/server'
import { ok, route } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { getMistakes, getMistakeStats } from '@/server/services/mistakes'

export const dynamic = 'force-dynamic'

export const GET = route(async (req: NextRequest) => {
  const user = await requireUser(req)
  const [mistakes, stats] = await Promise.all([getMistakes(user.id, 50), getMistakeStats(user.id)])
  return ok({ mistakes, stats })
})
