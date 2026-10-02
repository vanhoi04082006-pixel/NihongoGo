import { NextRequest } from 'next/server'
import { ok, route } from '@/lib/api'
import { db } from '@/lib/db'
import { getUserFromToken, getSessionToken } from '@/lib/auth'

export const dynamic = 'force-dynamic'

/**
 * Danh sách Kanji (public — không cần đăng nhập).
 * Nếu có session hợp lệ → kèm trạng thái SRS từng chữ (mức nhớ 0–5) để
 * hiển thị badge tiến độ trên thẻ + đếm tổng đã học.
 */
export const GET = route(async (req: NextRequest) => {
  const jlpt = req.nextUrl.searchParams.get('jlpt')

  // Best-effort xác thực: trang Kanji xem được khi chưa đăng nhập
  let userId: string | null = null
  try {
    const user = await getUserFromToken(getSessionToken(req))
    userId = user?.id ?? null
  } catch {
    userId = null
  }

  const kanji = await db.kanji.findMany({
    where: jlpt ? { jlpt: Number(jlpt) } : undefined,
    orderBy: [{ jlpt: 'asc' }, { strokeCount: 'asc' }],
  })

  const srsByChar = new Map<string, { mastery: number; state: string }>()
  if (userId) {
    const items = await db.sRSItem.findMany({
      where: { userId, itemType: 'KANJI' },
      select: { itemKey: true, mastery: true, state: true },
    })
    for (const it of items) srsByChar.set(it.itemKey, { mastery: it.mastery, state: it.state })
  }

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
      srs: srsByChar.get(k.character) ?? null,
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
