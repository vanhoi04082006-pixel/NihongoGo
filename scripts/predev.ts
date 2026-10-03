/**
 * NihongoGo — predev: kiểm tra nhanh database TRƯỚC khi `next dev` khởi động.
 *
 * Mục tiêu: người mới clone repo chỉ cần `bun install && bun run dev` — không
 * cần nhớ chạy `bun run setup` trước. Nếu database chưa sẵn sàng (thiếu file
 * SQLite, thiếu bảng, chưa seed nội dung học, hoặc seed BỊ GIÁN ĐOẠN giữa
 * chừng / nội dung cũ), script TỰ ĐỘNG chạy `bun scripts/setup.ts` rồi mới
 * tiếp tục. Nếu mọi thứ đã sẵn sàng, script thoát ngay trong vài chục mili-giây
 * — không làm chậm các lần chạy sau.
 *
 * "Sẵn sàng" = file SQLite tồn tại + có bảng User (đã db push) + có Course
 * (đã seed) + SystemConfig.seedVersion khớp SEED_VERSION (seed chạy ĐẦN HẾT,
 * nội dung đúng phiên bản). Thiếu / sai một trong bốn → chạy lại setup.
 *
 * Cách giải nghĩa DATABASE_URL mirror đúng hành vi của Prisma + src/lib/db.ts:
 *   ưu tiên process.env → file .env → mặc định file:../db/custom.db
 *   đường dẫn `file:` được giải nghĩa TƯƠNG ĐỐI so với thư mục prisma/
 *   (vì datasource nằm ở prisma/schema.prisma).
 */
import { spawn, spawnSync } from 'node:child_process'
import { existsSync, openSync, readdirSync, readFileSync } from 'node:fs'
import net from 'node:net'
import { join, resolve } from 'node:path'
import { Database } from 'bun:sqlite'
import { SEED_VERSION, SEED_VERSION_KEY } from '../prisma/seed-version'

const root = process.cwd()
const ENV_PATH = join(root, '.env')

/** Đọc DATABASE_URL theo đúng thứ tự ưu tiên mà Prisma sử dụng. */
function resolveDatabaseUrl(): string {
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL
  try {
    const raw = readFileSync(ENV_PATH, 'utf8')
    for (const line of raw.split(/\r?\n/)) {
      const m = line.match(/^\s*DATABASE_URL\s*=\s*"?([^"\r\n]+)"?\s*$/)
      if (m) return m[1].trim()
    }
  } catch {
    /* chưa có .env — dùng mặc định như src/lib/db.ts */
  }
  return 'file:../db/custom.db'
}

/** `file:../db/custom.db` → <root>/db/custom.db (tương đối theo thư mục prisma/). */
function sqlitePath(url: string): string {
  const p = url.startsWith('file:') ? url.slice(5) : url
  const base = join(root, 'prisma')
  try {
    return resolve(base, decodeURIComponent(p))
  } catch {
    return resolve(base, p)
  }
}

interface DbStatus {
  ready: boolean
  reason: 'ok' | 'no-file' | 'no-table' | 'no-data' | 'stale-seed' | 'error'
  file: string
  detail?: string
}

/** Đọc seedVersion trong SystemConfig (JSON string) — null nếu thiếu/lỗi. */
function readSeedVersion(sqlite: Database): string | null {
  try {
    const row = sqlite.query('SELECT value FROM SystemConfig WHERE key = ?').get(SEED_VERSION_KEY) as { value: string } | null
    if (!row) return null
    try {
      return JSON.parse(row.value) as string
    } catch {
      return row.value
    }
  } catch {
    return null // bảng SystemConfig chưa tồn tại → seed dở từ thời cũ
  }
}

/**
 * "Sẵn sàng" = file SQLite tồn tại + có bảng User (đã db push) + có dữ liệu
 * học trong Course (đã seed) + seedVersion khớp (seed chạy tới dòng cuối).
 * Thiếu một trong bốn → chạy setup.
 */
function checkDb(): DbStatus {
  const file = sqlitePath(resolveDatabaseUrl())
  if (!existsSync(file)) return { ready: false, reason: 'no-file', file }
  try {
    const sqlite = new Database(file, { readonly: true })
    try {
      const tables = sqlite.query("SELECT name FROM sqlite_master WHERE type='table'").all() as { name: string }[]
      if (!tables.some((t) => t.name === 'User')) {
        return { ready: false, reason: 'no-table', file }
      }
      const course = sqlite.query('SELECT COUNT(*) AS n FROM Course').get() as { n: number } | null
      if (!course || course.n < 1) return { ready: false, reason: 'no-data', file }
      const seedVersion = readSeedVersion(sqlite)
      if (seedVersion !== SEED_VERSION) {
        const lesson = sqlite.query('SELECT COUNT(*) AS n FROM Lesson').get() as { n: number } | null
        return {
          ready: false,
          reason: 'stale-seed',
          file,
          detail: seedVersion
            ? `nội dung seed cũ (${seedVersion} ≠ ${SEED_VERSION})`
            : `thiếu đánh dấu seed hoàn tất — seed có thể bị gián đoạn (hiện có ${lesson?.n ?? 0} bài học)`,
        }
      }
      return { ready: true, reason: 'ok', file }
    } finally {
      sqlite.close()
    }
  } catch (e) {
    return { ready: false, reason: 'error', file, detail: String(e) }
  }
}

