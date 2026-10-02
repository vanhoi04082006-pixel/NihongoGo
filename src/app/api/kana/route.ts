import { NextRequest } from 'next/server'
import { ok, route, badRequest } from '@/lib/api'
import { db } from '@/lib/db'

export const dynamic = 'force-dynamic'

/** Bảng kana (hiragana/katakana) — public cho trang luyện tập. */
export const GET = route(async (req: NextRequest) => {
  const type = req.nextUrl.searchParams.get('type')
  if (type && !['HIRAGANA', 'KATAKANA'].includes(type)) throw badRequest('Loại kana không hợp lệ')
  const chars = await db.kanaCharacter.findMany({
    where: type ? { type } : undefined,
    orderBy: [{ type: 'asc' }, { row: 'asc' }, { kanaGroup: 'asc' }],
  })
  const groups: Record<string, typeof chars> = {}
  for (const c of chars) {
    const key = `${c.type}-${c.kanaGroup}`
    ;(groups[key] ??= []).push(c)
  }
  return ok({
    characters: chars.map((c) => ({
      id: c.id,
      character: c.character,
      romaji: c.romaji,
      type: c.type,
      group: c.kanaGroup,
      row: c.row,
      strokeCount: c.strokeCount,
      exampleWord: c.exampleWord,
      exampleReading: c.exampleReading,
      exampleMeaning: c.exampleMeaning,
    })),
    groups,
  })
})
