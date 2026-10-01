/**
 * NihongoGo — Irodori A1 seeder (Task 27) — chạy: bun prisma/seed-irodori.ts
 *
 * Khoá "Irodori A1 — Tiếng Nhật sinh tồn" (12 bài, 3 section, PUBLISHED)
 * + patch N5 Lesson 1 (kana-hiragana) thêm node SPEAKING (k9) & READING (k10).
 *
 * IDEMPOTENT (chạy lại không nhân bản):
 * - Course: upsert theo slug 'irodori-a1'.
 * - Section: upsert theo (courseId, order).
 * - Lesson: upsert theo slug 'irodori-1'…'irodori-12'.
 * - Node: tạo CHỈ các key còn thiếu trong lesson (bỏ qua key đã có).
 *   Cờ --force: xoá node irodori (cascade exercise/question/progress) rồi tạo lại
 *   cho trường hợp cần đẩy nội dung đã sửa — sẽ reset tiến độ node irodori.
 * - Vocabulary: pattern Task 22 (relink) nhưng KHÔNG đánh cắp link của khoá N5 —
 *   từ trùng term mà đã thuộc lesson khác thì tạo BẢN SAO cho lesson irodori
 *   (audit chỉ WARN trùng term, hai khoá vẫn đủ từ vựng riêng).
 * - GrammarPoint: code unique dạng 'i{order}-…' không đụng N5 ('l{order}-…')
 *   → upsert theo code + relink lessonId an toàn.
 *
 * Patch kana-hiragana (N5 Lesson 1): thêm k9 SPEAKING + k10 READING nhưng GIỮ
 * k8 BOSS là node CUỐI CÙNG (đổi order k8 → 10). Lý do: course.ts mở khoá lesson
 * tiếp theo dựa trên node PUBLISHED cuối cùng của lesson trước — nếu k10 đứng sau
 * boss, katakana (user cũ đã hoàn thành) sẽ bị khoá ngược. Với bố cục
 * k1…k7 → k9(8) → k10(9) → k8(10): tiến độ user cũ được giữ nguyên, boss vẫn là
 * cửa ải cuối bài.
 */
import { PrismaClient } from '@prisma/client'
import { buildIrodoriLesson } from './seed-data/irodori/generate'
import { irodoriLessons, IRODORI_SECTIONS, irodoriSectionForOrder } from './seed-data/irodori'
import type { SeedLesson, SeedNode, SeedQuestion, SeedExercise } from './seed-data/types'

const FORCE = process.argv.includes('--force')

const IRODORI_COURSE = {
  slug: 'irodori-a1',
  title: 'Irodori A1 — Tiếng Nhật sinh tồn',
  titleJa: 'いろどり A1',
  description:
    '12 bài tiếng Nhật sinh tồn cấp A1: chào hỏi, giới thiệu, mua sắm, ăn uống, chỉ đường, mời mọc — nội dung gốc, học xong giao tiếp được ngay.',
  order: 2,
  status: 'PUBLISHED',
}

async function main() {
  const db = new PrismaClient()
  try {
    await seedIrodori(db)
  } finally {
    await db.$disconnect()
  }
}

/**
 * Giểm vào từ prisma/seed.ts (full-seed) hoặc chạy trực tiếp qua CLI.
 * Idempotent — chạy nhiều lần không nhân bản nội dung.
 */
