import { NextRequest } from 'next/server'
import { ok, route, assertSameOrigin } from '@/lib/api'
import { clearSessionCookie, destroySession, getSessionToken } from '@/lib/auth'

export const POST = route(async (req: NextRequest) => {
  assertSameOrigin(req)
  const token = getSessionToken(req)
  if (token) await destroySession(token)
  const res = ok({ ok: true })
  clearSessionCookie(res)
  return res
})
