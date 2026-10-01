/**
 * NihongoGo — Deterministic lesson generator.
 *
 * Biến CurriculumLesson (data biên soạn gọn) thành SeedLesson đầy đủ với
 * 11–12 node và ~55–60 câu hỏi, đa dạng ≥ 12 dạng tương tác.
 *
 * Nguyên tắc:
 * - HOÀN TOÀN deterministic (sampling ổn định, không random) → seed lại luôn giống.
 * - Đáp án được xây từ chính dữ liệu nguồn → không thể lệch.
 * - Distractor luôn ≠ đáp án và không trùng nhau trong cùng options.
 * - Mọi câu hỏi mang itemRef (VOCAB term / GRAMMAR code / KANJI char) để bám SRS.
 */
import type {
  SeedLesson, SeedNode, SeedExercise, SeedQuestion, ChoiceOption, TokenDef,
} from '../types'
import type { CurriculumLesson, CurriculumVocab, CurriculumGrammar, GrammarDrill } from './types'
import { kanjiList } from '../kanji'

/* ------------------------------- helpers ---------------------------------- */

/** Sample đều & ổn định: luôn chọn phần tử đầu, cuối và trải đều ở giữa. */
export function sample<T>(arr: T[], n: number): T[] {
  if (n <= 0) return []
  if (arr.length <= n) return [...arr]
  if (n === 1) return [arr[Math.floor((arr.length - 1) / 2)]]
  const out: T[] = []
  const step = (arr.length - 1) / (n - 1)
  for (let i = 0; i < n; i++) out.push(arr[Math.round(i * step)])
  return out
}

