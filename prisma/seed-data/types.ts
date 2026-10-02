/**
 * NihongoGo — Seed content contracts.
 * Các file dữ liệu trong prisma/seed-data/ phải tuân theo đúng các type này.
 * Toàn bộ nội dung là nội dung GỐC (không sao chép từ giáo trình có bản quyền).
 */

/* ============================== Exercise types ============================== */

export type ExerciseType =
  | 'MULTIPLE_CHOICE'
  | 'SELECT_MEANING'
  | 'SELECT_WORD'
  | 'FILL_BLANK'
  | 'WORD_BANK'
  | 'SENTENCE_ORDER'
  | 'MATCHING'
  | 'TRANSLATE_JA_VI'
  | 'TRANSLATE_VI_JA'
  | 'LISTEN_SELECT'
  | 'LISTEN_TYPE'
  | 'DICTATION'
  | 'SPEAK'
  | 'PRONUNCIATION'
  | 'READING'
  | 'DIALOGUE'
  | 'HIRAGANA_RECOGNITION'
  | 'KATAKANA_RECOGNITION'
  | 'KANA_WRITING'
  | 'KANJI_RECOGNITION'
  | 'KANJI_MEANING'
  | 'KANJI_READING'
  | 'KANJI_WRITING'
  | 'KANJI_STROKE_ORDER'
  | 'GRAMMAR_CHOICE'
  | 'ERROR_CORRECTION'
  | 'CONJUGATION'
  | 'PARTICLE_FILL'
  | 'MIXED_REVIEW'

/** Loại item SRS mà câu hỏi này luyện (để cập nhật spaced repetition). */
export type SrsItemType = 'VOCAB' | 'KANJI' | 'GRAMMAR' | 'KANA'

export interface SrsItemRef {
  type: SrsItemType
  /** VOCAB: term (vd 'せんせい') · KANJI/KANA: ký tự (vd '日', 'あ') · GRAMMAR: code (vd 'l1-wa-desu') */
  key: string
}

/* ============================== Question shapes ============================= */

export interface ChoiceOption {
  id: string
  /** Nội dung chính: tiếng Việt, romaji, hoặc tiếng Nhật tùy dạng bài */
  text: string
  /** Dòng phụ: reading / romaji / giải thích ngắn */
  sub?: string
  /** Text Nhật sẽ được TTS khi option là tiếng Nhật (tùy chọn) */
  audio?: string
  /** Hiển thị chữ lớn kiểu thẻ từ vựng (kana/kanji) */
  big?: boolean
}

export interface TokenDef {
  id: string
  text: string
}

