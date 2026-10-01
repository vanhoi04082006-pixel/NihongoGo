import { db } from '@/lib/db'
import { getHeartConfig } from './config'

/** Heart/Energy system — cấu hình bật/tắt được, không paywall. */

export interface HeartState {
  enabled: boolean
  hearts: number
  maxHearts: number
  nextHeartInMs: number | null
}

export async function getHearts(userId: string): Promise<HeartState> {
  const config = await getHeartConfig()
  if (!config.enabled) {
    return { enabled: false, hearts: Infinity as unknown as number, maxHearts: config.maxHearts, nextHeartInMs: null }
  }
  let row = await db.userHeart.findUnique({ where: { userId } })
  if (!row) {
    row = await db.userHeart.create({ data: { userId, hearts: config.maxHearts, maxHearts: config.maxHearts } })
  }
  // Hồi tim lười (lazy): mỗi regenMinutes hồi 1 tim
  let hearts = row.hearts
  const elapsed = Date.now() - row.updatedAt.getTime()
  const regenMs = config.regenMinutes * 60000
  if (hearts < config.maxHearts && elapsed >= regenMs) {
    const regen = Math.floor(elapsed / regenMs)
    hearts = Math.min(config.maxHearts, hearts + regen)
    row = await db.userHeart.update({ where: { userId }, data: { hearts } })
  }
  const nextHeartInMs =
    hearts < config.maxHearts ? regenMs - (Date.now() - row.updatedAt.getTime()) % (regenMs || 1) : null
  return { enabled: true, hearts, maxHearts: config.maxHearts, nextHeartInMs }
}

export async function consumeHeart(userId: string): Promise<number> {
  const config = await getHeartConfig()
  if (!config.enabled) return Infinity as unknown as number
  const row = await db.userHeart.upsert({
    where: { userId },
    update: { hearts: { decrement: 1 }, updatedAt: new Date() },
    create: { userId, hearts: config.maxHearts - 1, maxHearts: config.maxHearts },
  })
  return Math.max(0, row.hearts)
}

/** Hoàn thành luyện tập → +1 tim (tối đa max). */
export async function grantHeart(userId: string): Promise<number> {
  const config = await getHeartConfig()
  if (!config.enabled) return config.maxHearts
  const current = await db.userHeart.findUnique({ where: { userId } })
  if (current && current.hearts >= config.maxHearts) return current.hearts
  const row = await db.userHeart.upsert({
    where: { userId },
    update: { hearts: { increment: 1 } },
    create: { userId, hearts: Math.min(1, config.maxHearts), maxHearts: config.maxHearts },
  })
  return row.hearts
}
