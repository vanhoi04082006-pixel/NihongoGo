'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { api, ApiClientError } from '@/lib/client/api'
import { useHashRoute } from '@/components/app/router'
import { useAuth } from '@/components/app/use-auth'
import { LogoFull } from '@/components/app/logo'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { DynamicIcon } from '@/components/shared/icon'

const GOALS = [
  { key: 'TRAVEL', icon: 'Mountain', label: 'Du lịch', desc: 'Chuẩn bị cho chuyến đi Nhật' },
  { key: 'ANIME', icon: 'Sparkles', label: 'Anime & Manga', desc: 'Xem không cần phụ đề' },
  { key: 'JLPT', icon: 'GraduationCap', label: 'Thi JLPT', desc: 'Lấy chứng chỉ N5-N4' },
  { key: 'WORK', icon: 'Wrench', label: 'Công việc', desc: 'Làm việc với người Nhật' },
  { key: 'STUDY', icon: 'BookOpen', label: 'Du học', desc: 'Chuẩn bị sang Nhật học' },
  { key: 'SOCIAL', icon: 'MessageCircle', label: 'Giao tiếp', desc: 'Nói chuyện tự tin' },
  { key: 'OTHER', icon: 'Star', label: 'Khác', desc: 'Mục tiêu riêng của tôi' },
]

const DAILY_GOALS = [
  { xp: 10, label: 'Thong thả', desc: '~5 phút/ngày', icon: 'Ear' },
  { xp: 20, label: 'Đều đặn', desc: '~10 phút/ngày', icon: 'BookOpen' },
  { xp: 40, label: 'Chăm chỉ', desc: '~20 phút/ngày', icon: 'Zap' },
  { xp: 60, label: 'Học nghiêm túc', desc: '~30 phút/ngày', icon: 'Flame' },
]

const LEVELS = [
  { key: 'BEGINNER', label: 'Mới bắt đầu', desc: 'Chưa biết gì hoặc chỉ biết vài từ' },
  { key: 'ELEMENTARY', label: 'Đã biết chút đỉnh', desc: 'Biết kana, vài mẫu câu đơn giản' },
  { key: 'INTERMEDIATE', label: 'Trung cấp', desc: 'Học lại để hệ thống hóa' },
]

const KANA_LEVELS = [
  { key: 'NONE', label: 'Chưa biết kana', desc: 'Bắt đầu từ bảng chữ' },
  { key: 'SOME', label: 'Biết vài ký tự', desc: 'Nhìn quen nhưng chưa nhớ hết' },
  { key: 'HIRAGANA', label: 'Rành Hiragana', desc: 'Chỉ cần luyện Katakana' },
  { key: 'BOTH', label: 'Rành cả hai', desc: 'Bỏ qua bài kana, vào bài 1 luôn' },
]

const STEPS = ['goal', 'level', 'daily', 'kana', 'placement'] as const

