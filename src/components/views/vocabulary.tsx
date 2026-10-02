'use client'

import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { BookOpen, Search, Sparkles, Star, CircleDashed, TrendingDown, CalendarClock, Repeat, Zap, Maximize2 } from 'lucide-react'
import { api } from '@/lib/client/api'
import { LoadingBlock, ErrorBlock, PageHeader, EmptyBlock } from '@/components/shared/widgets'
import { AudioButton } from '@/components/shared/audio-button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useHashRoute } from '@/components/app/router'
import { katakanaToHiragana } from '@/lib/japanese'
import { cn } from '@/lib/utils'

/* --------------------------------- DTO types -------------------------------- */

interface VocabSrsDTO {
  status: 'NEW' | 'LEARNING' | 'REVIEW' | 'MASTERED' | 'WEAK'
  mastery: number
  reviewCount: number
  lapseCount: number
  nextReviewAt: string | null
}

interface VocabItemDTO {
  id: string
  term: string
  reading: string | null
  romaji: string
  meaningVi: string
  pos: string | null
  exampleJa: string
  exampleVi: string
  srs?: VocabSrsDTO
}

interface VocabGroupDTO {
  lessonId: string | null
  lessonSlug: string | null
  lessonTitle: string
  lessonOrder: number
  items: VocabItemDTO[]
}

interface VocabularyResponseDTO {
  groups: VocabGroupDTO[]
  total: number
  lessonCount: number
  statusCounts?: { NEW: number; LEARNING: number; REVIEW: number; MASTERED: number; WEAK: number }
}

/* ----------------------------- Bộ lọc trạng thái ----------------------------- */

type StatusFilter = 'ALL' | 'NEW' | 'LEARNING' | 'MASTERED' | 'WEAK'

const STATUS_FILTERS: { key: StatusFilter; label: string; icon: React.ElementType; cls: string; activeCls: string }[] = [
  { key: 'ALL', label: 'Tất cả', icon: Sparkles, cls: 'text-muted-foreground', activeCls: 'bg-primary text-primary-foreground border-primary' },
  { key: 'LEARNING', label: 'Đang học', icon: CircleDashed, cls: 'text-primary', activeCls: 'bg-primary/15 text-primary border-primary/50' },
  { key: 'MASTERED', label: 'Thành thạo', icon: Star, cls: 'text-success', activeCls: 'bg-success/15 text-success border-success/50' },
  { key: 'WEAK', label: 'Từ yếu', icon: TrendingDown, cls: 'text-destructive', activeCls: 'bg-destructive/15 text-destructive border-destructive/50' },
  { key: 'NEW', label: 'Chưa học', icon: BookOpen, cls: 'text-muted-foreground', activeCls: 'bg-muted text-foreground border-border' },
]

const STATUS_BADGE: Record<string, { label: string; cls: string }> = {
  NEW: { label: 'Chưa học', cls: 'bg-muted text-muted-foreground' },
  LEARNING: { label: 'Đang học', cls: 'bg-primary/10 text-primary' },
  REVIEW: { label: 'Đang học', cls: 'bg-primary/10 text-primary' },
  MASTERED: { label: 'Thành thạo', cls: 'bg-success/15 text-success' },
  WEAK: { label: 'Cần ôn', cls: 'bg-destructive/10 text-destructive' },
}

/** 5 chấm mức nhớ SRS (0–5) — đậm dần, vàng khi thành thạo. */
function MasteryDots({ mastery, className }: { mastery: number; className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-1', className)} aria-label={`Mức nhớ ${mastery}/5`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          aria-hidden
          className={cn(
            'h-2 w-2 rounded-full',
            i < mastery
              ? mastery >= 4
                ? 'bg-warning'
                : 'bg-primary'
              : 'bg-muted-foreground/20'
          )}
        />
      ))}
    </span>
  )
}

