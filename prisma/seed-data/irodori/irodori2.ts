/**
 * NihongoGo — Irodori A1 · Bài 2: じこしょうかい (Giới thiệu bản thân & người khác).
 * Nội dung GỐC 100% — không sao chép dialogue/ví dụ/bài tập có bản quyền.
 * Provenance: ORIGINAL_GENERATED · MACHINE_REVIEWED (validator + audit).
 */
import type { IrodoriLesson } from './types'

export const irodori2: IrodoriLesson = {
  order: 2,
  slug: 'irodori-2',
  title: 'じこしょうかい — Giới thiệu bản thân & người khác',
  titleJa: 'じこしょうかい',
  description: 'Nói tên, nghề nghiệp, quốc tịch của mình và giới thiệu người khác một cách lịch sự — bộ câu dùng được trong lớp học, công ty và buổi gặp đầu tiên.',
  learningObjectives: [
    'Tự giới thiệu tên, nghề nghiệp, xuất xứ',
    'Giới thiệu người khác bằng こちらは',
    'Hỏi tên, tuổi, quê quán lịch sự',
  ],
  grammarTopics: ['わたしは N です', '[Quốc gia] から きました', 'こちらは — giới thiệu người khác'],
  vocabularyTopics: ['Nghề nghiệp & danh tính', 'Quốc tịch', 'Từ hỏi người (だれ・どちら)'],
  kanjiTopics: ['Kanji 生・年'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'わたし', romaji: 'watashi', meaningVi: 'tôi', pos: 'đại từ', exampleJa: 'わたしは まいです。', exampleVi: 'Tôi là Mai.' },
    { term: 'こちら', romaji: 'kochira', meaningVi: 'đây (cách nói lịch sự, chỉ người/phương hướng)', pos: 'đại từ', exampleJa: 'こちらは あんさんです。', exampleVi: 'Đây là bạn An.' },
    { term: 'なまえ', romaji: 'namae', meaningVi: 'tên', pos: 'danh từ', exampleJa: 'なまえは なんですか。', exampleVi: 'Tên bạn là gì?' },
    { term: 'がくせい', romaji: 'gakusei', meaningVi: 'học sinh, sinh viên', pos: 'danh từ', exampleJa: 'わたしは がくせいです。', exampleVi: 'Tôi là học sinh.' },
    { term: 'かいしゃいん', romaji: 'kaishain', meaningVi: 'nhân viên công ty', pos: 'danh từ', exampleJa: 'おとうとは かいしゃいんです。', exampleVi: 'Em trai tôi là nhân viên công ty.' },
    { term: 'せんせい', romaji: 'sensei', meaningVi: 'giáo viên, thầy/cô', pos: 'danh từ', exampleJa: 'さとうせんせいは にほんじんです。', exampleVi: 'Cô Satō là người Nhật.' },
    { term: 'ベトナムじん', romaji: 'Betonamu-jin', meaningVi: 'người Việt Nam', pos: 'danh từ', exampleJa: 'わたしは ベトナムじんです。', exampleVi: 'Tôi là người Việt Nam.' },
    { term: 'にほんじん', romaji: 'nihonjin', meaningVi: 'người Nhật', pos: 'danh từ', exampleJa: 'やまださんは にほんじんです。', exampleVi: 'Ông Yamada là người Nhật.' },
    { term: 'だいがくせい', romaji: 'daigakusei', meaningVi: 'sinh viên đại học', pos: 'danh từ', exampleJa: 'まいさんは だいがくせいです。', exampleVi: 'Mai là sinh viên đại học.' },
    { term: 'りゅうがくせい', romaji: 'ryūgakusei', meaningVi: 'du học sinh', pos: 'danh từ', exampleJa: 'あんさんも りゅうがくせいです。', exampleVi: 'An cũng là du học sinh.' },
    { term: 'ともだち', romaji: 'tomodachi', meaningVi: 'bạn bè', pos: 'danh từ', exampleJa: 'こちらは わたしの ともだちです。', exampleVi: 'Đây là bạn của tôi.' },
    { term: 'アルバイト', romaji: 'arubaito', meaningVi: 'công việc làm thêm', pos: 'danh từ', exampleJa: 'コンビニで アルバイトを します。', exampleVi: 'Tôi làm thêm ở cửa hàng tiện lợi.' },
    { term: 'ぎんこういん', romaji: 'ginkōin', meaningVi: 'nhân viên ngân hàng', pos: 'danh từ', exampleJa: 'ちちは ぎんこういんです。', exampleVi: 'Bố tôi là nhân viên ngân hàng.' },
    { term: 'くに', romaji: 'kuni', meaningVi: 'nước, quê quán', pos: 'danh từ', exampleJa: 'おくには どちらですか。', exampleVi: 'Quê anh ở đâu ạ?' },
    { term: 'なんさい', romaji: 'nansai', meaningVi: 'bao nhiêu tuổi', pos: 'từ hỏi', exampleJa: 'なんさいですか。', exampleVi: 'Bạn bao nhiêu tuổi?' },
    { term: 'どうぞ', romaji: 'dōzo', meaningVi: 'mời (anh/chị)', pos: 'phó từ', exampleJa: 'どうぞ、こちらへ。', exampleVi: 'Mời anh/chị bên này.' },
    { term: 'よろしく', romaji: 'yoroshiku', meaningVi: 'nhờ (anh/chị) giúp đỡ', pos: 'lời nhờ', exampleJa: 'あんさんを よろしく。', exampleVi: 'Nhờ mọi người giúp đỡ bạn An nhé.' },
    { term: 'だれ', romaji: 'dare', meaningVi: 'ai', pos: 'từ hỏi', exampleJa: 'あの ひとは だれですか。', exampleVi: 'Người kia là ai vậy?' },
  ],
  grammar: [
    {
      code: 'i2-watashi-wa-desu',
      title: 'わたしは N です — tôi là...',
      formation: 'わたしは + [danh từ] + です',
      explanationVi:
        'Câu nền móng của tiếng Nhật: わたし (tôi) + は (trợ từ đánh dấu CHỦ ĐỀ, phát âm "wa") + danh từ + です (là — lịch sự). Ví dụ わたしは がくせいです = tôi là học sinh. Muốn hỏi thì thêm か: あなたは がくせいですか. Lưu ý: khi ngữ cảnh rõ ràng, người Nhật lược bỏ わたし — chỉ nói がくせいです cũng đủ.',
      examples: [
        { ja: 'わたしは まいです。', vi: 'Tôi là Mai.', tokens: ['わたし', 'は', 'まい', 'です'] },
        { ja: 'わたしは だいがくせいです。', vi: 'Tôi là sinh viên đại học.' },
        { ja: 'あんさんは りゅうがくせいです。', vi: 'An là du học sinh.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Điền trợ từ',
          sentence: 'わたし___ まいです。',
          options: ['は', 'を', 'に', 'で'],
          answerIndex: 0, explanationVi: 'は đánh dấu chủ đề đứng trước です. を/に/で là trợ từ của tân ngữ/đích/địa điểm.',
        },
        {
          kind: 'choice', prompt: '"Tôi là nhân viên công ty." nói thế nào?',
          options: ['わたしは かいしゃいんします。', 'わたしは かいしゃいんです。', 'わたしに かいしゃいんです。', 'わたしで かいしゃいんです。'],
          answerIndex: 1, explanationVi: 'Danh từ nghề nghiệp nối thẳng với です, KHÔNG thêm します (します đi với động từ).',
        },
        {
          kind: 'error', prompt: 'Câu tự giới thiệu nào đúng?',
          options: ['わたしは がくせいします。', 'わたしに がくせいです。', 'わたしは がくせいです。', 'わたしで がくせいです。'],
          answerIndex: 2, explanationVi: 'がくせい là DANH TỪ → dùng です. Ba câu kia sai trợ từ hoặc sai cách nối.',
        },
        {
          kind: 'fill', prompt: 'Điền từ còn thiếu (An là bạn của tôi)',
          sentence: 'あんさんは わたしの___です。',
          options: ['せんせい', 'なまえ', 'くに', 'ともだち'],
          answerIndex: 3, explanationVi: 'ともだち = bạn bè. わたしの = của tôi (の nối hai danh từ).',
        },
      ],
    },
    {
      code: 'i2-kara-kimashita',
      title: '[Quốc gia] から きました — đến từ...',
      formation: '[tên nước] + から + きました',
      explanationVi:
        'Để nói xuất xứ, dùng [nước]から きました (đã đến từ...). Hỏi lịch sự: おくには どちらですか (quê ở đâu ạ) — どちら lịch sự hơn どこ. Có thể trả lời bằng hai cách: ベトナムから きました (đến từ Việt Nam) hoặc ベトナムじんです (là người Việt). Chú ý: から đứng SAU tên nước.',
      examples: [
        { ja: 'わたしは ベトナムから きました。', vi: 'Tôi đến từ Việt Nam.', tokens: ['わたし', 'は', 'ベトナム', 'から', 'きました'] },
        { ja: 'さとうせんせいは にほんから きました。', vi: 'Cô Satō đến từ Nhật Bản.' },
        { ja: 'おくには どちらですか。', vi: 'Quê quán của anh/chị ở đâu ạ?' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Điền trợ từ (tôi đến từ Việt Nam)',
          sentence: 'わたしは ベトナム___ きました。',
          options: ['から', 'まで', 'へ', 'を'],
          answerIndex: 0, explanationVi: 'から = "từ" — đánh dấu điểm xuất phát. まで là "đến" (điểm kết thúc).',
        },
        {
          kind: 'choice', prompt: '"Tôi đến từ Nhật Bản." là câu nào?',
          options: ['にほんまで きました。', 'にほんから きました。', 'にほんへ きました。', 'にほんを きました。'],
          answerIndex: 1, explanationVi: 'Xuất xứ = [nước]から きました. にほんへ きました nghĩa là "đã đi TỚI Nhật" (hành động đi, không phải xuất xứ).',
        },
        {
          kind: 'choice', prompt: 'Muốn hỏi quê quán người đối diện một cách lịch sự?',
          options: ['なんさいですか。', 'だれですか。', 'おくには どちらですか。', 'なまえは なんですか。'],
          answerIndex: 2, explanationVi: 'お(ngữ khí kính) + くに + どちら(ở đâu — lịch sự). Ba câu còn lại hỏi tuổi/người/tên.',
        },
        {
          kind: 'error', prompt: 'Câu nói xuất xứ nào đúng?',
          options: ['わたしは ベトナムまで きました。', 'わたしは ベトナムにから きました。', 'わたしは からベトナム きました。', 'わたしは ベトナムから きました。'],
          answerIndex: 3, explanationVi: 'Trật tự đúng: [tên nước] + から + きました — から bám sát sau tên nước.',
        },
      ],
    },
    {
      code: 'i2-kochira',
      title: 'こちらは N です — giới thiệu người khác',
      formation: 'こちらは + [tên]さん + です',
      explanationVi:
        'Khi giới thiệu người khác, dùng こちらは (đây là — cách nói lịch sự) thay vì chỉ tay nói この人. Ví dụ: こちらは あんさんです = Đây là bạn An. Sau khi giới thiệu thường nói よろしく(おねがいします) để "trọng thị" người được giới thiệu. こちら cũng dùng khi mời ai đi trước: どうぞ、こちらへ.',
      examples: [
        { ja: 'こちらは あんさんです。', vi: 'Đây là bạn An.', tokens: ['こちら', 'は', 'あんさん', 'です'] },
        { ja: 'こちらは わたしの ともだちです。', vi: 'Đây là bạn của tôi.' },
        { ja: 'こちらは さとうせんせいです。よろしく。', vi: 'Đây là cô Satō. Nhờ mọi người giúp đỡ cho cô.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Giới thiệu bạn An với cô giáo — câu nào đúng?',
          options: ['こちらは あんさんです。', 'あんさんは こちらです。', 'わたしは あんです。', 'あんさんを こちらです。'],
          answerIndex: 0, explanationVi: 'こちらは + [tên]さん + です. Đảo chủ-vị thành あんさんは こちらです thì nghĩa thành "An ở bên này".',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ',
          sentence: 'こちら___ わたしの ともだちです。',
          options: ['を', 'は', 'へ', 'も'],
          answerIndex: 1, explanationVi: 'こちら là chủ đề của câu → は.',
        },
        {
          kind: 'fill', prompt: 'Điền từ (giới thiệu: đây là bạn của tôi)',
          sentence: 'こちらは わたしの___です。',
          options: ['こうえん', 'なまえ', 'ともだち', 'アルバイト'],
          answerIndex: 2, explanationVi: 'Người được giới thiệu là ともだち (bạn bè). Ba từ còn lại không phải chỉ người.',
        },
        {
          kind: 'choice', prompt: '「あの人は だれですか」 dùng để hỏi điều gì?',
          options: ['Cái kia là gì', 'Nơi đó ở đâu', 'Bao nhiêu tuổi', 'Người kia là ai'],
          answerIndex: 3, explanationVi: 'だれ = ai (hỏi về NGƯỜI). Hỏi về đồ vật dùng なに/なん, hỏi nơi chốn dùng どこ.',
        },
      ],
    },
  ],
  dialogue: {
    titleVi: 'Giới thiệu bạn mới',
    situationVi: 'Ở trường, Mai giới thiệu An — bạn vừa sang Nhật — với cô Satō.',
    lines: [
      { speaker: 'まい', text: 'さとうせんせい、こんにちは。', vi: 'Cô Satō ơi, em chào cô.' },
      { speaker: 'さとう', text: 'こんにちは、まいさん。', vi: 'Chào em, Mai.' },
      { speaker: 'まい', text: 'こちらは あんさんです。わたしの ともだちです。', vi: 'Đây là bạn An. Là bạn của em.' },
      { speaker: 'さとう', text: 'はじめまして。さとうです。', vi: 'Rất hân hạnh. Tôi là Satō.' },
      { speaker: 'あん', text: 'はじめまして、あんです。ベトナムから きました。', vi: 'Rất hân hạnh, tôi là An. Tôi đến từ Việt Nam.' },
      { speaker: 'さとう', text: 'そうですか。だいがくせいですか。', vi: 'Vậy à. Em là sinh viên đại học à?' },
      { speaker: 'あん', text: 'はい、りゅうがくせいです。', vi: 'Vâng, em là du học sinh ạ.' },
      { speaker: 'さとう', text: 'がっこうで また あいましょう。', vi: 'Hẹn gặp lại hai em ở trường nhé.' },
      { speaker: 'あん', text: 'はい、よろしく おねがいします。', vi: 'Vâng, mong cô giúp đỡ cho em ạ.' },
    ],
    questions: [
      { questionVi: 'Mai giới thiệu An với cô Satō bằng câu nào?', choices: ['こちらは あんさんです。', 'あんさんは まいです。', 'わたしは あんです。', 'あんさんは こちらです。'], answerIndex: 0, explanationVi: 'Mẫu giới thiệu người khác: こちらは + [tên]さん + です.' },
      { questionVi: 'An đến từ đâu?', choices: ['Nhật Bản', 'Việt Nam', 'Không nói rõ', 'Hàn Quốc'], answerIndex: 1, explanationVi: 'An nói ベトナムから きました = đến từ Việt Nam.' },
      { questionVi: 'An là ai?', choices: ['Giáo viên', 'Nhân viên ngân hàng', 'Du học sinh', 'Hàng xóm của Mai'], answerIndex: 2, explanationVi: 'An trả lời りゅうがくせいです = là du học sinh.' },
    ],
  },
  listening: [
    { scriptJa: 'わたしは かいしゃいんです。', meaningVi: 'Tôi là nhân viên công ty.', choices: ['Giáo viên', 'Sinh viên', 'Bác sĩ', 'Nhân viên công ty'], answerIndex: 3 },
    { scriptJa: 'こちらは さとうせんせいです。', meaningVi: 'Đây là cô Satō (giáo viên).', choices: ['Giới thiệu một giáo viên', 'Giới thiệu một người bạn', 'Lời tạm biệt', 'Câu hỏi về tuổi'], answerIndex: 0 },
    { scriptJa: 'ベトナムから きました。', meaningVi: 'Tôi đến từ Việt Nam.', choices: ['Đến từ Nhật Bản', 'Đến từ Việt Nam', 'Sắp đi Việt Nam', 'Đã về Việt Nam'], answerIndex: 1 },
    { scriptJa: 'なんさいですか。', meaningVi: 'Bạn bao nhiêu tuổi?', choices: ['Hỏi tên', 'Hỏi quê quán', 'Hỏi tuổi', 'Hỏi giờ'], answerIndex: 2, dictation: true },
    { scriptJa: 'わたしの なまえは あんです。りゅうがくせいです。', meaningVi: 'Tên tôi là An. Tôi là du học sinh.', choices: ['Giới thiệu gia đình', 'Mời ai đó đi chơi', 'Lời xin lỗi', 'Tự giới thiệu (du học sinh)'], answerIndex: 3, dictation: true },
  ],
  reading: {
    titleVi: 'あんさんの じこしょうかい — Bài tự giới thiệu của An',
    lines: [
      { text: 'なまえは あんです。', vi: 'Tên tôi là An.' },
      { text: 'ベトナムの ハノイから きました。', vi: 'Tôi đến từ Hà Nội của Việt Nam.' },
      { text: 'とうきょうの だいがくの がくせいです。', vi: 'Tôi là sinh viên của một trường đại học ở Tokyo.' },
      { text: 'まいさんは おなじ くにの ともだちです。', vi: 'Mai là bạn cùng nước với tôi.' },
      { text: 'にちようび、ふたりで こうえんへ いきます。', vi: 'Chủ nhật hai đứa đi công viên cùng nhau.' },
      { text: 'どうぞ よろしく おねがいします。', vi: 'Kính mong mọi người giúp đỡ.' },
    ],
    questions: [
      { questionVi: 'An đến từ đâu?', choices: ['Hà Nội, Việt Nam', 'Tokyo, Nhật Bản', 'Osaka', 'Bài đọc không nói'], answerIndex: 0, explanationVi: 'Dòng 2: ベトナムの ハノイから きました.' },
      { questionVi: 'Mai là ai của An?', choices: ['Giáo viên chủ nhiệm', 'Bạn cùng nước', 'Chị họ', 'Hàng xóm cùng chung cư'], answerIndex: 1, explanationVi: 'Dòng 4: おなじ くにの ともだち = bạn cùng nước.' },
      { questionVi: 'Chủ nhật hai bạn định làm gì?', choices: ['Đi làm thêm', 'Đi học bù', 'Đi công viên', 'Ở nhà ngủ'], answerIndex: 2, explanationVi: 'Dòng 5: こうえんへ いきます = sẽ đi công viên.' },
    ],
  },
  speakSentences: [
    { ja: 'わたしは まいです。', vi: 'Tôi là Mai.' },
    { ja: 'ベトナムから きました。', vi: 'Tôi đến từ Việt Nam.' },
    { ja: 'こちらは ともだちです。', vi: 'Đây là bạn của tôi.' },
    { ja: 'どうぞ、よろしく。', vi: 'Mời anh/chị giúp đỡ cho.' },
    { ja: 'おなまえは なんですか。', vi: 'Tên anh/chị là gì ạ?' },
  ],
  translatePairs: [
    { ja: 'わたしは がくせいです。', vi: 'Tôi là học sinh.', tokens: ['わたし', 'は', 'がくせい', 'です'], distractors: ['だれ'] },
    { ja: 'こちらは あんさんです。', vi: 'Đây là bạn An.', tokens: ['こちら', 'は', 'あんさん', 'です'], distractors: ['どちら'] },
    { ja: 'ベトナムから きました。', vi: 'Tôi đến từ Việt Nam.', tokens: ['ベトナム', 'から', 'きました'], distractors: ['まで'] },
    { ja: 'あの ひとは だれですか。', vi: 'Người kia là ai vậy?', tokens: ['あの', 'ひと', 'は', 'だれ', 'です', 'か'], distractors: ['なん'] },
    { ja: 'なまえは なんですか。', vi: 'Tên (bạn) là gì?', tokens: ['なまえ', 'は', 'なん', 'です', 'か'], distractors: ['だれ'] },
  ],
  translateJaVi: [
    { ja: 'わたしは ぎんこういんです。', vi: 'Tôi là nhân viên ngân hàng.', wrongVi: ['Tôi là khách hàng của ngân hàng.', 'Ngân hàng ở gần đây.', 'Tôi làm việc ở trường học.', 'Bố tôi là nhân viên ngân hàng.'] },
    { ja: 'こちらは わたしの せんせいです。', vi: 'Đây là thầy/cô giáo của tôi.', wrongVi: ['Đây là trường của tôi.', 'Tôi là giáo viên.', 'Người kia học rất giỏi.', 'Đây là người bạn của tôi.'] },
    { ja: 'あんさんも ベトナムじんです。', vi: 'An cũng là người Việt Nam.', wrongVi: ['An là người Việt duy nhất.', 'An không phải người Việt Nam.', 'An đến từ Nhật Bản.', 'An là hàng xóm của tôi.'] },
  ],
  wordBank: [
    { ja: 'わたしは ベトナムじんです。', vi: 'Tôi là người Việt Nam.', tokens: ['わたし', 'は', 'ベトナムじん', 'です'], distractors: ['にほんじん'] },
    { ja: 'こちらは わたしの ともだちです。', vi: 'Đây là bạn của tôi.', tokens: ['こちら', 'は', 'わたし', 'の', 'ともだち', 'です'], distractors: ['せんせい'] },
  ],
  kanji: ['生', '年'],
  writingKana: ['せ', 'ま', 'え', 'が', 'な'],
}
