'use client'

import { useEffect } from 'react'

/**
 * Đăng ký service worker (PWA: offline + cài đặt lên màn hình chính).
 * Im lặng bỏ qua nếu trình duyệt không hỗ trợ hoặc đăng ký lỗi —
 * không bao giờ ảnh hưởng trải nghiệm chính.
 */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!('serviceWorker' in navigator)) return
    // Chỉ đăng ký khi trang đã tải xong để không cản trở lần render đầu
    const onLoad = () => {
      navigator.serviceWorker
        .register('/sw.js', { scope: '/' })
        .catch(() => {
          /* bỏ qua — môi trường không hỗ trợ hoặc lỗi mạng */
        })
    }
    if (document.readyState === 'complete') onLoad()
    else window.addEventListener('load', onLoad, { once: true })
    return () => window.removeEventListener('load', onLoad)
  }, [])
  return null
}
