/**
 * NihongoGo — Irodori A1 · Bài 17: いきたいところ (Nơi muốn đến & cảm nghĩ).
 * Kết hợp たい + điểm đến, nối câu bằng そして/でも, gợi ý với 〜は どうですか.
 * Nội dung GỐC — không sao chép dialogue/ví dụ/bài tập từ bất kỳ giáo trình
 * có bản quyền nào.
 * Provenance: ORIGINAL_GENERATED · MACHINE_REVIEWED (validator + audit).
 */
import type { IrodoriLesson } from './types'

export const irodori17: IrodoriLesson = {
  order: 17,
  slug: 'irodori-17',
  title: 'いきたいところ — Nơi muốn đến & cảm nghĩ',
  titleJa: 'いろどり A1 いきたいところ',
  description: 'Kể nơi muốn ghé, cảm nhận nơi đó thế nào và gợi ý cho bạn cùng đi — lời chốt cho chuyến dạo phố trọn vẹn đầu tiên của bạn.',
  learningObjectives: [
    'Nói nơi muốn đến: [nơi]へ 〜たいです',
    'Nối hai câu cảm nghĩ bằng そして / でも',
    'Gợi ý hỏi ý kiến bằng 〜は どうですか',
  ],
  grammarTopics: ['[nơi]へ 〜たいです', 'そして / でも — từ nối', '〜は どうですか — gợi ý'],
  vocabularyTopics: ['Địa điểm tham quan', 'Tính từ cảm nhận', 'Từ nối câu'],
  kanjiTopics: ['所', '見'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'ところ', romaji: 'tokoro', meaningVi: 'nơi, chỗ', pos: 'danh từ', exampleJa: 'いきたい ところが あります。', exampleVi: 'Có nơi tôi muốn đến.' },
    { term: 'おてら', romaji: 'otera', meaningVi: 'chùa (Phật giáo)', pos: 'danh từ', exampleJa: 'おてらへ いきたいです。', exampleVi: 'Tôi muốn đi chùa.' },
    { term: 'じんじゃ', romaji: 'jinja', meaningVi: 'đền thờ Shinto', pos: 'danh từ', exampleJa: 'じんじゃは しずかです。', exampleVi: 'Đền thờ rất yên tĩnh.' },
    { term: 'びじゅつかん', romaji: 'bijutsukan', meaningVi: 'bảo tàng mỹ thuật', pos: 'danh từ', exampleJa: 'びじゅつかんで えを みます。', exampleVi: 'Tôi xem tranh ở bảo tàng mỹ thuật.' },
    { term: 'たてもの', romaji: 'tatemono', meaningVi: 'toà nhà, công trình', pos: 'danh từ', exampleJa: 'この たてものは ゆうめいです。', exampleVi: 'Toà nhà này nổi tiếng lắm.' },
    { term: 'ゆうめい', romaji: 'yūmei', meaningVi: 'nổi tiếng', pos: 'tính từ な', exampleJa: 'あの みせは ゆうめいです。', exampleVi: 'Cửa hàng đó nổi tiếng đấy.' },
    { term: 'きれい', romaji: 'kirei', meaningVi: 'đẹp, sạch sẽ', pos: 'tính từ な', exampleJa: 'はなは とても きれいです。', exampleVi: 'Hoa đẹp lắm.' },
    { term: 'にぎやか', romaji: 'nigiyaka', meaningVi: 'nhộn nhịp, đông vui', pos: 'tính từ な', exampleJa: 'あさの まちは にぎやかです。', exampleVi: 'Phố buổi sáng nhộn nhịp.' },
    { term: 'たのしい', romaji: 'tanoshii', meaningVi: 'vui vẻ', pos: 'tính từ い', exampleJa: 'りょこうは たのしいです。', exampleVi: 'Đi du lịch vui lắm.' },
    { term: 'つまらない', romaji: 'tsumaranai', meaningVi: 'nhàm chán', pos: 'tính từ い', exampleJa: 'この えいがは つまらないです。', exampleVi: 'Bộ phim này nhàm chán.' },
    { term: 'わるい', romaji: 'warui', meaningVi: 'xấu, tồi, không khoẻ', pos: 'tính từ い', exampleJa: 'あさから きぶんが わるいです。', exampleVi: 'Từ sáng tinh thần tôi không được tốt.' },
    { term: 'それから', romaji: 'sorekara', meaningVi: 'sau đó, rồi thì', pos: 'từ nối', exampleJa: 'おてらへ いきます。それから、かいものを します。', exampleVi: 'Tôi đi chùa. Sau đó đi mua sắm.' },
    { term: 'ひろい', romaji: 'hiroi', meaningVi: 'rộng rãi', pos: 'tính từ い', exampleJa: 'この こうえんは ひろいです。', exampleVi: 'Công viên này rộng lắm.' },
    { term: 'しんせつ', romaji: 'shinsetsu', meaningVi: 'tận tình, nhiệt tâm', pos: 'tính từ な', exampleJa: 'この みせの ひとは しんせつです。', exampleVi: 'Người ở cửa hàng này rất tận tình.' },
  ],
  grammar: [
    {
      code: 'i17-tokoro-e-tai',
      title: '[nơi]へ 〜たいです — muốn đến đâu / muốn làm ở đó',
      formation: '[điểm đến] + へ + động từ-tai + です',
      explanationVi:
        'Kết hợp bài 16 (たいです) với điểm đến (へ từ bài 13): きょうとへ いきたいです (tôi muốn đi Kyoto), おてらを みたいです (tôi muốn NGẮM chùa — みます + たい). Hai mẫu thường đi cùng nhau: まず おてらへ いって、それから びじゅつかんを みたいです. Lưu ý nuance: いきたい nói về HÀNH TRÌNH; みたい nói về THỨ muốn NGẮM. Hỏi bạn: どこへ いきたいですか (bạn muốn đi đâu?).',
      examples: [
        { ja: 'きょうとへ おてらを みたいです。', vi: 'Tôi muốn đi Kyoto để ngắm chùa.', tokens: ['きょうと', 'へ', 'おてら', 'を', 'みたい', 'です'] },
        { ja: 'どこへ いきたいですか。', vi: 'Bạn muốn đi đâu?' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '「Tôi muốn ngắm chùa」 — câu nào đúng?',
          options: ['おてらを みたいです。', 'おてらを みたい ます。', 'おてらが みます たいです。', 'おてらへ みたい です。'],
          answerIndex: 0, explanationVi: 'みます → bỏ ます + たい → みたいです. Đối tượng ngắm đi với を.',
        },
        {
          kind: 'particle', prompt: 'Chọn trợ từ đúng (Tôi muốn đi chùa)',
          sentence: 'おてら___ いきたいです。',
          options: ['へ', 'を', 'が', 'も'],
          answerIndex: 0, explanationVi: 'Điểm đến + へ + いきたいです. を dành cho đối tượng NGẮM (おてらを みたい).',
        },
        {
          kind: 'fill', prompt: 'Điền từ còn thiếu (Bạn muốn đi đâu?)',
          sentence: '___へ いきたいですか。',
          options: ['どこ', 'なに', 'だれ', 'いつ'],
          answerIndex: 0, explanationVi: 'Hỏi ĐIỂM ĐẾN → どこ. なに hỏi vật; だれ hỏi người; いつ hỏi lúc nào.',
        },
        {
          kind: 'choice', prompt: '「Tôi muốn xem tranh ở bảo tàng」 — câu nào tự nhiên?',
          options: ['びじゅつかんで えを みたいです。', 'びじゅつかんを えへ みたいです。', 'びじゅつかんへ えが みます。', 'えを びじゅつかんに みたい です。'],
          answerIndex: 0, explanationVi: 'Nơi diễn ra hoạt động + で (びじゅつかんで) + đối tượng + を + みたいです.',
        },
      ],
    },
    {
      code: 'i17-soshite-demo',
      title: 'そして / でも — nối hai câu',
      formation: '[câu 1]。そして/でも、[câu 2]。',
      explanationVi:
        'そして (và, sau đó) nối hai ý CÙNG CHIỀU hoặc tiếp nối: この まちは にぎやかです。そして、とても きれいです (khu này nhộn nhịp. Và đẹp lắm). でも (nhưng) nối hai ý NGƯỢC CHIỀU: きっぷは たかいです。でも、たのしいです (vé đắt. Nhưng vui). Ghi nhớ: そして = cộng dồn cảm xúc; でも = xoay chiều. Đứng ĐẦU câu phía sau, có dấu chấm trước nó — đây là kỹ năng làm bài nói A1 "hai câu liền mạch" cực ăn điểm.',
      examples: [
        { ja: 'この まちは にぎやかです。そして、きれいです。', vi: 'Khu này nhộn nhịp. Và còn đẹp nữa.', tokens: ['この', 'まち', 'は', 'にぎやか', 'です', 'そして', 'きれい', 'です'] },
        { ja: 'やまは とおいです。でも、たのしいです。', vi: 'Núi thì xa. Nhưng vui lắm.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Nối: 「Đền yên tĩnh. VÀ đẹp nữa」 — từ nào phù hợp?',
          options: ['でも', 'そして', 'それで', 'じゃあ'],
          answerIndex: 1, explanationVi: 'Hai ý cùng chiều (yên tĩnh + đẹp) → そして. でも dùng khi NGƯỢC chiều.',
        },
        {
          kind: 'choice', prompt: '「Vé đắt. NHƯNG vui」 — từ nào phù hợp?',
          options: ['そして', 'でも', 'それから', 'ですから'],
          answerIndex: 1, explanationVi: 'Ý ngược chiều (đắt ≠ vui) → でも. Đây là cách nói "xứng đáng" kinh điển.',
        },
        {
          kind: 'fill', prompt: 'Điền từ nối (Chùa đẹp. ____, bảo tàng cũng hay)',
          sentence: 'おてらは きれいです。___、びじゅつかんも いいです。',
          options: ['それから', 'でも', 'だめ', 'はい'],
          answerIndex: 0, explanationVi: 'Liệt kê tiếp (chùa → bảo tàng) → それから/そして. でも là tương phản, sai ngữ cảnh.',
        },
        {
          kind: 'error', prompt: 'Cách nối nào SAI vị trí?',
          options: ['きれいです。そして、にぎやかです。', 'きれいで、そして にぎやかです。', 'そして きれいです。にぎやかです。', 'きれいそして にぎやかです。'],
          answerIndex: 3, explanationVi: 'そして đứng ĐẦU câu mới, sau dấu chấm — ghép dính vào giữa là sai vị trí.',
        },
      ],
    },
    {
      code: 'i17-dou-desuka',
      title: '〜は どうですか — gợi ý & hỏi ý kiến',
      formation: '[đề nghị] + は + どうですか',
      explanationVi:
        'Mẫu gợi ý quốc dân: 〜は どうですか — "… thì sao? / … thấy thế nào?". Gợi ý địa điểm: やまは どうですか (núi thì sao nhỉ?). Hỏi cảm nhận sau khi đi: きょうとは どうでしたか (Kyoto thế nào rồi? — quá khứ). Đáp: とても たのしかったです (vui lắm) / つまらなかったです (nhàm thật). Kết hợp ましょう (bài 10): じゃあ、いきましょう (vậy thì đi thôi) — trọn bộ "gợi ý → đồng ý → đi".',
      examples: [
        { ja: 'びじゅつかんは どうですか。', vi: 'Bảo tàng mỹ thuật thì sao nhỉ?', tokens: ['びじゅつかん', 'は', 'どう', 'です', 'か'] },
        { ja: 'きょうとは どうでしたか。', vi: 'Kyoto thế nào rồi (sau chuyến đi)?' },
      ],
      drills: [
        {
          kind: 'fill', prompt: 'Điền từ còn thiếu (Công viên thì sao nhỉ?)',
          sentence: 'こうえん___ どうですか。',
          options: ['は', 'を', 'へ', 'が'],
          answerIndex: 0, explanationVi: 'Chủ đề được nhắc tới → は. Mẫu gợi ý: N は どうですか.',
        },
        {
          kind: 'choice', prompt: 'Sau chuyến đi, hỏi 「Kyoto thế nào rồi?」 — câu nào?',
          options: ['きょうとは どうでしたか。', 'きょうとは どうですか。', 'きょうとへ どうですか。', 'きょうとが どうしましたか。'],
          answerIndex: 0, explanationVi: 'Cảm nhận SAU trải nghiệm dùng quá khứ: どうでしたか. どうですか là hỏi trước/sắp tới.',
        },
        {
          kind: 'choice', prompt: 'Đáp tích cực cho 「やまは どうですか。」',
          options: ['たのしいです！', 'つまらないです。', 'だめです。', 'わかりません。'],
          answerIndex: 0, explanationVi: 'Đồng ý gợi ý: たのしいです！ (vui mà!) — sau đó thường kèm いきましょう！',
        },
        {
          kind: 'error', prompt: 'Câu gợi ý nào SAI trợ từ?',
          options: ['うみは どうですか。', 'ドライブは どうですか。', 'おてらが どうですか。', 'らいしゅうは どうですか。'],
          answerIndex: 2, explanationVi: 'Chủ đề gợi ý dùng は, không dùng が. が どうですか là cấu trúc sai.',
        },
      ],
    },
  ],
  dialogue: {
    titleVi: 'Chọn nơi đi trong ngày nghỉ',
    situationVi: 'An và Yamada nhìn bản đồ thành phố, chọn điểm đến cho ngày nghỉ.',
    lines: [
      { speaker: 'あん', text: 'やまださん、ひろい こうえんの ちかくに なにが ありますか。', vi: 'Anh Yamada, gần công viên rộng kia có gì vậy?' },
      { speaker: 'やまだ', text: 'ゆうめいな おてらが ありますよ。とても きれいです。', vi: 'Có một ngôi chùa nổi tiếng đó. Đẹp lắm.' },
      { speaker: 'あん', text: 'おてらを みたいです！それから、びじゅつかんも ありますか。', vi: 'Em muốn ngắm chùa! Sau đó, còn bảo tàng không ạ?' },
      { speaker: 'やまだ', text: 'あります。でも、きょうは ひまな ひとが おおいです。', vi: 'Có. Nhưng hôm nay người rảnh nhiều lắm.' },
      { speaker: 'あん', text: 'じゃあ、あさっては どうですか。', vi: 'Vậy ngày mốt thì sao ạ?' },
      { speaker: 'やまだ', text: 'いいですね。あさっては しずかでしょう。', vi: 'Hay đấy. Ngày mốt chắc yên tĩnh lắm.' },
      { speaker: 'あん', text: 'おてらへ いって、それから みせへ いきます。', vi: 'Em đi chùa, sau đó ghé cửa hàng ạ.' },
      { speaker: 'やまだ', text: 'あの みせの ひとは しんせつですよ。たのしみですね。', vi: 'Người ở cửa hàng đó tận tình lắm. Mong chờ nhỉ.' },
    ],
    questions: [
      { questionVi: 'Gần công viên có gì nổi tiếng?', choices: ['Bảo tàng', 'Ngôi chùa', 'Cửa hàng', 'Nhà ga'], answerIndex: 1, explanationVi: 'ゆうめいな おてらが ありますよ — có ngôi chùa nổi tiếng.' },
      { questionVi: 'Vì sao hai người chọn ngày mốt?', choices: ['Vì rẻ hơn', 'Vì vắng người hơn', 'Vì trời đẹp', 'Vì tàu rảnh'], answerIndex: 1, explanationVi: 'Hôm nay người đông (ひとが おおい) → chọn あさって để yên tĩnh hơn.' },
      { questionVi: 'Người ở cửa hàng ra sao?', choices: ['Nổi tiếng', 'Tận tình', 'Đông đúc', 'Nhàm chán'], answerIndex: 1, explanationVi: 'あの みせの ひとは しんせつですよ — người cửa hàng tận tình.' },
    ],
  },
  listening: [
    { scriptJa: 'おてらを みたいです。', meaningVi: 'Tôi muốn ngắm chùa.', choices: ['Tôi muốn đi chùa một mình', 'Tôi muốn ngắm chùa', 'Tôi đã ngắm chùa rồi', 'Chùa đẹp quá'], answerIndex: 1 },
    { scriptJa: 'この まちは にぎやかです。', meaningVi: 'Khu phố này nhộn nhịp.', choices: ['Khu phố này yên tĩnh', 'Khu phố này nhộn nhịp', 'Khu phố này rộng', 'Khu phố này cũ'], answerIndex: 1 },
    { scriptJa: 'びじゅつかんは どうですか。', meaningVi: 'Bảo tàng mỹ thuật thì sao nhỉ?', choices: ['Bảo tàng ở đâu?', 'Bảo tàng thế nào nhỉ?', 'Bảo tàng mở lúc mấy giờ?', 'Bảo tàng xa không?'], answerIndex: 1 },
    { scriptJa: 'この こうえんは ひろいです。', meaningVi: 'Công viên này rộng lắm.', choices: ['Công viên này rộng', 'Công viên này đẹp', 'Công viên này gần', 'Công viên này yên tĩnh'], answerIndex: 0, dictation: true },
    { scriptJa: 'あの たてものは ゆうめいです。', meaningVi: 'Toà nhà kia nổi tiếng lắm.', choices: ['Toà nhà kia đẹp', 'Toà nhà kia cao', 'Toà nhà kia nổi tiếng', 'Toà nhà kia cũ'], answerIndex: 2, dictation: true },
  ],
  reading: {
    titleVi: 'Một ngày ở thành phố cổ',
    lines: [
      { text: 'きょうは やすみです。まちを あるきます。', vi: 'Hôm nay nghỉ. Tôi dạo phố.' },
      { text: 'まず、ゆうめいな おてらへ いきます。', vi: 'Trước tiên, tôi đến ngôi chùa nổi tiếng.' },
      { text: 'おてらは しずかで、とても きれいです。', vi: 'Chùa yên tĩnh và rất đẹp.' },
      { text: 'それから、びじゅつかんへ いきます。', vi: 'Sau đó, tôi đến bảo tàng mỹ thuật.' },
      { text: 'そこは ちいさいですが、えは すばらしいです。', vi: 'Nơi đó nhỏ, nhưng tranh tuyệt vời.' },
      { text: 'まちの ひとも しんせつで、たのしい いちにちでした。', vi: 'Người phố cũng tận tình — một ngày rất vui.' },
    ],
    questions: [
      { questionVi: 'Người viết đến đâu TRƯỚC TIÊN?', choices: ['Bảo tàng', 'Chùa nổi tiếng', 'Cửa hàng', 'Công viên'], answerIndex: 1, explanationVi: 'まず、ゆうめいな おてらへ いきます — trước tiên là chùa nổi tiếng.' },
      { questionVi: 'Chùa có đặc điểm gì?', choices: ['Nhộn nhịp và to', 'Yên tĩnh và đẹp', 'Nhỏ và cũ', 'Xa và đắt'], answerIndex: 1, explanationVi: 'おてらは しずかで、とても きれいです — yên tĩnh và rất đẹp.' },
      { questionVi: 'Bảo tàng mỹ thuật có nét gì?', choices: ['Rộng rãi', 'Nhỏ nhưng tranh tuyệt', 'Vắng người', 'Miễn phí'], answerIndex: 1, explanationVi: 'そこは ちいさいですが、えは すばらしいです — nhỏ nhưng tranh tuyệt vời.' },
    ],
  },
  speakSentences: [
    { ja: 'いきたい ところが あります。', vi: 'Tôi có nơi muốn đến.' },
    { ja: 'おてらを みたいです。', vi: 'Tôi muốn ngắm chùa.' },
    { ja: 'この まちは にぎやかです。', vi: 'Khu phố này nhộn nhịp lắm.' },
    { ja: 'びじゅつかんは どうですか。', vi: 'Bảo tàng mỹ thuật thì sao nhỉ?' },
    { ja: 'たのしかったです。', vi: 'Rất vui ạ.' },
  ],
  translatePairs: [
    { ja: 'おてらへ いきたいです。', vi: 'Tôi muốn đi chùa.', tokens: ['おてら', 'へ', 'いきたい', 'です'], distractors: ['じんじゃ'] },
    { ja: 'おてらを みたいです。', vi: 'Tôi muốn ngắm chùa.', tokens: ['おてら', 'を', 'みたい', 'です'], distractors: ['たべたい'] },
    { ja: 'この まちは にぎやかです。', vi: 'Khu phố này nhộn nhịp.', tokens: ['この', 'まち', 'は', 'にぎやか', 'です'], distractors: ['しずか'] },
    { ja: 'ひろい こうえんを あるきます。', vi: 'Tôi dạo bộ ở công viên rộng.', tokens: ['ひろい', 'こうえん', 'を', 'あるきます'], distractors: ['とおい'] },
    { ja: 'きょうとは どうでしたか。', vi: 'Kyoto thế nào rồi ạ?', tokens: ['きょうと', 'は', 'どう', 'でした', 'か'], distractors: ['です'] },
  ],
  translateJaVi: [
    { ja: 'あの みせの ひとは しんせつです。', vi: 'Người ở cửa hàng đó tận tình lắm.', wrongVi: ['Người ở cửa hàng đó nổi tiếng lắm.', 'Cửa hàng đó nhộn nhịp lắm.', 'Cửa hàng đó rộng lắm.'] },
    { ja: 'えいがは つまらなかったです。', vi: 'Bộ phim thì nhàm chán (rồi).', wrongVi: ['Bộ phim rất hay.', 'Phim chiếu lúc mấy giờ?', 'Tôi muốn xem phim lắm.'] },
    { ja: 'きれいな はなを みたいです。', vi: 'Tôi muốn ngắm hoa đẹp.', wrongVi: ['Tôi đã mua hoa rồi.', 'Hoa này của ai vậy?', 'Hoa trong vườn nhàm chán.'] },
  ],
  wordBank: [
    { ja: 'おてらは しずかで きれいです。', vi: 'Chùa yên tĩnh và đẹp.', tokens: ['おてら', 'は', 'しずか', 'で', 'きれい', 'です'], distractors: ['にぎやか'] },
    { ja: 'それから、かいものを します。', vi: 'Sau đó, tôi đi mua sắm.', tokens: ['それから', 'かいもの', 'を', 'します'], distractors: ['でも'] },
  ],
  kanji: ['所', '見'],
  writingKana: ['ど', 'こ', 'ろ', 'か', 'ん'],
}
