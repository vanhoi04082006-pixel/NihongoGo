import { db } from '@/lib/db'
import { dateInTz, dayStartEpoch, shiftDate, todayInTz, userTimezone } from '@/lib/datetime'
import type { QuestionDataShape } from '@/server/domain/grading'
import { hashStr } from './quest-utils'

/**
 * Daily Challenge — mỗi ngày 1 thử thách 10 câu (all định theo user+date):
 *  - Lấy câu hỏi chấm nhanh (choice / audio-choice / fill-blank / token-order /
 *    text-input / matching) từ các ải user ĐÃ HOÀN THÀNH (ưu tiên) hoặc mọi
 *    nội dung đã xuất bản nếu chưa hoàn thành ải nào.
 *  - KHÔNG tốn tim, chấm server, thưởng +15 XP bonus khi hoàn thành đủ câu.
 *  - 1 lần/ngày: sau khi COMPLETED, tạo phiên mới sẽ bị chặn tới ngày kế.
 */

export const CHALLENGE_QUESTIONS = 10

/** Các dạng câu hỏi phù hợp thử thách (chấm nhanh, không cần mic/canvas). */
const CHALLENGE_KINDS = new Set(['choice', 'audio-choice', 'fill-blank', 'token-order', 'text-input', 'matching'])

export interface ChallengeInfo {
  /** 'YYYY-MM-DD' theo timezone user — ngày của thử thách hiện tại. */
  date: string
  total: number
  completed: boolean
  /** Đã tạo phiên hôm nay nhưng chưa xong (đang dở). */
  inProgress: boolean
  xpEarned: number
  accuracy: number
  correctCount: number
  /** Số ngày thử thách liên tiếp (kể cả hôm nay nếu đã xong). */
  challengeStreak: number
}

/**
 * Chuỗi ngày hoàn thành thử thách liên tiếp (theo timezone user).
 * Hôm nay chưa xong → đếm lùi từ hôm qua (không phá chuỗi hiện tại).
 */
export async function getChallengeStreak(userId: string): Promise<number> {
  const user = await db.user.findUnique({ where: { id: userId }, include: { profile: true } })
  const tz = userTimezone(user?.profile?.timezone)
  const today = todayInTz(tz)

  const rows = await db.lessonSession.findMany({
    where: { userId, sessionType: 'CHALLENGE', status: 'COMPLETED' },
    select: { startedAt: true },
    orderBy: { startedAt: 'desc' },
    take: 400, // đủ cho chuỗi > 1 năm
  })
  if (rows.length === 0) return 0

  const doneDays = new Set(rows.map((r) => dateInTz(r.startedAt, tz)))
  // Chưa xong hôm nay → bắt đầu đếm từ hôm qua để không "gãy" chuỗi giữa ngày
  let cursor = doneDays.has(today) ? today : shiftDate(today, -1)
  let streak = 0
  while (doneDays.has(cursor)) {
    streak++
    cursor = shiftDate(cursor, -1)
    if (streak >= 400) break // an toàn vô hạn
  }
  return streak
}

/** Trạng thái thử thách hôm nay của user (theo timezone user). */
export async function getChallengeInfo(userId: string): Promise<ChallengeInfo> {
  const [user, challengeStreak] = await Promise.all([
    db.user.findUnique({ where: { id: userId }, include: { profile: true } }),
    getChallengeStreak(userId),
  ])
  const tz = userTimezone(user?.profile?.timezone)
  const today = todayInTz(tz)
  const dayStart = new Date(dayStartEpoch(new Date(), tz))

  const session = await db.lessonSession.findFirst({
    where: { userId, sessionType: 'CHALLENGE', startedAt: { gte: dayStart } },
    orderBy: { startedAt: 'desc' },
  })

  return {
    date: today,
    total: CHALLENGE_QUESTIONS,
    completed: session?.status === 'COMPLETED',
    inProgress: session?.status === 'ACTIVE',
    xpEarned: session?.status === 'COMPLETED' ? session.xpEarned : 0,
    accuracy:
      session?.status === 'COMPLETED' && session.totalQuestions > 0
        ? Math.round((session.correctCount / session.totalQuestions) * 100)
        : 0,
    correctCount: session?.status === 'COMPLETED' ? session.correctCount : 0,
    challengeStreak,
  }
}

/**
 * Chọn all định (user + ngày) tối đa 10 câu hỏi cho thử thách.
 * Ưu tiên câu từ ải user đã hoàn thành (ônn tập kiến thức đã học); nếu chưa
 * học ải nào → dùng mọi câu PUBLISHED.
 */
export async function buildChallengeQuestionIds(userId: string): Promise<string[]> {
  const user = await db.user.findUnique({ where: { id: userId }, include: { profile: true } })
  const tz = userTimezone(user?.profile?.timezone)
  const today = todayInTz(tz)
  const seed = hashStr(`${userId}:challenge:${today}`)

  const completedNodes = await db.nodeProgress.findMany({
    where: { userId, status: { in: ['COMPLETED', 'MASTERED'] } },
    select: { nodeId: true },
  })
  const completedIds = completedNodes.map((n) => n.nodeId)

  const baseWhere = {
    exercise: {
      status: 'PUBLISHED' as const,
      node: { status: 'PUBLISHED' as const, lesson: { status: 'PUBLISHED' as const } },
    },
  }

  // Ưu tiên 1: câu trong ải đã hoàn thành
  let ids: string[] = []
  if (completedIds.length > 0) {
    const rows = await db.question.findMany({
      where: { ...baseWhere, exercise: { node: { id: { in: completedIds } } } },
      select: { id: true, data: true },
      take: 400,
      orderBy: { order: 'asc' },
    })
    ids = rows.filter((q) => {
      try {
        return CHALLENGE_KINDS.has((JSON.parse(q.data) as QuestionDataShape).kind)
      } catch {
        return false
      }
    }).map((q) => q.id)
  }

  // Ưu tiên 2: mọi câu PUBLISHED (chưa học ải nào hoặc ưu tiên 1 chưa đủ)
  if (ids.length < CHALLENGE_QUESTIONS) {
    const rows = await db.question.findMany({
      where: baseWhere,
      select: { id: true, data: true },
      take: 800,
      orderBy: { order: 'asc' },
    })
    const pool = rows.filter((q) => {
      try {
        return CHALLENGE_KINDS.has((JSON.parse(q.data) as QuestionDataShape).kind)
      } catch {
        return false
      }
    }).map((q) => q.id)
    const seen = new Set(ids)
    for (const id of pool) {
      if (ids.length >= 200) break
      if (!seen.has(id)) {
        ids.push(id)
        seen.add(id)
      }
    }
  }

  if (ids.length === 0) return []

  // Xáo all định theo seed rồi lấy CHALLENGE_QUESTIONS câu
  for (let i = ids.length - 1; i > 0; i--) {
    const j = hashStr(`${seed}:${i}`) % (i + 1)
    ;[ids[i], ids[j]] = [ids[j], ids[i]]
  }
  return ids.slice(0, CHALLENGE_QUESTIONS)
}
