import { db } from '@/lib/db'
import { badRequest, conflict, notFound } from '@/lib/api'
import { gradeAnswer, getPassageSubQuestions, type AnswerPayload, type QuestionDataShape, type CorrectShape, type ResolvedQuestion } from '@/server/domain/grading'
import { computeLessonXp } from '@/server/domain/xp'
import { transcribeAudio } from './speech'
import { getHeartConfig } from './config'
import { getHearts, consumeHeart, grantHeart } from './hearts'
import { recordMistake, resolveMistakeIfExists } from './mistakes'
import { ensureSrsItem, recordAnswerSrs } from './srs'
import { bumpQuestProgress } from './quests'
import { awardXp } from './xp'
import { checkAchievements } from './achievements'
import { getStreakInfo } from './streak'
import { track } from './analytics'
/** Item SRS mà câu hỏi luyện (đối chiếu prisma/seed-data/types.ts) */
interface SrsItemRef {
  type: 'VOCAB' | 'KANJI' | 'GRAMMAR' | 'KANA'
  key: string
}

/**
 * Lesson Session Engine — state machine phía server.
 * Client chỉ gửi answer; mọi tính toán (chấm điểm, tim, XP, unlock) nằm ở đây.
 */

export type SessionMode = 'LESSON' | 'PRACTICE' | 'MISTAKE' | 'REVIEW' | 'JUMP'

/** Ngưỡng đạt để bỏ qua (%), số câu tối đa trong bài kiểm tra bỏ qua. */
const JUMP_REQUIRED_SCORE = 80
const JUMP_MAX_QUESTIONS = 10
/** Chỉ dùng các dạng chấm nhanh trong bài kiểm tra bỏ qua (không cần mic/canvas). */
const JUMP_TEST_KINDS = new Set(['choice', 'audio-choice', 'fill-blank', 'token-order', 'text-input', 'matching'])

interface SessionEntry {
  qid: string
  sub: number
  inline?: {
    type: string
    prompt?: string
    data: QuestionDataShape
    correct: CorrectShape
    explanation?: string
    itemRefType?: string | null
    itemRefKey?: string | null
  }
}

interface SessionState {
  entries: SessionEntry[]
  index: number
  correctKeys: string[]
  wrongKeys: string[]
  combo: number
  maxCombo: number
  hearts: number
  startedAt: number
  /** Mode JUMP: bài học mục tiêu cần mở khóa. */
  jumpTargetLessonId?: string
}

function entryKey(e: SessionEntry): string {
  return `${e.qid}:${e.sub}`
}

function parseState(raw: string): SessionState {
  const s = JSON.parse(raw) as SessionState
  if (!Array.isArray(s.entries)) throw badRequest('Session không hợp lệ')
  return s
}

/* ------------------------------ Create session ----------------------------- */

export async function createNodeSession(userId: string, nodeId: string, mode: SessionMode = 'LESSON') {
  const node = await db.lessonNode.findUnique({
    where: { id: nodeId },
    include: {
      lesson: { select: { id: true, title: true } },
      exercises: {
        where: { status: 'PUBLISHED' },
        orderBy: { order: 'asc' },
        include: { questions: { orderBy: { order: 'asc' } } },
      },
    },
  })
  if (!node) throw notFound('Không tìm thấy bài luyện tập')
  const questions = node.exercises.flatMap((ex) => ex.questions)
  if (questions.length === 0) throw notFound('Nội dung đang được biên soạn')

  if (mode === 'LESSON') {
    const config = await getHeartConfig()
    if (config.enabled) {
      const hearts = await getHearts(userId)
      if (hearts.enabled && hearts.hearts <= 0) {
        throw conflict('Bạn đã hết tim. Hãy luyện tập để lấy lại tim, hoặc chờ tim hồi.')
      }
    }
  }

  const entries: SessionEntry[] = []
  for (const q of questions) {
    const data = JSON.parse(q.data) as QuestionDataShape
    if (data.kind === 'passage') {
      const resolved: ResolvedQuestion = {
        id: q.id,
        type: q.type,
        data,
        correct: {} as CorrectShape,
        itemRefType: q.itemRefType,
        itemRefKey: q.itemRefKey,
      }
      const subs = getPassageSubQuestions(resolved)
      subs.forEach((_, i) => entries.push({ qid: q.id, sub: i }))
    } else {
      entries.push({ qid: q.id, sub: 0 })
    }
  }

  return createSessionInternal(userId, entries, mode, node.id, node.title)
}

export async function createMistakeSession(userId: string) {
  const { getUnresolvedMistakeQuestionIds } = await import('./mistakes')
  const ids = await getUnresolvedMistakeQuestionIds(userId, 15)
  if (ids.length === 0) throw notFound('Bạn chưa có lỗi sai nào chưa sửa. Tuyệt vời!')
  const questions = await db.question.findMany({ where: { id: { in: ids } } })
  const qMap = new Map(questions.map((q) => [q.id, q]))
  const entries: SessionEntry[] = []
  for (const id of ids) {
    const q = qMap.get(id)
    if (!q) continue
    const data = JSON.parse(q.data) as QuestionDataShape
    if (data.kind === 'passage') continue
    entries.push({ qid: id, sub: 0 })
  }
  if (entries.length === 0) throw notFound('Không tạo được phiên luyện từ lỗi sai')
  return createSessionInternal(userId, entries, 'MISTAKE', null, 'Luyện lại lỗi sai')
}

