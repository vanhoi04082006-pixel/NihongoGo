'use client'

import { useState } from 'react'
import { Volume2, X } from 'lucide-react'
import { useJapaneseVoice } from '@/components/shared/audio-button'
import { cn } from '@/lib/utils'

const LS_KEY = 'ngg:voice-hint-dismissed'

/**
 * Đọc localStorage trong try/catch ở render — không dùng setState trong effect
 * (tránh cascading render). Giá trị chỉ đọc 1 lần mỗi mount nên không cần state.
 */
function readDismissed(): boolean {
  if (typeof window === 'undefined') return true
  try {
    return localStorage.getItem(LS_KEY) === '1'
  } catch {
    return false // localStorage bị chặn → cứ hiện banner
  }
}

/**
 * Bảng cảnh báo khi trình duyệt KHÔNG có giọng đọc tiếng Nhật.
 *
 * Vì sao cần: phần lớn máy Windows và nhiều máy macOS không có sẵn giọng Nhật.
 * Người học bấm nút loa → không ra tiếng → tưởng app lỗi. Bảng này nói rõ nguyên nhân
 * và cách khắc phục (cài giọng Nhật hoàn toàn miễn phí của hệ điều hành).
 *
 * Chỉ hiện 1 lần cho tới khi người dùng đóng, lưu trạng thái ở localStorage.
 */
export function JapaneseVoiceNotice({ className }: { className?: string }) {
  const has = useJapaneseVoice()
  const [dismissed, setDismissed] = useState(readDismissed)
  // Lazy initializer: đọc navigator một lần, không setState trong effect.
  // An toàn hydration vì `has` luôn null ở render đầu ⇒ component trả null ở cả 2 bên.
  const [isMac] = useState(
    () => typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent),
  )

  // has === null nghĩa là đang kiểm tra, chưa kết luận được.
  if (has !== false || dismissed) return null

  const dismiss = () => {
    setDismissed(true)
    try {
      localStorage.setItem(LS_KEY, '1')
    } catch {
      /* bỏ qua */
    }
  }

  return (
    <div
      role="status"
      className={cn(
        'flex items-start gap-3 rounded-2xl border border-warning/40 bg-warning/10 px-4 py-3',
        className,
      )}
    >
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-warning/20">
        <Volume2 className="h-4 w-4 text-warning" aria-hidden />
      </span>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold">Thiết bị này chưa có giọng đọc tiếng Nhật</p>
        <p className="mt-0.5 text-sm text-muted-foreground">
          Bài nghe và luyện nói sẽ không phát ra tiếng. Cài giọng Nhật (miễn phí) để nghe và
          nói chuẩn:
        </p>
        <ul className="mt-1.5 space-y-0.5 text-sm text-muted-foreground">
          {isMac ? (
            <>
              <li>
                <b className="text-foreground">macOS/iOS:</b> Cài đặt → Ngôn ngữ &amp; Vùng →
                Giọng nói → Tiếng Nhật → Tải giọng
              </li>
            </>
          ) : (
            <>
              <li>
                <b className="text-foreground">Windows:</b> Cài đặt → Thời gian &amp; ngôn ngữ →
                Ngôn ngữ → Thêm <b>日本語 (Japanese)</b> → tuỳ chọn «Giọng nói»
              </li>
              <li>
                <b className="text-foreground">Android:</b> Cài đặt → Hệ thống → Ngôn ngữ và
                ngữ cảnh đầu vào → Nhật Bản → Tải giọng TTS
              </li>
            </>
          )}
          <li>
            <b className="text-foreground">Sau khi cài:</b> mở lại trình duyệt, vào
            <code className="mx-1 rounded bg-muted px-1 py-0.5 text-xs">chrome://settings/languages</code>
            rồi tải lại trang.
          </li>
        </ul>
      </div>

      <button
        type="button"
        onClick={dismiss}
        aria-label="Đóng thông báo giọng đọc tiếng Nhật"
        className="shrink-0 rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-warning/15 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <X className="h-4 w-4" aria-hidden />
      </button>
    </div>
  )
}