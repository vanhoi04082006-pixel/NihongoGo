#!/usr/bin/env bash
# NihongoGo — Restore PostgreSQL từ file pg_dump (custom format)
#
# Cách dùng:
#   ./ops/restore-postgres.sh backup.dump                            # dùng DATABASE_URL
#   ./ops/restore-postgres.sh backup.dump postgresql://u:p@h:5432/db
#
# ⚠️ CẢNH BÁO: --clean --if-exists sẽ XÓA object trùng tên trong đích.
# CHỈ chạy vào database disposable hoặc khi bạn thực sự muốn ghi đè.
# Luôn backup đích trước khi restore (xem docs/BACKUP_RESTORE.md).

set -euo pipefail

FILE="${1:?Cần đường dẫn file backup (tham số 1)}"
URL="${2:-${DATABASE_URL:?Cần DATABASE_URL hoặc truyền url như tham số 2}}"

if [ ! -f "$FILE" ]; then
  echo "✗ Không tìm thấy file backup: $FILE" >&2
  exit 1
fi

SAFE_URL=$(echo "$URL" | sed -E 's#^([^:]+)://[^@]+@#\1://***@#')

echo "⚠️  SẼ GHI ĐÈ dữ liệu trùng tên trong: ${SAFE_URL}"
read -r -p "Nhập chính xác RESTORE để tiếp tục: " CONFIRM
if [ "$CONFIRM" != "RESTORE" ]; then
  echo "Đã hủy."
  exit 1
fi

echo "→ Restoring ${FILE} → ${SAFE_URL}"
pg_restore --dbname="$URL" --clean --if-exists --no-owner "$FILE"

echo "✅ Restore hoàn tất. Kiểm tra:"
echo "   psql '$SAFE_URL' -c 'SELECT COUNT(*) FROM \"User\";'"
