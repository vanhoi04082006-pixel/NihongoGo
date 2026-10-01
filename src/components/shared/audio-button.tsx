'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Loader2, Turtle, Volume2 } from 'lucide-react'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

/**
 * Chiến lược phát âm tiếng Nhật (zero-cost, không phụ thuộc API trả phí):
 * 1) GIỌNG NHẬT TRÌNH DUYỆT (speechSynthesis, lang ja-JP) — phát âm chuẩn nhất
 *    (Chrome/Edge: Google 日本語 / Microsoft Nanami; macOS/iOS: Kyoko; Android: Google Nhật).
 * 2) Nếu trình duyệt không có giọng Nhật → utterance lang=ja-JP không kén voice
 *    (yêu cầu hệ thống chọn giọng Nhật nếu có) + THÔNG BÁO rõ cho người dùng.
 *
 * KHÔNG tự rơi vào TTS server khi thiếu giọng Nhật: các voice server hiện có đều
 * là giọng Trung đọc kana tiếng Nhật thành âm Hán — dạy sai phát âm, thà không
 * phát còn hơn. (/api/audio/tts vẫn giữ như provider tùy chọn cho môi trường có
 * voice Nhật phía server.)
 */

/* Thông báo thiếu giọng Nhật — tối đa 1 lần / 60s để không spam toast */
let noJaVoiceNotifiedAt = 0
function notifyNoJapaneseVoice() {
  const now = Date.now()
  if (now - noJaVoiceNotifiedAt < 60_000) return
  noJaVoiceNotifiedAt = now
  toast.info('Thiết bị chưa có giọng đọc tiếng Nhật', {
    description: 'Âm thanh có thể không phát hoặc không chuẩn. Hãy dùng Chrome/Edge trên desktop, hoặc cài thêm giọng Nhật (Nhật Bản) trong cài đặt hệ thống.',
    duration: 6000,
  })
}

export function ttsUrl(text: string, speed = 1): string {
  return `/api/audio/tts?text=${encodeURIComponent(text)}&speed=${speed}`
}

/* ------------------------- Japanese voice resolution ------------------------ */

const VOICES_WAIT_MS = 600

let voicesCache: SpeechSynthesisVoice[] | null = null

function synth(): SpeechSynthesis | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null
  return window.speechSynthesis
}

function refreshVoices(): SpeechSynthesisVoice[] {
  const s = synth()
  if (!s) return []
  const v = s.getVoices()
  if (v.length) voicesCache = v
  return voicesCache ?? []
}

// Khởi động danh sách voice (trên Chrome voices tải bất đồng bộ qua sự kiện voiceschanged)
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  refreshVoices()
  window.speechSynthesis.addEventListener?.('voiceschanged', refreshVoices)
}

function waitForVoices(ms: number): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    const current = refreshVoices()
    if (current.length) return resolve(current)
    const s = window.speechSynthesis
    const done = (voices: SpeechSynthesisVoice[]) => {
      clearTimeout(timer)
      s.removeEventListener?.('voiceschanged', onReady)
      resolve(voices)
    }
    const onReady = () => {
      const v = refreshVoices()
      if (v.length) done(v)
    }
    const timer = setTimeout(() => done(refreshVoices()), ms)
    s.addEventListener?.('voiceschanged', onReady)
  })
}

/** Ưu tiên giọng Nhật chất lượng cao nếu có nhiều. */
const JA_VOICE_PREFERENCE = [/google/i, /nanami|keita|ayumi|kyoko|otoya|maho|shiori/i, /microsoft/i, /natural|online|network/i]

export function pickJapaneseVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  const ja = voices.filter((v) => (v.lang || '').toLowerCase().startsWith('ja'))
  if (!ja.length) return null
  for (const re of JA_VOICE_PREFERENCE) {
    const hit = ja.find((v) => re.test(v.name))
    if (hit) return hit
  }
  // Giọng cục bộ vẫn tốt hơn không có
  return ja[0]
}

/** Đọc bằng giọng Nhật của trình duyệt. Trả về false nếu không có giọng Nhật. */
export function speakJapaneseBrowser(text: string, rate = 1): boolean {
  const s = synth()
  if (!s) return false
  const voice = pickJapaneseVoice(refreshVoices())
  if (!voice) return false
  const u = new SpeechSynthesisUtterance(text)
  u.voice = voice
  u.lang = voice.lang || 'ja-JP'
  u.rate = Math.min(2, Math.max(0.5, rate))
  u.pitch = 1
  s.cancel()
  s.speak(u)
  return true
}

