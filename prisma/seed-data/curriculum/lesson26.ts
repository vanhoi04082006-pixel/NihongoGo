/**
 * NihongoGo — Bài 26: Trợ động từ thể て (〜てしまう・ておく・てみる).
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson26: CurriculumLesson = {
  order: 26,
  slug: 'l26-tro-dong-tu-te',
  title: 'Trợ động từ thể て — 〜てしまう・ておく・てみる',
  titleJa: 'て形の補助動詞',
  description: 'Thêm sắc thái hoàn tất, chuẩn bị, thử làm cho câu động từ bằng các trợ động từ đi sau て.',
  learningObjectives: [
    'Dùng 〜てしまう (lỡ làm, làm hẳn)',
    'Dùng 〜ておく (làm trước)',
    'Dùng 〜てみる (thử làm)',
  ],
  grammarTopics: ['〜てしまう (hoàn tất)', '〜ておく (chuẩn bị trước)', '〜てみる (thử làm)'],
  vocabularyTopics: ['Sự cố nhỏ', 'Việc chuẩn bị'],
  kanjiTopics: ['Kanji hoàn thành (仕・置・終)'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'なくします', romaji: 'nakushimasu', meaningVi: 'làm mất, đánh mất', pos: 'động từ nhóm 1', exampleJa: 'わたしは よく かさを なくします。', exampleVi: 'Tôi hay làm mất dù.' },
    { term: 'おとします', romaji: 'otoshimasu', meaningVi: 'làm rơi, đánh rơi', pos: 'động từ nhóm 1', exampleJa: 'がっこうで よく えんぴつを おとします。', exampleVi: 'Ở trường tôi hay làm rơi bút chì.' },
    { term: 'こわします', romaji: 'kowashimasu', meaningVi: 'làm hỏng, làm vỡ', pos: 'động từ nhóm 1', exampleJa: 'わたしは よく コップを こわします。', exampleVi: 'Tôi hay làm vỡ cốc.' },
    { term: 'コップ', romaji: 'koppu', meaningVi: 'cốc (không có tay cầm)', pos: 'danh từ', exampleJa: 'コップで ジュースを のみます。', exampleVi: 'Tôi uống nước ép bằng cốc.' },
    { term: 'まちがえます', romaji: 'machigaemasu', meaningVi: 'nhầm, làm sai', pos: 'động từ nhóm 2', exampleJa: 'テストで こたえを よく まちがえます。', exampleVi: 'Làm bài test tôi hay làm sai câu trả lời.' },
    { term: '仕事', reading: 'しごと', romaji: 'shigoto', meaningVi: 'công việc', pos: 'danh từ', exampleJa: 'しゅうまつも 仕事を します。', exampleVi: 'Cuối tuần tôi cũng làm việc.' },
    { term: '置きます', reading: 'おきます', romaji: 'okimasu', meaningVi: 'đặt, để', pos: 'động từ nhóm 1', exampleJa: 'つくえの うえに かばんを 置きます。', exampleVi: 'Tôi đặt cặp lên bàn.' },
    { term: '終わります', reading: 'おわります', romaji: 'owarimasu', meaningVi: 'kết thúc, xong', pos: 'động từ nhóm 1', exampleJa: 'しごとは ごご 五じに 終わります。', exampleVi: 'Công việc kết thúc lúc 5 giờ chiều.' },
    { term: 'じゅんびします', romaji: 'junbishimasu', meaningVi: 'chuẩn bị', pos: 'động từ nhóm 3', exampleJa: 'まいあさ、おべんとうを じゅんびします。', exampleVi: 'Mỗi sáng tôi chuẩn bị cơm hộp.' },
    { term: 'しゅうりします', romaji: 'shūrishimasu', meaningVi: 'sửa chữa', pos: 'động từ nhóm 3', exampleJa: 'こわれた じてんしゃを しゅうりします。', exampleVi: 'Tôi sửa chiếc xe đạp hỏng.' },
    { term: 'かします', romaji: 'kashimasu', meaningVi: 'cho mượn', pos: 'động từ nhóm 1', exampleJa: 'ともだちに えんぴつを かします。', exampleVi: 'Tôi cho bạn mượn bút chì.' },
    { term: 'えんぴつ', romaji: 'enpitsu', meaningVi: 'bút chì', pos: 'danh từ', exampleJa: 'えんぴつで かきます。', exampleVi: 'Tôi viết bằng bút chì.' },
    { term: 'ぜんぶ', romaji: 'zenbu', meaningVi: 'tất cả, toàn bộ', pos: 'danh từ (trạng ngữ)', exampleJa: 'しゅくだいを ぜんぶ しました。', exampleVi: 'Tôi làm hết tất cả bài tập.' },
    { term: 'こんや', romaji: "kon'ya", meaningVi: 'tối nay', pos: 'danh từ (trạng ngữ)', exampleJa: 'こんやは うちに います。', exampleVi: 'Tối nay tôi ở nhà.' },
    { term: 'もう', romaji: 'mō', meaningVi: 'đã... rồi', pos: 'phó từ', exampleJa: 'でんわは もう しました。', exampleVi: 'Tôi gọi điện rồi.' },
    { term: 'はじめて', romaji: 'hajimete', meaningVi: 'lần đầu tiên', pos: 'trạng ngữ', exampleJa: 'はじめて すしを たべて みました。', exampleVi: 'Tôi thử ăn sushi lần đầu tiên.' },
    { term: 'おとしもの', romaji: 'otoshimono', meaningVi: 'đồ bị đánh rơi', pos: 'danh từ', exampleJa: 'こうえんに おとしものが ありました。', exampleVi: 'Ở công viên có đồ ai đó làm rơi.' },
    { term: 'あらいます', romaji: 'araimasu', meaningVi: 'rửa, giặt', pos: 'động từ nhóm 1', exampleJa: 'まいばん、コップを あらいます。', exampleVi: 'Mỗi tối tôi rửa cốc.' },
    { term: 'なおします', romaji: 'naoshimasu', meaningVi: 'sửa, sửa lại (cho đúng)', pos: 'động từ nhóm 1', exampleJa: 'まちがえた こたえを なおします。', exampleVi: 'Tôi sửa lại câu trả lời sai.' },
    { term: 'ざんねん', romaji: 'zannen', meaningVi: 'tiếc, đáng tiếc', pos: 'tính từ な', exampleJa: 'らいしゅうの パーティーに いけません。ざんねんですね。', exampleVi: 'Tôi không đi được bữa tiệc tuần sau. Tiếc thật.' },
  ],
  grammar: [
    {
      code: 'l26-te-shimau',
      title: '〜てしまう — làm cho xong / tiếc nuối',
      formation: 'Vて + しまいます: たべて しまいます・わすれて しまいました (nói thân mật: 〜ちゃいます・〜ちゃった)',
      explanationVi:
        'てしまう là trợ động từ ghép sau động từ thể て, có hai sắc thái chính. (1) HOÀN TẤT: làm cho xong hẳn, dùng hết sạch — thường đi cùng ぜんぶ: ケーキを ぜんぶ たべて しまいました = "ăn cho hết sạch cái bánh". (2) TIẾC NUỐI・LỠ LÀM: sự cố không như ý muốn đã lỡ xảy ra — わすれて しまいました = "lỡ quên mất", こわして しまいました = "lỡ làm hỏng". Dù nghĩa nào, しまう vẫn là động từ nhóm 1 nên chia bình thường: しまいます・しまいました・しまいません. Phân biệt: てしまう KHÔNG có ý chuẩn bị (đó là ておく) và KHÔNG phải thử cho biết (đó là てみる).',
      examples: [
        { ja: 'ケーキを ぜんぶ たべて しまいました。', vi: 'Tôi ăn cho hết sạch cái bánh kem.', tokens: ['ケーキ', 'を', 'ぜんぶ', 'たべて', 'しまいました'] },
        { ja: 'かさを わすれて しまいました。', vi: 'Tôi lỡ quên mang cây dù.' },
        { ja: 'こんや、しゅくだいを して しまいます。', vi: 'Tối nay tôi sẽ làm cho xong bài tập.' },
        { ja: 'さいふを なくして しまいました。', vi: 'Tôi lỡ làm mất ví tiền.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'たべます → dạng thể て + しまう: "ăn cho hết sạch"',
          sentence: 'ケーキを ぜんぶ ___ しまいました。',
          options: ['たべて', 'たべって', 'たべた', 'たべます'],
          answerIndex: 0, explanationVi: 'たべます là động từ nhóm 2: bỏ ます thêm て → たべて, rồi ghép しまいました. たべって là lỗi chia của nhóm 1, còn たべた・たべます không phải thể て.',
        },
        {
          kind: 'choice', prompt: '「かさを わすれて しまいました。」 — người nói có cảm giác gì?',
          options: ['Vui vì mua được cây dù mới', 'Tiếc nuối vì đã lỡ quên cây dù', 'Định mua dù vào tuần sau', 'Không muốn mang dù đi'],
          answerIndex: 1, explanationVi: 'てしまう đi kèm sự cố (quên, làm mất, làm vỡ) thì mang sắc thái tiếc nuối: "lỡ quên mất rồi".',
        },
        {
          kind: 'fill', prompt: 'Điền trợ động từ đúng (Hôm qua tôi uống hết sạch phần nước)',
          sentence: 'きのう、ジュースを ぜんぶ のんで ___。',
          options: ['おきました', 'しまいました', 'みました', 'きました'],
          answerIndex: 1, explanationVi: 'ぜんぶ + のんで = "uống cho hết sạch" → てしまう. ておく là làm sẵn để chuẩn bị, てみる là thử — đều không khớp "uống hết".',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['でんしゃの なかで さいふを おとりて しまいました。', 'でんしゃの なかで さいふを おとして します。', 'でんしゃの なかで さいふを おとして しまいました。', 'でんしゃの なかで さいふを おとって しまいました。'],
          answerIndex: 2, explanationVi: 'おとします là nhóm 1 (おとす): す → して → おとして + しまいました. おとりて là cách chia nhóm 2 (sai), おとして します sai trợ động từ, おとって nhầm quy tắc す → って.',
        },
      ],
    },
    {
      code: 'l26-te-oku',
      title: '〜ておく — làm trước để chuẩn bị',
      formation: 'Vて + おきます: かって おきます・よやくして おきました (nói thân mật: 〜ときます)',
      explanationVi:
        'ておく = làm một việc NGAY BÂY GIỜ để CHUẨN BỊ cho tình huống sau này, cho đến lúc đó khỏi phải làm vội: きっぷを かって おきます = "mua vé sẵn từ bây giờ", đến hôm đi chỉ việc dùng. Thường xuất hiện cùng thời gian tương lai: あした・らいしゅう・こんや. So sánh nhanh: てしまう = làm cho xong hẳn (không quan tâm việc sau này), ておく = làm sẵn vì biết sau này sẽ cần. ておく còn dùng khi người nói chủ động sắp xếp để tiện cho người khác: しゅくだいを しておきました = tôi đã làm sẵn bài tập rồi.',
      examples: [
        { ja: 'でんしゃの きっぷを かって おきます。', vi: 'Tôi mua sẵn vé tàu điện.', tokens: ['でんしゃ', 'の', 'きっぷ', 'を', 'かって', 'おきます'] },
        { ja: 'パーティーの おかしを かって おきました。', vi: 'Tôi đã mua sẵn bánh cho bữa tiệc.' },
        { ja: 'ホテルを よやくして おきました。', vi: 'Tôi đã đặt sẵn phòng khách sạn.' },
        { ja: 'あしたの じゅんびを して おきます。', vi: 'Tôi chuẩn bị sẵn cho ngày mai.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'よみます → dạng thể て + おく: "đọc sẵn" từ tối nay',
          sentence: 'こんや、ほんを ___ おきます。',
          options: ['よみて', 'よんで', 'よって', 'よんだ'],
          answerIndex: 1, explanationVi: 'よみます là nhóm 1 (よむ): む → んで → よんで + おきます. よって là chia của よります, よんだ là thể た, よみて không tồn tại.',
        },
        {
          kind: 'choice', prompt: '「きっぷを かって おきます。」 có nghĩa là gì?',
          options: ['Mua vé từ trước để sẵn sàng cho chuyến đi', 'Lỡ làm mất vé nên phải mua lại', 'Thử mua một tấm vé xem sao', 'Mua vé xong rồi thì khỏi phải đi'],
          answerIndex: 0, explanationVi: 'ておく = làm sẵn ngay bây giờ để lúc cần chỉ việc dùng, không phải làm vội.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ (Vì tuần sau có bài test nên tối nay tôi học trước)',
          sentence: 'らいしゅう テスト___ ありますから、こんや べんきょうして おきます。',
          options: ['が', 'を', 'に', 'で'],
          answerIndex: 0, explanationVi: 'Cấu trúc tồn tại テストが あります cần が đánh dấu chủ ngữ; を là tân ngữ của động từ, に・で không dùng với あります.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['ばんごはんを つくりて おきます。', 'ばんごはんを つくって おくします。', 'ばんごはんを つくらって おきます。', 'ばんごはんを つくって おきます。'],
          answerIndex: 3, explanationVi: 'つくります là nhóm 1 (つくる): る → って → つくって + おきます. おく là động từ nên không ghép thêm する; つくりて・つくらって đều là chia sai.',
        },
      ],
    },
    {
      code: 'l26-te-miru',
      title: '〜てみる — thử làm',
      formation: 'Vて + みます: たべて みます・はいて みました',
      explanationVi:
        'てみる = THỬ làm một việc để xem kết quả, cảm giác hay phản ứng thế nào: この カレーを たべて みます = "ăn thử món cà ri này xem có ngon không". Ở đây みる là trợ động từ (nghĩa "xem/xem thử"), vẫn chia như động từ nhóm 2: てみます・てみました・てみません. Mẫu này kết hợp được với những cấu trúc đã học: たべて みても いいですか (thử... được không?), はいて みたいです (muốn thử...). Đừng lẫn てみる (thử làm) với てしまう (làm hết / tiếc nuối) và ておく (làm sẵn để chuẩn bị).',
      examples: [
        { ja: 'この カレーを たべて みます。', vi: 'Tôi thử ăn món cà ri này.', tokens: ['この', 'カレー', 'を', 'たべて', 'みます'] },
        { ja: 'はじめて すしを たべて みました。', vi: 'Tôi thử ăn sushi lần đầu tiên.' },
        { ja: 'この くすりを のんで みても いいですか。', vi: 'Tôi uống thử thuốc này được không?' },
        { ja: 'あたらしい くつを はいて みました。', vi: 'Tôi đi thử đôi giày mới.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'ききます → dạng thể て + みる: "nghe thử"',
          sentence: 'この うたを ___ みます。',
          options: ['きいて', 'ききて', 'きって', 'きく'],
          answerIndex: 0, explanationVi: 'ききます là nhóm 1 (きく): く → いて → きいて + みます. きって là chia của きります, ききて không tồn tại, きく là nguyên thể.',
        },
        {
          kind: 'fill', prompt: 'Điền trợ động từ đúng (Tôi thử đọc bộ truyện tranh này)',
          sentence: 'この まんがを よんで ___。',
          options: ['しまいます', 'おきます', 'みます', 'あります'],
          answerIndex: 2, explanationVi: 'Đọc để xem có hay không → thử làm → てみる. てしまう là làm hết/tiếc nuối, ておく là làm sẵn — không khớp "thử đọc".',
        },
        {
          kind: 'choice', prompt: 'Muốn nói "Tôi sẽ thử gọi điện xem sao", câu nào đúng?',
          options: ['でんわして しまいます。', 'でんわを みます。', 'でんわして おきます。', 'でんわして みます。'],
          answerIndex: 3, explanationVi: 'Thử làm → Vて + みます: でんわして みます. Lưu ý でんわを みます nghĩa là "nhìn chiếc điện thoại".',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['あたらしい くつを はいて みました。', 'あたらしい くつを はきって みました。', 'あたらしい くつを はいって みました。', 'あたらしい くつを はく みました。'],
          answerIndex: 0, explanationVi: 'はきます là nhóm 1 (はく): く → いて → はいて + みました. Trước みる bắt buộc là thể て, không dùng nguyên thể はく.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Quên dù ở công viên',
      situationVi: 'Tanaka hỏi Linh trông có vẻ lo lắng ở lớp.',
      lines: [
        { speaker: 'たなか', ja: 'リンさん、どうしましたか。', vi: 'Linh, bạn làm sao vậy?' },
        { speaker: 'リン', ja: 'こうえんで かさを わすれて しまいました。', vi: 'Tôi lỡ để quên dù ở công viên.' },
        { speaker: 'たなか', ja: 'それは こまりましたね。あしたも あめが ふりますよ。', vi: 'Khổ thật đấy. Ngày mai trời cũng mưa đấy.' },
        { speaker: 'リン', ja: 'ええ。こまって います。', vi: 'Vâng. Tôi đang bí lắm.' },
        { speaker: 'たなか', ja: 'じゃあ、この かさを かして あげます。', vi: 'Vậy thì tôi cho bạn mượn cây dù này.' },
        { speaker: 'リン', ja: 'すみません。じゃあ、かりても いいですか。', vi: 'Xin lỗi nhé. Vậy tôi mượn được không?' },
        { speaker: 'たなか', ja: 'ええ、どうぞ。だいじょうぶですよ。', vi: 'Được chứ. Cứ dùng đi, không sao đâu.' },
        { speaker: 'リン', ja: 'ありがとうございます。わたしは よく かさを なくします。', vi: 'Cảm ơn bạn. Tôi hay làm mất dù lắm.' },
        { speaker: 'たなか', ja: 'ええ。じゃあ、きをつけて くださいね。', vi: 'Đúng rồi. Thế thì cẩn thận nhé.' },
      ],
    },
    {
      titleVi: 'Chuẩn bị cho chuyến đi Tokyo',
      situationVi: 'Linh kể với Min về việc chuẩn bị chuyến du lịch tuần sau.',
      lines: [
        { speaker: 'リン', ja: 'ミンさん、らいしゅう とうきょうへ りょこうに いきます。', vi: 'Min, tuần sau mình đi du lịch Tokyo.' },
        { speaker: 'ミン', ja: 'いいですね。きっぷは かいましたか。', vi: 'Tuyệt đấy. Bạn mua vé chưa?' },
        { speaker: 'リン', ja: 'はい、もう かって おきました。', vi: 'Rồi, mình mua sẵn từ hôm trước.' },
        { speaker: 'ミン', ja: 'ホテルは よやくして おきましたか。', vi: 'Khách sạn bạn đã đặt trước chưa?' },
        { speaker: 'リン', ja: 'ええ、きのう よやくして おきました。', vi: 'Ừ, hôm qua mình đặt sẵn rồi.' },
        { speaker: 'ミン', ja: 'おべんとうは どうしますか。', vi: 'Còn cơm hộp thì sao?' },
        { speaker: 'リン', ja: 'まいあさ じゅんびして おきます。', vi: 'Mỗi sáng mình chuẩn bị sẵn.' },
        { speaker: 'ミン', ja: 'とうきょうで なにを したいですか。', vi: 'Ở Tokyo bạn muốn làm gì?' },
        { speaker: 'リン', ja: 'こうえんで さんぽします。それから、すしを たべて みます。', vi: 'Mình đi bộ ở công viên. Sau đó thử ăn sushi.' },
        { speaker: 'ミン', ja: 'いいですね。たのしい りょこうだと おもいます。', vi: 'Hay đấy. Tôi nghĩ đây sẽ là chuyến đi vui.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'ケーキを ぜんぶ たべて しまいました。', meaningVi: 'Tôi ăn cho hết sạch cái bánh kem.', choices: ['Tôi ăn hết sạch cái bánh kem', 'Tôi ăn thử một miếng bánh kem', 'Tôi mua sẵn cái bánh kem', 'Tôi làm mất cái bánh kem'], answerIndex: 0, dictation: true },
    { scriptJa: 'でんしゃの きっぷを かって おきます。', meaningVi: 'Tôi mua sẵn vé tàu điện.', choices: ['Tôi mua vé tàu cho xong việc', 'Tôi quên mất vé tàu', 'Tôi mua sẵn vé tàu để chuẩn bị', 'Tôi thử mua vé tàu'], answerIndex: 2, dictation: true },
    { scriptJa: 'この カレーを たべて みます。', meaningVi: 'Tôi thử ăn món cà ri này.', choices: ['Tôi ăn hết món cà ri này', 'Tôi thử ăn món cà ri này', 'Tôi nấu món cà ri này', 'Tôi không thích món cà ri'], answerIndex: 1 },
    { scriptJa: 'でんしゃの なかで かさを わすれて しまいました。', meaningVi: 'Tôi lỡ quên dù trong tàu điện.', choices: ['Tôi lỡ quên dù trong tàu điện', 'Tôi mang dù lên tàu', 'Tôi mua dù ở nhà ga', 'Tôi để sẵn dù trong tàu'], answerIndex: 0 },
    { scriptJa: 'あたらしい くつを はいて みました。', meaningVi: 'Tôi đi thử đôi giày mới.', choices: ['Tôi làm bẩn đôi giày mới', 'Tôi định mua giày mới', 'Tôi đi thử đôi giày mới', 'Tôi làm mất đôi giày mới'], answerIndex: 2 },
  ],
  reading: {
    titleVi: 'Một ngày nhiều chuyện của Linh',
    lines: [
      { text: 'きょうは いそがしかったです。', vi: 'Hôm nay tôi bận rộn.' },
      { text: 'あさ、でんしゃの なかで かさを わすれて しまいました。', vi: 'Sáng nay tôi lỡ để quên dù trong tàu điện.' },
      { text: 'がっこうで コップを こわして しまいました。', vi: 'Ở trường tôi lại lỡ làm vỡ chiếc cốc.' },
      { text: 'でも、ともだちが 「だいじょうぶですよ」と 言いました。', vi: 'Nhưng bạn tôi nói: "Không sao đâu".' },
      { text: 'よる、にほんごの べんきょうを して おきました。', vi: 'Buổi tối, tôi học sẵn bài tiếng Nhật.' },
      { text: 'それから、ともだちの まんがを よんで みました。', vi: 'Sau đó, tôi thử đọc bộ truyện tranh của bạn.' },
      { text: 'まんがは とても おもしろかったです。', vi: 'Bộ truyện rất thú vị.' },
      { text: 'つかれましたが、よるは たのしかったです。', vi: 'Tôi mệt nhưng buổi tối thật vui.' },
    ],
    questions: [
      { questionVi: 'Ở trường, người viết đã làm vỡ vật gì?', choices: ['Chiếc cốc', 'Cái dù', 'Cuốn truyện tranh', 'Chiếc đồng hồ'], answerIndex: 0, explanationVi: 'Câu 3: がっこうで コップを こわして しまいました — てしまう diễn tả sự cố "lỡ làm vỡ".' },
      { questionVi: 'Sau khi học bài buổi tối, người viết làm gì?', choices: ['Đi ngủ ngay', 'Thử đọc truyện tranh của bạn', 'Xem tivi', 'Gọi điện cho bạn'], answerIndex: 1, explanationVi: 'Câu 6: それから (sau đó) + まんがを よんで みました — てみる = thử đọc.' },
      { questionVi: 'Câu nào ĐÚNG theo đoạn văn?', choices: ['Người viết làm mất ví tiền', 'Bạn của người viết nói "Không sao đâu"', 'Người viết quên cặp sách ở trường', 'Buổi tối người viết rất buồn'], answerIndex: 1, explanationVi: 'Câu 4: 「だいじょうぶですよ」と 言いました. Người viết quên dù (câu 2), không phải ví hay cặp; và buổi tối rất vui (câu 8).' },
    ],
  },
  speakSentences: [
    { ja: 'かさを わすれて しまいました。', vi: 'Tôi lỡ quên mang cây dù.' },
    { ja: 'きっぷを かって おきます。', vi: 'Tôi mua sẵn vé.' },
    { ja: 'この カレーを たべて みます。', vi: 'Tôi thử ăn món cà ri này.' },
    { ja: 'しゅくだいを ぜんぶ して おきました。', vi: 'Tôi đã làm xong hết bài tập từ trước.' },
  ],
  translatePairs: [
    { ja: 'ケーキを ぜんぶ たべて しまいました。', vi: 'Tôi ăn cho hết sạch cái bánh kem.', tokens: ['ケーキ', 'を', 'ぜんぶ', 'たべて', 'しまいました'], distractors: ['おきます'] },
    { ja: 'でんしゃの きっぷを かって おきます。', vi: 'Tôi mua sẵn vé tàu điện.', tokens: ['でんしゃ', 'の', 'きっぷ', 'を', 'かって', 'おきます'], distractors: ['みます'] },
    { ja: 'この カレーを たべて みます。', vi: 'Tôi thử ăn món cà ri này.', tokens: ['この', 'カレー', 'を', 'たべて', 'みます'], distractors: ['しまいます'] },
    { ja: 'らいしゅう テストが ありますから、こんや べんきょうして おきます。', vi: 'Vì tuần sau có bài test nên tối nay tôi học trước.', tokens: ['らいしゅう', 'テスト', 'が', 'あります', 'から', 'こんや', 'べんきょう', 'して', 'おきます'], distractors: ['しまいます'] },
    { ja: 'さいふを なくして しまいました。', vi: 'Tôi lỡ làm mất ví tiền.', tokens: ['さいふ', 'を', 'なくして', 'しまいました'], distractors: ['おきました'] },
  ],
  kanji: ['仕', '置', '終'],
}
