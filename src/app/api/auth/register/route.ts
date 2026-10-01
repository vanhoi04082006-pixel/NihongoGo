import { NextRequest } from 'next/server'
import { z } from 'zod'
import { ok, route, assertSameOrigin, readJson, badRequest } from '@/lib/api'
import { clientIp } from '@/lib/api'
import { rateLimit } from '@/lib/rate-limit'
import { setSessionCookie } from '@/lib/auth'
import { registerUser } from '@/server/services/auth'

const schema = z.object({
  email: z.string().min(3).max(100),
  username: z.string().min(3).max(20),
  password: z.string().min(8).max(100),
  displayName: z.string().max(50).optional(),
})

export const POST = route(async (req: NextRequest) => {
  assertSameOrigin(req)
  rateLimit(`register:${clientIp(req)}`, 10, 60000)
  const body = schema.safeParse(await readJson(req))
  if (!body.success) throw badRequest(body.error.issues[0]?.message ?? 'Dữ liệu không hợp lệ')
  const { user, session } = await registerUser(body.data)
  const res = ok({
    user: {
      id: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
      profile: {
        displayName: user.profile?.displayName ?? user.username,
        onboardedAt: user.profile?.onboardedAt ?? null,
        dailyGoalXP: user.profile?.dailyGoalXP ?? 20,
        timezone: user.profile?.timezone ?? 'Asia/Ho_Chi_Minh',
      },
    },
  })
  setSessionCookie(res, session.token, session.expiresAt)
  return res
})
