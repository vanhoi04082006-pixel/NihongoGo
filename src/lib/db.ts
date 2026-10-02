import { PrismaClient } from '@prisma/client'
import { mkdirSync } from 'node:fs'
import { join } from 'node:path'

// Fallback thân thiện: nếu clone dự án về mà chưa có `.env` (chưa chạy `bun run setup`),
// Prisma sẽ văng lỗi khó hiểu "Environment variable not found: DATABASE_URL".
// Ở dev, mặc định dùng SQLite tại <project>/db/custom.db (giá trị giống .env.example).
// Production vẫn bắt buộc khai báo DATABASE_URL rõ ràng.
if (!process.env.DATABASE_URL && process.env.NODE_ENV !== 'production') {
  try {
    // SQLite không tự tạo thư mục cha — đảm bảo db/ tồn tại trước khi Prisma mở file.
    mkdirSync(join(process.cwd(), 'db'), { recursive: true })
  } catch {
    // bỏ qua — để Prisma tự báo lỗi nếu thật sự không tạo được
  }
  process.env.DATABASE_URL = 'file:../db/custom.db'
  console.warn(
    '[NihongoGo] DATABASE_URL chưa được khai báo — tạm dùng SQLite mặc định db/custom.db. ' +
      'Chạy `bun run setup` để khởi tạo đầy đủ (.env + schema + seed dữ liệu).'
  )
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['error', 'warn'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
