import { NextRequest } from 'next/server'
import { ok, route } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { db } from '@/lib/db'
import { getStreakInfo, getRecentStreakDays } from '@/server/services/streak'
import { getSrsOverview, getDueStats } from '@/server/services/srs'
import { getMistakeStats } from '@/server/services/mistakes'
import { dateInTz, dayStartEpoch, mondayOf, shiftDate, todayInTz, userTimezone } from '@/lib/datetime'

export const dynamic = 'force-dynamic'

/** Nhóm reason của XPTransaction thành nguồn học hiển thị trên báo cáo tuần. */
function reasonBucket(reason: string): keyof typeof REASON_BUCKETS {
  if (reason === 'REVIEW') return 'REVIEW'
  if (reason === 'CHALLENGE') return 'CHALLENGE'
  if (reason === 'QUEST_REWARD' || reason === 'ACHIEVEMENT_REWARD') return 'REWARD'
  if (reason === 'PRACTICE') return 'PRACTICE'
  return 'LESSON' // LESSON_COMPLETE | PERFECT_BONUS | FIRST_COMPLETION | COMBO_BONUS | khác
}

const REASON_BUCKETS = { LESSON: 0, REVIEW: 0, CHALLENGE: 0, REWARD: 0, PRACTICE: 0 } as const

export const GET = route(async (req: NextRequest) => {
  const authUser = await requireUser(req)
  const tz = userTimezone(authUser.profile?.timezone)
  const [progress, streak, srsOverview, dueStats, mistakeStats, userRow, challengeCount] = await Promise.all([
    db.userProgress.findUnique({ where: { userId: authUser.id } }),
    getStreakInfo(authUser.id),
    getSrsOverview(authUser.id),
    getDueStats(authUser.id),
    getMistakeStats(authUser.id),
    db.user.findUnique({ where: { id: authUser.id }, select: { createdAt: true, username: true } }),
    db.lessonSession.count({ where: { userId: authUser.id, sessionType: 'CHALLENGE', status: 'COMPLETED' } }),
  ])

  // Thống kê XP theo ngày — ranh giới ngày theo timezone user.
  // Cửa sổ 126 ngày: đủ cho heatmap 17 tuần + báo cáo tuần (tuần trước xa nhất ~13 ngày).
  const today = todayInTz(tz)
  const start126Epoch = dayStartEpoch(new Date(Date.now() - 125 * 86400000), tz)
  const rows = await db.xPTransaction.findMany({
    where: { userId: authUser.id, createdAt: { gte: new Date(start126Epoch) } },
    select: { amount: true, createdAt: true, reason: true },
  })
  const byDate = new Map<string, number>()
  // Báo cáo tuần: XP theo nguồn trong tuần này + tuần trước
  const thisMonday = mondayOf(new Date(), tz)
  const lastMonday = shiftDate(thisMonday, -7)
  const byReason = { ...REASON_BUCKETS } as Record<keyof typeof REASON_BUCKETS, number>
  for (const r of rows) {
    const d = dateInTz(r.createdAt, tz)
    byDate.set(d, (byDate.get(d) ?? 0) + r.amount)
    if (d >= lastMonday && d <= today) {
      const week = d < thisMonday ? 'last' : 'this'
      if (week === 'this') {
        byReason[reasonBucket(r.reason)] += r.amount
      }
    }
  }
  const sumDays = (n: number) => {
    let s = 0
    for (let i = 0; i < n; i++) {
      const d = dateInTz(new Date(Date.now() - i * 86400000), tz)
      if (d <= today) s += byDate.get(d) ?? 0
    }
    return s
  }

  // Báo cáo tuần này (thứ Hai → hôm nay) + tuần trước (đủ 7 ngày)
  const weekDays = (start: string, end: string | null) => {
    const out: { date: string; xp: number }[] = []
    for (let i = 0; i < 7; i++) {
      const d = shiftDate(start, i)
      if (end && d > end) break
      out.push({ date: d, xp: byDate.get(d) ?? 0 })
    }
    return out
  }
  const thisWeekDays = weekDays(thisMonday, today)
  const lastWeekDays = weekDays(lastMonday, null)
  const thisWeek = thisWeekDays.reduce((s, d) => s + d.xp, 0)
  const lastWeek = lastWeekDays.reduce((s, d) => s + d.xp, 0)
  const activeDays = thisWeekDays.filter((d) => d.xp > 0).length
  const bestDay = thisWeekDays.reduce<{ date: string; xp: number } | null>(
    (best, d) => (d.xp > 0 && (!best || d.xp > best.xp) ? { date: d.date, xp: d.xp } : best),
    null
  )

  // Heatmap 17 tuần: bắt đầu từ thứ Hai của tuần cách đây 16 tuần → 119 ngày liền
  const heatStart = shiftDate(thisMonday, -16 * 7)
  const heatmap = Array.from({ length: 17 * 7 }, (_, i) => {
    const d = shiftDate(heatStart, i)
    return { date: d, xp: d <= today ? (byDate.get(d) ?? 0) : -1 } // -1 = tương lai
  })

  return ok({
    profile: {
      username: userRow?.username,
      displayName: userRow?.username,
      joinedAt: userRow?.createdAt?.toISOString() ?? null,
    },
    progress: {
      totalXP: progress?.totalXP ?? 0,
      lessonsCompleted: progress?.lessonsCompleted ?? 0,
      perfectLessons: progress?.perfectLessons ?? 0,
      listeningNodes: progress?.listeningNodes ?? 0,
      speakingNodes: progress?.speakingNodes ?? 0,
      studyTimeSeconds: progress?.studyTimeSeconds ?? 0,
      league: progress?.currentLeague ?? 'SAKURA',
      challengesCompleted: challengeCount,
    },
    streak,
    streak30: await getRecentStreakDays(authUser.id, 30),
    srs: { ...srsOverview, ...dueStats },
    mistakes: mistakeStats,
    xpStats: {
      last7: sumDays(7),
      last30: sumDays(30),
      daily: Array.from({ length: 30 }, (_, i) => {
        const d = dateInTz(new Date(Date.now() - (29 - i) * 86400000), tz)
        return { date: d, xp: byDate.get(d) ?? 0 }
      }),
    },
    weekly: {
      thisWeek,
      lastWeek,
      days: thisWeekDays,
      lastWeekDays,
      activeDays,
      bestDay,
      byReason,
    },
    heatmap,
  })
})
