/**
 * NihongoGo — Irodori A1 · Bài 9: てんき (Thời tiết & mùa).
 * Nội dung GỐC 100% — chỉ tham chiếu chủ đề giao tiếp sinh tồn cấp A1,
 * KHÔNG sao chép dialogue/ví dụ/bài tập từ giáo trình có bản quyền.
 * Provenance: ORIGINAL_GENERATED · MACHINE_REVIEWED (validator + audit).
 */
import type { IrodoriLesson } from './types'

export const irodori9: IrodoriLesson = {
  order: 9,
  slug: 'irodori-9',
  title: 'てんき — Thời tiết & mùa',
  titleJa: 'てんきと きせつ',
  description: 'Chuyện thời tiết là "cửa-chat" quốc dân của Nhật — học hỏi đáp, kể nắng mưa và gọi tên bốn mùa.',
  learningObjectives: [
    'Hỏi & tả thời tiết bằng てんきは どうですか',
    'Dùng tính từ あつい・さむい・すずしい・あたたかい',
    'Gọi tên 4 mùa và nói mưa/tuyết rơi',
  ],
  grammarTopics: ['てんきは どうですか', 'Tính từ thời tiết い', 'あめが ふります'],
  vocabularyTopics: ['Thời tiết', 'Bốn mùa', 'Đồ dùng theo mùa'],
  kanjiTopics: ['天', '気', '雨', '秋', '冬'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'てんき', romaji: 'tenki', meaningVi: 'thời tiết', pos: 'danh từ', exampleJa: 'きょうの てんきは いいです。', exampleVi: 'Thời tiết hôm nay đẹp.' },
    { term: 'きせつ', romaji: 'kisetsu', meaningVi: 'mùa, thời tiết mùa', pos: 'danh từ', exampleJa: 'にほんの きせつは きれいです。', exampleVi: 'Bốn mùa ở Nhật rất đẹp.' },
    { term: 'はる', romaji: 'haru', meaningVi: 'mùa xuân', pos: 'danh từ', exampleJa: 'はるに はなが さきます。', exampleVi: 'Mùa xuân hoa nở.' },
    { term: 'なつ', romaji: 'natsu', meaningVi: 'mùa hạ', pos: 'danh từ', exampleJa: 'なつは あついです。', exampleVi: 'Mùa hạ nóng.' },
    { term: 'あき', romaji: 'aki', meaningVi: 'mùa thu', pos: 'danh từ', exampleJa: 'あきは すずしいです。', exampleVi: 'Mùa thu mát mẻ.' },
    { term: 'ふゆ', romaji: 'fuyu', meaningVi: 'mùa đông', pos: 'danh từ', exampleJa: 'ふゆは さむいです。', exampleVi: 'Mùa đông lạnh.' },
    { term: 'はれ', romaji: 'hare', meaningVi: 'trời quang, nắng đẹp', pos: 'danh từ', exampleJa: 'きょうは はれです。', exampleVi: 'Hôm nay trời quang đãng.' },
    { term: 'くもり', romaji: 'kumori', meaningVi: 'trời nhiều mây', pos: 'danh từ', exampleJa: 'あしたは くもりです。', exampleVi: 'Mai trời nhiều mây.' },
    { term: 'あめ', romaji: 'ame', meaningVi: 'mưa', pos: 'danh từ', exampleJa: 'あめが ふります。', exampleVi: 'Trời mưa.' },
    { term: 'ゆき', romaji: 'yuki', meaningVi: 'tuyết', pos: 'danh từ', exampleJa: 'ゆきが ふります。', exampleVi: 'Trời tuyết rơi.' },
    { term: 'あつい', romaji: 'atsui', meaningVi: 'nóng', pos: 'tính từ い', exampleJa: 'きょうは あついです。', exampleVi: 'Hôm nay nóng.' },
    { term: 'さむい', romaji: 'samui', meaningVi: 'lạnh', pos: 'tính từ い', exampleJa: 'ふゆは さむいです。', exampleVi: 'Mùa đông lạnh.' },
    { term: 'すずしい', romaji: 'suzushii', meaningVi: 'mát mẻ', pos: 'tính từ い', exampleJa: 'あさは すずしいです。', exampleVi: 'Buổi sáng mát mẻ.' },
    { term: 'あたたかい', romaji: 'atatakai', meaningVi: 'ấm áp', pos: 'tính từ い', exampleJa: 'はるは あたたかいです。', exampleVi: 'Mùa xuân ấm áp.' },
    { term: 'かさ', romaji: 'kasa', meaningVi: 'cây dù, ô (che mưa)', pos: 'danh từ', exampleJa: 'かさを もって いきます。', exampleVi: 'Tôi mang theo dù.' },
    { term: 'どう', romaji: 'dō', meaningVi: 'thế nào, ra sao', pos: 'từ hỏi', exampleJa: 'てんきは どうですか。', exampleVi: 'Thời tiết thế nào?' },
  ],
  grammar: [
    {
      code: 'i9-tenki-dou',
      title: 'てんきは どうですか — hỏi & tả thời tiết',
      formation: '[thời gian] の てんきは + どうですか · Trả lời: [tính từ]です / はれです / くもりです',
      explanationVi:
        'どうですか nghĩa là "thế nào?" — ghép với てんき để hỏi thời tiết: きょうの てんきは どうですか (thời tiết hôm nay thế nào?). Trả lời bằng tính từ い + です (あついです・さむいです…) hoặc danh từ chỉ trạng trời (はれです・くもりです・あめです). Lưu ý cách nối: thời gian + の + てんき (きょうの てんき・にほんの てんき). Câu hỏi này cũng là mẫu xã giao cực phổ biến để bắt chuyện với hàng xóm, đồng nghiệp.',
      examples: [
        { ja: 'きょうの てんきは どうですか。', vi: 'Thời tiết hôm nay thế nào?', tokens: ['きょう', 'の', 'てんき', 'は', 'どう', 'です', 'か'] },
        { ja: 'とても あたたかいです。', vi: 'Ấm áp lắm.' },
        { ja: 'あしたの てんきは どうですか。', vi: 'Thời tiết ngày mai thế nào?' },
      ],
      drills: [
        {
          kind: 'fill', prompt: 'Điền từ còn thiếu (Thời tiết hôm nay thế nào?)',
          sentence: 'きょうの てんきは ___ですか。',
          options: ['どう', 'なに', 'どこ', 'だれ'],
          answerIndex: 0, explanationVi: 'どうですか = thế nào. なに/どこ/だれ hỏi vật/chỗ/người — không hỏi tính chất.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng: "Thời tiết hôm nay thế nào?"',
          options: ['きょうの てんきは どうですか。', 'きょうは てんきを どうですか。', 'きょうの てんきが なにですか。', 'てんきは きょう どうしますか。'],
          answerIndex: 0, explanationVi: 'Chuẩn: [thời gian]の てんきは どうですか. Các câu khác sai trợ từ (を/が) hoặc sai mẫu hỏi.',
        },
        {
          kind: 'choice', prompt: 'Người hỏi「きょうの てんきは どうですか。」 — câu trả lời phù hợp nhất là gì?',
          options: ['はい、そうです。', 'はれです。とても いいです。', 'なつです。', 'なんじですか。'],
          answerIndex: 1, explanationVi: 'Trả lời thời tiết bằng danh từ trời (はれです) hoặc tính từ + です. Ba câu còn lại không đáp nội dung câu hỏi.',
        },
        {
          kind: 'particle', prompt: 'Chọn trợ từ đúng (Thời tiết ở Nhật thế nào?)',
          sentence: 'にほん___ てんきは どうですか。',
          options: ['の', 'を', 'に', 'が'],
          answerIndex: 0, explanationVi: 'Nối danh từ đứng trước てんき bằng の: にほんの てんき (thời tiết ở Nhật).',
        },
      ],
    },
    {
      code: 'i9-i-adj-tenki',
      title: 'Tính từ い tả thời tiết — あつい・さむい・すずしい・あたたかい',
      formation: '[tính từ い] + です · Tăng giảm: とても [adj]です / ちょっと [adj]です',
      explanationVi:
        'Bộ tứ tính từ い mô tả cảm giác thời tiết: あつい (nóng), さむい (lạnh), すずしい (mát mẻ — dễ chịu, thường nói về thu và gió nhẹ), あたたかい (ấm áp — xuân và nắng hiền). Cấu trúc: [chủ thể] は + [tính từ い] + です: なつは あついです. Muốn nhấn mức: とても あついです (nóng lắm), ちょっと さむいです (hơi lạnh). Nhật có 4 mùa rõ rệt nên 4 tính từ này dùng hằng ngày — đặc biệt あつい・さむい là hai từ "sinh tồn" khi nói chuyện với người Nhật.',
      examples: [
        { ja: 'なつは あついです。', vi: 'Mùa hạ nóng.' },
        { ja: 'ふゆは とても さむいです。', vi: 'Mùa đông rất lạnh.', tokens: ['ふゆ', 'は', 'とても', 'さむい', 'です'] },
        { ja: 'あさは すずしいです。', vi: 'Buổi sáng mát mẻ.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Mùa thu Nhật Bản thường được tả là thế nào?',
          options: ['あついです', 'さむいです', 'すずしいです', 'あたたかいです'],
          answerIndex: 2, explanationVi: 'Mùa thu mát mẻ dễ chịu → すずしいです. あつい = hạ; さむい = đông giá; あたたかい = ấm (xuân).',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng: "Mùa đông rất lạnh"?',
          options: ['ふゆは とても さむいです。', 'ふゆは とても すずしいです。', 'ふゆは ちょっと あついです。', 'ふゆは あたたかいです。'],
          answerIndex: 0, explanationVi: 'Đông + rất lạnh → とても さむいです. すずしい là mát dễ chịu (thu); あつい/あたたかい ngược với mùa đông.',
        },
        {
          kind: 'fill', prompt: 'Điền từ còn thiếu (Hôm nay nóng)',
          sentence: 'きょうは ___です。',
          options: ['あつい', 'さむい', 'くもり', 'どう'],
          answerIndex: 0, explanationVi: 'あついです = nóng. さむい ngược nghĩa; くもり là danh từ (nhiều mây); どう là từ hỏi.',
        },
        {
          kind: 'choice', prompt: '「ちょっと さむいですね。」 — câu này hợp lý khi nào?',
          options: ['Vào giữa mùa hạ', 'Khi vừa mới sang thu, gió se lạnh', 'Trong nhà tắm nóng', 'Ngày nắng to đầu xuân'],
          answerIndex: 1, explanationVi: 'ちょっと さむい = hơi lạnh — hợp khi trời bắt đầu se (đầu thu). Mùa hạ hay phòng tắm nóng không dùng さむい.',
        },
        {
          kind: 'conjugate', prompt: 'Chọn cách nói đúng (Trời xuân ấm áp)',
          sentence: 'はるは ___です。',
          options: ['あたたかい', 'あたたかいな', 'あたたかく', 'あたたかいでした'],
          answerIndex: 0, explanationVi: 'Tính từ い giữ nguyên gốc trước です: あたたかいです. Không thêm な (đó là quy tắc tính từ な) hay đuổi khác.',
        },
      ],
    },
    {
      code: 'i9-ame-ga-furimasu',
      title: 'あめが ふります / ゆきが ふります — mưa & tuyết rơi',
      formation: '[あめ/ゆき] + が + ふります · Phủ định: ふりません',
      explanationVi:
        'Động từ ふります (rơi xuống) dùng riêng với あめ (mưa) và ゆき (tuyết): あめが ふります (trời mưa), ゆきが ふります (tuyết rơi). Phủ định: あめが ふりません (trời không mưa). Trợ từ là が — không dùng を dù "mưa" là danh từ. Khi nhắc đến tương lai gần: あした あめが ふります (mai trời mưa). Kết hợp bài trước: ngày mưa nhớ mang かさ (dù) — かさを もって いきます.',
      examples: [
        { ja: 'あめが ふります。', vi: 'Trời mưa.', tokens: ['あめ', 'が', 'ふります'] },
        { ja: 'ふゆに ゆきが ふります。', vi: 'Mùa đông có tuyết rơi.' },
        { ja: 'きょうは あめが ふりません。', vi: 'Hôm nay trời không mưa.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Chọn trợ từ đúng (Trời mưa)',
          sentence: 'あめ___ ふります。',
          options: ['が', 'を', 'に', 'の'],
          answerIndex: 0, explanationVi: 'あめが ふります. Tự nhiên của động từ ふります là đi với が — dùng を là lỗi phổ biến của người mới.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng: "Mai trời mưa"?',
          options: ['あした あめが ふります。', 'あした あめを ふります。', 'あした あめが ふりません。', 'あした ゆきが あめです。'],
          answerIndex: 0, explanationVi: 'あめが ふります với mốc thời gian あした đứng trước. を sai trợ từ; ふりません là phủ định; câu cuối vô nghĩa.',
        },
        {
          kind: 'fill', prompt: 'Điền từ còn thiếu (Mùa đông có tuyết rơi)',
          sentence: 'ふゆに ___が ふります。',
          options: ['ゆき', 'はれ', 'かさ', 'きせつ'],
          answerIndex: 0, explanationVi: 'Tuyết = ゆき. はれ là trời quang; かさ là cây dù; きせつ là mùa — đều không "rơi".',
        },
        {
          kind: 'choice', prompt: 'Nghe dự báo "あした あめが ふります" — bạn nên làm gì?',
          options: ['Mang theo かさ', 'Mặc áo ngắn tay', 'Đi tắm biển', 'Tắt điều hòa'],
          answerIndex: 0, explanationVi: 'Ngày mưa → mang theo dù: かさを もって いきます — phản ứng sinh tồn kinh điển.',
        },
      ],
    },
  ],
  dialogue: {
    titleVi: 'Trò chuyện đầu tuần',
    situationVi: 'Sáng thứ hai, An gặp Yamada-sensei ở thang máy trường Nhật ngữ.',
    lines: [
      { speaker: 'やまだ', text: 'おはようございます。きょうの てんきは どうですか。', vi: 'Chào buổi sáng. Thời tiết hôm nay thế nào?' },
      { speaker: 'あん', text: 'おはようございます。はれです。とても あたたかいです。', vi: 'Chào thầy. Trời quang đãng, ấm áp lắm ạ.' },
      { speaker: 'やまだ', text: 'いいですね。きのうは あめが ふりましたよ。', vi: 'Tốt nhỉ. Hôm qua trời mưa đấy.' },
      { speaker: 'あん', text: 'そうですね。だから きのうは かさを もって いきました。', vi: 'Đúng vậy. Vì thế hôm qua tôi mang theo dù.' },
      { speaker: 'やまだ', text: 'あしたの てんきは どうですか。', vi: 'Thời tiết ngày mai thế nào nhỉ?' },
      { speaker: 'あん', text: 'くもりです。すこし さむいです。', vi: 'Trời nhiều mây, hơi lạnh ạ.' },
      { speaker: 'やまだ', text: 'ふゆは とても さむいですね。ゆきも ふります。', vi: 'Mùa đông lạnh lắm nhỉ. Còn có tuyết rơi nữa.' },
      { speaker: 'あん', text: 'はい。でも わたしは ふゆが だいすきです。', vi: 'Vâng. Nhưng em rất thích mùa đông ạ.' },
    ],
    questions: [
      { questionVi: 'Hôm nay thời tiết thế nào theo lời An?', choices: ['Mưa và lạnh', 'Quang đãng, ấm áp', 'Nhiều mây', 'Tuyết rơi'], answerIndex: 1, explanationVi: 'An trả lời: はれです。とても あたたかいです — trời quang và ấm áp.' },
      { questionVi: 'Hôm qua An đã làm gì vì trời mưa?', choices: ['Nghỉ học', 'Mang theo dù', 'Mặc áo ấm', 'Ở nhà'], answerIndex: 1, explanationVi: 'だから きのうは かさを もって いきました — "vì thế hôm qua tôi mang theo dù".' },
      { questionVi: 'An nghĩ gì về mùa đông?', choices: ['Rất ghét', 'Hơi sợ', 'Rất thích', 'Chưa từng thấy'], answerIndex: 2, explanationVi: 'Câu cuối: わたしは ふゆが だいすきです — An rất thích mùa đông dù trời lạnh và có tuyết.' },
    ],
  },
  listening: [
    { scriptJa: 'きょうは はれです。', meaningVi: 'Hôm nay trời quang đãng.', choices: ['Hôm nay trời quang', 'Hôm nay mưa', 'Mai nhiều mây', 'Trời lạnh'], answerIndex: 0 },
    { scriptJa: 'あめが ふります。かさを もって いきます。', meaningVi: 'Trời mưa. Tôi mang theo dù.', choices: ['Trời nắng, tôi đi biển', 'Trời mưa, tôi mang dù', 'Trời tuyết, tôi ở nhà', 'Trời mây, tôi đi dạo'], answerIndex: 1 },
    { scriptJa: 'なつは あついです。', meaningVi: 'Mùa hạ nóng.', choices: ['Mùa hạ lạnh', 'Mùa thu mát', 'Mùa hạ nóng', 'Mùa đông lạnh'], answerIndex: 2 },
    { scriptJa: 'きょうの てんきは どうですか。', meaningVi: 'Thời tiết hôm nay thế nào?', choices: ['Hôm nay mấy giờ?', 'Thời tiết hôm nay thế nào?', 'Bạn khỏe không?', 'Ngày mai đi đâu?'], answerIndex: 1, dictation: true },
    { scriptJa: 'ふゆは とても さむいです。', meaningVi: 'Mùa đông rất lạnh.', choices: ['Mùa xuân ấm', 'Mùa đông rất lạnh', 'Mùa thu mát mẻ', 'Hơi nóng một chút'], answerIndex: 1, dictation: true },
  ],
  reading: {
    titleVi: 'にほんの きせつ — Bốn mùa Nhật Bản',
    lines: [
      { text: 'にほんには きせつが 4つ あります。', vi: 'Ở Nhật có 4 mùa.' },
      { text: 'はるは あたたかいです。はなが きれいです。', vi: 'Mùa xuân ấm áp. Hoa đẹp.' },
      { text: 'なつは とても あついです。よく あめが ふります。', vi: 'Mùa hạ rất nóng. Thường có mưa.' },
      { text: 'あきは すずしいです。そらが きれいです。', vi: 'Mùa thu mát mẻ. Bầu trời đẹp.' },
      { text: 'ふゆは さむいです。ゆきが ふります。', vi: 'Mùa đông lạnh. Có tuyết rơi.' },
      { text: 'わたしは あきが いちばん すきです。', vi: 'Tôi thích mùa thu nhất.' },
    ],
    questions: [
      { questionVi: 'Mùa nào "rất nóng và thường mưa"?', choices: ['はる', 'なつ', 'あき', 'ふゆ'], answerIndex: 1, explanationVi: 'なつは とても あついです。よく あめが ふります — mùa hạ nóng và mưa nhiều.' },
      { questionVi: 'Tuyết rơi vào mùa nào?', choices: ['Mùa xuân', 'Mùa hạ', 'Mùa thu', 'Mùa đông'], answerIndex: 3, explanationVi: 'ふゆは さむいです。ゆきが ふります — mùa đông lạnh và có tuyết.' },
      { questionVi: 'Người viết thích mùa nào nhất?', choices: ['Xuân', 'Hạ', 'Thu', 'Đông'], answerIndex: 2, explanationVi: 'Câu kết: わたしは あきが いちばん すきです — thích mùa thu nhất vì mát mẻ, trời đẹp.' },
    ],
  },
  speakSentences: [
    { ja: 'きょうの てんきは どうですか。', vi: 'Thời tiết hôm nay thế nào?' },
    { ja: 'きょうは はれです。', vi: 'Hôm nay trời quang đãng.' },
    { ja: 'あついですね。', vi: 'Nóng nhỉ.' },
    { ja: 'あめが ふります。', vi: 'Trời mưa.' },
    { ja: 'ふゆは とても さむいです。', vi: 'Mùa đông rất lạnh.' },
  ],
  translatePairs: [
    { ja: 'きょうの てんきは どうですか。', vi: 'Thời tiết hôm nay thế nào?', tokens: ['きょう', 'の', 'てんき', 'は', 'どう', 'です', 'か'], distractors: ['なつ'] },
    { ja: 'なつは あついです。', vi: 'Mùa hạ nóng.', tokens: ['なつ', 'は', 'あつい', 'です'], distractors: ['ゆき'] },
    { ja: 'あめが ふります。', vi: 'Trời mưa.', tokens: ['あめ', 'が', 'ふります'], distractors: ['かさ'] },
    { ja: 'ふゆは とても さむいです。', vi: 'Mùa đông rất lạnh.', tokens: ['ふゆ', 'は', 'とても', 'さむい', 'です'], distractors: ['はれ'] },
    { ja: 'かさを もって いきます。', vi: 'Tôi mang theo dù.', tokens: ['かさ', 'を', 'もって', 'いきます'], distractors: ['てんき'] },
  ],
  translateJaVi: [
    { ja: 'あしたは くもりです。', vi: 'Mai trời nhiều mây.', wrongVi: ['Mai trời mưa.', 'Mai trời quang đãng.', 'Hôm nay nhiều mây.'] },
    { ja: 'あきは すずしいです。', vi: 'Mùa thu mát mẻ.', wrongVi: ['Mùa thu lạnh giá.', 'Mùa thu nóng.', 'Mùa thu có tuyết.'] },
    { ja: 'ふゆに ゆきが ふります。', vi: 'Mùa đông có tuyết rơi.', wrongVi: ['Mùa đông trời mưa.', 'Mùa hạ có tuyết.', 'Tuyết rất đẹp.'] },
  ],
  wordBank: [
    { ja: 'きょうは はれです。', vi: 'Hôm nay trời quang đãng.', tokens: ['きょう', 'は', 'はれ', 'です'], distractors: ['ゆき'] },
    { ja: 'なつは とても あついです。', vi: 'Mùa hạ rất nóng.', tokens: ['なつ', 'は', 'とても', 'あつい', 'です'], distractors: ['かさ'] },
  ],
  kanji: ['天', '気', '雨', '秋', '冬'],
  writingKana: ['て', 'ん', 'き', 'は', 'れ'],
}
