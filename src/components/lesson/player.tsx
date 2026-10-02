'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { BookOpen, Check, Heart, X, Zap, Flame, Snowflake, Trophy, RefreshCw, ChevronRight, Timer, Target, Star, Rocket, LockOpen, Wrench, Sparkles, MoveRight } from 'lucide-react'
import { api, ApiClientError } from '@/lib/client/api'
import { setSfxEnabled, sfx } from '@/lib/sounds'
import { useHashRoute } from '@/components/app/router'
import { useAuth } from '@/components/app/use-auth'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { cn } from '@/lib/utils'
import { DynamicIcon } from '@/components/shared/icon'
import { Confetti } from '@/components/shared/widgets'
import {
  AudioChoiceRenderer,
  ChoiceRenderer,
  FillBlankRenderer,
  MatchingRenderer,
  PassageBlock,
  SpeakRenderer,
  TextInputRenderer,
  TokenOrderRenderer,
  TYPE_INSTRUCTION,
  WritingRenderer,
  type AnswerDraft,
  type ClientQuestion,
  type FeedbackState,
} from './renderers'

/* --------------------------------- DTO types -------------------------------- */

interface SessionInfo {
  id: string
  mode: string
  title: string
  nodeId: string | null
  index: number
  total: number
  hearts: number
  combo: number
  status: string
}

interface SessionPayload {
  session: SessionInfo
  questProgress?: QuestProgressUI[]
  /** Chỉ mode REVIEW: nhãn nguồn của mục ôn hiện tại (node/bài hoặc sổ ôn). */
  questionSource?: string | null
  question: ClientQuestion | null
  passage: ClientQuestion | null
}

interface QuestCompletedUI {
  code: string
  title: string
  icon: string
  rewardXP: number
}

/** Snapshot nhiệm vụ hôm nay từ server — hiển thị chip tiến độ trên header. */
interface QuestProgressUI {
  code: string
  title: string
  icon: string
  progress: number
  target: number
  completed: boolean
}

interface AnswerResponse {
  correct: boolean
  expected: string
  explanation: string | null
  score: number | null
  transcription: string | null
  questsCompleted?: QuestCompletedUI[]
  questProgress?: QuestProgressUI[]
  session: {
    id: string
    index: number
    total: number
    hearts: number
    combo: number
    maxCombo: number
    correctCount: number
    wrongCount: number
    status: string
  }
  nextQuestion: ClientQuestion | null
  nextPassage: ClientQuestion | null
  questionSource?: string | null
}

interface CompleteSummary {
  passed: boolean
  accuracy: number
  correctCount: number
  wrongCount: number
  totalQuestions: number
  maxCombo: number
  durationMs: number
  xp: { total: number; breakdown: { label: string; amount: number }[] }
  perfect: boolean
  nodeStatus: string | null
  firstNodeCompletion: boolean
  lessonCompleted: boolean
  heartsGranted: number
  newAchievements: { code: string; title: string; description: string; icon: string; tier: string; xpReward: number }[]
  streak: { currentStreak: number; longestStreak: number; todayXP: number; dailyGoalXP: number; goalMetToday: boolean }
  freezesUsed: number
  totalXP: number
  levelUp: { from: number; to: number; title: string } | null
  questsCompleted: QuestCompletedUI[]
  jumpApplied: boolean
  jumpLessonsCompleted: number
  jumpNodesCompleted: number
  jumpTargetTitle: string | null
}

/** Toast chúc mừng nhiệm vụ hằng ngày vừa hoàn thành (stagger để không tràn màn hình). */
function toastQuestsCompleted(quests: QuestCompletedUI[], baseDelay = 250) {
  if (quests.length === 0) return
  sfx.combo(6)
  quests.forEach((q, i) => {
    window.setTimeout(() => {
      toast.success(`Nhiệm vụ hoàn thành: ${q.title}`, {
        description: `Phần thưởng +${q.rewardXP} XP — xem bảng Nhiệm vụ để theo dõi hàng ngày.`,
        icon: <Target className="h-4 w-4" />,
        duration: 6000,
      })
    }, baseDelay + i * 600)
  })
}

/* ---------------------------------- Player ---------------------------------- */

type Phase = 'loading' | 'question' | 'feedback' | 'completing' | 'completed' | 'failed' | 'error'

