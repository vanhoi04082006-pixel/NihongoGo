import { NextRequest } from 'next/server'
import { ok, route } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { db } from '@/lib/db'
import { getStreakInfo, getRecentStreakDays } from '@/server/services/streak'
import { getHearts } from '@/server/services/hearts'
import { getDailyQuests } from '@/server/services/quests'
import { getDueStats, getSrsOverview } from '@/server/services/srs'
import { getMistakeStats } from '@/server/services/mistakes'
import { weekStartEnd } from '@/lib/datetime'

export const dynamic = 'force-dynamic'

/** Snapshot tổng quan cho topbar + widget sidebar. */
export const GET = route(async (req: NextRequest) => {
  const user = await requireUser(req)
  const [progress, streak, hearts, quests, srs, mistakes] = await Promise.all([
    db.userProgress.findUnique({ where: { userId: user.id } }),
    getStreakInfo(user.id),
    getHearts(user.id),
    getDailyQuests(user.id),
    getDueStats(user.id),
    getMistakeStats(user.id),
  ])
  const week = weekStartEnd()
  const weekXPRows = await db.xPTransaction.aggregate({
    where: { userId: user.id, createdAt: { gte: week.startsAt } },
    _sum: { amount: true },
  })
  return ok({
    user: {
      id: user.id,
      username: user.username,
      displayName: user.profile?.displayName ?? user.username,
      avatarSeed: user.profile?.avatarSeed ?? 'sakura',
      role: user.role,
      onboarded: !!user.profile?.onboardedAt,
      dailyGoalXP: user.profile?.dailyGoalXP ?? 20,
    },
    stats: {
      totalXP: progress?.totalXP ?? 0,
      weeklyXP: weekXPRows._sum.amount ?? 0,
      lessonsCompleted: progress?.lessonsCompleted ?? 0,
      league: progress?.currentLeague ?? 'SAKURA',
    },
    streak,
    streakWeek: await getRecentStreakDays(user.id, 7),
    hearts,
    quests,
    review: { ...srs, mistakeStats: mistakes },
  })
})
