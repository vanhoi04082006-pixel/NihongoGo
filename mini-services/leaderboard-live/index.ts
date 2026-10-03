/**
 * leaderboard-live — Realtime (live) leaderboard mini-service.
 *
 * - Socket.io server on hardcoded PORT 3004 (path '/', cors '*').
 * - Reads the shared SQLite DB (../../db/custom.db) read-only with bun:sqlite.
 * - Polls XPTransaction every 5s → broadcast 'xp-gain' + 'top' to all clients.
 * - On connect → 'snapshot' (top rows + onlineCount); 'presence' on join/leave.
 *
 * Tables (Prisma default names, verified via PRAGMA table_info):
 *   User(id, username, ...) — KHÔNG có displayName/avatarSeed (nằm ở UserProfile).
 *   UserProfile(userId @unique, displayName, avatarSeed, ...)
 *   XPTransaction(id, userId, amount, reason, refType, refId, createdAt) — createdAt = epoch-ms.
 *   Leaderboard(id, seasonKey, league, startsAt, endsAt, status)
 *   LeaderboardEntry(id, leaderboardId, userId, weeklyXP, rank, updatedAt)
 */
import { createServer } from 'node:http'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { Database } from 'bun:sqlite'
import { Server } from 'socket.io'

/* --------------------------------- Config --------------------------------- */

const PORT = 3004 // hardcoded — KHÔNG đọc env PORT
/**
 * `new URL(...).pathname` trả "/E:/..." trên Windows → không phải path hợp lệ,
 * existsSync() luôn false và service chết ngay. `fileURLToPath` xử lý đúng cả
 * Windows (drive letter) lẫn POSIX.
 */
const DB_PATH = fileURLToPath(new URL('../../db/custom.db', import.meta.url))
const POLL_MS = 5000

if (!existsSync(DB_PATH)) {
  console.error(`[fatal] Không tìm thấy DB tại: ${DB_PATH} (mini-service phải chạy từ mini-services/leaderboard-live)`)
  process.exit(1)
}

const db = new Database(DB_PATH, { readonly: true })
console.log(`[db] opened read-only: ${DB_PATH}`)

/* --------------------------------- Types ---------------------------------- */

interface GainItem {
  userId: string
  username: string
  displayName: string
  avatarSeed: string
  xpDelta: number
  reason: string
  at: number
}

interface TopRow {
  userId: string
  username: string
  displayName: string
  avatarSeed: string
  weeklyXP: number
  league: string
  rank: number | null
}

interface SnapshotPayload extends TopRowInfo {
  onlineCount: number
}

interface TopRowInfo {
  rows: TopRow[]
  serverTime: number
}

interface GainPayload {
  items: GainItem[]
  serverTime: number
}

/* -------------------------------- Socket.io ------------------------------- */

const httpServer = createServer()
const io = new Server(httpServer, {
  // DO NOT change the path, it is used by Caddy to forward to the correct port
  path: '/',
  cors: { origin: '*', methods: ['GET', 'POST'] },
  pingTimeout: 60000,
  pingInterval: 25000,
})

/* ------------------------------- DB queries ------------------------------- */

const TOP_SQL = `
  SELECT
    le.userId                                   AS userId,
    u.username                                  AS username,
    COALESCE(p.displayName, u.username)         AS displayName,
    COALESCE(p.avatarSeed, 'sakura')            AS avatarSeed,
    le.weeklyXP                                 AS weeklyXP,
    lb.league                                   AS league,
    COALESCE(le.rank, ROW_NUMBER() OVER (ORDER BY le.weeklyXP DESC)) AS rank
  FROM LeaderboardEntry le
  JOIN Leaderboard lb ON lb.id = le.leaderboardId AND lb.status = 'ACTIVE'
  JOIN User u         ON u.id = le.userId
  LEFT JOIN UserProfile p ON p.userId = le.userId
  ORDER BY le.weeklyXP DESC, le.userId ASC
  LIMIT 10
`

const GAIN_SQL = `
  SELECT
    t.userId                                    AS userId,
    u.username                                  AS username,
    COALESCE(p.displayName, u.username)         AS displayName,
    COALESCE(p.avatarSeed, 'sakura')            AS avatarSeed,
    t.amount                                    AS amount,
    t.reason                                    AS reason,
    t.createdAt                                 AS createdAt
  FROM XPTransaction t
  JOIN User u            ON u.id = t.userId
  LEFT JOIN UserProfile p ON p.userId = t.userId
  WHERE t.createdAt > ?
  ORDER BY t.createdAt ASC
`

