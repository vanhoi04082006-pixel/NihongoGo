'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib/client/api'
import type { RouteState } from './router'

export interface AuthUserDTO {
  id: string
  email: string
  username: string
  role: string
  profile: {
    displayName: string
    onboardedAt: string | null
    dailyGoalXP: number
    timezone: string
    goal: string | null
    kanaKnowledge: string
    level: string
  } | null
  settings: {
    theme: string
    soundEnabled: boolean
    romajiDisplay: boolean
    autoSpeak: boolean
    reducedMotion: boolean
  } | null
}

export function useAuth() {
  return useQuery({
    queryKey: ['auth'],
    queryFn: () => api<{ user: AuthUserDTO | null }>('/api/auth/me'),
    staleTime: 60_000,
    select: (d) => d.user,
  })
}

export function useAuthActions(router?: Pick<RouteState, 'navigate'>) {
  const qc = useQueryClient()
  const invalidate = () => {
    qc.invalidateQueries({ queryKey: ['auth'] })
    qc.invalidateQueries({ queryKey: ['overview'] })
  }

  const login = useMutation({
    mutationFn: (input: { email: string; password: string }) =>
      api<{ user: AuthUserDTO }>('/api/auth/login', { method: 'POST', json: input }),
    onSuccess: () => {
      invalidate()
      router?.navigate('/')
    },
  })

  const register = useMutation({
    mutationFn: (input: { email: string; username: string; password: string; displayName?: string }) =>
      api<{ user: AuthUserDTO }>('/api/auth/register', { method: 'POST', json: input }),
    onSuccess: () => {
      invalidate()
      router?.navigate('/onboarding')
    },
  })

  const logout = useMutation({
    mutationFn: () => api<{ ok: true }>('/api/auth/logout', { method: 'POST' }),
    onSuccess: () => {
      // Cập nhật query ['auth'] ĐANG được observer theo dõi trước tiên —
      // qc.clear() sẽ orphan các query và UI không bao giờ thấy user=null.
      qc.setQueryData(['auth'], { user: null })
      // Xóa cache các view khác (tránh leak dữ liệu giữa các tài khoản),
      // giữ lại ['auth'] vừa set ở trên.
      qc.removeQueries({ predicate: (q) => q.queryKey[0] !== 'auth' })
      router?.navigate('/')
    },
  })

  return { login, register, logout }
}
