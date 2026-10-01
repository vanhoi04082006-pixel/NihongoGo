'use client'

/**
 * Sound effects tổng hợp bằng Web Audio API — không cần file audio.
 * Tôn trọng cài đặt "soundEnabled" của người dùng (set qua setSfxEnabled).
 */

let ctx: AudioContext | null = null
let enabled = true

export function setSfxEnabled(v: boolean) {
  enabled = v
}

function ac(): AudioContext | null {
  if (typeof window === 'undefined') return null
  try {
    if (!ctx) {
      const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
      if (!AC) return null
      ctx = new AC()
    }
    if (ctx.state === 'suspended') void ctx.resume()
    return ctx
  } catch {
    return null
  }
}

/** Một nốt đơn: tần số, độ trễ bắt đầu (giây), thời lượng, dạng sóng, âm lượng */
function tone(freq: number, delay: number, dur: number, type: OscillatorType, vol: number) {
  if (!enabled) return
  const c = ac()
  if (!c) return
  try {
    const t0 = c.currentTime + delay
    const osc = c.createOscillator()
    const gain = c.createGain()
    osc.type = type
    osc.frequency.setValueAtTime(freq, t0)
    // Fade-in/out nhanh để không bị "click"
    gain.gain.setValueAtTime(0.0001, t0)
    gain.gain.exponentialRampToValueAtTime(vol, t0 + 0.012)
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur)
    osc.connect(gain).connect(c.destination)
    osc.start(t0)
    osc.stop(t0 + dur + 0.05)
  } catch {
    /* im lặng nếu trình duyệt chặn */
  }
}

/** Hợp âm nhẹ (2 nốt chồng nhau) cho hiệu ứng "ting" đầy đặn */
function dyad(freqA: number, freqB: number, delay: number, dur: number, vol: number) {
  tone(freqA, delay, dur, 'triangle', vol)
  tone(freqB, delay, dur, 'sine', vol * 0.55)
}

export const sfx = {
  /** Trả lời đúng — ting sáng (E5→A5) */
  correct() {
    dyad(659.25, 1318.5, 0, 0.1, 0.16)
    dyad(880, 1760, 0.08, 0.22, 0.18)
  },
  /** Trả lời sai — trầm đục, hạ nhẹ cao độ */
  wrong() {
    tone(196, 0, 0.18, 'sawtooth', 0.07)
    tone(155.56, 0.1, 0.26, 'sawtooth', 0.07)
  },
  /** Hoàn thành ải — fanfare arpeggio C-E-G-C */
  complete() {
    dyad(523.25, 1046.5, 0, 0.12, 0.15)
    dyad(659.25, 1318.5, 0.11, 0.12, 0.15)
    dyad(783.99, 1568, 0.22, 0.12, 0.15)
    dyad(1046.5, 2093, 0.33, 0.34, 0.17)
  },
  /** Hết tim / thất bại — điệu xuống buồn */
  fail() {
    tone(392, 0, 0.16, 'triangle', 0.12)
    tone(329.63, 0.14, 0.16, 'triangle', 0.12)
    tone(261.63, 0.28, 0.4, 'triangle', 0.12)
  },
  /** Mốc combo — cao độ tăng dần theo mốc */
  combo(milestone: number) {
    const base = 660 * Math.pow(1.0595, Math.min(milestone, 8)) // mỗi mốc +1 nửa cung
    dyad(base, base * 2, 0, 0.14, 0.12)
  },
  /** Mất tim — "tink" vỡ nhẹ */
  heartLost() {
    tone(1244.51, 0, 0.09, 'sine', 0.1)
    tone(830.61, 0.07, 0.16, 'sine', 0.08)
  },
}
