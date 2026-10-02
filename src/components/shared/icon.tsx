'use client'

import {
  Award, BookMarked, BookOpen, BookText, CheckCircle, Crown, Ear, Flame, Footprints, GraduationCap,
  Headphones, Languages, ListOrdered, MessageCircle, Mic, Pencil, PenLine, Puzzle,
  RefreshCw, Shapes, Shuffle, Sparkles, Star, Swords, Target, Trophy, Volume2, Wrench,
  Zap, Layers, Heart, Mountain, Flower2, type LucideIcon,
} from 'lucide-react'

/** Registry icon Lucide theo tên lưu trong DB (chống import động tùy ý). */
const REGISTRY: Record<string, LucideIcon> = {
  Award, BookMarked, BookOpen, BookText, CheckCircle, Crown, Ear, Flame, Footprints, GraduationCap,
  Headphones, Languages, ListOrdered, MessageCircle, Mic, Pencil, PenLine, Puzzle,
  RefreshCw, Shapes, Shuffle, Sparkles, Star, Swords, Target, Trophy, Volume2, Wrench,
  Zap, Layers, Heart, Mountain, Flower2,
}

export function DynamicIcon({ name, className, fallback = 'Star' }: { name: string; className?: string; fallback?: string }) {
  const Icon = REGISTRY[name] ?? REGISTRY[fallback] ?? Star
  return <Icon className={className} aria-hidden />
}
