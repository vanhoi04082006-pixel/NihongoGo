'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Check, Loader2, Mic, PenLine, Square, Volume2, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AudioButton, useTtsPlayer } from '@/components/shared/audio-button'
import { StrokeOrderPlayer } from '@/components/kana/stroke-order-player'
import { WritingCanvas, computeShapeSimilarity, type Strokes } from './canvas-write'

/* ----------------------------- Shared contracts ---------------------------- */

export interface ChoiceOptionDTO {
  id: string
  text: string
  sub?: string
  audio?: string
  big?: boolean
}

export interface QuestionDataDTO {
  kind: 'choice' | 'audio-choice' | 'fill-blank' | 'token-order' | 'text-input' | 'matching' | 'speak' | 'writing' | 'passage'
  promptJa?: string
  promptSub?: string
  options?: ChoiceOptionDTO[]
  layout?: 'grid' | 'list'
  audioText?: string
  meaningVi?: string
  sentence?: string
  promptVi?: string
  tokens?: { id: string; text: string }[]
  distractors?: { id: string; text: string }[]
  label?: string
  placeholder?: string
  accept?: string[]
  pairs?: { id: string; left: { text: string; reading?: string }; right: { text: string } }[]
  speakText?: string
  reading?: string
  threshold?: number
  character?: string
  romaji?: string
  strokeCount?: number
  guide?: boolean
  lines?: { speaker?: string; text: string; reading?: string; vi: string }[]
  questions?: unknown[]
  /** Tiêu đề đoạn đọc (kind: passage) */
  title?: string
}

export interface ClientQuestion {
  id: string
  type: string
  prompt?: string
  data: QuestionDataDTO
}

export interface AnswerDraft {
  optionId?: string
  text?: string
  tokenOrder?: string[]
  pairs?: Record<string, string>
  strokeCount?: number
  shapeSimilarity?: number
  /** Kết quả nhận diện giọng nói (kind: speak) — từ browser SpeechRecognition
   *  hoặc audioBase64 để server ASR. Server TỰ TÍNH điểm từ transcript. */
  transcription?: string
  audioBase64?: string
}

export interface FeedbackState {
  correct: boolean
  expected: string
  explanation: string | null
  score: number | null
  transcription: string | null
}

export interface RendererProps {
  question: ClientQuestion
  draft: AnswerDraft
  setDraft: (patch: Partial<AnswerDraft>) => void
  disabled: boolean
  feedback: FeedbackState | null
}

export const TYPE_INSTRUCTION: Record<string, string> = {
  MULTIPLE_CHOICE: 'Chọn đáp án đúng',
  SELECT_MEANING: 'Chọn nghĩa đúng',
  SELECT_WORD: 'Chọn từ đúng',
  FILL_BLANK: 'Điền vào chỗ trống',
  WORD_BANK: 'Dựng câu từ các từ cho sẵn',
  SENTENCE_ORDER: 'Sắp xếp thành câu đúng',
  MATCHING: 'Nối các cặp đúng với nhau',
  TRANSLATE_JA_VI: 'Dịch sang tiếng Việt',
  TRANSLATE_VI_JA: 'Dịch sang tiếng Nhật',
  LISTEN_SELECT: 'Nghe và chọn đáp án đúng',
  LISTEN_TYPE: 'Nghe và gõ lại (romaji hoặc kana)',
  DICTATION: 'Chép chính tả câu bạn nghe được',
  SPEAK: 'Đọc to câu sau',
  PRONUNCIATION: 'Luyện phát âm',
  READING: 'Đọc đoạn văn và trả lời',
  DIALOGUE: 'Đọc hội thoại và trả lời',
  HIRAGANA_RECOGNITION: 'Chọn cách đọc của ký tự Hiragana',
  KATAKANA_RECOGNITION: 'Chọn cách đọc của ký tự Katakana',
  KANA_WRITING: 'Viết tay ký tự vào khung bên dưới',
  KANJI_RECOGNITION: 'Chọn nghĩa của chữ Hán',
  KANJI_MEANING: 'Chọn nghĩa của chữ Hán',
  KANJI_READING: 'Chọn cách đọc của chữ Hán',
  KANJI_WRITING: 'Viết tay chữ Hán vào khung',
  KANJI_STROKE_ORDER: 'Viết tay chữ Hán theo đúng số nét',
  GRAMMAR_CHOICE: 'Chọn câu / đáp án đúng về ngữ pháp',
  ERROR_CORRECTION: 'Chọn câu viết đúng',
  CONJUGATION: 'Chọn dạng biến đổi đúng',
  PARTICLE_FILL: 'Chọn trợ từ đúng',
  MIXED_REVIEW: 'Câu hỏi tổng hợp',
}

