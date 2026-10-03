'use client'

import { useEffect, useState } from 'react'
import { io, type Socket } from 'socket.io-client'

/**
 * Realtime (live) leaderboard hook.
 *
 * Kết nối socket.io mini-service `leaderboard-live` (port 3004).
 *
 * BA CHẾ ĐỘ (quyết định bằng biến môi trường `NEXT_PUBLIC_LIVE_WS`):
 *   1. CÓ proxy (Caddy) — URL relative, port trong query `XTransformPort`:
 *      `io('/?XTransformPort=3004')`, path phải là '/' để gateway forward đúng cổng.
 *   2. KHÔNG proxy (dev chạy thẳng `next dev` trên :3000) — trỏ thẳng
 *      `http://localhost:3004`, vì Caddy không có để forward.
 *   3. KHÔNG có mini-service (deploy serverless như Vercel) — KHÔNG kết nối.
 *
 * VÌ SAO CẦN CHẾ ĐỘ 3:
 *   socket.io là kết nối WebSocket dài hạn. Nền tảng serverless (Vercel) không
 *   chạy được tiến trình socket.io riêng, nên mọi lần thử đều fail và spam
 *   console error — dù tính năng đã có fallback polling 45s và vẫn chạy bình
 *   thường. Không có env var ⇒ coi như không có realtime, đừng thử kết nối.
 *   ⇒ đặt NEXT_PUBLIC_LIVE_WS chỉ khi deploy có thật sự chạy mini-service.
 */
const LIVE_WS_URL: string | null =
  process.env.NEXT_PUBLIC_LIVE_WS ??
  (process.env.NODE_ENV === 'production' ? null : 'http://localhost:3004')

export interface LiveGain {
  userId: string
  username: string
  displayName: string
  avatarSeed: string
  xpDelta: number
  reason: string
  /** Epoch-ms của transaction XP */
  at: number
}

export interface LiveTopRow {
  userId: string
  username: string
  displayName: string
  avatarSeed: string
  weeklyXP: number
  league: string
  rank: number | null
}

interface SnapshotPayload {
  rows: LiveTopRow[]
  serverTime: number
  onlineCount: number
}

interface TopPayload {
  rows: LiveTopRow[]
  serverTime: number
}

interface GainPayload {
  items: LiveGain[]
  serverTime: number
}

interface PresencePayload {
  onlineCount: number
}

const RECENT_GAINS_CAP = 8

export function useLeaderboardLive(): {
  connected: boolean
  onlineCount: number
  recentGains: LiveGain[]
  top: LiveTopRow[]
  /** Lần cuối nhận snapshot từ server (epoch-ms, 0 = chưa bao giờ). */
  lastSyncAt: number
  /** Thử kết nối lại socket (tạo kết nối mới). */
  reconnect: () => void
} {
  const [connected, setConnected] = useState(false)
  const [onlineCount, setOnlineCount] = useState(0)
  const [recentGains, setRecentGains] = useState<LiveGain[]>([])
  const [top, setTop] = useState<LiveTopRow[]>([])
  const [lastSyncAt, setLastSyncAt] = useState(0)
  const [session, setSession] = useState(0)

  useEffect(() => {
    // Không có mini-service (deploy serverless) → không kết nối, để view dùng
    // polling 45s. Tránh spam console error từ WebSocket handshake thất bại.
    if (!LIVE_WS_URL) return

    // Không dùng forceNew để tận dụng reconnect của socket.io.
    const isRelative = LIVE_WS_URL.startsWith('/')
    const socket: Socket = io(LIVE_WS_URL, {
      // Khi qua Caddy, path phải là '/' để gateway forward đúng cổng.
      path: '/',
      transports: ['websocket', 'polling'],
      reconnectionAttempts: isRelative ? 5 : 2,
      reconnectionDelay: 3000,
    })

    socket.on('connect', () => setConnected(true))
    socket.on('disconnect', () => setConnected(false))
    // Socket lỗi/không kết nối được → degrade im lặng, không crash view
    socket.on('connect_error', () => setConnected(false))
    socket.on('connect_timeout', () => setConnected(false))

    socket.on('snapshot', (data: SnapshotPayload) => {
      if (Array.isArray(data?.rows)) setTop(data.rows)
      if (typeof data?.onlineCount === 'number') setOnlineCount(data.onlineCount)
      setLastSyncAt(Date.now())
    })

    socket.on('top', (data: TopPayload) => {
      if (Array.isArray(data?.rows)) setTop(data.rows)
    })

    socket.on('xp-gain', (data: GainPayload) => {
      if (!Array.isArray(data?.items) || data.items.length === 0) return
      setRecentGains((prev) => [...data.items, ...prev].slice(0, RECENT_GAINS_CAP))
    })

    socket.on('presence', (data: PresencePayload) => {
      if (typeof data?.onlineCount === 'number') setOnlineCount(data.onlineCount)
    })

    return () => {
      socket.removeAllListeners()
      socket.disconnect()
    }
  }, [session])

  return {
    connected,
    onlineCount,
    recentGains,
    top,
    lastSyncAt,
    reconnect: () => setSession((s) => s + 1),
  }
}
