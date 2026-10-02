'use client'

import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { Zap, Flame, BookOpen, Clock, Trophy, RefreshCw, Wrench, Languages, Mic, Star, Snowflake, Award, Lock } from 'lucide-react'
import { api } from '@/lib/client/api'
import { useHashRoute } from '@/components/app/router'
import { useAuth } from '@/components/app/use-auth'
import { useOverview as useOverviewData } from '@/components/app/use-overview'
import { LoadingBlock, ErrorBlock, PageHeader, AvatarBubble, LeagueBadge, StreakBadge, EmptyBlock } from '@/components/shared/widgets'
import { DynamicIcon } from '@/components/shared/icon'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'

interface ProgressDTO {
  profile: { username: string; displayName: string; joinedAt: string | null }
  progress: {
    totalXP: number
    lessonsCompleted: number
    perfectLessons: number
    listeningNodes: number
    speakingNodes: number
    studyTimeSeconds: number
    league: string
  }
  streak: { currentStreak: number; longestStreak: number; todayXP: number; dailyGoalXP: number; goalMetToday: boolean; freezeCount: number; freezeMax: number }
  streak30: { date: string; met: boolean; xp: number }[]
  srs: { dueCount: number; totalItems: number; newCount: number; [k: string]: unknown }
  mistakes: { total: number; unresolved: number }
  xpStats: {
    last7: number
    last30: number
    daily: { date: string; xp: number }[]
  }
}

interface AchievementDTO {
  code: string
  title: string
  description: string
  icon: string
  tier: 'BRONZE' | 'SILVER' | 'GOLD' | 'DIAMOND'
  category: string
  threshold: number
  current: number
  unlocked: boolean
  unlockedAt: string | null
}

const TIER_CLS: Record<string, string> = {
  BRONZE: 'text-amber-700 bg-amber-600/15 border-amber-600/40',
  SILVER: 'text-slate-500 bg-slate-400/15 border-slate-400/40',
  GOLD: 'text-warning bg-warning/15 border-warning/50',
  DIAMOND: 'text-primary bg-primary/15 border-primary/50',
}

const SRS_LABEL: Record<string, string> = { VOCAB: 'Từ vựng', KANJI: 'Kanji', GRAMMAR: 'Ngữ pháp', KANA: 'Kana' }

