'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { useHashRoute } from '@/components/app/router'
import { LogoFull } from '@/components/app/logo'
import { Button } from '@/components/ui/button'
import { DynamicIcon } from '@/components/shared/icon'
import { StreakBadge, HeartsBadge, XPBadge } from '@/components/shared/widgets'

/* ------------------------------------------------------------------ */
/* Dữ liệu trang giới thiệu — số liệu khớp DB thật (khoá/bài/câu hỏi) */
/* ------------------------------------------------------------------ */

const STATS = [
  { value: '2', label: 'khoá học', sub: 'コース' },
  { value: '70', label: 'bài theo lộ trình', sub: 'レッスン' },
  { value: '4.800+', label: 'câu hỏi luyện tập', sub: '問題' },
  { value: '1.100+', label: 'từ vựng', sub: 'ことば' },
]

const FEATURES = [
  { icon: 'BookOpenText', title: 'Khoá Irodori A1 — sinh tồn', desc: '18 bài "tiếng Nhật dùng được ngay": chào hỏi, mua sắm, tàu điện, nhờ vả — đúng tinh thần chủ điểm Irodori, nội dung gốc cho người Việt.', accent: 'sakura' },
  { icon: 'Languages', title: 'Kana & Kanji bài bản', desc: 'Hiragana, Katakana qua nhận diện — nghe — gõ — viết tay trên canvas. 119 kanji có âm On/Kun, ví dụ và luyện viết từng nét.', accent: 'primary' },
  { icon: 'Headphones', title: 'Nghe chuẩn từng âm', desc: 'Mọi từ vựng và hội thoại đều có audio tốc độ thường/chậm, luyện nghe chép chính tả như đang nghe người thật nói.', accent: 'primary' },
  { icon: 'Mic', title: 'Nói và được chấm điểm', desc: 'Ghi âm giọng nói, hệ thống nhận diện và so khớp với câu mẫu — biết ngay mình đọc chuẩn đến đâu.', accent: 'sakura' },
  { icon: 'RefreshCw', title: 'SRS thông minh', desc: 'Thuật toán lặp lại ngắt quãng (SM-2) tự nhắc bạn ôn từ, kanji, ngữ pháp đúng lúc sắp quên — sổ ôn tập cá nhân hoá.', accent: 'primary' },
  { icon: 'Trophy', title: 'Gamified đầy động lực', desc: 'XP, chuỗi ngày, tim, nhiệm vụ hằng ngày, 26 huy hiệu thành tích và bảng xếp hạng tuần theo giải Sakura → Shogun.', accent: 'sakura' },
]

const COURSES = [
  {
    icon: 'Compass',
    tag: 'Khoá sinh tồn',
    tagJa: 'くらしの にほんご',
    title: 'Irodori A1',
    desc: '18 bài xoay quanh đời sống thật: ga tàu, quán ăn, siêu thị, nhờ vả, kế hoạch cuối tuần. Mỗi bài 13 ải · ~79 câu · hội thoại + đọc hiểu + luyện nói.',
    chips: ['18 bài', 'A1 sơ cấp', '13 ải/bài', 'Hội thoại thật'],
    href: '/register',
  },
  {
    icon: 'GraduationCap',
    tag: 'Khoá bài bản',
    tagJa: 'きそから がんばろう',
    title: 'Tiếng Nhật cơ bản',
    desc: '52 bài sơ cấp hệ thống: kana → số & thời gian → ngữ pháp mẫu câu → đọc hiểu, bắc cầu lên JLPT N5/N4. Kèm kanji có ví dụ và luyện viết.',
    chips: ['52 bài', 'Sơ cấp → N4', 'Kanji từng nét', 'Lộ trình ải'],
    href: '/register',
  },
]

const STEPS = [
  { icon: 'Map', title: 'Chọn khoá, đi theo path', desc: 'Path zigzag kiểu chơi game: ải khoá — ải mở — ải boss. Xong ải mới mở ải kế tiếp, tiến độ luôn rõ ràng.' },
  { icon: 'Zap', title: 'Học 10 phút mỗi ngày', desc: 'Chấm điểm phía server, XP và combo thưởng ngay tại chỗ. Mục tiêu ngày 10–50 XP do chính bạn chọn.' },
  { icon: 'ShieldCheck', title: 'Ôn đúng lúc sắp quên', desc: 'SRS SM-2 nhắc ôn từ yếu, sổ lỗi sai tổng hợp câu sai để bạn "gỡ" từng câu một.' },
]

