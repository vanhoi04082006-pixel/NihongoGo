import { db } from '@/lib/db'
import { badRequest, conflict, unauthorized } from '@/lib/api'
import { hashPassword, verifyPassword, createSession } from '@/lib/auth'
import { track } from './analytics'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const USERNAME_RE = /^[a-zA-Z0-9_]{3,20}$/

export async function registerUser(input: { email: string; username: string; password: string; displayName?: string }) {
  const email = input.email.trim().toLowerCase()
  const username = input.username.trim()
  const password = input.password

  if (!EMAIL_RE.test(email)) throw badRequest('Email không hợp lệ')
  if (!USERNAME_RE.test(username)) throw badRequest('Tên đăng nhập gồm 3-20 ký tự (a-z, 0-9, _)')
  if (password.length < 8) throw badRequest('Mật khẩu cần ít nhất 8 ký tự')
  if (password.length > 100) throw badRequest('Mật khẩu quá dài')

  const existing = await db.user.findFirst({
    where: { OR: [{ email }, { username }] },
    select: { email: true, username: true },
  })
  if (existing) {
    if (existing.email === email) throw conflict('Email đã được sử dụng')
    throw conflict('Tên đăng nhập đã tồn tại')
  }

  const passwordHash = await hashPassword(password)
  const user = await db.user.create({
    data: {
      email,
      username,
      passwordHash,
      role: 'USER',
      profile: {
        create: { displayName: input.displayName?.trim() || username },
      },
      settings: { create: {} },
      progress: { create: {} },
      streak: { create: {} },
    },
    include: { profile: true, settings: true },
  })

  await track('user_registered', user.id, {})
  const session = await createSession(user.id)
  return { user, session }
}

export async function loginUser(input: { email: string; password: string }) {
  const email = input.email.trim().toLowerCase()
  const user = await db.user.findUnique({ where: { email }, include: { profile: true, settings: true } })
  if (!user) throw unauthorized('Email hoặc mật khẩu không đúng')
  const valid = await verifyPassword(input.password, user.passwordHash)
  if (!valid) throw unauthorized('Email hoặc mật khẩu không đúng')
  const session = await createSession(user.id)
  return { user, session }
}
