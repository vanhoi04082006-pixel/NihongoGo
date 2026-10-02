'use client'

import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { RefreshCw, BookOpen, Wrench, ArrowRight, Layers, Sparkles, CheckCircle2 } from 'lucide-react'
import { toast } from 'sonner'
import { api, ApiClientError } from '@/lib/client/api'
import { useHashRoute } from '@/components/app/router'
import { LoadingBlock, ErrorBlock, PageHeader, EmptyBlock } from '@/components/shared/widgets'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'

interface ReviewData {
  stats: { dueCount: number; totalItems: number; newCount: number }
  overview: Record<string, { total: number; mastered: number; due: number }>
  mistakes: {
    id: string
    questionId: string
    prompt: string
    correctAnswer: string
    userAnswer: string
    timesWrong: number
    resolved: boolean
    lastWrongAt: string
  }[]
  mistakeStats: { total: number; unresolved: number }
}

const TYPE_LABEL: Record<string, string> = {
  VOCAB: 'Từ vựng',
  KANJI: 'Kanji',
  GRAMMAR: 'Ngữ pháp',
  KANA: 'Kana',
}

/** '3 ngày trước' / 'hôm qua' / 'hôm nay' — thân thiện hơn date thuần. */
function relativeDays(iso: string): string {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000)
  if (days <= 0) return 'hôm nay'
  if (days === 1) return 'hôm qua'
  if (days < 7) return `${days} ngày trước`
  if (days < 30) return `${Math.floor(days / 7)} tuần trước`
  return new Date(iso).toLocaleDateString('vi-VN')
}

