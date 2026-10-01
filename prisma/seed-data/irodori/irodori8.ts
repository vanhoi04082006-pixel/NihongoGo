/**
 * NihongoGo — Irodori A1 · Bài 8: しゅみ (Sở thích & cuối tuần).
 * Nội dung GỐC 100% — chỉ tham chiếu chủ đề giao tiếp sinh tồn cấp A1,
 * KHÔNG sao chép dialogue/ví dụ/bài tập từ giáo trình có bản quyền.
 * Provenance: ORIGINAL_GENERATED · MACHINE_REVIEWED (validator + audit).
 */
import type { IrodoriLesson } from './types'

export const irodori8: IrodoriLesson = {
  order: 8,
  slug: 'irodori-8',
  title: 'しゅみ — Sở thích & cuối tuần',
  titleJa: 'しゅみ',
  description: 'Kể về sở thích, hỏi bạn bè thích gì và rủ nhau làm gì cuối tuần — chủ đề mở mọi cuộc trò chuyện.',
  learningObjectives: [
    'Nói được mình thích / không thích cái gì',
    'Hỏi sở thích bằng なにが すきですか',
    'Kể hoạt động cuối tuần với よく・あまり',
  ],
  grammarTopics: ['すきです・きらいです', 'なにが すきですか', 'しゅうまつに なにを しますか'],
  vocabularyTopics: ['Sở thích & giải trí', 'Thời gian cuối tuần', 'Tần suất よく・あまり'],
  kanjiTopics: ['週', '間'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'しゅみ', romaji: 'shumi', meaningVi: 'sở thích', pos: 'danh từ', exampleJa: 'しゅみは おんがくです。', exampleVi: 'Sở thích của tôi là âm nhạc.' },
    { term: 'すきです', romaji: 'suki desu', meaningVi: 'thích, yêu thích', pos: 'tính từ な', exampleJa: 'おんがくが すきです。', exampleVi: 'Tôi thích âm nhạc.' },
    { term: 'きらいです', romaji: 'kirai desu', meaningVi: 'ghét, không thích', pos: 'tính từ な', exampleJa: 'むしは きらいです。', exampleVi: 'Tôi sợ (không thích) côn trùng.' },
    { term: 'おんがく', romaji: 'ongaku', meaningVi: 'âm nhạc', pos: 'danh từ', exampleJa: 'まいにち おんがくを ききます。', exampleVi: 'Tôi nghe nhạc mỗi ngày.' },
    { term: 'えいが', romaji: 'eiga', meaningVi: 'phim, điện ảnh', pos: 'danh từ', exampleJa: 'えいがが だいすきです。', exampleVi: 'Tôi rất thích phim.' },
    { term: 'うた', romaji: 'uta', meaningVi: 'bài hát', pos: 'danh từ', exampleJa: 'この うたは いいですね。', exampleVi: 'Bài hát này hay nhỉ.' },
    { term: 'りょうり', romaji: 'ryōri', meaningVi: 'món ăn, việc nấu nướng', pos: 'danh từ', exampleJa: 'にほんの りょうりが すきです。', exampleVi: 'Tôi thích món Nhật.' },
    { term: 'さんぽ', romaji: 'sanpo', meaningVi: 'việc đi dạo', pos: 'danh từ', exampleJa: 'あさ さんぽを します。', exampleVi: 'Buổi sáng tôi đi dạo.' },
    { term: 'よく', romaji: 'yoku', meaningVi: 'thường xuyên, hay', pos: 'phó từ', exampleJa: 'よく えいがを みます。', exampleVi: 'Tôi hay xem phim.' },
    { term: 'あまり', romaji: 'amari', meaningVi: 'không mấy (đi cùng phủ định)', pos: 'phó từ', exampleJa: 'あまり テレビを みません。', exampleVi: 'Tôi ít xem tivi.' },
    { term: 'しゅうまつ', romaji: 'shūmatsu', meaningVi: 'cuối tuần', pos: 'danh từ', exampleJa: 'しゅうまつは ひまです。', exampleVi: 'Cuối tuần tôi rảnh.' },
    { term: 'どようび', romaji: 'doyōbi', meaningVi: 'thứ bảy', pos: 'danh từ', exampleJa: 'どようびに さんぽを します。', exampleVi: 'Thứ bảy tôi đi dạo.' },
    { term: 'にちようび', romaji: 'nichiyōbi', meaningVi: 'chủ nhật', pos: 'danh từ', exampleJa: 'にちようびは やすみます。', exampleVi: 'Chủ nhật tôi nghỉ.' },
    { term: 'ひま', romaji: 'hima', meaningVi: 'rảnh rỗi', pos: 'tính từ な', exampleJa: 'きょうは ひまです。', exampleVi: 'Hôm nay tôi rảnh.' },
    { term: 'みます', romaji: 'mimasu', meaningVi: 'xem', pos: 'động từ nhóm 2', exampleJa: 'よる テレビを みます。', exampleVi: 'Buổi tối tôi xem tivi.' },
    { term: 'ききます', romaji: 'kikimasu', meaningVi: 'nghe', pos: 'động từ nhóm 2', exampleJa: 'ラジオを ききます。', exampleVi: 'Tôi nghe radio.' },
    { term: 'うたいます', romaji: 'utaimasu', meaningVi: 'hát', pos: 'động từ nhóm 1', exampleJa: 'カラオケで うたを うたいます。', exampleVi: 'Tôi hát karaoke.' },
  ],
  grammar: [
    {
      code: 'i8-suki-kirai',
      title: 'N が すきです / きらいです — thích & không thích',
      formation: '[danh từ] + が + すきです / きらいです',
      explanationVi:
        'Để nói "thích / không thích cái gì", tiếng Nhật đặt danh từ chỉ vật rồi thêm trợ từ が: おんがくが すきです (tôi thích âm nhạc), むしが きらいです (tôi không thích côn trùng). Lưu ý すき/きらい là TÍNH TỪ な nên đứng sau が và trước です — không chia theo chủ ngữ. Muốn nhấn mạnh mức độ thêm だい (rất): だいすきです; hoặc ちょっと (hơi): ちょっと きらいです. Sai lầm kinh điển: dùng を hoặc に thay cho が (えいがを すきです ✗).',
      examples: [
        { ja: 'おんがくが すきです。', vi: 'Tôi thích âm nhạc.', tokens: ['おんがく', 'が', 'すき', 'です'] },
        { ja: 'まいさんは うたが だいすきです。', vi: 'Mai rất thích hát (bài hát).' },
        { ja: 'べんきょうは ちょっと きらいです。', vi: 'Học hành thì tôi hơi… không thích.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Chọn trợ từ đúng (Tôi thích âm nhạc)',
          sentence: 'おんがく___ すきです。',
          options: ['が', 'を', 'に', 'へ'],
          answerIndex: 0, explanationVi: 'Vật được yêu thích đứng với が: おんがくが すきです. を là trợ từ tân ngữ của động từ; に/へ chỉ đích — đều sai với すきです.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng: "Tôi thích phim"?',
          options: ['えいがを すきです。', 'えいがが すきです。', 'えいがに すきです。', 'えいがへ すきです。'],
          answerIndex: 1, explanationVi: 'Chỉ が là trợ từ chuẩn với すきです. を/に/へ không đi cùng tính từ chỉ sở thích.',
        },
        {
          kind: 'fill', prompt: 'Điền từ còn thiếu (Tôi không thích côn trùng)',
          sentence: 'むしは ___です。',
          options: ['すき', 'きらい', 'ひま', 'しゅみ'],
          answerIndex: 1, explanationVi: 'きらいです = không thích. すき ngược nghĩa; ひま (rảnh) và しゅみ (sở thích) không hợp ngữ cảnh.',
        },
        {
          kind: 'choice', prompt: '「にほんの りょうりが だいすきです。」 nói lên điều gì?',
          options: ['Rất thích món Nhật', 'Ghét món Nhật', 'Hay nấu món Nhật', 'Món Nhật hơi cay'],
          answerIndex: 0, explanationVi: 'だいすきです = rất thích (だい tăng mức độ). Người nói yêu thích món ăn Nhật.',
        },
        {
          kind: 'particle', prompt: 'Chọn trợ từ đúng (Mai rất thích hát karaoke — danh từ là うた)',
          sentence: 'まいさんは うた___ だいすきです。',
          options: ['は', 'が', 'も', 'で'],
          answerIndex: 1, explanationVi: 'うたが だいすきです. Chủ đề まいさんは… mang は, còn vật yêu thích giữ が.',
        },
      ],
    },
    {
      code: 'i8-nani-ga-suki',
      title: 'なにが すきですか — hỏi sở thích + よく・あまり',
      formation: 'なにが + すきですか · Trả lời: [N]が すきです · Tần suất: よく Vます / あまり Vません',
      explanationVi:
        'Muốn hỏi sở thích ai đó, dùng なにが すきですか (bạn thích cái gì?). Trả lời thay なに bằng danh từ cụ thể: おんがくが すきです. Khi kể về MỨC ĐỘ làm một hoạt động, dùng phó từ đứng trước động từ: よく えいがを みます (thường xem phim); あまり + PHỦ ĐỊNH: あまり みません (ít khi xem). Nhớ cặp đi cùng nhau: よく ↔ động từ khẳng định, あまり ↔ động từ phủ định ません.',
      examples: [
        { ja: 'なにが すきですか。', vi: 'Bạn thích cái gì?', tokens: ['なに', 'が', 'すき', 'です', 'か'] },
        { ja: 'よく カラオケで うたを うたいます。', vi: 'Tôi thường hát karaoke.' },
        { ja: 'あまり テレビを みません。', vi: 'Tôi ít khi xem tivi.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '「あまり テレビを みません。」 có nghĩa là gì?',
          options: ['Tôi thường xem tivi', 'Tôi ít khi xem tivi', 'Tôi ghét cái tivi', 'Tôi không có tivi'],
          answerIndex: 1, explanationVi: 'あまり luôn đi với phủ định: あまり…ません = không mấy/thường xuyên không. "Ít khi xem tivi" là nghĩa đúng.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng: "Tôi hay nghe nhạc"?',
          options: ['よく おんがくを ききます。', 'よく おんがくを ききません。', 'あまり おんがくを ききます。', 'あまり おんがくが すきです。'],
          answerIndex: 0, explanationVi: 'よく (thường xuyên) đi cùng KHẲNG ĐỊNH ききます. あまり thì phải đi phủ định ききません.',
        },
        {
          kind: 'fill', prompt: 'Điền từ còn thiếu (Bạn thích cái gì?)',
          sentence: '___が すきですか。',
          options: ['なに', 'だれ', 'どこ', 'いつ'],
          answerIndex: 0, explanationVi: 'Hỏi sở thích (vật) → なにが すきですか. だれ hỏi người, どこ hỏi chỗ, いつ hỏi thời điểm.',
        },
        {
          kind: 'choice', prompt: 'Bạn trả lời câu hỏi sở thích — câu nào tự nhiên nhất?',
          options: ['はい、すきです。', 'おんがくが すきです。', 'なにが すきですか。', 'すきです。'],
          answerIndex: 1, explanationVi: 'Trả lời sở thích nên nêu danh từ + が すきです. Câu "はい、すきです" thiếu ngữ cảnh; lặp lại câu hỏi là sai vai.',
        },
        {
          kind: 'conjugate', prompt: 'Chọn dạng đúng (Tôi ít khi xem phim — phủ định)',
          sentence: 'あまり えいがを ___。',
          options: ['みます', 'みません', 'みました', 'みましょう'],
          answerIndex: 1, explanationVi: 'あまり + ません: あまり みません = ít khi xem. Ba dạng còn lại không hợp quy tắc đi với あまり.',
        },
      ],
    },
    {
      code: 'i8-shuumatsu-nani',
      title: 'しゅうまつに なにを しますか — kế hoạch cuối tuần',
      formation: '[thời gian] に + [câu ます] · なにを しますか = làm gì?',
      explanationVi:
        'Hỏi bạn bè dự định cuối tuần: しゅうまつに なにを しますか. Thời gian cụ thể (どようび・にちようび) đứng đầu câu kèm に, sau đó là hoạt động ở thể ます. Trả lời mẫu: さんぽを します (tôi đi dạo), おんがくを ききます (tôi nghe nhạc), やすみます (tôi nghỉ ngơi). Câu なにを しますか là "công thức vạn năng" để hỏi kế hoạch — nhớ を đứng sau danh từ hoạt động.',
      examples: [
        { ja: 'しゅうまつに なにを しますか。', vi: 'Cuối tuần bạn làm gì?', tokens: ['しゅうまつ', 'に', 'なに', 'を', 'します', 'か'] },
        { ja: 'にちようびは やすみます。', vi: 'Chủ nhật tôi nghỉ.' },
        { ja: 'どようびに えいがを みます。', vi: 'Thứ bảy tôi xem phim.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Chọn trợ từ đúng (Thứ bảy tôi đi dạo)',
          sentence: 'どようび___ さんぽを します。',
          options: ['に', 'で', 'を', 'が'],
          answerIndex: 0, explanationVi: 'Ngày/thời điểm cụ thể + に: どようびに. で chỉ nơi diễn ra; を/が không dùng cho thời gian.',
        },
        {
          kind: 'fill', prompt: 'Điền từ còn thiếu (Cuối tuần bạn làm gì?)',
          sentence: 'しゅうまつに ___を しますか。',
          options: ['なに', 'だれ', 'どこ', 'いくら'],
          answerIndex: 0, explanationVi: 'なにを しますか = làm gì. だれ (ai) và どこ (đâu) không đứng trước を します trong mẫu này; いくら hỏi giá.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng: "Chủ nhật tôi nghỉ ngơi"?',
          options: ['にちようびは やすみます。', 'にちようびを やすみます。', 'にちようびに やすみました。', 'にちようびが やすみます。'],
          answerIndex: 0, explanationVi: 'Ngày có thể đứng với に hoặc は (khi nhấn chủ đề). を/が sai trợ từ; ました là quá khứ — câu gốc nói thói quen hiện tại.',
        },
        {
          kind: 'choice', prompt: '「しゅうまつは ひまです。」 có nghĩa là gì?',
          options: ['Cuối tuần tôi bận', 'Cuối tuần tôi rảnh', 'Cuối tuần tôi đi làm', 'Cuối tuần tôi học'],
          answerIndex: 1, explanationVi: 'ひまです = rảnh. Trái nghĩa với いそがしい (bận) — chưa học trong khoá này nhưng nghĩa câu là "cuối tuần rảnh".',
        },
      ],
    },
  ],
  dialogue: {
    titleVi: 'Cuối tuần này làm gì?',
    situationVi: 'Thứ sáu chiều, An ghé phòng Mai rủ nhau đi chơi cuối tuần.',
    lines: [
      { speaker: 'あん', text: 'まいさん、しゅうまつは ひまですか。', vi: 'Mai ơi, cuối tuần cậu rảnh không?' },
      { speaker: 'まい', text: 'ええ、にちようびは ひまです。', vi: 'Ừ, chủ nhật mình rảnh.' },
      { speaker: 'あん', text: 'なにが すきですか。えいがは どうですか。', vi: 'Cậu thích gì? Xem phim nhé?' },
      { speaker: 'まい', text: 'えいがが だいすきです。よく みますよ。', vi: 'Mình rất thích phim. Mình hay xem lắm.' },
      { speaker: 'あん', text: 'じゃあ、にちようびに えいがかんへ いきます。', vi: 'Vậy chủ nhật mình đi rạp phim.' },
      { speaker: 'まい', text: 'いいですね。あさ さんぽも しますか。', vi: 'Hay đấy. Buổi sáng đi dạo nữa không?' },
      { speaker: 'あん', text: 'すみません、ちょっと…。よるの ほうが いいです。', vi: 'Tiếc quá, sáng hơi bận… Tối thì hơn.' },
      { speaker: 'まい', text: 'わかりました。じゃあ、よる えいがを みます。', vi: 'Rồi nhé. Vậy tối mình xem phim.' },
    ],
    questions: [
      { questionVi: 'An hỏi Mai câu nào để mở đầu lời rủ?', choices: ['しゅうまつは ひまですか。', 'なにを しますか。', 'どこですか。', 'いくらですか。'], answerIndex: 0, explanationVi: 'An hỏi trước xem cuối tuần Mai có rảnh không: しゅうまつは ひまですか — cách mở lời tự nhiên trước khi rủ đi chơi.' },
      { questionVi: 'Mai trả lời thích gì?', choices: ['おんがく', 'えいが', 'さんぽ', 'りょうり'], answerIndex: 1, explanationVi: 'Mai nói えいがが だいすきです (rất thích phim) và bổ sung よく みます (thường xem).' },
      { questionVi: 'Vì sao An từ chối đi dạo buổi sáng?', choices: ['Vì mưa', 'Vì hơi bận', 'Vì không thích đi bộ', 'Vì ngủ dậy trễ'], answerIndex: 1, explanationVi: 'An nói すみません、ちょっと… — cách từ chối mềm, hàm ý sáng có việc hơi bất tiện, rồi đề xuất tối đi.' },
    ],
  },
  listening: [
    { scriptJa: 'おんがくが すきです。', meaningVi: 'Tôi thích âm nhạc.', choices: ['Tôi thích âm nhạc', 'Tôi ghét âm nhạc', 'Tôi hay nghe radio', 'Tôi hát karaoke'], answerIndex: 0 },
    { scriptJa: 'しゅうまつに なにを しますか。', meaningVi: 'Cuối tuần bạn làm gì?', choices: ['Hôm nay là thứ mấy?', 'Cuối tuần bạn làm gì?', 'Bạn thích cái gì?', 'Cuối tuần bạn rảnh không?'], answerIndex: 1 },
    { scriptJa: 'あまり テレビを みません。', meaningVi: 'Tôi ít khi xem tivi.', choices: ['Tôi thường xem tivi', 'Tôi không có tivi', 'Tôi ít khi xem tivi', 'Tôi ghét cái tivi'], answerIndex: 2 },
    { scriptJa: 'なにが すきですか。', meaningVi: 'Bạn thích cái gì?', choices: ['Bạn là ai?', 'Đây là cái gì?', 'Bạn đi đâu?', 'Bạn thích cái gì?'], answerIndex: 3, dictation: true },
    { scriptJa: 'にちようびは やすみます。', meaningVi: 'Chủ nhật tôi nghỉ ngơi.', choices: ['Chủ nhật tôi làm việc', 'Thứ bảy tôi học', 'Chủ nhật tôi nghỉ ngơi', 'Chủ nhật tôi xem phim'], answerIndex: 2, dictation: true },
  ],
  reading: {
    titleVi: 'しゅみの かみ — Giấy giới thiệu sở thích',
    lines: [
      { text: 'まいさんの しゅみは おんがくです。', vi: 'Sở thích của Mai là âm nhạc.' },
      { text: 'まいにち おんがくを ききます。', vi: 'Cô nghe nhạc mỗi ngày.' },
      { text: 'うたも すこし うたいます。', vi: 'Cô cũng hát một chút.' },
      { text: 'えいがも だいすきです。しゅうまつに よく みます。', vi: 'Cô cũng rất thích phim. Cuối tuần cô thường đi xem.' },
      { text: 'でも テレビは あまり みません。', vi: 'Nhưng tivi thì cô ít khi xem.' },
      { text: 'にちようびは さんぽも します。ひまですから。', vi: 'Chủ nhật cô còn đi dạo nữa. Vì ngày đó rảnh.' },
    ],
    questions: [
      { questionVi: 'Sở thích chính của Mai là gì?', choices: ['Xem tivi', 'Âm nhạc', 'Nấu ăn', 'Đi dạo'], answerIndex: 1, explanationVi: 'Câu đầu tiên khẳng định: しゅみは おんがくです — sở thích là âm nhạc.' },
      { questionVi: 'Mai làm gì mỗi ngày?', choices: ['Nghe nhạc', 'Xem phim', 'Hát karaoke', 'Đi dạo'], answerIndex: 0, explanationVi: 'まいにち おんがくを ききます = nghe nhạc mỗi ngày; xem phim chỉ là việc cuối tuần (しゅうまつに よく みます).' },
      { questionVi: 'Về tivi, Mai thế nào?', choices: ['Rất hay xem', 'Hoàn toàn không xem', 'Ít khi xem', 'Chỉ xem chủ nhật'], answerIndex: 2, explanationVi: 'テレビは あまり みません — あまり + phủ định = ít khi xem.' },
    ],
  },
  speakSentences: [
    { ja: 'おんがくが すきです。', vi: 'Tôi thích âm nhạc.' },
    { ja: 'なにが すきですか。', vi: 'Bạn thích cái gì?' },
    { ja: 'しゅうまつに なにを しますか。', vi: 'Cuối tuần bạn làm gì?' },
    { ja: 'よく えいがを みます。', vi: 'Tôi thường xem phim.' },
    { ja: 'にちようびは やすみます。', vi: 'Chủ nhật tôi nghỉ ngơi.' },
  ],
  translatePairs: [
    { ja: 'おんがくが すきです。', vi: 'Tôi thích âm nhạc.', tokens: ['おんがく', 'が', 'すき', 'です'], distractors: ['きらい'] },
    { ja: 'なにが すきですか。', vi: 'Bạn thích cái gì?', tokens: ['なに', 'が', 'すき', 'です', 'か'], distractors: ['いつ'] },
    { ja: 'しゅうまつに さんぽを します。', vi: 'Cuối tuần tôi đi dạo.', tokens: ['しゅうまつ', 'に', 'さんぽ', 'を', 'します'], distractors: ['ひま'] },
    { ja: 'あまり テレビを みません。', vi: 'Tôi ít khi xem tivi.', tokens: ['あまり', 'テレビ', 'を', 'みません'], distractors: ['よく'] },
    { ja: 'どようびに えいがを みます。', vi: 'Thứ bảy tôi xem phim.', tokens: ['どようび', 'に', 'えいが', 'を', 'みます'], distractors: ['なに'] },
  ],
  translateJaVi: [
    { ja: 'しゅうまつは ひまです。', vi: 'Cuối tuần tôi rảnh.', wrongVi: ['Cuối tuần tôi bận.', 'Cuối tuần tôi đi làm.', 'Hôm nay tôi rảnh.'] },
    { ja: 'えいがが だいすきです。', vi: 'Tôi rất thích phim.', wrongVi: ['Tôi hơi ghét phim.', 'Tôi thường xem tivi.', 'Phim rất hay.'] },
    { ja: 'よく カラオケで うたを うたいます。', vi: 'Tôi thường hát ở karaoke.', wrongVi: ['Tôi ít khi hát.', 'Tôi nghe nhạc ở nhà.', 'Karaoke hơi đắt.'] },
  ],
  wordBank: [
    { ja: 'しゅみは おんがくです。', vi: 'Sở thích của tôi là âm nhạc.', tokens: ['しゅみ', 'は', 'おんがく', 'です'], distractors: ['きらい'] },
    { ja: 'にちようびは やすみます。', vi: 'Chủ nhật tôi nghỉ ngơi.', tokens: ['にちようび', 'は', 'やすみます'], distractors: ['ひま'] },
  ],
  kanji: ['週', '間'],
  writingKana: ['す', 'き', 'ま', 'つ', 'よ'],
}
