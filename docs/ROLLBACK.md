# Rollback — NihongoGo

## Nguyên tắc

1. **Ứng dụng**: rollback = quay về image tag bất biến trước đó. KHÔNG deploy
   chỉ tag `latest` mà không giữ tham chiếu SHA/tag cũ.
2. **Database**: ưu tiên migration tiến (expand→migrate→contract). Không auto-rollback
   schema sau khi đã có ghi chép dữ liệu. Nếu bắt buộc restore: ghi lại recovery point
   + khoảng mất dữ liệu tiềm năng.
3. **Secret bị lộ**: xoay credential MỚI, không bao giờ "rollback" về secret cũ.
4. **MinIO**: không xóa volume khi rollback app.

## Kịch bản 1 — Bản phát hành app lỗi

```bash
# Đang chạy image mới (lỗi), quay về tag cũ
docker tag nihongogo:2026-09-29-stable nihongogo:rollback-target   # nếu chưa có
docker compose -f compose.yaml -f compose.prod.yaml up -d           # với image tag cũ trong compose hoặc .env
curl -f http://localhost:3000/api/health/ready                      # smoke test
```
Yêu cầu: quy ước tag image = `nihongogo:YYYY-MM-DD-gitsha` cho mỗi lần deploy.

## Kịch bản 2 — Migration schema hỏng

1. DỪNG chuỗi migrate ngay (không chạy tiếp).
2. Nếu DB chưa nhận ghi chép mới: restore từ backup trước migrate
   (`./ops/restore-postgres.sh`) — ghi lại thời điểm + mất mát.
3. Nếu đã có ghi chép: viết migration sửa tiến (không revert mù).

## Kịch bản 3 — Seed content làm hỏng progression người dùng

Seed xóa & tạo lại course tree → NodeProgress cũ mất theo cascade.
- Phòng ngừa: backup DB ngay trước seed (`ops/backup-postgres.sh`).
- Phục hồi: restore đúng bản backup đó (chấp nhận mất tiến trình học mới từ lúc backup).

## Kịch bản 4 — Vẫn ổn nhưng nghi ngờ cấu hình

```bash
docker compose config            # xem cấu hình hiệu lực
docker compose logs --tail=200 app
docker compose ps                # healthcheck state
```