export async function createReviewSession(userId: string) {
  const { getDueItems } = await import('./srs')
  const due = await getDueItems(userId, 12)
  if (due.length === 0) throw notFound('Hiện chưa có gì cần ôn tập. Hãy học bài mới nhé!')
  const entries: SessionEntry[] = []
  for (let i = 0; i < due.length; i++) {
    const item = due[i]
    const generated = await generateReviewQuestion(item.itemType, item.itemKey)
    if (!generated) continue
    entries.push({ qid: `rv-${i}`, sub: 0, inline: generated })
  }
  if (entries.length === 0) throw notFound('Chưa có nội dung ôn tập khả dụng')
  return createSessionInternal(userId, entries, 'REVIEW', null, 'Ôn tập SRS')
}

/* ------------------------- Jump (kiểm tra bỏ qua) -------------------------- */

async function getTargetWithCourse(targetLessonId: string) {
  const target = await db.lesson.findUnique({
    where: { id: targetLessonId },
    include: { section: { select: { id: true, order: true, courseId: true } } },
  })
  if (!target) throw notFound('Không tìm thấy bài học mục tiêu')
  return target
}

/** Mọi bài PUBLISHED đứng trước bài mục tiêu (theo thứ tự section → lesson). */
async function getLessonsBefore(courseId: string, targetSectionOrder: number, targetLessonOrder: number) {
  const lessons = await db.lesson.findMany({
    where: { section: { courseId }, status: 'PUBLISHED' },
    include: {
      section: { select: { order: true } },
      nodes: {
        where: { status: 'PUBLISHED' },
        include: { exercises: { where: { status: 'PUBLISHED' }, include: { questions: { select: { id: true, data: true } } } } },
      },
    },
    orderBy: [{ section: { order: 'asc' } }, { order: 'asc' }],
  })
  return lessons.filter((l) => {
    if (l.section.order !== targetSectionOrder) return l.section.order < targetSectionOrder
    return l.order < targetLessonOrder
  })
}

/**
 * Bài kiểm tra bỏ qua (kiểu Duolingo "Jump here"):
 * lấy ngẫu nhiên tối đa 10 câu từ mọi bài trước mục tiêu → đạt ≥80%
 * thì đánh dấu hoàn thành toàn bộ nội dung trước đó và mở khóa bài mục tiêu.
 */
export async function createJumpSession(userId: string, targetLessonId: string) {
  const target = await getTargetWithCourse(targetLessonId)
  const prior = await getLessonsBefore(target.section.courseId, target.section.order, target.order)

  const pool: string[] = []
  for (const l of prior) {
    for (const n of l.nodes) {
      for (const ex of n.exercises) {
        for (const q of ex.questions) {
          try {
            const data = JSON.parse(q.data) as QuestionDataShape
            if (JUMP_TEST_KINDS.has(data.kind)) pool.push(q.id)
          } catch {
            // bỏ qua câu hỏi hỏng dữ liệu
          }
        }
      }
    }
  }
  if (pool.length < 3) throw notFound('Chưa đủ nội dung đã xuất bản để tạo bài kiểm tra bỏ qua')

  const sampled = shuffle(pool).slice(0, JUMP_MAX_QUESTIONS).map((qid) => ({ qid, sub: 0 }) as SessionEntry)
  return createSessionInternal(userId, sampled, 'JUMP', null, `Kiểm tra bỏ qua — ${target.title}`, {
    jumpTargetLessonId: target.id,
  })
}

/** Đánh dấu hoàn thành mọi node/lesson trước bài mục tiêu (không cộng XP ảo). */
async function applyJumpCompletion(userId: string, targetLessonId: string, accuracy: number) {
  const target = await getTargetWithCourse(targetLessonId)
  const prior = await getLessonsBefore(target.section.courseId, target.section.order, target.order)
  const now = new Date()
  let nodesMarked = 0
  let lessonsMarked = 0
  for (const l of prior) {
    const playableNodes = l.nodes.filter((n) => n.exercises.length > 0)
    if (playableNodes.length === 0) continue
    for (const n of playableNodes) {
      const existing = await db.nodeProgress.findUnique({
        where: { userId_nodeId: { userId, nodeId: n.id } },
      })
      if (existing?.status === 'COMPLETED' || existing?.status === 'MASTERED') {
        nodesMarked++
        continue
      }
      await db.nodeProgress.upsert({
        where: { userId_nodeId: { userId, nodeId: n.id } },
        update: {
          status: 'COMPLETED',
          bestScore: Math.max(existing?.bestScore ?? 0, accuracy),
          lastScore: accuracy,
          mastery: 3,
          completedAt: existing?.completedAt ?? now,
        },
        create: {
          userId,
          nodeId: n.id,
          status: 'COMPLETED',
          bestScore: accuracy,
          lastScore: accuracy,
          mastery: 3,
          completedAt: now,
        },
      })
      nodesMarked++
    }
    const existingLesson = await db.lessonProgress.findUnique({
      where: { userId_lessonId: { userId, lessonId: l.id } },
    })
    await db.lessonProgress.upsert({
      where: { userId_lessonId: { userId, lessonId: l.id } },
      update: {
        status: 'COMPLETED',
        bestScore: Math.max(existingLesson?.bestScore ?? 0, accuracy),
        completedAt: existingLesson?.completedAt ?? now,
      },
      create: {
        userId,
        lessonId: l.id,
        status: 'COMPLETED',
        bestScore: accuracy,
        timesCompleted: 1,
        completedAt: now,
      },
    })
    lessonsMarked++
  }
  return { nodesMarked, lessonsMarked }
}