export function ProfileView() {
  const { navigate } = useHashRoute()
  const { data: user } = useAuth()
  const { data: overview } = useOverviewData()
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['progress'],
    queryFn: () => api<ProgressDTO>('/api/progress'),
  })
  const { data: achData } = useQuery({
    queryKey: ['achievements'],
    queryFn: () => api<{ achievements: AchievementDTO[] }>('/api/achievements'),
    staleTime: 30_000,
  })

  if (isLoading) return <LoadingBlock />
  if (error || !data) return <ErrorBlock message="Không tải được hồ sơ." onRetry={() => refetch()} />

  const displayName = overview?.user.displayName ?? user?.username ?? 'Học viên'
  const srsByType = Object.entries(data.srs).filter(([k]) => ['VOCAB', 'KANJI', 'GRAMMAR', 'KANA'].includes(k)) as [string, { total: number; mastered: number; due: number }][]
  const maxDaily = Math.max(10, ...data.xpStats.daily.map((d) => d.xp))
  const hours = Math.floor(data.progress.studyTimeSeconds / 3600)
  const minutes = Math.round((data.progress.studyTimeSeconds % 3600) / 60)

  return (
    <div>
      <PageHeader icon="User" title="Hồ sơ của tôi" sub={`Tham gia từ ${data.profile.joinedAt ? new Date(data.profile.joinedAt).toLocaleDateString('vi-VN') : '—'}`} />

      {/* Identity card */}
      <div className="rounded-3xl border bg-gradient-to-br from-primary/10 via-card to-sakura/10 p-5 sm:p-6 mb-4 flex flex-col sm:flex-row items-center gap-5">
        <AvatarBubble seed={overview?.user.avatarSeed ?? 'sakura'} displayName={displayName} className="h-20 w-20 text-4xl" />
        <div className="text-center sm:text-left flex-1">
          <h2 className="text-2xl font-extrabold tracking-tight">{displayName}</h2>
          <p className="text-sm text-muted-foreground">@{user?.username} · {user?.email}</p>
          <div className="flex items-center gap-2 mt-2.5 justify-center sm:justify-start flex-wrap">
            <StreakBadge count={data.streak.currentStreak} freezes={data.streak.freezeCount} />
            <LeagueBadge league={data.progress.league} showName />
            {data.streak.goalMetToday && (
              <span className="text-xs font-bold rounded-full bg-warning/15 text-warning px-2.5 py-1 inline-flex items-center gap-1">
                <Flame className="h-3 w-3" /> Đã đạt mục tiêu hôm nay
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Level progress card */}
      {overview?.level && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border-2 border-primary/30 bg-gradient-to-r from-primary/[0.08] to-card p-4 mb-4 flex items-center gap-4"
        >
          <div className="relative h-14 w-14 shrink-0 rounded-2xl bg-primary text-primary-foreground flex flex-col items-center justify-center shadow-md shadow-primary/25">
            <span className="text-[9px] font-bold uppercase tracking-wider opacity-80 leading-none">cấp</span>
            <span className="text-xl font-extrabold leading-none tabular-nums">{overview.level.level}</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <p className="font-bold jp">{overview.level.title}</p>
              <p className="text-xs font-bold text-muted-foreground tabular-nums">
                {overview.level.currentLevelXP}/{overview.level.nextLevelXP} XP → Lv.{overview.level.level + 1}
              </p>
            </div>
            <Progress value={overview.level.progress * 100} className="h-2.5" />
            <p className="text-xs text-muted-foreground mt-1.5">
              Còn {Math.max(0, overview.level.nextLevelXP - overview.level.currentLevelXP)} XP để lên cấp {overview.level.level + 1} — mỗi câu đúng +10 XP!
            </p>
          </div>
        </motion.div>
      )}

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        <StatBig icon={<Zap className="h-5 w-5" />} label="Tổng XP" value={data.progress.totalXP.toLocaleString('vi-VN')} accent />
        <StatBig icon={<Flame className="h-5 w-5" />} label="Chuỗi hiện tại" value={`${data.streak.currentStreak} ngày`} />
        <StatBig icon={<Trophy className="h-5 w-5" />} label="Chuỗi dài nhất" value={`${data.streak.longestStreak} ngày`} />
        <StatBig icon={<Clock className="h-5 w-5" />} label="Thời gian học" value={hours > 0 ? `${hours}h ${minutes}p` : `${minutes} phút`} />
        <StatBig icon={<BookOpen className="h-5 w-5" />} label="Ải đã vượt" value={String(data.progress.lessonsCompleted)} />
        <StatBig icon={<Star className="h-5 w-5" />} label="Buổi hoàn hảo" value={String(data.progress.perfectLessons)} />
        <StatBig icon={<Mic className="h-5 w-5" />} label="Ải luyện nói" value={String(data.progress.speakingNodes)} />
        <StatBig icon={<RefreshCw className="h-5 w-5" />} label="Mục SRS" value={String(data.srs.totalItems)} />
      </div>

      {/* Streak freeze info */}
      <div className="rounded-2xl border bg-card p-4 mb-6 flex items-center gap-3.5">
        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <Snowflake className="h-5 w-5 text-primary" aria-hidden />
        </div>
        <p className="text-sm leading-relaxed">
          <span className="font-bold">Bảo vệ chuỗi (Snowflake): </span>
          <span className="text-muted-foreground">bạn có </span>
          <span className="font-bold text-primary tabular-nums">
            {data.streak.freezeCount}/{data.streak.freezeMax}
          </span>
          <span className="text-muted-foreground"> — mỗi cái bảo vệ 1 ngày bỏ lỡ; kiếm thêm khi chuỗi đạt mốc 7 ngày.</span>
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        {/* XP chart 30 days */}
        <div className="rounded-2xl border bg-card p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-sm">XP 30 ngày qua</h3>
            <div className="flex gap-2 text-xs">
              <span className="font-bold text-primary">7 ngày: {data.xpStats.last7} XP</span>
              <span className="text-muted-foreground">30 ngày: {data.xpStats.last30} XP</span>
            </div>
          </div>
          <div className="flex items-end gap-[3px] h-28" role="img" aria-label="Biểu đồ XP 30 ngày">
            {data.xpStats.daily.map((d) => (
              <div
                key={d.date}
                className={cn('flex-1 rounded-t-sm min-w-0 transition-all', d.xp > 0 ? 'bg-primary/70 hover:bg-primary' : 'bg-muted')}
                style={{ height: `${Math.max(4, (d.xp / maxDaily) * 100)}%` }}
                title={`${d.date}: ${d.xp} XP`}
              />
            ))}
          </div>
        </div>

        {/* Streak calendar 30 days */}
        <div className="rounded-2xl border bg-card p-4">
          <h3 className="font-bold text-sm mb-4">Lịch học 30 ngày (mục tiêu {data.streak.dailyGoalXP} XP/ngày)</h3>
          <div className="grid grid-cols-10 gap-1.5">
            {data.streak30.map((d) => (
              <div
                key={d.date}
                title={`${d.date}: ${d.xp} XP${d.met ? ' — đạt mục tiêu' : ''}`}
                className={cn(
                  'aspect-square rounded-md flex items-center justify-center text-[9px] font-bold',
                  d.met
                    ? 'bg-warning text-white'
                    : d.xp > 0
                      ? 'bg-warning/25 text-warning'
                      : 'bg-muted text-muted-foreground/50'
                )}
              >
                {d.date.slice(-2)}
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-3 text-[10px] text-muted-foreground">
            <span className="inline-flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-sm bg-warning inline-block" /> Đạt mục tiêu</span>
            <span className="inline-flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-sm bg-warning/25 inline-block" /> Có học</span>
            <span className="inline-flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-sm bg-muted inline-block" /> Nghỉ</span>
          </div>
        </div>
      </div>

      {/* Words learned (SRS mastery) */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
        {srsByType.map(([type, s]) => (
          <div key={type} className="rounded-2xl border bg-card p-4">
            <p className="font-bold text-sm">{SRS_LABEL[type] ?? type}</p>
            <p className="text-2xl font-extrabold tabular-nums mt-1">
              {s.mastered}
              <span className="text-sm text-muted-foreground font-bold"> / {s.total}</span>
            </p>
            <p className="text-xs text-muted-foreground">đã thuộc (mastery ≥ 3) · {s.due} đến hạn ôn</p>
          </div>
        ))}
        {srsByType.length === 0 && (
          <div className="sm:col-span-2 lg:col-span-4">
            <EmptyBlock
              icon="Languages"
              title="Chưa có số liệu từ vựng"
              description="Học bài đầu tiên để bắt đầu thu thập số liệu."
              action={<Button onClick={() => navigate('/')}>Bắt đầu học</Button>}
            />
          </div>
        )}
      </div>

      {/* Mistakes summary */}
      <button
        onClick={() => navigate('/review/mistakes')}
        className="mt-4 w-full rounded-2xl border bg-card p-4 flex items-center gap-4 text-left hover:border-primary/40 hover:shadow-md transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <div className="h-11 w-11 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
          <Wrench className="h-5 w-5 text-destructive" />
        </div>
        <div className="flex-1">
          <p className="font-bold">Sổ lỗi sai</p>
          <p className="text-xs text-muted-foreground">{data.mistakes.unresolved} lỗi chưa sửa · {data.mistakes.total} tổng cộng</p>
        </div>
        <span className="text-sm font-bold text-primary">Xem →</span>
      </button>

      {/* Achievements showcase — huy chương mới mở + sắp mở */}
      {achData?.achievements && achData.achievements.length > 0 && (
        <section className="mt-6" aria-label="Thành tích">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold flex items-center gap-1.5">
              <Award className="h-4 w-4 text-warning" aria-hidden />
              Thành tích ({achData.achievements.filter((a) => a.unlocked).length}/{achData.achievements.length})
            </h3>
            <button
              onClick={() => navigate('/achievements')}
              className="text-xs font-semibold text-primary hover:underline outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              Xem tất cả →
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {achData.achievements
              .slice()
              .sort((a, b) => Number(b.unlocked) - Number(a.unlocked))
              .slice(0, 8)
              .map((a, i) => {
                const pct = Math.min(100, Math.round((a.current / Math.max(1, a.threshold)) * 100))
                return (
                  <motion.div
                    key={a.code}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={cn(
                      'rounded-2xl border-2 p-3.5 text-center relative overflow-hidden',
                      a.unlocked ? TIER_CLS[a.tier] ?? TIER_CLS.BRONZE : 'border-dashed bg-card text-muted-foreground',
                    )}
                  >
                    <span className={cn('mx-auto mb-2 h-10 w-10 rounded-full flex items-center justify-center', a.unlocked ? 'bg-background/60' : 'bg-muted')}>
                      {a.unlocked ? (
                        <DynamicIcon name={a.icon} className="h-5 w-5" />
                      ) : (
                        <Lock className="h-4 w-4 text-muted-foreground/60" aria-hidden />
                      )}
                    </span>
                    <p className={cn('text-xs font-extrabold leading-tight', !a.unlocked && 'text-foreground')}>{a.title}</p>
                    {a.unlocked ? (
                      <p className="text-[10px] font-bold mt-1 opacity-75">Đã mở khóa</p>
                    ) : (
                      <div className="mt-1.5">
                        <Progress value={pct} className="h-1.5" />
                        <p className="text-[10px] font-bold mt-1 text-muted-foreground tabular-nums">{pct}%</p>
                      </div>
                    )}
                  </motion.div>
                )
              })}
          </div>
        </section>
      )}
    </div>
  )
}

function StatBig({ icon, label, value, accent }: { icon: React.ReactNode; label: string; value: string; accent?: boolean }) {
  return (
    <div className={cn('rounded-2xl border bg-card p-4', accent && 'border-primary/40 bg-primary/5')}>
      <div className={cn('inline-flex mb-1.5', accent ? 'text-primary' : 'text-muted-foreground')}>{icon}</div>
      <p className="text-xl font-extrabold tabular-nums">{value}</p>
      <p className="text-[11px] text-muted-foreground font-medium">{label}</p>
    </div>
  )
}
