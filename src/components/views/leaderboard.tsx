'use client'

import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { Trophy, TrendingUp, TrendingDown, Minus, Radio, Zap, Users, RotateCw } from 'lucide-react'
import { api } from '@/lib/client/api'
import { useLeaderboardLive, type LiveGain } from '@/components/app/use-leaderboard-live'
import { LoadingBlock, ErrorBlock, PageHeader, AvatarBubble } from '@/components/shared/widgets'
import { DynamicIcon } from '@/components/shared/icon'
import { cn } from '@/lib/utils'

interface LeaderboardDTO {
  league: string
  leagues: { key: string; name: string; description: string; icon: string }[]
  seasonKey: string
  endsAt: string
  rows: {
    rank: number
    userId: string
    username: string
    displayName: string
    avatarSeed: string
    weeklyXP: number
    isCurrentUser: boolean
  }[]
  userRank: number | null
  promotionCount: number
  demotionCount: number
}

const LEAGUE_STYLE: Record<string, string> = {
  SAKURA: 'from-sakura/20 to-sakura/5 border-sakura/40',
  FUJI: 'from-primary/20 to-primary/5 border-primary/40',
  SAMURAI: 'from-warning/20 to-warning/5 border-warning/40',
  SHOGUN: 'from-success/20 to-success/5 border-success/40',
}

const GAIN_REASON_LABEL: Record<string, string> = {
  LESSON_COMPLETE: 'Hoàn thành bài học',
  PERFECT_BONUS: 'Thưởng hoàn hảo',
  FIRST_COMPLETION: 'Lần đầu hoàn thành',
  COMBO_BONUS: 'Thưởng combo',
  QUEST_REWARD: 'Phần thưởng nhiệm vụ',
  ACHIEVEMENT_REWARD: 'Thưởng thành tích',
  REVIEW: 'Ôn tập',
  PRACTICE: 'Luyện tập',
  CHALLENGE: 'Thử thách hàng ngày',
}

const GAIN_MAX_AGE_MS = 10 * 60_000 // chip quá 10 phút tự ẩn

function relativeTime(at: number, now: number): string {
  const diff = now - at
  if (diff < 60_000) return 'vừa xong'
  const minutes = Math.floor(diff / 60_000)
  if (minutes < 60) return `${minutes} phút trước`
  return `${Math.floor(minutes / 60)} giờ trước`
}

/* ------------------------------ Live strip ------------------------------- */

