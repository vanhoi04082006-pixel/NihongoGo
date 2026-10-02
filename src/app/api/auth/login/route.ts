import { NextRequest } from 'next/server'
import { z } from 'zod'
import { ok, route, assertSameOrigin, readJson, badRequest } from '@/lib/api'
import { clientIp } from '@/lib/api'
import { rateLimit } from '@/lib/rate-limit'
import { setSessionCookie } from '@/lib/auth'
import { loginUser } from '@/server/services/auth'

const schema = z.object({
  email: z.string().min(3).max(100),
  password: z.string().min(1).max(100),
})

export const POST = route(async (req: NextRequest) => {
  assertSameOrigin(req)
  rateLimit(`login:${clientIp(req)}`, 15, 60000)
  const body = schema.safeParse(await readJson(req))
  if (!body.success) throw badRequest('Email hoặc mật khẩu không đúng')
  const { user, session } = await loginUser(body.data)
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
        goal: user.profile?.goal ?? null,
        kanaKnowledge: user.profile?.kanaKnowledge ?? 'NONE',
        level: user.profile?.level ?? 'BEGINNER',
      },
    },
  })
  setSessionCookie(res, session.token, session.expiresAt, req)
  return res
})
