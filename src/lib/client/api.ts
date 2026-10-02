'use client'

/** Client API wrapper — lỗi nhất quán { error: { code, message } }. */

import { CSRF_COOKIE, CSRF_HEADER } from '@/lib/csrf'

export class ApiClientError extends Error {
  constructor(
    public status: number,
    public code: string,
    message: string
  ) {
    super(message)
  }
}

function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const prefix = `${name}=`
  for (const part of document.cookie.split(';')) {
    const kv = part.trim()
    if (kv.startsWith(prefix)) return decodeURIComponent(kv.slice(prefix.length))
  }
  return null
}

function randomToken(): string {
  const c = globalThis.crypto
  if (c?.randomUUID) return c.randomUUID()
  if (c?.getRandomValues) {
    const bytes = new Uint8Array(24)
    c.getRandomValues(bytes)
    return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('')
  }
  // Fallback cuối cùng (môi trường không có Web Crypto)
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`
}

/**
 * Double-submit CSRF token: cookie không HttpOnly + header cùng giá trị.
 * Đọc lại cookie ở mỗi request (không cache) để nhiều tab không bị lệch nhau.
 *
 * LƯU Ý SameSite: khi app chạy trong iframe (Preview Panel nhúng trên giao diện
 * chat) thì trình duyệt ở ngữ cảnh third-party — cookie SameSite=Lax bị chặn
 * hoàn toàn, gây 403 ở mọi mutation. Trên HTTPS phải dùng "SameSite=None; Secure"
 * thì cookie mới được set/gửi trong iframe; trên http://localhost giữ Lax.
 */
function ensureCsrfToken(): string {
  if (typeof document === 'undefined') return ''
  const existing = readCookie(CSRF_COOKIE)
  if (existing && existing.length >= 16) return existing
  const token = randomToken()
  const isHttps = typeof location !== 'undefined' && location.protocol === 'https:'
  const attrs = isHttps ? 'path=/; max-age=31536000; samesite=none; secure' : 'path=/; max-age=31536000; samesite=lax'
  document.cookie = `${CSRF_COOKIE}=${token}; ${attrs}`
  return token
}

export async function api<T = unknown>(path: string, init?: RequestInit & { json?: unknown }): Promise<T> {
  const { json, ...rest } = init ?? {}
  const res = await fetch(path, {
    ...rest,
    headers: {
      ...(json !== undefined ? { 'Content-Type': 'application/json' } : {}),
      [CSRF_HEADER]: ensureCsrfToken(),
      ...rest.headers,
    },
    body: json !== undefined ? JSON.stringify(json) : rest.body,
    credentials: 'same-origin',
  })
  let data: unknown = null
  try {
    data = await res.json()
  } catch {
    /* empty body */
  }
  if (!res.ok) {
    const err = (data as { error?: { code?: string; message?: string } } | null)?.error
    throw new ApiClientError(res.status, err?.code ?? 'UNKNOWN', err?.message ?? `Lỗi ${res.status}`)
  }
  return data as T
}

export function qs(params: Record<string, string | number | undefined | null>): string {
  const s = new URLSearchParams()
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null && v !== '') s.set(k, String(v))
  }
  const str = s.toString()
  return str ? `?${str}` : ''
}