const FAQS = [
  { q: 'NihongoGo có phải bản sao của Duolingo không?', a: 'Không. Chúng tôi tham khảo các pattern gamification phổ biến (learning path, XP, streak) nhưng toàn bộ nội dung, giao diện và kiến trúc đều do NihongoGo xây dựng riêng cho người Việt.' },
  { q: 'Khoá Irodori A1 dạy gì và 18 bài gồm những chủ đề nào?', a: '18 bài đi theo hành trình sống ở Nhật: chào hỏi → giới thiệu → số & giờ → mua sắm → ăn uống → thói quen → chỉ đường → sở thích → thời tiết → lời mời → sức khoẻ → tổng kết → nhà ga → nhờ vả → trên tàu → kế hoạch → nơi muốn đến → chốt khoá. Mỗi bài có hội thoại, nghe, đọc, nói, viết kana/kanji và boss quiz.' },
  { q: 'Nội dung có lấy từ giáo trình có bản quyền không?', a: 'Không. Chúng tôi chỉ tham khảo thứ tự chủ điểm (syllabus) chuẩn sơ cấp và tinh thần chủ đề của chương trình Irodori. Mọi câu hỏi, hội thoại, ví dụ đều được biên soạn gốc — không sao chép nội dung có bản quyền.' },
  { q: 'Trình độ bắt đầu là bao nhiêu?', a: 'Từ số 0. Hai bài kana đầu tiên của khoá "Tiếng Nhật cơ bản" dạy bạn bảng chữ; nếu đã biết kana, bạn có thể đánh dấu trong onboarding để bỏ qua. Khoá Irodori A1 đi thẳng vào hội thoại sinh tồn kèm phiên âm.' },
  { q: 'Mất phí không?', a: 'Hoàn toàn miễn phí khi tự chạy. Không paywall: hết tim vẫn luyện tập được để lấy lại tim, không khoá tính năng.' },
]

const fadeUp = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-64px' },
  transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
})

