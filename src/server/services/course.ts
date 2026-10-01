import { db } from '@/lib/db'
import { notFound } from '@/lib/api'

/**
 * Course service — dựng Learning Path + trạng thái node theo chuỗi unlock:
 * node trước hoàn thành mới mở node sau; boss quiz xong mới mở lesson sau.
 */

export interface NodeState {
  id: string
  key: string
  title: string
  description: string | null
  icon: string
  nodeType: string
  order: number
  xpReward: number
  requiredScore: number
  difficulty: string
  status: string // PUBLISHED | DRAFT
  exerciseCount: number
  state: 'LOCKED' | 'AVAILABLE' | 'IN_PROGRESS' | 'COMPLETED' | 'MASTERED'
  bestScore: number
  attempts: number
}

export interface LessonState {
  id: string
  slug: string
  order: number
  title: string
  titleJa: string
  description: string
  difficulty: string
  status: string
  state: 'LOCKED' | 'AVAILABLE' | 'IN_PROGRESS' | 'COMPLETED'
  totalNodes: number
  completedNodes: number
  nodes: NodeState[]
}

export interface SectionState {
  id: string
  order: number
  title: string
  titleJa: string | null
  description: string
  lessons: LessonState[]
}

export interface CourseOverview {
  course: { id: string; slug: string; title: string; titleJa: string | null; description: string }
  sections: SectionState[]
  stats: { lessonsCompleted: number; totalLessons: number; currentLessonId: string | null }
}

export async function getCourseOverview(userId: string, courseSlug?: string): Promise<CourseOverview> {
  const course = await db.course.findFirst({
    where: courseSlug ? { slug: courseSlug, status: 'PUBLISHED' } : { status: 'PUBLISHED' },
    orderBy: { order: 'asc' },
    include: {
      sections: {
        orderBy: { order: 'asc' },
        include: {
          lessons: {
            where: { status: { not: 'ARCHIVED' } },
            orderBy: { order: 'asc' },
            include: {
              nodes: {
                orderBy: { order: 'asc' },
                include: { _count: { select: { exercises: { where: { status: 'PUBLISHED' } } } } },
              },
            },
          },
        },
      },
    },
  })
  if (!course) throw notFound('Không tìm thấy khóa học')

  const nodeIds = course.sections.flatMap((s) => s.lessons.flatMap((l) => l.nodes.map((n) => n.id)))
  const progresses = await db.nodeProgress.findMany({ where: { userId, nodeId: { in: nodeIds } } })
  const progressMap = new Map(progresses.map((p) => [p.nodeId, p]))

  const sections: SectionState[] = course.sections.map((section, si) => {
    const lessons: LessonState[] = section.lessons.map((lesson) => {
      const nodes: NodeState[] = lesson.nodes.map((node, ni) => {
        const p = progressMap.get(node.id)
        const playable = node.status === 'PUBLISHED' && node._count.exercises > 0
        const completed = (p?.status === 'COMPLETED' || p?.status === 'MASTERED') && p !== undefined
        const mastered = p?.status === 'MASTERED'

        // Quy tắc unlock: node đầu của lesson đầu của section đầu luôn mở;
        // node mở nếu node TRƯỚC ĐÓ trong lesson completed, hoặc node trước ở lesson trước completed.
        let unlocked: boolean
        if (si === 0 && ni === 0 && lesson.order <= 1) {
          unlocked = true
        } else if (ni > 0) {
          const prev = lesson.nodes[ni - 1]
          const prevP = progressMap.get(prev.id)
          unlocked = (prevP?.status === 'COMPLETED' || prevP?.status === 'MASTERED') ?? false
        } else {
          // lesson đầu tiên của section: phụ thuộc lesson cuối của section trước
          const prevLesson = si > 0 ? course.sections[si - 1].lessons.at(-1) : section.lessons.find((l) => l.order === lesson.order - 1)
          if (!prevLesson) {
            unlocked = true
          } else {
            const boss = prevLesson.nodes.filter((n) => n.status === 'PUBLISHED').at(-1)
            const bossP = boss ? progressMap.get(boss.id) : undefined
            unlocked = boss ? (bossP?.status === 'COMPLETED' || bossP?.status === 'MASTERED') : true
          }
        }

        let state: NodeState['state']
        if (!unlocked || !playable) state = 'LOCKED'
        else if (mastered) state = 'MASTERED'
        else if (completed) state = 'COMPLETED'
        else if (p) state = 'IN_PROGRESS'
        else state = 'AVAILABLE'

        return {
          id: node.id,
          key: node.key,
          title: node.title,
          description: node.description,
          icon: node.icon,
          nodeType: node.nodeType,
          order: node.order,
          xpReward: node.xpReward,
          requiredScore: node.requiredScore,
          difficulty: node.difficulty,
          status: node.status,
          exerciseCount: node._count.exercises,
          state,
          bestScore: p?.bestScore ?? 0,
          attempts: p?.attempts ?? 0,
        }
      })

      const playableNodes = nodes.filter((n) => n.status === 'PUBLISHED' && n.exerciseCount > 0)
      const completedCount = nodes.filter((n) => n.state === 'COMPLETED' || n.state === 'MASTERED').length
      const hasDraft = nodes.some((n) => n.status === 'DRAFT')
      const firstPlayable = playableNodes[0]
      const lessonCompleted = playableNodes.length > 0 && completedCount >= playableNodes.length

      let lessonState: LessonState['state']
      if (hasDraft && playableNodes.length === 0) lessonState = 'LOCKED' // đang biên soạn
      else if (lessonCompleted) lessonState = 'COMPLETED'
      else if (firstPlayable && firstPlayable.state !== 'LOCKED') lessonState = 'AVAILABLE'
      else lessonState = 'LOCKED'

      return {
        id: lesson.id,
        slug: lesson.slug,
        order: lesson.order,
        title: lesson.title,
        titleJa: lesson.titleJa,
        description: lesson.description,
        difficulty: lesson.difficulty,
        status: lesson.status,
        state: lessonState,
        totalNodes: playableNodes.length,
        completedNodes: completedCount,
        nodes,
      }
    })
    return {
      id: section.id,
      order: section.order,
      title: section.title,
      titleJa: section.titleJa,
      description: section.description,
      lessons,
    }
  })

  const allLessons = sections.flatMap((s) => s.lessons)
  const current = allLessons.find((l) => l.state !== 'COMPLETED' && l.state !== 'LOCKED') ?? allLessons.find((l) => l.state !== 'COMPLETED') ?? null

  return {
    course: {
      id: course.id,
      slug: course.slug,
      title: course.title,
      titleJa: course.titleJa,
      description: course.description,
    },
    sections,
    stats: {
      lessonsCompleted: allLessons.filter((l) => l.state === 'COMPLETED').length,
      totalLessons: allLessons.length,
      currentLessonId: current?.id ?? null,
    },
  }
}

