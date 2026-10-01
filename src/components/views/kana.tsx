'use client'

import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'
import { api, ApiClientError } from '@/lib/client/api'
import { useHashRoute } from '@/components/app/router'
import { AudioButton } from '@/components/shared/audio-button'
import { WritingCanvas, computeShapeSimilarity } from '@/components/lesson/canvas-write'
import { LoadingBlock, ErrorBlock, PageHeader, EmptyBlock } from '@/components/shared/widgets'
import { Button } from '@/components/ui/button'
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

const GROUP_LABEL: Record<string, string> = {
  BASIC: 'Âm cơ bản',
  DAKUTEN: 'Dakuten (゛)',
  HANDAKUTEN: 'Handakuten (゜)',
  YOUON: 'Youon (âm ghép)',
}

export function KanaView({ tab, charId }: { tab: string; charId: string | null }) {
  const { navigate } = useHashRoute()
  const type = tab === 'katakana' ? 'KATAKANA' : 'HIRAGANA'
  const [mode, setMode] = useState<'table' | 'practice' | 'write'>('table')
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['kana', type],
    queryFn: () => api<{ characters: KanaCharDTO[] }>(`/api/kana?type=${type}`),
  })

  const chars = useMemo(() => data?.characters ?? [], [data])
  const selected = charId ? chars.find((c) => c.id === charId || c.character === decodeURIComponent(charId)) : null

  if (isLoading) return <LoadingBlock label="Đang tải bảng chữ…" />
  if (error || !data) return <ErrorBlock message="Không tải được bảng kana." onRetry={() => refetch()} />

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
          <div className="flex items-center gap-2">
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
          </div>
        }
      />

      {/* Mode switch */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {(
          [
            { key: 'table', label: 'Bảng chữ' },
            { key: 'practice', label: 'Luyện nhận diện' },
            { key: 'write', label: 'Luyện viết tay' },
          ] as const
        ).map((m) => (
          <button
            key={m.key}
            onClick={() => setMode(m.key)}
            aria-pressed={mode === m.key}
            className={cn(
              'rounded-xl px-4 py-2 text-sm font-bold border-2 transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring',
              mode === m.key ? 'border-primary bg-primary/10 text-primary' : 'border-border hover:border-primary/40'
            )}
          >
            {m.label}
          </button>
        ))}
      </div>

      {mode === 'table' && (
        <div className="space-y-8">
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
                    <div
                      key={c.id}
                      className={cn(
                        'rounded-xl border bg-card p-2.5 text-center transition-all hover:shadow-md hover:-translate-y-0.5',
                        selected?.id === c.id && 'border-primary ring-2 ring-primary/30'
                      )}
                    >
                      <p className="jp jp-serif text-3xl font-bold leading-none mb-1">{c.character}</p>
                      <p className="text-xs font-bold text-primary">{c.romaji}</p>
                      <div className="mt-1.5 flex items-center justify-center gap-1">
                        <AudioButton text={c.character} size="sm" labelSlow={false} />
                      </div>
                      <p className="text-[10px] text-muted-foreground mt-1.5 leading-tight" title={`${c.exampleWord} — ${c.exampleMeaning}`}>
                        <span className="jp font-semibold">{c.exampleWord}</span> · {c.exampleMeaning}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      )}

      {mode === 'practice' && <KanaPractice chars={chars} />}
      {mode === 'write' && <KanaWriting chars={chars.filter((c) => c.group === 'BASIC')} />}
    </div>
  )
}

/* ------------------------------ Recognition quiz --------------------------- */

function KanaPractice({ chars }: { chars: KanaCharDTO[] }) {
  const [queue, setQueue] = useState<KanaCharDTO[]>(() => [...chars].sort(() => Math.random() - 0.5).slice(0, 15))
  const [index, setIndex] = useState(0)
  const [choice, setChoice] = useState<string | null>(null)
  const [correct, setCorrect] = useState(0)
  const [done, setDone] = useState(false)

  const current = queue[index]
  const options = useMemo(() => {
    if (!current) return []
    const others = chars.filter((c) => c.romaji !== current.romaji)
    const distractors = [...others].sort(() => Math.random() - 0.5).slice(0, 3).map((c) => c.romaji)
    return [current.romaji, ...distractors].sort(() => Math.random() - 0.5)
  }, [current, chars])

  const answer = (romaji: string) => {
    if (choice || !current) return
    setChoice(romaji)
    if (romaji === current.romaji) setCorrect((c) => c + 1)
    setTimeout(() => {
      setChoice(null)
      if (index + 1 >= queue.length) setDone(true)
      else setIndex((i) => i + 1)
    }, 600)
  }

  const restart = () => {
    setQueue([...chars].sort(() => Math.random() - 0.5).slice(0, 15))
    setIndex(0)
    setCorrect(0)
    setDone(false)
  }

  if (done) {
    return (
      <EmptyBlock
        icon="Trophy"
        title={`Hoàn thành: ${correct}/${queue.length} đúng`}
        description={`${Math.round((correct / queue.length) * 100)}% độ chính xác — luyện thêm để nhớ sâu hơn!`}
        action={<Button onClick={restart}>Luyện lại</Button>}
      />
    )
  }

  if (!current) return <EmptyBlock title="Không có dữ liệu" />
  return (
    <div className="max-w-md mx-auto py-4">
      <p className="text-center text-sm text-muted-foreground mb-4">
        Câu {index + 1}/{queue.length} · đúng {correct}
      </p>
      <div className="jp jp-serif text-center text-8xl font-bold py-8 select-none" aria-label="ký tự">
        {current.character}
      </div>
      <div className="grid grid-cols-2 gap-3">
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
        <p className="text-sm font-bold text-primary mt-1">{current.romaji} · {current.strokeCount} nét</p>
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
          <div className="mt-4 rounded-2xl border-2 p-4 text-center space-y-1.5"
            style={{ borderColor: result.passed ? 'var(--success)' : 'var(--destructive)' }}>
            <p className="font-extrabold text-lg">
              {result.passed ? <span className="text-success">Khá giống! {result.score}/100</span> : <span className="text-destructive">Chưa đạt — {result.score}/100</span>}
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
