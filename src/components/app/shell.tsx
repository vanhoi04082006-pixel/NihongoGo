'use client'

import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import { BookOpen, BookMarked, BookText, Languages, PenLine, RefreshCw, Search, Trophy, Target, Award, User, Settings, Shield, Moon, Sun, LogOut } from 'lucide-react'
import { useHashRoute } from './router'
import { useAuth, useAuthActions } from './use-auth'
import { useOverview } from './use-overview'
import { LogoFull } from './logo'
import { StreakBadge, HeartsBadge, XPBadge, AvatarBubble, LoadingBlock } from '@/components/shared/widgets'
import { DynamicIcon } from '@/components/shared/icon'
import { CommandPalette, SearchTrigger, useCommandPalette } from './command-palette'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

const NAV_ITEMS = [
  { path: '/', label: 'Học', icon: BookOpen, match: (p: string) => p === '/' || p.startsWith('/learn') },
  { path: '/kana', label: 'Kana', icon: Languages, match: (p: string) => p.startsWith('/kana') },
  { path: '/kanji', label: 'Kanji', icon: BookText, match: (p: string) => p.startsWith('/kanji') },
  { path: '/vocabulary', label: 'Từ vựng', icon: BookMarked, match: (p: string) => p.startsWith('/vocabulary') },
  { path: '/grammar', label: 'Ngữ pháp', icon: PenLine, match: (p: string) => p.startsWith('/grammar') },
  { path: '/review', label: 'Ôn tập', icon: RefreshCw, match: (p: string) => p.startsWith('/review') },
  { path: '/leaderboard', label: 'Xếp hạng', icon: Trophy, match: (p: string) => p.startsWith('/leaderboard') },
  { path: '/quests', label: 'Nhiệm vụ', icon: Target, match: (p: string) => p.startsWith('/quests') },
  { path: '/achievements', label: 'Thành tích', icon: Award, match: (p: string) => p.startsWith('/achievements') },
  { path: '/profile', label: 'Hồ sơ', icon: User, match: (p: string) => p.startsWith('/profile') },
]

/* --------------------------------- Sidebar -------------------------------- */

export function Sidebar() {
  const { path, navigate } = useHashRoute()
  const { data: user } = useAuth()
  return (
    <aside className="hidden lg:flex flex-col w-60 xl:w-64 shrink-0 border-r bg-sidebar h-screen sticky top-0">
      <button
        className="flex items-center px-5 h-16 border-b border-sidebar-border outline-none focus-visible:bg-sidebar-accent transition-colors"
        onClick={() => navigate('/')}
        aria-label="NihongoGo — trang chủ"
      >
        <LogoFull />
      </button>
      <nav className="flex-1 p-3 space-y-1 nice-scroll overflow-y-auto" aria-label="Điều hướng chính">
        {NAV_ITEMS.map((item) => {
          const active = item.match(path)
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                'w-full flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring',
                active ? 'bg-primary text-primary-foreground shadow-sm' : 'text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground'
              )}
              aria-current={active ? 'page' : undefined}
            >
              <item.icon className="h-5 w-5 shrink-0" aria-hidden />
              {item.label}
            </button>
          )
        })}
        {user?.role === 'ADMIN' || user?.role === 'EDITOR' ? (
          <button
            onClick={() => navigate('/admin')}
            className={cn(
              'w-full flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring',
              path.startsWith('/admin') ? 'bg-sakura text-sakura-foreground shadow-sm' : 'text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground'
            )}
          >
            <Shield className="h-5 w-5 shrink-0" aria-hidden />
            Quản trị
          </button>
        ) : null}
      </nav>
      <div className="p-4 border-t border-sidebar-border">
        <p className="text-[11px] leading-relaxed text-muted-foreground">
          NihongoGo — học tiếng Nhật mỗi ngày. Nội dung học do đội ngũ biên soạn gốc.
        </p>
      </div>
    </aside>
  )
}

/* ---------------------------------- TopBar -------------------------------- */

