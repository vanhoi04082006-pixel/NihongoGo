import { NextRequest } from 'next/server'
import { z } from 'zod'
import { ok, route, assertSameOrigin, readJson, badRequest } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { db } from '@/lib/db'
import { userTimezone } from '@/lib/datetime'

const schema = z.object({
  displayName: z.string().min(1).max(50).optional(),
  avatarSeed: z.string().max(30).optional(),
  dailyGoalXP: z.number().int().min(10).max(120).optional(),
  timezone: z.string().max(60).optional(),
})

export const PATCH = route(async (req: NextRequest) => {
  assertSameOrigin(req)
  const user = await requireUser(req)
  const body = schema.safeParse(await readJson(req))
  if (!body.success) throw badRequest('Dữ liệu hồ sơ không hợp lệ')
  const { displayName, avatarSeed, dailyGoalXP, timezone } = body.data
  if (timezone) userTimezone(timezone) // validate
  await db.userProfile.update({
    where: { userId: user.id },
    data: {
      displayName: displayName ?? undefined,
      avatarSeed: avatarSeed ?? undefined,
      dailyGoalXP: dailyGoalXP ?? undefined,
      timezone: timezone ?? undefined,
    },
  })
  return ok({ ok: true })
})
