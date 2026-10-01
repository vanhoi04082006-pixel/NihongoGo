# Triển khai miễn phí — so sánh 3 phương án

> Cập nhật: 2026-09-30. **Free-tier quota và điều khoản dịch vụ thay đổi theo thời gian —
> luôn kiểm tra trang giá chính thức của nhà cung cấp trước khi deploy.**
> Tài liệu này không cam kết bất kỳ gói miễn phí nào là "vĩnh viễn".

## Tổng quan

| Tiêu chí | A. VM miễn phí all-in-one | B. Split personal demo | C. Local / server riêng |
|---|---|---|---|
| App | Docker trên 1 VM | Vercel Hobby | Docker/máy riêng |
| Database | PostgreSQL container | Neon Free (hoặc tương đương) | PostgreSQL container |
| Object storage | MinIO container | MinIO phải chạy trên VM riêng | MinIO container |
| Redis (tùy chọn) | Container | Upstash Free (hoặc bỏ) | Container |
| Chi phí | 0đ (nếu được cấp VM) | 0đ | 0đ (điện + máy tự lo) |
| MinIO feasible | ✅ tự nhiên | ⚠️ vẫn cần VM persistent | ✅ |
| HA | ❌ 1 VM | ⚠️ phụ thuộc provider | ❌ |
| Độ phức tạp vận hành | Trung bình | Thấp (app) + trung bình (MinIO VM) | Thấp |
| Giới hạn thương mại | Theo điều khoản VM | Vercel Hobby chỉ personal/non-commercial | Không |
| Trách nhiệm backup | Bạn | Bạn (Neon có tự backup—kiểm tra) | Bạn |

## Phương án A — VM luôn-free + Docker Compose (khuyến nghị cho cá nhân)

1. Tạo VM ARM/AMD thuộc gói always-free (Oracle Cloud, Google Cloud e2-micro, AWS t2.micro… — quota tùy khu vực & thời điểm).
2. Cài Docker + Compose plugin.
3. Clone repo, tạo `.env` từ `.env.example` (đặt `AUTH_SECRET`, `POSTGRES_PASSWORD`, `S3_SECRET_KEY` mạnh).
4. Chuyển app sang PostgreSQL:
   - Đổi `provider = "postgresql"` trong `prisma/schema.prisma`
   - `DATABASE_URL=postgresql://...` trong `.env`
   - `bun run db:push && bun run db:seed`
5. `docker compose -f compose.yaml -f compose.prod.yaml up -d`
6. Đặt reverse proxy (Caddy/Traefik/Nginx) với HTTPS trước cổng 3000.

**Giới hạn phải ghi rõ khi vận hành:** một VM = không HA; MinIO single-node = không HA;
sức cấp VM miễn phí không được đảm bảo.

## Phương án B — Split hosting (demo nhanh)

- App: Vercel Hobby — **chỉ hợp mục đích cá nhân/phi thương mại** theo điều khoản hiện tại.
- DB: Neon Free (PostgreSQL serverless) — cập nhật quota tháng 9/2026: 100 project,
  100 CU-giờ/project/tháng, 0.5 GB storage/project. **Kiểm tra lại trước khi dùng.**
- Redis: Upstash Free (tùy chọn) — app vẫn chạy không cần Redis (fallback in-memory).
- MinIO: không đặt được trên serverless — nếu cần, chạy trên VM/nas riêng.

Lưu ý: standalone output của image Docker không deploy được lên Vercel;
trên Vercel dùng adapter Node chuẩn (`next build`).

## Phương án C — Local / server riêng

Giống A nhưng trên phần cứng của bạn. Không phụ thuộc cloud, chỉ online khi máy bật.
Phù hợp: demo lớp học, dùng gia đình.

## Lệnh golden path

```bash
bun install --frozen-lockfile       # cài tái lập được
bun run lint                        # gate 1
bunx tsc --noEmit -p tsconfig.json  # gate 2
bun scripts/content-validate.ts     # gate nội dung
bun run build                       # build production (KHÔNG thay thế lint)

docker compose config               # kiểm tra cấu hình
docker compose build && docker compose up -d
docker compose ps
curl -f http://localhost:3000/api/health/live
curl -f http://localhost:3000/api/health/ready

./ops/backup-postgres.sh            # backup
bun prisma/seed.ts                  # seed (idempotent với content)
```

## Chuyển SQLite → PostgreSQL (khi cần)

1. `pg_dump`/`sqlite3 .dump` — snapshot dữ liệu cũ.
2. Đổi provider trong `prisma/schema.prisma`, `DATABASE_URL` → `postgresql://`.
3. `bun run db:push` trên DB mới (hoặc migrate).
4. Import dữ liệu (giữ nguyên ID nếu có thể).
5. Đối chiếu row-count các bảng chính: User, Lesson, LessonNode, Exercise, Question,
   Vocabulary, GrammarPoint, Kanji, KanaCharacter, XPTransaction, SRSItem.
6. Chạy QA trên Postgres trước khi cutover.
7. Ghi lại thời điểm cutover + đường lùi (restore từ snapshot SQLite).

> Môi trường phát triển của dự án này dùng SQLite — luồng chuyển đổi ở trên
> đã được tài liệu hóa nhưng **chưa diễn tập trong sandbox này** (honest disclosure).
