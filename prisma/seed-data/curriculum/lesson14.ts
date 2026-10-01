/**
 * NihongoGo — Bài 14: Tiếp diễn 〜ている (hành động đang diễn ra + trạng thái).
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson14: CurriculumLesson = {
  order: 14,
  slug: 'l14-tiep-dien',
  title: 'Tiếp diễn — 〜ている',
  titleJa: '〜ている',
  description: 'Nói hành động đang diễn ra và trạng thái kéo dài với 〜ている.',
  learningObjectives: [
    'Diễn tả hành động đang xảy ra',
    'Dùng 〜ている cho trạng thái thường trực',
    'Hỏi ai đang làm gì',
  ],
  grammarTopics: ['〜ている (hành động đang tiếp diễn)', '〜ている (trạng thái còn duy trì)'],
  vocabularyTopics: ['Hoạt động đang diễn ra', 'Trạng thái quần áo, tư thế'],
  kanjiTopics: ['Kanji thời gian biểu (待・休・働)'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'いま', romaji: 'ima', meaningVi: 'bây giờ, lúc này', pos: 'phó từ', exampleJa: 'いま まんがを よんで います。', exampleVi: 'Bây giờ tôi đang đọc truyện tranh.' },
    { term: 'まちます', romaji: 'machimasu', meaningVi: 'chờ, đợi', pos: 'động từ nhóm 1', exampleJa: 'えきの まえで ともだちを まちます。', exampleVi: 'Tôi đợi bạn trước nhà ga.' },
    { term: 'はたらきます', romaji: 'hatarakimasu', meaningVi: 'làm việc', pos: 'động từ nhóm 1', exampleJa: 'かいしゃで はたらきます。', exampleVi: 'Tôi làm việc ở công ty.' },
    { term: 'やすみます', romaji: 'yasumimasu', meaningVi: 'nghỉ ngơi, nghỉ', pos: 'động từ nhóm 1', exampleJa: 'すいようびは やすみます。', exampleVi: 'Thứ Tư tôi nghỉ.' },
    { term: 'すみます', romaji: 'sumimasu', meaningVi: 'sống, cư trú', pos: 'động từ nhóm 1', exampleJa: 'なごやに すみます。', exampleVi: 'Tôi sống ở Nagoya.' },
    { term: 'けっこんします', romaji: 'kekkonshimasu', meaningVi: 'kết hôn, lấy vợ/chồng', pos: 'động từ nhóm 3', exampleJa: 'ことし けっこんします。', exampleVi: 'Năm nay tôi kết hôn.' },
    { term: 'ことし', romaji: 'kotoshi', meaningVi: 'năm nay', pos: 'danh từ', exampleJa: 'ことし とうきょうへ いきます。', exampleVi: 'Năm nay tôi đi Tokyo.' },
    { term: 'かぶります', romaji: 'kaburimasu', meaningVi: 'đội (mũ)', pos: 'động từ nhóm 1', exampleJa: 'しろい ぼうしを かぶります。', exampleVi: 'Tôi đội mũ trắng.' },
    { term: 'はきます', romaji: 'hakimasu', meaningVi: 'đi (giày, dép)', pos: 'động từ nhóm 1', exampleJa: 'あたらしい くつを はきます。', exampleVi: 'Tôi đi đôi giày mới.' },
    { term: 'でんわします', romaji: 'denwashimasu', meaningVi: 'gọi điện thoại', pos: 'động từ nhóm 3', exampleJa: 'うちへ かえって、でんわします。', exampleVi: 'Tôi về nhà rồi gọi điện.' },
    { term: 'ぼうし', romaji: 'bōshi', meaningVi: 'mũ, nón', pos: 'danh từ', exampleJa: 'たなかさんは ぼうしを かぶって います。', exampleVi: 'Tanaka đang đội mũ.' },
    { term: 'ふく', romaji: 'fuku', meaningVi: 'quần áo', pos: 'danh từ', exampleJa: 'あかい ふくを きて います。', exampleVi: 'Tôi đang mặc bộ đồ đỏ.' },
    { term: 'くつ', romaji: 'kutsu', meaningVi: 'giày', pos: 'danh từ', exampleJa: 'リンさんは しろい くつを はいて います。', exampleVi: 'Linh đang đi giày trắng.' },
    { term: 'ニュース', romaji: 'nyūsu', meaningVi: 'bản tin, tin tức', pos: 'danh từ', exampleJa: 'いま ニュースを きいて います。', exampleVi: 'Bây giờ tôi đang nghe bản tin.' },
    { term: 'まんが', romaji: 'manga', meaningVi: 'truyện tranh', pos: 'danh từ', exampleJa: 'まんがを よんで います。', exampleVi: 'Tôi đang đọc truyện tranh.' },
    { term: 'ドラマ', romaji: 'dorama', meaningVi: 'phim truyền hình', pos: 'danh từ', exampleJa: 'ドラマを みて います。', exampleVi: 'Tôi đang xem phim truyền hình.' },
    { term: 'なにか', romaji: 'nanika', meaningVi: 'gì đó, cái gì đó', pos: 'danh từ (từ hỏi)', exampleJa: 'なにか たべて います。', exampleVi: 'Tôi đang ăn gì đó.' },
    { term: 'しごと', romaji: 'shigoto', meaningVi: 'công việc', pos: 'danh từ', exampleJa: 'しごとを して います。', exampleVi: 'Tôi đang làm việc.' },
    { term: 'あかい', romaji: 'akai', meaningVi: 'đỏ (màu)', pos: 'tính từ い', exampleJa: 'あかい りんごを かいました。', exampleVi: 'Tôi đã mua quả táo đỏ.' },
    { term: 'しろい', romaji: 'shiroi', meaningVi: 'trắng (màu)', pos: 'tính từ い', exampleJa: 'しろい くつを はきます。', exampleVi: 'Tôi đi giày trắng.' },
    { term: 'たのしい', romaji: 'tanoshii', meaningVi: 'vui vẻ, thú vị', pos: 'tính từ い', exampleJa: 'きょうは たのしいです。', exampleVi: 'Hôm nay thật vui.' },
  ],
  grammar: [
    {
      code: 'l14-te-imasu-action',
      title: '〜て います — hành động đang diễn ra',
      formation: 'Thể て + います',
      explanationVi:
        'Lấy thể て đã học ở bài 13 rồi thêm います để nói hành động ĐANG diễn ra ngay tại thời điểm nói: たべて います = đang ăn, よんで います = đang đọc, きいて います = đang nghe. Câu này thường đi với phó từ いま (bây giờ). Muốn hỏi "đang làm gì?" dùng なにを して いますか. Lưu ý: sau thể て luôn là います, không dùng です.',
      examples: [
        { ja: 'いま ごはんを たべて います。', vi: 'Bây giờ tôi đang ăn cơm.', tokens: ['いま', 'ごはん', 'を', 'たべて', 'います'] },
        { ja: 'リンさんは ニュースを きいて います。', vi: 'Linh đang nghe bản tin.', tokens: ['リンさん', 'は', 'ニュース', 'を', 'きいて', 'います'] },
        { ja: 'いま えいがを みて います。', vi: 'Bây giờ tôi đang xem phim.' },
        { ja: 'いま なにを して いますか。', vi: 'Bây giờ bạn đang làm gì?' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'Chia たべます sang thể て rồi hoàn thành câu "đang ăn cơm"',
          sentence: 'いま ごはんを ___ います。',
          options: ['たべて', 'たべって', 'たべんて', 'たべます'],
          answerIndex: 0, explanationVi: 'たべます là động từ nhóm 2: bỏ ます thêm て → たべて. たべて います = đang ăn.',
        },
        {
          kind: 'choice', prompt: '「いま なにを して いますか。」 có nghĩa là gì?',
          options: ['Bây giờ bạn đang làm gì?', 'Bây giờ bạn muốn làm gì?', 'Bây giờ bạn đã làm gì?', 'Bây giờ bạn thường làm gì?'],
          answerIndex: 0, explanationVi: '〜て います diễn tả hành động đang diễn ra ngay lúc nói, nên câu hỏi tương ứng là "đang làm gì?".',
        },
        {
          kind: 'error', prompt: 'Câu nào nói đúng "Tanaka đang nghe nhạc"?',
          options: ['たなかさんは おんがくを きいて です。', 'たなかさんは おんがくを きいて います。', 'たなかさんは おんがくを ききって います。', 'たなかさんは おんがくを ききます います。'],
          answerIndex: 1, explanationVi: 'Sau thể て phải là います, không dùng です. ききます (nhóm 1, âm く) có thể て là きいて, không phải ききって.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ',
          sentence: 'リンさんは テレビ___ みて います。',
          options: ['を', 'に', 'で', 'へ'],
          answerIndex: 0, explanationVi: 'テレビ là tân ngữ (vật bị xem) → を (đã học ở bài 6). で chỉ nơi diễn ra hành động, へ chỉ hướng đi.',
        },
        {
          kind: 'fill', prompt: 'Điền dạng đúng của まちます (đang đợi bạn)',
          sentence: 'えきの まえで ともだちを ___ います。',
          options: ['まちて', 'まちって', 'まって', 'まて'],
          answerIndex: 2, explanationVi: 'まちます (gốc まつ, nhóm 1): つ → って nên thể て là まって. まって います = đang đợi.',
        },
      ],
    },
    {
      code: 'l14-te-imasu-state',
      title: '〜て います — trạng thái còn duy trì',
      formation: 'Thể て + います (với động từ diễn tả kết quả hoặc trang phục)',
      explanationVi:
        'Với những động từ biểu thị kết quả của một sự việc (けっこんします, すみます) hay trang phục (かぶります, はきます), 〜て います không nói hành động đang diễn ra mà nói TRẠNG THÁI còn tiếp tục: けっこんして います = đã kết hôn (và vẫn còn), おおさかに すんで います = đang sống ở Osaka, ぼうしを かぶって います = (trên đầu) đang đội mũ. Đây là cách người Nhật mô tả chuyện thường trực như hôn nhân, nơi ở, trang phục.',
      examples: [
        { ja: 'たなかさんは けっこんして います。', vi: 'Tanaka đã kết hôn.', tokens: ['たなかさん', 'は', 'けっこんして', 'います'] },
        { ja: 'リンさんは おおさかに すんで います。', vi: 'Linh đang sống ở Osaka.' },
        { ja: 'せんせいは あかい ぼうしを かぶって います。', vi: 'Giáo viên đang đội chiếc mũ đỏ.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '「たなかさんは けっこんして います。」 có nghĩa là gì?',
          options: ['Tanaka đã kết hôn (và vẫn còn)', 'Tanaka đang tiến hành đám cưới', 'Tanaka muốn kết hôn', 'Tanaka thường kết hôn'],
          answerIndex: 0, explanationVi: 'けっこんして います diễn tả trạng thái "đã kết hôn" còn duy trì, không phải hành động đang diễn ra tại thời điểm nói.',
        },
        {
          kind: 'fill', prompt: 'Điền thể て của すみます (Linh đang sống ở Osaka)',
          sentence: 'リンさんは おおさかに ___ います。',
          options: ['すみて', 'すんで', 'すって', 'すんて'],
          answerIndex: 1, explanationVi: 'すみます (gốc すむ, nhóm 1): む → んで nên thể て là すんで. すんで います = đang sống ở.',
        },
        {
          kind: 'error', prompt: 'Câu nào mô tả đúng trạng thái "đang đội mũ đỏ"?',
          options: ['あかい ぼうしを かぶりて います。', 'あかい ぼうしを かぶって です。', 'あかい ぼうしを かぶんて います。', 'あかい ぼうしを かぶって います。'],
          answerIndex: 3, explanationVi: 'かぶります (gốc かぶる, nhóm 1): る → って → かぶって. Sau thể て dùng います, không dùng です.',
        },
        {
          kind: 'choice', prompt: 'Câu nào nói về TRẠNG THÁI (không phải hành động đang xảy ra)?',
          options: ['ごはんを たべて います。', 'まんがを よんで います。', 'けっこんして います。', 'でんわして います。'],
          answerIndex: 2, explanationVi: 'けっこんして います là trạng thái "đã kết hôn" kéo dài; ba câu còn lại là hành động đang diễn ra ngay lúc nói.',
        },
        {
          kind: 'conjugate', prompt: 'Chia はきます sang thể て + います (Linh đang đi giày trắng)',
          sentence: 'リンさんは しろい くつを ___ います。',
          options: ['はいって', 'はいて', 'はきて', 'はって'],
          answerIndex: 1, explanationVi: 'はきます (gốc はく, nhóm 1): く → いて → はいて. Cẩn thận: はいって là thể て của はいります (bước vào) — dễ nhầm với はいて.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Bạn đang làm gì vậy?',
      situationVi: 'Tanaka gọi điện cho Linh vào buổi tối.',
      lines: [
        { speaker: 'たなか', ja: 'リンさん、いま なにを して いますか。', vi: 'Linh, bây giờ bạn đang làm gì vậy?' },
        { speaker: 'リン', ja: 'いま まんがを よんで います。', vi: 'Bây giờ tôi đang đọc truyện tranh.' },
        { speaker: 'たなか', ja: 'そうですか。あした ひまですか。', vi: 'Vậy à. Ngày mai bạn rảnh không?' },
        { speaker: 'リン', ja: 'ええ、ひまですよ。', vi: 'Vâng, tôi rảnh đấy.' },
        { speaker: 'たなか', ja: 'じゃ、あした えいがを みませんか。', vi: 'Vậy ngày mai cùng xem phim nhé?' },
        { speaker: 'リン', ja: 'いいですね。なんじからですか。', vi: 'Hay đấy. Bắt đầu từ mấy giờ?' },
        { speaker: 'たなか', ja: 'ごご はちじからです。えいがかんで あいましょう。', vi: 'Từ 8 giờ tối. Gặp nhau ở rạp phim nhé.' },
        { speaker: 'リン', ja: 'えいがかんの まえで あいましょう。', vi: 'Gặp nhau trước rạp phim nhé.' },
        { speaker: 'たなか', ja: 'わかりました。じゃ、また あした。', vi: 'Được rồi. Hẹn gặp lại ngày mai.' },
      ],
    },
    {
      titleVi: 'Người kia là ai vậy?',
      situationVi: 'Ở công viên, Tanaka hỏi về một người đứng phía xa.',
      lines: [
        { speaker: 'たなか', ja: 'リンさん、あの ひとは だれですか。', vi: 'Linh, người kia là ai vậy?' },
        { speaker: 'リン', ja: 'どの ひとですか。', vi: 'Người nào cơ?' },
        { speaker: 'たなか', ja: 'あそこに いますね。ぼうしを かぶって います。', vi: 'Người ở đằng kia ấy. Đang đội mũ ấy.' },
        { speaker: 'リン', ja: 'ああ、わたしの だいがくの せんせいです。', vi: 'À, thầy giáo đại học của tôi đấy.' },
        { speaker: 'たなか', ja: 'せんせいは けっこんして いますか。', vi: 'Thầy đã kết hôn chưa?' },
        { speaker: 'リン', ja: 'はい、けっこんして います。こどもが ふたり います。', vi: 'Vâng, thầy đã kết hôn rồi. Có hai con.' },
        { speaker: 'たなか', ja: 'せんせいは どこに すんで いますか。', vi: 'Thầy đang sống ở đâu?' },
        { speaker: 'リン', ja: 'おおさかに すんで います。', vi: 'Thầy đang sống ở Osaka.' },
        { speaker: 'たなか', ja: 'しずかな まちですか。', vi: 'Đó là một thành phố yên tĩnh à?' },
        { speaker: 'リン', ja: 'はい、とても しずかです。', vi: 'Vâng, rất yên tĩnh.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'いま ごはんを たべて います。', meaningVi: 'Bây giờ tôi đang ăn cơm.', choices: ['Bây giờ tôi đang ăn cơm', 'Bây giờ tôi đang nấu cơm', 'Tôi đã ăn cơm rồi', 'Tôi muốn ăn cơm bây giờ'], answerIndex: 0, dictation: true },
    { scriptJa: 'たなかさんは でんわして います。', meaningVi: 'Tanaka đang gọi điện thoại.', choices: ['Tanaka đang gọi điện thoại', 'Tanaka đang nghe điện thoại', 'Tanaka muốn gọi điện', 'Tanaka đã gọi điện xong'], answerIndex: 0, dictation: true },
    { scriptJa: 'えきの まえで ともだちを まって います。', meaningVi: 'Tôi đang đợi bạn trước nhà ga.', choices: ['Đang đợi bạn trước nhà ga', 'Đang đợi bạn trong nhà ga', 'Đang gặp bạn trước nhà ga', 'Đang đợi tàu trước nhà ga'], answerIndex: 0 },
    { scriptJa: 'リンさんは おおさかに すんで います。', meaningVi: 'Linh đang sống ở Osaka.', choices: ['Linh sống ở Tokyo', 'Linh sống ở Osaka', 'Linh muốn sống ở Osaka', 'Linh đã từng sống ở Osaka'], answerIndex: 1 },
    { scriptJa: 'いま なにを して いますか。', meaningVi: 'Bây giờ bạn đang làm gì?', choices: ['Bây giờ bạn đang làm gì?', 'Hôm qua bạn đã làm gì?', 'Ngày mai bạn định làm gì?', 'Bạn thường làm gì mỗi ngày?'], answerIndex: 0 },
  ],
  reading: {
    titleVi: 'Chủ nhật của Linh',
    lines: [
      { text: 'きょうは にちようびです。リンさんは うちに います。', vi: 'Hôm nay là Chủ nhật. Linh ở nhà.' },
      { text: 'リンさんは いま まんがを よんで います。', vi: 'Bây giờ Linh đang đọc truyện tranh.' },
      { text: 'ともだちは おんがくを きいて います。', vi: 'Bạn của Linh đang nghe nhạc.' },
      { text: 'いぬも ねて います。', vi: 'Con chó cũng đang ngủ.' },
      { text: 'ごご ともだちと えいがかんへ いきます。', vi: 'Buổi chiều Linh đi rạp phim cùng bạn.' },
      { text: 'えいがは さんじからです。', vi: 'Bộ phim bắt đầu từ 3 giờ.' },
      { text: 'にちようびは とても たのしいです。', vi: 'Chủ nhật thật là vui.' },
    ],
    questions: [
      { questionVi: 'Bây giờ Linh đang làm gì?', choices: ['Nghe nhạc', 'Đi ngủ', 'Đọc truyện tranh', 'Xem phim'], answerIndex: 2, explanationVi: 'Dòng 2: リンさんは いま まんがを よんで います = Linh đang đọc truyện tranh (まんが).' },
      { questionVi: 'Bạn của Linh đang làm gì?', choices: ['Đọc truyện tranh', 'Nghe nhạc', 'Bơi', 'Gọi điện thoại'], answerIndex: 1, explanationVi: 'Dòng 3: ともだちは おんがくを きいて います = bạn đang nghe nhạc.' },
      { questionVi: 'Buổi chiều Linh đi đâu cùng bạn?', choices: ['Đến rạp chiếu phim', 'Đến hồ bơi', 'Đến thư viện', 'Đến công ty'], answerIndex: 0, explanationVi: 'Dòng 5: ごご ともだちと えいがかんへ いきます = chiều đi rạp phim (えいがかん) cùng bạn.' },
    ],
  },
  speakSentences: [
    { ja: 'いま ごはんを たべて います。', vi: 'Bây giờ tôi đang ăn cơm.' },
    { ja: 'なにを して いますか。', vi: 'Bạn đang làm gì vậy?' },
    { ja: 'えきの まえで ともだちを まって います。', vi: 'Tôi đang đợi bạn trước nhà ga.' },
    { ja: 'たなかさんは けっこんして います。', vi: 'Tanaka đã kết hôn.' },
  ],
  translatePairs: [
    { ja: 'いま まんがを よんで います。', vi: 'Bây giờ tôi đang đọc truyện tranh.', tokens: ['いま', 'まんが', 'を', 'よんで', 'います'], distractors: ['たべて', 'みます'] },
    { ja: 'いま なにを して いますか。', vi: 'Bây giờ bạn đang làm gì?', tokens: ['いま', 'なに', 'を', 'して', 'います', 'か'], distractors: ['へ', 'ました'] },
    { ja: 'たなかさんは はたらいて います。', vi: 'Tanaka đang làm việc.', tokens: ['たなかさん', 'は', 'はたらいて', 'います'], distractors: ['はたらきます', 'いません'] },
    { ja: 'リンさんは おおさかに すんで います。', vi: 'Linh đang sống ở Osaka.', tokens: ['リンさん', 'は', 'おおさか', 'に', 'すんで', 'います'], distractors: ['へ', 'あります'] },
    { ja: 'ぼうしを かぶって います。', vi: 'Tôi đang đội mũ.', tokens: ['ぼうし', 'を', 'かぶって', 'います'], distractors: ['はいて', 'きて'] },
  ],
  kanji: ['待', '休', '働'],
}
