import { NextRequest } from 'next/server'
import { ok, route, notFound } from '@/lib/api'
import { db } from '@/lib/db'

export const dynamic = 'force-dynamic'

export const GET = route(async (req: NextRequest, ctx: { params: Promise<{ id: string }> }) => {
  const { id } = await ctx.params
  const kanji = await db.kanji.findFirst({ where: { OR: [{ id }, { character: decodeURIComponent(id) }] } })
  if (!kanji) throw notFound('Không tìm thấy kanji')
  return ok({
    kanji: {
      id: kanji.id,
      character: kanji.character,
      meaningVi: kanji.meaningVi,
      onyomi: safeJson(kanji.onyomi, [] as string[]),
      kunyomi: safeJson(kanji.kunyomi, [] as string[]),
      jlpt: kanji.jlpt,
      strokeCount: kanji.strokeCount,
      radicals: safeJson(kanji.radicals, [] as string[]),
      examples: safeJson(kanji.examples, [] as { word: string; reading: string; meaningVi: string }[]),
      mnemonicVi: kanji.mnemonicVi,
    },
  })
})

function safeJson<T>(s: string, fallback: T): T {
  try {
    return JSON.parse(s) as T
  } catch {
    return fallback
  }
}
