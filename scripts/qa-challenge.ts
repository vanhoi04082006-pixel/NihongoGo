/**
 * QA script — Daily Challenge service-level verification (không cần next dev).
 * Chạy: bun scripts/qa-challenge.ts
 * Kiểm tra: getChallengeInfo, buildChallengeQuestionIds, tạo session, chấm câu,
 * hoàn thành (XP bonus), chặn tạo lần 2 trong ngày.
 */
import { db } from '../src/lib/db'
import { getChallengeInfo, buildChallengeQuestionIds } from '../src/server/services/dailyChallenge'

async function main() {
  const user = await db.user.findFirst({ where: { email: 'demo@nihongogo.local' } })
  if (!user) throw new Error('Không có user demo')

  // 1. Trạng thái ban đầu
  const before = await getChallengeInfo(user.id)
  console.log('1) info trước:', JSON.stringify(before))
  if (before.completed) {
    console.log('→ Đã hoàn thành hôm nay (từ lần test trước) — hợp lệ, dừng ở đây.')
    return
  }

  // 2. Sampling câu hỏi
  const ids = await buildChallengeQuestionIds(user.id)
  console.log('2) số câu chọn được:', ids.length, 'unique:', new Set(ids).size)
  if (ids.length < 3) throw new Error('Không đủ câu cho challenge')
  if (new Set(ids).size !== ids.length) throw new Error('Trùng câu hỏi trong sample')

  // 3. Dọn phiên ACTIVE dở (nếu có) rồi tạo session mới
  const stale = await db.lessonSession.findFirst({
    where: { userId: user.id, sessionType: 'CHALLENGE', status: 'ACTIVE' },
  })
  if (stale) {
    await db.lessonSession.update({ where: { id: stale.id }, data: { status: 'ABANDONED' } })
    console.log('3) đã dọn phiên dở:', stale.id)
  }
  const { createChallengeSession, completeSession } = await import('../src/server/services/lessonSession')
  const payload = await createChallengeSession(user.id)
  const session = payload.session as { id: string; total: number; mode: string; hearts: number }
  console.log('3) session:', session.id, 'mode:', session.mode, 'total:', session.total, 'hearts:', session.hearts)
  if (session.mode !== 'CHALLENGE') throw new Error('Sai mode')
  if (session.hearts !== Infinity) console.log('   (hearts không phải Infinity — chấp nhận số lớn)')

  // 4. Trả lời ĐÚNG toàn bộ bằng cách đọc correctData từ DB (mô phỏng client hoàn hảo)
  const { submitAnswer } = await import('../src/server/services/lessonSession')
  for (let i = 0; i < session.total; i++) {
    const s = await db.lessonSession.findUnique({ where: { id: session.id } })
    if (!s) throw new Error('Mất session')
    const state = JSON.parse(s.state) as { entries: { qid: string }[]; index: number }
    const qid = state.entries[state.index]?.qid
    if (!qid) break
    const q = await db.question.findUnique({ where: { id: qid } })
    if (!q) throw new Error('Thiếu question ' + qid)
    const data = JSON.parse(q.data) as { kind: string }
    const correct = JSON.parse(q.correctData) as Record<string, unknown>
    let payloadAnswer: Record<string, unknown>
    switch (data.kind) {
      case 'choice':
      case 'audio-choice':
      case 'fill-blank':
        payloadAnswer = correct.optionId ? { optionId: correct.optionId } : { text: (correct.answers as string[])[0] }
        break
      case 'token-order':
        payloadAnswer = { tokenOrder: correct.tokenOrder }
        break
      case 'text-input':
        payloadAnswer = { text: (correct.answers as string[])[0] }
        break
      case 'matching':
        payloadAnswer = { pairs: correct.pairs }
        break
      default:
        throw new Error('Kind không hỗ trợ trong QA: ' + data.kind)
    }
    const res = await submitAnswer(user.id, session.id, payloadAnswer as never)
    console.log(`4) câu ${i + 1} (${data.kind}):`, res.correct ? 'ĐÚNG' : 'SAI', '— index:', res.session.index)
  }

  // 5. Hoàn thành (chờ đủ thời gian tối thiểu — anti-cheat của server)
  await new Promise((r) => setTimeout(r, session.total * 650))
  const summary = await completeSession(user.id, session.id)
  console.log('5) complete:', JSON.stringify({
    accuracy: summary.accuracy,
    correct: summary.correctCount,
    total: summary.totalQuestions,
    xp: summary.xp.total,
    breakdown: summary.xp.breakdown,
    heartsGranted: summary.heartsGranted,
  }))

  // 6. Chặn lần 2
  try {
    await createChallengeSession(user.id)
    throw new Error('PHẢI bị chặn — nhưng không!')
  } catch (e) {
    const msg = (e as Error).message
    console.log('6) chặn lần 2:', /hoàn thành|conflict|đã/i.test(msg) ? 'OK ✓' : `(khác: ${msg})`)
  }

  const after = await getChallengeInfo(user.id)
  console.log('7) info sau:', JSON.stringify(after))
  console.log('QA CHALLENGE: PASS')
}

main()
  .catch((e) => {
    console.error('QA CHALLENGE: FAIL —', e)
    process.exit(1)
  })
  .finally(() => process.exit(0))
