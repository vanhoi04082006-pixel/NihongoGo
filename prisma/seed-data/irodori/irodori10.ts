/**
 * NihongoGo — Irodori A1 · Bài 10: さそう (Lời mời & kế hoạch).
 * Nội dung GỐC 100% — chỉ tham chiếu chủ đề giao tiếp sinh tồn cấp A1,
 * KHÔNG sao chép dialogue/ví dụ/bài tập từ giáo trình có bản quyền.
 * Provenance: ORIGINAL_GENERATED · MACHINE_REVIEWED (validator + audit).
 */
import type { IrodoriLesson } from './types'

export const irodori10: IrodoriLesson = {
  order: 10,
  slug: 'irodori-10',
  title: 'さそう — Lời mời & kế hoạch',
  titleJa: 'さそいと よてい',
  description: 'Rủ bạn đi chơi bằng 〜ませんか, đề nghị cùng làm bằng 〜ましょう và hẹn lịch cho "lần tới".',
  learningObjectives: [
    'Mời ai đó lịch sự bằng 〜ませんか',
    'Đề nghị cùng làm bằng 〜ましょう',
    'Nhận / từ chối lời mời một cách tự nhiên',
  ],
  grammarTopics: ['〜ませんか (lời mời)', '〜ましょう (đề nghị)', 'こんど + kế hoạch ます'],
  vocabularyTopics: ['Lời mời & đáp từ', 'Địa điểm giải trí', 'Từ hẹn lịch'],
  kanjiTopics: ['休', '待'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'いっしょに', romaji: 'issho ni', meaningVi: 'cùng nhau', pos: 'phó từ', exampleJa: 'いっしょに いきませんか。', exampleVi: 'Cùng đi không?' },
    { term: 'こんど', romaji: 'kondo', meaningVi: 'lần tới, dịp sau', pos: 'danh từ', exampleJa: 'こんど いきましょう。', exampleVi: 'Lần tới mình đi nhé.' },
    { term: 'ええ', romaji: 'ee', meaningVi: 'vâng, ừ (thân mật)', pos: 'thán từ', exampleJa: 'ええ、いいですね。', exampleVi: 'Ừ, hay đấy.' },
    { term: 'ちょっと', romaji: 'chotto', meaningVi: 'hơi… (từ chối mềm)', pos: 'phó từ', exampleJa: 'すみません、ちょっと…。', exampleVi: 'Tiếc quá, tôi hơi bận…' },
    { term: 'ぜひ', romaji: 'zehi', meaningVi: 'nhất định, rất mong', pos: 'phó từ', exampleJa: 'ぜひ いきたいです。', exampleVi: 'Tôi rất muốn đi.' },
    { term: 'ざんねんです', romaji: 'zannen desu', meaningVi: 'tiếc quá', pos: 'tính từ な', exampleJa: 'ざんねんです ね。', exampleVi: 'Tiếc thật đấy nhỉ.' },
    { term: 'えいがかん', romaji: 'eigakan', meaningVi: 'rạp chiếu phim', pos: 'danh từ', exampleJa: 'えいがかんは どこですか。', exampleVi: 'Rạp phim ở đâu?' },
    { term: 'デパート', romaji: 'depāto', meaningVi: 'bách hóa tổng hợp', pos: 'danh từ', exampleJa: 'デパートで かいものを します。', exampleVi: 'Tôi đi mua sắm ở bách hóa.' },
    { term: 'こうえん', romaji: 'kōen', meaningVi: 'công viên', pos: 'danh từ', exampleJa: 'こうえんで さんぽを します。', exampleVi: 'Tôi đi dạo trong công viên.' },
    { term: 'コンサート', romaji: 'konsāto', meaningVi: 'buổi hòa nhạc', pos: 'danh từ', exampleJa: 'コンサートの きっぷが あります。', exampleVi: 'Tôi có vé hòa nhạc.' },
    { term: 'きっぷ', romaji: 'kippu', meaningVi: 'vé, phiếu', pos: 'danh từ', exampleJa: 'きっぷを 2まい かいます。', exampleVi: 'Tôi mua hai vé.' },
    { term: 'いきます', romaji: 'ikimasu', meaningVi: 'đi', pos: 'động từ nhóm 1', exampleJa: 'あした こうえんへ いきます。', exampleVi: 'Mai tôi đi công viên.' },
    { term: 'そうしましょう', romaji: 'sō shimashō', meaningVi: 'vậy mình làm thôi', pos: 'câu cố định', exampleJa: 'そうしましょう。', exampleVi: 'Vậy làm thế nhé.' },
    { term: 'よやくします', romaji: 'yoyaku shimasu', meaningVi: 'đặt (vé, chỗ) trước', pos: 'động từ nhóm 3', exampleJa: 'レストランを よやくします。', exampleVi: 'Tôi đặt nhà hàng trước.' },
    { term: 'あそびます', romaji: 'asobimasu', meaningVi: 'đi chơi, vui đùa', pos: 'động từ nhóm 1', exampleJa: 'ともだちと あそびます。', exampleVi: 'Tôi đi chơi với bạn.' },
  ],
  grammar: [
    {
      code: 'i10-masen-ka',
      title: '〜ませんか — lời mời lịch sự',
      formation: 'Động từ (bỏ ます) + ませんか · Vd: いきませんか・みませんか・たべませんか',
      explanationVi:
        'Dù có chữ ません, 〜ませんか KHÔNG phải phủ định mà là LỜI MỜI rất lịch sự: "…cùng không?". Cách ghép: lấy gốc động từ (bỏ ます) rồi thêm ませんか: いきます → いきませんか (đi cùng không?). Thêm いっしょに để nhấn "cùng nhau": いっしょに いきませんか. ĐÁP lời mời: nhận — ええ、いいですね (ừ, hay đấy) / ぜひ (nhất định); từ chối — すみません、ちょっと… (tiếc quá, tôi hơi bận…) — người Nhật hiếm khi thẳng thừng nói "không".',
      examples: [
        { ja: 'いっしょに えいがを みませんか。', vi: 'Cùng xem phim nhé?', tokens: ['いっしょに', 'えいが', 'を', 'みません', 'か'] },
        { ja: 'コンサートに いきませんか。', vi: 'Đi hòa nhạc cùng không?' },
        { ja: 'すみません、ちょっと…。', vi: 'Tiếc quá, tôi hơi bận…' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '「いっしょに こうえんへ いきませんか。」 — người nói đang làm gì?',
          options: ['Từ chối đi công viên', 'Hỏi đường tới công viên', 'Mời mình cùng đi công viên', 'Kể rằng đã đi công viên'],
          answerIndex: 2, explanationVi: '〜ませんか là LỜI MỜI: "cùng đi công viên nhé?". Có ません nhưng không mang nghĩa phủ định.',
        },
        {
          kind: 'conjugate', prompt: 'Chọn dạng mời đúng từ động từ たべます (Cùng ăn không?)',
          sentence: 'いっしょに ___か。',
          options: ['たべません', 'たべませんか', 'たべましょうか', 'たべますか'],
          answerIndex: 1, explanationVi: 'Mời lịch sự = gốc + ませんか: たべませんか. たべません là phủ định thường; たべますか chỉ hỏi "có ăn không".',
        },
        {
          kind: 'error', prompt: 'Muốn TỪ CHỐI lời mời một cách lịch sự — câu nào phù hợp?',
          options: ['いいえ、きらいです。', 'すみません、ちょっと…。', 'だめです。', 'いきません。'],
          answerIndex: 1, explanationVi: 'すみません、ちょっと… là cách từ chối mềm mại chuẩn Nhật. Các câu còn lại quá thẳng, dễ làm đối phương mất mặt.',
        },
        {
          kind: 'fill', prompt: 'Điền từ còn thiếu (Cùng đi nhé?)',
          sentence: 'いっしょに いき___か。',
          options: ['ません', 'ましょう', 'ました', 'ます'],
          answerIndex: 0, explanationVi: 'いきませんか = lời mời (gốc いき + ませんか). ましょう là đề nghị — thiếu か thì không thành câu hỏi mời.',
        },
        {
          kind: 'choice', prompt: 'Đáp "rất muốn đi" cho lời mời — dùng từ nào?',
          options: ['ざんねんです', 'ぜひ', 'ちょっと', 'けっこうです'],
          answerIndex: 1, explanationVi: 'ぜひ = "nhất định/rất mong" — đáp nhận nhiệt tình. ちょっと và けっこうです là từ chối; ざんねんです là tiếc.',
        },
      ],
    },
    {
      code: 'i10-mashou',
      title: '〜ましょう — đề nghị cùng làm',
      formation: 'Động từ (bỏ ます) + ましょう · Vd: いきましょう・みましょう・やすみましょう',
      explanationVi:
        '〜ましょう là đề nghị TRỰC TIẾP "mình cùng … nhé" — chắc chắn hơn ませんか (vốn chỉ "gợi ý"). Cách ghép giống hệt: bỏ ます thêm ましょう: いきましょう (mình đi thôi), たべましょう (ăn thôi nào). Câu đáp đồng ý gọn: そうしましょう (vậy làm thế nhé) — cụm này cực thông dụng khi chốt kế hoạch. So sánh nhanh: みませんか? (xem cùng không — để người kia quyết) → みましょう! (mình xem thôi — người nói chủ động hơn).',
      examples: [
        { ja: 'そうしましょう。', vi: 'Vậy làm thế nhé.' },
        { ja: 'あした こうえんへ いきましょう。', vi: 'Mai mình đi công viên nhé.', tokens: ['あした', 'こうえん', 'へ', 'いきましょう'] },
        { ja: 'ちょっと やすみましょう。', vi: 'Nghỉ chút đi.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '「あした いきましょう。」 khác 「あした いきませんか。」 chỗ nào?',
          options: ['ましょう lịch sự hơn nhiều', 'ましょう là đề nghị chủ động, ませんか là gợi ý để người kia quyết', 'ませんか là phủ định nên không đi', 'Hai câu giống hệt nhau'],
          answerIndex: 1, explanationVi: 'ましょう = "mình đi thôi" (chủ động); ませんか = "đi không?" (mở lựa chọn). Cả hai đều lịch sự — chỉ khác mức chủ động.',
        },
        {
          kind: 'conjugate', prompt: 'Chọn dạng đúng (Mình cùng nghe nhạc nhé)',
          sentence: 'いっしょに おんがくを ___。',
          options: ['ききましょう', 'ききません', 'ききます', 'ききました'],
          answerIndex: 0, explanationVi: 'Gốc きき + ましょう = ききましょう. Phủ định ききません không phải lời đề nghị; ます/ました không mang nghĩa mời.',
        },
        {
          kind: 'fill', prompt: 'Điền từ còn thiếu (Vậy làm thế nhé)',
          sentence: '___しましょう。',
          options: ['そう', 'どう', 'こんど', 'ちょっと'],
          answerIndex: 0, explanationVi: 'そうしましょう = "vậy làm thế nhé" — câu chốt kế hoạch sau khi hai bên thống nhất.',
        },
        {
          kind: 'error', prompt: 'Bạn rủ bạn cùng nghỉ giải lao — câu nào đúng?',
          options: ['ちょっと やすみましょう。', 'ちょっと やすみませんか ましょう。', 'やすみましょう か ましょう。', 'ちょっと やすみました。'],
          answerIndex: 0, explanationVi: 'ちょっと やすみましょう = "nghỉ chút đi". Các câu khác nối mẫu sai ngữ pháp; ました là quá khứ kể chuyện.',
        },
      ],
    },
    {
      code: 'i10-kondo-keikaku',
      title: 'こんど + ます — hẹn "lần tới" & chốt kế hoạch',
      formation: 'こんど / [thời gian] に + [động từ ます] · Vd: こんど いきます · どようびに あそびます',
      explanationVi:
        'Khi chưa rảnh ngay, người Nhật hẹn "lần tới" bằng こんど + động từ thể ます: こんど いきます (lần tới tôi sẽ đi). Kết hợp ngày cụ thể: どようびに あそびます (thứ bảy tôi đi chơi). Trước buổi đi chơi nên よやくします (đặt trước) — đặt vé きっぷ, đặt chỗ nhà hàng. Cặp đáp-mời tiện dụng: A: こんど いきませんか。B: ええ、ぜひ。こんど いきましょう。— mẫu hội thoại hẹn đi chơi cực phổ biến.',
      examples: [
        { ja: 'こんど いきましょう。', vi: 'Lần tới mình đi nhé.', tokens: ['こんど', 'いきましょう'] },
        { ja: 'どようびに ともだちと あそびます。', vi: 'Thứ bảy tôi đi chơi với bạn.' },
        { ja: 'コンサートの きっぷを よやくします。', vi: 'Tôi đặt vé hòa nhạc trước.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '「こんど」 trong câu こんど いきましょう nghĩa là gì?',
          options: ['Ngay bây giờ', 'Lần tới, dịp sau', 'Hôm qua', 'Mỗi ngày'],
          answerIndex: 1, explanationVi: 'こんど = "lần này/dịp tới" — dùng hẹn lịch tương lai gần, chưa xác định ngày cụ thể.',
        },
        {
          kind: 'particle', prompt: 'Chọn trợ từ đúng (Thứ bảy tôi đi chơi với bạn)',
          sentence: 'どようび___ ともだちと あそびます。',
          options: ['に', 'で', 'を', 'へ'],
          answerIndex: 0, explanationVi: 'Ngày cụ thể + に (どようびに). で chỉ nơi diễn ra; を là tân ngữ; へ là hướng đi.',
        },
        {
          kind: 'fill', prompt: 'Điền từ còn thiếu (Tôi đặt vé trước)',
          sentence: 'きっぷを ___します。',
          options: ['よやく', 'いっしょ', 'ざんねん', 'こんど'],
          answerIndex: 0, explanationVi: 'よやくします = đặt trước. Ba từ còn lại là "cùng nhau / tiếc / lần tới" — không ghép được với します theo nghĩa đặt chỗ.',
        },
        {
          kind: 'choice', prompt: 'Bạn định rủ đi chơi vào thứ bảy nhưng hôm đó bạn bận — câu hẹn lại nào tự nhiên?',
          options: ['どようびに あそびましょう。', 'こんど あそびましょう。', 'あそびません。', 'きょう あそびました。'],
          answerIndex: 1, explanationVi: 'Bận thứ bảy → hẹn dịp khác: こんど あそびましょう (lần tới đi chơi nhé).',
        },
      ],
    },
  ],
  dialogue: {
    titleVi: 'Rủ đi hòa nhạc',
    situationVi: 'An có hai vé hòa nhạc, chạy sang phòng Mai ngay sau giờ học.',
    lines: [
      { speaker: 'あん', text: 'まいさん、こんどの どようび ひまですか。', vi: 'Mai ơi, thứ bảy này cậu rảnh không?' },
      { speaker: 'まい', text: 'どようびですか。ええ、ひまですよ。', vi: 'Thứ bảy á? Ừ, mình rảnh.' },
      { speaker: 'あん', text: 'コンサートの きっぷが 2まい あります。いっしょに いきませんか。', vi: 'Tớ có hai vé hòa nhạc. Đi cùng không?' },
      { speaker: 'まい', text: 'コンサートですか。ぜひ いきたいです。', vi: 'Hòa nhạc á? Tớ rất muốn đi.' },
      { speaker: 'あん', text: 'よかった。じゃあ、きっぷを よやくしました。', vi: 'Tốt quá. Vậy tớ đã đặt vé rồi.' },
      { speaker: 'まい', text: 'えいがも みませんか。コンサートの まえに。', vi: 'Xem phim nữa không? Trước buổi hòa nhạc ấy.' },
      { speaker: 'あん', text: 'ざんねんですね。じかんが ありません。', vi: 'Tiếc thật. Không đủ thời gian.' },
      { speaker: 'まい', text: 'そうですか。じゃあ、こんど えいがを みましょう。', vi: 'Thế à. Vậy lần tới mình xem phim nhé.' },
    ],
    questions: [
      { questionVi: 'An mời Mai làm gì vào thứ bảy?', choices: ['Đi xem phim', 'Đi hòa nhạc', 'Đi mua sắm', 'Đi công viên'], answerIndex: 1, explanationVi: 'An có 2 vé (コンサートの きっぷが 2まい) và hỏi いっしょに いきませんか — mời đi hòa nhạc.' },
      { questionVi: 'Mai đáp thế nào khi được mời?', choices: ['Từ chối mềm', 'Rất muốn đi (ぜひ)', 'Đề nghị đổi ngày', 'Im lặng'], answerIndex: 1, explanationVi: 'Mai nói ぜひ いきたいです — "nhất định tớ muốn đi", đáp nhận nhiệt tình.' },
      { questionVi: 'Vì sao hai bạn không xem phim trước hòa nhạc?', choices: ['Phim hết vé', 'Trời mưa', 'Không đủ thời gian', 'Mai không thích phim'], answerIndex: 2, explanationVi: 'An nói ざんねんですね。じかんが ありません — tiếc quá, không đủ thời gian; sau đó hẹn lần sau.' },
    ],
  },
  listening: [
    { scriptJa: 'いっしょに いきませんか。', meaningVi: 'Cùng đi không?', choices: ['Cùng đi không?', 'Mình đi thôi!', 'Tôi không đi đâu.', 'Đi một mình nhé.'], answerIndex: 0 },
    { scriptJa: 'ええ、いいですね。', meaningVi: 'Ừ, hay đấy.', choices: ['Không, chán lắm', 'Ừ, hay đấy', 'Tôi hơi bận', 'Hỏi lại đi'], answerIndex: 1 },
    { scriptJa: 'すみません、ちょっと…。', meaningVi: 'Tiếc quá, tôi hơi bận…', choices: ['Tôi rất thích', 'Tiếc quá, tôi hơi bận…', 'Vậy làm thế nhé', 'Đi thôi nào'], answerIndex: 1 },
    { scriptJa: 'こんど いきましょう。', meaningVi: 'Lần tới mình đi nhé.', choices: ['Mai mình đi nhé', 'Lần tới mình đi nhé', 'Hôm qua đã đi', 'Mình không đi'], answerIndex: 1, dictation: true },
    { scriptJa: 'きっぷを よやくします。', meaningVi: 'Tôi đặt vé trước.', choices: ['Tôi mua vé rồi', 'Tôi đặt vé trước', 'Vé hết rồi', 'Tôi làm mất vé'], answerIndex: 1, dictation: true },
  ],
  reading: {
    titleVi: 'よていの メモ — Ghi chú kế hoạch',
    lines: [
      { text: 'どようび: コンサートに いきます。', vi: 'Thứ bảy: tôi đi hòa nhạc.' },
      { text: 'ともだちと いっしょに いきます。', vi: 'Tôi đi cùng bạn.' },
      { text: 'きっぷは もう よやくしました。', vi: 'Vé thì tôi đã đặt trước rồi.' },
      { text: 'コンサートの まえに、レストランで ごはんを たべます。', vi: 'Trước hòa nhạc, tôi ăn cơm ở nhà hàng.' },
      { text: 'にちようびは デパートへ かいものに いきます。', vi: 'Chủ nhật tôi đi mua sắm ở bách hóa.' },
      { text: 'こんど、えいがも みましょう。', vi: 'Lần tới, mình sẽ xem phim nữa.' },
    ],
    questions: [
      { questionVi: 'Người viết đi hòa nhạc với ai?', choices: ['Một mình', 'Với bạn', 'Với gia đình', 'Với thầy giáo'], answerIndex: 1, explanationVi: 'ともだちと いっしょに いきます — đi cùng nhau với bạn.' },
      { questionVi: 'Trước buổi hòa nhạc, người viết làm gì?', choices: ['Xem phim', 'Ăn ở nhà hàng', 'Đi công viên', 'Mua vé'], answerIndex: 1, explanationVi: 'コンサートの まえに、レストランで ごはんを たべます — ăn cơm ở nhà hàng trước.' },
      { questionVi: 'Chủ nhật người viết dự định làm gì?', choices: ['Nghỉ ở nhà', 'Đi hòa nhạc', 'Mua sắm ở bách hóa', 'Hát karaoke'], answerIndex: 2, explanationVi: 'にちようびは デパートへ かいものに いきます — đi mua sắm ở bách hóa.' },
    ],
  },
  speakSentences: [
    { ja: 'いっしょに いきませんか。', vi: 'Cùng đi không?' },
    { ja: 'ええ、いいですね。', vi: 'Ừ, hay đấy.' },
    { ja: 'すみません、ちょっと…。', vi: 'Tiếc quá, tôi hơi bận…' },
    { ja: 'こんど いきましょう。', vi: 'Lần tới mình đi nhé.' },
    { ja: 'そうしましょう。', vi: 'Vậy làm thế nhé.' },
  ],
  translatePairs: [
    { ja: 'いっしょに いきませんか。', vi: 'Cùng đi không?', tokens: ['いっしょに', 'いきません', 'か'], distractors: ['こんど'] },
    { ja: 'ええ、ぜひ いきたいです。', vi: 'Ừ, tôi rất muốn đi.', tokens: ['ええ', 'ぜひ', 'いきたい', 'です'], distractors: ['ちょっと'] },
    { ja: 'こんど いきましょう。', vi: 'Lần tới mình đi nhé.', tokens: ['こんど', 'いきましょう'], distractors: ['きょう'] },
    { ja: 'きっぷを よやくします。', vi: 'Tôi đặt vé trước.', tokens: ['きっぷ', 'を', 'よやくします'], distractors: ['かいもの'] },
    { ja: 'どようびに ともだちと あそびます。', vi: 'Thứ bảy tôi đi chơi với bạn.', tokens: ['どようび', 'に', 'ともだち', 'と', 'あそびます'], distractors: ['こんど'] },
  ],
  translateJaVi: [
    { ja: 'ざんねんですね。', vi: 'Tiếc thật đấy nhỉ.', wrongVi: ['Hay đấy nhỉ.', 'Vậy làm thế nhé.', 'Tôi rất muốn đi.'] },
    { ja: 'コンサートに いきませんか。', vi: 'Đi hòa nhạc cùng không?', wrongVi: ['Tôi không đi hòa nhạc.', 'Hòa nhạc bắt đầu lúc mấy giờ?', 'Vé hòa nhạc đắt không?'] },
    { ja: 'そうしましょう。', vi: 'Vậy mình làm thế nhé.', wrongVi: ['Cùng đi không?', 'Tôi hơi bận…', 'Lần tới nhé.'] },
  ],
  wordBank: [
    { ja: 'いっしょに えいがを みませんか。', vi: 'Cùng xem phim nhé?', tokens: ['いっしょに', 'えいが', 'を', 'みません', 'か'], distractors: ['こんど'] },
    { ja: 'あした こうえんへ いきましょう。', vi: 'Mai mình đi công viên nhé.', tokens: ['あした', 'こうえん', 'へ', 'いきましょう'], distractors: ['きっぷ'] },
  ],
  kanji: ['休', '待'],
  writingKana: ['ま', 'す', 'か', 'い', 'そ'],
}
