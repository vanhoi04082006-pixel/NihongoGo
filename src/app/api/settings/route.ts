import { NextRequest } from 'next/server'
import { z } from 'zod'
import { ok, route, assertSameOrigin, readJson, badRequest } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { db } from '@/lib/db'

export const dynamic = 'force-dynamic'

export const GET = route(async (req: NextRequest) => {
  const user = await requireUser(req)
  const settings = await db.userSettings.findUnique({ where: { userId: user.id } })
  return ok({
    settings: {
      theme: settings?.theme ?? 'system',
      soundEnabled: settings?.soundEnabled ?? true,
      romajiDisplay: settings?.romajiDisplay ?? true,
      autoSpeak: settings?.autoSpeak ?? false,
      reducedMotion: settings?.reducedMotion ?? false,
    },
  })
})

const schema = z.object({
  theme: z.enum(['light', 'dark', 'system']).optional(),
  soundEnabled: z.boolean().optional(),
  romajiDisplay: z.boolean().optional(),
  autoSpeak: z.boolean().optional(),
  reducedMotion: z.boolean().optional(),
})

export const PATCH = route(async (req: NextRequest) => {
  assertSameOrigin(req)
  const user = await requireUser(req)
  const body = schema.safeParse(await readJson(req))
  if (!body.success) throw badRequest('Cài đặt không hợp lệ')
  const { theme, soundEnabled, romajiDisplay, autoSpeak, reducedMotion } = body.data
  await db.userSettings.upsert({
    where: { userId: user.id },
    update: {
      theme: theme ?? undefined,
      soundEnabled: soundEnabled ?? undefined,
      romajiDisplay: romajiDisplay ?? undefined,
      autoSpeak: autoSpeak ?? undefined,
      reducedMotion: reducedMotion ?? undefined,
    },
    create: {
      userId: user.id,
      theme: theme ?? 'system',
      soundEnabled: soundEnabled ?? true,
      romajiDisplay: romajiDisplay ?? true,
      autoSpeak: autoSpeak ?? false,
      reducedMotion: reducedMotion ?? false,
    },
  })
  return ok({ ok: true })
})
