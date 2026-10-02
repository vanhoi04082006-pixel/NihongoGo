import { db } from '@/lib/db'
import { dateInTz, diffDays, todayInTz, userTimezone } from '@/lib/datetime'
import { track } from './analytics'

/** Số "Bảo vệ chuỗi" (Snowflake) tối đa user có thể tích trữ. */
export const FREEZE_MAX = 2

/** Chuỗi mỗi mốc N ngày (7, 14, 21…) sẽ được tặng 1 freeze. */
const FREEZE_MILESTONE = 7

export interface StreakInfo {
  currentStreak: number
  longestStreak: number
  lastActiveDate: string | null
  todayXP: number
  dailyGoalXP: number
  goalMetToday: boolean
  extended: boolean
  freezeCount: number
  freezeMax: number
}

export interface StreakTouchResult {
  /** true khi streak được kéo dài (không reset). */
  extended: boolean
  /** Số freeze đã tiêu để "cầu nối" qua những ngày bỏ lỡ. */
  freezesUsed: number
  /** 1 nếu vừa được tặng freeze ở mốc 7 ngày. */
  freezeGranted: number
  currentStreak: number
  freezeCount: number
}

/**
 * Cập nhật streak khi user kiếm XP.
 * "Ngày" tính theo timezone trong UserProfile — không dùng UTC thuần.
 * Streak tăng khi đạt Daily Goal (mặc định ≥10 XP, theo cài đặt user).
 *
 * Bảo vệ chuỗi (freeze):
 * - Mỗi freeze bảo vệ đúng 1 ngày bỏ lỡ. Khi quay lại sau `gap-1` ngày nghỉ,
 *   nếu freeze đủ che TOÀN bộ ngày nghỉ → streak nối tiếp (tiêu `gap-1` freeze);
 *   nếu không đủ → streak reset về 1 và KHÔNG tiêu freeze nào.
 * - Chuỗi chạm mốc mới chia hết 7 → tặng 1 freeze (tối đa FREEZE_MAX).
 * - Gọi nhiều lần trong cùng 1 ngày là idempotent (không cộng/tặng hai lần).
 */
export async function touchStreak(userId: string, xpGained: number): Promise<StreakTouchResult> {
  const user = await db.user.findUnique({ where: { id: userId }, include: { profile: true, streak: true } })
  if (!user) return { extended: false, freezesUsed: 0, freezeGranted: 0, currentStreak: 0, freezeCount: 0 }
  const tz = userTimezone(user.profile?.timezone)
  const today = todayInTz(tz)

  const todayXP = await sumXpToday(userId, tz, today)
  const goalMet = todayXP >= (user.profile?.dailyGoalXP ?? 20)

  const streak =
    user.streak ??
    (await db.userStreak.create({ data: { userId } }))

  let extended = false
  let freezesUsed = 0
  let freezeGranted = 0
  let { currentStreak, longestStreak, freezeCount } = streak

  if (goalMet && streak.lastActiveDate !== today) {
    const gap = streak.lastActiveDate ? diffDays(today, streak.lastActiveDate) : null

    if (gap === null) {
      // hoạt động đầu tiên → chuỗi bắt đầu từ 1
      currentStreak = 1
      extended = true
    } else if (gap === 1) {
      // hôm qua đạt goal → streak + 1
      currentStreak = currentStreak + 1
      extended = true
    } else {
      // gap >= 2 → đã bỏ lỡ (gap - 1) ngày
      const missedDays = gap - 1
      if (freezeCount >= missedDays) {
        // đủ freeze che cả khoảng nghỉ → tiêu freeze, chuỗi nối tiếp
        freezesUsed = missedDays
        freezeCount -= missedDays
        currentStreak = currentStreak + 1
        extended = true
      } else {
        // không đủ che toàn bộ → reset 1, GIỮ nguyên freeze
        currentStreak = 1
        extended = false
      }
    }

    // Mốc 7 ngày (7, 14, 21…) → tặng 1 freeze nếu còn chỗ trống
    if (currentStreak > 0 && currentStreak % FREEZE_MILESTONE === 0 && freezeCount < FREEZE_MAX) {
      freezeCount += 1
      freezeGranted = 1
    }

    longestStreak = Math.max(longestStreak, currentStreak)
    await db.userStreak.update({
      where: { userId },
      data: { currentStreak, longestStreak, lastActiveDate: today, freezeCount },
    })
    if (extended) await track('streak_extended', userId, { currentStreak })
    if (freezesUsed > 0) {
      await track('streak_freeze_used', userId, { used: freezesUsed, remaining: freezeCount, currentStreak })
    }
    if (freezeGranted > 0) {
      await track('streak_freeze_granted', userId, { granted: freezeGranted, total: freezeCount, currentStreak })
    }
  }

  return { extended, freezesUsed, freezeGranted, currentStreak, freezeCount }
}