export async function getLessonDetail(userId: string, lessonId: string) {
  const lesson = await db.lesson.findUnique({
    where: { id: lessonId },
    include: {
      section: true,
      nodes: {
        orderBy: { order: 'asc' },
        include: { _count: { select: { exercises: { where: { status: 'PUBLISHED' } } } } },
      },
      vocabularies: { orderBy: { createdAt: 'asc' } },
      grammarPoints: { orderBy: { createdAt: 'asc' } },
    },
  })
  if (!lesson) throw notFound('Không tìm thấy bài học')

  const ids = lesson.nodes.map((n) => n.id)
  const progresses = await db.nodeProgress.findMany({ where: { userId, nodeId: { in: ids } } })
  const pMap = new Map(progresses.map((p) => [p.nodeId, p]))

  const overview = await getCourseOverview(userId)
  const lessonState = overview.sections.flatMap((s) => s.lessons).find((l) => l.id === lessonId)

  return {
    lesson: {
      id: lesson.id,
      slug: lesson.slug,
      order: lesson.order,
      title: lesson.title,
      titleJa: lesson.titleJa,
      description: lesson.description,
      learningObjectives: safeJson(lesson.learningObjectives, [] as string[]),
      grammarTopics: safeJson(lesson.grammarTopics, [] as string[]),
      vocabularyTopics: safeJson(lesson.vocabularyTopics, [] as string[]),
      kanjiTopics: safeJson(lesson.kanjiTopics, [] as string[]),
      difficulty: lesson.difficulty,
      status: lesson.status,
      section: { id: lesson.section.id, title: lesson.section.title },
    },
    nodes: lessonState?.nodes ?? [],
    vocabulary: lesson.vocabularies.map((v) => ({
      id: v.id,
      term: v.term,
      reading: v.reading,
      romaji: v.romaji,
      meaningVi: v.meaningVi,
      pos: v.pos,
      exampleJa: v.exampleJa,
      exampleVi: v.exampleVi,
    })),
    grammar: lesson.grammarPoints.map((g) => ({
      id: g.id,
      code: g.code,
      title: g.title,
      explanationVi: g.explanationVi,
      examples: safeJson(g.examples, [] as { ja: string; vi: string }[]),
    })),
  }
}

function safeJson<T>(s: string, fallback: T): T {
  try {
    return JSON.parse(s) as T
  } catch {
    return fallback
  }
}
