'use client'

import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { api } from '@/lib/client/api'
import { useOverview } from '@/components/app/use-overview'
import { LoadingBlock, ErrorBlock, PageHeader, EmptyBlock } from '@/components/shared/widgets'
import { DynamicIcon } from '@/components/shared/icon'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { CheckCircle2, Flame, Timer, Zap } from 'lucide-react'

export function QuestsView() {
  const { data, isLoading, error, refetch } = useOverview()

  if (isLoading) return <LoadingBlock label="Đang tải nhiệm vụ…" />
  if (error || !data) return <ErrorBlock message="Không tải được nhiệm vụ hôm nay." onRetry={() => refetch()} />

  const quests = data.quests
  const completed = quests.filter((q) => q.completed).length
  const allDone = quests.length > 0 && completed === quests.length
  const totalReward = quests.reduce((s, q) => s + q.rewardXP, 0)
  const earnedReward = quests.filter((q) => q.completed).reduce((s, q) => s + q.rewardXP, 0)
  const pctOverall = quests.length > 0 ? (completed / quests.length) * 100 : 0

  return (
    <div>
      <PageHeader
        icon="Target"
        title="Nhiệm vụ hằng ngày"
        sub={`Làm mới mỗi ngày theo giờ của bạn · đã hoàn thành ${completed}/${quests.length}`}
      />

      {quests.length === 0 ? (
        <EmptyBlock icon="Target" title="Hôm nay chưa có nhiệm vụ" description="Bấm thử lại để hệ thống sinh nhiệm vụ mới." />
      ) : (
        <>
          {/* Banner tổng tiến độ hôm nay */}
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              'mb-5 max-w-2xl rounded-3xl border-2 p-5 flex items-center gap-5',
              allDone ? 'border-success/50 bg-success/[0.07]' : 'border-primary/20 bg-gradient-to-r from-primary/[0.06] to-card',
            )}
            aria-label="Tiến độ nhiệm vụ hôm nay"
          >
            <div className="relative shrink-0" style={{ width: 84, height: 84 }}>
              <svg width={84} height={84} className="-rotate-90" aria-hidden>
                <circle cx={42} cy={42} r={37} fill="none" strokeWidth={9} className="stroke-muted" />
                <circle
                  cx={42}
                  cy={42}
                  r={37}
                  fill="none"
                  strokeWidth={9}
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 37}
                  strokeDashoffset={2 * Math.PI * 37 * (1 - pctOverall / 100)}
                  className={cn('transition-[stroke-dashoffset] duration-700', allDone ? 'stroke-success' : 'stroke-primary')}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl font-extrabold tabular-nums leading-none">{completed}/{quests.length}</span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground mt-0.5">nhiệm vụ</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-extrabold text-lg leading-tight">
                {allDone ? 'Tuyệt vời — hoàn thành tất cả! すごい!' : 'Hoàn thành nhiệm vụ để nhận XP thưởng'}
              </h2>
              <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1.5 flex-wrap">
                <span className="inline-flex items-center gap-1 font-bold text-sakura">
                  <Zap className="h-3.5 w-3.5" aria-hidden /> {earnedReward}/{totalReward} XP
                </span>
                {' · '}
                <span className="inline-flex items-center gap-1">
                  <Timer className="h-3.5 w-3.5" aria-hidden /> làm mới lúc nửa đêm (giờ của bạn)
                </span>
              </p>
              {allDone && data.streak.goalMetToday && (
                <p className="text-xs font-bold text-success mt-1.5 inline-flex items-center gap-1">
                  <Flame className="h-3.5 w-3.5" aria-hidden /> Mục tiêu XP hôm nay cũng đã đạt — chuỗi an toàn!
                </p>
              )}
            </div>
          </motion.section>

          <div className="space-y-3 max-w-2xl">
            {quests.map((q, i) => {
              const pct = Math.min(100, (q.progress / q.target) * 100)
              return (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className={cn(
                    'rounded-2xl border-2 p-4 sm:p-5 transition-all hover:shadow-md hover:-translate-y-0.5',
                    q.completed ? 'border-success/50 bg-success/5' : 'border-border bg-card hover:border-primary/30',
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        'h-12 w-12 rounded-2xl flex items-center justify-center shrink-0',
                        q.completed ? 'bg-success text-white shadow-sm shadow-success/30' : 'bg-primary/10 text-primary',
                      )}
                    >
                      {q.completed ? <CheckCircle2 className="h-6 w-6" aria-hidden /> : <DynamicIcon name={q.icon} className="h-6 w-6" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <p className={cn('font-bold', q.completed && 'text-success line-through')}>{q.title}</p>
                        <span
                          className={cn(
                            'text-xs font-bold shrink-0 rounded-full px-2 py-0.5',
                            q.completed ? 'bg-success/15 text-success' : 'text-sakura bg-sakura/10',
                          )}
                        >
                          {q.completed ? '+' : ''}
                          {q.rewardXP} XP
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{q.description}</p>
                      <div className="flex items-center gap-3">
                        <Progress value={pct} className="h-2 flex-1" aria-label={`Tiến độ ${q.title}: ${q.progress}/${q.target}`} />
                        <span className="text-xs font-bold tabular-nums text-muted-foreground shrink-0">
                          {q.progress}/{q.target}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </>
      )}

      <div className="mt-8 rounded-2xl border border-dashed bg-muted/30 p-4 text-sm text-muted-foreground max-w-2xl">
        <p className="font-semibold text-foreground mb-1">Nhiệm vụ hoạt động thế nào?</p>
        <p className="leading-relaxed">
          Mỗi ngày hệ thống chọn 3 nhiệm vụ ngẫu nhiên (nhưng cố định theo tài khoản) từ kho mẫu. Tiến độ tự động cập nhật
          khi bạn học — đúng câu, hoàn thành ải, kiếm XP, luyện nghe… Hoàn thành để nhận thưởng XP ngay lập tức.
        </p>
      </div>
    </div>
  )
}
