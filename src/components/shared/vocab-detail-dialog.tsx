'use client'

/**
 * Dialog chi tiết từ vựng — dùng chung cho Vocabulary view và "Từ của ngày" ở Dashboard.
 * Hiển thị: từ + audio, nghĩa, ví dụ (2 tốc độ audio), tiến độ ghi nhớ SRS, CTA mở bài học.
 * Từ chưa có trong sổ ôn → nút "Thêm vào sổ ôn" (SrsSaveButton dùng chung, server xác thực).
 */
import { useState } from 'react'
import { BookmarkCheck, BookOpen } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { AudioButton } from '@/components/shared/audio-button'
import { SrsMemorySection, type SrsStatusInfo } from '@/components/shared/srs-ui'
import { SrsSaveButton } from '@/components/shared/srs-save-button'
import { useHashRoute } from '@/components/app/router'

export interface VocabDetailItem {
  id?: string
  term: string
  reading: string | null
  romaji: string
  meaningVi: string
  pos: string | null
  exampleJa: string
  exampleVi: string
  srs?: SrsStatusInfo | null
}

export function VocabDetailDialog({
  detail,
  onClose,
}: {
  detail: { item: VocabDetailItem; lessonSlug: string | null } | null
  onClose: () => void
}) {
  const { navigate } = useHashRoute()
  const item = detail?.item ?? null
  const srs = item?.srs
  // Kết quả lưu theo term — đổi từ không cần effect reset (state cũ vô hại)
  const [savedMap, setSavedMap] = useState<Record<string, SrsStatusInfo>>({})

  const effectiveSrs = (item && savedMap[item.term]) || srs || null

  const srsKey = effectiveSrs ? (effectiveSrs.status ?? effectiveSrs.state ?? 'NEW') : null
  const showSaveCta = !effectiveSrs || (srsKey === 'NEW' && !effectiveSrs.nextReviewAt)

  return (
    <Dialog open={!!item} onOpenChange={(open) => !open && onClose()}>
      {item && (
        <DialogContent
          className="sm:max-w-md rounded-3xl p-0 overflow-hidden gap-0 max-h-[85vh] overflow-y-auto nice-scroll"
          aria-describedby={undefined}
        >
          {/* Header gradient */}
          <div className="relative bg-gradient-to-br from-primary/10 via-card to-sakura/15 px-6 pt-6 pb-5">
            <DialogHeader className="space-y-1.5">
              <DialogTitle className="flex items-start justify-between gap-3">
                <span className="jp jp-serif text-3xl font-bold leading-tight break-words">{item.term}</span>
                <AudioButton text={item.term} size="md" labelSlow />
              </DialogTitle>
              <DialogDescription className="text-sm">
                {item.reading ? <span className="jp mr-1.5">{item.reading}</span> : null}
                <span className="font-medium">{item.romaji}</span>
                {item.pos ? <Badge variant="secondary" className="ml-2 h-5 px-2 text-[10px] align-middle">{item.pos}</Badge> : null}
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="px-6 pb-6 space-y-5">
            {/* Nghĩa */}
            <section aria-label="Nghĩa của từ">
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">Nghĩa</p>
              <p className="text-base font-semibold leading-snug">{item.meaningVi}</p>
            </section>

            {/* Ví dụ */}
            {item.exampleJa ? (
              <section aria-label="Câu ví dụ">
                <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Ví dụ</p>
                <div className="rounded-2xl border bg-muted/30 px-4 py-3">
                  <div className="flex items-start justify-between gap-2">
                    <p className="jp text-sm leading-relaxed break-words">{item.exampleJa}</p>
                    <AudioButton text={item.exampleJa} size="sm" labelSlow />
                  </div>
                  <p className="text-xs text-muted-foreground leading-snug mt-1.5">{item.exampleVi}</p>
                </div>
              </section>
            ) : null}

            {/* Tiến độ ghi nhớ SRS */}
            <SrsMemorySection
              srs={effectiveSrs}
              emptyText={
                item && savedMap[item.term]
                  ? 'Đã lưu vào sổ ôn — chưa luyện lần nào. Mở tab Ôn tập để bắt đầu ghi nhớ!'
                  : 'Từ này chưa có trong lịch ôn — lưu vào sổ ôn để thuật toán lặp lại ngắt quãng nhắc bạn đúng lúc nhé!'
              }
            />

            {/* CTA lưu vào sổ ôn (chỉ khi chưa theo dõi) */}
            {showSaveCta ? (
              <SrsSaveButton
                itemType="VOCAB"
                itemKey={item.term}
                invalidateKeys={['review', 'overview', 'vocabulary']}
                onSaved={(res) => item && setSavedMap((m) => ({ ...m, [item.term]: res }))}
                className="w-full rounded-xl"
              />
            ) : savedMap[item?.term ?? ''] ? (
              <p className="flex items-center justify-center gap-1.5 text-xs font-semibold text-success" role="status">
                <BookmarkCheck className="h-4 w-4" aria-hidden />
                Đã nằm trong sổ ôn — mở tab Ôn tập để luyện ngay
              </p>
            ) : null}

            {/* CTA mở bài học chứa từ */}
            {detail?.lessonSlug ? (
              <Button
                variant="outline"
                className="w-full rounded-xl"
                onClick={() => {
                  onClose()
                  navigate(`/lessons/${detail.lessonSlug}`)
                }}
              >
                <BookOpen className="h-4 w-4" aria-hidden />
                Học bài chứa từ này
              </Button>
            ) : null}
          </div>
        </DialogContent>
      )}
    </Dialog>
  )
}
