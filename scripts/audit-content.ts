/**
 * NihongoGo — DB Content Integrity Audit (chạy trên database thực tế).
 *
 *   bun scripts/audit-content.ts            # human-readable + exit 1 nếu có ERROR
 *   bun scripts/audit-content.ts --json     # machine-readable (CI)
 *
 * Bổ trợ cho scripts/content-validate.ts (validate seed TRƯỚC khi ghi DB):
 * script này audit cái đang nằm TRONG DB sau seed/admin-CMS chỉnh sửa:
 * - Curriculum: course/section/lesson/node/exercise/question + orphan
 * - Vocabulary/Grammar/Kanji/Kana: trường bắt buộc, trùng lặp, liên kết bài học
 * - Question quality THEO TYPE (§7): MC options hợp lệ, correct nằm trong options,
 *   không dup option; fill-blank có answer; token-order khớp tokens; matching
 *   pair nhất quán; listening có audioText; speak có speakText; writing có
 *   character + strokeCount; passage có lines + questions
 * - Exercise PUBLISHED mà 0 câu hỏi = ERROR
 */
import { db } from '../src/lib/db'

interface Finding { level: 'ERROR' | 'WARN'; code: string; detail: string }
const findings: Finding[] = []
const err = (code: string, detail: string) => findings.push({ level: 'ERROR', code, detail })
const warn = (code: string, detail: string) => findings.push({ level: 'WARN', code, detail })

interface Counts { [k: string]: number }
const counts: Counts = {}

interface QData {
  kind?: string
  options?: { id: string; text: string }[]
  tokens?: { id: string; text: string }[]
  distractors?: { id: string; text: string }[]
  accept?: string[]
  pairs?: { id: string; right: { text: string } }[]
  audioText?: string
  speakText?: string
  character?: string
  strokeCount?: number
  lines?: unknown[]
  questions?: unknown[]
}
interface QCorrect {
  optionId?: string
  tokenOrder?: string[]
  answers?: string[]
  pairs?: Record<string, string>
  score?: number
}