export function OnboardingView() {
  const { navigate } = useHashRoute()
  const { data: user } = useAuth()
  const qc = useQueryClient()
  const [step, setStep] = useState(0)
  const [goal, setGoal] = useState('TRAVEL')
  const [level, setLevel] = useState('BEGINNER')
  const [dailyGoalXP, setDailyGoalXP] = useState(20)
  const [kanaKnowledge, setKanaKnowledge] = useState('NONE')
  const [saving, setSaving] = useState(false)

  const finish = async (placementResult?: unknown) => {
    setSaving(true)
    try {
      await api('/api/onboarding', {
        method: 'POST',
        json: {
          goal,
          level,
          dailyGoalXP,
          kanaKnowledge,
          displayName: user?.profile?.displayName || user?.username,
          placementResult,
        },
      })
      await qc.invalidateQueries({ queryKey: ['auth'] })
      toast.success('Onboarding hoàn tất — はじめましょう!')
      navigate('/')
    } catch (e) {
      toast.error(e instanceof ApiClientError ? e.message : 'Không lưu được onboarding')
      setSaving(false)
    }
  }

  const progress = ((step + 1) / STEPS.length) * 100

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
          <LogoFull />
          <span className="text-sm text-muted-foreground font-medium">Onboarding</span>
        </div>
      </header>

      <main className="flex-1 flex items-start sm:items-center justify-center px-4 py-10">
        <div className="w-full max-w-2xl">
          <div className="mb-6 px-1">
            <Progress value={progress} className="h-2" aria-label={`Bước ${step + 1}/${STEPS.length}`} />
            <p className="text-xs text-muted-foreground mt-2 text-right">
              Bước {step + 1}/{STEPS.length}
            </p>
          </div>

          <div className="rounded-3xl border bg-card shadow-xl shadow-primary/5 p-7 sm:p-9 min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={STEPS[step]}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.22 }}
              >
                {step === 0 && (
                  <StepShell title="Bạn học tiếng Nhật để làm gì?" sub="Mục tiêu giúp chúng tôi cá nhân hóa gợi ý nội dung.">
                    <div className="grid sm:grid-cols-2 gap-3">
                      {GOALS.map((g) => (
                        <ChoiceCard key={g.key} selected={goal === g.key} onClick={() => setGoal(g.key)} icon={g.icon} label={g.label} desc={g.desc} />
                      ))}
                    </div>
                  </StepShell>
                )}

                {step === 1 && (
                  <StepShell title="Trình độ hiện tại của bạn?" sub="Chân thật với bản thân nhé — không ai nhìn đâu!">
                    <div className="space-y-3">
                      {LEVELS.map((l) => (
                        <ChoiceCard key={l.key} selected={level === l.key} onClick={() => setLevel(l.key)} label={l.label} desc={l.desc} icon="GraduationCap" full />
                      ))}
                    </div>
                  </StepShell>
                )}

                {step === 2 && (
                  <StepShell title="Mục tiêu mỗi ngày?" sub="Đạt đủ XP/ngày sẽ được tính chuỗi ngày (streak).">
                    <div className="grid grid-cols-2 gap-3">
                      {DAILY_GOALS.map((d) => (
                        <ChoiceCard key={d.xp} selected={dailyGoalXP === d.xp} onClick={() => setDailyGoalXP(d.xp)} icon={d.icon} label={d.label} desc={d.desc} badge={`${d.xp} XP`} />
                      ))}
                    </div>
                  </StepShell>
                )}

                {step === 3 && (
                  <StepShell title="Bạn đã biết kana chưa?" sub="Hiragana + Katakana là hai bảng chữ đầu tiên của hành trình.">
                    <div className="space-y-3">
                      {KANA_LEVELS.map((k) => (
                        <ChoiceCard key={k.key} selected={kanaKnowledge === k.key} onClick={() => setKanaKnowledge(k.key)} label={k.label} desc={k.desc} icon="Languages" full />
                      ))}
                    </div>
                  </StepShell>
                )}

                {step === 4 && (
                  <PlacementStep
                    kanaKnowledge={kanaKnowledge}
                    onDone={(result) => finish(result)}
                    onSkip={() => finish()}
                    saving={saving}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {step < STEPS.length - 1 && (
            <div className="flex items-center justify-between mt-5 px-1">
              <Button variant="ghost" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}>
                ← Quay lại
              </Button>
              <Button onClick={() => setStep((s) => s + 1)} className="rounded-xl px-7">
                Tiếp tục
              </Button>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-muted-foreground">
          NihongoGo — học tiếng Nhật mỗi ngày
        </div>
      </footer>
    </div>
  )
}

function StepShell({ title, sub, children }: { title: string; sub: string; children: React.ReactNode }) {
  return (
    <div>
      <h1 className="text-xl sm:text-2xl font-bold tracking-tight">{title}</h1>
      <p className="text-sm text-muted-foreground mt-1.5 mb-6">{sub}</p>
      {children}
    </div>
  )
}

function ChoiceCard({
  selected,
  onClick,
  icon,
  label,
  desc,
  badge,
  full,
}: {
  selected: boolean
  onClick: () => void
  icon: string
  label: string
  desc?: string
  badge?: string
  full?: boolean
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        'text-left rounded-2xl border-2 p-4 transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring',
        full ? 'w-full flex items-center gap-4' : '',
        selected
          ? 'border-primary bg-primary/5 shadow-sm'
          : 'border-border hover:border-primary/40 hover:bg-muted/50'
      )}
    >
      <div
        className={cn(
          'h-10 w-10 rounded-xl flex items-center justify-center shrink-0',
          selected ? 'bg-primary text-primary-foreground' : 'bg-muted'
        )}
      >
        <DynamicIcon name={icon} className="h-5 w-5" />
      </div>
      <div className={cn(full && 'flex-1')}>
        <div className="font-semibold flex items-center gap-2">
          {label}
          {badge && <span className="text-[11px] font-bold rounded-full bg-sakura/10 text-sakura px-2 py-0.5">{badge}</span>}
        </div>
        {desc && <div className="text-xs text-muted-foreground mt-0.5">{desc}</div>}
      </div>
    </button>
  )
}

/* ----------------------------- Placement mini-quiz ------------------------- */

interface KanaChar {
  character: string
  romaji: string
  type: string
}

