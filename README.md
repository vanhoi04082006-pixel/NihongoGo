# NihongoGo 🌸

> Nền tảng học tiếng Nhật **gamified** dành cho người Việt — học từng ải một, mỗi ngày một bước.

NihongoGo lấy cảm hứng từ các *pattern* học tập phổ biến (learning path, XP, streak, hearts, quests, SRS) nhưng **toàn bộ nội dung học, giao diện và kiến trúc đều là bản gốc**: câu hỏi, hội thoại, giải thích do đội ngũ biên soạn riêng; chỉ tham khảo *trình tự chủ điểm kiến thức* chuẩn của tiếng Nhật sơ cấp (không sao chép nội dung có bản quyền của bất kỳ giáo trình hay ứng dụng nào).

## Tính năng chính

| Nhóm | Tính năng |
|---|---|
| **Học tập** | **70 bài** / 11 phần / 4.876 câu hỏi: `basic` — N5 52 bài (2 bài kana + 50 bài sơ cấp chia 7 phần) và `irodori-a1` — A1 18 bài (4 phần). Mỗi bài gồm nhiều ải nhỏ (từ vựng → ngữ pháp → nghe → đọc → nói → viết → mixed → Boss Quiz) |
| **Lesson Engine** | 29 dạng bài tập (multiple choice, matching, word bank, sentence order, dịch 2 chiều, dictation, nghe, nói, viết tay canvas, đọc hiểu…), state machine phía server, chấm điểm server-side |
| **Kana** | Bảng Hiragana & Katakana đầy đủ 208 ký tự (basic/dakuten/handakuten/youon) + luyện nhận diện, nghe, gõ romaji, viết tay |
| **Kanji** | 40 chữ Hán N5 kèm âm On/Kun, bộ thủ, ví dụ, mẹo nhớ, luyện viết tay heuristic |
| **Nghe & Nói** | TTS tiếng Nhật có cache vĩnh viễn (tốc độ thường/chậm, fallback giọng đọc trình duyệt); ghi âm giọng nói → ASR → chấm độ tương đồng chuyển âm |
| **SRS** | Spaced repetition biến thể SM-2 cho từ vựng/kanji/ngữ pháp/kana, dashboard "Ôn tập hôm nay: X mục" |
| **Sổ lỗi sai** | Lưu mọi câu trả lời sai kèm đáp án đúng, luyện lại đến khi sạch sổ |
| **Gamification** | XP (server-verified, chống gian lận), streak theo timezone người dùng, hearts (config bật/tắt được), 3 nhiệm vụ hằng ngày, 24 thành tích 4 tier, bảng xếp hạng tuần 4 giải Sakura→Fuji→Samurai→Shogun (thăng/hạng tự động) |
| **CMS Admin** | CRUD toàn bộ nội dung (course/section/lesson/node/exercise/question/vocab/grammar/kanji), Question Builder trực quan theo từng dạng bài + chế độ JSON, draft/publish, preview, audit log, cấu hình hệ thống |
| **Bảo mật** | scrypt password hashing, session cookie httpOnly, RBAC (USER/EDITOR/ADMIN), Zod validation mọi input, rate-limit, chống gửi XP giả từ client |

## Tech stack

- **Next.js 16** (App Router, TypeScript strict) + **React 19**
- **Tailwind CSS 4** + **shadcn/ui** (New York) + **Lucide icons** + **framer-motion**
- **TanStack Query** (server state) + **react-hook-form + Zod** (forms)
- **Prisma ORM** — SQLite cho dev (sandbox), PostgreSQL cho production (chỉ cần đổi provider)
- **z-ai-web-dev-sdk** (backend only) cho TTS & ASR, có fallback

Kiến trúc chi tiết: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)

## Chạy dự án (development)

### Yêu cầu

- **Bun 1.1+** (khuyến nghị — script dùng Bun) hoặc Node.js 20+
- (Tuỳ chọn) Docker cho production

### Cài đặt nhanh (Windows / macOS / Linux)

```bash
# 1. Cài dependencies
bun install

# 2. Chạy dev server — chỉ vậy là đủ!
bun run dev
# → http://localhost:3000
```

**Lần chạy đầu tiên**, `bun run dev` tự động phát hiện database chưa có và tự khởi tạo (.env → Prisma Client → tạo schema → seed 70 bài học, mất ~1–2 phút), rồi mới khởi động server. Các lần sau bỏ qua bước này và khởi động ngay.

Nếu muốn khởi tạo thủ công (không chạy dev):

```bash
bun run setup
```

`bun run setup` tự động: tạo `.env` từ `.env.example` (giữ nguyên `.env` nếu đã có), tạo thư mục `db/`, chạy `prisma generate` + `prisma db push`, seed toàn bộ nội dung học (70 bài, 4.876 câu hỏi, 190 điểm ngữ pháp, 208 kana, 119 kanji, 26 achievement, 8 quest, 10 users mẫu).

