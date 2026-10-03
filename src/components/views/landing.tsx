'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  ArrowRight, BookOpenText, Check, ChevronDown, Clock, Compass, Flame, GraduationCap,
  Headphones, Heart, Languages, Menu, Mic, Mountain, RefreshCw, ShieldCheck, Sparkles,
  Swords, Target, Trophy, Volume2, X, Zap, type LucideIcon,
} from 'lucide-react'
import { useHashRoute } from '@/components/app/router'
import { LogoFull } from '@/components/app/logo'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/shared/reveal'
import { HeartsBadge, StreakBadge, XPBadge } from '@/components/shared/widgets'

/* ================================================================== */
/*  Nội dung — mọi con số lấy từ DB thật (xem docs/content/            */
/*  CONTENT_COVERAGE.md). Không bịa testimonial, không bịa review.      */
/* ================================================================== */

const STATS = [
  { value: '2', label: 'khoá học', sub: 'コース' },
  { value: '70', label: 'bài theo lộ trình', sub: 'レッスン' },
  { value: '4.876', label: 'câu hỏi luyện tập', sub: '問題' },
  { value: '1.155', label: 'mục từ vựng', sub: 'ことば' },
] as const

/** Node pipeline thật của mỗi bài — ải học tương ứng 1:1 với generator. */
const PIPE: { icon: LucideIcon; label: string; ja: string }[] = [
  { icon: BookOpenText, label: 'Từ vựng', ja: 'ことば' },
  { icon: Languages, label: 'Ngữ pháp', ja: '文型' },
  { icon: Headphones, label: 'Nghe', ja: '聞く' },
  { icon: BookOpenText, label: 'Đọc hiểu', ja: '読む' },
  { icon: Mic, label: 'Nói', ja: '話す' },
  { icon: Target, label: 'Luyện viết', ja: '書く' },
  { icon: Swords, label: 'Ôn trộn', ja: '総練習' },
  { icon: Trophy, label: 'Boss quiz', ja: '|gfinal|' },
]

/** 9 `kind` chấm được server-side — đúng renderer thật trong lesson player. */
const INTERACTIONS = [
  'Trắc nghiệm 1–4 đáp án',
  'Điền vào chỗ trống',
  'Sắp xếp từ thành câu',
  'Kho từ dựng câu',
  'Ghép cặp 8 ký tự',
  'Chép chính tả sau khi nghe',
  'Nghe chọn đáp án',
  'Đọc đoạn + 3 câu hỏi',
  'Nói để được chấm điểm',
] as const

const PAINS = [
  {
    icon: Clock,
    title: 'App này bỏ dở sau 3 ngày',
    desc: 'Học thiếu phản hồi và thiếu lý do để quay lại. Ở NihongoGo, mỗi ngày có XP, chuỗi ngày và 3 nhiệm vụ — bạn luôn biết hôm nay đã đủ chưa.',
  },
  {
    icon: Volume2,
    title: 'Không bao giờ nghe được tiếng Nhật thật',
    desc: 'Chỉ trắc nghiệm thì không tạo được phản xạ nghe. Mọi từ vựng và hội thoại đều phát audio tốc độ thường và chậm, có cả chép chính tả.',
  },
  {
    icon: Mountain,
    title: 'Học xong trắc nghiệm rồi quên',
    desc: 'Thiếu lịch ôn. SRS thuật toán SM-2 tự nhắc bạn ôn từ, kanji, ngữ pháp đúng lúc sắp quên, và gom mọi câu sai vào sổ lỗi sai.',
  },
] as const