export function LessonPlayer({
  nodeId,
  mode,
  source = 'node',
  sessionTitle,
}: {
  nodeId?: string
  mode: 'LESSON' | 'PRACTICE'
  source?: 'node' | 'review' | 'mistakes' | 'jump' | 'challenge'
  sessionTitle?: string
}) {
  const { navigate } = useHashRoute()
  const qc = useQueryClient()
  const { data: authUser } = useAuth()

  const [phase, setPhase] = useState<Phase>('loading')
  const [session, setSession] = useState<SessionInfo | null>(null)
  const [question, setQuestion] = useState<ClientQuestion | null>(null)
  const [passage, setPassage] = useState<ClientQuestion | null>(null)
  const [draft, setDraftState] = useState<AnswerDraft>({})
  const [feedback, setFeedback] = useState<FeedbackState | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [summary, setSummary] = useState<CompleteSummary | null>(null)
  const [combo, setCombo] = useState(0)
  const [questProgress, setQuestProgress] = useState<QuestProgressUI[]>([])
  const [showQuit, setShowQuit] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [xpPops, setXpPops] = useState<{ id: number; amount: number }[]>([])
  const [heartLostAnim, setHeartLostAnim] = useState(false)
  const [questionSource, setQuestionSource] = useState<string | null>(null)
  const questionStart = useRef<number>(Date.now())
  const xpPopId = useRef(0)
  const nextSourceRef = useRef<string | null>(null)

  // Tôn trọng cài đặt âm thanh của người dùng
  useEffect(() => {
    setSfxEnabled(authUser?.settings?.soundEnabled ?? true)
  }, [authUser?.settings?.soundEnabled])

  const setDraft = useCallback((patch: Partial<AnswerDraft>) => {
    setDraftState((prev) => ({ ...prev, ...patch }))
  }, [])

  // Bắt đầu session
  useEffect(() => {
    let cancelled = false
    // Reset toàn bộ state của phiên cũ khi đổi node/source (component không remount)
    setFeedback(null)
    setDraftState({})
    setSubmitting(false)
    setSummary(null)
    setCombo(0)
    setQuestProgress([])
    setQuestionSource(null)
    setErrorMsg('')
    nextQuestionRef.current = null
    nextPassageRef.current = null
    nextSourceRef.current = null
    ;(async () => {
      try {
        const payload = await api<SessionPayload>(
          source === 'challenge' ? '/api/challenge/start' : '/api/lesson-sessions',
          {
            method: 'POST',
            json:
              source === 'node'
                ? { nodeId, mode, source: 'node' }
                : source === 'jump'
                  ? { source: 'jump', targetLessonId: nodeId }
                  : source === 'challenge'
                    ? undefined
                    : { source },
          }
        )
        if (cancelled) return
        setSession(payload.session)
        setQuestion(payload.question)
        setPassage(payload.passage)
        setQuestProgress(payload.questProgress ?? [])
        setQuestionSource(payload.questionSource ?? null)
        setPhase(payload.question ? 'question' : 'error')
        if (!payload.question) setErrorMsg('Node này chưa có nội dung.')
        questionStart.current = Date.now()
      } catch (e) {
        if (cancelled) return
        setErrorMsg(e instanceof ApiClientError ? e.message : 'Không tải được bài học')
        setPhase('error')
      }
    })()
    return () => {
      cancelled = true
    }
  }, [nodeId, mode, source])

  const canSubmit = useMemo(() => {
    if (!question || feedback || submitting) return false
    const d = question.data
    switch (d.kind) {
      case 'choice':
      case 'audio-choice':
      case 'fill-blank':
        return !!draft.optionId
      case 'token-order':
        return (draft.tokenOrder?.length ?? 0) === (d.tokens?.length ?? 0) && (d.tokens?.length ?? 0) > 0
      case 'text-input':
        return !!(draft.text && draft.text.trim())
      case 'matching':
        return Object.keys(draft.pairs ?? {}).length === (d.pairs?.length ?? 0)
      case 'speak':
        return !!draft.audioBase64 || !!draft.transcription || draft.text === '__skip__'
      case 'writing':
        return (draft.strokeCount ?? 0) > 0
      default:
        return false
    }
  }, [question, draft, feedback, submitting])

  // Viết tay: renderer tính shapeSimilarity và trả về ĐỒNG BỘ qua event.detail
  const prepareAnswer = (): Partial<AnswerDraft> | null => {
    const detail: { answer?: Partial<AnswerDraft> } = {}
    window.dispatchEvent(new CustomEvent('ngg-prepare-answer', { detail }))
    return detail.answer ?? null
  }

  const submit = useCallback(async () => {
    if (!question || !session || !canSubmit || submitting) return
    let writingAnswer: Partial<AnswerDraft> | null = null
    if (question.data.kind === 'writing') {
      writingAnswer = prepareAnswer()
      // Cho React flush setDraft (trạng thái UI) trước khi khóa nút
      await new Promise((r) => setTimeout(r, 50))
    }
    setSubmitting(true)
    const timeSpent = Date.now() - questionStart.current
    try {
      const answerPayload: AnswerDraft = writingAnswer ? { ...draft, ...writingAnswer } : { ...draft }
      if (question.data.kind === 'speak' && draft.text === '__skip__') {
        // Bỏ qua: transcript rỗng → server tự tính điểm 0 (không tin điểm client)
        answerPayload.transcription = ''
        delete answerPayload.text
      }
      const res = await api<AnswerResponse>(`/api/lesson-sessions/${session.id}/answer`, {
        method: 'POST',
        json: { answer: answerPayload, timeSpentMs: timeSpent },
      })
      // Lưu câu tiếp theo (dùng khi bấm TIẾP TỤC)
      nextQuestionRef.current = res.nextQuestion
      nextPassageRef.current = res.nextPassage
      nextSourceRef.current = res.questionSource ?? null
      setFeedback({
        correct: res.correct,
        expected: res.expected,
        explanation: res.explanation,
        score: res.score,
        transcription: res.transcription,
      })
      setCombo(res.session.combo)
      // Âm thanh phản hồi + hiệu ứng mất tim
      const beforeHearts = session.hearts
      if (res.correct) {
        sfx.correct()
        if (res.session.combo > 0 && res.session.combo % 5 === 0) sfx.combo(res.session.combo)
      } else {
        sfx.wrong()
        if (beforeHearts > res.session.hearts) {
          sfx.heartLost()
          setHeartLostAnim(true)
          setTimeout(() => setHeartLostAnim(false), 600)
        }
      }
      setSession((s) => (s ? { ...s, ...res.session } : s))
      setPhase('feedback')

      // Quest hằng ngày vừa hoàn thành nhờ câu trả lời này → chúc mừng ngay + làm mới hub
      if (res.questsCompleted && res.questsCompleted.length > 0) {
        toastQuestsCompleted(res.questsCompleted, 600)
        qc.invalidateQueries({ queryKey: ['quests'] })
        qc.invalidateQueries({ queryKey: ['overview'] })
      }
      // Snapshot nhiệm vụ mới nhất → chip tiến độ trên header tự cập nhật
      if (res.questProgress) setQuestProgress(res.questProgress)

      if (res.correct) {
        // hiệu ứng +XP nhỏ
        const id = ++xpPopId.current
        setXpPops((p) => [...p, { id, amount: 10 }])
        setTimeout(() => setXpPops((p) => p.filter((x) => x.id !== id)), 1100)
      }
    } catch (e) {
      toast.error(e instanceof ApiClientError ? e.message : 'Không gửi được câu trả lời')
    } finally {
      setSubmitting(false)
    }
  }, [question, session, canSubmit, submitting, draft])

  const next = useCallback(async () => {
    if (!session || !question) return
    setFeedback(null)
    setDraftState({})
    // Hết tim → màn hình fail
    if (session.status === 'FAILED') {
      setPhase('failed')
      sfx.fail()
      return
    }
    if (nextQuestionRef.current) {
      setQuestion(nextQuestionRef.current)
      setPassage(nextPassageRef.current)
      setQuestionSource(nextSourceRef.current)
      nextQuestionRef.current = null
      nextPassageRef.current = null
      nextSourceRef.current = null
      questionStart.current = Date.now()
      setPhase('question')
    } else {
      // hết câu → complete
      setPhase('completing')
      try {
        const res = await api<CompleteSummary>(`/api/lesson-sessions/${session.id}/complete`, { method: 'POST' })
        setSummary(res)
        setPhase('completed')
        if (res.passed) sfx.complete()
        // Toast chúc mừng (fire-and-forget, stagger cho đỡ tràn màn hình)
        const prevOverview = qc.getQueryData<{ streak?: { goalMetToday?: boolean } }>(['overview'])
        const goalWasMet = prevOverview?.streak?.goalMetToday ?? false
        if (res.freezesUsed > 0) {
          toast.info(`Đã dùng ${res.freezesUsed} Bảo vệ chuỗi`, {
            description: 'Chuỗi ngày học được giữ qua ngày bạn bỏ lỡ.',
            icon: <Snowflake className="h-4 w-4" />,
          })
        }
        if (res.streak.goalMetToday && !goalWasMet && res.streak.dailyGoalXP > 0) {
          toast.success('Đã đạt mục tiêu hôm nay!', {
            description: `${res.streak.todayXP}/${res.streak.dailyGoalXP} XP — chuỗi ngày đã được bảo vệ.`,
            icon: <Target className="h-4 w-4" />,
          })
        }
        if (res.streak.currentStreak > 0 && res.streak.currentStreak % 7 === 0) {
          toast.success(`Chuỗi ${res.streak.currentStreak} ngày!`, {
            description: 'Cột mốc 7 ngày — bạn nhận thêm 1 Bảo vệ chuỗi (nếu còn chỗ).',
            icon: <Flame className="h-4 w-4" />,
          })
        }
        res.newAchievements.forEach((a, i) => {
          window.setTimeout(() => {
            toast.success(a.title, {
              description: `${a.description} · Thưởng +${a.xpReward} XP`,
              icon: <Trophy className="h-4 w-4" />,
            })
          }, 500 + i * 700)
        })
        if (res.levelUp) {
          sfx.levelUp()
          window.setTimeout(() => {
            toast.success(`Lên cấp ${res.levelUp!.to}!`, {
              description: `Danh hiệu mới: ${res.levelUp!.title}`,
              icon: <Sparkles className="h-4 w-4" />,
            })
          }, 1500)
        }
        // Quest hoàn thành trong phiên (gồm cả qua bump XP) — toast sau cùng để không lấn cấn
        toastQuestsCompleted(res.questsCompleted, 500 + res.newAchievements.length * 700 + (res.levelUp ? 1200 : 0))
        qc.invalidateQueries({ queryKey: ['overview'] })
        qc.invalidateQueries({ queryKey: ['learn'] })
        qc.invalidateQueries({ queryKey: ['quests'] })
        qc.invalidateQueries({ queryKey: ['achievements'] })
        qc.invalidateQueries({ queryKey: ['challenge'] })
      } catch (e) {
        toast.error(e instanceof ApiClientError ? e.message : 'Không hoàn tất được phiên học')
        setPhase('question')
      }
    }
  }, [session, question, qc])

  // Xáo trộn thứ tự lựa chọn hiển thị NGAY TẠI PLAYER — một nguồn sự thật duy nhất
  // để phím tắt 1-9 và mọi renderer cùng nhìn một thứ tự. Dữ liệu seed thường để
  // đáp án đúng ở vị trí đầu (90%!) nên bắt buộc phải xáo mỗi lần vào câu. Id
  // option không đổi → chấm điểm phía server hoàn toàn không ảnh hưởng.
  const displayQuestion = useMemo<ClientQuestion | null>(() => {
    if (!question) return null
    const d = question.data as { kind?: string; options?: { id: string }[] }
    if (
      (d.kind === 'choice' || d.kind === 'audio-choice' || d.kind === 'fill-blank') &&
      Array.isArray(d.options) &&
      d.options.length > 1
    ) {
      const options = [...d.options]
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[options[i], options[j]] = [options[j], options[i]]
      }
      // Spread làm mất narrow của union → cast về ClientQuestion (chỉ đổi
      // THỨ TỰ phần tử trong options, hình dạng dữ liệu không đổi).
      return { ...question, data: { ...question.data, options } } as ClientQuestion
    }
    return question
  }, [question])

  const nextQuestionRef = useRef<ClientQuestion | null>(null)
  const nextPassageRef = useRef<ClientQuestion | null>(null)

  // Keyboard: Enter = kiểm tra/tiếp tục, 1-9 = chọn nhanh đáp án, Esc = thoát
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        if (phase === 'question' && canSubmit) void submit()
        else if (phase === 'feedback') void next()
        return
      }
      if (e.key === 'Escape') {
        if (phase === 'question' || phase === 'feedback') setShowQuit(true)
        return
      }
      // Phím số chọn nhanh option (chỉ với câu hỏi dạng chọn) — đọc từ displayQuestion
      // (đã xáo trộn) để khớp ĐÚNG ô người dùng đang nhìn thấy trên màn hình.
      if (phase === 'question' && !feedback && /^[1-9]$/.test(e.key) && displayQuestion) {
        const kind = displayQuestion.data.kind
        if (kind === 'choice' || kind === 'audio-choice' || kind === 'fill-blank') {
          const opt = displayQuestion.data.options?.[Number(e.key) - 1]
          if (opt) {
            e.preventDefault()
            setDraft({ optionId: opt.id })
          }
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [phase, canSubmit, submit, next, displayQuestion, feedback, setDraft])

  // Xử lý submit
  const handleSubmit = async () => {
    await submit()
  }

  // Quit
  const quit = async () => {
    if (session) {
      await api(`/api/lesson-sessions/${session.id}/quit`, { method: 'POST' }).catch(() => {})
    }
    navigate('/')
  }

  const rendererProps = { question: displayQuestion!, draft, setDraft, disabled: !!feedback, feedback }

  const instruction =
    TYPE_INSTRUCTION[question?.type ?? ''] ?? question?.prompt ?? 'Trả lời câu hỏi'

  // Rời màn hình hoàn thành → lưu cờ để Learning Path bắn pháo giấy + toast chúc mừng
  const continueFromCompletion = () => {
    try {
      if (summary && summary.passed && session?.nodeId) {
        sessionStorage.setItem(
          'ngg:celebrate',
          JSON.stringify({
            nodeId: session.nodeId,
            nodeStatus: summary.nodeStatus,
            firstNodeCompletion: summary.firstNodeCompletion,
            lessonCompleted: summary.lessonCompleted,
            at: Date.now(),
          })
        )
      }
    } catch {
      /* sessionStorage có thể bị chặn — bỏ qua */
    }
    navigate('/')
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-background/90 backdrop-blur border-b">
        <div className="mx-auto max-w-3xl px-3 sm:px-6 h-14 flex items-center gap-3 sm:gap-5">
          <button
            onClick={() => setShowQuit(true)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl hover:bg-muted outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Thoát phiên học"
          >
            <X className="h-5 w-5" />
          </button>
          <Progress
            value={session ? (session.index / Math.max(1, session.total)) * 100 : 0}
            className="flex-1 h-4 bg-muted [&_[data-slot=progress-indicator]]:bg-success"
            aria-label={`Tiến độ ${session?.index ?? 0}/${session?.total ?? 0}`}
          />
          <span className="text-xs font-extrabold text-muted-foreground tabular-nums">
            {session?.index ?? 0}/{session?.total ?? 0}
          </span>
          {/* Chip tiến độ nhiệm vụ trực tiếp (từ server sau mỗi câu trả lời) —
              Ải chính: chip đầu hiện từ 400px, chip thứ hai từ lg để không chật header */}
          {questProgress
            .filter((q) => !q.completed)
            .slice(0, 2)
            .map((q, i) => (
              <motion.span
                key={`${q.code}:${q.progress}`}
                initial={{ scale: 1.18 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 22 }}
                className={cn(
                  'inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary px-2 py-1 text-[11px] font-extrabold tabular-nums outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-help',
                  i === 0 ? 'hidden min-[400px]:inline-flex' : 'hidden lg:inline-flex'
                )}
                title={`${q.title}: ${q.progress}/${q.target}`}
                aria-label={`Nhiệm vụ ${q.title}: ${q.progress} trên ${q.target}`}
              >
                <Target className="h-3.5 w-3.5 shrink-0" aria-hidden />
                <span className="hidden min-[520px]:inline max-w-[96px] truncate font-bold">{q.title}</span>
                {q.progress}/{q.target}
              </motion.span>
            ))}
          {session?.mode === 'LESSON' ? (
            <span
              className={cn('inline-flex items-center gap-1.5 font-extrabold text-destructive', heartLostAnim && 'animate-heart-lost')}
              title={`${session.hearts} tim còn lại`}
            >
              <Heart className="h-6 w-6 fill-destructive" aria-hidden />
              <span className="text-lg tabular-nums">{session.hearts}</span>
              <span className="sr-only">{session.hearts} tim</span>
            </span>
          ) : session?.mode === 'JUMP' ? (
            <span className="text-xs font-extrabold rounded-full bg-sakura/15 text-sakura px-3 py-1.5 inline-flex items-center gap-1.5">
              <Rocket className="h-3.5 w-3.5" aria-hidden /> Kiểm tra bỏ qua
            </span>
          ) : session?.mode === 'CHALLENGE' ? (
            <span className="text-xs font-extrabold rounded-full bg-warning/15 text-warning px-3 py-1.5 inline-flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5" aria-hidden /> Thử thách
            </span>
          ) : (
            <span className="text-xs font-extrabold rounded-full bg-success/10 text-success px-3 py-1.5">Luyện tập</span>
          )}
        </div>
      </header>

      {/* XP pops */}
      <div className="pointer-events-none fixed inset-x-0 top-16 z-40 flex flex-col items-center gap-1" aria-hidden>
        <AnimatePresence>
          {xpPops.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: -14, scale: 1 }}
              exit={{ opacity: 0, y: -28 }}
              className="inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground px-3 py-1 text-sm font-bold shadow-lg"
            >
              <Zap className="h-3.5 w-3.5" /> +{p.amount} XP
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <main className="flex-1 w-full mx-auto max-w-3xl px-3 sm:px-6 py-6 flex flex-col">
        {phase === 'loading' && (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-muted-foreground">
            <div className="h-12 w-12 rounded-full border-4 border-muted border-t-primary animate-spin" />
            <p className="text-sm">Đang chuẩn bị ải…</p>
          </div>
        )}

        {phase === 'error' && (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center py-16">
            <p className="text-muted-foreground max-w-sm">{errorMsg}</p>
            <div className="flex gap-2">
              <Button onClick={() => navigate('/')}>Về Learning Path</Button>
            </div>
          </div>
        )}

        {(phase === 'question' || phase === 'feedback') && question && (
          <div className="flex-1 flex flex-col">
            {/* Instruction + combo */}
            <div className="mb-5 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h1 className="text-lg sm:text-xl font-bold tracking-tight">{instruction}</h1>
                {question.prompt && question.prompt !== instruction && (
                  <p className="text-sm sm:text-base font-medium text-muted-foreground mt-1">{question.prompt}</p>
                )}
                {/* Nguồn của mục ôn (REVIEW) — giúp người học nhớ ngữ cảnh đã học */}
                {questionSource && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-muted/70 text-muted-foreground px-2.5 py-1 text-[11px] font-bold max-w-full"
                    title={`Mục ôn này từ: ${questionSource}`}
                  >
                    <BookOpen className="h-3 w-3 shrink-0 text-primary" aria-hidden />
                    <span className="truncate">{questionSource}</span>
                  </motion.p>
                )}
              </div>
              {combo >= 2 && phase === 'question' && (
                <motion.span
                  key={combo}
                  initial={{ scale: 1.4 }}
                  animate={{ scale: 1 }}
                  className="shrink-0 inline-flex items-center gap-1 rounded-full bg-warning/15 text-warning px-2.5 py-1 text-sm font-bold"
                >
                  <Flame className="h-4 w-4" aria-hidden /> x{combo}
                </motion.span>
              )}
            </div>

            {passage && (
              <div className="mb-6">
                <PassageBlock passage={passage} />
              </div>
            )}

            <div className="flex-1" key={question.id}>
              {question.data.kind === 'choice' && <ChoiceRenderer {...rendererProps} />}
              {question.data.kind === 'audio-choice' && <AudioChoiceRenderer {...rendererProps} />}
              {question.data.kind === 'fill-blank' && <FillBlankRenderer {...rendererProps} />}
              {question.data.kind === 'token-order' && <TokenOrderRenderer {...rendererProps} />}
              {question.data.kind === 'text-input' && <TextInputRenderer {...rendererProps} />}
              {question.data.kind === 'matching' && <MatchingRenderer {...rendererProps} />}
              {question.data.kind === 'speak' && <SpeakRenderer {...rendererProps} />}
              {question.data.kind === 'writing' && <WritingRenderer {...rendererProps} />}
            </div>

            {/* Bottom action bar — z-20 ĐÈ TRÊN renderer tiles (z-[2]) nhưng DƯỚI header (z-30);
                nền đặc để tiles cuộn bên dưới không hở qua, shadow tách khối rõ ràng */}
            <div className="sticky bottom-0 z-20 -mx-3 sm:-mx-6 px-3 sm:px-6 pt-4 pb-3 bg-background border-t mt-6 shadow-[0_-6px_20px_rgba(0,0,0,0.06)]">
              {phase === 'question' ? (
                <Button
                  onClick={handleSubmit}
                  disabled={!canSubmit || submitting}
                  variant="success"
                  size="xl"
                  className="w-full"
                >
                  {submitting ? (
                    <>
                      <RefreshCw className="h-5 w-5 animate-spin" /> Đang chấm…
                    </>
                  ) : (
                    'KIỂM TRA'
                  )}
                </Button>
              ) : (
                <div
                  className={cn(
                    'rounded-2xl p-4 space-y-3',
                    feedback?.correct ? 'bg-success/10 border-2 border-success/60' : 'bg-destructive/10 border-2 border-destructive/60'
                  )}
                  role="status"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={cn(
                        'inline-flex h-8 w-8 items-center justify-center rounded-full text-white shrink-0',
                        feedback?.correct ? 'bg-success' : 'bg-destructive'
                      )}
                      aria-hidden
                    >
                      {feedback?.correct ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
                    </span>
                    <div className="min-w-0">
                      <p className={cn('font-extrabold', feedback?.correct ? 'text-success' : 'text-destructive')}>
                        {feedback?.correct ? 'Chính xác!' : 'Chưa đúng'}
                      </p>
                      {!feedback?.correct && feedback?.expected && (
                        <p className="text-sm break-words">
                          Đáp án: <span className="jp font-bold">{feedback.expected}</span>
                        </p>
                      )}
                      {feedback?.explanation && (
                        <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{feedback.explanation}</p>
                      )}
                    </div>
                  </div>
                  <Button
                    onClick={next}
                    variant={feedback?.correct ? 'success' : 'destructive'}
                    size="xl"
                    className="w-full"
                  >
                    TIẾP TỤC <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              )}
              <p className="text-center text-xs text-muted-foreground/90 mt-2">
                <span className="sm:hidden">
                  <kbd className="px-1.5 py-0.5 rounded-md border bg-muted font-sans font-semibold">Enter</kbd> kiểm tra / tiếp tục
                </span>
                <span className="hidden sm:inline">
                  Mẹo: <kbd className="px-1.5 py-0.5 rounded-md border bg-muted font-sans font-semibold">1</kbd>–<kbd className="px-1.5 py-0.5 rounded-md border bg-muted font-sans font-semibold">4</kbd> chọn nhanh · <kbd className="px-1.5 py-0.5 rounded-md border bg-muted font-sans font-semibold">Enter</kbd> kiểm tra / tiếp tục
                </span>
              </p>
            </div>
          </div>
        )}

        {phase === 'failed' && <FailedScreen onQuit={quit} onPractice={() => navigate('/review')} />}

        {phase === 'completing' && (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-muted-foreground">
            <div className="h-12 w-12 rounded-full border-4 border-muted border-t-primary animate-spin" />
            <p className="text-sm">Đang tổng kết buổi học…</p>
          </div>
        )}

        {phase === 'completed' && summary && session && (
          <CompletionScreen
            summary={summary}
            mode={session.mode}
            onContinue={continueFromCompletion}
            onReviewMistakes={summary.wrongCount > 0 ? () => navigate('/session/mistakes') : undefined}
            onReplay={
              source === 'challenge'
                ? undefined // thử thách 1 lần/ngày — không cho học lại
                : () => {
                    setPhase('loading')
                    setSummary(null)
                    setDraftState({})
                    setFeedback(null)
                    // restart (jump: nodeId chính là targetLessonId)
                    window.location.hash = source === 'jump' ? `#/jump/${nodeId}` : `#/lesson/${nodeId}`
                    window.location.reload()
                  }
            }
          />
        )}
      </main>

      <AlertDialog open={showQuit} onOpenChange={setShowQuit}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Rời khỏi buổi học?</AlertDialogTitle>
            <AlertDialogDescription>
              Tiến độ trong buổi này sẽ không được lưu. Bạn có thể quay lại bất cứ lúc nào.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Học tiếp</AlertDialogCancel>
            <AlertDialogAction onClick={quit} className="bg-destructive text-white hover:bg-destructive/90">
              Rời đi
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

/* ------------------------------- Sub-screens -------------------------------- */

function FailedScreen({ onQuit, onPractice }: { onQuit: () => void; onPractice: () => void }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-5 text-center py-10">
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="h-36 w-36 sm:h-44 sm:w-44 rounded-3xl overflow-hidden border-4 border-destructive/30 bg-card shadow-lg"
      >
        <Image
          src="/images/mascot-study.png"
          alt="Chú chó Shiba lại gắng học tiếp"
          width={176}
          height={176}
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div>
        <h1 className="text-2xl font-extrabold">Hết tim rồi!</h1>
        <p className="text-muted-foreground mt-1.5 max-w-sm">
          Đừng lo — sai là một phần của việc học. Luyện tập để lấy lại tim, hoặc quay lại sau khi tim hồi.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-2.5">
        <Button onClick={onPractice} size="xl" className="px-8">
          Luyện tập lấy tim
        </Button>
        <Button variant="outline" onClick={onQuit} size="xl" className="px-8">
          Tạm nghỉ
        </Button>
      </div>
    </div>
  )
}

function CompletionScreen({
  summary,
  mode,
  onContinue,
  onReplay,
  onReviewMistakes,
}: {
  summary: CompleteSummary
  mode: string
  onContinue: () => void
  onReplay?: () => void
  onReviewMistakes?: () => void
}) {
  const minutes = Math.max(1, Math.round(summary.durationMs / 60000))
  const isJump = mode === 'JUMP'
  const isChallenge = mode === 'CHALLENGE'
  return (
    <div className="relative flex-1 flex flex-col items-center py-6 gap-7 overflow-hidden">
      {summary.passed && <Confetti count={42} />}
      <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 15 }} className="text-center">
        <div
          className={cn(
            'mx-auto h-40 w-40 sm:h-48 sm:w-48 rounded-3xl overflow-hidden border-4 shadow-lg bg-card',
            summary.passed ? 'border-success/40' : 'border-warning/40'
          )}
        >
          <Image
            src="/images/mascot-cheer.png"
            alt="Chú chó Shiba ăn mừng thành tích của bạn"
            width={192}
            height={192}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-4">
          {isChallenge
            ? 'Thử thách hoàn thành!'
            : isJump
              ? summary.passed
                ? 'Đã mở khóa!'
                : 'Chưa đủ để bỏ qua'
              : summary.passed
                ? 'Hoàn thành ải!'
                : 'Chưa đạt — cố lên!'}
        </h1>
        <p className="text-muted-foreground mt-1">
          {isChallenge
            ? `Độ chính xác ${summary.accuracy}% — thử thách mỗi ngày để giữ nhịp học!`
            : isJump
              ? summary.passed
                ? `Độ chính xác ${summary.accuracy}% — bạn đủ trình độ để học thẳng bài "${summary.jumpTargetTitle ?? 'mục tiêu'}"!`
                : `Độ chính xác ${summary.accuracy}% — cần ≥80% để bỏ qua. Học thêm rồi quay lại nhé!`
              : summary.passed
                ? summary.perfect
                  ? 'Tuyệt đối hoàn hảo — không sai một câu nào!'
                  : `Độ chính xác ${summary.accuracy}%`
                : `Độ chính xác ${summary.accuracy}% — cần thêm chút nữa để qua ải này`}
        </p>
      </motion.div>

      {/* Lên cấp — banner chúc mừng nổi bật nhất trên màn hình */}
      {summary.levelUp && (
        <motion.div
          initial={{ opacity: 0, scale: 0.75, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.35, type: 'spring', stiffness: 210, damping: 15 }}
          className="relative w-full max-w-xl overflow-hidden rounded-3xl border-2 border-warning/60 bg-gradient-to-br from-warning/15 via-sakura/10 to-primary/10 p-5 text-center shadow-lg"
          role="status"
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -top-8 -left-8 h-28 w-28 rounded-full bg-warning/20 blur-2xl"
            animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -bottom-10 -right-6 h-32 w-32 rounded-full bg-primary/15 blur-2xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          />
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-warning">
            <Sparkles className="mr-1 inline h-3.5 w-3.5" aria-hidden /> Lên cấp <Sparkles className="ml-1 inline h-3.5 w-3.5" aria-hidden />
          </p>
          <div className="mt-2.5 flex items-center justify-center gap-3 sm:gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-muted-foreground/20 bg-card text-xl font-black tabular-nums text-muted-foreground/70">
              {summary.levelUp.from}
            </span>
            <motion.span
              initial={{ x: -6, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              aria-hidden
            >
              <MoveRight className="h-7 w-7 text-warning" />
            </motion.span>
            <motion.span
              initial={{ scale: 1.8, rotate: -8 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.75, type: 'spring', stiffness: 240, damping: 13 }}
              className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-warning to-sakura text-white shadow-lg shadow-warning/30"
            >
              <span className="text-3xl font-black tabular-nums">{summary.levelUp.to}</span>
              <span className="sr-only">Cấp {summary.levelUp.to}</span>
            </motion.span>
          </div>
          <p className="jp mt-3 text-lg font-extrabold">{summary.levelUp.title}</p>
          <p className="mt-0.5 text-sm text-muted-foreground">Bạn đã mạnh hơn — tiếp tục giữ đà này nhé!</p>
        </motion.div>
      )}

      {/* JUMP: banner mở khóa hàng loạt */}
      {isJump && summary.jumpApplied && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-xl rounded-2xl border-2 border-success/50 bg-success/10 p-4 flex items-center gap-3"
          role="status"
        >
          <div className="h-11 w-11 rounded-xl bg-success/20 flex items-center justify-center shrink-0">
            <LockOpen className="h-6 w-6 text-success" aria-hidden />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold">Đã đánh dấu hoàn thành {summary.jumpLessonsCompleted} bài · {summary.jumpNodesCompleted} ải</p>
            <p className="text-xs text-muted-foreground">Toàn bộ nội dung trước " {summary.jumpTargetTitle} " đã mở. XP của các bài bị bỏ qua không được cộng — bạn chỉ nhận XP của bài kiểm tra này.</p>
          </div>
        </motion.div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-xl">
        {[
          { icon: <Zap className="h-6 w-6" />, label: 'XP kiếm được', value: `+${summary.xp.total}`, tone: 'warning' as const },
          { icon: <Target className="h-6 w-6" />, label: 'Chính xác', value: `${summary.accuracy}%`, tone: 'primary' as const },
          { icon: <Flame className="h-6 w-6" />, label: 'Combo cao nhất', value: `x${summary.maxCombo}`, tone: 'sakura' as const },
          { icon: <Timer className="h-6 w-6" />, label: 'Thời gian', value: `${minutes} phút`, tone: 'success' as const },
        ].map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.08 }}>
            <StatCard {...s} />
          </motion.div>
        ))}
      </div>

      {/* XP breakdown */}
      {summary.xp.breakdown.length > 0 && (
        <div className="w-full max-w-xl rounded-2xl border bg-card p-4 space-y-1.5">
          <p className="text-sm font-bold mb-1">Chi tiết XP</p>
          {summary.xp.breakdown.map((b, i) => (
            <div key={i} className="flex justify-between text-sm">
              <span className="text-muted-foreground">{b.label}</span>
              <span className={cn('font-bold tabular-nums', b.amount < 0 ? 'text-muted-foreground' : 'text-primary')}>
                {b.amount > 0 ? `+${b.amount}` : b.amount}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Streak */}
      <div className="w-full max-w-xl rounded-2xl border bg-card p-4 flex items-center gap-4">
        <Flame className={cn('h-8 w-8 shrink-0', summary.streak.goalMetToday ? 'text-warning' : 'text-muted-foreground')} aria-hidden />
        <div className="flex-1">
          <p className="font-bold">Chuỗi {summary.streak.currentStreak} ngày</p>
          <div className="mt-1.5 h-2 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full bg-warning transition-all"
              style={{ width: `${Math.min(100, (summary.streak.todayXP / Math.max(1, summary.streak.dailyGoalXP)) * 100)}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Hôm nay: {summary.streak.todayXP}/{summary.streak.dailyGoalXP} XP
            {summary.streak.goalMetToday ? ' — đã đạt mục tiêu!' : ' — cố thêm chút nữa!'}
          </p>
        </div>
      </div>

      {/* Bảo vệ chuỗi đã dùng để gập nối ngày bỏ lỡ */}
      {(summary.freezesUsed ?? 0) > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-xl rounded-2xl border-2 border-primary/40 bg-primary/10 p-4 flex items-center gap-3"
          role="status"
        >
          <div className="h-11 w-11 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
            <Snowflake className="h-6 w-6 text-primary" aria-hidden />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold">Đã dùng {summary.freezesUsed} Bảo vệ chuỗi</p>
            <p className="text-xs text-muted-foreground">Những ngày bạn bỏ lỡ đã được che chắn — chuỗi {summary.streak.currentStreak} ngày được giữ nguyên!</p>
          </div>
        </motion.div>
      )}

      {/* New achievements */}
      {summary.newAchievements.length > 0 && (
        <div className="w-full max-w-xl space-y-2">
          {summary.newAchievements.map((a) => (
            <motion.div
              key={a.code}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border-2 border-warning/50 bg-warning/10 p-4 flex items-center gap-3"
            >
              <div className="h-11 w-11 rounded-xl bg-warning/20 flex items-center justify-center shrink-0">
                <DynamicIcon name={a.icon} className="h-6 w-6 text-warning" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold flex items-center gap-2">
                  {a.title}
                  <span className="text-[10px] font-bold rounded-full bg-warning text-white px-2 py-0.5">{a.tier}</span>
                </p>
                <p className="text-xs text-muted-foreground">{a.description}</p>
              </div>
              <span className="text-xs font-bold text-warning shrink-0">+{a.xpReward} XP</span>
            </motion.div>
          ))}
        </div>
      )}

      {summary.heartsGranted > 0 && (
        <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-success">
          <Heart className="h-4 w-4 fill-success" /> +1 tim cho buổi luyện tập!
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-2.5 w-full max-w-xs sm:max-w-none">
        <Button onClick={onContinue} variant="success" size="xl" className="flex-1">
          {isJump ? 'Về Learning Path' : 'Tiếp tục hành trình'} <ChevronRight className="h-5 w-5" />
        </Button>
        {onReviewMistakes && (
          <Button onClick={onReviewMistakes} variant="warning" size="xl">
            <Wrench className="h-4 w-4" /> Xem lại {summary.wrongCount} lỗi sai
          </Button>
        )}
        {onReplay && (
          <Button variant="outline" onClick={onReplay} size="xl">
            <Star className="h-4 w-4" /> {isJump ? 'Thử lại' : 'Học lại'}
          </Button>
        )}
      </div>
    </div>
  )
}

function StatCard({ icon, label, value, tone }: { icon: React.ReactNode; label: string; value: string; tone: 'warning' | 'primary' | 'sakura' | 'success' }) {
  const tones = {
    warning: 'border-warning/50 bg-warning/10 text-warning',
    primary: 'border-primary/50 bg-primary/10 text-primary',
    sakura: 'border-sakura/50 bg-sakura/10 text-sakura',
    success: 'border-success/50 bg-success/10 text-success',
  } as const
  return (
    <div className={cn('rounded-2xl border-2 p-4 text-center h-full', tones[tone])}>
      <div className="mx-auto mb-1 inline-flex">{icon}</div>
      <p className="text-2xl font-extrabold tabular-nums">{value}</p>
      <p className="text-[11px] font-bold uppercase tracking-wide opacity-70">{label}</p>
    </div>
  )
}