async function sumXpToday(userId: string, tz: string, today: string): Promise<number> {
  const startOfDay = new Date(today + 'T00:00:00Z').getTime() - tzOffsetMs(tz)
  const rows = await db.xPTransaction.findMany({
    where: { userId, createdAt: { gte: new Date(startOfDay), lt: new Date(startOfDay + 86400000) } },
    select: { amount: true },
  })
  return rows.reduce((s, r) => s + r.amount, 0)
}

function tzOffsetMs(tz: string): number {
  // VN cố định +7 — với múi khác dùng offset hiện tại (đủ chính xác cho MVP)
  if (tz === 'Asia/Ho_Chi_Minh' || tz === 'Asia/Saigon') return 7 * 3600000
  const now = new Date()
  const dtf = new Intl.DateTimeFormat('en-US', { timeZone: tz, hour12: false, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' })
  const parts = dtf.formatToParts(now)
  const map: Record<string, number> = {}
  for (const p of parts) map[p.type] = Number(p.value)
  const asUTC = Date.UTC(map.year, map.month - 1, map.day, map.hour % 24, map.minute, map.second)
  return asUTC - now.getTime()
}

export async function getStreakInfo(userId: string): Promise<StreakInfo> {
  const user = await db.user.findUnique({ where: { id: userId }, include: { profile: true, streak: true } })
  if (!user) throw new Error('user not found')
  const tz = userTimezone(user.profile?.timezone)
  const today = todayInTz(tz)
  const todayXP = await sumXpToday(userId, tz, today)
  const dailyGoalXP = user.profile?.dailyGoalXP ?? 20
  return {
    currentStreak: user.streak?.currentStreak ?? 0,
    longestStreak: user.streak?.longestStreak ?? 0,
    lastActiveDate: user.streak?.lastActiveDate ?? null,
    todayXP,
    dailyGoalXP,
    goalMetToday: todayXP >= dailyGoalXP,
    extended: false,
    freezeCount: user.streak?.freezeCount ?? 0,
    freezeMax: FREEZE_MAX,
  }
}

/** Lịch streak 7 ngày gần nhất (cho profile / home widget). */
export async function getRecentStreakDays(userId: string, days = 7): Promise<{ date: string; met: boolean; xp: number }[]> {
  const user = await db.user.findUnique({ where: { id: userId }, include: { profile: true } })
  const tz = userTimezone(user?.profile?.timezone)
  const today = todayInTz(tz)
  const start = new Date(dateInTz(new Date(Date.now() - (days - 1) * 86400000), tz) + 'T00:00:00Z').getTime() - tzOffsetMs(tz)
  const rows = await db.xPTransaction.findMany({
    where: { userId, createdAt: { gte: new Date(start) } },
    select: { amount: true, createdAt: true },
  })
  const byDate = new Map<string, number>()
  for (const r of rows) {
    const d = dateInTz(r.createdAt, tz)
    byDate.set(d, (byDate.get(d) ?? 0) + r.amount)
  }
  const goal = user?.profile?.dailyGoalXP ?? 20
  return Array.from({ length: days }, (_, i) => {
    const d = dateInTz(new Date(Date.now() - (days - 1 - i) * 86400000), tz)
    const xp = byDate.get(d) ?? 0
    return { date: d, met: xp >= goal, xp }
  }).filter((d) => d.date <= today)
}