/* ------------------------------- Choice grid ------------------------------- */

export function ChoiceRenderer({ question, draft, setDraft, disabled, feedback }: RendererProps) {
  const d = question.data
  // Thứ tự options ĐÃ được xáo trộn tại player (displayQuestion) — renderer
  // render đúng thứ tự nhận được để phím tắt 1-9 khớp ô hiển thị.
  const options = d.options ?? []
  const layout = d.layout ?? 'list'
  const selectedId = draft.optionId

  return (
    <div className="space-y-4">
      {d.promptJa && (
        <div className="text-center">
          <p className={cn('jp jp-serif font-bold text-foreground', options.some((o) => o.big) ? 'text-6xl sm:text-7xl py-4' : 'text-2xl sm:text-3xl')}>
            {d.promptJa}
          </p>
          {d.promptSub && <p className="text-sm text-muted-foreground mt-1">{d.promptSub}</p>}
        </div>
      )}
      <div
        className={cn(
          'gap-2.5',
          layout === 'grid' ? 'grid grid-cols-2 max-w-md mx-auto' : 'flex flex-col max-w-xl mx-auto'
        )}
        role="group"
        aria-label="Các lựa chọn"
      >
        {options.map((o, i) => {
          const isSelected = selectedId === o.id
          // Khi sai: tô sáng cả đáp án đúng (chuẩn UX luyện tập — học từ lỗi sai)
          const isCorrectOption =
            !!feedback && !feedback.correct && !isSelected && o.text === feedback.expected
          return (
            <button
              key={o.id}
              onClick={() => !disabled && setDraft({ optionId: o.id })}
              disabled={disabled}
              aria-pressed={isSelected}
              className={cn(
                'group relative rounded-2xl border-2 p-3.5 text-left transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring',
                layout === 'grid' ? 'flex flex-col items-center justify-center text-center min-h-20' : 'flex items-center gap-3',
                o.big && layout === 'grid' ? 'py-6' : '',
                isSelected && !feedback
                  ? 'border-primary bg-primary/10 shadow-sm scale-[1.02]'
                  : 'border-border hover:border-primary/50 hover:bg-muted/50',
                disabled && !isSelected && !isCorrectOption && 'opacity-60',
                feedback && isSelected && (feedback.correct ? 'border-success bg-success/10 animate-pop-in' : 'border-destructive bg-destructive/10 animate-shake'),
                isCorrectOption && 'border-success bg-success/10 opacity-100 animate-pop-in'
              )}
            >
              <span
                className={cn(
                  'hidden sm:inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-bold',
                  isCorrectOption
                    ? 'bg-success text-success-foreground'
                    : feedback && isSelected && !feedback.correct
                      ? 'bg-destructive text-destructive-foreground'
                      : isSelected
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                )}
                aria-hidden
              >
                {isCorrectOption ? <Check className="h-3.5 w-3.5" /> : feedback && isSelected && !feedback.correct ? <X className="h-3.5 w-3.5" /> : i + 1}
              </span>
              <span className={cn('font-extrabold break-words', o.big ? 'jp jp-serif text-4xl sm:text-5xl' : '')}>
                {o.text}
              </span>
              {o.sub && <span className="text-xs text-muted-foreground font-normal mt-0.5">{o.sub}</span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}

/* ------------------------------ Audio choice ------------------------------- */

export function AudioChoiceRenderer({ question, draft, setDraft, disabled, feedback }: RendererProps) {
  const d = question.data
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center gap-3 py-2">
        <AudioButton text={d.audioText ?? ''} size="lg" autoPlay />
        <p className="text-xs text-muted-foreground">Bấm vào nút loa để nghe lại (thử chế độ Chậm nếu cần)</p>
      </div>
      <ChoiceRenderer question={question} draft={draft} setDraft={setDraft} disabled={disabled} feedback={feedback} />
      {feedback && d.meaningVi && (
        <p className="text-center text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Nghĩa: </span>
          {d.meaningVi}
        </p>
      )}
    </div>
  )
}

/* -------------------------------- Fill blank ------------------------------- */

export function FillBlankRenderer({ question, draft, setDraft, disabled, feedback }: RendererProps) {
  const d = question.data
  const options = d.options ?? []
  const selected = options.find((o) => o.id === draft.optionId)
  const parts = (d.sentence ?? '').split('___')

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border bg-muted/40 px-5 py-6 text-center max-w-xl mx-auto">
        <p className="jp text-xl sm:text-2xl font-semibold leading-relaxed break-words">
          {parts[0]}
          <span
            className={cn(
              'inline-flex min-w-20 justify-center rounded-xl border-b-4 px-2 mx-1 align-baseline',
              feedback
                ? feedback.correct
                  ? 'border-success text-success'
                  : 'border-destructive text-destructive'
                : selected
                  ? 'border-primary text-primary'
                  : 'border-muted-foreground/40 text-muted-foreground'
            )}
          >
            {feedback ? feedback.expected : selected ? selected.text : '＿＿＿'}
          </span>
          {parts[1] ?? ''}
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-xl mx-auto">
        {options.map((o) => {
          const isSelected = draft.optionId === o.id
          const isCorrectOption =
            !!feedback && !feedback.correct && !isSelected && o.text === feedback.expected
          return (
            <button
              key={o.id}
              onClick={() => !disabled && setDraft({ optionId: o.id })}
              disabled={disabled}
              aria-pressed={isSelected}
              className={cn(
                'jp rounded-xl border-2 border-b-4 py-3 font-extrabold text-lg transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring',
                isSelected && !feedback
                  ? 'border-primary border-b-primary bg-primary/10 scale-[1.03]'
                  : 'border-border border-b-border hover:border-primary/50 hover:border-b-primary/50 hover:bg-muted/50',
                feedback && isSelected && (feedback.correct ? 'border-success border-b-success bg-success/10 animate-pop-in' : 'border-destructive border-b-destructive bg-destructive/10 animate-shake'),
                isCorrectOption && 'border-success border-b-success bg-success/10 opacity-100 animate-pop-in',
                disabled && !isSelected && !isCorrectOption && 'opacity-60'
              )}
            >
              {o.text}
            </button>
          )
        })}
      </div>
    </div>
  )
}

/* ------------------------------- Token order ------------------------------- */

export function TokenOrderRenderer({ question, draft, setDraft, disabled, feedback }: RendererProps) {
  const d = question.data
  const tokens = useMemo(() => [...(d.tokens ?? []), ...(d.distractors ?? [])], [d.tokens, d.distractors])
  // Shuffle một lần khi mount (player remount renderer theo question.id)
  const [bankOrder] = useState<string[]>(() =>
    tokens.map((t) => t.id).sort(() => Math.random() - 0.5)
  )

  const textById = useMemo(() => new Map(tokens.map((t) => [t.id, t.text])), [tokens])
  const selected = draft.tokenOrder ?? []
  const used = new Set(selected)

  const add = (id: string) => {
    if (disabled || feedback || used.has(id)) return
    setDraft({ tokenOrder: [...selected, id] })
  }
  const remove = (id: string) => {
    if (disabled || feedback) return
    setDraft({ tokenOrder: selected.filter((t) => t !== id) })
  }

  return (
    <div className="space-y-5">
      {d.promptVi && (
        <p className="text-center text-lg font-medium max-w-xl mx-auto">
          <span className="text-muted-foreground text-sm block mb-1">Nghĩa của câu:</span>
          {d.promptVi}
        </p>
      )}
      <div
        className="rounded-2xl border-2 border-dashed bg-muted/30 p-4 min-h-24 flex flex-wrap items-center justify-center gap-2"
        aria-label="Vùng dựng câu"
      >
        {selected.length === 0 && <span className="text-sm text-muted-foreground">Bấm các từ bên dưới để dựng câu…</span>}
        {selected.map((id) => (
          <button
            key={id}
            onClick={() => remove(id)}
            disabled={disabled || !!feedback}
            className={cn(
              'jp rounded-xl border-2 border-b-4 px-3.5 py-2 font-bold transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring',
              feedback ? 'border-primary/50 border-b-primary/50 bg-primary/5' : 'border-primary border-b-primary bg-primary/10 hover:border-destructive/60 hover:border-b-destructive/60'
            )}
          >
            {textById.get(id)}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto" role="group" aria-label="Kho từ">
        {bankOrder.map((id) => {
          const isUsed = used.has(id)
          return (
            <button
              key={id}
              onClick={() => add(id)}
              disabled={disabled || isUsed || !!feedback}
              className={cn(
                'jp rounded-xl border-2 border-b-4 px-3.5 py-2 font-bold transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring',
                isUsed
                  ? 'border-border border-b-border opacity-25'
                  : 'border-border border-b-border bg-card hover:border-primary hover:border-b-primary hover:bg-primary/5'
              )}
            >
              {textById.get(id)}
            </button>
          )
        })}
      </div>
      {feedback && !feedback.correct && (
        <p className="text-center jp text-success font-semibold">
          Đáp án: {feedback.expected}
        </p>
      )}
    </div>
  )
}

/* -------------------------------- Text input ------------------------------- */

export function TextInputRenderer({ question, draft, setDraft, disabled, feedback }: RendererProps) {
  const d = question.data
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { play } = useTtsPlayer()

  useEffect(() => {
    inputRef.current?.focus()
  }, [question.id])

  return (
    <div className="space-y-5">
      {d.audioText ? (
        <div className="flex flex-col items-center gap-3 py-2">
          <AudioButton text={d.audioText} size="lg" autoPlay />
          <p className="text-xs text-muted-foreground">Nghe và gõ lại nội dung bạn nghe được</p>
        </div>
      ) : d.label ? (
        <p className="text-center text-lg font-semibold">{d.label}</p>
      ) : null}

      <div className="max-w-xl mx-auto">
        <input
          ref={inputRef}
          value={draft.text ?? ''}
          onChange={(e) => setDraft({ text: e.target.value })}
          disabled={disabled || !!feedback}
          placeholder={d.placeholder ?? ''}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          className={cn(
            'w-full rounded-2xl border-2 bg-card px-4 py-4 text-xl text-center font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring',
            feedback ? (feedback.correct ? 'border-success' : 'border-destructive') : 'border-border focus:border-primary'
          )}
          aria-label={d.label ?? 'Ô nhập câu trả lời'}
        />
      </div>

      {feedback && !feedback.correct && (
        <p className="text-center">
          <span className="text-sm text-muted-foreground block mb-0.5">Đáp án đúng:</span>
          <span className="jp text-xl font-bold text-success">{feedback.expected}</span>
        </p>
      )}
      {feedback?.correct && d.audioText && (
        <div className="flex justify-center">
          <button
            onClick={() => play(d.audioText!)}
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline outline-none"
          >
            <Volume2 className="h-4 w-4" /> Nghe lại câu đúng
          </button>
        </div>
      )}
    </div>
  )
}

/* --------------------------------- Matching -------------------------------- */

export function MatchingRenderer({ question, draft, setDraft, disabled, feedback }: RendererProps) {
  const d = question.data
  const pairs = d.pairs ?? []
  const [activeLeft, setActiveLeft] = useState<string | null>(null)
  const done = draft.pairs ?? {}
  const matchedRights = new Set(Object.values(done))
  // Xáo trộn CỘT PHẢI mỗi lần vào câu — nếu giữ nguyên thứ tự của cột trái,
  // người học bấm "chéo" i-i từ trên xuống là ghép đúng toàn bộ mà không cần
  // đọc nghĩa. Cột trái giữ thứ tự dữ liệu, chỉ xáo cột phải.
  const [rightOrder] = useState(() => {
    const idx = pairs.map((_, i) => i)
    for (let i = idx.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[idx[i], idx[j]] = [idx[j], idx[i]]
    }
    return idx
  })

  /* --- Đường nối SVG giữa các cặp đã ghép (giữ khối cố định, không trôi) --- */
  const wrapRef = useRef<HTMLDivElement>(null)
  const leftRefs = useRef(new Map<string, HTMLElement>())
  const rightRefs = useRef(new Map<string, HTMLElement>())
  const [links, setLinks] = useState<{ id: string; d: string }[]>([])

  // Vẽ lại đường nối mỗi khi: ghép cặp mới / xáo cột phải / resize / paginate.
  // Deferred qua queueMicrotask cho hợp rule react-hooks/set-state-in-effect.
  const recompute = () => {
    const wrap = wrapRef.current
    if (!wrap) return
    const wr = wrap.getBoundingClientRect()
    const at = (el: HTMLElement | undefined, side: 'r' | 'l') => {
      if (!el) return null
      const r = el.getBoundingClientRect()
      return {
        x: (side === 'r' ? r.right : r.left) - wr.left,
        y: r.top + r.height / 2 - wr.top,
      }
    }
    const out: { id: string; d: string }[] = []
    for (const [leftId, rightText] of Object.entries(done)) {
      const from = at(leftRefs.current.get(leftId), 'r')
      const to = at(rightRefs.current.get(rightText), 'l')
      if (!from || !to) continue
      const mx = (from.x + to.x) / 2
      out.push({
        id: leftId,
        d: `M ${from.x} ${from.y} C ${mx} ${from.y}, ${mx} ${to.y}, ${to.x} ${to.y}`,
      })
    }
    setLinks(out)
  }
  useEffect(() => {
    queueMicrotask(recompute)
    const ro = new ResizeObserver(() => queueMicrotask(recompute))
    if (wrapRef.current) ro.observe(wrapRef.current)
    return () => ro.disconnect()
     
  }, [done, rightOrder, question.id])

  const pickLeft = (id: string) => {
    if (disabled || feedback || done[id]) return
    setActiveLeft(id === activeLeft ? null : id)
  }

  const pickRight = (text: string) => {
    if (disabled || feedback || !activeLeft || matchedRights.has(text)) return
    setDraft({ pairs: { ...done, [activeLeft]: text } })
    setActiveLeft(null)
  }

  return (
    <div className="space-y-4">
      <p className="text-center text-sm text-muted-foreground">Bấm một ô bên trái, sau đó chọn nghĩa tương ứng bên phải</p>
      <div ref={wrapRef} className="relative max-w-2xl mx-auto">
        {/* Đường nối các cặp đã ghép — cong mượt, đè giữa hai cột */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-[1] overflow-visible" aria-hidden>
          {links.map((l) => (
            <path
              key={l.id}
              d={l.d}
              fill="none"
              stroke="var(--success)"
              strokeWidth={4}
              strokeLinecap="round"
              opacity={feedback ? 0.9 : 0.75}
              style={{ filter: 'drop-shadow(0 1px 1px color-mix(in srgb, var(--success) 40%, transparent))' }}
            />
          ))}
        </svg>
        <div className="grid grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-2.5 relative z-[2]" role="group" aria-label="Cột ký tự">
            {pairs.map((p) => {
              const isDone = !!done[p.id]
              return (
                <button
                  key={p.id}
                  ref={(el) => {
                    if (el) leftRefs.current.set(p.id, el)
                    else leftRefs.current.delete(p.id)
                  }}
                  onClick={() => pickLeft(p.id)}
                  disabled={disabled || !!feedback || isDone}
                  aria-pressed={activeLeft === p.id}
                  className={cn(
                    'w-full min-h-[4.25rem] rounded-2xl border-2 px-3 py-3 text-center transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring flex flex-col items-center justify-center',
                    isDone
                      ? 'border-success/60 bg-success/10'
                      : activeLeft === p.id
                        ? 'border-primary bg-primary/10 scale-[1.03] shadow-md'
                        : 'border-border hover:border-primary/50 hover:bg-muted/50'
                  )}
                >
                  <span className="jp text-2xl font-bold leading-tight">{p.left.text}</span>
                  {p.left.reading && <span className="text-xs text-muted-foreground leading-tight">{p.left.reading}</span>}
                </button>
              )
            })}
          </div>
          <div className="space-y-2.5 relative z-[2]" role="group" aria-label="Cột nghĩa">
            {rightOrder.map((i) => {
              const p = pairs[i]!
              const isUsed = matchedRights.has(p.right.text)
              return (
                <button
                  key={p.id}
                  ref={(el) => {
                    if (el) rightRefs.current.set(p.right.text, el)
                    else rightRefs.current.delete(p.right.text)
                  }}
                  onClick={() => pickRight(p.right.text)}
                  disabled={disabled || !!feedback || isUsed}
                  className={cn(
                    'w-full min-h-[4.25rem] rounded-2xl border-2 px-3 py-3 font-semibold text-center transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring flex items-center justify-center',
                    isUsed
                      ? 'border-success/60 bg-success/10'
                      : activeLeft
                        ? 'border-sakura bg-sakura/10 hover:scale-[1.02]'
                        : 'border-border hover:border-sakura/60 hover:bg-muted/50'
                  )}
                >
                  {p.right.text}
                </button>
              )
            })}
          </div>
        </div>
      </div>
      <p className="text-center text-xs text-muted-foreground">
        Đã ghép {Object.keys(done).length}/{pairs.length} cặp
      </p>
    </div>
  )
}

/* --------------------------------- Speaking -------------------------------- */

/* Web Speech API (zero-cost, không cần API key) — TypeScript DOM lib chưa có
 * đầy đủ nên khai báo tối giản tại chỗ. */
interface SpeechRecognitionEventLike {
  results: ArrayLike<ArrayLike<{ transcript: string }> & { isFinal: boolean }>
}
interface SpeechRecognitionLike {
  lang: string
  continuous: boolean
  interimResults: boolean
  maxAlternatives: number
  start(): void
  stop(): void
  abort(): void
  onresult: ((e: SpeechRecognitionEventLike) => void) | null
  onerror: ((e: { error?: string }) => void) | null
  onend: (() => void) | null
}
type SpeechRecognitionCtor = new () => SpeechRecognitionLike

function getBrowserSpeechRecognition(): SpeechRecognitionCtor | null {
  if (typeof window === 'undefined') return null
  const w = window as unknown as { SpeechRecognition?: SpeechRecognitionCtor; webkitSpeechRecognition?: SpeechRecognitionCtor }
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null
}

export function SpeakRenderer({ question, draft, setDraft, disabled, feedback }: RendererProps) {
  const d = question.data
  const [state, setState] = useState<'idle' | 'recording' | 'processing'>('idle')
  const [micError, setMicError] = useState<string | null>(null)
  const [engine, setEngine] = useState<'browser' | 'server' | null>(null)
  const mediaRef = useRef<MediaRecorder | null>(null)
  const srRef = useRef<SpeechRecognitionLike | null>(null)
  const chunksRef = useRef<Blob[]>([])
  const [elapsed, setElapsed] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
      mediaRef.current?.stream.getTracks().forEach((t) => t.stop())
      try { srRef.current?.abort() } catch { /* đã dừng */ }
    }
  }, [])

  const startTimer = () => {
    setElapsed(0)
    timerRef.current = setInterval(() => {
      setElapsed((s) => {
        if (s >= 9) {
          stopAll()
          return s
        }
        return s + 1
      })
    }, 1000)
  }

  const stopAll = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    try { srRef.current?.stop() } catch { /* noop */ }
    if (mediaRef.current && mediaRef.current.state === 'recording') {
      mediaRef.current.stop()
    }
  }

  /* Cấp 1 — browser SpeechRecognition (ja-JP, zero-cost): transcript về thẳng client */
  const startBrowser = () => {
    const SR = getBrowserSpeechRecognition()
    if (!SR) return false
    try {
      const rec = new SR()
      rec.lang = 'ja-JP'
      rec.continuous = false
      rec.interimResults = false
      rec.maxAlternatives = 1
      rec.onresult = (e) => {
        const transcript = e.results[0]?.[0]?.transcript?.trim() ?? ''
        if (transcript) setDraft({ transcription: transcript })
        else setMicError('Không nghe rõ giọng nói — hãy thử lại.')
        setState('idle')
      }
      rec.onerror = (e) => {
        srRef.current = null
        // Lỗi mạng/hoạt ảnh recognizer → tự động chuyển sang ghi âm + ASR server
        startMediaRecorder()
      }
      rec.onend = () => setState((s) => (s === 'recording' ? 'idle' : s))
      srRef.current = rec
      setEngine('browser')
      setMicError(null)
      rec.start()
      setState('recording')
      startTimer()
      return true
    } catch {
      return false
    }
  }

  /* Cấp 2 — MediaRecorder + ASR phía server (tùy chọn, có thể không cấu hình) */
  const startMediaRecorder = async () => {
    setMicError(null)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mime = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : 'audio/mp4'
      const recorder = new MediaRecorder(stream, { mimeType: mime })
      chunksRef.current = []
      recorder.ondataavailable = (e) => e.data.size > 0 && chunksRef.current.push(e.data)
      recorder.onstop = async () => {
        stream.getTracks().forEach((t) => t.stop())
        setState('processing')
        const blob = new Blob(chunksRef.current, { type: mime })
        const reader = new FileReader()
        reader.onloadend = () => {
          const base64 = (reader.result as string).split(',')[1] ?? ''
          setDraft({ audioBase64: base64 })
          setState('idle')
        }
        reader.readAsDataURL(blob)
      }
      mediaRef.current = recorder
      setEngine('server')
      recorder.start()
      setState('recording')
      startTimer()
    } catch {
      setMicError('Không truy cập được micro. Hãy cấp quyền cho trình duyệt, hoặc bấm "Bỏ qua" bên dưới.')
      setState('idle')
    }
  }

  const startRecording = async () => {
    setState('idle')
    setDraft({ transcription: undefined, audioBase64: undefined })
    if (!startBrowser()) await startMediaRecorder()
  }

  const hasAudio = !!draft.audioBase64 || !!draft.transcription

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border bg-muted/30 px-5 py-6 text-center max-w-xl mx-auto">
        <p className="jp jp-serif text-2xl sm:text-3xl font-bold leading-relaxed">{d.speakText}</p>
        {d.reading && <p className="text-sm text-muted-foreground mt-1.5">{d.reading}</p>}
        {d.meaningVi && <p className="text-sm text-muted-foreground mt-1">({d.meaningVi})</p>}
      </div>

      <div className="flex flex-col items-center gap-3">
        {state === 'idle' && (
          <button
            onClick={hasAudio ? undefined : startRecording}
            disabled={disabled || !!feedback || hasAudio}
            className={cn(
              'relative inline-flex h-20 w-20 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all',
              hasAudio || feedback
                ? 'bg-success text-success-foreground shadow-lg shadow-success/25'
                : 'bg-sakura text-sakura-foreground shadow-lg shadow-sakura/30 hover:scale-105 active:scale-95'
            )}
            aria-label={hasAudio ? 'Đã ghi âm xong' : 'Bấm để bắt đầu ghi âm'}
          >
            {hasAudio || feedback ? <Volume2 className="h-8 w-8" /> : <Mic className="h-8 w-8" />}
          </button>
        )}
        {state === 'recording' && (
          <button
            onClick={stopAll}
            className="relative inline-flex h-20 w-20 items-center justify-center rounded-full bg-destructive text-white shadow-lg shadow-destructive/30 outline-none focus-visible:ring-2 focus-visible:ring-ring hover:scale-105 active:scale-95"
            aria-label="Dừng ghi âm"
          >
            <span className="absolute inset-0 rounded-full animate-ping bg-destructive/30" aria-hidden />
            <Square className="h-8 w-8" />
          </button>
        )}
        {state === 'processing' && (
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-muted">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        )}

        <p className="text-sm text-muted-foreground" aria-live="polite">
          {state === 'recording'
            ? `Đang nghe… ${elapsed}s (tối đa 10s)`
            : state === 'processing'
              ? 'Đang xử lý giọng nói…'
              : hasAudio
                ? 'Đã ghi nhận giọng đọc — bấm Kiểm tra để chấm điểm'
                : 'Bấm nút micro và đọc to câu trên'}
        </p>

        {micError && <p className="text-sm text-destructive text-center max-w-sm">{micError}</p>}

        {!hasAudio && (
          <button
            onClick={() => setDraft({ audioBase64: undefined, transcription: undefined, text: '__skip__' })}
            disabled={disabled || !!feedback}
            className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2 outline-none"
          >
            Không có micro — bỏ qua câu này
          </button>
        )}
      </div>

      {feedback && (
        <div className="rounded-2xl border bg-card p-4 max-w-xl mx-auto space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Độ tương đồng chuyển âm</span>
            <span className={cn('font-bold tabular-nums', feedback.correct ? 'text-success' : 'text-destructive')}>
              {feedback.score ?? 0}/100
            </span>
          </div>
          {feedback && engine && (
            <p className="text-[10px] text-muted-foreground">{engine === 'browser' ? 'Nhận diện tại trình duyệt (Web Speech API)' : 'Nhận diện qua máy chủ'}</p>
          )}
          <div className="h-2.5 rounded-full bg-muted overflow-hidden">
            <div
              className={cn('h-full rounded-full transition-all', feedback.correct ? 'bg-success' : 'bg-destructive')}
              style={{ width: `${Math.max(3, feedback.score ?? 0)}%` }}
            />
          </div>
          {feedback.transcription && (
            <p className="text-sm text-muted-foreground">
              Hệ thống nghe được: <span className="jp font-semibold text-foreground">{feedback.transcription}</span>
            </p>
          )}
          <p className="text-[11px] leading-relaxed text-muted-foreground">
            Lưu ý: điểm dựa trên độ tương đồng văn bản giữa kết quả nhận diện giọng nói và câu mẫu — chưa phải đánh giá âm vị học chi tiết.
          </p>
        </div>
      )}
    </div>
  )
}

/* --------------------------------- Writing --------------------------------- */

export function WritingRenderer({ question, draft, setDraft, disabled, feedback }: RendererProps) {
  const d = question.data
  const [strokes, setStrokes] = useState<Strokes>([])
  // Hướng dẫn viết chữ (nét thứ tự) — mở/tắt, mặc định ẩn để tự viết trước
  const [showGuide, setShowGuide] = useState(false)

  const handleStrokes = (s: Strokes) => {
    setStrokes(s)
    // Cập nhật số nét vào draft NGAY khi vẽ — nút KIỂM TRA phụ thuộc vào đây
    setDraft({ strokeCount: s.length })
  }

  const computeAnswer = (): { strokeCount: number; shapeSimilarity: number } => {
    const similarity = computeShapeSimilarity(d.character ?? '', strokes)
    return { strokeCount: strokes.length, shapeSimilarity: similarity }
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-center gap-6 flex-wrap">
        <WritingCanvas
          character={d.character ?? ''}
          guide={d.guide ?? true}
          onStrokesChange={handleStrokes}
          disabled={disabled || !!feedback}
        />
      </div>

      {/* Hướng dẫn viết: xem từng nét chuẩn (KanjiVG) trước/khi tự tay viết */}
      <div className="max-w-md mx-auto">
        <button
          type="button"
          onClick={() => setShowGuide((v) => !v)}
          aria-expanded={showGuide}
          className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-primary/40 bg-primary/[0.04] px-4 py-2.5 text-sm font-bold text-primary transition-all hover:border-primary/60 hover:bg-primary/10 outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <PenLine className="h-4 w-4" aria-hidden />
          {showGuide ? 'Ẩn hướng dẫn viết' : `Xem hướng dẫn viết ${d.character ?? ''}`}
          <span className="text-[10px] font-semibold text-muted-foreground" aria-hidden>
            ({d.strokeCount ?? '?'} nét)
          </span>
        </button>
        {showGuide && (
          <div className="mt-3">
            <StrokeOrderPlayer character={d.character ?? ''} />
          </div>
        )}
      </div>

      {feedback ? (
        <div className="rounded-2xl border bg-card p-4 max-w-md mx-auto space-y-2 text-center">
          <p className="font-semibold">
            Kết quả heuristic: <span className={feedback.correct ? 'text-success' : 'text-destructive'}>{feedback.score ?? 0}/100</span>
          </p>
          <p className="text-xs text-muted-foreground">
            Chữ mẫu <span className="jp text-foreground font-bold text-base">{d.character}</span> · chuẩn {d.strokeCount} nét · bạn vẽ {draft.strokeCount ?? 0} nét
          </p>
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            Cách chấm: 50% số nét + 50% độ phủ hình dạng so với chữ chuẩn (heuristic, chưa phải AI nhận diện nét).
          </p>
        </div>
      ) : (
        <p className="text-center text-xs text-muted-foreground">
          Chữ mẫu: <span className="jp font-bold text-foreground text-lg">{d.character}</span> ({d.strokeCount} nét){d.romaji ? ` · ${d.romaji}` : ''}
          {d.meaningVi ? ` · ${d.meaningVi}` : ''}
        </p>
      )}
      {/* Player gọi qua custom event; kết quả trả về đồng bộ qua event.detail */}
      <SpeakingWriteBridge computeAnswer={computeAnswer} onComputed={(a) => setDraft(a)} />
    </div>
  )
}

function SpeakingWriteBridge({
  computeAnswer,
  onComputed,
}: {
  computeAnswer: () => { strokeCount: number; shapeSimilarity: number }
  onComputed: (a: { strokeCount: number; shapeSimilarity: number }) => void
}) {
  // Player dispatch 'ngg-prepare-answer' kèm detail — handler ghi kết quả vào
  // detail.answer ĐỒNG BỘ (dispatchEvent chạy listener ngay) nên không có race.
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ answer?: { strokeCount: number; shapeSimilarity: number } }>).detail
      const answer = computeAnswer()
      if (detail && typeof detail === 'object') detail.answer = answer
      onComputed(answer)
    }
    window.addEventListener('ngg-prepare-answer', handler)
    return () => window.removeEventListener('ngg-prepare-answer', handler)
  }, [computeAnswer, onComputed])
  return null
}