const FEATURES = [
  { icon: Languages, title: 'Hiragana · Katakana · 119 kanji', desc: 'Luyện nhận diện, nghe, gõ romaji và viết tay trên canvas. Nét chữ lấy từ KanjiVG nên thấy đúng thứ tự nét thật.', accent: 'primary' as const },
  { icon: Headphones, title: 'Nghe chuẩn từng âm', desc: 'Audio cho mọi từ vựng và hội thoại, chế độ chậm 0.6× để bắt nhịp. Có fallback về giọng Nhật của trình duyệt.', accent: 'sakura' as const },
  { icon: Mic, title: 'Nói và được chấm điểm', desc: 'Ghi âm → nhận dạng giọng nói → so khớp với câu mẫu. Điểm là độ tương đồng chuyển âm, hiển thị trung thực ngay trên UI.', accent: 'sakura' as const },
  { icon: RefreshCw, title: 'SRS thông minh', desc: 'Biến thể SM-2 với 4 mức chấm. Bảng ôn tập hôm nay, dự báo 7 ngày và chỉ số “yếu” cho mục bạn hay quên.', accent: 'primary' as const },
  { icon: Flame, title: 'Chuỗi ngày không đứt', desc: 'Streak tính theo múi giờ của bạn, kèm 2 “tuyết đông” miễn phí phòng khi bạn bận một ngày.', accent: 'primary' as const },
  { icon: Heart, title: 'Tim hồi phục dần', desc: 'Hết tim vẫn vào được luyện tập để lấy lại. Hết tim là hết phiên, không mất tiến độ đã học.', accent: 'sakura' as const },
  { icon: Trophy, title: '26 huy hiệu · 4 giải đấu', desc: 'Bảng xếp hạng tuần theo giải Sakura → Fuji → Samurai → Shogun, tự thăng hạng và tụt hạng theo XP tuần.', accent: 'primary' as const },
  { icon: ShieldCheck, title: 'Chấm điểm server-side', desc: 'Đáp án không bao giờ nằm trong gói dữ liệu gửi cho trình duyệt. Mọi XP, tim, tiến độ đều do server quyết định.', accent: 'primary' as const },
]

const JOURNEY = [
  { icon: Compass, title: 'Chọn khoá, đi theo lộ trình', desc: 'Path zigzag ải khoá → ải mở → ải boss. Xong ải mới mở ải kế tiếp, luôn biết đang học ở đâu.' },
  { icon: Zap, title: 'Học 10 phút mỗi ngày', desc: 'Chấm điểm tức thì, XP và combo thưởng ngay tại chỗ. Mục tiêu ngày 10–50 XP do bạn tự chọn.' },
  { icon: RefreshCw, title: 'Ôn đúng lúc sắp quên', desc: 'SRS nhắc ôn từ yếu, sổ lỗi sai gom từng câu sai để bạn gỡ dần từng câu một.' },
] as const

const FAQS = [
  { q: 'NihongoGo có phải bản sao của Duolingo không?', a: 'Không. Chúng tôi tham khảo các pattern gamification phổ biến (learning path, XP, streak, tim) nhưng toàn bộ nội dung, giao diện và kiến trúc đều do NihongoGo xây riêng cho người Việt. Chúng tôi không dùng lại logo, hình ảnh, âm thanh hay mã nguồn của bất kỳ ứng dụng nào.' },
  { q: 'Nội dung lấy từ giáo trình có bản quyền không?', a: 'Không. Chúng tôi chỉ tham khảo thứ tự chủ điểm (syllabus) chuẩn sơ cấp và tinh thần chủ đề của chương trình Irodori. Mọi câu hỏi, hội thoại, ví dụ và giải thích tiếng Việt đều được biên soạn gốc. Dữ liệu nét chữ kana/kanji xin phép từ KanjiVG theo giấy phép CC BY-SA 3.0, có ghi công tại public/strokes/CREDITS.md.' },
  { q: 'Hai khoá khác nhau thế nào?', a: 'Khoá “Tiếng Nhật cơ bản” 52 bài đi hệ thống từ bảng kana, số và thời gian, ngữ pháp mẫu câu, bắc cầu lên JLPT N5/N4 — phù hợp nếu bạn học bài bản. Khoá “Irodori A1” 18 bài đi thẳng vào hội thoại sinh tồn: ga tàu, quán ăn, siêu thị, nhờ vả, kế hoạch cuối tuần — phù hợp nếu bạn muốn nói được ngay. Bạn có thể học cả hai.' },
  { q: 'Trình độ bắt đầu nên là bao nhiêu?', a: 'Từ số 0. Bạn chọn mục tiêu, mức độ, và làm một bài kiểm tra 8 câu hiragana lúc onboarding để hệ thống gợi ý điểm bắt đầu. Đã biết kana thì đánh dấu để bỏ qua phần đó.' },
  { q: 'Có phải trả phí không, có bị khoá tính năng không?', a: 'Không có paywall. Hết tim vẫn luyện tập được để lấy lại tim, và mọi khoá học đều mở. Dữ liệu của bạn có thể xuất ra file JSON bất cứ lúc nào trong phần Cài đặt.' },
  { q: 'Chấm phát âm và chấm viết tay có chính xác không?', a: 'Nói thật: chấm phát âm là so khớp văn bản giữa kết quả nhận dạng và câu mẫu, chấm viết tay là heuristic dựa trên số nét và độ phủ hình dạng. Cả hai đều được ghi rõ ngay trên giao diện chứ không đồng nhất là đánh giá chuyên nghiệp.' },
]

