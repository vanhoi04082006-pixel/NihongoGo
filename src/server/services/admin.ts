import { db } from '@/lib/db'

/** Admin service — audit log + content versioning cho CMS. */

export async function audit(input: {
  adminId: string
  action: 'CREATE' | 'UPDATE' | 'DELETE' | 'PUBLISH' | 'ARCHIVE' | 'CONFIG'
  entity: string
  entityId?: string
  before?: unknown
  after?: unknown
}) {
  await db.adminAuditLog.create({
    data: {
      adminId: input.adminId,
      action: input.action,
      entity: input.entity,
      entityId: input.entityId,
      before: input.before === undefined ? null : JSON.stringify(input.before),
      after: input.after === undefined ? null : JSON.stringify(input.after),
    },
  })
}

export async function snapshotVersion(input: {
  entityType: string
  entityId: string
  data: unknown
  authorId: string
  note?: string
}) {
  const last = await db.contentVersion.findFirst({
    where: { entityType: input.entityType, entityId: input.entityId },
    orderBy: { version: 'desc' },
  })
  await db.contentVersion.create({
    data: {
      entityType: input.entityType,
      entityId: input.entityId,
      version: (last?.version ?? 0) + 1,
      data: JSON.stringify(input.data),
      authorId: input.authorId,
      note: input.note,
    },
  })
}

export async function getAuditLogs(limit = 50) {
  const logs = await db.adminAuditLog.findMany({
    orderBy: { createdAt: 'desc' },
    take: limit,
    include: { admin: { select: { username: true } } },
  })
  return logs.map((l) => ({
    id: l.id,
    admin: l.admin.username,
    action: l.action,
    entity: l.entity,
    entityId: l.entityId,
    createdAt: l.createdAt.toISOString(),
  }))
}

export async function getAdminStats() {
  const [users, lessons, questions, sessions, xpTotal, events] = await Promise.all([
    db.user.count(),
    db.lesson.count(),
    db.question.count(),
    db.lessonSession.count(),
    db.xPTransaction.aggregate({ _sum: { amount: true } }),
    db.analyticsEvent.count(),
  ])
  const recentEvents = await db.analyticsEvent.findMany({
    orderBy: { createdAt: 'desc' },
    take: 20,
    include: { user: { select: { username: true } } },
  })
  return {
    users,
    lessons,
    questions,
    sessions,
    xpTotal: xpTotal._sum.amount ?? 0,
    events,
    recentEvents: recentEvents.map((e) => ({
      id: e.id,
      name: e.name,
      user: e.user?.username ?? null,
      createdAt: e.createdAt.toISOString(),
    })),
  }
}
