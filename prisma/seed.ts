/**
 * NihongoGo — Seed (chạy: bun prisma/seed.ts)
 * - Users: admin + demo (credentials chỉ dùng local dev, xem README)
 * - Course + 7 sections + kana lessons (sinh tự động từ data) + L1/L2/L3 + L4–L50 curriculum
 * - Kana 208, Kanji 119, Achievements, Quests, demo leaderboard users
 * - Cuối cùng: seed Irodori A1 (khoá 2, 18 bài) + patch k9/k10 cho kana-hiragana
 *   (idempotent — xem prisma/seed-irodori.ts)
 */
import { PrismaClient } from '@prisma/client'
import { randomBytes, scrypt as _scrypt } from 'node:crypto'
import { promisify } from 'node:util'

const scrypt = promisify(_scrypt) as (p: string, s: string, k: number) => Promise<Buffer>
const PEPPER = process.env.AUTH_SECRET ?? 'nihongogo-dev-secret-change-me'

async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString('hex')
  const derived = await scrypt(password + PEPPER, salt, 64)
  return `${salt}:${derived.toString('hex')}`
}

const db = new PrismaClient()

import { kanaCharacters } from './seed-data/kana'
import { kanjiList } from './seed-data/kanji'
import { achievements } from './seed-data/achievements'
import { questTemplates } from './seed-data/quests'
import { lesson1 } from './seed-data/lesson1'
import { lesson2 } from './seed-data/lesson2'
import { lesson3 } from './seed-data/lesson3'
import { curriculumLessons } from './seed-data/curriculum/index'
import { seedIrodori } from './seed-irodori'
import { SEED_VERSION, SEED_VERSION_KEY } from './seed-version'
import type { SeedLesson, SeedNode, SeedQuestion, SeedKanaCharacter } from './seed-data/types'

