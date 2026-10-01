'use client'

import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/client/api'
import { LoadingBlock, ErrorBlock, PageHeader, EmptyBlock } from '@/components/shared/widgets'
import { DynamicIcon } from '@/components/shared/icon'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'

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

const TIER_STYLE: Record<string, { ring: string; badge: string; label: string }> = {
  BRONZE: { ring: 'border-orange-400/50', badge: 'bg-orange-400/15 text-orange-500', label: 'Đồng' },
  SILVER: { ring: 'border-slate-400/60', badge: 'bg-slate-400/15 text-slate-500', label: 'Bạc' },
  GOLD: { ring: 'border-warning/60', badge: 'bg-warning/15 text-warning', label: 'Vàng' },
  DIAMOND: { ring: 'border-cyan-400/60', badge: 'bg-cyan-400/15 text-cyan-500', label: 'Kim cương' },
}

const CATEGORY_LABEL: Record<string, string> = {
  XP: 'Kinh nghiệm',
  STREAK: 'Chuỗi ngày',
  LESSON: 'Bài học',
  KANA: 'Kana',
  KANJI: 'Kanji',
  SKILL: 'Kỹ năng',
  MISC: 'Khác',
}

export function AchievementsView() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['achievements'],
    queryFn: () => api<{ achievements: AchievementDTO[] }>('/api/achievements'),
  })

  if (isLoading) return <LoadingBlock label="Đang tải thành tích…" />
  if (error || !data) return <ErrorBlock message="Không tải được thành tích." onRetry={() => refetch()} />

  const all = data.achievements
  const unlocked = all.filter((a) => a.unlocked)

  return (
    <div>
      <PageHeader
        icon="Award"
        title="Thành tích"
        sub={`Đã mở ${unlocked.length}/${all.length} huy hiệu — mỗi thành tích đều có thưởng XP`}
      />

      {all.length === 0 ? (
        <EmptyBlock icon="Award" title="Chưa có thành tích nào" />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {all.map((a) => {
            const tier = TIER_STYLE[a.tier] ?? TIER_STYLE.BRONZE
            const pct = Math.min(100, (a.current / a.threshold) * 100)
            return (
              <div
                key={a.code}
                className={cn(
                  'rounded-2xl border-2 bg-card p-4 text-center relative overflow-hidden transition-all hover:shadow-md hover:-translate-y-1 hover:scale-[1.02]',
                  a.unlocked ? `${tier.ring} shadow-md` : 'border-border opacity-75',
                  a.unlocked && 'bg-gradient-to-b from-card to-card'
                )}
              >
                {a.unlocked && (
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-warning/10 to-transparent pointer-events-none" aria-hidden />
                )}
                <div
                  className={cn(
                    'mx-auto h-14 w-14 rounded-full flex items-center justify-center mb-2.5 relative',
                    a.unlocked ? tier.badge : 'bg-muted text-muted-foreground/60'
                  )}
                >
                  <DynamicIcon name={a.icon} className="h-7 w-7" />
                  {!a.unlocked && (
                    <span className="absolute inset-0 rounded-full border-2 border-dashed border-muted-foreground/30" aria-hidden />
                  )}
                </div>
                <p className="font-bold text-sm leading-tight">{a.title}</p>
                <p className="text-[11px] text-muted-foreground mt-1 leading-snug line-clamp-2 min-h-8">{a.description}</p>
                <div className="mt-2.5">
                  {a.unlocked ? (
                    <span className={cn('inline-block text-[10px] font-bold rounded-full px-2.5 py-1', tier.badge)}>
                      {tier.label} · Đã đạt
                    </span>
                  ) : (
                    <>
                      <Progress value={pct} className="h-1.5" />
                      <p className="text-[10px] text-muted-foreground mt-1 tabular-nums">
                        {a.current}/{a.threshold}
                      </p>
                    </>
                  )}
                </div>
                <span className="absolute top-2 right-2 text-[10px] font-bold text-muted-foreground/70" aria-hidden>
                  {CATEGORY_LABEL[a.category] ?? a.category}
                </span>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
