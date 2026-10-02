/**
 * Tiện ích ngày tháng theo timezone người dùng.
 * Streak/daily quest dùng "ngày địa phương" của user, không dùng UTC thuần.
 */

const DEFAULT_TZ = 'Asia/Ho_Chi_Minh'

export function userTimezone(tz?: string | null): string {
  if (!tz) return DEFAULT_TZ
  try {
    new Intl.DateTimeFormat('en-US', { timeZone: tz })
    return tz
  } catch {
    return DEFAULT_TZ
  }
}

/** Ngày hiện tại theo timezone user, dạng 'YYYY-MM-DD'. */
export function dateInTz(date: Date, tz: string): string {
  const fmt = new Intl.DateTimeFormat('en-CA', {
    timeZone: tz,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
  return fmt.format(date)
}

export function todayInTz(tz: string): string {
  return dateInTz(new Date(), tz)
}

/** Cộng/trừ ngày trên chuỗi 'YYYY-MM-DD'. */
export function shiftDate(dateStr: string, days: number): string {
  const [y, m, d] = dateStr.split('-').map(Number)
  const dt = new Date(Date.UTC(y, m - 1, d))
  dt.setUTCDate(dt.getUTCDate() + days)
  return dt.toISOString().slice(0, 10)
}

export function diffDays(a: string, b: string): number {
  const da = new Date(a + 'T00:00:00Z').getTime()
  const db2 = new Date(b + 'T00:00:00Z').getTime()
  return Math.round((da - db2) / 86400000)
}

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function weekdayInTz(date: Date, tz: string): number {
  const fmt = new Intl.DateTimeFormat('en-US', { timeZone: tz, weekday: 'short' })
  const name = fmt.format(date)
  return WEEKDAYS.indexOf(name)
}

/**
 * Thứ Hai của tuần chứa `date` theo timezone, dạng 'YYYY-MM-DD'.
 */
export function mondayOf(date: Date, tz: string): string {
  const wd = weekdayInTz(date, tz) // 0=Sun
  const back = wd === 0 ? 6 : wd - 1
  // lùi `back` ngày (mỗi bước 24h — an toàn với VN không có DST)
  const shifted = new Date(date.getTime() - back * 86400000)
  return dateInTz(shifted, tz)
}

/** Epoch của 00:00 thứ Hai (theo tz, chỉ chính xác với tz không DST như VN). */
export function mondayEpoch(date: Date, tz: string): number {
  const monday = mondayOf(date, tz)
  const [y, m, d] = monday.split('-').map(Number)
  // VN = UTC+7 → 00:00 địa phương = 17:00 UTC ngày hôm trước
  return Date.UTC(y, m - 1, d) - 7 * 3600000
}

/** Key mùa giải leaderboard: 'YYYY-MM-DD' của thứ Hai. */
export function seasonKeyNow(tz = DEFAULT_TZ): string {
  return mondayOf(new Date(), tz)
}

export function weekStartEnd(tz = DEFAULT_TZ): { startsAt: Date; endsAt: Date; seasonKey: string } {
  const start = mondayEpoch(new Date(), tz)
  return {
    startsAt: new Date(start),
    endsAt: new Date(start + 7 * 86400000),
    seasonKey: dateInTz(new Date(start), tz),
  }
}

export function formatDateVi(dateStr: string): string {
  const [y, m, d] = dateStr.split('-').map(Number)
  return `${String(d).padStart(2, '0')}/${String(m).padStart(2, '0')}/${y}`
}

export function formatDateTimeVi(date: Date): string {
  return new Intl.DateTimeFormat('vi-VN', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: DEFAULT_TZ,
  }).format(date)
}
