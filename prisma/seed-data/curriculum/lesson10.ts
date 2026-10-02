/**
 * NihongoGo — Bài 10: 助数詞 (Bộ đếm つ・個・本・人).
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson10: CurriculumLesson = {
  order: 10,
  slug: 'l10-bo-dem',
  title: 'Bộ đếm — つ・個・本・人',
  titleJa: '助数詞',
  description: 'Đếm đồ vật theo đúng bộ đếm của từng loại và nói số lượng chính xác.',
  learningObjectives: [
    'Đếm đồ vật nói chung bằng つ',
    'Dùng bộ đếm 個 và 本 đúng loại vật',
    'Đếm người bằng 〜人',
  ],
  grammarTopics: ['Bộ đếm つ (đồ vật nói chung)', 'Bộ đếm 個 và 本', 'Bộ đếm người 〜人'],
  vocabularyTopics: ['Số lượng đồ vật', 'Đồ vật hình trụ (chai, bút...)', 'Cách đếm người'],
  kanjiTopics: [],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'ひとつ', romaji: 'hitotsu', meaningVi: 'một (đồ vật chung)', pos: 'bộ đếm', exampleJa: 'ケーキを ひとつ ください。', exampleVi: 'Cho tôi một cái bánh.' },
    { term: 'ふたつ', romaji: 'futatsu', meaningVi: 'hai (đồ vật chung)', pos: 'bộ đếm', exampleJa: 'この りんごを ふたつ ください。', exampleVi: 'Cho tôi hai quả táo này.' },
    { term: 'みっつ', romaji: 'mittsu', meaningVi: 'ba (đồ vật chung)', pos: 'bộ đếm', exampleJa: 'りんごを みっつ ください。', exampleVi: 'Cho tôi ba quả táo.' },
    { term: 'よっつ', romaji: 'yottsu', meaningVi: 'bốn (đồ vật chung)', pos: 'bộ đếm', exampleJa: 'ノートを よっつ ください。', exampleVi: 'Cho tôi bốn quyển vở.' },
    { term: 'いつつ', romaji: 'itsutsu', meaningVi: 'năm (đồ vật chung)', pos: 'bộ đếm', exampleJa: 'パンを いつつ ください。', exampleVi: 'Cho tôi năm cái bánh mì.' },
    { term: 'むっつ', romaji: 'muttsu', meaningVi: 'sáu (đồ vật chung)', pos: 'bộ đếm', exampleJa: 'おかしを むっつ ください。', exampleVi: 'Cho tôi sáu cái bánh kẹo.' },
    { term: 'ななつ', romaji: 'nanatsu', meaningVi: 'bảy (đồ vật chung)', pos: 'bộ đếm', exampleJa: 'パンを ななつ ください。', exampleVi: 'Cho tôi bảy cái bánh mì.' },
    { term: 'やっつ', romaji: 'yattsu', meaningVi: 'tám (đồ vật chung)', pos: 'bộ đếm', exampleJa: 'りんごを やっつ ください。', exampleVi: 'Cho tôi tám quả táo.' },
    { term: 'ここのつ', romaji: 'kokonotsu', meaningVi: 'chín (đồ vật chung)', pos: 'bộ đếm', exampleJa: 'ケーキを ここのつ ください。', exampleVi: 'Cho tôi chín cái bánh.' },
    { term: 'とお', romaji: 'tō', meaningVi: 'mười (đồ vật chung)', pos: 'bộ đếm', exampleJa: 'りんごを とお ください。', exampleVi: 'Cho tôi mười quả táo.' },
    { term: 'いくつ', romaji: 'ikutsu', meaningVi: 'bao nhiêu (số lượng)', pos: 'từ hỏi', exampleJa: 'りんごは いくつですか。', exampleVi: 'Táo thì bao nhiêu quả?' },
    { term: 'ひとり', romaji: 'hitori', meaningVi: 'một người', pos: 'bộ đếm', exampleJa: 'きょうしつに せんせいが ひとり います。', exampleVi: 'Trong lớp có một giáo viên.' },
    { term: 'ふたり', romaji: 'futari', meaningVi: 'hai người', pos: 'bộ đếm', exampleJa: 'こうえんに こどもが ふたり います。', exampleVi: 'Trong công viên có hai đứa trẻ.' },
    { term: 'さんにん', romaji: 'sannin', meaningVi: 'ba người', pos: 'bộ đếm', exampleJa: 'レストランに さんにん います。', exampleVi: 'Ở nhà hàng có ba người.' },
    { term: 'なんにん', romaji: 'nannin', meaningVi: 'bao nhiêu người', pos: 'từ hỏi', exampleJa: 'きょうしつに がくせいが なんにん いますか。', exampleVi: 'Trong lớp có bao nhiêu sinh viên?' },
    { term: 'いっぽん', romaji: 'ippon', meaningVi: 'một (đồ dài: bút, chai...)', pos: 'bộ đếm', exampleJa: 'ジュースを いっぽん ください。', exampleVi: 'Cho tôi một chai nước ép.' },
    { term: 'さんぼん', romaji: 'sanbon', meaningVi: 'ba (đồ dài: bút, chai...)', pos: 'bộ đếm', exampleJa: 'ペンを さんぼん ください。', exampleVi: 'Cho tôi ba cây bút.' },
    { term: 'なんぼん', romaji: 'nanbon', meaningVi: 'bao nhiêu (đồ dài)', pos: 'từ hỏi', exampleJa: 'ペンは なんぼん ですか。', exampleVi: 'Bút thì bao nhiêu cây?' },
    { term: 'いっこ', romaji: 'ikko', meaningVi: 'một (vật tròn nhỏ)', pos: 'bộ đếm', exampleJa: 'たまごを いっこ ください。', exampleVi: 'Cho tôi một quả trứng.' },
    { term: 'なんこ', romaji: 'nanko', meaningVi: 'bao nhiêu (vật tròn nhỏ)', pos: 'từ hỏi', exampleJa: 'たまごは なんこですか。', exampleVi: 'Trứng thì bao nhiêu quả?' },
    { term: 'りんご', romaji: 'ringo', meaningVi: 'quả táo', pos: 'danh từ', exampleJa: 'この りんごは おいしいです。', exampleVi: 'Quả táo này ngon.' },
    { term: 'たまご', romaji: 'tamago', meaningVi: 'quả trứng', pos: 'danh từ', exampleJa: 'たまごを よっこ ください。', exampleVi: 'Cho tôi bốn quả trứng.' },
  ],
  grammar: [
    {
      code: 'l10-tsu-counter',
      title: 'Bộ đếm 〜つ — đếm đồ vật nói chung',
      formation: 'Số + つ : ひとつ・ふたつ・みっつ・よっつ・いつつ・むっつ・ななつ・やっつ・ここのつ・とお',
      explanationVi:
        'つ là bộ đếm "quốc dân" cho đồ vật nói chung khi chưa có bộ đếm riêng: bánh, trái cây, hộp, món hàng... Cách đọc 1–10 là đọc chắp VÀ phải học thuộc: ひとつ, ふたつ, みっつ, よっつ, いつつ, むっつ, ななつ, やっつ, ここのつ, とお (không ghép số + つ như さんつ). Hỏi số lượng: いくつ. Mẫu mua hàng: 「N を 数 + つ ください」.',
      examples: [
        { ja: 'りんごを みっつ ください。', vi: 'Cho tôi ba quả táo.', tokens: ['りんご', 'を', 'みっつ', 'ください'] },
        { ja: 'ケーキを ひとつ ください。', vi: 'Cho tôi một cái bánh.' },
        { ja: 'りんごは いくつですか。', vi: 'Táo thì bao nhiêu quả?' },
        { ja: 'ノートを よっつ ください。', vi: 'Cho tôi bốn quyển vở.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '«Cho tôi ba quả táo.» câu nào đúng?',
          options: ['りんごを さんつ ください。', 'りんごが みっつ ください。', 'りんごを みっつ ください。', 'りんごを みつ ください。'],
          answerIndex: 2, explanationVi: '3 không đọc là さんつ mà là みっつ (đọc chắp); tân ngữ đi với を: りんごを みっつ ください.',
        },
        {
          kind: 'fill', prompt: 'Điền bộ đếm đúng: «Cho tôi bốn quyển vở.»',
          sentence: 'ノートを ___ ください。',
          options: ['よつ', 'よっつ', 'よっ', 'しつ'],
          answerIndex: 1, explanationVi: 'Bốn = よっつ (có âm nhỏ っ ở giữa), không phải よつ hay よんつ.',
        },
        {
          kind: 'choice', prompt: '「Tám cái» đọc thế nào?',
          options: ['はちつ', 'やつ', 'はっつ', 'やっつ'],
          answerIndex: 3, explanationVi: '8 = やっつ (đọc chắp, không ghép はち + つ), có âm nhỏ っ.',
        },
        {
          kind: 'fill', prompt: 'Hỏi số lượng: «Táo thì bao nhiêu quả?»',
          sentence: 'りんごは ___ですか。',
          options: ['なんにん', 'いくつ', 'なんぼん', 'なんじ'],
          answerIndex: 1, explanationVi: 'いくつ = bao nhiêu (số lượng). なんにん hỏi người, なんぼん hỏi đồ dài, なんじ hỏi giờ.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['この ケーキを につ ください。', 'この ケーキが ふたつ ください。', 'この ケーキを ふたつです ください。', 'この ケーキを ふたつ ください。'],
          answerIndex: 3, explanationVi: '2 = ふたつ; tân ngữ + を; đằng trước ください không có です.',
        },
      ],
    },
    {
      code: 'l10-nin-counter',
      title: 'Bộ đếm 〜人 (にん) — đếm người',
      formation: 'Số + にん : ひとり・ふたり・さんにん・よにん... / hỏi: 何人 (なんにん)',
      explanationVi:
        'Đếm người dùng 〜人 (にん): 3 người = さんにん, 4 người = よにん, 12 người = じゅうににん... Nhưng 1 và 2 là BẤT QUY TẮC: 1人 = ひとり, 2人 = ふたり (không nói いちにん, ににん khi đếm người). Hỏi số người: 何人 (なんにん). Kết hợp sự tồn tại: 「N に 人 が 数 + にん います」.',
      examples: [
        { ja: 'きょうしつに がくせいが じゅうににん います。', vi: 'Trong lớp có mười hai sinh viên.', tokens: ['きょうしつ', 'に', 'がくせい', 'が', 'じゅうににん', 'います'] },
        { ja: 'こうえんに こどもが ふたり います。', vi: 'Trong công viên có hai đứa trẻ.' },
        { ja: 'レストランに さんにん います。', vi: 'Ở nhà hàng có ba người.' },
        { ja: 'かぞくは よにん です。', vi: 'Gia đình tôi có bốn người.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '«Trong lớp có mười hai sinh viên.» câu nào đúng?',
          options: ['きょうしつに がくせいが じゅうに います。', 'きょうしつに がくせいを じゅうににん います。', 'きょうしつに がくせいが じゅうふたり います。', 'きょうしつに がくせいが じゅうににん います。'],
          answerIndex: 3, explanationVi: '12 người = じゅうに + にん = じゅうににん; chủ ngữ tồn tại dùng が. じゅうに thiếu にん; じゅうふたり không tồn tại.',
        },
        {
          kind: 'choice', prompt: '«Hai người» đọc thế nào?',
          options: ['ににん', 'ふたにん', 'ふたり', 'にひとり'],
          answerIndex: 2, explanationVi: '2人 = ふたり (bất quy tắc). Từ 3 người trở đi mới ghép số + にん (さんにん...).',
        },
        {
          kind: 'fill', prompt: 'Đếm người: «Trong lớp có một giáo viên.»',
          sentence: 'きょうしつに せんせいが ___ います。',
          options: ['いちにん', 'ひとつ', 'ひとり', 'いっぽん'],
          answerIndex: 2, explanationVi: '1人 = ひとり (bất quy tắc, không nói いちにん khi đếm người). ひとつ đếm đồ vật, いっぽん đếm đồ dài.',
        },
        {
          kind: 'fill', prompt: 'Hỏi số người: «Trong công viên có bao nhiêu đứa trẻ?»',
          sentence: 'こうえんに こどもが ___ いますか。',
          options: ['なんつ', 'いくら', 'なんにん', 'なんじ'],
          answerIndex: 2, explanationVi: 'Hỏi số người dùng なんにん. いくら hỏi giá, なんじ hỏi giờ, なんつ không tồn tại.',
        },
      ],
    },
    {
      code: 'l10-hon-ko-counter',
      title: 'Bộ đếm 本・個 — đồ dài & vật tròn nhỏ',
      formation: '本 : いっぽん・にほん・さんぼん... / 個 : いっこ・にこ・さんこ・よっこ...',
      explanationVi:
        '本 (ほん) đếm đồ DÀI/hình trụ: bút, chai nước, ô, cây... 個 (こ) đếm vật TRÒN NHỎ: trứng, quả cam, bánh... Chú ý âm thay đổi: 1本 = いっぽん, 3本 = さんぼん (không phải さんほん); 1個 = いっこ; 4個 = よっこ. Hỏi: 何本 (なんぼん) / 何個 (なんこ). Chọn bộ đếm theo hình dáng đồ vật.',
      examples: [
        { ja: 'ペンを さんぼん ください。', vi: 'Cho tôi ba cây bút.', tokens: ['ペン', 'を', 'さんぼん', 'ください'] },
        { ja: 'ジュースを いっぽん ください。', vi: 'Cho tôi một chai nước ép.' },
        { ja: 'たまごを よっこ ください。', vi: 'Cho tôi bốn quả trứng.' },
        { ja: 'たまごは なんこですか。', vi: 'Trứng thì bao nhiêu quả?' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '«Cho tôi ba cây bút.» câu nào đúng?',
          options: ['ペンを さんほん ください。', 'ペンを みっつ ください。', 'ペンを さんぼん ください。', 'ペンを さんこ ください。'],
          answerIndex: 2, explanationVi: 'Bút là đồ dài → bộ đếm 本; 3本 = さんぼん (âm thay đổi ほん → ぼん), không phải さんほん.',
        },
        {
          kind: 'choice', prompt: 'Đếm chai nước (đồ dài) dùng bộ đếm nào?',
          options: ['個 (こ)', '本 (ほん)', '人 (にん)', 'なんぼん'],
          answerIndex: 1, explanationVi: 'Chai nước là đồ dài hình trụ → 本: いっぽん, にほん, さんぼん. 個 dành cho vật tròn nhỏ; 人 đếm người; なんぼん là từ hỏi.',
        },
        {
          kind: 'fill', prompt: '«Một chai» đọc thế nào?',
          sentence: 'ジュースを ___ ください。',
          options: ['いちほん', 'ひとほん', 'いっぽ', 'いっぽん'],
          answerIndex: 3, explanationVi: '1本 = いっぽん (P âm thành っ + pp), không đọc いちほん hay ひとほん.',
        },
        {
          kind: 'fill', prompt: 'Hỏi số lượng trứng: «Trứng thì bao nhiêu quả?»',
          sentence: 'たまごは ___ですか。',
          options: ['なんぼん', 'なんじ', 'なんにん', 'なんこ'],
          answerIndex: 3, explanationVi: 'Trứng là vật tròn nhỏ → 何個 (なんこ). なんぼん cho đồ dài, なんにん cho người, なんじ hỏi giờ.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Mua ở cửa hàng tiện lợi',
      situationVi: 'Linh mua hoa quả, nước ép ở cửa hàng tiện lợi.',
      lines: [
        { speaker: 'リン', ja: 'すみません、りんごを ください。', vi: 'Xin lỗi, cho tôi táo.' },
        { speaker: 'みせのひと', ja: 'はい、いくつですか。', vi: 'Vâng, bao nhiêu quả ạ?' },
        { speaker: 'リン', ja: 'みっつ ください。', vi: 'Cho tôi ba quả.' },
        { speaker: 'みせのひと', ja: 'たまごは どうですか。', vi: 'Trứng thì sao ạ?' },
        { speaker: 'リン', ja: 'じゃ、たまごを よっこ ください。ジュースも ください。', vi: 'Vậy cho tôi bốn quả trứng. Cho tôi thêm nước ép nữa.' },
        { speaker: 'みせのひと', ja: 'ジュースは なんぼん ですか。', vi: 'Nước ép thì mấy chai ạ?' },
        { speaker: 'リン', ja: 'いっぽん ください。', vi: 'Cho tôi một chai.' },
        { speaker: 'みせのひと', ja: 'はい、ありがとう ございます。', vi: 'Vâng, cảm ơn chị.' },
      ],
    },
    {
      titleVi: 'Lớp tiếng Nhật của Linh',
      situationVi: 'Tanaka hỏi về lớp tiếng Nhật của Linh.',
      lines: [
        { speaker: 'たなか', ja: 'リンさんの きょうしつに がくせいが なんにん いますか。', vi: 'Lớp của Linh có bao nhiêu sinh viên?' },
        { speaker: 'リン', ja: 'じゅうににん います。', vi: 'Có mười hai người.' },
        { speaker: 'たなか', ja: 'せんせいは ひとり ですか。', vi: 'Giáo viên thì một người à?' },
        { speaker: 'リン', ja: 'はい、せんせいが ひとり います。', vi: 'Vâng, có một giáo viên.' },
        { speaker: 'たなか', ja: 'きょうしつに パソコンも ありますか。', vi: 'Trong lớp cũng có máy tính à?' },
        { speaker: 'リン', ja: 'はい、パソコンが よっつ あります。', vi: 'Vâng, có bốn cái máy tính.' },
        { speaker: 'たなか', ja: 'リンさんの かばんには ペンが なんぼん ありますか。', vi: 'Trong cặp của Linh có bao nhiêu cây bút?' },
        { speaker: 'リン', ja: 'ペンが さんぼん あります。', vi: 'Có ba cây bút.' },
        { speaker: 'たなか', ja: 'いいですね。じゃ、あした あいましょう。', vi: 'Tốt đấy. Vậy mai gặp nhau nhé.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'りんごを みっつ ください。', meaningVi: 'Cho tôi ba quả táo.', choices: ['Hai quả táo', 'Ba quả táo', 'Ba quả trứng', 'Sáu quả táo'], answerIndex: 1 },
    { scriptJa: 'きょうしつに がくせいが じゅうににん います。', meaningVi: 'Trong lớp có mười hai sinh viên.', choices: ['12 sinh viên', '2 sinh viên', '10 sinh viên', '20 sinh viên'], answerIndex: 0 },
    { scriptJa: 'ペンを さんぼん ください。', meaningVi: 'Cho tôi ba cây bút.', choices: ['Ba cái ô', 'Ba cây bút', 'Ba chai nước', 'Ba người'], answerIndex: 1 },
    { scriptJa: 'たまごを よっこ ください。', meaningVi: 'Cho tôi bốn quả trứng.', choices: ['Bốn quả trứng', 'Bốn quả táo', 'Bốn cây bút', 'Bốn cái bánh'], answerIndex: 0, dictation: true },
    { scriptJa: 'こうえんに こどもが ふたり います。', meaningVi: 'Trong công viên có hai đứa trẻ.', choices: ['Ba đứa trẻ', 'Hai con mèo', 'Hai đứa trẻ', 'Mười hai đứa trẻ'], answerIndex: 2, dictation: true },
  ],
  reading: {
    titleVi: 'Đi mua sắm của Linh',
    lines: [
      { text: 'きょう、リンさんは コンビニへ いきます。', vi: 'Hôm nay Linh đến cửa hàng tiện lợi.' },
      { text: 'コンビニで りんごを みっつ かいます。', vi: 'Ở cửa hàng, Linh mua ba quả táo.' },
      { text: 'たまごも よっこ かいます。', vi: 'Cô cũng mua bốn quả trứng.' },
      { text: 'ジュースを いっぽん かいます。', vi: 'Mua một chai nước ép.' },
      { text: 'それから、こうえんへ いきます。', vi: 'Sau đó cô đến công viên.' },
      { text: 'こうえんに こどもが ふたり います。', vi: 'Trong công viên có hai đứa trẻ.' },
      { text: 'こうえんは とても にぎやかです。', vi: 'Công viên rất nhộn nhịp.' },
      { text: 'リンさんは うちへ かえります。', vi: 'Linh về nhà.' },
    ],
    questions: [
      { questionVi: 'Linh mua bao nhiêu quả táo?', choices: ['Hai quả', 'Ba quả', 'Bốn quả', 'Một quả'], answerIndex: 1, explanationVi: 'りんごを みっつ かいます — mua ba quả táo (みっつ = 3).' },
      { questionVi: 'Linh mua bao nhiêu chai nước ép?', choices: ['Một chai', 'Hai chai', 'Ba chai', 'Bốn chai'], answerIndex: 0, explanationVi: 'ジュースを いっぽん かいます — mua một chai (いっぽん = 1本).' },
      { questionVi: 'Trong công viên có bao nhiêu đứa trẻ?', choices: ['Mười hai đứa', 'Bốn đứa', 'Một đứa', 'Hai đứa'], answerIndex: 3, explanationVi: 'こどもが ふたり います — có hai đứa trẻ (ふたり = 2人).' },
    ],
  },
  speakSentences: [
    { ja: 'りんごを みっつ ください。', vi: 'Cho tôi ba quả táo.' },
    { ja: 'きょうしつに がくせいが じゅうににん います。', vi: 'Trong lớp có mười hai sinh viên.' },
    { ja: 'ペンを さんぼん ください。', vi: 'Cho tôi ba cây bút.' },
    { ja: 'たまごは なんこですか。', vi: 'Trứng thì bao nhiêu quả?' },
  ],
  translatePairs: [
    { ja: 'りんごを みっつ ください。', vi: 'Cho tôi ba quả táo.', tokens: ['りんご', 'を', 'みっつ', 'ください'], distractors: ['ふたつ'] },
    { ja: 'こうえんに こどもが ふたり います。', vi: 'Trong công viên có hai đứa trẻ.', tokens: ['こうえん', 'に', 'こども', 'が', 'ふたり', 'います'], distractors: ['さんにん'] },
    { ja: 'ペンを さんぼん ください。', vi: 'Cho tôi ba cây bút.', tokens: ['ペン', 'を', 'さんぼん', 'ください'], distractors: ['いっぽん'] },
    { ja: 'たまごを よっこ ください。', vi: 'Cho tôi bốn quả trứng.', tokens: ['たまご', 'を', 'よっこ', 'ください'], distractors: ['みっつ'] },
    { ja: 'かぞくは よにん です。', vi: 'Gia đình tôi có bốn người.', tokens: ['かぞく', 'は', 'よにん', 'です'], distractors: ['なんにん'] },
  ],
  kanji: [],
}
