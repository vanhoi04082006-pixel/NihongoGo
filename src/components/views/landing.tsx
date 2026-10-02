'use client'

import Image from 'next/image'
import { useHashRoute } from '@/components/app/router'
import { LogoFull } from '@/components/app/logo'
import { Button } from '@/components/ui/button'
import { DynamicIcon } from '@/components/shared/icon'
import { StreakBadge, HeartsBadge, XPBadge } from '@/components/shared/widgets'

const FEATURES = [
  { icon: 'Languages', title: 'Kana & Kanji bài bản', desc: 'Hiragana, Katakana qua nhận diện — nghe — gõ — viết tay trên canvas. Kanji N5 có âm On/Kun, ví dụ và luyện viết.' },
  { icon: 'Headphones', title: 'Nghe chuẩn từng âm', desc: 'Mọi từ vựng và hội thoại đều có audio tốc độ thường/chậm, luyện nghe chép chính tả như người thật.' },
  { icon: 'Mic', title: 'Nói và được chấm điểm', desc: 'Ghi âm giọng nói, hệ thống nhận diện và so khớp với câu mẫu — biết ngay mình đọc chuẩn đến đâu.' },
  { icon: 'PenLine', title: 'Viết tay từng nét', desc: 'Luyện viết kana/kanji bằng chuột hoặc cảm ứng, chấm heuristic theo số nét và độ phủ hình dạng.' },
  { icon: 'RefreshCw', title: 'SRS thông minh', desc: 'Thuật toán lặp lại ngắt quãng (SM-2) tự nhắc bạn ôn từ, kanji, ngữ pháp đúng lúc sắp quên.' },
  { icon: 'Trophy', title: 'Gamified đầy động lực', desc: 'XP, chuỗi ngày, tim, nhiệm vụ hằng ngày, thành tích và bảng xếp hạng tuần theo giải Sakura → Shogun.' },
]

const STEPS = [
  { icon: 'BookOpen', title: '50 bài sơ cấp', desc: 'Progression chuẩn mực từ chào hỏi đến kính ngữ — chia ải nhỏ 10-15 phút mỗi ngày.' },
  { icon: 'Zap', title: 'Chấm điểm phía server', desc: 'XP và tiến độ đều do máy chủ xác thực — công bằng, chống gian lận.' },
  { icon: 'Shield', title: 'Nội dung gốc 100%', desc: 'Toàn bộ câu hỏi, hội thoại, giải thích do NihongoGo biên soạn riêng cho người Việt.' },
]

export function LandingView() {
  const { navigate } = useHashRoute()

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
          <LogoFull />
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground" aria-label="Điều hướng landing">
            <a href="#tinh-nang" className="hover:text-foreground transition-colors">Tính năng</a>
            <a href="#hanh-trinh" className="hover:text-foreground transition-colors">Hành trình</a>
            <a href="#faq" className="hover:text-foreground transition-colors">Câu hỏi</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" onClick={() => navigate('/login')}>Đăng nhập</Button>
            <Button onClick={() => navigate('/register')}>Bắt đầu miễn phí</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden seigaiha">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-12 pb-16 sm:pt-20 sm:pb-24 grid lg:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col items-start gap-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-sakura/10 text-sakura px-3.5 py-1.5 text-sm font-semibold">
                <DynamicIcon name="Sparkles" className="h-4 w-4" />
                Học tiếng Nhật kiểu chơi game — cho người Việt
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1]">
                はじめまして!
                <br />
                Chinh phục tiếng Nhật
                <span className="text-primary"> từng ải một</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
                Kana, từ vựng, ngữ pháp, nghe — nói — đọc — viết và cả chữ Hán: tất cả trong một hành trình
                50 bài sơ cấp được game hóa. Mỗi ngày 10 phút, mỗi ngày một bước.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="lg" className="text-base h-12 px-7 rounded-2xl shadow-lg shadow-primary/25" onClick={() => navigate('/register')}>
                  Tạo tài khoản miễn phí
                </Button>
                <Button size="lg" variant="outline" className="text-base h-12 px-7 rounded-2xl" onClick={() => navigate('/login')}>
                  Tôi đã có tài khoản
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <StreakBadge count={7} />
                <XPBadge xp={1250} />
                <HeartsBadge hearts={4} max={5} enabled />
                <span className="text-xs text-muted-foreground ml-1">— bạn sẽ thấy những chỉ số này mỗi ngày</span>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xl">
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
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="tinh-nang" className="border-t bg-card/40">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Mọi kỹ năng, một hành trình</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Không chỉ trắc nghiệm. NihongoGo luyện đúng cách bạn sẽ dùng tiếng Nhật ngoài đời.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {FEATURES.map((f) => (
                <div key={f.title} className="rounded-2xl border bg-card p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <DynamicIcon name={f.icon} className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1.5">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey */}
        <section id="hanh-trinh" className="border-t">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid lg:grid-cols-3 gap-4">
            {STEPS.map((s, i) => (
              <div key={s.title} className="rounded-2xl border bg-gradient-to-b from-card to-card/50 p-6 relative overflow-hidden">
                <span className="absolute -top-3 -right-1 text-7xl font-black text-primary/5 select-none" aria-hidden>
                  {i + 1}
                </span>
                <div className="h-11 w-11 rounded-xl bg-sakura/10 flex items-center justify-center mb-4">
                  <DynamicIcon name={s.icon} className="h-6 w-6 text-sakura" />
                </div>
                <h3 className="font-bold mb-1.5">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t bg-card/40">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-8">Câu hỏi thường gặp</h2>
            <div className="space-y-3">
              {[
                { q: 'NihongoGo có phải bản sao của Duolingo không?', a: 'Không. Chúng tôi học hỏi các pattern gamification phổ biến (learning path, XP, streak) nhưng toàn bộ nội dung, giao diện và kiến trúc đều do NihongoGo xây dựng riêng.' },
                { q: 'Nội dung có lấy từ giáo trình Minna no Nihongo không?', a: 'Chúng tôi chỉ tham khảo thứ tự chủ điểm kiến thức (syllabus) chuẩn của sơ cấp. Mọi câu hỏi, hội thoại, ví dụ đều được biên soạn gốc — không sao chép nội dung có bản quyền.' },
                { q: 'Trình độ bắt đầu?', a: 'Từ số 0. Hai bài kana đầu tiên dạy bạn bảng chữ, sau đó là 50 bài sơ cấp. Nếu đã biết kana, bạn có thể đánh dấu trong onboarding để bỏ qua.' },
                { q: 'Mất phí không?', a: 'Hoàn toàn miễn phí khi tự chạy. Không paywall: hết tim vẫn luyện tập được để lấy lại tim.' },
              ].map((f) => (
                <details key={f.q} className="group rounded-xl border bg-card px-5 py-4">
                  <summary className="font-semibold cursor-pointer list-none flex items-center justify-between gap-3 outline-none">
                    {f.q}
                    <span className="text-muted-foreground transition-transform group-open:rotate-45 text-xl leading-none select-none" aria-hidden>+</span>
                  </summary>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 text-center">
            <p className="text-4xl font-black mb-3 jp">がんばりましょう!</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">Sẵn sàng bắt đầu hành trình?</h2>
            <p className="text-muted-foreground mb-7">Đăng ký mất 30 giây — ải đầu tiên đợi bạn ngay sau đó.</p>
            <Button size="lg" className="text-base h-12 px-8 rounded-2xl shadow-lg shadow-primary/25" onClick={() => navigate('/register')}>
              Bắt đầu ngay
            </Button>
          </div>
        </section>
      </main>

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
