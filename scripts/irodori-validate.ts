/**
 * NihongoGo — Irodori A1 sanity validator.
 *   bun scripts/irodori-validate.ts          # validate toàn bộ 18 bài
 *   bun scripts/irodori-validate.ts 13,14    # chỉ validate bài cụ thể
 *
 * Ràng buộc (types.ts + generate.ts):
 * - vocabulary: 12–20 từ, term duy nhất toàn khoá, exampleJa chứa term/reading,
 *   term có kanji phải có reading
 * - grammar: 2–3 điểm/bài, code `i{order}-…` duy nhất, ≥2 ví dụ, 4–6 drill,
 *   drill options 3–4 không trùng, particle/fill/conjugate có sentence ___
 * - dialogue ≥6 dòng có speaker; reading ≥5 dòng; mỗi passage đúng 3 câu hỏi
 * - listening ≥4 mục, ≥2 dictation, choices ≥3 không trùng
 * - speak ≥4; translatePairs 3–6 (tokens ghép = ja bỏ khoảng trắng & dấu câu);
 *   translateJaVi 3 (wrongVi không trùng vi); wordBank 2 (như translatePairs)
 * - kanji phải có trong kanji.ts; writingKana phải có trong kana.ts
 * - generate.ts buildIrodoriLesson chạy được và boss đủ 10 câu
 */
import { kanjiList } from '../prisma/seed-data/kanji'
import { kanaCharacters } from '../prisma/seed-data/kana'
import { irodoriLessons } from '../prisma/seed-data/irodori'
import { buildIrodoriLesson } from '../prisma/seed-data/irodori/generate'

const errors: string[] = []
const err = (m: string) => errors.push(m)

const kanjiSet = new Set(kanjiList.map((k) => k.character))
const kanaSet = new Set(kanaCharacters.map((k) => k.character))

const normalize = (ja: string) => ja.replace(/[\s。、！？]/g, '')

const wanted = (process.argv[2] ?? '').split(',').map((x) => x.trim()).filter(Boolean)
const seenTerms = new Map<string, number>()
const seenCodes = new Set<string>()
let totalQuestions = 0

