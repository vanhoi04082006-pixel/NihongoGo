import { db } from '@/lib/db'
import { weekStartEnd } from '@/lib/datetime'

/**
 * Leaderboard tuần — XP được tổng hợp từ XPTransaction (server-verified),
 * reset theo tuần (Thứ Hai, timezone Asia/Ho_Chi_Minh).
 * League: SAKURA → FUJI → SAMURAI → SHOGUN. Top 3 thăng hạng, bottom 3 xuống hạng.
 */

const LEAGUE_ORDER = ['SAKURA', 'FUJI', 'SAMURAI', 'SHOGUN'] as const

export interface LeaderboardRow {
  rank: number
  userId: string
  username: string
  displayName: string
  avatarSeed: string
  weeklyXP: number
  isCurrentUser: boolean
}

export interface LeaderboardView {
  league: string
  leagues: { key: string; name: string; description: string; icon: string }[]
  seasonKey: string
  endsAt: string
  rows: LeaderboardRow[]
  userRank: number | null
  promotionCount: number
  demotionCount: number
}

const LEAGUE_META: Record<string, { name: string; description: string; icon: string }> = {
  SAKURA: { name: 'Sakura', description: 'Hoa anh đào — giải khởi đầu', icon: 'Flower2' },
  FUJI: { name: 'Fuji', description: 'Núi Phú Sĩ — leo lên đỉnh', icon: 'Mountain' },
  SAMURAI: { name: 'Samurai', description: 'Chiến binh — kỹ năng tinh thông', icon: 'Swords' },
  SHOGUN: { name: 'Shogun', description: 'Tướng quân — đỉnh cao danh vọng', icon: 'Crown' },
}

export async function getLeaderboard(userId: string, league?: string): Promise<LeaderboardView> {
  // Xác định league của user
  const progress = await db.userProgress.findUnique({ where: { userId } })
  const userLeague = league ?? progress?.currentLeague ?? 'SAKURA'

  await rolloverIfNeeded()

  const { seasonKey, endsAt } = weekStartEnd()

  // Đồng bộ entries từ XPTransaction (nguồn sự thật)
  const weekStart = weekStartEnd().startsAt
  const xpRows = await db.xPTransaction.groupBy({
    by: ['userId'],
    where: { createdAt: { gte: weekStart } },
    _sum: { amount: true },
  })
  const xpMap = new Map(xpRows.map((r) => [r.userId, r._sum.amount ?? 0]))

  const leagueUsers = await db.user.findMany({
    where: { progress: { currentLeague: userLeague } },
    include: { profile: true, progress: true },
  })

  const board = await db.leaderboard.upsert({
    where: { seasonKey_league: { seasonKey, league: userLeague } },
    update: {},
    create: { seasonKey, league: userLeague, startsAt: weekStart, endsAt },
  })

  for (const u of leagueUsers) {
    const weeklyXP = xpMap.get(u.id) ?? 0
    await db.leaderboardEntry.upsert({
      where: { leaderboardId_userId: { leaderboardId: board.id, userId: u.id } },
      update: { weeklyXP, updatedAt: new Date() },
      create: { leaderboardId: board.id, userId: u.id, weeklyXP },
    })
  }

  const entries = await db.leaderboardEntry.findMany({
    where: { leaderboardId: board.id },
    include: { user: { include: { profile: true } } },
    orderBy: { weeklyXP: 'desc' },
  })

  const rows: LeaderboardRow[] = entries
    .sort((a, b) => b.weeklyXP - a.weeklyXP)
    .map((e, i) => ({
      rank: i + 1,
      userId: e.user.id,
      username: e.user.username,
      displayName: e.user.profile?.displayName ?? e.user.username,
      avatarSeed: e.user.profile?.avatarSeed ?? 'sakura',
      weeklyXP: e.weeklyXP,
      isCurrentUser: e.user.id === userId,
    }))

  // Ghi rank hiện tại
  for (let i = 0; i < entries.length; i++) {
    if (rows[i].weeklyXP > 0) {
      await db.leaderboardEntry.update({ where: { id: entries[i].id }, data: { rank: i + 1 } }).catch(() => {})
    }
  }

  return {
    league: userLeague,
    leagues: LEAGUE_ORDER.map((k) => ({ key: k, ...LEAGUE_META[k] })),
    seasonKey,
    endsAt: endsAt.toISOString(),
    rows,
    userRank: rows.find((r) => r.isCurrentUser)?.rank ?? null,
    promotionCount: 3,
    demotionCount: 3,
  }
}

/** Sang tuần mới → finalize tuần trước: thăng/hạng cho top/bottom. */
async function rolloverIfNeeded() {
  const { seasonKey } = weekStartEnd()
  const active = await db.leaderboard.findMany({ where: { status: 'ACTIVE' } })
  for (const board of active) {
    if (board.seasonKey >= seasonKey) continue
    await finalizeBoard(board.id, board.league)
  }
}

async function finalizeBoard(leaderboardId: string, league: string) {
  const entries = await db.leaderboardEntry.findMany({
    where: { leaderboardId, weeklyXP: { gt: 0 } },
    orderBy: { weeklyXP: 'desc' },
  })
  const idx = LEAGUE_ORDER.indexOf(league as (typeof LEAGUE_ORDER)[number])
  for (let i = 0; i < entries.length; i++) {
    const e = entries[i]
    let nextLeague = league
    if (i < 3 && idx < LEAGUE_ORDER.length - 1) nextLeague = LEAGUE_ORDER[idx + 1]
    else if (i >= entries.length - 3 && idx > 0) nextLeague = LEAGUE_ORDER[idx - 1]
    await db.userProgress.upsert({
      where: { userId: e.userId },
      update: { currentLeague: nextLeague, lastWeekRank: i + 1 },
      create: { userId: e.userId, currentLeague: nextLeague, lastWeekRank: i + 1 },
    })
  }
  await db.leaderboard.update({ where: { id: leaderboardId }, data: { status: 'FINISHED' } })
}

export function leagueMeta() {
  return LEAGUE_ORDER.map((k) => ({ key: k, ...LEAGUE_META[k] }))
}
