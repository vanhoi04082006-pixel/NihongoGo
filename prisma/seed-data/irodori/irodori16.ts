/**
 * NihongoGo — Irodori A1 · Bài 16: よてい (Kế hoạch & mong muốn).
 * Nói muốn làm gì (〜たいです), đề nghị giúp mình (〜ましょうか), thời gian
 * sắp tới. Nội dung GỐC — không sao chép dialogue/ví dụ/bài tập từ bất kỳ
 * giáo trình có bản quyền nào.
 * Provenance: ORIGINAL_GENERATED · MACHINE_REVIEWED (validator + audit).
 */
import type { IrodoriLesson } from './types'

export const irodori16: IrodoriLesson = {
  order: 16,
  slug: 'irodori-16',
  title: 'よてい — Kế hoạch & mong muốn',
  titleJa: 'いろどり A1 よてい',
  description: 'Kể tuần này làm gì, nói muốn đi đâu, rủ nhau lên kế hoạch — bước đầu tiên để biến tiếng Nhật thành kế hoạch thật.',
  learningObjectives: [
    'Nói điều muốn làm bằng 〜たいです',
    'Đề nghị làm giúp / cùng làm bằng 〜ましょうか',
    'Nói thời điểm sắp tới với きょう・あした・あさって・こんしゅう・らいしゅう',
  ],
  grammarTopics: ['〜たいです — muốn làm', '〜ましょうか — đề nghị', 'Thời gian sắp tới'],
  vocabularyTopics: ['Ngày & tuần', 'Hoạt động giải trí', 'Kế hoạch cá nhân'],
  kanjiTopics: ['予', '時'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'よてい', romaji: 'yotei', meaningVi: 'kế hoạch, lịch', pos: 'danh từ', exampleJa: 'しゅうまつの よていは ありますか。', exampleVi: 'Bạn có kế hoạch cuối tuần không?' },
    { term: 'きょう', romaji: 'kyō', meaningVi: 'hôm nay', pos: 'danh từ', exampleJa: 'きょうは ひまです。', exampleVi: 'Hôm nay tôi rảnh.' },
    { term: 'あした', romaji: 'ashita', meaningVi: 'ngày mai', pos: 'danh từ', exampleJa: 'あした、とうきょうへ いきます。', exampleVi: 'Ngày mai tôi đi Tokyo.' },
    { term: 'あさって', romaji: 'asatte', meaningVi: 'ngày mốt', pos: 'danh từ', exampleJa: 'あさっては じゅぎょうが あります。', exampleVi: 'Ngày mốt có giờ học.' },
    { term: 'こんしゅう', romaji: 'konshū', meaningVi: 'tuần này', pos: 'danh từ', exampleJa: 'こんしゅうは とても いそがしいです。', exampleVi: 'Tuần này tôi rất bận.' },
    { term: 'らいしゅう', romaji: 'raishū', meaningVi: 'tuần sau', pos: 'danh từ', exampleJa: 'らいしゅう、りょこうします。', exampleVi: 'Tuần sau tôi đi du lịch.' },
    { term: 'りょこう', romaji: 'ryokō', meaningVi: 'chuyến du lịch', pos: 'danh từ', exampleJa: 'りょこうが だいすきです。', exampleVi: 'Tôi rất thích du lịch.' },
    { term: 'うみ', romaji: 'umi', meaningVi: 'biển, bãi biển', pos: 'danh từ', exampleJa: 'なつは うみへ いきます。', exampleVi: 'Mùa hè tôi đi biển.' },
    { term: 'やま', romaji: 'yama', meaningVi: 'núi', pos: 'danh từ', exampleJa: 'やまに のぼります。', exampleVi: 'Tôi leo núi.' },
    { term: 'ドライブ', romaji: 'doraibu', meaningVi: 'đi xe dạo', pos: 'danh từ', exampleJa: 'にちようびに ドライブします。', exampleVi: 'Chủ nhật tôi đi xe dạo.' },
    { term: 'カメラ', romaji: 'kamera', meaningVi: 'máy ảnh', pos: 'danh từ', exampleJa: 'カメラを もって いきます。', exampleVi: 'Tôi mang theo máy ảnh.' },
    { term: 'はな', romaji: 'hana', meaningVi: 'hoa', pos: 'danh từ', exampleJa: 'はなを みます。', exampleVi: 'Tôi ngắm hoa.' },
    { term: 'たのしみ', romaji: 'tanoshimi', meaningVi: 'niềm vui, mong chờ', pos: 'danh từ', exampleJa: 'らいしゅうが たのしみです。', exampleVi: 'Tôi mong chờ tuần sau.' },
    { term: 'さそいます', romaji: 'sasoimasu', meaningVi: 'rủ, mời', pos: 'động từ nhóm 1', exampleJa: 'ともだちを さそいます。', exampleVi: 'Tôi rủ bạn của tôi.' },
  ],
  grammar: [
    {
      code: 'i16-tai-desu',
      title: '〜たいです — muốn làm gì',
      formation: 'động từ (bỏ ます) + たいです',
      explanationVi:
        'Cắt đuôi ます của động từ rồi thêm たいです để nói MONG MUỐN của chính mình: たべます → すしが たべたいです (tôi muốn ăn sushi), いきます → うみへ いきたいです (tôi muốn đi biển). Phủ định: いきたくないです (không muốn đi). Hỏi người khác: なにを したいですか (bạn muốn làm gì?). Đối tượng thường đi với が (すしが たべたい) — nghe tự nhiên hơn を trong khẩu ngữ. Khi kể kế hoạch có sẵn thì dùng よてい: あした、とうきょうへ いく よていです.',
      examples: [
        { ja: 'うみへ いきたいです。', vi: 'Tôi muốn đi biển.', tokens: ['うみ', 'へ', 'いきたい', 'です'] },
        { ja: 'すしが たべたいです。', vi: 'Tôi muốn ăn sushi.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'Đổi thành dạng "muốn" (たべます → muốn ăn)',
          sentence: 'すしを たべ___です。',
          options: ['たい', 'ます', 'ました', 'たく'],
          answerIndex: 0, explanationVi: 'Bỏ ます của たべます → thêm たい: たべたいです = muốn ăn.',
        },
        {
          kind: 'choice', prompt: '「Tôi muốn đi Kyoto」 — câu nào đúng?',
          options: ['きょうとへ いきたいです。', 'きょうとへ いきます たいです。', 'きょうとへ いった です。', 'きょうとへ いたい いきます。'],
          answerIndex: 0, explanationVi: 'いきます → bỏ ます + たいです → いきたいです. Trước điểm đến vẫn giữ へ.',
        },
        {
          kind: 'fill', prompt: 'Điền trợ tự nhiên nhất (Tôi muốn ăn sushi)',
          sentence: 'すし___ たべたいです。',
          options: ['が', 'を', 'へ', 'に'],
          answerIndex: 0, explanationVi: 'Với たいです, đối tượng mong muốn thường đi với が (khẩu ngữ) — すしが たべたいです.',
        },
        {
          kind: 'choice', prompt: 'Hỏi người khác「bạn muốn làm gì?」— câu nào?',
          options: ['なにを したいですか。', 'なにを しますか。', 'なにが すきですか。', 'なにを もいますか。'],
          answerIndex: 0, explanationVi: 'Muốn làm gì = なにを したいですか. しますか hỏi việc sắp làm (kế hoạch).',
        },
        {
          kind: 'error', prompt: 'Câu nào SAI cấu trúc たい?',
          options: ['いきたいです。', 'みたいです。', 'のみたいです。', 'いきたい ます。'],
          answerIndex: 3, explanationVi: 'たい đã mang nghĩa lịch sự qua です — いきたい ます là trộn sai. Đúng: いきたいです.',
        },
      ],
    },
    {
      code: 'i16-mashouka',
      title: '〜ましょうか — tôi làm giúp nhé / cùng làm chứ?',
      formation: 'động từ ます-form + ましょうか',
      explanationVi:
        'ます + ましょうか là đề nghị NHẸ NHÀNG hai chiều: (1) tự nguyện giúp: にもつを もちましょうか (tôi xách giúp nhé?); (2) rủ cùng làm: ひるごはんを たべましょうか (ăn trưa không?). Đáp đồng ý: はい、おねがいします (vâng, phiền bạn) hoặc いいですね！. Từ chối: すみません、ちょっと… Mẫu 〜ませんか (bài 10) là RỦ chính thức; ましょうか thiên về "tôi chủ động giúp / tôi đề nghị".',
      examples: [
        { ja: 'にもつを もちましょうか。', vi: 'Tôi xách hành lý giúp nhé?', tokens: ['にもつ', 'を', 'もちましょう', 'か'] },
        { ja: 'いっしょに かいものしましょうか。', vi: 'Mình cùng đi mua sắm nhé?' },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Người kia bưng bị nhiều thứ — bạn muốn giúp xách, nói gì?',
          options: ['もちましょうか。', 'もって も いいですか。', 'もちます。', 'もって ください。'],
          answerIndex: 0, explanationVi: 'Tự nguyện giúp → ましょうか. もって も いいですか là XIN PHÉP của MÌNH, không phải đề nghị giúp.',
        },
        {
          kind: 'conjugate', prompt: 'Đổi てつだいます → dạng đề nghị giúp',
          sentence: 'しゅくだいを てつだい___か。',
          options: ['ましょう', 'ます', 'たい', 'ません'],
          answerIndex: 0, explanationVi: 'ます → ましょうか: てつだいましょうか — tôi giúp nhé?',
        },
        {
          kind: 'choice', prompt: 'Đáp ĐỒNG Ý lời rủ ăn trưa — câu nào tự nhiên?',
          options: ['いいですね！', 'だめです。', 'わかりません。', 'たべます。'],
          answerIndex: 0, explanationVi: 'Đồng ý lời rủ: いいですね！ (hay đó!). たべます chỉ là khẳng định, không phải phản hồi rủ rê.',
        },
        {
          kind: 'fill', prompt: 'Điền từ còn thiếu (Mình cùng đi xe dạo nhé?)',
          sentence: 'いっしょに ドライブ___か。',
          options: ['しましょう', 'します', 'したい', 'しません'],
          answerIndex: 0, explanationVi: 'します → しましょうか: rủ cùng làm. ドライブしましょうか = đi xe dạo nhé?',
        },
      ],
    },
    {
      code: 'i16-jikan-tomodachi',
      title: 'Thời gian sắp tới — きょう・あした・あさって…',
      formation: '[thời gian] + は / に + câu',
      explanationVi:
        'Bộ thời gian nói về kế hoạch: きょう (hôm nay) → あした (mai) → あさって (mốt); こんしゅう (tuần này) → らいしゅう (tuần sau). Kể kế hoạch: あしたは ひまです (mai rảnh), らいしゅう がっこうが ありません (tuần sau không có lớp). Kèm giờ: あしたの ごぜんさんじに (9 giờ sáng mai — に từ bài 6). Mẹo hỏi lại khi chưa rõ: あさってって なんようびですか (ngày mốt là thứ mấy nhỉ?). Không dùng に cho きょう/あした/こんしゅう — chúng tự đứng đầu câu là đủ.',
      examples: [
        { ja: 'らいしゅう がっこうが ありません。', vi: 'Tuần sau không có lớp học.', tokens: ['らいしゅう', 'がっこう', 'が', 'ありません'] },
        { ja: 'あしたの よる、えいがを みます。', vi: 'Tối mai tôi xem phim.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '「ngày mốt」 là từ nào?',
          options: ['あさって', 'あした', 'きのう', 'こんしゅう'],
          answerIndex: 0, explanationVi: 'あさって = ngày mốt. あした = mai; きのう = hôm qua; こんしゅう = tuần này.',
        },
        {
          kind: 'particle', prompt: 'Chỗ trống nào KHÔNG cần trợ từ?',
          sentence: '___ とうきょうへ いきます。',
          options: ['あした (không trợ từ)', 'あしたに', 'あしたで', 'あしたを'],
          answerIndex: 0, explanationVi: 'あした/きょう/らいしゅう là từ thời gian tuyệt đối — đứng đầu câu KHÔNG cần に. に chỉ dùng với giờ (3じに).',
        },
        {
          kind: 'fill', prompt: 'Điền từ còn thiếu (Tuần sau tôi đi du lịch)',
          sentence: '___、りょこうします。',
          options: ['らいしゅう', 'こんしゅう', 'あさって', 'きのう'],
          answerIndex: 0, explanationVi: 'Tuần sau = らいしゅう. こんしゅう là tuần này; きのう là hôm qua (quá khứ).',
        },
        {
          kind: 'choice', prompt: '「Tối mai tôi xem phim」 — câu nào đúng?',
          options: ['あしたの よる、えいがを みます。', 'あした よるに えいがを みます。', 'あしたの よるに えいがを みます。', 'よるの あした、えいがを みます。'],
          answerIndex: 0, explanationVi: 'Cấu trúc sở hữu: あしたの よる (tối CỦA ngày mai) — không thêm に cho よる kiểu này.',
        },
      ],
    },
  ],
  dialogue: {
    titleVi: 'Lên kế hoạch cuối tuần',
    situationVi: 'An và Yamada hẹn nhau cuối tuần đi ngắm hoa ở công viên.',
    lines: [
      { speaker: 'やまだ', text: 'あんさん、こんしゅうの よていは ありますか。', vi: 'An ơi, tuần này bạn có kế hoạch gì không?' },
      { speaker: 'あん', text: 'こんしゅうと らいしゅうは ひまです。', vi: 'Tuần này và tuần sau tôi rảnh ạ.' },
      { speaker: 'やまだ', text: 'じゃあ、こうえんへ はなを みに いきませんか。', vi: 'Vậy thì đi công viên ngắm hoa không?' },
      { speaker: 'あん', text: 'いいですね！うみも みたいです。', vi: 'Hay đó! Em cũng muốn ngắm biển nữa.' },
      { speaker: 'やまだ', text: 'うみは ちょっと とおいです。やまは どうですか。', vi: 'Biển hơi xa. Còn núi thì sao?' },
      { speaker: 'あん', text: 'やまも いいですね。カメラを もって いきます。', vi: 'Núi cũng hay ạ. Em mang theo máy ảnh.' },
      { speaker: 'やまだ', text: 'ドライブしましょうか。レンタカーで いきましょう。', vi: 'Đi xe dạo nhé. Đi bằng xe thuê luôn.' },
      { speaker: 'あん', text: 'たのしみです！よろしく おねがいします。', vi: 'Em mong chờ lắm! Rất mong được nhờ anh.' },
    ],
    questions: [
      { questionVi: 'Hai người định đi ngắm gì?', choices: ['Biển', 'Hoa', 'Núi', 'Phố cổ'], answerIndex: 1, explanationVi: 'こうえんへ はなを みに いきませんか — đi công viên ngắm hoa.' },
      { questionVi: 'Yamada đề nghị đi lại bằng gì?', choices: ['Tàu điện', 'Xe đạp', 'Xe dạo (thuê xe)', 'Xe buýt'], answerIndex: 2, explanationVi: 'ドライブしましょうか — anh ấy đề nghị đi xe dạo.' },
      { questionVi: 'An mang theo gì?', choices: ['Máy ảnh', 'Hành lý', 'Điện thoại', 'Bản đồ'], answerIndex: 0, explanationVi: 'カメラを もって いきます — em mang máy ảnh.' },
    ],
  },
  listening: [
    { scriptJa: 'らいしゅう うみへ いきたいです。', meaningVi: 'Tuần sau tôi muốn đi biển.', choices: ['Tuần này tôi đi biển', 'Tuần sau tôi muốn đi biển', 'Tôi đã đi biển rồi', 'Tôi không thích biển'], answerIndex: 1 },
    { scriptJa: 'にもつを もちましょうか。', meaningVi: 'Tôi xách hành lý giúp nhé?', choices: ['Bạn xách hành lý nhé?', 'Tôi xách giúp nhé?', 'Hành lý nặng quá', 'Để hành lý đây đi'], answerIndex: 1 },
    { scriptJa: 'あさっては ひまです。', meaningVi: 'Ngày mốt tôi rảnh.', choices: ['Hôm nay rảnh', 'Ngày mai rảnh', 'Ngày mốt rảnh', 'Tuần sau rảnh'], answerIndex: 2 },
    { scriptJa: 'きょうは ひまですか。', meaningVi: 'Hôm nay bạn rảnh không?', choices: ['Hôm nay bạn rảnh không?', 'Ngày mai bạn rảnh không?', 'Bạn có kế hoạch không?', 'Bạn bận không?'], answerIndex: 0, dictation: true },
    { scriptJa: 'すしが たべたいです。', meaningVi: 'Tôi muốn ăn sushi.', choices: ['Tôi muốn ăn sushi', 'Tôi đã ăn sushi', 'Sushi ngon lắm', 'Sushi đắt lắm'], answerIndex: 0, dictation: true },
  ],
  reading: {
    titleVi: 'Kế hoạch tuần sau của An',
    lines: [
      { text: 'らいしゅうの きんようびは ひまです。', vi: 'Thứ sáu tuần sau tôi rảnh.' },
      { text: 'ともだちを さそって、うみへ いきたいです。', vi: 'Tôi muốn rủ bạn đi biển.' },
      { text: 'あさ おきて、でんしゃで いきます。', vi: 'Sáng dậy rồi đi bằng tàu điện.' },
      { text: 'うみで しゃしんを たくさん とります。', vi: 'Ở biển tôi chụp rất nhiều ảnh.' },
      { text: 'ひるは おべんとうを たべます。', vi: 'Buổi trưa ăn hộp cơm tự mang.' },
      { text: 'らいしゅうが とても たのしみです。', vi: 'Tôi mong chờ tuần sau lắm.' },
    ],
    questions: [
      { questionVi: 'Người viết rảnh lúc nào?', choices: ['Thứ sáu tuần sau', 'Hôm nay', 'Ngày mốt', 'Cuối tuần này'], answerIndex: 0, explanationVi: 'らいしゅうの きんようびは ひまです — thứ sáu tuần sau rảnh.' },
      { questionVi: 'Người viết muốn làm gì ở biển?', choices: ['Bơi', 'Chụp ảnh', 'Nấu ăn', 'Ngủ'], answerIndex: 1, explanationVi: 'うみで しゃしんを たくさん とります — chụp rất nhiều ảnh.' },
      { questionVi: 'Buổi trưa ăn gì?', choices: ['Sushi', 'Hộp cơm tự mang', 'Mì ramen', 'Cơm trưa quán'], answerIndex: 1, explanationVi: 'ひるは おべんとうを たべます — trưa ăn hộp cơm (bento).' },
    ],
  },
  speakSentences: [
    { ja: 'しゅうまつ、なにを したいですか。', vi: 'Cuối tuần bạn muốn làm gì?' },
    { ja: 'うみへ いきたいです。', vi: 'Tôi muốn đi biển.' },
    { ja: 'にもつを もちましょうか。', vi: 'Tôi xách hành lý giúp nhé?' },
    { ja: 'らいしゅうが たのしみです。', vi: 'Tôi mong chờ tuần sau.' },
    { ja: 'いっしょに ドライブしましょう。', vi: 'Mình cùng đi xe dạo nhé.' },
  ],
  translatePairs: [
    { ja: 'うみへ いきたいです。', vi: 'Tôi muốn đi biển.', tokens: ['うみ', 'へ', 'いきたい', 'です'], distractors: ['やま'] },
    { ja: 'すしが たべたいです。', vi: 'Tôi muốn ăn sushi.', tokens: ['すし', 'が', 'たべたい', 'です'], distractors: ['のみたい'] },
    { ja: 'にもつを もちましょうか。', vi: 'Tôi xách hành lý giúp nhé?', tokens: ['にもつ', 'を', 'もちましょう', 'か'], distractors: ['ください'] },
    { ja: 'らいしゅう がっこうが ありません。', vi: 'Tuần sau không có lớp học.', tokens: ['らいしゅう', 'がっこう', 'が', 'ありません'], distractors: ['あります'] },
    { ja: 'カメラを もって いきます。', vi: 'Tôi mang theo máy ảnh.', tokens: ['カメラ', 'を', 'もって', 'いきます'], distractors: ['かります'] },
  ],
  translateJaVi: [
    { ja: 'あしたの よていは ありません。', vi: 'Ngày mai không có kế hoạch gì.', wrongVi: ['Ngày mai có rất nhiều việc.', 'Ngày mai phải đi học.', 'Ngày mai bạn rảnh không?'] },
    { ja: 'こんしゅうは とても いそがしいです。', vi: 'Tuần này tôi rất bận.', wrongVi: ['Tuần này tôi rất rảnh.', 'Tuần sau tôi rất bận.', 'Hôm nay tôi mệt lắm.'] },
    { ja: 'やまに のぼりたいです。', vi: 'Tôi muốn leo núi.', wrongVi: ['Tôi đã leo núi rồi.', 'Tôi muốn xuống biển.', 'Núi cao lắm phải không?'] },
  ],
  wordBank: [
    { ja: 'らいしゅう りょこうします。', vi: 'Tuần sau tôi đi du lịch.', tokens: ['らいしゅう', 'りょこうします'], distractors: ['こんしゅう'] },
    { ja: 'いっしょに えいがを みませんか。', vi: 'Cùng xem phim không?', tokens: ['いっしょに', 'えいが', 'を', 'みません', 'か'], distractors: ['ましょう'] },
  ],
  kanji: ['予', '時'],
  writingKana: ['よ', 'て', 'い', 'ゆ', 'び'],
}
