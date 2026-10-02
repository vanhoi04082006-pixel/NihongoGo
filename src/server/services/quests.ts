import { db } from '@/lib/db'
import { todayInTz, userTimezone } from '@/lib/datetime'
import { track } from './analytics'
import { hashStr } from './quest-utils'
import type { QuestMetric } from '@/types/gamification'

/**
 * Daily Quests — generate 3 quest/người/ngày từ template (chọn tất định
 * theo hash userId+date), tiến độ bump từ các service khi có event thật.
 */

export async function ensureDailyQuests(userId: string): Promise<void> {
  const user = await db.user.findUnique({ where: { id: userId }, include: { profile: true } })
  if (!user) return
  const tz = userTimezone(user.profile?.timezone)
  const today = todayInTz(tz)

  const existing = await db.userDailyQuest.count({ where: { userId, date: today } })
  if (existing >= 3) return

  const templates = await db.questTemplate.findMany({ where: { active: true } })
  if (templates.length === 0) return

  // Chọn 3 template all định (hash userId + date)
  const seed = hashStr(`${userId}:${today}`)
  const pool = [...templates].sort((a, b) => hashStr(a.code + seed) - hashStr(b.code + seed))
  const picked = pool.slice(0, Math.min(3, pool.length))

  for (const t of picked) {
    await db.userDailyQuest.upsert({
      where: { userId_templateId_date: { userId, templateId: t.id, date: today } },
      update: {},
      create: { userId, templateId: t.id, date: today, target: t.target, rewardXP: t.rewardXP },
    })
  }
}

export async function getDailyQuests(userId: string) {
  await ensureDailyQuests(userId)
  const user = await db.user.findUnique({ where: { id: userId }, include: { profile: true } })
  const tz = userTimezone(user?.profile?.timezone)
  const today = todayInTz(tz)
  const quests = await db.userDailyQuest.findMany({
    where: { userId, date: today },
    include: { template: true },
    orderBy: { completedAt: 'asc' },
  })
  return quests.map((q) => ({
    id: q.id,
    code: q.template.code,
    title: q.template.title,
    description: q.template.description,
    icon: q.template.icon,
    progress: Math.min(q.progress, q.target),
    target: q.target,
    rewardXP: q.rewardXP,
    completed: !!q.completedAt,
  }))
}

/** Quest vừa hoàn thành trong lần bump — để UI chúc mừng ngay lập tức. */
export interface QuestCompletedInfo {
  code: string
  title: string
  icon: string
  rewardXP: number
}

export async function bumpQuestProgress(userId: string, metric: QuestMetric, amount: number): Promise<QuestCompletedInfo[]> {
  if (amount <= 0) return []
  const user = await db.user.findUnique({ where: { id: userId }, include: { profile: true } })
  if (!user) return []
  const tz = userTimezone(user.profile?.timezone)
  const today = todayInTz(tz)

  const quests = await db.userDailyQuest.findMany({
    where: { userId, date: today, completedAt: null },
    include: { template: true },
  })

  const completed: QuestCompletedInfo[] = []
  for (const q of quests) {
    if (q.template.metric !== metric) continue
    const progress = Math.min(q.progress + amount, q.target)
    const done = progress >= q.target
    await db.userDailyQuest.update({
      where: { id: q.id },
      data: { progress, completedAt: done ? new Date() : null },
    })
    if (done) {
      completed.push({ code: q.template.code, title: q.template.title, icon: q.template.icon, rewardXP: q.rewardXP })
      await track('quest_completed', userId, { quest: q.template.code })
      const { awardXp } = await import('./xp')
      await awardXp(userId, q.rewardXP, 'QUEST_REWARD', { refType: 'quest', refId: q.id }, { bumpQuest: false })
    }
  }
  return completed
}
