/**
 * NihongoGo — Irodori A1 authoring contracts (Task 27).
 *
 * Khoá "Irodori A1 — Tiếng Nhật sinh tồn": 12 bài, nội dung GỐC 100%
 * (chỉ tham chiếu chủ đề giao tiếp sinh tồn cấp A1 — tri thức phổ quát),
 * KHÔNG sao chép dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền.
 * Tác giả viết data gọn theo các type dưới đây; `generate.ts` deterministic-
 * expand thành SeedLesson đầy đủ (~70–80 câu, 13 node, đủ 10 kỹ năng).
 *
 * Ràng buộc biên soạn (kiểm bởi sanity script trước khi seed):
 * - Vocabulary: 12–20 từ/bài; term DUY NHẤT trong toàn bộ 12 bài irodori.
 * - Grammar: 2–3 điểm/bài; code `i{order}-...` duy nhất toàn cục.
 * - exampleJa phải chứa term (hoặc reading nếu term có kanji).
 * - tokens (translatePairs/wordBank) ghép lại = ja bỏ khoảng trắng và 。、.
 * - kanji phải nằm trong danh sách 119 chữ của seed-data/kanji.ts
 *   (kanjiList = base 40 + kanji-extra1 40 + kanji-extra2 39).
 * - writingKana là ký tự kana đơn có trong seed-data/kana.ts.
 */
import type { CurriculumVocab, CurriculumGrammar, CurriculumListening, CurriculumSpeak, CurriculumTranslate } from '../curriculum/types'

/** Đoạn đọc / hội thoại có câu hỏi comprehension. */
export interface IrodoriPassage {
  titleVi: string
  /** Bối cảnh (hiển thị trong giải thích / tình huống) */
  situationVi?: string
  /** 5–9 dòng; speaker tùy chọn (hội thoại) */
  lines: { speaker?: string; text: string; vi: string }[]
  /** 3 câu hỏi comprehension */
  questions: { questionVi: string; choices: string[]; answerIndex: number; explanationVi: string }[]
}

/** Dịch Nhật → Việt (dạng chọn nghĩa đúng). */
export interface IrodoriTranslateJaVi {
  ja: string
  /** Bản dịch đúng */
  vi: string
  /** 3 bản dịch gây nhiễu (khác vi, không trùng nhau) */
  wrongVi: string[]
}

/** Ghép câu từ kho từ (word bank). */
export interface IrodoriWordBank {
  ja: string
  vi: string
  /** Thứ tự token ĐÚNG (không chứa 。) */
  tokens: string[]
  distractors?: string[]
}

export interface IrodoriLesson {
  /** 1–12 */
  order: number
  /** irodori-1 … irodori-12 */
  slug: string
  title: string
  titleJa: string
  description: string
  learningObjectives: string[]
  grammarTopics: string[]
  vocabularyTopics: string[]
  kanjiTopics: string[]
  difficulty: 'BEGINNER' | 'ELEMENTARY'
  /** 12–20 từ, term duy nhất trong toàn khóa */
  vocabulary: CurriculumVocab[]
  /** 2–3 điểm, code `i{order}-...` */
  grammar: CurriculumGrammar[]
  /** Hội thoại gốc → exercise DIALOGUE */
  dialogue: IrodoriPassage
  /** 5 mục nghe, ≥2 có dictation: true */
  listening: CurriculumListening[]
  /** Đoạn đọc gốc → exercise READING */
  reading: IrodoriPassage
  /** 5 câu luyện nói */
  speakSentences: CurriculumSpeak[]
  /** 5 cặp dịch Việt→Nhật (word bank) */
  translatePairs: CurriculumTranslate[]
  /** 3 câu dịch Nhật→Việt (chọn nghĩa) */
  translateJaVi: IrodoriTranslateJaVi[]
  /** 2 câu ghép từ kho từ */
  wordBank: IrodoriWordBank[]
  /** Kanji của bài — PHẢI có trong kanji.ts (31 chữ) */
  kanji?: string[]
  /** Kana đơn luyện viết tay — PHẢI có trong kana.ts */
  writingKana?: string[]
}
