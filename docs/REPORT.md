# Báo cáo cuối — NihongoGo

> Ngày: **2026-10-04** · **Production: https://nihongogo-chi.vercel.app**
> Commit: `b8c12bb` · Database: Neon Postgres (Free) · Hosting: Vercel Hobby (Free)

---

## 1. Trả lời trực tiếp 5 câu hỏi của bạn

### ① "Code vẫn ở local chưa push, Vercel chắc đang chạy code cũ?"
**Đã push xong.** Nhưng giải thích chính xác để bạn không hiểu nhầm:

- `vercel --prod` deploy từ **thư mục local**, KHÔNG phải từ GitHub. Nên trước khi push,
  production vẫn **đã có code mới nhất**. Bạn nhìn production thấy giao diện mới là đúng.
- Nhưng GitHub thì **thiếu 253 file** → ai clone repo đó chỉ nhận được code cũ.
- Đã commit + push: `1fe5450..8c4110f..b8c12bb`. Vercel đã link GitHub nên push sau này tự deploy.

### ② "Trình duyệt không có tiếng Nhật thì làm sao?"
Đây là **lỗ hổng thật tôi đã tìm và sửa**. Trước khi sửa:
- `AudioButton` **không bao giờ** gọi TTS server (chỉ dùng `speechSynthesis` của trình duyệt).
- `/api/audio/tts` trả **500** vì z-ai-sdk chưa cấu hình.
- Kết quả: máy không có giọng Nhật → **mất hoàn toàn âm thanh**, chỉ có 1 toast thông báo.

Đã kiểm chứng trên production bằng headless Chrome: chỉ có **4 giọng, 0 giọng Nhật** —
đúng tình huống người dùng thật gặp.

Cách sửa:
1. Chuỗi phát âm mới: **giọng trình duyệt → TTS server (nếu cấu hình) → thông báo**.
2. Thêm provider TTS server dùng được thật qua `TTS_HTTP_ENDPOINT` + `TTS_API_KEY` + `TTS_VOICE`
   (Google Cloud TTS / Azure). **Mặc định tắt** — vì voice mặc định của z-ai-sdk (`tongtong`)
   là giọng Trung, đọc kana thành âm Hán, dạy sai phát âm còn tệ hơn không phát.
3. Thêm **bảng cảnh báo** ở mọi màn hình khi thiếu giọng Nhật, kèm hướng dẫn cài **miễn phí**
   (Windows: Cài giọng Nhật · macOS: Voice → Tiếng Nhật · Android: TTS). Đóng được, nhớ trạng thái.

### ③ "Thiếu tính năng học vượt các bài"
**Đã có sẵn và hoạt động.** Đây là hệ thống "test-out" kiểu Duolingo:
- Nút **"Bỏ qua tới bài 2: Katakana"** trên learning path.
- Nút **"Nhảy tới phần này?"** để nhảy tới section xa hơn.
- Server dựng bài kiểm tra ngẫu nhiên từ **tất cả bài trước đó** (giới hạn 10 câu, 6 dạng
  không cần mic), đạt ≥80% thì mở toàn bộ các bài trước.
- Đã test trên production: `POST /api/lesson-sessions {source:"jump"}` → **200, mode JUMP**,
  câu hỏi đầu `HIRAGANA_RECOGNITION`, **không lộ `correctData`**.

### ④ "Có tính năng nói chưa?"
**Có, và đã test thật trên production.** Verify trên browser với quyền microphone:
- UI đầy đủ: nút mic, đồng hồ đếm 10s, "Bấm nút micro và đọc to câu trên",
  "Không có micro — bỏ qua câu này", nút KIỂM TRA.
- Node `k9 SPEAKING` — 8 câu `kind: speak` / `type: SPEAK`.
- Chấm điểm: ASR → normalize tiếng Nhật → Levenshtein similarity, **tính server-side**
  (client gửi điểm tự chấm sẽ bị bỏ qua — có test riêng).

### ⑤ "Giao diện OK, kiểm thử đủ chưa?"
Giao diện: **0 issue** ở 320px / 768px / 1440px, 19 màn hình, 57 ảnh.
Kiểm thử: **chưa đủ** — và quá trình này đã phát hiện 2 lỗ hổng bảo mật nghiêm trọng
(xem §3). Dưới đây là danh sách những gì **chưa** kiểm thử được.

---

## 2. Đã làm

| Hạng mục | Kết quả |
|---|---|
| Landing | Xây lại toàn bộ — 7 section, menu mobile, JSON-LD, section "Bên trong một bài học" |
| 9 lesson renderer | 9/9 PASS (choice · token-order · matching · text-input · fill-blank · audio-choice · passage · speak · writing) |
| Audit giao diện | 19 màn hình × 3 viewport = **0 issue**, không tràn ngang |
| Console production | **0 error** (landing → login → learn → kana) |
| Test | 61 pass · 0 fail · tsc 0 error · lint 0 error |
| Deploy | Vercel Hobby + Neon, verify health/auth/learn/lesson/jump/search/kana |
| GitHub | Đồng bộ, 2 commit |

