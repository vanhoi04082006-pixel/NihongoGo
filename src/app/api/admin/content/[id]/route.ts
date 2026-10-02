import { NextRequest } from 'next/server'
import { z } from 'zod'
import { ok, route, assertSameOrigin, readJson, badRequest, forbidden } from '@/lib/api'
import { requireRole } from '@/lib/auth'
import { updateEntity, deleteEntity, validateEntity } from '@/server/services/adminContent'

export const dynamic = 'force-dynamic'

const patchSchema = z.object({
  data: z.record(z.string(), z.any()),
  publish: z.boolean().optional(),
  /** Trạng thái mong muốn (PUBLISHED/ARCHIVED) — tùy chọn */
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).optional(),
})

export const PATCH = route(async (req: NextRequest, ctx: { params: Promise<{ id: string }> }) => {
  assertSameOrigin(req)
  const user = await requireRole(req, ['EDITOR', 'ADMIN'])
  const { id } = await ctx.params
  const entity = validateEntity(req.nextUrl.searchParams.get('entity') ?? '')
  const body = patchSchema.safeParse(await readJson(req))
  if (!body.success) throw badRequest('Dữ liệu không hợp lệ')

  // Chuyển sang PUBLISHED / xóa nội dung → chỉ ADMIN
  const wantsPublish = body.data.status === 'PUBLISHED' || body.data.publish === true
  if (wantsPublish && user.role !== 'ADMIN') {
    throw forbidden('Chỉ ADMIN mới có thể xuất bản nội dung')
  }
  if (body.data.publish === true) {
    body.data.status = 'PUBLISHED'
    delete body.data.publish
  }
  const row = await updateEntity(entity, id, body.data, user.id)
  return ok({ item: row })
})

export const DELETE = route(async (req: NextRequest, ctx: { params: Promise<{ id: string }> }) => {
  assertSameOrigin(req)
  const user = await requireRole(req, ['ADMIN'])
  const { id } = await ctx.params
  const entity = validateEntity(req.nextUrl.searchParams.get('entity') ?? '')
  return ok(await deleteEntity(entity, id, user.id))
})
