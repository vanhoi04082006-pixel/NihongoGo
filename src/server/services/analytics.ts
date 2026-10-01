import { db } from '@/lib/db'

/**
 * AnalyticsProvider — ghi event server-side vào DB (không có dữ liệu nhạy cảm).
 * Có thể thay bằng provider khác (console /外部 service) mà không đổi call-site.
 */

export type AnalyticsEventName =
  | 'lesson_started'
  | 'question_answered'
  | 'question_wrong'
  | 'lesson_completed'
  | 'lesson_failed'
  | 'review_completed'
  | 'streak_extended'
  | 'streak_freeze_used'
  | 'streak_freeze_granted'
  | 'achievement_unlocked'
  | 'quest_completed'
  | 'user_registered'
  | 'onboarding_completed'

export async function track(name: AnalyticsEventName, userId?: string | null, props: Record<string, unknown> = {}) {
  try {
    await db.analyticsEvent.create({
      data: {
        userId: userId ?? null,
        name,
        props: JSON.stringify(props),
      },
    })
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[analytics] ${name}`, userId ? `user=${userId.slice(-6)}` : '', props)
    }
  } catch (e) {
    console.error('[analytics] failed to track', name, e)
  }
}