/** Interaction discriminator — quyết định renderer phía client. */
export type QuestionData =
  | {
      kind: 'choice'
      /** Câu tiếng Nhật hiển thị ở đề (nếu có) */
      promptJa?: string
      /** Chú thích tiếng Việt dưới đề */
      promptSub?: string
      options: ChoiceOption[]
      /** 'grid' = ô vuông 2 cột (kana/kanji), 'list' = danh sách dọc */
      layout?: 'grid' | 'list'
    }
  | {
      kind: 'audio-choice'
      /** Câu tiếng Nhật sẽ được TTS phát (đề chỉ là âm thanh) */
      audioText: string
      /** Bản dịch hiển thị SAU khi trả lời */
      meaningVi?: string
      options: ChoiceOption[]
      layout?: 'grid' | 'list'
    }
  | {
      kind: 'fill-blank'
      /** Câu có chỗ trống, dùng '___' đánh dấu (vd 'わたし___がくせいです。') */
      sentence: string
      options: ChoiceOption[]
    }
  | {
      kind: 'token-order'
      /** Nghĩa tiếng Việt của câu cần dựng */
      promptVi: string
      /** Tokens theo thứ tự ĐÚNG (seed script sẽ shuffle khi render) */
      tokens: TokenDef[]
      /** Token gây nhiễu thêm vào word bank */
      distractors?: TokenDef[]
      /** Nếu có: phát audio câu đúng sau khi trả lời */
      audioText?: string
    }
  | {
      kind: 'text-input'
      /** Nhãn trên ô nhập */
      label?: string
      placeholder?: string
      /** Các đáp án được chấp nhận (đã normalize khoảng trắng; server sẽ normalize katakana/hiragana + punctuation) */
      accept: string[]
      /** Nếu có: đề là audio */
      audioText?: string
    }
  | {
      kind: 'matching'
      pairs: { id: string; left: { text: string; reading?: string }; right: { text: string } }[]
    }
  | {
      kind: 'speak'
      /** Câu yêu cầu đọc to */
      speakText: string
      /** Reading romaji/kana nếu chữ hiển thị là kanji */
      reading?: string
      meaningVi: string
      /** Ngưỡng similarity (0-100) để tính đúng, mặc định 70 */
      threshold?: number
    }
  | {
      kind: 'writing'
      /** Ký tự cần viết tay */
      character: string
      romaji?: string
      meaningVi?: string
      /** Số nét chuẩn để chấm heuristic */
      strokeCount: number
      /** Có hiện ký tự mờ làm hướng dẫn không (mặc định false) */
      guide?: boolean
    }
  | {
      kind: 'passage'
      title?: string
      /** Các dòng hội thoại / đoạn đọc */
      lines: { speaker?: string; text: string; reading?: string; vi: string }[]
      /** Câu hỏi comprehension (choice) bám đoạn văn */
      questions: SeedQuestion[]
    }

export type CorrectData =
  | { optionId: string }
  | { tokenOrder: string[] }
  | { answers: string[] }
  | { pairs: Record<string, string> }
  | { score: number }

export interface SeedQuestion {
  type: ExerciseType
  /** Hướng dẫn hiển thị phía trên đề (đa số type đã có hướng dẫn mặc định) */
  prompt?: string
  data: QuestionData
  correct: CorrectData
  /** Giải thích ngắn hiển thị sau khi trả lời (đúng/sai đều hiển thị) */
  explanation?: string
  /** Item SRS mà câu hỏi luyện */
  itemRef?: SrsItemRef
}

/* ============================== Exercise / Node ============================= */

export interface SeedExercise {
  type: ExerciseType
  /** Hướng dẫn riêng cho cả exercise (vd 'Nghe và chọn từ đúng') */
  instructions?: string
  questions: SeedQuestion[]
}

export type NodeType =
  | 'VOCAB'
  | 'VOCAB_PRACTICE'
  | 'GRAMMAR'
  | 'LISTENING'
  | 'READING'
  | 'SPEAKING'
  | 'WRITING'
  | 'SENTENCE'
  | 'TRANSLATION'
  | 'MIXED'
  | 'BOSS'
  | 'CHECKPOINT'
  | 'KANA'

export interface SeedNode {
  /** Unique trong lesson, vd 'l1-n1' */
  key: string
  title: string
  description?: string
  /** Thứ tự hiển thị (mặc định theo vị trí trong mảng) */
  order?: number
  /** Tên icon Lucide (chọn từ: BookOpen, BookText, Shapes, Puzzle, Headphones, Mic, PenLine, ListOrdered, Languages, Shuffle, Crown, Flag, Sparkles, Star, Ear, MessageCircle, GraduationCap, Pencil, Volume2) */
  icon: string
  nodeType: NodeType
  xpReward?: number
  /** % điểm tối thiểu để hoàn thành, mặc định 70 */
  requiredScore?: number
  difficulty?: 'EASY' | 'MEDIUM' | 'HARD'
  exercises: SeedExercise[]
}

/* ============================== Language content ============================ */