/* ------------------------------- Passage block ------------------------------ */

export function PassageBlock({ passage, compact }: { passage: ClientQuestion; compact?: boolean }) {
  const d = passage.data
  const lines = d.lines ?? []
  const [showVi, setShowVi] = useState(false)

  return (
    <div className="rounded-2xl border bg-muted/30 overflow-hidden">
      <div className="flex items-center justify-between gap-2 px-4 py-2.5 border-b bg-muted/50">
        <p className="font-bold text-sm">{d.title ?? 'Hội thoại'}</p>
        <button
          onClick={() => setShowVi((v) => !v)}
          className="text-xs font-semibold text-primary hover:underline outline-none"
          aria-pressed={showVi}
        >
          {showVi ? 'Ẩn bản dịch' : 'Xem bản dịch'}
        </button>
      </div>
      <div className={cn('p-4 space-y-3 nice-scroll', compact ? 'max-h-64 overflow-y-auto' : 'max-h-80 overflow-y-auto')}>
        {lines.map((line, i) => (
          <div key={i} className="flex gap-2.5">
            <div className="shrink-0 pt-0.5">
              <AudioButton text={line.text} size="sm" labelSlow={false} />
            </div>
            <div className="min-w-0">
              {line.speaker && <span className="text-xs font-bold text-sakura block">{line.speaker}</span>}
              <p className="jp font-semibold break-words">{line.text}</p>
              {line.reading && <p className="text-xs text-muted-foreground">{line.reading}</p>}
              {showVi && <p className="text-sm text-muted-foreground mt-0.5 italic">{line.vi}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
