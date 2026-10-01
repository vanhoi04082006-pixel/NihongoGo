'use client'

import { useMemo, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import {
  Shield, LayoutDashboard, BookOpen, Languages, Shapes, BookText, Settings2,
  ScrollText, Plus, Trash2, Save, X, ChevronRight, ChevronDown, Eye, Send, Pencil, RefreshCw,
} from 'lucide-react'
import { api, ApiClientError } from '@/lib/client/api'
import { useHashRoute } from '@/components/app/router'
import { useAuth } from '@/components/app/use-auth'
import { LoadingBlock, ErrorBlock, EmptyBlock } from '@/components/shared/widgets'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from '@/components/ui/dialog'
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription,
  AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

/* ------------------------------ Entity config ------------------------------ */

type FieldType = 'text' | 'number' | 'textarea' | 'json' | 'select'
interface FieldDef {
  name: string
  label: string
  type: FieldType
  options?: { value: string; label: string }[]
  placeholder?: string
  required?: boolean
  half?: boolean
}

const EXERCISE_TYPES = [
  'MULTIPLE_CHOICE', 'SELECT_MEANING', 'SELECT_WORD', 'FILL_BLANK', 'WORD_BANK', 'SENTENCE_ORDER',
  'MATCHING', 'TRANSLATE_JA_VI', 'TRANSLATE_VI_JA', 'LISTEN_SELECT', 'LISTEN_TYPE', 'DICTATION',
  'SPEAK', 'PRONUNCIATION', 'READING', 'DIALOGUE', 'HIRAGANA_RECOGNITION', 'KATAKANA_RECOGNITION',
  'KANA_WRITING', 'KANJI_RECOGNITION', 'KANJI_MEANING', 'KANJI_READING', 'KANJI_WRITING',
  'KANJI_STROKE_ORDER', 'GRAMMAR_CHOICE', 'ERROR_CORRECTION', 'CONJUGATION', 'PARTICLE_FILL', 'MIXED_REVIEW',
]
const KINDS = ['choice', 'audio-choice', 'fill-blank', 'token-order', 'text-input', 'matching', 'speak', 'writing', 'passage']

const LESSON_FIELDS: FieldDef[] = [
  { name: 'title', label: 'Tiêu đề (Việt)', type: 'text', required: true },
  { name: 'titleJa', label: 'Tiêu đề Nhật', type: 'text', required: true },
  { name: 'slug', label: 'Slug', type: 'text', required: true, placeholder: 'l5-di-chuyen' },
  { name: 'order', label: 'Thứ tự', type: 'number', required: true },
  { name: 'description', label: 'Mô tả', type: 'textarea' },
  { name: 'learningObjectives', label: 'Mục tiêu (JSON mảng)', type: 'json', placeholder: '["Mục tiêu 1"]' },
  { name: 'grammarTopics', label: 'Chủ đề ngữ pháp (JSON)', type: 'json' },
  { name: 'vocabularyTopics', label: 'Chủ đề từ vựng (JSON)', type: 'json' },
  { name: 'kanjiTopics', label: 'Chủ đề kanji (JSON)', type: 'json' },
  { name: 'difficulty', label: 'Độ khó', type: 'select', options: [
    { value: 'BEGINNER', label: 'BEGINNER' }, { value: 'ELEMENTARY', label: 'ELEMENTARY' },
    { value: 'INTERMEDIATE', label: 'INTERMEDIATE' }, { value: 'ADVANCED', label: 'ADVANCED' },
  ] },
]

const NODE_FIELDS: FieldDef[] = [
  { name: 'key', label: 'Key (duy nhất trong lesson)', type: 'text', required: true },
  { name: 'title', label: 'Tiêu đề', type: 'text', required: true },
  { name: 'description', label: 'Mô tả', type: 'textarea' },
  { name: 'icon', label: 'Icon (Lucide)', type: 'text', placeholder: 'Star' },
  { name: 'nodeType', label: 'Loại node', type: 'select', options: [
    'VOCAB', 'VOCAB_PRACTICE', 'GRAMMAR', 'LISTENING', 'READING', 'SPEAKING', 'WRITING',
    'SENTENCE', 'TRANSLATION', 'MIXED', 'BOSS', 'CHECKPOINT', 'KANA',
  ].map((v) => ({ value: v, label: v })) },
  { name: 'order', label: 'Thứ tự', type: 'number', required: true },
  { name: 'xpReward', label: 'XP thưởng', type: 'number' },
  { name: 'requiredScore', label: 'Điểm tối thiểu (%)', type: 'number' },
  { name: 'difficulty', label: 'Độ khó', type: 'select', options: [
    { value: 'EASY', label: 'EASY' }, { value: 'MEDIUM', label: 'MEDIUM' }, { value: 'HARD', label: 'HARD' },
  ] },
]

const VOCAB_FIELDS: FieldDef[] = [
  { name: 'term', label: 'Từ (tiếng Nhật)', type: 'text', required: true },
  { name: 'reading', label: 'Cách đọc (nếu có kanji)', type: 'text' },
  { name: 'romaji', label: 'Romaji', type: 'text', required: true },
  { name: 'meaningVi', label: 'Nghĩa tiếng Việt', type: 'text', required: true },
  { name: 'pos', label: 'Từ loại', type: 'text', placeholder: 'danh từ' },
  { name: 'exampleJa', label: 'Câu ví dụ (Nhật)', type: 'text' },
  { name: 'exampleVi', label: 'Nghĩa câu ví dụ', type: 'text' },
]

const GRAMMAR_FIELDS: FieldDef[] = [
  { name: 'code', label: 'Code (duy nhất)', type: 'text', required: true },
  { name: 'title', label: 'Mẫu câu', type: 'text', required: true },
  { name: 'explanationVi', label: 'Giải thích (Việt)', type: 'textarea', required: true },
  { name: 'examples', label: 'Ví dụ (JSON [{ja,vi}])', type: 'json' },
]

const KANJI_FIELDS: FieldDef[] = [
  { name: 'character', label: 'Chữ Hán', type: 'text', required: true },
  { name: 'meaningVi', label: 'Nghĩa Việt', type: 'text', required: true },
  { name: 'jlpt', label: 'JLPT (5-1)', type: 'number' },
  { name: 'strokeCount', label: 'Số nét', type: 'number', required: true },
  { name: 'onyomi', label: 'Âm On (JSON mảng)', type: 'json', placeholder: '["ニチ"]' },
  { name: 'kunyomi', label: 'Âm Kun (JSON mảng)', type: 'json', placeholder: '["ひ"]' },
  { name: 'radicals', label: 'Bộ thủ (JSON mảng)', type: 'json' },
  { name: 'examples', label: 'Ví dụ (JSON)', type: 'json' },
  { name: 'mnemonicVi', label: 'Mẹo nhớ', type: 'textarea' },
]

/* --------------------------------- Helpers --------------------------------- */

 
type Row = Record<string, any>

async function callApi(path: string, method: string, json?: unknown) {
  return api(path, { method, json })
}

function useAdminMutation(fn: () => Promise<unknown>, successMsg: string, invalidate: string[][]) {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: fn,
    onSuccess: () => {
      toast.success(successMsg)
      for (const key of invalidate) qc.invalidateQueries({ queryKey: key })
    },
    onError: (e) => toast.error(e instanceof ApiClientError ? e.message : 'Thao tác thất bại'),
  })
}

/* ---------------------------------- View ----------------------------------- */