### Cài đặt thủ công (từng bước)

```bash
# 1. Cài dependencies
bun install

# 2. Tạo .env từ mẫu
#    Linux/macOS:        cp .env.example .env
#    Windows (cmd):      copy .env.example .env
#    Windows (PowerShell): Copy-Item .env.example .env
# → mặc định dùng SQLite tại db/custom.db; sửa AUTH_SECRET khi production

# 3. Tạo database (SQLite) + Prisma Client
bun run db:push

# 4. Seed dữ liệu
bun run db:seed

# 5. Chạy dev server
bun run dev
# → http://localhost:3000
```

### Tài khoản seed (CHỈ dành cho local dev — đổi/khóa khi production)

| Vai trò | Email | Mật khẩu |
|---|---|---|
| ADMIN | `admin@nihongogo.local` | `admin12345` |
| USER (demo) | `demo@nihongogo.local` | `demo12345` |

### Scripts

| Lệnh | Mô tả |
|---|---|
| `bun run setup` | Thiết lập 1 lệnh: .env + db + Prisma + seed (N5 + Irodori A1) |
| `bun run dev` | Dev server (port 3000) — lần đầu tự khởi tạo database nếu thiếu; phát hiện DB seed dở/cũ và TỰ dựng lại |
| `bun run lint` | ESLint |
| `bun test` | Test suite (unit + integration — integration tự setup SQLite riêng trong `tests/.tmp`, không đụng DB dev) |
| `bun run test:e2e` | E2E Playwright: đăng ký → đăng nhập → học bài → test-out → unlock (`tests/e2e/`) |
| `bun run seed` | Alias của db:seed — seed toàn bộ (N5 52 bài + Irodori A1 18 bài) |
| `bun run seed:irodori` | Chỉ seed/patch khoá Irodori A1 (idempotent) |
| `bun run audit:content` | Audit DB content: số liệu thật + question quality theo type + exercise 0 câu + orphan (exit 1 nếu ERROR) |
| `bun run db:push` | Đẩy schema Prisma xuống database |
| `bun run db:seed` | Seed dữ liệu (idempotent với users/progress) |
| `bun run db:migrate` | Tạo migration (dev) |
| `bun run build` | Production build |
| `bun run start` | Chạy production server |

## Kiểm thử & chất lượng nội dung

- **Unit tests** (`tests/unit/`): japanese normalizer, grading engine (mọi dạng bài + anti-cheat: server không tin điểm client), datetime/XP, CSRF helpers. Pure functions, không cần DB.
- **Integration tests** (`tests/integration/`): gọi route handlers thật (register/login/logout/me, CSRF/origin 2 chiều, RBAC USER→admin 403, tạo phiên học + trả lời theo đáp án thật từ DB, hearts không âm, XP ledger, double-complete, optimistic-lock, kana practice server-graded) trên SQLite riêng tự sinh.
- **E2E Playwright** (`tests/e2e/full-flow.e2e.ts`): luồng vàng chạy trên browser thật — đăng ký UI → đăng xuất → đăng nhập UI → học node kana đầu tiên (trả lời đúng toàn bộ 15 câu bằng đáp án đọc từ DB, đủ mọi renderer) → test-out "Nhảy tới đây?" đạt 100% → kiểm chứng toàn bộ node bài trước được đánh dấu hoàn thành + bài mới mở khóa + không có XP ảo trong ledger. Chạy: `bun run test:e2e` (tự khởi động dev server nếu chưa có).
- **Content validator** (`scripts/content-validate.ts`): chạy trong CI — validate file curriculum + generated questions (kể cả rule exercise 0 câu hỏi = FAIL).
- **DB audit** (`scripts/audit-content.ts`): số liệu thật từ database (lesson/node/exercise/question/vocab/grammar/kanji/kana), question quality theo type, renderer coverage, orphan — dùng `--json` cho CI.

### Khắc phục sự cố thường gặp

| Hiện tượng | Nguyên nhân | Cách xử lý |
|---|---|---|
| Khoá N5 hiện ít bài (VD 8/52) trong khi preview có 52 | Seed từng bị gián đoạn giữa chừng (Ctrl+C / lỗi) — check cũ chỉ nhìn `Course ≥ 1` nên DB dở vẫn "sẵn sàng" | Pull code mới nhất rồi `bun run dev` — predev phát hiện thiếu `seedVersion`, TỰ chạy lại setup (tài khoản giữ nguyên, tiến độ học đặt lại). Hoặc chạy tay: `bun run setup` |
| API trả 503 `DB_NOT_INITIALIZED` (P2021/P2022) | DB chưa được tạo / schema cũ | `bun run setup` (hoặc pull code mới rồi `bun run dev` — tự khởi tạo) |
| Seed im lặng lâu trên Windows | Đang ghi ~4.400 câu hỏi | Từ bản seed mới, mỗi bài in `[n/52]` — thấy tiến độ là bình thường, ĐỪNG Ctrl+C |

