'use client'

import { useMemo } from 'react'
import { cn } from '@/lib/utils'
import { Flame, Heart, Zap, Mountain, Flower2, Swords, Crown, Snowflake, type LucideIcon } from 'lucide-react'
import { DynamicIcon } from './icon'

/* --------------------------- Gamification badges --------------------------- */

export function StreakBadge({ count, freezes, className }: { count: number; freezes?: number; className?: string }) {
  const active = count > 0
  const showFreezes = active && (freezes ?? 0) > 0
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-sm font-bold tabular-nums',
        active ? 'bg-warning/15 text-warning' : 'bg-muted text-muted-foreground',
        className
      )}
      title={`Chuỗi ${count} ngày${showFreezes ? ` · Bảo vệ chuỗi: ${freezes}/2` : ''}`}
    >
      <Flame className="h-4 w-4" aria-hidden />
      {count}
      {showFreezes && (
        <span
          className="inline-flex items-center gap-0.5 rounded-full bg-primary/10 text-primary px-1.5 py-0.5 text-[10px] font-bold leading-none"
          title="Bảo vệ chuỗi — mỗi cái bảo vệ 1 ngày bỏ lỡ"
        >
          <Snowflake className="h-3 w-3" aria-hidden />
          ×{freezes}
          <span className="sr-only">bảo vệ chuỗi</span>
        </span>
      )}
      <span className="sr-only">ngày streak</span>
    </span>
  )
}

export function HeartsBadge({ hearts, max, enabled, className }: { hearts: number; max: number; enabled: boolean; className?: string }) {
  return (
    <span
      className={cn('inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-sm font-bold tabular-nums', className)}
      title={enabled ? `${hearts}/${max} tim` : 'Tim đang tắt (chế độ luyện tập không giới hạn)'}
    >
      <Heart className={cn('h-4 w-4', enabled && hearts > 0 ? 'fill-destructive text-destructive' : 'text-muted-foreground')} aria-hidden />
      {enabled ? (
        <span className={hearts <= 1 ? 'text-destructive' : undefined}>
          {hearts}
          <span className="text-muted-foreground font-medium">/{max}</span>
        </span>
      ) : (
        <span className="text-muted-foreground">∞</span>
      )}
      <span className="sr-only">tim</span>
    </span>
  )
}

export function XPBadge({ xp, className, animate }: { xp: number; className?: string; animate?: boolean }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-sm font-bold tabular-nums',
        animate ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary',
        className
      )}
      title={`${xp} XP tổng`}
    >
      <Zap className="h-4 w-4" aria-hidden />
      {xp.toLocaleString('vi-VN')}
      <span className="sr-only">XP</span>
    </span>
  )
}

const LEAGUE_ICON: Record<string, LucideIcon> = { SAKURA: Flower2, FUJI: Mountain, SAMURAI: Swords, SHOGUN: Crown }
const LEAGUE_COLOR: Record<string, string> = {
  // Pattern /15 + màu chữ tường minh: tương thích cả light lẫn dark theme
  SAKURA: 'bg-sakura/15 text-sakura',
  FUJI: 'bg-primary/15 text-primary',
  SAMURAI: 'bg-warning/15 text-warning',
  SHOGUN: 'bg-success/15 text-success',
}

export function LeagueBadge({ league, className, showName }: { league: string; className?: string; showName?: boolean }) {
  const Icon = LEAGUE_ICON[league] ?? Flower2
  return (
    <span
      className={cn('inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-sm font-bold', LEAGUE_COLOR[league] ?? LEAGUE_COLOR.SAKURA, className)}
      title={`Giải ${league}`}
    >
      <Icon className="h-4 w-4" aria-hidden />
      {showName && <span className="capitalize">{league}</span>}
    </span>
  )
}

/* --------------------------------- Avatar --------------------------------- */

