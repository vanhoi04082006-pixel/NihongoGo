import { NextRequest } from 'next/server'
import { z } from 'zod'
import { ok, route, assertSameOrigin, readJson, badRequest } from '@/lib/api'
import { requireRole } from '@/lib/auth'
import { getConfig, setConfig, getHeartConfig } from '@/server/services/config'
import { audit } from '@/server/services/admin'

export const dynamic = 'force-dynamic'

export const GET = route(async (req: NextRequest) => {
  await requireRole(req, ['ADMIN'])
  return ok({
    hearts: await getHeartConfig(),
  })
})

const schema = z.object({
  hearts: z
    .object({
      enabled: z.boolean(),
      maxHearts: z.number().int().min(1).max(10),
      regenMinutes: z.number().int().min(1).max(720),
    })
    .optional(),
})

export const PATCH = route(async (req: NextRequest) => {
  assertSameOrigin(req)
  const user = await requireRole(req, ['ADMIN'])
  const body = schema.safeParse(await readJson(req))
  if (!body.success) throw badRequest('Cấu hình không hợp lệ')
  if (body.data.hearts) {
    const before = await getHeartConfig()
    await setConfig('hearts', body.data.hearts)
    await audit({ adminId: user.id, action: 'CONFIG', entity: 'system', entityId: 'hearts', before, after: body.data.hearts })
  }
  return ok({ hearts: await getConfig('hearts') })
})
