import { db } from '../src/lib/db'

async function main() {
  const lessons = await db.lesson.findMany({
    orderBy: { order: 'asc' },
    include: { nodes: { include: { exercises: { include: { questions: true } } } } },
  })
  console.log('lessonNumber|title|status|nodes|exercises|questions')
  for (const l of lessons) {
    const ex = l.nodes.flatMap(n => n.exercises)
    const q = ex.flatMap(e => e.questions)
    const title = (l.title ?? '') as string
    console.log(`${l.order}|${String(title).slice(0, 40)}|${l.status}|${l.nodes.length}|${ex.length}|${q.length}`)
  }
  const [vocab, grammar, kanji, kana] = await Promise.all([
    db.vocabulary.count(), db.grammarPoint.count(), db.kanji.count(), db.kanaCharacter.count(),
  ])
  console.log(`TOTALS vocab=${vocab} grammar=${grammar} kanji=${kanji} kana=${kana}`)
}
main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1) })
