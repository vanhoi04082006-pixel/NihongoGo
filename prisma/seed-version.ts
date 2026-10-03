/**
 * Phiên bản nội dung seed — "đánh dấu hoàn tất" cho predev.
 *
 * seed.ts ghi giá trị này vào SystemConfig(key='seedVersion') ở CUỐI cùng — chỉ
 * khi toàn bộ nội dung (N5 + Irodori A1) đã ghi xong. scripts/predev.ts so khớp
 * giá trị này trước khi khởi động dev server:
 *   - thiếu / khác giá trị  → DB seed dở (bị gián đoạn giữa chừng) hoặc nội dung
 *     cũ → tự động chạy lại setup (dựng lại nội dung học, giữ tài khoản).
 *   - khớp                  → fast-path vài chục mili-giây.
 *
 * ⚠️ Bump hằng số này mỗi khi thay đổi nội dung seed (thêm/sửa bài học) để mọi
 * máy dev tự nhận nội dung mới qua `bun run dev`.
 */
export const SEED_VERSION = 'v3-2026-10-03-irodori18'
export const SEED_VERSION_KEY = 'seedVersion'
