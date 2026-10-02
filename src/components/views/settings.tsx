'use client'

import { useEffect, useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { Download, Smartphone, Share, PlusSquare, DatabaseBackup, RefreshCw } from 'lucide-react'
import { api, ApiClientError } from '@/lib/client/api'
import { useHashRoute } from '@/components/app/router'
import { useAuth, useAuthActions } from '@/components/app/use-auth'
import { LoadingBlock, ErrorBlock, PageHeader } from '@/components/shared/widgets'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface SettingsDTO {
  settings: {
    theme: string
    soundEnabled: boolean
    romajiDisplay: boolean
    autoSpeak: boolean
    reducedMotion: boolean
    kanaMasteryTarget: number
  }
}

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

const GOAL_OPTIONS = [
  { value: '10', label: 'Thong thả — 10 XP/ngày' },
  { value: '20', label: 'Đều đặn — 20 XP/ngày' },
  { value: '40', label: 'Chăm chỉ — 40 XP/ngày' },
  { value: '60', label: 'Nghiêm túc — 60 XP/ngày' },
]

const TZ_OPTIONS = ['Asia/Ho_Chi_Minh', 'Asia/Tokyo', 'Asia/Bangkok', 'Asia/Singapore', 'Europe/Paris', 'America/New_York', 'UTC']

export function SettingsView() {
  const qc = useQueryClient()
  const { data: user } = useAuth()
  const { logout } = useAuthActions(useHashRoute())
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['settings'],
    queryFn: () => api<SettingsDTO>('/api/settings'),
  })

  const [sound, setSound] = useState(true)
  const [romaji, setRomaji] = useState(true)
  const [autoSpeak, setAutoSpeak] = useState(false)
  const [reduced, setReduced] = useState(false)
  const [kanaTarget, setKanaTarget] = useState('10')
  const [displayName, setDisplayName] = useState('')
  const [dailyGoal, setDailyGoal] = useState('20')
  const [timezone, setTimezone] = useState('Asia/Ho_Chi_Minh')
  const [saving, setSaving] = useState(false)
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null)
  const [isStandalone, setIsStandalone] = useState(false)
  const [isIOS, setIsIOS] = useState(false)

  // PWA: bắt sự kiện cài đặt + trạng thái standalone
  useEffect(() => {
    const onPrompt = (e: Event) => {
      e.preventDefault()
      setInstallEvent(e as BeforeInstallPromptEvent)
    }
    window.addEventListener('beforeinstallprompt', onPrompt)
    window.addEventListener('appinstalled', () => setInstallEvent(null))
    setIsStandalone(window.matchMedia('(display-mode: standalone)').matches)
    setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent) && !/CriOS|FxiOS/.test(navigator.userAgent))
    return () => window.removeEventListener('beforeinstallprompt', onPrompt)
  }, [])

  const installApp = async () => {
    if (!installEvent) return
    await installEvent.prompt()
    const choice = await installEvent.userChoice
    if (choice.outcome === 'accepted') {
      toast.success('Đã cài NihongoGo lên thiết bị!')
      setInstallEvent(null)
    }
  }

  const [exporting, setExporting] = useState(false)
  const exportData = async () => {
    setExporting(true)
    try {
      const res = await fetch('/api/profile/export', { credentials: 'same-origin' })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const blob = await res.blob()
      const disposition = res.headers.get('Content-Disposition') ?? ''
      const match = /filename="?([^";]+)"?/.exec(disposition)
      const filename = match?.[1] ?? `nihongogo-backup-${new Date().toISOString().slice(0, 10)}.json`
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = filename
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
      toast.success('Đã tải dữ liệu học tập')
    } catch {
      toast.error('Không tải được dữ liệu — thử lại sau')
    } finally {
      setExporting(false)
    }
  }

  useEffect(() => {
    if (data) {
      setSound(data.settings.soundEnabled)
      setRomaji(data.settings.romajiDisplay)
      setAutoSpeak(data.settings.autoSpeak)
      setReduced(data.settings.reducedMotion)
      setKanaTarget(String(data.settings.kanaMasteryTarget ?? 10))
    }
    if (user?.profile) {
      setDisplayName(user.profile.displayName ?? '')
      setDailyGoal(String(user.profile.dailyGoalXP ?? 20))
      setTimezone(user.profile.timezone ?? 'Asia/Ho_Chi_Minh')
    }
  }, [data, user])

  const saveSettings = async (patch: Record<string, unknown>) => {
    try {
      await api('/api/settings', { method: 'PATCH', json: patch })
      qc.invalidateQueries({ queryKey: ['settings'] })
    } catch (e) {
      toast.error(e instanceof ApiClientError ? e.message : 'Không lưu được cài đặt')
    }
  }

  const saveProfile = async () => {
    setSaving(true)
    try {
      await api('/api/profile', {
        method: 'PATCH',
        json: {
          displayName: displayName.trim() || undefined,
          dailyGoalXP: Number(dailyGoal),
          timezone,
        },
      })
      await qc.invalidateQueries({ queryKey: ['auth'] })
      await qc.invalidateQueries({ queryKey: ['overview'] })
      toast.success('Đã lưu hồ sơ')
    } catch (e) {
      toast.error(e instanceof ApiClientError ? e.message : 'Không lưu được hồ sơ')
    } finally {
      setSaving(false)
    }
  }

  if (isLoading) return <LoadingBlock />
  if (error || !data) return <ErrorBlock message="Không tải được cài đặt." onRetry={() => refetch()} />

  return (
    <div className="max-w-2xl">
      <PageHeader icon="Settings" title="Cài đặt" sub="Tùy chỉnh trải nghiệm học của bạn." />

      {/* Learning preferences */}
      <section className="rounded-2xl border bg-card p-5 mb-4 space-y-5" aria-label="Tùy chọn học tập">
        <h2 className="font-bold">Học tập</h2>
        <SettingRow
          title="Hiện romaji"
          desc="Kèm phiên âm romaji dưới từ tiếng Nhật khi có thể."
          checked={romaji}
          onChange={(v) => {
            setRomaji(v)
            void saveSettings({ romajiDisplay: v })
          }}
        />
        <SettingRow
          title="Âm thanh"
          desc="Bật hiệu ứng âm phản hồi đúng/sai."
          checked={sound}
          onChange={(v) => {
            setSound(v)
            void saveSettings({ soundEnabled: v })
          }}
        />
        <SettingRow
          title="Tự động phát âm"
          desc="Tự đọc câu tiếng Nhật khi sang câu mới."
          checked={autoSpeak}
          onChange={(v) => {
            setAutoSpeak(v)
            void saveSettings({ autoSpeak: v })
          }}
        />
        <SettingRow
          title="Giảm chuyển động"
          desc="Tắt animation (tự động bật theo hệ điều hành của bạn)."
          checked={reduced}
          onChange={(v) => {
            setReduced(v)
            void saveSettings({ reducedMotion: v })
          }}
        />
        <div className="flex items-center justify-between gap-4">
          <div>
            <Label htmlFor="setting-kana-target" className="font-semibold text-sm">
              Mục tiêu thành thạo kana
            </Label>
            <p className="text-xs text-muted-foreground">
              Số lần trả lời đúng để một ký tự kana được tính là “thành thạo” (3–50, mặc định 10).
            </p>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <Input
              id="setting-kana-target"
              type="number"
              inputMode="numeric"
              min={3}
              max={50}
              value={kanaTarget}
              onChange={(e) => setKanaTarget(e.target.value)}
              onBlur={() => {
                const n = Math.round(Number(kanaTarget))
                if (!Number.isFinite(n) || n < 3 || n > 50) {
                  toast.error('Mục tiêu thành thạo kana phải từ 3 đến 50 lần đúng')
                  setKanaTarget(String(data.settings.kanaMasteryTarget ?? 10))
                  return
                }
                if (n !== (data.settings.kanaMasteryTarget ?? 10)) {
                  setKanaTarget(String(n))
                  void saveSettings({ kanaMasteryTarget: n })
                }
              }}
              className="w-20 text-center font-bold tabular-nums"
              aria-describedby="setting-kana-target-hint"
            />
            <span id="setting-kana-target-hint" className="text-xs text-muted-foreground">
              lần đúng
            </span>
          </div>
        </div>
      </section>

      {/* Profile */}
      <section className="rounded-2xl border bg-card p-5 mb-4 space-y-4" aria-label="Hồ sơ">
        <h2 className="font-bold">Hồ sơ & mục tiêu</h2>
        <div className="space-y-1.5">
          <Label htmlFor="setting-name">Tên hiển thị</Label>
          <Input id="setting-name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} maxLength={50} />
        </div>
        <div className="space-y-1.5">
          <Label>Mục tiêu hằng ngày (XP)</Label>
          <Select value={dailyGoal} onValueChange={setDailyGoal}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {GOAL_OPTIONS.map((o) => (
                <SelectItem key={o.value} value={o.value}>
                  {o.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label>Múi giờ (tính chuỗi ngày & nhiệm vụ)</Label>
          <Select value={timezone} onValueChange={setTimezone}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {TZ_OPTIONS.map((tz) => (
                <SelectItem key={tz} value={tz}>
                  {tz}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button onClick={saveProfile} disabled={saving} className="rounded-xl">
          {saving ? 'Đang lưu…' : 'Lưu hồ sơ'}
        </Button>
      </section>

      {/* Ứng dụng (PWA) */}
      <section className="rounded-2xl border bg-card p-5 mb-4 space-y-3" aria-label="Ứng dụng">
        <h2 className="font-bold">Ứng dụng</h2>
        {isStandalone ? (
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <Smartphone className="h-4 w-4 text-success" aria-hidden />
            Bạn đang dùng bản app đã cài — học bất kể có mạng (nội dung đã xem được lưu offline).
          </p>
        ) : (
          <>
            <p className="text-sm text-muted-foreground">
              Cài NihongoGo như ứng dụng: mở nhanh từ màn hình chính, học tiếp khi mất mạng (kana, từ vựng đã tra),
              toàn màn hình không thanh địa chỉ.
            </p>
            {installEvent ? (
              <Button onClick={installApp} className="rounded-xl">
                <Download className="h-4 w-4" /> Cài đặt ứng dụng
              </Button>
            ) : isIOS ? (
              <ol className="text-sm text-muted-foreground space-y-1.5 list-none pl-0">
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-muted font-bold text-xs">1</span>
                  Nhấn nút Chia sẻ <Share className="h-3.5 w-3.5 inline" aria-hidden /> ở thanh công cụ Safari
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-muted font-bold text-xs">2</span>
                  Chọn “Thêm vào Màn hình Chính” <PlusSquare className="h-3.5 w-3.5 inline" aria-hidden />
                </li>
              </ol>
            ) : (
              <p className="text-xs text-muted-foreground">
                Nếu không thấy nút cài: dùng menu trình duyệt → “Cài đặt ứng dụng / Add to Home screen”.
              </p>
            )}
          </>
        )}
      </section>

      {/* Dữ liệu */}
      <section className="rounded-2xl border bg-card p-5 mb-4 space-y-3" aria-label="Dữ liệu học tập">
        <h2 className="font-bold">Dữ liệu của bạn</h2>
        <p className="text-sm text-muted-foreground">
          Tải toàn bộ tiến trình học — XP, chuỗi ngày, SRS, thành tích, lịch sử phiên — dưới dạng file JSON để lưu trữ
          hoặc chuyển sang thiết bị khác. Dữ liệu thuộc về riêng bạn, tải bất cứ lúc nào.
        </p>
        <Button variant="outline" className="rounded-xl" onClick={exportData} disabled={exporting} aria-describedby="export-hint">
          {exporting ? <RefreshCw className="h-4 w-4 animate-spin" /> : <DatabaseBackup className="h-4 w-4" />}
          {exporting ? 'Đang chuẩn bị…' : 'Tải dữ liệu học tập (JSON)'}
        </Button>
        <p id="export-hint" className="text-xs text-muted-foreground">
          File chứa: hồ sơ, tiến trình bài học, SRS (kana · kanji · từ vựng · ngữ pháp), thành tích đã mở, 500 giao dịch XP gần nhất.
        </p>
      </section>

      {/* Account */}
      <section className="rounded-2xl border bg-card p-5 space-y-3" aria-label="Tài khoản">
        <h2 className="font-bold">Tài khoản</h2>
        <p className="text-sm text-muted-foreground">
          Đăng nhập bằng <span className="font-semibold text-foreground">{user?.email}</span> · vai trò{' '}
          <span className="font-semibold text-foreground">{user?.role}</span>
        </p>
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" onClick={() => logout.mutate()}>
            Đăng xuất
          </Button>
        </div>
      </section>
    </div>
  )
}

function SettingRow({ title, desc, checked, onChange }: { title: string; desc: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="font-semibold text-sm">{title}</p>
        <p className="text-xs text-muted-foreground">{desc}</p>
      </div>
      <Switch checked={checked} onCheckedChange={onChange} aria-label={title} />
    </div>
  )
}
