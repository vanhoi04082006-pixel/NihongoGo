import { NextRequest } from 'next/server'
import { ok, route } from '@/lib/api'
import { requireRole } from '@/lib/auth'
import { getAdminStats, getAuditLogs } from '@/server/services/admin'

export const dynamic = 'force-dynamic'

export const GET = route(async (req: NextRequest) => {
  await requireRole(req, ['ADMIN'])
  const withLogs = req.nextUrl.searchParams.get('logs') === '1'
  const stats = await getAdminStats()
  const logs = withLogs ? await getAuditLogs(50) : []
  return ok({ stats, logs })
})
