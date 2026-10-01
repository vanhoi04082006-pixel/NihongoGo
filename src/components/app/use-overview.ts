'use client'

import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/client/api'
import type { QuestView } from '@/types/gamification'

export interface OverviewDTO {
  user: {
    id: string
    username: string
    displayName: string
    avatarSeed: string
    role: string
    onboarded: boolean
    dailyGoalXP: number
  }
  stats: {
    totalXP: number
    weeklyXP: number
    lessonsCompleted: number
    league: string
  }
  streak: {
    currentStreak: number
    longestStreak: number
    todayXP: number
    dailyGoalXP: number
    goalMetToday: boolean
    freezeCount: number
    freezeMax: number
  }
  streakWeek: { date: string; met: boolean; xp: number }[]
  hearts: { enabled: boolean; hearts: number; maxHearts: number; nextHeartInMs: number | null }
  quests: QuestView[]
  review: {
    dueCount: number
    totalItems: number
    newCount: number
    mistakeStats: { total: number; unresolved: number }
  }
}

export function useOverview() {
  return useQuery({
    queryKey: ['overview'],
    queryFn: () => api<OverviewDTO>('/api/overview'),
    staleTime: 15_000,
  })
}