export function LandingView() {
  const { navigate } = useHashRoute()
  const reduceMotion = useReducedMotion()

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* ============================== Header ============================== */}
      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-3 sm:px-6 h-16 flex items-center justify-between gap-2">
          <LogoFull className="max-sm:[&>span:last-child]:hidden" />
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground" aria-label="Điều hướng landing">
            <a href="#khoa-hoc" className="hover:text-foreground transition-colors">Khoá học</a>
            <a href="#tinh-nang" className="hover:text-foreground transition-colors">Tính năng</a>
            <a href="#hanh-trinh" className="hover:text-foreground transition-colors">Hành trình</a>
            <a href="#faq" className="hover:text-foreground transition-colors">Câu hỏi</a>
          </nav>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Button variant="ghost" className="hidden sm:inline-flex" onClick={() => navigate('/login')}>Đăng nhập</Button>
            <Button className="h-9 px-4 sm:px-5 rounded-xl" onClick={() => navigate('/register')}>Bắt đầu miễn phí</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* ============================== Hero ============================== */}
        <section className="relative overflow-hidden seigaiha" aria-label="Giới thiệu">
          {/* trang trí: kanji mờ nền */}
          <span className="pointer-events-none select-none absolute -top-6 right-2 sm:right-10 text-[7rem] sm:text-[11rem] font-black text-primary/[0.05] leading-none jp" aria-hidden>日</span>
          <span className="pointer-events-none select-none absolute bottom-4 left-0 sm:left-6 text-[5rem] sm:text-[8rem] font-black text-sakura/[0.07] leading-none jp" aria-hidden>語</span>

          <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-12 pb-16 sm:pt-20 sm:pb-24 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="flex flex-col items-start gap-6 relative z-10">
              <motion.div initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full bg-sakura/10 text-sakura px-3.5 py-1.5 text-sm font-semibold">
                <DynamicIcon name="Sparkles" className="h-4 w-4" aria-hidden />
                Học tiếng Nhật kiểu chơi game — cho người Việt
              </motion.div>

              <motion.h1
                initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }}
                className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight leading-[1.08]">
                はじめまして!
                <br />
                Chinh phục tiếng Nhật
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-primary via-primary/80 to-sakura bg-clip-text text-transparent"> từng ải một</span>
              </motion.h1>

              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.16 }}
                className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
                Hai khoá học · 70 bài · gần 5.000 câu hỏi: từ bảng kana đầu tiên đến hội thoại
                sinh tồn trên tàu điện. Mỗi ngày 10 phút, mỗi ngày một bước — số liệu thật, không quảng cáo.
              </motion.p>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.24 }}
                className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <Button size="lg" className="text-base h-12 px-7 rounded-2xl shadow-lg shadow-primary/25 flex-1 sm:flex-none" onClick={() => navigate('/register')}>
                  Tạo tài khoản miễn phí
                </Button>
                <Button size="lg" variant="outline" className="text-base h-12 px-7 rounded-2xl flex-1 sm:flex-none" onClick={() => navigate('/login')}>
                  Tôi đã có tài khoản
                </Button>
              </motion.div>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.34 }}
                className="flex flex-wrap items-center gap-2 mt-1">
                <StreakBadge count={7} />
                <XPBadge xp={1250} />
                <HeartsBadge hearts={4} max={5} enabled />
                <span className="text-xs text-muted-foreground ml-1">— bạn sẽ thấy những chỉ số này mỗi ngày</span>
              </motion.div>
            </div>

            {/* Hero image + chip nổi */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.12 }}
              className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-6 bg-gradient-to-tr from-primary/15 via-sakura/10 to-transparent rounded-[2.5rem] blur-2xl" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden border shadow-2xl bg-card">
                <Image
                  src="/images/hero.png"
                  alt="Minh họa hành trình học tiếng Nhật: chim hạc origami bay qua núi Phú Sĩ và hoa anh đào"
                  width={1344}
                  height={768}
                  priority
                  className="w-full h-auto"
                />
              </div>
              {/* chip nổi minh hoạ gamification */}
              {!reduceMotion && (
                <>
                  <motion.div
                    animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-4 -left-3 sm:-left-6 rounded-2xl border bg-card/95 backdrop-blur px-3.5 py-2.5 shadow-lg flex items-center gap-2" aria-hidden>
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-warning/15 text-warning font-black">🔥</span>
                    <span className="text-sm font-extrabold">7 ngày streak</span>
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                    className="absolute -bottom-4 -right-2 sm:-right-5 rounded-2xl border bg-card/95 backdrop-blur px-3.5 py-2.5 shadow-lg flex items-center gap-2" aria-hidden>
                    <DynamicIcon name="Crown" className="h-5 w-5 text-sakura" />
                    <span className="text-sm font-extrabold">Boss Quiz · +30 XP</span>
                  </motion.div>
                </>
              )}
            </motion.div>
          </div>

          {/* ============================ Stats bar ============================ */}
          <div className="relative border-t bg-background/70 backdrop-blur">
            <dl className="mx-auto max-w-6xl px-4 sm:px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {STATS.map((s, i) => (
                <motion.div key={s.label} {...(reduceMotion ? {} : fadeUp(i))} className="text-center sm:text-left">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-extrabold tracking-tight">
                    <span className="text-2xl sm:text-3xl text-primary">{s.value}</span>
                    <span className="ml-1.5 text-sm text-muted-foreground font-bold">{s.label}</span>
                    <span className="hidden sm:inline ml-2 text-[11px] rounded-full bg-muted px-2 py-0.5 text-muted-foreground jp">{s.sub}</span>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </section>

        {/* ============================ Courses ============================ */}
        <section id="khoa-hoc" className="border-t bg-card/40 scroll-mt-16" aria-label="Khoá học">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
            <motion.div {...(reduceMotion ? {} : fadeUp(0))} className="text-center mb-10">
              <p className="text-sm font-bold text-sakura mb-1 jp">コースを えらぼう</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Hai khoá — một hành trình</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Mới bắt đầu? Học sinh tồn trước. Muốn bài bản? Khoá cơ bản 52 bài dẫn bạn từ kana tới N4.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {COURSES.map((c, i) => (
                <motion.article key={c.title} {...(reduceMotion ? {} : fadeUp(i + 1))}
                  className="group rounded-3xl border bg-card p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all relative overflow-hidden">
                  <span className="pointer-events-none select-none absolute -bottom-6 -right-2 text-[6rem] font-black text-primary/[0.04] leading-none jp" aria-hidden>学</span>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/15 to-sakura/15 flex items-center justify-center shrink-0">
                      <DynamicIcon name={c.icon} className="h-6 w-6 text-primary" aria-hidden />
                    </div>
                    <div>
                      <p className="text-[11px] font-extrabold uppercase tracking-wider text-sakura">{c.tag}</p>
                      <h3 className="text-lg font-bold leading-tight">{c.title} <span className="jp text-sm text-muted-foreground font-semibold">· {c.tagJa}</span></h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 min-h-16">{c.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {c.chips.map((chip) => (
                      <span key={chip} className="rounded-full bg-primary/8 border border-primary/15 text-primary px-2.5 py-1 text-xs font-bold">{chip}</span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors" onClick={() => navigate(c.href)}>
                    Đăng ký học khoá này
                  </Button>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ Features ============================ */}
        <section id="tinh-nang" className="border-t scroll-mt-16" aria-label="Tính năng">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
            <motion.div {...(reduceMotion ? {} : fadeUp(0))} className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Mọi kỹ năng, một hành trình</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Không chỉ trắc nghiệm. NihongoGo luyện đúng cách bạn sẽ dùng tiếng Nhật ngoài đời.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {FEATURES.map((f, i) => (
                <motion.div key={f.title} {...(reduceMotion ? {} : fadeUp(i % 3))}
                  className="rounded-2xl border bg-card p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className={`h-11 w-11 rounded-xl flex items-center justify-center mb-4 ${f.accent === 'sakura' ? 'bg-sakura/10' : 'bg-primary/10'}`}>
                    <DynamicIcon name={f.icon} className={`h-6 w-6 ${f.accent === 'sakura' ? 'text-sakura' : 'text-primary'}`} aria-hidden />
                  </div>
                  <h3 className="font-bold mb-1.5">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ Journey ============================ */}
        <section id="hanh-trinh" className="border-t bg-card/40 scroll-mt-16" aria-label="Hành trình học">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
            <motion.div {...(reduceMotion ? {} : fadeUp(0))} className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Ba bước, mỗi ngày</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Vòng lặp học tập được thiết kế để bạn quay lại mỗi ngày mà không cần ý chí sắt đá.</p>
            </motion.div>
            <div className="grid lg:grid-cols-3 gap-4">
              {STEPS.map((s, i) => (
                <motion.div key={s.title} {...(reduceMotion ? {} : fadeUp(i))}
                  className="rounded-2xl border bg-gradient-to-b from-card to-card/50 p-6 relative overflow-hidden">
                  <span className="absolute -top-3 -right-1 text-7xl font-black text-primary/5 select-none" aria-hidden>{i + 1}</span>
                  <div className="h-11 w-11 rounded-xl bg-sakura/10 flex items-center justify-center mb-4">
                    <DynamicIcon name={s.icon} className="h-6 w-6 text-sakura" aria-hidden />
                  </div>
                  <h3 className="font-bold mb-1.5">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ FAQ ============================ */}
        <section id="faq" className="border-t scroll-mt-16" aria-label="Câu hỏi thường gặp">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
            <motion.h2 {...(reduceMotion ? {} : fadeUp(0))} className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-8">
              Câu hỏi thường gặp
            </motion.h2>
            <div className="space-y-3">
              {FAQS.map((f, i) => (
                <motion.details key={f.q} {...(reduceMotion ? {} : fadeUp(i))} className="group rounded-2xl border bg-card px-5 py-4">
                  <summary className="font-semibold cursor-pointer list-none flex items-center justify-between gap-3 outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg">
                    {f.q}
                    <span className="shrink-0 h-7 w-7 rounded-full bg-muted flex items-center justify-center text-muted-foreground transition-transform group-open:rotate-45 text-lg leading-none select-none" aria-hidden>+</span>
                  </summary>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">{f.a}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ CTA ============================ */}
        <section className="border-t bg-gradient-to-b from-sakura/5 to-transparent" aria-label="Kêu gọi hành động">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 text-center">
            <motion.p {...(reduceMotion ? {} : fadeUp(0))} className="text-4xl font-black mb-3 jp">がんばりましょう!</motion.p>
            <motion.h2 {...(reduceMotion ? {} : fadeUp(1))} className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">Sẵn sàng bắt đầu hành trình?</motion.h2>
            <motion.p {...(reduceMotion ? {} : fadeUp(2))} className="text-muted-foreground mb-7">Đăng ký mất 30 giây — ải đầu tiên đợi bạn ngay sau đó.</motion.p>
            <motion.div {...(reduceMotion ? {} : fadeUp(3))}>
              <Button size="lg" className="text-base h-12 px-8 rounded-2xl shadow-lg shadow-primary/25" onClick={() => navigate('/register')}>
                Bắt đầu ngay
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer — mt-auto để luôn bám đáy khi nội dung ngắn */}
      <footer className="mt-auto border-t bg-card/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <LogoFull compact />
            <span>© {new Date().getFullYear()} NihongoGo — sản phẩm học tiếng Nhật cho người Việt</span>
          </div>
          <p>Nội dung học biên soạn gốc · Icons: Lucide</p>
        </div>
      </footer>
    </div>
  )
}
