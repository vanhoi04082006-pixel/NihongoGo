import { NextRequest } from 'next/server'
import { ok, route } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { db } from '@/lib/db'

export const dynamic = 'force-dynamic'

/** Danh sách khóa học (đang publish). */
export const GET = route(async (req: NextRequest) => {
  await requireUser(req)
  const courses = await db.course.findMany({
    where: { status: 'PUBLISHED' },
    orderBy: { order: 'asc' },
    select: {
      id: true,
      slug: true,
      title: true,
      titleJa: true,
      description: true,
      _count: { select: { lessons: { where: { status: 'PUBLISHED' } } } },
    },
  })
  return ok({
    courses: courses.map((c) => ({
      id: c.id,
      slug: c.slug,
      title: c.title,
      titleJa: c.titleJa,
      description: c.description,
      lessonCount: c._count.lessons,
    })),
  })
})
