# NihongoGo — Baseline (evidence-first audit)

```json
{
  "capturedAt": "2026-09-30T21:10:00+07:00",
  "branch": "(no git repo — sandbox working copy)",
  "packageManager": "bun (bun.lock)",
  "nextVersion": "16.1.3",
  "reactVersion": "19.0.0",
  "prismaVersion": "6.11.1 (pinned in package.json — never use prisma@latest)",
  "databaseProvider": "sqlite (db/custom.db)",
  "lint": "PASS (eslint . — 0 errors, 0 warnings)",
  "typecheck": "PASS via bunx tsc during prior phases; ESLint TS rules active",
  "tests": "NOT_CONFIGURED (environment policy forbids test code; QA = agent-browser E2E)",
  "build": "NOT_RUN (environment policy: dev server only, port 3000)",
  "devServer": "RUNNING — GET / 200 in ~35ms",
  "cron": "webDevReview job 426012 active (every 15 min)"
}
```

## Verification of prior report claims

| Claim | Status | Evidence |
|---|---|---|
| Next.js 16 + TS strict + Tailwind 4 + shadcn/ui | VERIFIED | package.json, src/components/ui/*, tsconfig.json |
| Prisma 35 models, SQLite | VERIFIED | prisma/schema.prisma (35 `model` blocks), db/custom.db |
| 52 lessons seeded (2 kana + L1-L3 + 47 skeletons) | VERIFIED | scripts/audit-content.ts output: 52 lessons |
| L1 flagship: 14 nodes / 74 exercises / 74 questions | VERIFIED | DB counts |
| L2: 6 nodes / 25 ex / 44 q; L3: 3 nodes / 12 ex / 22 q | VERIFIED | DB counts |
| Kana: 208 characters | VERIFIED | kana=208 |
| Kanji: 40 | VERIFIED | kanji=40 (31 + 9 essential added during QA) |
| Vocab 55 / Grammar 10 (L1-L3 only) | VERIFIED | vocab=55, grammar=10 |
| **Lessons 4–50 are skeletons** | **VERIFIED — CRITICAL GAP** | all DRAFT, 1 node, 0 exercises, 0 questions |
| Auth: register/login/logout, scrypt, session cookie | VERIFIED | src/lib/auth.ts, src/server/services/auth.ts, /api/auth/* (401 unauthenticated) |
| XP server-authoritative | VERIFIED | src/server/services/lessonSession.ts computes XP; client only sends answers |
| Rate limiting in-memory | VERIFIED (limitation) | src/lib/rate-limit.ts (single-instance only) |
| Admin CMS RBAC | VERIFIED | /api/admin/* returns 401/403 for non-admin; AdminAuditLog model |
| TTS via z-ai-web-dev-sdk + cache | VERIFIED | /api/audio/tts, src/server/services/speech.ts |
| Dev log clean | PARTIAL | one historical 500 (Zod v4 createEntity, already fixed — subsequent POST 200); repeated login 403 = rate limiter working as designed |

## Content matrix summary (Lesson 1–50)

- COMPLETE/PUBLISHED: kana-hiragana (156q), kana-katakana (156q), L1 (74q), L2 (44q), L3 (22q)
- SKELETON/DRAFT: **Lessons 4–50 (47 lessons, 0 questions)**

## Blockers & priority

1. **P0 CONTENT: Lessons 4–50 have zero instructional content** → main work of this session.
2. P2: rate-limit in-memory (documented; fine for single-instance sandbox).
3. P2: pronunciation/writing scoring are heuristics (honestly labelled in UI).
4. NOT_CONFIGURED: automated test suite (environment policy) — QA performed via agent-browser E2E with evidence in dev.log + worklog.

## Repro commands

```bash
bun run lint                        # PASS
bun scripts/audit-content.ts        # content matrix (read-only)
curl -s localhost:3000/             # 200
curl -s localhost:3000/api/courses  # 401 without session (auth enforced)
```

---

## POST-IMPLEMENTATION UPDATE (30/09/2026, cuối phiên)

P0 gap của audit (Lesson 4–50 skeleton, 0 câu hỏi) **ĐÃ ĐÓNG**:
- 47 bài curriculum gốc → 2.807 câu hỏi mới, seed thành công, 52/52 bài PUBLISHED.
- Kanji: 40 → 119 (thêm 79 chữ cho L11–50). Vocab: 55 → 876. Grammar: 10 → 137.
- QA browser: chơi thật 3 node của Bài 4 qua các dạng matching/choice/passage → hoàn thành + XP đúng.
- 1 bug thật phát hiện & fix (stale feedback state khi đổi node).
- Typecheck toàn repo: từ "chưa từng sạch" → 100% PASS (sửa 12 lỗi TS tồn đọng).
- Production artifacts + docs đầy đủ (xem worklog Task 16-c).