const AVATAR_BG: Record<string, string> = {
  sakura: 'bg-sakura/20 text-sakura',
  indigo: 'bg-primary/15 text-primary',
  matcha: 'bg-success/15 text-success',
}

export function AvatarBubble({ seed, displayName, className }: { seed: string; displayName: string; className?: string }) {
  const letter = (displayName || '?').trim().charAt(0).toUpperCase()
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full h-9 w-9 font-bold text-lg select-none',
        AVATAR_BG[seed] ?? AVATAR_BG.sakura,
        className
      )}
      aria-hidden
    >
      {letter}
    </span>
  )
}

/* ------------------------------ State blocks ------------------------------ */

export function LoadingBlock({ label = 'Đang tải…', className }: { label?: string; className?: string }) {
  return (
    <div className={cn('flex flex-col items-center justify-center gap-3 py-16 text-muted-foreground', className)} role="status">
      <div className="h-10 w-10 rounded-full border-4 border-muted border-t-primary animate-spin" />
      <p className="text-sm">{label}</p>
    </div>
  )
}

export function ErrorBlock({ message, onRetry, className }: { message: string; onRetry?: () => void; className?: string }) {
  return (
    <div className={cn('flex flex-col items-center justify-center gap-3 py-14 text-center', className)} role="alert">
      <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
        <DynamicIcon name="Sparkles" className="h-6 w-6 text-destructive" />
      </div>
      <p className="text-sm text-muted-foreground max-w-sm">{message}</p>
      {onRetry && (
        <button onClick={onRetry} className="text-sm font-semibold text-primary hover:underline focus-visible:underline outline-none">
          Thử lại
        </button>
      )}
    </div>
  )
}

export function EmptyBlock({ icon = 'Sparkles', title, description, action, className }: { icon?: string; title: string; description?: string; action?: React.ReactNode; className?: string }) {
  return (
    <div className={cn('flex flex-col items-center justify-center gap-2 py-14 text-center quick-link-in', className)}>
      <div className="relative h-14 w-14 rounded-2xl bg-muted flex items-center justify-center mb-1 ring-1 ring-inset ring-border/70">
        <span className="seigaiha absolute inset-0 rounded-2xl opacity-60" aria-hidden />
        <DynamicIcon name={icon} className="relative h-7 w-7 text-muted-foreground" />
      </div>
      <p className="font-semibold">{title}</p>
      {description && <p className="text-sm text-muted-foreground max-w-sm">{description}</p>}
      {action && <div className="mt-3">{action}</div>}
    </div>
  )
}

export function PageHeader({ title, sub, icon, actions }: { title: string; sub?: string; icon?: string; actions?: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4 flex-wrap mb-6 quick-link-in">
      <div className="flex items-center gap-3">
        {icon && (
          <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-primary/15 to-sakura/15 flex items-center justify-center ring-1 ring-inset ring-primary/10">
            <DynamicIcon name={icon} className="h-6 w-6 text-primary" />
          </div>
        )}
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">{title}</h1>
          {sub && <p className="text-sm text-muted-foreground mt-0.5">{sub}</p>}
        </div>
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  )
}

/* --------------------- Confetti (mừng hoàn thành) --------------------- */

const CONFETTI_COLORS = ['var(--primary)', 'var(--sakura)', 'var(--success)', 'var(--warning)', 'var(--destructive)']

/** Pháo giấy mừng hoàn thành — dùng chung cho lesson player + luyện tập kana. */
export function Confetti({ count = 40 }: { count?: number }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.9,
        duration: 2 + Math.random() * 1.8,
        size: 5 + Math.random() * 6,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        rotate: Math.floor(Math.random() * 360),
        round: Math.random() > 0.65,
      })),
    [count]
  )
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.round ? p.size : p.size * 0.45,
            background: p.color,
            borderRadius: p.round ? '9999px' : '2px',
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `rotate(${p.rotate}deg)`,
          }}
        />
      ))}
    </div>
  )
}
