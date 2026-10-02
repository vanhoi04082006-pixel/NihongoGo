/**
 * NihongoGo — Curriculum Lesson 4–50 (aggregate).
 *
 * 47 bài học nội dung GỐC (ORIGINAL_GENERATED) được biên soạn theo
 * progression chủ đề cấp cao của giáo trình sơ cấp thông dụng,
 * KHÔNG sao chép dialogue/ví dụ/bài tập có bản quyền.
 * Mỗi bài được deterministic-expand bởi buildSeedLesson thành
 * ~55–60 câu hỏi, 11–13 node, 13–16 dạng tương tác.
 * Gate chất lượng: bun scripts/content-validate.ts
 */
import { buildSeedLesson } from './generate'
import type { CurriculumLesson } from './types'
import type { SeedLesson } from '../types'
import { lesson4 } from './lesson4'
import { lesson5 } from './lesson5'
import { lesson6 } from './lesson6'
import { lesson7 } from './lesson7'
import { lesson8 } from './lesson8'
import { lesson9 } from './lesson9'
import { lesson10 } from './lesson10'
import { lesson11 } from './lesson11'
import { lesson12 } from './lesson12'
import { lesson13 } from './lesson13'
import { lesson14 } from './lesson14'
import { lesson15 } from './lesson15'
import { lesson16 } from './lesson16'
import { lesson17 } from './lesson17'
import { lesson18 } from './lesson18'
import { lesson19 } from './lesson19'
import { lesson20 } from './lesson20'
import { lesson21 } from './lesson21'
import { lesson22 } from './lesson22'
import { lesson23 } from './lesson23'
import { lesson24 } from './lesson24'
import { lesson25 } from './lesson25'
import { lesson26 } from './lesson26'
import { lesson27 } from './lesson27'
import { lesson28 } from './lesson28'
import { lesson29 } from './lesson29'
import { lesson30 } from './lesson30'
import { lesson31 } from './lesson31'
import { lesson32 } from './lesson32'
import { lesson33 } from './lesson33'
import { lesson34 } from './lesson34'
import { lesson35 } from './lesson35'
import { lesson36 } from './lesson36'
import { lesson37 } from './lesson37'
import { lesson38 } from './lesson38'
import { lesson39 } from './lesson39'
import { lesson40 } from './lesson40'
import { lesson41 } from './lesson41'
import { lesson42 } from './lesson42'
import { lesson43 } from './lesson43'
import { lesson44 } from './lesson44'
import { lesson45 } from './lesson45'
import { lesson46 } from './lesson46'
import { lesson47 } from './lesson47'
import { lesson48 } from './lesson48'
import { lesson49 } from './lesson49'
import { lesson50 } from './lesson50'

export const curriculumData: CurriculumLesson[] = [
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8,
  lesson9,
  lesson10,
  lesson11,
  lesson12,
  lesson13,
  lesson14,
  lesson15,
  lesson16,
  lesson17,
  lesson18,
  lesson19,
  lesson20,
  lesson21,
  lesson22,
  lesson23,
  lesson24,
  lesson25,
  lesson26,
  lesson27,
  lesson28,
  lesson29,
  lesson30,
  lesson31,
  lesson32,
  lesson33,
  lesson34,
  lesson35,
  lesson36,
  lesson37,
  lesson38,
  lesson39,
  lesson40,
  lesson41,
  lesson42,
  lesson43,
  lesson44,
  lesson45,
  lesson46,
  lesson47,
  lesson48,
  lesson49,
  lesson50,
]

/** SeedLesson đầy đủ, sẵn sàng cho seed.ts. */
export const curriculumLessons: SeedLesson[] = curriculumData.map(buildSeedLesson)
