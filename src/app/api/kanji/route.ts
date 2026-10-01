import { NextRequest } from 'next/server'
import { ok, route } from '@/lib/api'
import { db } from '@/lib/db'

export const dynamic = 'force-dynamic'

export const GET = route(async (req: NextRequest) => {
  const jlpt = req.nextUrl.searchParams.get('jlpt')
  const kanji = await db.kanji.findMany({
    where: jlpt ? { jlpt: Number(jlpt) } : undefined,
    orderBy: [{ jlpt: 'asc' }, { strokeCount: 'asc' }],
  })
  return ok({
    kanjiList: kanji.map((k) => ({
      id: k.id,
      character: k.character,
      meaningVi: k.meaningVi,
      onyomi: safeJson(k.onyomi, [] as string[]),
      kunyomi: safeJson(k.kunyomi, [] as string[]),
      jlpt: k.jlpt,
      strokeCount: k.strokeCount,
      radicals: safeJson(k.radicals, [] as string[]),
      examples: safeJson(k.examples, [] as { word: string; reading: string; meaningVi: string }[]),
      mnemonicVi: k.mnemonicVi,
    })),
  })
})

function safeJson<T>(s: string, fallback: T): T {
  try {
    return JSON.parse(s) as T
  } catch {
    return fallback
  }
}
