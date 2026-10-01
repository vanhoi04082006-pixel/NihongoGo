'use client'

import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { BookOpen, Search } from 'lucide-react'
import { api } from '@/lib/client/api'
import { LoadingBlock, ErrorBlock, PageHeader, EmptyBlock } from '@/components/shared/widgets'
import { AudioButton } from '@/components/shared/audio-button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useHashRoute } from '@/components/app/router'
import { katakanaToHiragana } from '@/lib/japanese'

/* --------------------------------- DTO types -------------------------------- */

interface VocabItemDTO {
  id: string
  term: string
  reading: string | null
  romaji: string
  meaningVi: string
  pos: string | null
  exampleJa: string
  exampleVi: string
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

  const groups = useMemo(() => {
    if (!data) return []
    return data.groups
      .filter((g) => lessonFilter === 'all' || g.lessonId === lessonFilter)
      .map((g) => ({ ...g, items: g.items.filter((v) => matchItem(v, query.trim())) }))
      .filter((g) => g.items.length > 0)
  }, [data, query, lessonFilter])

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
                    <article
                      key={v.id}
                      className="rounded-2xl border bg-card p-4 flex flex-col gap-2 min-w-0 transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-primary/30"
                    >
                      <div className="flex items-start justify-between gap-2 min-w-0">
                        <div className="min-w-0">
                          <p className="jp jp-serif text-lg font-bold leading-tight break-words">{v.term}</p>
                          <p className="text-xs text-muted-foreground mt-0.5 break-words">
                            {v.reading ? `${v.reading} · ` : ''}
                            <span className="font-medium">{v.romaji}</span>
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-1.5 shrink-0">
                          <AudioButton text={v.exampleJa || v.term} size="sm" labelSlow={false} />
                        </div>
                      </div>
                      <p className="text-sm font-medium leading-snug break-words">
                        {v.pos ? <Badge variant="secondary" className="mr-1.5 h-4.5 px-1.5 text-[10px]">{v.pos}</Badge> : null}
                        {v.meaningVi}
                      </p>
                      {v.exampleJa ? (
                        <div className="mt-auto rounded-xl bg-muted/40 px-3 py-2 min-w-0">
                          <p className="jp text-xs leading-relaxed break-words">{v.exampleJa}</p>
                          <p className="text-[11px] text-muted-foreground leading-snug mt-0.5 break-words">{v.exampleVi}</p>
                        </div>
                      ) : null}
                    </article>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  )
}