export async function seedIrodori(db: PrismaClient) {
  console.log('🌸 Seeding Irodori A1…' + (FORCE ? ' (force rebuild nodes)' : ''))

  /* ------------------------------ Course --------------------------------- */
  const course = await db.course.upsert({
    where: { slug: IRODORI_COURSE.slug },
    update: { ...IRODORI_COURSE },
    create: { ...IRODORI_COURSE },
  })

  /* ------------------------------ Sections -------------------------------- */
  const sectionIds = new Map<number, string>()
  for (const s of IRODORI_SECTIONS) {
    const existing = await db.section.findFirst({ where: { courseId: course.id, order: s.order }, select: { id: true } })
    const row = existing
      ? await db.section.update({ where: { id: existing.id }, data: { title: s.title, titleJa: s.titleJa, description: s.description } })
      : await db.section.create({ data: { courseId: course.id, order: s.order, title: s.title, titleJa: s.titleJa, description: s.description } })
    sectionIds.set(s.order, row.id)
  }

  /* ------------------------------ Lessons --------------------------------- */
  let createdNodes = 0
  let createdExercises = 0
  let createdQuestions = 0
  let createdVocab = 0
  let relinkedVocab = 0
  let createdGrammar = 0
  let relinkedGrammar = 0

  for (const c of irodoriLessons) {
    const gen = buildIrodoriLesson(c)
    const sectionId = sectionIds.get(irodoriSectionForOrder(gen.order).order)!
    const counts = await seedIrodoriLesson(db, course.id, sectionId, gen)
    createdNodes += counts.nodes
    createdExercises += counts.exercises
    createdQuestions += counts.questions
    createdVocab += counts.createdVocab
    relinkedVocab += counts.relinkedVocab
    createdGrammar += counts.createdGrammar
    relinkedGrammar += counts.relinkedGrammar
  }

  /* --------------------- Patch N5 Lesson 1 (kana) -------------------------- */
  const patch = await patchHiraganaLesson(db)

  /* ------------------------------ Summary --------------------------------- */
  const totals = await Promise.all([
    db.course.count(),
    db.lesson.count({ where: { courseId: course.id } }),
    db.lessonNode.count({ where: { lesson: { courseId: course.id } } }),
    db.exercise.count({ where: { node: { lesson: { courseId: course.id } } } }),
    db.question.count({ where: { exercise: { node: { lesson: { courseId: course.id } } } } }),
    db.vocabulary.count({ where: { lesson: { courseId: course.id } } }),
    db.grammarPoint.count({ where: { lesson: { courseId: course.id } } }),
  ])
  console.log('✅ Irodori A1 seed hoàn tất:')
  console.log(`   tạo mới: ${createdNodes} node · ${createdExercises} exercise · ${createdQuestions} câu hỏi · ${createdVocab} vocab (mới) + ${relinkedVocab} (relink) · ${createdGrammar} grammar (mới) + ${relinkedGrammar} (relink)`)
  console.log(`   patch kana-hiragana: k9=${patch.k9}, k10=${patch.k10}, k8→order10=${patch.k8Reordered}`)
  console.log(`   DB hiện có: ${totals[0]} course · irodori ${totals[1]} bài / ${totals[2]} node / ${totals[3]} exercise / ${totals[4]} câu hỏi / ${totals[5]} vocab / ${totals[6]} grammar`)
}

/* ============================== helpers ==================================== */

