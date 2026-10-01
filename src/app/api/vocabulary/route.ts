import { NextRequest } from 'next/server'
import { ok, route } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { db } from '@/lib/db'

export const dynamic = 'force-dynamic'

/**
 * Từ điển từ vựng cho người học: toàn bộ Vocabulary của bài PUBLISHED,
 * nhóm theo bài học (đã sắp thứ tự) để tra cứu + ôn lại.
 */
export const GET = route(async (req: NextRequest) => {
  await requireUser(req)
  const [lessons, vocabs] = await Promise.all([
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
  ])

  const lessonById = new Map(lessons.map((l) => [l.id, l]))
  const groupsMap = new Map<string, { lessonId: string | null; lessonSlug: string | null; lessonTitle: string; lessonOrder: number; items: typeof vocabs }>()

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
    g.items.push(v)
  }

  const groups = [...groupsMap.values()].sort((a, b) => a.lessonOrder - b.lessonOrder)
  return ok({
    groups,
    total: vocabs.length,
    lessonCount: groups.filter((g) => g.lessonId).length,
  })
})
