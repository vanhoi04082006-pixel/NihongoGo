import { db } from '@/lib/db'
import { badRequest } from '@/lib/api'
import type { QuestCompletedInfo } from './quests'

export interface XpAwardResult {
  amount: number
  totalXP: number
  streakExtended: boolean
  /** Số "Bảo vệ chuỗi" tiêu trong lần này (cầu nối ngày bỏ lỡ). */
  freezesUsed: number
  /** 1 nếu vừa được tặng freeze ở mốc 7 ngày. */
  freezeGranted: number
  /** Quest hằng ngày vừa hoàn thành nhờ lần cộng XP này (để UI chúc mừng). */
  questsCompleted: QuestCompletedInfo[]
}

/**
 * Cộng XP: chỉ qua đây — mọi số liệu do server quyết định.
 * Ghi XPTransaction (nguồn sự thật) + cập nhật aggregate + quest XP_EARNED + streak.
 */
export async function awardXp(
  userId: string,
  amount: number,
  reason: string,
  ref?: { refType?: string; refId?: string },
  opts: { bumpQuest?: boolean } = {}
): Promise<XpAwardResult> {
  if (!Number.isFinite(amount) || amount <= 0) return { amount: 0, totalXP: 0, streakExtended: false, freezesUsed: 0, freezeGranted: 0, questsCompleted: [] }
  if (amount > 500) throw badRequest('Số XP không hợp lệ')

  await db.xPTransaction.create({
    data: {
      userId,
      amount: Math.floor(amount),
      reason,
      refType: ref?.refType,
      refId: ref?.refId,
    },
  })

  const progress = await db.userProgress.upsert({
    where: { userId },
    update: { totalXP: { increment: amount } },
    create: { userId, totalXP: amount },
  })

  let streakExtended = false
  let freezesUsed = 0
  let freezeGranted = 0
  let questsCompleted: QuestCompletedInfo[] = []
  if (opts.bumpQuest !== false) {
    const { bumpQuestProgress } = await import('./quests')
    questsCompleted = await bumpQuestProgress(userId, 'XP_EARNED', amount)
  }
  const { touchStreak } = await import('./streak')
  const streakRes = await touchStreak(userId, amount)
  streakExtended = streakRes.extended
  freezesUsed = streakRes.freezesUsed
  freezeGranted = streakRes.freezeGranted

  return { amount, totalXP: progress.totalXP, streakExtended, freezesUsed, freezeGranted, questsCompleted }
}