for (const c of irodoriLessons) {
  const L = `Bài ${c.order}`
  if (wanted.length && !wanted.includes(String(c.order))) continue

  if (c.order < 1 || c.order > 18) err(`${L}: order ngoài 1–18`)
  if (!c.slug.startsWith(`irodori-${c.order}`)) err(`${L}: slug "${c.slug}" lệch order`)
  if (c.description.length < 20) err(`${L}: description quá ngắn`)
  if (c.learningObjectives.length < 2) err(`${L}: cần ≥2 objectives`)
  if (c.difficulty !== 'BEGINNER' && c.difficulty !== 'ELEMENTARY') err(`${L}: difficulty lạ`)

  for (const v of c.vocabulary) {
    if (seenTerms.has(v.term)) err(`${L}: term "${v.term}" trùng với bài ${seenTerms.get(v.term)}`)
    seenTerms.set(v.term, c.order)
    if (!v.romaji || !v.meaningVi || !v.pos) err(`${L}: từ "${v.term}" thiếu trường bắt buộc`)
    if (!v.exampleJa.includes(v.term) && !(v.reading && v.exampleJa.includes(v.reading)))
      err(`${L}: ví dụ của "${v.term}" không chứa term/reading → "${v.exampleJa}"`)
    if (/[\u4e00-\u9faf]/.test(v.term) && !v.reading) err(`${L}: từ "${v.term}" có kanji nhưng thiếu reading`)
  }

  for (const g of c.grammar) {
    if (!g.code.startsWith(`i${c.order}-`)) err(`${L}: grammar code "${g.code}" sai tiền tố`)
    if (seenCodes.has(g.code)) err(`${L}: grammar code trùng "${g.code}"`)
    seenCodes.add(g.code)
    if (g.explanationVi.length < 30) err(`${L}: grammar "${g.code}" giải thích quá ngắn`)
    if (g.examples.length < 2) err(`${L}: grammar "${g.code}" cần ≥2 ví dụ`)
    if (g.drills.length < 4 || g.drills.length > 6) err(`${L}: grammar "${g.code}" có ${g.drills.length} drills (cần 4–6)`)
    g.drills.forEach((d, di) => {
      if (d.options.length < 3 || d.options.length > 4) err(`${L} drill#${di + 1} ${g.code}: ${d.options.length} options`)
      if (new Set(d.options).size !== d.options.length) err(`${L} drill#${di + 1} ${g.code}: options trùng`)
      if (d.answerIndex < 0 || d.answerIndex >= d.options.length) err(`${L} drill#${di + 1} ${g.code}: answerIndex sai`)
      if ((d.kind === 'particle' || d.kind === 'fill' || d.kind === 'conjugate') && !(d.sentence && d.sentence.includes('___')))
        err(`${L} drill#${di + 1} ${g.code}: kind ${d.kind} cần sentence có ___`)
    })
    // tokens của ví dụ đầu (nếu có) phải ghép = ja
    for (const e of g.examples) {
      if (e.tokens) {
        const sum = normalize(e.tokens.join(''))
        if (sum !== normalize(e.ja)) err(`${L} grammar "${g.code}": tokens ghép ≠ ja (${sum} ≠ ${normalize(e.ja)})`)
      }
    }
  }

  if (c.dialogue.lines.length < 6) err(`${L}: dialogue chỉ ${c.dialogue.lines.length} dòng (cần ≥6)`)
  c.dialogue.lines.forEach((ln) => { if (!ln.speaker || !ln.text || !ln.vi) err(`${L}: dialogue dòng thiếu trường`) })
  if (c.dialogue.questions.length !== 3) err(`${L}: dialogue cần đúng 3 câu hỏi`)

  if (c.reading.lines.length < 5) err(`${L}: reading chỉ ${c.reading.lines.length} dòng (cần ≥5)`)
  if (c.reading.questions.length !== 3) err(`${L}: reading cần đúng 3 câu hỏi`)

  if (c.listening.length < 4) err(`${L}: listening ${c.listening.length} (cần ≥4)`)
  if (c.listening.filter((l) => l.dictation).length < 2) err(`${L}: cần ≥2 dictation`)
  c.listening.forEach((l, i) => {
    if (l.choices.length < 3) err(`${L}: listening #${i + 1} ít hơn 3 choices`)
    if (new Set(l.choices).size !== l.choices.length) err(`${L}: listening #${i + 1} choices trùng`)
    if (l.answerIndex < 0 || l.answerIndex >= l.choices.length) err(`${L}: listening #${i + 1} answerIndex sai`)
  })

  if (c.speakSentences.length < 4) err(`${L}: speak ${c.speakSentences.length} (cần ≥4)`)
  if (c.translatePairs.length < 3) err(`${L}: translatePairs ${c.translatePairs.length} (cần ≥3)`)
  if (c.translateJaVi.length !== 3) err(`${L}: translateJaVi ${c.translateJaVi.length} (cần 3)`)

  for (const t of [...c.translatePairs, ...c.wordBank]) {
    const sum = normalize(t.tokens.join(''))
    if (sum !== normalize(t.ja)) err(`${L}: tokens ghép ≠ ja ("${t.ja}" → ${sum} ≠ ${normalize(t.ja)})`)
  }

  for (const k of c.kanji ?? []) {
    if (!kanjiSet.has(k)) err(`${L}: kanji "${k}" không có trong kanji.ts`)
  }
  for (const k of c.writingKana ?? []) {
    if (!kanaSet.has(k)) err(`${L}: kana "${k}" không có trong kana.ts`)
  }

  /* ---- generate chạy được + thống kê ---- */
  try {
    const gen = buildIrodoriLesson(c)
    const qs = gen.nodes.reduce((s, n) => s + n.exercises.reduce((x, e) => x + e.questions.length, 0), 0)
    totalQuestions += qs
    if (qs < 40 || qs > 90) err(`${L}: tổng ${qs} câu (ngoài 40–90)`)
    const boss = gen.nodes.find((n) => n.nodeType === 'BOSS')
    if (!boss) err(`${L}: thiếu node BOSS`)
  } catch (e) {
    err(`${L}: buildIrodoriLesson crash → ${(e as Error).message}`)
  }
}

if (errors.length) {
  console.error(`❌ ${errors.length} lỗi:\n` + errors.map((e) => `  - ${e}`).join('\n'))
  process.exit(1)
}
console.log(`✅ Irodori A1 OK: ${irodoriLessons.length} bài · ${seenTerms.size} từ duy nhất · ~${Math.round(totalQuestions / irodoriLessons.length)} câu/bài (tổng ${totalQuestions})`)
