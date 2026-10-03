# Báo cáo — NihongoGo: dựng lại landing, kiểm thử toàn hệ thống, deploy production

> Ngày: **2026-10-04**
> Phạm vi: rebuild landing · audit & sửa lỗi toàn bộ giao diện · test chức năng · deploy free
> **Production: https://nihongogo-chi.vercel.app** (Vercel Hobby + Neon Postgres)

---

## 1. Kết quả tổng quan

| Hạng mục | Kết quả |
|---|---|
| Landing page | **Xây lại toàn bộ** — 7 section, menu mobile, JSON-LD, section "Bên trong một bài học" |
| Lỗi nghiêm trọng | **1 bug mất nội dung** đã sửa (xem §2.1) |
| Lỗi chức năng / UX | **9 lỗi** đã sửa (xem §2.2) |
| 9 lesson renderer | **9/9 PASS** với assertion thật |
| Screenshot | **57 ảnh** toàn màn hình · 320px / 768px / 1440px · 19 màn hình |
| Audit UI cuối | **0 issue** ở cả 3 viewport |
| Console production | **0 error** (landing → login → learn → kana) |
| Test suite | 61 pass · 30 skip · **0 fail** |
| Typecheck / lint | 0 error / 0 error |
| Deploy | ✅ Vercel + Neon, verify health + auth + học bài đều PASS |

---

## 2. Lỗi đã tìm ra và sửa

### 2.1 🔴 Bug nghiêm trọng — nội dung dưới hero vô hình vĩnh viễn

**Hiện tượng:** chụp full-page screenshot lần đầu cho thấy toàn bộ section dưới hero
(Khoá học · Tính năng · Hành trình · FAQ · CTA) là **mảng trắng trống**, dù layout
đúng và nội dung có trong DOM.

**Nguyên nhân:** landing dùng `whileInView` của framer-motion với `initial={{opacity:0}}`.
Nếu `IntersectionObserver` không chạy (JS lỗi/tắt, trình duyệt cũ, mở bằng anchor
tới giữa trang, service worker trả shell cũ), phần tử **mãi ở `opacity:0`**. Nội dung
mất, và crawler cũng không đọc được — mất SEO lẫn nội dung.

**Cách sửa:** tạo component `src/components/shared/reveal.tsx` — chỉ ẩn khi thực sự có
khả năng quan sát (client + có IO + user không bật reduced-motion), có lưới an toàn 2.6s
ép hiện, và `setState` chỉ nằm trong callback bất đồng bộ để không gây cascading render.

