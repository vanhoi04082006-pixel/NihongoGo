/**
 * Patch idempotent: thêm achievement MỚI vào DB đang chạy mà KHÔNG đụng tới
 * data cũ (seed.ts đầy đủ sẽ deleteMany — chỉ dùng cho cài đặt mới).
 * Chạy: bun scripts/seed-achievements-patch.ts
 */
import { PrismaClient } from '@prisma/client'
import { achievements } from '../prisma/seed-data/achievements'

const db = new PrismaClient()

async function main() {
  let created = 0
  for (const a of achievements) {
    const res = await db.achievement.upsert({
      where: { code: a.code },
      update: {}, // không ghi đè — achievement cũ giữ nguyên
      create: {
        code: a.code,
        title: a.title,
        description: a.description,
        icon: a.icon,
        tier: a.tier,
        category: a.category,
        metric: a.metric,
        threshold: a.threshold,
        xpReward: a.xpReward,
      },
    })
    // upsert không cho biết created hay updated — đếm bằng cách khác
    const exists = await db.achievement.findFirst({ where: { code: a.code } })
    if (exists?.id === res.id) created++
  }
  const total = await db.achievement.count()
  console.log(`✓ Đảm bảo ${created}/${achievements.length} achievement tồn tại — tổng cộng ${total} trong DB`)
}

main()
  .catch((e) => {
    console.error('✗ Patch achievements thất bại:', e)
    process.exit(1)
  })
  .finally(() => db.$disconnect())
