/**
 * Tính XP cho buổi học — SERVER TÍNH, client không gửi số XP (anti-cheat).
 */

export interface XpInput {
  correctCount: number
  totalQuestions: number
  maxCombo: number
  perfect: boolean // 0 câu sai
  firstCompletion: boolean
  sessionType: 'LESSON' | 'PRACTICE' | 'MISTAKE' | 'REVIEW' | 'JUMP' | 'CHALLENGE'
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
  const isPracticeLike = input.sessionType !== 'LESSON' && input.sessionType !== 'CHALLENGE'
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
    if (input.sessionType === 'CHALLENGE' && input.totalQuestions >= 5) {
      breakdown.push({ label: 'Thưởng thử thách hàng ngày', amount: 15 })
    }
  }

  let total = breakdown.reduce((s, b) => s + b.amount, 0)
  if (isPracticeLike) {
    total = Math.floor(total * 0.5) // luyện tập / ôn / sửa lỗi: 50% XP
    breakdown.push({ label: 'Chế độ luyện tập (50%)', amount: -(total - breakdown.reduce((s, b) => s + b.amount, 0)) })
  }
  return { total: Math.max(0, total), breakdown }
}

/* --------------------------------- Level ---------------------------------- */

export interface LevelInfo {
  /** Cấp hiện tại (bắt đầu từ 1) */
  level: number
  /** Tiêu đề danh hiệu theo cấp — dùng hiển thị bên cạnh level */
  title: string
  /** XP đã tích lũy trong cấp hiện tại */
  currentLevelXP: number
  /** XP cần để lên cấp tiếp theo */
  nextLevelXP: number
  /** Tiến trình 0..1 trong cấp hiện tại */
  progress: number
}

/** Mốc XP cần để vượt từ cấp N lên N+1: 100, 130, 169... (+30%/cấp — cong nhẹ, không quá khó). */
export function xpForLevel(level: number): number {
  return Math.round(100 * Math.pow(1.3, Math.max(0, level - 1)))
}

const LEVEL_TITLES: { min: number; title: string }[] = [
  { min: 1, title: 'Tân binh · 新人' },
  { min: 3, title: 'Học viên · 学生' },
  { min: 6, title: 'Trí giả · 初心者' },
  { min: 10, title: 'Kiến tập · 中級者' },
  { min: 15, title: 'Hành giả · 上級者' },
  { min: 21, title: 'Cao thủ · 熟練者' },
  { min: 28, title: 'Bậc thầy · 達人' },
  { min: 36, title: 'Nhất lưu · 一流' },
  { min: 45, title: 'Truyền kỳ · 伝説' },
]

/** Danh hiệu theo cấp — binary search nhẹ. */
export function levelTitle(level: number): string {
  let title = LEVEL_TITLES[0].title
  for (const t of LEVEL_TITLES) {
    if (level >= t.min) title = t.title
    else break
  }
  return title
}

/** Tính level từ tổng XP — pure function, dùng cả server (API) lẫn client (display). */
export function levelFromXp(totalXP: number): LevelInfo {
  let level = 1
  let remaining = Math.max(0, Math.floor(totalXP))
  let need = xpForLevel(level)
  while (remaining >= need && level < 999) {
    remaining -= need
    level += 1
    need = xpForLevel(level)
  }
  return {
    level,
    title: levelTitle(level),
    currentLevelXP: remaining,
    nextLevelXP: need,
    progress: need > 0 ? Math.min(1, remaining / need) : 1,
  }
}
