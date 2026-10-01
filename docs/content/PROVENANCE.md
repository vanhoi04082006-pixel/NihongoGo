# Provenance — Nguồn gốc nội dung NihongoGo

> Chính sách: **ORIGINAL_GENERATED** — 100% nội dung học do NihongoGo biên soạn gốc.

## Khung tham chiếu

| Trường | Giá trị |
|---|---|
| Syllabus edition tham chiếu | MNN-2E (cấu trúc 50 bài sơ cấp phổ biến) |
| Phạm vi tham chiếu | CHỈ thứ tự chủ đề + mục tiêu học cấp cao |
| Nội dung | Dialogue, ví dụ, câu hỏi, giải thích — 100% viết mới |
| Trạng thái review | MACHINE_REVIEWED (validator tự động + QA browser) |

## Được phép (đã làm)

- Dùng **progression chủ đề cấp cao**: bài nào dạy thời gian, bài nào dạy thể て,
  bài nào dạy bị động… (đây là tri thức ngữ pháp phổ quát của tiếng Nhật).
- Dùng từ vựng thông dụng JLPT N5/N4 (lexical facts).
- Tự viết hội thoại, ví dụ, drill, câu hỏi nghe/đọc/nói/viết.

## Bị cấm (đã không làm)

- ❌ Sao chép dialogue, ví dụ, bài tập, bảng từ vựng nguyên văn sách giáo khoa.
- ❌ "Paraphrase gần giống" một bài tập có bản quyền.
- ❌ Bundle audio / minh họa / bản dịch của nhà xuất bản.
- ❌ Sao chép nội dung, assets, source code, layout pixel của Duolingo.

## Cơ chế đảm bảo

1. **Pipeline sinh nội dung deterministic** (`prisma/seed-data/curriculum/`):
   người biên soạn viết data nguồn (vocab/grammar/đoạn hội thoại) → generator
   sinh câu hỏi; đáp án luôn nhất quán với data nguồn.
2. **Validator 2 tầng** (`scripts/content-validate.ts`): schema + tính nhất quán
   đáp án + số câu hỏi 40–60/bài + itemRef hợp lệ.
3. Mọi file curriculum có header ghi rõ "nội dung gốc".

## Bản ghi theo bài

Mỗi `prisma/seed-data/curriculum/lesson{N}.ts` là một bản ghi provenance độc lập:
- `slug`, metadata, objectives — theo progression cấp cao.
- Nội dung — biên soạn bởi agent NihongoGo (Task 16-c*), kiểm chứng tự động.

Ngày chốt: 2026-09-30.