async function main() {
  /* ---------- Curriculum ---------- */
  const [courses, sections, lessons, published] = await Promise.all([
    db.course.count(), db.section.count(), db.lesson.count(), db.lesson.count({ where: { status: 'PUBLISHED' } }),
  ])
  counts.courses = courses; counts.sections = sections; counts.lessons = lessons; counts.published = published

  const lessonsNoNodes = await db.lesson.findMany({ where: { nodes: { none: {} } }, select: { order: true, title: true } })
  for (const l of lessonsNoNodes) err('LESSON_NO_NODES', `Bài ${l.order} "${l.title}" không có node nào`)

  const nodesNoEx = await db.lessonNode.count({ where: { exercises: { none: {} }, status: 'PUBLISHED' } })
  if (nodesNoEx) err('NODE_NO_EXERCISE', `${nodesNoEx} node PUBLISHED không có exercise`)
  counts.nodes = await db.lessonNode.count()
  counts.exercises = await db.exercise.count()

  const exNoQ = await db.exercise.findMany({
    where: { questions: { none: {} }, status: 'PUBLISHED' },
    include: { node: { include: { lesson: { select: { order: true } } } } },
  })
  for (const e of exNoQ) err('EXERCISE_NO_QUESTIONS', `L${e.node.lesson.order} · ${e.instructions ?? e.type} (${e.type}) — exercise PUBLISHED nhưng 0 câu hỏi`)

  /* ---------- Dictionaries ---------- */
  const vocab = await db.vocabulary.findMany({ select: { id: true, term: true, reading: true, romaji: true, meaningVi: true, pos: true, lessonId: true } })
  counts.vocabulary = vocab.length
  const vocabByTerm = new Map<string, number>()
  for (const v of vocab) {
    if (!v.term?.trim()) err('VOCAB_EMPTY_TERM', `id=${v.id} thiếu term`)
    if (!v.meaningVi?.trim()) err('VOCAB_EMPTY_MEANING', `"${v.term}" thiếu nghĩa tiếng Việt`)
    if (!v.romaji?.trim()) warn('VOCAB_NO_ROMAJI', `"${v.term}" thiếu romaji`)
    if (/[\u4e00-\u9faf]/.test(v.term) && !v.reading) warn('VOCAB_KANJI_NO_READING', `"${v.term}" chứa kanji nhưng thiếu reading`)
    vocabByTerm.set(v.term, (vocabByTerm.get(v.term) ?? 0) + 1)
  }
  for (const [t, n] of vocabByTerm) if (n > 1) warn('VOCAB_DUPLICATE', `"${t}" xuất hiện ${n} lần`)
  const orphanVocab = vocab.filter((v) => !v.lessonId).length
  if (orphanVocab) warn('VOCAB_NO_LESSON', `${orphanVocab} từ vựng không liên kết bài học nào (nhóm "chung")`)

  const grammar = await db.grammarPoint.findMany({ select: { id: true, code: true, title: true, explanationVi: true, lessonId: true } })
  counts.grammar = grammar.length
  const gByCode = new Map<string, number>()
  for (const g of grammar) {
    if (!g.title?.trim()) err('GRAMMAR_EMPTY_TITLE', `code=${g.code} thiếu title`)
    if (!g.explanationVi?.trim()) err('GRAMMAR_EMPTY_EXPLANATION', `"${g.title}" thiếu giải thích tiếng Việt`)
    gByCode.set(g.code, (gByCode.get(g.code) ?? 0) + 1)
  }
  for (const [c, n] of gByCode) if (n > 1) warn('GRAMMAR_DUPLICATE', `code "${c}" xuất hiện ${n} lần`)

  const kanji = await db.kanji.findMany({ select: { character: true, meaningVi: true, onyomi: true, strokeCount: true, jlpt: true } })
  counts.kanji = kanji.length
  for (const k of kanji) {
    if (!k.meaningVi?.trim()) err('KANJI_EMPTY_MEANING', `"${k.character}" thiếu nghĩa`)
    if (!k.strokeCount || k.strokeCount < 1) err('KANJI_BAD_STROKES', `"${k.character}" strokeCount không hợp lệ (${k.strokeCount})`)
    // onyomi lưu dạng JSON array string '["イン"]' hoặc chuỗi thuần — parse cả hai
    let onyomiList: string[] = []
    if (k.onyomi) {
      try {
        const parsed = JSON.parse(k.onyomi) as unknown
        onyomiList = Array.isArray(parsed) ? parsed.map(String) : [k.onyomi]
      } catch {
        onyomiList = [k.onyomi]
      }
    }
    for (const o of onyomiList) {
      if (o.trim() && !/^[\u30a0-\u30ff\sー・,]+$/.test(o)) warn('KANJI_ONYOMI_NOT_KATAKANA', `"${k.character}" onyomi "${o}" không thuần katakana`)
    }
  }
  const kanaChars = await db.kanaCharacter.findMany({ select: { character: true, romaji: true, type: true } })
  counts.kana = kanaChars.length
  const kanaByChar = new Map<string, number>()
  for (const k of kanaChars) {
    if (!k.romaji?.trim()) err('KANA_NO_ROMAJI', `"${k.character}" thiếu romaji`)
    if (!/[\u3040-\u30ff]/.test(k.character)) err('KANA_NOT_KANA', `"${k.character}" không phải ký tự kana`)
    kanaByChar.set(k.character, (kanaByChar.get(k.character) ?? 0) + 1)
  }
  for (const [c, n] of kanaByChar) if (n > 1) err('KANA_DUPLICATE', `"${c}" xuất hiện ${n} lần`)

  /* ---------- Question quality (theo type) ---------- */
  const questions = await db.question.findMany({ select: { id: true, type: true, data: true, correctData: true, itemRefKey: true, exercise: { select: { node: { select: { lesson: { select: { order: true } } } } } } } })
  counts.questions = questions.length
  const typeCount = new Map<string, number>()
  for (const q of questions) {
    const L = `L${q.exercise.node.lesson.order}`
    typeCount.set(q.type, (typeCount.get(q.type) ?? 0) + 1)
    let d: QData
    let c: QCorrect
    try {
      d = JSON.parse(q.data) as QData
      c = JSON.parse(q.correctData) as QCorrect
    } catch {
      err('QUESTION_BAD_JSON', `${L} ${q.type} id=${q.id} data/correctData không parse được`)
      continue
    }
    switch (d.kind) {
      case 'choice':
      case 'audio-choice': {
        const opts = d.options ?? []
        if (opts.length < 2) { err('CHOICE_TOO_FEW_OPTIONS', `${L} ${q.type} id=${q.id} chỉ ${opts.length} lựa chọn`); break }
        if (!opts.some((o) => o.id === c.optionId)) err('CHOICE_CORRECT_MISSING', `${L} ${q.type} id=${q.id} correct.optionId không nằm trong options`)
        const texts = opts.map((o) => o.text)
        if (new Set(texts).size !== texts.length) err('CHOICE_DUP_OPTIONS', `${L} ${q.type} id=${q.id} có lựa chọn trùng văn bản`)
        if (d.kind === 'audio-choice' && !d.audioText?.trim()) err('AUDIO_CHOICE_NO_TEXT', `${L} id=${q.id} audio-choice thiếu audioText`)
        break
      }
      case 'fill-blank': {
        if (c.optionId) {
          if (!opts(d).some((o) => o.id === c.optionId)) err('FILL_CORRECT_MISSING', `${L} id=${q.id} correct.optionId không nằm trong options`)
        } else if (!c.answers?.length && !d.accept?.length) {
          err('FILL_NO_ANSWER', `${L} id=${q.id} fill-blank không có đáp án`)
        }
        break
      }
      case 'token-order': {
        const tokens = [...(d.tokens ?? []), ...(d.distractors ?? [])]
        const order = c.tokenOrder ?? []
        if (!order.length) err('ORDER_NO_ANSWER', `${L} id=${q.id} token-order thiếu correct.tokenOrder`)
        else if (!order.every((id) => tokens.some((t) => t.id === id))) err('ORDER_TOKEN_MISMATCH', `${L} id=${q.id} tokenOrder chứa id không có trong tokens`)
        break
      }
      case 'text-input': {
        const accept = c.answers ?? d.accept ?? []
        if (!accept.length) err('TEXTINPUT_NO_ANSWER', `${L} id=${q.id} text-input không có đáp án chấp nhận`)
        if (accept.some((a) => !a?.trim())) err('TEXTINPUT_BLANK_ANSWER', `${L} id=${q.id} text-input có đáp án rỗng`)
        break
      }
      case 'matching': {
        const pairs = d.pairs ?? []
        const cp = c.pairs ?? {}
        if (!pairs.length) { err('MATCHING_NO_PAIRS', `${L} id=${q.id} matching không có pair nào`); break }
        for (const p of pairs) {
          if (cp[p.id] !== p.right.text) err('MATCHING_PAIR_MISMATCH', `${L} id=${q.id} pair ${p.id} correct lệch (${cp[p.id]} ≠ ${p.right.text})`)
        }
        break
      }
      case 'speak': {
        if (!d.speakText?.trim()) err('SPEAK_NO_TEXT', `${L} id=${q.id} speak thiếu speakText`)
        break
      }
      case 'writing': {
        if (!d.character?.trim()) err('WRITING_NO_CHARACTER', `${L} id=${q.id} writing thiếu character`)
        if (!d.strokeCount || d.strokeCount < 1) err('WRITING_BAD_STROKES', `${L} id=${q.id} writing strokeCount không hợp lệ`)
        break
      }
      case 'passage': {
        if (!d.lines?.length) err('PASSAGE_NO_LINES', `${L} id=${q.id} passage thiếu lines`)
        if (!d.questions?.length) err('PASSAGE_NO_QUESTIONS', `${L} id=${q.id} passage thiếu sub-questions`)
        break
      }
      default:
        err('QUESTION_UNKNOWN_KIND', `${L} ${q.type} id=${q.id} kind không xác định "${String(d.kind)}" — renderer sẽ fallback`)
    }
  }

  /* ---------- Renderer coverage (type → kind đã có renderer) ---------- */
  const RENDERABLE_KINDS = new Set(['choice', 'audio-choice', 'fill-blank', 'token-order', 'text-input', 'matching', 'speak', 'writing', 'passage'])
  const kindSeen = new Set<string>()
  for (const q of questions) {
    try { kindSeen.add((JSON.parse(q.data) as QData).kind ?? '(none)') } catch { kindSeen.add('(bad-json)') }
  }
  for (const k of kindSeen) if (!RENDERABLE_KINDS.has(k)) err('KIND_NO_RENDERER', `kind "${k}" không có renderer — sẽ ra màn trống`)

  /* ---------- Report ---------- */
  const errors = findings.filter((f) => f.level === 'ERROR')
  const warns = findings.filter((f) => f.level === 'WARN')

  if (process.argv.includes('--json')) {
    console.log(JSON.stringify({
      ok: errors.length === 0,
      counts,
      typeCounts: Object.fromEntries(typeCount),
      errors: errors.length, warnings: warns.length,
      findings,
    }, null, 2))
  } else {
    console.log('== NihongoGo DB Content Audit ==')
    console.log(`course=${counts.courses} section=${counts.sections} lesson=${counts.lessons} (PUBLISHED=${counts.published}) node=${counts.nodes} exercise=${counts.exercises} question=${counts.questions}`)
    console.log(`vocabulary=${counts.vocabulary} grammar=${counts.grammar} kanji=${counts.kanji} kana=${counts.kana}`)
    console.log(`question-types=${typeCount.size}`)
    for (const w of warns) console.log(`  WARN  [${w.code}] ${w.detail}`)
    for (const e of errors) console.log(`  ERROR [${e.code}] ${e.detail}`)
    console.log(`---\nERROR: ${errors.length} · WARN: ${warns.length}`)
  }
  if (errors.length) process.exit(1)
  console.log('AUDIT OK')
}

function opts(d: QData) { return d.options ?? [] }

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1) })
