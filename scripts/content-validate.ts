/**
 * NihongoGo — Content validator (chạy trước khi seed).
 *
 *   bun scripts/content-validate.ts            # validate toàn bộ lesson*.ts
 *   bun scripts/content-validate.ts lesson5    # chỉ validate bài cụ thể
 *
 * Kiểm tra 2 tầng:
 * 1. Curriculum data (lỗi biên soạn): slug/term/code trùng, example không chứa term,
 *    drill thiếu options/answerIndex sai, kanji tham chiếu không tồn tại…
 * 2. Generated SeedLesson (lỗi sinh): correct không khớp data, tokenOrder/matching
 *    lệch, số câu ngoài khoảng 40–60, thiếu node BOSS…
 */
import { readdir } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { kanjiList } from '../prisma/seed-data/kanji'
import { buildSeedLesson } from '../prisma/seed-data/curriculum/generate'
import type { CurriculumLesson } from '../prisma/seed-data/curriculum/types'
import type { SeedQuestion } from '../prisma/seed-data/types'

const errors: string[] = []
const warnings: string[] = []
const err = (m: string) => errors.push(m)
const warn = (m: string) => warnings.push(m)

const CURR_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'prisma', 'seed-data', 'curriculum')

async function main() {
  const wanted = (process.argv[2] ?? '').split(',').map((x) => x.trim()).filter(Boolean)
  const files = (await readdir(CURR_DIR))
    .filter((f) => /^lesson\d+\.ts$/.test(f) && (!wanted.length || wanted.includes(f.replace('.ts', ''))))
    .sort((a, b) => num(a) - num(b))
  if (!files.length) err('Không tìm thấy file curriculum nào')

  const kanjiSet = new Set(kanjiList.map((k) => k.character))
  const seenOrders = new Set<number>()
  const seenSlugs = new Set<string>()
  const seenGrammarCodes = new Set<string>()
  const matrix: { order: number; nodes: number; exercises: number; questions: number; types: Set<string> }[] = []

  for (const f of files) {
    const mod = (await import(join(CURR_DIR, f))) as Record<string, unknown>
    const c = Object.values(mod).find((v) => typeof v === 'object' && v !== null && 'vocabulary' in (v as object) && 'grammar' in (v as object) && 'order' in (v as object)) as CurriculumLesson | undefined
    if (!c) { err(`${f}: thiếu export const lesson`); continue }
    const L = `Bài ${c.order} (${f})`

    /* ---------- metadata ---------- */
    if (seenOrders.has(c.order)) err(`${L}: order ${c.order} trùng lặp`)
    seenOrders.add(c.order)
    if (seenSlugs.has(c.slug)) err(`${L}: slug "${c.slug}" trùng lặp`)
    seenSlugs.add(c.slug)
    if (c.slug !== `l${c.order}-` + c.slug.slice(c.slug.indexOf('-') + 1)) warn(`${L}: slug nên bắt đầu bằng l${c.order}-`)
    if (!/^[a-z0-9-]+$/.test(c.slug)) err(`${L}: slug chỉ gồm a-z, 0-9, gạch ngang`)
    if (c.title.length < 5 || c.titleJa.length < 1) err(`${L}: thiếu title/titleJa`)
    if (c.description.length < 20) err(`${L}: description quá ngắn (<20 ký tự)`)
    if (c.learningObjectives.length < 2) err(`${L}: cần ≥2 learningObjectives`)

    /* ---------- vocabulary ---------- */
    if (c.vocabulary.length < 14) err(`${L}: chỉ ${c.vocabulary.length} từ vựng (cần 16–22)`)
    if (c.vocabulary.length > 24) warn(`${L}: ${c.vocabulary.length} từ vựng (>22)`)
    const terms = new Set<string>()
    for (const v of c.vocabulary) {
      if (terms.has(v.term)) err(`${L}: từ vựng trùng "${v.term}"`)
      terms.add(v.term)
      if (!v.term || !v.romaji || !v.meaningVi || !v.pos) err(`${L}: từ "${v.term}" thiếu trường bắt buộc`)
      if (!v.exampleJa || !v.exampleVi) err(`${L}: từ "${v.term}" thiếu câu ví dụ`)
      else if (!v.exampleJa.includes(v.term) && !(v.reading && v.exampleJa.includes(v.reading)))
        err(`${L}: câu ví dụ của "${v.term}" không chứa term/reading`)
      if (/[\u4e00-\u9faf]/.test(v.term) && !v.reading) err(`${L}: từ "${v.term}" chứa kanji nhưng thiếu reading`)
    }

    /* ---------- grammar ---------- */
    if (c.grammar.length < 2 || c.grammar.length > 3) err(`${L}: ${c.grammar.length} điểm ngữ pháp (cần 2–3)`)
    for (const g of c.grammar) {
      if (!g.code.startsWith(`l${c.order}-`)) err(`${L}: grammar code "${g.code}" phải có tiền tố l${c.order}-`)
      if (seenGrammarCodes.has(g.code)) err(`${L}: grammar code trùng "${g.code}"`)
      seenGrammarCodes.add(g.code)
      if (!g.title || !g.explanationVi || g.explanationVi.length < 30) err(`${L}: grammar "${g.code}" giải thích quá ngắn`)
      if (g.examples.length < 2) err(`${L}: grammar "${g.code}" cần ≥2 ví dụ`)
      for (const e of g.examples) if (!e.ja || !e.vi) err(`${L}: grammar "${g.code}" có ví dụ thiếu ja/vi`)
      if (g.drills.length < 4 || g.drills.length > 6) err(`${L}: grammar "${g.code}" có ${g.drills.length} drill (cần 4–6)`)
      g.drills.forEach((d, di) => {
        const D = `${L} drill ${g.code}#${di + 1}`
        if (d.options.length < 3 || d.options.length > 4) err(`${D}: ${d.options.length} options (cần 3–4)`)
        if (new Set(d.options).size !== d.options.length) err(`${D}: options trùng nhau`)
        if (d.answerIndex < 0 || d.answerIndex >= d.options.length) err(`${D}: answerIndex ${d.answerIndex} ngoài phạm vi`)
        if (!d.prompt) err(`${D}: thiếu prompt`)
        if (!d.explanationVi || d.explanationVi.length < 5) err(`${D}: thiếu explanationVi`)
        if ((d.kind === 'particle' || d.kind === 'fill' || d.kind === 'conjugate') && !(d.sentence && d.sentence.includes('___')))
          err(`${D}: kind ${d.kind} cần sentence chứa ___`)
        if (d.kind === 'choice' && d.sentence && !d.sentence.includes('___')) warn(`${D}: kind choice có sentence không có ___ (sẽ hiện promptJa)`)
      })
    }

    /* ---------- dialogues / listening / reading ---------- */
    if (c.dialogues.length < 2) err(`${L}: cần ≥2 hội thoại`)
    c.dialogues.forEach((d, i) => {
      if (d.lines.length < 6) err(`${L}: hội thoại ${i + 1} chỉ ${d.lines.length} lượt (cần 6–10)`)
      d.lines.forEach((ln) => { if (!ln.speaker || !ln.ja || !ln.vi) err(`${L}: hội thoại ${i + 1} có dòng thiếu trường`) })
    })
    if (c.listening.length < 4) err(`${L}: cần ≥4 mục nghe`)
    if (c.listening.filter((l) => l.dictation).length < 2) err(`${L}: cần ≥2 mục nghe đánh dấu dictation`)
    c.listening.forEach((l, i) => {
      if (l.choices.length < 3) err(`${L}: listening ${i + 1} cần ≥3 lựa chọn`)
      if (new Set(l.choices).size !== l.choices.length) err(`${L}: listening ${i + 1} choices trùng nhau`)
      if (l.answerIndex < 0 || l.answerIndex >= l.choices.length) err(`${L}: listening ${i + 1} answerIndex sai`)
      if (!l.scriptJa || !l.meaningVi) err(`${L}: listening ${i + 1} thiếu scriptJa/meaningVi`)
    })
    const r = c.reading
    if (r.lines.length < 5) err(`${L}: đoạn đọc cần ≥5 dòng`)
    r.lines.forEach((ln) => { if (!ln.text || !ln.vi) err(`${L}: dòng đoạn đọc thiếu text/vi`) })
    if (r.questions.length !== 3) err(`${L}: đoạn đọc cần đúng 3 câu hỏi`)
    r.questions.forEach((q, i) => {
      if (q.choices.length < 3) err(`${L}: câu hỏi đọc ${i + 1} cần ≥3 lựa chọn`)
      if (q.answerIndex < 0 || q.answerIndex >= q.choices.length) err(`${L}: câu hỏi đọc ${i + 1} answerIndex sai`)
      if (!q.explanationVi) err(`${L}: câu hỏi đọc ${i + 1} thiếu explanationVi`)
    })

    /* ---------- speak / translate / kanji ---------- */
    if (c.speakSentences.length < 4) err(`${L}: cần ≥4 câu luyện nói`)
    c.speakSentences.forEach((s) => { if (!s.ja || !s.vi) err(`${L}: câu nói thiếu ja/vi`) })
    if (c.translatePairs.length < 4) err(`${L}: cần ≥4 cặp dịch`)
    c.translatePairs.forEach((t, i) => {
      if (!t.ja || !t.vi) err(`${L}: cặp dịch ${i + 1} thiếu ja/vi`)
      if (!t.tokens || t.tokens.length < 3) err(`${L}: cặp dịch ${i + 1} cần ≥3 tokens`)
      if (t.tokens.join('') !== t.ja.replace(/[\s。、]/g, '')) err(`${L}: cặp dịch ${i + 1} tokens ghép lại ≠ "${t.ja}"`)
      if (t.distractors?.some((x) => t.tokens.includes(x))) err(`${L}: cặp dịch ${i + 1} distractor trùng token`)
    })
    for (const k of c.kanji ?? []) if (!kanjiSet.has(k)) err(`${L}: kanji "${k}" không tồn tại trong kanji.ts`)

    /* ---------- generated structural validation ---------- */
    const gen = buildSeedLesson(c)
    if (gen.status !== 'PUBLISHED') err(`${L}: generated phải PUBLISHED`)
    const nodeTypes = gen.nodes.map((n) => n.nodeType)
    if (!nodeTypes.includes('BOSS')) err(`${L}: thiếu node BOSS`)
    const boss = gen.nodes.find((n) => n.nodeType === 'BOSS')
    if (boss && boss.requiredScore !== 80) err(`${L}: BOSS requiredScore phải = 80`)
    const totalQ = gen.nodes.reduce((s, n) => s + n.exercises.reduce((s2, e) => s2 + e.questions.length, 0), 0)
    if (totalQ < 40) err(`${L}: chỉ ${totalQ} câu hỏi (<40)`)
    if (totalQ > 70) warn(`${L}: ${totalQ} câu hỏi (>70)`)
    const typeSet = new Set<string>()
    for (const node of gen.nodes) {
      if (!node.exercises.length) err(`${L}: node ${node.key} không có exercise nào`)
      for (const ex of node.exercises) {
        // Exercise PUBLISHED mà 0 câu hỏi = dead content (regression L11–50 cũ:
        // "Ôn lại nghĩa từ" rỗng do meaningQs.slice(4) hết câu) — phải là ERROR.
        if (!ex.questions.length) err(`${L}: node ${node.key} exercise "${ex.instructions ?? ex.type}" (${ex.type}) KHÔNG CÓ CÂU HỎI NÀO`)
        for (const q of ex.questions) { typeSet.add(q.type); validateQuestion(q, `${L} node ${node.key}`) }
      }
    }
    if (typeSet.size < 10) warn(`${L}: chỉ ${typeSet.size} dạng tương tác (<10)`)
    const vocabKeys = new Set(gen.vocabulary.map((v) => v.term))
    const grammarKeys = new Set(gen.grammar.map((g) => g.code))
    for (const node of gen.nodes) for (const ex of node.exercises) for (const q of ex.questions) {
      if (q.itemRef) {
        if (q.itemRef.type === 'VOCAB' && !vocabKeys.has(q.itemRef.key)) err(`${L}: itemRef VOCAB "${q.itemRef.key}" không có trong vocabulary`)
        if (q.itemRef.type === 'GRAMMAR' && !grammarKeys.has(q.itemRef.key)) err(`${L}: itemRef GRAMMAR "${q.itemRef.key}" không có trong grammar`)
        if (q.itemRef.type === 'KANJI' && !kanjiSet.has(q.itemRef.key)) err(`${L}: itemRef KANJI "${q.itemRef.key}" không tồn tại`)
      }
    }
    matrix.push({ order: c.order, nodes: gen.nodes.length, exercises: gen.nodes.reduce((s, n) => s + n.exercises.length, 0), questions: totalQ, types: typeSet })
  }

  /* ---------- report ---------- */
  console.log('lesson|nodes|exercises|questions|types')
  for (const m of matrix) console.log(`${m.order}|${m.nodes}|${m.exercises}|${m.questions}|${m.types.size}`)
  console.log(`---\nFiles: ${files.length} · Errors: ${errors.length} · Warnings: ${warnings.length}`)
  for (const w of warnings) console.log('⚠ ' + w)
  for (const e of errors) console.log('✗ ' + e)
  if (errors.length) { console.log('\nVALIDATE FAIL'); process.exit(1) }
  console.log('\nVALIDATE OK')
}

