import { NextRequest } from 'next/server'
import { z } from 'zod'
import { ok, route, assertSameOrigin, readJson, badRequest } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { db } from '@/lib/db'
import { track } from '@/server/services/analytics'

const schema = z.object({
  goal: z.enum(['TRAVEL', 'ANIME', 'JLPT', 'WORK', 'STUDY', 'SOCIAL', 'OTHER']).optional(),
  dailyGoalXP: z.number().int().min(10).max(120).optional(),
  kanaKnowledge: z.enum(['NONE', 'SOME', 'HIRAGANA', 'BOTH']).optional(),
  level: z.enum(['BEGINNER', 'ELEMENTARY', 'INTERMEDIATE']).optional(),
  timezone: z.string().max(60).optional(),
  displayName: z.string().min(1).max(50).optional(),
  placementResult: z.unknown().optional(),
})

export const POST = route(async (req: NextRequest) => {
  assertSameOrigin(req)
  const user = await requireUser(req)
  const body = schema.safeParse(await readJson(req))
  if (!body.success) throw badRequest('Dữ liệu onboarding không hợp lệ')

  const data = body.data
  await db.userProfile.update({
    where: { userId: user.id },
    data: {
      goal: data.goal,
      dailyGoalXP: data.dailyGoalXP,
      kanaKnowledge: data.kanaKnowledge,
      level: data.level,
      timezone: data.timezone,
      displayName: data.displayName,
      placementResult: data.placementResult === undefined ? undefined : JSON.stringify(data.placementResult),
      onboardedAt: new Date(),
    },
  })

  // Đã biết kana → đánh dấu hoàn thành các bài kana tương ứng (không cộng XP)
  if (data.kanaKnowledge === 'HIRAGANA' || data.kanaKnowledge === 'BOTH') {
    const kanaLessons = await db.lesson.findMany({
      where: { slug: { in: ['kana-hiragana', ...(data.kanaKnowledge === 'BOTH' ? ['kana-katakana'] : [])] } },
      select: { id: true },
    })
    for (const lesson of kanaLessons) {
      const nodes = await db.lessonNode.findMany({
        where: { lessonId: lesson.id, status: 'PUBLISHED' },
        select: { id: true },
      })
      for (const node of nodes) {
        await db.nodeProgress.upsert({
          where: { userId_nodeId: { userId: user.id, nodeId: node.id } },
          update: { status: 'COMPLETED', bestScore: 100, lastScore: 100, mastery: 5, completedAt: new Date() },
          create: { userId: user.id, nodeId: node.id, status: 'COMPLETED', bestScore: 100, lastScore: 100, mastery: 5, completedAt: new Date() },
        })
      }
      await db.lessonProgress.upsert({
        where: { userId_lessonId: { userId: user.id, lessonId: lesson.id } },
        update: {},
        create: { userId: user.id, lessonId: lesson.id, status: 'COMPLETED', bestScore: 100, timesCompleted: 0, completedAt: new Date() },
      })
    }
  }

  await track('onboarding_completed', user.id, { goal: data.goal, dailyGoalXP: data.dailyGoalXP })
  return ok({ ok: true })
})
