/**
 * NihongoGo — Bài 19: 連体修飾 (thể thường + danh từ, tính từ + danh từ).
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson19: CurriculumLesson = {
  order: 19,
  slug: 'l19-cau-xac-dinh',
  title: 'Câu xác định — Thể thường + danh từ',
  titleJa: '連体修飾',
  description: 'Dùng mệnh đề động từ, tính từ để xác định chi tiết cho danh từ đứng sau.',
  learningObjectives: [
    'Nối động từ thể thường với danh từ',
    'Dùng tính từ làm định ngữ',
    'Tạo câu mô tả sự vật chi tiết hơn',
  ],
  grammarTopics: ['Động từ thể thường + danh từ', 'Tính từ + danh từ (mở rộng)'],
  vocabularyTopics: ['Từ miêu tả chi tiết', 'Danh từ ghép thông dụng'],
  kanjiTopics: ['Kanji sự vật & nơi chốn (物・人・所)'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'せ', romaji: 'se', meaningVi: 'dáng người, thân hình', pos: 'danh từ', exampleJa: 'せが たかいです。', exampleVi: 'Tôi dáng cao.' },
    { term: 'ひと', romaji: 'hito', meaningVi: 'người', pos: 'danh từ', exampleJa: 'あの ひとは がくせいです。', exampleVi: 'Người kia là sinh viên.' },
    { term: 'ところ', romaji: 'tokoro', meaningVi: 'nơi, chỗ', pos: 'danh từ', exampleJa: 'しずかな ところで べんきょうします。', exampleVi: 'Tôi học ở nơi yên tĩnh.' },
    { term: 'もの', romaji: 'mono', meaningVi: 'đồ vật, vật', pos: 'danh từ', exampleJa: 'つめたい ものを のみたいです。', exampleVi: 'Tôi muốn uống thứ gì đó lạnh.' },
    { term: 'ゆめ', romaji: 'yume', meaningVi: 'giấc mơ, ước mơ', pos: 'danh từ', exampleJa: 'おおきい ゆめが あります。', exampleVi: 'Tôi có ước mơ lớn.' },
    { term: 'まち', romaji: 'machi', meaningVi: 'phố, thị trấn', pos: 'danh từ', exampleJa: 'きれいな まちへ いきたいです。', exampleVi: 'Tôi muốn đến một thành phố đẹp.' },
    { term: 'みち', romaji: 'michi', meaningVi: 'con đường', pos: 'danh từ', exampleJa: 'まいにち あるく みちは きれいです。', exampleVi: 'Con đường tôi đi hằng ngày rất đẹp.' },
    { term: 'しゃしん', romaji: 'shashin', meaningVi: 'ảnh, hình chụp', pos: 'danh từ', exampleJa: 'しゃしんを とります。', exampleVi: 'Tôi chụp ảnh.' },
    { term: 'てがみ', romaji: 'tegami', meaningVi: 'thư, lá thư', pos: 'danh từ', exampleJa: 'ともだちに てがみを かきます。', exampleVi: 'Tôi viết thư cho bạn.' },
    { term: 'くるま', romaji: 'kuruma', meaningVi: 'xe hơi', pos: 'danh từ', exampleJa: 'あかい くるまです。', exampleVi: 'Đó là chiếc xe hơi màu đỏ.' },
    { term: 'たてもの', romaji: 'tatemono', meaningVi: 'tòa nhà', pos: 'danh từ', exampleJa: 'たかい たてものです。', exampleVi: 'Đó là tòa nhà cao.' },
    { term: 'うみ', romaji: 'umi', meaningVi: 'biển', pos: 'danh từ', exampleJa: 'きれいな うみで およぎたいです。', exampleVi: 'Tôi muốn bơi ở biển đẹp.' },
    { term: 'やま', romaji: 'yama', meaningVi: 'núi', pos: 'danh từ', exampleJa: 'あの たかい やまは きれいです。', exampleVi: 'Ngọn núi cao kia thật đẹp.' },
    { term: 'おちゃ', romaji: 'ocha', meaningVi: 'trà', pos: 'danh từ', exampleJa: 'あたたかい おちゃを のみたいです。', exampleVi: 'Tôi muốn uống trà nóng ấm.' },
    { term: 'とります', romaji: 'torimasu', meaningVi: 'chụp (ảnh)', pos: 'động từ nhóm 1', exampleJa: 'こうえんで しゃしんを とります。', exampleVi: 'Tôi chụp ảnh ở công viên.' },
    { term: 'しろい', romaji: 'shiroi', meaningVi: 'trắng, màu trắng', pos: 'tính từ い', exampleJa: 'しろい くるまを かいます。', exampleVi: 'Tôi mua chiếc xe hơi trắng.' },
    { term: 'あかい', romaji: 'akai', meaningVi: 'đỏ, màu đỏ', pos: 'tính từ い', exampleJa: 'あかい かさです。', exampleVi: 'Đó là chiếc ô màu đỏ.' },
    { term: 'あたたかい', romaji: 'atatakai', meaningVi: 'ấm, ấm áp', pos: 'tính từ い', exampleJa: 'あたたかい おちゃを のみます。', exampleVi: 'Tôi uống trà ấm.' },
    { term: 'おもしろい', romaji: 'omoshiroi', meaningVi: 'thú vị, hay', pos: 'tính từ い', exampleJa: 'おもしろい えいがです。', exampleVi: 'Đó là bộ phim thú vị.' },
    { term: 'たのしい', romaji: 'tanoshii', meaningVi: 'vui vẻ', pos: 'tính từ い', exampleJa: 'たのしい しゅうまつです。', exampleVi: 'Đó là cuối tuần vui vẻ.' },
    { term: 'ときどき', romaji: 'tokidoki', meaningVi: 'thỉnh thoảng', pos: 'phó từ', exampleJa: 'ときどき えいがを みます。', exampleVi: 'Thỉnh thoảng tôi xem phim.' },
    { term: 'どんな', romaji: 'donna', meaningVi: 'như thế nào, loại nào', pos: 'từ nghi vấn', exampleJa: 'どんな とけいを かいますか。', exampleVi: 'Bạn định mua loại đồng hồ nào?' },
  ],
  grammar: [
    {
      code: 'l19-plain-verb-noun',
      title: 'V thể thường + danh từ — mệnh đề động từ làm định ngữ',
      formation: 'V thể thường (のむ・たべる・する・くる・みる…) + danh từ',
      explanationVi:
        'Mệnh đề động từ đứng TRƯỚC danh từ để xác định danh từ đó: よむ ほん = quyển sách (mà tôi) đọc, みる えいが = bộ phim (mà tôi) xem. Thể thường là dạng gốc động từ đã gặp ở bài 18 (trước こと): のみます→のむ, たべます→たべる, します→する, きます→くる. Phủ định mệnh đề dùng thể ない + N (のまない くすり = thuốc (tôi) không uống). Nếu mệnh đề có chủ ngữ rõ ràng thì chủ ngữ đó dùng が, giống mẫu せが たかい: わたしが かう とけい = chiếc đồng hồ tôi mua. Vị ngữ chính của câu vẫn giữ lịch sự: よむ ほんは これです.',
      examples: [
        { ja: 'まいにち よむ ほんは にほんごの ほんです。', vi: 'Quyển sách tôi đọc mỗi ngày là sách tiếng Nhật.', tokens: ['まいにち', 'よむ', 'ほん', 'は', 'にほんごの', 'ほん', 'です'] },
        { ja: 'しゅうまつ みる えいがは にほんの えいがです。', vi: 'Bộ phim tôi xem cuối tuần là phim Nhật.' },
        { ja: 'ともだちが つくる おかしは おいしいです。', vi: 'Bánh kẹo bạn tôi làm rất ngon.' },
        { ja: 'こんど かう かばんは これです。', vi: 'Cái cặp tôi định mua lần này là cái này.', tokens: ['こんど', 'かう', 'かばん', 'は', 'これ', 'です'] },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'のみます → thể thường (đứng trước danh từ)',
          sentence: 'まいにち ___ くすりは これです。',
          options: ['のみます', 'のむ', 'のんで', 'のめる'],
          answerIndex: 1, explanationVi: 'Trước danh từ (くすり) phải là thể thường: のみます→のむ. のんで là thể て, のめる là thể khả năng.',
        },
        {
          kind: 'conjugate', prompt: 'つくります → thể thường (đứng trước danh từ)',
          sentence: 'ともだちが ___ りょうりは おいしいです。',
          options: ['つくります', 'つくって', 'つくる', 'つくれる'],
          answerIndex: 2, explanationVi: 'つくります (nhóm 1) có thể thường là つくる: ともだちが つくる りょうり = món bạn tôi nấu. つくれる là thể khả năng (bài 18).',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ cho chủ ngữ trong mệnh đề',
          sentence: 'わたし___ かう とけいは これです。',
          options: ['を', 'は', 'に', 'が'],
          answerIndex: 3, explanationVi: 'Trong mệnh đề định ngữ, chủ ngữ dùng が thay vì は (giống せが たかい ひと): わたしが かう とけい = đồng hồ tôi mua.',
        },
        {
          kind: 'choice', prompt: '「しゅうまつ みる えいがは にほんの えいがです。」 có nghĩa là gì?',
          options: ['Tôi muốn xem phim Nhật vào cuối tuần', 'Bộ phim tôi xem cuối tuần là phim Nhật', 'Phim Nhật đang được chiếu vào cuối tuần', 'Tôi đã xem phim Nhật cuối tuần rồi'],
          answerIndex: 1, explanationVi: 'みる えいが = bộ phim (tôi) xem → cả cụm làm chủ đề với は, vị ngữ là にほんの えいがです.',
        },
        {
          kind: 'error', prompt: 'Câu nào dùng đúng dạng động từ trước danh từ?',
          options: ['まいにち よみます ほんは これです。', 'まいにち よんで ほんは これです。', 'まいにち よむ ほんは これです。', 'まいにち よめ ほんは これです。'],
          answerIndex: 2, explanationVi: 'Trước danh từ phải dùng thể thường よむ, không dùng よみます (lịch sự), よんで (て) hay よめ (khả năng/mệnh lệnh).',
        },
        {
          kind: 'fill', prompt: 'Điền từ đúng (Hôm nay bộ phim tôi xem là bộ này)',
          sentence: 'きょう ___ えいがは これです。',
          options: ['たかい', 'みる', 'いきます', 'きのう'],
          answerIndex: 1, explanationVi: 'Sau động từ thể thường (みる) phải là danh từ: みる えいが = bộ phim tôi xem. たかい là tính từ, きのう là danh từ thời gian.',
        },
      ],
    },
    {
      code: 'l19-adj-noun',
      title: 'Tính từ + danh từ — mở rộng',
      formation: 'い-adj + N / な-adj + な + N / phủ định: 〜くない + N, 〜じゃない + N',
      explanationVi:
        'Tính từ cũng xác định cho danh từ đứng sau. Tính từ い ghép trực tiếp: たかい やま (núi cao), おおきい いぬ (con chó to). Tính từ な phải giữ な: きれいな まち (thành phố đẹp), ゆうめいな たてもの (tòa nhà nổi tiếng) — chú ý きれい nhìn giống tính từ い nhưng thực ra là tính từ な. Phủ định: tính từ い đổi い → くない (たかくない レストラン = nhà hàng không đắt); tính từ な dùng じゃない (しずかじゃない ところ). Mệnh đề tính từ cũng có thể có chủ ngữ với が: せが たかい ひと = người dáng cao.',
      examples: [
        { ja: 'せが たかい ひとは たなかさんです。', vi: 'Người dáng cao là Tanaka.', tokens: ['せ', 'が', 'たかい', 'ひと', 'は', 'たなかさん', 'です'] },
        { ja: 'きれいな まちへ いきたいです。', vi: 'Tôi muốn đến thành phố đẹp.', tokens: ['きれいな', 'まち', 'へ', 'いきたい', 'です'] },
        { ja: 'ゆうめいな たてものを みました。', vi: 'Tôi đã xem tòa nhà nổi tiếng.' },
        { ja: 'たかくない レストランで ばんごはんを たべました。', vi: 'Tôi đã ăn tối ở nhà hàng không đắt.' },
      ],
      drills: [
        {
          kind: 'fill', prompt: 'Điền cụm đúng (Người dáng cao kia là giáo viên)',
          sentence: 'あの ___ ひとは せんせいです。',
          options: ['せが たかい', 'せが たかいな', 'せが たかくない', 'せを たかい'],
          answerIndex: 0, explanationVi: 'たかい là tính từ い nên ghép thẳng vào danh từ: せが たかい ひと. Không thêm な; せ là chủ ngữ mệnh đề nên đi với が.',
        },
        {
          kind: 'choice', prompt: '「きれいな まちへ いきたいです。」 có nghĩa là gì?',
          options: ['Tôi muốn ở lại thành phố', 'Thành phố này đẹp', 'Tôi muốn đến thành phố đẹp', 'Tôi đã đến thành phố đẹp'],
          answerIndex: 2, explanationVi: 'きれいな (tính từ な + な) xác định まち; いきたいです = muốn đi. Cả cụm "thành phố đẹp" là nơi đến.',
        },
        {
          kind: 'particle', prompt: 'Điền phần còn thiếu của tính từ な',
          sentence: 'しずか___ ところで べんきょうします。',
          options: ['な', 'の', 'に', 'は'],
          answerIndex: 0, explanationVi: 'しずか là tính từ な → trước danh từ phải giữ な: しずかな ところ = nơi yên tĩnh.',
        },
        {
          kind: 'error', prompt: 'Câu nào dùng đúng tính từ な trước danh từ?',
          options: ['ゆうめい たてものです。', 'ゆうめいの たてものです。', 'ゆうめいでした たてものです。', 'ゆうめいな たてものです。'],
          answerIndex: 3, explanationVi: 'ゆうめい là tính từ な → phải là ゆうめいな + N. Không bỏ な và không thay bằng の.',
        },
        {
          kind: 'fill', prompt: 'Điền dạng phủ định của たかい (Tôi muốn ăn ở nhà hàng không đắt)',
          sentence: '___ レストランで たべたいです。',
          options: ['たかいじゃない', 'たかくない', 'たかくな', 'たかくでした'],
          answerIndex: 1, explanationVi: 'Tính từ い phủ định: たかい → たかくない, giữ nguyên khi làm định ngữ: たかくない レストラン. じゃない dùng cho tính từ な.',
        },
        {
          kind: 'conjugate', prompt: 'きれいです → dạng định ngữ đứng trước danh từ',
          sentence: '___ まちへ いきたいです。',
          options: ['きれい', 'きれいの', 'きれいな', 'きれいい'],
          answerIndex: 2, explanationVi: 'きれい là tính từ な dù đuôi giống い → định ngữ phải là きれいな まち (bẫy kinh điển đã học ở bài 8).',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Người dáng cao ấy là ai?',
      situationVi: 'Ở trường đại học, ông Sato hỏi Linh về một người đứng xa.',
      lines: [
        { speaker: 'さとう', ja: 'あの ひとは だれですか。', vi: 'Người kia là ai vậy?' },
        { speaker: 'リン', ja: 'どの ひとですか。', vi: 'Người nào ạ?' },
        { speaker: 'さとう', ja: 'せが たかい ひとです。', vi: 'Người dáng cao kia.' },
        { speaker: 'リン', ja: 'ああ、あの ひとは たなかさんです。', vi: 'À, người đó là Tanaka.' },
        { speaker: 'さとう', ja: 'たなかさんは どんな ひとですか。', vi: 'Tanaka là người như thế nào?' },
        { speaker: 'リン', ja: 'とても おもしろい ひとです。', vi: 'Ông ấy là người rất thú vị.' },
        { speaker: 'さとう', ja: 'どんな しごとを しますか。', vi: 'Ông ấy làm công việc gì?' },
        { speaker: 'リン', ja: 'だいがくの せんせいです。おもしろい じゅぎょうを します。', vi: 'Ông ấy là giáo viên đại học. Ông ấy dạy những tiết học thú vị.' },
      ],
    },
    {
      titleVi: 'Quyển sách mỗi ngày',
      situationVi: 'Tanaka thấy Linh cầm một cuốn sách và hỏi về nó.',
      lines: [
        { speaker: 'たなか', ja: 'リンさん、それは なんですか。', vi: 'Linh, cái đó là gì vậy?' },
        { speaker: 'リン', ja: 'にほんごの ほんです。', vi: 'Là sách tiếng Nhật.' },
        { speaker: 'たなか', ja: 'どんな ほんですか。', vi: 'Là cuốn sách như thế nào?' },
        { speaker: 'リン', ja: 'まいにち よむ ほんです。ちょっと むずかしいです。', vi: 'Là cuốn sách tôi đọc mỗi ngày. Hơi khó một chút.' },
        { speaker: 'たなか', ja: 'えいがの ほんですか。', vi: 'Là sách về phim à?' },
        { speaker: 'リン', ja: 'いいえ、ことばの ほんです。あたらしい ことばが たくさん あります。', vi: 'Không, là sách từ vựng. Có rất nhiều từ mới.' },
        { speaker: 'たなか', ja: 'いいですね。わたしも よみたいです。', vi: 'Hay đấy. Tôi cũng muốn đọc.' },
        { speaker: 'リン', ja: 'はい、こんど いっしょに よみましょう。', vi: 'Vâng, lần này mình cùng đọc nhé.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'せが たかい ひとは たなかさんです。', meaningVi: 'Người dáng cao là Tanaka.', choices: ['Người dáng cao là Linh', 'Tanaka dáng thấp', 'Người dáng cao là Tanaka', 'Người dáng cao là giáo viên'], answerIndex: 2, dictation: true },
    { scriptJa: 'まいにち よむ ほんは にほんごの ほんです。', meaningVi: 'Quyển sách tôi đọc mỗi ngày là sách tiếng Nhật.', choices: ['Sách tôi đọc mỗi ngày là sách tiếng Nhật', 'Tôi đọc sách tiếng Nhật mỗi ngày', 'Sách tiếng Nhật khó đọc', 'Tôi muốn đọc sách tiếng Nhật'], answerIndex: 0, dictation: true },
    { scriptJa: 'しずかな ところで べんきょうします。', meaningVi: 'Tôi học ở nơi yên tĩnh.', choices: ['Học ở nơi ồn ào', 'Học ở nơi yên tĩnh', 'Nghỉ ngơi ở nơi yên tĩnh', 'Đã học ở nơi yên tĩnh'], answerIndex: 1 },
    { scriptJa: 'きれいな うみで およぎたいです。', meaningVi: 'Tôi muốn bơi ở biển đẹp.', choices: ['Đã bơi ở biển đẹp rồi', 'Muốn đến biển đẹp', 'Không muốn bơi ở biển', 'Muốn bơi ở biển đẹp'], answerIndex: 3 },
    { scriptJa: 'あかい くるまを かいました。', meaningVi: 'Tôi đã mua chiếc xe hơi màu đỏ.', choices: ['Đã mua xe đạp màu đỏ', 'Đã mua xe hơi màu đỏ', 'Muốn mua xe hơi màu đỏ', 'Đã xem xe hơi màu đỏ'], answerIndex: 1 },
  ],
  reading: {
    titleVi: 'Người bạn trong ảnh',
    lines: [
      { text: 'この しゃしんの ひとは ミンさんです。', vi: 'Người trong tấm ảnh này là Min.' },
      { text: 'ミンさんは ベトナムの だいがくの がくせいです。', vi: 'Min là sinh viên đại học ở Việt Nam.' },
      { text: 'まいにち あるく みちは きれいです。', vi: 'Con đường Min đi mỗi ngày rất đẹp.' },
      { text: 'ときどき えいがを みます。みる えいがは にほんの えいがです。', vi: 'Thỉnh thoảng Min xem phim. Phim Min xem là phim Nhật.' },
      { text: 'しゅうまつは ともだちと うみへ いきます。', vi: 'Cuối tuần Min đi biển cùng bạn.' },
      { text: 'うみで しゃしんを たくさん とります。', vi: 'Ở biển Min chụp rất nhiều ảnh.' },
      { text: 'ミンさんは おおきい ゆめが あります。', vi: 'Min có một ước mơ lớn.' },
      { text: 'こんど にほんへ いきたいです。', vi: 'Min muốn sang Nhật vào dịp tới.' },
    ],
    questions: [
      { questionVi: 'Con đường Min đi mỗi ngày như thế nào?', choices: ['Ồn ào', 'Đẹp', 'Hẹp', 'Dài'], answerIndex: 1, explanationVi: 'まいにち あるく みちは きれいです = con đường (Min) đi mỗi ngày rất đẹp.' },
      { questionVi: 'Min thường xem phim gì?', choices: ['Phim Mỹ', 'Phim Việt Nam', 'Phim Nhật', 'Không xem phim'], answerIndex: 2, explanationVi: 'みる えいがは にほんの えいがです = phim Min xem là phim Nhật.' },
      { questionVi: 'Min làm gì ở biển?', choices: ['Bơi', 'Ngủ trên bãi biển', 'Đi bộ', 'Chụp nhiều ảnh'], answerIndex: 3, explanationVi: 'うみで しゃしんを たくさん とります = chụp rất nhiều ảnh ở biển.' },
    ],
  },
  speakSentences: [
    { ja: 'せが たかい ひとは たなかさんです。', vi: 'Người dáng cao là Tanaka.' },
    { ja: 'まいにち よむ ほんは これです。', vi: 'Quyển sách tôi đọc mỗi ngày là quyển này.' },
    { ja: 'きれいな まちへ いきたいです。', vi: 'Tôi muốn đến thành phố đẹp.' },
    { ja: 'わたしが かう とけいは これです。', vi: 'Chiếc đồng hồ tôi mua là chiếc này.' },
  ],
  translatePairs: [
    { ja: 'せが たかい ひとは だれですか。', vi: 'Người dáng cao là ai?', tokens: ['せ', 'が', 'たかい', 'ひと', 'は', 'だれ', 'ですか'], distractors: ['の'] },
    { ja: 'まいにち よむ ほんは これです。', vi: 'Quyển sách tôi đọc mỗi ngày là quyển này.', tokens: ['まいにち', 'よむ', 'ほん', 'は', 'これ', 'です'], distractors: ['を'] },
    { ja: 'きれいな まちへ いきたいです。', vi: 'Tôi muốn đến thành phố đẹp.', tokens: ['きれいな', 'まち', 'へ', 'いきたい', 'です'], distractors: ['の'] },
    { ja: 'わたしが かう とけいは これです。', vi: 'Chiếc đồng hồ tôi mua là chiếc này.', tokens: ['わたし', 'が', 'かう', 'とけい', 'は', 'これ', 'です'], distractors: ['を'] },
    { ja: 'たかくない レストランで ばんごはんを たべました。', vi: 'Tôi đã ăn tối ở nhà hàng không đắt.', tokens: ['たかくない', 'レストラン', 'で', 'ばんごはん', 'を', 'たべました'], distractors: ['は'] },
  ],
  kanji: ['物', '人', '所'],
}
