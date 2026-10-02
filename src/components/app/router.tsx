'use client'

import { useCallback, useSyncExternalStore } from 'react'

/**
 * Hash router — toàn bộ app nằm trên route `/` duy nhất (ràng buộc sandbox),
 * nhưng vẫn có URL chia sẻ được + nút back hoạt động.
 * VD: #/learn, #/lesson/abc123, #/kana/hiragana, #/admin/lessons
 */

function currentPath(): string {
  const hash = window.location.hash
  if (!hash || hash === '#' || hash === '#/') return '/'
  return hash.slice(1) // bỏ '#'
}

function subscribe(onChange: () => void) {
  window.addEventListener('hashchange', onChange)
  return () => window.removeEventListener('hashchange', onChange)
}

export interface RouteState {
  path: string
  segments: string[]
  navigate: (to: string, opts?: { replace?: boolean }) => void
  back: () => void
}

export function useHashRoute(): RouteState {
  const path = useSyncExternalStore(subscribe, currentPath, () => '/')

  const navigate = useCallback((to: string, opts?: { replace?: boolean }) => {
    const target = to.startsWith('/') ? to : `/${to}`
    const hash = `#${target}`
    if (window.location.hash === hash) return
    if (opts?.replace) {
      window.history.replaceState(null, '', hash)
      window.dispatchEvent(new HashChangeEvent('hashchange'))
    } else {
      window.location.hash = hash
    }
    window.scrollTo({ top: 0 })
  }, [])

  const back = useCallback(() => {
    window.history.back()
  }, [])

  return {
    path,
    segments: path.split('/').filter(Boolean),
    navigate,
    back,
  }
}
