'use client'

import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { BookOpen, Search, Sparkles, X } from 'lucide-react'
import { api } from '@/lib/client/api'
import { LoadingBlock, ErrorBlock, PageHeader, EmptyBlock } from '@/components/shared/widgets'
import { AudioButton } from '@/components/shared/audio-button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useHashRoute } from '@/components/app/router'
import { katakanaToHiragana } from '@/lib/japanese'
import { cn } from '@/lib/utils'

/* --------------------------------- DTO types -------------------------------- */

interface GrammarExampleDTO {
  ja: string
  vi: string
}

interface GrammarItemDTO {
  id: string
  code: string
  title: string
  explanationVi: string
  examples: GrammarExampleDTO[]
}

interface GrammarGroupDTO {
  lessonId: string | null
  lessonSlug: string | null
  lessonTitle: string
  lessonOrder: number
  items: GrammarItemDTO[]
}

interface GrammarResponseDTO {
  groups: GrammarGroupDTO[]
  total: number
  lessonCount: number
}

/* ---------------------- Structure formula (mô hình câu) --------------------- */

const JP_PARTICLES = new Set(['は', 'が', 'を', 'に', 'で', 'と', 'も', 'へ', 'や', 'ね', 'よ', 'か', 'の', 'から', 'まで', 'より', 'こと', 'もの'])

/** Tách title mẫu câu thành token để render công thức cấu trúc: A は B です → [A][は][B][です]. */
function titleTokens(title: string): string[] {
  return title
    .replace(/[（(]/g, ' ( ')
    .replace(/[）)]/g, ' ) ')
    .split(/\s+/)
    .filter(Boolean)
}

