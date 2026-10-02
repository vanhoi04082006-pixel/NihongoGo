/**
 * NihongoGo — Irodori A1 · Bài 18: そうまとめ (Tổng kết A1 lần 2 — chốt khoá).
 * Bài CHỐT KHOÁ: KHÔNG dạy mẫu mới — 3 "grammar point" là 3 NHÓM ôn của
 * bài 13–17: (di chuyển & chỉ đường) / (nhờ vả & xin phép) / (kế hoạch & cảm nghĩ).
 * Nội dung GỐC — không sao chép dialogue/ví dụ/bài tập từ bất kỳ giáo trình
 * có bản quyền nào.
 * Provenance: ORIGINAL_GENERATED · MACHINE_REVIEWED (validator + audit).
 */
import type { IrodoriLesson } from './types'

export const irodori18: IrodoriLesson = {
  order: 18,
  slug: 'irodori-18',
  title: 'そうまとめ — Tổng kết A1 (chốt khoá)',
  titleJa: 'いろどり A1 そうまとめ 2',
  description: 'Chốt toàn bộ hành trình A1: di chuyển, nhờ vả, kế hoạch — cộng bộ phó từ "tinh lọc" (もう/まだ/とても…) để nói chuyện tự nhiên như người thật.',
  learningObjectives: [
    'Ôn trọn các mẫu di chuyển: へ/に/で + のります・おります・とまります',
    'Ôn cặp nhờ vả: 〜て ください & 〜て も いいですか',
    'Dùng phó từ mức độ: もう・まだ・とても・ぜんぜん・たぶん',
  ],
  grammarTopics: ['Chốt: di chuyển & phương tiện', 'Chốt: nhờ vả & xin phép', 'Chốt: kế hoạch & cảm nghĩ + phó từ'],
  vocabularyTopics: ['Phó từ tần suất & mức độ', 'Số người', 'Từ chốt khoá'],
  kanjiTopics: ['終', '昨'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'みんな', romaji: 'minna', meaningVi: 'mọi người, tất cả', pos: 'danh từ', exampleJa: 'みんなで うみへ いきます。', exampleVi: 'Cả bọn cùng đi biển.' },
    { term: 'もう', romaji: 'mō', meaningVi: 'đã… rồi', pos: 'phó từ', exampleJa: 'もう たべました。', exampleVi: 'Tôi đã ăn rồi.' },
    { term: 'まだ', romaji: 'mada', meaningVi: 'vẫn chưa, vẫn còn', pos: 'phó từ', exampleJa: 'まだ です。', exampleVi: 'Vẫn chưa đâu.' },
    { term: 'いっぱい', romaji: 'ippai', meaningVi: 'nhiều, đầy', pos: 'phó từ', exampleJa: 'しゃしんを いっぱい とります。', exampleVi: 'Tôi chụp rất nhiều ảnh.' },
    { term: 'ひとり', romaji: 'hitori', meaningVi: 'một mình, một người', pos: 'danh từ', exampleJa: 'ひとりで かえります。', exampleVi: 'Tôi về một mình.' },
    { term: 'ふたり', romaji: 'futari', meaningVi: 'hai người', pos: 'danh từ', exampleJa: 'ふたりで ドライブします。', exampleVi: 'Hai người đi xe dạo.' },
    { term: 'じょうず', romaji: 'jōzu', meaningVi: 'giỏi, khéo', pos: 'tính từ な', exampleJa: 'あんさんは にほんごが じょうずです。', exampleVi: 'An giỏi tiếng Nhật lắm.' },
    { term: 'へた', romaji: 'heta', meaningVi: 'kém, vụng', pos: 'tính từ な', exampleJa: 'わたしは えが へたです。', exampleVi: 'Tôi vẽ tranh rất tệ.' },
    { term: 'ぜんぜん', romaji: 'zenzen', meaningVi: 'hoàn toàn (cùng phủ định)', pos: 'phó từ', exampleJa: 'ぜんぜん わかりません。', exampleVi: 'Tôi hoàn toàn không hiểu.' },
    { term: 'たぶん', romaji: 'tabun', meaningVi: 'có lẽ, chắc là', pos: 'phó từ', exampleJa: 'たぶん あしたも あめです。', exampleVi: 'Chắc ngày mai cũng mưa.' },
    { term: 'ほんとう', romaji: 'hontō', meaningVi: 'thật sự, đúng là', pos: 'danh từ', exampleJa: 'ほんとうに きれいです。', exampleVi: 'Thật sự là đẹp.' },
    { term: 'とても', romaji: 'totemo', meaningVi: 'rất', pos: 'phó từ', exampleJa: 'とても たのしかったです。', exampleVi: 'Rất vui ạ.' },
    { term: 'おわり', romaji: 'owari', meaningVi: 'sự kết thúc', pos: 'danh từ', exampleJa: 'きょうは これで おわりです。', exampleVi: 'Hôm nay đến đây là hết.' },
    { term: 'つづけます', romaji: 'tsuzukemasu', meaningVi: 'tiếp tục', pos: 'động từ nhóm 2', exampleJa: 'にほんごを つづけます。', exampleVi: 'Tôi sẽ tiếp tục học tiếng Nhật.' },
  ],
  grammar: [
    {
      code: 'i18-chot-idong',
      title: 'Chốt nhóm 1: di chuyển & phương tiện (bài 13–15)',
      formation: '[nơi]へ いきます → [phương tiện]で → [tàu]に のります → [ga]で おります',
      explanationVi:
        'Công thức kể HÀNH TRÌNH chuẩn A1, ghép 4 trợ từ đã học: うちから えきまで あるいて、でんしゃに のります (từ nhà đến ga đi bộ, rồi lên tàu). へ/に là điểm đến (bài 13), で là phương tiện & nơi xuống (bài 7/15), から〜まで là quãng đường (bài 6). Câu thông báo tàu: つぎは 〜です / とまります (bài 15) — nghe kịp つぎは là kịp xuống. Trật tự từ trong câu hành trình: THỜI GIAN → NƠI → PHƯƠNG TIỆN → ĐỘNG TỪ.',
      examples: [
        { ja: 'うちから えきまで あるきます。', vi: 'Tôi đi bộ từ nhà đến ga.', tokens: ['うち', 'から', 'えき', 'まで', 'あるきます'] },
        { ja: 'でんしゃで くうこうへ いきます。', vi: 'Tôi đi sân bay bằng tàu điện.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Chọn trợ từ đúng (Tôi xuống ở ga số 3)',
          sentence: 'さんばんのりば___ おります。',
          options: ['で', 'に', 'を', 'へ'],
          answerIndex: 0, explanationVi: 'Nơi XUỐNG dùng で (nơi hành động). Cặp chuẩn: に のります / で おります.',
        },
        {
          kind: 'choice', prompt: 'Kể hành trình đủ nhất là câu nào?',
          options: ['でんしゃに のります。', 'うちから えきまで あるいて、でんしゃに のります。', 'えきは とおいです。', 'でんしゃが とまります。'],
          answerIndex: 1, explanationVi: 'Hành trình đầy đủ: điểm đi (から) + điểm đến (まで) + hành động → câu ghép có cả 3 yếu tố.',
        },
        {
          kind: 'fill', prompt: 'Điền từ còn thiếu (Đi sân bay bằng shinkansen)',
          sentence: 'しんかんせん___ くうこうへ いきます。',
          options: ['で', 'に', 'が', 'も'],
          answerIndex: 0, explanationVi: 'Phương tiện đi + で: しんかんせんで いきます. に chỉ dành cho のります.',
        },
        {
          kind: 'error', prompt: 'Câu nào SAI trật tự/cấu trúc hành trình?',
          options: ['えきで おります。', 'でんしゃに のります。', 'のります でんしゃに さんばんのりばで。', 'つぎの えきに とまります。'],
          answerIndex: 2, explanationVi: 'Trật tự chuẩn: NƠI → へ/で/に → ĐỘNG TỪ. Đảo động từ lên đầu là sai hoàn toàn.',
        },
        {
          kind: 'choice', prompt: '「から〜まで」 trong うちから えきまで nghĩa là gì?',
          options: ['Và', 'Từ… đến…', 'Hoặc', 'Vì'],
          answerIndex: 1, explanationVi: 'から = từ (điểm đi), まで = đến (điểm đến) — ghép thành quãng đường/quãng thời gian.',
        },
      ],
    },
    {
      code: 'i18-chot-onegai',
      title: 'Chốt nhóm 2: nhờ vả & xin phép (bài 12–14)',
      formation: '〜て ください (nhờ làm) · 〜て も いいですか (xin phép) · だめです (từ chối)',
      explanationVi:
        'Bộ ba "cầu chì xã giao": nhờ làm = て-form + ください (ちょっと まって ください); xin phép = て-form + も いいですか (はいって も いいですか?); từ chối = すみません、だめです. Nhớ て-form của nhóm quen: まって (chờ), すわって (ngồi), かして (cho mượn), つかって (dùng), はなして (nói), もって (cầm). Lịch sự hơn nữa: thêm すみませんが ở đầu — biến yêu cầu thành đề nghị. Khi được giúp xong: ありがとうございました.',
      examples: [
        { ja: 'すみませんが、ちょっと まって も いいですか。', vi: 'Xin lỗi, cho tôi chờ chút được không ạ?', tokens: ['すみません', 'が', 'ちょっと', 'まって', 'も', 'いいです', 'か'] },
        { ja: 'ゆっくり はなして ください。', vi: 'Xin hãy nói chậm rãi.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Xin phép MƯỢN bút — câu nào đúng chuẩn?',
          options: ['ぺんを かして も いいですか。', 'ぺんを かして いいも ですか。', 'ぺんを かして ください も。', 'ぺんが かします か。'],
          answerIndex: 0, explanationVi: 'Xin phép = て-form + も いいですか. Trật tự khác đều sai cấu trúc.',
        },
        {
          kind: 'particle', prompt: 'Chọn từ đúng (Xin hãy ngồi đây)',
          sentence: 'ここに すわ___ ください。',
          options: ['って', 'ります', 'たい', 'ます'],
          answerIndex: 0, explanationVi: 'すわります → て-form すわって + ください. nhờ hành động luôn qua て-form.',
        },
        {
          kind: 'error', prompt: 'Câu nhờ nào THIẾU lịch sự nhất?',
          options: ['すみませんが、まって ください。', 'ちょっと まって ください。', 'まって ください！', 'まって も いいですか。'],
          answerIndex: 2, explanationVi: 'Kèm dấu chấm than không mở lời — nghe như mệnh lệnh. Mở lời bằng すみませんが là chuẩn mực.',
        },
        {
          kind: 'fill', prompt: 'Điền từ còn thiếu (Xin lỗi, không được đâu)',
          sentence: 'すみません、___です。',
          options: ['だめ', 'いい', 'べんり', 'じょうず'],
          answerIndex: 0, explanationVi: 'Từ chối = だめです. いい là đồng ý; べんり tiện lợi; じょうず là giỏi.',
        },
        {
          kind: 'choice', prompt: 'Sau khi được giúp xong — nói gì để khép lại?',
          options: ['ありがとうございました。', 'だめでした。', 'まだです。', 'どうですか。'],
          answerIndex: 0, explanationVi: 'Cảm ơn xong việc dùng quá khứ lịch sự: ありがとうございました.',
        },
      ],
    },
    {
      code: 'i18-chot-yotei',
      title: 'Chốt nhóm 3: kế hoạch, cảm nghĩ & phó từ mức độ',
      formation: '〜たいです / 〜ましょうか / そして・でも + もう・まだ・とても・ぜんぜん',
      explanationVi:
        'Kể kế hoạch trọn vẹn: mong muốn = たいです (いきたいです), đề nghị = ましょうか (いきましょうか), nối ý = そして (cùng chiều) / でも (ngược chiều). Mức độ phó từ giúp câu nói "sống": もう (đã… rồi) ↔ まだ (vẫn chưa); とても (rất) / いっぱい (nhiều) tăng cường; ぜんぜん + phủ định (hoàn toàn không); たぶん (có lẽ) đoán non. Ví dụ đắt giá: きょうとは どうでしたか → とても たのしかったです。でも、まだ いきたいです (vui lắm. Nhưng vẫn muốn đi nữa!).',
      examples: [
        { ja: 'とても たのしかったです。', vi: 'Rất vui ạ.', tokens: ['とても', 'たのしかった', 'です'] },
        { ja: 'まだ わかりません。', vi: 'Tôi vẫn chưa hiểu.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '「Tôi ĐÃ ăn rồi」 — phó từ nào đúng?',
          options: ['まだ たべました。', 'もう たべました。', 'ぜんぜん たべました。', 'たぶん たべました。'],
          answerIndex: 1, explanationVi: 'もう + động từ khẳng định quá khứ = đã… rồi. まだ đi với phủ định mới đúng nghĩa.',
        },
        {
          kind: 'fill', prompt: 'Điền từ còn thiếu (Tôi VẪN CHƯA hiểu)',
          sentence: '___ わかりません。',
          options: ['まだ', 'もう', 'とても', 'いっぱい'],
          answerIndex: 0, explanationVi: 'まだ + phủ định = vẫn chưa. もう わかりません nghĩa là "đã không hiểu nữa" — khác nghĩa.',
        },
        {
          kind: 'choice', prompt: '「hoàn toàn không hiểu」 — câu nào đúng?',
          options: ['ぜんぜん わかりません。', 'ぜんぜん わかります。', 'とても わかりません。', 'もう わかりません。'],
          answerIndex: 0, explanationVi: 'ぜんぜn LUÔN đi với phủ định: ぜんぜん わかりません = hoàn toàn không hiểu.',
        },
        {
          kind: 'choice', prompt: 'Nối: 「nhộn nhịp NHƯNG ồn」 — từ nào?',
          options: ['そして', 'でも', 'まだ', 'それから'],
          answerIndex: 1, explanationVi: 'Ý ngược chiều (ồn ở Nhật hơi tiêu cực so với nhộn nhịp) → でも; そして là cùng chiều.',
        },
        {
          kind: 'choice', prompt: '「Chắc ngày mai cũng mưa」 — câu nào đúng?',
          options: ['たぶん あしたも あめです。', 'まだ あしたも あめです。', 'もう あしたも あめです。', 'ぜんぜん あしたも あめです。'],
          answerIndex: 0, explanationVi: 'Đoán non dùng たぶん. もう là "đã", まだ là "chưa", ぜんぜん là "hoàn toàn" — đều sai nghĩa.',
        },
      ],
    },
  ],
  dialogue: {
    titleVi: 'Lời chào cuối khoá A1',
    situationVi: 'Lớp học kết thúc — Yamada-sensei và An trò chuyện lần cuối.',
    lines: [
      { speaker: 'やまだ', text: 'あんさん、A1が おわりですね。どうでしたか。', vi: 'An ơi, A1 kết thúc rồi nhỉ. Em thấy thế nào?' },
      { speaker: 'あん', text: 'とても たのしかったです。でも、まだ できません。', vi: 'Rất vui ạ. Nhưng em vẫn chưa làm được giỏi.' },
      { speaker: 'やまだ', text: 'じょうずですよ。ぜんぜん へたじゃ ありません。', vi: 'Em giỏi đấy. Hoàn toàn không tệ chút nào.' },
      { speaker: 'あん', text: 'ありがとう ございます。これからも べんきょうします。', vi: 'Em cảm ơn thầy. Từ giờ em vẫn tiếp tục học ạ.' },
      { speaker: 'やまだ', text: 'えきで やくに たちますか。でんしゃは もう へいきですか。', vi: 'Học về ga có giúp gì không? Đi tàu giờ em ổn rồi chứ?' },
      { speaker: 'あん', text: 'はい。もう こまりません。たぶん だいじょうぶです。', vi: 'Vâng. Em không còn bị khó xử nữa. Chắc là ổn ạ.' },
      { speaker: 'やまだ', text: 'みんなで また べんきょうしましょう。', vi: 'Sau này cả lớp lại cùng học tiếp nhé.' },
      { speaker: 'あん', text: 'はい、たのしみです！おわりまで がんばります。', vi: 'Vâng, em mong lắm! Em sẽ cố gắng đến cùng.' },
    ],
    questions: [
      { questionVi: 'An đánh giá khoá học thế nào?', choices: ['Nhàm chán', 'Rất vui nhưng vẫn chưa giỏi', 'Hoàn toàn không hiểu', 'Quá khó'], answerIndex: 1, explanationVi: 'とても たのしかったです。でも、まだ できません — vui nhưng vẫn chưa tự tin.' },
      { questionVi: 'Thầy nói An thế nào?', choices: ['Kém lắm', 'Giỏi, hoàn toàn không tệ', 'Cần học lại', 'Còn bỡ ngỡ'], answerIndex: 1, explanationVi: 'じょうずですよ。ぜんぜん へたじゃ ありません — giỏi, hoàn toàn không tệ.' },
      { questionVi: 'Giờ An đi tàu thế nào?', choices: ['Vẫn lo lắng', 'Không còn khó xử, chắc là ổn', 'Đã bỏ đi tàu', 'Chưa thử'], answerIndex: 1, explanationVi: 'もう こまりません。たぶん だいじょうぶです — không còn bối rối, chắc ổn.' },
    ],
  },
  listening: [
    { scriptJa: 'もう かえります。', meaningVi: 'Tôi đã về (bây giờ về) rồi.', choices: ['Tôi vẫn chưa về', 'Tôi về đây rồi', 'Tôi muốn về sớm', 'Tôi về một mình'], answerIndex: 1 },
    { scriptJa: 'にほんごが じょうずですね。', meaningVi: 'Bạn giỏi tiếng Nhật đấy.', choices: ['Tiếng Nhật của bạn tệ lắm', 'Bạn giỏi tiếng Nhật đấy', 'Bạn học tiếng Nhật à?', 'Tiếng Nhật khó lắm nhỉ?'], answerIndex: 1 },
    { scriptJa: 'みんなで かいものしました。', meaningVi: 'Cả bọn đã đi mua sắm.', choices: ['Tôi mua sắm một mình', 'Cả bọn đi mua sắm', 'Hai người đi mua sắm', 'Chưa mua sắm gì'], answerIndex: 1 },
    { scriptJa: 'まだ できません。', meaningVi: 'Vẫn chưa làm được.', choices: ['Đã làm được rồi', 'Vẫn chưa làm được', 'Hoàn toàn không làm', 'Có lẽ làm được'], answerIndex: 1, dictation: true },
    { scriptJa: 'とても たのしかったです。', meaningVi: 'Rất vui ạ.', choices: ['Rất vui ạ', 'Rất bận ạ', 'Rất mệt ạ', 'Rất yên tĩnh ạ'], answerIndex: 0, dictation: true },
  ],
  reading: {
    titleVi: 'Thư gửi chính mình sau A1',
    lines: [
      { text: 'ごがつ、にほんへ きました。ひとりで きました。', vi: 'Tháng 5, tôi sang Nhật. Một mình một thân.' },
      { text: 'さいしょ、にほんごが ぜんぜん わかりませんでした。', vi: 'Lúc đầu, tiếng Nhật tôi hoàn toàn không hiểu.' },
      { text: 'でも まいにち べんきょうしました。', vi: 'Nhưng tôi học mỗi ngày.' },
      { text: 'いまは えきで きっぷが かえます。', vi: 'Bây giờ tôi mua được vé ở nhà ga.' },
      { text: 'ともだちと りょこうも します。とても たのしいです。', vi: 'Tôi cũng đi du lịch với bạn. Vui lắm.' },
      { text: 'まだ べんきょうしたい ことが いっぱい あります。', vi: 'Vẫn còn rất nhiều thứ tôi muốn học.' },
    ],
    questions: [
      { questionVi: 'Người viết sang Nhật như thế nào?', choices: ['Cả nhà cùng đi', 'Một mình', 'Với hai bạn', 'Theo lớp học'], answerIndex: 1, explanationVi: 'ひとりで きました — sang một mình.' },
      { questionVi: 'Lúc đầu tiếng Nhật của người viết ra sao?', choices: ['Rất giỏi', 'Hoàn toàn không hiểu', 'Chỉ biết chào hỏi', 'Đọc được nhưng không nghe'], answerIndex: 1, explanationVi: 'ぜんぜん わかりませんでした — hoàn toàn không hiểu (thể quá khứ).' },
      { questionVi: 'Bây giờ người viết làm được gì?', choices: ['Mua vé ở nhà ga', 'Làm việc ở công ty', 'Dạy tiếng Nhật', 'Viết sách tiếng Nhật'], answerIndex: 0, explanationVi: 'いまは えきで きっぷが かえます — giờ mua được vé ở ga.' },
    ],
  },
  speakSentences: [
    { ja: 'にほんごを つづけます。', vi: 'Tôi sẽ tiếp tục học tiếng Nhật.' },
    { ja: 'まだ わかりませんが、がんばります。', vi: 'Tôi vẫn chưa hiểu nhưng sẽ cố gắng.' },
    { ja: 'とても たのしかったです。', vi: 'Rất vui ạ.' },
    { ja: 'みんなで はなしましょう。', vi: 'Mọi người cùng trò chuyện nhé.' },
    { ja: 'きょうは これで おわりです。', vi: 'Hôm nay đến đây là hết.' },
  ],
  translatePairs: [
    { ja: 'もう かえります。', vi: 'Tôi về đây rồi.', tokens: ['もう', 'かえります'], distractors: ['まだ'] },
    { ja: 'ひとりで かえります。', vi: 'Tôi về một mình.', tokens: ['ひとり', 'で', 'かえります'], distractors: ['ふたり'] },
    { ja: 'ぜんぜん わかりません。', vi: 'Tôi hoàn toàn không hiểu.', tokens: ['ぜんぜん', 'わかりません'], distractors: ['とても'] },
    { ja: 'にほんごが じょうずです。', vi: 'Tôi giỏi tiếng Nhật.', tokens: ['にほんご', 'が', 'じょうず', 'です'], distractors: ['へた'] },
    { ja: 'きょうは これで おわりです。', vi: 'Hôm nay đến đây là hết.', tokens: ['きょう', 'は', 'これ', 'で', 'おわり', 'です'], distractors: ['まだ'] },
  ],
  translateJaVi: [
    { ja: 'もう いちど いって ください。', vi: 'Xin hãy nói lại một lần nữa.', wrongVi: ['Xin hãy dừng lại đi.', 'Xin hãy nói chậm thôi.', 'Xin hãy giúp tôi một chút.'] },
    { ja: 'たぶん らいしゅう ひまです。', vi: 'Có lẽ tuần sau tôi rảnh.', wrongVi: ['Tuần sau tôi chắc chắn bận.', 'Tuần này tôi rảnh lắm.', 'Hôm qua tôi đã rỗi rồi.'] },
    { ja: 'ほんとうに ありがとうございました。', vi: 'Thành thật cảm ơn nhiều ạ.', wrongVi: ['Thật sự rất xin lỗi nhé.', 'Ngày mai lại gặp nhau nhé.', 'Hôm qua đã gặp rồi đấy.'] },
  ],
  wordBank: [
    { ja: 'まだ わかりません。', vi: 'Tôi vẫn chưa hiểu.', tokens: ['まだ', 'わかりません'], distractors: ['もう'] },
    { ja: 'とても じょうずですね。', vi: 'Giỏi quá đấy.', tokens: ['とても', 'じょうず', 'です', 'ね'], distractors: ['へた'] },
  ],
  kanji: ['終', '昨'],
  writingKana: ['お', 'わ', 'り', 'す', 'て'],
}
