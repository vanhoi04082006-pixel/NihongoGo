import { NextRequest } from 'next/server'
import { ok, route } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { db } from '@/lib/db'

export const dynamic = 'force-dynamic'

/**
 * Từ điển từ vựng cho người học: toàn bộ Vocabulary của bài PUBLISHED,
 * nhóm theo bài học (đã sắp thứ tự) để tra cứu + ôn lại.
 * Kèm trạng thái SRS từng từ (đang học / thành thạo / yếu) để lọc theo mức nhớ.
 */
export const GET = route(async (req: NextRequest) => {
  const user = await requireUser(req)
  const [lessons, vocabs, srsItems] = await Promise.all([
    db.lesson.findMany({
      where: { status: 'PUBLISHED' },
      select: { id: true, slug: true, title: true, titleJa: true, order: true },
      orderBy: { order: 'asc' },
    }),
    db.vocabulary.findMany({
      orderBy: { createdAt: 'asc' },
      select: {
        id: true, term: true, reading: true, romaji: true, meaningVi: true, pos: true,
        exampleJa: true, exampleVi: true, lessonId: true,
      },
    }),
    db.sRSItem.findMany({
      where: { userId: user.id, itemType: 'VOCAB' },
      select: { itemKey: true, state: true, mastery: true, reviewCount: true, lapseCount: true, nextReviewAt: true },
    }),
  ])

  // Trạng thái nhớ của từng từ — key theo term (itemKey của seed = term chính)
  const srsByTerm = new Map(srsItems.map((s) => [s.itemKey, s]))
  const statusOf = (term: string) => {
    const s = srsByTerm.get(term)
    if (!s) return { status: 'NEW' as const, mastery: 0, reviewCount: 0, lapseCount: 0, nextReviewAt: null }
    const weak = s.lapseCount >= 2 || (s.reviewCount >= 2 && s.mastery <= 2 && s.state !== 'MASTERED')
    return {
      status: weak ? ('WEAK' as const) : (s.state as 'LEARNING' | 'REVIEW' | 'MASTERED'),
      mastery: s.mastery,
      reviewCount: s.reviewCount,
      lapseCount: s.lapseCount,
      nextReviewAt: s.nextReviewAt?.toISOString() ?? null,
    }
  }

  const lessonById = new Map(lessons.map((l) => [l.id, l]))
  const groupsMap = new Map<string, { lessonId: string | null; lessonSlug: string | null; lessonTitle: string; lessonOrder: number; items: ReturnType<typeof decorate>[] }>()

  type Raw = (typeof vocabs)[number]
  function decorate(v: Raw) {
    return { ...v, srs: statusOf(v.term) }
  }

  for (const v of vocabs) {
    const lesson = v.lessonId ? lessonById.get(v.lessonId) : undefined
    const key = lesson?.id ?? '__none__'
    let g = groupsMap.get(key)
    if (!g) {
      g = {
        lessonId: lesson?.id ?? null,
        lessonSlug: lesson?.slug ?? null,
        lessonTitle: lesson ? `Bài ${lesson.order}: ${lesson.title}` : 'Từ vựng chung',
        lessonOrder: lesson?.order ?? 9999,
        items: [],
      }
      groupsMap.set(key, g)
    }
    g.items.push(decorate(v))
  }

  const groups = [...groupsMap.values()].sort((a, b) => a.lessonOrder - b.lessonOrder)
  const statusCounts = { NEW: 0, LEARNING: 0, REVIEW: 0, MASTERED: 0, WEAK: 0 }
  for (const v of vocabs) statusCounts[statusOf(v.term).status]++

  return ok({
    groups,
    total: vocabs.length,
    lessonCount: groups.filter((g) => g.lessonId).length,
    statusCounts,
  })
})
