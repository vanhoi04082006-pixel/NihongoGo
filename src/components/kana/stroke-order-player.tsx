'use client'

import { useEffect, useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { ChevronLeft, ChevronRight, Pause, Play, RotateCcw } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useStrokeParts } from '@/components/kana/use-stroke-data'

/**
 * Trình phát nét chữ (stroke order) — dữ liệu KanjiVG (CC BY-SA 3.0).
 * Fetch /strokes/{hex}.svg, parse các <path id="...-sN"> theo thứ tự nét,
 * render inline SVG: nét đã viết đậm, nét hiện tại highlight + animate,
 * nét chưa viết mờ. Ký tự youon (きゃ) gồm nhiều SVG → ghép cạnh nhau,
 * đánh số nét liên tục. Cache bằng TanStack Query (dùng lại khi mở lại dialog).
 */

const SPEEDS = [0.5, 1, 2] as const
const BASE_STROKE_MS = 900

export function StrokeOrderPlayer({
  character,
  reducedMotion = false,
  className,
}: {
  character: string
  /** Tôn trọng cài đặt giảm chuyển động: không animate nét (hiện tức thì). */
  reducedMotion?: boolean
  className?: string
}) {
  const { data: parts, isPending, isError } = useStrokeParts(character)
  const [step, setStep] = useState(0) // số nét đã "viết"
  const [playing, setPlaying] = useState(false)
  const [speed, setSpeed] = useState<number>(1)

  const total = useMemo(() => parts?.reduce((sum, p) => sum + p.paths.length, 0) ?? 0, [parts])
  const isPlaying = playing && step < total

  // Tự động phát: mỗi nét chạy BASE_STROKE_MS/speed rồi sang nét tiếp
  useEffect(() => {
    if (!playing || !parts) return
    if (step >= total) return
    const dur = reducedMotion ? 60 : BASE_STROKE_MS / speed
    const t = setTimeout(() => {
      const nextStep = Math.min(step + 1, total)
      setStep(nextStep)
      if (nextStep >= total) setPlaying(false)
    }, dur)
    return () => clearTimeout(t)
  }, [playing, step, total, speed, parts, reducedMotion])

  const togglePlay = () => {
    if (!parts || total === 0) return
    if (!playing && step >= total) setStep(0) // phát lại từ đầu
    setPlaying((p) => !p)
  }
  const stepBy = (delta: number) => {
    setPlaying(false)
    setStep((s) => Math.max(0, Math.min(total, s + delta)))
  }
  const restart = () => {
    setPlaying(false)
    setStep(0)
  }
  const cycleSpeed = () => {
    const i = SPEEDS.indexOf(speed as 0.5)
    setSpeed(SPEEDS[(i + 1) % SPEEDS.length] ?? 1)
  }

  const offsets = useMemo(() => {
    const arr: number[] = []
    let acc = 0
    for (const p of parts ?? []) {
      arr.push(acc)
      acc += p.paths.length
    }
    return arr
  }, [parts])

  const strokeDur = `${reducedMotion ? 60 : BASE_STROKE_MS / speed}ms`

  return (
    <div className={cn('rounded-2xl border bg-card p-4', className)}>
      <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
        <p className="text-sm font-bold">
          Nét chữ <span className="text-muted-foreground font-medium">(KanjiVG)</span>
        </p>
        <span className="text-xs font-bold rounded-full bg-muted px-2.5 py-1 tabular-nums" aria-live="polite">
          Nét {step}/{total || '…'}
        </span>
      </div>

      <div className="flex items-end justify-center gap-1.5 sm:gap-3 py-2" aria-hidden>
        {isError ? (
          <p className="text-xs text-muted-foreground py-10">Chưa có dữ liệu nét chữ cho ký tự này.</p>
        ) : isPending ? (
          <div className="h-36 w-36 sm:h-44 sm:w-44 rounded-xl shimmer" />
        ) : (
          parts.map((part, pi) => (
            <svg
              key={pi}
              viewBox="0 0 109 109"
              className={cn('max-w-full drop-shadow-sm', parts.length > 1 ? 'h-24 w-24 sm:h-32 sm:w-32' : 'h-36 w-36 sm:h-44 sm:w-44')}
            >
              {part.paths.map((p, i) => {
                const gi = offsets[pi]! + i
                const isCurrent = isPlaying && gi === step // nét ĐANG được viết
                const isDrawn = gi < step || (!isPlaying && gi === step - 1)
                return (
                  <path
                    key={gi}
                    d={p.d}
                    pathLength={1}
                    className={cn(
                      'fill-none transition-[stroke,stroke-width] duration-200',
                      isCurrent && 'kvg-current stroke-[var(--sakura)]',
                      isDrawn && 'stroke-[var(--foreground)]',
                      !isDrawn && !isCurrent && 'stroke-[var(--muted-foreground)] opacity-25'
                    )}
                    strokeWidth={isCurrent ? 5 : 4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={isCurrent ? ({ '--kvg-dur': strokeDur } as React.CSSProperties) : undefined}
                  />
                )
              })}
            </svg>
          ))
        )}
      </div>

      <div className="flex items-center justify-center gap-1.5 mt-3 flex-wrap">
        <Button variant="outline" size="icon" onClick={() => stepBy(-1)} disabled={!parts || step === 0} aria-label="Nét trước" className="h-11 w-11 rounded-xl">
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon" onClick={togglePlay} disabled={!parts || total === 0} aria-label={isPlaying ? 'Tạm dừng' : 'Phát'} className="h-11 w-11 rounded-xl">
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </Button>
        <Button variant="outline" size="icon" onClick={() => stepBy(1)} disabled={!parts || step >= total} aria-label="Nét tiếp theo" className="h-11 w-11 rounded-xl">
          <ChevronRight className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon" onClick={restart} disabled={!parts || step === 0} aria-label="Viết lại từ đầu" className="h-11 w-11 rounded-xl">
          <RotateCcw className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="sm" onClick={cycleSpeed} disabled={!parts} aria-label={`Tốc độ phát ${speed} lần`} className="h-11 rounded-xl px-3 font-bold tabular-nums">
          {speed}x
        </Button>
      </div>
    </div>
  )
}
