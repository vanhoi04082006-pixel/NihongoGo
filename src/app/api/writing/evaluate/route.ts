import { NextRequest } from 'next/server'
import { z } from 'zod'
import { ok, route, assertSameOrigin, readJson, badRequest } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { rateLimit } from '@/lib/rate-limit'

const schema = z.object({
  character: z.string().min(1).max(4),
  strokeCount: z.number().int().min(0).max(50),
  shapeSimilarity: z.number().min(0).max(100),
  expectedStrokes: z.number().int().min(1).max(50).optional(),
})

/**
 * Đánh giá viết tay (kana/kanji) — heuristic:
 * 50% số nét (server tính) + 50% độ tương đồng hình dạng (client canvas so với glyph chuẩn).
 */
export const POST = route(async (req: NextRequest) => {
  assertSameOrigin(req)
  const user = await requireUser(req)
  rateLimit(`writing:${user.id}`, 60, 60000)
  const body = schema.safeParse(await readJson(req))
  if (!body.success) throw badRequest('Dữ liệu không hợp lệ')

  const { character, strokeCount, shapeSimilarity } = body.data
  const { db } = await import('@/lib/db')
  let expectedStrokes = body.data.expectedStrokes
  if (!expectedStrokes) {
    const kana = await db.kanaCharacter.findFirst({ where: { character }, select: { strokeCount: true } })
    if (kana) expectedStrokes = kana.strokeCount
    else {
      const kanji = await db.kanji.findUnique({ where: { character }, select: { strokeCount: true } })
      expectedStrokes = kanji?.strokeCount
    }
  }
  if (!expectedStrokes) throw badRequest('Không xác định được số nét chuẩn')

  const strokeScore = Math.max(0, 100 - Math.abs(strokeCount - expectedStrokes) * 25)
  const score = Math.round(strokeScore * 0.5 + Math.max(0, Math.min(100, shapeSimilarity)) * 0.5)
  return ok({
    score,
    passed: score >= 60,
    expectedStrokes,
    note: 'Chấm heuristic: 50% số nét + 50% độ phủ hình dạng so với chữ chuẩn. Chưa phải nhận diện nét AI.',
  })
})
