'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** trễ (giây) cho hiệu ứng so le */
  delay?: number
  className?: string
  /** khoảng cách trượt px */
  y?: number
  as?: 'div' | 'li' | 'section' | 'article'
}

/**
 * Hiệu ứng "fade-up" khi cuộn tới — an toàn cho production.
 *
 * VÌ SAO KHÔNG DÙNG `whileInView` TRẦN:
 *   `initial={{opacity:0}}` + `whileInView` render sẵn inline `opacity:0`.
 *   Nếu IntersectionObserver không chạy (JS lỗi/tắt, trình duyệt cũ, anchor mở
 *   thẳng giữa trang, service worker trả shell cũ…) thì nội dung **vô hình vĩnh
 *   viễn** và crawler cũng không đọc được. Đó là mất nội dung thật.
 *
 * CÁCH SỬA Ở ĐÂY:
 *   1. Chỉ ẩn khi thực sự có khả năng quan sát (client + có IO + user không yêu
 *      cầu giảm chuyển động). SSR / JS tắt ⇒ nội dung hiện sẵn.
 *   2. `IntersectionObserver` tự bắn callback đầu tiên ngay sau `observe()`
 *      kể cả khi phần tử đã nằm trong viewport → không cần nhánh "đã thấy" riêng.
 *   3. Lưới an toàn 2.6s: quá hạn mà chưa hiện thì ép hiện. Nội dung quan trọng
 *      hơn hiệu ứng — animation hỏng không được phép làm mất nội dung.
 *   4. setState chỉ nằm trong callback bất đồng bộ (IO / timeout) để không gây
 *      cascading render.
 */
export function Reveal({ children, delay = 0, className, y = 22, as = 'div' }: RevealProps) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  // Chỉ chạy hiệu ứng khi client + có IO + không bật reduced-motion.
  // Ở SSR `IntersectionObserver` không tồn tại ⇒ canObserve=false ⇒ nội dung hiện.
  const canObserve = typeof IntersectionObserver !== 'undefined' && !reduce

  useEffect(() => {
    if (!canObserve) return
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
    )
    io.observe(el)

    const t = setTimeout(() => {
      setShown(true)
      io.disconnect()
    }, 2600)

    return () => {
      io.disconnect()
      clearTimeout(t)
    }
  }, [canObserve])

  const MotionTag = motion[as] as typeof motion.div
  const hidden = canObserve && !shown

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={false}
      animate={hidden ? { opacity: 0, y } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: hidden ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}