async function main() {
  console.log('🌱 Seeding NihongoGo...')

  /* ------------------------------ Users --------------------------------- */
  const adminPassword = await hashPassword('admin12345')
  const demoPassword = await hashPassword('demo12345')

  await db.user.upsert({
    where: { email: 'admin@nihongogo.local' },
    update: {},
    create: {
      email: 'admin@nihongogo.local',
      username: 'admin',
      passwordHash: adminPassword,
      role: 'ADMIN',
      profile: { create: { displayName: 'Quản trị viên', avatarSeed: 'indigo', onboardedAt: new Date() } },
      settings: { create: {} },
      progress: { create: {} },
      streak: { create: {} },
    },
  })

  await db.user.upsert({
    where: { email: 'demo@nihongogo.local' },
    update: {},
    create: {
      email: 'demo@nihongogo.local',
      username: 'demo',
      passwordHash: demoPassword,
      role: 'USER',
      profile: { create: { displayName: 'Học viên Demo', avatarSeed: 'sakura', onboardedAt: new Date() } },
      settings: { create: {} },
      progress: { create: {} },
      streak: { create: {} },
    },
  })

  /* --------------------------- Config ----------------------------------- */
  await db.systemConfig.upsert({
    where: { key: 'hearts' },
    update: {},
    create: { key: 'hearts', value: JSON.stringify({ enabled: true, maxHearts: 5, regenMinutes: 30 }) },
  })

  /* --------------------- Clear old content (idempotent) ------------------ */
  // Xóa content theo thứ tự phụ thuộc; giữ users/progress như cũ.
  await db.course.deleteMany({})
  await db.achievement.deleteMany({})
  await db.questTemplate.deleteMany({})

  /* --------------------------- Achievements ------------------------------ */
  for (const a of achievements) {
    await db.achievement.create({ data: {
      code: a.code, title: a.title, description: a.description, icon: a.icon,
      tier: a.tier, category: a.category, metric: a.metric, threshold: a.threshold, xpReward: a.xpReward,
    } })
  }

  /* --------------------------- Quest templates --------------------------- */
  for (const q of questTemplates) {
    await db.questTemplate.create({ data: {
      code: q.code, title: q.title, description: q.description, icon: q.icon,
      metric: q.metric, target: q.target, rewardXP: q.rewardXP,
    } })
  }

  /* ------------------------------ Kana ---------------------------------- */
  for (const k of kanaCharacters) {
    await db.kanaCharacter.upsert({
      where: { character_type: { character: k.character, type: k.type } },
      update: { romaji: k.romaji, kanaGroup: k.group, row: k.row, strokeCount: k.strokeCount, exampleWord: k.exampleWord, exampleReading: k.exampleReading, exampleMeaning: k.exampleMeaning },
      create: { character: k.character, romaji: k.romaji, type: k.type, kanaGroup: k.group, row: k.row, strokeCount: k.strokeCount, exampleWord: k.exampleWord, exampleReading: k.exampleReading, exampleMeaning: k.exampleMeaning },
    })
  }

  /* ------------------------------ Kanji --------------------------------- */
  for (const k of kanjiList) {
    await db.kanji.upsert({
      where: { character: k.character },
      update: { meaningVi: k.meaningVi, onyomi: JSON.stringify(k.onyomi), kunyomi: JSON.stringify(k.kunyomi), jlpt: k.jlpt, strokeCount: k.strokeCount, radicals: JSON.stringify(k.radicals), examples: JSON.stringify(k.examples), mnemonicVi: k.mnemonicVi },
      create: { character: k.character, meaningVi: k.meaningVi, onyomi: JSON.stringify(k.onyomi), kunyomi: JSON.stringify(k.kunyomi), jlpt: k.jlpt, strokeCount: k.strokeCount, radicals: JSON.stringify(k.radicals), examples: JSON.stringify(k.examples), mnemonicVi: k.mnemonicVi },
    })
  }

  /* ------------------------- Course + sections --------------------------- */
  const course = await db.course.create({ data: {
    slug: 'basic',
    title: 'Tiếng Nhật cơ bản',
    titleJa: 'にほんご きそ',
    description: 'Hành trình từ bảng chữ cái đến giao tiếp tự tin — 50 bài học theo progression sơ cấp, kèm kana, kanji, nghe, nói, đọc, viết.',
    order: 1,
    status: 'PUBLISHED',
  } })

  const sectionsData = [
    { order: 0, title: 'Kana nền tảng', titleJa: 'かな', description: 'Làm chủ hai bảng chữ Hiragana & Katakana — cánh cổng bước vào tiếng Nhật.' },
    { order: 1, title: 'Khởi đầu', titleJa: 'しょきゅう I', description: 'Chào hỏi, chỉ định, thời gian, động từ cơ bản và các mẫu câu nền móng.' },
    { order: 2, title: 'Nền tảng giao tiếp', titleJa: 'しょきゅう II', description: 'Thì quá khứ, thể て, cho phép & cấm đoán — tự tin ghép câu phức tạp.' },
    { order: 3, title: 'Mở rộng thế giới', titleJa: 'しょきゅう III', description: 'Khả năng, suy nghĩ, điều kiện, cho & nhận — giao tiếp tự nhiên hơn.' },
    { order: 4, title: 'Sơ cấp II — Ứng dụng', titleJa: 'ちゅうきゅうへ', description: 'Bị động, sai khiến, kính ngữ — tiếng Nhật ứng dụng công việc & đời sống.' },
    { order: 5, title: 'Vững vàng N4', titleJa: 'ひらけたせかい', description: 'Dự đoán, đồn đại, đối lập — chinh phục ngữ pháp JLPT N4 sơ bộ.' },
    { order: 6, title: 'Tổng kết & JLPT', titleJa: 'そうまとめ', description: 'Ôn tập tổng hợp, luyện đề, đọc hiểu và hoàn thiện hành trình sơ cấp.' },
  ]
  const sections: { id: string; order: number }[] = []
  for (const s of sectionsData) {
    const row = await db.section.create({ data: { ...s, courseId: course.id } })
    sections.push({ id: row.id, order: s.order })
  }
  const sectionByOrder = new Map(sections.map((s) => [s.order, s]))

  /* ------------------------- Kana lessons (tự sinh) ---------------------- */
  const hiragana = kanaCharacters.filter((k) => k.type === 'HIRAGANA')
  const katakana = kanaCharacters.filter((k) => k.type === 'KATAKANA')
  const hBasic = hiragana.filter((k) => k.group === 'BASIC')
  const kBasic = katakana.filter((k) => k.group === 'BASIC')

  const hiraganaLesson = buildKanaLesson('HIRAGANA', 'Hiragana', hiragana, hBasic, 1)
  const katakanaLesson = buildKanaLesson('KATAKANA', 'Katakana', katakana, kBasic, 2)

  // Lesson 4–50: curriculum đầy đủ (nội dung gốc, đã qua content-validate).
  // Đã verify: curriculum phủ trọn order 4–50, không trùng, không lỗ hổng —
  // nên không còn fallback skeleton nào.
  const allLessons = [lesson1, lesson2, lesson3, ...curriculumLessons]
  const totalLessons = allLessons.length + 2 // + 2 bài kana
  let seeded = 0
  const seedLogged = async (sectionId: string, l: SeedLesson) => {
    await seedLesson(course.id, sectionId, l)
    seeded++
    console.log(`  ✓ [${String(seeded).padStart(2)}/${totalLessons}] ${l.slug} — ${l.title}`)
  }

  await seedLogged(sectionByOrder.get(0)!.id, hiraganaLesson)
  await seedLogged(sectionByOrder.get(0)!.id, katakanaLesson)

  /* ----------------------------- Lessons 1-50 ---------------------------- */
  const sectionForLessonOrder = (order: number) => {
    if (order <= 8) return sectionByOrder.get(1)!
    if (order <= 17) return sectionByOrder.get(2)!
    if (order <= 25) return sectionByOrder.get(3)!
    if (order <= 34) return sectionByOrder.get(4)!
    if (order <= 42) return sectionByOrder.get(5)!
    return sectionByOrder.get(6)!
  }

  for (const l of allLessons) {
    await seedLogged(sectionForLessonOrder(l.order).id, l)
  }

  /* ------------------------ Demo leaderboard users ----------------------- */
  const weekStart = getMondayEpoch()
  const demoUsersSpec = [
    { username: 'sakura_hana', displayName: 'Hana', league: 'SAKURA', xp: 185 },
    { username: 'tran_minh', displayName: 'Minh Trần', league: 'SAKURA', xp: 142 },
    { username: 'lan_anh', displayName: 'Lan Anh', league: 'SAKURA', xp: 96 },
    { username: 'nguyen_tu', displayName: 'Tú Nguyễn', league: 'FUJI', xp: 233 },
    { username: 'hoang_long', displayName: 'Hoàng Long', league: 'FUJI', xp: 178 },
    { username: 'mai_phuong', displayName: 'Mai Phương', league: 'SAMURAI', xp: 312 },
    { username: 'kenji_vn', displayName: 'Kenji', league: 'SAMURAI', xp: 264 },
    { username: 'shogun_ba', displayName: 'Ông Ba Shogun', league: 'SHOGUN', xp: 452 },
  ]
  for (const spec of demoUsersSpec) {
    const password = await hashPassword('demo12345')
    const u = await db.user.upsert({
      where: { email: `${spec.username}@nihongogo.local` },
      update: {},
      create: {
        email: `${spec.username}@nihongogo.local`,
        username: spec.username,
        passwordHash: password,
        role: 'USER',
        profile: { create: { displayName: spec.displayName, avatarSeed: 'matcha' } },
        settings: { create: {} },
        progress: { create: { totalXP: spec.xp + 300, currentLeague: spec.league } },
        streak: { create: {} },
      },
    })
    // XP transactions rải trong tuần hiện tại
    let remaining = spec.xp
    let day = 0
    while (remaining > 0 && day < 7) {
      const chunk = Math.min(remaining, 20 + Math.floor(Math.random() * 40))
      const at = new Date(Math.min(Date.now() - 1000, weekStart + day * 86400000 + 36000000))
      if (at.getTime() > Date.now()) break
      await db.xPTransaction.create({ data: { userId: u.id, amount: chunk, reason: 'LESSON_COMPLETE', createdAt: at } })
      remaining -= chunk
      day++
    }
  }

  /* ------------------------- Irodori A1 (khoá 2) -------------------------- */
  // Idempotent: upsert theo slug, chỉ tạo node còn thiếu, vocab không cướp link N5.
  await seedIrodori(db)

  const counts = {
    users: await db.user.count(),
    lessons: await db.lesson.count(),
    nodes: await db.lessonNode.count(),
    exercises: await db.exercise.count(),
    questions: await db.question.count(),
    kana: await db.kanaCharacter.count(),
    kanji: await db.kanji.count(),
    achievements: await db.achievement.count(),
    quests: await db.questTemplate.count(),
  }
  console.log('✅ Seed hoàn tất:', counts)
  console.log('Admin login: admin@nihongogo.local / admin12345')
  console.log('Demo login:  demo@nihongogo.local / demo12345')

  /* -------- Đánh dấu seed hoàn tất (predev dựa vào đây) ------------------ */
  // MUST ở cuối cùng: DB thiếu marker này bị coi là seed dở và sẽ được setup
  // lại tự động ở lần `bun run dev` kế tiếp.
  await db.systemConfig.upsert({
    where: { key: SEED_VERSION_KEY },
    update: { value: JSON.stringify(SEED_VERSION) },
    create: { key: SEED_VERSION_KEY, value: JSON.stringify(SEED_VERSION) },
  })
}