---

## 3. 🚨 Lỗ hổng bảo mật nghiêm trọng — đã tìm, đã sửa, đã verify

Đây là phần quan trọng nhất của phiên làm việc này. Cả hai lỗi đều **khai thác được ngay
trên production** trước khi sửa, và tôi đã **tự tái hiện** chứ không tin báo cáo của agent.

### 3.1 CRITICAL — Bypass toàn bộ hệ thống mở khoá bài học

**Tái hiện (trước khi sửa):**
```
node LOCKED: "Hiragana: dakuten & handakuten"
>>> START NODE CHƯA MỞ KHOÁ (PRACTICE): 200  ❌ BYPASS THÀNH CÔNG
>>> MODE LESSON (bình thường):              200  ❌ BYPASS THÀNH CÔNG
```

**Nguyên nhân:** `createNodeSession()` lấy node bằng `findUnique({ where: { id } })` —
không lọc `status`, không kiểm tra node đã mở khoá hay chưa. Mà `id` lộ ra ngay trong
payload của `GET /api/learn`. Người dùng thường chỉ cần `curl` là start được **mọi ải
chưa tới**, kể cả ải boss.

**Hậu quả:** phá vỡ trục tiếp toàn bộ cơ chế tiến bộ — thứ tự ải, boss quiz mở bài sau,
và mọi phần thưởng gamification dựa trên việc học đúng thứ tự.

**Sửa:**
- Thêm `isNodeUnlocked(userId, courseId, nodeId)` trong `course.ts` — **tái sử dụng đúng
  quy tắc unlock** đang dùng để dựng learning path, không nhân bản (lệch 1 nhánh là lệch
  cả hệ thống).
- `createNodeSession` chỉ nhận node `PUBLISHED` + lesson `PUBLISHED`.
- `PRACTICE` chỉ được ôn node **đã từng học** (có `NodeProgress`), không cho xem trước.

**Verify sau khi sửa:**
```
>>> START NODE CHƯA MỞ KHOÁ: 403 ✓ bị chặn
>>> MODE LESSON (bình thường): 403 ✓ bị chặn
```
Đồng thời `login 200` · `learn 200` · `overview 200` — không hỏng gì.

### 3.2 REQUIRED — Đọc nội dung bài DRAFT / ARCHIVED

`GET /api/lessons/[id]` không lọc `status` → chỉ cần biết slug là đọc được metadata +
từ vựng + ngữ pháp của bài **chưa xuất bản**. Đã thêm `status: 'PUBLISHED'`.

### 3.3 REQUIRED — CSRF bị vô hiệu hoá trên production

Vòng lặp chết người:

```
if (https) cookie.sameSite = 'none'      // Vercel luôn x-forwarded-proto = https
                                       // ⇒ mọi cookie production là SameSite=None
                                       // ⇒ mất trọn lớp phòng thủ CSRF mặc định
```

Và `assertSameOrigin()` có 2 lỗ hổng:
- `if (LOCAL_HOSTNAMES.has(origin)) return` — ở production, bất kỳ origin `localhost` nào
  đều pass. Attacker dựng web server trên máy victim rồi mở `http://localhost:8080/` là bypass.
- `if (secFetchSite === 'same-origin') return` — không phải forbidden header, `curl` tự đặt
  được. Đây không phải check mà là may mắn.

Đã sửa: `SameSite` mặc định `lax` (chỉ `None` khi đặt tường minh `COOKIE_SAMESITE=none`);
localhost chỉ bypass ở dev; `sec-fetch-site` không còn là điều kiện thoát độc lập.

---

## 4. Lỗi UI P0 — đã sửa

### 4.1 Vòng lặp render vô hạn trong `MatchingRenderer`
```tsx
const done = draft.pairs ?? {}        // object MỚI mỗi render
useEffect(() => { recompute() }, [done, ...])   // deps đổi mỗi render
   → setLinks(mảng mới) → render → lặp
```
Từ lúc câu matching hiện ra tới khi người học bấm cặp đầu tiên, component re-render liên
tục, CPU cháy. Sửa: `useMemo` cho `done`, `useCallback` cho `recompute`, và chỉ `setState`
khi nội dung thực sự khác.

### 4.2 Enter nuốt phím — nút không bấm được bằng bàn phím
`e.preventDefault()` chạy ở **mọi** phase. Với `<button>`, Enter kích hoạt click ở
`keydown` → bị chặn hoàn toàn. Hậu quả: các nút ở màn **"Hoàn thành"** và màn **lỗi**
("Tiếp tục hành trình", "Học lại", "Về Learning Path") không dùng được bàn phím.
Sửa: chỉ `preventDefault()` khi ta thực sự xử lý.

