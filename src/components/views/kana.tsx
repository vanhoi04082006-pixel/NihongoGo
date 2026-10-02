'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { Check, Eye, GraduationCap, Lightbulb, LogIn, PenLine, RotateCcw, TriangleAlert, Trophy, X } from 'lucide-react'
import { api, ApiClientError } from '@/lib/client/api'
import { useHashRoute } from '@/components/app/router'
import { useAuth } from '@/components/app/use-auth'
import { AudioButton } from '@/components/shared/audio-button'
import { WritingCanvas, computeShapeSimilarity } from '@/components/lesson/canvas-write'
import { LoadingBlock, ErrorBlock, PageHeader, EmptyBlock, Confetti } from '@/components/shared/widgets'
import { StrokeOrderPlayer } from '@/components/kana/stroke-order-player'
import { useStrokeParts, strokeCountOf } from '@/components/kana/use-stroke-data'
import { getWritingGuide } from '@/components/kana/writing-guide'
import { setSfxEnabled, sfx } from '@/lib/sounds'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

interface KanaCharDTO {
  id: string
  character: string
  romaji: string
  type: string
  group: string
  row: number
  strokeCount: number
  exampleWord: string
  exampleReading: string
  exampleMeaning: string
}

interface KanaProgressItemDTO {
  kanaId: string
  character: string
  type: string
  correctCount: number
  wrongCount: number
  completed: boolean
}

interface KanaProgressDTO {
  target: number
  items: KanaProgressItemDTO[]
}

interface PracticeQuestionDTO {
  id: string
  mode: 'RECOGNIZE' | 'RECALL'
  prompt: string
  promptSub?: string
  options: { id: string; text: string; big?: boolean }[]
}

interface PracticeAnswerDTO {
  correct: boolean
  correctAnswer: string
  progress: { correctCount: number; wrongCount: number; completed: boolean; target: number }
}

const GROUP_LABEL: Record<string, string> = {
  BASIC: 'Âm cơ bản',
  DAKUTEN: 'Dakuten (゛)',
  HANDAKUTEN: 'Handakuten (゜)',
  YOUON: 'Youon (âm ghép)',
}