async function createSessionInternal(
  userId: string,
  entries: SessionEntry[],
  mode: SessionMode,
  nodeId: string | null,
  title: string,
  extraState?: Partial<SessionState>
) {
  const state: SessionState = {
    entries,
    index: 0,
    correctKeys: [],
    wrongKeys: [],
    combo: 0,
    maxCombo: 0,
    hearts: mode === 'LESSON' ? 5 : Infinity,
    startedAt: Date.now(),
    ...extraState,
  }
  const session = await db.lessonSession.create({
    data: {
      userId,
      nodeId,
      sessionType: mode,
      status: 'ACTIVE',
      state: JSON.stringify(state),
      totalQuestions: entries.length,
      heartsLeft: mode === 'LESSON' ? 5 : 999,
    },
  })
  await track('lesson_started', userId, { nodeId, mode, title, questions: entries.length })
  const payload = await buildPayload(session.id, state, mode, title, nodeId)
  return payload
}

/* ----------------------------- Resolve questions --------------------------- */

async function resolveEntry(entry: SessionEntry): Promise<ResolvedQuestion> {
  if (entry.inline) {
    const i = entry.inline
    return {
      id: entry.qid,
      type: i.type,
      prompt: i.prompt,
      data: i.data,
      correct: i.correct,
      explanation: i.explanation,
      itemRefType: i.itemRefType ?? null,
      itemRefKey: i.itemRefKey ?? null,
    }
  }
  const q = await db.question.findUnique({ where: { id: entry.qid } })
  if (!q) throw notFound('Câu hỏi không tồn tại')
  const data = JSON.parse(q.data) as QuestionDataShape
  if (data.kind === 'passage') {
    const subs = getPassageSubQuestions({
      id: q.id,
      type: q.type,
      data,
      correct: JSON.parse(q.correctData) as CorrectShape,
    })
    const sub = subs[entry.sub]
    if (!sub) throw badRequest('Câu hỏi không hợp lệ')
    return sub
  }
  return {
    id: q.id,
    type: q.type,
    prompt: q.prompt ?? undefined,
    data,
    correct: JSON.parse(q.correctData) as CorrectShape,
    explanation: q.explanation ?? undefined,
    itemRefType: q.itemRefType,
    itemRefKey: q.itemRefKey,
  }
}

/** Đối tượng question gửi cho client — KHÔNG chứa đáp án. */
function sanitizeQuestion(q: ResolvedQuestion): Record<string, unknown> {
  const data = q.data as Record<string, unknown>
  if (data.kind === 'passage') {
    return {
      id: q.id,
      type: q.type,
      prompt: q.prompt,
      data: {
        ...data,
        questions: (data.questions as { type: string; prompt?: string; data: QuestionDataShape }[]).map((sub) => ({
          type: sub.type,
          prompt: sub.prompt,
          data: sub.data,
        })),
      },
    }
  }
  return { id: q.id, type: q.type, prompt: q.prompt, data }
}

async function buildPayload(sessionId: string, state: SessionState, mode: SessionMode, title: string, nodeId: string | null) {
  const entry = state.entries[state.index]
  let question: Record<string, unknown> | null = null
  let passage: Record<string, unknown> | null = null
  if (entry) {
    const resolved = await resolveEntry(entry)
    question = sanitizeQuestion(resolved)
    // Nếu là sub của passage → gửi kèm đoạn passage (đã sanitize)
    if (!entry.inline && entry.sub >= 0) {
      const q = await db.question.findUnique({ where: { id: entry.qid } })
      if (q) {
        const data = JSON.parse(q.data) as QuestionDataShape
        if (data.kind === 'passage') {
          passage = sanitizeQuestion({ id: q.id, type: q.type, data, correct: {} as CorrectShape })
        }
      }
    }
  }
  return {
    session: {
      id: sessionId,
      mode,
      title,
      nodeId,
      index: state.index,
      total: state.entries.length,
      hearts: state.hearts,
      combo: state.combo,
      status: 'ACTIVE',
    },
    question,
    passage,
  }
}

