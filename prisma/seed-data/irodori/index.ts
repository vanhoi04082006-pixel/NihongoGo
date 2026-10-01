/**
 * NihongoGo — Irodori A1 course data index (Task 27).
 *
 * Khoá "Irodori A1 — Tiếng Nhật sinh tồn": 12 bài, 3 section (4 bài/section).
 * Nội dung GỐC 100% — chỉ tham chiếu chủ đề giao tiếp sinh tồn cấp A1
 * (tri thức phổ quát), KHÔNG sao chép từ giáo trình có bản quyền.
 * Provenance: ORIGINAL_GENERATED · MACHINE_REVIEWED (validator + audit).
 *
 * `buildIrodoriLesson` (generate.ts) deterministic-expand từng bài thành
 * SeedLesson (~55–80 câu, 12–13 node, đủ 10 kỹ năng + MIXED + BOSS).
 */
import type { IrodoriLesson } from './types'
import { irodori1 } from './irodori1'
import { irodori2 } from './irodori2'
import { irodori3 } from './irodori3'
import { irodori4 } from './irodori4'
import { irodori5 } from './irodori5'
import { irodori6 } from './irodori6'
import { irodori7 } from './irodori7'
import { irodori8 } from './irodori8'
import { irodori9 } from './irodori9'
import { irodori10 } from './irodori10'
import { irodori11 } from './irodori11'
import { irodori12 } from './irodori12'

export const irodoriLessons: IrodoriLesson[] = [
  irodori1, irodori2, irodori3, irodori4, irodori5, irodori6,
  irodori7, irodori8, irodori9, irodori10, irodori11, irodori12,
]

/** 3 section × 4 bài — slug section được sinh deterministic từ order. */
export const IRODORI_SECTIONS = [
  { order: 0, title: 'Khởi đầu — Starter', titleJa: 'スターター', description: 'Chào hỏi, giới thiệu, số & thời gian, mua sắm — những câu đầu tiên dùng được ngay ngày đầu ở Nhật.' },
  { order: 1, title: 'Cuộc sống hằng ngày — Daily Life', titleJa: 'まいにちの せいかつ', description: 'Ăn uống, thói quen ngày, chỉ đường, sở thích — xoay xở các tình huống đời sống thường ngày.' },
  { order: 2, title: 'Mở rộng — Extension', titleJa: 'かくちょう', description: 'Thời tiết, lời mời, sức khoẻ và tổng kết — mở rộng vốn sống tiếng Nhật và chốt hành trình A1.' },
] as const

export function irodoriSectionForOrder(order: number): (typeof IRODORI_SECTIONS)[number] {
  // Bài 1–4 → section 0 · 5–8 → section 1 · 9–12 → section 2
  return IRODORI_SECTIONS[Math.min(2, Math.floor((order - 1) / 4))]
}
