import { db } from '@/lib/db'
import { badRequest, notFound } from '@/lib/api'
import { z } from 'zod'
import { audit, snapshotVersion } from './admin'

/**
 * Admin content CRUD — generic theo entity, validate Zod, audit mọi thao tác.
 * DELETE chỉ ADMIN; PUBLISH chỉ ADMIN (EDITOR chỉnh được bản nháp).
 */

export const CONTENT_ENTITIES = ['course', 'section', 'lesson', 'node', 'exercise', 'question', 'vocabulary', 'grammar', 'kanji'] as const
export type ContentEntity = (typeof CONTENT_ENTITIES)[number]

const jsonField = z
  .union([z.string(), z.record(z.string(), z.unknown()), z.array(z.unknown())])
  .transform((v) => (typeof v === 'string' ? v : JSON.stringify(v)))

export const createSchemas: Record<ContentEntity, z.ZodTypeAny> = {
  course: z.object({
    slug: z.string().min(1).max(80),
    title: z.string().min(1).max(120),
    titleJa: z.string().max(120).optional(),
    description: z.string().max(500).default(''),
    order: z.number().int().min(0).default(0),
    status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).default('DRAFT'),
  }),
  section: z.object({
    courseId: z.string().min(1),
    order: z.number().int().min(0),
    title: z.string().min(1).max(120),
    titleJa: z.string().max(120).optional(),
    description: z.string().max(500).default(''),
  }),
  lesson: z.object({
    courseId: z.string().min(1),
    sectionId: z.string().min(1),
    slug: z.string().min(1).max(80),
    order: z.number().int().min(1),
    title: z.string().min(1).max(200),
    titleJa: z.string().min(1).max(200),
    description: z.string().max(1000).default(''),
    learningObjectives: jsonField.optional(),
    grammarTopics: jsonField.optional(),
    vocabularyTopics: jsonField.optional(),
    kanjiTopics: jsonField.optional(),
    difficulty: z.enum(['BEGINNER', 'ELEMENTARY', 'INTERMEDIATE', 'ADVANCED']).default('BEGINNER'),
    status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).default('DRAFT'),
  }),
  node: z.object({
    lessonId: z.string().min(1),
    key: z.string().min(1).max(60),
    title: z.string().min(1).max(120),
    description: z.string().max(500).optional(),
    icon: z.string().max(40).default('Star'),
    nodeType: z.string().max(30).default('MIXED'),
    order: z.number().int().min(0),
    xpReward: z.number().int().min(0).max(100).default(10),
    requiredScore: z.number().int().min(0).max(100).default(70),
    difficulty: z.enum(['EASY', 'MEDIUM', 'HARD']).default('EASY'),
    status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).default('DRAFT'),
  }),
  exercise: z.object({
    nodeId: z.string().min(1),
    type: z.string().min(2).max(40),
    prompt: z.string().max(500).optional(),
    instructions: z.string().max(500).optional(),
    order: z.number().int().min(0),
    status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).default('DRAFT'),
  }),
  question: z.object({
    exerciseId: z.string().min(1),
    type: z.string().min(2).max(40),
    prompt: z.string().max(500).optional(),
    data: jsonField,
    correctData: jsonField,
    explanation: z.string().max(1000).optional(),
    order: z.number().int().min(0),
    itemRefType: z.enum(['VOCAB', 'KANJI', 'GRAMMAR', 'KANA']).optional(),
    itemRefKey: z.string().max(60).optional(),
  }),
  vocabulary: z.object({
    lessonId: z.string().optional(),
    term: z.string().min(1).max(60),
    reading: z.string().max(60).optional(),
    romaji: z.string().min(1).max(80),
    meaningVi: z.string().min(1).max(200),
    pos: z.string().max(40).optional(),
    exampleJa: z.string().max(200).default(''),
    exampleVi: z.string().max(200).default(''),
  }),
  grammar: z.object({
    code: z.string().min(1).max(60),
    lessonId: z.string().optional(),
    title: z.string().min(1).max(120),
    explanationVi: z.string().min(1).max(2000),
    examples: jsonField.optional(),
  }),
  kanji: z.object({
    character: z.string().min(1).max(4),
    meaningVi: z.string().min(1).max(200),
    onyomi: jsonField.optional(),
    kunyomi: jsonField.optional(),
    jlpt: z.number().int().min(5).max(1).refine((v) => v <= 5, 'JLPT 1-5').default(5),
    strokeCount: z.number().int().min(1).max(40),
    radicals: jsonField.optional(),
    examples: jsonField.optional(),
    mnemonicVi: z.string().max(500).optional(),
  }),
}

