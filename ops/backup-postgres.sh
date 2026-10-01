#!/usr/bin/env bash
# NihongoGo — Backup PostgreSQL (pg_dump custom format, có thể restore chọn lược)
#
# Cách dùng:
#   ./ops/backup-postgres.sh                          # dùng DATABASE_URL từ môi trường
#   ./ops/backup-postgres.sh postgresql://user:pass@host:5432/db
#   ./ops/backup-postgres.sh <url> /path/to/backup.dump
#
# An toàn:
# - KHÔNG ghi secret vào log (url được làm sạch khi in).
# - File backup chứa toàn bộ dữ liệu — bảo vệ như bảo vệ database.

set -euo pipefail

URL="${1:-${DATABASE_URL:?Cần DATABASE_URL hoặc truyền url như tham số 1}}"
OUT="${2:-backup-$(date +%Y%m%d-%H%M%S).dump}"

# Làm sạch url khi in (chỉ hiện host + db)
SAFE_URL=$(echo "$URL" | sed -E 's#^([^:]+)://[^@]+@#\1://***@#')
echo "→ Backup PostgreSQL: ${SAFE_URL}"
echo "→ Output: ${OUT}"

pg_dump --format=custom --file="$OUT" "$URL"

SIZE=$(du -h "$OUT" | cut -f1)
echo "✅ Backup hoàn tất: ${OUT} (${SIZE})"
echo "   Kiểm tra integrity: pg_restore --list ${OUT} | head"
