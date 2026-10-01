'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import Image from 'next/image'
import { Eye, EyeOff } from 'lucide-react'
import { useHashRoute } from '@/components/app/router'
import { useAuthActions } from '@/components/app/use-auth'
import { LogoFull } from '@/components/app/logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ApiClientError } from '@/lib/client/api'

const loginSchema = z.object({
  email: z.string().min(1, 'Nhập email').email('Email không hợp lệ'),
  password: z.string().min(1, 'Nhập mật khẩu'),
})

const registerSchema = z.object({
  displayName: z.string().min(1, 'Nhập tên hiển thị').max(50, 'Tối đa 50 ký tự'),
  username: z
    .string()
    .min(3, 'Tên đăng nhập tối thiểu 3 ký tự')
    .max(20)
    .regex(/^[a-zA-Z0-9_]+$/, 'Chỉ gồm a-z, 0-9 và dấu gạch dưới'),
  email: z.string().min(1, 'Nhập email').email('Email không hợp lệ'),
  password: z.string().min(8, 'Mật khẩu cần ít nhất 8 ký tự'),
})

type LoginForm = z.infer<typeof loginSchema>
type RegisterForm = z.infer<typeof registerSchema>

export function AuthView({ mode }: { mode: 'login' | 'register' }) {
  const { navigate } = useHashRoute()
  const { login, register: registerAction } = useAuthActions(useHashRoute())
  const [showPassword, setShowPassword] = useState(false)
  const isRegister = mode === 'register'

  const loginForm = useForm<LoginForm>({ resolver: zodResolver(loginSchema), defaultValues: { email: '', password: '' } })
  const registerForm = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: { displayName: '', username: '', email: '', password: '' },
  })

  const onLogin = loginForm.handleSubmit(async (values) => {
    try {
      await login.mutateAsync(values)
      toast.success('Đăng nhập thành công. またね!')
    } catch (e) {
      toast.error(e instanceof ApiClientError ? e.message : 'Đăng nhập thất bại')
    }
  })

  const onRegister = registerForm.handleSubmit(async (values) => {
    try {
      await registerAction.mutateAsync(values)
      toast.success('Tạo tài khoản thành công. Bắt đầu onboarding nhé!')
    } catch (e) {
      toast.error(e instanceof ApiClientError ? e.message : 'Đăng ký thất bại')
    }
  })

  const busy = login.isPending || registerAction.isPending
  const loginErrors = loginForm.formState.errors
  const registerErrors = registerForm.formState.errors
  // Truy cập qua key động để giữ type an toàn giữa 2 form
  const errors = (isRegister ? registerErrors : loginErrors) as Record<string, { message?: string } | undefined>

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="outline-none" aria-label="Về trang chủ">
            <LogoFull />
          </button>
          <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
            ← Trang chủ
          </Button>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md">
          {/* Mascot chào đón kiểu Duolingo */}
          <div className="flex justify-center mb-5">
            <div className="h-28 w-28 sm:h-32 sm:w-32 rounded-3xl overflow-hidden border-4 border-primary/25 bg-card shadow-lg shadow-primary/10 rotate-2">
              <Image
                src="/images/mascot-wave.png"
                alt="Chú chó Shiba vẫy tay chào bạn"
                width={128}
                height={128}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
          <div className="rounded-3xl border bg-card shadow-xl shadow-primary/5 p-7 sm:p-9">
            <h1 className="text-2xl font-bold tracking-tight">
              {isRegister ? 'Tạo tài khoản NihongoGo' : 'Đăng nhập'}
            </h1>
            <p className="text-sm text-muted-foreground mt-1.5 mb-7">
              {isRegister ? '30 giây nữa là bạn bước vào ải đầu tiên.' : 'Chào mừng trở lại — chuỗi ngày của bạn đang đợi.'}
            </p>

            {isRegister ? (
              <form onSubmit={onRegister} className="space-y-4" noValidate>
                <Field label="Tên hiển thị" error={errors.displayName?.message} htmlFor="reg-name">
                  <Input id="reg-name" placeholder="vd: Linh Nguyễn" {...registerForm.register('displayName')} autoComplete="name" />
                </Field>
                <Field label="Tên đăng nhập" error={errors.username?.message} htmlFor="reg-username">
                  <Input id="reg-username" placeholder="vd: linh_nihongo" {...registerForm.register('username')} autoComplete="username" />
                </Field>
                <Field label="Email" error={errors.email?.message} htmlFor="reg-email">
                  <Input id="reg-email" type="email" placeholder="ban@example.com" {...registerForm.register('email')} autoComplete="email" />
                </Field>
                <Field label="Mật khẩu" error={errors.password?.message} htmlFor="reg-password">
                  <div className="relative">
                    <Input
                      id="reg-password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Tối thiểu 8 ký tự"
                      {...registerForm.register('password')}
                      autoComplete="new-password"
                      className="pr-11"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </Field>
                <Button type="submit" className="w-full h-11 rounded-xl" disabled={busy}>
                  {busy ? 'Đang tạo…' : 'Bắt đầu hành trình'}
                </Button>
              </form>
            ) : (
              <form onSubmit={onLogin} className="space-y-4" noValidate>
                <Field label="Email" error={errors.email?.message} htmlFor="login-email">
                  <Input id="login-email" type="email" placeholder="ban@example.com" {...loginForm.register('email')} autoComplete="email" />
                </Field>
                <Field label="Mật khẩu" error={errors.password?.message} htmlFor="login-password">
                  <div className="relative">
                    <Input
                      id="login-password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      {...loginForm.register('password')}
                      autoComplete="current-password"
                      className="pr-11"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </Field>
                <Button type="submit" className="w-full h-11 rounded-xl" disabled={busy}>
                  {busy ? 'Đang đăng nhập…' : 'Đăng nhập'}
                </Button>
              </form>
            )}

            <p className="text-sm text-muted-foreground text-center mt-6">
              {isRegister ? 'Đã có tài khoản? ' : 'Chưa có tài khoản? '}
              <button
                onClick={() => navigate(isRegister ? '/login' : '/register')}
                className="font-semibold text-primary hover:underline outline-none"
              >
                {isRegister ? 'Đăng nhập' : 'Đăng ký miễn phí'}
              </button>
            </p>
          </div>

          {!isRegister && (
            <div className="mt-4 rounded-2xl border border-dashed bg-muted/40 px-5 py-4 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground mb-1">Tài khoản dùng thử (dev):</p>
              <p>Học viên: <code className="text-xs">demo@nihongogo.local / demo12345</code></p>
              <p>Quản trị: <code className="text-xs">admin@nihongogo.local / admin12345</code></p>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} NihongoGo — nội dung học biên soạn gốc cho người Việt
        </div>
      </footer>
    </div>
  )
}

function Field({ label, error, htmlFor, children }: { label: string; error?: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error && (
        <p className="text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
