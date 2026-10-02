import { NextRequest, NextResponse } from 'next/server'
import { route } from '@/lib/api'
import { requireUser } from '@/lib/auth'
import { db } from '@/lib/db'

export const dynamic = 'force-dynamic'

/**
 * Xuất toàn bộ dữ liệu học của user thành file JSON (backup / chuyển đổi).
 * Chỉ chủ tài khoản mới tải được dữ liệu của chính mình — không trả dữ liệu nhạy cảm
 * (mật khẩu đã băm, session token); email giữ nguyên vì là dữ liệu của chính user.
 */
export const GET = route(async (req: NextRequest) => {
  const user = await requireUser(req)

  const [progress, streak, srsItems, nodeProgress, lessonProgress, achievements, xpTransactions, mistakes, sessions, userRow] =
    await Promise.all([
      db.userProgress.findUnique({ where: { userId: user.id } }),
      db.userStreak.findUnique({ where: { userId: user.id } }),
      db.sRSItem.findMany({
        where: { userId: user.id },
        select: { itemType: true, itemKey: true, state: true, mastery: true, reviewCount: true, lapseCount: true, lastReviewedAt: true, nextReviewAt: true },
        orderBy: { nextReviewAt: 'asc' },
      }),
      db.nodeProgress.findMany({
        where: { userId: user.id },
        select: { nodeId: true, status: true, bestScore: true, lastScore: true, attempts: true, mastery: true, completedAt: true },
      }),
      db.lessonProgress.findMany({
        where: { userId: user.id },
        select: { lessonId: true, status: true, bestScore: true, timesCompleted: true, completedAt: true },
      }),
      db.userAchievement.findMany({
        where: { userId: user.id },
        select: { achievementId: true, unlockedAt: true },
      }),
      db.xPTransaction.findMany({
        where: { userId: user.id },
        select: { amount: true, reason: true, createdAt: true },
        orderBy: { createdAt: 'desc' },
        take: 500,
      }),
      db.mistake.findMany({
        where: { userId: user.id },
        select: { questionId: true, resolvedAt: true, lastWrongAt: true },
      }),
      db.lessonSession.findMany({
        where: { userId: user.id, status: 'COMPLETED' },
        select: { sessionType: true, totalQuestions: true, correctCount: true, xpEarned: true, durationMs: true, completedAt: true },
        orderBy: { completedAt: 'desc' },
        take: 200,
      }),
      db.user.findUnique({ where: { id: user.id }, select: { createdAt: true } }),
    ])

  const payload = {
    exportedAt: new Date().toISOString(),
    formatVersion: 1,
    app: 'NihongoGo',
    account: {
      email: user.email,
      displayName: user.profile?.displayName ?? null,
      role: user.role,
      timezone: user.profile?.timezone ?? null,
      dailyGoalXP: user.profile?.dailyGoalXP ?? null,
      onboardedAt: user.profile?.onboardedAt?.toISOString() ?? null,
      createdAt: userRow?.createdAt.toISOString() ?? null,
    },
    progress: progress
      ? {
          totalXP: progress.totalXP,
          lessonsCompleted: progress.lessonsCompleted,
          perfectLessons: progress.perfectLessons,
          listeningNodes: progress.listeningNodes,
          speakingNodes: progress.speakingNodes,
          studyTimeSeconds: progress.studyTimeSeconds,
          currentLeague: progress.currentLeague,
        }
      : null,
    streak: streak
      ? {
          currentStreak: streak.currentStreak,
          longestStreak: streak.longestStreak,
          lastActiveDate: streak.lastActiveDate,
          freezeCount: streak.freezeCount,
        }
      : null,
    srsItems: srsItems.map((s) => ({
      ...s,
      lastReviewedAt: s.lastReviewedAt?.toISOString() ?? null,
      nextReviewAt: s.nextReviewAt?.toISOString() ?? null,
    })),
    nodeProgress: nodeProgress.map((n) => ({ ...n, completedAt: n.completedAt?.toISOString() ?? null })),
    lessonProgress: lessonProgress.map((l) => ({ ...l, completedAt: l.completedAt?.toISOString() ?? null })),
    achievements: achievements.map((a) => ({ ...a, unlockedAt: a.unlockedAt.toISOString() })),
    xpTransactions: xpTransactions.map((t) => ({ ...t, createdAt: t.createdAt.toISOString() })),
    mistakes: mistakes.map((m) => ({ ...m, lastWrongAt: m.lastWrongAt.toISOString(), resolvedAt: m.resolvedAt?.toISOString() ?? null })),
    recentSessions: sessions.map((s) => ({ ...s, completedAt: s.completedAt?.toISOString() ?? null })),
  }

  const date = new Date().toISOString().slice(0, 10)
  return new NextResponse(JSON.stringify(payload, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Disposition': `attachment; filename="nihongogo-backup-${user.id.slice(0, 8)}-${date}.json"`,
      'Cache-Control': 'no-store',
    },
  })
})