async function seedIrodoriLesson(db: PrismaClient, courseId: string, sectionId: string, l: SeedLesson) {
  const lesson = await db.lesson.upsert({
    where: { slug: l.slug },
    update: {
      courseId,
      sectionId,
      order: l.order,
      title: l.title,
      titleJa: l.titleJa,
      description: l.description,
      learningObjectives: JSON.stringify(l.learningObjectives),
      grammarTopics: JSON.stringify(l.grammarTopics),
      vocabularyTopics: JSON.stringify(l.vocabularyTopics),
      kanjiTopics: JSON.stringify(l.kanjiTopics),
      difficulty: l.difficulty,
      status: 'PUBLISHED',
    },
    create: {
      courseId,
      sectionId,
      slug: l.slug,
      order: l.order,
      title: l.title,
      titleJa: l.titleJa,
      description: l.description,
      learningObjectives: JSON.stringify(l.learningObjectives),
      grammarTopics: JSON.stringify(l.grammarTopics),
      vocabularyTopics: JSON.stringify(l.vocabularyTopics),
      kanjiTopics: JSON.stringify(l.kanjiTopics),
      difficulty: l.difficulty,
      status: 'PUBLISHED',
    },
  })

  /* ---- Vocabulary: relink pattern Task 22, không đánh cắp link N5 ---- */
  let createdVocab = 0
  let relinkedVocab = 0
  for (const v of l.vocabulary) {
    const fields = {
      term: v.term,
      reading: v.reading,
      romaji: v.romaji,
      meaningVi: v.meaningVi,
      pos: v.pos,
      exampleJa: v.exampleJa,
      exampleVi: v.exampleVi,
    }
    // (a) Đã có bản của chính lesson này → refresh nội dung, giữ link.
    const own = await db.vocabulary.findFirst({ where: { term: v.term, lessonId: lesson.id }, select: { id: true } })
    if (own) {
      await db.vocabulary.update({ where: { id: own.id }, data: fields })
      continue
    }
    // (b) Bản mồ côi (khoá bị dựng lại → FK SetNull) → nhận nuôi + relink.
    const orphan = await db.vocabulary.findFirst({ where: { term: v.term, lessonId: null }, select: { id: true } })
    if (orphan) {
      await db.vocabulary.update({ where: { id: orphan.id }, data: { ...fields, lessonId: lesson.id } })
      relinkedVocab++
      continue
    }
    // (c) Term đã thuộc lesson khác (khoá N5) → tạo BẢN SAO cho irodori.
    await db.vocabulary.create({ data: { ...fields, lessonId: lesson.id } })
    createdVocab++
  }

  /* ---- Grammar: code unique 'i{order}-…' → upsert + relink ---- */
  let createdGrammar = 0
  let relinkedGrammar = 0
  for (const g of l.grammar) {
    const fields = {
      title: g.title,
      explanationVi: g.explanationVi,
      examples: JSON.stringify(g.examples),
    }
    const existing = await db.grammarPoint.findUnique({ where: { code: g.code }, select: { id: true, lessonId: true } })
    if (existing) {
      // Relink nếu mồ côi hoặc trỏ nhầm; giữ nguyên nếu đã đúng lesson.
      await db.grammarPoint.update({ where: { id: existing.id }, data: { ...fields, ...(existing.lessonId === lesson.id ? {} : { lessonId: lesson.id }) } })
      if (existing.lessonId !== lesson.id) relinkedGrammar++
      continue
    }
    await db.grammarPoint.create({ data: { ...fields, code: g.code, lessonId: lesson.id } })
    createdGrammar++
  }

  /* ---- Nodes: chỉ tạo key còn thiếu (idempotent) ---- */
  const existingNodes = FORCE ? [] : await db.lessonNode.findMany({ where: { lessonId: lesson.id }, select: { key: true } })
  const existingKeys = new Set(existingNodes.map((n) => n.key))
  if (FORCE) {
    // Xoá sạch node irodori của lesson (cascade exercise/question/nodeProgress).
    await db.lessonNode.deleteMany({ where: { lessonId: lesson.id } })
  }

  let nodes = 0
  let exercises = 0
  let questions = 0
  for (const [ni, n] of l.nodes.entries()) {
    if (existingKeys.has(n.key)) continue
    await createNodeWithContent(db, lesson.id, n, ni)
    nodes++
    exercises += n.exercises.length
    questions += n.exercises.reduce((s, e) => s + e.questions.length, 0)
  }

  return { nodes, exercises, questions, createdVocab, relinkedVocab, createdGrammar, relinkedGrammar }
}

async function createNodeWithContent(db: PrismaClient, lessonId: string, n: SeedNode, ni: number) {
  const node = await db.lessonNode.create({ data: {
    lessonId,
    key: n.key,
    title: n.title,
    description: n.description,
    icon: n.icon,
    nodeType: n.nodeType,
    order: n.order ?? ni + 1,
    xpReward: n.xpReward ?? 10,
    requiredScore: n.requiredScore ?? 70,
    difficulty: n.difficulty ?? 'EASY',
    status: 'PUBLISHED',
  } })
  for (const [ei, ex] of n.exercises.entries()) {
    const exercise = await db.exercise.create({ data: {
      nodeId: node.id,
      type: ex.type,
      instructions: ex.instructions,
      order: ei + 1,
      status: 'PUBLISHED',
    } })
    for (const [qi, q] of ex.questions.entries()) {
      await db.question.create({ data: {
        exerciseId: exercise.id,
        type: q.type,
        prompt: q.prompt,
        data: JSON.stringify(q.data),
        correctData: JSON.stringify(q.correct),
        explanation: q.explanation,
        order: qi + 1,
        itemRefType: q.itemRef?.type,
        itemRefKey: q.itemRef?.key,
      } })
    }
  }
}

/* ------------------ Patch N5 Lesson 1: k9 SPEAKING + k10 READING ------------ */

