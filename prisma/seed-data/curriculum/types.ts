/**
 * NihongoGo — Curriculum authoring contracts (Lesson 4–50).
 *
 * Tác giả nội dung chỉ viết data gọn theo các type dưới đây;
 * `generate.ts` sẽ deterministic-expand thành SeedLesson đầy đủ
 * (nodes, exercises, ~55–60 câu hỏi/bài) với câu trả lời luôn nhất quán
 * với dữ liệu nguồn (không thể sai lệch do sinh tự động).
 *
 * Provenance: ORIGINAL_GENERATED — chỉ tham chiếu progression cấp cao
 * của giáo trình sơ cấp phổ biến, KHÔNG sao chép dialogue/ví dụ/bài tập.
 */
import type { SeedVocabulary, SeedGrammar, SeedKanji } from '../types'

/* ---------------------------------- Vocab --------------------------------- */

export interface CurriculumVocab {
  /** Tiếng Nhật (kana, hoặc kanji+kana — nếu có kanji phải có reading) */
  term: string
  /** Cách đọc kana nếu term chứa kanji */
  reading?: string
  /** Romaji Hepburn, không dấu gạch nối */
  romaji: string
  /** Nghĩa tiếng Việt (ngắn gọn, 1 nghĩa chính) */
  meaningVi: string
  /** Từ loại: 'danh từ' | 'động từ nhóm 1/2/3' | 'tính từ い/な' | 'trợ từ' | 'phó từ' ... */
  pos: string
  /** Câu ví dụ GỐC chứa đúng term (hoặc reading) — dùng cho fill-blank */
  exampleJa: string
  exampleVi: string
}

/* --------------------------------- Grammar -------------------------------- */

export type DrillKind = 'choice' | 'particle' | 'fill' | 'error' | 'conjugate'

export interface GrammarDrill {
  kind: DrillKind
  /** Đề bài / câu hỏi tiếng Việt */
  prompt: string
  /** Câu Nhật có chỗ trống '___' (bắt buộc với kind fill/particle/conjugate) */
  sentence?: string
  /** 3–4 lựa chọn (với kind error: các dạng đã sửa) */
  options: string[]
  /** Index đáp án đúng trong options */
  answerIndex: number
  explanationVi: string
}

export interface CurriculumGrammar {
  /** Unique toàn bộ, theo mẫu `l{order}-{slug}` vd 'l4-kara-made' */
  code: string
  /** Mẫu câu, vd 'A から B まで' */
  title: string
  /** Cách ghép câu (ngắn) */
  formation?: string
  explanationVi: string
  /** 2–4 ví dụ gốc; câu nào có `tokens` sẽ được dùng cho SENTENCE_ORDER */
  examples: { ja: string; vi: string; tokens?: string[] }[]
  /** 4–6 drill tương tác — phần chất lượng cốt lõi của node ngữ pháp */
  drills: GrammarDrill[]
}

/* ------------------------- Dialogues / Listening -------------------------- */

export interface CurriculumDialogue {
  titleVi: string
  situationVi: string
  /** 6–10 lượt; speaker là tên Nhật ngắn (vd 'たなか', 'リン', 'みせのひと') */
  lines: { speaker: string; ja: string; vi: string }[]
}

export interface CurriculumListening {
  /** Câu/đoạn Nhật ngắn (1–2 câu) — TTS sẽ phát text này */
  scriptJa: string
  /** Dịch hiển thị sau khi trả lời */
  meaningVi: string
  /** 3–4 lựa chọn tiếng Việt mô tả nội dung */
  choices: string[]
  answerIndex: number
  /** true → ngoài listen_select còn sinh 1 câu DICTATION gõ lại nguyên văn */
  dictation?: boolean
}

/* --------------------------------- Reading -------------------------------- */

export interface CurriculumReading {
  titleVi: string
  /** 5–9 dòng đoạn đọc (speaker tùy chọn — nếu là hội thoại) */
  lines: { speaker?: string; text: string; vi: string }[]
  /** 3 câu hỏi comprehension */
  questions: { questionVi: string; choices: string[]; answerIndex: number; explanationVi: string }[]
}

/* ------------------------------ Speak / Translate ------------------------- */

export interface CurriculumSpeak {
  ja: string
  vi: string
}

export interface CurriculumTranslate {
  ja: string
  vi: string
  /** Thứ tự token ĐÚNG của câu Nhật (tách cả trợ từ) */
  tokens: string[]
  /** 1–2 token gây nhiễu thêm vào word bank */
  distractors?: string[]
}

/* ---------------------------------- Lesson -------------------------------- */

export interface CurriculumLesson {
  order: number
  slug: string
  title: string
  titleJa: string
  description: string
  learningObjectives: string[]
  grammarTopics: string[]
  vocabularyTopics: string[]
  kanjiTopics: string[]
  difficulty: 'BEGINNER' | 'ELEMENTARY'
  /** 16–22 mục */
  vocabulary: CurriculumVocab[]
  /** 2–3 điểm ngữ pháp */
  grammar: CurriculumGrammar[]
  /** 2 hội thoại gốc */
  dialogues: CurriculumDialogue[]
  /** 4–5 mục nghe (≥2 có dictation: true) */
  listening: CurriculumListening[]
  /** 1 đoạn đọc + 3 câu hỏi */
  reading: CurriculumReading
  /** 4 câu luyện nói */
  speakSentences: CurriculumSpeak[]
  /** 4–5 cặp dịch Việt→Nhật (word bank) */
  translatePairs: CurriculumTranslate[]
  /** Ký tự kanji của bài — PHẢI tồn tại trong kanji.ts (sau khi mở rộng) */
  kanji?: string[]
}

/* Kiểu convenience tái sử dụng khi sinh writing questions */
export type { SeedVocabulary, SeedGrammar, SeedKanji }
