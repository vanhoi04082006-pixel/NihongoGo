'use client'

import { LessonPlayer } from '@/components/lesson/player'

export function LessonPlayerView({
  nodeId,
  mode,
  source = 'node',
  preview,
}: {
  nodeId?: string
  mode?: 'LESSON' | 'PRACTICE'
  source?: 'node' | 'review' | 'mistakes' | 'jump' | 'challenge'
  preview?: boolean
}) {
  return <LessonPlayer nodeId={nodeId} mode={mode ?? 'LESSON'} source={source} />
}
