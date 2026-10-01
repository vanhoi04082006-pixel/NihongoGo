/// <reference types="bun-types" />
/**
 * Unit tests — datetime theo timezone (VN) + XP domain (server-authoritative).
 * Chạy: bun test tests/unit/datetime-xp.test.ts
 */
import { describe, expect, test } from 'bun:test'
import { userTimezone, dateInTz, todayInTz, shiftDate, diffDays, mondayOf, formatDateVi } from '../../src/lib/datetime'
import { computeLessonXp } from '../../src/server/domain/xp'

describe('userTimezone', () => {
  test('tz hợp lệ được giữ', () => {
    expect(userTimezone('Asia/Tokyo')).toBe('Asia/Tokyo')
    expect(userTimezone('Asia/Ho_Chi_Minh')).toBe('Asia/Ho_Chi_Minh')
  })
  test('tz rỗng/sai → mặc định VN', () => {
    expect(userTimezone(null)).toBe('Asia/Ho_Chi_Minh')
    expect(userTimezone('')).toBe('Asia/Ho_Chi_Minh')
    expect(userTimezone('Not/A_Timezone')).toBe('Asia/Ho_Chi_Minh')
  })
})

describe('dateInTz (ranh giới ngày VN = UTC+7)', () => {
  test('17:00 UTC ngày N = 00:00 VN ngày N+1', () => {
    const d = new Date('2026-03-10T17:00:00Z')
    expect(dateInTz(d, 'Asia/Ho_Chi_Minh')).toBe('2026-03-11')
  })
  test('16:59 UTC ngày N vẫn là ngày N theo VN', () => {
    const d = new Date('2026-03-10T16:59:59Z')
    expect(dateInTz(d, 'Asia/Ho_Chi_Minh')).toBe('2026-03-10')
  })
  test('UTC thuần cho ngày khác VN (Tokyo +9)', () => {
    const d = new Date('2026-03-10T15:00:00Z') // Tokyo = 11/3 00:00
    expect(dateInTz(d, 'Asia/Tokyo')).toBe('2026-03-11')
    expect(dateInTz(d, 'Asia/Ho_Chi_Minh')).toBe('2026-03-10')
  })
})

describe('todayInTz', () => {
  test('trả về chuỗi YYYY-MM-DD hợp lệ', () => {
    expect(todayInTz('Asia/Ho_Chi_Minh')).toMatch(/^\d{4}-\d{2}-\d{2}$/)
  })
})

describe('shiftDate / diffDays', () => {
  test('cộng ngày qua cuối tháng', () => {
    expect(shiftDate('2026-01-31', 1)).toBe('2026-02-01')
    expect(shiftDate('2026-02-28', 1)).toBe('2026-03-01')
  })
  test('trừ ngày qua đầu năm', () => {
    expect(shiftDate('2026-01-01', -1)).toBe('2025-12-31')
  })
  test('diffDays đúng qua tháng/năm', () => {
    expect(diffDays('2026-03-01', '2026-02-28')).toBe(1)
    expect(diffDays('2026-01-01', '2025-12-31')).toBe(1)
    expect(diffDays('2026-01-10', '2026-01-01')).toBe(9)
    expect(diffDays('2026-01-01', '2026-01-10')).toBe(-9)
  })
})

describe('mondayOf (tuần leaderboard)', () => {
  test('Thứ Hai → chính nó', () => {
    expect(mondayOf(new Date('2026-03-09T03:00:00Z'), 'Asia/Ho_Chi_Minh')).toBe('2026-03-09') // Thứ 2
  })
  test('Chủ Nhật → Thứ Hai tuần TRƯỚC', () => {
    expect(mondayOf(new Date('2026-03-15T03:00:00Z'), 'Asia/Ho_Chi_Minh')).toBe('2026-03-09') // Chủ nhật 15/3
  })
  test('Thứ Tư → Thứ Hai cùng tuần', () => {
    expect(mondayOf(new Date('2026-03-11T03:00:00Z'), 'Asia/Ho_Chi_Minh')).toBe('2026-03-09')
  })
})

describe('formatDateVi', () => {
  test('định dạng dd/MM/yyyy', () => {
    expect(formatDateVi('2026-03-09')).toBe('09/03/2026')
  })
})

describe('computeLessonXp (server-authoritative)', () => {
  test('LESSON: 10 XP/câu + combo + perfect + first', () => {
    const r = computeLessonXp({ correctCount: 5, totalQuestions: 5, maxCombo: 5, perfect: true, firstCompletion: true, sessionType: 'LESSON' })
    // 50 base + combo(5-2=3) + 20 perfect + 15 first = 88
    expect(r.total).toBe(88)
  })
  test('PRACTICE: chỉ 50% XP, không combo/perfect/first', () => {
    const r = computeLessonXp({ correctCount: 5, totalQuestions: 5, maxCombo: 5, perfect: true, firstCompletion: true, sessionType: 'PRACTICE' })
    expect(r.total).toBe(25)
  })
  test('REVIEW: 5 XP/câu × 50%', () => {
    const r = computeLessonXp({ correctCount: 4, totalQuestions: 4, maxCombo: 4, perfect: true, firstCompletion: false, sessionType: 'REVIEW' })
    expect(r.total).toBe(10)
  })
  test('0 câu đúng = 0 XP', () => {
    expect(computeLessonXp({ correctCount: 0, totalQuestions: 3, maxCombo: 0, perfect: false, firstCompletion: false, sessionType: 'LESSON' }).total).toBe(0)
  })
  test('combo bị cap 15', () => {
    const r = computeLessonXp({ correctCount: 20, totalQuestions: 20, maxCombo: 20, perfect: false, firstCompletion: false, sessionType: 'LESSON' })
    // 200 base + combo cap 15
    expect(r.total).toBe(215)
  })
})