async function patchHiraganaLesson(db: PrismaClient): Promise<{ k9: 'created' | 'exists' | 'skipped'; k10: 'created' | 'exists' | 'skipped'; k8Reordered: boolean }> {
  const lesson = await db.lesson.findUnique({ where: { slug: 'kana-hiragana' } })
  if (!lesson) return { k9: 'skipped', k10: 'skipped', k8Reordered: false }

  // k9 — SPEAKING: đọc to kana (8 câu SPEAK, từ lấy từ exampleWord của kana.ts)
  const k9 = await db.lessonNode.findUnique({ where: { lessonId_key: { lessonId: lesson.id, key: 'k9' } } })
  const k9State = k9 ? 'exists' : 'created'
  if (!k9) {
    await createNodeWithContent(db, lesson.id, buildSpeakingNode(), 8)
  }

  // k10 — READING: đọc hiểu kana đầu tiên (2 đoạn × 4 câu = 8 câu READING)
  const k10 = await db.lessonNode.findUnique({ where: { lessonId_key: { lessonId: lesson.id, key: 'k10' } } })
  const k10State = k10 ? 'exists' : 'created'
  if (!k10) {
    await createNodeWithContent(db, lesson.id, buildReadingNode(), 9)
  }

  // k8 BOSS luôn là node cuối (order 10) — giữ chuỗi unlock "boss xong mới mở bài sau".
  const k8 = await db.lessonNode.findUnique({ where: { lessonId_key: { lessonId: lesson.id, key: 'k8' } } })
  let k8Reordered = false
  if (k8 && k8.order !== 10) {
    await db.lessonNode.update({ where: { id: k8.id }, data: { order: 10 } })
    k8Reordered = true
  }
  return { k9: k9State, k10: k10State, k8Reordered }
}

function buildSpeakingNode(): SeedNode {
  // 8 từ hiragana cơ bản (lấy từ kho exampleWord của kana.ts — cùng bộ dữ liệu seed).
  const words: { ja: string; romaji: string; vi: string; kana: string }[] = [
    { ja: 'あめ', romaji: 'ame', vi: 'mưa', kana: 'あ' },
    { ja: 'いぬ', romaji: 'inu', vi: 'chó', kana: 'い' },
    { ja: 'うみ', romaji: 'umi', vi: 'biển', kana: 'う' },
    { ja: 'えき', romaji: 'eki', vi: 'nhà ga', kana: 'え' },
    { ja: 'かさ', romaji: 'kasa', vi: 'cây dù', kana: 'か' },
    { ja: 'ねこ', romaji: 'neko', vi: 'con mèo', kana: 'ね' },
    { ja: 'はな', romaji: 'hana', vi: 'bông hoa', kana: 'は' },
    { ja: 'やま', romaji: 'yama', vi: 'ngọn núi', kana: 'や' },
  ]
  const questions: SeedQuestion[] = words.map((w) => ({
    type: 'SPEAK' as const,
    prompt: 'Đọc to từ sau (chỉ bằng hiragana)',
    data: {
      kind: 'speak' as const,
      speakText: w.ja,
      meaningVi: `${w.vi} (${w.romaji})`,
      threshold: 65,
    },
    correct: { score: 65 },
    explanation: `${w.ja} đọc là "${w.romaji}" — nghĩa: ${w.vi}.`,
    itemRef: { type: 'KANA' as const, key: w.kana },
  }))
  const exercise: SeedExercise = {
    type: 'SPEAK',
    instructions: 'Bấm micro và đọc to từ (cho phép dùng mic nếu trình duyệt hỏi)',
    questions,
  }
  return {
    key: 'k9',
    title: 'Hiragana: luyện phát âm — đọc to kana',
    description: 'Đọc to 8 từ kana trước micro để luyện phản xạ âm',
    icon: 'Mic',
    nodeType: 'SPEAKING',
    order: 8,
    xpReward: 12,
    requiredScore: 70,
    difficulty: 'MEDIUM',
    exercises: [exercise],
  }
}

