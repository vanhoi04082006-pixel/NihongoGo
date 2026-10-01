import { db } from '@/lib/db'
import type { Prisma } from '@prisma/client'

/** Sổ lỗi sai — lưu câu user từng sai, luyện lại được. */

export async function recordMistake(input: {
  userId: string
  questionId: string
  nodeId?: string | null
  itemRefType?: string | null
  itemRefKey?: string | null
  prompt: string
  correctAnswer: string
  userAnswer: string
}) {
  await db.mistake.upsert({
    where: { userId_questionId: { userId: input.userId, questionId: input.questionId } },
    update: {
      timesWrong: { increment: 1 },
      resolvedAt: null,
      lastWrongAt: new Date(),
      userAnswer: input.userAnswer.slice(0, 500),
    },
    create: {
      userId: input.userId,
      questionId: input.questionId,
      nodeId: input.nodeId ?? null,
      itemType: input.itemRefType ?? null,
      itemKey: input.itemRefKey ?? null,
      prompt: input.prompt.slice(0, 500),
      correctAnswer: input.correctAnswer.slice(0, 500),
      userAnswer: input.userAnswer.slice(0, 500),
    },
  })
}

export async function resolveMistakeIfExists(userId: string, questionId: string): Promise<boolean> {
  const mistake = await db.mistake.findUnique({
    where: { userId_questionId: { userId, questionId } },
  })
  if (!mistake || mistake.resolvedAt) return false
  await db.mistake.update({
    where: { id: mistake.id },
    data: { resolvedAt: new Date() },
  })
  return true
}

export interface MistakeView {
  id: string
  questionId: string
  prompt: string
  correctAnswer: string
  userAnswer: string
  timesWrong: number
  resolved: boolean
  lastWrongAt: string
  itemRefType: string | null
  itemRefKey: string | null
}

export async function getMistakes(userId: string, limit = 50): Promise<MistakeView[]> {
  const rows = await db.mistake.findMany({
    where: { userId },
    orderBy: { lastWrongAt: 'desc' },
    take: limit,
  })
  return rows.map((m) => ({
    id: m.id,
    questionId: m.questionId,
    prompt: m.prompt,
    correctAnswer: m.correctAnswer,
    userAnswer: m.userAnswer,
    timesWrong: m.timesWrong,
    resolved: !!m.resolvedAt,
    lastWrongAt: m.lastWrongAt.toISOString(),
    itemRefType: m.itemType,
    itemRefKey: m.itemKey,
  }))
}

export async function getMistakeStats(userId: string) {
  const [total, unresolved] = await Promise.all([
    db.mistake.count({ where: { userId } }),
    db.mistake.count({ where: { userId, resolvedAt: null } }),
  ])
  return { total, unresolved }
}

/** Question IDs của các lỗi sai chưa sửa — để build session luyện lại. */
export async function getUnresolvedMistakeQuestionIds(userId: string, limit = 15): Promise<string[]> {
  const rows = await db.mistake.findMany({
    where: { userId, resolvedAt: null },
    orderBy: [{ timesWrong: 'desc' }, { lastWrongAt: 'desc' }],
    take: limit,
    select: { questionId: true },
  })
  return rows.map((r) => r.questionId)
}
