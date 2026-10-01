import { NextRequest } from 'next/server'
import { ok, route } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { db } from '@/lib/db'

export const dynamic = 'force-dynamic'

interface GrammarExampleDTO {
  ja: string
  vi: string
}

interface GrammarItemDTO {
  id: string
  code: string
  title: string
  explanationVi: string
  examples: GrammarExampleDTO[]
}

/** Parse an toàn chuỗi JSON examples (fallback [] khi hỏng). */
function parseExamples(raw: string): GrammarExampleDTO[] {
  try {
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.flatMap((e): GrammarExampleDTO[] => {
      if (typeof e !== 'object' || e === null) return []
      const rec = e as Record<string, unknown>
      if (typeof rec.ja !== 'string' || typeof rec.vi !== 'string') return []
      return [{ ja: rec.ja, vi: rec.vi }]
    })
  } catch {
    return []
  }
}

/**
 * Sổ tay ngữ pháp cho người học: toàn bộ GrammarPoint,
 * nhóm theo bài học PUBLISHED (đã sắp thứ tự) kèm ví dụ đã parse.
 */
export const GET = route(async (req: NextRequest) => {
  await requireUser(req)
  const [lessons, points] = await Promise.all([
    db.lesson.findMany({
      where: { status: 'PUBLISHED' },
      select: { id: true, slug: true, title: true, titleJa: true, order: true },
      orderBy: { order: 'asc' },
    }),
    db.grammarPoint.findMany({
      orderBy: { createdAt: 'asc' },
      select: {
        id: true, code: true, title: true, explanationVi: true, examples: true, lessonId: true,
      },
    }),
  ])

  const lessonById = new Map(lessons.map((l) => [l.id, l]))
  const groupsMap = new Map<string, {
    lessonId: string | null
    lessonSlug: string | null
    lessonTitle: string
    lessonOrder: number
    items: GrammarItemDTO[]
  }>()

  for (const p of points) {
    const lesson = p.lessonId ? lessonById.get(p.lessonId) : undefined
    const key = lesson?.id ?? '__none__'
    let g = groupsMap.get(key)
    if (!g) {
      g = {
        lessonId: lesson?.id ?? null,
        lessonSlug: lesson?.slug ?? null,
        lessonTitle: lesson ? `Bài ${lesson.order}: ${lesson.title}` : 'Ngữ pháp chung',
        lessonOrder: lesson?.order ?? 9999,
        items: [],
      }
      groupsMap.set(key, g)
    }
    g.items.push({
      id: p.id,
      code: p.code,
      title: p.title,
      explanationVi: p.explanationVi,
      examples: parseExamples(p.examples),
    })
  }

  const groups = [...groupsMap.values()].sort((a, b) => a.lessonOrder - b.lessonOrder)
  return ok({
    groups,
    total: points.length,
    lessonCount: groups.filter((g) => g.lessonId).length,
  })
})
