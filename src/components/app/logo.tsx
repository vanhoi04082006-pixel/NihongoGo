'use client'

import { cn } from '@/lib/utils'

/** Logo NihongoGo — torii + mặt trời mọc, SVG gốc (không sao chép). */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={cn('shrink-0', className)} aria-hidden="true">
      <rect x="2" y="2" width="44" height="44" rx="14" fill="var(--primary)" />
      <circle cx="24" cy="26" r="10" fill="var(--sakura)" />
      <path
        d="M10 16.5c4.5-2.2 9-3.3 14-3.3s9.5 1.1 14 3.3"
        stroke="#fff"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path d="M24 14.5v20" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M15.5 22h17" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M13 36.5c3.4-2.2 7-3.3 11-3.3s7.6 1.1 11 3.3" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" opacity="0.85" />
    </svg>
  )
}

export function LogoFull({ className, compact }: { className?: string; compact?: boolean }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5 select-none', className)}>
      <LogoMark className={compact ? 'h-8 w-8' : 'h-9 w-9'} />
      {!compact && (
        <span className="font-bold text-lg tracking-tight leading-none">
          Nihongo<span className="text-sakura">Go</span>
        </span>
      )}
    </span>
  )
}