export async function getSession(userId: string, sessionId: string) {
  const session = await db.lessonSession.findUnique({ where: { id: sessionId } })
  if (!session || session.userId !== userId) throw notFound('Không tìm thấy phiên học')
  if (session.status !== 'ACTIVE') {
    return {
      session: {
        id: session.id,
        mode: session.sessionType,
        title: '',
        nodeId: session.nodeId,
        index: session.totalQuestions,
        total: session.totalQuestions,
        hearts: session.heartsLeft,
        combo: 0,
        status: session.status,
      },
      question: null,
      passage: null,
    }
  }
  const state = parseState(session.state)
  const node = session.nodeId ? await db.lessonNode.findUnique({ where: { id: session.nodeId }, select: { title: true } }) : null
  return buildPayload(session.id, state, session.sessionType as SessionMode, node?.title ?? 'Luyện tập', session.nodeId)
}

/* ------------------------------- Submit answer ----------------------------- */

export interface AnswerFeedback {
  correct: boolean
  expected: string
  explanation: string | null
  score: number | null
  transcription: string | null
  session: {
    id: string
    index: number
    total: number
    hearts: number
    combo: number
    maxCombo: number
    correctCount: number
    wrongCount: number
    status: string
  }
  nextQuestion: Record<string, unknown> | null
  nextPassage: Record<string, unknown> | null
}

export async function submitAnswer(userId: string, sessionId: string, answer: AnswerPayload, timeSpentMs?: number): Promise<AnswerFeedback> {
  const session = await db.lessonSession.findUnique({ where: { id: sessionId } })
  if (!session || session.userId !== userId) throw notFound('Không tìm thấy phiên học')
  if (session.status !== 'ACTIVE') throw badRequest('Phiên học đã kết thúc')

  const state = parseState(session.state)
  const entry = state.entries[state.index]
  if (!entry) throw badRequest('Bạn đã trả lời hết các câu hỏi')

  const resolved = await resolveEntry(entry)

  // Speaking: ASR phía server rồi mới chấm (client có thể tự gửi transcription từ
  // browser SpeechRecognition — server vẫn TỰ TÍNH điểm, không tin điểm client)
  let enrichedAnswer = answer
  if (resolved.data.kind === 'speak') {
    if (!answer.transcription && typeof (answer as { audioBase64?: string }).audioBase64 === 'string') {
      const audioBase64 = (answer as { audioBase64: string }).audioBase64
      const transcription = await transcribeAudio(audioBase64)
      enrichedAnswer = { ...answer, transcription }
    }
  }

  const result = gradeAnswer(resolved, enrichedAnswer)
  const key = entryKey(entry)
  const isInline = !!entry.inline

  // Trạng thái (in-memory)
  if (result.isCorrect) {
    state.correctKeys.push(key)
    state.combo++
    state.maxCombo = Math.max(state.maxCombo, state.combo)
  } else {
    state.wrongKeys.push(key)
    state.combo = 0
  }
  state.index++

  // Optimistic lock — GIỮ SLOT TRẢ LỜI trước mọi side-effect (tim/mistake/SRS/quest):
  // state phải còn nguyên như lúc đọc. Double-submit / 2 tab cùng câu → chỉ 1 request
  // được ghi, request thua bị từ chối mà KHÔNG tiêu tim hay đếm quest hai lần.
  const claimed = await db.lessonSession.updateMany({
    where: { id: session.id, state: session.state },
    data: {
      state: JSON.stringify(state),
      correctCount: state.correctKeys.length,
      wrongCount: state.wrongKeys.length,
      maxCombo: state.maxCombo,
      heartsLeft: session.sessionType === 'LESSON' ? Math.max(0, state.hearts) : 999,
      status: 'ACTIVE',
      completedAt: null,
    },
  })
  if (claimed.count === 0) throw conflict('Phiên học đã thay đổi. Hãy tải lại trang và thử lại.')

  // Ghi attempt (sau khi giữ slot thành công)
  await db.exerciseAttempt.create({
    data: {
      sessionId: session.id,
      userId,
      questionId: isInline ? null : entry.qid,
      isCorrect: result.isCorrect,
      score: result.score ?? null,
      answerData: JSON.stringify({ optionId: answer.optionId, text: answer.text?.slice(0, 300), tokenOrder: answer.tokenOrder, pairs: answer.pairs, transcription: enrichedAnswer.transcription?.slice(0, 300), strokeCount: answer.strokeCount }),
      timeSpentMs: timeSpentMs && timeSpentMs > 0 && timeSpentMs < 600000 ? Math.floor(timeSpentMs) : null,
    },
  })

  // Tim (chỉ mode LESSON) — consumeHeart có clamp nguyên tử, không bao giờ âm
  let failed = false
  if (session.sessionType === 'LESSON' && result.isCorrect === false) {
    const config = await getHeartConfig()
    if (config.enabled) {
      const remaining = await consumeHeart(userId)
      state.hearts = Math.max(0, Math.min(state.hearts - 1, remaining + 1))
      if (remaining <= 0) {
        failed = true
      }
      await db.lessonSession.update({
        where: { id: session.id },
        data: {
          heartsLeft: Math.max(0, state.hearts),
          status: failed ? 'FAILED' : 'ACTIVE',
          completedAt: failed ? new Date() : null,
        },
      })
    }
  }

  // Sổ lỗi sai + SRS
  if (!isInline) {
    const promptText = describePrompt(resolved)
    if (!result.isCorrect) {
      await recordMistake({
        userId,
        questionId: entry.qid,
        nodeId: session.nodeId,
        itemRefType: resolved.itemRefType,
        itemRefKey: resolved.itemRefKey,
        prompt: promptText,
        correctAnswer: result.expectedDisplay,
        userAnswer: describeAnswer(enrichedAnswer),
      })
    } else {
      await resolveMistakeIfExists(userId, entry.qid)
    }
  }
  if (resolved.itemRefType && resolved.itemRefKey) {
    const ref: SrsItemRef = { type: resolved.itemRefType as SrsItemRef['type'], key: resolved.itemRefKey }
    await ensureSrsItem(userId, ref.type, ref.key)
    await recordAnswerSrs(userId, ref, result.isCorrect).catch(() => {})
  }

  // Quests + analytics
  if (result.isCorrect) {
    await bumpQuestProgress(userId, 'CORRECT_ANSWERS', 1)
  }
  await track(result.isCorrect ? 'question_answered' : 'question_wrong', userId, {
    sessionId: session.id,
    type: resolved.type,
  })
  if (failed) await track('lesson_failed', userId, { sessionId: session.id })

  // Câu tiếp theo
  let nextQuestion: Record<string, unknown> | null = null
  let nextPassage: Record<string, unknown> | null = null
  if (!failed && state.index < state.entries.length) {
    const nextEntry = state.entries[state.index]
    const nextResolved = await resolveEntry(nextEntry)
    nextQuestion = sanitizeQuestion(nextResolved)
    if (!nextEntry.inline) {
      const q = await db.question.findUnique({ where: { id: nextEntry.qid } })
      if (q) {
        const data = JSON.parse(q.data) as QuestionDataShape
        if (data.kind === 'passage') {
          nextPassage = sanitizeQuestion({ id: q.id, type: q.type, data, correct: {} as CorrectShape })
        }
      }
    }
  }

  return {
    correct: result.isCorrect,
    expected: result.expectedDisplay,
    explanation: resolved.explanation ?? null,
    score: result.score ?? null,
    transcription: enrichedAnswer.transcription ?? null,
    session: {
      id: session.id,
      index: state.index,
      total: state.entries.length,
      hearts: session.sessionType === 'LESSON' ? state.hearts : 999,
      combo: state.combo,
      maxCombo: state.maxCombo,
      correctCount: state.correctKeys.length,
      wrongCount: state.wrongKeys.length,
      status: failed ? 'FAILED' : 'ACTIVE',
    },
    nextQuestion,
    nextPassage,
  }
}

