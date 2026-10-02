import Link from 'next/link'

/**
 * 404 branded — app là SPA hash-router nên trang này chỉ gặp khi gõ URL
 * máy chủ không tồn tại (ví dụ /abc thay vì /#/abc). Thiết kế cùng ngôn ngữ
 * hình ảnh với landing/hub: nền gradient sakura, mascot, CTA về trang chủ.
 */
export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-[radial-gradient(900px_480px_at_85%_-10%,rgba(232,96,154,0.10),transparent_60%),radial-gradient(700px_420px_at_0%_100%,rgba(79,70,229,0.07),transparent_55%)] bg-background">
      <div className="max-w-md w-full rounded-[26px] border border-border bg-card text-center px-8 py-10 shadow-[0_18px_44px_-24px_rgba(43,38,32,0.22)]">
        <p className="text-sakura font-black tracking-[0.3em] text-sm" aria-hidden>
          迷子
        </p>
        <h1 className="mt-1 text-5xl font-black tracking-tight text-foreground">404</h1>
        <p className="mt-2 text-sm font-bold text-foreground"> Trang này không tồn tại</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Có thể bạn đã gõ nhầm đường dẫn. NihongoGo học theo hash route — mọi trang đều bắt
          đầu từ <code className="rounded bg-muted px-1.5 py-0.5 text-[12px] font-bold">/</code>.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-2xl bg-primary px-7 py-3 text-sm font-extrabold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          ← Về trang chủ
        </Link>
        <p className="mt-6 border-t border-dashed border-border pt-4 text-xs leading-relaxed text-muted-foreground">
          <span aria-hidden>🌸</span> Mẹo: các trang đã xem (kana, từ vựng…) vẫn đọc được khi
          ngoại tuyến nhờ bộ nhớ tạm.
        </p>
      </div>
    </main>
  )
}
