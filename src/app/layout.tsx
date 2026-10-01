import type { Metadata, Viewport } from "next";
import { Baloo_2, M_PLUS_Rounded_1c, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ServiceWorkerRegister } from "@/components/app/sw-register";

// Baloo 2 — font tròn thân thiện kiểu Duolingo, hỗ trợ đầy đủ tiếng Việt
const baloo2 = Baloo_2({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "vietnamese"],
  variable: "--font-app-rounded",
  display: "swap",
});

// M PLUS Rounded 1c — chữ Nhật tròn đáng yêu (CJK nạp theo unicode-range)
const mplusRounded = M_PLUS_Rounded_1c({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
  variable: "--font-jp-rounded",
  display: "swap",
  preload: false,
});

// Noto Serif JP — chữ Nhật "bút lông" cho thuật ngữ hiển thị (self-host qua next/font)
const notoSerifJP = Noto_Serif_JP({
  weight: ["500", "600", "700"],
  // subsets chỉ điều khiển preload — CJK nạp theo unicode-range khi chữ xuất hiện
  subsets: ["latin"],
  variable: "--font-jp-serif",
  display: "swap",
  preload: false, // CJK font rất lớn — không preload toàn bộ, để trình duyệt tải theo unicode-range khi cần
});

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
    <html lang="vi" suppressHydrationWarning className={`${baloo2.variable} ${mplusRounded.variable} ${notoSerifJP.variable}`}>
      <body className="antialiased bg-background text-foreground min-h-screen">
        {children}
        <Toaster position="top-center" richColors />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
