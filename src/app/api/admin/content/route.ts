import { NextRequest } from 'next/server'
import { ok, route, assertSameOrigin, readJson } from '@/lib/api'
import { requireRole } from '@/lib/auth'
import { listEntity, createEntity, validateEntity } from '@/server/services/adminContent'

export const dynamic = 'force-dynamic'

export const GET = route(async (req: NextRequest) => {
  await requireRole(req, ['EDITOR', 'ADMIN'])
  const entity = validateEntity(req.nextUrl.searchParams.get('entity') ?? '')
  const filters: Record<string, string> = {}
  for (const key of ['courseId', 'sectionId', 'lessonId', 'nodeId', 'exerciseId', 'q']) {
    const v = req.nextUrl.searchParams.get(key)
    if (v) filters[key] = v
  }
  return ok({ items: await listEntity(entity, filters) })
})

export const POST = route(async (req: NextRequest) => {
  assertSameOrigin(req)
  const user = await requireRole(req, ['EDITOR', 'ADMIN'])
  const entity = validateEntity(req.nextUrl.searchParams.get('entity') ?? '')
  const row = await createEntity(entity, await readJson(req), user.id)
  return ok({ item: row })
})
