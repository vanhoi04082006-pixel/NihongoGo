'use client'

import { useEffect, useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { keepPreviousData } from '@tanstack/react-query'
import {
  BookMarked,
  BookText,
  CornerDownLeft,
  Languages,
  PenLine,
  RefreshCw,
  Search,
  Sparkles,
  Target,
  Trophy,
  Type,
  Volume2,
} from 'lucide-react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import { Badge } from '@/components/ui/badge'
import { useHashRoute } from './router'
import { api } from '@/lib/client/api'
import { useTtsPlayer } from '@/components/shared/audio-button'

/* ------------------------------- DTO contracts ------------------------------ */

interface LessonRefDTO {
  slug: string
  title: string
}

interface VocabResultDTO {
  id: string
  term: string
  reading: string | null
  romaji: string
  meaningVi: string
  pos: string | null
  exampleJa: string
  exampleVi: string
  lesson: LessonRefDTO | null
}

interface KanjiResultDTO {
  id: string
  character: string
  meaningVi: string
  onyomi: string[]
  kunyomi: string[]
  jlpt: number
  strokeCount: number
}

interface GrammarResultDTO {
  id: string
  code: string
  title: string
  explanationVi: string
  lesson: LessonRefDTO | null
}

interface KanaResultDTO {
  id: string
  character: string
  romaji: string
  type: string
  exampleWord: string
  exampleMeaning: string
}

interface SearchResponseDTO {
  query: string
  results: {
    vocabulary: VocabResultDTO[]
    kanji: KanjiResultDTO[]
    grammar: GrammarResultDTO[]
    kana: KanaResultDTO[]
  }
  total: number
}

/* ------------------------------- Quick links -------------------------------- */

const QUICK_LINKS = [
  { path: '/', label: 'Học theo hành trình', icon: Sparkles, hint: 'Trang chủ' },
  { path: '/kana', label: 'Bảng Kana', icon: Languages, hint: 'Hiragana · Katakana' },
  { path: '/kanji', label: 'Kanji', icon: BookText, hint: '119 chữ' },
  { path: '/vocabulary', label: 'Từ điển từ vựng', icon: BookMarked, hint: 'Tra cứu · có âm thanh' },
  { path: '/grammar', label: 'Ngữ pháp A-Z', icon: PenLine, hint: '137 mẫu · ví dụ minh họa' },
  { path: '/review', label: 'Ôn tập SRS', icon: RefreshCw, hint: 'Đến hạn hôm nay' },
  { path: '/quests', label: 'Nhiệm vụ hằng ngày', icon: Target, hint: 'Làm mới mỗi ngày' },
  { path: '/leaderboard', label: 'Bảng xếp hạng', icon: Trophy, hint: 'Giải tuần này' },
]

/* ------------------------------- Trigger button ----------------------------- */

export function SearchTrigger({ onClick }: { onClick: () => void }) {
  const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent)
  return (
    <button
      onClick={onClick}
      className="hidden sm:flex items-center gap-2 rounded-full border bg-muted/40 hover:bg-muted/70 text-muted-foreground hover:text-foreground pl-3 pr-1.5 py-1.5 text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label="Tìm kiếm (Ctrl K)"
    >
      <Search className="h-4 w-4" aria-hidden />
      <span className="hidden md:inline">Tìm từ, kanji, ngữ pháp…</span>
      <kbd className="pointer-events-none hidden sm:inline-flex h-6 select-none items-center gap-0.5 rounded-md border bg-background px-1.5 font-mono text-[10px] font-semibold text-muted-foreground">
        {isMac ? '⌘' : 'Ctrl'} K
      </kbd>
    </button>
  )
}

/* --------------------------------- Palette ---------------------------------- */