function tokenCls(t: string): string {
  if (/^[A-Z]{1,3}$/.test(t)) return 'bg-primary/15 text-primary border-primary/30' // chỗ trống A/B/V
  if (JP_PARTICLES.has(t)) return 'bg-sakura/15 text-sakura border-sakura/30' // trợ từ
  if (/^(です|ます|でした|ません|ました|だ|な|の)$/.test(t)) return 'bg-success/15 text-success border-success/30' // đuôi câu
  if (/^[（(]/.test(t) || /[）)]$/.test(t)) return 'bg-muted text-muted-foreground border-border' // phần tùy chọn
  return 'bg-warning/10 text-warning border-warning/30' // động từ / tính từ
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

function matchItem(g: GrammarItemDTO, q: string): boolean {
  if (!q) return true
  const nq = norm(q)
  if (g.title.includes(q)) return true
  if (katakanaToHiragana(g.title).includes(katakanaToHiragana(q))) return true
  if (norm(g.title).includes(nq)) return true
  if (norm(g.code).includes(nq)) return true
  if (norm(g.explanationVi).includes(nq)) return true
  for (const ex of g.examples) {
    if (ex.ja.includes(q)) return true
    if (katakanaToHiragana(ex.ja).includes(katakanaToHiragana(q))) return true
    if (norm(ex.ja).includes(nq)) return true
    if (norm(ex.vi).includes(nq)) return true
  }
  return false
}

/* ---------------------------------- View ------------------------------------ */

export function GrammarView() {
  const { navigate } = useHashRoute()
  const { data, isLoading, error, refetch } = useQuery<GrammarResponseDTO>({
    queryKey: ['grammar'],
    queryFn: () => api<GrammarResponseDTO>('/api/grammar'),
    staleTime: 5 * 60_000,
  })

  const [query, setQuery] = useState('')
  const [lessonFilter, setLessonFilter] = useState('all')
  const [detail, setDetail] = useState<{ item: GrammarItemDTO; group: GrammarGroupDTO } | null>(null)

  const groups = useMemo(() => {
    if (!data) return []
    return data.groups
      .filter((g) => lessonFilter === 'all' || g.lessonId === lessonFilter)
      .map((g) => ({ ...g, items: g.items.filter((p) => matchItem(p, query.trim())) }))
      .filter((g) => g.items.length > 0)
  }, [data, query, lessonFilter])

  const shownCount = groups.reduce((s, g) => s + g.items.length, 0)

  if (isLoading) return <LoadingBlock label="Đang tải ngữ pháp…" />
  if (error || !data) return <ErrorBlock message="Không tải được danh sách ngữ pháp." onRetry={() => refetch()} />

  return (
    <div>
      <PageHeader
        icon="BookText"
        title="Ngữ pháp"
        sub={`${data.total} mẫu ngữ pháp · ${data.lessonCount} bài học — cấu trúc, giải thích & ví dụ`}
      />

      {/* Thanh lọc */}
      <div className="flex flex-col sm:flex-row gap-2.5 mb-5">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/70" aria-hidden />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Lọc theo mẫu câu, romaji hoặc nghĩa tiếng Việt…"
            className="pl-9 rounded-xl h-11"
            aria-label="Lọc ngữ pháp"
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
          Tìm thấy <span className="font-bold text-foreground">{shownCount}</span> mẫu ngữ pháp khớp “{query.trim()}”
        </p>
      ) : null}

      {groups.length === 0 ? (
        <EmptyBlock
          icon="BookText"
          title="Không tìm thấy mẫu ngữ pháp nào"
          description="Thử từ khóa khác — ví dụ: ですか, teform, hay mời mọc."
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
                    <span className="text-xs text-muted-foreground font-normal">{g.items.length} mẫu</span>
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
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {g.items.map((p) => (
                    <article
                      key={p.id}
                      role="button"
                      tabIndex={0}
                      onClick={() => setDetail({ item: p, group: g })}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          setDetail({ item: p, group: g })
                        }
                      }}
                      aria-label={`Xem chi tiết mẫu câu ${p.title}`}
                      className="group rounded-2xl border bg-card p-4 flex flex-col gap-2 min-w-0 transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-primary/40 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <div className="flex items-start justify-between gap-2 min-w-0">
                        <p className="jp jp-serif text-lg font-bold leading-tight break-words min-w-0">{p.title}</p>
                        <div className="flex flex-col items-end gap-1.5 shrink-0">
                          <AudioButton text={p.examples[0]?.ja || p.title} size="sm" labelSlow={false} />
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1" aria-hidden>
                        {titleTokens(p.title).slice(0, 8).map((t, i) => (
                          <span key={i} className={cn('jp rounded-md border px-1.5 py-0.5 text-xs font-bold', tokenCls(t))}>
                            {t}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm leading-relaxed break-words rounded-xl bg-muted/40 px-3 py-2 min-w-0 line-clamp-3">
                        {p.explanationVi}
                      </p>
                      {p.examples.length > 0 ? (
                        <div className="mt-auto rounded-xl bg-muted/40 px-3 py-1 min-w-0 divide-y divide-border/60">
                          {p.examples.slice(0, 1).map((ex, i) => (
                            <div key={i} className="py-2 min-w-0">
                              <p className="jp text-sm font-medium leading-relaxed break-words">{ex.ja}</p>
                              <p className="text-xs text-muted-foreground leading-snug mt-0.5 break-words">{ex.vi}</p>
                            </div>
                          ))}
                        </div>
                      ) : null}
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <Sparkles className="h-3 w-3" aria-hidden /> Bấm để xem chi tiết + {p.examples.length} ví dụ
                      </span>
                    </article>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}

      <GrammarDetailDialog detail={detail} onClose={() => setDetail(null)} />
    </div>
  )
}

/* ---------------------------- Grammar detail dialog -------------------------- */

function GrammarDetailDialog({
  detail,
  onClose,
}: {
  detail: { item: GrammarItemDTO; group: GrammarGroupDTO } | null
  onClose: () => void
}) {
  const { navigate } = useHashRoute()
  const open = !!detail
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="sm:max-w-xl max-h-[88vh] overflow-y-auto nice-scroll">
        {detail && (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2.5">
                <span className="jp jp-serif text-2xl">{detail.item.title}</span>
                <AudioButton text={detail.item.examples[0]?.ja || detail.item.title} size="sm" labelSlow={false} />
              </DialogTitle>
              <DialogDescription>
                {detail.group.lessonTitle} · mã {detail.item.code}
              </DialogDescription>
            </DialogHeader>

            {/* Công thức cấu trúc — token màu theo vai trò */}
            <section aria-label="Cấu trúc câu">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Cấu trúc</h4>
              <div className="rounded-2xl border-2 border-dashed border-primary/30 bg-primary/[0.04] p-4 flex flex-wrap items-center gap-1.5">
                {titleTokens(detail.item.title).map((t, i) => (
                  <span
                    key={i}
                    className={cn(
                      'jp rounded-lg border-2 px-2.5 py-1.5 font-bold text-sm sm:text-base shadow-sm',
                      tokenCls(t),
                    )}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">
                <span className="inline-block h-2 w-2 rounded-sm bg-primary/40 align-middle" /> chỗ trống (điền nội dung)
                {' · '}
                <span className="inline-block h-2 w-2 rounded-sm bg-sakura/40 align-middle" /> trợ từ
                {' · '}
                <span className="inline-block h-2 w-2 rounded-sm bg-success/40 align-middle" /> đuôi câu lịch sự
                {' · '}
                <span className="inline-block h-2 w-2 rounded-sm bg-warning/40 align-middle" /> động từ / tính từ
              </p>
            </section>

            {/* Cách dùng */}
            <section aria-label="Cách dùng">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Cách dùng</h4>
              <p className="text-sm leading-relaxed rounded-2xl bg-muted/40 px-4 py-3">{detail.item.explanationVi}</p>
            </section>

            {/* Ví dụ — mỗi câu có audio riêng */}
            {detail.item.examples.length > 0 && (
              <section aria-label="Ví dụ">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Ví dụ ({detail.item.examples.length})
                </h4>
                <div className="space-y-2">
                  {detail.item.examples.map((ex, i) => (
                    <div key={i} className="rounded-2xl border bg-card p-3 flex items-start gap-3">
                      <AudioButton text={ex.ja} size="sm" labelSlow={false} />
                      <div className="min-w-0">
                        <p className="jp text-sm font-semibold leading-relaxed break-words">{ex.ja}</p>
                        <p className="text-xs text-muted-foreground leading-snug mt-0.5 break-words">{ex.vi}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Lỗi thường gặp — rút từ chính dấu hiệu trong giải thích (không bịa nội dung) */}
            {/không (dùng|thể|được)|lưu ý|nhầm|sai|tránh|chỉ dùng|đừng/i.test(detail.item.explanationVi) && (
              <section
                aria-label="Lưu ý tránh lỗi"
                className="rounded-2xl border-2 border-destructive/30 bg-destructive/[0.06] p-4"
              >
                <h4 className="text-xs font-bold uppercase tracking-wider text-destructive mb-1.5 flex items-center gap-1.5">
                  <X className="h-3.5 w-3.5" aria-hidden /> Lưu ý tránh lỗi
                </h4>
                <p className="text-sm leading-relaxed">{detail.item.explanationVi}</p>
              </section>
            )}

            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              {detail.group.lessonSlug && (
                <Button
                  onClick={() => {
                    onClose()
                    navigate(`/lessons/${detail.group.lessonSlug}`)
                  }}
                  className="flex-1 rounded-xl"
                >
                  <BookOpen className="h-4 w-4" aria-hidden /> Luyện trong bài học
                </Button>
              )}
              <Button variant="outline" onClick={onClose} className="rounded-xl">
                Đóng
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
