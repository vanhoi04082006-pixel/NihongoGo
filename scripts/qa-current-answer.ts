/**
 * Helper cho QA level-up UI: in ra đáp án ĐÚNG (dạng text) của câu HIỆN TẠI
 * trong phiên ACTIVE mới nhất của user demo — để agent-browser bấm đúng.
 * Chạy: bun scripts/qa-current-answer.ts
 */
import { db } from '../src/lib/db'

async function main() {
  const user = await db.user.findFirst({ where: { email: 'demo@nihongogo.local' } })
  if (!user) throw new Error('Không có user demo')
  const s = await db.lessonSession.findFirst({
    where: { userId: user.id, status: 'ACTIVE' },
    orderBy: { startedAt: 'desc' },
  })
  if (!s) {
    console.log('NO_ACTIVE_SESSION')
    return
  }
  const state = JSON.parse(s.state) as { entries: { qid: string }[]; index: number }
  const entry = state.entries[state.index]
  if (!entry) {
    console.log('SESSION_DONE')
    return
  }
  const q = await db.question.findUnique({ where: { id: entry.qid } })
  if (!q) throw new Error('Thiếu question')
  const data = JSON.parse(q.data) as { kind: string; options?: { id: string; text: string }[]; tokens?: { id: string; text: string }[] }
  const correct = JSON.parse(q.correctData) as Record<string, unknown>
  let answerText = ''
  if (correct.optionId && data.options) {
    answerText = data.options.find((o) => o.id === correct.optionId)?.text ?? ''
  } else if (data.kind === 'text-input') {
    answerText = (correct.answers as string[])[0] ?? ''
  } else if (data.kind === 'token-order') {
    answerText = JSON.stringify(correct.tokenOrder)
  } else if (data.kind === 'matching') {
    answerText = JSON.stringify(correct.pairs)
  } else if (data.kind === 'speak' || data.kind === 'writing') {
    answerText = '__MANUAL__'
  }
  console.log(JSON.stringify({ index: state.index, total: state.entries.length, kind: data.kind, prompt: q.prompt ?? '', answerText }))
}

main().finally(() => process.exit(0))
