/**
 * NihongoGo — Irodori A1 deterministic lesson generator (Task 27).
 *
 * Mirror của curriculum/generate.ts (buildSeedLesson) với bổ sung cho khoá
 * sinh tồn A1: node WRITING luôn có (kanji + kana), exercise DIALOGUE từ
 * hội thoại gốc, TRANSLATE_JA_VI (chọn nghĩa) và WORD_BANK (ghép từ).
 *
 * Nguyên tắc (giống curriculum pipeline):
 * - HOÀN TOÀN deterministic → seed lại luôn giống.
 * - Đáp án xây từ chính dữ liệu nguồn → không thể lệch.
 * - Distractor luôn ≠ đáp án, không trùng nhau trong cùng options.
 * - Mọi câu hỏi mang itemRef (VOCAB term / GRAMMAR code / KANJI / KANA).
 *
 * Cấu trúc node/bài (13 node, ~70–80 câu):
 *   VOCAB · VOCAB_PRACTICE · GRAMMAR ×2–3 · LISTENING · READING(DIALOGUE+READING)
 *   · SENTENCE(SENTENCE_ORDER+WORD_BANK) · TRANSLATION(VI→JA + JA→VI)
 *   · SPEAKING · WRITING(KANJI+KANA) · MIXED · BOSS
 */
import type {
  SeedLesson, SeedNode, SeedExercise, SeedQuestion, ChoiceOption, TokenDef,
} from '../types'
import type {
  IrodoriLesson, IrodoriPassage, IrodoriWordBank, IrodoriTranslateJaVi,
} from './types'
import type { CurriculumVocab, CurriculumGrammar, GrammarDrill } from '../curriculum/types'
import { sample } from '../curriculum/generate'
import { kanjiList } from '../kanji'
import { kanaCharacters } from '../kana'

/* ------------------------------- helpers ---------------------------------- */

function shuffleStable<T>(arr: T[], seed: number): T[] {
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
  return { options: opts.map((o) => ({ id: o.id, text: o.text })), answerId }
}

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
        left: { text: v.term, reading: v.romaji },
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
    data: { kind: 'choice', promptJa: v.term, promptSub: v.romaji, options },
    correct: { optionId: answerId },
    explanation: `${v.term} (${v.romaji}) = ${v.meaningVi}. Vd: ${v.exampleJa} — ${v.exampleVi}`,
    itemRef: { type: 'VOCAB', key: v.term },
  }
}

function makeSelectWord(v: CurriculumVocab, all: CurriculumVocab[], seed: number): SeedQuestion {
  const { options, answerId } = choiceOptions(
    v.term,
    vocabDistractors(all, (x) => x.term, v.term, 3, seed),
    seed + 7,
  )
  return {
    type: 'SELECT_WORD',
    prompt: `Chọn từ có nghĩa "${v.meaningVi}"`,
    data: { kind: 'choice', options: options.map((o) => ({ ...o, big: true })) },
    correct: { optionId: answerId },
    explanation: `"${v.meaningVi}" = ${v.term} (${v.romaji}).`,
    itemRef: { type: 'VOCAB', key: v.term },
  }
}

function makeFillBlank(v: CurriculumVocab, all: CurriculumVocab[], seed: number): SeedQuestion | null {
  const surface = v.exampleJa.includes(v.term) ? v.term : (v.exampleJa.includes(v.reading ?? '§§§') ? v.reading! : null)
  if (!surface) return null
  const sentence = v.exampleJa.replace(surface, '___')
  const samePos = all.filter((x) => x.pos === v.pos && x.term !== v.term)
  const pool = samePos.length >= 3 ? samePos : all.filter((x) => x.term !== v.term)
  const { options, answerId } = choiceOptions(surface, vocabDistractors(pool, (x) => (x.exampleJa.includes(x.term) ? x.term : x.reading ?? x.term), surface, 3, seed), seed + 13)
  return {
    type: 'FILL_BLANK',
    prompt: 'Điền từ còn thiếu',
    data: { kind: 'fill-blank', sentence, options },
    correct: { optionId: answerId },
    explanation: `Câu đúng: ${v.exampleJa} (${v.exampleVi})`,
    itemRef: { type: 'VOCAB', key: v.term },
  }
}

