import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ServiceWorkerRegister } from "@/components/app/sw-register";

// Fonts — chiến lược KHÔNG phụ thuộc mạng lúc build (next/font/google fetch Google Fonts
// khi `next build`, làm CI fail ngẫu nhiên khi bị rate-limit):
// - Baloo 2 (font UI chính, latin+vietnamese ~70KB): self-host `public/fonts/` qua @font-face
//   trong globals.css → deterministic + PWA cache offline được.
// - M PLUS Rounded 1c + Noto Serif JP (CJK rất lớn): load runtime qua Google Fonts CDN
//   với unicode-range chunking (trình duyệt chỉ tải đoạn cần dùng), kèm fallback font hệ thống.

export const metadata: Metadata = {
  title: "NihongoGo — Học tiếng Nhật mỗi ngày",
  description:
    "Nền tảng học tiếng Nhật gamified dành cho người Việt: bảng chữ kana, 50 bài học sơ cấp, luyện nghe – nói – đọc – viết, SRS ôn tập thông minh.",
  keywords: ["tiếng Nhật", "học tiếng Nhật", "NihongoGo", "kana", "kanji", "JLPT", "Minna"],
  applicationName: "NihongoGo",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "NihongoGo",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7f1" },
    { media: "(prefers-color-scheme: dark)", color: "#16131d" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* CJK fonts (M PLUS Rounded 1c + Noto Serif JP) — chỉ tải runtime, không dính build.
            Rule no-page-custom-font dành cho Pages Router (_document.js); ở App Router
            root layout này link chạy cho MỌI route nên cảnh báo không áp dụng. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700;800&family=Noto+Serif+JP:wght@500;600;700&display=swap"
        />
      </head>
      <body className="antialiased bg-background text-foreground min-h-screen">
        {children}
        <Toaster position="top-center" richColors />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