function validateQuestion(q: SeedQuestion, where: string) {
  const d = q.data as Record<string, unknown>
  const c = q.correct as Record<string, unknown>
  if (d.kind === 'choice' || d.kind === 'audio-choice' || d.kind === 'fill-blank') {
    const options = (d.options ?? []) as { id: string; text: string }[]
    if (!options.length) err(`${where}: choice không có options`)
    if (typeof c.optionId !== 'string' || !options.some((o) => o.id === c.optionId)) err(`${where}: correct.optionId không nằm trong options`)
    const texts = options.map((o) => o.text)
    if (new Set(texts).size !== texts.length) err(`${where}: options có text trùng nhau`)
    if (texts.some((t) => t.startsWith('§padding'))) err(`${where}: options bị padding (thiếu distractor thật)`)
  } else if (d.kind === 'token-order') {
    const tokens = (d.tokens ?? []) as { id: string }[]
    const order = c.tokenOrder as string[] | undefined
    if (!order || order.length !== tokens.length || !order.every((id) => tokens.some((t) => t.id === id)))
      err(`${where}: tokenOrder không khớp tokens`)
  } else if (d.kind === 'text-input') {
    const accept = (d.accept ?? c.answers) as string[] | undefined
    if (!accept || !accept.length) err(`${where}: text-input thiếu accept/answers`)
  } else if (d.kind === 'matching') {
    const pairs = (d.pairs ?? []) as { id: string; right: { text: string } }[]
    const cp = c.pairs as Record<string, string> | undefined
    if (!cp) err(`${where}: matching thiếu correct.pairs`)
    else for (const p of pairs) if (cp[p.id] !== p.right.text) err(`${where}: matching pair ${p.id} correct lệch (${cp[p.id]} ≠ ${p.right.text})`)
  } else if (d.kind === 'speak') {
    if (typeof c.score !== 'number') err(`${where}: speak thiếu correct.score`)
  } else if (d.kind === 'writing') {
    if (typeof c.score !== 'number') err(`${where}: writing thiếu correct.score`)
    if (typeof d.strokeCount !== 'number' || d.strokeCount < 1) err(`${where}: writing strokeCount không hợp lệ`)
  } else if (d.kind === 'passage') {
    if (!Array.isArray(d.lines) || !d.lines.length) err(`${where}: passage thiếu lines`)
    if (!Array.isArray(d.questions) || !d.questions.length) err(`${where}: passage thiếu questions`)
    for (const iq of (d.questions ?? []) as SeedQuestion[]) validateQuestion(iq, `${where}/inline`)
  }
}

function num(f: string) { return parseInt(f.replace(/\D/g, ''), 10) }

main().catch((e) => { console.error(e); process.exit(1) })
