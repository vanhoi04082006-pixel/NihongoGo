'use client'

/**
 * Shared SRS (Spaced Repetition) UI atoms — dùng chung cho Vocabulary / Grammar / Kanji.
 * Giữ một nguồn duy nhất cho badge trạng thái, chấm mức nhớ và nhãn ngày ôn kế tiếp.
 */
import { CalendarClock, Repeat, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface SrsStatusInfo {
  /** Vocabulary API dùng `status` (NEW/LEARNING/REVIEW/MASTERED/WEAK) */
  status?: string
  /** Kanji/Grammar/daily-word API dùng `state` (NEW/LEARNING/REVIEW/MASTERED) */
  state?: string
  mastery: number
  reviewCount: number
  lapseCount: number
  nextReviewAt: string | null
}

/** Chuẩn hóa khóa trạng thái SRS từ `status` hoặc `state`. */
export function srsStatusKey(srs: SrsStatusInfo): string {
  return srs.status ?? srs.state ?? 'NEW'
}

export const SRS_STATUS_BADGE: Record<string, { label: string; cls: string }> = {
  NEW: { label: 'Chưa học', cls: 'bg-muted text-muted-foreground' },
  LEARNING: { label: 'Đang học', cls: 'bg-primary/10 text-primary' },
  REVIEW: { label: 'Đang ôn', cls: 'bg-primary/10 text-primary' },
  MASTERED: { label: 'Thành thạo', cls: 'bg-success/15 text-success' },
  WEAK: { label: 'Cần ôn', cls: 'bg-destructive/10 text-destructive' },
}

/** 5 chấm mức nhớ SRS (0–5) — đậm dần, vàng khi thành thạo (mastery ≥ 4). */
export function MasteryDots({ mastery, className }: { mastery: number; className?: string }) {
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
export function nextReviewLabel(iso: string): string {
  const d = new Date(iso)
  const today = new Date()
  const startOf = (x: Date) => new Date(x.getFullYear(), x.getMonth(), x.getDate()).getTime()
  const diffDays = Math.round((startOf(d) - startOf(today)) / 86400000)
  if (diffDays <= 0) return 'Hôm nay'
  if (diffDays === 1) return 'Ngày mai'
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}`
}

/**
 * Lưới 3 ô thống kê ghi nhớ: lần ôn / lần quên / ôn kế tiếp.
 * Dùng trong dialog chi tiết của Vocabulary & Grammar.
 */
export function SrsStatsGrid({ srs }: { srs: SrsStatusInfo }) {
  return (
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
        <p className="text-sm font-extrabold tabular-nums leading-5">
          {srs.nextReviewAt ? nextReviewLabel(srs.nextReviewAt) : '—'}
        </p>
        <p className="text-[10px] font-bold text-muted-foreground flex items-center justify-center gap-0.5">
          <CalendarClock className="h-2.5 w-2.5" aria-hidden /> ôn kế tiếp
        </p>
      </div>
    </div>
  )
}

/** Section "Ghi nhớ (SRS)" hoàn chỉnh cho dialog chi tiết — badge + dots + stats grid. */
export function SrsMemorySection({ srs, emptyText }: { srs: SrsStatusInfo | null | undefined; emptyText: string }) {
  const key = srs ? srsStatusKey(srs) : null
  const active = srs && key !== 'NEW'
  return (
    <section aria-label="Tiến độ ghi nhớ">
      <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Ghi nhớ (SRS)</p>
      {active && key ? (
        <div className="rounded-2xl border bg-card px-4 py-3 space-y-2.5">
          <div className="flex items-center justify-between gap-2">
            <span className={cn('rounded-full px-2.5 py-0.5 text-[11px] font-bold', SRS_STATUS_BADGE[key]?.cls)}>
              {SRS_STATUS_BADGE[key]?.label}
            </span>
            <MasteryDots mastery={srs.mastery} />
          </div>
          <SrsStatsGrid srs={srs} />
        </div>
      ) : (
        <p className="text-sm text-muted-foreground rounded-2xl border border-dashed px-4 py-3">{emptyText}</p>
      )}
    </section>
  )
}