function queryTop(): TopRow[] {
  return db.prepare(TOP_SQL).all() as TopRow[]
}

/* --------------------------------- Poller --------------------------------- */

let lastSeenAt = Date.now() // bỏ qua transaction có sẵn trước khi service khởi động
let lastTopJson = ''

function broadcastTop(): void {
  const rows = queryTop()
  const json = JSON.stringify(rows)
  if (json === lastTopJson) return // chỉ phát khi nội dung đổi
  lastTopJson = json
  const serverTime = Date.now()
  io.emit('top', { rows, serverTime } satisfies TopRowInfo)
  console.log(`[top] broadcast ${rows.length} rows (leader=${rows[0]?.username ?? '-'} ${rows[0]?.weeklyXP ?? 0} XP)`)
}

const pollTimer = setInterval(() => {
  try {
    const batch = db.prepare(GAIN_SQL).all(lastSeenAt) as Array<{
      userId: string
      username: string
      displayName: string
      avatarSeed: string
      amount: number
      reason: string
      createdAt: number
    }>
    if (batch.length > 0) {
      // Gộp theo user: xpDelta = tổng amount, reason/at = transaction mới nhất của user đó
      const byUser = new Map<string, GainItem>()
      for (const tx of batch) {
        const prev = byUser.get(tx.userId)
        if (prev) {
          prev.xpDelta += tx.amount
          prev.reason = tx.reason
          prev.at = tx.createdAt
        } else {
          byUser.set(tx.userId, {
            userId: tx.userId,
            username: tx.username,
            displayName: tx.displayName,
            avatarSeed: tx.avatarSeed,
            xpDelta: tx.amount,
            reason: tx.reason,
            at: tx.createdAt,
          })
        }
        if (tx.createdAt > lastSeenAt) lastSeenAt = tx.createdAt
      }
      const items = [...byUser.values()]
      io.emit('xp-gain', { items, serverTime: Date.now() } satisfies GainPayload)
      console.log(`[xp-gain] broadcast ${items.length} user(s): ${items.map((g) => `${g.username} +${g.xpDelta}`).join(', ')}`)
    }
    broadcastTop()
  } catch (err) {
    console.error('[poll] error:', err)
  }
}, POLL_MS)

/* ------------------------------ Connectivity ------------------------------ */

let lastOnlineCount = 0

function broadcastPresence(): void {
  const count = io.engine.clientsCount
  if (count !== lastOnlineCount) {
    lastOnlineCount = count
    io.emit('presence', { onlineCount: count })
  }
}

io.on('connection', (socket) => {
  console.log(`[conn] ${socket.id} — ${io.engine.clientsCount} online`)
  // Snapshot đầu tiên cho client mới = top rows + số người online
  socket.emit('snapshot', {
    rows: queryTop(),
    serverTime: Date.now(),
    onlineCount: io.engine.clientsCount,
  } satisfies SnapshotPayload)
  broadcastPresence()

  socket.on('disconnect', (reason) => {
    console.log(`[disc] ${socket.id} (${reason}) — ${io.engine.clientsCount} online`)
    // Trì hoãn 1 tick: clientsCount chưa giảm ngay tại thời điểm handler chạy
    setTimeout(broadcastPresence, 100)
  })

  socket.on('error', (err) => {
    console.error(`[socket] error ${socket.id}:`, err)
  })
})

/* ------------------------------ Bootstrap --------------------------------- */

httpServer.listen(PORT, () => {
  console.log(`[leaderboard-live] socket.io listening on port ${PORT} (path /)`)
  console.log(`[leaderboard-live] polling XP every ${POLL_MS}ms, lastSeenAt = ${new Date(lastSeenAt).toISOString()}`)
  // Phát 'top' sớm để log biết trạng thái ban đầu
  lastTopJson = JSON.stringify(queryTop())
  console.log(`[top] initial: ${JSON.parse(lastTopJson).map((r: TopRow) => `${r.username}:${r.weeklyXP}`).join(' ')}`)
})

/* --------------------------- Graceful shutdown ---------------------------- */

function shutdown(signal: string): void {
  console.log(`[shutdown] ${signal} received, closing…`)
  clearInterval(pollTimer)
  io.close(() => {
    console.log('[shutdown] socket.io closed')
    db.close()
    console.log('[shutdown] db closed')
    process.exit(0)
  })
}

process.on('SIGTERM', () => shutdown('SIGTERM'))
process.on('SIGINT', () => shutdown('SIGINT'))
