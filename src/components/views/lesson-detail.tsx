'use client'

import { useQuery } from '@tanstack/react-query'
import { ArrowLeft, Play, Sparkles } from 'lucide-react'
import { api } from '@/lib/client/api'
import { useHashRoute } from '@/components/app/router'
import { AudioButton } from '@/components/shared/audio-button'
import { DynamicIcon } from '@/components/shared/icon'
import { LoadingBlock, ErrorBlock, EmptyBlock, PageHeader } from '@/components/shared/widgets'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface NodeDTO {
  id: string
  title: string
  icon: string
  nodeType: string
  state: string
  exerciseCount: number
  xpReward: number
  bestScore: number
}

interface VocabDTO {
  id: string
  term: string
  reading: string | null
  romaji: string
  meaningVi: string
  pos: string | null
  exampleJa: string
  exampleVi: string
}

interface GrammarDTO {
  id: string
  code: string
  title: string
  explanationVi: string
  examples: { ja: string; vi: string }[]
}

interface LessonDetailDTO {
  lesson: {
    id: string
    order: number
    title: string
    titleJa: string
    description: string
    learningObjectives: string[]
    grammarTopics: string[]
    vocabularyTopics: string[]
    difficulty: string
    status: string
    section: { id: string; title: string }
  }
  nodes: NodeDTO[]
  vocabulary: VocabDTO[]
  grammar: GrammarDTO[]
}

