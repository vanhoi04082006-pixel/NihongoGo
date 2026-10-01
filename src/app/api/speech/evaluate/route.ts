import { NextRequest } from 'next/server'
import { z } from 'zod'
import { ok, route, assertSameOrigin, readJson, badRequest } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { rateLimit } from '@/lib/rate-limit'
import { transcribeAudio } from '@/server/services/speech'
import { pronunciationSimilarity } from '@/lib/japanese'

const schema = z.object({
  audioBase64: z.string().min(100).max(8_000_000),
  expected: z.string().min(1).max(300),
  threshold: z.number().min(0).max(100).optional(),
})

/**
 * Đánh giá phát âm: ASR → text similarity (0-100).
 * Lưu ý: đây là độ tương đồng chuyển âm, KHÔNG phải đo lường âm vị học.
 */
export const POST = route(async (req: NextRequest) => {
  assertSameOrigin(req)
  const user = await requireUser(req)
  rateLimit(`asr:${user.id}`, 30, 60000)
  const body = schema.safeParse(await readJson(req))
  if (!body.success) throw badRequest('Dữ liệu không hợp lệ')

  const transcription = await transcribeAudio(body.data.audioBase64)
  const score = pronunciationSimilarity(body.data.expected, transcription)
  const threshold = body.data.threshold ?? 65
  return ok({
    transcription,
    score,
    passed: score >= threshold,
    note: 'Điểm dựa trên độ tương đồng văn bản giữa chuyển âm và câu mẫu (heuristic, chưa phải đánh giá âm vị học).',
  })
})