> Khi tự viết lại component này, tôi đã tạo ra lại **chính lỗi đó** (nhánh "đã nằm trong
> viewport" set `armed` nhưng quên `shown`, đồng thời bỏ qua timer an toàn). Phát hiện ra
> nhờ screenshot và probe DOM, đã sửa và verify lại bằng `opacity` đọc từ trình duyệt.

### 2.2 Các lỗi khác

| # | Lỗi | Nguyên nhân | Sửa |
|---|---|---|---|
| 1 | Hero image không hiển thị | `Reveal` kẹt `opacity:0` → container 0 chiều cao | Sửa `Reveal` |
| 2 | Text 8–10px ở khắp app (18 file) | Badge/label micro quá nhỏ, khó đọc | Nâng lên 11px |
| 3 | `accordion.tsx` render `<h3>` | Radix `Header` mặc định h3 → nhảy heading h1→h3 | Ép `<h2>` qua `asChild` |
| 4 | `learn.tsx` có **2 thẻ `<h1>`** | Greeting + SectionBanner | SectionBanner h1 → h2 |
| 5 | Heading nhảy h1→h3 ở `learn` | 5 `<h3>` lọt vào giữa h1/h2 | Đổi sang h2 |
| 6 | **Grammar/Vocabulary trùng nhãn "Bài 1"** | 2 khoá đều có bài `order 1,2,3…` mà nhãn chỉ dùng `order` | Thêm nhãn khoá + sort theo khoá |
| 7 | WebSocket leaderboard spam console error | Hardcode URL Caddy, không đổi theo môi trường | Env-aware `NEXT_PUBLIC_LIVE_WS` |
| 8 | mini-service chết ngay khi khởi động (Windows) | `new URL().pathname` → `/E:/...`, `existsSync` false | `fileURLToPath` |
| 9 | Login 401 trên production | Hash tạo với pepper `""` (từ `.env`), Vercel dùng pepper khác | Re-seed với `AUTH_SECRET` production |

### 2.3 Sai lầm trong chính bộ test (đã sửa)

Lần đầu báo "9/9 renderer PASS" là **false pass**: điều kiện kiểm tra chỉ là
`bodyLen > 40`, mà shell rỗng cũng đạt. Đã siết lại thành: phải có nút `KIỂM TRA`
**và** nội dung > 150 ký tự. Chạy lại với điều kiện thật → 9/9 PASS thật.

Tương tự, `ui-audit.mjs` báo `IMG-NO-ALT` trên mọi màn hình — đó là **false positive**:
`alt=""` là dấu hiệu ĐÚNG cho ảnh trang trí. Đã sửa thành chỉ flag khi thiếu hẳn thuộc tính.

---

## 3. Landing page mới

| Section | Nội dung |
|---|---|
| Hero | Badge · H1 · 2 CTA · chỉ số XP/streak/tim · ảnh + 2 card nổi |
| Stats | 2 khoá · 70 bài · 4.876 câu · 1.155 từ — số liệu lấy từ DB thật |
| **Vì sao khác** | 3 nỗi khó thật sự (bỏ dở 3 ngày · không nghe được · học xong quên) |
| Khoá học | 2 thẻ: Irodori A1 (18 bài) · Tiếng Nhật cơ bản (52 bài) |
| Tính năng | 8 thẻ: kana/kanji · nghe · nói · SRS · streak · tim · huy hiệu · server-side |
| **Bên trong một bài học** | Pipeline 8 ải + 9 kiểu bài tập + ngưỡng Boss Quiz 70/80/90% |
| Hành trình | 3 bước |
| FAQ | 6 câu, trả lời trung thực (không bịa testimonial) |
| CTA + Footer | CTA cuối, footer ghi công KanjiVG |

Bổ sung: menu mobile (trước không có — nav bị ẩn hoàn toàn dưới `md`), JSON-LD
`EducationalOrganization`, nút `.btn-3d` nhấn có phản hồi, số liệu cập nhật từ DB
(12 → 18 bài Irodori).

---

## 4. Kiểm thử

### 4.1 Cơ sở kiểm thử
- `scripts/ui-audit.mjs` — 19 màn hình × viewport, chụp full-page, bắt console error,
  kiểm tra overflow ngang, text <11px, nút thiếu accessible name, phân cấp heading, ảnh thiếu `alt`.
- `scripts/ui-flows.mjs` — 18 assert chức năng có tác dụng thật.
- `scripts/_qa-dump.ts` — dump dữ liệu từ DB để test trả lời đúng như người dùng.

### 4.2 Kết quả 9 renderer lesson

| kind | kết quả | kind | kết quả |
|---|---|---|---|
| `choice` | ✅ | `fill-blank` | ✅ |
| `token-order` | ✅ | `audio-choice` | ✅ |
| `matching` | ✅ | `passage` | ✅ |
| `text-input` | ✅ | `speak` | ✅ |
| `writing` | ✅ | | |

### 4.3 Audit giao diện

| Viewport | Số màn hình | Issue |
|---|---|---|
| 320px (narrow) | 19 | **0** |
| 768px (tablet) | 19 | **0** |
| 1440px (desktop) | 19 | **0** |

Không có tràn ngang ở bất kỳ viewport nào.

### 4.4 Test suite

```
bun test                     61 pass · 30 skip · 0 fail
bunx tsc --noEmit            0 error
bun run lint                 0 error (10 warning trong script QA tự viết)
content-validate.ts          VALIDATE OK · 47/47 · 0 error · 0 warning
irodori-validate.ts          OK · 18 bài · 279 từ · 1.419 câu
```

> **Lưu ý:** 30 test integration bị **skip** có chủ đích. Schema đã đổi sang provider
> `postgresql`, còn test tự tạo SQLite tạm. Test giờ đọc `TEST_DATABASE_URL` và sẽ tự
> chạy khi bạn trỏ nó tới một database Postgres **riêng** (tuyệt đối không dùng DB
> production — test dùng `--force-reset`).

---

## 5. Deploy

### 5.1 Vì sao chọn Vercel + Neon

| Tiêu chí | Vercel Hobby | Neon Free |
|---|---|---|
| Giá | $0 vĩnh viễn | $0 vĩnh viễn |
| Cần thẻ Visa | **Không** | **Không** |
| Hạn dùng | Không | Không (không phải trial) |
| Phù hợp | Node server luôn bật | Postgres thật, 1 GB |

**Quyết định kỹ thuật:** schema Prisma được thiết kế **cố tình portable** — không dùng
enum, không dùng native `Json`, mọi thứ là `String` + validate bằng Zod. Nên đổi từ
SQLite sang PostgreSQL chỉ là **1 dòng** (`provider`), đã kiểm chứng.

### 5.2 Những gì không giữ được trên nền tảng free

| Tính năng | Lý do | Ảnh hưởng |
|---|---|---|
| Leaderboard realtime (socket.io) | Serverless không chạy tiến trình socket.io dài hạn | **Không hề hỏng** — view tự chuyển sang polling 45 s. Đã sửa để **không còn** spam console error khi không có WS |
| Cache TTS trên filesystem | Serverless không có ổ đĩa bền | **Không ảnh hưởng** — app vốn đã phát audio bằng `speechSynthesis` của trình duyệt |

### 5.3 Đã verify trên production thật

```
GET  /api/health/live    200  {"status":"ok"}
GET  /api/health/ready   200  {"status":"ready","db":"up"}     ← Neon kết nối được
POST /api/auth/login     200  (session cookie)
GET  /api/auth/me        200  demo@nihongogo.local · role=USER
GET  /api/learn          200  7 section · 52 bài
GET  /api/overview       200  level 1 "Tân binh · 新人"
POST /api/lesson-sessions 200  tạo phiên thật
POST .../answer          200  correct=false, expected="a"  ← chấm điểm server-side
POST .../quit            200
GET  /api/kana           200  104 ký tự (public)
GET  /api/search         200
Browser: landing → login → learn → kana: 0 console error
```

### 5.4 ⚠️ Điều cần biết trước khi dùng lâu

1. **Vercel Hobby chỉ cho dùng cá nhân, không thương mại.** Nếu bạn định kiếm tiền từ
   site này thì phải lên Pro $20/tháng — nền tảng sẽ giới hạn dùng cho mục đích thương mại.
2. **Cần tạo Neon database mới sẽ mất dữ liệu.** Giải pháp dài hạn: dùng `prisma migrate`
   + Neon branching để có DB test riêng và CI chạy được integration test.
3. **Tài khoản seed chỉ dùng cho dev.** Đổi mật khẩu trước khi chia sẻ link.
4. **`AUTH_SECRET` phải khớp lúc seed.** Nếu đổi pepper sau khi seed thì tất cả mật khẩu
   đã tạo sẽ không verify được. Quy trình đúng: đặt `AUTH_SECRET` → seed → deploy.

---

## 6. File đã thay đổi

**Mới:** `src/components/shared/reveal.tsx` · `scripts/ui-audit.mjs` ·
`scripts/ui-flows.mjs` · `scripts/_qa-dump.ts` · `vercel.json`

**Sửa:** `src/components/views/landing.tsx` (viết lại) · `src/components/ui/accordion.tsx` ·
`src/components/views/learn.tsx` · `src/components/app/use-leaderboard-live.ts` ·
`src/app/api/grammar/route.ts` · `src/app/api/vocabulary/route.ts` ·
`mini-services/leaderboard-live/index.ts` · `prisma/schema.prisma` (provider) ·
`tests/integration/*.test.ts` (hỗ trợ Postgres) · 18 file khác (cỡ chữ 11px)

---

## 7. Việc còn lại nên làm

1. **Đổi mật khẩu tài khoản seed** trước khi chia sẻ link production.
2. **Chốt `.gitignore`** cho `qa/` và `.vercel-*` (đã thêm trong phiên này nhưng chưa commit).
3. **Tạo Neon branch cho test** để bật lại 30 integration test.
4. **Bật realtime** nếu cần: chạy `mini-services/leaderboard-live` trên host có WebSocket
   rồi đặt `NEXT_PUBLIC_LIVE_WS`.
5. **Rà soát nội dung bởi người bản xứ** — hiện trạng `MACHINE_REVIEWED`, chưa có người
   Nhật kiểm tra kính ngữ và sắc thái ngữ cảnh.