/* ------------------------------ Complete session --------------------------- */

export interface CompleteSummary {
  passed: boolean
  accuracy: number
  correctCount: number
  wrongCount: number
  totalQuestions: number
  maxCombo: number
  durationMs: number
  xp: { total: number; breakdown: { label: string; amount: number }[] }
  perfect: boolean
  nodeStatus: string | null
  /** true nếu đây là lần đầu vượt ải này (chưa từng completed trước đó) */
  firstNodeCompletion: boolean
  lessonCompleted: boolean
  heartsGranted: number
  /** Số "Bảo vệ chuỗi" đã tiêu để giữ streak qua ngày bỏ lỡ (0 nếu không dùng). */
  freezesUsed: number
  /** Mode JUMP: đã mở khóa thành công bao nhiêu bài/node trước mục tiêu. */
  jumpApplied: boolean
  jumpLessonsCompleted: number
  jumpNodesCompleted: number
  jumpTargetTitle: string | null
  newAchievements: { code: string; title: string; description: string; icon: string; tier: string; xpReward: number }[]
  streak: { currentStreak: number; longestStreak: number; todayXP: number; dailyGoalXP: number; goalMetToday: boolean }
  totalXP: number
}

export async function completeSession(userId: string, sessionId: string): Promise<CompleteSummary> {
  const session = await db.lessonSession.findUnique({ where: { id: sessionId }, include: { node: true } })
  if (!session || session.userId !== userId) throw notFound('Không tìm thấy phiên học')
  if (session.status === 'COMPLETED') throw badRequest('Phiên học đã được hoàn thành')
  if (session.status !== 'ACTIVE') throw badRequest('Phiên học đã kết thúc')

  const state = parseState(session.state)
  if (state.index < state.entries.length) {
    throw badRequest('Bạn chưa trả lời hết các câu hỏi')
  }

  const durationMs = Date.now() - state.startedAt
  if (durationMs < state.entries.length * 600) {
    throw badRequest('Phiên học không hợp lệ (thời gian quá ngắn)')
  }

  // Atomic claim — chuyển ACTIVE→COMPLETED trước khi cộng XP/progress: 2 tab cùng bấm
  // hoàn thành → chỉ MỘT request đi tiếp, request thua nhận conflict (không double-XP).
  const claimed = await db.lessonSession.updateMany({
    where: { id: session.id, status: 'ACTIVE' },
    data: { status: 'COMPLETED', completedAt: new Date(), durationMs, xpEarned: 0 },
  })
  if (claimed.count === 0) throw conflict('Phiên học đã được hoàn thành trước đó')

  const total = state.entries.length
  const correct = state.correctKeys.length
  const wrong = state.wrongKeys.length
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0
  const perfect = wrong === 0 && total >= 5
  const mode = session.sessionType as SessionMode

  // Node completion (mode LESSON)
  let passed = true
  let nodeStatus: string | null = null
  let firstCompletion = false
  let lessonCompleted = false
  let jumpApplied = false
  let jumpLessonsCompleted = 0
  let jumpNodesCompleted = 0
  let jumpTargetTitle: string | null = null
  if (mode === 'LESSON' && session.node) {
    const node = session.node
    passed = accuracy >= node.requiredScore
    const existing = await db.nodeProgress.findUnique({
      where: { userId_nodeId: { userId, nodeId: node.id } },
    })
    firstCompletion = passed && !existing?.completedAt

    if (passed) {
      const newStatus = existing?.status === 'COMPLETED' || existing?.status === 'MASTERED'
        ? (accuracy >= 90 ? 'MASTERED' : existing.status === 'MASTERED' ? 'MASTERED' : 'COMPLETED')
        : 'COMPLETED'
      nodeStatus = newStatus
      await db.nodeProgress.upsert({
        where: { userId_nodeId: { userId, nodeId: node.id } },
        update: {
          status: newStatus,
          bestScore: { set: Math.max(existing?.bestScore ?? 0, accuracy) },
          lastScore: accuracy,
          attempts: { increment: 1 },
          mastery: accuracy >= 90 ? 5 : accuracy >= 80 ? 4 : 3,
          completedAt: existing?.completedAt ?? new Date(),
        },
        create: {
          userId,
          nodeId: node.id,
          status: newStatus,
          bestScore: accuracy,
          lastScore: accuracy,
          attempts: 1,
          mastery: accuracy >= 90 ? 5 : accuracy >= 80 ? 4 : 3,
          completedAt: new Date(),
        },
      })

      // Aggregate tiến độ
      await db.userProgress.upsert({
        where: { userId },
        update: {
          lessonsCompleted: { increment: 1 },
          perfectLessons: perfect ? { increment: 1 } : undefined,
          listeningNodes: node.nodeType === 'LISTENING' ? { increment: 1 } : undefined,
          speakingNodes: node.nodeType === 'SPEAKING' ? { increment: 1 } : undefined,
          studyTimeSeconds: { increment: Math.floor(durationMs / 1000) },
        },
        create: {
          userId,
          lessonsCompleted: 1,
          perfectLessons: perfect ? 1 : 0,
          listeningNodes: node.nodeType === 'LISTENING' ? 1 : 0,
          speakingNodes: node.nodeType === 'SPEAKING' ? 1 : 0,
          studyTimeSeconds: Math.floor(durationMs / 1000),
        },
      })

      // Quests
      await bumpQuestProgress(userId, 'LESSONS_COMPLETED', 1)
      if (node.nodeType === 'LISTENING') await bumpQuestProgress(userId, 'LISTENING_NODES', 1)
      if (perfect) await bumpQuestProgress(userId, 'PERFECT_LESSONS', 1)

      // Lesson hoàn tất?
      const playableNodes = await db.lessonNode.count({
        where: { lessonId: node.lessonId, status: 'PUBLISHED', exercises: { some: { status: 'PUBLISHED' } } },
      })
      const completedNodes = await db.nodeProgress.count({
        where: {
          userId,
          nodeId: { in: (await db.lessonNode.findMany({ where: { lessonId: node.lessonId }, select: { id: true } })).map((n) => n.id) },
          status: { in: ['COMPLETED', 'MASTERED'] },
        },
      })
      if (playableNodes > 0 && completedNodes >= playableNodes) {
        lessonCompleted = true
        const existingLesson = await db.lessonProgress.findUnique({
          where: { userId_lessonId: { userId, lessonId: node.lessonId } },
        })
        await db.lessonProgress.upsert({
          where: { userId_lessonId: { userId, lessonId: node.lessonId } },
          update: {
            status: 'COMPLETED',
            bestScore: Math.max(existingLesson?.bestScore ?? 0, accuracy),
            timesCompleted: { increment: 1 },
            completedAt: existingLesson?.completedAt ?? new Date(),
          },
          create: {
            userId,
            lessonId: node.lessonId,
            status: 'COMPLETED',
            bestScore: accuracy,
            timesCompleted: 1,
            completedAt: new Date(),
          },
        })
      }
    } else {
      // Không đạt — vẫn ghi attempt
      await db.nodeProgress.upsert({
        where: { userId_nodeId: { userId, nodeId: node.id } },
        update: { lastScore: accuracy, attempts: { increment: 1 } },
        create: { userId, nodeId: node.id, lastScore: accuracy, attempts: 1 },
      })
    }
  } else {
    await db.userProgress.upsert({
      where: { userId },
      update: { studyTimeSeconds: { increment: Math.floor(durationMs / 1000) } },
      create: { userId, studyTimeSeconds: Math.floor(durationMs / 1000) },
    })

    // JUMP: chấm theo ngưỡng bỏ qua và mở khóa hàng loạt
    if (mode === 'JUMP' && state.jumpTargetLessonId) {
      passed = accuracy >= JUMP_REQUIRED_SCORE
      if (passed) {
        const applied = await applyJumpCompletion(userId, state.jumpTargetLessonId, accuracy)
        jumpApplied = true
        jumpLessonsCompleted = applied.lessonsMarked
        jumpNodesCompleted = applied.nodesMarked
        const target = await db.lesson.findUnique({
          where: { id: state.jumpTargetLessonId },
          select: { title: true },
        })
        jumpTargetTitle = target?.title ?? null
      }
    }
  }

  // Review: bump quest REVIEWS_DONE + VOCAB_REVIEWS
  if (mode === 'REVIEW') {
    const vocabCount = state.entries.filter((e) => e.inline?.itemRefType === 'VOCAB').length
    await bumpQuestProgress(userId, 'REVIEWS_DONE', state.entries.length)
    if (vocabCount > 0) await bumpQuestProgress(userId, 'VOCAB_REVIEWS', vocabCount)
  }

  // XP
  const xpResult = computeLessonXp({
    correctCount: correct,
    totalQuestions: total,
    maxCombo: state.maxCombo,
    perfect,
    firstCompletion,
    sessionType: mode,
  })
  let totalXP = 0
  let freezesUsed = 0
  if (xpResult.total > 0) {
    const res = await awardXp(userId, xpResult.total, mode === 'LESSON' ? 'LESSON_COMPLETE' : mode === 'REVIEW' ? 'REVIEW' : 'PRACTICE', {
      refType: 'session',
      refId: session.id,
    })
    totalXP = res.totalXP
    freezesUsed = res.freezesUsed
  }

  // Practice → +1 tim
  let heartsGranted = 0
  if (mode === 'PRACTICE' || mode === 'REVIEW' || mode === 'MISTAKE' || mode === 'JUMP') {
    const config = await getHeartConfig()
    if (config.enabled) {
      const before = await getHearts(userId)
      if (before.hearts < before.maxHearts) {
        await grantHeart(userId)
        heartsGranted = 1
      }
    }
  }

  // Hoàn tất session
  await db.lessonSession.update({
    where: { id: session.id },
    data: {
      status: 'COMPLETED',
      completedAt: new Date(),
      durationMs,
      xpEarned: xpResult.total,
    },
  })

  const newAchievements = await checkAchievements(userId)
  const streak = await getStreakInfo(userId)
  await track(mode === 'REVIEW' ? 'review_completed' : 'lesson_completed', userId, {
    sessionId: session.id,
    nodeId: session.nodeId,
    accuracy,
    xp: xpResult.total,
  })

  return {
    passed,
    accuracy,
    correctCount: correct,
    wrongCount: wrong,
    totalQuestions: total,
    maxCombo: state.maxCombo,
    durationMs,
    xp: xpResult,
    perfect,
    nodeStatus,
    firstNodeCompletion: firstCompletion,
    lessonCompleted,
    heartsGranted,
    freezesUsed,
    jumpApplied,
    jumpLessonsCompleted,
    jumpNodesCompleted,
    jumpTargetTitle,
    newAchievements,
    streak,
    totalXP,
  }
}

