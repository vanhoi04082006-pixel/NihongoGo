import { NextResponse } from 'next/server'

/**
 * Liveness probe — app process đang sống (không kiểm tra DB).
 * Dùng cho Docker/K8s healthcheck.
 */
export const dynamic = 'force-dynamic'

export async function GET() {
  return NextResponse.json({ status: 'ok', uptime: process.uptime() })
}
