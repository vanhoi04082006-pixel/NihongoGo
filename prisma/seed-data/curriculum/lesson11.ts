/**
 * NihongoGo — Bài 11: 過去形 (Thì quá khứ — ました・ませんでした・でした).
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson11: CurriculumLesson = {
  order: 11,
  slug: 'l11-thi-qua-khu',
  title: 'Thì quá khứ — Kể lại điều đã xảy ra',
  titleJa: '過去形',
  description: 'Kể về sự việc đã xảy ra bằng thể quá khứ của です và động từ.',
  learningObjectives: [
    'Chia động từ sang ました',
    'Phủ định quá khứ với ませんでした',
    'Kể lại một sự việc đã qua',
  ],
  grammarTopics: ['Thể quá khứ ました', 'Phủ định quá khứ ませんでした', 'Quá khứ của です (でした)'],
  vocabularyTopics: ['Từ kể chuyện quá khứ', 'Sự kiện và kỷ niệm'],
  kanjiTopics: ['Kanji động từ cơ bản (行・来・見・食)'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: '行きます', reading: 'いきます', romaji: 'ikimasu', meaningVi: 'đi (đến nơi khác)', pos: 'động từ nhóm 1', exampleJa: 'まいにち でんしゃで かいしゃへ いきます。', exampleVi: 'Mỗi ngày tôi đi công ty bằng tàu điện.' },
    { term: '来ます', reading: 'きます', romaji: 'kimasu', meaningVi: 'đến (hướng về phía người nói)', pos: 'động từ nhóm 1', exampleJa: 'こんど ともだちが わたしの うちへ きます。', exampleVi: 'Dịp tới bạn tôi đến nhà tôi.' },
    { term: '見ます', reading: 'みます', romaji: 'mimasu', meaningVi: 'xem, nhìn', pos: 'động từ nhóm 2', exampleJa: 'にちようびに えいがを みます。', exampleVi: 'Chủ nhật tôi xem phim.' },
    { term: '食べます', reading: 'たべます', romaji: 'tabemasu', meaningVi: 'ăn', pos: 'động từ nhóm 2', exampleJa: 'あさ たまごを たべます。', exampleVi: 'Buổi sáng tôi ăn trứng.' },
    { term: 'とります', romaji: 'torimasu', meaningVi: 'chụp (ảnh)', pos: 'động từ nhóm 1', exampleJa: 'こうえんで しゃしんを とります。', exampleVi: 'Tôi chụp ảnh ở công viên.' },
    { term: 'つかいます', romaji: 'tsukaimasu', meaningVi: 'sử dụng, dùng', pos: 'động từ nhóm 1', exampleJa: 'うちで パソコンを つかいます。', exampleVi: 'Ở nhà tôi dùng máy tính.' },
    { term: 'まちます', romaji: 'machimasu', meaningVi: 'chờ, đợi', pos: 'động từ nhóm 1', exampleJa: 'えきで ともだちを まちます。', exampleVi: 'Tôi đợi bạn ở nhà ga.' },
    { term: 'すし', romaji: 'sushi', meaningVi: 'món sushi', pos: 'danh từ', exampleJa: 'きのう すしを たべました。', exampleVi: 'Hôm qua tôi đã ăn sushi.' },
    { term: 'せんしゅう', romaji: 'senshū', meaningVi: 'tuần trước', pos: 'danh từ', exampleJa: 'せんしゅう の にちようびに こうえんへ いきました。', exampleVi: 'Chủ nhật tuần trước tôi đã đến công viên.' },
    { term: 'きょねん', romaji: 'kyonen', meaningVi: 'năm ngoái', pos: 'danh từ', exampleJa: 'きょねん なつやすみに にほんへ きました。', exampleVi: 'Năm ngoái kỳ nghỉ hè tôi đã đến Nhật.' },
    { term: 'おととい', romaji: 'ototoi', meaningVi: 'hôm kia', pos: 'danh từ', exampleJa: 'おととい がっこうへ いきませんでした。', exampleVi: 'Hôm kia tôi đã không đến trường.' },
    { term: 'たんじょうび', romaji: 'tanjōbi', meaningVi: 'sinh nhật', pos: 'danh từ', exampleJa: 'きのうは ともだちの たんじょうび でした。', exampleVi: 'Hôm qua là sinh nhật của bạn tôi.' },
    { term: 'おまつり', romaji: 'omatsuri', meaningVi: 'lễ hội', pos: 'danh từ', exampleJa: 'せんしゅう、おまつりへ いきました。', exampleVi: 'Tuần trước tôi đã đi lễ hội.' },
    { term: 'しゃしん', romaji: 'shashin', meaningVi: 'ảnh, bức ảnh', pos: 'danh từ', exampleJa: 'こうえんで しゃしんを とりました。', exampleVi: 'Tôi đã chụp ảnh ở công viên.' },
    { term: 'なつやすみ', romaji: 'natsuyasumi', meaningVi: 'kỳ nghỉ hè', pos: 'danh từ', exampleJa: 'なつやすみに うみへ いきます。', exampleVi: 'Kỳ nghỉ hè tôi đi biển.' },
    { term: 'うみ', romaji: 'umi', meaningVi: 'biển', pos: 'danh từ', exampleJa: 'きょねん うみへ いきました。', exampleVi: 'Năm ngoái tôi đã đi biển.' },
    { term: 'やま', romaji: 'yama', meaningVi: 'núi', pos: 'danh từ', exampleJa: 'せんしゅう ともだちと やまへ いきました。', exampleVi: 'Tuần trước tôi đã đi núi cùng bạn.' },
    { term: 'ばんごはん', romaji: 'bangohan', meaningVi: 'bữa tối', pos: 'danh từ', exampleJa: 'まいにち しちじに ばんごはんを たべます。', exampleVi: 'Mỗi ngày tôi ăn tối lúc 7 giờ.' },
    { term: 'りょこう', romaji: 'ryokō', meaningVi: 'chuyến du lịch', pos: 'danh từ', exampleJa: 'きょねん かぞくと りょこうへ いきました。', exampleVi: 'Năm ngoái tôi đã đi du lịch cùng gia đình.' },
    { term: 'まんが', romaji: 'manga', meaningVi: 'truyện tranh', pos: 'danh từ', exampleJa: 'きのう まんがを よみました。', exampleVi: 'Hôm qua tôi đã đọc truyện tranh.' },
  ],
  grammar: [
    {
      code: 'l11-mashita-masendeshita',
      title: 'ました・ませんでした — quá khứ của động từ',
      formation: 'Gốc động từ (bỏ ます) + ました / ませんでした',
      explanationVi:
        'Để kể lại một việc ĐÃ xảy ra, đổi đuôi động từ: ます → ました (đã làm), ません → ませんでした (đã không làm). Ví dụ: たべます → たべました (đã ăn), のみます → のみませんでした (đã không uống). Thường đi cùng từ chỉ thời gian quá khứ: きのう (hôm qua), おととい (hôm kia), せんしゅう (tuần trước), きょねん (năm ngoái). Câu hỏi quá khứ chỉ cần thêm か: きのう、なにを しましたか (hôm qua bạn đã làm gì?).',
      examples: [
        { ja: 'きのう、デパートへ 行きました。', vi: 'Hôm qua tôi đã đến cửa hàng bách hóa.', tokens: ['きのう', 'デパート', 'へ', '行きました'] },
        { ja: 'せんしゅう の にちようびに うみへ 行きました。', vi: 'Chủ nhật tuần trước tôi đã đi biển.' },
        { ja: 'きのう、ばんごはんを 食べませんでした。', vi: 'Hôm qua tôi đã không ăn tối.' },
        { ja: 'きのう、なにを しましたか。', vi: 'Hôm qua bạn đã làm gì?' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'Chia 「行きます」 sang quá khứ khẳng định',
          sentence: 'きのう、かいしゃへ ___。',
          options: ['行きます', '行きました', '行ませんでした', '行ました'],
          answerIndex: 1, explanationVi: 'Quá khứ khẳng định: bỏ ます thêm ました → 行きました. 行ます/行ました không phải dạng đúng của tiếng Nhật.',
        },
        {
          kind: 'conjugate', prompt: 'Chia 「食べます」 sang quá khứ phủ định (hôm kia tôi KHÔNG ăn sushi)',
          sentence: 'おととい、すしを ___。',
          options: ['食べました', '食べませんでした', '食べません', '食べましたでした'],
          answerIndex: 1, explanationVi: 'Quá khứ phủ định = ませんでした. 食べません là phủ định HIỆN TẠI, 食べました là khẳng định quá khứ.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ',
          sentence: 'せんしゅう、こうえん___ いきました。',
          options: ['へ', 'を', 'と', 'の'],
          answerIndex: 0, explanationVi: 'こうえん là nơi đến của động từ di chuyển いきました → dùng へ. を là tân ngữ, と là người cùng đi, の nối hai danh từ.',
        },
        {
          kind: 'choice', prompt: '「Hôm qua tôi đã chụp ảnh ở công viên。」 câu nào đúng?',
          options: ['きのう、こうえんで しゃしんを とりました。', 'きのう、こうえんへ しゃしんを とりました。', 'きのう、こうえんで しゃしんを とります。', 'きのう、こうえんで しゃしんを とりましたです。'],
          answerIndex: 0, explanationVi: 'Nơi diễn ra hành động dùng で (こうえんで), hành động quá khứ dùng とりました. へ chỉ hướng đi của động từ di chuyển, とります là hiện tại.',
        },
        {
          kind: 'error', prompt: '「Năm ngoái tôi đã đến Nhật。」 câu nào đúng?',
          options: ['きょねん、にほんへ 来ました。', 'きょねん、にほんへ 来ましたです。', 'きょねん、にほんへ 来ませんでした。', 'きょねん、にほんへ 来ます。'],
          answerIndex: 0, explanationVi: '来ます → 来ました là đúng. 来ましたです là dạng thừa (ました đã mang nghĩa lịch sự), 来ませんでした là phủ định, 来ます là hiện tại.',
        },
        {
          kind: 'choice', prompt: '「きのう、どこへ 行きましたか。」 là câu hỏi về điều gì?',
          options: ['Đã đi đâu hôm qua', 'Sẽ đi đâu ngày mai', 'Đi cùng ai hôm qua', 'Đã làm gì hôm qua'],
          answerIndex: 0, explanationVi: 'どこへ hỏi ĐỊA ĐIỂM, 行きましたか là quá khứ → "hôm qua đã đi đâu". Câu hỏi "làm gì" là なにを しましたか.',
        },
      ],
    },
    {
      code: 'l11-deshita-ja-arimasendeshita',
      title: 'でした・じゃありませんでした — quá khứ của です',
      formation: 'Danh từ / tính từ な (bỏ です) + でした / じゃありませんでした',
      explanationVi:
        'Với danh từ và tính từ な, thể quá khứ của です là でした, còn phủ định quá khứ của じゃありません là じゃありませんでした. Ví dụ: たんじょうびでした (đã là sinh nhật), にぎやかでした (đã nhộn nhịp), やすみじゃありませんでした (đã không phải ngày nghỉ). Lưu ý: tính từ い có cách chia quá khứ riêng (sẽ học ở bài sau), không dùng でした với tính từ い.',
      examples: [
        { ja: 'きのうは たんじょうび でした。', vi: 'Hôm qua là sinh nhật của tôi.' },
        { ja: 'おまつりは にぎやか でした。', vi: 'Lễ hội rất nhộn nhịp.' },
        { ja: 'きのうは やすみ じゃありませんでした。', vi: 'Hôm qua không phải là ngày nghỉ.', tokens: ['きのう', 'は', 'やすみ', 'じゃありませんでした'] },
        { ja: 'ホテルは きれい でした。', vi: 'Khách sạn đẹp và sạch sẽ.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'Chia 「しずかです」 (yên tĩnh) sang quá khứ khẳng định',
          sentence: 'としょかんは ___。',
          options: ['しずかでした', 'しずかでしたです', 'しずかでしたました', 'しずかですでした'],
          answerIndex: 0, explanationVi: 'Tính từ な + quá khứ: しずかでした. でした đã là dạng hoàn chỉnh, không thêm です hay ました sau nó.',
        },
        {
          kind: 'conjugate', prompt: 'Chia 「やすみです」 sang quá khứ phủ định (hôm qua KHÔNG phải ngày nghỉ)',
          sentence: 'きのうは やすみ___。',
          options: ['じゃありません', 'でした', 'じゃありませんでした', 'じゃでした'],
          answerIndex: 2, explanationVi: 'Phủ định quá khứ: じゃありませんでした. じゃありません là phủ định hiện tại, でした là khẳng định quá khứ.',
        },
        {
          kind: 'fill', prompt: 'Hôm qua là sinh nhật của bạn tôi — điền từ còn thiếu',
          sentence: 'きのうは ともだちの ___ でした。',
          options: ['たんじょうび', 'すし', 'せんしゅう', 'おととい'],
          answerIndex: 0, explanationVi: '「sinh nhật」 là たんじょうび → たんじょうび でした. すし là món ăn, せんしゅう và おととい là từ chỉ thời gian.',
        },
        {
          kind: 'choice', prompt: '「おまつりは にぎやか でした。」 có nghĩa là gì?',
          options: ['Lễ hội không nhộn nhịp', 'Lễ hội rất nhộn nhịp', 'Lễ hội sẽ nhộn nhịp', 'Lễ hội ở đâu'],
          answerIndex: 1, explanationVi: 'にぎやか là tính từ な (nhộn nhịp) + でした (quá khứ khẳng định) → "lễ hội đã rất nhộn nhịp".',
        },
        {
          kind: 'error', prompt: '「Khách sạn đẹp và sạch (kể về quá khứ).」 câu nào đúng?',
          options: ['ホテルは きれい でした。', 'ホテルは きれいでしたです。', 'ホテルは きれい じゃありませんでした。', 'ホテルは きれいです でした。'],
          answerIndex: 0, explanationVi: 'きれい (tính từ な) + でした. きれいでしたです và きれいですでした là dạng gấp đôi sai; じゃありませんでした là phủ định.',
        },
        {
          kind: 'choice', prompt: '「きのうは にちようび でしたか。」 dùng để hỏi gì?',
          options: ['Hôm qua có phải Chủ nhật không', 'Hôm nay là thứ mấy', 'Hôm qua đã đi đâu', 'Bây giờ là mấy giờ'],
          answerIndex: 0, explanationVi: 'にちようび (Chủ nhật) + でしたか (câu hỏi quá khứ) → hỏi xác nhận "hôm qua là Chủ nhật chứ?".',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Cuối tuần vừa rồi',
      situationVi: 'Tanaka hỏi Linh về cuối tuần vừa qua của cô.',
      lines: [
        { speaker: 'たなか', ja: 'リンさん、しゅうまつは どこへ 行きましたか。', vi: 'Linh, cuối tuần vừa rồi cậu đi đâu?' },
        { speaker: 'リン', ja: 'ともだちと こうえんへ 行きました。', vi: 'Tôi đã đến công viên cùng bạn.' },
        { speaker: 'たなか', ja: 'こうえんで なにを しましたか。', vi: 'Ở công viên cậu đã làm gì?' },
        { speaker: 'リン', ja: 'しゃしんを とりました。', vi: 'Tôi đã chụp ảnh.' },
        { speaker: 'たなか', ja: 'ばんごはんは どこで 食べましたか。', vi: 'Bữa tối cậu đã ăn ở đâu?' },
        { speaker: 'リン', ja: 'レストランで 食べました。すしを 食べました。', vi: 'Tôi đã ăn ở nhà hàng. Tôi đã ăn sushi.' },
        { speaker: 'たなか', ja: 'いいですね。わたしも こんど こうえんへ 行きます。', vi: 'Tốt đấy. Dịp tới tôi cũng sẽ đến công viên.' },
        { speaker: 'リン', ja: 'ええ、いっしょに 行きましょう。', vi: 'Vâng, mình cùng đi nhé.' },
      ],
    },
    {
      titleVi: 'Chuyến đi năm ngoái',
      situationVi: 'Tanaka hỏi Linh về kỳ nghỉ hè năm ngoái của cô.',
      lines: [
        { speaker: 'たなか', ja: 'リンさん、きょねんの なつやすみは どこへ 行きましたか。', vi: 'Linh, kỳ nghỉ hè năm ngoái cậu đi đâu?' },
        { speaker: 'リン', ja: 'かぞくと りょこうへ 行きました。', vi: 'Tôi đã đi du lịch cùng gia đình.' },
        { speaker: 'たなか', ja: 'うみですか。やまですか。', vi: 'Là biển hay núi?' },
        { speaker: 'リン', ja: 'うみへ 行きました。', vi: 'Chúng tôi đã đi biển.' },
        { speaker: 'たなか', ja: 'うみで なにを しましたか。', vi: 'Ở biển các cậu đã làm gì?' },
        { speaker: 'リン', ja: 'およぎました。ともだちも 来ました。', vi: 'Chúng tôi đã bơi. Bạn tôi cũng đến.' },
        { speaker: 'たなか', ja: 'ホテルは きれい でしたか。', vi: 'Khách sạn có đẹp không?' },
        { speaker: 'リン', ja: 'はい、とても きれい でした。', vi: 'Vâng, rất đẹp và sạch.' },
        { speaker: 'たなか', ja: 'いい りょこう でしたね。', vi: 'Một chuyến đi thật đáng nhớ nhỉ.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'きのう、えいがを 見ました。', meaningVi: 'Hôm qua tôi đã xem phim.', choices: ['Hôm qua đã xem phim', 'Ngày mai sẽ xem phim', 'Hôm qua đã chụp ảnh', 'Hôm qua đã xem tivi'], answerIndex: 0, dictation: true },
    { scriptJa: 'せんしゅう、うみへ 行きました。', meaningVi: 'Tuần trước tôi đã đi biển.', choices: ['Tuần trước đã đi biển', 'Tuần trước đã đi núi', 'Năm ngoái đã đi biển', 'Tuần trước đã không đi biển'], answerIndex: 0 },
    { scriptJa: 'きのう、ばんごはんを 食べませんでした。', meaningVi: 'Hôm qua tôi đã không ăn tối.', choices: ['Hôm qua đã không ăn tối', 'Hôm qua đã ăn tối', 'Hôm nay không ăn tối', 'Hôm qua đã không ăn sáng'], answerIndex: 0, dictation: true },
    { scriptJa: 'おととい、ともだちが うちへ 来ました。', meaningVi: 'Hôm kia bạn đã đến nhà tôi.', choices: ['Hôm qua tôi đến nhà bạn', 'Hôm kia bạn đã đến nhà tôi', 'Hôm kia tôi đến nhà bạn', 'Hôm qua bạn đến nhà tôi'], answerIndex: 1 },
    { scriptJa: 'きのうは たんじょうび でした。', meaningVi: 'Hôm qua là sinh nhật của tôi.', choices: ['Hôm nay là sinh nhật', 'Sinh nhật rất vui', 'Hôm qua là sinh nhật', 'Hôm qua là Chủ nhật'], answerIndex: 2 },
  ],
  reading: {
    titleVi: 'Chủ nhật của Tanaka',
    lines: [
      { text: 'きのうは にちようび でした。', vi: 'Hôm qua là Chủ nhật.' },
      { text: 'あさ、ともだちと こうえんへ 行きました。', vi: 'Buổi sáng, tôi đã đến công viên cùng bạn.' },
      { text: 'こうえんで しゃしんを とりました。', vi: 'Ở công viên chúng tôi đã chụp ảnh.' },
      { text: 'ごご、こうえんから デパートへ 行きました。', vi: 'Buổi chiều, từ công viên chúng tôi đến cửa hàng bách hóa.' },
      { text: 'デパートの レストランで すしを 食べました。', vi: 'Chúng tôi đã ăn sushi ở nhà hàng trong cửa hàng bách hóa.' },
      { text: 'ごご ろくじごろ、うちへ 帰りました。', vi: 'Khoảng 6 giờ chiều, tôi đã về nhà.' },
      { text: 'こうえんも デパートも にぎやか でした。', vi: 'Cả công viên lẫn cửa hàng bách hóa đều nhộn nhịp.' },
    ],
    questions: [
      { questionVi: 'Buổi sáng hôm qua Tanaka đã đi đâu?', choices: ['Công viên', 'Cửa hàng bách hóa', 'Biển', 'Nhà hàng'], answerIndex: 0, explanationVi: 'Đoạn nói: あさ、ともだちと こうえんへ 行きました — buổi sáng đến công viên.' },
      { questionVi: 'Tanaka đã làm gì ở công viên?', choices: ['Ăn sushi', 'Chụp ảnh', 'Bơi', 'Đọc truyện tranh'], answerIndex: 1, explanationVi: 'こうえんで しゃしんを とりました = đã chụp ảnh ở công viên.' },
      { questionVi: 'Tanaka đã về nhà lúc mấy giờ?', choices: ['Khoảng 6 giờ sáng', '9 giờ tối', 'Khoảng 6 giờ chiều', 'Buổi trưa'], answerIndex: 2, explanationVi: 'ごご ろくじごろ、うちへ 帰りました — ごご (buổi chiều) + ろくじごろ (khoảng 6 giờ).' },
    ],
  },
  speakSentences: [
    { ja: 'きのう、こうえんへ 行きました。', vi: 'Hôm qua tôi đã đến công viên.' },
    { ja: 'すしを 食べました。', vi: 'Tôi đã ăn sushi.' },
    { ja: 'せんしゅう、うみへ 行きました。', vi: 'Tuần trước tôi đã đi biển.' },
    { ja: 'きのうは たんじょうび でした。', vi: 'Hôm qua là sinh nhật.' },
  ],
  translatePairs: [
    { ja: 'きのう、えいがを 見ました。', vi: 'Hôm qua tôi đã xem phim.', tokens: ['きのう', 'えいが', 'を', '見ました'], distractors: ['へ', '行きました'] },
    { ja: 'せんしゅう、ともだちと うみへ 行きました。', vi: 'Tuần trước tôi đã đi biển cùng bạn.', tokens: ['せんしゅう', 'ともだち', 'と', 'うみ', 'へ', '行きました'], distractors: ['で', 'きました'] },
    { ja: 'きのう、ばんごはんを 食べませんでした。', vi: 'Hôm qua tôi đã không ăn tối.', tokens: ['きのう', 'ばんごはん', 'を', '食べませんでした'], distractors: ['のみました', 'へ'] },
    { ja: 'きのうは やすみ でした。', vi: 'Hôm qua là ngày nghỉ.', tokens: ['きのう', 'は', 'やすみ', 'でした'], distractors: ['です', 'じゃありませんでした'] },
  ],
  kanji: ['行', '来', '見', '食'],
}