export async function quitSession(userId: string, sessionId: string) {
  const session = await db.lessonSession.findUnique({ where: { id: sessionId } })
  if (!session || session.userId !== userId) throw notFound('Không tìm thấy phiên học')
  if (session.status === 'ACTIVE') {
    await db.lessonSession.update({ where: { id: sessionId }, data: { status: 'ABANDONED', completedAt: new Date() } })
  }
  return { ok: true }
}

/* ------------------------------- Review helpers ---------------------------- */

async function generateReviewQuestion(itemType: string, itemKey: string): Promise<SessionEntry['inline']> {
  if (itemType === 'VOCAB') {
    const item = await db.vocabulary.findFirst({ where: { term: itemKey } })
    if (!item) return undefined
    const distractors = await db.vocabulary.findMany({
      where: { term: { not: itemKey } },
      take: 12,
      orderBy: { createdAt: 'desc' },
    })
    const wrong = pickRandom(distractors, 3)
    if (wrong.length < 3) return undefined
    const options = shuffle([
      { id: 'a', text: item.meaningVi },
      ...wrong.map((w, i) => ({ id: 'b' + i, text: w.meaningVi })),
    ])
    const correctId = options.find((o) => o.text === item.meaningVi)!.id
    return {
      type: 'SELECT_MEANING',
      prompt: 'Ôn tập từ vựng',
      data: { kind: 'choice', promptJa: item.term, promptSub: item.romaji, options, layout: 'list' },
      correct: { optionId: correctId },
      explanation: `${item.term} (${item.romaji}) = ${item.meaningVi}`,
      itemRefType: 'VOCAB',
      itemRefKey: itemKey,
    }
  }
  if (itemType === 'KANJI') {
    const item = await db.kanji.findUnique({ where: { character: itemKey } })
    if (!item) return undefined
    const distractors = await db.kanji.findMany({ where: { character: { not: itemKey } }, take: 12 })
    const wrong = pickRandom(distractors, 3)
    if (wrong.length < 3) return undefined
    const options = shuffle([
      { id: 'a', text: item.meaningVi },
      ...wrong.map((w, i) => ({ id: 'b' + i, text: w.meaningVi })),
    ])
    const correctId = options.find((o) => o.text === item.meaningVi)!.id
    return {
      type: 'KANJI_MEANING',
      prompt: 'Ôn tập Kanji',
      data: { kind: 'choice', promptJa: item.character, promptSub: `${item.strokeCount} nét · N${item.jlpt}`, options, layout: 'list' },
      correct: { optionId: correctId },
      explanation: `${item.character}: ${item.meaningVi}`,
      itemRefType: 'KANJI',
      itemRefKey: itemKey,
    }
  }
  if (itemType === 'KANA') {
    const item = await db.kanaCharacter.findFirst({ where: { character: itemKey } })
    if (!item) return undefined
    const distractors = await db.kanaCharacter.findMany({
      where: { character: { not: itemKey }, type: item.type, kanaGroup: 'BASIC' },
      take: 12,
    })
    const wrong = pickRandom(distractors, 3)
    if (wrong.length < 3) return undefined
    const options = shuffle([
      { id: 'a', text: item.romaji },
      ...wrong.map((w, i) => ({ id: 'b' + i, text: w.romaji })),
    ])
    const correctId = options.find((o) => o.text === item.romaji)!.id
    return {
      type: item.type === 'HIRAGANA' ? 'HIRAGANA_RECOGNITION' : 'KATAKANA_RECOGNITION',
      prompt: 'Ôn tập kana',
      data: { kind: 'choice', promptJa: item.character, options, layout: 'grid' },
      correct: { optionId: correctId },
      explanation: `${item.character} = ${item.romaji}`,
      itemRefType: 'KANA',
      itemRefKey: itemKey,
    }
  }
  if (itemType === 'GRAMMAR') {
    const item = await db.grammarPoint.findUnique({ where: { code: itemKey } })
    if (!item) return undefined
    const distractors = await db.grammarPoint.findMany({ where: { code: { not: itemKey } }, take: 12 })
    const wrong = pickRandom(distractors, 3)
    if (wrong.length < 3) return undefined
    const options = shuffle([
      { id: 'a', text: item.explanationVi.slice(0, 120) },
      ...wrong.map((w, i) => ({ id: 'b' + i, text: w.explanationVi.slice(0, 120) })),
    ])
    const correctId = options.find((o) => o.text === item.explanationVi.slice(0, 120))!.id
    return {
      type: 'GRAMMAR_CHOICE',
      prompt: 'Ôn tập ngữ pháp',
      data: { kind: 'choice', promptJa: item.title, options, layout: 'list' },
      correct: { optionId: correctId },
      explanation: item.title,
      itemRefType: 'GRAMMAR',
      itemRefKey: itemKey,
    }
  }
  return undefined
}

