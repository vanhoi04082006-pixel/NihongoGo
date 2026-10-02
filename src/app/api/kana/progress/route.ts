import { NextRequest } from 'next/server'
import { ok, route, badRequest } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { getKanaProgress, type KanaSet } from '@/server/services/kanaPractice'

export const dynamic = 'force-dynamic'

/** Tiến độ thành thạo kana của người dùng — target lấy từ settings (default 10). */
export const GET = route(async (req: NextRequest) => {
  const user = await requireUser(req)
  const setParam = req.nextUrl.searchParams.get('set')
  if (setParam && !['HIRAGANA', 'KATAKANA'].includes(setParam)) {
    throw badRequest('Bảng kana không hợp lệ (HIRAGANA hoặc KATAKANA)')
  }
  return ok(await getKanaProgress(user.id, (setParam as KanaSet) ?? undefined))
})