export function ReviewView({ initialTab }: { initialTab: 'srs' | 'mistakes' }) {
  const { navigate } = useHashRoute()
  const [tab, setTab] = useState<'srs' | 'mistakes'>(initialTab)
  const [mistakeFilter, setMistakeFilter] = useState<'unresolved' | 'resolved' | 'all'>('unresolved')
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['review'],
    queryFn: () => api<ReviewData>('/api/review'),
  })

  const startReview = async () => {
    try {
      await api('/api/review/session', { method: 'POST' })
      navigate('/session/review')
    } catch (e) {
      toast.error(e instanceof ApiClientError ? e.message : 'Không tạo được phiên ôn tập')
    }
  }

  const startMistakes = async () => {
    try {
      await api('/api/mistakes/practice', { method: 'POST' })
      navigate('/session/mistakes')
    } catch (e) {
      toast.error(e instanceof ApiClientError ? e.message : 'Không tạo được phiên luyện lỗi sai')
    }
  }

  // Lọc lỗi sai (trước early-return để hợp rules-of-hooks)
  const filteredMistakes = useMemo(() => {
    const list = data?.mistakes ?? []
    if (mistakeFilter === 'all') return list
    const want = mistakeFilter === 'unresolved' ? false : true
    return list.filter((m) => m.resolved === want)
  }, [data, mistakeFilter])

  if (isLoading) return <LoadingBlock label="Đang tải ôn tập…" />
  if (error || !data) return <ErrorBlock message="Không tải được dữ liệu ôn tập." onRetry={() => refetch()} />

  const dueCount = data.stats.dueCount
  const unresolved = data.mistakeStats.unresolved
  const resolvedTotal = data.mistakeStats.total - data.mistakeStats.unresolved
  const resolvedPct = data.mistakeStats.total > 0 ? Math.round((resolvedTotal / data.mistakeStats.total) * 100) : 0

  return (
    <div>
      <PageHeader icon="RefreshCw" title="Ôn tập thông minh" sub="Spaced repetition (SM-2) giúp bạn nhớ lâu — nhắc đúng lúc sắp quên." />

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {(
          [
            { key: 'srs', label: 'Ôn tập SRS', icon: RefreshCw },
            { key: 'mistakes', label: `Sổ lỗi sai${unresolved > 0 ? ` (${unresolved})` : ''}`, icon: Wrench },
          ] as const
        ).map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            aria-pressed={tab === t.key}
            className={cn(
              'inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold border-2 transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring',
              tab === t.key ? 'border-primary bg-primary/10 text-primary' : 'border-border hover:border-primary/40'
            )}
          >
            <t.icon className="h-4 w-4" aria-hidden /> {t.label}
          </button>
        ))}
      </div>

      {tab === 'srs' ? (
        <>
          {/* Hero */}
          <div
            className={cn(
              'rounded-3xl border-2 p-6 mb-6 text-center relative overflow-hidden',
              dueCount > 0 ? 'border-primary/40 bg-gradient-to-br from-primary/10 to-sakura/10' : 'border-success/40 bg-success/5'
            )}
          >
            <RefreshCw className={cn('h-12 w-12 mx-auto mb-3', dueCount > 0 ? 'text-primary' : 'text-success')} aria-hidden />
            <h2 className="text-xl font-extrabold">
              {dueCount > 0 ? `Ôn tập hôm nay: ${dueCount} mục` : 'Không có gì cần ôn — すごい!'}
            </h2>
            <p className="text-sm text-muted-foreground mt-1 max-w-md mx-auto">
              {dueCount > 0
                ? 'Mỗi mục là một từ / kanji / ngữ pháp đến hạn ôn. Ôn ngay để không bị dồn ứ.'
                : 'Học bài mới để có thêm mục ôn, hoặc quay lại sau — SRS sẽ nhắc bạn đúng lúc.'}
            </p>
            <Button onClick={startReview} disabled={dueCount === 0 && data.stats.newCount === 0} className="mt-4 rounded-2xl h-12 px-7 font-bold shadow-lg shadow-primary/25">
              Bắt đầu ôn tập <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* By type */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {Object.entries(data.overview).map(([type, s]) => (
              <div key={type} className="rounded-2xl border bg-card p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold text-sm">{TYPE_LABEL[type] ?? type}</p>
                  {s.due > 0 && (
                    <span className="text-[10px] font-bold rounded-full bg-primary/10 text-primary px-2 py-0.5">{s.due} đến hạn</span>
                  )}
                </div>
                <p className="text-2xl font-extrabold tabular-nums">{s.total}</p>
                <p className="text-xs text-muted-foreground mb-2">mục · {s.mastered} đã thuộc</p>
                <Progress value={s.total > 0 ? (s.mastered / s.total) * 100 : 0} className="h-1.5" />
              </div>
            ))}
            {Object.keys(data.overview).length === 0 && (
              <div className="sm:col-span-2 lg:col-span-4">
                <EmptyBlock
                  icon="Layers"
                  title="Chưa có mục SRS nào"
                  description="Học bài đầu tiên — mọi từ vựng, kanji bạn gặp sẽ tự động vào hệ thống ôn tập."
                  action={<Button onClick={() => navigate('/')}>Về Learning Path</Button>}
                />
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          {/* Mistake notebook */}
          <div className="rounded-3xl border-2 border-sakura/40 bg-sakura/5 p-6 mb-4 flex flex-col sm:flex-row items-center gap-4">
            <Wrench className="h-12 w-12 text-sakura shrink-0" aria-hidden />
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-xl font-extrabold">Sổ lỗi sai — {unresolved} lỗi chưa sửa</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Mỗi câu bạn trả lời sai được lưu lại kèm đáp án đúng. Luyện lại đến khi sạch sổ!
              </p>
              {data.mistakeStats.total > 0 && (
                <div className="mt-2.5 flex items-center gap-2 max-w-xs">
                  <Progress value={resolvedPct} className="h-2 flex-1" />
                  <span className="text-xs font-bold text-sakura tabular-nums shrink-0">{resolvedPct}% đã sửa</span>
                </div>
              )}
            </div>
            <Button onClick={startMistakes} disabled={unresolved === 0} className="rounded-2xl h-12 px-7 font-bold shrink-0">
              Luyện lại lỗi sai <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Bộ lọc lỗi sai */}
          <div className="flex gap-2 mb-3" role="group" aria-label="Lọc sổ lỗi sai">
            {(
              [
                { key: 'unresolved', label: `Chưa sửa (${unresolved})` },
                { key: 'resolved', label: `Đã sửa (${resolvedTotal})` },
                { key: 'all', label: `Tất cả (${data.mistakeStats.total})` },
              ] as const
            ).map((f) => (
              <button
                key={f.key}
                onClick={() => setMistakeFilter(f.key)}
                aria-pressed={mistakeFilter === f.key}
                className={cn(
                  'rounded-full px-3.5 py-1.5 text-xs font-bold border transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  mistakeFilter === f.key
                    ? 'border-sakura bg-sakura/10 text-sakura'
                    : 'border-border text-muted-foreground hover:border-sakura/40'
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="space-y-2.5 max-h-[28rem] overflow-y-auto nice-scroll pr-1">
            {filteredMistakes.map((m) => (
              <div
                key={m.id}
                className={cn(
                  'rounded-2xl border bg-card p-4',
                  m.resolved ? 'opacity-60 border-success/40' : 'border-border'
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="jp font-semibold break-words">{m.prompt}</p>
                    <div className="text-sm mt-1.5 space-y-0.5">
                      <p className="text-success">
                        <span className="text-xs font-bold uppercase tracking-wide mr-1.5">Đúng:</span>
                        <span className="jp">{m.correctAnswer}</span>
                      </p>
                      <p className="text-destructive">
                        <span className="text-xs font-bold uppercase tracking-wide mr-1.5">Bạn:</span>
                        <span className="jp">{m.userAnswer || '(bỏ trống)'}</span>
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <span
                      className={cn(
                        'text-[10px] font-bold rounded-full px-2 py-0.5 inline-flex items-center gap-1',
                        m.resolved ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'
                      )}
                    >
                      {m.resolved ? (
                        <>
                          <CheckCircle2 className="h-3 w-3" aria-hidden /> Đã sửa
                        </>
                      ) : (
                        `Sai ${m.timesWrong} lần`
                      )}
                    </span>
                    <p className="text-[10px] text-muted-foreground mt-1.5">{relativeDays(m.lastWrongAt)}</p>
                  </div>
                </div>
              </div>
            ))}
            {filteredMistakes.length === 0 && data.mistakes.length > 0 && (
              <EmptyBlock
                icon={mistakeFilter === 'resolved' ? 'Wrench' : 'Sparkles'}
                title={mistakeFilter === 'resolved' ? 'Chưa có lỗi nào được sửa' : 'Không còn lỗi chưa sửa!'}
                description={
                  mistakeFilter === 'resolved'
                    ? 'Luyện lại lỗi sai trong sổ — khi trả lời đúng, chúng sẽ được đánh dấu đã sửa.'
                    : 'Bạn đã sửa sạch các lỗi trong sổ — tiếp tục phát huy nhé!'
                }
                action={
                  mistakeFilter === 'resolved' ? (
                    <Button variant="outline" onClick={() => setMistakeFilter('unresolved')}>Xem lỗi chưa sửa</Button>
                  ) : (
                    <Button variant="outline" onClick={startMistakes} disabled={unresolved === 0}>Luyện lại</Button>
                  )
                }
              />
            )}
            {data.mistakes.length === 0 && (
              <EmptyBlock
                icon="Sparkles"
                title="Sổ lỗi sai trống trơn!"
                description="Bạn chưa sai câu nào — hoặc đã sửa hết. Tiếp tục phát huy nhé!"
                action={<Button variant="outline" onClick={() => navigate('/')}>Học bài mới</Button>}
              />
            )}
          </div>
        </>
      )}
    </div>
  )
}