const REASON_TEXT: Record<DbStatus['reason'], string> = {
  ok: '',
  'no-file': 'chưa có file SQLite',
  'no-table': 'chưa tạo bảng (thiếu `prisma db push`)',
  'no-data': 'chưa seed dữ liệu học',
  'stale-seed': 'seed chưa hoàn tất hoặc nội dung cũ (thiếu/khác seedVersion)',
  error: 'không đọc được file database',
}

const dim = (s: string) => `\x1b[2m${s}\x1b[0m`
const cyan = (s: string) => `\x1b[36m${s}\x1b[0m`
const green = (s: string) => `\x1b[32m${s}\x1b[0m`
const red = (s: string) => `\x1b[31m${s}\x1b[0m`

/**
 * Đảm bảo các mini-service (socket.io live…) đang chạy trước khi next dev mở.
 * Nếu cổng đã lắng nghe → coi như đang chạy, bỏ qua. Ngược lại spawn nền
 * `bun run dev` trong thư mục mini-services/<name>, log ghi ra service.log.
 * Lỗi khởi động KHÔNG chặn dev server (tính năng live chỉ là phụ).
 */
async function ensureMiniServices(): Promise<void> {
  const dir = join(root, 'mini-services')
  let entries: string[] = []
  try {
    entries = readdirSync(dir).filter((n) => existsSync(join(dir, n, 'package.json')))
  } catch {
    return // không có thư mục mini-services
  }
  for (const name of entries) {
    const cwd = join(dir, name)
    let port = 0
    try {
      const pkg = JSON.parse(readFileSync(join(cwd, 'package.json'), 'utf8')) as { port?: number }
      port = Number(pkg.port ?? 0)
    } catch {
      /* bỏ qua nếu đọc package.json lỗi */
    }
    if (!port) continue // không khai báo port → không tự động hoá
    const inUse = await new Promise<boolean>((resolvePort) => {
      const sock = net.connect({ host: '127.0.0.1', port })
      const done = (ok: boolean) => {
        sock.destroy()
        resolvePort(ok)
      }
      sock.once('connect', () => done(true))
      sock.once('error', () => done(false))
      setTimeout(() => done(false), 400)
    })
    if (inUse) {
      console.log(dim(`✓ mini-service ${name} đang chạy (port ${port})`))
      continue
    }
    if (!existsSync(join(cwd, 'node_modules'))) {
      spawnSync('bun install', { stdio: 'ignore', shell: true, cwd })
    }
    const out = openSync(join(cwd, 'service.log'), 'a')
    const child = spawn('bun run dev', {
      stdio: ['ignore', out, out],
      shell: true,
      cwd,
      detached: true,
    })
    child.unref()
    console.log(cyan(`→ đã khởi động mini-service ${name} nền (port ${port}, log: service.log)`))
  }
}

const status = checkDb()

if (status.ready) {
  console.log(`${dim('✓ Database sẵn sàng')} ${dim(`(${status.file})`)}`)
  await ensureMiniServices()
  process.exit(0)
}

// ── Chưa sẵn sàng → tự động khởi tạo ────────────────────────────────────────
console.log('')
console.log(cyan('NihongoGo — database chưa sẵn sàng'))
console.log(`Lý do: ${REASON_TEXT[status.reason]}`)
if (status.detail) console.log(dim(`  chi tiết: ${status.detail}`))
console.log(dim(`  vị trí: ${status.file}`))
console.log('')
if (status.reason === 'stale-seed') {
  console.log('→ Dựng lại toàn bộ nội dung học (tài khoản được GIỮ NGUYÊN, tiến độ học sẽ đặt lại).')
} else {
  console.log('Đang tự động khởi tạo (.env → prisma generate → db push → seed 70 bài học)…')
  console.log(dim('Lần đầu mất khoảng 1–2 phút — các lần chạy sau sẽ bỏ qua bước này.'))
}
console.log('')

const res = spawnSync('bun scripts/setup.ts', {
  stdio: 'inherit',
  shell: true, // cross-platform: bun shim trên Windows cần shell
  cwd: root,
})

if (res.status !== 0) {
  console.error('')
  console.error(red('Khởi tạo database thất bại — xem log phía trên.'))
  console.error(`Sửa lỗi rồi chạy lại ${cyan('bun run dev')} (các bước đã xong sẽ được bỏ qua).`)
  process.exit(res.status ?? 1)
}

// Kiểm chứng lại sau setup — tuyệt đối không để next dev khởi động với một
// database hỏng (app sẽ 500 ở mọi API và rất khó hiểu nguyên nhân).
const after = checkDb()
if (!after.ready) {
  console.error('')
  console.error(red(`Setup chạy xong nhưng database vẫn chưa sẵn sàng (${REASON_TEXT[after.reason]}).`))
  console.error(`Hãy chạy thủ công ${cyan('bun run setup')} và đọc thông báo lỗi.`)
  process.exit(1)
}

console.log('')
console.log(green('✓ Database đã sẵn sàng — khởi động dev server…'))
console.log('')
process.exit(0)