function PlacementStep({
  kanaKnowledge,
  onDone,
  onSkip,
  saving,
}: {
  kanaKnowledge: string
  onDone: (result: unknown) => void
  onSkip: () => void
  saving: boolean
}) {
  const [phase, setPhase] = useState<'intro' | 'quiz' | 'result'>('intro')
  const [kana, setKana] = useState<KanaChar[]>([])
  const [qi, setQi] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [choice, setChoice] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const questions = useMemo(() => {
    // 8 câu ngẫu nhiên từ kana cơ bản
    const basic = kana.filter((k) => k.type === 'HIRAGANA')
    const shuffled = [...basic].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 8)
  }, [kana])

  const current = questions[qi]
  const options = useMemo(() => {
    if (!current) return []
    const others = kana.filter((k) => k.romaji !== current.romaji && k.type === 'HIRAGANA').slice(0, 30)
    const distractors = [...others].sort(() => Math.random() - 0.5).slice(0, 3).map((k) => k.romaji)
    return [current.romaji, ...distractors].sort(() => Math.random() - 0.5)
  }, [current, kana])

  const startQuiz = async () => {
    setLoading(true)
    try {
      const res = await api<{ characters: KanaChar[] }>('/api/kana?type=HIRAGANA')
      setKana(res.characters)
      setPhase('quiz')
    } catch {
      toast.error('Không tải được dữ liệu kana, bỏ qua bài kiểm tra nhé')
      onSkip()
    } finally {
      setLoading(false)
    }
  }

  const answer = (romaji: string) => {
    if (choice !== null) return
    setChoice(romaji)
    const isCorrect = romaji === current.romaji
    if (isCorrect) setCorrect((c) => c + 1)
    setTimeout(() => {
      setChoice(null)
      if (qi + 1 >= questions.length) {
        setPhase('result')
      } else {
        setQi((i) => i + 1)
      }
    }, 550)
  }

  if (phase === 'intro') {
    const recommendQuiz = kanaKnowledge === 'NONE' || kanaKnowledge === 'SOME'
    return (
      <StepShell
        title={recommendQuiz ? 'Kiểm tra nhanh trình độ kana?' : 'Bài kiểm tra nhanh (tùy chọn)' }
        sub="8 câu trắc nghiệm Hiragana để hệ thống gợi ý điểm bắt đầu phù hợp."
      >
        <div className="flex flex-col gap-3">
          <Button onClick={startQuiz} disabled={loading} className="rounded-xl h-11">
            {loading ? 'Đang chuẩn bị…' : 'Làm bài kiểm tra'}
          </Button>
          <Button variant="ghost" onClick={onSkip} disabled={saving}>
            Bỏ qua, vào Learning Path luôn →
          </Button>
        </div>
      </StepShell>
    )
  }

  if (phase === 'quiz' && current) {
    return (
      <StepShell title={`Ký tự này đọc là gì? (${qi + 1}/${questions.length})`} sub="Chọn romaji tương ứng.">
        <div className="flex flex-col items-center gap-8 py-2">
          <div className="jp text-7xl font-bold select-none" aria-label="ký tự Nhật">
            {current.character}
          </div>
          <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
            {options.map((o) => (
              <button
                key={o}
                onClick={() => answer(o)}
                className={cn(
                  'h-14 rounded-2xl border-2 text-lg font-bold transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  choice === null
                    ? 'border-border hover:border-primary hover:bg-primary/5'
                    : o === current.romaji
                      ? 'border-success bg-success/10 text-success'
                      : o === choice
                        ? 'border-destructive bg-destructive/10 text-destructive'
                        : 'border-border opacity-50'
                )}
              >
                {o}
              </button>
            ))}
          </div>
        </div>
      </StepShell>
    )
  }

  // result
  const score = Math.round((correct / Math.max(1, questions.length)) * 100)
  const suggestion =
    score >= 80
      ? 'Tuyệt — nền kana của bạn rất tốt! Bài kana sẽ được đánh dấu đã qua, bạn có thể ôn lại bất cứ lúc nào.'
      : score >= 50
        ? 'Khá ổn! Nên luyện thêm kana ở tốc độ của bạn — Learning Path sẽ đưa bạn qua các ải kana trước.'
        : 'Không sao cả — mọi người đều bắt đầu từ số 0. Hai bài kana đầu tiên chính là dành cho bạn.'
  return (
    <StepShell title={`Kết quả: ${correct}/${questions.length} đúng (${score}%)`} sub={suggestion}>
      <div className="flex flex-col gap-3">
        <Button onClick={() => onDone({ type: 'kana', score, correct, total: questions.length })} disabled={saving} className="rounded-xl h-11">
          {saving ? 'Đang lưu…' : 'Hoàn tất onboarding → Learning Path'}
        </Button>
      </div>
    </StepShell>
  )
}
