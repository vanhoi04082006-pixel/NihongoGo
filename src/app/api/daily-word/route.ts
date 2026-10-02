import { NextRequest } from 'next/server'
import { ok, route } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { db } from '@/lib/db'

export const dynamic = 'force-dynamic'

/**
 * "Từ của ngày" — chọn 1 từ vựng xác định theo ngày (YYYY-MM-DD theo timezone user),
 * cùng một từ cho cả ngày, đổi vào ngày hôm sau. Cache trong bộ nhớ theo key (tz, date).
 */

interface DailyWord {
  date: string
  term: string
  reading: string | null
  romaji: string
  meaningVi: string
  pos: string | null
  exampleJa: string
  exampleVi: string
  lessonTitle: string | null
  lessonId: string | null
  lessonSlug: string | null
}

interface CachedEntry {
  word: DailyWord | null
  expiresAt: number
}

const CACHE_TTL_MS = 10 * 60 * 1000
const cache = new Map<string, CachedEntry>()

/** Ngày hiện tại (YYYY-MM-DD) theo timezone của user */
function todayInTz(tz: string): string {
  try {
    return new Intl.DateTimeFormat('en-CA', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date())
  } catch {
    return new Date().toISOString().slice(0, 10)
  }
}

/** Hash chuỗi đơn giản (FNV-1a) → index ổn định trong ngày */
function fnv1a(s: string): number {
  let h = 0x811c9dc5
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 0x01000193)
  }
  return h >>> 0
}

async function pickDailyWord(date: string, cacheKey: string): Promise<DailyWord | null> {
  const cached = cache.get(cacheKey)
  if (cached && cached.expiresAt > Date.now() && cached.word?.date === date) return cached.word

  const vocabs = await db.vocabulary.findMany({
    where: { lesson: { status: 'PUBLISHED' } },
    select: {
      term: true, reading: true, romaji: true, meaningVi: true, pos: true,
      exampleJa: true, exampleVi: true, lessonId: true,
      lesson: { select: { title: true, slug: true } },
    },
    orderBy: { createdAt: 'asc' },
  })
  if (vocabs.length === 0) {
    cache.set(cacheKey, { word: null, expiresAt: Date.now() + CACHE_TTL_MS })
    return null
  }

  const idx = fnv1a(`ngg-wotd:${date}`) % vocabs.length
  const v = vocabs[idx]
  const word: DailyWord = {
    date,
    term: v.term,
    reading: v.reading,
    romaji: v.romaji,
    meaningVi: v.meaningVi,
    pos: v.pos,
    exampleJa: v.exampleJa,
    exampleVi: v.exampleVi,
    lessonTitle: v.lesson?.title ?? null,
    lessonId: v.lessonId,
    lessonSlug: v.lesson?.slug ?? null,
  }
  cache.set(cacheKey, { word, expiresAt: Date.now() + CACHE_TTL_MS })
  return word
}

export const GET = route(async (req: NextRequest) => {
  const user = await requireUser(req)
  const tz = user.profile?.timezone || 'Asia/Ho_Chi_Minh'
  const date = todayInTz(tz)
  const word = await pickDailyWord(date, `${tz}:${date}`)
  if (!word) return ok({ word })

  // SRS là dữ liệu riêng từng user — không cache, best-effort join theo term.
  const srs = await db.sRSItem
    .findUnique({
      where: { userId_itemType_itemKey: { userId: user.id, itemType: 'VOCAB', itemKey: word.term } },
      select: { state: true, mastery: true, reviewCount: true, lapseCount: true, nextReviewAt: true },
    })
    .catch(() => null)

  return ok({
    word: {
      ...word,
      srs: srs
        ? {
            state: srs.state,
            mastery: srs.mastery,
            reviewCount: srs.reviewCount,
            lapseCount: srs.lapseCount,
            nextReviewAt: srs.nextReviewAt?.toISOString() ?? null,
          }
        : null,
    },
  })
})
