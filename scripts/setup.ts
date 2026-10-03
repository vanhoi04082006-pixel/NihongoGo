/**
 * NihongoGo — Thiết lập môi trường dev trong MỘT lệnh (Windows / macOS / Linux).
 *
 *   bun install     # cài dependencies (chạy trước)
 *   bun run setup   # script này
 *   bun run dev     # khởi động dev server
 *
 * Các bước:
 *   1. Tạo `.env` từ `.env.example` (nếu chưa có)
 *   2. Đảm bảo thư mục `db/` tồn tại
 *   3. `prisma generate` — sinh Prisma Client
 *   4. `prisma db push` — tạo SQLite database theo schema
 *   5. Seed dữ liệu học (70 bài, 4.876 câu hỏi, 190 ngữ pháp,
 *      119 kanji, 208 kana, 26 achievement, 8 quest, 10 users mẫu)
 *
 * An toàn khi chạy lại: `.env` hiện có được giữ nguyên; seed dùng upsert cho
 * users và dựng lại nội dung học (course/lessons) — tiến độ học của tài khoản
 * cũ có thể bị đặt lại do nội dung được dựng lại.
 *
 * Cuối seed ghi SystemConfig.seedVersion (xem prisma/seed-version.ts). Nếu
 * seed bị gián đoạn giữa chừng (Ctrl+C, lỗi) → marker KHÔNG được ghi → lần
 * `bun run dev` kế tiếp (predev) phát hiện DB dở và TỰ chạy lại setup. Bump
 * SEED_VERSION khi đổi nội dung học để mọi máy dev tự nhận nội dung mới.
 */
import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, copyFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const ENV_PATH = join(root, '.env')
const ENV_EXAMPLE = join(root, '.env.example')
const DB_DIR = join(root, 'db')

const c = {
  dim: (s: string) => `\x1b[2m${s}\x1b[0m`,
  cyan: (s: string) => `\x1b[36m${s}\x1b[0m`,
  green: (s: string) => `\x1b[32m${s}\x1b[0m`,
  yellow: (s: string) => `\x1b[33m${s}\x1b[0m`,
  red: (s: string) => `\x1b[31m${s}\x1b[0m`,
}

const step = (i: number, total: number, msg: string) =>
  console.log(`\n${c.cyan(`[${i}/${total}]`)} ${msg}`)
const done = (msg: string) => console.log(`  ${c.green('OK')} ${msg}`)
const warn = (msg: string) => console.log(`  ${c.yellow('!')} ${msg}`)

/** Chạy lệnh shell, kế thừa stdio; fail thì dừng với mã lỗi tương ứng. */
function run(cmd: string): void {
  const res = spawnSync(cmd, {
    stdio: 'inherit',
    shell: true, // cross-platform: bun/bunx/prisma shims trên Windows cần shell
    cwd: root,
  })
  if (res.status !== 0) {
    console.error(`\n${c.red(`Lỗi khi chạy: ${cmd}`)}`)
    console.error(c.dim('Sửa lỗi trên rồi chạy lại `bun run setup` (các bước đã xong sẽ được bỏ qua).'))
    process.exit(res.status ?? 1)
  }
}

function main() {
  console.log(`
${c.cyan('╭──────────────────────────────────────────╮')}
${c.cyan('│')}   NihongoGo — thiết lập dev môi trường   ${c.cyan('│')}
${c.cyan('╰──────────────────────────────────────────╯')}`)

  const TOTAL = 5

  // 1. .env
  step(1, TOTAL, 'Tạo file .env')
  if (existsSync(ENV_PATH)) {
    done('Đã tồn tại .env — giữ nguyên, không ghi đè.')
  } else if (existsSync(ENV_EXAMPLE)) {
    copyFileSync(ENV_EXAMPLE, ENV_PATH)
    done('Đã tạo .env từ .env.example (SQLite tại db/custom.db).')
  } else {
    warn('Không tìm thấy .env.example — tạo .env mặc định.')
    writeFileSync(ENV_PATH, 'DATABASE_URL="file:../db/custom.db"\n', 'utf8')
    done('Đã tạo .env mặc định.')
  }

  // 2. db/
  step(2, TOTAL, 'Chuẩn bị thư mục database')
  if (!existsSync(DB_DIR)) mkdirSync(DB_DIR, { recursive: true })
  done('db/ sẵn sàng.')

  // 3. prisma generate
  step(3, TOTAL, 'Sinh Prisma Client')
  run('bunx prisma generate')

  // 4. db push
  step(4, TOTAL, 'Tạo/cập nhật SQLite schema (prisma db push)')
  run('bunx prisma db push')
  done('Database sẵn sàng.')

  // 5. seed
  step(5, TOTAL, 'Seed dữ liệu học (70 bài học, kana, kanji, ngữ pháp…)')
  run('bun prisma/seed.ts')

  console.log(`
${c.green('Hoàn tất!')} Khởi động dev server:

    ${c.cyan('bun run dev')}

  Mở http://localhost:3000 — tài khoản mẫu:
    ${c.dim('ADMIN')} admin@nihongogo.local / admin12345
    ${c.dim('USER')}  demo@nihongogo.local  / demo12345
${c.dim('  (tài khoản mẫu chỉ dành cho dev — xem README để đổi/khoá khi production)')}
`)
}

main()
