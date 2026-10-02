import { db } from '../src/lib/db'

async function main() {
  const gp = await db.grammarPoint.findFirst({ orderBy: { createdAt: 'asc' } })
  if (!gp) {
    console.log('no grammar points in DB')
    return
  }
  const user = await db.user.findFirst({ where: { email: 'demo@nihongogo.local' } })
  if (!user) {
    console.log('demo user not found')
    return
  }
  const existing = await db.sRSItem.findUnique({
    where: { userId_itemType_itemKey: { userId: user.id, itemType: 'GRAMMAR', itemKey: gp.code } },
  })
  if (existing) {
    console.log('exists:', gp.code)
    return
  }
  await db.sRSItem.create({
    data: {
      userId: user.id,
      itemType: 'GRAMMAR',
      itemKey: gp.code,
      state: 'LEARNING',
      mastery: 2,
      reviewCount: 2,
      lapseCount: 0,
      ease: 2.5,
      intervalDays: 1,
      nextReviewAt: new Date(),
    },
  })
  console.log('created SRSItem GRAMMAR:', gp.code)
}

main()
  .catch((e) => {
    console.error(e)
    process.exitCode = 1
  })
  .finally(() => process.exit(0))