export function LessonDetailView({ lessonId }: { lessonId: string }) {
  const { navigate, back } = useHashRoute()
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['lesson', lessonId],
    queryFn: () => api<LessonDetailDTO>(`/api/lessons/${lessonId}`),
    enabled: !!lessonId,
  })

  if (!lessonId) return <EmptyBlock title="Không tìm thấy bài học" action={<Button onClick={() => navigate('/')}>Về trang chủ</Button>} />
  if (isLoading) return <LoadingBlock />
  if (error || !data) return <ErrorBlock message="Không tải được chi tiết bài học." onRetry={() => refetch()} />

  const { lesson, nodes, vocabulary, grammar } = data
  const playable = nodes.filter((n) => n.state !== 'LOCKED' && n.exerciseCount > 0)
  const nextNode = playable.find((n) => n.state === 'AVAILABLE' || n.state === 'IN_PROGRESS')

  return (
    <div>
      <Button variant="ghost" size="sm" onClick={back} className="mb-2 -ml-2">
        <ArrowLeft className="h-4 w-4" /> Quay lại
      </Button>

      <PageHeader
        icon="BookOpen"
        title={`Bài ${lesson.order}: ${lesson.titleJa}`}
        sub={lesson.title}
        actions={
          nextNode ? (
            <Button onClick={() => navigate(`/lesson/${nextNode.id}`)} className="rounded-xl shadow-lg shadow-primary/25">
              <Play className="h-4 w-4" /> {nodes.some((n) => n.state !== 'LOCKED' && n.state !== 'AVAILABLE' && n.state !== 'IN_PROGRESS') ? 'Học tiếp' : 'Bắt đầu học'}
            </Button>
          ) : nodes.every((n) => n.state === 'COMPLETED' || n.state === 'MASTERED') && nodes.length > 0 ? (
            <Badge className="bg-success/15 text-success border-success/30">Đã hoàn thành</Badge>
          ) : null
        }
      />

      <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-6">{lesson.description}</p>

      {lesson.learningObjectives.length > 0 && (
        <div className="rounded-2xl border bg-card p-4 mb-6">
          <h2 className="font-bold text-sm mb-2">Mục tiêu bài học</h2>
          <ul className="space-y-1.5">
            {lesson.learningObjectives.map((o, i) => (
              <li key={i} className="text-sm text-muted-foreground flex gap-2">
                <span className="text-primary font-bold shrink-0">{i + 1}.</span> {o}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Nodes */}
      {nodes.length > 0 && (
        <section className="mb-8" aria-label="Các ải của bài học">
          <h2 className="font-bold mb-3">Các ải ({nodes.filter((n) => n.state === 'COMPLETED' || n.state === 'MASTERED').length}/{nodes.length})</h2>
          <div className="grid sm:grid-cols-2 gap-2.5">
            {nodes.map((n) => {
              const locked = n.state === 'LOCKED' || n.exerciseCount === 0
              const done = n.state === 'COMPLETED' || n.state === 'MASTERED'
              return (
                <button
                  key={n.id}
                  onClick={() => !locked && navigate(`/lesson/${n.id}`)}
                  disabled={locked}
                  className={cn(
                    'flex items-center gap-3 rounded-xl border-2 p-3 text-left transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring',
                    locked
                      ? 'border-border opacity-55 cursor-not-allowed'
                      : done
                        ? 'border-success/40 bg-success/5 hover:shadow-md'
                        : 'border-primary/40 bg-card hover:shadow-md hover:border-primary'
                  )}
                >
                  <span
                    className={cn(
                      'h-10 w-10 rounded-xl flex items-center justify-center shrink-0',
                      locked ? 'bg-muted text-muted-foreground' : done ? 'bg-success text-white' : 'bg-primary text-primary-foreground'
                    )}
                  >
                    <DynamicIcon name={n.icon} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-sm truncate">{n.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {locked ? (n.exerciseCount === 0 ? 'Sắp ra mắt' : 'Đang khóa') : `${n.exerciseCount} bài tập · ${n.xpReward} XP${done ? ` · ${n.bestScore}%` : ''}`}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        </section>
      )}

      {/* Vocabulary */}
      {vocabulary.length > 0 && (
        <section className="mb-8" aria-label="Từ vựng">
          <h2 className="font-bold mb-3">Từ vựng ({vocabulary.length})</h2>
          <div className="grid sm:grid-cols-2 gap-2.5">
            {vocabulary.map((v) => (
              <div key={v.id} className="rounded-xl border bg-card p-3.5 flex items-start gap-3">
                <AudioButton text={v.term} size="sm" labelSlow={false} />
                <div className="min-w-0">
                  <p className="jp jp-serif font-bold text-lg leading-tight">
                    {v.term}
                    {v.pos && <span className="text-[10px] ml-2 font-semibold rounded bg-muted px-1.5 py-0.5 text-muted-foreground align-middle">{v.pos}</span>}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {v.reading ? `${v.reading} · ` : ''}{v.romaji}
                  </p>
                  <p className="font-semibold text-sm text-primary mt-0.5">{v.meaningVi}</p>
                  <p className="text-xs text-muted-foreground mt-1 border-l-2 border-muted pl-2">
                    <span className="jp">{v.exampleJa}</span> — {v.exampleVi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Grammar */}
      {grammar.length > 0 && (
        <section className="mb-8" aria-label="Ngữ pháp">
          <h2 className="font-bold mb-3">Ngữ pháp ({grammar.length})</h2>
          <div className="space-y-3">
            {grammar.map((g) => (
              <div key={g.id} className="rounded-xl border bg-card p-4">
                <p className="jp jp-serif font-bold text-lg text-primary">{g.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1.5">{g.explanationVi}</p>
                <div className="mt-2.5 space-y-1.5">
                  {g.examples.map((ex, i) => (
                    <div key={i} className="text-sm flex items-start gap-2">
                      <AudioButton text={ex.ja} size="sm" labelSlow={false} />
                      <div>
                        <span className="jp font-semibold">{ex.ja}</span>
                        <span className="text-muted-foreground"> — {ex.vi}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {vocabulary.length === 0 && grammar.length === 0 && nodes.length === 0 && (
        <EmptyBlock icon="Sparkles" title="Bài học đang được biên soạn" description="Nội dung chi tiết sẽ sớm được cập nhật." />
      )}
    </div>
  )
}