export function AdminView({ section }: { section: string }) {
  const { navigate } = useHashRoute()
  const { data: user } = useAuth()
  const isAdmin = user?.role === 'ADMIN'

  const NAV = [
    { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { key: 'lessons', label: 'Khóa học & bài học', icon: BookOpen },
    { key: 'vocabulary', label: 'Từ vựng', icon: Languages },
    { key: 'grammar', label: 'Ngữ pháp', icon: Shapes },
    { key: 'kanji', label: 'Kanji', icon: BookText },
    ...(isAdmin ? [{ key: 'config', label: 'Cấu hình', icon: Settings2 }] : []),
    { key: 'audit', label: 'Nhật ký', icon: ScrollText },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="h-9 w-9 rounded-xl bg-sakura/15 flex items-center justify-center shrink-0">
              <Shield className="h-5 w-5 text-sakura" aria-hidden />
            </div>
            <div className="min-w-0">
              <p className="font-extrabold leading-tight">Trung tâm quản trị</p>
              <p className="text-xs text-muted-foreground truncate">NihongoGo CMS · {user?.username} ({user?.role})</p>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={() => navigate('/')}>
            ← Về ứng dụng
          </Button>
        </div>
      </header>

      <div className="flex-1 mx-auto max-w-7xl w-full px-4 sm:px-6 py-6 flex flex-col sm:flex-row gap-6">
        <nav className="sm:w-56 shrink-0" aria-label="Điều hướng quản trị">
          <div className="flex sm:flex-col gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {NAV.map((n) => (
              <button
                key={n.key}
                onClick={() => navigate(`/admin/${n.key}`)}
                className={cn(
                  'inline-flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  section === n.key ? 'bg-sakura text-sakura-foreground shadow-sm' : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
                aria-current={section === n.key ? 'page' : undefined}
              >
                <n.icon className="h-4.5 w-4.5 shrink-0" aria-hidden />
                {n.label}
              </button>
            ))}
          </div>
        </nav>

        <main className="flex-1 min-w-0">
          {section === 'dashboard' && <DashboardSection />}
          {section === 'lessons' && <LessonsSection isAdmin={isAdmin} />}
          {section === 'vocabulary' && <EntitySection entity="vocabulary" fields={VOCAB_FIELDS} title="Từ vựng" isAdmin={isAdmin} searchable />}
          {section === 'grammar' && <EntitySection entity="grammar" fields={GRAMMAR_FIELDS} title="Ngữ pháp" isAdmin={isAdmin} searchable />}
          {section === 'kanji' && <EntitySection entity="kanji" fields={KANJI_FIELDS} title="Kanji" isAdmin={isAdmin} searchable />}
          {section === 'config' && isAdmin && <ConfigSection />}
          {section === 'audit' && <AuditSection />}
        </main>
      </div>

      <footer className="mt-auto border-t">
        <div className="mx-auto max-w-7xl px-4 py-4 text-center text-xs text-muted-foreground">
          Mọi thao tác được ghi vào AdminAuditLog · Publish chỉ dành cho ADMIN
        </div>
      </footer>
    </div>
  )
}

/* -------------------------------- Dashboard -------------------------------- */

