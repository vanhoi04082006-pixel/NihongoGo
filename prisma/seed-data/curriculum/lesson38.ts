/**
 * NihongoGo — Bài 38: 〜のに — Mặc dù... nhưng...
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson38: CurriculumLesson = {
  order: 38,
  slug: 'l38-no-ni',
  title: '〜のに — Mặc dù... nhưng...',
  titleJa: '〜のに',
  description: 'Diễn đạt ý tương phản kèm cảm xúc nuối tiếc với のに.',
  learningObjectives: [
    'Dùng のに nối hai vế trái ngược',
    'Phân biệt のに với が',
    'Diễn tả cảm xúc tiếc nuối',
  ],
  grammarTopics: ['〜のに (tương phản kèm cảm xúc)', 'Phân biệt が・のに'],
  vocabularyTopics: ['Tình huống trái mong đợi', 'Cảm xúc tiếc nuối'],
  kanjiTopics: ['Kanji tương phản (秋・冬・昔)'],
  difficulty: 'ELEMENTARY',
  vocabulary: [
    { term: '秋', reading: 'あき', romaji: 'aki', meaningVi: 'mùa thu', pos: 'danh từ', exampleJa: '秋の よるは すずしいです。', exampleVi: 'Đêm mùa thu mát mẻ.' },
    { term: '冬', reading: 'ふゆ', romaji: 'fuyu', meaningVi: 'mùa đông', pos: 'danh từ', exampleJa: '冬の あさは とても さむいです。', exampleVi: 'Buổi sáng mùa đông rất lạnh.' },
    { term: '昔', reading: 'むかし', romaji: 'mukashi', meaningVi: 'ngày xưa, thuở trước', pos: 'danh từ', exampleJa: '昔、ここは うみでした。', exampleVi: 'Ngày xưa nơi đây là biển.' },
    { term: '昔話', reading: 'むかしばなし', romaji: 'mukashibanashi', meaningVi: 'truyện cổ tích, chuyện ngày xưa', pos: 'danh từ', exampleJa: 'おばあさんの 昔話が すきでした。', exampleVi: 'Hồi nhỏ tôi thích chuyện kể của bà.' },
    { term: '冬休み', reading: 'ふゆやすみ', romaji: 'fuyuyasumi', meaningVi: 'kỳ nghỉ đông', pos: 'danh từ', exampleJa: '冬休みに 国へ かえります。', exampleVi: 'Kỳ nghỉ đông tôi sẽ về nước.' },
    { term: 'なつかしい', romaji: 'natsukashii', meaningVi: 'hoài niệm, thấy thân thuộc (chuyện cũ)', pos: 'tính từ い', exampleJa: '昔の しゃしんは とても なつかしいです。', exampleVi: 'Ảnh ngày xưa thật khiến người ta hoài niệm.' },
    { term: 'くやしい', romaji: 'kuyashii', meaningVi: 'tiếc hận, uất ức', pos: 'tính từ い', exampleJa: 'しあいに まけて、くやしいです。', exampleVi: 'Thua trận nên tôi thấy uất ức.' },
    { term: 'おしい', romaji: 'oshii', meaningVi: 'tiếc (suýt thành mà hụt)', pos: 'tính từ い', exampleJa: 'おしい! あと 一てんでした。', exampleVi: 'Tiếc quá! Chỉ thiếu một điểm nữa là xong.' },
    { term: 'なみだ', romaji: 'namida', meaningVi: 'nước mắt', pos: 'danh từ', exampleJa: 'うれしくて なみだが でました。', exampleVi: 'Vui đến mức rơi nước mắt.' },
    { term: 'がっかりします', romaji: 'gakkari shimasu', meaningVi: 'thất vọng, chán nản', pos: 'động từ nhóm 3', exampleJa: 'かのじょは ニュースを きいて、がっかりします。', exampleVi: 'Cô ấy nghe tin và rất thất vọng.' },
    { term: 'れんしゅう', romaji: 'renshū', meaningVi: 'luyện tập', pos: 'danh từ', exampleJa: 'まいにち 一じかん ピアノを れんしゅうします。', exampleVi: 'Mỗi ngày tôi luyện đàn piano một tiếng.' },
    { term: 'とうとう', romaji: 'tōtō', meaningVi: 'rốt cuộc, cuối cùng cũng (kết quả ngoài ý)', pos: 'phó từ', exampleJa: 'とうとう しあいに まけて しまいました。', exampleVi: 'Rốt cuộc là thua trận luôn.' },
    { term: 'それなのに', romaji: 'sore na no ni', meaningVi: 'vậy mà, mặc dù vậy', pos: 'liên từ', exampleJa: 'まいにち れんしゅうしました。それなのに、まけました。', exampleVi: 'Mỗi ngày đều luyện tập. Vậy mà vẫn thua.' },
    { term: 'もったいない', romaji: 'mottainai', meaningVi: 'phí phạm, tiếc của', pos: 'tính từ い', exampleJa: 'のこりの ごはんを すてるのは もったいないです。', exampleVi: 'Vứt phần cơm còn lại thì phí lắm.' },
    { term: 'つもります', romaji: 'tsumorimasu', meaningVi: 'đọng, phủ dày (tuyết)', pos: 'động từ nhóm 1', exampleJa: 'やまに ゆきが つもります。', exampleVi: 'Trên núi tuyết đọng dày.' },
    { term: 'こおり', romaji: 'kōri', meaningVi: 'băng', pos: 'danh từ', exampleJa: 'あさは みずが こおりに なりました。', exampleVi: 'Buổi sáng nước đã đóng băng.' },
    { term: 'みごと', romaji: 'migoto', meaningVi: 'tuyệt đẹp, xuất sắc', pos: 'tính từ な', exampleJa: 'かれは みごとに かちました。', exampleVi: 'Anh ấy đã thắng một cách xuất sắc.' },
    { term: 'マイナス', romaji: 'mainasu', meaningVi: 'âm (nhiệt độ), trừ', pos: 'danh từ', exampleJa: 'けさの 気温は マイナス二どでした。', exampleVi: 'Nhiệt độ sáng nay là âm 2 độ.' },
  ],
  grammar: [
    {
      code: 'l38-no-ni',
      title: '〜のに — mặc dù… vậy mà… (kèm tiếc nuối)',
      formation: 'V thể thường + のに: れんしゅうしたのに・こないのに; い-Adj + のに: あついのに; な-Adj + なのに: かんたんなのに; N + なのに: あめ なのに',
      explanationVi:
        'のに nối hai mệnh đề TRÁI NGƯỢC nhau giống が/けど đã học, nhưng luôn kèm SẮC THÁI CẢM XÚC: tiếc nuối, thất vọng, hay lấy làm lạ ("rõ ràng… vậy mà…"). Vế trước nêu hành động/tình huống lẽ ra phải dẫn tới kết quả tốt (hoặc điều người nói kỳ vọng), vế sau nêu kết quả NGOÀI Ý MUỐN: なんべんも れんしゅうしたのに、しあいに まけました (tập bao nhiêu lần vậy mà vẫn thua). Cách nối: mệnh đề trước のに ở THỂ THƯỜNG với mọi thì (quá khứ ふったのに, phủ định こないのに); tính từ い nguyên dạng (あついのに); điểm đặc biệt cần nhớ: DANH TỪ và tính từ な phải thêm な (あめ なのに・かんたんなのに). KHÔNG dùng ます-form trước のに. Vì のに mang cảm xúc, câu thường nghe như lời tiếc hoặc phàn nàn nhẹ.',
      examples: [
        { ja: 'なんべんも れんしゅうしたのに、しあいに まけました。', vi: 'Dù đã luyện tập nhiều lần nhưng vẫn thua trận đấu.', tokens: ['なんべんも', 'れんしゅうした', 'のに', 'しあいに', 'まけました'] },
        { ja: 'あめ なのに、こうえんで あそんで いる こどもが います。', vi: 'Trời mưa vậy mà vẫn có trẻ con đang chơi ở công viên.' },
        { ja: 'くすりを のんだのに、なおりません。', vi: 'Đã uống thuốc vậy mà bệnh không khỏi.' },
        { ja: 'この ケーキは 高いのに、おいしくないです。', vi: 'Chiếc bánh này đắt vậy mà không ngon.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'Danh từ あめ + のに ghép thế nào?',
          sentence: 'あめ ___、えんそくに いきました。',
          options: ['なのに', 'のに', 'だのに', 'なので'],
          answerIndex: 0, explanationVi: 'Danh từ phải thêm な trước のに: あめ なのに ("trời mưa vậy mà"). だのに sai; のに trống chỉ dùng sau động từ và tính từ い.',
        },
        {
          kind: 'particle', prompt: 'Chọn cách nối (Đề này dễ vậy mà vẫn làm sai)',
          sentence: 'この もんだいは かんたん___のに、まちがえました。',
          options: ['な', 'に', 'の', 'で'],
          answerIndex: 0, explanationVi: 'Tính từ な giữ な khi nối のに: かんたんなのに. に・の・で đều là ghép sai với tính từ な.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['この ケーキは 高いのに、おいしくないです。', 'この ケーキは 高いだのに、おいしくないです。', 'この ケーキは 高いなのに、おいしくないです。', 'この ケーキは 高いのにで、おいしくないです。'],
          answerIndex: 0, explanationVi: 'Tính từ い nguyên dạng + のに: 高いのに. だ・な không chen vào tính từ い (な chỉ dành cho tính từ な và danh từ); のにで là ghép thừa.',
        },
        {
          kind: 'fill', prompt: 'Điền (Dù học rất chăm nhưng rớt kỳ thi — sắc thái tiếc nuối)',
          sentence: 'よく べんきょうした___、しけんに おちました。',
          options: ['のに', 'から', 'でも', 'まで'],
          answerIndex: 0, explanationVi: 'のに nối hai vế trái ngược KÈM tiếc nuối. から nêu lý do (nghĩa bị lật ngược); でも chỉ đứng đầu câu; まで là "đến tận".',
        },
        {
          kind: 'choice', prompt: '「なんべんも れんしゅうしたのに、しあいに まけました。」 — người nói có cảm xúc gì?',
          options: ['Tiếc nuối, thất vọng vì kết quả trái kỳ vọng', 'Vui vì được luyện tập nhiều', 'Hoàn toàn trung tính, không cảm xúc', 'Ngạc nhiên vì thắng trận'],
          answerIndex: 0, explanationVi: 'のに luôn kèm sắc thái tiếc/phiền/lấy làm lạ — đây là điểm khác biệt lớn nhất so với が・けど.',
        },
      ],
    },
    {
      code: 'l38-no-ni-keishiki',
      title: 'のに với quá khứ・phủ định — vế sau là kết quả trái ngược',
      formation: 'Quá khứ: [V-た・かった] + のに: まったのに・あつかったのに; phủ định: [V-ない・くない] + のに: こないのに・あつくないのに; vế sau: kết quả/đánh giá ngoài dự đoán',
      explanationVi:
        'Cả hai vế のに đổi thời gian và phủ định TỰ DO giống とき đã học. Nói về việc đã xảy ra thì vế trước dùng quá khứ: 一じかんも まったのに (đã đợi hơn một tiếng vậy mà), よく ねたのに (dù đã ngủ đủ); phủ định nằm trong vế trước: ぜんぜん べんきょうしなかったのに (dù chẳng học gì). Vế SAU のに luôn là KẾT QUẢ hoặc ĐÁNH GIÁ trái với điều vế trước tạo ra kỳ vọng — thường là điều không vui (まけました・きませんでした・なおりません) hoặc điều khiến người nói lấy làm lạ. Nhớ nguyên tắc vàng: mệnh đề trước のに ở THỂ THƯỜNG (bỏ ます), danh từ/tính từ な thêm な; còn vế sau thường giữ ます-form lịch sự như câu kể bình thường.',
      examples: [
        { ja: '一じかんも まったのに、ともだちは きませんでした。', vi: 'Đã đợi hơn một tiếng vậy mà bạn không đến.', tokens: ['一じかんも', 'まったのに', 'ともだちは', 'きませんでした'] },
        { ja: 'よく ねたのに、あさも ねむいです。', vi: 'Dù đã ngủ đủ giấc mà sáng ra vẫn buồn ngủ.' },
        { ja: 'あの かしゅは ゆうめいなのに、わたしは しりませんでした。', vi: 'Ca sĩ ấy nổi tiếng vậy mà tôi lại không biết.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'まちます → quá khứ + のに (dù đã đợi)',
          sentence: '三十分も ___のに、バスが きませんでした。',
          options: ['まった', 'まち', 'まって', 'まちます'],
          answerIndex: 0, explanationVi: 'Vế trước のに chia đúng thời gian: việc đã xảy ra dùng quá khứ thể thường まったのに. まち/まって/まちます không phải quá khứ thể thường.',
        },
        {
          kind: 'fill', prompt: 'Điền (Dù chẳng học gì mà điểm vẫn tốt)',
          sentence: 'ぜんぜん べんきょう___のに、てんが よかったです。',
          options: ['しなかった', 'しません', 'しなくて', 'しないだった'],
          answerIndex: 0, explanationVi: 'Phủ định quá khứ ở thể thường: べんきょうしなかったのに. しません là ます-form; しないだった là ghép sai.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['日本語を 六ねん ならったのに、まだ はなせません。', '日本語を 六ねん ならいのに、まだ はなせません。', '日本語を 六ねん ならったなので、まだ はなせません。', '日本語を 六ねん ならいますのに、まだ はなせません。'],
          answerIndex: 0, explanationVi: 'Động từ quá khứ thể thường + のに: ならったのに. ならいのに sai gốc động từ; ならったなので thừa な; ます-form không đứng trước のに.',
        },
        {
          kind: 'choice', prompt: 'Vế SAU のに thường chứa nội dung gì?',
          options: ['Kết quả trái với điều vế trước tạo ra kỳ vọng', 'Lý do khiến vế trước xảy ra', 'Một lời mời đi cùng', 'Câu chào xã giao'],
          answerIndex: 0, explanationVi: 'のに = "A vậy mà B" — B phải là kết quả/đánh giá ngoài dự đoán so với A. Nếu B là lý do của A thì phải dùng から.',
        },
      ],
    },
    {
      code: 'l38-no-ni-vs-ga',
      title: 'Phân biệt のに・が・けど — trung tính hay kèm cảm xúc',
      formation: 'が: trang trọng, trung tính (ふったが、いきました); けど: thân mật, trung tính (ふったけど、いきました); のに: bắt buộc kèm tiếc nuối/lấy làm lạ (ふったのに、いきました)',
      explanationVi:
        'が/けど chỉ nêu hai sự việc trái ngược một cách TRUNG TÍNH — người nói không tỏ thái độ. のに thì BẮT BUỘC kèm cảm xúc: tiếc nuối, thất vọng, khó hiểu, thậm chí trách móc. Vì vậy câu trung tính kiểu 「きょうは あめですが、えんそくは たのしかったです」 (trời mưa nhưng dã ngoại vẫn vui — kể lại bình thường) nếu đổi thành あめなのに sẽ nghe như người nói khó chịu ("mưa thế mà vẫn vui sao"). Ngược lại, khi muốn người nghe CẢM NHẬN sự tiếc nuối thì のに là lựa chọn đúng: なんども でんわを かけたのに、だれも でませんでした. が dùng được cả văn viết trang trọng; けど thiên về văn nói; のに chủ yếu văn nói và luôn đậm màu cảm xúc. Ngoài ra それなのに đứng đầu câu với nghĩa "vậy mà" cũng mang sắc thái y như vậy.',
      examples: [
        { ja: 'かのじょは 日本語が じょうずなのに、いつも 「まだ へたです」と いいます。', vi: 'Cô ấy giỏi tiếng Nhật vậy mà lúc nào cũng nói "tôi vẫn dốt".' },
        { ja: 'なんども でんわを かけたのに、だれも でませんでした。', vi: 'Gọi điện mấy lần vậy mà không ai bắt máy.', tokens: ['なんども', 'でんわを', 'かけたのに', 'だれも', 'でませんでした'] },
        { ja: 'きょうは あめですが、えんそくは たのしかったです。', vi: 'Hôm nay trời mưa nhưng buổi dã ngoại vẫn vui. (が: trung tính, không phàn nàn)' },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Câu nào nghe như lời PHÀN NÀN, tiếc nuối?',
          options: ['なんども れんしゅうしたのに、しあいに まけました。', 'なんども れんしゅうしましたが、しあいに まけました。', 'なんども れんしゅうしましたから、しあいに まけました。', 'しあいの まえに れんしゅうしました。'],
          answerIndex: 0, explanationVi: 'Chỉ のに mang sắc thái cảm xúc tiếc/phiền. が nối tương phản trung tính; から nêu lý do; câu cuối chỉ kể một sự việc.',
        },
        {
          kind: 'fill', prompt: 'Điền (Trời mưa nhưng dã ngoại vẫn vui — kể lại trung tính, không phàn nàn)',
          sentence: 'きょうは あめ___、えんそくは たのしかったです。',
          options: ['ですが', 'なのに', 'だから', 'でしたら'],
          answerIndex: 0, explanationVi: 'Trung tính → が. Nếu dùng なのに câu sẽ thành lời khó chịu ("mưa thế mà vẫn vui sao"), trái với ý kể lại bình thường.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['日よう日なのに、かいしゃに いきます。', '日よう日だのに、かいしゃに いきます。', '日よう日のに、かいしゃに いきます。', '日よう日なのにで、かいしゃに いきます。'],
          answerIndex: 0, explanationVi: 'Danh từ + なのに: 日よう日なのに ("Chủ nhật vậy mà vẫn đi công ty"). だのに・のに trống・のにで đều sai ghép.',
        },
        {
          kind: 'choice', prompt: '「くすりを のんだのに、なおりません。」 — nếu thay のに bằng が thì sắc thái thay đổi thế nào?',
          options: ['Câu trở nên trung tính, mất hẳn ý tiếc/phiền', 'Câu sai ngữ pháp ngay lập tức', 'Nghĩa y hệt, không khác gì', 'Câu trở nên lịch sự hơn nhiều'],
          answerIndex: 0, explanationVi: 'のんだが なおりません vẫn đúng ngữ pháp nhưng chỉ trình bày hai sự việc trái ngược; のに mới truyền được thái độ "uống thuốc rồi vậy mà chẳng khỏi, phiền thật".',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Trận đấu hôm qua',
      situationVi: 'Linh kể với Min về trận đấu đã thua trong tiếc nuối.',
      lines: [
        { speaker: 'ミン', ja: 'リンさん、きのうの しあいは どうでしたか。', vi: 'Linh, trận đấu hôm qua thế nào?' },
        { speaker: 'リン', ja: 'まけました。……くやしいです。', vi: 'Thua rồi.… Uất thật.' },
        { speaker: 'ミン', ja: 'そうですか。みんな なんども れんしゅうしましたからね。', vi: 'Vậy à. Cả đội đã luyện tập bao nhiêu lần rồi mà.' },
        { speaker: 'リン', ja: 'ええ。まいにち 三じかんも れんしゅうしたのに、まけました。', vi: 'Ừ. Mỗi ngày luyện tập đến ba tiếng vậy mà vẫn thua.' },
        { speaker: 'ミン', ja: 'むこうの チームは とても つよかったですか。', vi: 'Đội đối thủ có mạnh không?' },
        { speaker: 'リン', ja: 'いいえ、つよく なかったです。わたしたちの ミスが おおかったです。', vi: 'Không mạnh lắm. Lỗi của chính đội mình mới nhiều.' },
        { speaker: 'ミン', ja: 'そうですか。……もう すこしで かてましたか。', vi: 'Vậy à.… Suýt thắng được à?' },
        { speaker: 'リン', ja: 'ええ、もう すこしで かてました。おしかったです。', vi: 'Ừ, suýt nữa là thắng. Tiếc thật.' },
        { speaker: 'ミン', ja: 'でも、いい けいけんに なると おもいますよ。', vi: 'Nhưng tôi nghĩ đó sẽ là kinh nghiệm tốt đấy.' },
        { speaker: 'リン', ja: 'ありがとうございます。つぎは かてる ように がんばります。', vi: 'Cảm ơn bạn. Lần sau tôi sẽ cố gắng để thắng được.' },
      ],
    },
    {
      titleVi: 'Mùa đông đầu tiên',
      situationVi: 'Tanaka và Linh trò chuyện về mùa đông đầu tiên ở Tokyo và đợt tuyết sắp tới.',
      lines: [
        { speaker: 'たなか', ja: 'リンさん、日本の 冬は はじめてですか。', vi: 'Linh này, đây là lần đầu bạn trải qua mùa đông ở Nhật à?' },
        { speaker: 'リン', ja: 'はい。ベトナムでは ゆきが ふりませんから、ゆきが たのしみです。', vi: 'Vâng. Ở Việt Nam không có tuyết nên tôi rất mong ngắm tuyết.' },
        { speaker: 'たなか', ja: 'きょうは 冬なのに、ぜんぜん さむくないですね。', vi: 'Hôm nay là mùa đông vậy mà chẳng lạnh chút nào nhỉ.' },
        { speaker: 'リン', ja: 'ほんとうですね。でも、ニュースでは あしたから さむく なる そうです。', vi: 'Đúng thật. Nhưng theo bản tin, từ mai trời sẽ lạnh lên.' },
        { speaker: 'たなか', ja: 'ゆきが ふる かもしれませんよ。', vi: 'Có khi lại có tuyết đấy.' },
        { speaker: 'リン', ja: 'ゆき! ぜったいに みたいです。', vi: 'Tuyết! Nhất định tôi phải xem.' },
        { speaker: 'たなか', ja: 'でも、ゆきの 日は でんしゃが おくれる かもしれませんから、九じより 早く でかけましょう。', vi: 'Nhưng ngày có tuyết tàu điện có thể trễ, nên mình ra sớm hơn 9 giờ nhé.' },
        { speaker: 'リン', ja: 'はい。コートも てぶくろも もう 買いました。', vi: 'Vâng. Áo khoác và găng tay tôi mua sẵn rồi.' },
        { speaker: 'たなか', ja: 'いい じゅんびですね。冬休みに 買いましたか。', vi: 'Chuẩn bị kỹ thế. Bạn mua trong kỳ nghỉ đông à?' },
        { speaker: 'リン', ja: 'ええ。さむいのに、なぜか 冬が すきに なる と おもいます。', vi: 'Ừ. Lạnh thế mà không hiểu sao tôi nghĩ mình sẽ thích mùa đông.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'なんども れんしゅうしたのに、しあいに まけました。', meaningVi: 'Dù đã luyện tập nhiều lần nhưng vẫn thua trận đấu.', choices: ['Luyện tập nhiều nên đã thắng', 'Dù luyện tập nhiều nhưng vẫn thua', 'Không luyện tập nên thua', 'Nghe nói trận đấu bị hủy'], answerIndex: 1, dictation: true },
    { scriptJa: '日よう日なのに、かいしゃで はたらいて います。', meaningVi: 'Ngày Chủ nhật vậy mà vẫn đang làm việc ở công ty.', choices: ['Chủ nhật nghỉ ngơi thoải mái', 'Chủ nhật vậy mà vẫn đang làm việc', 'Sắp nghỉ việc ở công ty', 'Công ty đóng cửa vào Chủ nhật'], answerIndex: 1, dictation: true },
    { scriptJa: 'くすりを のんだのに、なおりません。', meaningVi: 'Đã uống thuốc vậy mà bệnh không khỏi.', choices: ['Uống thuốc rồi khỏi ngay', 'Đã uống thuốc vậy mà không khỏi', 'Tôi không uống thuốc', 'Viên thuốc rất đắt'], answerIndex: 1 },
    { scriptJa: 'きょうは 冬なのに、あたたかいですね。', meaningVi: 'Hôm nay là mùa đông vậy mà trời ấm nhỉ.', choices: ['Mùa đông mà ấm một cách lạ', 'Mùa đông rất lạnh', 'Mùa hè nóng nực', 'Nghe nói mùa đông ấm'], answerIndex: 0 },
  ],
  reading: {
    titleVi: 'Thư gửi mẹ',
    lines: [
      { text: 'とうきょうの 冬が はじまりました。', vi: 'Mùa đông ở Tokyo đã bắt đầu.' },
      { text: 'きょう、ベトナムの 母に 手紙を かきました。', vi: 'Hôm nay tôi viết thư cho mẹ ở Việt Nam.' },
      { text: '母は 「日本の 冬は さむいでしょう」と しんぱいして います。', vi: 'Mẹ đang lo lắng: "Mùa đông Nhật Bản lạnh lắm nhỉ".' },
      { text: 'ほんとうは さむいです。コートを きて いるのに、てが つめたいです。', vi: 'Thật ra đúng là lạnh. Dù đang mặc áo khoác mà tay vẫn lạnh cóng.' },
      { text: 'でも、はじめて 見る ゆきは とても きれいです。', vi: 'Nhưng trận tuyết lần đầu nhìn thấy thật rất đẹp.' },
      { text: '子どもの とき、ゆきの 昔話を よみました。', vi: 'Hồi nhỏ tôi từng đọc truyện cổ tích về tuyết.' },
      { text: '今、その 昔話を おもいだして、なつかしく なります。', vi: 'Bây giờ nhớ lại chuyện ngày xưa ấy, tôi thấy hoài niệm.' },
      { text: '冬休みに 国へ かえりますから、日本の ゆきの しゃしんを たくさん 見せたいです。', vi: 'Kỳ nghỉ đông tôi sẽ về nước, nên muốn cho mẹ xem thật nhiều ảnh tuyết Nhật Bản.' },
    ],
    questions: [
      { questionVi: 'Ai đang lo lắng trong bức thư?', choices: ['Mẹ của người viết', 'Người viết', 'Thầy giáo tiếng Nhật', 'Bạn cùng phòng'], answerIndex: 0, explanationVi: 'Dòng 3: 母は 「日本の 冬は さむいでしょう」と しんぱいして います — mẹ lo mùa đông Nhật lạnh.' },
      { questionVi: 'Dòng 「コートを きて いるのに、てが つめたいです」 cho thấy điều gì?', choices: ['Dù đang mặc áo khoác, tay vẫn lạnh — kèm ý tiếc/lấy làm lạ', 'Vì mặc áo nên tay rất ấm', 'Chiếc áo khoác bị mất rồi', 'Tay lạnh vì không có áo'], answerIndex: 0, explanationVi: 'のに nối hai vế trái ngược KÈM cảm xúc: mặc áo rồi vậy mà tay vẫn lạnh — nghe như lời tiếc nhẹ.' },
      { questionVi: 'Người viết định làm gì trong kỳ nghỉ đông?', choices: ['Về Việt Nam và cho mẹ xem ảnh tuyết', 'Ở lại Tokyo đi làm thêm', 'Học thêm tiếng Nhật', 'Đi trượt tuyết cùng bạn'], answerIndex: 0, explanationVi: 'Dòng cuối: 冬休みに 国へ かえりますから…しゃしんを 見せたいです.' },
    ],
  },
  speakSentences: [
    { ja: 'なんども れんしゅうしたのに、しあいに まけました。', vi: 'Dù đã luyện tập nhiều lần nhưng vẫn thua trận đấu.' },
    { ja: '日よう日なのに、はたらいて います。', vi: 'Ngày Chủ nhật vậy mà vẫn đang làm việc.' },
    { ja: 'くすりを のんだのに、なおりません。', vi: 'Đã uống thuốc vậy mà bệnh không khỏi.' },
    { ja: 'きょうは 冬なのに、あたたかいですね。', vi: 'Hôm nay là mùa đông vậy mà trời ấm nhỉ.' },
  ],
  translatePairs: [
    { ja: 'なんども れんしゅうしたのに、しあいに まけました。', vi: 'Dù đã luyện tập nhiều lần nhưng vẫn thua trận đấu.', tokens: ['なんども', 'れんしゅうした', 'のに', 'しあいに', 'まけました'], distractors: ['けど'] },
    { ja: 'あめ なのに、えんそくに いきました。', vi: 'Trời mưa vậy mà vẫn đi dã ngoại.', tokens: ['あめ', 'なのに', 'えんそくに', 'いきました'], distractors: ['ですが'] },
    { ja: 'この ケーキは 高いのに、おいしくないです。', vi: 'Chiếc bánh này đắt vậy mà không ngon.', tokens: ['この', 'ケーキ', 'は', '高い', 'のに', 'おいしくないです'], distractors: ['おいしいです'] },
    { ja: 'くすりを のんだのに、なおりません。', vi: 'Đã uống thuốc vậy mà bệnh không khỏi.', tokens: ['くすり', 'を', 'のんだのに', 'なおりません'], distractors: ['のみます'] },
    { ja: '日よう日なのに、かいしゃに いきます。', vi: 'Ngày Chủ nhật vậy mà vẫn đi công ty.', tokens: ['日よう日', 'なのに', 'かいしゃに', 'いきます'], distractors: ['でした'] },
  ],
  kanji: ['秋', '冬', '昔'],
}
