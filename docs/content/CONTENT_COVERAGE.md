# Content Coverage — Báo cáo độ phủ nội dung

> Chốt: 2026-09-30 · Nguồn truth: DB sau seed (`bun scripts/audit-content.ts`)

## Tổng quan toàn khóa

| Chỉ số | Giá trị |
|---|---|
| Bài học | **52** (2 kana + 50 bài sơ cấp) — 100% PUBLISHED |
| Tổng câu hỏi | **~3.283** (kana 312 + L1-L3 140 + **L4-L50: 2.807**) |
| Câu hỏi trung bình/bài (L4-50) | ~59,7 (min 58, max 61 — target 40-60) |
| Node trung bình/bài (L4-50) | 11-13 (luôn có node BOSS requiredScore 80) |
| Dạng tương tác/bài | 13-16 (target ≥8) |
| Từ vựng (L4-50 nguồn) | 944 mục biên soạn (876 sau dedup toàn khóa) |
| Điểm ngữ pháp (L4-50) | 127 (2-3/bài, mỗi điểm 4-6 drill) |
| Drill ngữ pháp | 536 câu drill author-tuned |
| Hội thoại gốc | 94 đoạn (47 bài × 2, mỗi đoạn 6-10 lượt) |
| Mục nghe | 223 (mỗi bài 4-5, ≥2 dictation/bài) |
| Kanji | **119** (40 nền + 79 mở rộng cho L11-50) |

## Ma trận theo bài (nguồn biên soạn L4-50)

order|vocab|grammar|drills|dialogueLines|listening|kanji
---|---|---|---|---|---|---
4|20|3|14|14|5|0 · 5|18|3|13|16|5|0 · 6|22|3|14|17|4|0 · 7|21|2|11|17|5|0 · 8|22|3|13|17|5|0 · 9|21|3|14|17|5|0 · 10|22|3|13|17|5|0
11|20|2|12|17|5|4 · 12|17|3|12|18|5|3 · 13|22|3|12|17|5|3 · 14|21|2|10|19|5|3 · 15|19|2|12|19|5|3 · 16|22|3|12|19|5|3 · 17|21|2|12|19|5|3 · 18|21|3|12|17|5|3 · 19|22|2|12|16|5|3 · 20|21|2|11|18|5|3
21|22|3|12|19|5|3 · 22|22|3|12|17|5|3 · 23|20|3|12|18|5|3 · 24|21|3|13|18|5|3 · 25|19|2|12|18|5|3 · 26|20|3|12|19|5|3 · 27|22|2|12|19|5|3 · 28|18|3|12|20|5|3 · 29|18|3|12|20|5|3 · 30|20|3|12|19|5|3
31|18|3|12|20|5|3 · 32|18|3|12|17|5|3 · 33|22|3|12|20|5|3 · 34|21|3|12|19|5|3 · 35|18|3|13|20|4|3 · 36|18|3|13|20|4|3 · 37|18|3|13|20|5|3 · 38|18|3|13|20|4|3 · 39|18|3|13|19|5|3 · 40|18|3|13|20|5|3
41|22|3|14|20|4|3 · 42|20|3|12|18|4|5 · 43|22|2|10|20|5|6 · 44|20|2|10|20|5|4 · 45|18|2|11|18|4|5 · 46|20|3|12|20|5|3 · 47|22|2|12|20|5|3 · 48|20|3|12|18|5|4 · 49|18|2|10|18|5|4 · 50|21|3|14|19|4|3

## Dạng tương tác được sinh ra mỗi bài (generator)

MATCHING (8 cặp) · SELECT_MEANING · SELECT_WORD · FILL_BLANK · GRAMMAR_CHOICE ·
PARTICLE_FILL · ERROR_CORRECTION · CONJUGATION · SENTENCE_ORDER (token) ·
TRANSLATE_VI_JA (word bank) · LISTEN_SELECT (TTS) · DICTATION (gõ lại) ·
READING (passage + 3 comprehension) · SPEAK (ASR) · KANJI_WRITING (viết tay) ·
MIXED_REVIEW (ôn trộn + Boss)

## Gate chất lượng

- `bun scripts/content-validate.ts` → **VALIDATE OK** (47/47 bài, 0 error;
  2 warning vô hại: L4/L9 có 61 câu > ngưỡng mềm 60).
- Typecheck strict toàn repo: PASS.
- QA browser: chơi thật 3 node của Bài 4 (matching + choice + passage) → hoàn thành, XP đúng.

## Rủi ro nội dung đã biết

1. **MACHINE_REVIEWED, chưa HUMAN_REVIEWED** — người bản xứ nên rà soát trước khi
   thương mại hóa (đặc biệt mẫu kính ngữ L33-34 và kontekstual nuance của L48-50).
2. Một số từ vựng xuất hiện ở nhiều bài (spiral review) — chủ đích về mặt sư phạm.
3. Phát âm TTS do máy sinh — chất lượng tuỳ giọng; có fallback browser speechSynthesis.
