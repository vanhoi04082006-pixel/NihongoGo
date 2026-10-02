import { db } from '@/lib/db'
import { scheduleSrs, type SrsRating } from '@/server/domain/srs'
import { track } from './analytics'
/** Item SRS (đối chiếu prisma/seed-data/types.ts) */
interface SrsItemRef {
  type: 'VOCAB' | 'KANJI' | 'GRAMMAR' | 'KANA'
  key: string
}

/**
 * SRS service — spaced repetition cho VOCAB / KANJI / GRAMMAR / KANA.
 * Items được tạo lazy khi user gặp câu hỏi có itemRef hoặc review.
 */

export async function ensureSrsItem(userId: string, itemType: string, itemKey: string) {
  return db.sRSItem.upsert({
    where: { userId_itemType_itemKey: { userId, itemType, itemKey } },
    update: {},
    create: { userId, itemType, itemKey },
  })
}

export async function reviewSrsItem(
  userId: string,
  ref: SrsItemRef,
  rating: SrsRating
): Promise<{ nextReviewAt: Date | null; mastery: number; state: string }> {
  const item = await ensureSrsItem(userId, ref.type, ref.key)
  const result = scheduleSrs(
    { ease: item.ease, intervalDays: item.intervalDays, reviewCount: item.reviewCount, lapseCount: item.lapseCount },
    rating
  )
  await db.sRSItem.update({
    where: { id: item.id },
    data: {
      ease: result.ease,
      intervalDays: result.intervalDays,
      reviewCount: result.reviewCount,
      lapseCount: result.lapseCount,
      mastery: result.mastery,
      state: result.state,
      difficulty: Math.max(0, Math.min(10, 10 - result.ease * 3)), // ease cao → difficulty thấp
      stability: result.intervalDays,
      lastReviewedAt: new Date(),
      nextReviewAt: result.nextReviewAt,
    },
  })
  await db.sRSReview.create({
    data: {
      srsItemId: item.id,
      userId,
      rating,
      intervalDays: result.intervalDays,
      wasCorrect: rating !== 'AGAIN',
    },
  })
  return { nextReviewAt: result.nextReviewAt, mastery: result.mastery, state: result.state }
}

export async function recordAnswerSrs(userId: string, ref: SrsItemRef, isCorrect: boolean) {
  return reviewSrsItem(userId, ref, isCorrect ? 'GOOD' : 'AGAIN')
}

/** Payload trạng thái SRS trả về client sau khi lưu. */
export interface SavedSrsPayload {
  itemType: string
  itemKey: string
  status: 'NEW' | 'LEARNING' | 'REVIEW' | 'MASTERED' | 'WEAK'
  mastery: number
  reviewCount: number
  lapseCount: number
  nextReviewAt: string | null
}

/**
 * Người học chủ động LƯU một mục vào sổ ôn tập (bookmark SRS) từ dialog
 * chi tiết từ vựng / ngữ pháp. Item phải tồn tại trong kho nội dung PUBLISHED
 * (chống spam key rác), đã có thì giữ nguyên tiến độ (idempotent).
 * Item mới ở trạng thái NEW, đến hạn ôn NGAY để xuất hiện trong hàng đợi ôn.
 */
export async function saveItemToSrs(
  userId: string,
  itemType: 'VOCAB' | 'GRAMMAR' | 'KANJI' | 'KANA',
  itemKey: string,
): Promise<SavedSrsPayload> {
  const key = itemKey.trim()
  if (!key || key.length > 120) throw new Error('INVALID_KEY')

  // Xác thực mục tồn tại trong nội dung chính thức (tránh tạo item rác)
  switch (itemType) {
    case 'VOCAB': {
      const v = await db.vocabulary.findFirst({ where: { term: key }, select: { id: true } })
      if (!v) throw new Error('NOT_FOUND')
      break
    }
    case 'GRAMMAR': {
      const g = await db.grammarPoint.findUnique({ where: { code: key }, select: { id: true } })
      if (!g) throw new Error('NOT_FOUND')
      break
    }
    case 'KANJI': {
      const k = await db.kanji.findUnique({ where: { character: key }, select: { id: true } })
      if (!k) throw new Error('NOT_FOUND')
      break
    }
    case 'KANA': {
      const ka = await db.kanaCharacter.findFirst({ where: { character: key }, select: { id: true } })
      if (!ka) throw new Error('NOT_FOUND')
      break
    }
  }

  const item = await db.sRSItem.upsert({
    where: { userId_itemType_itemKey: { userId, itemType, itemKey: key } },
    update: {},
    create: {
      userId,
      itemType,
      itemKey: key,
      nextReviewAt: new Date(), // đến hạn ôn ngay → vào hàng đợi ôn tập
    },
  })

  const weak = item.lapseCount >= 2 || (item.reviewCount >= 2 && item.mastery <= 2 && item.state !== 'MASTERED')
  return {
    itemType,
    itemKey: key,
    status: weak ? 'WEAK' : (item.state as 'NEW' | 'LEARNING' | 'REVIEW' | 'MASTERED'),
    mastery: item.mastery,
    reviewCount: item.reviewCount,
    lapseCount: item.lapseCount,
    nextReviewAt: item.nextReviewAt?.toISOString() ?? null,
  }
}

export interface DueStat {
  dueCount: number
  totalItems: number
  newCount: number
}

export async function getDueStats(userId: string): Promise<DueStat> {
  const [dueCount, totalItems, newCount] = await Promise.all([
    db.sRSItem.count({ where: { userId, nextReviewAt: { lte: new Date() } } }),
    db.sRSItem.count({ where: { userId } }),
    db.sRSItem.count({ where: { userId, state: 'NEW' } }),
  ])
  return { dueCount, totalItems, newCount }
}

export interface ReviewItem {
  itemType: string
  itemKey: string
}

/** Lấy các item đến hạn ôn (do trước, bổ sung item mới nếu thiếu). */
export async function getDueItems(userId: string, limit = 15): Promise<ReviewItem[]> {
  const due = await db.sRSItem.findMany({
    where: { userId, nextReviewAt: { lte: new Date() } },
    orderBy: { nextReviewAt: 'asc' },
    take: limit,
    select: { itemType: true, itemKey: true },
  })
  if (due.length >= limit) return due
  const fill = await db.sRSItem.findMany({
    where: { userId, state: 'NEW' },
    take: limit - due.length,
    select: { itemType: true, itemKey: true },
  })
  return [...due, ...fill]
}

/** Tổng quan SRS theo loại item (cho dashboard). */
export async function getSrsOverview(userId: string) {
  const items = await db.sRSItem.findMany({
    where: { userId },
    select: { itemType: true, mastery: true, state: true, nextReviewAt: true },
  })
  const byType: Record<string, { total: number; mastered: number; due: number }> = {}
  const now = new Date()
  for (const it of items) {
    const t = (byType[it.itemType] ??= { total: 0, mastered: 0, due: 0 })
    t.total++
    if (it.mastery >= 3) t.mastered++
    if (it.nextReviewAt && it.nextReviewAt <= now) t.due++
  }
  return byType
}