function shuffleStable<T>(arr: T[], seed: number): T[] {
  // Xáo ổn định theo seed (LCG) — cùng input luôn ra cùng output.
  const out = [...arr]
  let s = seed || 1
  for (let i = out.length - 1; i > 0; i--) {
    s = (s * 1103515245 + 12345) % 2147483648
    const j = s % (i + 1)
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

function choiceOptions(correct: string, distractors: string[], seed: number): { options: ChoiceOption[]; answerId: string } {
  const uniq = [...new Set(distractors.filter((d) => d !== correct))].slice(0, 3)
  while (uniq.length < 3) uniq.push(`§padding-${uniq.length}`)
  const opts: { id: string; text: string }[] = shuffleStable(
    [{ id: 'a', text: correct }, ...uniq.map((t, i) => ({ id: 'd' + i, text: t }))],
    seed,
  )
  const answerId = opts.find((o) => o.id === 'a')!.id
  return {
    options: opts.map((o) => ({ id: o.id, text: o.text })),
    answerId,
  }
}

function vocabMain(v: CurriculumVocab): string {
  return v.term
}

/** Distractor cùng "hình dạng" ưu tiên: khác term, khác nghĩa. */
function vocabDistractors(list: CurriculumVocab[], pick: (v: CurriculumVocab) => string, exclude: string, n: number, seed: number): string[] {
  const pool = list.filter((v) => pick(v) !== exclude).map(pick)
  const uniq = [...new Set(pool)]
  return sample(shuffleStable(uniq, seed), n)
}

/* ------------------------------ question makers ---------------------------- */

function makeMatching(vocab: CurriculumVocab[], count: number): SeedQuestion {
  const picked = sample(vocab, Math.min(count, vocab.length))
  return {
    type: 'MATCHING',
    prompt: 'Nối từ tiếng Nhật với nghĩa tiếng Việt',
    data: {
      kind: 'matching',
      pairs: picked.map((v, i) => ({
        id: `p${i + 1}`,
        left: { text: vocabMain(v), reading: v.romaji },
        right: { text: v.meaningVi },
      })),
    },
    correct: { pairs: Object.fromEntries(picked.map((_, i) => [`p${i + 1}`, picked[i].meaningVi])) },
    explanation: 'Nhớ nghĩa qua câu ví dụ của từng từ trong bài học.',
  }
}

function makeSelectMeaning(v: CurriculumVocab, all: CurriculumVocab[], seed: number): SeedQuestion {
  const { options, answerId } = choiceOptions(
    v.meaningVi,
    vocabDistractors(all, (x) => x.meaningVi, v.meaningVi, 3, seed),
    seed,
  )
  return {
    type: 'SELECT_MEANING',
    prompt: 'Từ này có nghĩa là gì?',
    data: {
      kind: 'choice',
      promptJa: vocabMain(v),
      promptSub: v.romaji,
      options,
    },
    correct: { optionId: answerId },
    explanation: `${vocabMain(v)} (${v.romaji}) = ${v.meaningVi}. Vd: ${v.exampleJa} — ${v.exampleVi}`,
    itemRef: { type: 'VOCAB', key: vocabMain(v) },
  }
}

function makeSelectWord(v: CurriculumVocab, all: CurriculumVocab[], seed: number): SeedQuestion {
  const { options, answerId } = choiceOptions(
    vocabMain(v),
    vocabDistractors(all, (x) => x.term, v.term, 3, seed),
    seed + 7,
  )
  return {
    type: 'SELECT_WORD',
    prompt: `Chọn từ có nghĩa "${v.meaningVi}"`,
    data: { kind: 'choice', options: options.map((o) => ({ ...o, big: true })) },
    correct: { optionId: answerId },
    explanation: `"${v.meaningVi}" = ${vocabMain(v)} (${v.romaji}).`,
    itemRef: { type: 'VOCAB', key: vocabMain(v) },
  }
}

function makeFillBlank(v: CurriculumVocab, all: CurriculumVocab[], seed: number): SeedQuestion | null {
  const term = vocabMain(v)
  const surface = v.exampleJa.includes(term) ? term : (v.exampleJa.includes(v.reading ?? '§§§') ? v.reading! : null)
  if (!surface) return null
  const sentence = v.exampleJa.replace(surface, '___')
  const samePos = all.filter((x) => x.pos === v.pos && x.term !== term)
  const pool = samePos.length >= 3 ? samePos : all.filter((x) => x.term !== term)
  const { options, answerId } = choiceOptions(surface, vocabDistractors(pool, (x) => (x.exampleJa.includes(x.term) ? x.term : x.reading ?? x.term), surface, 3, seed), seed + 13)
  return {
    type: 'FILL_BLANK',
    prompt: 'Điền từ còn thiếu',
    data: { kind: 'fill-blank', sentence, options },
    correct: { optionId: answerId },
    explanation: `Câu đúng: ${v.exampleJa} (${v.exampleVi})`,
    itemRef: { type: 'VOCAB', key: term },
  }
}

function makeListenSelect(l: { scriptJa: string; meaningVi: string; choices: string[]; answerIndex: number }, i: number): SeedQuestion {
  const options: ChoiceOption[] = l.choices.map((c, ci) => ({ id: ci === l.answerIndex ? 'a' : 'd' + ci, text: c }))
  return {
    type: 'LISTEN_SELECT',
    prompt: 'Nghe và chọn nội dung đúng',
    data: { kind: 'audio-choice', audioText: l.scriptJa, meaningVi: l.meaningVi, options },
    correct: { optionId: 'a' },
    explanation: `Nội dung: ${l.scriptJa} — ${l.meaningVi}`,
  }
}

function makeDictation(l: { scriptJa: string; meaningVi: string }): SeedQuestion {
  return {
    type: 'DICTATION',
    prompt: 'Nghe và gõ lại nguyên văn (tiếng Nhật)',
    data: {
      kind: 'text-input',
      label: 'Câu bạn nghe được',
      placeholder: 'gõ bằng kana…',
      accept: [l.scriptJa, l.scriptJa.replace('。', '')],
      audioText: l.scriptJa,
    },
    correct: { answers: [l.scriptJa] },
    explanation: `Câu đúng: ${l.scriptJa} (${l.meaningVi})`,
  }
}

function makeDrill(g: CurriculumGrammar, d: GrammarDrill, i: number): SeedQuestion {
  const typeByKind: Record<GrammarDrill['kind'], SeedQuestion['type']> = {
    choice: 'GRAMMAR_CHOICE',
    particle: 'PARTICLE_FILL',
    fill: 'FILL_BLANK',
    error: 'ERROR_CORRECTION',
    conjugate: 'CONJUGATION',
  }
  const options = d.options.map((t, oi) => ({ id: oi === d.answerIndex ? 'a' : 'd' + oi, text: t }))
  const data: SeedQuestion['data'] =
    d.sentence && (d.kind === 'particle' || d.kind === 'fill' || d.kind === 'conjugate')
      ? { kind: 'fill-blank', sentence: d.sentence, options }
      : { kind: 'choice', promptJa: d.sentence, options }
  return {
    type: typeByKind[d.kind],
    prompt: d.prompt,
    data,
    correct: { optionId: 'a' },
    explanation: d.explanationVi,
    itemRef: { type: 'GRAMMAR', key: g.code },
  }
}

function makeSentenceOrder(ja: string, vi: string, tokens: string[], distractors?: string[]): SeedQuestion {
  const defs: TokenDef[] = tokens.map((t, i) => ({ id: `t${i + 1}`, text: t }))
  const dis: TokenDef[] = (distractors ?? []).slice(0, 2).map((t, i) => ({ id: `x${i + 1}`, text: t }))
  return {
    type: 'SENTENCE_ORDER',
    prompt: 'Dựng câu đúng thứ tự',
    data: { kind: 'token-order', promptVi: vi, tokens: defs, distractors: dis.length ? dis : undefined, audioText: ja },
    correct: { tokenOrder: defs.map((t) => t.id) },
    explanation: `Câu đúng: ${ja}`,
  }
}

function makeTranslate(ja: string, vi: string, tokens: string[], distractors?: string[]): SeedQuestion {
  const q = makeSentenceOrder(ja, vi, tokens, distractors)
  return { ...q, type: 'TRANSLATE_VI_JA', prompt: 'Dịch câu tiếng Việt sang tiếng Nhật' }
}

function makeSpeak(ja: string, vi: string): SeedQuestion {
  return {
    type: 'SPEAK',
    prompt: 'Đọc to câu sau',
    data: { kind: 'speak', speakText: ja, meaningVi: vi, threshold: 65 },
    correct: { score: 65 },
    explanation: `Đọc rõ từng âm: ${vi}`,
  }
}

function makeKanjiWriting(char: string): SeedQuestion | null {
  const k = kanjiList.find((x) => x.character === char)
  if (!k) return null
  return {
    type: 'KANJI_WRITING',
    prompt: `Viết tay kanji ${char}`,
    data: { kind: 'writing', character: char, romaji: k.onyomi[0] ?? k.kunyomi[0], meaningVi: k.meaningVi, strokeCount: k.strokeCount, guide: true },
    correct: { score: 60 },
    explanation: `${char} (${k.meaningVi}) viết bằng ${k.strokeCount} nét. Ví dụ: ${k.examples[0]?.word ?? ''}`,
    itemRef: { type: 'KANJI', key: char },
  }
}

/* ------------------------------- main builder ------------------------------ */

const NODE_ICONS: Record<string, { icon: string; title: string; nodeType: SeedNode['nodeType'] }> = {
  vocab: { icon: 'BookOpen', title: 'Từ vựng mới', nodeType: 'VOCAB' },
  vocabPractice: { icon: 'BookText', title: 'Luyện từ vựng', nodeType: 'VOCAB_PRACTICE' },
  grammar: { icon: 'Shapes', title: 'Ngữ pháp', nodeType: 'GRAMMAR' },
  listening: { icon: 'Headphones', title: 'Luyện nghe', nodeType: 'LISTENING' },
  reading: { icon: 'MessageCircle', title: 'Đọc hiểu', nodeType: 'READING' },
  sentence: { icon: 'ListOrdered', title: 'Dựng câu', nodeType: 'SENTENCE' },
  translate: { icon: 'Languages', title: 'Dịch câu', nodeType: 'TRANSLATION' },
  speaking: { icon: 'Mic', title: 'Luyện nói', nodeType: 'SPEAKING' },
  writing: { icon: 'PenLine', title: 'Viết kanji', nodeType: 'WRITING' },
  mixed: { icon: 'Shuffle', title: 'Ôn trộn', nodeType: 'MIXED' },
  boss: { icon: 'Crown', title: 'Boss Quiz', nodeType: 'BOSS' },
}

export function buildSeedLesson(c: CurriculumLesson): SeedLesson {
  const seed = c.order * 977
  const vocab = c.vocabulary
  const grammar = c.grammar

  /* ---- Question pools (ngân sách: 40–60 câu/bài) ---- */
  const hasKanji = (c.kanji ?? []).length > 0
  const meaningQs = sample(vocab, Math.min(hasKanji ? 4 : 5, vocab.length)).map((v, i) => makeSelectMeaning(v, vocab, seed + i))
  const wordQs = sample(vocab, Math.min(3, vocab.length)).map((v, i) => makeSelectWord(v, vocab, seed + 31 + i))
  const fillQs = sample(vocab, Math.min(6, vocab.length))
    .map((v, i) => makeFillBlank(v, vocab, seed + 61 + i))
    .filter((q): q is SeedQuestion => q !== null)

  const drillQs = grammar.flatMap((g) => g.drills.map((d, i) => makeDrill(g, d, i)))
  const orderQs = grammar
    .flatMap((g) => g.examples.filter((e) => e.tokens && e.tokens.length >= 3).map((e) => makeSentenceOrder(e.ja, e.vi, e.tokens!)))
    .slice(0, 3)
  const listenQs = c.listening.map((l, i) => makeListenSelect(l, i))
  const dictationQs = c.listening.filter((l) => l.dictation).slice(0, 2).map((l) => makeDictation(l))
  const translateQs = c.translatePairs.map((t) => makeTranslate(t.ja, t.vi, t.tokens, t.distractors))
  const speakQs = c.speakSentences.map((s) => makeSpeak(s.ja, s.vi))
  const kanjiQs = (c.kanji ?? []).map(makeKanjiWriting).filter((q): q is SeedQuestion => q !== null)

  const readingEx: SeedExercise = {
    type: 'READING',
    instructions: 'Đọc đoạn sau rồi trả lời câu hỏi',
    questions: [{
      type: 'READING',
      data: {
        kind: 'passage',
        title: c.reading.titleVi,
        lines: c.reading.lines,
        questions: c.reading.questions.map((q) => {
          const options = q.choices.map((t, ci) => ({ id: ci === q.answerIndex ? 'a' : 'd' + ci, text: t }))
          return {
            type: 'MULTIPLE_CHOICE',
            prompt: q.questionVi,
            data: { kind: 'choice', options },
            correct: { optionId: 'a' },
            explanation: q.explanationVi,
          }
        }),
      },
      correct: { answers: [] },
    }],
  }

  /* ---- Boss: 10 câu trộn mọi pool ---- */
  const bossPool: SeedQuestion[] = [
    ...sample(meaningQs, 3),
    ...sample(drillQs, 3),
    ...sample(listenQs, 2),
    ...sample(translateQs, 1),
    ...sample(wordQs, 1),
  ].filter(Boolean)
  const bossQs = sample(bossPool, Math.min(10, bossPool.length)).map((q) => ({ ...q, type: 'MIXED_REVIEW' as const }))

  /* ---- Mixed: 4–5 câu từ pool còn dư ---- */
  const mixedPool = [...fillQs, ...orderQs, ...wordQs, ...meaningQs, ...drillQs]
  const mixedQs = sample(mixedPool, Math.min(hasKanji ? 4 : 5, mixedPool.length)).map((q) => ({ ...q, type: 'MIXED_REVIEW' as const }))

  /* ---- Nodes ---- */
  const nodes: SeedNode[] = []
  let n = 0
  const pushNode = (
    kind: keyof typeof NODE_ICONS,
    exercises: SeedExercise[],
    opts?: { title?: string; xp?: number; requiredScore?: number; difficulty?: SeedNode['difficulty'] },
  ) => {
    n += 1
    const meta = NODE_ICONS[kind]
    nodes.push({
      key: `l${c.order}-n${n}`,
      title: opts?.title ?? meta.title,
      description: undefined,
      icon: meta.icon,
      nodeType: meta.nodeType,
      xpReward: opts?.xp ?? 12,
      requiredScore: opts?.requiredScore ?? 70,
      difficulty: opts?.difficulty ?? 'EASY',
      exercises,
    })
  }

  pushNode('vocab', [
    { type: 'MATCHING', instructions: 'Nối từ với nghĩa', questions: [makeMatching(vocab, 8)] },
    { type: 'SELECT_MEANING', instructions: 'Chọn nghĩa của từ', questions: meaningQs.slice(0, 4) },
  ], { xp: 15 })

  pushNode('vocabPractice', [
    { type: 'SELECT_WORD', instructions: 'Chọn từ đúng', questions: wordQs },
    { type: 'FILL_BLANK', instructions: 'Điền từ vào chỗ trống', questions: fillQs.slice(0, 3) },
    { type: 'SELECT_MEANING', instructions: 'Ôn lại nghĩa từ', questions: meaningQs.slice(4) },
  ], { xp: 12, difficulty: 'MEDIUM' })

  grammar.slice(0, 2).forEach((g, gi) => {
    pushNode('grammar', [
      { type: g.drills[0] ? drillType(g.drills[0]) : 'GRAMMAR_CHOICE', instructions: `Luyện mẫu: ${g.title}`, questions: g.drills.map((d, i) => makeDrill(g, d, i)) },
    ], { title: `Ngữ pháp: ${g.title}`, xp: 15, difficulty: 'MEDIUM' })
    if (gi === 1 && grammar.length > 2) {
      const g3 = grammar[2]
      pushNode('grammar', [
        { type: drillType(g3.drills[0]), instructions: `Luyện mẫu: ${g3.title}`, questions: g3.drills.map((d, i) => makeDrill(g3, d, i)) },
      ], { title: `Ngữ pháp: ${g3.title}`, xp: 15, difficulty: 'MEDIUM' })
    }
  })

  pushNode('listening', [
    { type: 'LISTEN_SELECT', instructions: 'Nghe và chọn đáp án đúng', questions: listenQs },
    ...(dictationQs.length ? [{ type: 'DICTATION' as const, instructions: 'Nghe và gõ lại câu', questions: dictationQs }] : []),
  ], { xp: 15, difficulty: 'MEDIUM' })

  pushNode('reading', [readingEx], { xp: 15, difficulty: 'MEDIUM' })

  if (orderQs.length) {
    pushNode('sentence', [
      { type: 'SENTENCE_ORDER', instructions: 'Sắp xếp tokens thành câu đúng', questions: orderQs },
    ], { xp: 12, difficulty: 'MEDIUM' })
  }

  pushNode('translate', [
    { type: 'TRANSLATE_VI_JA', instructions: 'Dịch sang tiếng Nhật bằng word bank', questions: translateQs },
  ], { xp: 12, difficulty: 'MEDIUM' })

  pushNode('speaking', [
    { type: 'SPEAK', instructions: 'Bấm micro và đọc to (cho phép dùng mic nếu trình duyệt hỏi)', questions: speakQs },
  ], { xp: 15, difficulty: 'MEDIUM' })

  if (kanjiQs.length) {
    pushNode('writing', [
      { type: 'KANJI_WRITING', instructions: 'Viết tay theo đúng số nét', questions: kanjiQs },
    ], { xp: 12, difficulty: 'MEDIUM' })
  }

  pushNode('mixed', [
    { type: 'MIXED_REVIEW', instructions: 'Tổng hợp các dạng đã học', questions: mixedQs },
  ], { xp: 15, difficulty: 'MEDIUM' })

  pushNode('boss', [
    { type: 'MIXED_REVIEW', instructions: 'Boss Quiz — vượt qua để mở bài tiếp theo!', questions: bossQs },
  ], { title: 'Boss Quiz', xp: 30, requiredScore: 80, difficulty: 'HARD' })

  return {
    order: c.order,
    slug: c.slug,
    title: c.title,
    titleJa: c.titleJa,
    description: c.description,
    learningObjectives: c.learningObjectives,
    grammarTopics: c.grammarTopics,
    vocabularyTopics: c.vocabularyTopics,
    kanjiTopics: c.kanjiTopics,
    difficulty: c.difficulty,
    status: 'PUBLISHED',
    nodes,
    vocabulary: vocab.map((v) => ({
      term: v.term, reading: v.reading, romaji: v.romaji, meaningVi: v.meaningVi,
      pos: v.pos, exampleJa: v.exampleJa, exampleVi: v.exampleVi,
    })),
    grammar: grammar.map((g) => ({
      code: g.code, title: g.title, explanationVi: [g.formation ? `Cách ghép: ${g.formation}\n\n` : '', g.explanationVi].join(''),
      examples: g.examples.map((e) => ({ ja: e.ja, vi: e.vi })),
    })),
    kanji: c.kanji,
  }
}

function drillType(d: GrammarDrill): SeedQuestion['type'] {
  switch (d.kind) {
    case 'particle': return 'PARTICLE_FILL'
    case 'fill': return 'FILL_BLANK'
    case 'error': return 'ERROR_CORRECTION'
    case 'conjugate': return 'CONJUGATION'
    default: return 'GRAMMAR_CHOICE'
  }
}
