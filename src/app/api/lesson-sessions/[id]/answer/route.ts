import { NextRequest } from 'next/server'
import { z } from 'zod'
import { ok, route, assertSameOrigin, readJson, badRequest } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { rateLimit } from '@/lib/rate-limit'
import { submitAnswer } from '@/server/services/lessonSession'

const schema = z.object({
  answer: z
    .object({
      optionId: z.string().max(50).optional(),
      text: z.string().max(500).optional(),
      tokenOrder: z.array(z.string().max(50)).max(20).optional(),
      pairs: z.record(z.string().max(50), z.string().max(200)).optional(),
      transcription: z.string().max(500).optional(),
      // KHÔNG nhận pronunciationScore từ client — server tự tính từ transcript (anti-cheat)
      strokeCount: z.number().int().min(0).max(50).optional(),
      shapeSimilarity: z.number().min(0).max(100).optional(),
      audioBase64: z.string().max(8_000_000).optional(),
    })
    .passthrough(),
  timeSpentMs: z.number().optional(),
})

export const POST = route(async (req: NextRequest, ctx: { params: Promise<{ id: string }> }) => {
  assertSameOrigin(req)
  const user = await requireUser(req)
  const { id } = await ctx.params
  rateLimit(`answer:${user.id}`, 90, 60000)
  const body = schema.safeParse(await readJson(req))
  if (!body.success) throw badRequest('Câu trả lời không hợp lệ')
  return ok(await submitAnswer(user.id, id, body.data.answer, body.data.timeSpentMs))
})
