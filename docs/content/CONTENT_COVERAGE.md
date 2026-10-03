# Content Coverage — Báo cáo độ phủ nội dung

> Cập nhật: 2026-10-03 · Nguồn truth: DB sau seed (`bun run db:seed` → `bun scripts/audit-content.ts`).
> `seedVersion` = `v3-2026-10-03-irodori18`.

## Tổng quan toàn hệ thống

| Chỉ số | Giá tr�� |
|---|---|
| Khoá học | **2** — `basic` (N5, 52 bài / 7 section) + `irodori-a1` (A1, 18 bài / 4 section) |
| Tổng bài / node / exercise | **70** / 864 / 1.285 |
| Tổng câu hỏi | **4.876** (N5 3.457 + Irodori 1.419) |
| Từ vựng / điểm ngữ pháp | 1.155 bản ghi vocab (974 term distinct) / **190** điểm ngữ pháp |
| Kana / Kanji | **208** ký tự · **119** chữ (N5 = 68, N4 = 51) |
| Thành tích / nhiệm vụ | **26** achievement (Bronze 9 · Silver 10 · Gold 5 · Diamond 2) · 8 quest template |
| Draft / orphan | **0** lesson DRAFT · **0** node DRAFT · **0** vocab orphan |

---

## Khoá 1 — N5 (`basic`)

| Chỉ số | Giá trị |
|---|---|
| Bài học | **52** (2 bài kana + L1–L3 viết tay + 47 bài codegen L4–L50) — 100% PUBLISHED |
| Tổng câu hỏi | **3.457** = kana **322** (hiragana 166 + katakana 156) · L1–L3 **140** · L4–L50 **2.995** |
| Câu hỏi TB/bài (L4–50) | **63,7** (min 62, max 65) |
| Node / Exercise (L4–50) | 590 / 778 — node **11–13**/bài (TB 12,6), luôn có node `BOSS` `requiredScore 80` |
| Dạng tương tác/bài (L4–50) | **13–16** |
| Từ vựng | **944** mục biên soạn ở L4–50 (TB 20,1/bài) → **876** bản ghi trong DB khoá N5 sau dedup |
| Điểm ngữ pháp | **137** (127 ở L4–50 + 10 ở L1–L3), 2–3/bài |
| Drill ngữ pháp | **573** drill (L4–50) + 457 ví dụ |
| Hội thoại gốc | **94** đoạn / **867** lượt (2 đoạn/bài, 6–10 lượt/đoạn) |
| Mục nghe | **227** (4–5/bài, ≥2 dictation/bài — tổng 94 dictation) |
| Đọc hiểu | 47 bài · **141** câu hỏi comprehension |
| Nói / Dịch | 188 câu nói · 223 cặp dịch VI→JA |
| Kanji luyện trong bài | 131 tham chiếu · kho dùng chung **119** chữ |

### Ma trận theo bài (nguồn biên soạn L4–50)

order|vocab|grammar|drills|dialogueLines|listening|kanji
---|---|---|---|---|---|---
4|20|3|14|14|5|0 · 5|18|3|13|16|5|0 · 6|22|3|14|17|4|0 · 7|21|2|11|17|5|0 · 8|22|3|13|17|5|0 · 9|21|3|14|17|5|0 · 10|22|3|13|17|5|0
11|20|2|12|17|5|4 · 12|17|3|12|18|5|3 · 13|22|3|12|17|5|3 · 14|21|2|10|19|5|3 · 15|19|2|12|19|5|3 · 16|22|3|12|19|5|3 · 17|21|2|12|19|5|3 · 18|21|3|12|17|5|3 · 19|22|2|12|16|5|3 · 20|21|2|11|18|5|3
21|22|3|12|19|5|3 · 22|22|3|12|17|5|3 · 23|20|3|12|18|5|3 · 24|21|3|13|18|5|3 · 25|19|2|12|18|5|3 · 26|20|3|12|19|5|3 · 27|22|2|12|19|5|3 · 28|18|3|12|20|5|3 · 29|18|3|12|20|5|3 · 30|20|3|12|19|5|3
31|18|3|12|20|5|3 · 32|18|3|12|17|5|3 · 33|22|3|12|20|5|3 · 34|21|3|12|19|5|3 · 35|18|3|13|20|4|3 · 36|18|3|13|20|4|3 · 37|18|3|13|20|5|3 · 38|18|3|13|20|4|3 · 39|18|3|13|19|5|3 · 40|18|3|13|20|5|3
41|22|3|14|20|4|3 · 42|20|3|12|18|4|5 · 43|22|2|10|20|5|6 · 44|20|2|10|20|5|4 · 45|18|2|11|18|4|5 · 46|20|3|12|20|5|3 · 47|22|2|12|20|5|3 · 48|20|3|12|18|5|4 · 49|18|2|10|18|5|4 · 50|21|3|14|19|4|3

### Dạng tương tác generator sinh ra mỗi bài

