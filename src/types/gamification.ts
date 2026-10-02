/** Types dùng chung client-safe cho gamification. */

export type QuestMetric =
  | 'LESSONS_COMPLETED'
  | 'XP_EARNED'
  | 'CORRECT_ANSWERS'
  | 'LISTENING_NODES'
  | 'REVIEWS_DONE'
  | 'VOCAB_REVIEWS'
  | 'PERFECT_LESSONS'

export type AchievementMetric =
  | 'TOTAL_XP'
  | 'CURRENT_STREAK'
  | 'LONGEST_STREAK'
  | 'LESSONS_COMPLETED'
  | 'PERFECT_LESSONS'
  | 'KANA_MASTERED'
  | 'KANJI_MASTERED'
  | 'VOCAB_MASTERED'
  | 'LISTENING_NODES'
  | 'SPEAKING_NODES'
  | 'MISTAKES_RESOLVED'
  | 'QUESTS_COMPLETED'

export type SrsRating = 'AGAIN' | 'HARD' | 'GOOD' | 'EASY'

export interface AchievementProgress {
  code: string
  title: string
  description: string
  icon: string
  tier: 'BRONZE' | 'SILVER' | 'GOLD' | 'DIAMOND'
  category: string
  threshold: number
  current: number
  unlocked: boolean
  unlockedAt: string | null
}

export interface QuestView {
  id: string
  code: string
  title: string
  description: string
  icon: string
  progress: number
  target: number
  rewardXP: number
  completed: boolean
}
