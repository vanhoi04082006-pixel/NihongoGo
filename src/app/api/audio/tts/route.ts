import { NextRequest, NextResponse } from 'next/server'
import { route, badRequest } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { rateLimit } from '@/lib/rate-limit'
import { synthesizeJapanese } from '@/server/services/speech'

export const dynamic = 'force-dynamic'

/**
 * TTS tiếng Nhật có cache vĩnh viễn theo nội dung.
 * Client dùng <audio src="/api/audio/tts?text=...&speed=...">.
 */
export const GET = route(async (req: NextRequest) => {
  const user = await requireUser(req)
  rateLimit(`tts:${user.id}`, 60, 60000)
  const text = req.nextUrl.searchParams.get('text') ?? ''
  const speed = Number(req.nextUrl.searchParams.get('speed') ?? '1')
  if (!text.trim()) throw badRequest('Thiếu nội dung')
  if (!Number.isFinite(speed) || speed < 0.5 || speed > 2) throw badRequest('Tốc độ không hợp lệ')

  const { buffer, mimeType } = await synthesizeJapanese(text, speed)
  return new NextResponse(new Uint8Array(buffer), {
    status: 200,
    headers: {
      'Content-Type': mimeType,
      'Content-Length': String(buffer.length),
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
})
