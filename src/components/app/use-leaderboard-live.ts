'use client'

import { useEffect, useState } from 'react'
import { io, type Socket } from 'socket.io-client'

/**
 * Realtime (live) leaderboard hook.
 *
 * Kết nối socket.io mini-service `leaderboard-live` (port 3004) QUA GATEWAY CADDY:
 * URL RELATIVE, port CHỈ nằm trong query param XTransformPort — tuyệt đối không
 * viết `http://localhost:3004`. Path phải là '/' để Caddy forward đúng cổng.
 */

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
    // Không dùng forceNew để tận dụng reconnect; URL relative theo origin trang.
    const socket: Socket = io('/?XTransformPort=3004', {
      // DO NOT change the path, it is used by Caddy to forward to the correct port
      path: '/',
      transports: ['websocket', 'polling'],
      reconnectionAttempts: 5,
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
