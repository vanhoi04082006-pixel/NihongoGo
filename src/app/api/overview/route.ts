import { NextRequest } from 'next/server'
import { ok, route } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { db } from '@/lib/db'
import { getStreakInfo, getRecentStreakDays } from '@/server/services/streak'
import { getHearts } from '@/server/services/hearts'
import { getDailyQuests } from '@/server/services/quests'
import { getDueStats, getSrsOverview } from '@/server/services/srs'
import { getMistakeStats } from '@/server/services/mistakes'
import { levelFromXp } from '@/server/domain/xp'
import { weekStartEnd } from '@/lib/datetime'

export const dynamic = 'force-dynamic'

/** Snapshot tổng quan cho topbar + widget sidebar + dashboard "Hôm nay". */
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
  const totalXP = progress?.totalXP ?? 0
  const [weekXPRows, srsByType, contentTotals, kanaDone, latestAch] = await Promise.all([
    db.xPTransaction.aggregate({
      where: { userId: user.id, createdAt: { gte: week.startsAt } },
      _sum: { amount: true },
    }),
    db.sRSItem.groupBy({
      by: ['itemType', 'state'],
      where: { userId: user.id, itemType: { in: ['VOCAB', 'KANJI', 'GRAMMAR'] } },
      _count: true,
    }),
    Promise.all([
      db.vocabulary.count(),
      db.grammarPoint.count(),
      db.kanji.count(),
      db.kanaCharacter.count(),
    ]),
    db.kanaProgress.count({ where: { userId: user.id, completedAt: { not: null } } }),
    db.userAchievement.findFirst({
      where: { userId: user.id },
      orderBy: { unlockedAt: 'desc' },
      include: { achievement: true },
    }),
  ])

  const srsCount = (type: string, state: string) =>
    srsByType.find((r) => r.itemType === type && r.state === state)?._count ?? 0
  const srsTotal = (type: string) =>
    srsByType.filter((r) => r.itemType === type).reduce((s, r) => s + r._count, 0)

  const [vocabTotal, grammarTotal, kanjiTotal, kanaTotal] = contentTotals

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
      totalXP,
      weeklyXP: weekXPRows._sum.amount ?? 0,
      lessonsCompleted: progress?.lessonsCompleted ?? 0,
      league: progress?.currentLeague ?? 'SAKURA',
    },
    level: levelFromXp(totalXP),
    streak,
    streakWeek: await getRecentStreakDays(user.id, 7),
    hearts,
    quests,
    review: { ...srs, mistakeStats: mistakes },
    /** Số liệu nội dung — dùng cho dashboard + tiến trình tổng */
    content: {
      vocab: { total: vocabTotal, learning: srsTotal('VOCAB'), mastered: srsCount('VOCAB', 'MASTERED') },
      grammar: { total: grammarTotal, learning: srsTotal('GRAMMAR'), mastered: srsCount('GRAMMAR', 'MASTERED') },
      kanji: { total: kanjiTotal, learning: srsTotal('KANJI'), mastered: srsCount('KANJI', 'MASTERED') },
      kana: { total: kanaTotal, completed: kanaDone },
    },
    /** Thành tích mới nhất vừa mở (nếu có) — hiển thị ở dashboard */
    latestAchievement: latestAch
      ? {
          code: latestAch.achievement.code,
          title: latestAch.achievement.title,
          description: latestAch.achievement.description,
          icon: latestAch.achievement.icon,
          tier: latestAch.achievement.tier,
          xpReward: latestAch.achievement.xpReward,
          unlockedAt: latestAch.unlockedAt.toISOString(),
        }
      : null,
  })
})
