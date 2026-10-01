import { createHash } from 'node:crypto'
import { existsSync } from 'node:fs'
import fs from 'node:fs/promises'
import path from 'node:path'
import { ApiError } from '@/lib/api'
import { db } from '@/lib/db'

/**
 * Speech providers — TTS + ASR.
 * Abstraction: có thể thay provider (z-ai-sdk → vendor khác) mà không đổi call-site.
 * TTS cache theo (text, voice, speed) trên filesystem + metadata trong AudioAsset.
 */

const CACHE_DIR = path.join(process.cwd(), '.cache', 'tts')
const MAX_TTS_LEN = 500

let zaiInstance: { audio: { tts: { create: (o: unknown) => Promise<Response> }; asr: { create: (o: unknown) => Promise<{ text: string }> } } } | null = null

async function getZai(): Promise<NonNullable<typeof zaiInstance>> {
  if (!zaiInstance) {
    const ZAI = (await import('z-ai-web-dev-sdk')).default
    zaiInstance = (await ZAI.create()) as unknown as NonNullable<typeof zaiInstance>
  }
  return zaiInstance
}

export interface TtsResult {
  buffer: Buffer
  mimeType: string
}

/** Sinh audio cho text tiếng Nhật. Cache vĩnh viễn theo nội dung. */
export async function synthesizeJapanese(text: string, speed = 1, voice = 'tongtong'): Promise<TtsResult> {
  const clean = text.trim().slice(0, MAX_TTS_LEN)
  if (!clean) throw new ApiError(400, 'TTS_EMPTY', 'Không có nội dung để đọc')
  const speedClamped = Math.min(2, Math.max(0.5, speed))
  const cacheKey = createHash('sha256').update(`${voice}|${speedClamped}|${clean}`).digest('hex')
  const filePath = path.join(CACHE_DIR, `${cacheKey}.wav`)

  if (existsSync(filePath)) {
    try {
      const buffer = await fs.readFile(filePath)
      void db.audioAsset.update({ where: { cacheKey }, data: { lastAccessAt: new Date() } }).catch(() => {})
      return { buffer, mimeType: 'audio/wav' }
    } catch {
      // đọc lỗi → regenerate
    }
  }

  const zai = await getZai()
  let buffer: Buffer
  try {
    const response = await zai.audio.tts.create({
      input: clean,
      voice,
      speed: speedClamped,
      response_format: 'wav',
      stream: false,
    })
    const arrayBuffer = await response.arrayBuffer()
    buffer = Buffer.from(new Uint8Array(arrayBuffer))
    if (buffer.length < 100) throw new Error('empty audio')
  } catch (e) {
    console.error('[tts] synthesis failed:', e)
    throw new ApiError(503, 'TTS_UNAVAILABLE', 'Dịch vụ đọc tiếng Nhật tạm thời không khả dụng')
  }

  try {
    await fs.mkdir(CACHE_DIR, { recursive: true })
    await fs.writeFile(filePath, buffer)
    await db.audioAsset.upsert({
      where: { cacheKey },
      update: { lastAccessAt: new Date(), byteSize: buffer.length },
      create: {
        cacheKey,
        text: clean,
        voice,
        speed: speedClamped,
        provider: 'zai-sdk',
        mimeType: 'audio/wav',
        filePath,
        byteSize: buffer.length,
      },
    })
  } catch (e) {
    console.error('[tts] cache write failed:', e)
  }
  return { buffer, mimeType: 'audio/wav' }
}

/** ASR: chuyển audio (base64) → text. */
export async function transcribeAudio(base64: string): Promise<string> {
  const clean = base64.replace(/^data:[^;]+;base64,/, '')
  const size = Math.floor((clean.length * 3) / 4)
  if (size > 5 * 1024 * 1024) throw new ApiError(413, 'AUDIO_TOO_LARGE', 'File âm thanh quá lớn (tối đa 5MB)')
  if (size < 500) throw new ApiError(400, 'AUDIO_EMPTY', 'Không ghi được âm thanh nào')

  const zai = await getZai()
  try {
    const response = await zai.audio.asr.create({ file_base64: clean })
    const text = (response?.text ?? '').trim()
    if (!text) throw new ApiError(422, 'ASR_EMPTY', 'Không nhận diện được giọng nói. Vui lòng thử lại.')
    return text
  } catch (e) {
    if (e instanceof ApiError) throw e
    console.error('[asr] failed:', e)
    throw new ApiError(503, 'ASR_UNAVAILABLE', 'Dịch vụ nhận diện giọng nói tạm thời không khả dụng')
  }
}
