'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Lock, Check, Star, Sparkles, ArrowRight, RefreshCw, Trophy, Target, Flame, Heart, Snowflake, Rocket, CalendarDays, BookMarked, ChevronUp } from 'lucide-react'
import { toast } from 'sonner'
import { api } from '@/lib/client/api'
import { useHashRoute } from '@/components/app/router'
import { useOverview } from '@/components/app/use-overview'
import { DynamicIcon } from '@/components/shared/icon'
import { LoadingBlock, ErrorBlock, EmptyBlock, XPBadge, LeagueBadge } from '@/components/shared/widgets'
import { AudioButton } from '@/components/shared/audio-button'
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
  difficulty: string
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
  const qc = useQueryClient()
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
  const [practiceMenuFor, setPracticeMenuFor] = useState<NodeDTO | null>(null)
  const [jumpTarget, setJumpTarget] = useState<LessonDTO | null>(null)
  const [celebrateNodeId, setCelebrateNodeId] = useState<string | null>(null)
  const celebrateCheckedOnce = useRef(false)
  const celebrateFlag = useRef<{ nodeId: string; nodeStatus: string | null; firstNodeCompletion: boolean; lessonCompleted: boolean; at: number } | null>(null)

  // Đọc cờ "vừa hoàn thành" từ player → chúc mừng ải vừa vượt/thành thạo.
  // Lưu ý race: lần đầu effect chạy, data có thể là cache cũ (node.state chưa kịp cập nhật
  // thành MASTERED) → giữ cờ và đợi data tươi (effect chạy lại khi [data] đổi) rồi mới chúc mừng.
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

  const nextNode = useMemo(() => {
    if (!data) return null
    for (const s of data.sections) {
      for (const l of s.lessons) {
        const found = l.nodes.find((n) => n.state === 'AVAILABLE' || n.state === 'IN_PROGRESS')
        if (found) return found
      }
    }
    return null
  }, [data])

  const openNode = (node: NodeDTO) => {
    if (node.state === 'LOCKED' || node.exerciseCount === 0) return
    navigate(`/lesson/${node.id}`)
  }

  if (isLoading) return <LoadingBlock label="Đang mở Learning Path…" />
  if (error || !data) return <ErrorBlock message="Không tải được hành trình học." onRetry={() => refetch()} />

  const draftLessons = data.sections.flatMap((s) => s.lessons).filter((l) => l.nodes.every((n) => n.status === 'DRAFT'))

  return (
    <div className="grid xl:grid-cols-[1fr_300px] gap-6 items-start">
      {/* Learning path */}
      <div className="min-w-0">
        {/* Course switcher — hiện khi có nhiều khoá học */}
        {courseList.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-4" role="tablist" aria-label="Chọn khoá học">
            {courseList.map((c) => {
              const active = data?.course.slug === c.slug
              return (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setCourseSlug(c.slug)
                    try {
                      sessionStorage.setItem(COURSE_STORAGE_KEY, c.slug)
                      localStorage.setItem(COURSE_STORAGE_KEY, c.slug)
                    } catch {
                      /* bỏ qua */
                    }
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className={cn(
                    'h-11 rounded-full border px-4 text-sm font-bold transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary/40',
                    active
                      ? 'bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20'
                      : 'bg-card hover:border-primary/40 hover:bg-primary/5',
                  )}
                >
                  {c.titleJa && <span className="jp mr-1.5">{c.titleJa}</span>}
                  <span>{c.title}</span>
                  <span className={cn('ml-2 text-xs font-semibold tabular-nums', active ? 'opacity-80' : 'text-muted-foreground')}>
                    {c.lessonCount} bài
                  </span>
                </button>
              )
            })}
          </div>
        )}

        {/* Header */}
        <div className="rounded-3xl border bg-gradient-to-br from-primary/10 via-card to-sakura/10 p-5 sm:p-6 mb-8 relative overflow-hidden">
          <div className="absolute -right-6 -top-8 text-[120px] leading-none jp font-black text-primary/5 select-none" aria-hidden>
            頑
          </div>
          <div className="relative">
            <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider mb-1.5">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Khóa học · {data.course.title}
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Hành trình của bạn · {data.stats.lessonsCompleted}/{data.stats.totalLessons} bài
            </h1>
            <div className="mt-3 max-w-md">
              <Progress value={(data.stats.lessonsCompleted / Math.max(1, data.stats.totalLessons)) * 100} className="h-2.5" />
            </div>
            {nextNode && (
              <Button
                onClick={() => openNode(nextNode)}
                className="mt-4 rounded-2xl h-12 px-6 font-bold shadow-lg shadow-primary/25 max-w-full"
              >
                <span className="line-clamp-2 text-left break-words leading-tight">Tiếp tục: {nextNode.title}</span>
                <ArrowRight className="h-4.5 w-4.5 shrink-0" aria-hidden />
              </Button>
            )}
          </div>
        </div>

        {/* Từ của ngày — bản di động (desktop hiển thị ở sidebar phải) */}
        <div className="xl:hidden mb-6">
          <WordOfDayCard onNavigateVocab={() => navigate('/vocabulary')} />
        </div>

        {/* Sections */}
        {data.sections.map((section) => (
          <section key={section.id} className="mb-4" aria-label={section.title}>
            {/* Section banner */}
            <div className="relative rounded-2xl bg-primary text-primary-foreground p-4 sm:p-5 shadow-lg shadow-primary/20 mb-6 overflow-hidden">
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-5xl jp font-black opacity-15 select-none" aria-hidden>
                {section.titleJa}
              </div>
              <p className="text-[11px] font-bold uppercase tracking-widest opacity-80">Phần {section.order + 1}</p>
              <h2 className="text-lg sm:text-xl font-extrabold">{section.title}</h2>
              <p className="text-xs sm:text-sm opacity-85 mt-0.5 max-w-lg">{section.description}</p>
            </div>

            {/* Lessons */}
            {section.lessons.map((lesson) => (
              <LessonBlock
                key={lesson.id}
                lesson={lesson}
                celebrateNodeId={celebrateNodeId}
                onOpenNode={openNode}
                onNodeInfo={() => navigate(`/lessons/${lesson.id}`)}
                onJump={setJumpTarget}
              />
            ))}
          </section>
        ))}

        {draftLessons.length > 0 && (
          <p className="text-center text-xs text-muted-foreground py-4">
            {draftLessons.length} bài cuối đang được biên soạn — sẽ mở dần trong các bản cập nhật tiếp theo.
          </p>
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

/* ------------------------------- Lesson block ------------------------------- */

function LessonBlock({
  lesson,
  celebrateNodeId,
  onOpenNode,
  onNodeInfo,
  onJump,
}: {
  lesson: LessonDTO
  celebrateNodeId: string | null
  onOpenNode: (node: NodeDTO) => void
  onNodeInfo: () => void
  onJump: (lesson: LessonDTO) => void
}) {
  const isDraft = lesson.nodes.length > 0 && lesson.nodes.every((n) => n.status === 'DRAFT')
  const firstNode = lesson.nodes.find((n) => n.state === 'AVAILABLE' || n.state === 'IN_PROGRESS')
  const lessonCompleted = lesson.state === 'COMPLETED'
  // Bài đang khóa nhưng đã có nội dung xuất bản → cho phép kiểm tra bỏ qua
  const canJump =
    lesson.state === 'LOCKED' && !isDraft && lesson.nodes.some((n) => n.status === 'PUBLISHED' && n.exerciseCount > 0)

  // Thu gọn bài đã hoàn thành: chuỗi ải dài chiếm màn hình — gộp thành dải chip
  // nhỏ để lộ các bài mới phía dưới. Tự MỞ RỘNG khi có ăn mừng (vừa xong ải).
  const hasCelebrate = lesson.nodes.some((n) => n.id === celebrateNodeId)
  const [expanded, setExpanded] = useState(!lessonCompleted)
  const showNodes = expanded || hasCelebrate

  return (
    <div className="mb-2">
      {/* Lesson header card */}
      <button
        onClick={onNodeInfo}
        className={cn(
          'w-full rounded-2xl border-2 p-4 mb-5 text-left transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring hover:shadow-md',
          lessonCompleted
            ? 'border-success/50 bg-success/5'
            : firstNode
              ? 'border-primary/40 bg-card shadow-sm'
              : 'border-border bg-card/60'
        )}
      >
        <div className="flex items-center gap-3.5">
          <div
            className={cn(
              'h-12 w-12 shrink-0 rounded-2xl flex items-center justify-center font-extrabold text-lg',
              lessonCompleted ? 'bg-success text-white' : firstNode ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
            )}
            aria-hidden
          >
            {lessonCompleted ? <Check className="h-6 w-6" /> : lesson.order}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-extrabold tracking-tight">Bài {lesson.order}</h3>
              <span className="jp text-sm text-muted-foreground truncate">{lesson.titleJa}</span>
              {isDraft && (
                <span className="text-[10px] font-bold rounded-full bg-muted px-2 py-0.5 text-muted-foreground inline-flex items-center gap-1">
                  <Sparkles className="h-3 w-3" /> Đang biên soạn
                </span>
              )}
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

      {/* Nút “Nhảy tới đây?” kiểu Duolingo cho bài đang khóa */}
      {canJump && (
        <div className="flex justify-center -mt-1 mb-5 relative z-10">
          <button
            onClick={() => onJump(lesson)}
            className="group inline-flex items-center gap-2 rounded-full border-2 border-sakura/50 bg-sakura/10 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-sakura transition-all hover:bg-sakura hover:text-sakura-foreground hover:shadow-lg hover:shadow-sakura/30 hover:-translate-y-0.5 active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`Bỏ qua tới bài ${lesson.order}: ${lesson.title} — làm bài kiểm tra để mở khóa`}
          >
            <Rocket className="h-4 w-4 transition-transform group-hover:rotate-12" aria-hidden />
            Nhảy tới đây?
          </button>
        </div>
      )}

      {/* Node chain — hoặc dạng thu gọn nếu bài đã hoàn thành */}
      {showNodes ? (
        <>
          <div className="relative flex flex-col items-center">
            {lesson.nodes.map((node, i) => (
              <div key={node.id} className="flex flex-col items-center w-full">
                {i > 0 && <div className="path-line w-0.5 h-8" aria-hidden />}
                <PathNode node={node} celebrate={celebrateNodeId === node.id} onOpen={onOpenNode} />
              </div>
            ))}
            {lesson.nodes.length === 0 && (
              <p className="text-xs text-muted-foreground py-3">Nội dung sắp ra mắt</p>
            )}
          </div>
          {lessonCompleted && (
            <div className="flex justify-center mt-1">
              <button
                onClick={() => setExpanded(false)}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-expanded="true"
              >
                <ChevronUp className="h-3.5 w-3.5" aria-hidden /> Thu gọn
              </button>
            </div>
          )}
        </>
      ) : (
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
      )}
    </div>
  )
}

/* --------------------------------- Path node -------------------------------- */

function PathNode({ node, celebrate, onOpen }: { node: NodeDTO; celebrate: boolean; onOpen: (n: NodeDTO) => void }) {
  const [showMenu, setShowMenu] = useState(false)
  const isLocked = node.state === 'LOCKED' || node.exerciseCount === 0
  const isDone = node.state === 'COMPLETED' || node.state === 'MASTERED'

  const stateCls = isLocked
    ? 'bg-muted text-muted-foreground border border-border node-3d node-3d-locked'
    : node.state === 'AVAILABLE' || node.state === 'IN_PROGRESS'
      ? 'bg-primary text-primary-foreground border-2 border-primary/60 node-3d node-3d-primary'
      : node.state === 'MASTERED'
        ? 'bg-warning text-white border-2 border-warning/60 node-3d node-3d-warning'
        : 'bg-success text-white border-2 border-success/60 node-3d node-3d-success'

  const isCurrent = node.state === 'AVAILABLE' || node.state === 'IN_PROGRESS'

  return (
    <div className="relative group">
      {/* Pháo giấy ăn mừng ải vừa thành thạo (cấp vàng) */}
      {celebrate && <NodeConfetti />}
      {/* Bong bóng BẮT ĐẦU kiểu Duolingo */}
      {isCurrent && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10 animate-bubble-bounce" aria-hidden>
          <span className="relative block rounded-xl bg-primary text-primary-foreground text-[11px] font-extrabold uppercase tracking-wider px-3 py-1.5 whitespace-nowrap shadow-md">
            Bắt đầu
            <span className="absolute left-1/2 -bottom-[5px] -translate-x-1/2 h-2.5 w-2.5 bg-primary rotate-45 rounded-[3px]" />
          </span>
        </div>
      )}
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
        title={isLocked ? (node.status === 'DRAFT' ? 'Đang biên soạn' : 'Hoàn thành ải trước để mở khóa') : node.title}
        aria-label={`${node.title} — ${isLocked ? 'đang khóa' : node.state === 'COMPLETED' || node.state === 'MASTERED' ? 'đã hoàn thành' : 'sẵn sàng'}`}
        className={cn(
          'relative h-[4.5rem] w-[4.5rem] sm:h-20 sm:w-20 rounded-full flex flex-col items-center justify-center transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring',
          stateCls,
          celebrate && 'animate-pop-in ring-4 ring-warning/40',
          !isLocked && 'hover:scale-110 active:scale-95',
          isLocked && 'cursor-not-allowed'
        )}
      >
        {isLocked ? (
          <Lock className="h-6 w-6" aria-hidden />
        ) : isDone ? (
          <Check className="h-8 w-8" strokeWidth={3.5} aria-hidden />
        ) : (
          <DynamicIcon name={node.icon} className="h-8 w-8" />
        )}
        {node.state === 'MASTERED' && (
          <Star className="absolute -top-1 -right-1 h-5 w-5 fill-white text-warning" aria-hidden />
        )}
      </button>

      {/* Label — max-w + truncate để tiêu đề dài không tràn ngang viewport */}
      <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 hidden md:block pointer-events-none max-w-[200px]">
        <p className={cn('text-sm font-bold truncate', isLocked && 'text-muted-foreground')}>{node.title}</p>
        <p className="text-[11px] text-muted-foreground truncate">
          {isLocked ? (node.status === 'DRAFT' ? 'Sắp ra mắt' : 'Đang khóa') : `${node.exerciseCount} bài tập · ${node.xpReward} XP`}
        </p>
      </div>

      {/* Menu replay cho node hoàn thành */}
      {showMenu && isDone && (
        <div className="absolute z-20 left-1/2 -translate-x-1/2 top-full mt-2 w-44 rounded-xl border bg-popover shadow-lg p-1.5">
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
    </div>
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
        color: NODE_CONFETTI_COLORS[i % NODE_CONFETTI_COLORS.length],
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
