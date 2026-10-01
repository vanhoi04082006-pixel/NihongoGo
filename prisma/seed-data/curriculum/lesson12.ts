/**
 * NihongoGo — Bài 12: 〜たい (Mong muốn — たい・たくない・たかった).
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson12: CurriculumLesson = {
  order: 12,
  slug: 'l12-mong-muon',
  title: 'Mong muốn — 〜たい',
  titleJa: '〜たい',
  description: 'Bày tỏ mong muốn làm việc gì đó bằng mẫu 〜たい.',
  learningObjectives: [
    'Nói mong muốn với 〜たい',
    'Phủ định và quá khứ của 〜たい',
    'Hỏi về mong muốn của người khác',
  ],
  grammarTopics: ['〜たい (muốn làm gì)', 'Phủ định 〜たくないです', 'Quá khứ 〜たかったです'],
  vocabularyTopics: ['Ước mơ và kế hoạch', 'Món ăn và điểm đến yêu thích'],
  kanjiTopics: ['Kanji hoạt động thường ngày (飲・買・持)'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: '飲みます', reading: 'のみます', romaji: 'nomimasu', meaningVi: 'uống', pos: 'động từ nhóm 1', exampleJa: 'まいにち あさ コーヒーを のみます。', exampleVi: 'Mỗi sáng tôi uống cà phê.' },
    { term: '買います', reading: 'かいます', romaji: 'kaimasu', meaningVi: 'mua', pos: 'động từ nhóm 1', exampleJa: 'デパートで くつを かいます。', exampleVi: 'Tôi mua giày ở cửa hàng bách hóa.' },
    { term: '持ちます', reading: 'もちます', romaji: 'mochimasu', meaningVi: 'cầm, mang theo', pos: 'động từ nhóm 1', exampleJa: 'まいにち かばんを もちます。', exampleVi: 'Mỗi ngày tôi mang theo cặp sách.' },
    { term: 'くつ', romaji: 'kutsu', meaningVi: 'đôi giày', pos: 'danh từ', exampleJa: 'デパートで くつを かいます。', exampleVi: 'Tôi mua giày ở cửa hàng bách hóa.' },
    { term: 'なつ', romaji: 'natsu', meaningVi: 'mùa hè', pos: 'danh từ', exampleJa: 'なつは とても あついです。', exampleVi: 'Mùa hè rất nóng.' },
    { term: 'あき', romaji: 'aki', meaningVi: 'mùa thu', pos: 'danh từ', exampleJa: 'あきの おまつりは にぎやかです。', exampleVi: 'Lễ hội mùa thu nhộn nhịp.' },
    { term: 'スキー', romaji: 'sukī', meaningVi: 'trượt tuyết', pos: 'danh từ', exampleJa: 'こんど スキーへ いきたいです。', exampleVi: 'Dịp tới tôi muốn đi trượt tuyết.' },
    { term: 'おかし', romaji: 'okashi', meaningVi: 'bánh kẹo', pos: 'danh từ', exampleJa: 'こうえんで おかしを たべます。', exampleVi: 'Tôi ăn bánh kẹo ở công viên.' },
    { term: 'ケーキ', romaji: 'kēki', meaningVi: 'bánh kem', pos: 'danh từ', exampleJa: 'たんじょうびに ケーキを たべます。', exampleVi: 'Vào sinh nhật tôi ăn bánh kem.' },
    { term: 'ぎゅうにゅう', romaji: 'gyūnyū', meaningVi: 'sữa', pos: 'danh từ', exampleJa: 'あさ ぎゅうにゅうを のみます。', exampleVi: 'Buổi sáng tôi uống sữa.' },
    { term: 'ジュース', romaji: 'jūsu', meaningVi: 'nước ép', pos: 'danh từ', exampleJa: 'レストランで ジュースを のみます。', exampleVi: 'Ở nhà hàng tôi uống nước ép.' },
    { term: 'しょうらい', romaji: 'shōrai', meaningVi: 'tương lai, sau này', pos: 'danh từ', exampleJa: 'しょうらい にほんで はたらきたいです。', exampleVi: 'Sau này tôi muốn làm việc ở Nhật.' },
    { term: 'どこか', romaji: 'dokoka', meaningVi: 'đâu đó (nơi nào đó)', pos: 'phó từ', exampleJa: 'こんど どこかへ いきたいです。', exampleVi: 'Dịp tới tôi muốn đi đâu đó.' },
    { term: 'たべもの', romaji: 'tabemono', meaningVi: 'đồ ăn, món ăn', pos: 'danh từ', exampleJa: 'にほんの たべものを たべたいです。', exampleVi: 'Tôi muốn ăn đồ ăn Nhật.' },
    { term: 'のみもの', romaji: 'nomimono', meaningVi: 'đồ uống', pos: 'danh từ', exampleJa: 'デパートで のみものを かいます。', exampleVi: 'Tôi mua đồ uống ở cửa hàng bách hóa.' },
    { term: 'おみやげ', romaji: 'omiyage', meaningVi: 'quà lưu niệm', pos: 'danh từ', exampleJa: 'おまつりで おみやげを かいます。', exampleVi: 'Ở lễ hội tôi mua quà lưu niệm.' },
    { term: 'プレゼント', romaji: 'purezento', meaningVi: 'quà tặng', pos: 'danh từ', exampleJa: 'たんじょうびに プレゼントを かいます。', exampleVi: 'Vào dịp sinh nhật tôi mua quà tặng.' },
  ],
  grammar: [
    {
      code: 'l12-tai-desu',
      title: '〜たいです — muốn làm gì',
      formation: 'Gốc động từ (bỏ ます) + たい + です',
      explanationVi:
        'Muốn nói "muốn làm gì", lấy gốc động từ (bỏ ます) rồi thêm たいです: たべます → たべたいです (muốn ăn), いきます → いきたいです (muốn đi). たい biến đổi như tính từ い nên luôn kết thúc bằng です ở thể lịch sự. Tân ngữ vẫn dùng を: すしを 食べたいです. Mẫu này chủ yếu bày tỏ mong muốn của CHÍNH MÌNH; khi hỏi người khác, thêm か: なにを 食べたいですか.',
      examples: [
        { ja: 'わたしは すしを 食べたいです。', vi: 'Tôi muốn ăn sushi.', tokens: ['わたし', 'は', 'すし', 'を', '食べたいです'] },
        { ja: 'なつに うみへ 行きたいです。', vi: 'Mùa hè tôi muốn đi biển.' },
        { ja: 'しょうらい、にほんで はたらきたいです。', vi: 'Sau này tôi muốn làm việc ở Nhật.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'Chia 「飲みます」 thành mẫu mong muốn (tôi muốn uống cà phê)',
          sentence: 'コーヒーを ___。',
          options: ['飲みたいでした', '飲みますたいです', '飲みたいです', '飲みました'],
          answerIndex: 2, explanationVi: 'Bỏ ます thêm たい + です → 飲みたいです. 飲みますたい là sai vì đã giữ ます; 飲みました là quá khứ "đã uống".',
        },
        {
          kind: 'choice', prompt: '「Mùa hè tôi muốn đi biển。」 câu nào đúng?',
          options: ['なつに うみへ 行きますたい。', 'なつに うみへ 行きたいです。', 'なつに うみへ 行いたいです。', 'なつに うみへ 行たいです。'],
          answerIndex: 1, explanationVi: '行きます (nhóm 1) → 行き + たい = 行きたいです. 行いたい chỉ đúng nếu động từ thuộc nhóm 2 (vd 食べます → 食べたい).',
        },
        {
          kind: 'conjugate', prompt: 'Chia 「読みます」 thành mẫu mong muốn (dịp tới tôi muốn đọc truyện tranh)',
          sentence: 'こんど まんがを ___。',
          options: ['読むたいです', '読みましたいです', '読みたいでした', '読みたいです'],
          answerIndex: 3, explanationVi: '読みます → 読み + たい + です = 読みたいです. Các dạng 読むたい/読みましたい không tồn tại trong tiếng Nhật.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ (tôi muốn uống nước ép ở nhà hàng)',
          sentence: 'レストランで ジュース___ 飲みたいです。',
          options: ['を', 'へ', 'の', 'と'],
          answerIndex: 0, explanationVi: 'ジュース là tân ngữ của 行 động "uống" → を. へ cho nơi đến, の nối danh từ, と cho người cùng đi.',
        },
      ],
    },
    {
      code: 'l12-takunai-takatta',
      title: '〜たくないです・〜たかったです — phủ định và quá khứ của たい',
      formation: 'たい → たくないです (không muốn) / たかったです (đã muốn)',
      explanationVi:
        'Vì たい biến đổi như tính từ い nên phủ định là たくないです (không muốn làm) và quá khứ là たかったです (đã từng muốn làm). Ví dụ: 行きたくないです (không muốn đi), 食べたかったです (đã muốn ăn). Lưu ý không nói たいでした hay たくないでした — phải dùng たかったです và たくないです.',
      examples: [
        { ja: 'わたしは きょう プールへ 行きたくないです。', vi: 'Hôm nay tôi không muốn đi hồ bơi.' },
        { ja: 'きのう、すしを 食べたかったです。', vi: 'Hôm qua tôi đã muốn ăn sushi (nhưng không ăn được).' },
        { ja: 'きょねん、にほんへ 行きたかったです。', vi: 'Năm ngoái tôi đã muốn đi Nhật.' },
        { ja: 'わたしは ケーキを 食べたくないです。', vi: 'Tôi không muốn ăn bánh kem.', tokens: ['わたし', 'は', 'ケーキ', 'を', '食べたくないです'] },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'Chia 「食べたいです」 sang phủ định',
          sentence: 'わたしは ケーキを ___。',
          options: ['食べたいなかったです', '食べたくないです', '食べたくないでした', '食べたいじゃありません'],
          answerIndex: 1, explanationVi: 'Phủ định của たい là たくない: 食べたくないです. Không dùng たいじゃありません (たい không phải tính từ な) hay たくないでした.',
        },
        {
          kind: 'conjugate', prompt: 'Chia 「行きたいです」 sang quá khứ',
          sentence: 'きょねん、にほんへ ___。',
          options: ['行きたいでした', '行きたかったでした', '行きたかったです', '行きたくないです'],
          answerIndex: 2, explanationVi: 'Quá khứ của たい là たかった: 行きたかったです. 行きたいでした là sai vì たい không dùng でした.',
        },
        {
          kind: 'choice', prompt: '「Hôm nay tôi không muốn uống cà phê。」 câu nào đúng?',
          options: ['きょう、コーヒーを 飲みたかったです。', 'きょう、コーヒーを 飲みたいです。', 'きょう、コーヒーを 飲みたくないでした。', 'きょう、コーヒーを 飲みたくないです。'],
          answerIndex: 3, explanationVi: 'Không muốn = たくないです → 飲みたくないです. 飲みたかったです là "đã muốn uống", 飲みたいです là "muốn uống".',
        },
        {
          kind: 'error', prompt: '「Dịp tới tôi không muốn đi hồ bơi。」 câu nào đúng?',
          options: ['こんど プールへ 行きたくないです。', 'こんど プールへ 行きたくないですです。', 'こんど プールへ 行きませんたいです。', 'こんど プールへ 行きたかったです。'],
          answerIndex: 0, explanationVi: 'Phủ định của たい: 行きたくないです. 行きたかったです là quá khứ (đã muốn đi), các dạng còn lại không đúng ngữ pháp.',
        },
      ],
    },
    {
      code: 'l12-dokoka-question',
      title: 'どこかへ 行きたいですか — hỏi về mong muốn',
      formation: 'どこか / なにか + (へ / を) + động từ たい + ですか',
      explanationVi:
        'Từ hỏi + か tạo thành nghĩa "một nơi nào đó / một thứ gì đó": どこか (đâu đó), なにか (gì đó). Dùng để hỏi mong muốn một cách mềm mại: こんど、どこかへ 行きたいですか (dịp tới bạn có muốn đi đâu đó không?), なにか 飲みたいですか (bạn có muốn uống gì không?). Trả lời khẳng định: ええ、…たいです; từ chối nhẹ nhàng: きょうは ちょっと…',
      examples: [
        { ja: 'こんど、どこかへ 行きたいですか。', vi: 'Dịp tới bạn có muốn đi đâu đó không?' },
        { ja: 'なにか 飲みたいですか。', vi: 'Bạn có muốn uống gì không?' },
        { ja: 'ええ、スキーへ 行きたいです。', vi: 'Vâng, tôi muốn đi trượt tuyết.', tokens: ['ええ', 'スキー', 'へ', '行きたいです'] },
      ],
      drills: [
        {
          kind: 'fill', prompt: 'Bạn có muốn đi đâu đó dịp tới không?',
          sentence: 'こんど、___へ 行きたいですか。',
          options: ['どこか', 'どこ', 'なにか', 'いつも'],
          answerIndex: 0, explanationVi: 'どこか = "đâu đó" (nơi không xác định). どこ là "ở đâu" (câu hỏi trực tiếp), なにか là "gì đó" (vật), いつも là "luôn luôn".',
        },
        {
          kind: 'choice', prompt: '「なにか 飲みたいですか。」 có nghĩa là gì?',
          options: ['Bạn muốn uống ở đâu?', 'Bạn có muốn uống gì không?', 'Bạn đã uống gì rồi?', 'Bạn không muốn uống gì cả'],
          answerIndex: 1, explanationVi: 'なにか (gì đó) + 飲みたいですか → "bạn có muốn uống gì không?". Câu hỏi địa điểm là どこで 飲みたいですか.',
        },
        {
          kind: 'choice', prompt: 'Câu trả lời hợp lý cho 「どこかへ 行きたいですか。」 là?',
          options: ['ええ、いきます。', 'いいえ、いきません。', 'ええ、うみへ 行きたいです。', 'ええ、どこですか。'],
          answerIndex: 2, explanationVi: 'Câu hỏi dùng たい nên câu trả lời tự nhiên cũng dùng たい: ええ、うみへ 行きたいです. ええ、いきます không nêu mong muốn.',
        },
        {
          kind: 'error', prompt: 'Câu hỏi nào đúng?',
          options: ['こんど、どこかへ 行きたいですか。', 'こんど、どこかを 行きたいですか。', 'こんど、どこへか 行きたいですか。', 'こんど、どこか 行きたいですか。'],
          answerIndex: 0, explanationVi: 'Nơi đến của 行きます dùng へ: どこかへ. を là tân ngữ, どこへか sai trật tự, và câu cần trợ từ へ trước 行きたい.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Đi mua sắm cùng nhau',
      situationVi: 'Tanaka và Linh trò chuyện về việc muốn mua gì ở cửa hàng bách hóa.',
      lines: [
        { speaker: 'たなか', ja: 'リンさん、こんど デパートへ 行きますか。', vi: 'Linh, dịp tới cậu đến cửa hàng bách hóa à?' },
        { speaker: 'リン', ja: 'はい、くつを 買いたいです。', vi: 'Vâng, tôi muốn mua giày.' },
        { speaker: 'たなか', ja: 'いいですね。わたしは かばんを 買いたいです。', vi: 'Tốt đấy. Còn tôi muốn mua cặp sách.' },
        { speaker: 'リン', ja: 'たなかさんも デパートへ 行きたいですか。', vi: 'Anh Tanaka cũng muốn đến cửa hàng bách hóa à?' },
        { speaker: 'たなか', ja: 'ええ、こんど いっしょに 行きませんか。', vi: 'Vâng, dịp này đi cùng nhau nhé?' },
        { speaker: 'リン', ja: 'ええ、いいですね。', vi: 'Vâng, hay đấy.' },
        { speaker: 'たなか', ja: 'デパートで ジュースも 飲みたいですね。', vi: 'Ở cửa hàng bách hóa tôi cũng muốn uống nước ép nữa.' },
        { speaker: 'リン', ja: 'わたしも 飲みたいです。', vi: 'Tôi cũng muốn uống.' },
      ],
    },
    {
      titleVi: 'Ước mơ của Linh',
      situationVi: 'Tanaka hỏi Linh về kế hoạch và mong muốn sau này.',
      lines: [
        { speaker: 'たなか', ja: 'リンさん、しょうらい なにを したいですか。', vi: 'Linh, sau này cậu muốn làm gì?' },
        { speaker: 'リン', ja: 'しょうらい、にほんで はたらきたいです。', vi: 'Sau này tôi muốn làm việc ở Nhật.' },
        { speaker: 'たなか', ja: 'そうですか。にほんの たべものは どうですか。', vi: 'Vậy à. Đồ ăn Nhật thế nào?' },
        { speaker: 'リン', ja: 'とても おいしいです。', vi: 'Rất ngon.' },
        { speaker: 'たなか', ja: 'なにを 食べたいですか。', vi: 'Cậu muốn ăn gì?' },
        { speaker: 'リン', ja: 'すしと おかしを 食べたいです。', vi: 'Tôi muốn ăn sushi và bánh kẹo.' },
        { speaker: 'たなか', ja: 'なつは どこかへ 行きたいですか。', vi: 'Mùa hè cậu có muốn đi đâu không?' },
        { speaker: 'リン', ja: 'はい、なつに うみへ 行きたいです。', vi: 'Có, mùa hè tôi muốn đi biển.' },
        { speaker: 'たなか', ja: 'いいですね。わたしは スキーへ 行きたいです。', vi: 'Tốt đấy. Còn tôi thì muốn đi trượt tuyết.' },
        { speaker: 'リン', ja: 'いっしょに 行きましょう。', vi: 'Mình cùng đi nhé.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'なつに うみへ 行きたいです。', meaningVi: 'Mùa hè tôi muốn đi biển.', choices: ['Mùa hè muốn đi biển', 'Mùa hè muốn đi núi', 'Mùa đông muốn đi biển', 'Mùa hè đã đi biển'], answerIndex: 0, dictation: true },
    { scriptJa: 'デパートで くつを 買いたいです。', meaningVi: 'Tôi muốn mua giày ở cửa hàng bách hóa.', choices: ['Đã mua giày ở cửa hàng bách hóa', 'Muốn mua giày ở cửa hàng bách hóa', 'Muốn mua cặp sách ở cửa hàng bách hóa', 'Muốn mua giày ở nhà hàng'], answerIndex: 1 },
    { scriptJa: 'きょうは ジュースを 飲みたくないです。', meaningVi: 'Hôm nay tôi không muốn uống nước ép.', choices: ['Hôm nay không muốn uống nước ép', 'Hôm nay muốn uống nước ép', 'Hôm qua không muốn uống nước ép', 'Hôm nay không muốn ăn bánh kem'], answerIndex: 0, dictation: true },
    { scriptJa: 'しょうらい、にほんで はたらきたいです。', meaningVi: 'Sau này tôi muốn làm việc ở Nhật.', choices: ['Muốn học ở Nhật sau này', 'Đã làm việc ở Nhật', 'Muốn làm việc ở Nhật sau này', 'Muốn làm việc ở Việt Nam'], answerIndex: 2 },
    { scriptJa: 'こんど、どこかへ 行きたいですか。', meaningVi: 'Dịp tới bạn có muốn đi đâu đó không?', choices: ['Bạn đã đi đâu rồi?', 'Bạn muốn đi bằng gì?', 'Bạn muốn đi cùng ai?', 'Dịp tới bạn có muốn đi đâu đó không?'], answerIndex: 3 },
  ],
  reading: {
    titleVi: 'Kế hoạch mùa hè của Linh',
    lines: [
      { text: 'わたしは なつやすみに うみへ 行きたいです。', vi: 'Kỳ nghỉ hè tôi muốn đi biển.' },
      { text: 'かぞくと いっしょに 行きたいです。', vi: 'Tôi muốn đi cùng gia đình.' },
      { text: 'うみで およぎたいです。', vi: 'Tôi muốn bơi ở biển.' },
      { text: 'うみで しゃしんも とりたいです。', vi: 'Ở biển tôi cũng muốn chụp ảnh.' },
      { text: 'ともだちは おみやげを 買いたいです。', vi: 'Bạn tôi muốn mua quà lưu niệm.' },
      { text: 'きょうは とても あついです。', vi: 'Hôm nay trời rất nóng.' },
      { text: 'あなたは なつやすみに どこかへ 行きたいですか。', vi: 'Còn bạn, kỳ nghỉ hè bạn có muốn đi đâu không?' },
    ],
    questions: [
      { questionVi: 'Linh muốn đi đâu vào kỳ nghỉ hè?', choices: ['Biển', 'Núi', 'Hồ bơi', 'Bệnh viện'], answerIndex: 0, explanationVi: 'Đoạn nói: なつやすみに うみへ 行きたいです — うみ là biển.' },
      { questionVi: 'Linh muốn làm gì ở biển?', choices: ['Bơi và mua quà', 'Bơi và chụp ảnh', 'Chụp ảnh và mua quà', 'Bơi và đọc sách'], answerIndex: 1, explanationVi: 'うみで およぎたいです (muốn bơi) + うみで しゃしんも とりたいです (cũng muốn chụp ảnh).' },
      { questionVi: 'Bạn của Linh muốn làm gì?', choices: ['Chụp ảnh', 'Bơi ở biển', 'Mua quà lưu niệm', 'Đi trượt tuyết'], answerIndex: 2, explanationVi: 'ともだちは おみやげを 買いたいです — おみやげ là quà lưu niệm.' },
    ],
  },
  speakSentences: [
    { ja: 'なつに うみへ 行きたいです。', vi: 'Mùa hè tôi muốn đi biển.' },
    { ja: 'デパートで くつを 買いたいです。', vi: 'Tôi muốn mua giày ở cửa hàng bách hóa.' },
    { ja: 'こんど、どこかへ 行きたいですか。', vi: 'Dịp tới bạn có muốn đi đâu đó không?' },
    { ja: 'わたしは すしを 食べたいです。', vi: 'Tôi muốn ăn sushi.' },
  ],
  translatePairs: [
    { ja: 'なつに うみへ 行きたいです。', vi: 'Mùa hè tôi muốn đi biển.', tokens: ['なつ', 'に', 'うみ', 'へ', '行きたいです'], distractors: ['で', '行きます'] },
    { ja: 'わたしは すしを 食べたいです。', vi: 'Tôi muốn ăn sushi.', tokens: ['わたし', 'は', 'すし', 'を', '食べたいです'], distractors: ['の', '食べます'] },
    { ja: 'きょうは ジュースを 飲みたくないです。', vi: 'Hôm nay tôi không muốn uống nước ép.', tokens: ['きょう', 'は', 'ジュース', 'を', '飲みたくないです'], distractors: ['飲みたかったです', 'へ'] },
    { ja: 'こんど、どこかへ 行きたいですか。', vi: 'Dịp tới bạn có muốn đi đâu đó không?', tokens: ['こんど', 'どこか', 'へ', '行きたいですか'], distractors: ['どこ', 'に'] },
  ],
  kanji: ['飲', '買', '持'],
}
