'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { api, ApiClientError } from '@/lib/client/api'
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

  /**
   * Một số trình duyệt (Safari/ITP, Chrome bật chế độ chặn third-party cookie
   * cứng) chặn TOÀN BỘ cookie trong iframe — POST /login trả 200 nhưng
   * Set-Cookie bị bỏ, người dùng vẫn là khách. Kiểm chứng phiên ngay sau khi
   * "thành công" để báo lỗi hành động được thay vì lặp vô hạn việc đăng nhập.
   */
  const assertSessionPersisted = async () => {
    const me = await api<{ user: AuthUserDTO | null }>('/api/auth/me')
    if (!me.user) {
      throw new ApiClientError(
        403,
        'COOKIE_BLOCKED',
        'Trình duyệt đang chặn cookie trong khung xem trước. Hãy bấm nút "Open in New Tab" (mở tab mới) phía trên bảng xem trước rồi đăng nhập lại — ở tab mới mọi thứ sẽ hoạt động bình thường.'
      )
    }
  }

  const login = useMutation({
    mutationFn: async (input: { email: string; password: string }) => {
      const data = await api<{ user: AuthUserDTO }>('/api/auth/login', { method: 'POST', json: input })
      await assertSessionPersisted()
      return data
    },
    onSuccess: () => {
      invalidate()
      router?.navigate('/')
    },
  })

  const register = useMutation({
    mutationFn: async (input: { email: string; username: string; password: string; displayName?: string }) => {
      const data = await api<{ user: AuthUserDTO }>('/api/auth/register', { method: 'POST', json: input })
      await assertSessionPersisted()
      return data
    },
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