function delegate(entity: ContentEntity) {
  switch (entity) {
    case 'course': return db.course
    case 'section': return db.section
    case 'lesson': return db.lesson
    case 'node': return db.lessonNode
    case 'exercise': return db.exercise
    case 'question': return db.question
    case 'vocabulary': return db.vocabulary
    case 'grammar': return db.grammarPoint
    case 'kanji': return db.kanji
  }
}

export function validateEntity(entity: string): ContentEntity {
  if (!CONTENT_ENTITIES.includes(entity as ContentEntity)) throw badRequest('Entity không hợp lệ')
  return entity as ContentEntity
}

export async function listEntity(entity: ContentEntity, filters: Record<string, string>) {
  const prisma = delegate(entity)
  const where: any = {}
  const like = (v: string) => ({ contains: v })
  if (entity === 'lesson' && filters.courseId) where.courseId = filters.courseId
  if (entity === 'lesson' && filters.sectionId) where.sectionId = filters.sectionId
  if (entity === 'node' && filters.lessonId) where.lessonId = filters.lessonId
  if (entity === 'exercise' && filters.nodeId) where.nodeId = filters.nodeId
  if (entity === 'question' && filters.exerciseId) where.exerciseId = filters.exerciseId
  if (filters.q) {
    if (entity === 'lesson') where.title = like(filters.q)
    if (entity === 'node') where.title = like(filters.q)
    if (entity === 'vocabulary') where.OR = [{ term: like(filters.q) }, { meaningVi: like(filters.q) }]
    if (entity === 'kanji') where.OR = [{ character: like(filters.q) }, { meaningVi: like(filters.q) }]
    if (entity === 'grammar') where.OR = [{ title: like(filters.q) }, { code: like(filters.q) }]
  }
  const rows = await (prisma as any).findMany({ where, orderBy: { order: 'asc' }, take: 200 })
  return rows
}

export async function createEntity(entity: ContentEntity, data: unknown, adminId: string) {
  const parsed = createSchemas[entity].safeParse(data)
  if (!parsed.success) throw badRequest(parsed.error.issues[0]?.message ?? 'Dữ liệu không hợp lệ')
  const prisma = delegate(entity) as any
  const row = await prisma.create({ data: parsed.data })
  await audit({ adminId, action: 'CREATE', entity, entityId: row.id, after: parsed.data })
  return row
}

export async function updateEntity(entity: ContentEntity, id: string, data: unknown, adminId: string) {
  const partialSchema = (createSchemas[entity] as unknown as { partial: () => z.ZodType<Record<string, unknown>> }).partial()
  const parsed = partialSchema.safeParse(data)
  if (!parsed.success) throw badRequest(parsed.error.issues[0]?.message ?? 'Dữ liệu không hợp lệ')
  const prisma = delegate(entity) as any
  const before = await prisma.findUnique({ where: { id } })
  if (!before) throw notFound('Không tìm thấy nội dung')
  // Publish chỉ ADMIN — check ở route
  const row = await prisma.update({ where: { id }, data: parsed.data })
  await audit({ adminId, action: 'UPDATE', entity, entityId: id, before: stripLarge(before), after: parsed.data })
  if (entity === 'lesson' && parsed.data.status === 'PUBLISHED') {
    await snapshotVersion({ entityType: 'lesson', entityId: id, data: row, authorId: adminId, note: 'publish' })
  }
  return row
}

export async function deleteEntity(entity: ContentEntity, id: string, adminId: string) {
  const prisma = delegate(entity) as any
  const before = await prisma.findUnique({ where: { id } })
  if (!before) throw notFound('Không tìm thấy nội dung')
  await prisma.delete({ where: { id } })
  await audit({ adminId, action: 'DELETE', entity, entityId: id, before: stripLarge(before) })
  return { ok: true }
}

function stripLarge(row: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {}
  for (const [k, v] of Object.entries(row)) {
    if (typeof v === 'string' && v.length > 300) out[k] = v.slice(0, 300) + '…'
    else out[k] = v
  }
  return out
}
