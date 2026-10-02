/**
 * NihongoGo — Backfill exercise 0 câu hỏi (chạy 1 lần, idempotent).
 *
 * Lịch sử: generator cũ sinh meaningQs tối đa 4 câu cho bài có kanji →
 * exercise "Ôn lại nghĩa từ" (meaningQs.slice(4)) rỗng ở L11–L50 (40 exercise).
 * Generator đã fix; script này vá DATABASE ĐANG CHẠY tại chỗ (không re-seed,
 * không đụng user/progress/XP) bằng cách sinh câu SELECT_MEANING từ chính
 * từ vựng của bài học đó.
 *
 *   bun scripts/backfill-empty-exercises.ts          # vá + báo cáo
 *   bun scripts/backfill-empty-exercises.ts --dry    # chỉ báo cáo
 */
import { db } from '../src/lib/db'

function hashSeed(s: string): number {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function mulberry32(seed: number) {
  let a = seed
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function shuffle<T>(arr: T[], rnd: () => number): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const dry = process.argv.includes('--dry')

async function main() {
  const empties = await db.exercise.findMany({
    where: { questions: { none: {} }, status: 'PUBLISHED' },
    include: { node: { include: { lesson: { select: { id: true, order: true, title: true } } } } },
    orderBy: { id: 'asc' },
  })
  console.log(`Exercise PUBLISHED không có câu hỏi: ${empties.length}`)
  if (!empties.length) { console.log('OK — không cần vá.'); return }

  let fixed = 0
  for (const ex of empties) {
    const lessonId = ex.node.lessonId
    // Từ vựng của bài; nếu bài không có từ nào (hiếm) → dùng từ chung gần đó
    let vocab = await db.vocabulary.findMany({ where: { lessonId }, orderBy: { createdAt: 'asc' } })
    if (vocab.length < 4) {
      vocab = await db.vocabulary.findMany({ take: 30, orderBy: { createdAt: 'asc' } })
    }
    if (vocab.length < 4) { console.log(`  SKIP ${ex.id}: không đủ từ vựng để sinh câu`); continue }

    const rnd = mulberry32(hashSeed(ex.id))
    const picked = shuffle(vocab, rnd).slice(0, 4)
    const data: {
      type: string
      prompt: string
      data: unknown
      correctData: string
      explanation: string
      order: number
      itemRefType: string
      itemRefKey: string
    }[] = []
    picked.forEach((v, i) => {
      const pool = vocab.filter((x) => x.id !== v.id)
      const distract = shuffle(pool, mulberry32(hashSeed(ex.id + i))).slice(0, 3).map((x) => x.meaningVi)
      while (distract.length < 3) distract.push('(khác nghĩa)')
      const opts = shuffle([{ id: 'k', text: v.meaningVi }, ...distract.map((t, di) => ({ id: 'd' + di, text: t }))], mulberry32(hashSeed(ex.id + ':' + i)))
      const answer = opts.find((o) => o.text === v.meaningVi)!
      const term = v.term
      data.push({
        type: 'SELECT_MEANING',
        prompt: 'Từ này có nghĩa là gì?',
        data: { kind: 'choice', promptJa: term, promptSub: v.romaji ?? '', options: opts },
        correctData: JSON.stringify({ optionId: answer.id }),
        explanation: `${term} (${v.romaji ?? ''}) = ${v.meaningVi}${v.exampleJa ? `. Vd: ${v.exampleJa} — ${v.exampleVi ?? ''}` : ''}`,
        order: i,
        itemRefType: 'VOCAB',
        itemRefKey: term,
      })
    })

    if (dry) {
      console.log(`  [dry] Sẽ thêm ${data.length} câu vào ex ${ex.id} (L${ex.node.lesson.order} · ${ex.instructions ?? ''})`)
    } else {
      await db.question.createMany({ data: data.map((q) => ({ ...q, data: JSON.stringify(q.data), exerciseId: ex.id })) })
      fixed++
      console.log(`  + ${data.length} câu → ex ${ex.id} (L${ex.node.lesson.order} "${ex.node.lesson.title?.slice(0, 28)}" · ${ex.instructions ?? ex.type})`)
    }
  }
  console.log(dry ? '[dry-run] Không ghi gì.' : `Đã vá ${fixed}/${empties.length} exercise.`)
  // Verify
  const remain = await db.exercise.count({ where: { questions: { none: {} }, status: 'PUBLISHED' } })
  console.log(`Kiểm tra sau: ${remain} exercise PUBLISHED còn 0 câu hỏi`)
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1) })
