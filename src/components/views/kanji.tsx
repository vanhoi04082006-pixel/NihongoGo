'use client'

import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { PenLine } from 'lucide-react'
import { api } from '@/lib/client/api'
import { useHashRoute } from '@/components/app/router'
import { AudioButton } from '@/components/shared/audio-button'
import { WritingCanvas, computeShapeSimilarity } from '@/components/lesson/canvas-write'
import { StrokeOrderPlayer } from '@/components/kana/stroke-order-player'
import { LoadingBlock, ErrorBlock, PageHeader } from '@/components/shared/widgets'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface KanjiExampleDTO {
  word: string
  reading: string
  meaningVi: string
}

interface KanjiDTO {
  id: string
  character: string
  meaningVi: string
  onyomi: string[]
  kunyomi: string[]
  jlpt: number
  strokeCount: number
  radicals: string[]
  examples: KanjiExampleDTO[]
  mnemonicVi: string | null
}

export function KanjiView({ character }: { character: string | null }) {
  const { navigate, back } = useHashRoute()
  const [jlptFilter, setJlptFilter] = useState<number | null>(null)
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['kanji'],
    queryFn: () => api<{ kanjiList: KanjiDTO[] }>('/api/kanji'),
  })

  const all = data?.kanjiList ?? []
  const filtered = useMemo(() => (jlptFilter ? all.filter((k) => k.jlpt === jlptFilter) : all), [all, jlptFilter])
  const selected = character ? all.find((k) => k.character === character) : null

  if (isLoading) return <LoadingBlock label="Đang tải Kanji…" />
  if (error || !data) return <ErrorBlock message="Không tải được danh sách Kanji." onRetry={() => refetch()} />

  /* ------------------------------ Detail page ------------------------------ */
  if (selected) {
    return (
      <div>
        <Button variant="ghost" size="sm" onClick={back} className="mb-2 -ml-2">
          ← Danh sách Kanji
        </Button>
        <div className="grid md:grid-cols-[300px_1fr] gap-6 items-start">
          {/* Character card */}
          <div className="rounded-3xl border bg-card p-6 text-center shadow-sm">
            <p className="jp jp-serif text-[7rem] leading-none font-bold select-none">{selected.character}</p>
            <p className="font-bold text-lg mt-3">{selected.meaningVi}</p>
            <div className="flex items-center justify-center gap-2 mt-2 flex-wrap">
              <Badge variant="secondary">N{selected.jlpt}</Badge>
              <Badge variant="secondary">{selected.strokeCount} nét</Badge>
              {selected.radicals.map((r) => (
                <Badge key={r} variant="outline" className="jp">{r}</Badge>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <AudioButton text={selected.character} />
            </div>
          </div>

          <div className="space-y-5 min-w-0">
            {/* Readings */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-2xl border bg-card p-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Âm On (Hán-Nhật)</h3>
                <div className="flex flex-wrap gap-1.5">
                  {selected.onyomi.length > 0 ? (
                    selected.onyomi.map((o) => (
                      <span key={o} className="jp rounded-lg bg-primary/10 text-primary px-2.5 py-1 font-bold">
                        {o}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-muted-foreground">—</span>
                  )}
                </div>
              </div>
              <div className="rounded-2xl border bg-card p-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Âm Kun (thuần Nhật)</h3>
                <div className="flex flex-wrap gap-1.5">
                  {selected.kunyomi.length > 0 ? (
                    selected.kunyomi.map((o) => (
                      <span key={o} className="jp rounded-lg bg-sakura/10 text-sakura px-2.5 py-1 font-bold">
                        {o}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-muted-foreground">—</span>
                  )}
                </div>
              </div>
            </div>

            {/* Mnemonic */}
            {selected.mnemonicVi && (
              <div className="rounded-2xl border-2 border-dashed border-warning/40 bg-warning/5 p-4">
                <h3 className="font-bold text-sm mb-1">Mẹo nhớ</h3>
                <p className="text-sm leading-relaxed">{selected.mnemonicVi}</p>
              </div>
            )}

            {/* Examples */}
            {selected.examples.length > 0 && (
              <div className="rounded-2xl border bg-card p-4">
                <h3 className="font-bold text-sm mb-2.5">Từ vựng ví dụ</h3>
                <div className="space-y-2">
                  {selected.examples.map((ex) => (
                    <div key={ex.word} className="flex items-center gap-3">
                      <AudioButton text={ex.word} size="sm" labelSlow={false} />
                      <div>
                        <span className="jp font-bold">{ex.word}</span>
                        <span className="jp text-xs text-muted-foreground ml-2">{ex.reading}</span>
                        <span className="text-sm text-muted-foreground ml-2">— {ex.meaningVi}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Writing practice */}
        <KanjiWritingSection kanji={selected} />
      </div>
    )
  }

  /* ------------------------------- List page ------------------------------- */
  return (
    <div>
      <PageHeader
        icon="BookText"
        title="Kanji — Chữ Hán"
        sub={`${all.length} chữ Hán thông dụng theo trình độ JLPT. Bấm vào chữ để xem chi tiết, âm đọc và luyện viết.`}
        actions={
          <div className="flex rounded-xl border bg-card p-1" role="group" aria-label="Lọc theo JLPT">
            <button
              onClick={() => setJlptFilter(null)}
              className={cn('rounded-lg px-3 py-1.5 text-sm font-bold transition-colors outline-none', !jlptFilter ? 'bg-primary text-primary-foreground' : 'text-muted-foreground')}
            >
              Tất cả
            </button>
            {[5].map((n) => (
              <button
                key={n}
                onClick={() => setJlptFilter(n)}
                className={cn('rounded-lg px-3 py-1.5 text-sm font-bold transition-colors outline-none', jlptFilter === n ? 'bg-primary text-primary-foreground' : 'text-muted-foreground')}
              >
                N{n}
              </button>
            ))}
          </div>
        }
      />

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-2.5">
        {filtered.map((k) => (
          <button
            key={k.id}
            onClick={() => navigate(`/kanji/${encodeURIComponent(k.character)}`)}
            className="rounded-xl border bg-card p-3 text-center transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-primary/40 outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <p className="jp jp-serif text-4xl font-bold leading-none mb-1.5">{k.character}</p>
            <p className="text-xs font-semibold text-muted-foreground line-clamp-2 leading-tight min-h-8">{k.meaningVi}</p>
            <div className="flex items-center justify-center gap-1 mt-1.5">
              <Badge variant="secondary" className="text-[10px] px-1.5">N{k.jlpt}</Badge>
              <span className="text-[10px] text-muted-foreground">{k.strokeCount} nét</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------ Writing section ----------------------------- */

function KanjiWritingSection({ kanji }: { kanji: KanjiDTO }) {
  const [strokes, setStrokes] = useState<{ x: number; y: number }[][]>([])
  const [result, setResult] = useState<{ score: number; passed: boolean; expectedStrokes: number } | null>(null)
  const [checking, setChecking] = useState(false)
  const [resetToken, setResetToken] = useState(0)
  const [showGuide, setShowGuide] = useState(false)
  const count = strokes.length

  const check = async () => {
    setChecking(true)
    try {
      const similarity = computeShapeSimilarity(kanji.character, strokes)
      const res = await api<{ score: number; passed: boolean; expectedStrokes: number }>('/api/writing/evaluate', {
        method: 'POST',
        json: { character: kanji.character, strokeCount: count, shapeSimilarity: similarity },
      })
      setResult(res)
    } finally {
      setChecking(false)
    }
  }

  return (
    <section className="mt-8" aria-label="Luyện viết kanji">
      <h2 className="font-bold mb-3">Luyện viết tay</h2>
      <div className="grid sm:grid-cols-2 gap-6 items-start">
        <div className="rounded-2xl border bg-card p-5 text-center">
          <p className="jp jp-serif text-6xl font-bold">{kanji.character}</p>
          <p className="text-sm font-bold text-primary mt-2">{kanji.strokeCount} nét · {kanji.meaningVi}</p>
          <p className="text-xs text-muted-foreground mt-1">Chuẩn: {kanji.onyomi.join('・')}{kanji.kunyomi.length ? ` / ${kanji.kunyomi.join('・')}` : ''}</p>
        </div>
        <div>
          <WritingCanvas character={kanji.character} guide disabled={!!result} resetToken={resetToken} onStrokesChange={setStrokes} />
          {/* Hướng dẫn viết từng nét (KanjiVG) — thu gọn mặc định */}
          <div className="mt-3">
            <button
              type="button"
              onClick={() => setShowGuide((v) => !v)}
              aria-expanded={showGuide}
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-primary/40 bg-primary/[0.04] px-4 py-2.5 text-sm font-bold text-primary transition-all hover:border-primary/60 hover:bg-primary/10 outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <PenLine className="h-4 w-4" aria-hidden />
              {showGuide ? 'Ẩn hướng dẫn viết' : `Xem hướng dẫn viết ${kanji.character}`}
              <span className="text-[10px] font-semibold text-muted-foreground" aria-hidden>
                ({kanji.strokeCount} nét)
              </span>
            </button>
            {showGuide && (
              <div className="mt-3">
                <StrokeOrderPlayer character={kanji.character} />
              </div>
            )}
          </div>
          <div className="flex justify-center gap-2 mt-3">
            <Button disabled={count === 0 || !!result || checking} onClick={check} className="rounded-xl px-6">
              {checking ? 'Đang chấm…' : 'Chấm bài viết'}
            </Button>
            {result && (
              <Button
                variant="outline"
                onClick={() => {
                  setResult(null)
                  setStrokes([])
                  setResetToken((t) => t + 1)
                }}
              >
                Viết lại
              </Button>
            )}
          </div>
          {result && (
            <div
              className="mt-4 rounded-2xl border-2 p-4 text-center"
              style={{ borderColor: result.passed ? 'var(--success)' : 'var(--destructive)' }}
              role="status"
            >
              <p className={cn('font-extrabold text-lg', result.passed ? 'text-success' : 'text-destructive')}>
                {result.passed ? 'Khá chuẩn!' : 'Chưa đạt'} — {result.score}/100
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Bạn vẽ {count} nét · chuẩn {result.expectedStrokes} nét. Chấm heuristic (50% số nét + 50% hình dạng) — chưa phải AI nhận diện nét.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