function buildReadingNode(): SeedNode {
  const passage = (
    title: string,
    lines: { text: string; vi: string }[],
    questions: { q: string; choices: string[]; answer: number; ex: string }[],
  ): SeedExercise => ({
    type: 'READING',
    instructions: 'Đọc đoạn sau (chỉ bằng kana) rồi trả lời câu hỏi',
    questions: [{
      type: 'READING',
      data: {
        kind: 'passage',
        title,
        lines,
        questions: questions.map((x) => ({
          type: 'MULTIPLE_CHOICE' as const,
          prompt: x.q,
          data: {
            kind: 'choice' as const,
            options: x.choices.map((text, i) => ({ id: i === x.answer ? 'a' : 'd' + i, text })),
          },
          correct: { optionId: 'a' },
          explanation: x.ex,
        })),
      },
      correct: { answers: [] },
    }],
  })

  const morning = passage(
    'まいの あさ — Buổi sáng của Mai',
    [
      { text: 'まいさんは がくせいです。', vi: 'Mai là sinh viên.' },
      { text: 'あさ ろくじに おきます。', vi: 'Buổi sáng cô dậy lúc 6 giờ.' },
      { text: 'あさごはんは ごはんです。おちゃも のみます。', vi: 'Bữa sáng là cơm. Cô cũng uống trà.' },
      { text: 'はちじに でかけます。えきまで あるきます。', vi: '8 giờ cô ra khỏi nhà. Cô đi bộ tới nhà ga.' },
      { text: 'がっこうは たのしいです。', vi: 'Trường học vui lắm.' },
    ],
    [
      { q: 'Mai dậy lúc mấy giờ?', choices: ['ごじ', 'ろくじ', 'ななじ', 'はちじ'], answer: 1, ex: 'ろくじに おきます = dậy lúc 6 giờ (ろく = 6).' },
      { q: 'Bữa sáng của Mai là gì?', choices: ['さかな と みず', 'ごはん と おちゃ', 'たまご と ぎゅうにゅう', 'やさい と くだもの'], answer: 1, ex: 'あさごはんは ごはんです。おちゃも のみます — cơm, và uống thêm trà.' },
      { q: 'Mai đến nhà ga bằng cách nào?', choices: ['あるきます', 'はしります', 'とびます', 'およぎます'], answer: 0, ex: 'えきまで あるきます = đi bộ đến nhà ga (あるきます = đi bộ; はしります = chạy).' },
      { q: 'Mai là ai?', choices: ['せんせい', 'かいしゃいん', 'がくせい', 'いしゃ'], answer: 2, ex: 'Câu đầu tiên: まいさんは がくせいです — Mai là học sinh/sinh viên.' },
    ],
  )

  const snow = passage(
    'ゆきの ひ — Ngày tuyết',
    [
      { text: 'きょうは ゆきが ふります。', vi: 'Hôm nay trời tuyết rơi.' },
      { text: 'まちは しろいです。とても きれいです。', vi: 'Phố xá trắng xóa. Đẹp lắm.' },
      { text: 'まいさんは ともだちと こうえんへ いきます。', vi: 'Mai đi công viên cùng bạn.' },
      { text: 'こうえんで ゆきだるまを つくります。', vi: 'Hai bạn núi người tuyết ở công viên.' },
      { text: 'よるは うちで おやすみなさい。', vi: 'Buổi tối ở nhà, chúc ngủ ngon.' },
    ],
    [
      { q: 'Hôm nay thời tiết thế nào?', choices: ['あめ', 'はれ', 'ゆき', 'くもり'], answer: 2, ex: 'ゆきが ふります — tuyết rơi (ゆき = tuyết).' },
      { q: 'Mai đi đâu cùng bạn?', choices: ['がっこう', 'こうえん', 'えき', 'びょういん'], answer: 1, ex: 'こうえんへ いきます = đi đến công viên (こうえん = công viên).' },
      { q: 'Ở đó hai bạn làm gì?', choices: ['ゆきだるまを つくります', 'みずで およぎます', 'はなを さきます', 'べんきょうを します'], answer: 0, ex: 'ゆきだるまを つくります = núi người tuyết.' },
      { q: 'Buổi tối Mai nói câu gì?', choices: ['おはよう', 'こんにちは', 'おやすみなさい', 'さようなら'], answer: 2, ex: 'よるは おやすみなさい — tối nói lời chúc ngủ ngon.' },
    ],
  )

  return {
    key: 'k10',
    title: 'Hiragana: đọc hiểu kana đầu tiên',
    description: 'Hai câu chuyện ngắn hoàn toàn bằng kana để luyện đọc hiểu đầu tiên',
    icon: 'MessageCircle',
    nodeType: 'READING',
    order: 9,
    xpReward: 12,
    requiredScore: 70,
    difficulty: 'MEDIUM',
    exercises: [morning, snow],
  }
}

if (import.meta.main) {
  main().catch((e) => {
    console.error('❌ Irodori seed thất bại:', e)
    process.exit(1)
  })
}
