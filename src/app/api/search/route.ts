import { NextRequest } from 'next/server'
import { ok, route, badRequest } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { rateLimit } from '@/lib/rate-limit'
import { db } from '@/lib/db'
import { katakanaToHiragana } from '@/lib/japanese'

export const dynamic = 'force-dynamic'

/**
 * Tìm kiếm toàn cục (command palette Ctrl+K): từ vựng / kanji / ngữ pháp / kana.
 * Dataset nhỏ (~1.300 dòng) nên filter bằng JS — cho phép match thông minh:
 * lowercase, bỏ macron romaji (ō→o), katakana→hiragana, bỏ khoảng trắng.
 */

const GROUP_LIMIT = { vocabulary: 8, kanji: 6, grammar: 4, kana: 6 }

const MACRONS: Record<string, string> = {
  ā: 'a', ī: 'i', ū: 'u', ē: 'e', ō: 'o',
  â: 'a', î: 'i', û: 'u', ê: 'e', ô: 'o',
}

function normalizeQuery(input: string): string {
  let s = input.normalize('NFC').trim().toLowerCase()
  s = s.replace(/[āīūēōâîûêô]/g, (m) => MACRONS[m] ?? m)
  s = s.replace(/[\s'’\-\.。、]/g, '')
  return s
}

/** Chuẩn hóa chuỗi so sánh cho tiếng Việt / Latin. */
function normLatin(s: string): string {
  return s.toLowerCase().replace(/[\s'’\-\.]/g, '')
}

function parseJsonArray(raw: string): string[] {
  try {
    const v = JSON.parse(raw)
    return Array.isArray(v) ? v.map(String) : []
  } catch {
    return []
  }
}

function contains(haystack: string | null | undefined, needle: string): boolean {
  if (!haystack || !needle) return false
  return normLatin(haystack).includes(needle)
}

function containsJa(haystack: string | null | undefined, needleJa: string, needleRaw: string): boolean {
  if (!haystack) return false
  if (needleRaw && haystack.includes(needleRaw)) return true
  if (!needleJa) return false
  return katakanaToHiragana(haystack).includes(katakanaToHiragana(needleJa))
}

export const GET = route(async (req: NextRequest) => {
  const user = await requireUser(req)
  rateLimit(`search:${user.id}`, 120, 60000)

  const raw = (new URL(req.url).searchParams.get('q') ?? '').trim()
  if (!raw || raw.length > 60) throw badRequest('Từ khóa không hợp lệ (1–60 ký tự)')
  const nq = normalizeQuery(raw)

  const [vocabRows, kanjiRows, grammarRows, kanaRows] = await Promise.all([
    db.vocabulary.findMany({
      select: {
        id: true, term: true, reading: true, romaji: true, meaningVi: true, pos: true,
        exampleJa: true, exampleVi: true, lessonId: true,
      },
    }),
    db.kanji.findMany({
      select: { id: true, character: true, meaningVi: true, onyomi: true, kunyomi: true, jlpt: true, strokeCount: true, mnemonicVi: true },
    }),
    db.grammarPoint.findMany({
      select: { id: true, code: true, title: true, explanationVi: true, lessonId: true },
    }),
    db.kanaCharacter.findMany({
      select: { id: true, character: true, romaji: true, type: true, exampleWord: true, exampleReading: true, exampleMeaning: true },
    }),
  ])

  // Map lessonId → { slug, title } để deep-link về bài học
  const lessonIds = new Set<string>()
  for (const v of vocabRows) if (v.lessonId) lessonIds.add(v.lessonId)
  for (const g of grammarRows) if (g.lessonId) lessonIds.add(g.lessonId)
  const lessons = lessonIds.size
    ? await db.lesson.findMany({
        where: { id: { in: [...lessonIds] } },
        select: { id: true, slug: true, title: true },
      })
    : []
  const lessonById = new Map(lessons.map((l) => [l.id, { slug: l.slug, title: l.title }]))

  const vocabulary = vocabRows
    .filter(
      (v) =>
        containsJa(v.term, nq, raw) ||
        (v.reading ? containsJa(v.reading, nq, raw) : false) ||
        contains(v.romaji, nq) ||
        contains(v.meaningVi, nq)
    )
    .slice(0, GROUP_LIMIT.vocabulary)
    .map((v) => ({
      id: v.id,
      term: v.term,
      reading: v.reading,
      romaji: v.romaji,
      meaningVi: v.meaningVi,
      pos: v.pos,
      exampleJa: v.exampleJa,
      exampleVi: v.exampleVi,
      lesson: v.lessonId ? lessonById.get(v.lessonId) ?? null : null,
    }))

  const kanji = kanjiRows
    .filter(
      (k) =>
        k.character === raw ||
        contains(k.meaningVi, nq) ||
        parseJsonArray(k.onyomi).some((r) => containsJa(r, nq, raw)) ||
        parseJsonArray(k.kunyomi).some((r) => containsJa(r, nq, raw)) ||
        contains(k.mnemonicVi, nq)
    )
    .slice(0, GROUP_LIMIT.kanji)
    .map((k) => ({
      id: k.id,
      character: k.character,
      meaningVi: k.meaningVi,
      onyomi: parseJsonArray(k.onyomi),
      kunyomi: parseJsonArray(k.kunyomi),
      jlpt: k.jlpt,
      strokeCount: k.strokeCount,
    }))

  const grammar = grammarRows
    .filter(
      (g) => contains(g.title, nq) || contains(g.code, nq) || contains(g.explanationVi, nq) || containsJa(g.title, nq, raw)
    )
    .slice(0, GROUP_LIMIT.grammar)
    .map((g) => ({
      id: g.id,
      code: g.code,
      title: g.title,
      explanationVi: g.explanationVi.slice(0, 160),
      lesson: g.lessonId ? lessonById.get(g.lessonId) ?? null : null,
    }))

  const kana = kanaRows
    .filter(
      (k) =>
        k.character === raw ||
        contains(k.romaji, nq) ||
        containsJa(k.exampleWord, nq, raw) ||
        contains(k.exampleMeaning, nq)
    )
    .slice(0, GROUP_LIMIT.kana)
    .map((k) => ({
      id: k.id,
      character: k.character,
      romaji: k.romaji,
      type: k.type,
      exampleWord: k.exampleWord,
      exampleMeaning: k.exampleMeaning,
    }))

  return ok({
    query: raw,
    results: {
      vocabulary,
      kanji,
      grammar,
      kana,
    },
    total: vocabulary.length + kanji.length + grammar.length + kana.length,
  })
})