export function CommandPalette({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const { navigate } = useHashRoute()
  const [query, setQuery] = useState('')
  const [debounced, setDebounced] = useState('')
  const { play } = useTtsPlayer()

  // Debounce 250ms
  useEffect(() => {
    const t = setTimeout(() => setDebounced(query.trim()), 250)
    return () => clearTimeout(t)
  }, [query])

  const { data, isFetching } = useQuery<SearchResponseDTO>({
    queryKey: ['search', debounced],
    queryFn: () => api<SearchResponseDTO>(`/api/search?q=${encodeURIComponent(debounced)}`),
    enabled: open && debounced.length > 0,
    placeholderData: keepPreviousData,
    staleTime: 30_000,
  })

  const r = data?.results
  const hasResults = !!r && (r.vocabulary.length + r.kanji.length + r.grammar.length + r.kana.length) > 0
  const hasQuery = debounced.length > 0

  const go = (path: string) => {
    setOpen(false)
    setQuery('')
    navigate(path)
  }

  const groups = useMemo(
    () => [
      { key: 'vocab', items: r?.vocabulary ?? [] },
      { key: 'kanji', items: r?.kanji ?? [] },
      { key: 'grammar', items: r?.grammar ?? [] },
      { key: 'kana', items: r?.kana ?? [] },
    ],
    [r]
  )

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="overflow-hidden p-0 top-[18%] translate-y-0 max-w-xl rounded-2xl shadow-2xl shadow-primary/10"
        showCloseButton={false}
        aria-describedby={undefined}
      >
        <DialogTitle className="sr-only">Tìm kiếm toàn cục</DialogTitle>
        <Command shouldFilter={false} loop className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-muted-foreground/80">
          <CommandInput
            value={query}
            onValueChange={setQuery}
            placeholder="Tìm từ vựng, kanji, ngữ pháp… (tiếng Nhật, romaji hoặc tiếng Việt)"
            className="h-12"
          />

          <CommandList className="max-h-[min(60vh,480px)] nice-scroll px-1.5 py-2">
            {!hasQuery ? (
              <CommandGroup heading="Đi nhanh">
                {QUICK_LINKS.map((q, i) => (
                  <CommandItem
                    key={q.path}
                    value={`quick-${q.path}`}
                    onSelect={() => go(q.path)}
                    className="gap-3 rounded-xl px-3 py-2.5 quick-link-in"
                    style={{ animationDelay: `${i * 40}ms` }}
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <q.icon className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="flex flex-col">
                      <span className="font-semibold">{q.label}</span>
                      <span className="text-xs text-muted-foreground">{q.hint}</span>
                    </span>
                  </CommandItem>
                ))}
              </CommandGroup>
            ) : !hasResults && !isFetching ? (
              <CommandEmpty>
                <span className="jp text-2xl block mb-1 opacity-40">見つかりません</span>
                Không tìm thấy kết quả cho “{debounced}”. Thêm ký tự khác hoặc thử romaji.
              </CommandEmpty>
            ) : (
              <>
                {groups[0].items.length > 0 && (
                  <CommandGroup heading={`Từ vựng · ${groups[0].items.length}`}>
                    {groups[0].items.map((v) => (
                      <CommandItem
                        key={v.id}
                        value={`vocab-${v.id}`}
                        onSelect={() => v.lesson && go(`/lessons/${v.lesson.slug}`)}
                        className="gap-3 rounded-xl px-3 py-2.5"
                      >
                        <span className="jp min-w-16 text-center text-lg font-bold">{v.term}</span>
                        <span className="flex min-w-0 flex-1 flex-col">
                          <span className="truncate text-sm">
                            <span className="text-muted-foreground">{v.reading ? `${v.reading} · ` : ''}</span>
                            <span className="font-semibold">{v.romaji}</span>
                            {v.pos ? <Badge variant="secondary" className="ml-1.5 h-4 px-1.5 text-[10px]">{v.pos}</Badge> : null}
                          </span>
                          <span className="truncate text-xs text-muted-foreground">{v.meaningVi}</span>
                          {v.lesson ? <span className="truncate text-[10px] text-muted-foreground/70">↳ {v.lesson.title}</span> : null}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            void play(v.exampleJa || v.term)
                          }}
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                          aria-label={`Đọc to ${v.term}`}
                        >
                          <Volume2 className="h-4 w-4" aria-hidden />
                        </button>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                )}

                {groups[1].items.length > 0 && (
                  <>
                    <CommandSeparator className="my-1.5" />
                    <CommandGroup heading={`Kanji · ${groups[1].items.length}`}>
                      {groups[1].items.map((k) => (
                        <CommandItem
                          key={k.id}
                          value={`kanji-${k.id}`}
                          onSelect={() => go(`/kanji/${encodeURIComponent(k.character)}`)}
                          className="gap-3 rounded-xl px-3 py-2.5"
                        >
                          <span className="jp flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-muted/40 text-xl font-bold">
                            {k.character}
                          </span>
                          <span className="flex min-w-0 flex-1 flex-col">
                            <span className="truncate text-sm font-semibold">{k.meaningVi}</span>
                            <span className="truncate text-xs text-muted-foreground">
                              {k.onyomi.length > 0 ? `On: ${k.onyomi.join('、')}　` : ''}
                              {k.kunyomi.length > 0 ? `Kun: ${k.kunyomi.join('、')}` : ''}
                            </span>
                          </span>
                          <span className="flex shrink-0 items-center gap-1">
                            <Badge variant="outline" className="h-5 px-1.5 text-[10px] font-bold">N{k.jlpt}</Badge>
                            <Badge variant="secondary" className="h-5 px-1.5 text-[10px]">{k.strokeCount} nét</Badge>
                          </span>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </>
                )}

                {groups[2].items.length > 0 && (
                  <>
                    <CommandSeparator className="my-1.5" />
                    <CommandGroup heading={`Ngữ pháp · ${groups[2].items.length}`}>
                      {groups[2].items.map((g) => (
                        <CommandItem
                          key={g.id}
                          value={`grammar-${g.id}`}
                          onSelect={() => g.lesson && go(`/lessons/${g.lesson.slug}`)}
                          className="gap-3 rounded-xl px-3 py-2.5"
                        >
                          <span className="jp flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sakura/10 text-sakura">
                            <Type className="h-4 w-4" aria-hidden />
                          </span>
                          <span className="flex min-w-0 flex-1 flex-col">
                            <span className="truncate text-sm font-semibold">{g.title}</span>
                            <span className="truncate text-xs text-muted-foreground">{g.explanationVi}</span>
                          </span>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </>
                )}

                {groups[3].items.length > 0 && (
                  <>
                    <CommandSeparator className="my-1.5" />
                    <CommandGroup heading={`Kana · ${groups[3].items.length}`}>
                      {groups[3].items.map((k) => (
                        <CommandItem
                          key={k.id}
                          value={`kana-${k.id}`}
                          onSelect={() => go(`/kana/${k.type === 'HIRAGANA' ? 'hiragana' : 'katakana'}/${k.id}`)}
                          className="gap-3 rounded-xl px-3 py-2.5"
                        >
                          <span className="jp flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-muted/40 text-xl font-bold">
                            {k.character}
                          </span>
                          <span className="flex min-w-0 flex-1 flex-col">
                            <span className="text-sm font-semibold">{k.romaji}</span>
                            <span className="truncate text-xs text-muted-foreground">
                              <span className="jp">{k.exampleWord}</span> — {k.exampleMeaning}
                            </span>
                          </span>
                          <Badge variant="outline" className="h-5 px-1.5 text-[10px] font-bold">
                            {k.type === 'HIRAGANA' ? 'Hira' : 'Kata'}
                          </Badge>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </>
                )}
              </>
            )}
          </CommandList>

          <div className="flex items-center justify-between border-t bg-muted/30 px-3 py-2 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <kbd className="rounded border bg-background px-1 font-mono font-semibold">↑↓</kbd> di chuyển
              <kbd className="ml-1 rounded border bg-background px-1 font-mono font-semibold">
                <CornerDownLeft className="inline h-2.5 w-2.5" aria-hidden />
              </kbd>
              mở
              <kbd className="ml-1 rounded border bg-background px-1 font-mono font-semibold">esc</kbd>
              đóng
            </span>
            <span className="flex items-center gap-2">
              {isFetching && hasQuery ? (
                <span className="h-3 w-3 animate-spin rounded-full border-2 border-muted-foreground/30 border-t-primary" aria-hidden />
              ) : null}
              {data && hasQuery ? <span>{data.total} kết quả</span> : null}
            </span>
          </div>
        </Command>
      </DialogContent>
    </Dialog>
  )
}

/** Hook gắn phím tắt toàn cục Ctrl/Cmd+K và giữ state mở. */
export function useCommandPalette() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return { open, setOpen }
}
