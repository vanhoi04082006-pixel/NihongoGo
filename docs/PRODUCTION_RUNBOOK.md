# Production Runbook — NihongoGo

## 1. Kiểm tra trước khi lên production

- [ ] `bun run lint` — PASS
- [ ] `bunx tsc --noEmit -p tsconfig.json` — PASS
- [ ] `bun scripts/content-validate.ts` — VALIDATE OK
- [ ] `bun run build` — PASS
- [ ] `.env` production: `AUTH_SECRET` ngẫu nhiên ≥ 32 ký tự, KHÔNG dùng giá trị mặc định
- [ ] `POSTGRES_PASSWORD`, `S3_SECRET_KEY` mạnh và riêng biệt
- [ ] Không secret nào bị commit (check `git log -p .env*`)

## 2. Khởi động stack

```bash
cp .env.example .env        # rồi điền giá trị thật
docker compose -f compose.yaml -f compose.prod.yaml up -d
docker compose ps           # chờ app/postgres/minio healthy
curl -f http://localhost:3000/api/health/live
curl -f http://localhost:3000/api/health/ready
```

## 3. Seed nội dung lần đầu (hoặc khi cập nhật curriculum)

```bash
# Trong container app (SQLite) hoặc từ máy dev (Postgres)
bun prisma/seed.ts
```
Seed idempotent với nội dung: xóa & tạo lại course tree, upsert kana/kanji,
GIỮ users/progress/XP. Chạy lại an toàn.

⚠️ Lưu ý: chạy seed sau khi nội dung thay đổi sẽ reset NodeProgress…
thực tế KHÔNG — progress gắn user+nodeId; node cũ bị xóa → progress node cũ mất
theo cascade. Với production có người dùng thật: chỉ seed khi chấp nhận reset
progress học (hoặc viết migration ánh xạ node key).

## 4. Kiểm tra sau triển khai

| Kiểm tra | Cách | Kết quả mong đợi |
|---|---|---|
| Trang chủ | `curl -sf http://localhost:3000/` | 200 |
| Health live | `/api/health/live` | `{"status":"ok"}` |
| Health ready | `/api/health/ready` | `{"status":"ready"}` 200 |
| Auth | POST `/api/auth/login` sai mật khẩu | 401 |
| Nội dung | GET `/api/courses` (có session) | 200 + 52 bài |

## 5. Vận hành hằng ngày

- Log: `docker compose logs -f --tail=200 app`
- Backup DB: `./ops/backup-postgres.sh` (cron khuyến nghị hằng ngày)
- Cập nhật app: build image mới → giữ tag cũ → `docker compose up -d` → smoke test → xóa tag cũ sau N ngày ổn định.

## 6. Sự cố thường gặp

| Triệu chứng | Nguyên nhân probable | Xử lý |
|---|---|---|
| `/api/health/ready` 503 | DB chưa up / DATABASE_URL sai | `docker compose logs postgres`, kiểm tra .env |
| Login luôn 403 | Rate-limit kích hoạt do brute-force | kiểm tra log; đợi cửa sổ trôi qua; bật Redis profile nếu nhiều instance |
| Seed lỗi FK | DB cũ chưa sạch | kiểm tra cascade trong schema; dùng DB disposable để seed |
| TTS chậm/lỗi | z-ai SDK không cấu hình | kiểm tra env của SDK; app vẫn chạy (client fallback speechSynthesis) |
