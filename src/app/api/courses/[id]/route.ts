import { NextRequest } from 'next/server'
import { ok, route, notFound } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { db } from '@/lib/db'

export const dynamic = 'force-dynamic'

export const GET = route(async (req: NextRequest, ctx: { params: Promise<{ id: string }> }) => {
  await requireUser(req)
  const { id } = await ctx.params
  const course = await db.course.findFirst({
    where: { OR: [{ id }, { slug: id }], status: 'PUBLISHED' },
    include: {
      sections: {
        orderBy: { order: 'asc' },
        select: {
          id: true,
          title: true,
          titleJa: true,
          description: true,
          order: true,
          lessons: {
            where: { status: { not: 'ARCHIVED' } },
            orderBy: { order: 'asc' },
            select: { id: true, slug: true, order: true, title: true, titleJa: true, difficulty: true, status: true },
          },
        },
      },
    },
  })
  if (!course) throw notFound('Không tìm thấy khóa học')
  return ok({
    course: {
      id: course.id,
      slug: course.slug,
      title: course.title,
      titleJa: course.titleJa,
      description: course.description,
    },
    sections: course.sections,
  })
})
