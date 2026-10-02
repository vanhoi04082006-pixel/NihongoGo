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
  srs: {
    state: string
    mastery: number
    reviewCount: number
    lapseCount: number
    nextReviewAt: string | null
  } | null
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
 * Kèm trạng thái SRS từng mẫu câu (mức nhớ 0–5) để hiển thị tiến độ ghi nhớ.
 */
export const GET = route(async (req: NextRequest) => {
  const user = await requireUser(req)
  const [lessons, points, srsItems] = await Promise.all([
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
    db.sRSItem.findMany({
      where: { userId: user.id, itemType: 'GRAMMAR' },
      select: { itemKey: true, state: true, mastery: true, reviewCount: true, lapseCount: true, nextReviewAt: true },
    }),
  ])

  const srsByCode = new Map(srsItems.map((s) => [s.itemKey, s]))

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
    const srs = srsByCode.get(p.code)
    g.items.push({
      id: p.id,
      code: p.code,
      title: p.title,
      explanationVi: p.explanationVi,
      examples: parseExamples(p.examples),
      srs: srs
        ? {
            state: srs.state,
            mastery: srs.mastery,
            reviewCount: srs.reviewCount,
            lapseCount: srs.lapseCount,
            nextReviewAt: srs.nextReviewAt?.toISOString() ?? null,
          }
        : null,
    })
  }

  const groups = [...groupsMap.values()].sort((a, b) => a.lessonOrder - b.lessonOrder)
  const allItems = groups.flatMap((g) => g.items)
  return ok({
    groups,
    total: points.length,
    lessonCount: groups.filter((g) => g.lessonId).length,
    srsCounts: {
      practiced: allItems.filter((i) => i.srs).length,
      mastered: allItems.filter((i) => i.srs && (i.srs.mastery >= 4 || i.srs.state === 'MASTERED')).length,
    },
  })
})
