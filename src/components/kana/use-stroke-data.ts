'use client'

import { useQuery } from '@tanstack/react-query'

/**
 * Tải + cache dữ liệu nét chữ KanjiVG (/strokes/{hex}.svg) cho một ký tự.
 * Ký tự youon (きゃ) gồm nhiều codepoint → nhiều phần SVG ghép cạnh nhau.
 */

export interface StrokePart {
  paths: { d: string; order: number }[]
}

export function hexOf(ch: string): string {
  return ch.codePointAt(0)!.toString(16).toLowerCase().padStart(5, '0')
}

export async function loadStrokes(character: string): Promise<StrokePart[]> {
  const parts: StrokePart[] = []
  for (const ch of Array.from(character)) {
    const res = await fetch(`/strokes/${hexOf(ch)}.svg`)
    if (!res.ok) throw new Error(`Không có dữ liệu nét chữ cho ${ch}`)
    const text = await res.text()
    const doc = new DOMParser().parseFromString(text, 'image/svg+xml')
    const pathEls = Array.from(doc.querySelectorAll('path[id*="-s"]'))
    const paths = pathEls
      .map((el) => {
        const m = /-s(\d+)$/.exec(el.id ?? '')
        return m ? { d: el.getAttribute('d') ?? '', order: Number(m[1]) } : null
      })
      .filter((p): p is { d: string; order: number } => !!p && p.d.length > 0)
      .sort((a, b) => a.order - b.order)
    if (paths.length > 0) parts.push({ paths })
  }
  if (parts.length === 0) throw new Error('SVG nét chữ rỗng')
  return parts
}

export function strokeCountOf(parts: StrokePart[]): number {
  return parts.reduce((sum, p) => sum + p.paths.length, 0)
}

export function useStrokeParts(character: string) {
  return useQuery({
    queryKey: ['kana-strokes', character],
    queryFn: () => loadStrokes(character),
    staleTime: Infinity,
    gcTime: 30 * 60_000,
    retry: false,
  })
}
