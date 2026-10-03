# NihongoGo — Architecture

> Nền tảng học tiếng Nhật gamified cho người Việt. Nội dung học **100% gốc** (chỉ lấy *progression chủ điểm kiến thức* kiểu Minna no Nihongo làm định hướng syllabus, không sao chép nội dung có bản quyền). UI/UX lấy *pattern* (learning path, XP, streak, quests...) làm cảm hứng, không clone visual/mascot/asset của bất kỳ sản phẩm nào.

## 1. System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│  Presentation (client)                                          │
│  src/app/page.tsx  →  <AppRoot/> (single user-visible route)     │
│  Hash router (#/learn, #/lesson/:id, #/kana, #/admin ...)        │
│  Views + Lesson Player + Exercise Renderers (React 19, client)   │
└───────────────┬─────────────────────────────────────────────────┘
                │ fetch (JSON, same-origin, cookie session)
┌───────────────▼─────────────────────────────────────────────────┐
│  API layer — Next.js Route Handlers (src/app/api/**)             │
│  Thin controllers: Zod validate → service call → JSON/error      │
│  Uniform error format { error: { code, message } }               │
└───────────────┬─────────────────────────────────────────────────┘
┌───────────────▼─────────────────────────────────────────────────┐
│  Application/Domain services (src/server/services, /domain)      │
│  auth, course, lessonSession(grading engine), progression, xp,   │
│  streak, hearts, srs, achievements, quests, leaderboard,         │
│  mistakes, analytics, speech(tts/asr), writing, admin           │
└───────────────┬─────────────────────────────────────────────────┘
┌───────────────▼─────────────────────────────────────────────────┐
│  Infrastructure                                                 │
│  Prisma Client (SQLite dev / PostgreSQL prod — provider switch)  │
│  z-ai-web-dev-sdk (TTS + ASR providers, backend only)            │
│  Filesystem TTS cache (.cache/tts)                               │
└─────────────────────────────────────────────────────────────────┘
```

**Layering rule:** React components không chứa business logic; route handlers không chứa domain logic; mọi tính toán điểm/XP/unlock nằm ở service/domain layer, gọi qua Prisma.

**Routing constraint (sandbox):** chỉ route `/` hiển thị cho người dùng. Toàn bộ "pages" là các view client-side điều khiển bởi hash router (`useHashRoute`) — hỗ trợ back/forward, deep-link, mà vẫn nằm trên `/`. Backend dùng route handlers `/api/**` (chuẩn REST, JSON).

## 2. Folder Structure

```
prisma/schema.prisma            # ~35 models
prisma/seed.ts                  # seed runner (idempotent)
prisma/seed-data/               # pure TS data files (content)
  types.ts                      # content contracts (shared types)
  kana.ts kanji.ts lesson1.ts lesson2.ts lesson3.ts curriculum/ irodori/
  achievements.ts quests.ts leagues.ts
src/lib/                        # shared infra (db, auth, http, japanese, rate-limit)
src/server/domain/              # pure logic: grading, srs scheduler, xp calc, streak calc
src/server/services/            # orchestrators dùng Prisma + domain
src/types/                      # API DTO types (client-safe)
src/app/api/**/route.ts         # thin controllers
src/components/app/*            # shell: sidebar, topbar, bottomnav, providers, router
src/components/views/*          # one file per screen (learn, kana, kanji, ...)
src/components/lesson/*         # player + exercise renderers + feedback
src/components/shared/*         # XPBadge, HeartCounter, StreakBadge, AudioButton, ...
src/hooks/*                     # useApi (TanStack Query wrappers), useSpeechRecord, ...
```

## 3. Database Model (nhóm chính)

- **Identity:** `User` (email, passwordHash scrypt, role USER|EDITOR|ADMIN), `UserProfile` (goal, dailyGoalXP, timezone, kanaKnowledge, onboarded), `Session` (token-hash, expiry), `UserSettings`.
- **Content:** `Course → Section → Lesson → LessonNode → Exercise → Question`. Question có `data` JSON (đề, tuỳ biến theo dạng) và `correctData` JSON (đáp án — không bao giờ gửi về client trước khi trả lời). Status `DRAFT|PUBLISHED` ở Course/Lesson/Node/Exercise. `ContentVersion` snapshot khi publish; `AdminAuditLog` ghi mọi thao tác admin.
- **Ngôn ngữ:** `Vocabulary`, `GrammarPoint`, `Kanji`, `KanaCharacter`, `AudioAsset` (TTS cache metadata).
- **Học tập:** `LessonSession` (state machine server-side), `ExerciseAttempt`, `UserProgress` (aggregate), `LessonProgress`, `NodeProgress`.
- **Gamification:** `XPTransaction` (nguồn sự thật XP — mọi XP do server tính), `UserStreak`, `UserHeart`, `Achievement`/`UserAchievement`, `QuestTemplate`/`UserDailyQuest`, `Leaderboard`/`LeaderboardEntry`, `Mistake` (sổ lỗi sai).
- **SRS:** `SRSItem` (per user × item), `SRSReview` (log).
- **Ops:** `SystemConfig` (heart system on/off, regen...), `AnalyticsEvent`.

SQLite cho dev theo ràng buộc môi trường; chuyển production: đổi `provider = "postgresql"` + `DATABASE_URL` (schema không dùng kiểu riêng của SQLite).

## 4. Lesson Engine

- Node → exercises (PUBLISHED, theo order) → flatten thành danh sách **question** trong `LessonSession` (state JSON: index, hearts, combo, correct/wrong, startTime, mode LESSON|PRACTICE|MISTAKE|REVIEW).
- Client **không bao giờ** nhận `correctData`; POST `/api/lesson-sessions/:id/answer` gửi payload trả lời → domain `gradeAnswer()` chấm theo type → trả `{correct, expected, explanation}` + cập nhật session/hearts/combo.
- Heart = 0 → session `FAILED` (mode LESSON). Mode PRACTICE/MISTAKE không mất tim, hoàn thành practice +1 tim.
- `POST .../complete`: server tính XP (base 10/câu đúng + combo bonus + perfect bonus + first-completion bonus; practice = 50%), ghi `XPTransaction`, cập nhật `NodeProgress`/`LessonProgress`/unlock, streak (theo timezone user), quest progress, SRS (correct=Good / wrong=Again qua `itemRef` trên question), achievements, analytics. Client không gửi số XP.
- Exercise renderers map theo `question.type` → 7 interaction primitives: ChoiceGrid, TextInput, TokenOrder (word bank/sentence order), Matching, Speaking (record→ASR), WritingCanvas, ReadingPassage (dialogue + câu hỏi con).

## 5. Progression & Unlock

- Node states: `LOCKED → AVAILABLE → IN_PROGRESS → COMPLETED → MASTERED` (mastered khi replay đạt ≥ required score).
- Chuỗi: node trước hoàn thành (score ≥ requiredScore) mới mở node sau; boss quiz cuối lesson phải xong mới mở lesson sau; section trước xong mới mở section sau. Bài chưa có node sẽ có 1 node DRAFT placeholder → hiển thị "Đang biên soạn".

## 6. SRS

- Service `src/server/domain/srs.ts` — biến thể SM-2: rating AGAIN/HARD/GOOD/EASY → ease, interval (ngày), difficulty, stability; `nextReviewAt` lưu UTC, "due today" tính theo ngày local của user timezone.
- SRSItem tạo lazy khi user gặp câu hỏi có `itemRef` hoặc review. Điểm tái cấu trúc sang FSRS: chỉ cần thay module này.

## 7. Speech & Audio Architecture

- **TTSProvider** (`src/server/services/speech/tts.ts`): interface `synthesize(text, {voice, speed}) → audio buffer`. Provider mặc định `ZaiSdkTTSProvider` (z-ai-web-dev-sdk, wav, cache filesystem + AudioAsset metadata, hash theo text+voice+speed). Dev fallback: client dùng `speechSynthesis` (ja-JP) nếu API lỗi.
- **SpeechRecognitionProvider**: interface `transcribe(audioBase64) → text`. Mặc định `ZaiSdkASRProvider`.
- **Pronunciation scoring**: normalize tiếng Nhật (katakana↔hiragana, punctuation, whitespace, dài âm) + Levenshtein similarity → điểm 0–100. UI ghi rõ đây là "độ tương đồng chuyển âm (text similarity)", không phải đo lường âm vị học.
- **HandwritingRecognitionProvider**: interface `evaluate(strokes, character) → {score, breakdown}`. MVP `HeuristicProvider`: so stroke count + render glyph chuẩn ra canvas so khớp bitmap (IoU) + bounding box — được khai báo rõ là heuristic.

## 8. Content Management

- Admin CMS (view `/admin` cho role ADMIN/EDITOR, kiểm tra quyền **ở server** trên mọi `/api/admin/*`).
- CRUD Course/Section/Lesson/Node/Exercise/Question/Vocabulary/Grammar/Kanji; UI tạo câu hỏi theo type (token builder cho sentence order, option builder cho MC...), Zod validation, confirm trước khi xóa, publish tạo `ContentVersion` snapshot + audit log; preview node chạy Lesson Player ở chế độ preview (không ghi tiến độ).

## 9. Security Model

- Password: scrypt (salt riêng, timingSafeEqual). Session: cookie httpOnly + SameSite=Lax, DB lưu SHA-256 của token.
- RBAC: USER < EDITOR (CRUD content) < ADMIN (publish/delete/users/config). Kiểm tra ở server.
- Input: Zod cho mọi payload; Prisma parameterized (chống SQL injection); React escaping (XSS); rate-limit in-memory cho auth + answer/speech; sanity check session ownership; XP/unlock/achievement do server quyết định (anti-cheat); Origin check cho mutation.
- Secret qua `.env` (có `.env.example`), không expose ra client.

## 10. Analytics

`AnalyticsProvider` (server-side, DB-backed `AnalyticsEvent`): lesson_started, question_answered, question_wrong, lesson_completed, lesson_failed, review_completed, streak_extended, achievement_unlocked, quest_completed. Không lưu dữ liệu nhạy cảm.

## 11. Testing & Validation

Ba tầng, tất cả chạy tự động trong CI (`.github/workflows/ci.yml`):

- **Unit** (`bun test tests/unit`) — pure function: japanese normalizer, grading engine mọi `kind` + anti-cheat (server không tin điểm client), datetime theo timezone VN, công thức XP, CSRF helpers. 61 test.
- **Integration** (`bun test tests/integration`) — gọi route handler thật trên SQLite tự sinh trong `tests/.tmp` (đặt `DATABASE_URL` **trước** khi import module DB): register/login/logout/me, CSRF/origin 2 chiều, RBAC USER→admin 403, phiên học + trả lời theo đáp án thật từ DB, hearts không âm, XP ledger, double-complete, optimistic-lock, kana practice server-graded. 30 test.
- **E2E** (`bun run test:e2e`) — Playwright trên browser thật: đăng ký UI → đăng xuất → đăng nhập UI → học node kana đầu tiên (đọc `correctData` từ DB để trả lời đúng mọi renderer) → test-out "Nhảy tới đây?" → kiểm chứng node bài trước `COMPLETED` + bài mới mở khoá + không có XP ảo trong ledger.

Ngoài ra: `bun scripts/content-validate.ts` + `irodori-validate.ts` (validate nội dung **trước** seed) và `bun scripts/audit-content.ts` (audit DB **sau** seed, `--json` cho CI, exit 1 khi có ERROR).

Lưu ý: `next.config.ts` đặt `typescript.ignoreBuildErrors: true`, nên `bun run build` **không** thay thế được `bunx tsc --noEmit` — CI tách riêng job `typecheck`.

## 12. Visual Identity

"Japanese modern — clean, playful, gamified": primary Indigo, success Matcha, accent Sakura, warning Amber, danger Red; nền kem sáng / charcoal ấm tối; bo góc lớn, shadow mềm; Lucide icons (không emoji làm icon hệ thống); animation framer-motion có `prefers-reduced-motion`; responsive 375/768/1024/1440; footer sticky (mt-auto) trên mọi view có footer.
