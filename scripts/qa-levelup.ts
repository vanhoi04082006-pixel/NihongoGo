/**
 * QA script — Level-up detection khi hoàn thành phiên học (không cần next dev).
 * Chạy: bun scripts/qa-levelup.ts
 * Luồng: đọc level trước → tạo PRACTICE session trên ải đã hoàn thành → trả lời
 * ĐÚNG toàn bộ (đọc correctData từ DB) → complete → kiểm tra summary.levelUp.
 */
import { db } from '../src/lib/db'
import { levelFromXp } from '../src/server/domain/xp'

async function main() {
  const user = await db.user.findFirst({ where: { email: 'demo@nihongogo.local' } })
  if (!user) throw new Error('Không có user demo')

  // 1. Mốc trước khi học
  const beforeProgress = await db.userProgress.findUnique({ where: { userId: user.id } })
  const totalBefore = beforeProgress?.totalXP ?? 0
  const levelBefore = levelFromXp(totalBefore)
  console.log('1) trước:', { totalXP: totalBefore, level: levelBefore.level, title: levelBefore.title, need: levelBefore.nextLevelXP - levelBefore.currentLevelXP })

  // 2. Chọn một ải đã hoàn thành có bài tập để luyện lại (PRACTICE — không mất tim)
  const doneNode = await db.nodeProgress.findFirst({
    where: { userId: user.id, status: { in: ['COMPLETED', 'MASTERED'] }, node: { exercises: { some: { status: 'PUBLISHED' } } } },
    include: { node: { select: { id: true, title: true } } },
    orderBy: { completedAt: 'desc' },
  })
  if (!doneNode) throw new Error('Chưa có ải nào hoàn thành để luyện lại')
  console.log('2) ải luyện lại:', doneNode.node.title)

  const { createNodeSession, submitAnswer, completeSession } = await import('../src/server/services/lessonSession')
  const payload = await createNodeSession(user.id, doneNode.nodeId, 'PRACTICE')
  const session = payload.session as { id: string; total: number; mode: string }
  console.log('3) session:', session.id, 'mode:', session.mode, 'total:', session.total)
  if (session.mode !== 'PRACTICE') throw new Error('Sai mode — mong PRACTICE')

  // 4. Trả lời đúng toàn bộ
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
    console.log(`4) câu ${i + 1} (${data.kind}):`, res.correct ? 'ĐÚNG' : 'SAI')
  }

  // 5. Hoàn thành — tôn trọng anti-cheat thời gian
  await new Promise((r) => setTimeout(r, session.total * 650))
  const summary = await completeSession(user.id, session.id)
  console.log('5) complete:', JSON.stringify({
    accuracy: summary.accuracy,
    xp: summary.xp.total,
    totalXP: summary.totalXP,
    levelUp: summary.levelUp,
  }))

  const levelAfter = levelFromXp(summary.totalXP)
  if (levelAfter.level > levelBefore.level) {
    if (!summary.levelUp || summary.levelUp.to !== levelAfter.level) {
      throw new Error(`levelUp sai — mong {from:${levelBefore.level},to:${levelAfter.level}}, nhận ${JSON.stringify(summary.levelUp)}`)
    }
    console.log(`6) LÊN CẤP ĐÚNG: Lv.${summary.levelUp.from} → Lv.${summary.levelUp.to} (${summary.levelUp.title}) ✓`)
  } else {
    console.log('6) Chưa lên cấp (chưa đủ XP) — field levelUp = null đúng ngữ nghĩa ✓')
  }
  console.log('QA LEVELUP: PASS')
}

main()
  .catch((e) => {
    console.error('QA LEVELUP: FAIL —', e)
    process.exit(1)
  })
  .finally(() => process.exit(0))
