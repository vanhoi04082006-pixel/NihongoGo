import { db } from '@/lib/db'

/** Cấu hình hệ thống (admin chỉnh được qua CMS) — lưu JSON trong SystemConfig. */

export interface HeartConfig {
  enabled: boolean
  maxHearts: number
  regenMinutes: number // phút hồi 1 tim
}

const DEFAULTS: Record<string, unknown> = {
  'hearts': { enabled: true, maxHearts: 5, regenMinutes: 30 } satisfies HeartConfig,
}

export async function getConfig<T>(key: string): Promise<T> {
  const row = await db.systemConfig.findUnique({ where: { key } })
  if (!row) return DEFAULTS[key] as T
  try {
    return JSON.parse(row.value) as T
  } catch {
    return DEFAULTS[key] as T
  }
}

export async function setConfig(key: string, value: unknown): Promise<void> {
  const json = JSON.stringify(value)
  await db.systemConfig.upsert({
    where: { key },
    update: { value: json },
    create: { key, value: json },
  })
}

export async function getHeartConfig(): Promise<HeartConfig> {
  return getConfig<HeartConfig>('hearts')
}