### 4.3 Mất nội dung dưới hero (vòng trước)
`whileInView` + `initial={{opacity:0}}` khiến toàn bộ section dưới hero vô hình vĩnh viễn
nếu `IntersectionObserver` không chạy. Đã tạo `reveal.tsx` có lưới an toàn 2.6s + SSR fallback.

---

## 5. Code chết đã dọn

- Xoá `src/app/api/speech/evaluate` + `src/app/api/speech/transcribe` — **0 call site**
  (đường thật là `lessonSession.ts` gọi thẳng `transcribeAudio`).
- Gộp công thức chấm viết tay vào `domain/grading.ts` (`scoreWriting`,
  `WRITING_PASS_SCORE`) thay vì chép magic number `25 / 0.5 / 60` ở hai nơi.

---

## 6. ⚠️ Còn tồn đọng — cần xử lý

| # | Vấn đề | Mức độ | Ghi chú |
|---|---|---|---|
| 1 | **Rate-limit vô dụng trên Vercel** | Cao | `rate-limit.ts` dùng `Map` trong memory. Serverless mỗi invocation là instance mới ⇒ counter reset. Login có thể brute-force. Cần Redis/KV. |
| 2 | **Store câu hỏi kana/kanji trong memory** | Cao | `globalThis.__kanaQuestionStore` — hết warm instance là hỏng ngẫu nhiên. Cần bảng DB. |
| 3 | Vercel Hobby **chỉ dùng cá nhân, không thương mại** | — | Muốn kiếm tiền thì lên Pro $20/tháng. |
| 4 | Đổi mật khẩu seed trước khi chia sẻ link | — | `admin@nihongogo.local/admin12345`. |
| 5 | 30 integration test đang **skip** | Trung bình | Cần Neon **branch riêng** + `TEST_DATABASE_URL`. Test dùng `--force-reset` — tuyệt đối không trỏ vào DB production. |
| 6 | `AUTH_SECRET` phải khớp lúc seed | Thủ tục | Đổi pepper sau khi seed ⇒ mất toàn bộ mật khẩu đã tạo. |
| 7 | **Phân trang** cho `/api/vocabulary`, `/api/grammar`, `/api/kanji` | Trung bình | Trả toàn bảng. `/api/search` cố ý filter trong JS (dataset ~1.300 dòng) — có comment giải thích. |
| 8 | **N+1 tuần tự** trong `applyJumpCompletion` | Trung bình | Hàng trăm round-trip mỗi lần jump. |
| 9 | `learn.tsx` 2.119 dòng | Thấp | Nên tách `learning-path` / `today-hub` / `course-picker`. `ZigzagLessonPath` (~340 dòng) là component độc lập, test riêng được. |
| 10 | Rò `setInterval` trong `SpeakRenderer` | Thấp | `startTimer()` ghi đè `timerRef.current` không `clearInterval` cũ. |
| 11 | Nội dung **chưa HUMAN_REVIEWED** | — | Chưa có người Nhật kiểm tra kính ngữ / sắc thái ngữ cảnh. |

---

## 7. Chưa kiểm thử được

Nói thẳng để không tạo cảm giác đã phủ hết:

- **Gõ romaji** (`text-input`) — không tự động gõ tiếng Nhật qua bàn phím ảo.
- **Ghi âm thật + ASR** — headless Chrome không có mic thật; chỉ verify được UI, không
  verify được độ chính xác chấm phát âm.
- **Viết tay bằng chuột** — chưa test độ chính xác canvas/shape similarity.
- **Admin CRUD mutation** — đã xác nhận API trả 200 nhưng chưa tạo/sửa/xoá nội dung thật
  trên production (sợ bẩn dữ liệu).
- **Âm thanh thực sự phát ra** — chưa nghe được; chỉ verify chuỗi gọi và UI.
- **PWA / service worker offline** — chưa test.
- **Tải file export dữ liệu** — chưa test.

---

## 8. Cách dùng

```
Production : https://nihongogo-chi.vercel.app
Tài khoản dev (ĐỔI NGAY trước khi chia sẻ):
  admin@nihongogo.local / admin12345   (quản trị + CMS)
  demo@nihongogo.local  / demo12345   (học viên)

Nội dung : 70 bài · 11 section · 4.876 câu · 1.155 từ · 190 ngữ pháp
           208 kana · 119 kanji · 26 achievement

Hai khoá:
  basic      N5 · 52 bài · 7 section  (kana → JLPT N4)
  irodori-a1 A1 · 18 bài · 4 section  (sinh tồn)
```

**Cài giọng Nhật để nghe (miễn phí)** — bắt buộc nếu muốn nghe:
- Windows: Cài đặt → Thời gian & ngôn ngữ → Ngôn ngữ → Thêm 日本語 → tuỳ chọn «Giọng nói»
- macOS: Cài đặt → Ngôn ngữ & Vùng → Giọng nói → Tiếng Nhật → Tải giọng
- Sau khi cài: `chrome://settings/languages` → tải lại trang