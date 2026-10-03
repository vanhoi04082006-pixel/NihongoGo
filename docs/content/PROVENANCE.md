# Provenance — Nguồn gốc nội dung NihongoGo

> Chính sách: **ORIGINAL_GENERATED** — 100% nội dung học do NihongoGo biên soạn gốc.

## Khung tham chiếu

| Trường | Giá trị |
|---|---|
| Syllabus edition tham chiếu | MNN-2E (cấu trúc 50 bài sơ cấp phổ biến) |
| Phạm vi tham chiếu | CHỈ thứ tự chủ đề + mục tiêu học cấp cao |
| Nội dung | Dialogue, ví dụ, câu hỏi, giải thích — 100% viết mới |
| Trạng thái review | MACHINE_REVIEWED (validator tự động + QA browser) |
| Nội dung sinh ra | **4.876 câu hỏi** / 70 bài / 208 kana / 119 kanji — xem `CONTENT_COVERAGE.md` |

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

## Bản ghi khoá "Irodori A1 — Tiếng Nhật sinh tồn" (Task 27, 2026-10-01)

| Trường | Giá trị |
|---|---|
| Course slug | `irodori-a1` (order 2, PUBLISHED, **4 section**: 4 + 4 + 4 + 6 bài) |
| Khung tham chiếu | Danh sách chủ đề giao tiếp sinh tồn cấp A1 (JF A1 — tri thức phổ quát) |
| Phạm vi tham chiếu | CHỈ tên chủ đề: chào hỏi, giới thiệu, số/giờ/ngày, mua sắm, ăn uống, thói quen, chỉ đường, sở thích, thời tiết, lời mời, sức khoẻ, tổng kết |
| Nội dung | **18 bài** (`prisma/seed-data/irodori/irodori1..18.ts`) — **279** từ vựng, **53** điểm ngữ pháp (239 drill), 149 lượt hội thoại, 108 dòng đọc hiểu (54 câu hỏi), 90 mục nghe (36 dictation), 90 câu nói, 90 cặp dịch VI→JA, 54 câu JA→VI, 36 word bank, 42 bài kanji + 44 kana viết tay — 100% viết mới |
| Trạng thái review | MACHINE_REVIEWED (`bun scripts/irodori-validate.ts` 0 error + `bun run audit:content` 0 ERROR) |

Ràng buộc biên soạn đã kiểm chứng: term duy nhất toàn khoá (279/279); grammar code
`i{order}-…` không đụng N5; exampleJa chứa term/reading; tokens ghép lại đúng câu gốc;
kanji nằm trong 119 chữ seed; kana viết tay nằm trong 208 ký tự seed.

Ngày chốt: 2026-09-30 (N5) · 2026-10-01 → **cập nhật 2026-10-03** (mở rộng 12 → 18 bài,
`seedVersion` = `v3-2026-10-03-irodori18`).