/* ============================ helpers ================================= */

function getMondayEpoch(): number {
  const now = new Date()
  const dayIdx = (now.getUTCDay() + 6) % 7 // Monday=0
  const mondayUtcMidnight = now.getTime() - dayIdx * 86400000 - (now.getTime() % 86400000)
  return mondayUtcMidnight - 7 * 3600000 // VN tz
}

function buildKanaLesson(type: 'HIRAGANA' | 'KATAKANA', name: string, all: SeedKanaCharacter[], basic: SeedKanaCharacter[], order: number): SeedLesson {
  const recType = type === 'HIRAGANA' ? 'HIRAGANA_RECOGNITION' : 'KATAKANA_RECOGNITION'
  const part1 = basic.slice(0, 15)
  const part2 = basic.slice(15)
  const dakuten = all.filter((k) => k.group === 'DAKUTEN' || k.group === 'HANDAKUTEN')
  const youon = all.filter((k) => k.group === 'YOUON')

  const makeRecQuestions = (chars: SeedKanaCharacter[], sample?: number): SeedQuestion[] => {
    const list = sample ? deterministicSample(chars, sample) : chars
    return list.map((c) => ({
      type: recType,
      prompt: `Chọn cách đọc của ký tự ${c.character}`,
      data: {
        kind: 'choice' as const,
        promptJa: c.character,
        promptSub: name,
        options: [
          { id: 'a', text: c.romaji },
          ...deterministicSample(basic.filter((b) => b.romaji !== c.romaji), 3).map((b, i) => ({ id: 'd' + i, text: b.romaji })),
        ],
        layout: 'grid' as const,
      },
      correct: { optionId: 'a' },
      explanation: `${c.character} (${name}) đọc là "${c.romaji}" — ví dụ: ${c.exampleWord} (${c.exampleMeaning})`,
      itemRef: { type: 'KANA' as const, key: c.character },
    }))
  }

  const makeListenQuestions = (chars: SeedKanaCharacter[], sample: number): SeedQuestion[] =>
    deterministicSample(chars, sample).map((c) => ({
      type: 'LISTEN_SELECT',
      prompt: 'Nghe và chọn ký tự đúng',
      data: {
        kind: 'audio-choice' as const,
        audioText: c.character,
        options: [
          { id: 'a', text: c.character, big: true },
          ...deterministicSample(basic.filter((b) => b.character !== c.character), 3).map((b, i) => ({ id: 'd' + i, text: b.character, big: true })),
        ],
        layout: 'grid' as const,
      },
      correct: { optionId: 'a' },
      explanation: `Âm "${c.romaji}" là ký tự ${c.character}`,
      itemRef: { type: 'KANA' as const, key: c.character },
    }))

  const makeTypeQuestions = (chars: SeedKanaCharacter[], sample: number): SeedQuestion[] =>
    deterministicSample(chars, sample).map((c) => ({
      type: 'LISTEN_TYPE' as const,
      prompt: `Gõ romaji của ký tự ${c.character}`,
      data: { kind: 'text-input' as const, label: `Romaji của ${c.character}`, placeholder: 'vd: a', accept: [c.romaji] },
      correct: { answers: [c.romaji] },
      explanation: `${c.character} = ${c.romaji}`,
      itemRef: { type: 'KANA' as const, key: c.character },
    }))

  const makeWriteQuestions = (chars: SeedKanaCharacter[], sample: number): SeedQuestion[] =>
    deterministicSample(chars, sample).map((c) => ({
      type: 'KANA_WRITING' as const,
      prompt: `Viết tay ký tự ${c.character} (${c.strokeCount} nét)`,
      data: { kind: 'writing' as const, character: c.character, romaji: c.romaji, meaningVi: c.exampleMeaning, strokeCount: c.strokeCount, guide: true },
      correct: { score: 60 },
      explanation: `${c.character} viết bằng ${c.strokeCount} nét. Gợi ý: ${c.exampleWord} (${c.exampleMeaning})`,
      itemRef: { type: 'KANA' as const, key: c.character },
    }))

  const makeBossQuestions = (chars: SeedKanaCharacter[]): SeedQuestion[] =>
    deterministicSample(chars, 12).flatMap((c, i): SeedQuestion[] =>
      i % 3 === 0
        ? [{
            type: recType,
            prompt: 'Chọn cách đọc đúng',
            data: { kind: 'choice' as const, promptJa: c.character, options: [{ id: 'a', text: c.romaji }, ...deterministicSample(basic.filter((b) => b.romaji !== c.romaji), 3).map((b, j) => ({ id: 'd' + j, text: b.romaji }))], layout: 'grid' as const },
            correct: { optionId: 'a' },
            explanation: `${c.character} = ${c.romaji}`,
            itemRef: { type: 'KANA' as const, key: c.character },
          }]
        : i % 3 === 1
          ? [{
              type: 'LISTEN_SELECT' as const,
              prompt: 'Nghe và chọn ký tự đúng',
              data: { kind: 'audio-choice' as const, audioText: c.character, options: [{ id: 'a', text: c.character, big: true }, ...deterministicSample(basic.filter((b) => b.character !== c.character), 3).map((b, j) => ({ id: 'd' + j, text: b.character, big: true }))], layout: 'grid' as const },
              correct: { optionId: 'a' },
              explanation: `Âm "${c.romaji}" = ${c.character}`,
              itemRef: { type: 'KANA' as const, key: c.character },
            }]
          : [{
              type: 'LISTEN_TYPE' as const,
              prompt: 'Gõ romaji của ký tự vừa nghe',
              data: { kind: 'text-input' as const, label: 'Romaji', placeholder: 'a', accept: [c.romaji], audioText: c.character },
              correct: { answers: [c.romaji] },
              explanation: `${c.character} = ${c.romaji}`,
              itemRef: { type: 'KANA' as const, key: c.character },
            }]
    )

  return {
    order,
    slug: type === 'HIRAGANA' ? 'kana-hiragana' : 'kana-katakana',
    title: `${name} — Bảng chữ cái ${name}`,
    titleJa: type === 'HIRAGANA' ? 'ひらがな' : 'カタカナ',
    description:
      type === 'HIRAGANA'
        ? 'Nắm vững Hiragana: nhận diện, nghe, gõ romaji và viết tay 46 âm cơ bản kèm dakuten, handakuten, youon.'
        : 'Nắm vững Katakana — bảng chữ dùng cho từ mượn: nhận diện, nghe, gõ romaji và viết tay.',
    learningObjectives: [
      `Nhận diện nhanh toàn bộ ${name}`,
      'Nghe và phân biệt các âm gần nhau',
      'Gõ romaji chính xác',
      'Viết tay các ký tự cơ bản đúng số nét',
    ],
    grammarTopics: [],
    vocabularyTopics: [`${name} nhận diện`, 'Nghe âm', 'Gõ romaji', 'Viết tay'],
    kanjiTopics: [],
    difficulty: 'BEGINNER',
    status: 'PUBLISHED',
    nodes: [
      {
        key: 'k1', title: `${name}: âm cơ bản (phần 1)`, description: `Các hàng đầu tiên của ${name}`,
        icon: 'BookOpen', nodeType: 'KANA', order: 1, xpReward: 10, requiredScore: 70, difficulty: 'EASY',
        exercises: [{ type: recType, instructions: 'Chọn romaji tương ứng', questions: makeRecQuestions(part1) }],
      },
      {
        key: 'k2', title: `${name}: âm cơ bản (phần 2)`, description: 'Nốt các hàng còn lại',
        icon: 'BookOpen', nodeType: 'KANA', order: 2, xpReward: 10, requiredScore: 70, difficulty: 'EASY',
        exercises: [{ type: recType, instructions: 'Chọn romaji tương ứng', questions: makeRecQuestions(part2) }],
      },
      {
        key: 'k3', title: `${name}: dakuten & handakuten`, description: 'Ga-Za-Da-Ba-Pa',
        icon: 'Sparkles', nodeType: 'KANA', order: 3, xpReward: 12, requiredScore: 70, difficulty: 'MEDIUM',
        exercises: [{ type: recType, instructions: 'Chọn romaji tương ứng', questions: makeRecQuestions(dakuten) }],
      },
      {
        key: 'k4', title: `${name}: youon (âm ghép)`, description: 'きゃ・きゅ・きょ…',
        icon: 'Puzzle', nodeType: 'KANA', order: 4, xpReward: 12, requiredScore: 70, difficulty: 'MEDIUM',
        exercises: [{ type: recType, instructions: 'Chọn romaji tương ứng', questions: makeRecQuestions(youon) }],
      },
      {
        key: 'k5', title: `${name}: luyện nghe`, description: 'Nghe âm → chọn ký tự',
        icon: 'Headphones', nodeType: 'LISTENING', order: 5, xpReward: 12, requiredScore: 70, difficulty: 'MEDIUM',
        exercises: [{ type: 'LISTEN_SELECT', instructions: 'Bấm loa để nghe', questions: makeListenQuestions(basic, 15) }],
      },
      {
        key: 'k6', title: `${name}: gõ romaji`, description: 'Nhìn ký tự → gõ romaji',
        icon: 'Pencil', nodeType: 'WRITING', order: 6, xpReward: 12, requiredScore: 70, difficulty: 'MEDIUM',
        exercises: [{ type: 'LISTEN_TYPE', instructions: 'Gõ romaji của ký tự', questions: makeTypeQuestions(all.filter((k) => k.group !== 'YOUON'), 15) }],
      },
      {
        key: 'k7', title: `${name}: viết tay`, description: 'Viết 10 ký tự đầu tiên',
        icon: 'PenLine', nodeType: 'WRITING', order: 7, xpReward: 15, requiredScore: 60, difficulty: 'MEDIUM',
        exercises: [{ type: 'KANA_WRITING', instructions: 'Viết tay theo đúng số nét', questions: makeWriteQuestions(basic, 10) }],
      },
      {
        key: 'k8', title: `Boss Quiz ${name}`, description: 'Kiểm tra tổng hợp',
        icon: 'Crown', nodeType: 'BOSS', order: 8, xpReward: 30, requiredScore: 80, difficulty: 'HARD',
        exercises: [{ type: 'MIXED_REVIEW', instructions: 'Tổng hợp mọi dạng đã học', questions: makeBossQuestions(basic) }],
      },
    ],
    vocabulary: [],
    grammar: [],
  }
}

