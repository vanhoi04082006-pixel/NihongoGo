/**
 * Tải SVG nét chữ (stroke order) từ KanjiVG cho toàn bộ ký tự trong database:
 * - 208 ký tự kana (hiragana + katakana, gồm youon ghép 2 mã ký tự)
 * - 119 chữ kanji
 *
 * Mỗi ký tự → mã codepoint hex Unicode lowercase, pad-left 5 số
 * (vd あ → 03042, ア → 030a2, 日 → 065e5), tải về public/strokes/{hex}.svg.
 * Ký tự youon (きゃ, キュ…) gồm nhiều codepoint → tải từng phần và ghép khi hiển thị.
 *
 * Nguồn: https://github.com/KanjiVG/kanjivg — license CC BY-SA 3.0
 * (ghi công tại public/strokes/CREDITS.md).
 *
 * Chạy: bun scripts/download-strokes.ts
 */
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { PrismaClient } from '@prisma/client'

const ROOT = join(import.meta.dir, '..')
const OUT_DIR = join(ROOT, 'public', 'strokes')
const BASE_URL = 'https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji'

const db = new PrismaClient()

/** "あ" → "03042" (hex lowercase, pad-left 5) */
function hexOf(ch: string): string {
  return ch.codePointAt(0)!.toString(16).toLowerCase().padStart(5, '0')
}

async function main() {
  const [kana, kanji] = await Promise.all([
    db.kanaCharacter.findMany({ select: { character: true } }),
    db.kanji.findMany({ select: { character: true } }),
  ])
  console.log(`DB: ${kana.length} ký tự kana + ${kanji.length} chữ kanji`)

  // Tập hợp codepoint duy nhất (youon = nhiều codepoint)
  const hexes = new Set<string>()
  for (const row of [...kana, ...kanji]) {
    for (const ch of Array.from(row.character)) hexes.add(hexOf(ch))
  }
  const list = [...hexes].sort()
  console.log(`→ ${list.length} codepoint duy nhất cần tải`)

  mkdirSync(OUT_DIR, { recursive: true })

  let downloaded = 0
  let cached = 0
  let failed = 0
  const failures: string[] = []

  for (const hex of list) {
    const dest = join(OUT_DIR, `${hex}.svg`)
    if (existsSync(dest)) {
      cached++
      continue
    }
    const url = `${BASE_URL}/${hex}.svg`
    const proc = Bun.spawnSync(['curl', '-fsSL', '--retry', '2', '--max-time', '30', '-o', dest, url])
    const ok = proc.exitCode === 0 && existsSync(dest)
    if (ok) {
      downloaded++
    } else {
      failed++
      failures.push(hex)
      try {
        rmSync(dest, { force: true })
      } catch {
        /* bỏ qua */
      }
      console.warn(`⚠ 404 / lỗi tải: U+${hex} (${url})`)
    }
  }

  console.log(`\nKết quả: tải mới ${downloaded}, đã có ${cached}, thất bại ${failed}/${list.length}`)
  if (failures.length > 0) {
    console.log('Codepoint thiếu:', failures.join(', '))
  }

  // Ghi manifest ánh xạ codepoint → ký tự để debug dễ dàng
  const manifest = [...kana, ...kanji]
    .flatMap((r) => Array.from(r.character))
    .filter((ch, i, arr) => arr.indexOf(ch) === i)
    .sort()
    .map((ch) => ({ ch, hex: hexOf(ch), has: existsSync(join(OUT_DIR, `${hexOf(ch)}.svg`)) }))
  writeFileSync(
    join(OUT_DIR, 'manifest.json'),
    JSON.stringify({ source: 'KanjiVG', license: 'CC BY-SA 3.0', characters: manifest }, null, 2)
  )
  const missing = manifest.filter((m) => !m.has)
  if (missing.length > 0) console.warn(`⚠ ${missing.length} ký tự thiếu SVG:`, missing.map((m) => m.ch).join(' '))
  else console.log('✓ Mọi ký tự đều có dữ liệu nét chữ')
}

main()
  .catch((e) => {
    console.error(e)
    process.exitCode = 1
  })
  .finally(() => db.$disconnect())