function makeListenSelect(l: { scriptJa: string; meaningVi: string; choices: string[]; answerIndex: number }): SeedQuestion {
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

function makeDrill(g: CurriculumGrammar, d: GrammarDrill): SeedQuestion {
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

function makeSentenceOrder(ja: string, vi: string, tokens: string[]): SeedQuestion {
  const defs: TokenDef[] = tokens.map((t, i) => ({ id: `t${i + 1}`, text: t }))
  return {
    type: 'SENTENCE_ORDER',
    prompt: 'Dựng câu đúng thứ tự',
    data: { kind: 'token-order', promptVi: vi, tokens: defs, audioText: ja },
    correct: { tokenOrder: defs.map((t) => t.id) },
    explanation: `Câu đúng: ${ja}`,
  }
}

function makeTranslateViJa(ja: string, vi: string, tokens: string[], distractors?: string[]): SeedQuestion {
  const defs: TokenDef[] = tokens.map((t, i) => ({ id: `t${i + 1}`, text: t }))
  const dis: TokenDef[] = (distractors ?? []).slice(0, 2).map((t, i) => ({ id: `x${i + 1}`, text: t }))
  return {
    type: 'TRANSLATE_VI_JA',
    prompt: 'Dịch câu tiếng Việt sang tiếng Nhật',
    data: { kind: 'token-order', promptVi: vi, tokens: defs, distractors: dis.length ? dis : undefined, audioText: ja },
    correct: { tokenOrder: defs.map((t) => t.id) },
    explanation: `Câu đúng: ${ja}`,
  }
}

function makeTranslateJaVi(t: IrodoriTranslateJaVi, seed: number): SeedQuestion {
  const { options, answerId } = choiceOptions(t.vi, t.wrongVi, seed)
  return {
    type: 'TRANSLATE_JA_VI',
    prompt: 'Chọn nghĩa tiếng Việt đúng',
    data: { kind: 'choice', promptJa: t.ja, options },
    correct: { optionId: answerId },
    explanation: `${t.ja} — nghĩa đúng: ${t.vi}`,
  }
}

function makeWordBank(w: IrodoriWordBank): SeedQuestion {
  const defs: TokenDef[] = w.tokens.map((t, i) => ({ id: `w${i + 1}`, text: t }))
  const dis: TokenDef[] = (w.distractors ?? []).slice(0, 2).map((t, i) => ({ id: `x${i + 1}`, text: t }))
  return {
    type: 'WORD_BANK',
    prompt: 'Ghép các từ cho sẵn thành câu đúng',
    data: { kind: 'token-order', promptVi: w.vi, tokens: defs, distractors: dis.length ? dis : undefined, audioText: w.ja },
    correct: { tokenOrder: defs.map((t) => t.id) },
    explanation: `Câu đúng: ${w.ja}`,
  }
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

function makeKanaWriting(char: string): SeedQuestion | null {
  const k = kanaCharacters.find((x) => x.character === char)
  if (!k) return null
  return {
    type: 'KANA_WRITING',
    prompt: `Viết tay ký tự ${char} (${k.strokeCount} nét)`,
    data: { kind: 'writing', character: char, romaji: k.romaji, meaningVi: k.exampleMeaning, strokeCount: k.strokeCount, guide: true },
    correct: { score: 60 },
    explanation: `${char} (${k.romaji}) viết bằng ${k.strokeCount} nét. Từ ví dụ: ${k.exampleWord} (${k.exampleMeaning})`,
    itemRef: { type: 'KANA', key: char },
  }
}

/** Đoạn đọc / hội thoại → exercise passage (DIALOGUE hoặc READING). */
function makePassageExercise(type: 'DIALOGUE' | 'READING', p: IrodoriPassage, instructions: string): SeedExercise {
  return {
    type,
    instructions,
    questions: [{
      type,
      data: {
        kind: 'passage',
        title: p.titleVi,
        lines: p.lines,
        questions: p.questions.map((q) => {
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
}

/* ------------------------------- main builder ------------------------------ */

const NODE_ICONS: Record<string, { icon: string; title: string; nodeType: SeedNode['nodeType'] }> = {
  vocab: { icon: 'BookOpen', title: 'Từ vựng mới', nodeType: 'VOCAB' },
  vocabPractice: { icon: 'BookText', title: 'Luyện từ vựng', nodeType: 'VOCAB_PRACTICE' },
  grammar: { icon: 'Shapes', title: 'Ngữ pháp', nodeType: 'GRAMMAR' },
  listening: { icon: 'Headphones', title: 'Luyện nghe', nodeType: 'LISTENING' },
  reading: { icon: 'MessageCircle', title: 'Đọc hiểu & hội thoại', nodeType: 'READING' },
  sentence: { icon: 'ListOrdered', title: 'Dựng câu', nodeType: 'SENTENCE' },
  translate: { icon: 'Languages', title: 'Dịch câu', nodeType: 'TRANSLATION' },
  speaking: { icon: 'Mic', title: 'Luyện nói', nodeType: 'SPEAKING' },
  writing: { icon: 'PenLine', title: 'Luyện viết', nodeType: 'WRITING' },
  mixed: { icon: 'Shuffle', title: 'Ôn trộn', nodeType: 'MIXED' },
  boss: { icon: 'Crown', title: 'Boss Quiz', nodeType: 'BOSS' },
}

export function buildIrodoriLesson(c: IrodoriLesson): SeedLesson {
  const seed = c.order * 131
  const vocab = c.vocabulary
  const grammar = c.grammar

  /* ---- Question pools (ngân sách tổng ~75–80 câu/bài) ---- */
  const meaningQs = sample(vocab, Math.min(9, vocab.length)).map((v, i) => makeSelectMeaning(v, vocab, seed + i))
  const wordQs = sample(vocab, Math.min(3, vocab.length)).map((v, i) => makeSelectWord(v, vocab, seed + 31 + i))
  const fillQs = sample(vocab, Math.min(6, vocab.length))
    .map((v, i) => makeFillBlank(v, vocab, seed + 61 + i))
    .filter((q): q is SeedQuestion => q !== null)

  const drillQs = grammar.flatMap((g) => g.drills.map((d) => makeDrill(g, d)))
  const orderQs = grammar
    .flatMap((g) => g.examples.filter((e) => e.tokens && e.tokens.length >= 3).map((e) => makeSentenceOrder(e.ja, e.vi, e.tokens!)))
    .slice(0, 3)
  const listenQs = c.listening.map((l) => makeListenSelect(l))
  const dictationQs = c.listening.filter((l) => l.dictation).slice(0, 2).map((l) => makeDictation(l))
  const translateQs = c.translatePairs.map((t) => makeTranslateViJa(t.ja, t.vi, t.tokens, t.distractors))
  const translateJaViQs = c.translateJaVi.map((t, i) => makeTranslateJaVi(t, seed + 91 + i))
  const wordBankQs = c.wordBank.map((w) => makeWordBank(w))
  const speakQs = c.speakSentences.map((s) => makeSpeak(s.ja, s.vi))
  const kanjiQs = (c.kanji ?? []).map(makeKanjiWriting).filter((q): q is SeedQuestion => q !== null)
  // Kana viết tay: đủ để node WRITING có 5–8 câu (kanji + kana)
  const kanaTarget = Math.max(2, Math.min(6, 8 - kanjiQs.length))
  const kanaQs = (c.writingKana ?? []).slice(0, kanaTarget).map(makeKanaWriting).filter((q): q is SeedQuestion => q !== null)

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
  const mixedPool = [...fillQs, ...orderQs, ...wordBankQs, ...wordQs, ...meaningQs, ...drillQs]
  const mixedN = grammar.reduce((s, g) => s + g.drills.length, 0) >= 14 ? 4 : 5
  const mixedQs = sample(mixedPool, Math.min(mixedN, mixedPool.length)).map((q) => ({ ...q, type: 'MIXED_REVIEW' as const }))

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
      key: `i${c.order}-n${n}`,
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
    { type: 'SELECT_MEANING', instructions: 'Chọn nghĩa của từ', questions: meaningQs.slice(0, 6) },
  ], { xp: 15 })

  pushNode('vocabPractice', [
    { type: 'SELECT_WORD', instructions: 'Chọn từ đúng', questions: wordQs },
    { type: 'FILL_BLANK', instructions: 'Điền từ vào chỗ trống', questions: fillQs.slice(0, 4) },
    { type: 'SELECT_MEANING', instructions: 'Ôn lại nghĩa từ', questions: meaningQs.slice(6) },
  ], { xp: 12, difficulty: 'MEDIUM' })

  for (const g of grammar) {
    pushNode('grammar', [
      { type: g.drills[0] ? drillType(g.drills[0]) : 'GRAMMAR_CHOICE', instructions: `Luyện mẫu: ${g.title}`, questions: g.drills.map((d) => makeDrill(g, d)) },
    ], { title: `Ngữ pháp: ${g.title}`, xp: 15, difficulty: 'MEDIUM' })
  }

  pushNode('listening', [
    { type: 'LISTEN_SELECT', instructions: 'Nghe và chọn đáp án đúng', questions: listenQs },
    ...(dictationQs.length ? [{ type: 'DICTATION' as const, instructions: 'Nghe và gõ lại câu', questions: dictationQs }] : []),
  ], { xp: 15, difficulty: 'MEDIUM' })

  pushNode('reading', [
    makePassageExercise('DIALOGUE', c.dialogue, 'Đọc hội thoại rồi trả lời câu hỏi'),
    makePassageExercise('READING', c.reading, 'Đọc đoạn sau rồi trả lời câu hỏi'),
  ], { xp: 15, difficulty: 'MEDIUM' })

  pushNode('sentence', [
    ...(orderQs.length ? [{ type: 'SENTENCE_ORDER' as const, instructions: 'Sắp xếp tokens thành câu đúng', questions: orderQs }] : []),
    { type: 'WORD_BANK', instructions: 'Ghép các từ cho sẵn thành câu đúng', questions: wordBankQs },
  ], { xp: 12, difficulty: 'MEDIUM' })

  pushNode('translate', [
    { type: 'TRANSLATE_VI_JA', instructions: 'Dịch sang tiếng Nhật bằng word bank', questions: translateQs },
    { type: 'TRANSLATE_JA_VI', instructions: 'Chọn nghĩa tiếng Việt của câu', questions: translateJaViQs },
  ], { xp: 12, difficulty: 'MEDIUM' })

  pushNode('speaking', [
    { type: 'SPEAK', instructions: 'Bấm micro và đọc to (cho phép dùng mic nếu trình duyệt hỏi)', questions: speakQs },
  ], { xp: 15, difficulty: 'MEDIUM' })

  if (kanjiQs.length || kanaQs.length) {
    pushNode('writing', [
      ...(kanjiQs.length ? [{ type: 'KANJI_WRITING' as const, instructions: 'Viết tay chữ Hán theo đúng số nét', questions: kanjiQs }] : []),
      ...(kanaQs.length ? [{ type: 'KANA_WRITING' as const, instructions: 'Viết tay ký tự kana theo đúng số nét', questions: kanaQs }] : []),
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
