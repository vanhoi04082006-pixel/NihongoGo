/**
 * NihongoGo — Bài 23: たら (điều kiện — nếu… thì…).
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson23: CurriculumLesson = {
  order: 23,
  slug: 'l23-dieu-kien-tara',
  title: 'Điều kiện たら — Nếu... thì...',
  titleJa: 'たら',
  description: 'Đặt điều kiện cho sự việc sẽ xảy ra với mẫu câu たら.',
  learningObjectives: [
    'Chia động từ sang dạng たら',
    'Nói câu điều kiện "nếu... thì..."',
    'Đưa lời dặn dò, tình huống giả định',
  ],
  grammarTopics: ['Cách tạo dạng たら', 'Câu điều kiện 〜たら'],
  vocabularyTopics: ['Tình huống giả định', 'Kết quả và hệ quả'],
  kanjiTopics: ['Kanji thời điểm (時・朝・夜)'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'あめ', romaji: 'ame', meaningVi: 'mưa', pos: 'danh từ', exampleJa: 'あめが ふったら、でかけません。', exampleVi: 'Nếu mưa thì tôi không đi ra ngoài.' },
    { term: 'ゆき', romaji: 'yuki', meaningVi: 'tuyết', pos: 'danh từ', exampleJa: 'ゆきが たくさん ふったら、バスで いきます。', exampleVi: 'Nếu tuyết rơi nhiều thì tôi đi bằng xe buýt.' },
    { term: 'てんき', romaji: 'tenki', meaningVi: 'thời tiết', pos: 'danh từ', exampleJa: 'てんきが よかったら、うみへ いきます。', exampleVi: 'Nếu thời tiết tốt thì tôi đi biển.' },
    { term: 'あさ', romaji: 'asa', meaningVi: 'buổi sáng', pos: 'danh từ', exampleJa: 'あさ おきたら、コーヒーを のみます。', exampleVi: 'Buổi sáng dậy xong tôi uống cà phê.' },
    { term: 'ひる', romaji: 'hiru', meaningVi: 'buổi trưa', pos: 'danh từ', exampleJa: 'ひるは あついですから、こうえんへ いきません。', exampleVi: 'Buổi trưa nóng nên tôi không đi công viên.' },
    { term: 'よる', romaji: 'yoru', meaningVi: 'buổi tối', pos: 'danh từ', exampleJa: 'よる うちへ かえったら、でんわします。', exampleVi: 'Tối về đến nhà thì tôi sẽ gọi điện.' },
    { term: 'しゅくだい', romaji: 'shukudai', meaningVi: 'bài tập về nhà', pos: 'danh từ', exampleJa: 'しゅくだいを したら、テレビを みます。', exampleVi: 'Làm xong bài tập thì tôi xem tivi.' },
    { term: 'テスト', romaji: 'tesuto', meaningVi: 'bài kiểm tra', pos: 'danh từ', exampleJa: 'テストが あったら、よく べんきょうします。', exampleVi: 'Nếu có bài kiểm tra thì tôi học chăm.' },
    { term: 'でんわ', romaji: 'denwa', meaningVi: 'điện thoại; cú điện', pos: 'danh từ', exampleJa: 'えきに ついたら、でんわします。', exampleVi: 'Đến nhà ga rồi thì tôi gọi điện.' },
    { term: 'こうえん', romaji: 'kōen', meaningVi: 'công viên', pos: 'danh từ', exampleJa: 'こうえんに いったら、しんぶんを よみます。', exampleVi: 'Đến công viên rồi tôi đọc báo.' },
    { term: 'でかけます', romaji: 'dekakemasu', meaningVi: 'đi ra ngoài', pos: 'động từ nhóm 2', exampleJa: 'あさ はやく でかけます。', exampleVi: 'Buổi sáng tôi đi ra ngoài sớm.' },
    { term: 'やすみます', romaji: 'yasumimasu', meaningVi: 'nghỉ (học, làm)', pos: 'động từ nhóm 1', exampleJa: 'ねつが あったら、がっこうを やすみます。', exampleVi: 'Nếu bị sốt thì tôi nghỉ học.' },
    { term: 'つきます', romaji: 'tsukimasu', meaningVi: 'đến (trạm, nơi)', pos: 'động từ nhóm 1', exampleJa: 'バスが えきに つきます。', exampleVi: 'Xe buýt đến nhà ga.' },
    { term: 'おわります', romaji: 'owarimasu', meaningVi: 'kết thúc', pos: 'động từ nhóm 1', exampleJa: 'にほんごの じゅぎょうは じゅうじに おわります。', exampleVi: 'Tiết tiếng Nhật kết thúc lúc 10 giờ.' },
    { term: 'わすれます', romaji: 'wasuremasu', meaningVi: 'quên', pos: 'động từ nhóm 2', exampleJa: 'わたしは なまえを よく わすれます。', exampleVi: 'Tôi hay quên tên.' },
    { term: 'もう', romaji: 'mō', meaningVi: 'đã … rồi', pos: 'phó từ', exampleJa: 'しゅくだいは もう おわりました。', exampleVi: 'Bài tập thì tôi đã làm xong rồi.' },
    { term: 'ねつ', romaji: 'netsu', meaningVi: 'cơn sốt', pos: 'danh từ', exampleJa: 'ねつが あったら、くすりを のみます。', exampleVi: 'Nếu bị sốt thì tôi uống thuốc.' },
    { term: 'くすり', romaji: 'kusuri', meaningVi: 'thuốc', pos: 'danh từ', exampleJa: 'よる くすりを のみます。', exampleVi: 'Buổi tối tôi uống thuốc.' },
    { term: 'あたま', romaji: 'atama', meaningVi: 'cái đầu', pos: 'danh từ', exampleJa: 'あたまが いたかったら、くすりを のみます。', exampleVi: 'Nếu đau đầu thì tôi uống thuốc.' },
    { term: 'しんぱい', romaji: 'shinpai', meaningVi: 'lo lắng', pos: 'tính từ な', exampleJa: 'テストが むずかしかったら、しんぱいです。', exampleVi: 'Nếu bài kiểm tra khó thì tôi lo.' },
  ],
  grammar: [
    {
      code: 'l23-tara-formation',
      title: 'Tạo dạng たら — từ động từ, tính từ, danh từ',
      formation: 'V: quá khứ thể thường + ら (いった・よんだ・たべた → いったら・よんだら・たべたら) / Adj-い: かったら / Adj-な・N: だったら (phủ định: じゃなかったら)',
      explanationVi:
        'たら ghép vào đuôi THỂ QUÁ KHỨ THƯỜNG (dạng た) rồi thêm ら: động từ nhóm 1 hàng き→いった→いったら, hàng み/び/に→よんだ→よんだら, hàng し→はなした→はなしたら; nhóm 2 bỏ る: たべた→たべたら; nhóm 3: したら・きたら. Tính từ い bỏ い: たかい→たかかったら, やすい→やすかったら; phủ định: やすくなかったら. Tính từ な và danh từ thêm だったら: しずかだったら・あめだったら; phủ định: じゃなかったら. Chú ý bất quy tắc: いい → よかったら.',
      examples: [
        { ja: 'にほんへ いったら、おみやげを かいます。', vi: 'Khi sang Nhật, tôi sẽ mua quà lưu niệm.', tokens: ['にほん', 'へ', 'いったら', 'おみやげ', 'を', 'かいます'] },
        { ja: 'ひるごはんを たべたら、さんぽします。', vi: 'Ăn xong cơm trưa thì tôi đi dạo.', tokens: ['ひるごはん', 'を', 'たべたら', 'さんぽ', 'します'] },
        { ja: 'この ほんは たかかったら、かいません。', vi: 'Nếu cuốn sách này đắt thì tôi không mua.' },
        { ja: 'あめだったら、でかけません。', vi: 'Nếu (trời) là mưa thì tôi không đi ra ngoài.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'いきます (nhóm 1) → dạng たら',
          sentence: 'うちへ ___、でんわします。',
          options: ['いったら', 'いきたら', 'いいて', 'いきったら'],
          answerIndex: 0, explanationVi: 'Nhóm 1 hàng き: いきます → quá khứ いった → いった + ら = いったら.',
        },
        {
          kind: 'conjugate', prompt: 'よみます (nhóm 1) → dạng たら',
          sentence: 'まんがを ___、ねます。',
          options: ['よみたら', 'よんだら', 'よったら', 'よんで'],
          answerIndex: 1, explanationVi: 'Nhóm 1 hàng み: よみます → よんだ → よんだら (giữ だ rồi thêm ら). よんで là thể て, không phải たら.',
        },
        {
          kind: 'conjugate', prompt: 'たべます (nhóm 2) → dạng たら',
          sentence: 'ひるごはんを ___、さんぽします。',
          options: ['たべったら', 'たべたら', 'たべるたら', 'たべましたら'],
          answerIndex: 1, explanationVi: 'Nhóm 2 bỏ る thêm た: たべる → たべた → たべたら.',
        },
        {
          kind: 'choice', prompt: 'Danh từ あめ + たら sẽ thành dạng nào?',
          options: ['あめだったら', 'あめいだったら', 'あめのたら', 'あめじゃったら'],
          answerIndex: 0, explanationVi: 'Danh từ (và tính từ な) thêm だったら: あめだったら. Dạng phủ định là じゃなかったら.',
        },
      ],
    },
    {
      code: 'l23-tara-conditional',
      title: '〜たら… — nếu… thì… (giả định)',
      formation: 'Mệnh đề chứa たら + kết quả (ý chí, kế hoạch của người nói)',
      explanationVi:
        'Mẫu câu điều kiện thông dụng nhất ở trình độ sơ cấp: vế trước nêu điều kiện giả định "nếu…", vế sau nêu kết quả: あめが ふったら、いきません = nếu mưa thì tôi không đi. Dù vế trước mang hình thức quá khứ, nghĩa vẫn là giả định ở tương lai. Vế sau thường là ý chí, kế hoạch hay phủ định: いきません・かいません. Tính từ phủ định cũng dùng được: やすくなかったら、かいません (nếu không rẻ thì không mua).',
      examples: [
        { ja: 'あめが ふったら、いきません。', vi: 'Nếu mưa thì tôi không đi.', tokens: ['あめ', 'が', 'ふったら', 'いきません'] },
        { ja: 'てんきが よかったら、うみへ いきます。', vi: 'Nếu thời tiết tốt thì tôi đi biển.', tokens: ['てんき', 'が', 'よかったら', 'うみ', 'へ', 'いきます'] },
        { ja: 'やすくなかったら、かいません。', vi: 'Nếu không rẻ thì tôi không mua.' },
        { ja: 'たんじょうびだったら、プレゼントを あげます。', vi: 'Nếu là sinh nhật thì tôi tặng quà.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '「あめが ふったら、こうえんへ いきません。」 có nghĩa là gì?',
          options: ['Nếu mưa thì tôi không đi công viên', 'Mưa rồi nhưng tôi vẫn đi công viên', 'Nếu không mưa thì tôi không đi công viên', 'Tôi đã đi công viên khi trời mưa'],
          answerIndex: 0, explanationVi: 'たら = "nếu/khi…": vế trước là điều kiện (mưa), vế sau là kết quả (không đi công viên).',
        },
        {
          kind: 'fill', prompt: 'Điền đáp án đúng (nếu đắt thì không mua)',
          sentence: 'たかかったら、___。',
          options: ['かいます', 'かいません', 'かいました', 'かって'],
          answerIndex: 1, explanationVi: 'Kết quả là "không mua" nên dùng phủ định かいません; かって là thể て.',
        },
        {
          kind: 'conjugate', prompt: 'やすい (tính từ い) → dạng たら (nếu RẺ)',
          sentence: 'この かさは ___、かいます。',
          options: ['やすかったら', 'やすくなかったら', 'やすいから', 'やすかったです'],
          answerIndex: 0, explanationVi: 'Tính từ い bỏ い thêm かったら: やすかったら. から nghĩa là "vì"; です không đứng trong vế たら.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng khi nói "Nếu trời đẹp thì đi biển"?',
          options: ['てんきが いいだったら、うみへ いきます。', 'てんきが よかったら、うみへ いきます。', 'てんきが よくたら、うみへ いきます。', 'てんきが いいたら、うみへ いきます。'],
          answerIndex: 1, explanationVi: 'いい là tính từ い nên chia theo かったら và bất quy tắc thành よかったら; tính từ い không dùng だったら.',
        },
      ],
    },
    {
      code: 'l23-tara-time',
      title: '〜たら… — khi… thì… (mốc thời gian)',
      formation: 'V-たら + hành động kế tiếp (kế hoạch, lời hứa, lời dặn)',
      explanationVi:
        'Khi sự việc ở vế trước CHẮC CHẮN sẽ xảy ra, たら không còn nghĩa "nếu" mà chỉ trình tự thời gian: A xảy ra thì làm B. うちへ かえったら、でんわします = về đến nhà thì tôi sẽ gọi điện. Đây là cách nói kế hoạch, lời hứa, lời dặn dò rất tự nhiên: えきに ついたら、でんわして ください. Phân biệt bằng ngữ cảnh: nếu vế trước chưa chắc xảy ra thì là giả định (nếu…), nếu chắc chắn xảy ra thì là mốc thời gian (khi…).',
      examples: [
        { ja: 'うちへ かえったら、でんわします。', vi: 'Về đến nhà thì tôi sẽ gọi điện.', tokens: ['うち', 'へ', 'かえったら', 'でんわ', 'します'] },
        { ja: 'えきに ついたら、でんわして ください。', vi: 'Đến nhà ga rồi thì hãy gọi điện cho tôi.', tokens: ['えき', 'に', 'ついたら', 'でんわ', 'して', 'ください'] },
        { ja: 'しゅくだいを したら、テレビを みます。', vi: 'Làm xong bài tập thì tôi xem tivi.' },
        { ja: 'にほんに いったら、ともだちに あいます。', vi: 'Đến Nhật rồi tôi sẽ gặp bạn.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '「うちへ かえったら、でんわします。」 có nghĩa là gì?',
          options: ['Tôi sẽ gọi điện khi về đến nhà', 'Tôi đã gọi điện ở trong nhà', 'Nếu có điện thoại thì tôi về nhà', 'Tôi không gọi điện khi về nhà'],
          answerIndex: 0, explanationVi: 'Việc về nhà chắc chắn xảy ra → たら mang nghĩa mốc thời gian: "khi về đến nhà thì…" (kế hoạch).',
        },
        {
          kind: 'conjugate', prompt: 'おきます (nhóm 2) → dạng たら',
          sentence: 'あさ ___、コーヒーを のみます。',
          options: ['おきて', 'おきたら', 'おきた', 'おきますら'],
          answerIndex: 1, explanationVi: 'Nhóm 2 bỏ る thêm た: おきる → おきた → おきたら: あさ おきたら、コーヒーを のみます.',
        },
        {
          kind: 'fill', prompt: 'Điền đúng (nhờ người khác gọi điện)',
          sentence: 'えきに ついたら、___ ください。',
          options: ['でんわって', 'でんわしたら', 'でんわして', 'でんわします'],
          answerIndex: 2, explanationVi: 'Nhờ ai làm gì dùng て-form + ください: でんわして ください.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng khi nói "Làm xong bài tập thì xem tivi"?',
          options: ['しゅくだいを してら、テレビを みます。', 'しゅくだいを したら、テレビを みます。', 'しゅくだいが したら、テレビを みます。', 'しゅくだいを したら、テレビを みましたら。'],
          answerIndex: 1, explanationVi: 'する → した → したら; tân ngữ しゅくだい phải đi với を: しゅくだいを したら.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Kế hoạch cuối tuần',
      situationVi: 'Linh rủ Tanaka đi công viên vào cuối tuần.',
      lines: [
        { speaker: 'リン', ja: 'たなかさん、しゅうまつは ひまですか。', vi: 'Tanaka, cuối tuần bạn rảnh không?' },
        { speaker: 'たなか', ja: 'ええ、ひまですよ。', vi: 'Ừ, tôi rảnh.' },
        { speaker: 'リン', ja: 'てんきが よかったら、こうえんへ いきませんか。', vi: 'Nếu trời đẹp thì đi công viên cùng không?' },
        { speaker: 'たなか', ja: 'いいですね。あめが ふったら、どうしますか。', vi: 'Hay đấy. Nếu mưa thì mình làm gì?' },
        { speaker: 'リン', ja: 'あめが ふったら、うちで えいがを みます。', vi: 'Nếu mưa thì mình xem phim ở nhà.' },
        { speaker: 'たなか', ja: 'いい かんがえだと おもいます。', vi: 'Tôi nghĩ đó là ý kiến hay.' },
        { speaker: 'リン', ja: 'じゃ、どようびの あさ、でんわします。', vi: 'Vậy sáng thứ Bảy tôi gọi điện nhé.' },
        { speaker: 'たなか', ja: 'はい、まって います。', vi: 'Vâng, tôi đợi.' },
        { speaker: 'リン', ja: 'じゃ、また どようび。', vi: 'Hẹn gặp lại vào thứ Bảy.' },
      ],
    },
    {
      titleVi: 'Hẹn ở nhà ga',
      situationVi: 'Min và Linh thống nhất kế hoạch đón nhau ở nhà ga ngày mai.',
      lines: [
        { speaker: 'ミン', ja: 'リンさん、あした えきで あいましょう。', vi: 'Linh, ngày mai mình gặp nhau ở nhà ga nhé.' },
        { speaker: 'リン', ja: 'なんじに あいますか。', vi: 'Mấy giờ mình gặp?' },
        { speaker: 'ミン', ja: 'くじに あいましょう。えきに ついたら、でんわしてください。', vi: 'Gặp lúc 9 giờ. Đến nhà ga rồi thì hãy gọi điện cho tôi.' },
        { speaker: 'リン', ja: 'はい、わかりました。', vi: 'Vâng, tôi hiểu rồi.' },
        { speaker: 'ミン', ja: 'わたしは きょう きっぷを かいました。', vi: 'Hôm nay tôi đã mua vé rồi.' },
        { speaker: 'リン', ja: 'ありがとう。あしたの てんきは どうですか。', vi: 'Cảm ơn. Thời tiết ngày mai thế nào?' },
        { speaker: 'ミン', ja: 'あしたは あめが ふると おもいます。', vi: 'Tôi nghĩ ngày mai sẽ mưa.' },
        { speaker: 'リン', ja: 'あめが ふったら、バスで いきます。', vi: 'Nếu mưa thì tôi đi bằng xe buýt.' },
        { speaker: 'ミン', ja: 'そうしましょう。じゃ、あした ね。', vi: 'Vậy nhé. Hẹn gặp lại ngày mai.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'あめが ふったら、でかけません。', meaningVi: 'Nếu mưa thì tôi không đi ra ngoài.', choices: ['Mưa rồi nên tôi không đi', 'Nếu mưa thì tôi không đi ra ngoài', 'Tôi sẽ đi dù trời mưa', 'Tôi không thích đi ra ngoài'], answerIndex: 1, dictation: true },
    { scriptJa: 'うちへ かえったら、でんわします。', meaningVi: 'Về đến nhà thì tôi sẽ gọi điện.', choices: ['Tôi đã gọi điện ở nhà', 'Về đến nhà thì tôi sẽ gọi điện', 'Tôi gọi điện rồi mới về nhà', 'Tôi sẽ không gọi điện'], answerIndex: 1, dictation: true },
    { scriptJa: 'てんきが よかったら、うみへ いきます。', meaningVi: 'Nếu thời tiết tốt thì tôi đi biển.', choices: ['Thời tiết hôm nay tốt', 'Tôi đã đi biển rồi', 'Nếu thời tiết tốt thì tôi đi biển', 'Tôi không muốn đi biển'], answerIndex: 2 },
    { scriptJa: 'しゅくだいを したら、テレビを みます。', meaningVi: 'Làm xong bài tập thì tôi xem tivi.', choices: ['Làm xong bài tập thì tôi xem tivi', 'Tôi xem tivi trong khi làm bài tập', 'Tôi không làm bài tập', 'Tôi đã xem tivi rồi'], answerIndex: 0 },
    { scriptJa: 'たんじょうびだったら、プレゼントを あげます。', meaningVi: 'Nếu là sinh nhật thì tôi tặng quà.', choices: ['Tôi đã nhận quà sinh nhật', 'Nếu là sinh nhật thì tôi tặng quà', 'Sinh nhật của tôi đã qua rồi', 'Tôi mua quà cho sinh nhật của mình'], answerIndex: 1 },
  ],
  reading: {
    titleVi: 'Kế hoạch ngày mai',
    lines: [
      { text: 'あしたは ともだちと うみへ いきます。', vi: 'Ngày mai tôi đi biển với bạn.' },
      { text: 'でも、あさの てんきは あまり よくないと おもいます。', vi: 'Nhưng tôi nghĩ thời tiết buổi sáng không được tốt lắm.' },
      { text: 'あめが ふったら、うみへ いきません。うちで えいがを みます。', vi: 'Nếu mưa thì tôi không đi biển. Tôi xem phim ở nhà.' },
      { text: 'てんきが よかったら、うみで およぎます。', vi: 'Nếu trời đẹp thì tôi bơi ở biển.' },
      { text: 'ごご、うちへ かえったら、ともだちに でんわします。', vi: 'Buổi chiều, khi về đến nhà tôi sẽ gọi điện cho bạn.' },
      { text: 'よるは しゅくだいを します。', vi: 'Buổi tối tôi làm bài tập.' },
      { text: 'きっと たのしいと おもいます。', vi: 'Tôi nghĩ chắc chắn sẽ vui.' },
    ],
    questions: [
      { questionVi: 'Nếu trời mưa, người viết sẽ làm gì?', choices: ['Vẫn đi biển như kế hoạch', 'Xem phim ở nhà', 'Gọi điện cho bạn cả ngày', 'Làm bài tập cả ngày'], answerIndex: 1, explanationVi: 'Câu 3: あめが ふったら、うちで えいがを みます — nếu mưa thì xem phim ở nhà.' },
      { questionVi: 'Nếu thời tiết tốt, người viết sẽ làm gì ở biển?', choices: ['Bơi', 'Đọc báo', 'Ngủ trên bãi cát', 'Xem phim'], answerIndex: 0, explanationVi: 'Câu 4: てんきが よかったら、うみで およぎます — nếu trời đẹp thì bơi ở biển.' },
      { questionVi: 'Buổi chiều, khi về đến nhà, người viết sẽ làm gì?', choices: ['Xem tivi', 'Làm bài tập ngay', 'Gọi điện cho bạn', 'Đi dạo ở công viên'], answerIndex: 2, explanationVi: 'Câu 5: うちへ かえったら、ともだちに でんわします — gọi điện cho bạn khi về đến nhà.' },
    ],
  },
  speakSentences: [
    { ja: 'あめが ふったら、でかけません。', vi: 'Nếu mưa thì tôi không đi ra ngoài.' },
    { ja: 'うちへ かえったら、でんわします。', vi: 'Về đến nhà thì tôi sẽ gọi điện.' },
    { ja: 'てんきが よかったら、こうえんへ いきましょう。', vi: 'Nếu trời đẹp thì mình đi công viên nhé.' },
    { ja: 'えきに ついたら、でんわしてください。', vi: 'Đến nhà ga rồi thì hãy gọi điện cho tôi.' },
  ],
  translatePairs: [
    { ja: 'あめが ふったら、いきません。', vi: 'Nếu mưa thì tôi không đi.', tokens: ['あめ', 'が', 'ふったら', 'いきません'], distractors: ['から'] },
    { ja: 'てんきが よかったら、うみへ いきます。', vi: 'Nếu thời tiết tốt thì tôi đi biển.', tokens: ['てんき', 'が', 'よかったら', 'うみ', 'へ', 'いきます'], distractors: ['です'] },
    { ja: 'うちへ かえったら、でんわします。', vi: 'Về đến nhà thì tôi sẽ gọi điện.', tokens: ['うち', 'へ', 'かえったら', 'でんわ', 'します'], distractors: ['ました'] },
    { ja: 'ひるごはんを たべたら、さんぽします。', vi: 'Ăn xong cơm trưa thì tôi đi dạo.', tokens: ['ひるごはん', 'を', 'たべたら', 'さんぽ', 'します'], distractors: ['ください'] },
    { ja: 'しゅくだいを したら、テレビを みます。', vi: 'Làm xong bài tập thì tôi xem tivi.', tokens: ['しゅくだい', 'を', 'したら', 'テレビ', 'を', 'みます'], distractors: ['でした'] },
  ],
  kanji: ['時', '朝', '夜'],
}
