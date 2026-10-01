import { createHash, randomBytes, scrypt as _scrypt, timingSafeEqual } from 'node:crypto'
import { promisify } from 'node:util'
import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { unauthorized, forbidden } from '@/lib/api'

const scrypt = promisify(_scrypt) as (p: string, s: string, k: number) => Promise<Buffer>

export const SESSION_COOKIE = 'ngg_session'
const SESSION_DAYS = 30
const DEV_PEPPER = 'nihongogo-dev-secret-change-me'
const PEPPER = process.env.AUTH_SECRET ?? DEV_PEPPER

// Production phải đặt AUTH_SECRET riêng — cảnh báo lớn ngay khi boot (không im lặng
// dùng pepper dev làm остальные hash session dễ đoán hơn).
if (process.env.NODE_ENV === 'production' && (!process.env.AUTH_SECRET || process.env.AUTH_SECRET === DEV_PEPPER || process.env.AUTH_SECRET === 'please-change-me')) {
  console.warn(
    '[auth] CẢNH BÁO: AUTH_SECRET chưa được đặt (hoặc còn giá trị mẫu) trong chế độ production. ' +
    'Tạo chuỗi ngẫu nhiên bằng `openssl rand -hex 32` và đặt vào biến môi trường trước khi triển khai thật.'
  )
}

/* ------------------------------- Passwords -------------------------------- */

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString('hex')
  const derived = await scrypt(password + PEPPER, salt, 64)
  return `${salt}:${derived.toString('hex')}`
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const [salt, hash] = stored.split(':')
  if (!salt || !hash) return false
  const derived = await scrypt(password + PEPPER, salt, 64)
  const expected = Buffer.from(hash, 'hex')
  return derived.length === expected.length && timingSafeEqual(derived, expected)
}

/* -------------------------------- Sessions -------------------------------- */

function hashToken(token: string): string {
  return createHash('sha256').update(token + PEPPER).digest('hex')
}

export async function createSession(userId: string, userAgent?: string | null): Promise<{ token: string; expiresAt: Date }> {
  const token = randomBytes(32).toString('base64url')
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 86400000)
  await db.session.create({
    data: { userId, tokenHash: hashToken(token), expiresAt, userAgent: userAgent?.slice(0, 200) ?? null },
  })
  return { token, expiresAt }
}

export async function destroySession(token: string) {
  await db.session.deleteMany({ where: { tokenHash: hashToken(token) } })
}

export interface AuthUser {
  id: string
  email: string
  username: string
  role: string
  profile: {
    displayName: string
    avatarSeed: string
    goal: string | null
    dailyGoalXP: number
    timezone: string
    kanaKnowledge: string
    level: string
    onboardedAt: Date | null
  } | null
  settings: {
    theme: string
    soundEnabled: boolean
    romajiDisplay: boolean
    autoSpeak: boolean
    reducedMotion: boolean
  } | null
}

export async function getUserFromToken(token: string | undefined): Promise<AuthUser | null> {
  if (!token) return null
  const session = await db.session.findUnique({
    where: { tokenHash: hashToken(token) },
    include: {
      user: {
        include: {
          profile: true,
          settings: true,
        },
      },
    },
  })
  if (!session || session.expiresAt <= new Date()) return null
  const u = session.user
  return {
    id: u.id,
    email: u.email,
    username: u.username,
    role: u.role,
    profile: u.profile
      ? {
          displayName: u.profile.displayName,
          avatarSeed: u.profile.avatarSeed,
          goal: u.profile.goal,
          dailyGoalXP: u.profile.dailyGoalXP,
          timezone: u.profile.timezone,
          kanaKnowledge: u.profile.kanaKnowledge,
          level: u.profile.level,
          onboardedAt: u.profile.onboardedAt,
        }
      : null,
    settings: u.settings
      ? {
          theme: u.settings.theme,
          soundEnabled: u.settings.soundEnabled,
          romajiDisplay: u.settings.romajiDisplay,
          autoSpeak: u.settings.autoSpeak,
          reducedMotion: u.settings.reducedMotion,
        }
      : null,
  }
}

export function getSessionToken(req: NextRequest): string | undefined {
  return req.cookies.get(SESSION_COOKIE)?.value
}

export async function requireUser(req: NextRequest): Promise<AuthUser> {
  const user = await getUserFromToken(getSessionToken(req))
  if (!user) throw unauthorized()
  return user
}

export async function requireRole(req: NextRequest, roles: string[]): Promise<AuthUser> {
  const user = await requireUser(req)
  if (!roles.includes(user.role)) throw forbidden()
  return user
}

/* -------------------------------- Cookies --------------------------------- */

export function setSessionCookie(res: NextResponse, token: string, expiresAt: Date) {
  res.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    expires: expiresAt,
  })
}

export function clearSessionCookie(res: NextResponse) {
  res.cookies.set(SESSION_COOKIE, '', { httpOnly: true, sameSite: 'lax', path: '/', maxAge: 0 })
}