## Âm thanh & giọng nói (zero-cost)

- **TTS tiếng Nhật**: dùng giọng Nhật của trình duyệt (Web Speech API, Chrome/Edge/Safari đều có) — không cần API trả phí. Thiếu giọng Nhật → thông báo rõ, **không** phát giọng khác ngôn ngữ.
- **Luyện nói**: ưu tiên Web Speech Recognition (ja-JP) tại trình duyệt; nếu không có → ghi âm + ASR máy chủ (provider tùy chọn). Điểm là **text similarity** giữa transcript và câu mẫu — KHÔNG phải đánh giá âm vị học (hiển thị trung thực trong UI).

## Chuyển sang PostgreSQL (production)

1. Đổi `provider = "postgresql"` trong `prisma/schema.prisma`
2. Đổi `DATABASE_URL` thành connection string Postgres
3. `bun run db:push` (hoặc `bun run db:migrate` để tạo migration lịch sử)

Schema không dùng đặc thù của SQLite nên chuyển đổi là trực tiếp.

## Docker (production)

```bash
docker build -t nihongogo .
docker run -p 3000:3000 \
  -e AUTH_SECRET="$(openssl rand -hex 32)" \
  -e DATABASE_URL="file:/app/db/custom.db" \
  nihongogo
```

> Với production thật, khuyến nghị gắn volume cho `/app/db` (nếu giữ SQLite) hoặc chuyển PostgreSQL.

## Biến môi trường

| Biến | Bắt buộc | Mô tả |
|---|---|---|
| `DATABASE_URL` | ✅ | SQLite path (dev) hoặc Postgres URL (prod) — `bun run setup` tự tạo |
| `AUTH_SECRET` | production | Pepper hash session token — dev dùng giá trị mặc định, deploy thật phải đặt chuỗi ngẫu nhiên (`openssl rand -hex 32`) |

## Dịch vụ ngoài (tuỳ chọn)

Hệ thống TTS/ASR đi qua **provider abstraction** (`src/server/services/speech.ts`):

- Mặc định: `z-ai-web-dev-sdk` (backend only)
- Fallback client: `speechSynthesis` (ja-JP) khi server lỗi
- Muốn đổi vendor (Google TTS, Azure Speech…): implement lại interface `synthesize()` / `transcribe()` — không cần đụng code khác

Tương tự, `HandwritingRecognitionProvider` hiện dùng heuristic (số nét + IoU bitmap) — sẵn sàng cắm model nhận diện nét thật sau này.

## Cấu trúc thư mục chính

```
prisma/            schema + seed + seed-data (nội dung học dạng TS thuần)
src/app/api/       ~45 route handlers REST (thin controllers)
src/server/domain/ logic thuần: grading, SRS scheduler, XP calc
src/server/services/ orchestrator: auth, course, lessonSession, gamification…
src/components/    app (shell/router), views (màn hình), lesson (player + renderers), shared
docs/ARCHITECTURE.md
```

## Giới hạn hiện tại (trung thực)

- **Chấm phát âm** là text-similarity giữa kết quả ASR và câu mẫu (đã ghi rõ trong UI) — chưa phải đánh giá âm vị học.
- **Chấm viết tay** là heuristic (50% số nét + 50% độ phủ hình dạng) — đã ghi rõ trong UI.
- ~~Bài 4–50 là skeleton~~ → **ĐÃ HOÀN THIỆN (30/09/2026)**: toàn bộ 47 bài có nội dung gốc đầy đủ — xem `docs/content/CONTENT_COVERAGE.md`.
- Rate-limit dùng bộ nhớ trong (single-instance). Nếu scale nhiều instance → chuyển Redis.
- **Kho dữ liệu dev là SQLite**; chuyển PostgreSQL đã được viết tài liệu (`docs/DEPLOYMENT_FREE.md`) nhưng **chưa từng diễn tập** trên môi trường thật.
- **Nội dung MACHINE_REVIEWED, chưa HUMAN_REVIEWED** — cần người bản xứ rà soát trước khi thương mại hóa.
- 94 hội thoại của khoá N5 đã biên soạn + validate nhưng generator chưa dùng (node `READING` sinh từ `reading`); khoá Irodori thì có dùng `DIALOGUE`.

## Bản quyền nội dung

Toàn bộ câu hỏi, hội thoại, ví dụ, giải thích tiếng Việt là **nội dung gốc của NihongoGo**. Không sử dụng lại logo, hình ảnh, âm thanh, nội dung có bản quyền của bất kỳ ứng dụng hay giáo trình nào. Icon hệ thống: [Lucide](https://lucide.dev) (ISC license).

Dữ liệu **nét chữ kana/kanji** (stroke order) trong "Thành thạo Kana" lấy từ [KanjiVG](https://kanjivg.github.io) (tác giả Ulrich Apel), phân phối theo giấy phép [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) — chi tiết ghi công tại `public/strokes/CREDITS.md`.
