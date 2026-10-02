'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Check, Eye, GraduationCap, PenLine, RotateCcw, Trophy, X } from 'lucide-react'
import { toast } from 'sonner'
import { api, ApiClientError } from '@/lib/client/api'
import { useHashRoute } from '@/components/app/router'
import { AudioButton } from '@/components/shared/audio-button'
import { WritingCanvas, computeShapeSimilarity } from '@/components/lesson/canvas-write'
import { StrokeOrderPlayer } from '@/components/kana/stroke-order-player'
import { LoadingBlock, ErrorBlock, PageHeader } from '@/components/shared/widgets'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { sfx } from '@/lib/sounds'
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
  const [practiceOpen, setPracticeOpen] = useState(false)
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
          <div className="flex items-center gap-2">
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
            <Button onClick={() => setPracticeOpen(true)} className="rounded-xl h-10 px-4 shrink-0">
              <GraduationCap className="h-4 w-4" aria-hidden /> Luyện tập
            </Button>
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

      <KanjiPracticeDialog open={practiceOpen} onOpenChange={setPracticeOpen} jlptFilter={jlptFilter} />
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

/* ----------------------------- Luyện tập Kanji ------------------------------ */

interface KanjiPracticeQuestionDTO {
  id: string
  mode: 'MEANING' | 'CHARACTER' | 'READING'
  prompt: string
  promptSub?: string
  promptHint?: string
  options: { id: string; text: string; big?: boolean }[]
}

interface KanjiPracticeAnswerDTO {
  correct: boolean
  correctAnswer: string
  explanation: string
  srs: { mastery: number; state: string }
}

