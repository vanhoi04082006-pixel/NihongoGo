/**
 * SRS Scheduler — biến thể SM-2.
 * Tách thành module thuần để sau này thay bằng FSRS mà không đụng code khác.
 */

export type SrsRating = 'AGAIN' | 'HARD' | 'GOOD' | 'EASY'

export interface SrsSchedulerState {
  ease: number
  intervalDays: number
  reviewCount: number
  lapseCount: number
}

export interface SrsSchedulerResult extends SrsSchedulerState {
  mastery: number // 0-5
  state: 'NEW' | 'LEARNING' | 'REVIEW' | 'MASTERED'
  nextReviewAt: Date
}

const MIN_EASE = 1.3
const MAX_EASE = 2.8
const DAY_MS = 86400000
const AGAIN_INTERVAL = 10 / (24 * 60) // ~10 phút

export function scheduleSrs(prev: SrsSchedulerState, rating: SrsRating, now = new Date()): SrsSchedulerResult {
  let { ease, intervalDays, reviewCount, lapseCount } = prev
  reviewCount++

  switch (rating) {
    case 'AGAIN':
      ease = clamp(ease - 0.2, MIN_EASE, MAX_EASE)
      intervalDays = AGAIN_INTERVAL
      lapseCount++
      break
    case 'HARD':
      ease = clamp(ease - 0.05, MIN_EASE, MAX_EASE)
      intervalDays = intervalDays < 1 ? 0.5 : Math.max(intervalDays * 1.2, 1)
      break
    case 'GOOD':
      if (intervalDays < 1) intervalDays = 1
      else if (intervalDays < 3) intervalDays = 3
      else intervalDays = Math.round(intervalDays * ease)
      break
    case 'EASY':
      ease = clamp(ease + 0.15, MIN_EASE, MAX_EASE)
      if (intervalDays < 1) intervalDays = 3
      else intervalDays = Math.round(intervalDays * ease * 1.3) + 1
      break
  }

  intervalDays = Math.min(intervalDays, 365)

  const mastery = masteryFromInterval(intervalDays)
  const state: SrsSchedulerResult['state'] =
    rating === 'AGAIN' ? 'LEARNING' : mastery >= 5 ? 'MASTERED' : intervalDays >= 1 ? 'REVIEW' : 'LEARNING'

  return {
    ease,
    intervalDays,
    reviewCount,
    lapseCount,
    mastery,
    state,
    nextReviewAt: new Date(now.getTime() + Math.max(intervalDays, AGAIN_INTERVAL) * DAY_MS),
  }
}

function masteryFromInterval(intervalDays: number): number {
  if (intervalDays >= 120) return 5
  if (intervalDays >= 45) return 4
  if (intervalDays >= 14) return 3
  if (intervalDays >= 4) return 2
  if (intervalDays >= 0.5) return 1
  return 0
}

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v))
}
