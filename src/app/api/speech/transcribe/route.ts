import { NextRequest } from 'next/server'
import { z } from 'zod'
import { ok, route, assertSameOrigin, readJson, badRequest } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { rateLimit } from '@/lib/rate-limit'
import { transcribeAudio } from '@/server/services/speech'

const schema = z.object({
  audioBase64: z.string().min(100).max(8_000_000),
})

export const POST = route(async (req: NextRequest) => {
  assertSameOrigin(req)
  const user = await requireUser(req)
  rateLimit(`asr:${user.id}`, 30, 60000)
  const body = schema.safeParse(await readJson(req))
  if (!body.success) throw badRequest('Dữ liệu âm thanh không hợp lệ')
  const text = await transcribeAudio(body.data.audioBase64)
  return ok({ transcription: text })
})