const NAV = [
  { href: '#khoa-hoc', label: 'Khoá học' },
  { href: '#loi-ich', label: 'Vì sao khác' },
  { href: '#tinh-nang', label: 'Tính năng' },
  { href: '#mot-bai-hoc', label: 'Một bài học' },
  { href: '#faq', label: 'Câu hỏi' },
] as const

/* ================================================================== */

export function LandingView() {
  const { navigate } = useHashRoute()
  const [menuOpen, setMenuOpen] = useState(false)

  // khoá scroll nền khi mở menu mobile
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // đóng menu khi bấm link neo
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Dữ liệu có cấu trúc cho SEO — landing là trang duy nhất index được */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EducationalOrganization',
            name: 'NihongoGo',
            description:
              'Nền tảng học tiếng Nhật gamified cho người Việt. 70 bài, 4.876 câu hỏi, luyện nghe nói viết, SRS, lộ trình học theo ải.',
            inLanguage: 'vi',
            educationalLevel: 'Beginner to N4',
            teaches: 'Japanese language',
            isAccessibleForFree: true,
          }),
        }}
      />

      {/* ============================== Header ============================== */}
      <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="NihongoGo — về đầu trang"
          >
            <LogoFull className="max-[380px]:[&>span:last-child]:hidden" />
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex" aria-label="Điều hướng chính">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="rounded transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden sm:inline-flex" onClick={() => navigate('/login')}>
              Đăng nhập
            </Button>
            <Button className="btn-3d btn-3d-primary h-10 rounded-xl px-4 font-bold" onClick={() => navigate('/register')}>
              Bắt đầu miễn phí
            </Button>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="landing-mobile-nav"
              aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-card transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <div id="landing-mobile-nav" className="border-t bg-background md:hidden">
            <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3" aria-label="Điều hướng di động">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={closeMenu}
                  className="flex min-h-11 items-center rounded-xl px-3 text-[15px] font-semibold transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {n.label}
                </a>
              ))}
              <div className="mt-2 border-t pt-3 sm:hidden">
                <Button variant="outline" className="h-11 w-full rounded-xl" onClick={() => { closeMenu(); navigate('/login') }}>
                  Đăng nhập
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main id="top" className="flex-1">
        {/* ============================== Hero ============================== */}
        <section className="seigaiha relative overflow-hidden" aria-labelledby="hero-h">
          <span className="pointer-events-none absolute -top-6 right-2 select-none text-[7rem] font-black leading-none text-primary/[0.05] sm:right-10 sm:text-[11rem] jp" aria-hidden>日</span>
          <span className="pointer-events-none absolute bottom-4 left-0 select-none text-[5rem] font-black leading-none text-sakura/[0.07] sm:left-6 sm:text-[8rem] jp" aria-hidden>語</span>

          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-2 lg:gap-14">
            <div className="relative z-10 flex flex-col items-start gap-5">
              <Reveal className="inline-flex items-center gap-2 rounded-full bg-sakura/10 px-3.5 py-1.5 text-sm font-bold text-sakura">
                <Sparkles className="h-4 w-4" aria-hidden />
                Học tiếng Nhật kiểu chơi game — cho người Việt
              </Reveal>

              <h1 id="hero-h" className="text-[2rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.3rem]">
                <span className="jp">はじめまして!</span>
                <br />
                Chinh phục tiếng Nhật
                <br className="hidden sm:block" />{' '}
                <span className="bg-gradient-to-r from-primary via-primary/80 to-sakura bg-clip-text text-transparent">
                  từng ải một
                </span>
              </h1>

              <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                Hai khoá · 70 bài · 4.876 câu hỏi: từ bảng kana đầu tiên đến hội thoại
                sinh tồn trên tàu điện. Mỗi ngày 10 phút, mỗi ngày một bước — số liệu
                thật, không quảng cáo.
              </p>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-nowrap">
                <Button
                  size="lg"
                  className="btn-3d btn-3d-primary h-12 flex-1 rounded-2xl px-7 text-base font-bold sm:flex-none"
                  onClick={() => navigate('/register')}
                >
                  Tạo tài khoản miễn phí
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-3d btn-3d-secondary h-12 flex-1 rounded-2xl px-7 text-base sm:flex-none"
                  onClick={() => navigate('/login')}
                >
                  Tôi đã có tài khoản
                </Button>
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-2">
                <StreakBadge count={7} />
                <XPBadge xp={1250} />
                <HeartsBadge hearts={4} max={5} enabled />
                <span className="ml-1 text-xs text-muted-foreground">— những chỉ số này lặp lại mỗi ngày</span>
              </div>
            </div>

            <Reveal delay={0.12} className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-primary/15 via-sakura/10 to-transparent blur-2xl" aria-hidden />
              <div className="relative overflow-hidden rounded-3xl border bg-card shadow-2xl">
                <Image
                  src="/images/hero.png"
                  alt="Minh họa hành trình học tiếng Nhật: chim hạc origami bay qua núi Phú Sĩ và hoa anh đào"
                  width={1344}
                  height={768}
                  priority
                  sizes="(max-width: 1024px) 92vw, 560px"
                  className="h-auto w-full"
                />
              </div>
              <div className="absolute -left-3 -top-4 flex items-center gap-2 rounded-2xl border bg-card/95 px-3.5 py-2.5 shadow-lg backdrop-blur sm:-left-6" aria-hidden>
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-warning/15">
                  <Flame className="h-4 w-4 text-warning" aria-hidden />
                </span>
                <span className="text-sm font-extrabold">7 ngày streak</span>
              </div>
              <div className="absolute -bottom-4 -right-2 flex items-center gap-2 rounded-2xl border bg-card/95 px-3.5 py-2.5 shadow-lg backdrop-blur sm:-right-5" aria-hidden>
                <Trophy className="h-5 w-5 text-sakura" aria-hidden />
                <span className="text-sm font-extrabold">Boss Quiz · +30 XP</span>
              </div>
            </Reveal>
          </div>

          {/* ---------------------------- Stats ---------------------------- */}
          <div className="relative border-t bg-background/70 backdrop-blur">
            <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-5 px-4 py-6 sm:px-6 md:grid-cols-4 sm:gap-6">
              {STATS.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.06}>
                  <div className="text-center sm:text-left">
                    <dt className="text-sm font-semibold text-muted-foreground">{s.label}</dt>
                    <dd className="num font-extrabold tracking-tight">
                      <span className="text-2xl text-primary sm:text-3xl">{s.value}</span>
                      <span className="jp ml-2 hidden rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground sm:inline">{s.sub}</span>
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        {/* ============================ Vì sao khác ============================ */}
        <section id="loi-ich" className="scroll-mt-16 border-t" aria-labelledby="loi-ich-h">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
            <Reveal className="mb-9 text-center">
              <h2 id="loi-ich-h" className="text-2xl font-bold tracking-tight sm:text-3xl">
                Vì sao người Việt bỏ học tiếng Nhật
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                Và NihongoGo xử lý từng nguyên nhân đó bằng cơ chế thật, không bằng lời hứa suông.
              </p>
            </Reveal>

            <div className="grid gap-4 md:grid-cols-3">
              {PAINS.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.07}>
                  <article className="h-full rounded-2xl border bg-card p-5 shadow-sm">
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-destructive/10">
                      <p.icon className="h-6 w-6 text-destructive" aria-hidden />
                    </div>
                    <h3 className="mb-1.5 text-[17px] font-bold leading-snug">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ Khoá học ============================ */}
        <section id="khoa-hoc" className="scroll-mt-16 border-t bg-card/40" aria-labelledby="khoa-hoc-h">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
            <Reveal className="mb-9 text-center">
              <p className="jp mb-1 text-sm font-bold text-sakura">コースを えらぼう</p>
              <h2 id="khoa-hoc-h" className="text-2xl font-bold tracking-tight sm:text-3xl">
                Hai khoá — một hành trình
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                Mới bắt đầu? Học sinh tồn trước. Muốn bài bản? Khoá cơ bản 52 bài dẫn bạn từ kana tới N4.
              </p>
            </Reveal>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              {[
                {
                  icon: Compass, tag: 'Khoá sinh tồn', tagJa: 'くらしの にほんご',
                  title: 'Irodori A1',
                  desc: '18 bài xoay quanh đời sống thật: ga tàu, quán ăn, siêu thị, nhờ vả, kế hoạch cuối tuần. Mỗi bài 13 ải · 74–80 câu · hội thoại + đọc hiểu + luyện nói.',
                  chips: ['18 bài', '4 section', 'A1 sơ cấp', '13 ải/bài', 'Hội thoại thật'],
                },
                {
                  icon: GraduationCap, tag: 'Khoá bài bản', tagJa: 'きそから がんばろう',
                  title: 'Tiếng Nhật cơ bản',
                  desc: '52 bài sơ cấp hệ thống: kana → số & thời gian → ngữ pháp mẫu câu → đọc hiểu, bắc cầu lên JLPT N5/N4. Kèm 119 kanji có ví dụ và luyện viết từng nét.',
                  chips: ['52 bài', '7 section', 'Sơ cấp → N4', '119 kanji', 'Lộ trình ải'],
                },
              ].map((c, i) => (
                <Reveal key={c.title} delay={i * 0.08}>
                  <article className="group relative h-full overflow-hidden rounded-3xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl sm:p-7">
                    <span className="jp pointer-events-none absolute -bottom-6 -right-2 select-none text-[6rem] font-black leading-none text-primary/[0.04]" aria-hidden>学</span>
                    <div className="relative mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-sakura/15">
                        <c.icon className="h-6 w-6 text-primary" aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-extrabold uppercase tracking-wider text-sakura">{c.tag}</p>
                        <h3 className="text-lg font-bold leading-tight">
                          {c.title}{' '}
                          <span className="jp text-sm font-semibold text-muted-foreground">· {c.tagJa}</span>
                        </h3>
                      </div>
                    </div>
                    <p className="relative mb-5 min-h-20 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                    <div className="relative mb-5 flex flex-wrap gap-1.5">
                      {c.chips.map((chip) => (
                        <span key={chip} className="rounded-full border border-primary/15 bg-primary/8 px-2.5 py-1 text-xs font-bold text-primary">
                          {chip}
                        </span>
                      ))}
                    </div>
                    <Button
                      className="btn-3d btn-3d-primary relative w-full rounded-xl font-bold"
                      onClick={() => navigate('/register')}
                    >
                      Đăng ký học khoá này
                    </Button>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ Tính năng ============================ */}
        <section id="tinh-nang" className="scroll-mt-16 border-t" aria-labelledby="tinh-nang-h">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
            <Reveal className="mb-9 text-center">
              <h2 id="tinh-nang-h" className="text-2xl font-bold tracking-tight sm:text-3xl">
                Đủ cả nghe – nói – đọc – viết
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                Không chỉ trắc nghiệm. NihongoGo luyện đúng cách bạn sẽ dùng tiếng Nhật ngoài đời.
              </p>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={(i % 4) * 0.06}>
                  <article className="h-full rounded-2xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                    <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${f.accent === 'sakura' ? 'bg-sakura/10' : 'bg-primary/10'}`}>
                      <f.icon className={`h-6 w-6 ${f.accent === 'sakura' ? 'text-sakura' : 'text-primary'}`} aria-hidden />
                    </div>
                    <h3 className="mb-1.5 text-[15px] font-bold leading-snug">{f.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ Một bài học ============================ */}
        <section id="mot-bai-hoc" className="scroll-mt-16 border-t bg-card/40" aria-labelledby="mot-bai-hoc-h">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
            <Reveal className="mb-9 text-center">
              <h2 id="mot-bai-hoc-h" className="text-2xl font-bold tracking-tight sm:text-3xl">
                Bên trong một bài học
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                Mỗi bài chia thành các ải nhỏ theo đúng thứ tự kỹ năng — không nhảy cóc, không làm quá.
              </p>
            </Reveal>

            {/* pipeline ải */}
            <ol className="mb-10 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8" aria-label="Các ải trong một bài học">
              {PIPE.map((p, i) => (
                <Reveal key={p.label} delay={i * 0.04} as="li">
                  <div className="flex h-full flex-col items-center gap-1.5 rounded-xl border bg-card px-2 py-3 text-center shadow-sm">
                    <p.icon className="h-5 w-5 text-primary" aria-hidden />
                    <span className="text-xs font-bold leading-tight">{p.label}</span>
                    <span className="jp text-[11px] text-muted-foreground">{p.ja}</span>
                  </div>
                </Reveal>
              ))}
            </ol>

            <div className="grid items-start gap-6 lg:grid-cols-2">
              <Reveal>
                <div className="rounded-2xl border bg-card p-6 shadow-sm">
                  <h3 className="mb-1 text-lg font-bold">9 kiểu bài tập, chấm trên máy chủ</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    Đáp án không bao giờ nằm trong dữ liệu gửi cho trình duyệt. Bạn bấm “Kiểm tra”,
                    máy chủ chấm và trả về giải thích tiếng Việt.
                  </p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {INTERACTIONS.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
                        <span className="text-muted-foreground">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="rounded-2xl border bg-card p-6 shadow-sm">
                  <h3 className="mb-1 text-lg font-bold">Ải cuối là Boss Quiz</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    Mỗi bài kết thúc bằng một boss trộn tất cả kỹ năng. Đạt 80% mới mở bài kế tiếp;
                    đạt 90% để đánh dấu “thành thạo”. Điều kiện này được máy chủ kiểm tra, không thể vượt bằng cách sửa trong trình duyệt.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      { icon: Target, t: 'Đạt 70%', d: 'Hoàn thành node' },
                      { icon: Trophy, t: 'Đạt 80%', d: 'Mở bài kế tiếp' },
                      { icon: Sparkles, t: 'Đạt 90%', d: 'Đánh dấu thành thạo' },
                      { icon: Flame, t: 'Không sai câu nào', d: 'Thưởng +20 XP' },
                    ].map((r) => (
                      <div key={r.t} className="flex items-start gap-2.5 rounded-xl bg-muted/60 p-3">
                        <r.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                        <div className="min-w-0">
                          <p className="text-sm font-bold">{r.t}</p>
                          <p className="text-xs text-muted-foreground">{r.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============================ Hành trình ============================ */}
        <section id="hanh-trinh" className="scroll-mt-16 border-t" aria-labelledby="hanh-trinh-h">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
            <Reveal className="mb-9 text-center">
              <h2 id="hanh-trinh-h" className="text-2xl font-bold tracking-tight sm:text-3xl">
                Ba bước, mỗi ngày
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                Vòng lặp học tập thiết kế để bạn quay lại mỗi ngày mà không cần ý chí sắt đá.
              </p>
            </Reveal>

            <div className="grid gap-4 lg:grid-cols-3">
              {JOURNEY.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.07}>
                  <article className="relative h-full overflow-hidden rounded-2xl border bg-gradient-to-b from-card to-card/50 p-6">
                    <span className="absolute -right-1 -top-3 select-none text-7xl font-black text-primary/5" aria-hidden>
                      {i + 1}
                    </span>
                    <div className="relative mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-sakura/10">
                      <s.icon className="h-6 w-6 text-sakura" aria-hidden />
                    </div>
                    <h3 className="relative mb-1.5 font-bold">{s.title}</h3>
                    <p className="relative text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ FAQ ============================ */}
        <section id="faq" className="scroll-mt-16 border-t bg-card/40" aria-labelledby="faq-h">
          <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
            <Reveal className="mb-8 text-center">
              <h2 id="faq-h" className="text-2xl font-bold tracking-tight sm:text-3xl">
                Câu hỏi thường gặp
              </h2>
            </Reveal>

            <div className="space-y-3">
              {FAQS.map((f, i) => (
                <Reveal key={f.q} delay={i * 0.04}>
                  <details className="group rounded-2xl border bg-card px-5 py-4 open:bg-card">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-lg font-semibold outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      {f.q}
                      <span className="flex h-7 w-7 shrink-0 select-none items-center justify-center rounded-full bg-muted text-muted-foreground transition-transform duration-200 group-open:rotate-180" aria-hidden>
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ CTA ============================ */}
        <section className="border-t bg-gradient-to-b from-sakura/5 to-transparent" aria-labelledby="cta-h">
          <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 sm:py-20">
            <Reveal>
              <p className="jp mb-3 text-4xl font-black">がんばりましょう!</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 id="cta-h" className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Sẵn sàng bắt đầu hành trình?
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mx-auto mb-7 max-w-xl text-muted-foreground">
                Đăng ký mất 30 giây. Ải đầu tiên đợi bạn ngay sau đó — không cần thẻ tín dụng.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <Button
                size="lg"
                className="btn-3d btn-3d-primary h-12 px-8 text-base font-bold"
                onClick={() => navigate('/register')}
              >
                Bắt đầu ngay
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Button>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ============================== Footer ============================== */}
      <footer className="mt-auto border-t bg-card/50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-center text-sm text-muted-foreground sm:flex-row sm:px-6 sm:text-left">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            <LogoFull compact />
            <span>© {new Date().getFullYear()} NihongoGo — học tiếng Nhật cho người Việt</span>
          </div>
          <p>Nội dung học biên soạn gốc · Nét chữ: KanjiVG (CC BY-SA 3.0) · Icons: Lucide</p>
        </div>
      </footer>
    </div>
  )
}