function LiveStatusStrip({
  connected,
  onlineCount,
  recentGains,
  lastSyncAt,
  onReconnect,
}: {
  connected: boolean
  onlineCount: number
  recentGains: LiveGain[]
  lastSyncAt: number
  onReconnect: () => void
}) {
  const [now, setNow] = useState(() => Date.now())

  // Tick 15s để làm mới nhãn thời gian tương đối (chip + last-sync)
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 15_000)
    return () => clearInterval(t)
  }, [])

  const freshGains = recentGains.filter((g: LiveGain) => now - g.at < GAIN_MAX_AGE_MS)
  const syncLabel = lastSyncAt > 0 ? clockTime(lastSyncAt) : null

  return (
    <div className="rounded-2xl border bg-card p-3 mb-4 flex items-center gap-3 flex-wrap" role="status" aria-label="Trạng thái trực tiếp bảng xếp hạng">
      <span className="flex items-center gap-1.5 shrink-0">
        <span
          className={cn(
            'h-2.5 w-2.5 rounded-full',
            connected ? 'bg-success animate-pulse' : 'bg-muted-foreground/40'
          )}
          aria-hidden
        />
        <Radio className={cn('h-4 w-4', connected ? 'text-success' : 'text-muted-foreground/60')} aria-hidden />
        <span className={cn('text-sm font-bold whitespace-nowrap', connected ? 'text-success' : 'text-muted-foreground')}>
          {connected ? 'Trực tiếp' : 'Ngoại tuyến'}
        </span>
      </span>

      {connected && (
        <span className="flex items-center gap-1.5 text-sm text-muted-foreground whitespace-nowrap shrink-0">
          <Users className="h-3.5 w-3.5" aria-hidden />
          {onlineCount} người online
        </span>
      )}

      {!connected && (
        <span className="flex items-center gap-2 shrink-0">
          {syncLabel && (
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              Dữ liệu lúc {syncLabel}
            </span>
          )}
          <button
            type="button"
            onClick={onReconnect}
            className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-bold text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Thử kết nối lại bảng xếp hạng trực tiếp"
          >
            <RotateCw className="h-3 w-3" aria-hidden />
            Kết nối lại
          </button>
        </span>
      )}

      {connected && freshGains.length > 0 && (
        <span className="flex gap-2 overflow-x-auto nice-scroll min-w-0 flex-1 py-0.5" aria-label="Hoạt động XP gần đây">
          {freshGains.map((g) => (
            <motion.span
              key={`${g.userId}-${g.at}-${g.xpDelta}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="shrink-0 rounded-full border bg-card px-2.5 py-1 text-xs flex items-center gap-1.5 whitespace-nowrap cursor-default"
              title={GAIN_REASON_LABEL[g.reason] ?? g.reason}
            >
              <Zap className="h-3 w-3 text-warning shrink-0" aria-hidden />
              <span className="font-semibold truncate max-w-32">{g.displayName}</span>
              <span className="text-success font-bold tabular-nums">+{g.xpDelta} XP</span>
              <span className="text-muted-foreground">{relativeTime(g.at, now)}</span>
            </motion.span>
          ))}
        </span>
      )}
    </div>
  )
}

/** 'HH:MM' của một epoch-ms (giờ máy người xem). */
function clockTime(at: number): string {
  const d = new Date(at)
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}

export function LeaderboardView() {
  const [league, setLeague] = useState<string | null>(null)
  const live = useLeaderboardLive()
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['leaderboard', league],
    queryFn: () => api<LeaderboardDTO>(`/api/leaderboard${league ? `?league=${league}` : ''}`),
    // Socket rớt → tự làm mới dữ liệu định kỳ để bảng vẫn cập nhật
    refetchInterval: live.connected ? false : 45_000,
    refetchIntervalInBackground: false,
  })

  const daysLeft = data ? Math.max(0, Math.ceil((new Date(data.endsAt).getTime() - Date.now()) / 86400000)) : 0

  if (isLoading) return <LoadingBlock label="Đang tính bảng xếp hạng…" />
  if (error || !data) return <ErrorBlock message="Không tải được bảng xếp hạng." onRetry={() => refetch()} />

  return (
    <div>
      <PageHeader
        icon="Trophy"
        title="Bảng xếp hạng tuần"
        sub={`Mùa giải ${data.seasonKey} · còn ${daysLeft} ngày · XP do server xác thực`}
      />

      {/* Live strip — cập nhật realtime qua socket.io (mini-service leaderboard-live);
          khi socket không nối được: hiện thời điểm đồng bộ + nút kết nối lại,
          dữ liệu tự làm mới qua polling 45s */}
      <LiveStatusStrip
        connected={live.connected}
        onlineCount={live.onlineCount}
        recentGains={live.recentGains}
        lastSyncAt={live.lastSyncAt}
        onReconnect={live.reconnect}
      />

      {/* League tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
        {data.leagues.map((l) => {
          const active = data.league === l.key
          return (
            <button
              key={l.key}
              onClick={() => setLeague(active ? null : l.key)}
              className={cn(
                'rounded-2xl border-2 bg-gradient-to-br p-4 text-left transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring',
                active ? LEAGUE_STYLE[l.key] + ' shadow-lg scale-[1.02]' : 'border-border from-card to-card hover:border-primary/30'
              )}
              aria-pressed={active}
            >
              <div className="flex items-center gap-2 mb-1">
                <DynamicIcon name={l.icon} className={cn('h-5 w-5', active ? 'text-foreground' : 'text-muted-foreground')} />
                <span className="font-extrabold">{l.name}</span>
              </div>
              <p className="text-[11px] text-muted-foreground leading-snug">{l.description}</p>
            </button>
          )
        })}
      </div>

      {/* User rank callout */}
      {data.userRank && (
        <div className="rounded-2xl border-2 border-primary/40 bg-primary/5 p-4 mb-4 flex items-center gap-4">
          <span className="text-2xl font-black tabular-nums text-primary">#{data.userRank}</span>
          <div className="flex-1">
            <p className="font-bold">Xếp hạng của bạn</p>
            <p className="text-xs text-muted-foreground">
              Top {data.promotionCount} thăng hạng · bottom {data.demotionCount} xuống hạng vào đầu tuần sau
            </p>
          </div>
        </div>
      )}

      {/* Rows */}
      <div className="rounded-2xl border bg-card overflow-hidden">
        {data.rows.map((row, i) => {
          const trend = row.rank <= 3 ? 'up' : row.rank >= data.rows.length - 2 ? 'down' : 'mid'
          return (
            <div
              key={row.userId}
              className={cn(
                'flex items-center gap-3.5 px-4 py-3 border-b last:border-0',
                row.isCurrentUser && 'bg-primary/5 border-l-4 border-l-primary',
                i === 0 && 'bg-warning/5'
              )}
            >
              <span
                className={cn(
                  'w-9 text-center font-black tabular-nums shrink-0',
                  row.rank === 1 ? 'text-lg text-warning' : row.rank <= 3 ? 'text-warning/80' : 'text-muted-foreground'
                )}
              >
                {row.rank}
              </span>
              <AvatarBubble seed={row.avatarSeed} displayName={row.displayName} className="h-10 w-10" />
              <div className="min-w-0 flex-1">
                <p className="font-bold truncate">
                  {row.displayName}
                  {row.isCurrentUser && <span className="text-xs font-bold text-primary ml-1.5">(bạn)</span>}
                </p>
                <p className="text-xs text-muted-foreground truncate">@{row.username}</p>
              </div>
              {trend === 'up' && <TrendingUp className="h-4 w-4 text-success shrink-0" aria-label="đang thăng hạng" />}
              {trend === 'down' && <TrendingDown className="h-4 w-4 text-destructive shrink-0" aria-label="nguy hiểm xuống hạng" />}
              {trend === 'mid' && <Minus className="h-4 w-4 text-muted-foreground/50 shrink-0" aria-hidden />}
              <span className="font-extrabold tabular-nums text-primary shrink-0">{row.weeklyXP} XP</span>
            </div>
          )
        })}
        {data.rows.length === 0 && (
          <p className="text-center text-sm text-muted-foreground py-10">
            Giải này chưa có ai — kiếm XP ngay để dẫn đầu!
          </p>
        )}
      </div>

      <p className="text-xs text-muted-foreground text-center mt-4 max-w-md mx-auto">
        Bảng xếp hạng xếp theo XP kiếm được trong tuần hiện tại (Thứ Hai → Chủ nhật, giờ Việt Nam).
        Sang tuần mới: top {data.promotionCount} thăng giải, {data.demotionCount} cuối xuống giải.
      </p>
    </div>
  )
}
