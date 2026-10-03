import { NextRequest, NextResponse } from 'next/server'
import { CSRF_COOKIE, CSRF_HEADER } from '@/lib/csrf'

/** Định dạng lỗi API thống nhất: { error: { code, message } } */
export class ApiError extends Error {
  constructor(
    public status: number,
    public code: string,
    message: string
  ) {
    super(message)
  }
}

export const badRequest = (message: string, code = 'BAD_REQUEST') => new ApiError(400, code, message)
export const unauthorized = (message = 'Bạn cần đăng nhập') => new ApiError(401, 'UNAUTHORIZED', message)
export const forbidden = (message = 'Bạn không có quyền thực hiện hành động này') => new ApiError(403, 'FORBIDDEN', message)
export const notFound = (message = 'Không tìm thấy tài nguyên') => new ApiError(404, 'NOT_FOUND', message)
export const conflict = (message: string) => new ApiError(409, 'CONFLICT', message)
export const tooMany = (message = 'Bạn thao tác quá nhanh, vui lòng thử lại sau') => new ApiError(429, 'RATE_LIMITED', message)

export function ok<T>(data: T, init?: ResponseInit) {
  return NextResponse.json(data, init)
}

export function errorResponse(e: unknown) {
  if (e instanceof ApiError) {
    return NextResponse.json(
      { error: { code: e.code, message: e.message } },
      { status: e.status }
    )
  }
  // Lỗi Prisma thường gặp khi clone repo về chưa khởi tạo database
  // (vd: `bun run dev` mà chưa từng chạy setup) — trả thông báo chỉ rõ
  // cách sửa thay vì lỗi 500 "Đã có lỗi máy chủ" gây bối rối.
  const prismaCode = (e as { code?: string } | null)?.code
  if (prismaCode === 'P2021' || prismaCode === 'P2022') {
    console.error('[api] Database chưa khởi tạo hoặc lệch schema:', prismaCode)
    return NextResponse.json(
      {
        error: {
          code: 'DB_NOT_INITIALIZED',
          message:
            'Cơ sở dữ liệu chưa được khởi tạo. Hãy dừng server (Ctrl+C) rồi chạy lại `bun run dev` — hệ thống sẽ tự khởi tạo database lần đầu (hoặc chạy `bun run setup`), sau đó thử lại.',
        },
      },
      { status: 503 }
    )
  }
  if (prismaCode === 'P2002') {
    return NextResponse.json(
      {
        error: {
          code: 'CONFLICT',
          message: 'Dữ liệu vừa bị trùng (đã có ai đó tạo trước bạn). Tải lại trang rồi thử lại.',
        },
      },
      { status: 409 }
    )
  }
  console.error('[api] Unhandled error:', e)
  return NextResponse.json(
    { error: { code: 'INTERNAL', message: 'Đã có lỗi máy chủ. Vui lòng thử lại.' } },
    { status: 500 }
  )
}

/** Bọc route handler: bắt lỗi + log thống nhất. */
export function route<Ctx>(fn: (req: NextRequest, ctx: Ctx) => Promise<Response>) {
  return async (req: NextRequest, ctx: Ctx): Promise<Response> => {
    try {
      return await fn(req, ctx)
    } catch (e) {
      return errorResponse(e)
    }
  }
}

/**
 * Chống CSRF cho mutation, chịu được nhiều lớp proxy (gateway ngoài → Caddy → Next):
 * 1. Origin khớp hostname với Host / X-Forwarded-Host / URL nội bộ → cho qua
 *    (cookie không phân biệt port nên hostname là ranh giới CSRF thực tế).
 * 2. Origin là localhost → cho qua (preview/QA chạy trực tiếp trên sandbox).
 * 3. Sec-Fetch-Site: same-origin → cho qua. Đây là header cấm (forbidden) —
 *    JavaScript ở trang lạ KHÔNG THỂ giả mạo; trình duyệt chỉ ghi "same-origin"
 *    khi request xuất phát từ chính origin của URL đích. Vượt qua được tình
 *    huống proxy rewrite Host (Origin: preview-chat-*.space-z.ai nhưng Host
 *    lại là hostname nội bộ của gateway).
 * 4. Proxy rewrite Host (mất dấu hostname gốc) → double-submit token:
 *    header x-csrf-token phải khớp cookie ngg_csrf. Chính trang web của ta set
 *    cả hai; site lạ không thể set cookie cho domain ta hay gửi custom header
 *    cross-origin (bị CORS preflight chặn) → không thể giả mạo.
 */
const LOCAL_HOSTNAMES = new Set(['localhost', '127.0.0.1', '0.0.0.0', '::1', '[::1]'])

function hostnameFromHeader(value: string | null | undefined): string | null {
  if (!value) return null
  try {
    // Header có thể là "host", "host:port", URL đầy đủ, hoặc danh sách comma
    const raw = value.split(',')[0].trim()
    const withScheme = raw.includes('://') ? raw : `http://${raw}`
    return new URL(withScheme).hostname.toLowerCase()
  } catch {
    return null
  }
}

export function assertSameOrigin(req: NextRequest) {
  const origin = req.headers.get('origin')
  if (!origin) return // curl / same-origin fetch không kèm origin
  const originHostname = hostnameFromHeader(origin)
  if (!originHostname) throw forbidden('Yêu cầu không hợp lệ (origin)')

  const candidates = new Set<string>()
  for (const value of [
    req.headers.get('host'),
    req.headers.get('x-forwarded-host'),
    req.nextUrl.host,
    req.nextUrl.hostname,
  ]) {
    const h = hostnameFromHeader(value)
    if (h) candidates.add(h)
  }
  if (candidates.has(originHostname)) return
  // CHỈ cho phép bypass localhost ở môi trường dev. Ở production, bất kỳ origin
  // `localhost` nào (mọi port) đều là origin của attacker nếu họ dựng được web
  // server trên máy victim — cho qua là mất lớp phòng thủ CSRF.
  if (process.env.NODE_ENV !== 'production' && LOCAL_HOSTNAMES.has(originHostname)) return

  // `Sec-Fetch-Site` là header bị browser CẤM tự đặt, nên JS trang khác không giả
  // được — nhưng curl/script thì tự do. Vì vậy KHÔNG được dùng nó làm điều kiện
  // thoát độc lập: chỉ chấp nhận khi nó nói same-origin VÀ không có Origin
  // khác host (đã kiểm tra ở trên, tức là candidates.has đã fail rồi).
  const secFetchSite = req.headers.get('sec-fetch-site')
  if (secFetchSite === 'same-origin' && !candidates.has(originHostname) && !originHostname) return

  const headerToken = req.headers.get(CSRF_HEADER)
  const cookieToken = req.cookies.get(CSRF_COOKIE)?.value
  if (headerToken && cookieToken && headerToken.length >= 16 && headerToken === cookieToken) return

  console.warn('[api] Origin rejected:', {
    origin,
    host: req.headers.get('host'),
    xForwardedHost: req.headers.get('x-forwarded-host'),
    nextUrlHost: req.nextUrl.host,
    secFetchSite,
    hasHeaderToken: Boolean(headerToken),
    hasCookieToken: Boolean(cookieToken),
  })
  throw forbidden(
    'Không xác thực được yêu cầu (origin). Nếu bạn đang xem trong khung nhúng, hãy mở ứng dụng ở tab mới rồi thử lại.'
  )
}

export function clientIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'local'
  )
}

export async function readJson(req: NextRequest): Promise<unknown> {
  try {
    return await req.json()
  } catch {
    throw badRequest('Dữ liệu gửi lên không hợp lệ')
  }
}
