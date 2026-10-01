# Backup & Restore — NihongoGo

## Nguyên tắc

1. **Backup trước mọi thao tác nguy hiểm** (migrate, seed lại content, cutover DB).
2. Backup phải **restore được** — mỗi quý diễn tập restore vào DB disposable.
3. Không bao giờ `--clean` vào DB production khi chưa có backup mới nhất.

## PostgreSQL

```bash
# Backup (custom format — nén, restore chọn lược được)
./ops/backup-postgres.sh "$DATABASE_URL" /safe-place/backup-$(date +%F).dump

# Liệt kê nội dung backup (kiểm tra integrity)
pg_restore --list /safe/place/backup-2026-09-30.dump | head -30

# Diễn tập restore vào DB DISPOSABLE (không phải production!)
createdb nihongogo_restore_drill
pg_restore --dbname=postgresql://.../nihongogo_restore_drill --no-owner backup-2026-09-30.dump
psql ... -c 'SELECT COUNT(*) FROM "Question";'   # đối chiếu số row

# Restore thật (CÓ XÓA object trùng tên — xác nhận RESTORE khi được hỏi)
./ops/restore-postgres.sh /safe-place/backup.dmp "$DATABASE_URL"
```

## SQLite (môi trường dev)

```bash
# Backup an toàn khi app đang chạy (WAL-aware)
sqlite3 db/custom.db ".backup '/safe-place/custom-$(date +%F).db'"

# Restore: dừng app → thay file → khởi động lại
```

## MinIO (object storage)

```bash
# Sao lưu bucket (cần mc + alias đã cấu hình)
mc mirror --overwrite local/nihongogo /safe-place/minio-nihongogo/

# Restore
mc mirror --overwrite /safe-place/minio-nihongogo/ local/nihongogo/
```
File TTS hiện được cache filesystem + metadata trong DB — mất bucket không làm
mất chức năng (regenerate được).

## Tần suất khuyến nghị

| Loại | Tần suất | Giữ |
|---|---|---|
| DB full dump | hằng ngày | 30 ngày + 12 bản tháng |
| MinIO mirror | hằng tuần | 4 bản |
| Diễn tập restore | hằng quý | ghi log kết quả |
