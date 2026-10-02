import { db } from '@/lib/db'
import type { AchievementProgress } from '@/types/gamification'
import { track } from './analytics'
import { getChallengeStreak } from './dailyChallenge'

/** Achievements — server check & unlock, có thưởng XP. */

export async function getAchievements(userId: string): Promise<AchievementProgress[]> {
  const [defs, unlocked] = await Promise.all([
    db.achievement.findMany({ orderBy: [{ category: 'asc' }, { threshold: 'asc' }] }),
    db.userAchievement.findMany({ where: { userId } }),
  ])
  const unlockedMap = new Map(unlocked.map((u) => [u.achievementId, u]))
  const metrics = await computeMetrics(userId)

  return defs.map((d) => {
    const u = unlockedMap.get(d.id)
    const current = metrics[d.metric] ?? 0
    return {
      code: d.code,
      title: d.title,
      description: d.description,
      icon: d.icon,
      tier: d.tier as AchievementProgress['tier'],
      category: d.category,
      threshold: d.threshold,
      current: Math.min(current, d.threshold),
      unlocked: !!u,
      unlockedAt: u?.unlockedAt?.toISOString() ?? null,
    }
  })
}

export async function computeMetrics(userId: string): Promise<Record<string, number>> {
  const user = await db.user.findUnique({
    where: { id: userId },
    include: { progress: true, streak: true },
  })
  if (!user) return {}

  const [kanaMastered, kanjiMastered, vocabMastered, mistakesResolved, questsCompleted, challengeStreak] = await Promise.all([
    db.sRSItem.count({ where: { userId, itemType: 'KANA', mastery: { gte: 3 } } }),
    db.sRSItem.count({ where: { userId, itemType: 'KANJI', mastery: { gte: 3 } } }),
    db.sRSItem.count({ where: { userId, itemType: 'VOCAB', mastery: { gte: 3 } } }),
    db.mistake.count({ where: { userId, resolvedAt: { not: null } } }),
    db.userDailyQuest.count({ where: { userId, completedAt: { not: null } } }),
    getChallengeStreak(userId),
  ])

  const p = user.progress
  return {
    TOTAL_XP: p?.totalXP ?? 0,
    CURRENT_STREAK: user.streak?.currentStreak ?? 0,
    LONGEST_STREAK: user.streak?.longestStreak ?? 0,
    LESSONS_COMPLETED: p?.lessonsCompleted ?? 0,
    PERFECT_LESSONS: p?.perfectLessons ?? 0,
    LISTENING_NODES: p?.listeningNodes ?? 0,
    SPEAKING_NODES: p?.speakingNodes ?? 0,
    KANA_MASTERED: kanaMastered,
    KANJI_MASTERED: kanjiMastered,
    VOCAB_MASTERED: vocabMastered,
    MISTAKES_RESOLVED: mistakesResolved,
    QUESTS_COMPLETED: questsCompleted,
    CHALLENGE_STREAK: challengeStreak,
  }
}

export interface NewlyUnlocked {
  code: string
  title: string
  description: string
  icon: string
  tier: string
  xpReward: number
}

/** Kiểm tra & mở khóa achievement mới. Trả về danh sách mới unlock (để UI chúc mừng). */
export async function checkAchievements(userId: string): Promise<NewlyUnlocked[]> {
  const metrics = await computeMetrics(userId)
  const unlockedRows = await db.userAchievement.findMany({ where: { userId }, select: { achievementId: true } })
  const unlockedIds = new Set(unlockedRows.map((u) => u.achievementId))

  const all = await db.achievement.findMany()
  const newly: NewlyUnlocked[] = []

  for (const a of all) {
    if (unlockedIds.has(a.id)) continue
    const current = metrics[a.metric] ?? 0
    if (current >= a.threshold) {
      await db.userAchievement.create({ data: { userId, achievementId: a.id } })
      newly.push({
        code: a.code,
        title: a.title,
        description: a.description,
        icon: a.icon,
        tier: a.tier,
        xpReward: a.xpReward,
      })
      if (a.xpReward > 0) {
        const { awardXp } = await import('./xp')
        await awardXp(userId, a.xpReward, 'ACHIEVEMENT_REWARD', { refType: 'achievement', refId: a.id }, { bumpQuest: false })
      }
      await track('achievement_unlocked', userId, { achievement: a.code })
    }
  }
  return newly
}
