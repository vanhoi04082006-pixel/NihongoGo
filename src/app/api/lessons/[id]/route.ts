import { NextRequest } from 'next/server'
import { ok, route, notFound } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { getLessonDetail } from '@/server/services/course'

export const dynamic = 'force-dynamic'

export const GET = route(async (req: NextRequest, ctx: { params: Promise<{ id: string }> }) => {
  const user = await requireUser(req)
  const { id } = await ctx.params
  const lesson = await dbFindLesson(id)
  const detail = await getLessonDetail(user.id, lesson.id)
  return ok(detail)
})

async function dbFindLesson(id: string) {
  const { db } = await import('@/lib/db')
  // Không cho đọc bài DRAFT/ARCHIVED: nếu không, chỉ cần biết id/slug là đọc
  // được metadata + từ vựng + ngữ pháp của nội dung chưa xuất bản.
  const lesson = await db.lesson.findFirst({
    where: { OR: [{ id }, { slug: id }], status: 'PUBLISHED' },
    select: { id: true },
  })
  if (!lesson) throw notFound('Không tìm thấy bài học')
  return lesson
}
