'use client'

import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/client/api'
import { useOverview } from '@/components/app/use-overview'
import { LoadingBlock, ErrorBlock, PageHeader, EmptyBlock } from '@/components/shared/widgets'
import { DynamicIcon } from '@/components/shared/icon'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { CheckCircle2 } from 'lucide-react'

export function QuestsView() {
  const { data, isLoading, error, refetch } = useOverview()

  if (isLoading) return <LoadingBlock label="Đang tải nhiệm vụ…" />
  if (error || !data) return <ErrorBlock message="Không tải được nhiệm vụ hôm nay." onRetry={() => refetch()} />

  const quests = data.quests
  const completed = quests.filter((q) => q.completed).length

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
        <div className="space-y-3 max-w-2xl">
          {quests.map((q) => {
            const pct = Math.min(100, (q.progress / q.target) * 100)
            return (
              <div
                key={q.id}
                className={cn(
                  'rounded-2xl border-2 p-4 sm:p-5 transition-all hover:shadow-md hover:-translate-y-0.5',
                  q.completed ? 'border-success/50 bg-success/5' : 'border-border bg-card hover:border-primary/30'
                )}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      'h-12 w-12 rounded-2xl flex items-center justify-center shrink-0',
                      q.completed ? 'bg-success text-white' : 'bg-primary/10 text-primary'
                    )}
                  >
                    {q.completed ? <CheckCircle2 className="h-6 w-6" aria-hidden /> : <DynamicIcon name={q.icon} className="h-6 w-6" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <p className={cn('font-bold', q.completed && 'text-success line-through')}>{q.title}</p>
                      <span className="text-xs font-bold text-sakura shrink-0">+{q.rewardXP} XP</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{q.description}</p>
                    <div className="flex items-center gap-3">
                      <Progress value={pct} className="h-2 flex-1" />
                      <span className="text-xs font-bold tabular-nums text-muted-foreground shrink-0">
                        {q.progress}/{q.target}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
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