function pickRandom<T>(arr: T[], n: number): T[] {
  const copy = [...arr]
  const out: T[] = []
  while (copy.length > 0 && out.length < n) {
    out.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0])
  }
  return out
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function describePrompt(q: ResolvedQuestion): string {
  const d = q.data as Record<string, unknown>
  if (d.kind === 'choice') return String(d.promptJa ?? q.prompt ?? q.type)
  if (d.kind === 'audio-choice') return `🔊 ${d.audioText}`
  if (d.kind === 'fill-blank') return String(d.sentence)
  if (d.kind === 'token-order') return String(d.promptVi)
  if (d.kind === 'text-input') return d.audioText ? `🔊 ${d.audioText}` : 'Nhập câu trả lời'
  if (d.kind === 'matching') return 'Nối cặp đúng'
  if (d.kind === 'speak') return `🎙 ${d.speakText}`
  if (d.kind === 'writing') return `✍ ${d.character}`
  return q.type
}

function describeAnswer(a: AnswerPayload): string {
  if (a.optionId) return a.optionId
  if (a.text) return a.text
  if (a.tokenOrder) return a.tokenOrder.join(' ')
  if (a.pairs) return JSON.stringify(a.pairs)
  if (a.transcription) return a.transcription
  if (a.strokeCount !== undefined) return `${a.strokeCount} nét`
  return ''
}