/** Fallback cuối cùng: speechSynthesis không kén voice (lang ja-JP). */
export function speakFallback(text: string, speed = 1): boolean {
  const s = synth()
  if (!s) return false
  const u = new SpeechSynthesisUtterance(text)
  u.lang = 'ja-JP'
  u.rate = Math.min(2, Math.max(0.5, speed))
  s.cancel()
  s.speak(u)
  return true
}

/* -------------------------------- TTS player -------------------------------- */

export function useTtsPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null)
  const [playing, setPlaying] = useState(false)

  const stop = useCallback(() => {
    audioRef.current?.pause()
    audioRef.current = null
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) window.speechSynthesis.cancel()
    utterRef.current = null
    setPlaying(false)
  }, [])

  const playBrowserJa = useCallback(async (text: string, rate: number): Promise<boolean> => {
    const s = synth()
    if (!s) return false
    let voices = refreshVoices()
    if (!voices.length) voices = await waitForVoices(VOICES_WAIT_MS)
    const voice = pickJapaneseVoice(voices)
    if (!voice) return false
    const u = new SpeechSynthesisUtterance(text)
    u.voice = voice
    u.lang = voice.lang || 'ja-JP'
    u.rate = Math.min(2, Math.max(0.5, rate))
    u.onend = () => setPlaying(false)
    u.onerror = () => setPlaying(false)
    utterRef.current = u
    s.cancel()
    s.speak(u)
    return true
  }, [])

  const play = useCallback(
    async (text: string, speed = 1) => {
      stop()
      if (!text.trim()) return
      setPlaying(true)
      // 1) Giọng Nhật trình duyệt (zero-cost)
      const spoke = await playBrowserJa(text, speed)
      if (spoke) {
        // Bảo hiểm nếu onend không bắn (một số trình duyệt)
        const est = Math.max(1200, text.length * 260) / Math.max(0.5, speed)
        setTimeout(() => setPlaying(false), est)
        return
      }
      // 2) Không có giọng Nhật → utterance lang=ja-JP (hệ thống tự chọn nếu có)
      //    + thông báo rõ (KHÔNG âm thầm phát giọng khác ngôn ngữ)
      notifyNoJapaneseVoice()
      const ok = speakFallback(text, speed)
      if (!ok) {
        setPlaying(false)
        return
      }
      setTimeout(() => setPlaying(false), Math.max(1500, text.length * 180))
    },
    [stop, playBrowserJa]
  )

  useEffect(() => () => stop(), [stop])

  return { play, stop, playing }
}

/* -------------------------------- AudioButton ------------------------------- */

export function AudioButton({
  text,
  speed = 1,
  size = 'md',
  className,
  autoPlay,
  labelSlow = true,
}: {
  text: string
  speed?: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
  autoPlay?: boolean
  labelSlow?: boolean
}) {
  const { play, playing } = useTtsPlayer()
  const [slow, setSlow] = useState(false)
  const playedOnce = useRef(false)

  useEffect(() => {
    if (autoPlay && !playedOnce.current) {
      playedOnce.current = true
      const t = setTimeout(() => play(text), 350)
      return () => clearTimeout(t)
    }
  }, [autoPlay, play, text])

  const sizeCls = size === 'lg' ? 'h-16 w-16 rounded-full' : size === 'sm' ? 'h-9 w-9 rounded-xl' : 'h-12 w-12 rounded-2xl'
  const iconCls = size === 'lg' ? 'h-8 w-8' : size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'

  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <button
        onClick={() => play(text, slow ? 0.6 : speed)}
        className={cn(
          'inline-flex items-center justify-center bg-primary text-primary-foreground shadow-md shadow-primary/20 transition-transform outline-none focus-visible:ring-2 focus-visible:ring-ring hover:scale-105 active:scale-95',
          sizeCls,
          playing && 'scale-95'
        )}
        aria-label={playing ? 'Đang phát âm thanh' : `Phát âm thanh: ${text}`}
      >
        {playing ? <Loader2 className={cn(iconCls, 'animate-spin')} /> : <Volume2 className={iconCls} />}
      </button>
      {labelSlow && (
        <button
          onClick={() => setSlow((v) => !v)}
          className={cn(
            'inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-semibold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring',
            slow ? 'bg-sakura/15 text-sakura' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          )}
          aria-pressed={slow}
          title="Bật/tắt chế độ đọc chậm"
        >
          <Turtle className="h-3.5 w-3.5" aria-hidden />
          Chậm
        </button>
      )}
    </span>
  )
}
