'use client'

/**
 * Thành tích — 26+ huy hiệu theo tier. Bộ lọc trạng thái (Tất cả / Đã mở /
 * Đang tiến trình), sắp xếp thông minh (mới mở trước, gần đạt nổi bật),
 * hiển thị ngày đạt + huy hiệu "gần đạt" kế tiếp.
 */
import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Sparkles } from 'lucide-react'
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

type FilterKey = 'all' | 'unlocked' | 'progress'

function unlockedDateLabel(iso: string | null): string | null {
  if (!iso) return null
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return null
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}`
}

export function AchievementsView() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['achievements'],
    queryFn: () => api<{ achievements: AchievementDTO[] }>('/api/achievements'),
  })
  const [filter, setFilter] = useState<FilterKey>('all')

  const all = data?.achievements ?? []
  const unlockedCount = useMemo(() => all.filter((a) => a.unlocked).length, [all])

  const filtered = useMemo(() => {
    const base = filter === 'unlocked' ? all.filter((a) => a.unlocked) : filter === 'progress' ? all.filter((a) => !a.unlocked) : all
    // Sắp xếp: đã mở (mới nhất trước) → gần đạt nhất → còn lại theo tier cao
    const tierRank: Record<string, number> = { DIAMOND: 0, GOLD: 1, SILVER: 2, BRONZE: 3 }
    return [...base].sort((a, b) => {
      if (a.unlocked !== b.unlocked) return a.unlocked ? -1 : 1
      if (a.unlocked && b.unlocked) {
        return (b.unlockedAt ?? '').localeCompare(a.unlockedAt ?? '')
      }
      const ra = a.current / a.threshold
      const rb = b.current / b.threshold
      if (Math.abs(ra - rb) > 0.02) return rb - ra
      return (tierRank[a.tier] ?? 9) - (tierRank[b.tier] ?? 9)
    })
  }, [all, filter])

  // Huy hiệu gần đạt nhất (chưa mở, ≥60%) — highlight "sắp đạt"
  const nearGoalCode = useMemo(() => {
    const candidates = all.filter((a) => !a.unlocked && a.current / a.threshold >= 0.6)
    if (candidates.length === 0) return null
    return candidates.reduce((best, a) => (a.current / a.threshold > best.current / best.threshold ? a : best)).code
  }, [all])

  if (isLoading) return <LoadingBlock label="Đang tải thành tích…" />
  if (error || !data) return <ErrorBlock message="Không tải được thành tích." onRetry={() => refetch()} />

  const progressCount = all.length - unlockedCount

  const FILTERS: { key: FilterKey; label: string; count?: number }[] = [
    { key: 'all', label: 'Tất cả', count: all.length },
    { key: 'unlocked', label: 'Đã mở', count: unlockedCount },
    { key: 'progress', label: 'Đang tiến trình', count: progressCount },
  ]

  return (
    <div>
      <PageHeader
        icon="Award"
        title="Thành tích"
        sub={`Đã mở ${unlockedCount}/${all.length} huy hiệu — mỗi thành tích đều có thưởng XP`}
      />

      {all.length === 0 ? (
        <EmptyBlock icon="Award" title="Chưa có thành tích nào" />
      ) : (
        <>
          {/* Bộ lọc trạng thái */}
          <div className="flex gap-2 mb-4" role="group" aria-label="Lọc thành tích">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                aria-pressed={filter === f.key}
                className={cn(
                  'rounded-full px-3.5 py-1.5 text-sm font-bold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  filter === f.key
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40',
                )}
              >
                {f.label}
                {typeof f.count === 'number' && <span className="ml-1.5 tabular-nums opacity-75">{f.count}</span>}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((a) => {
              const tier = TIER_STYLE[a.tier] ?? TIER_STYLE.BRONZE
              const pct = Math.min(100, (a.current / a.threshold) * 100)
              const isNearGoal = a.code === nearGoalCode
              const dateLabel = unlockedDateLabel(a.unlockedAt)
              return (
                <div
                  key={a.code}
                  className={cn(
                    'rounded-2xl border-2 bg-card p-4 text-center relative overflow-hidden transition-all hover:shadow-md hover:-translate-y-1 hover:scale-[1.02]',
                    a.unlocked ? `${tier.ring} shadow-md` : 'border-border opacity-75',
                    isNearGoal && 'border-warning/70 ring-2 ring-warning/20',
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
                      <span className={cn('inline-block text-[11px] font-bold rounded-full px-2.5 py-1', tier.badge)}>
                        {tier.label} · Đã đạt{dateLabel ? ` · ${dateLabel}` : ''}
                      </span>
                    ) : (
                      <>
                        <Progress value={pct} className="h-1.5" />
                        <p className="text-[11px] text-muted-foreground mt-1 tabular-nums">
                          {a.current}/{a.threshold}
                        </p>
                      </>
                    )}
                  </div>
                  {isNearGoal && !a.unlocked && (
                    <span className="absolute top-2 right-2 inline-flex items-center gap-0.5 rounded-full bg-warning text-white text-[11px] font-black uppercase tracking-wide px-1.5 py-0.5 shadow-sm">
                      <Sparkles className="h-2.5 w-2.5" aria-hidden /> Sắp đạt
                    </span>
                  )}
                  <span className="absolute top-2 left-2 text-[11px] font-bold text-muted-foreground/70" aria-hidden>
                    {CATEGORY_LABEL[a.category] ?? a.category}
                  </span>
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