function KanjiPracticeDialog({
  open,
  onOpenChange,
  jlptFilter,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
  jlptFilter: number | null
}) {
  const qc = useQueryClient()
  const [phase, setPhase] = useState<'setup' | 'playing' | 'done'>('setup')
  const [mode, setMode] = useState<'MEANING' | 'CHARACTER' | 'READING'>('MEANING')
  const [questions, setQuestions] = useState<KanjiPracticeQuestionDTO[]>([])
  const [index, setIndex] = useState(0)
  const [chosen, setChosen] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<KanjiPracticeAnswerDTO | null>(null)
  const [stats, setStats] = useState({ correct: 0, wrong: 0 })
  const [starting, setStarting] = useState(false)
  const [answering, setAnswering] = useState(false)
  const advanceTimer = useRef<number | null>(null)

  const clearTimer = () => {
    if (advanceTimer.current !== null) {
      window.clearTimeout(advanceTimer.current)
      advanceTimer.current = null
    }
  }
  useEffect(() => {
    if (!open) clearTimer()
    return clearTimer
  }, [open])

  const current = questions[index]

  const next = useCallback(() => {
    clearTimer()
    setFeedback(null)
    setChosen(null)
    setIndex((i) => {
      if (i + 1 >= questions.length) {
        setPhase('done')
        sfx.complete()
        return i
      }
      return i + 1
    })
  }, [questions.length])

  const start = useCallback(async () => {
    setStarting(true)
    try {
      const res = await api<{ questions: KanjiPracticeQuestionDTO[] }>('/api/kanji/practice/start', {
        method: 'POST',
        json: { mode, jlpt: jlptFilter, count: 10 },
      })
      clearTimer()
      setQuestions(res.questions)
      setIndex(0)
      setChosen(null)
      setFeedback(null)
      setStats({ correct: 0, wrong: 0 })
      setPhase('playing')
    } catch (e) {
      toast.error(e instanceof ApiClientError ? e.message : 'Không tạo được phiên luyện tập')
    } finally {
      setStarting(false)
    }
  }, [mode, jlptFilter])

  const answer = useCallback(
    async (choice: string) => {
      if (feedback || answering || !current) return
      setAnswering(true)
      setChosen(choice)
      try {
        const res = await api<KanjiPracticeAnswerDTO>('/api/kanji/practice/answer', {
          method: 'POST',
          json: { questionId: current.id, choice },
        })
        setFeedback(res)
        if (res.correct) {
          setStats((s) => ({ ...s, correct: s.correct + 1 }))
          sfx.correct()
        } else {
          setStats((s) => ({ ...s, wrong: s.wrong + 1 }))
          sfx.wrong()
        }
        advanceTimer.current = window.setTimeout(() => next(), res.correct ? 1300 : 2600)
      } catch (e) {
        toast.error(e instanceof ApiClientError ? e.message : 'Không gửi được câu trả lời')
        setPhase('setup')
      } finally {
        setAnswering(false)
      }
    },
    [feedback, answering, current, next],
  )

  // Phím tắt: 1–4 chọn đáp án, Enter sang câu tiếp
  useEffect(() => {
    if (!open || phase !== 'playing') return
    const onKey = (e: KeyboardEvent) => {
      if (feedback && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault()
        next()
        return
      }
      if (!feedback && !answering) {
        const n = Number(e.key)
        if (current && n >= 1 && n <= current.options.length) {
          e.preventDefault()
          void answer(current.options[n - 1]!.id)
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, phase, feedback, answering, current, answer, next])

  const handleOpenChange = (v: boolean) => {
    if (!v) {
      clearTimer()
      void qc.invalidateQueries({ queryKey: ['overview'] })
      setPhase('setup')
      setQuestions([])
      setFeedback(null)
      setChosen(null)
      setStats({ correct: 0, wrong: 0 })
    }
    onOpenChange(v)
  }

  const accuracy = stats.correct + stats.wrong > 0 ? Math.round((stats.correct / (stats.correct + stats.wrong)) * 100) : 0
  const isKanjiPrompt = current?.mode === 'MEANING' || current?.mode === 'READING'

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto nice-scroll">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" aria-hidden />
            Luyện tập Kanji{jlptFilter ? ` — N${jlptFilter}` : ''}
          </DialogTitle>
          <DialogDescription>
            {phase === 'setup' && '10 câu hỏi ngẫu nhiên, chấm điểm tại server. Trả lời đúng để tăng độ thành thạo Kanji.'}
            {phase === 'playing' && `Câu ${index + 1}/${questions.length} · đúng ${stats.correct} · sai ${stats.wrong}`}
            {phase === 'done' && 'Hoàn thành lượt luyện tập!'}
          </DialogDescription>
        </DialogHeader>

        {phase === 'setup' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" role="radiogroup" aria-label="Chế độ luyện tập">
              <ModeCard active={mode === 'MEANING'} onClick={() => setMode('MEANING')} icon={<Eye className="h-5 w-5" aria-hidden />} title="Nhận diện" desc="Xem chữ Hán → chọn nghĩa tiếng Việt" />
              <ModeCard active={mode === 'CHARACTER'} onClick={() => setMode('CHARACTER')} icon={<Trophy className="h-5 w-5" aria-hidden />} title="Gợi nhớ" desc="Xem nghĩa → chọn chữ Hán đúng" />
              <ModeCard active={mode === 'READING'} onClick={() => setMode('READING')} icon={<PenLine className="h-5 w-5" aria-hidden />} title="Âm đọc" desc="Xem chữ Hán → chọn âm đọc đúng" />
            </div>
            <Button size="lg" onClick={() => void start()} disabled={starting} className="w-full rounded-xl h-12 text-base">
              {starting ? 'Đang tạo câu hỏi…' : 'Bắt đầu luyện tập'}
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Mẹo: dùng phím <kbd className="rounded border bg-muted px-1.5 py-0.5 font-bold">1</kbd>–
              <kbd className="rounded border bg-muted px-1.5 py-0.5 font-bold">4</kbd> để chọn nhanh,{' '}
              <kbd className="rounded border bg-muted px-1.5 py-0.5 font-bold">Enter</kbd> để sang câu tiếp.
            </p>
          </div>
        )}

        {phase === 'playing' && current && (
          <div>
            <Progress value={(index / questions.length) * 100} className="h-2 mb-4" aria-hidden />
            <p className="text-center text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
              {current.promptSub ?? (current.mode === 'CHARACTER' ? 'Chọn chữ Hán đúng' : 'Nghĩa là gì?')}
            </p>
            {current.promptHint && <p className="text-center text-sm font-semibold text-muted-foreground mb-1">“{current.promptHint}”</p>}
            <p
              className={cn(
                'text-center font-bold select-none py-5',
                isKanjiPrompt ? 'jp jp-serif text-8xl leading-none' : 'text-2xl text-primary leading-snug px-4',
              )}
              aria-label={`Câu hỏi: ${current.prompt}`}
            >
              {current.prompt}
            </p>
            {isKanjiPrompt && (
              <div className="flex justify-center mb-2">
                <AudioButton text={current.prompt} size="sm" labelSlow={false} />
              </div>
            )}
            <div className="grid grid-cols-2 gap-2.5">
              {current.options.map((o, i) => {
                const isCorrectOption = feedback && o.text === feedback.correctAnswer
                const isWrongChosen = feedback && !feedback.correct && o.id === chosen
                return (
                  <button
                    key={o.id}
                    onClick={() => void answer(o.id)}
                    disabled={!!feedback || answering}
                    aria-label={`Phím ${i + 1}: ${o.text}`}
                    className={cn(
                      'relative h-14 rounded-2xl border-2 font-bold transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring px-3',
                      current.mode === 'CHARACTER' && 'jp jp-serif text-3xl',
                      current.mode === 'MEANING' && 'text-sm',
                      current.mode === 'READING' && 'jp text-lg',
                      !feedback && 'border-border hover:border-primary hover:bg-primary/5 active:scale-[0.98]',
                      isCorrectOption && 'border-success bg-success/10 text-success',
                      isWrongChosen && 'border-destructive bg-destructive/10 text-destructive',
                      feedback && !isCorrectOption && !isWrongChosen && 'border-border opacity-50',
                    )}
                  >
                    <span className="absolute top-1.5 right-2 text-[10px] font-extrabold text-muted-foreground" aria-hidden>
                      {i + 1}
                    </span>
                    <span className="flex h-full items-center justify-center leading-tight break-words">{o.text}</span>
                  </button>
                )
              })}
            </div>

            {feedback && (
              <div
                className={cn(
                  'mt-4 rounded-2xl border-2 p-4 animate-pop-in',
                  feedback.correct ? 'border-success bg-success/10' : 'border-destructive bg-destructive/10',
                )}
                role="status"
              >
                <p className={cn('font-extrabold text-lg flex items-center gap-2', feedback.correct ? 'text-success' : 'text-destructive')}>
                  {feedback.correct ? <Check className="h-5 w-5" strokeWidth={3} aria-hidden /> : <X className="h-5 w-5" aria-hidden />}
                  {feedback.correct ? 'Chính xác!' : 'Chưa đúng'}
                </p>
                {!feedback.correct && (
                  <p className="text-sm mt-1">
                    Đáp án đúng: <span className="font-bold text-lg">{feedback.correctAnswer}</span>
                  </p>
                )}
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{feedback.explanation}</p>
                <p className="text-[11px] text-muted-foreground mt-2">
                  Mức nhớ Kanji này: {feedback.srs.mastery}/5 {feedback.srs.state === 'MASTERED' ? '— đã thành thạo!' : ''}
                </p>
                <p className="text-[11px] text-muted-foreground mt-1">Nhấn Enter để sang câu tiếp theo</p>
              </div>
            )}
          </div>
        )}

        {phase === 'done' && (
          <div className="relative text-center py-2">
            {accuracy >= 50 && <KanjiMiniConfetti />}
            <div className="mx-auto h-14 w-14 rounded-2xl bg-success/10 flex items-center justify-center mb-2">
              <Trophy className="h-8 w-8 text-success" aria-hidden />
            </div>
            <h3 className="font-extrabold text-xl">Hoàn thành lượt luyện tập!</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {stats.correct}/{stats.correct + stats.wrong} câu đúng · {accuracy}% độ chính xác
            </p>
            <div className="grid grid-cols-3 gap-2 mt-4">
              <StatPill label="Đúng" value={stats.correct} className="text-success" />
              <StatPill label="Sai" value={stats.wrong} className="text-destructive" />
              <StatPill label="Chính xác" value={`${accuracy}%`} className="text-primary" />
            </div>
            <div className="flex gap-2 justify-center mt-5 flex-wrap">
              <Button onClick={() => void start()} className="rounded-xl h-11">
                <RotateCcw className="h-4 w-4" aria-hidden /> Luyện lại
              </Button>
              <Button variant="outline" onClick={() => setPhase('setup')} className="rounded-xl h-11">
                Đổi chế độ
              </Button>
              <Button variant="ghost" onClick={() => handleOpenChange(false)} className="rounded-xl h-11">
                Đóng
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

function KanjiMiniConfetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.4,
        duration: 1.2 + Math.random() * 1,
        size: 4 + Math.random() * 5,
        color: ['var(--primary)', 'var(--sakura)', 'var(--success)', 'var(--warning)'][i % 4],
        round: Math.random() > 0.6,
      })),
    [],
  )
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.round ? p.size : p.size * 0.45,
            background: p.color,
            borderRadius: p.round ? '9999px' : '2px',
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

function ModeCard({
  active,
  onClick,
  icon,
  title,
  desc,
}: {
  active: boolean
  onClick: () => void
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <button
      onClick={onClick}
      role="radio"
      aria-checked={active}
      className={cn(
        'rounded-2xl border-2 p-4 text-left transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[44px]',
        active ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/40',
      )}
    >
      <span className={cn('inline-flex items-center gap-2 font-bold', active && 'text-primary')}>
        {icon}
        {title}
      </span>
      <p className="text-xs text-muted-foreground mt-1.5 leading-snug">{desc}</p>
    </button>
  )
}

function StatPill({ label, value, className }: { label: string; value: string | number; className?: string }) {
  return (
    <div className="rounded-xl border bg-card p-2.5">
      <p className={cn('text-lg font-extrabold tabular-nums', className)}>{value}</p>
      <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">{label}</p>
    </div>
  )
}
