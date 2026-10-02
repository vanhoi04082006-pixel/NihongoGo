'use client'

import { type CSSProperties, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import {
  Lock, Check, Star, Sparkles, ArrowRight, RefreshCw, Trophy, Target, Flame, Heart, Snowflake,
  Rocket, CalendarDays, BookMarked, ChevronUp, ChevronDown, ChevronRight, Map as MapIcon,
} from 'lucide-react'
import { toast } from 'sonner'
import { api } from '@/lib/client/api'
import { useHashRoute } from '@/components/app/router'
import { useOverview } from '@/components/app/use-overview'
import { DynamicIcon } from '@/components/shared/icon'
import { LoadingBlock, ErrorBlock, XPBadge, LeagueBadge } from '@/components/shared/widgets'
import { AudioButton } from '@/components/shared/audio-button'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
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

/* ------------------------------- DTO types --------------------------------- */

interface NodeDTO {
  id: string
  key: string
  title: string
  description: string | null
  icon: string
  nodeType: string
  order: number
  xpReward: number
  requiredScore: number
  difficulty: string
  status: string
  exerciseCount: number
  state: 'LOCKED' | 'AVAILABLE' | 'IN_PROGRESS' | 'COMPLETED' | 'MASTERED'
  bestScore: number
  attempts: number
}

interface LessonDTO {
  id: string
  slug: string
  order: number
  title: string
  titleJa: string
  description: string
  status: string
  state: 'LOCKED' | 'AVAILABLE' | 'IN_PROGRESS' | 'COMPLETED'
  totalNodes: number
  completedNodes: number
  nodes: NodeDTO[]
}

interface SectionDTO {
  id: string
  order: number
  title: string
  titleJa: string | null
  description: string
  lessons: LessonDTO[]
}

interface LearnDTO {
  course: { id: string; slug: string; title: string; titleJa: string | null; description: string }
  sections: SectionDTO[]
  stats: { lessonsCompleted: number; totalLessons: number; currentLessonId: string | null }
}

interface CourseListItemDTO {
  id: string
  slug: string
  title: string
  titleJa: string | null
  description: string
  lessonCount: number
}

interface DailyWordDTO {
  date: string
  term: string
  reading: string | null
  romaji: string
  meaningVi: string
  pos: string | null
  exampleJa: string
  exampleVi: string
  lessonTitle: string | null
  lessonId: string | null
}

/* --------------------------------- View ------------------------------------ */

const COURSE_STORAGE_KEY = 'ngg:course'

export function LearnView() {
  const { navigate } = useHashRoute()
  // Khoá đang chọn (lưu localStorage) — rỗng = khoá mặc định (order nhỏ nhất).
  const [courseSlug, setCourseSlug] = useState<string>('')
  useEffect(() => {
    // Đọc sau hydrate (queueMicrotask) — tránh cascade render & hydration mismatch.
    queueMicrotask(() => {
      try {
        setCourseSlug(sessionStorage.getItem(COURSE_STORAGE_KEY) ?? localStorage.getItem(COURSE_STORAGE_KEY) ?? '')
      } catch {
        /* bỏ qua */
      }
    })
  }, [])
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['learn', courseSlug],
    queryFn: () => api<LearnDTO>(`/api/learn${courseSlug ? `?course=${encodeURIComponent(courseSlug)}` : ''}`),
  })
  // Nếu khoá đã lưu bị 404 (slug đổi/ẩn) → trả về mặc định một lần (deferred).
  useEffect(() => {
    if (error && courseSlug) {
      queueMicrotask(() => {
        try {
          sessionStorage.removeItem(COURSE_STORAGE_KEY)
          localStorage.removeItem(COURSE_STORAGE_KEY)
        } catch {
          /* bỏ qua */
        }
        setCourseSlug('')
      })
    }
  }, [error, courseSlug])
  const { data: coursesData } = useQuery({
    queryKey: ['courses'],
    queryFn: () => api<{ courses: CourseListItemDTO[] }>('/api/courses'),
  })
  const { data: overview } = useOverview()
  const courseList = coursesData?.courses ?? []
  const [jumpTarget, setJumpTarget] = useState<LessonDTO | null>(null)
  const [celebrateNodeId, setCelebrateNodeId] = useState<string | null>(null)
  const celebrateCheckedOnce = useRef(false)
  const celebrateFlag = useRef<{ nodeId: string; nodeStatus: string | null; firstNodeCompletion: boolean; lessonCompleted: boolean; at: number } | null>(null)

  // Phần đang xem — null = tự theo phần chứa bài hiện tại (Duolingo style:
  // mỗi lần vào chỉ thấy MỘT phần; đổi phần qua chips hoặc thẻ cuối phần).
  const [viewSectionOrder, setViewSectionOrder] = useState<number | null>(null)
  useEffect(() => {
    // Đổi khoá → về phần hiện tại (deferred cho hợp rule set-state-in-effect)
    queueMicrotask(() => setViewSectionOrder(null))
  }, [courseSlug])

  // Đọc cờ "vừa hoàn thành" từ player → chúc mừng ải vừa vượt/thành thạo.
  useEffect(() => {
    if (!data) return
    if (!celebrateCheckedOnce.current) {
      celebrateCheckedOnce.current = true
      try {
        const raw = sessionStorage.getItem('ngg:celebrate')
        if (raw) {
          sessionStorage.removeItem('ngg:celebrate')
          celebrateFlag.current = JSON.parse(raw)
        }
      } catch {
        celebrateFlag.current = null
      }
    }
    const flag = celebrateFlag.current
    if (!flag) return
    if (Date.now() - flag.at > 60_000) {
      celebrateFlag.current = null
      return
    }
    const node = data.sections.flatMap((s) => s.lessons).flatMap((l) => l.nodes).find((n) => n.id === flag.nodeId)
    if (!node) {
      celebrateFlag.current = null
      return
    }
    // Deferred qua rAF cho hợp rule react-hooks/set-state-in-effect
    if (flag.nodeStatus === 'MASTERED') {
      if (node.state !== 'MASTERED') return // đợi data tươi — effect sẽ chạy lại khi refetch xong
      requestAnimationFrame(() => {
        setCelebrateNodeId(node.id)
        toast.success('Thành thạo ải!', {
          description: `"${node.title}" đã lên cấp vàng — すごい!`,
          icon: <Star className="h-4 w-4" />,
        })
        window.setTimeout(() => setCelebrateNodeId(null), 3000)
      })
      celebrateFlag.current = null
    } else if (flag.firstNodeCompletion) {
      requestAnimationFrame(() => {
        setCelebrateNodeId(node.id)
        toast.success('Đã vượt ải mới!', {
          description: `"${node.title}" hoàn thành — ải tiếp theo đã mở khóa!`,
          icon: <Sparkles className="h-4 w-4" />,
        })
        window.setTimeout(() => setCelebrateNodeId(null), 2200)
      })
      celebrateFlag.current = null
    } else if (flag.lessonCompleted) {
      requestAnimationFrame(() => {
        toast.success('Hoàn thành trọn bài học!', {
          description: 'Bài tiếp theo đã được mở khóa — tiếp tục nào!',
          icon: <Sparkles className="h-4 w-4" />,
        })
      })
      celebrateFlag.current = null
    } else {
      celebrateFlag.current = null
    }
  }, [data])

  const openNode = (node: NodeDTO) => {
    if (node.state === 'LOCKED' || node.exerciseCount === 0) return
    navigate(`/lesson/${node.id}`)
  }

  if (isLoading) return <LoadingBlock label="Đang mở Learning Path…" />
  if (error || !data) return <ErrorBlock message="Không tải được hành trình học." onRetry={() => refetch()} />

  /* ---------- Tính phần đang xem (Duolingo: 1 phần/lần) ---------- */
  const sections = [...data.sections].sort((a, b) => a.order - b.order)
  const autoOrder = autoSectionOrder(data)
  const activeOrder = viewSectionOrder ?? autoOrder
  const activeSection = sections.find((s) => s.order === activeOrder) ?? sections[0]
  const nextSection = sections.find((s) => s.order === activeOrder + 1) ?? null

  return (
    <div className="grid xl:grid-cols-[1fr_300px] gap-6 items-start">
      {/* Learning path */}
      <div className="min-w-0">
        {/* Course selector — kiểu "MY COURSES" của Duolingo */}
        <CourseSelector
          current={data.course}
          courses={courseList}
          onSelect={(slug) => {
            setCourseSlug(slug)
            try {
              sessionStorage.setItem(COURSE_STORAGE_KEY, slug)
              localStorage.setItem(COURSE_STORAGE_KEY, slug)
            } catch {
              /* bỏ qua */
            }
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        />

        {/* Từ của ngày — bản di động (desktop hiển thị ở sidebar phải) */}
        <div className="xl:hidden mb-6">
          <WordOfDayCard onNavigateVocab={() => navigate('/vocabulary')} />
        </div>

        {/* Section chips — trung tâm quản lý các phần */}
        <SectionChips
          sections={sections}
          activeOrder={activeOrder}
          autoOrder={autoOrder}
          onSelect={(order) => {
            setViewSectionOrder(order)
            document.getElementById('section-banner')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}
        />

        {/* Phần đang xem — MỘT phần duy nhất */}
        <section aria-label={activeSection.title}>
          <SectionBanner section={activeSection} totalStats={data.stats} />

          {/* Các bài trong phần — lộ trình mở dần theo tiến độ */}
          <SectionLessons
            section={activeSection}
            celebrateNodeId={celebrateNodeId}
            onOpenNode={openNode}
            onNodeInfo={(id) => navigate(`/lessons/${id}`)}
            onJump={setJumpTarget}
          />
        </section>

        {/* Cuối phần: thẻ "PHẦN TIẾP THEO" kiểu UP NEXT của Duolingo */}
        {nextSection ? (
          <NextSectionCard
            section={nextSection}
            onGoto={() => {
              setViewSectionOrder(nextSection.order)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            onJumpFirst={(lesson) => setJumpTarget(lesson)}
          />
        ) : (
          <CourseEndCard
            stats={data.stats}
            onRestart={() => setViewSectionOrder(null)}
          />
        )}
      </div>

      {/* Dialog xác nhận bỏ qua (kiểu Duolingo "Jump here") */}
      <AlertDialog open={!!jumpTarget} onOpenChange={(v) => !v && setJumpTarget(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <Rocket className="h-5 w-5 text-sakura" aria-hidden />
              Bỏ qua tới “{jumpTarget ? `Bài ${jumpTarget.order} — ${jumpTarget.title}` : ''}”?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Bạn sẽ làm một bài kiểm tra nhanh (tối đa 10 câu) lấy từ các bài trước đó. Đạt ≥80% thì toàn bộ nội dung
              trước bài này được đánh dấu hoàn thành và mở khóa luôn. Bạn chỉ nhận XP của bài kiểm tra — XP của các bài
              bị bỏ qua sẽ không được cộng.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Để sau</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (jumpTarget) navigate(`/jump/${jumpTarget.id}`)
                setJumpTarget(null)
              }}
              className="bg-sakura text-sakura-foreground hover:bg-sakura/90"
            >
              Làm bài kiểm tra
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Right sidebar widgets (desktop) */}
      <aside className="hidden xl:flex flex-col gap-4 sticky top-20" aria-label="Tóm tắt hôm nay">
        {/* Word of the day */}
        <WordOfDayCard onNavigateVocab={() => navigate('/vocabulary')} />

        {/* Daily quest */}
        <div className="rounded-2xl border bg-card p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-sm flex items-center gap-1.5">
              <Target className="h-4 w-4 text-sakura" aria-hidden /> Nhiệm vụ hôm nay
            </h3>
            <button onClick={() => navigate('/quests')} className="text-xs font-semibold text-primary hover:underline outline-none">
              Tất cả
            </button>
          </div>
          <div className="space-y-3">
            {overview?.quests.slice(0, 3).map((q) => (
              <div key={q.id}>
                <div className="flex justify-between text-xs font-medium mb-1">
                  <span className={cn(q.completed ? 'text-success font-bold line-through' : '')}>{q.title}</span>
                  <span className="text-muted-foreground tabular-nums">
                    {q.progress}/{q.target}
                  </span>
                </div>
                <Progress value={(q.progress / q.target) * 100} className="h-1.5" />
              </div>
            ))}
            {!overview?.quests.length && <p className="text-xs text-muted-foreground">Chưa có nhiệm vụ nào.</p>}
          </div>
        </div>

        {/* Review due */}
        <button
          onClick={() => navigate('/review')}
          className="rounded-2xl border bg-card p-4 text-left hover:border-primary/40 hover:shadow-md transition-all group"
        >
          <h3 className="font-bold text-sm flex items-center gap-1.5 mb-2">
            <RefreshCw className="h-4 w-4 text-primary" aria-hidden /> Ôn tập hôm nay
          </h3>
          <p className="text-2xl font-extrabold tabular-nums text-primary">{overview?.review.dueCount ?? 0}</p>
          <p className="text-xs text-muted-foreground">mục đến hạn ôn · bấm để bắt đầu</p>
        </button>

        {/* Streak mini */}
        <div className="rounded-2xl border bg-card p-4">
          <h3 className="font-bold text-sm flex items-center gap-1.5 mb-2.5">
            <Flame className="h-4 w-4 text-warning" aria-hidden /> Chuỗi 7 ngày
          </h3>
          <div className="flex justify-between">
            {overview?.streakWeek.map((d) => (
              <div key={d.date} className="flex flex-col items-center gap-1" title={`${d.date}: ${d.xp} XP`}>
                <div
                  className={cn(
                    'h-7 w-7 rounded-lg flex items-center justify-center text-[10px] font-bold',
                    d.met ? 'bg-warning/20 text-warning' : d.xp > 0 ? 'bg-muted text-muted-foreground' : 'bg-muted/50 text-muted-foreground/50'
                  )}
                >
                  {d.date.slice(-2)}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-2.5 text-center">
            {overview?.streak.goalMetToday ? 'Đã đạt mục tiêu hôm nay — すごい!' : `Còn ${Math.max(0, (overview?.streak.dailyGoalXP ?? 20) - (overview?.streak.todayXP ?? 0))} XP nữa để giữ chuỗi`}
          </p>
          {(overview?.streak.freezeCount ?? 0) > 0 && (
            <p className="mt-1.5 text-center text-[11px] font-semibold text-primary inline-flex items-center gap-1 justify-center w-full">
              <Snowflake className="h-3 w-3" aria-hidden /> Bảo vệ chuỗi: {overview?.streak.freezeCount}/{overview?.streak.freezeMax ?? 2}
            </p>
          )}
        </div>

        {/* Leaderboard mini */}
        <button
          onClick={() => navigate('/leaderboard')}
          className="rounded-2xl border bg-card p-4 text-left hover:border-primary/40 hover:shadow-md transition-all"
        >
          <h3 className="font-bold text-sm flex items-center gap-1.5 mb-2">
            <Trophy className="h-4 w-4 text-warning" aria-hidden /> Xếp hạng tuần
          </h3>
          <div className="flex items-center gap-2">
            <LeagueBadge league={overview?.stats.league ?? 'SAKURA'} showName />
            <XPBadge xp={overview?.stats.weeklyXP ?? 0} className="ml-auto" />
          </div>
          <p className="text-xs text-muted-foreground mt-2">XP tuần của bạn · bấm để xem bảng xếp hạng</p>
        </button>
      </aside>
    </div>
  )
}

/* ------------------------------ Helpers: section ---------------------------- */

/** Phần chứa bài hiện tại (currentLessonId) — fallback: phần cuối cùng. Không dùng hook. */
function autoSectionOrder(data: LearnDTO): number {
  const sections = [...data.sections].sort((a, b) => a.order - b.order)
  for (const s of sections) {
    if (s.lessons.some((l) => l.id === data.stats.currentLessonId)) return s.order
  }
  return sections[sections.length - 1]?.order ?? 0
}

/** Bài đang "mở" trong một phần: bài đầu tiên chưa COMPLETED. */
function firstIncompleteIdx(lessons: LessonDTO[]): number {
  return lessons.findIndex((l) => l.state !== 'COMPLETED')
}

/* ------------------------------ Course selector ----------------------------- */

function CourseSelector({
  current,
  courses,
  onSelect,
}: {
  current: LearnDTO['course']
  courses: CourseListItemDTO[]
  onSelect: (slug: string) => void
}) {
  const badge = (c: { titleJa: string | null }) => (c.titleJa ? Array.from(c.titleJa).slice(0, 2).join('') : '日')
  return (
    <div className="flex items-center gap-3 mb-5">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="group inline-flex items-center gap-3 h-14 rounded-2xl border-2 border-border bg-card pr-4 pl-2.5 text-left transition-all hover:border-primary/40 hover:shadow-md outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Chọn khóa học"
          >
            <span className="h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br from-primary/20 to-sakura/20 border border-primary/20 flex items-center justify-center jp text-lg font-black text-primary" aria-hidden>
              {badge(current)}
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-extrabold leading-tight truncate">{current.title}</span>
              <span className="block text-[11px] text-muted-foreground truncate">
                {current.titleJa ? `${current.titleJa} · ` : ''}
                {courses.find((c) => c.slug === current.slug)?.lessonCount ?? '—'} bài học
              </span>
            </span>
            <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" aria-hidden />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-72">
          <DropdownMenuLabel className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Khóa học của tôi
          </DropdownMenuLabel>
          {courses.map((c) => {
            const active = c.slug === current.slug
            return (
              <DropdownMenuItem
                key={c.id}
                onSelect={() => {
                  if (!active) onSelect(c.slug)
                }}
                className={cn('gap-3 py-2.5', active && 'bg-primary/5')}
                aria-current={active ? 'true' : undefined}
              >
                <span
                  className={cn(
                    'h-9 w-9 shrink-0 rounded-xl border flex items-center justify-center jp text-base font-black',
                    active ? 'bg-primary/15 border-primary/30 text-primary' : 'bg-muted border-border text-muted-foreground'
                  )}
                  aria-hidden
                >
                  {badge(c)}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold truncate">{c.title}</span>
                  <span className="block text-[11px] text-muted-foreground">
                    {c.titleJa ? `${c.titleJa} · ` : ''}
                    {c.lessonCount} bài
                  </span>
                </span>
                {active && <Check className="h-4 w-4 text-primary shrink-0" aria-hidden />}
              </DropdownMenuItem>
            )
          })}
          <DropdownMenuSeparator />
          <p className="px-3 py-2 text-[11px] leading-relaxed text-muted-foreground">
            Tiến độ được lưu riêng cho từng khóa học.
          </p>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-bold text-muted-foreground uppercase tracking-wider ml-auto">
        <MapIcon className="h-3.5 w-3.5" aria-hidden />
        Lộ trình
      </div>
    </div>
  )
}

/* ------------------------------ Section chips ------------------------------- */

function SectionChips({
  sections,
  activeOrder,
  autoOrder,
  onSelect,
}: {
  sections: SectionDTO[]
  activeOrder: number
  autoOrder: number
  onSelect: (order: number) => void
}) {
  return (
    <div
      className="flex gap-2 overflow-x-auto pb-2 mb-4 -mx-1 px-1 [scrollbar-width:thin] lg:flex-wrap lg:overflow-visible"
      role="tablist"
      aria-label="Chọn phần học"
    >
      {sections.map((s) => {
        const done = s.lessons.length > 0 && s.lessons.every((l) => l.state === 'COMPLETED')
        const isAuto = s.order === autoOrder
        const active = s.order === activeOrder
        return (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onSelect(s.order)}
            title={s.description}
            className={cn(
              'inline-flex shrink-0 items-center gap-1.5 h-9 rounded-full border px-3.5 text-xs font-bold transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring',
              active
                ? 'bg-primary text-primary-foreground border-primary shadow-md shadow-primary/25'
                : done
                  ? 'bg-success/10 text-success border-success/40 hover:bg-success/20'
                  : 'bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground',
            )}
          >
            {done ? (
              <Check className="h-3.5 w-3.5" aria-hidden />
            ) : isAuto ? (
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-warning" />
              </span>
            ) : (
              <Lock className="h-3 w-3 opacity-60" aria-hidden />
            )}
            Phần {s.order + 1}
            <span className={cn('truncate max-w-[110px] hidden sm:inline', active ? 'opacity-90' : 'opacity-70')}>
              · {s.title}
            </span>
          </button>
        )
      })}
    </div>
  )
}

/* ------------------------------ Section banner ------------------------------ */

function SectionBanner({ section, totalStats }: { section: SectionDTO; totalStats: LearnDTO['stats'] }) {
  const totalLessons = section.lessons.length
  const doneLessons = section.lessons.filter((l) => l.state === 'COMPLETED').length
  const pct = totalLessons === 0 ? 0 : Math.round((doneLessons / totalLessons) * 100)
  return (
    <div
      id="section-banner"
      className="relative rounded-3xl bg-primary text-primary-foreground p-5 sm:p-6 mb-6 shadow-lg shadow-primary/25 overflow-hidden scroll-mt-24"
    >
      <div className="absolute -right-4 -top-10 text-[130px] leading-none jp font-black opacity-[0.12] select-none" aria-hidden>
        {section.titleJa}
      </div>
      <div className="relative">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-widest opacity-85">
          <span>Phần {section.order + 1}</span>
          <span aria-hidden>·</span>
          <span>{doneLessons}/{totalLessons} bài</span>
          {pct === 100 && (
            <span className="rounded-full bg-white/20 px-2 py-0.5">Hoàn thành!</span>
          )}
        </div>
        <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight mt-1">{section.title}</h1>
        <p className="text-xs sm:text-sm opacity-85 mt-0.5 max-w-lg">{section.description}</p>
        <div className="mt-3 max-w-md">
          <Progress value={pct} className="h-2.5 bg-white/25" />
          <p className="text-[10px] font-semibold opacity-75 mt-1.5">
            {pct}% phần này · toàn khóa: {totalStats.lessonsCompleted}/{totalStats.totalLessons} bài
          </p>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------ Section lessons ------------------------------ */

function SectionLessons({
  section,
  celebrateNodeId,
  onOpenNode,
  onNodeInfo,
  onJump,
}: {
  section: SectionDTO
  celebrateNodeId: string | null
  onOpenNode: (n: NodeDTO) => void
  onNodeInfo: (lessonId: string) => void
  onJump: (lesson: LessonDTO) => void
}) {
  const lessons = section.lessons
  const activeIdx = firstIncompleteIdx(lessons)

  return (
    <div>
      {lessons.map((lesson, i) => {
        if (lesson.state === 'COMPLETED') {
          // Bài đã xong — dải chip thu gọn (bấm để mở rộng ôn lại)
          return (
            <LessonBlock
              key={lesson.id}
              lesson={lesson}
              variant="collapsed"
              celebrateNodeId={celebrateNodeId}
              onOpenNode={onOpenNode}
              onNodeInfo={() => onNodeInfo(lesson.id)}
              onJump={onJump}
            />
          )
        }
        if (i === activeIdx) {
          // Bài đang học — banner + đường zigzag đầy đủ
          return (
            <LessonBlock
              key={lesson.id}
              lesson={lesson}
              variant="active"
              celebrateNodeId={celebrateNodeId}
              onOpenNode={onOpenNode}
              onNodeInfo={() => onNodeInfo(lesson.id)}
              onJump={onJump}
            />
          )
        }
        if (i === activeIdx + 1) {
          // Bài kế tiếp — thẻ teaser + "Nhảy tới đây?" (Duolingo jump here)
          return (
            <LessonBlock
              key={lesson.id}
              lesson={lesson}
              variant="teaser"
              celebrateNodeId={celebrateNodeId}
              onOpenNode={onOpenNode}
              onNodeInfo={() => onNodeInfo(lesson.id)}
              onJump={onJump}
            />
          )
        }
        return null // ẩn hoàn toàn — lộ trình mở dần theo tiến độ
      })}

      {/* Đuôi phần: các bài chưa mở */}
      <UpcomingTail count={Math.max(0, lessons.length - activeIdx - 2)} />
    </div>
  )
}

/* ------------------------------ Upcoming tail ------------------------------- */

function UpcomingTail({ count }: { count: number }) {
  if (count <= 0) return null
  return (
    <div className="mt-4 mb-2 flex flex-col items-center gap-1.5 py-4 px-4 rounded-2xl border-2 border-dashed border-border/80 bg-muted/20 text-center">
      <Lock className="h-4 w-4 text-muted-foreground" aria-hidden />
      <p className="text-xs font-bold text-muted-foreground">
        {count} bài phía sau chưa mở
      </p>
      <p className="text-[11px] text-muted-foreground/80">
        Hoàn thành bài hiện tại để dần dần mở lộ trình — kiểu leo núi, từng bước một!
      </p>
    </div>
  )
}

/* ------------------------------ Next section card --------------------------- */

function NextSectionCard({
  section,
  onGoto,
  onJumpFirst,
}: {
  section: SectionDTO
  onGoto: () => void
  onJumpFirst: (lesson: LessonDTO) => void
}) {
  const firstLesson = section.lessons[0]
  const canJump =
    !!firstLesson &&
    firstLesson.state === 'LOCKED' &&
    firstLesson.nodes.some((n) => n.status === 'PUBLISHED' && n.exerciseCount > 0)
  return (
    <div className="mt-6 rounded-3xl border-2 border-dashed border-primary/30 bg-gradient-to-b from-primary/[0.07] to-transparent p-5 sm:p-6 text-center relative overflow-hidden">
      <div className="absolute -left-3 -bottom-8 text-[100px] leading-none jp font-black text-primary/5 select-none" aria-hidden>
        {section.titleJa}
      </div>
      <div className="relative">
        <p className="text-[11px] font-extrabold uppercase tracking-widest text-primary">Phần tiếp theo</p>
        <h2 className="text-lg sm:text-xl font-extrabold mt-1">
          Phần {section.order + 1} · {section.title}
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-md mx-auto">{section.description}</p>
        <div className="flex flex-wrap justify-center gap-2.5 mt-4">
          <Button onClick={onGoto} className="rounded-2xl h-11 px-5 font-bold">
            Xem lộ trình phần này
            <ChevronRight className="h-4 w-4" aria-hidden />
          </Button>
          {canJump && (
            <Button
              variant="outline"
              onClick={() => onJumpFirst(firstLesson)}
              className="rounded-2xl h-11 px-5 font-bold border-sakura/50 text-sakura hover:bg-sakura hover:text-sakura-foreground"
            >
              <Rocket className="h-4 w-4" aria-hidden />
              Nhảy tới phần này?
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------ Course end card ----------------------------- */

function CourseEndCard({ stats, onRestart }: { stats: LearnDTO['stats']; onRestart: () => void }) {
  const allDone = stats.lessonsCompleted >= stats.totalLessons
  return (
    <div className="mt-6 rounded-3xl border bg-gradient-to-br from-warning/10 via-card to-sakura/10 p-6 text-center relative overflow-hidden">
      <div className="absolute -right-4 -top-8 text-[110px] leading-none jp font-black text-warning/10 select-none" aria-hidden>
        終
      </div>
      <div className="relative">
        <Trophy className="h-10 w-10 mx-auto text-warning" aria-hidden />
        <h2 className="text-lg sm:text-xl font-extrabold mt-2">
          {allDone ? 'Bạn đã hoàn thành toàn bộ khóa học!' : 'Bạn đã đến phần cuối của khóa học'}
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-md mx-auto">
          {allDone
            ? 'すごい! Hãy ôn tập để giữ kiến thức luôn sắc bén — hoặc chuyển sang khóa học khác.'
            : `Đã hoàn thành ${stats.lessonsCompleted}/${stats.totalLessons} bài. Hoàn thành nốt phần này để chinh phục cả khóa!`}
        </p>
        <div className="flex flex-wrap justify-center gap-2.5 mt-4">
          <Button onClick={onRestart} variant="outline" className="rounded-2xl h-11 px-5 font-bold">
            <ArrowRight className="h-4 w-4" aria-hidden />
            Xem lại lộ trình từ đầu
          </Button>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------- Lesson block ------------------------------- */

function LessonBlock({
  lesson,
  variant,
  celebrateNodeId,
  onOpenNode,
  onNodeInfo,
  onJump,
}: {
  lesson: LessonDTO
  variant: 'collapsed' | 'active' | 'teaser'
  celebrateNodeId: string | null
  onOpenNode: (n: NodeDTO) => void
  onNodeInfo: () => void
  onJump: (lesson: LessonDTO) => void
}) {
  const isDraft = lesson.nodes.length > 0 && lesson.nodes.every((n) => n.status === 'DRAFT')
  // Bài đang khóa nhưng đã có nội dung xuất bản → cho phép kiểm tra bỏ qua
  const canJump =
    lesson.state === 'LOCKED' && !isDraft && lesson.nodes.some((n) => n.status === 'PUBLISHED' && n.exerciseCount > 0)

  if (variant === 'teaser') {
    return (
      <div className="mt-5 mb-2">
        <div className="rounded-2xl border-2 bg-card/70 p-4 flex items-center gap-4">
          <div className="h-12 w-12 shrink-0 rounded-2xl bg-muted border border-border flex items-center justify-center text-muted-foreground" aria-hidden>
            <Lock className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">Bài kế tiếp</p>
              {isDraft && (
                <span className="text-[10px] font-bold rounded-full bg-muted px-2 py-0.5 text-muted-foreground inline-flex items-center gap-1">
                  <Sparkles className="h-3 w-3" /> Đang biên soạn
                </span>
              )}
            </div>
            <h3 className="font-extrabold tracking-tight truncate">
              Bài {lesson.order} · <span className="jp text-muted-foreground font-bold">{lesson.titleJa}</span>
            </h3>
            <p className="text-xs text-muted-foreground truncate">{lesson.title} · {lesson.totalNodes} ải</p>
          </div>
          {canJump && (
            <button
              onClick={() => onJump(lesson)}
              className="group shrink-0 inline-flex items-center gap-1.5 rounded-full border-2 border-sakura/50 bg-sakura/10 px-3.5 py-2 text-[11px] font-extrabold uppercase tracking-wider text-sakura transition-all hover:bg-sakura hover:text-sakura-foreground hover:shadow-lg hover:shadow-sakura/30 hover:-translate-y-0.5 active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`Bỏ qua tới bài ${lesson.order}: ${lesson.title} — làm bài kiểm tra để mở khóa`}
            >
              <Rocket className="h-3.5 w-3.5 transition-transform group-hover:rotate-12" aria-hidden />
              Nhảy tới đây?
            </button>
          )}
        </div>
      </div>
    )
  }

  if (variant === 'collapsed') {
    return <CollapsedLesson lesson={lesson} celebrateNodeId={celebrateNodeId} onOpenNode={onOpenNode} onNodeInfo={onNodeInfo} />
  }

  /* variant === 'active' */
  return (
    <div className="mb-6">
      {/* Lesson banner — header của bài đang học */}
      <button
        onClick={onNodeInfo}
        className="w-full rounded-2xl border-2 border-primary/40 bg-card p-4 mb-2 text-left transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring hover:shadow-md shadow-sm"
      >
        <div className="flex items-center gap-3.5">
          <div className="h-12 w-12 shrink-0 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-extrabold text-lg" aria-hidden>
            {lesson.order}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-extrabold tracking-tight">Bài {lesson.order}</h3>
              <span className="jp text-sm text-muted-foreground truncate">{lesson.titleJa}</span>
            </div>
            <p className="text-xs text-muted-foreground truncate mt-0.5">{lesson.title}</p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-xs font-bold tabular-nums">
              {lesson.completedNodes}/{lesson.totalNodes}
            </p>
            <p className="text-[10px] text-muted-foreground">ải</p>
          </div>
        </div>
        {lesson.totalNodes > 0 && (
          <Progress value={(lesson.completedNodes / lesson.totalNodes) * 100} className="h-1.5 mt-3" />
        )}
      </button>

      {/* Đường zigzag các ải — kiểu Duolingo */}
      <ZigzagLessonPath nodes={lesson.nodes} celebrateNodeId={celebrateNodeId} onOpenNode={onOpenNode} />
    </div>
  )
}

/* ------------------------------ Collapsed lesson ---------------------------- */

function CollapsedLesson({
  lesson,
  celebrateNodeId,
  onOpenNode,
  onNodeInfo,
}: {
  lesson: LessonDTO
  celebrateNodeId: string | null
  onOpenNode: (n: NodeDTO) => void
  onNodeInfo: () => void
}) {
  const [expanded, setExpanded] = useState(false)
  const hasCelebrate = lesson.nodes.some((n) => n.id === celebrateNodeId)
  const showNodes = expanded || hasCelebrate

  if (showNodes) {
    return (
      <div className="mb-2">
        <button
          onClick={onNodeInfo}
          className="w-full rounded-2xl border-2 border-success/50 bg-success/5 p-3.5 mb-2 text-left transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring hover:shadow-md"
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 shrink-0 rounded-xl bg-success text-white flex items-center justify-center" aria-hidden>
              <Check className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-extrabold text-sm tracking-tight">
                Bài {lesson.order} <span className="jp text-muted-foreground font-bold">{lesson.titleJa}</span>
              </h3>
              <p className="text-[11px] text-muted-foreground truncate">{lesson.title}</p>
            </div>
            <span className="text-[10px] font-bold rounded-full bg-success/15 text-success px-2 py-0.5 shrink-0">
              Hoàn thành
            </span>
          </div>
        </button>
        <ZigzagLessonPath nodes={lesson.nodes} celebrateNodeId={celebrateNodeId} onOpenNode={onOpenNode} />
        <div className="flex justify-center mt-1">
          <button
            onClick={() => setExpanded(false)}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-expanded="true"
          >
            <ChevronUp className="h-3.5 w-3.5" aria-hidden /> Thu gọn
          </button>
        </div>
      </div>
    )
  }

  return (
    <button
      onClick={() => setExpanded(true)}
      className="group w-full mb-2 rounded-2xl border-2 border-dashed border-success/40 bg-success/[0.04] px-4 py-3 transition-all hover:border-success/60 hover:bg-success/10 outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-expanded="false"
      aria-label={`Mở rộng ${lesson.totalNodes} ải của bài ${lesson.order}: ${lesson.title}`}
    >
      <div className="flex items-center justify-center gap-1.5 flex-wrap">
        {lesson.nodes.map((n) => {
          const mastered = n.state === 'MASTERED'
          return (
            <span
              key={n.id}
              title={n.title + (mastered ? ' (Thành thạo)' : ' (Hoàn thành)')}
              className={cn(
                'h-6 w-6 rounded-full flex items-center justify-center border transition-transform group-hover:scale-110',
                mastered
                  ? 'bg-warning/15 border-warning/50 text-warning'
                  : 'bg-success/15 border-success/50 text-success'
              )}
            >
              {mastered ? <Star className="h-3 w-3" aria-hidden /> : <Check className="h-3 w-3" aria-hidden />}
            </span>
          )
        })}
      </div>
      <p className="text-center text-[11px] font-semibold text-muted-foreground mt-2 group-hover:text-foreground transition-colors">
        Bài {lesson.order} hoàn thành · bấm để mở rộng {lesson.totalNodes} ải ôn lại
      </p>
    </button>
  )
}

/* ---------------------------- Zigzag lesson path ---------------------------- */

/** Nhịp so le (Duolingo): giữa → trái → giữa → phải → lặp lại. */
const ZIGZAG_PATTERN = [0, -1, 0, 1] as const
/** Chiều cao mỗi hàng node (px) — nhịp dọc của con đường. */
const ROW_H = 118
/** Tâm nút bấm trong hàng (px): hàng flex items-center → cột (nút + nhãn)
 *  được căn dọc giữa, tâm nút ≈ 43px từ mép trên hàng (đã đo thực tế). */
const NODE_CY = 43

function zigzagOffset(i: number, width: number): number {
  const dir = ZIGZAG_PATTERN[i % ZIGZAG_PATTERN.length]!
  if (dir === 0) return 0
  const amp = Math.min(0.22 * width, 150) // không vượt ra mép trên màn hẹp
  return dir * amp
}

function ZigzagLessonPath({
  nodes,
  celebrateNodeId,
  onOpenNode,
}: {
  nodes: NodeDTO[]
  celebrateNodeId: string | null
  onOpenNode: (n: NodeDTO) => void
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      for (const e of entries) setWidth(e.contentRect.width)
    })
    ro.observe(el)
    setWidth(el.clientWidth)
    return () => ro.disconnect()
  }, [])

  const height = nodes.length * ROW_H

  // Đường cong nối tâm các node liên tiếp (bezier mượt như Duolingo)
  const pathD = useMemo(() => {
    if (width <= 0 || nodes.length < 2) return null
    const cx = (i: number) => width / 2 + zigzagOffset(i, width)
    const cy = (i: number) => i * ROW_H + NODE_CY
    let d = `M ${cx(0)} ${cy(0)}`
    for (let i = 1; i < nodes.length; i++) {
      const x0 = cx(i - 1), y0 = cy(i - 1)
      const x1 = cx(i), y1 = cy(i)
      const my = (y0 + y1) / 2
      d += ` C ${x0} ${my}, ${x1} ${my}, ${x1} ${y1}`
    }
    return d
  }, [width, nodes.length])

  // Rương báu vật nằm ngay trên con đường — mốc nửa bài (kiểu Duolingo
  // treasure chest). Mở khi ải ngay sau rương đã hoàn thành.
  const chest = useMemo(() => {
    if (width <= 0 || nodes.length < 4) return null
    const idx = Math.floor(nodes.length / 2)
    const cx = (i: number) => width / 2 + zigzagOffset(i, width)
    const cy = (i: number) => i * ROW_H + NODE_CY
    const x = (cx(idx - 1) + cx(idx)) / 2
    const y = (cy(idx - 1) + cy(idx)) / 2
    const after = nodes[idx]
    const open = !!after && (after.state === 'COMPLETED' || after.state === 'MASTERED')
    return { x, y, open, hint: after ? after.title : '' }
  }, [width, nodes])

  if (nodes.length === 0) {
    return <p className="text-xs text-muted-foreground py-3 text-center">Nội dung sắp ra mắt</p>
  }

  return (
    <div ref={containerRef} className="relative" style={{ height }}>
      {/* Đường đi mờ phía sau các node */}
      {pathD && (
        <svg
          className="absolute inset-0 pointer-events-none animate-path-fade"
          width={width || undefined}
          height={height}
          viewBox={`0 0 ${Math.max(width, 1)} ${height}`}
          fill="none"
          aria-hidden
        >
          <path
            d={pathD}
            stroke="var(--muted-foreground)"
            strokeOpacity={0.35}
            strokeWidth={7}
            strokeLinecap="round"
            strokeDasharray="1 14"
          />
        </svg>
      )}

      {/* Các node so le — xuất hiện dần theo nhịp khi tải */}
      <div className="absolute inset-0">
        {nodes.map((node, i) => (
          <div
            key={node.id}
            className="absolute left-0 right-0 flex items-center justify-center animate-node-enter"
            style={{ top: i * ROW_H, height: ROW_H, '--node-i': i } as CSSProperties}
          >
            <div
              className="flex flex-col items-center"
              style={{ transform: `translateX(${width > 0 ? zigzagOffset(i, width) : 0}px)` }}
            >
              <PathNode
                node={node}
                dir={ZIGZAG_PATTERN[i % ZIGZAG_PATTERN.length]!}
                celebrate={celebrateNodeId === node.id}
                onOpen={onOpenNode}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Rương báu vật — nằm ngay trên con đường giữa hai ải */}
      {chest && (
        <div className="absolute z-[2]" style={{ left: chest.x - 20, top: chest.y - 18 }}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                className="block rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={
                  chest.open
                    ? 'Rương báu vật đã mở'
                    : `Rương báu vật — hoàn thành ải ${chest.hint} để mở`
                }
              >
                <span className={cn('block', !chest.open && 'animate-mascot-idle')}>
                  <PathChest open={chest.open} />
                </span>
              </button>
            </TooltipTrigger>
            <TooltipContent side={chest.x > width / 2 ? 'left' : 'right'} className="max-w-[210px]">
              <p className="font-extrabold text-[13px] leading-tight">Rương báu vật</p>
              <p className="mt-0.5 opacity-90">
                {chest.open ? 'Đã mở — すごい!' : `Mở bằng cách hoàn thành ải “${chest.hint}”.`}
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
      )}
    </div>
  )
}

/* --------------------------------- Path node -------------------------------- */

function PathNode({
  node,
  dir,
  celebrate,
  onOpen,
}: {
  node: NodeDTO
  dir: number
  celebrate: boolean
  onOpen: (n: NodeDTO) => void
}) {
  const [showMenu, setShowMenu] = useState(false)
  const isLocked = node.state === 'LOCKED' || node.exerciseCount === 0
  const isDone = node.state === 'COMPLETED' || node.state === 'MASTERED'
  const isBoss = node.nodeType === 'BOSS'

  const stateCls = isLocked
    ? 'bg-muted text-muted-foreground border border-border node-3d node-3d-locked'
    : node.state === 'AVAILABLE' || node.state === 'IN_PROGRESS'
      ? 'bg-primary text-primary-foreground border-2 border-primary/60 node-3d node-3d-primary'
      : node.state === 'MASTERED'
        ? 'bg-warning text-white border-2 border-warning/60 node-3d node-3d-warning'
        : 'bg-success text-white border-2 border-success/60 node-3d node-3d-success'

  const isCurrent = node.state === 'AVAILABLE' || node.state === 'IN_PROGRESS'

  const stateLabel = isLocked
    ? (node.status === 'DRAFT' ? 'Đang biên soạn' : 'Hoàn thành ải trước để mở khóa')
    : isDone
      ? `${node.state === 'MASTERED' ? 'Thành thạo' : 'Đã hoàn thành'} · điểm cao nhất ${node.bestScore}%`
      : 'Sẵn sàng bắt đầu'

  return (
    <div className="relative group flex flex-col items-center">
      {/* Vỏ bọc vừa khít NÚT BẤM — mọi trang trí (bong bóng, mascot, chip BOSS,
          ring trùm, menu) neo vào đây để bám sát nút chứ không bám nhãn */}
      <span
        className={cn(
          'relative flex flex-col items-center',
          // Ải trùm (BOSS) — to hơn + viền vàng nét đứt ôm đúng nút
          isBoss && 'p-1.5 rounded-full border-2 border-dashed border-warning/60',
        )}
      >
      {/* Pháo giấy ăn mừng ải vừa thành thạo (cấp vàng) */}
      {celebrate && <NodeConfetti />}

      {/* Chip BOSS — nhãn ải trùm */}
      {isBoss && !isCurrent && (
        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-10 rounded-full bg-warning text-white text-[9px] font-black uppercase tracking-[0.14em] px-2 py-[3px] shadow-sm pointer-events-none">
          Boss
        </span>
      )}

      {/* Mascot Shiba ngồi cạnh ải hiện tại (kiểu Duolingo) */}
      {isCurrent && (
        <Image
          src="/images/mascot-study.png"
          alt=""
          width={64}
          height={64}
          aria-hidden
          className={cn(
            'pointer-events-none select-none absolute top-0 h-14 w-14 sm:h-16 sm:w-16 object-contain drop-shadow-md animate-mascot-idle',
            dir <= 0 ? 'left-full ml-1' : 'right-full mr-1',
          )}
        />
      )}

      {/* Bong bóng BẮT ĐẦU kiểu Duolingo */}
      {isCurrent && (
        <div className="absolute -top-11 left-1/2 -translate-x-1/2 z-10 animate-bubble-bounce" aria-hidden>
          <span className="relative block rounded-xl bg-primary text-primary-foreground text-[11px] font-extrabold uppercase tracking-wider px-3 py-1.5 whitespace-nowrap shadow-md">
            Bắt đầu
            <span className="absolute left-1/2 -bottom-[5px] -translate-x-1/2 h-2.5 w-2.5 bg-primary rotate-45 rounded-[3px]" />
          </span>
        </div>
      )}
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={() => {
              if (isLocked) return
              if (isDone) {
                setShowMenu((v) => !v)
              } else {
                onOpen(node)
              }
            }}
            disabled={isLocked}
            aria-label={`${node.title} — ${isLocked ? 'đang khóa' : isDone ? 'đã hoàn thành' : 'sẵn sàng'}`}
            className={cn(
              'relative rounded-full flex flex-col items-center justify-center transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring',
              isBoss ? 'h-20 w-20 sm:h-24 sm:w-24' : 'h-[4.5rem] w-[4.5rem] sm:h-20 sm:w-20',
              stateCls,
              celebrate && 'animate-pop-in ring-4 ring-warning/40',
              !isLocked && 'hover:scale-110 active:scale-95',
              isLocked && 'cursor-not-allowed',
            )}
          >
            {isLocked ? (
              <Lock className="h-6 w-6" aria-hidden />
            ) : isDone ? (
              <Check className="h-8 w-8" strokeWidth={3.5} aria-hidden />
            ) : (
              <DynamicIcon name={node.icon} className={isBoss ? 'h-10 w-10' : 'h-8 w-8'} />
            )}
            {node.state === 'MASTERED' && (
              <Star className="absolute -top-1 -right-1 h-5 w-5 fill-white text-warning" aria-hidden />
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent side={dir <= 0 ? 'left' : 'right'} className="max-w-[220px] px-3 py-2">
          <p className="font-extrabold text-[13px] leading-tight">{node.title}</p>
          {isBoss && (
            <p className="mt-0.5 text-[10px] font-black uppercase tracking-widest opacity-80">Ải trùm cuối bài</p>
          )}
          <p className="mt-0.5 opacity-90">{stateLabel}</p>
          {!isLocked && node.exerciseCount > 0 && (
            <p className="mt-1 opacity-80 text-[11px]">+{node.xpReward} XP · {node.exerciseCount} câu</p>
          )}
        </TooltipContent>
      </Tooltip>

      {/* Menu replay cho node hoàn thành */}
      {showMenu && isDone && (
        <div className="absolute z-20 left-1/2 -translate-x-1/2 top-full mt-1 w-44 rounded-xl border bg-popover shadow-lg p-1.5">
          <button
            onClick={() => {
              setShowMenu(false)
              onOpen(node)
            }}
            className="w-full text-left rounded-lg px-3 py-2 text-sm font-semibold hover:bg-muted outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Star className="inline h-4 w-4 mr-1.5 -mt-0.5" aria-hidden /> Học lại ({node.bestScore}%)
          </button>
          <a
            href={`#/lesson/${node.id}/practice`}
            className="w-full text-left rounded-lg px-3 py-2 text-sm font-semibold hover:bg-muted outline-none focus-visible:ring-2 focus-visible:ring-ring block"
            onClick={() => setShowMenu(false)}
          >
            <Heart className="inline h-4 w-4 mr-1.5 -mt-0.5" aria-hidden /> Luyện tập (không mất tim)
          </a>
        </div>
      )}
      </span>

      {/* Nhãn dưới node — luôn hiển thị; cao cố định để tâm nút ổn định (NODE_CY) */}
      <div className="mt-1.5 w-[120px] sm:w-[150px] min-h-[28px] text-center pointer-events-none">
        <p className={cn('text-[10px] sm:text-[11px] font-bold leading-tight line-clamp-2', isLocked && 'text-muted-foreground')}>
          {node.title}
        </p>
      </div>
    </div>
  )
}

/* --------------------------- Rương báu giữa lộ trình -------------------------- */

/** Rương báu vật nhỏ nằm trên con đường (mốc nửa bài, mở theo tiến độ). */
function PathChest({ open }: { open: boolean }) {
  return (
    <span className="relative block h-9 w-10" aria-hidden>
      {/* Thân rương */}
      <span
        className={cn(
          'absolute bottom-0 left-0 right-0 h-[21px] rounded-b-[7px] border-2 border-[#7c4a21] shadow-sm transition-colors duration-500',
          open ? 'bg-[#a16207]' : 'bg-[#92500f]',
        )}
      />
      {/* Nắp rương — hé mở khi đã mở */}
      <span
        className={cn(
          'absolute left-[-2px] right-[-2px] top-0 h-[13px] rounded-t-[9px] border-2 border-[#7c4a21] bg-[#b45309] shadow-sm origin-bottom transition-transform duration-500',
          open && '-rotate-[28deg] -translate-y-1',
        )}
      />
      {/* Khóa vàng — biến mất khi mở */}
      <span
        className={cn(
          'absolute left-1/2 top-[11px] h-3 w-2.5 -translate-x-1/2 rounded-[3px] bg-warning border border-[#7c4a21]/60 transition-opacity duration-300',
          open && 'opacity-0',
        )}
      />
      {/* Hào quang + tia lấp lánh khi đã mở */}
      {open && (
        <>
          <span className="absolute -inset-1.5 rounded-full bg-warning/25 blur-md" />
          <Sparkles className="absolute -top-2 -right-2 h-3.5 w-3.5 text-warning animate-pulse" />
          <Sparkles className="absolute -bottom-1 -left-2 h-3 w-3 text-warning/80 animate-pulse [animation-delay:600ms]" />
        </>
      )}
    </span>
  )
}

/* --------------------------- Confetti ăn mừng node -------------------------- */

const NODE_CONFETTI_COLORS = ['var(--primary)', 'var(--sakura)', 'var(--success)', 'var(--warning)', 'var(--destructive)']

function NodeConfetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 1.4 + Math.random() * 1.2,
        size: 4 + Math.random() * 5,
        color: NODE_CONFETTI_COLORS[i % NODE_CONFETTI_COLORS.length]!,
        rotate: Math.floor(Math.random() * 360),
        round: Math.random() > 0.6,
      })),
    []
  )
  return (
    <div className="pointer-events-none absolute -inset-8 z-20 overflow-visible" aria-hidden>
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
            transform: `rotate(${p.rotate}deg)`,
          }}
        />
      ))}
    </div>
  )
}

/* ------------------------------ Từ của ngày -------------------------------- */

function WordOfDayCard({ onNavigateVocab }: { onNavigateVocab: () => void }) {
  const { data } = useQuery({
    queryKey: ['daily-word'],
    queryFn: () => api<{ word: DailyWordDTO | null }>('/api/daily-word'),
    staleTime: 10 * 60 * 1000,
  })
  const word = data?.word
  if (!word) return null

  const dateLabel = new Date(`${word.date}T00:00:00`).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' })

  return (
    <div className="rounded-2xl border bg-gradient-to-br from-sakura/10 via-card to-primary/10 p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-sm flex items-center gap-1.5">
          <CalendarDays className="h-4 w-4 text-sakura" aria-hidden /> Từ của ngày
        </h3>
        <span className="text-[10px] font-bold text-muted-foreground tabular-nums">{dateLabel}</span>
      </div>

      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="jp jp-serif text-3xl sm:text-4xl font-bold leading-tight break-words">{word.term}</p>
          <p className="jp text-sm text-muted-foreground mt-0.5 truncate">
            {word.reading ? `${word.reading} · ` : ''}{word.romaji}
          </p>
        </div>
        <AudioButton text={word.term} size="sm" className="shrink-0 mt-1" />
      </div>

      <div className="mt-2.5 flex items-center gap-2 flex-wrap">
        <p className="font-bold text-sm">{word.meaningVi}</p>
        {word.pos && (
          <span className="text-[10px] font-bold uppercase tracking-wide rounded-full bg-primary/10 text-primary px-2 py-0.5">
            {word.pos}
          </span>
        )}
      </div>

      <div className="mt-3 rounded-xl bg-background/60 border border-border/60 p-2.5">
        <p className="jp text-sm font-semibold leading-relaxed">{word.exampleJa}</p>
        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{word.exampleVi}</p>
      </div>

      <button
        onClick={onNavigateVocab}
        className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
      >
        <BookMarked className="h-3.5 w-3.5" aria-hidden />
        {word.lessonTitle ? `Từ vựng: ${word.lessonTitle}` : 'Xem kho từ vựng'}
      </button>
    </div>
  )
}
