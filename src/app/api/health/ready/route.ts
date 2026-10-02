import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

/**
 * Readiness probe — kiểm tra app có thể phục vụ (DB kết nối được).
 * Trả 503 khi DB chưa sẵn sàng để orchestrator chờ.
 */
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    await db.$queryRaw`SELECT 1`
    return NextResponse.json({ status: 'ready', db: 'up' })
  } catch {
    return NextResponse.json({ status: 'unavailable', db: 'down' }, { status: 503 })
  }
}
