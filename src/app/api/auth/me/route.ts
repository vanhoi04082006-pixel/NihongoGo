import { NextRequest } from 'next/server'
import { ok, route } from '@/lib/api'
import { getUserFromToken, getSessionToken } from '@/lib/auth'

export const dynamic = 'force-dynamic'

export const GET = route(async (req: NextRequest) => {
  const user = await getUserFromToken(getSessionToken(req))
  return ok({ user })
})