export interface SeedVocabulary {
  /** Tiếng Nhật (kana hoặc kanji+kana) */
  term: string
  /** Cách đọc (nếu term chứa kanji) */
  reading?: string
  romaji: string
  meaningVi: string
  /** Từ loại: 'danh từ', 'đại từ', 'trợ từ'... */
  pos?: string
  exampleJa: string
  exampleVi: string
}

export interface SeedGrammar {
  /** Unique, vd 'l1-a-wa-b-desu' */
  code: string
  /** Mẫu câu, vd 'A は B です' */
  title: string
  explanationVi: string
  examples: { ja: string; vi: string }[]
}

export interface SeedKanjiExample {
  word: string
  reading: string
  meaningVi: string
}

export interface SeedKanji {
  character: string
  meaningVi: string
  /** Âm On (katakana) */
  onyomi: string[]
  /** Âm Kun (hiragana) */
  kunyomi: string[]
  jlpt: 5 | 4 | 3 | 2 | 1
  strokeCount: number
  radicals: string[]
  examples: SeedKanjiExample[]
  /** Mẹo nhớ (tiếng Việt) */
  mnemonicVi?: string
}

export interface SeedKanaCharacter {
  character: string
  romaji: string
  type: 'HIRAGANA' | 'KATAKANA'
  group: 'BASIC' | 'DAKUTEN' | 'HANDAKUTEN' | 'YOUON'
  /** Hàng trong bảng gojūon (1=あ行 ... 11=わ行) */
  row: number
  strokeCount: number
  exampleWord: string
  exampleReading: string
  exampleMeaning: string
}

/* ============================== Course structure ============================ */

export interface SeedSection {
  order: number
  title: string
  titleJa: string
  description: string
}

export interface SeedLesson {
  order: number
  slug: string
  title: string
  titleJa: string
  description: string
  learningObjectives: string[]
  grammarTopics: string[]
  vocabularyTopics: string[]
  kanjiTopics: string[]
  difficulty: 'BEGINNER' | 'ELEMENTARY' | 'INTERMEDIATE' | 'ADVANCED'
  status: 'PUBLISHED' | 'DRAFT'
  nodes: SeedNode[]
  vocabulary: SeedVocabulary[]
  grammar: SeedGrammar[]
  /** Ký tự kanji xuất hiện trong lesson (phải tồn tại trong kanji.ts) */
  kanji?: string[]
}

/* ============================== Gamification ================================ */

export type AchievementMetric =
  | 'TOTAL_XP'
  | 'CURRENT_STREAK'
  | 'LONGEST_STREAK'
  | 'LESSONS_COMPLETED'
  | 'PERFECT_LESSONS'
  | 'KANA_MASTERED'
  | 'KANJI_MASTERED'
  | 'VOCAB_MASTERED'
  | 'LISTENING_NODES'
  | 'SPEAKING_NODES'
  | 'MISTAKES_RESOLVED'
  | 'QUESTS_COMPLETED'
  | 'CHALLENGE_STREAK'

export interface SeedAchievement {
  code: string
  title: string
  description: string
  /** Lucide icon name */
  icon: string
  tier: 'BRONZE' | 'SILVER' | 'GOLD' | 'DIAMOND'
  category: 'XP' | 'STREAK' | 'LESSON' | 'KANA' | 'KANJI' | 'SKILL' | 'MISC'
  metric: AchievementMetric
  threshold: number
  xpReward: number
}

export type QuestMetric =
  | 'LESSONS_COMPLETED'
  | 'XP_EARNED'
  | 'CORRECT_ANSWERS'
  | 'LISTENING_NODES'
  | 'REVIEWS_DONE'
  | 'VOCAB_REVIEWS'
  | 'PERFECT_LESSONS'

export interface SeedQuestTemplate {
  code: string
  title: string
  description: string
  /** Lucide icon name */
  icon: string
  metric: QuestMetric
  target: number
  rewardXP: number
}

export interface SeedLeague {
  key: 'SAKURA' | 'FUJI' | 'SAMURAI' | 'SHOGUN'
  name: string
  description: string
}
