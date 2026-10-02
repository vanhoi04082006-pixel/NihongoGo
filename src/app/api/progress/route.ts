import { NextRequest } from 'next/server'
import { ok, route } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { db } from '@/lib/db'
import { getStreakInfo, getRecentStreakDays } from '@/server/services/streak'
import { getSrsOverview, getDueStats } from '@/server/services/srs'
import { getMistakeStats } from '@/server/services/mistakes'
import { dateInTz, todayInTz, userTimezone } from '@/lib/datetime'

export const dynamic = 'force-dynamic'

export const GET = route(async (req: NextRequest) => {
  const authUser = await requireUser(req)
  const tz = userTimezone(authUser.profile?.timezone)
  const [progress, streak, srsOverview, dueStats, mistakeStats, userRow] = await Promise.all([
    db.userProgress.findUnique({ where: { userId: authUser.id } }),
    getStreakInfo(authUser.id),
    getSrsOverview(authUser.id),
    getDueStats(authUser.id),
    getMistakeStats(authUser.id),
    db.user.findUnique({ where: { id: authUser.id }, select: { createdAt: true, username: true } }),
  ])

  // Thống kê XP theo ngày (7/30 ngày)
  const today = todayInTz(tz)
  const start30 = dateInTz(new Date(Date.now() - 29 * 86400000), tz)
  const rows = await db.xPTransaction.findMany({
    where: { userId: authUser.id, createdAt: { gte: new Date(start30 + 'T00:00:00Z') } },
    select: { amount: true, createdAt: true },
  })
  const byDate = new Map<string, number>()
  for (const r of rows) {
    const d = dateInTz(r.createdAt, tz)
    byDate.set(d, (byDate.get(d) ?? 0) + r.amount)
  }
  const sumDays = (n: number) => {
    let s = 0
    for (let i = 0; i < n; i++) {
      const d = dateInTz(new Date(Date.now() - i * 86400000), tz)
      if (d <= today) s += byDate.get(d) ?? 0
    }
    return s
  }

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
  })
})