MATCHING (8 cặp) · SELECT_MEANING · SELECT_WORD · FILL_BLANK · GRAMMAR_CHOICE ·
PARTICLE_FILL · ERROR_CORRECTION · CONJUGATION · SENTENCE_ORDER (token) ·
TRANSLATE_VI_JA (word bank) · LISTEN_SELECT (TTS) · DICTATION (gõ lại) ·
READING (passage + 3 comprehension) · SPEAK (ASR) · KANJI_WRITING (viết tay) ·
MIXED_REVIEW (ôn trộn + Boss)

---

## Khoá 2 — Irodori A1 (`irodori-a1`)

> Nguồn biên soạn: `prisma/seed-data/irodori/irodori1..18.ts` · seed idempotent: `bun run seed:irodori`

| Chỉ số | Giá trị |
|---|---|
| Bài học | **18** — 100% PUBLISHED |
| Section | **4** — 4 + 4 + 4 + 6 bài: *Khởi đầu — Starter* · *Cuộc sống hằng ngày — Daily Life* · *Mở rộng — Extension* · *Đường phố & kế hoạch — Out & About* |
| Node / Exercise / Câu hỏi | **233** / 377 / **1.419** (TB 78,8 · min 74, max 80) |
| Node/bài | 12–13 (TB 12,9) |
| Từ vựng | **279** (14–19/bài, TB 15,5) — **term duy nhất toàn khoá** |
| Điểm ngữ pháp | **53** (2–3/bài, code `i{order}-…`) — 239 drill + 142 ví dụ |
| Hội thoại | 18 đoạn · **149** lượt |
| Đọc hiểu | 18 đoạn · 108 dòng · 54 câu hỏi |
| Nghe | **90** mục (5/bài) — **36** dictation |
| Nói / Dịch | 90 câu nói · 90 cặp VI→JA · 54 câu JA→VI · 36 word bank |
| Viết tay | **42** câu `KANJI_WRITING` (42 chữ distinct) + **86** câu `KANA_WRITING` (44 ký tự distinct) |
| Dạng tương tác | **20** loại (thêm `DIALOGUE`, `WORD_BANK`, `TRANSLATE_JA_VI`, `KANA_WRITING` so với N5) |

Node mỗi bài: `VOCAB` → `VOCAB_PRACTICE` → `GRAMMAR` ×2-3 → `LISTENING` (5 nghe + 2 dictation)
→ `READING` (`DIALOGUE` + `READING` passage ×3 câu hỏi) → `SENTENCE` (order + word bank)
→ `TRANSLATION` (VI→JA + JA→VI) → `SPEAKING` (5 câu) → `WRITING` (kanji + kana)
→ `MIXED` → `BOSS` (10 câu, `requiredScore 80`).

**Trùng vocab với N5** (vd わたし, えき): mỗi khoá sở hữu bản ghi riêng — seeder
không đánh cắp `lessonId` của khoá khác. Vì vậy `audit:content` báo WARN
`VOCAB_DUPLICATE` là **chủ đích**, không phải lỗi.

**Patch kana-hiragana** (bởi `seed-irodori.ts`): thêm `k9 SPEAKING` (8 câu đọc to)
+ `k10 READING` (2 đoạn kana thuần × 4 câu comprehension); `k8 BOSS` được đẩy
`order → 10` để giữ làm node cuối (logic unlock khoá theo node PUBLISHED cuối).

---

## Gate chất lượng (kết quả chạy 2026-10-03)

| Gate | Kết quả |
|---|---|
| `bun scripts/content-validate.ts` | **VALIDATE OK** — 47/47 bài L4–50, 0 error, 0 warning |
| `bun scripts/irodori-validate.ts` | **OK** — 18 bài, 279 từ duy nhất, TB ~79 câu/bài |
| `bun scripts/audit-content.ts` | **AUDIT OK** — `ERROR: 0` (181 WARN `VOCAB_DUPLICATE` chủ đích) |
| `bun test tests/unit` | 61 pass / 0 fail |
| `bun test tests/integration` | 30 pass / 0 fail (tự seed DB SQLite riêng trong `tests/.tmp`) |
| `bunx tsc --noEmit` | 0 error |
| `bun run lint` | 0 error |

## Rủi ro nội dung đã biết

1. **MACHINE_REVIEWED, chưa HUMAN_REVIEWED** — người bản xứ nên rà soát trước khi
   thương mại hóa (đặc biệt mẫu kính ngữ L33-34 và kontekstual nuance của L48-50).
2. Một số từ vựng xuất hiện ở nhiều bài (spiral review) — chủ đích về mặt sư phạm.
3. Phát âm TTS do máy sinh — chất lượng tuỳ giọng; có fallback browser `speechSynthesis`.
4. **94 hội thoại của khoá N5 hiện chưa được generator dùng** — được biên soạn và
   validate đầy đủ nhưng `buildSeedLesson` chỉ đọc `dialogues` ở dạng source; node
   `READING` của N5 sinh từ `reading` chứ không từ `dialogues`. Xem `docs/ARCHITECTURE.md`.