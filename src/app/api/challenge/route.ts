import { NextRequest } from 'next/server'
import { ok, route, assertSameOrigin } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { getChallengeInfo } from '@/server/services/dailyChallenge'

/**
 * Trạng thái Daily Challenge hôm nay (theo timezone user):
 * completed / inProgress / XP đã kiếm / accuracy.
 */
export const GET = route(async (req: NextRequest) => {
  assertSameOrigin(req)
  const user = await requireUser(req)
  return ok(await getChallengeInfo(user.id))
})