function DashboardSection() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['admin', 'stats'],
    queryFn: () => callApi('/api/admin/stats?logs=1', 'GET') as Promise<{
      stats: { users: number; lessons: number; questions: number; sessions: number; xpTotal: number; events: number; recentEvents: { id: string; name: string; user: string | null; createdAt: string }[] }
      logs: { id: string; admin: string; action: string; entity: string; entityId: string | null; createdAt: string }[]
    }>,
  })

  if (isLoading) return <LoadingBlock />
  if (error || !data) return <ErrorBlock message="Không tải được thống kê." onRetry={() => refetch()} />

  const cards = [
    { label: 'Người dùng', value: data.stats.users },
    { label: 'Bài học', value: data.stats.lessons },
    { label: 'Câu hỏi', value: data.stats.questions },
    { label: 'Phiên học', value: data.stats.sessions },
    { label: 'Tổng XP', value: data.stats.xpTotal.toLocaleString('vi-VN') },
    { label: 'Event phân tích', value: data.stats.events },
  ]

  return (
    <div>
      <h1 className="text-xl font-extrabold mb-5">Tổng quan hệ thống</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {cards.map((c) => (
          <div key={c.label} className="rounded-2xl border bg-card p-4">
            <p className="text-2xl font-extrabold tabular-nums">{c.value}</p>
            <p className="text-xs text-muted-foreground font-medium">{c.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="rounded-2xl border bg-card p-4">
          <h2 className="font-bold text-sm mb-3">Event gần đây</h2>
          <div className="space-y-1.5 max-h-72 overflow-y-auto nice-scroll">
            {data.stats.recentEvents.map((e) => (
              <div key={e.id} className="flex items-center justify-between gap-2 text-xs border rounded-lg px-3 py-2">
                <span className="font-mono font-semibold text-primary">{e.name}</span>
                <span className="text-muted-foreground truncate">{e.user ? `@${e.user}` : '—'}</span>
                <span className="text-muted-foreground shrink-0">{new Date(e.createdAt).toLocaleString('vi-VN')}</span>
              </div>
            ))}
            {data.stats.recentEvents.length === 0 && <p className="text-xs text-muted-foreground">Chưa có event.</p>}
          </div>
        </div>
        <div className="rounded-2xl border bg-card p-4">
          <h2 className="font-bold text-sm mb-3">Audit log gần đây</h2>
          <div className="space-y-1.5 max-h-72 overflow-y-auto nice-scroll">
            {data.logs.map((l) => (
              <div key={l.id} className="flex items-center justify-between gap-2 text-xs border rounded-lg px-3 py-2">
                <span className="font-semibold">@{l.admin}</span>
                <span className="font-mono text-sakura">{l.action}</span>
                <span className="text-muted-foreground truncate">{l.entity}</span>
                <span className="text-muted-foreground shrink-0">{new Date(l.createdAt).toLocaleString('vi-VN')}</span>
              </div>
            ))}
            {data.logs.length === 0 && <p className="text-xs text-muted-foreground">Chưa có log.</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------ Lessons section ----------------------------- */

interface SectionRow { id: string; title: string; order: number; lessons: { id: string; title: string; order: number; status: string; slug: string }[] }

function LessonsSection({ isAdmin }: { isAdmin: boolean }) {
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null)
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null)

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['admin', 'sections'],
    queryFn: () => callApi('/api/courses', 'GET') as Promise<{ courses: { id: string; title: string }[] }>,
  })
  const courseId = data?.courses[0]?.id

  const sectionsQ = useQuery({
    queryKey: ['admin', 'sections-list', courseId],
    queryFn: () => callApi(`/api/courses/${courseId}`, 'GET') as Promise<{ sections: SectionRow[] }>,
    enabled: !!courseId,
  })

  if (isLoading) return <LoadingBlock />
  if (error || !data) return <ErrorBlock message="Không tải được khóa học." onRetry={() => refetch()} />

  return (
    <div className="grid lg:grid-cols-[280px_1fr] gap-5 items-start">
      {/* Tree */}
      <div className="rounded-2xl border bg-card p-3 max-h-[80vh] overflow-y-auto nice-scroll">
        <h2 className="font-bold text-sm px-2 py-1.5">Cấu trúc khóa học</h2>
        {sectionsQ.isLoading && <LoadingBlock className="py-8" />}
        {sectionsQ.data?.sections.map((s) => (
          <div key={s.id} className="mb-2">
            <p className="text-xs font-bold text-primary px-2 py-1 uppercase tracking-wide">
              P{s.order + 1}. {s.title}
            </p>
            {s.lessons.map((l) => (
              <button
                key={l.id}
                onClick={() => {
                  setSelectedLessonId(l.id)
                  setSelectedNodeId(null)
                }}
                className={cn(
                  'w-full text-left rounded-lg px-2.5 py-1.5 text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring flex items-center gap-2',
                  selectedLessonId === l.id ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-muted'
                )}
              >
                <span className="tabular-nums text-xs text-muted-foreground shrink-0">{l.order}</span>
                <span className="truncate">{l.title}</span>
                {l.status !== 'PUBLISHED' && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-warning shrink-0" title={l.status} />}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Editor */}
      <div className="min-w-0">
        {selectedNodeId ? (
          <NodeEditor nodeId={selectedNodeId} onBack={() => setSelectedNodeId(null)} isAdmin={isAdmin} />
        ) : selectedLessonId ? (
          <LessonEditor lessonId={selectedLessonId} onOpenNode={setSelectedNodeId} isAdmin={isAdmin} />
        ) : (
          <EmptyBlock icon="BookOpen" title="Chọn một bài học" description="Chọn bài ở cột bên trái để chỉnh sửa nội dung, hoặc chọn node để soạn câu hỏi." />
        )}
      </div>
    </div>
  )
}

/* ------------------------------- Lesson editor ------------------------------ */

function LessonEditor({ lessonId, onOpenNode, isAdmin }: { lessonId: string; onOpenNode: (id: string) => void; isAdmin: boolean }) {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['lesson', lessonId],
    queryFn: () => callApi(`/api/lessons/${lessonId}`, 'GET') as Promise<{ lesson: Row; nodes: Row[] }>,
  })

  if (isLoading) return <LoadingBlock />
  if (error || !data?.lesson) return <ErrorBlock message="Không tải được bài học." onRetry={() => refetch()} />

  return (
    <LessonForm
      key={lessonId}
      lessonId={lessonId}
      lesson={data.lesson}
      nodes={data.nodes ?? []}
      onOpenNode={onOpenNode}
      isAdmin={isAdmin}
    />
  )
}

function LessonForm({
  lessonId,
  lesson,
  nodes,
  onOpenNode,
  isAdmin,
}: {
  lessonId: string
  lesson: Row
  nodes: Row[]
  onOpenNode: (id: string) => void
  isAdmin: boolean
}) {
  const [form, setForm] = useState<Row>(() => ({
    title: lesson.title,
    titleJa: lesson.titleJa,
    description: lesson.description,
    learningObjectives: JSON.stringify(lesson.learningObjectives ?? []),
    grammarTopics: JSON.stringify(lesson.grammarTopics ?? []),
    vocabularyTopics: JSON.stringify(lesson.vocabularyTopics ?? []),
    kanjiTopics: JSON.stringify(lesson.kanjiTopics ?? []),
    difficulty: lesson.difficulty,
    order: lesson.order,
    slug: lesson.slug,
  }))

  function collectForm(): Row {
    return {
      ...form,
      order: Number(form.order),
      learningObjectives: safeJson(form.learningObjectives, []),
      grammarTopics: safeJson(form.grammarTopics, []),
      vocabularyTopics: safeJson(form.vocabularyTopics, []),
      kanjiTopics: safeJson(form.kanjiTopics, []),
    }
  }

  const saveMut = useAdminMutation(
    () => callApi(`/api/admin/content/${lessonId}?entity=lesson`, 'PATCH', { data: collectForm() }),
    'Đã lưu bài học',
    [['lesson', lessonId], ['admin'], ['learn']]
  )
  const publishMut = useAdminMutation(
    () => callApi(`/api/admin/content/${lessonId}?entity=lesson`, 'PATCH', { data: { status: 'PUBLISHED', publish: true } }),
    'Đã xuất bản bài học',
    [['lesson', lessonId], ['admin'], ['learn']]
  )
  const unpublishMut = useAdminMutation(
    () => callApi(`/api/admin/content/${lessonId}?entity=lesson`, 'PATCH', { data: { status: 'DRAFT' } }),
    'Đã chuyển về nháp',
    [['lesson', lessonId], ['admin'], ['learn']]
  )

  return (
    <div>
      <div className="flex items-center justify-between gap-3 flex-wrap mb-4">
        <div>
          <h1 className="text-lg font-extrabold flex items-center gap-2">
            Bài {lesson.order}: {lesson.title}
            <span className={cn('text-[10px] font-bold rounded-full px-2 py-0.5', lesson.status === 'PUBLISHED' ? 'bg-success/15 text-success' : 'bg-warning/15 text-warning')}>
              {lesson.status === 'PUBLISHED' ? 'Đã xuất bản' : 'Nháp'}
            </span>
          </h1>
          <p className="text-xs text-muted-foreground">{lesson.titleJa} · {lesson.slug}</p>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={() => saveMut.mutate()} disabled={saveMut.isPending}>
            <Save className="h-4 w-4" /> Lưu
          </Button>
          {isAdmin && lesson.status !== 'PUBLISHED' && (
            <Button size="sm" className="bg-success hover:bg-success/90" onClick={() => publishMut.mutate()} disabled={publishMut.isPending}>
              <Send className="h-4 w-4" /> Xuất bản
            </Button>
          )}
          {lesson.status === 'PUBLISHED' && (
            <Button size="sm" variant="outline" onClick={() => unpublishMut.mutate()} disabled={unpublishMut.isPending}>
              Ẩn (về nháp)
            </Button>
          )}
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-4 mb-5">
        <h2 className="font-bold text-sm mb-3">Thông tin bài học</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {LESSON_FIELDS.map((f) => (
            <FieldInput key={f.name} field={f} value={form[f.name] ?? ''} onChange={(v) => setForm((s) => ({ ...s, [f.name]: v }))} />
          ))}
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-sm">Các node ({nodes.length})</h2>
          <CreateNodeDialog lessonId={lessonId} maxOrder={nodes.length} />
        </div>
        <div className="space-y-2">
          {nodes.map((n) => (
            <div key={n.id} className="flex items-center gap-3 rounded-xl border px-3.5 py-3">
              <span className="text-xs font-bold tabular-nums text-muted-foreground w-6">{n.order}</span>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm truncate">{n.title}</p>
                <p className="text-xs text-muted-foreground">
                  {n.nodeType} · {n.exerciseCount} bài tập · {n.state}
                  {n.status !== 'PUBLISHED' && <span className="text-warning font-semibold"> · {n.status}</span>}
                </p>
              </div>
              <Button size="sm" variant="ghost" onClick={() => onOpenNode(n.id)}>
                <Pencil className="h-4 w-4" /> Soạn
              </Button>
              <DeleteEntityButton entity="node" id={n.id} label={n.title} isAdmin={isAdmin} />
            </div>
          ))}
          {nodes.length === 0 && <p className="text-sm text-muted-foreground py-4 text-center">Chưa có node nào.</p>}
        </div>
      </div>
    </div>
  )
}

function CreateNodeDialog({ lessonId, maxOrder }: { lessonId: string; maxOrder: number }) {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState<Row>({ key: '', title: '', nodeType: 'MIXED', order: maxOrder + 1, icon: 'Star', xpReward: 10, requiredScore: 70 })
  const mut = useAdminMutation(
    () => callApi('/api/admin/content?entity=node', 'POST', { lessonId, ...form, order: Number(form.order), xpReward: Number(form.xpReward), requiredScore: Number(form.requiredScore) }),
    'Đã tạo node',
    [['lesson', lessonId]]
  )
  return (
    <>
      <Button size="sm" onClick={() => setOpen(true)}>
        <Plus className="h-4 w-4" /> Thêm node
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto nice-scroll">
          <DialogHeader>
            <DialogTitle>Tạo node mới</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-3">
            {NODE_FIELDS.map((f) => (
              <FieldInput key={f.name} field={f} value={form[f.name] ?? ''} onChange={(v) => setForm((s) => ({ ...s, [f.name]: v }))} />
            ))}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Hủy</Button>
            <Button
              onClick={() =>
                mut.mutate(undefined, {
                  onSuccess: () => setOpen(false),
                })
              }
              disabled={!form.key || !form.title || mut.isPending}
            >
              Tạo node
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

/* -------------------------------- Node editor ------------------------------- */

function NodeEditor({ nodeId, onBack, isAdmin }: { nodeId: string; onBack: () => void; isAdmin: boolean }) {
  const [preview, setPreview] = useState<Row[] | null>(null)
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['admin', 'node', nodeId],
    queryFn: () => callApi(`/api/admin/preview/${nodeId}`, 'GET') as Promise<{ node: Row & { exercises: Row[]; lesson: { title: string } } }>,
  })

  const node = data?.node

  return (
    <div>
      <div className="flex items-center justify-between gap-3 flex-wrap mb-4">
        <div className="flex items-center gap-3 min-w-0">
          <Button size="sm" variant="ghost" onClick={onBack}>
            <X className="h-4 w-4" />
          </Button>
          <div className="min-w-0">
            <h1 className="text-lg font-extrabold truncate">{node?.title ?? 'Node'}</h1>
            <p className="text-xs text-muted-foreground">
              {node?.lesson?.title} · {node?.nodeType} · {node?.requiredScore}% để qua
            </p>
          </div>
        </div>
      </div>

      {isLoading && <LoadingBlock />}
      {error && <ErrorBlock message="Không tải được node." onRetry={() => refetch()} />}
      {node && (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">{node.exercises.length} exercise · tổng {node.exercises.reduce((s: number, e: Row) => s + (e.questions?.length ?? 0), 0)} câu hỏi</p>
          {node.exercises.map((ex) => (
            <div key={ex.id} className="rounded-2xl border bg-card p-4">
              <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-xs font-bold tabular-nums text-muted-foreground">#{ex.order}</span>
                  <span className="font-mono text-xs font-bold text-primary truncate">{ex.type}</span>
                  {ex.status !== 'PUBLISHED' && <span className="text-[10px] font-bold rounded-full bg-warning/15 text-warning px-2 py-0.5">{ex.status}</span>}
                </div>
                <div className="flex items-center gap-1.5">
                  <Button size="sm" variant="ghost" onClick={() => setPreview(preview ? null : (ex.questions ?? []))}>
                    <Eye className="h-4 w-4" /> {preview ? 'Ẩn' : 'Xem câu hỏi'}
                  </Button>
                  <DeleteEntityButton entity="exercise" id={ex.id} label={`exercise ${ex.order}`} isAdmin={isAdmin} />
                </div>
              </div>
              {ex.instructions && <p className="text-xs text-muted-foreground mb-2">{ex.instructions}</p>}
              {preview && (
                <div className="space-y-2 border-t pt-3">
                  {(ex.questions ?? []).map((q: Row) => (
                    <QuestionCard key={q.id} question={q} />
                  ))}
                  {(ex.questions ?? []).length === 0 && <p className="text-xs text-muted-foreground">Chưa có câu hỏi.</p>}
                </div>
              )}
              <div className="mt-3 border-t pt-3">
                <QuestionBuilderDialog exerciseId={ex.id} exerciseType={ex.type} order={(ex.questions?.length ?? 0) + 1} />
              </div>
            </div>
          ))}
          <CreateExerciseDialog nodeId={nodeId} maxOrder={node.exercises.length} />
        </div>
      )}
    </div>
  )
}

function QuestionCard({ question: q }: { question: Row }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border bg-muted/30 px-3.5 py-2.5">
      <button className="w-full flex items-center gap-2 text-left outline-none" onClick={() => setOpen((v) => !v)}>
        {open ? <ChevronDown className="h-3.5 w-3.5 shrink-0" /> : <ChevronRight className="h-3.5 w-3.5 shrink-0" />}
        <span className="font-mono text-[11px] text-muted-foreground shrink-0">{q.type}</span>
        <span className="text-xs truncate flex-1">{describeQuestion(q)}</span>
        <span className={cn('text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0', q.itemRefKey ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground')}>
          {q.itemRefKey ? `${q.itemRefType}:${q.itemRefKey}` : '—'}
        </span>
      </button>
      {open && (
        <div className="mt-2.5 space-y-2 text-xs">
          <div>
            <p className="font-bold mb-1">data</p>
            <pre className="bg-background rounded-lg p-2.5 overflow-x-auto nice-scroll text-[11px] leading-relaxed">{JSON.stringify(typeof q.data === 'string' ? JSON.parse(q.data) : q.data, null, 2)}</pre>
          </div>
          <div>
            <p className="font-bold mb-1">correctData</p>
            <pre className="bg-background rounded-lg p-2.5 overflow-x-auto nice-scroll text-[11px] leading-relaxed">{JSON.stringify(typeof q.correctData === 'string' ? JSON.parse(q.correctData) : q.correctData, null, 2)}</pre>
          </div>
          {q.explanation && <p className="text-muted-foreground">Giải thích: {q.explanation}</p>}
          <DeleteEntityButton entity="question" id={q.id} label="câu hỏi này" isAdmin small />
        </div>
      )}
    </div>
  )
}

function describeQuestion(q: Row): string {
  try {
    const d = typeof q.data === 'string' ? JSON.parse(q.data) : q.data
    if (d.promptJa) return d.promptJa
    if (d.sentence) return d.sentence
    if (d.speakText) return d.speakText
    if (d.character) return `${d.character} (${d.strokeCount ?? '?'} nét)`
    if (d.promptVi) return d.promptVi
    if (d.audioText) return `🔊 ${d.audioText}`
    if (d.pairs) return `${d.pairs.length} cặp nối`
    if (d.accept) return d.accept[0]
    return d.kind ?? q.type
  } catch {
    return q.type
  }
}

function CreateExerciseDialog({ nodeId, maxOrder }: { nodeId: string; maxOrder: number }) {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState('MULTIPLE_CHOICE')
  const mut = useAdminMutation(
    () => callApi('/api/admin/content?entity=exercise', 'POST', { nodeId, type, order: maxOrder + 1, status: 'PUBLISHED' }),
    'Đã tạo exercise',
    [['admin', 'node']]
  )
  return (
    <>
      <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
        <Plus className="h-4 w-4" /> Thêm exercise
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Tạo exercise mới</DialogTitle>
          </DialogHeader>
          <div className="space-y-1.5">
            <Label>Loại exercise</Label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="max-h-72">
                {EXERCISE_TYPES.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Hủy</Button>
            <Button onClick={() => mut.mutate(undefined, { onSuccess: () => setOpen(false) })} disabled={mut.isPending}>
              Tạo
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

/* ------------------------------ Question builder ---------------------------- */

function QuestionBuilderDialog({ exerciseId, exerciseType, order }: { exerciseId: string; exerciseType: string; order: number }) {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState(exerciseType === 'MIXED_REVIEW' ? 'MULTIPLE_CHOICE' : exerciseType)
  const defaultKind = kindForType(type)
  const [kind, setKind] = useState(defaultKind)
  const [state, setState] = useState<Row>({})
  const [jsonMode, setJsonMode] = useState(false)
  const [manualData, setManualData] = useState('')
  const [manualCorrect, setManualCorrect] = useState('')

  const mut = useAdminMutation(
    () => {
      let data: unknown
      let correct: unknown
      if (jsonMode) {
        data = JSON.parse(manualData || '{}')
        correct = JSON.parse(manualCorrect || '{}')
      } else {
        ;({ data, correct } = buildFromState(kind, state))
      }
      return callApi('/api/admin/content?entity=question', 'POST', {
        exerciseId,
        type,
        order,
        data,
        correctData: correct,
        explanation: state.explanation || undefined,
        itemRefType: state.itemRefType || undefined,
        itemRefKey: state.itemRefKey || undefined,
      })
    },
    'Đã tạo câu hỏi',
    [['admin', 'node']]
  )

  const openDialog = () => {
    setOpen(true)
    setKind(kindForType(type))
    setState({})
    setJsonMode(false)
  }

  return (
    <>
      <Button size="sm" variant="outline" onClick={openDialog}>
        <Plus className="h-4 w-4" /> Thêm câu hỏi
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[88vh] overflow-y-auto nice-scroll">
          <DialogHeader>
            <DialogTitle>Soạn câu hỏi mới</DialogTitle>
          </DialogHeader>

          <div className="grid sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label>Loại câu hỏi</Label>
              <Select value={type} onValueChange={(v) => { setType(v); setKind(kindForType(v)); setState({}) }}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent className="max-h-64">{EXERCISE_TYPES.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>Kiểu tương tác</Label>
              <Select value={kind} onValueChange={(v) => { setKind(v); setState({}) }}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>{KINDS.map((k) => <SelectItem key={k} value={k}>{k}</SelectItem>)}</SelectContent>
              </Select>
            </div>
          </div>

          {!jsonMode ? (
            <KindBuilder kind={kind} state={state} setState={setState} />
          ) : (
            <div className="space-y-3">
              <div className="space-y-1.5">
                <Label>data (JSON)</Label>
                <Textarea value={manualData} onChange={(e) => setManualData(e.target.value)} rows={6} className="font-mono text-xs" placeholder='{"kind":"choice","options":[]}' />
              </div>
              <div className="space-y-1.5">
                <Label>correctData (JSON)</Label>
                <Textarea value={manualCorrect} onChange={(e) => setManualCorrect(e.target.value)} rows={3} className="font-mono text-xs" placeholder='{"optionId":"a"}' />
              </div>
            </div>
          )}

          <div className="grid sm:grid-cols-3 gap-3">
            <div className="space-y-1.5 sm:col-span-3">
              <Label>Giải thích (hiện sau khi trả lời)</Label>
              <Input value={state.explanation ?? ''} onChange={(e) => setState((s) => ({ ...s, explanation: e.target.value }))} />
            </div>
            <div className="space-y-1.5">
              <Label>SRS item type</Label>
              <Select value={state.itemRefType ?? 'none'} onValueChange={(v) => setState((s) => ({ ...s, itemRefType: v === 'none' ? '' : v }))}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">—</SelectItem>
                  <SelectItem value="VOCAB">VOCAB</SelectItem>
                  <SelectItem value="KANJI">KANJI</SelectItem>
                  <SelectItem value="GRAMMAR">GRAMMAR</SelectItem>
                  <SelectItem value="KANA">KANA</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <Label>SRS item key (term / ký tự / code)</Label>
              <Input value={state.itemRefKey ?? ''} onChange={(e) => setState((s) => ({ ...s, itemRefKey: e.target.value }))} placeholder="せんせい" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="inline-flex items-center gap-2 text-sm cursor-pointer">
              <Switch checked={jsonMode} onCheckedChange={setJsonMode} />
              Chế độ JSON thủ công
            </label>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setOpen(false)}>Hủy</Button>
              <Button
                onClick={() => mut.mutate(undefined, { onSuccess: () => setOpen(false) })}
                disabled={mut.isPending}
              >
                Tạo câu hỏi
              </Button>
            </div>
          </div>
          {mut.isPending && <p className="text-xs text-muted-foreground">Đang tạo…</p>}
        </DialogContent>
      </Dialog>
    </>
  )
}

function kindForType(type: string): string {
  if (['LISTEN_SELECT'].includes(type)) return 'audio-choice'
  if (['LISTEN_TYPE', 'DICTATION'].includes(type)) return 'text-input'
  if (['SENTENCE_ORDER', 'WORD_BANK', 'TRANSLATE_VI_JA'].includes(type)) return 'token-order'
  if (type === 'MATCHING') return 'matching'
  if (['SPEAK', 'PRONUNCIATION'].includes(type)) return 'speak'
  if (['KANA_WRITING', 'KANJI_WRITING', 'KANJI_STROKE_ORDER'].includes(type)) return 'writing'
  if (['READING', 'DIALOGUE'].includes(type)) return 'passage'
  if (type === 'FILL_BLANK' || type === 'PARTICLE_FILL') return 'fill-blank'
  return 'choice'
}

/* Kind-specific builders */
function KindBuilder({ kind, state, setState }: { kind: string; state: Row; setState: (fn: (s: Row) => Row) => void }) {
  const set = (patch: Row) => setState((s) => ({ ...s, ...patch }))

  if (kind === 'choice' || kind === 'audio-choice' || kind === 'fill-blank') {
    const options: { id: string; text: string }[] = state.options ?? []
    return (
      <div className="space-y-3">
        {kind === 'choice' && (
          <>
            <TextField label="Đề tiếng Nhật (promptJa)" value={state.promptJa ?? ''} onChange={(v) => set({ promptJa: v })} placeholder="わたしはがくせいです。" />
            <TextField label="Chú thích (promptSub)" value={state.promptSub ?? ''} onChange={(v) => set({ promptSub: v })} />
          </>
        )}
        {kind === 'audio-choice' && (
          <>
            <TextField label="Nội dung audio (tiếng Nhật)" value={state.audioText ?? ''} onChange={(v) => set({ audioText: v })} placeholder="わたしはがくせいです。" />
            <TextField label="Nghĩa (hiện sau khi trả lời)" value={state.meaningVi ?? ''} onChange={(v) => set({ meaningVi: v })} />
          </>
        )}
        {kind === 'fill-blank' && (
          <TextField label="Câu có chỗ trống (dùng ___)" value={state.sentence ?? ''} onChange={(v) => set({ sentence: v })} placeholder="わたし___がくせいです。" />
        )}
        <div className="space-y-2">
          <Label>Options (chọn radio = đáp án đúng)</Label>
          {options.map((o, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                type="radio"
                name="correct-option"
                checked={state.correctOption === o.id}
                onChange={() => set({ correctOption: o.id })}
                className="accent-primary h-4 w-4"
                aria-label={`Đáp án đúng: ${o.text}`}
              />
              <Input
                value={o.text}
                onChange={(e) => {
                  const next = [...options]
                  next[i] = { ...o, text: e.target.value }
                  set({ options: next })
                }}
                placeholder={`Lựa chọn ${i + 1}`}
              />
              <Button type="button" variant="ghost" size="icon" onClick={() => set({ options: options.filter((x) => x.id !== o.id) })} aria-label="Xóa option">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button type="button" variant="outline" size="sm" onClick={() => set({ options: [...options, { id: `o${options.length + 1}`, text: '' }] })}>
            <Plus className="h-4 w-4" /> Thêm option
          </Button>
        </div>
      </div>
    )
  }

  if (kind === 'token-order') {
    const tokens: { id: string; text: string }[] = state.tokens ?? []
    const distractors: { id: string; text: string }[] = state.distractors ?? []
    return (
      <div className="space-y-3">
        <TextField label="Nghĩa tiếng Việt (promptVi)" value={state.promptVi ?? ''} onChange={(v) => set({ promptVi: v })} placeholder="Tôi là học sinh." />
        <TextField label="Audio sau khi trả lời (tùy chọn)" value={state.audioText ?? ''} onChange={(v) => set({ audioText: v })} />
        <div className="space-y-2">
          <Label>Tokens — nhập theo THỨ TỰ ĐÚNG</Label>
          {tokens.map((t, i) => (
            <div key={t.id} className="flex items-center gap-2">
              <span className="text-xs font-bold tabular-nums text-muted-foreground w-4">{i + 1}</span>
              <Input
                value={t.text}
                onChange={(e) => {
                  const next = [...tokens]
                  next[i] = { ...t, text: e.target.value }
                  set({ tokens: next })
                }}
                placeholder="わたし / は / …"
              />
              <Button type="button" variant="ghost" size="icon" onClick={() => set({ tokens: tokens.filter((x) => x.id !== t.id) })} aria-label="Xóa token">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button type="button" variant="outline" size="sm" onClick={() => set({ tokens: [...tokens, { id: `t${tokens.length + 1}`, text: '' }] })}>
            <Plus className="h-4 w-4" /> Thêm token
          </Button>
        </div>
        <div className="space-y-2">
          <Label>Tokens gây nhiễu (tùy chọn)</Label>
          {distractors.map((t, i) => (
            <div key={t.id} className="flex items-center gap-2">
              <Input
                value={t.text}
                onChange={(e) => {
                  const next = [...distractors]
                  next[i] = { ...t, text: e.target.value }
                  set({ distractors: next })
                }}
                placeholder="ですか"
              />
              <Button type="button" variant="ghost" size="icon" onClick={() => set({ distractors: distractors.filter((x) => x.id !== t.id) })} aria-label="Xóa token nhiễu">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button type="button" variant="outline" size="sm" onClick={() => set({ distractors: [...distractors, { id: `d${distractors.length + 1}`, text: '' }] })}>
            <Plus className="h-4 w-4" /> Thêm nhiễu
          </Button>
        </div>
      </div>
    )
  }

  if (kind === 'text-input') {
    return (
      <div className="space-y-3">
        <TextField label="Nhãn" value={state.label ?? ''} onChange={(v) => set({ label: v })} />
        <TextField label="Placeholder" value={state.placeholder ?? ''} onChange={(v) => set({ placeholder: v })} />
        <TextField label="Audio đề (nếu là bài nghe)" value={state.audioText ?? ''} onChange={(v) => set({ audioText: v })} />
        <TextField label="Đáp án chấp nhận (phân tách bằng |)" value={state.accept ?? ''} onChange={(v) => set({ accept: v })} placeholder="watashi wa gakusei desu|わたしはがくせいです" />
      </div>
    )
  }

  if (kind === 'matching') {
    const pairs: { id: string; left: string; right: string }[] = state.pairs ?? []
    return (
      <div className="space-y-2">
        <Label>Các cặp nối</Label>
        {pairs.map((p, i) => (
          <div key={p.id} className="grid grid-cols-[1fr_1fr_auto] gap-2 items-center">
            <Input
              value={p.left}
              onChange={(e) => {
                const next = [...pairs]
                next[i] = { ...p, left: e.target.value }
                set({ pairs: next })
              }}
              placeholder="せんせい"
              className="jp"
            />
            <Input
              value={p.right}
              onChange={(e) => {
                const next = [...pairs]
                next[i] = { ...p, right: e.target.value }
                set({ pairs: next })
              }}
              placeholder="giáo viên"
            />
            <Button type="button" variant="ghost" size="icon" onClick={() => set({ pairs: pairs.filter((x) => x.id !== p.id) })} aria-label="Xóa cặp">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button type="button" variant="outline" size="sm" onClick={() => set({ pairs: [...pairs, { id: `p${pairs.length + 1}`, left: '', right: '' }] })}>
          <Plus className="h-4 w-4" /> Thêm cặp
        </Button>
      </div>
    )
  }

  if (kind === 'speak') {
    return (
      <div className="space-y-3">
        <TextField label="Câu cần đọc (speakText)" value={state.speakText ?? ''} onChange={(v) => set({ speakText: v })} placeholder="わたしはベトナムじんです。" className="jp" />
        <TextField label="Reading (tùy chọn)" value={state.reading ?? ''} onChange={(v) => set({ reading: v })} />
        <TextField label="Nghĩa tiếng Việt" value={state.meaningVi ?? ''} onChange={(v) => set({ meaningVi: v })} />
        <TextField label="Ngưỡng similarity (mặc định 65)" value={state.threshold ?? ''} onChange={(v) => set({ threshold: v })} />
      </div>
    )
  }

  if (kind === 'writing') {
    return (
      <div className="grid grid-cols-2 gap-3">
        <TextField label="Ký tự" value={state.character ?? ''} onChange={(v) => set({ character: v })} className="jp" />
        <TextField label="Số nét" value={state.strokeCount ?? ''} onChange={(v) => set({ strokeCount: v })} />
        <TextField label="Romaji" value={state.romaji ?? ''} onChange={(v) => set({ romaji: v })} />
        <TextField label="Nghĩa" value={state.meaningVi ?? ''} onChange={(v) => set({ meaningVi: v })} />
      </div>
    )
  }

  if (kind === 'passage') {
    return (
      <div className="space-y-3">
        <p className="text-xs text-muted-foreground bg-muted/50 rounded-lg p-3 leading-relaxed">
          Passage (đoạn hội thoại): mỗi dòng gồm speaker | câu Nhật | bản dịch, phân tách bằng dấu <code>|</code>.
          Câu hỏi comprehension bên trong passage hiện chỉ hỗ trợ qua chế độ JSON thủ công — dùng builder choice để soạn trước rồi dán JSON.
        </p>
        <TextField label="Tiêu đề đoạn" value={state.title ?? ''} onChange={(v) => set({ title: v })} />
        <div className="space-y-1.5">
          <Label>Các dòng (mỗi dòng: speaker | tiếng Nhật | bản dịch)</Label>
          <Textarea
            rows={6}
            value={state.lines ?? ''}
            onChange={(e) => set({ lines: e.target.value })}
            placeholder={'リン | はじめまして。リンです。 | Rất vui được gặp bạn. Tôi là Linh.'}
          />
        </div>
      </div>
    )
  }

  return <p className="text-sm text-muted-foreground">Chọn kiểu tương tác để bắt đầu.</p>
}

function buildFromState(kind: string, state: Row): { data: unknown; correct: unknown } {
  if (kind === 'choice' || kind === 'audio-choice' || kind === 'fill-blank') {
    const options = (state.options ?? []).filter((o: { text: string }) => o.text.trim())
    const data: Row = { kind }
    if (state.promptJa) data.promptJa = state.promptJa
    if (state.promptSub) data.promptSub = state.promptSub
    if (state.audioText) data.audioText = state.audioText
    if (state.meaningVi) data.meaningVi = state.meaningVi
    if (state.sentence) data.sentence = state.sentence
    data.options = options
    return { data, correct: { optionId: state.correctOption } }
  }
  if (kind === 'token-order') {
    const tokens = (state.tokens ?? []).filter((t: { text: string }) => t.text.trim())
    const distractors = (state.distractors ?? []).filter((t: { text: string }) => t.text.trim())
    return {
      data: { kind, promptVi: state.promptVi, tokens, distractors: distractors.length ? distractors : undefined, ...(state.audioText ? { audioText: state.audioText } : {}) },
      correct: { tokenOrder: tokens.map((t: { id: string }) => t.id) },
    }
  }
  if (kind === 'text-input') {
    const accepts = String(state.accept ?? '')
      .split('|')
      .map((s: string) => s.trim())
      .filter(Boolean)
    const data: Row = { kind, accept: accepts }
    if (state.label) data.label = state.label
    if (state.placeholder) data.placeholder = state.placeholder
    if (state.audioText) data.audioText = state.audioText
    return { data, correct: { answers: accepts } }
  }
  if (kind === 'matching') {
    const pairs = (state.pairs ?? [])
      .filter((p: { left: string; right: string }) => p.left.trim() && p.right.trim())
      .map((p: { id: string; left: string; right: string }) => ({ id: p.id, left: { text: p.left }, right: { text: p.right } }))
    return {
      data: { kind, pairs },
      correct: { pairs: Object.fromEntries(pairs.map((p: { id: string; right: { text: string } }) => [p.id, p.right.text])) },
    }
  }
  if (kind === 'speak') {
    const data: Row = { kind, speakText: state.speakText, meaningVi: state.meaningVi }
    if (state.reading) data.reading = state.reading
    if (state.threshold) data.threshold = Number(state.threshold)
    return { data, correct: { score: Number(state.threshold ?? 65) } }
  }
  if (kind === 'writing') {
    return {
      data: { kind, character: state.character, strokeCount: Number(state.strokeCount ?? 1), romaji: state.romaji, meaningVi: state.meaningVi, guide: true },
      correct: { score: 60 },
    }
  }
  if (kind === 'passage') {
    const lines = String(state.lines ?? '')
      .split('\n')
      .map((line: string) => line.trim())
      .filter(Boolean)
      .map((line: string) => {
        const [speaker, text, vi] = line.split('|').map((s: string) => s?.trim())
        return { speaker: speaker || undefined, text: text ?? line, vi: vi ?? '' }
      })
    return { data: { kind, title: state.title || undefined, lines, questions: [] }, correct: { answers: [] } }
  }
  return { data: { kind }, correct: {} }
}

/* ------------------------------ Generic entities ---------------------------- */

function EntitySection({
  entity, fields, title, isAdmin, searchable,
}: {
  entity: string
  fields: FieldDef[]
  title: string
  isAdmin: boolean
  searchable?: boolean
}) {
  const [q, setQ] = useState('')
  const [editing, setEditing] = useState<Row | null>(null)
  const [creating, setCreating] = useState(false)
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['admin', entity, q],
    queryFn: () => callApi(`/api/admin/content?entity=${entity}&q=${encodeURIComponent(q)}`, 'GET') as Promise<Row[]>,
  })

  return (
    <div>
      <div className="flex items-center justify-between gap-3 flex-wrap mb-5">
        <h1 className="text-xl font-extrabold">{title} ({data?.length ?? 0})</h1>
        <div className="flex gap-2">
          {searchable && (
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Tìm kiếm…" className="w-48" />
          )}
          <Button size="sm" onClick={() => setCreating(true)}>
            <Plus className="h-4 w-4" /> Thêm mới
          </Button>
        </div>
      </div>

      {isLoading && <LoadingBlock />}
      {error && <ErrorBlock message={`Không tải được ${title.toLowerCase()}.`} onRetry={() => refetch()} />}
      {data && (
        <div className="rounded-2xl border bg-card overflow-hidden">
          <div className="max-h-[70vh] overflow-y-auto nice-scroll">
            {data.map((row) => (
              <div key={row.id} className="flex items-center gap-3 px-4 py-3 border-b last:border-0 hover:bg-muted/30 transition-colors">
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate">
                    {row.term ?? row.character ?? row.title ?? row.code ?? row.id}
                    {row.reading && <span className="jp text-xs text-muted-foreground ml-2">{row.reading}</span>}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {row.meaningVi ?? row.explanationVi?.slice(0, 80) ?? `N${row.jlpt ?? ''} · ${row.strokeCount ?? ''} nét`}
                  </p>
                </div>
                <Button size="sm" variant="ghost" onClick={() => setEditing(row)}>
                  <Pencil className="h-4 w-4" />
                </Button>
                <DeleteEntityButton entity={entity} id={row.id} label={String(row.term ?? row.character ?? row.title ?? row.id)} isAdmin={isAdmin} small />
              </div>
            ))}
            {data.length === 0 && <p className="text-sm text-muted-foreground py-8 text-center">Chưa có dữ liệu.</p>}
          </div>
        </div>
      )}

      {(creating || editing) && (
        <EntityFormDialog
          entity={entity}
          fields={fields}
          initial={editing ?? {}}
          onClose={() => {
            setCreating(false)
            setEditing(null)
          }}
        />
      )}
    </div>
  )
}

function EntityFormDialog({ entity, fields, initial, onClose }: { entity: string; fields: FieldDef[]; initial: Row; onClose: () => void }) {
  const isEdit = !!initial.id
  const [form, setForm] = useState<Row>(() => {
    const init: Row = {}
    for (const f of fields) {
      const v = initial[f.name]
      if (v === undefined || v === null) init[f.name] = f.type === 'json' ? '[]' : ''
      else if (f.type === 'json') init[f.name] = JSON.stringify(v)
      else init[f.name] = String(v)
    }
    return init
  })
  const mut = useAdminMutation(
    () => {
      const payload: Row = {}
      for (const f of fields) {
        let v: unknown = form[f.name]
        if (f.type === 'number') v = Number(v)
        if (f.type === 'json') v = safeJson(v as string, undefined)
        if (v !== '' && v !== undefined) payload[f.name] = v
      }
      if (entity === 'grammar' && isEdit) delete payload.code
      return isEdit
        ? callApi(`/api/admin/content/${initial.id}?entity=${entity}`, 'PATCH', { data: payload })
        : callApi(`/api/admin/content?entity=${entity}`, 'POST', payload)
    },
    isEdit ? 'Đã cập nhật' : 'Đã tạo mới',
    [['admin', entity]]
  )

  return (
    <Dialog open onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-xl max-h-[85vh] overflow-y-auto nice-scroll">
        <DialogHeader>
          <DialogTitle>{isEdit ? `Chỉnh sửa: ${initial.term ?? initial.character ?? initial.title ?? initial.code ?? ''}` : `Tạo ${entity} mới`}</DialogTitle>
        </DialogHeader>
        <div className="grid sm:grid-cols-2 gap-3">
          {fields.map((f) => (
            <FieldInput key={f.name} field={f} value={form[f.name] ?? ''} onChange={(v) => setForm((s) => ({ ...s, [f.name]: v }))} />
          ))}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Đóng</Button>
          <Button onClick={() => mut.mutate(undefined, { onSuccess: onClose })} disabled={mut.isPending}>
            <Save className="h-4 w-4" /> {isEdit ? 'Lưu thay đổi' : 'Tạo'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

/* --------------------------------- Config ---------------------------------- */

function ConfigSection() {
  const { data, isLoading } = useQuery({
    queryKey: ['admin', 'config'],
    queryFn: () => callApi('/api/admin/config', 'GET') as Promise<{ hearts: { enabled: boolean; maxHearts: number; regenMinutes: number } }>,
  })
  const [enabled, setEnabled] = useState(true)
  const [maxHearts, setMaxHearts] = useState(5)
  const [regen, setRegen] = useState(30)
  const loaded = useQuery({
    queryKey: ['admin', 'config-loaded', data],
    queryFn: async () => {
      if (data) {
        setEnabled(data.hearts.enabled)
        setMaxHearts(data.hearts.maxHearts)
        setRegen(data.hearts.regenMinutes)
      }
      return true
    },
    enabled: !!data,
  })

  const mut = useAdminMutation(
    () => callApi('/api/admin/config', 'PATCH', { hearts: { enabled, maxHearts: Number(maxHearts), regenMinutes: Number(regen) } }),
    'Đã lưu cấu hình',
    [['admin', 'config'], ['overview']]
  )

  if (isLoading || !loaded.data) return <LoadingBlock />

  return (
    <div className="max-w-lg">
      <h1 className="text-xl font-extrabold mb-5">Cấu hình hệ thống</h1>
      <div className="rounded-2xl border bg-card p-5 space-y-5">
        <h2 className="font-bold">Hệ thống tim (Heart/Energy)</h2>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-sm">Bật hệ thống tim</p>
            <p className="text-xs text-muted-foreground">Tắt = học không giới hạn (không khuyến khích cho chế độ nghiêm túc).</p>
          </div>
          <Switch checked={enabled} onCheckedChange={setEnabled} aria-label="Bật hệ thống tim" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <Label>Số tim tối đa</Label>
            <Input type="number" min={1} max={10} value={maxHearts} onChange={(e) => setMaxHearts(Number(e.target.value))} />
          </div>
          <div className="space-y-1.5">
            <Label>Hồi 1 tim sau (phút)</Label>
            <Input type="number" min={1} max={720} value={regen} onChange={(e) => setRegen(Number(e.target.value))} />
          </div>
        </div>
        <Button onClick={() => mut.mutate()} disabled={mut.isPending} className="rounded-xl">
          <Save className="h-4 w-4" /> Lưu cấu hình
        </Button>
      </div>
      <p className="text-xs text-muted-foreground mt-4 leading-relaxed max-w-md">
        Người dùng luôn có thể luyện tập (Practice/SRS/lỗi sai) mà không mất tim và hoàn thành luyện tập sẽ được +1 tim — không có paywall.
      </p>
    </div>
  )
}

/* ---------------------------------- Audit ---------------------------------- */

function AuditSection() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['admin', 'audit'],
    queryFn: () => callApi('/api/admin/stats?logs=1', 'GET') as Promise<{ logs: { id: string; admin: string; action: string; entity: string; entityId: string | null; createdAt: string }[] }>,
  })

  if (isLoading) return <LoadingBlock />
  if (error || !data) return <ErrorBlock message="Không tải được nhật ký." onRetry={() => refetch()} />

  return (
    <div>
      <h1 className="text-xl font-extrabold mb-5">Nhật ký thao tác ({data.logs.length})</h1>
      <div className="rounded-2xl border bg-card overflow-hidden">
        <div className="max-h-[70vh] overflow-y-auto nice-scroll">
          {data.logs.map((l) => (
            <div key={l.id} className="flex items-center gap-3 px-4 py-3 border-b last:border-0 text-sm">
              <span className={cn(
                'text-[10px] font-bold rounded-full px-2 py-0.5 shrink-0',
                l.action === 'DELETE' ? 'bg-destructive/10 text-destructive' : l.action === 'PUBLISH' ? 'bg-success/10 text-success' : 'bg-primary/10 text-primary'
              )}>
                {l.action}
              </span>
              <span className="font-semibold shrink-0">@{l.admin}</span>
              <span className="text-muted-foreground truncate flex-1">{l.entity}{l.entityId ? ` · ${l.entityId.slice(-8)}` : ''}</span>
              <span className="text-xs text-muted-foreground shrink-0">{new Date(l.createdAt).toLocaleString('vi-VN')}</span>
            </div>
          ))}
          {data.logs.length === 0 && <p className="text-sm text-muted-foreground py-8 text-center">Chưa có thao tác nào.</p>}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------- Small pieces ------------------------------- */

function DeleteEntityButton({ entity, id, label, isAdmin, small }: { entity: string; id: string; label: string; isAdmin: boolean; small?: boolean }) {
  const [open, setOpen] = useState(false)
  const qc = useQueryClient()
  const mut = useMutation({
    mutationFn: () => callApi(`/api/admin/content/${id}?entity=${entity}`, 'DELETE'),
    onSuccess: () => {
      toast.success('Đã xóa')
      qc.invalidateQueries({ queryKey: ['admin'] })
      qc.invalidateQueries({ queryKey: ['lesson'] })
      qc.invalidateQueries({ queryKey: ['learn'] })
    },
    onError: (e) => toast.error(e instanceof ApiClientError ? e.message : 'Xóa thất bại'),
  })
  return (
    <>
      <Button
        size={small ? 'icon' : 'sm'}
        variant="ghost"
        className="text-destructive hover:bg-destructive/10"
        onClick={() => setOpen(true)}
        disabled={!isAdmin}
        title={isAdmin ? `Xóa ${label}` : 'Chỉ ADMIN mới được xóa'}
        aria-label={`Xóa ${label}`}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Xóa {label}?</AlertDialogTitle>
            <AlertDialogDescription>
              Hành động này không thể hoàn tác. Dữ liệu con liên quan cũng sẽ bị xóa theo.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Hủy</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-white hover:bg-destructive/90"
              onClick={() => mut.mutate()}
            >
              <RefreshCw className={cn('h-4 w-4 mr-1', mut.isPending && 'animate-spin')} /> Xóa vĩnh viễn
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

function FieldInput({ field, value, onChange }: { field: FieldDef; value: string; onChange: (v: string) => void }) {
  if (field.type === 'textarea' || field.type === 'json') {
    return (
      <div className={cn('space-y-1.5', field.type === 'json' && 'sm:col-span-2')}>
        <Label htmlFor={`f-${field.name}`}>{field.label}</Label>
        <Textarea
          id={`f-${field.name}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={field.type === 'json' ? 3 : 2}
          placeholder={field.placeholder}
          className={field.type === 'json' ? 'font-mono text-xs' : undefined}
        />
      </div>
    )
  }
  if (field.type === 'select') {
    return (
      <div className="space-y-1.5">
        <Label>{field.label}</Label>
        <Select value={value || field.options?.[0]?.value} onValueChange={onChange}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {field.options?.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    )
  }
  return (
    <div className="space-y-1.5">
      <Label htmlFor={`f-${field.name}`}>{field.label}</Label>
      <Input
        id={`f-${field.name}`}
        type={field.type === 'number' ? 'number' : 'text'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={field.placeholder}
      />
    </div>
  )
}

function TextField({ label, value, onChange, placeholder, className }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; className?: string }) {
  return (
    <div className="space-y-1.5">
      <Label>{label}</Label>
      <Input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={className} />
    </div>
  )
}

function safeJson(s: string, fallback: unknown): unknown {
  try {
    return JSON.parse(s)
  } catch {
    if (fallback !== undefined) return fallback
    throw new ApiClientError(400, 'BAD_JSON', `JSON không hợp lệ: ${s.slice(0, 40)}…`)
  }
}