function deterministicSample<T>(arr: T[], n: number): T[] {
  if (arr.length <= n) return [...arr]
  const out: T[] = []
  const step = arr.length / n
  for (let i = 0; i < n; i++) {
    out.push(arr[Math.floor(i * step)])
  }
  return out
}

async function seedLesson(courseId: string, sectionId: string, l: SeedLesson) {
  const lesson = await db.lesson.create({ data: {
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
    status: l.status,
  } })

  for (const v of l.vocabulary) {
    const existing = await db.vocabulary.findFirst({ where: { term: v.term }, select: { id: true } })
    if (existing) {
      // Re-seed: bản ghi cũ có thể đã mồ côi lessonId (course bị dựng lại → FK SetNull).
      // Relink thay vì skip để seed luôn idempotent.
      await db.vocabulary.update({ where: { id: existing.id }, data: { lessonId: lesson.id } })
      continue
    }
    await db.vocabulary.create({ data: {
      lessonId: lesson.id, term: v.term, reading: v.reading, romaji: v.romaji,
      meaningVi: v.meaningVi, pos: v.pos, exampleJa: v.exampleJa, exampleVi: v.exampleVi,
    } })
  }

  for (const g of l.grammar) {
    const existing = await db.grammarPoint.findUnique({ where: { code: g.code } })
    if (existing) {
      // Re-seed: relink lessonId cho bản ghi cũ (xem ghi chú vocabulary phía trên)
      await db.grammarPoint.update({ where: { id: existing.id }, data: { lessonId: lesson.id } })
      continue
    }
    await db.grammarPoint.create({ data: {
      lessonId: lesson.id, code: g.code, title: g.title,
      explanationVi: g.explanationVi, examples: JSON.stringify(g.examples),
    } })
  }

  // Bài chưa có node: tạo 1 node draft placeholder để CMS quản lý
  const nodes: SeedNode[] =
    l.nodes.length > 0
      ? l.nodes
      : [{
          key: 'draft', title: 'Nội dung đang biên soạn', description: 'Bài học này sẽ sớm được xuất bản.',
          icon: 'Sparkles', nodeType: 'MIXED', order: 1, status: 'DRAFT', exercises: [],
        } as unknown as SeedNode]

  for (const [ni, n] of nodes.entries()) {
    const node = await db.lessonNode.create({ data: {
      lessonId: lesson.id,
      key: n.key,
      title: n.title,
      description: n.description,
      icon: n.icon,
      nodeType: n.nodeType,
      order: n.order ?? ni + 1,
      xpReward: n.xpReward ?? 10,
      requiredScore: n.requiredScore ?? 70,
      difficulty: n.difficulty ?? 'EASY',
      status: l.status === 'DRAFT' ? 'DRAFT' : 'PUBLISHED',
    } })

    for (const [ei, ex] of (n.exercises ?? []).entries()) {
      const exercise = await db.exercise.create({ data: {
        nodeId: node.id,
        type: ex.type,
        instructions: ex.instructions,
        order: ei + 1,
        status: l.status === 'DRAFT' ? 'DRAFT' : 'PUBLISHED',
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
}

main()
  .catch((e) => {
    console.error('❌ Seed thất bại:', e)
    process.exit(1)
  })
  .finally(() => db.$disconnect())
