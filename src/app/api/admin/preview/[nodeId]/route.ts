import { NextRequest } from 'next/server'
import { ok, route, notFound } from '@/lib/api'
import { requireRole } from '@/lib/auth'
import { db } from '@/lib/db'

export const dynamic = 'force-dynamic'

/** Preview node cho CMS: trả đủ exercise + question (kể cả đáp án) — chỉ ADMIN/EDITOR. */
export const GET = route(async (req: NextRequest, ctx: { params: Promise<{ nodeId: string }> }) => {
  await requireRole(req, ['EDITOR', 'ADMIN'])
  const { nodeId } = await ctx.params
  const node = await db.lessonNode.findUnique({
    where: { id: nodeId },
    include: {
      lesson: { select: { title: true, titleJa: true } },
      exercises: {
        where: { status: { not: 'ARCHIVED' } },
        orderBy: { order: 'asc' },
        include: { questions: { orderBy: { order: 'asc' } } },
      },
    },
  })
  if (!node) throw notFound('Không tìm thấy node')
  return ok({
    node: {
      id: node.id,
      title: node.title,
      description: node.description,
      icon: node.icon,
      nodeType: node.nodeType,
      requiredScore: node.requiredScore,
      lesson: node.lesson,
      exercises: node.exercises.map((ex) => ({
        id: ex.id,
        type: ex.type,
        prompt: ex.prompt,
        instructions: ex.instructions,
        order: ex.order,
        status: ex.status,
        questions: ex.questions.map((q) => ({
          id: q.id,
          type: q.type,
          prompt: q.prompt,
          data: safeJson(q.data),
          correctData: safeJson(q.correctData),
          explanation: q.explanation,
          order: q.order,
          itemRefType: q.itemRefType,
          itemRefKey: q.itemRefKey,
        })),
      })),
    },
  })
})

function safeJson(s: string): unknown {
  try {
    return JSON.parse(s)
  } catch {
    return null
  }
}