export function KanaView({ tab, charId }: { tab: string; charId: string | null }) {
  const { navigate } = useHashRoute()
  const { data: authUser } = useAuth()
  const type = tab === 'katakana' ? 'KATAKANA' : 'HIRAGANA'
  const [mode, setMode] = useState<'table' | 'write'>('table')
  const [detail, setDetail] = useState<KanaCharDTO | null>(null)
  const [practiceOpen, setPracticeOpen] = useState(false)
  const [overrides, setOverrides] = useState<Record<string, KanaProgressItemDTO>>({})

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['kana', type],
    queryFn: () => api<{ characters: KanaCharDTO[] }>(`/api/kana?type=${type}`),
  })

  const loggedIn = !!authUser
  const progressQuery = useQuery({
    queryKey: ['kana-progress', type],
    queryFn: () => api<KanaProgressDTO>(`/api/kana/progress?set=${type}`),
    enabled: loggedIn,
    staleTime: 20_000,
  })

  const chars = useMemo(() => data?.characters ?? [], [data])
  const target = progressQuery.data?.target ?? 10
  const progressMap = useMemo(() => {
    const m = new Map<string, KanaProgressItemDTO>()
    for (const it of progressQuery.data?.items ?? []) m.set(it.kanaId, it)
    for (const [k, v] of Object.entries(overrides)) m.set(k, v)
    return m
  }, [progressQuery.data, overrides])

  const onProgressUpdate = useCallback((item: KanaProgressItemDTO) => {
    setOverrides((prev) => ({ ...prev, [item.kanaId]: item }))
  }, [])

  const reducedMotion = authUser?.settings?.reducedMotion ?? false
  useEffect(() => {
    setSfxEnabled(authUser?.settings?.soundEnabled ?? true)
  }, [authUser?.settings?.soundEnabled])

  // Deep-link #/kana/hiragana/{id|chữ} → mở dialog chi tiết
  const selected = useMemo(() => {
    if (!charId || chars.length === 0) return null
    try {
      const decoded = decodeURIComponent(charId)
      return chars.find((c) => c.id === charId || c.character === decoded) ?? null
    } catch {
      return null
    }
  }, [charId, chars])

  const detailChar = detail && detail.type === type ? detail : null
  const dialogChar = detailChar ?? selected

  const closeDialog = () => {
    setDetail(null)
    if (selected) navigate(`/kana/${tab}`, { replace: true })
  }

  if (isLoading) return <LoadingBlock label="Đang tải bảng chữ…" />
  if (error || !data) return <ErrorBlock message="Không tải được bảng kana." onRetry={() => refetch()} />

  const completedCount = chars.filter((c) => progressMap.get(c.id)?.completed).length

  return (
    <div>
      <PageHeader
        icon="Languages"
        title={type === 'HIRAGANA' ? 'Hiragana — ひらがな' : 'Katakana — カタカナ'}
        sub={
          type === 'HIRAGANA'
            ? 'Bảng chữ mềm, dùng cho từ thuần Nhật và phần đuôi ngữ pháp.'
            : 'Bảng chữ vuông, dùng cho từ mượn và tên riêng nước ngoài.'
        }
        actions={
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex rounded-xl border bg-card p-1" role="tablist" aria-label="Chọn bảng chữ">
              {(['hiragana', 'katakana'] as const).map((t) => (
                <button
                  key={t}
                  role="tab"
                  aria-selected={tab === t}
                  onClick={() => navigate(`/kana/${t}`)}
                  className={cn(
                    'rounded-lg px-3.5 py-1.5 text-sm font-bold capitalize transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring',
                    tab === t ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
            {loggedIn && (
              <Button onClick={() => setPracticeOpen(true)} className="rounded-xl h-11 px-4 sm:px-5 shrink-0">
                <GraduationCap className="h-5 w-5" aria-hidden />
                <span className="hidden sm:inline">Luyện tập</span>
                <span className="sm:hidden">Luyện</span>
              </Button>
            )}
          </div>
        }
      />

      {/* Mode switch */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {(
          [
            { key: 'table', label: 'Bảng chữ' },
            { key: 'write', label: 'Luyện viết tay' },
          ] as const
        ).map((m) => (
          <button
            key={m.key}
            onClick={() => setMode(m.key)}
            aria-pressed={mode === m.key}
            className={cn(
              'rounded-xl px-4 py-2.5 text-sm font-bold border-2 transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring',
              mode === m.key ? 'border-primary bg-primary/10 text-primary' : 'border-border hover:border-primary/40'
            )}
          >
            {m.label}
          </button>
        ))}
      </div>

      {mode === 'table' && (
        <div className="space-y-8">
          {/* Tổng quan thành thạo */}
          {loggedIn ? (
            <section
              className="rounded-2xl border bg-card p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4"
              aria-label="Tiến độ thành thạo kana"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                  <p className="font-bold flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" aria-hidden />
                    Thành thạo {type === 'HIRAGANA' ? 'Hiragana' : 'Katakana'}
                  </p>
                  <span className="text-sm font-bold tabular-nums">
                    {completedCount}/{chars.length} ký tự
                    <span className="text-muted-foreground font-medium"> · mục tiêu {target} lần đúng/ký tự</span>
                  </span>
                </div>
                <Progress
                  value={chars.length ? (completedCount / chars.length) * 100 : 0}
                  className="h-3 [&_[data-slot=progress-indicator]]:bg-success"
                  aria-label={`Đã thành thạo ${completedCount}/${chars.length} ký tự`}
                />
              </div>
              <Button onClick={() => setPracticeOpen(true)} variant="outline" className="rounded-xl h-11 shrink-0">
                <PenLine className="h-4 w-4" aria-hidden /> Luyện để lên cấp
              </Button>
            </section>
          ) : (
            <section className="rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <p className="text-sm flex-1">
                <strong>Đăng nhập</strong> để lưu tiến độ thành thạo từng ký tự và luyện tập có chấm điểm tự động.
              </p>
              <Button onClick={() => navigate('/auth')} className="rounded-xl h-11 shrink-0">
                <LogIn className="h-4 w-4" aria-hidden /> Đăng nhập
              </Button>
            </section>
          )}

          {(['BASIC', 'DAKUTEN', 'HANDAKUTEN', 'YOUON'] as const).map((group) => {
            const groupChars = chars.filter((c) => c.group === group)
            if (groupChars.length === 0) return null
            return (
              <section key={group} aria-label={GROUP_LABEL[group]}>
                <h2 className="font-bold mb-3 flex items-center gap-2">
                  {GROUP_LABEL[group]}
                  <span className="text-xs font-medium text-muted-foreground">({groupChars.length} ký tự)</span>
                </h2>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-2">
                  {groupChars.map((c) => (
                    <KanaCard key={c.id} c={c} progress={progressMap.get(c.id)} target={target} onOpen={() => setDetail(c)} />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      )}

      {mode === 'write' && <KanaWriting chars={chars.filter((c) => c.group === 'BASIC')} />}

      {/* Dialog chi tiết ký tự (click thẻ hoặc deep-link) */}
      {dialogChar && (
        <KanaCharDialog
          char={dialogChar}
          target={target}
          progress={progressMap.get(dialogChar.id)}
          reducedMotion={reducedMotion}
          open
          onOpenChange={(v) => {
            if (!v) closeDialog()
          }}
        />
      )}

      {/* Chế độ luyện tập có chấm điểm ở server */}
      {loggedIn && (
        <PracticeDialog
          open={practiceOpen}
          onOpenChange={setPracticeOpen}
          type={type}
          chars={chars}
          target={target}
          onProgressUpdate={onProgressUpdate}
        />
      )}
    </div>
  )
}

/* ------------------------------- Thẻ ký tự ---------------------------------- */

function KanaCard({
  c,
  progress,
  target,
  onOpen,
}: {
  c: KanaCharDTO
  progress?: KanaProgressItemDTO
  target: number
  onOpen: () => void
}) {
  const done = progress?.completed
  const correct = progress?.correctCount ?? 0
  const pct = Math.min(1, correct / Math.max(1, target))
  const tooltipText = progress
    ? done
      ? `Đã thành thạo (${correct}/${target} lần đúng)`
      : `${correct}/${target} lần đúng${progress.wrongCount > 0 ? ` · sai ${progress.wrongCount}` : ''}`
    : 'Chưa luyện tập — bấm để xem nét chữ'

  return (
    <div
      className={cn(
        'rounded-xl border bg-card p-2.5 text-center transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-primary/40',
        done && 'border-success/50 bg-success/5'
      )}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={onOpen}
            aria-label={`${c.character} — ${c.romaji}. ${tooltipText}. Xem chi tiết và nét chữ.`}
            className="relative w-full rounded-lg py-1 outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <p className="jp jp-serif text-3xl font-bold leading-none mb-1">{c.character}</p>
            <p className="text-xs font-bold text-primary">{c.romaji}</p>
            {done ? (
              <span
                className="absolute -top-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-success text-success-foreground shadow"
                aria-hidden
              >
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
            ) : (
              progress && (
                <span className="absolute -top-1.5 -right-0.5 text-[10px] font-extrabold tabular-nums text-muted-foreground bg-card border rounded-full px-1">
                  {correct}/{target}
                </span>
              )
            )}
            {/* Thanh tiến độ mảnh */}
            <span className="mt-1.5 block h-1.5 w-full rounded-full bg-muted overflow-hidden" aria-hidden>
              <span
                className={cn('block h-full rounded-full transition-all duration-500', done ? 'bg-success' : 'bg-primary/70')}
                style={{ width: `${pct * 100}%` }}
              />
            </span>
          </button>
        </TooltipTrigger>
        <TooltipContent>{tooltipText}</TooltipContent>
      </Tooltip>
      <div className="mt-1.5 flex items-center justify-center gap-1">
        <AudioButton text={c.character} size="sm" labelSlow={false} />
      </div>
      <p
        className="text-[10px] text-muted-foreground mt-1.5 leading-tight"
        title={`${c.exampleWord} — ${c.exampleMeaning}`}
      >
        <span className="jp font-semibold">{c.exampleWord}</span> · {c.exampleMeaning}
      </p>
    </div>
  )
}

/* --------------------------- Dialog chi tiết ký tự --------------------------- */

function KanaCharDialog({
  char,
  target,
  progress,
  reducedMotion,
  open,
  onOpenChange,
}: {
  char: KanaCharDTO
  target: number
  progress?: KanaProgressItemDTO
  reducedMotion: boolean
  open: boolean
  onOpenChange: (v: boolean) => void
}) {
  const { data: strokeParts } = useStrokeParts(char.character)
  const svgStrokes = strokeParts ? strokeCountOf(strokeParts) : null
  const guide = getWritingGuide(char.character)
  const correct = progress?.correctCount ?? 0
  const pct = Math.min(1, correct / Math.max(1, target))

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[88vh] overflow-y-auto nice-scroll">
        <DialogHeader>
          <DialogTitle className="flex items-baseline gap-3 flex-wrap">
            <span className="jp jp-serif text-5xl font-bold leading-none">{char.character}</span>
            <span className="text-primary font-extrabold text-xl">{char.romaji}</span>
            <Badge variant="secondary">{GROUP_LABEL[char.group] ?? char.group}</Badge>
          </DialogTitle>
          <DialogDescription>
            {char.strokeCount} nét · ví dụ:{' '}
            <span className="jp font-semibold text-foreground">{char.exampleWord}</span> ({char.exampleReading}) —{' '}
            {char.exampleMeaning}
          </DialogDescription>
        </DialogHeader>

        <div className="grid sm:grid-cols-2 gap-4 items-start">
          <StrokeOrderPlayer key={char.id} character={char.character} reducedMotion={reducedMotion} />
          <div className="space-y-4">
            {/* Tiến độ thành thạo */}
            <div className="rounded-2xl border bg-card p-4">
              <div className="flex items-center justify-between gap-2 mb-2">
                <p className="text-sm font-bold flex items-center gap-1.5">
                  <GraduationCap className="h-4 w-4 text-primary" aria-hidden /> Thành thạo
                </p>
                <span className="text-xs font-bold tabular-nums">
                  {progress?.completed ? (
                    <span className="text-success inline-flex items-center gap-1">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} /> {correct}/{target}
                    </span>
                  ) : (
                    `${correct}/${target} lần đúng`
                  )}
                </span>
              </div>
              <Progress
                value={pct * 100}
                className="h-2.5 [&_[data-slot=progress-indicator]]:bg-success"
                aria-label={`Tiến độ ${correct}/${target}`}
              />
            </div>

            {/* Từ ví dụ + âm thanh */}
            <div className="rounded-2xl border bg-card p-4 flex items-center gap-3">
              <AudioButton text={char.character} />
              <div className="min-w-0">
                <p className="jp font-bold text-lg leading-tight">{char.exampleWord}</p>
                <p className="text-xs text-muted-foreground truncate">
                  <span className="jp">{char.exampleReading}</span> · {char.exampleMeaning}
                </p>
              </div>
            </div>

            {/* Hướng dẫn viết */}
            <div className="rounded-2xl border-2 border-dashed border-warning/40 bg-warning/5 p-4">
              <h3 className="font-bold text-sm mb-1.5 flex items-center gap-1.5">
                <Lightbulb className="h-4 w-4 text-warning" aria-hidden /> Hướng dẫn viết
              </h3>
              <p className="text-sm leading-relaxed">{guide.focus}</p>
              <p className="text-xs text-muted-foreground mt-2 flex items-start gap-1.5">
                <TriangleAlert className="h-3.5 w-3.5 shrink-0 mt-0.5" aria-hidden />
                <span>
                  <strong>Lỗi thường gặp:</strong> {guide.mistake}
                </span>
              </p>
              {svgStrokes !== null && svgStrokes !== char.strokeCount && (
                <p className="text-[11px] text-muted-foreground mt-2">
                  Lưu ý: dữ liệu KanjiVG tách nét khác cách dạy phổ biến ({svgStrokes} path so với {char.strokeCount} nét
                  giáo trình).
                </p>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

/* ------------------------- Chế độ luyện tập (quiz) --------------------------- */

function PracticeDialog({
  open,
  onOpenChange,
  type,
  chars,
  target,
  onProgressUpdate,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
  type: string
  chars: KanaCharDTO[]
  target: number
  onProgressUpdate: (item: KanaProgressItemDTO) => void
}) {
  const qc = useQueryClient()
  const [phase, setPhase] = useState<'setup' | 'playing' | 'done'>('setup')
  const [quizMode, setQuizMode] = useState<'RECOGNIZE' | 'RECALL'>('RECOGNIZE')
  const [questions, setQuestions] = useState<PracticeQuestionDTO[]>([])
  const [index, setIndex] = useState(0)
  const [chosen, setChosen] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<PracticeAnswerDTO | null>(null)
  const [stats, setStats] = useState<{ correct: number; wrong: number; leveledUp: string[] }>({ correct: 0, wrong: 0, leveledUp: [] })
  const [starting, setStarting] = useState(false)
  const [answering, setAnswering] = useState(false)
  const advanceTimer = useRef<number | null>(null)

  const clearTimer = () => {
    if (advanceTimer.current !== null) {
      window.clearTimeout(advanceTimer.current)
      advanceTimer.current = null
    }
  }
  // Dọn timer khi đóng dialog / unmount
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
      const res = await api<{ questions: PracticeQuestionDTO[] }>('/api/kana/practice/start', {
        method: 'POST',
        json: { set: type, mode: quizMode },
      })
      clearTimer()
      setQuestions(res.questions)
      setIndex(0)
      setChosen(null)
      setFeedback(null)
      setStats({ correct: 0, wrong: 0, leveledUp: [] })
      setPhase('playing')
    } catch (e) {
      toast.error(e instanceof ApiClientError ? e.message : 'Không tạo được phiên luyện tập')
    } finally {
      setStarting(false)
    }
  }, [type, quizMode])

  const answer = useCallback(
    async (choice: string) => {
      if (feedback || answering || !current) return
      setAnswering(true)
      setChosen(choice)
      try {
        const res = await api<PracticeAnswerDTO>('/api/kana/practice/answer', {
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
        // Cập nhật realtime thanh tiến độ của ký tự vừa trả lời
        const kanaChar =
          current.mode === 'RECOGNIZE'
            ? chars.find((c) => c.character === current.prompt)
            : chars.find((c) => c.romaji === current.prompt && c.type === type)
        if (kanaChar) {
          onProgressUpdate({
            kanaId: kanaChar.id,
            character: kanaChar.character,
            type,
            correctCount: res.progress.correctCount,
            wrongCount: res.progress.wrongCount,
            completed: res.progress.completed,
          })
          // correctCount === target ⇒ vừa chạm mốc trong lần trả lời này
          if (res.correct && res.progress.completed && res.progress.correctCount === res.progress.target) {
            setStats((s) => (s.leveledUp.includes(kanaChar.character) ? s : { ...s, leveledUp: [...s.leveledUp, kanaChar.character] }))
          }
        }
        advanceTimer.current = window.setTimeout(() => next(), res.correct ? 1000 : 1800)
      } catch (e) {
        toast.error(e instanceof ApiClientError ? e.message : 'Không gửi được câu trả lời')
        setPhase('setup') // câu hỏi hết hạn → quay về màn chọn chế độ
      } finally {
        setAnswering(false)
      }
    },
    [feedback, answering, current, chars, type, onProgressUpdate, next]
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
      // Đồng bộ lại tiến độ từ server (khi đang luyện mà tắt app giữa chừng)
      void qc.invalidateQueries({ queryKey: ['kana-progress'] })
      setPhase('setup')
      setQuestions([])
      setFeedback(null)
      setChosen(null)
      setStats({ correct: 0, wrong: 0, leveledUp: [] })
    }
    onOpenChange(v)
  }

  const accuracy = stats.correct + stats.wrong > 0 ? Math.round((stats.correct / (stats.correct + stats.wrong)) * 100) : 0

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto nice-scroll">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" aria-hidden />
            Luyện tập {type === 'HIRAGANA' ? 'Hiragana' : 'Katakana'}
          </DialogTitle>
          <DialogDescription>
            {phase === 'setup' && `10 câu hỏi ngẫu nhiên, chấm điểm tự động. Trả lời đúng ${target} lần một ký tự để lên cấp thành thạo.`}
            {phase === 'playing' && `Câu ${index + 1}/${questions.length} · đúng ${stats.correct} · sai ${stats.wrong}`}
            {phase === 'done' && 'Hoàn thành lượt luyện tập!'}
          </DialogDescription>
        </DialogHeader>

        {phase === 'setup' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3" role="radiogroup" aria-label="Chế độ luyện tập">
              <ModeCard
                active={quizMode === 'RECOGNIZE'}
                onClick={() => setQuizMode('RECOGNIZE')}
                icon={<Eye className="h-5 w-5" aria-hidden />}
                title="Nhận diện"
                desc="Xem ký tự kana → chọn cách đọc romaji"
              />
              <ModeCard
                active={quizMode === 'RECALL'}
                onClick={() => setQuizMode('RECALL')}
                icon={<Trophy className="h-5 w-5" aria-hidden />}
                title="Gợi nhớ"
                desc="Xem romaji → chọn ký tự kana đúng"
              />
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
              {current.mode === 'RECOGNIZE' ? 'Ký tự này đọc là gì?' : 'Chọn ký tự kana đúng'}
            </p>
            <p
              className={cn(
                'text-center font-bold select-none py-5',
                current.mode === 'RECOGNIZE' ? 'jp jp-serif text-8xl leading-none' : 'text-6xl text-primary'
              )}
              aria-label={`Câu hỏi: ${current.prompt}`}
            >
              {current.prompt}
            </p>
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
                      'relative h-14 rounded-2xl border-2 font-bold transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring',
                      current.mode === 'RECALL' && 'jp jp-serif text-3xl',
                      current.mode === 'RECOGNIZE' && 'text-lg',
                      !feedback && 'border-border hover:border-primary hover:bg-primary/5 active:scale-[0.98]',
                      isCorrectOption && 'border-success bg-success/10 text-success',
                      isWrongChosen && 'border-destructive bg-destructive/10 text-destructive',
                      feedback && !isCorrectOption && !isWrongChosen && 'border-border opacity-50'
                    )}
                  >
                    <span className="absolute top-1.5 right-2 text-[10px] font-extrabold text-muted-foreground" aria-hidden>
                      {i + 1}
                    </span>
                    {o.text}
                  </button>
                )
              })}
            </div>

            {feedback && (
              <div
                className={cn(
                  'mt-4 rounded-2xl border-2 p-4 animate-pop-in',
                  feedback.correct ? 'border-success bg-success/10' : 'border-destructive bg-destructive/10'
                )}
                role="status"
              >
                <p className={cn('font-extrabold text-lg flex items-center gap-2', feedback.correct ? 'text-success' : 'text-destructive')}>
                  {feedback.correct ? <Check className="h-5 w-5" strokeWidth={3} aria-hidden /> : <X className="h-5 w-5" aria-hidden />}
                  {feedback.correct ? 'Chính xác!' : 'Chưa đúng'}
                </p>
                {!feedback.correct && (
                  <p className="text-sm mt-1">
                    Đáp án đúng: <span className="jp jp-serif font-bold text-lg">{feedback.correctAnswer}</span>
                  </p>
                )}
                <div className="mt-3">
                  <div className="flex items-center justify-between text-xs font-bold mb-1">
                    <span>Tiến độ ký tự {current.mode === 'RECOGNIZE' ? current.prompt : feedback.correctAnswer}</span>
                    <span className="tabular-nums">
                      {feedback.progress.correctCount}/{feedback.progress.target} lần đúng
                      {feedback.progress.completed && <span className="text-success"> — đã thành thạo!</span>}
                    </span>
                  </div>
                  <Progress
                    value={Math.min(1, feedback.progress.correctCount / Math.max(1, feedback.progress.target)) * 100}
                    className="h-2 [&_[data-slot=progress-indicator]]:bg-success"
                    aria-label={`Tiến độ ${feedback.progress.correctCount}/${feedback.progress.target}`}
                  />
                </div>
                <p className="text-[11px] text-muted-foreground mt-2">Nhấn Enter để sang câu tiếp theo</p>
              </div>
            )}
          </div>
        )}

        {phase === 'done' && (
          <div className="relative text-center py-2">
            {(accuracy >= 50 || stats.leveledUp.length > 0) && <Confetti count={46} />}
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
            {stats.leveledUp.length > 0 && (
              <div className="mt-4 rounded-2xl border border-success/40 bg-success/5 p-3">
                <p className="text-sm font-bold flex items-center justify-center gap-1.5 text-success">
                  <Check className="h-4 w-4" strokeWidth={3} aria-hidden /> Lên cấp thành thạo ({stats.leveledUp.length})
                </p>
                <div className="mt-2 flex flex-wrap justify-center gap-1.5">
                  {stats.leveledUp.map((ch) => (
                    <span key={ch} className="jp jp-serif inline-flex items-center gap-1 rounded-lg bg-success/10 text-success px-2 py-1 font-bold">
                      {ch}
                    </span>
                  ))}
                </div>
              </div>
            )}
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
        active ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/40'
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

/* ------------------------------- Writing practice --------------------------- */

function KanaWriting({ chars }: { chars: KanaCharDTO[] }) {
  const [index, setIndex] = useState(0)
  const [result, setResult] = useState<{ score: number; passed: boolean } | null>(null)
  const [checking, setChecking] = useState(false)
  const [resetToken, setResetToken] = useState(0)
  const current = chars[index % Math.max(1, chars.length)]

  if (!current) return <EmptyBlock title="Không có dữ liệu" />

  const check = async (strokeCount: number, similarity: number) => {
    setChecking(true)
    try {
      const res = await api<{ score: number; passed: boolean; expectedStrokes: number }>('/api/writing/evaluate', {
        method: 'POST',
        json: { character: current.character, strokeCount, shapeSimilarity: similarity },
      })
      setResult({ score: res.score, passed: res.passed })
    } catch (e) {
      toast.error(e instanceof ApiClientError ? e.message : 'Không chấm được bài viết')
    } finally {
      setChecking(false)
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-6 items-start">
      <div className="rounded-2xl border bg-card p-5 text-center">
        <p className="text-sm text-muted-foreground mb-1">Ký tự cần viết</p>
        <p className="jp jp-serif text-7xl font-bold">{current.character}</p>
        <p className="text-sm font-bold text-primary mt-1">
          {current.romaji} · {current.strokeCount} nét
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Ví dụ: <span className="jp font-semibold">{current.exampleWord}</span> ({current.exampleMeaning})
        </p>
        <div className="flex justify-center mt-3">
          <AudioButton text={current.character} />
        </div>
      </div>

      <div>
        <WritingCanvasWithCheck
          key={current.character}
          character={current.character}
          disabled={!!result}
          onCheck={check}
          checking={checking}
          resetToken={resetToken}
        />
        {result && (
          <div
            className="mt-4 rounded-2xl border-2 p-4 text-center space-y-1.5"
            style={{ borderColor: result.passed ? 'var(--success)' : 'var(--destructive)' }}
          >
            <p className="font-extrabold text-lg">
              {result.passed ? (
                <span className="text-success">Khá giống! {result.score}/100</span>
              ) : (
                <span className="text-destructive">Chưa đạt — {result.score}/100</span>
              )}
            </p>
            <p className="text-xs text-muted-foreground">Chấm heuristic: 50% số nét + 50% độ phủ hình dạng. Chưa phải AI nhận diện nét.</p>
            <div className="flex gap-2 justify-center pt-1">
              <Button
                variant="outline"
                onClick={() => {
                  setResult(null)
                  setResetToken((t) => t + 1)
                }}
              >
                Viết lại
              </Button>
              <Button
                onClick={() => {
                  setResult(null)
                  setIndex((i) => i + 1)
                }}
              >
                Ký tự tiếp theo →
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function WritingCanvasWithCheck({
  character,
  disabled,
  onCheck,
  checking,
  resetToken,
}: {
  character: string
  disabled: boolean
  onCheck: (strokeCount: number, similarity: number) => void
  checking: boolean
  resetToken?: number
}) {
  const [strokes, setStrokes] = useState<{ x: number; y: number }[][]>([])
  const count = strokes.length

  return (
    <div>
      <WritingCanvas
        character={character}
        guide
        disabled={disabled}
        resetToken={resetToken}
        onStrokesChange={(s) => setStrokes(s)}
      />
      <div className="flex justify-center mt-3">
        <Button
          disabled={count === 0 || disabled || checking}
          onClick={() => {
            const similarity = computeShapeSimilarity(character, strokes)
            onCheck(count, similarity)
          }}
          className="rounded-xl px-6"
        >
          {checking ? 'Đang chấm…' : 'Chấm bài viết'}
        </Button>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-2">{count} nét đã vẽ</p>
    </div>
  )
}
