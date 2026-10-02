/* NihongoGo service worker — network-first cho tài sản tĩnh (an toàn dev),
 * cache dùng làm fallback offline. Không bao giờ cache /api/*.
 *
 * QUAN TRỌNG: chunk của dev server (Turbopack) giữ nguyên tên file khi code thay đổi,
 * nên KHÔNG được cache-first với /_next/static — nếu không trình duyệt sẽ mãi mãi
 * chạy code cũ sau mỗi lần deploy/cập nhật. */
const VERSION = 'nihongogo-v4'
const STATIC_CACHE = `${VERSION}-static`
const OFFLINE_URL = '/offline.html'

const PRECACHE = [OFFLINE_URL, '/icons/icon-192.png', '/icons/icon-512.png', '/manifest.webmanifest']

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      // Dọn sạch MỌI cache của phiên bản cũ (kể cả v1/v2 cũ lỗi stale)
      .then((keys) => Promise.all(keys.filter((k) => k !== STATIC_CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
    // KHÔNG clients.navigate() ở đây: reload trang khi SW cập nhật sẽ (1) mất
    // state bài học đang làm dở của người dùng, (2) làm mất hash route
    // (#/login → landing) gây flaky. Chiến lược network-first đảm bảo lần
    // navigation kế tiếp luôn lấy asset mới — không cần ép reload.
  )
})

function isCacheableAsset(url) {
  return (
    url.pathname.startsWith('/_next/static/') ||
    url.pathname.startsWith('/icons/') ||
    url.pathname.startsWith('/images/') ||
    url.pathname.startsWith('/fonts/') ||
    url.pathname === '/logo.svg' ||
    url.pathname === '/manifest.webmanifest'
  )
}

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return
  const url = new URL(request.url)
  if (url.origin !== self.location.origin) return
  if (url.pathname.startsWith('/api/')) return // API luôn qua mạng

  // Điều hướng trang: network-first, fallback offline
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() =>
        caches.match(OFFLINE_URL).then((cached) => cached || Response.error())
      )
    )
    return
  }

  // Tài sản tĩnh: NETWORK-FIRST — ưu tiên bản mới nhất từ server,
  // chỉ dùng cache khi offline. Cache được cập nhật sau mỗi lần fetch thành công.
  if (isCacheableAsset(url)) {
    event.respondWith(
      fetch(request)
        .then((res) => {
          if (res.ok) {
            const clone = res.clone()
            caches.open(STATIC_CACHE).then((cache) => cache.put(request, clone))
          }
          return res
        })
        .catch(() =>
          caches.match(request).then((cached) => cached || Response.error())
        )
    )
  }
})

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting()
})
