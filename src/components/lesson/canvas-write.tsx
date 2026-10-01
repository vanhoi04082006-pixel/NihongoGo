'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Eraser, Undo2 } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * HandwritingRecognitionProvider (MVP heuristic):
 * - Ghi stroke data (mảng điểm) — hỗ trợ mouse/touch/stylus qua Pointer Events.
 * - Chấm: client render glyph chuẩn ra canvas ẩn, so IoU bitmap với nét vẽ
 *   → shapeSimilarity; gửi (strokeCount, shapeSimilarity) lên server chấm tổng.
 * Được công khai là heuristic, không phải AI recognition.
 */

export interface Point {
  x: number
  y: number
}
export type Strokes = Point[][]

const SIZE = 280

export function WritingCanvas({
  character,
  guide = false,
  onStrokesChange,
  disabled,
  resetToken,
  className,
}: {
  character: string
  guide?: boolean
  onStrokesChange?: (strokes: Strokes) => void
  disabled?: boolean
  /** Đổi giá trị → xóa sạch nét vẽ (dùng cho nút "Viết lại"). */
  resetToken?: number
  className?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const drawing = useRef(false)
  const strokesRef = useRef<Strokes>([])
  const [strokeCount, setStrokeCount] = useState(0)

  const ctx = () => canvasRef.current?.getContext('2d') ?? null

  const redraw = useCallback(() => {
    const c = ctx()
    if (!c) return
    c.clearRect(0, 0, SIZE, SIZE)
    // nền
    c.fillStyle = 'rgba(128,128,128,0.06)'
    c.fillRect(0, 0, SIZE, SIZE)
    // guide ký tự mờ
    if (guide) {
      c.save()
      c.fillStyle = 'rgba(128,128,128,0.25)'
      c.font = `${SIZE - 60}px "Hiragino Sans", "Noto Sans JP", sans-serif`
      c.textAlign = 'center'
      c.textBaseline = 'middle'
      c.fillText(character, SIZE / 2, SIZE / 2 + 8)
      c.restore()
    }
    // nét vẽ
    c.strokeStyle = '#2b2620'
    c.lineWidth = 10
    c.lineCap = 'round'
    c.lineJoin = 'round'
    for (const stroke of strokesRef.current) {
      c.beginPath()
      stroke.forEach((p, i) => (i === 0 ? c.moveTo(p.x, p.y) : c.lineTo(p.x, p.y)))
      if (stroke.length === 1) {
        c.arc(stroke[0].x, stroke[0].y, c.lineWidth / 2, 0, Math.PI * 2)
        c.fillStyle = '#2b2620'
        c.fill()
      } else {
        c.stroke()
      }
    }
  }, [character, guide])

  useEffect(() => {
    redraw()
  }, [redraw])

  // Đồng bộ callback mới nhất (effect này chạy trước hiệu ứng reset bên dưới)
  const notifyRef = useRef(onStrokesChange)
  useEffect(() => {
    notifyRef.current = onStrokesChange
  }, [onStrokesChange])

  // Xóa nét khi resetToken đổi (mount đầu cũng chạy nhưng canvas đang rỗng).
  // Canvas + strokesRef là "external system" — cập nhật trực tiếp;
  // strokeCount (state hiển thị) reset ở frame sau để tránh cascading render.
  useEffect(() => {
    strokesRef.current = []
    notifyRef.current?.([])
    redraw()
    const raf = requestAnimationFrame(() => setStrokeCount(0))
    return () => cancelAnimationFrame(raf)
  }, [resetToken, redraw])

  const pos = (e: React.PointerEvent): Point => {
    const rect = canvasRef.current!.getBoundingClientRect()
    return {
      x: ((e.clientX - rect.left) / rect.width) * SIZE,
      y: ((e.clientY - rect.top) / rect.height) * SIZE,
    }
  }

  const start = (e: React.PointerEvent) => {
    if (disabled) return
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
    drawing.current = true
    strokesRef.current.push([pos(e)])
    setStrokeCount(strokesRef.current.length)
    onStrokesChange?.(strokesRef.current)
    redraw()
  }
  const move = (e: React.PointerEvent) => {
    if (!drawing.current || disabled) return
    const stroke = strokesRef.current[strokesRef.current.length - 1]
    stroke.push(pos(e))
    redraw()
  }
  const end = () => {
    drawing.current = false
  }

  const undo = () => {
    strokesRef.current.pop()
    setStrokeCount(strokesRef.current.length)
    onStrokesChange?.(strokesRef.current)
    redraw()
  }
  const clear = () => {
    strokesRef.current = []
    setStrokeCount(0)
    onStrokesChange?.(strokesRef.current)
    redraw()
  }

  return (
    <div className={cn('flex flex-col items-center gap-3', className)}>
      <canvas
        ref={canvasRef}
        width={SIZE}
        height={SIZE}
        className="rounded-2xl border-2 border-dashed border-border touch-none bg-card shadow-inner cursor-crosshair"
        onPointerDown={start}
        onPointerMove={move}
        onPointerUp={end}
        onPointerLeave={end}
        onPointerCancel={end}
        aria-label={`Khung viết tay ký tự ${character}`}
        role="img"
      />
      <div className="flex items-center gap-2">
        <button
          onClick={undo}
          disabled={strokeCount === 0 || disabled}
          className="inline-flex items-center gap-1.5 rounded-xl border bg-card px-3 py-2 text-sm font-semibold hover:bg-muted disabled:opacity-40 outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
        >
          <Undo2 className="h-4 w-4" aria-hidden /> Hoàn tác
        </button>
        <button
          onClick={clear}
          disabled={strokeCount === 0 || disabled}
          className="inline-flex items-center gap-1.5 rounded-xl border bg-card px-3 py-2 text-sm font-semibold hover:bg-muted disabled:opacity-40 outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
        >
          <Eraser className="h-4 w-4" aria-hidden /> Xóa hết
        </button>
        <span className="text-xs text-muted-foreground tabular-nums ml-1" aria-live="polite">
          {strokeCount} nét đã vẽ
        </span>
      </div>
    </div>
  )
}

/**
 * So sánh nét vẽ với glyph chuẩn → độ tương đồng 0-100 (IoU bitmap).
 * Heuristic client-side, gửi kèm số nét cho server chấm tổng.
 */
export function computeShapeSimilarity(character: string, strokes: Strokes): number {
  if (strokes.length === 0) return 0
  const size = 128
  const make = () => {
    const c = document.createElement('canvas')
    c.width = size
    c.height = size
    return c
  }

  // Bounding box nét vẽ
  const xs = strokes.flat().map((p) => p.x)
  const ys = strokes.flat().map((p) => p.y)
  const minX = Math.min(...xs), maxX = Math.max(...xs)
  const minY = Math.min(...ys), maxY = Math.max(...ys)
  const w = Math.max(1, maxX - minX)
  const h = Math.max(1, maxY - minY)
  const scale = (size * 0.8) / Math.max(w, h)

  const userCanvas = make()
  const uctx = userCanvas.getContext('2d')!
  uctx.strokeStyle = '#000'
  uctx.lineWidth = 9
  uctx.lineCap = 'round'
  uctx.lineJoin = 'round'
  for (const stroke of strokes) {
    uctx.beginPath()
    stroke.forEach((p, i) => {
      const x = (p.x - minX) * scale + (size - w * scale) / 2
      const y = (p.y - minY) * scale + (size - h * scale) / 2
      if (i === 0) uctx.moveTo(x, y)
      else uctx.lineTo(x, y)
    })
    uctx.stroke()
  }

  const glyphCanvas = make()
  const gctx = glyphCanvas.getContext('2d')!
  gctx.fillStyle = '#000'
  gctx.font = `${size}px "Hiragino Sans", "Noto Sans JP", sans-serif`
  gctx.textAlign = 'center'
  gctx.textBaseline = 'middle'
  gctx.fillText(character, size / 2, size / 2 + 6)

  const uData = uctx.getImageData(0, 0, size, size).data
  const gData = gctx.getImageData(0, 0, size, size).data
  let inter = 0
  let union = 0
  // phóng glyph 1 pixel mỗi hướng để khoan dung
  const userMask = new Uint8Array(size * size)
  for (let i = 0; i < uData.length; i += 4) {
    if (uData[i + 3] > 40) userMask[i / 4] = 1
  }
  for (let i = 0; i < gData.length; i += 4) {
    const g = gData[i + 3] > 40 ? 1 : 0
    if (!g) continue
    const idx = i / 4
    const x = idx % size
    const y = Math.floor(idx / size)
    let hit = 0
    for (let dy = -2; dy <= 2 && !hit; dy++) {
      for (let dx = -2; dx <= 2; dx++) {
        const nx = x + dx
        const ny = y + dy
        if (nx >= 0 && nx < size && ny >= 0 && ny < size && userMask[ny * size + nx]) {
          hit = 1
          break
        }
      }
    }
    if (hit) inter++
    union++
  }
  let userCount = 0
  for (let i = 0; i < userMask.length; i++) userCount += userMask[i]
  union = Math.max(union, userCount) // xấp xỉ: glyph phủ + phần user ngoài glyph (khoan dung)
  if (union === 0) return 0
  return Math.round((inter / union) * 100)
}