export function TopBar({ onOpenSearch }: { onOpenSearch: () => void }) {
  const { navigate } = useHashRoute()
  const { data: user } = useAuth()
  const { data: overview, isLoading } = useOverview()
  const { logout } = useAuthActions(useHashRoute())
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-30 bg-background/85 backdrop-blur border-b">
      <div className="flex items-center gap-2 sm:gap-4 h-14 sm:h-16 px-3 sm:px-6">
        <button className="lg:hidden flex items-center outline-none" onClick={() => navigate('/')} aria-label="Trang chủ">
          <LogoFull compact />
        </button>
        <div className="lg:hidden hidden sm:block font-bold text-lg tracking-tight">
          Nihongo<span className="text-sakura">Go</span>
        </div>

        <SearchTrigger onClick={onOpenSearch} />
        <button
          onClick={onOpenSearch}
          className="sm:hidden inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Tìm kiếm"
        >
          <Search className="h-4.5 w-4.5" aria-hidden />
        </button>

        <div className="flex-1" />

        {isLoading ? (
          <div className="h-8 w-40 rounded-full shimmer" />
        ) : overview ? (
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button onClick={() => navigate('/profile')} className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label="Xem chuỗi ngày học">
              <StreakBadge count={overview.streak.currentStreak} freezes={overview.streak.freezeCount} />
            </button>
            <button onClick={() => navigate('/profile')} className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring hidden sm:inline-flex" aria-label="Xem XP">
              <XPBadge xp={overview.stats.totalXP} />
            </button>
            <button onClick={() => navigate('/profile')} className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label="Xem tim">
              <HeartsBadge hearts={overview.hearts.hearts} max={overview.hearts.maxHearts} enabled={overview.hearts.enabled} />
            </button>
          </div>
        ) : null}

        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={theme === 'dark' ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
        >
          {theme === 'dark' ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label="Menu tài khoản">
              <AvatarBubble seed={overview?.user.avatarSeed ?? 'sakura'} displayName={overview?.user.displayName ?? user?.username ?? '?'} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col">
                <span className="font-semibold">{overview?.user.displayName ?? user?.username}</span>
                <span className="text-xs text-muted-foreground font-normal">@{user?.username}</span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate('/profile')}>
              <User className="h-4 w-4" /> Hồ sơ
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/settings')}>
              <Settings className="h-4 w-4" /> Cài đặt
            </DropdownMenuItem>
            {(user?.role === 'ADMIN' || user?.role === 'EDITOR') && (
              <DropdownMenuItem onClick={() => navigate('/admin')}>
                <Shield className="h-4 w-4" /> Quản trị
              </DropdownMenuItem>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => logout.mutate()}>
              <LogOut className="h-4 w-4" /> Đăng xuất
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

/* -------------------------------- BottomNav ------------------------------- */

export function BottomNav() {
  const { path, navigate } = useHashRoute()
  const items = NAV_ITEMS.filter((i) => ['/profile', '/', '/kana', '/review', '/quests'].includes(i.path))
  return (
    <nav
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur border-t pb-[env(safe-area-inset-bottom)]"
      aria-label="Điều hướng chính di động"
    >
      <div className="grid grid-cols-5 h-16">
        {items.map((item) => {
          const active = item.match(path)
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                'flex flex-col items-center justify-center gap-0.5 text-[10px] font-semibold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg m-1',
                active ? 'text-primary' : 'text-muted-foreground'
              )}
              aria-current={active ? 'page' : undefined}
            >
              <item.icon className={cn('h-5 w-5', active && 'scale-110 transition-transform')} aria-hidden />
              {item.label}
            </button>
          )
        })}
      </div>
    </nav>
  )
}

/* --------------------------------- Footer --------------------------------- */

export function AppFooter() {
  const { navigate } = useHashRoute()
  return (
    <footer className="mt-auto border-t bg-card/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <LogoFull compact />
          <span>NihongoGo — học tiếng Nhật cùng niềm vui</span>
        </div>
        <nav className="flex items-center gap-4" aria-label="Liên kết nhanh">
          <button onClick={() => navigate('/kana')} className="hover:text-foreground transition-colors">Kana</button>
          <button onClick={() => navigate('/kanji')} className="hover:text-foreground transition-colors">Kanji</button>
          <button onClick={() => navigate('/vocabulary')} className="hover:text-foreground transition-colors">Từ vựng</button>
          <button onClick={() => navigate('/grammar')} className="hover:text-foreground transition-colors">Ngữ pháp</button>
          <button onClick={() => navigate('/leaderboard')} className="hover:text-foreground transition-colors">Xếp hạng</button>
          <button onClick={() => navigate('/achievements')} className="hover:text-foreground transition-colors">Thành tích</button>
        </nav>
      </div>
    </footer>
  )
}

/* --------------------------------- Shell ---------------------------------- */

export function AppShell({ children, wide }: { children: React.ReactNode; wide?: boolean }) {
  const { open, setOpen } = useCommandPalette()
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar onOpenSearch={() => setOpen(true)} />
        <main className={cn('flex-1 w-full mx-auto px-3 sm:px-6 py-6 pb-20 lg:pb-6', wide ? 'max-w-6xl' : 'max-w-4xl')}>
          {children}
        </main>
        <div className="hidden lg:block w-full">
          <AppFooter />
        </div>
      </div>
      <BottomNav />
      <CommandPalette open={open} setOpen={setOpen} />
    </div>
  )
}

export { LoadingBlock }
