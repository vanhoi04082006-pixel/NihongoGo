'use client'

import { useSyncExternalStore } from 'react'
import { AppProviders } from './providers'
import { useHashRoute } from './router'
import { useAuth } from './use-auth'
import { AppShell } from './shell'
import { LogoMark } from './logo'
import { LandingView } from '@/components/views/landing'
import { AuthView } from '@/components/views/auth'
import { OnboardingView } from '@/components/views/onboarding'
import { LearnView } from '@/components/views/learn'
import { LessonDetailView } from '@/components/views/lesson-detail'
import { LessonPlayerView } from '@/components/views/lesson-player'
import { KanaView } from '@/components/views/kana'
import { KanjiView } from '@/components/views/kanji'
import { VocabularyView } from '@/components/views/vocabulary'
import { GrammarView } from '@/components/views/grammar'
import { ReviewView } from '@/components/views/review'
import { LeaderboardView } from '@/components/views/leaderboard'
import { QuestsView } from '@/components/views/quests'
import { AchievementsView } from '@/components/views/achievements'
import { ProfileView } from '@/components/views/profile'
import { SettingsView } from '@/components/views/settings'
import { AdminView } from '@/components/views/admin'
import { EmptyBlock } from '@/components/shared/widgets'
import { Button } from '@/components/ui/button'

function Splash() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-background">
      <div className="animate-pulse">
        <LogoMark className="h-16 w-16" />
      </div>
      <p className="text-sm text-muted-foreground font-semibold tracking-wide">NIHONGOGO</p>
    </div>
  )
}

const emptySubscribe = () => () => {}

function Router() {
  const { path, segments, navigate } = useHashRoute()
  const { data: user, isLoading } = useAuth()
  // Tránh hydration mismatch: false khi SSR, true ngay sau khi hydrate
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false)

  if (!mounted || isLoading) return <Splash />

  // Chưa đăng nhập: landing / auth
  if (!user) {
    if (segments[0] === 'login' || segments[0] === 'register') {
      return <AuthView mode={segments[0] === 'register' ? 'register' : 'login'} />
    }
    return <LandingView />
  }

  // Chưa onboarding (trừ khi đang ở màn onboarding)
  if (!user.profile?.onboardedAt) {
    return <OnboardingView />
  }

  const head = segments[0] ?? ''

  // Lesson player: fullscreen, không shell
  if (head === 'lesson' && segments[1]) {
    return <LessonPlayerView nodeId={segments[1]} mode={segments[2] === 'practice' ? 'PRACTICE' : 'LESSON'} preview={segments[2] === 'preview'} />
  }

  // Review/mistake session player
  if (head === 'session' && (segments[1] === 'review' || segments[1] === 'mistakes')) {
    return <LessonPlayerView source={segments[1]} mode="PRACTICE" />
  }

  // Jump (kiểm tra bỏ qua tới bài học): #/jump/:lessonId
  if (head === 'jump' && segments[1]) {
    return <LessonPlayerView nodeId={segments[1]} mode="PRACTICE" source="jump" />
  }

  switch (head) {
    case '':
    case 'learn':
      return (
        <AppShell>
          <LearnView />
        </AppShell>
      )
    case 'lessons':
      return (
        <AppShell>
          <LessonDetailView lessonId={segments[1] ?? ''} />
        </AppShell>
      )
    case 'kana':
      return (
        <AppShell wide>
          <KanaView tab={segments[1] ?? 'hiragana'} charId={segments[2] ?? null} />
        </AppShell>
      )
    case 'kanji':
      return (
        <AppShell wide>
          <KanjiView character={segments[1] ? decodeURIComponent(segments[1]) : null} />
        </AppShell>
      )
    case 'vocabulary':
      return (
        <AppShell wide>
          <VocabularyView />
        </AppShell>
      )
    case 'grammar':
      return (
        <AppShell wide>
          <GrammarView />
        </AppShell>
      )
    case 'review':
      return (
        <AppShell>
          <ReviewView initialTab={segments[1] === 'mistakes' ? 'mistakes' : 'srs'} />
        </AppShell>
      )
    case 'leaderboard':
      return (
        <AppShell>
          <LeaderboardView />
        </AppShell>
      )
    case 'quests':
      return (
        <AppShell>
          <QuestsView />
        </AppShell>
      )
    case 'achievements':
      return (
        <AppShell wide>
          <AchievementsView />
        </AppShell>
      )
    case 'profile':
      return (
        <AppShell wide>
          <ProfileView />
        </AppShell>
      )
    case 'settings':
      return (
        <AppShell>
          <SettingsView />
        </AppShell>
      )
    case 'admin':
      if (user.role !== 'ADMIN' && user.role !== 'EDITOR') {
        return (
          <AppShell>
            <EmptyBlock
              icon="Trophy"
              title="Không có quyền truy cập"
              description="Khu vực quản trị chỉ dành cho EDITOR và ADMIN."
              action={<Button onClick={() => navigate('/')}>Về trang chủ</Button>}
            />
          </AppShell>
        )
      }
      return <AdminView section={segments[1] ?? 'dashboard'} />
    default:
      return (
        <AppShell>
          <EmptyBlock
            icon="Sparkles"
            title={`Không tìm thấy trang "${path}"`}
            description="Đường dẫn bạn mở không tồn tại hoặc đã bị di chuyển."
            action={<Button onClick={() => navigate('/')}>Về trang chủ</Button>}
          />
        </AppShell>
      )
  }
}

export function AppRoot() {
  return (
    <AppProviders>
      <Router />
    </AppProviders>
  )
}
