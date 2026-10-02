import { NextRequest } from 'next/server'
import { ok, route, assertSameOrigin, badRequest, notFound } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { rateLimit } from '@/lib/rate-limit'
import { saveItemToSrs } from '@/server/services/srs'

const VALID_TYPES = new Set(['VOCAB', 'GRAMMAR', 'KANJI', 'KANA'])

/**
 * Lưu một mục vào sổ ôn tập (SRS) từ dialog chi tiết từ vựng/ngữ pháp/kanji.
 * Body: { itemType, itemKey }. Idempotent — mục đã có giữ nguyên tiến độ.
 */
export const POST = route(async (req: NextRequest) => {
  assertSameOrigin(req)
  const user = await requireUser(req)
  rateLimit(`srs-save:${user.id}`, 30, 60_000)

  const body = (await req.json().catch(() => null)) as
    | { itemType?: string; itemKey?: string }
    | null
  const itemType = body?.itemType
  const itemKey = typeof body?.itemKey === 'string' ? body.itemKey : ''
  if (!itemType || !VALID_TYPES.has(itemType) || !itemKey.trim()) {
    throw badRequest('Thiếu itemType hoặc itemKey')
  }

  try {
    const saved = await saveItemToSrs(
      user.id,
      itemType as 'VOCAB' | 'GRAMMAR' | 'KANJI' | 'KANA',
      itemKey,
    )
    return ok(saved)
  } catch (e) {
    if (e instanceof Error && e.message === 'NOT_FOUND') {
      throw notFound('Mục này không có trong kho nội dung — không thể lưu vào sổ ôn')
    }
    throw e
  }
})