/** Ngày ôn kế tiếp dạng thân thiện: Hôm nay / Ngày mai / dd/mm. */
function nextReviewLabel(iso: string): string {
  const d = new Date(iso)
  const today = new Date()
  const startOf = (x: Date) => new Date(x.getFullYear(), x.getMonth(), x.getDate()).getTime()
  const diffDays = Math.round((startOf(d) - startOf(today)) / 86400000)
  if (diffDays <= 0) return 'Hôm nay'
  if (diffDays === 1) return 'Ngày mai'
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}`
}

/* --------------------------------- Helpers ---------------------------------- */

const MACRONS: Record<string, string> = {
  ā: 'a', ī: 'i', ū: 'u', ē: 'e', ō: 'o',
  â: 'a', î: 'i', û: 'u', ê: 'e', ô: 'o',
}

function norm(s: string): string {
  return s
    .toLowerCase()
    .replace(/[āīūēōâîûêô]/g, (m) => MACRONS[m] ?? m)
    .replace(/[\s'’\-\.]/g, '')
}

function matchItem(v: VocabItemDTO, q: string): boolean {
  if (!q) return true
  const nq = norm(q)
  if (v.term.includes(q)) return true
  if (katakanaToHiragana(v.term).includes(katakanaToHiragana(q))) return true
  if (v.reading && katakanaToHiragana(v.reading).includes(katakanaToHiragana(q))) return true
  if (norm(v.romaji).includes(nq)) return true
  if (norm(v.meaningVi).includes(nq)) return true
  return false
}

/* ---------------------------------- View ------------------------------------ */

export function VocabularyView() {
  const { navigate } = useHashRoute()
  const { data, isLoading, error, refetch } = useQuery<VocabularyResponseDTO>({
    queryKey: ['vocabulary'],
    queryFn: () => api<VocabularyResponseDTO>('/api/vocabulary'),
    staleTime: 5 * 60_000,
  })

  const [query, setQuery] = useState('')
  const [lessonFilter, setLessonFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('ALL')
  const [detail, setDetail] = useState<{ item: VocabItemDTO; lessonSlug: string | null } | null>(null)

  const groups = useMemo(() => {
    if (!data) return []
    return data.groups
      .filter((g) => lessonFilter === 'all' || g.lessonId === lessonFilter)
      .map((g) => ({
        ...g,
        items: g.items.filter((v) => {
          if (!matchItem(v, query.trim())) return false
          if (statusFilter === 'ALL') return true
          const st = v.srs?.status ?? 'NEW'
          if (statusFilter === 'LEARNING') return st === 'LEARNING' || st === 'REVIEW'
          return st === statusFilter
        }),
      }))
      .filter((g) => g.items.length > 0)
  }, [data, query, lessonFilter, statusFilter])

  const shownCount = groups.reduce((s, g) => s + g.items.length, 0)

  if (isLoading) return <LoadingBlock label="Đang tải từ vựng…" />
  if (error || !data) return <ErrorBlock message="Không tải được từ điển từ vựng." onRetry={() => refetch()} />

  return (
    <div>
      <PageHeader
        icon="BookMarked"
        title="Từ vựng"
        sub={`${data.total} từ · ${data.lessonCount} bài học — tra cứu nhanh có âm thanh`}
      />

      {/* Bộ lọc trạng thái nhớ (SRS) */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-3 -mx-1 px-1 [scrollbar-width:thin]" role="group" aria-label="Lọc theo mức nhớ">
        {STATUS_FILTERS.map((f) => {
          const count = f.key === 'ALL'
            ? data.total
            : f.key === 'LEARNING'
              ? (data.statusCounts?.LEARNING ?? 0) + (data.statusCounts?.REVIEW ?? 0)
              : (data.statusCounts?.[f.key] ?? 0)
          const active = statusFilter === f.key
          return (
            <button
              key={f.key}
              type="button"
              aria-pressed={active}
              onClick={() => setStatusFilter(f.key)}
              className={cn(
                'inline-flex shrink-0 items-center gap-1.5 h-9 rounded-full border px-3.5 text-xs font-bold transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring',
                active ? f.activeCls + ' shadow-sm' : cn('bg-card border-border hover:border-foreground/25', f.cls),
              )}
            >
              <f.icon className="h-3.5 w-3.5" aria-hidden />
              {f.label}
              <span className={cn('tabular-nums', active ? 'opacity-80' : 'opacity-60')}>{count}</span>
            </button>
          )
        })}
      </div>

      {/* Thanh lọc */}
      <div className="flex flex-col sm:flex-row gap-2.5 mb-5">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/70" aria-hidden />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Lọc theo tiếng Nhật, romaji hoặc nghĩa tiếng Việt…"
            className="pl-9 rounded-xl h-11"
            aria-label="Lọc từ vựng"
          />
        </div>
        <Select value={lessonFilter} onValueChange={setLessonFilter}>
          <SelectTrigger className="sm:w-64 h-11 rounded-xl" aria-label="Chọn bài học">
            <SelectValue placeholder="Tất cả bài học" />
          </SelectTrigger>
          <SelectContent className="max-h-72 nice-scroll">
            <SelectItem value="all">Tất cả bài học</SelectItem>
            {data.groups
              .filter((g) => g.lessonId)
              .map((g) => (
                <SelectItem key={g.lessonId} value={g.lessonId!}>
                  {g.lessonTitle}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>

      {query.trim() ? (
        <p className="text-sm text-muted-foreground mb-4" role="status">
          Tìm thấy <span className="font-bold text-foreground">{shownCount}</span> từ khớp “{query.trim()}”
        </p>
      ) : null}

      {groups.length === 0 ? (
        <EmptyBlock
          icon="BookMarked"
          title="Không tìm thấy từ nào"
          description="Thử từ khóa khác — có thể gõ romaji (tabemasu) hoặc tiếng Việt (ăn)."
        />
      ) : (
        <Accordion type="multiple" defaultValue={[groups[0]?.lessonId ?? '']}>
          {groups.map((g) => (
            <AccordionItem key={g.lessonId ?? 'none'} value={g.lessonId ?? 'none'} className="border-b-0">
              <AccordionTrigger className="hover:no-underline rounded-2xl px-4 hover:bg-muted/40 transition-colors py-3 gap-3 min-w-0 [&>span]:min-w-0">
                <span className="flex items-center gap-3 text-left min-w-0 flex-1">
                  <span className="h-9 w-9 shrink-0 rounded-xl bg-primary/15 text-primary flex items-center justify-center font-bold text-sm tabular-nums">
                    {g.lessonOrder === 9999 ? '★' : g.lessonOrder}
                  </span>
                  <span className="flex flex-col min-w-0">
                    <span className="font-bold truncate">{g.lessonTitle}</span>
                    <span className="text-xs text-muted-foreground font-normal">{g.items.length} từ</span>
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-1 px-1">
                {g.lessonSlug ? (
                  <div className="px-3 mb-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-lg h-8 text-xs"
                      onClick={() => navigate(`/lessons/${g.lessonSlug}`)}
                    >
                      <BookOpen className="h-3.5 w-3.5" /> Mở bài học
                    </Button>
                  </div>
                ) : null}
                <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
                  {g.items.map((v) => (
                    <VocabCard
                      key={v.id}
                      item={v}
                      onOpen={() => setDetail({ item: v, lessonSlug: g.lessonSlug })}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}

      {/* Chi tiết từ vựng — dialog (bấm vào card từ để mở) */}
      <VocabDetailDialog detail={detail} onClose={() => setDetail(null)} />
    </div>
  )
}

/* -------------------------------- Vocab card -------------------------------- */

function VocabCard({
  item,
  onOpen,
}: {
  item: VocabItemDTO
  onOpen: () => void
}) {
  const v = item
  return (
    <article
      className="group relative rounded-2xl border bg-card p-4 flex flex-col gap-2 min-w-0 transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-primary/30 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
    >
      <div className="flex items-start justify-between gap-2 min-w-0">
        <button
          type="button"
          onClick={onOpen}
          className="text-left min-w-0 flex-1 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={`Chi tiết từ ${v.term}`}
        >
          <p className="jp jp-serif text-lg font-bold leading-tight break-words group-hover:text-primary transition-colors">{v.term}</p>
          <p className="text-xs text-muted-foreground mt-0.5 break-words">
            {v.reading ? `${v.reading} · ` : ''}
            <span className="font-medium">{v.romaji}</span>
          </p>
        </button>
        <div className="flex flex-col items-end gap-1.5 shrink-0">
          <AudioButton text={v.exampleJa || v.term} size="sm" labelSlow={false} />
          {v.srs && v.srs.status !== 'NEW' && (
            <span className={cn('rounded-full px-2 py-0.5 text-[10px] font-bold', STATUS_BADGE[v.srs.status]?.cls)}>
              {STATUS_BADGE[v.srs.status]?.label}
            </span>
          )}
        </div>
      </div>
      <button
        type="button"
        onClick={onOpen}
        className="text-left rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={`Xem chi tiết và tiến độ ghi nhớ của từ ${v.term}`}
      >
        <p className="text-sm font-medium leading-snug break-words">
          {v.pos ? <Badge variant="secondary" className="mr-1.5 h-4.5 px-1.5 text-[10px]">{v.pos}</Badge> : null}
          {v.meaningVi}
        </p>
      </button>
      {v.exampleJa ? (
        <div className="mt-auto rounded-xl bg-muted/40 px-3 py-2 min-w-0">
          <p className="jp text-xs leading-relaxed break-words">{v.exampleJa}</p>
          <p className="text-[11px] text-muted-foreground leading-snug mt-0.5 break-words">{v.exampleVi}</p>
        </div>
      ) : null}
      {/* Hàng dưới: mức nhớ + nút chi tiết */}
      <div className="flex items-center justify-between gap-2">
        {v.srs && v.srs.status !== 'NEW' ? (
          <MasteryDots mastery={v.srs.mastery} />
        ) : (
          <span className="text-[11px] text-muted-foreground">Chưa trong lịch ôn</span>
        )}
        <button
          type="button"
          onClick={onOpen}
          className="inline-flex items-center gap-1 text-[11px] font-bold text-muted-foreground hover:text-primary transition-colors rounded-lg px-1.5 py-1 outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={`Mở chi tiết từ ${v.term}`}
        >
          <Maximize2 className="h-3 w-3" aria-hidden />
          Chi tiết
        </button>
      </div>
    </article>
  )
}

/* ----------------------------- Vocab detail dialog ---------------------------- */

function VocabDetailDialog({ detail, onClose }: { detail: { item: VocabItemDTO; lessonSlug: string | null } | null; onClose: () => void }) {
  const { navigate } = useHashRoute()
  const item = detail?.item ?? null
  const srs = item?.srs
  return (
    <Dialog open={!!item} onOpenChange={(open) => !open && onClose()}>
      {item && (
        <DialogContent
          className="sm:max-w-md rounded-3xl p-0 overflow-hidden gap-0 max-h-[85vh] overflow-y-auto nice-scroll"
          aria-describedby={undefined}
        >
          {/* Header gradient */}
          <div className="relative bg-gradient-to-br from-primary/10 via-card to-sakura/15 px-6 pt-6 pb-5">
            <DialogHeader className="space-y-1.5">
              <DialogTitle className="flex items-start justify-between gap-3">
                <span className="jp jp-serif text-3xl font-bold leading-tight break-words">{item.term}</span>
                <AudioButton text={item.term} size="md" labelSlow />
              </DialogTitle>
              <DialogDescription className="text-sm">
                {item.reading ? <span className="jp mr-1.5">{item.reading}</span> : null}
                <span className="font-medium">{item.romaji}</span>
                {item.pos ? <Badge variant="secondary" className="ml-2 h-5 px-2 text-[10px] align-middle">{item.pos}</Badge> : null}
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="px-6 pb-6 space-y-5">
            {/* Nghĩa */}
            <section aria-label="Nghĩa của từ">
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">Nghĩa</p>
              <p className="text-base font-semibold leading-snug">{item.meaningVi}</p>
            </section>

            {/* Ví dụ */}
            {item.exampleJa ? (
              <section aria-label="Câu ví dụ">
                <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Ví dụ</p>
                <div className="rounded-2xl border bg-muted/30 px-4 py-3">
                  <div className="flex items-start justify-between gap-2">
                    <p className="jp text-sm leading-relaxed break-words">{item.exampleJa}</p>
                    <AudioButton text={item.exampleJa} size="sm" labelSlow />
                  </div>
                  <p className="text-xs text-muted-foreground leading-snug mt-1.5">{item.exampleVi}</p>
                </div>
              </section>
            ) : null}

            {/* Tiến độ ghi nhớ SRS */}
            <section aria-label="Tiến độ ghi nhớ">
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Ghi nhớ (SRS)</p>
              {srs && srs.status !== 'NEW' ? (
                <div className="rounded-2xl border bg-card px-4 py-3 space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className={cn('rounded-full px-2.5 py-0.5 text-[11px] font-bold', STATUS_BADGE[srs.status]?.cls)}>
                      {STATUS_BADGE[srs.status]?.label}
                    </span>
                    <MasteryDots mastery={srs.mastery} />
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-xl bg-muted/50 px-2 py-1.5">
                      <p className="text-sm font-extrabold tabular-nums">{srs.reviewCount}</p>
                      <p className="text-[10px] font-bold text-muted-foreground flex items-center justify-center gap-0.5">
                        <Repeat className="h-2.5 w-2.5" aria-hidden /> lần ôn
                      </p>
                    </div>
                    <div className="rounded-xl bg-muted/50 px-2 py-1.5">
                      <p className="text-sm font-extrabold tabular-nums">{srs.lapseCount}</p>
                      <p className="text-[10px] font-bold text-muted-foreground flex items-center justify-center gap-0.5">
                        <Zap className="h-2.5 w-2.5" aria-hidden /> lần quên
                      </p>
                    </div>
                    <div className="rounded-xl bg-muted/50 px-2 py-1.5">
                      <p className="text-sm font-extrabold tabular-nums leading-5">{srs.nextReviewAt ? nextReviewLabel(srs.nextReviewAt) : '—'}</p>
                      <p className="text-[10px] font-bold text-muted-foreground flex items-center justify-center gap-0.5">
                        <CalendarClock className="h-2.5 w-2.5" aria-hidden /> ôn kế tiếp
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground rounded-2xl border border-dashed px-4 py-3">
                  Từ này chưa có trong lịch ôn — học bài chứa từ này hoặc luyện ôn tập để bắt đầu theo dõi nhé!
                </p>
              )}
            </section>

            {/* CTA mở bài học chứa từ */}
            {detail?.lessonSlug ? (
              <Button
                variant="outline"
                className="w-full rounded-xl"
                onClick={() => {
                  onClose()
                  navigate(`/lessons/${detail.lessonSlug}`)
                }}
              >
                <BookOpen className="h-4 w-4" aria-hidden />
                Học bài chứa từ này
              </Button>
            ) : null}
          </div>
        </DialogContent>
      )}
    </Dialog>
  )
}
