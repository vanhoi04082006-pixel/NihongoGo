/**
 * Tính XP cho buổi học — SERVER TÍNH, client không gửi số XP (anti-cheat).
 */

export interface XpInput {
  correctCount: number
  totalQuestions: number
  maxCombo: number
  perfect: boolean // 0 câu sai
  firstCompletion: boolean
  sessionType: 'LESSON' | 'PRACTICE' | 'MISTAKE' | 'REVIEW' | 'JUMP'
}

export interface XpBreakdownItem {
  label: string
  amount: number
}

export interface XpResult {
  total: number
  breakdown: XpBreakdownItem[]
}

const BASE_PER_CORRECT = 10
const REVIEW_PER_CORRECT = 5

export function computeLessonXp(input: XpInput): XpResult {
  const breakdown: XpBreakdownItem[] = []
  const isPracticeLike = input.sessionType !== 'LESSON'
  const perCorrect = input.sessionType === 'REVIEW' ? REVIEW_PER_CORRECT : BASE_PER_CORRECT

  const base = input.correctCount * perCorrect
  if (base > 0) breakdown.push({ label: `${input.correctCount} câu đúng`, amount: base })

  if (!isPracticeLike) {
    const comboBonus = Math.min(Math.max(input.maxCombo - 2, 0), 15)
    if (comboBonus > 0) breakdown.push({ label: `Chuỗi combo x${input.maxCombo}`, amount: comboBonus })

    if (input.perfect && input.totalQuestions >= 5) {
      breakdown.push({ label: 'Hoàn hảo — không sai câu nào', amount: 20 })
    }
    if (input.firstCompletion) {
      breakdown.push({ label: 'Hoàn thành lần đầu', amount: 15 })
    }
  }

  let total = breakdown.reduce((s, b) => s + b.amount, 0)
  if (isPracticeLike) {
    total = Math.floor(total * 0.5) // luyện tập / ôn / sửa lỗi: 50% XP
    breakdown.push({ label: 'Chế độ luyện tập (50%)', amount: -(total - breakdown.reduce((s, b) => s + b.amount, 0)) })
  }
  return { total: Math.max(0, total), breakdown }
}
