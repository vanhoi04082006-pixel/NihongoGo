'use client'

/**
 * Nút "Thêm vào sổ ôn tập" dùng chung cho 4 loại nội dung (VOCAB / GRAMMAR /
 * KANJI / KANA) — gọi POST /api/srs/save (server xác thực + idempotent),
 * toast kết quả và invalidate các query liên quan để số liệu sổ ôn tự cập nhật.
 * Đã lưu → hiển thị dòng xác nhận (nếu có savedText) thay vì nút.
 */
import { useState } from 'react'
import { BookmarkCheck, BookmarkPlus, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { useQueryClient } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import { api } from '@/lib/client/api'
import type { SrsStatusInfo } from '@/components/shared/srs-ui'

export type SrsItemType = 'VOCAB' | 'GRAMMAR' | 'KANJI' | 'KANA'

interface SavedResult extends SrsStatusInfo {
  itemType: string
  itemKey: string
}

export function SrsSaveButton({
  itemType,
  itemKey,
  invalidateKeys = ['review', 'overview'],
  savedText,
  label = 'Thêm vào sổ ôn tập',
  className,
  onSaved,
}: {
  itemType: SrsItemType
  itemKey: string
  /** Query keys cần làm mới sau khi lưu (mặc định: sổ ôn + dashboard). */
  invalidateKeys?: string[]
  /** Khi đã lưu: hiện dòng xác nhận này thay vì nút (bỏ qua nếu không truyền). */
  savedText?: string
  label?: string
  className?: string
  onSaved?: (res: SavedResult) => void
}) {
  const queryClient = useQueryClient()
  const [saved, setSaved] = useState(false)
  const [saving, setSaving] = useState(false)

  const save = async () => {
    setSaving(true)
    try {
      const res = await api<SavedResult>('/api/srs/save', {
        method: 'POST',
        json: { itemType, itemKey },
      })
      setSaved(true)
      toast.success(`Đã thêm “${itemKey}” vào sổ ôn tập`, {
        description: 'Mục này sẽ xuất hiện trong hàng đợi Ôn tập hôm nay.',
        duration: 5000,
      })
      for (const key of invalidateKeys) {
        void queryClient.invalidateQueries({ queryKey: [key] })
      }
      onSaved?.(res)
    } catch {
      toast.error('Chưa lưu được vào sổ ôn — thử lại sau nhé!')
    } finally {
      setSaving(false)
    }
  }

  if (saved && savedText) {
    return (
      <p className={className} role="status">
        <span className="flex items-center justify-center gap-1.5 text-xs font-semibold text-success">
          <BookmarkCheck className="h-4 w-4" aria-hidden />
          {savedText}
        </span>
      </p>
    )
  }

  return (
    <Button variant="outline" className={className} onClick={save} disabled={saving}>
      {saving ? (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
      ) : (
        <BookmarkPlus className="h-4 w-4" aria-hidden />
      )}
      {saving ? 'Đang lưu…' : label}
    </Button>
  )
}
