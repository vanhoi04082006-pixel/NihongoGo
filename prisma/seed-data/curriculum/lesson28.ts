/**
 * NihongoGo — Bài 28: Danh từ hóa — こと・の.
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson28: CurriculumLesson = {
  order: 28,
  slug: 'l28-danh-tu-hoa',
  title: 'Danh từ hóa — こと・の',
  titleJa: 'こと・の',
  description: 'Biến mệnh đề động từ thành danh từ để làm chủ ngữ, tân ngữ cho câu.',
  learningObjectives: [
    'Dùng こと để danh từ hóa động từ',
    'Dùng の khi nhấn cảm nhận trực tiếp',
    'Nói sở thích, trải nghiệm bằng cấu trúc danh từ hóa',
  ],
  grammarTopics: ['こと (danh từ hóa trung tính)', 'の (danh từ hóa mang cảm nhận)'],
  vocabularyTopics: ['Sở thích và trải nghiệm', 'Cấu trúc nói về việc gì đó'],
  kanjiTopics: ['Kanji khái niệm trừu tượng (事・者・例)'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'しゅみ', romaji: 'shumi', meaningVi: 'sở thích, sở thích say mê', pos: 'danh từ', exampleJa: 'わたしの しゅみは でんしゃの しゃしんを とる ことです。', exampleVi: 'Sở thích của tôi là chụp ảnh tàu điện.' },
    { term: 'とくぎ', romaji: 'tokugi', meaningVi: 'sở trường, thế mạnh', pos: 'danh từ', exampleJa: 'わたしの とくぎは ギターを ひく ことです。', exampleVi: 'Sở trường của tôi là chơi guitar.' },
    { term: 'じょうず', romaji: 'jōzu', meaningVi: 'giỏi, khéo léo', pos: 'tính từ な', exampleJa: 'リンさんは ピアノを ひくのが じょうずですね。', exampleVi: 'Linh chơi piano giỏi nhỉ.' },
    { term: 'へた', romaji: 'heta', meaningVi: 'vụng về, kém cỏi', pos: 'tính từ な', exampleJa: 'わたしは うたを うたうのが へたです。', exampleVi: 'Tôi hát vụng về.' },
    { term: 'にがて', romaji: 'nigate', meaningVi: 'không giỏi, ngại', pos: 'tính từ な', exampleJa: 'わたしは あさ はやく おきるのが にがてです。', exampleVi: 'Tôi không giỏi việc dậy sớm.' },
    { term: 'けいけん', romaji: 'keiken', meaningVi: 'trải nghiệm, kinh nghiệm', pos: 'danh từ', exampleJa: 'にほんで べんきょうした けいけんが あります。', exampleVi: 'Tôi có trải nghiệm đã học ở Nhật.' },
    { term: '用事', reading: 'ようじ', romaji: 'yōji', meaningVi: 'việc riêng, việc cần làm', pos: 'danh từ', exampleJa: 'きょうは 用事が ありますから、はやく かえります。', exampleVi: 'Hôm nay có việc, nên tôi về sớm.' },
    { term: '若者', reading: 'わかもの', romaji: 'wakamono', meaningVi: 'người trẻ tuổi', pos: 'danh từ', exampleJa: '若者は パソコンを つかうのが じょうずです。', exampleVi: 'Người trẻ dùng máy tính giỏi.' },
    { term: '例えば', reading: 'たとえば', romaji: 'tatoeba', meaningVi: 'ví dụ như, chẳng hạn', pos: 'liên từ', exampleJa: '例えば、こうえんを さんぽするのが すきです。', exampleVi: 'Ví dụ, tôi thích việc đi dạo trong công viên.' },
    { term: '例文', reading: 'れいぶん', romaji: 'reibun', meaningVi: 'câu ví dụ', pos: 'danh từ', exampleJa: 'この 例文を もういちど よんで ください。', exampleVi: 'Xin hãy đọc lại câu ví dụ này một lần nữa.' },
    { term: 'すいえい', romaji: 'suiei', meaningVi: 'bơi lội, môn bơi', pos: 'danh từ', exampleJa: 'すいえいを するのが すきです。', exampleVi: 'Tôi thích bơi lội.' },
    { term: 'ギター', romaji: 'gitā', meaningVi: 'đàn guitar', pos: 'danh từ', exampleJa: 'ギターを ひくのが すきです。', exampleVi: 'Tôi thích chơi guitar.' },
    { term: 'はしります', romaji: 'hashirimasu', meaningVi: 'chạy', pos: 'động từ nhóm 1', exampleJa: 'まいあさ こうえんを はしります。', exampleVi: 'Mỗi sáng tôi chạy trong công viên.' },
    { term: 'せつめいします', romaji: 'setsumeishimasu', meaningVi: 'giải thích, nói rõ', pos: 'động từ nhóm 3', exampleJa: 'せんせいは にほんごで せつめいします。', exampleVi: 'Giáo viên giải thích bằng tiếng Nhật.' },
    { term: 'きょうみ', romaji: 'kyōmi', meaningVi: 'hứng thú, quan tâm', pos: 'danh từ', exampleJa: 'わたしは にほんの おんがくに きょうみが あります。', exampleVi: 'Tôi có hứng thú với âm nhạc Nhật.' },
    { term: 'おもいだします', romaji: 'omoidashimasu', meaningVi: 'nhớ ra, hồi tưởng', pos: 'động từ nhóm 1', exampleJa: 'この うたを きいて、こどもの ときを おもいだします。', exampleVi: 'Nghe bài hát này, tôi nhớ về thời thơ ấu.' },
    { term: 'しょうかいします', romaji: 'shōkaishimasu', meaningVi: 'giới thiệu', pos: 'động từ nhóm 3', exampleJa: 'こんど しゅみを しょうかいします。', exampleVi: 'Lần tới tôi sẽ giới thiệu sở thích.' },
    { term: 'すごい', romaji: 'sugoi', meaningVi: 'kinh ngạc, ghê, tài ghê', pos: 'tính từ い', exampleJa: 'ギターも ひけますか。すごいですね。', exampleVi: 'Bạn chơi được cả guitar nữa à? Tài ghê.' },
  ],
  grammar: [
    {
      code: 'l28-koto',
      title: '〜こと — biến hành động thành danh từ (trung tính)',
      formation: 'V thể thường + こと: のみます→のむ こと / たべます→たべる こと / します→する こと; sau こと ghép như danh từ: が すきです・が できます・を わすれます・Aは～ことです',
      explanationVi:
        'こと (chữ Hán 事 — "việc") là công cụ danh từ hóa trung tính: đặt sau ĐỘNG TỪ THỂ THƯỜNG (のむ・たべる・する) để biến cả hành động "làm gì" thành một DANH TỪ, rồi dùng nó như danh từ bình thường — làm chủ ngữ, tân ngữ, hay đứng sau は. Bài 18 đã học のむことが できます — nay mở rộng: こと không chỉ đi với できます mà còn ghép được với が すきです・が きらいです, を わすれます, hay làm vị ngữ định nghĩa 「しゅみは ～ことです」 (sở thích của tôi LÀ việc ~). Lưu ý: trước こと phải là thể thường (bỏ ます), không dùng て-form hay ます-form; phủ định cũng giữ thể thường (たべない こと).',
      examples: [
        { ja: 'わたしの しゅみは でんしゃの しゃしんを とる ことです。', vi: 'Sở thích của tôi là chụp ảnh tàu điện.', tokens: ['わたしの', 'しゅみ', 'は', 'でんしゃの', 'しゃしん', 'を', 'とる', 'ことです'] },
        { ja: 'わたしは まちを あるくことが すきです。', vi: 'Tôi thích việc đi bộ trong phố.' },
        { ja: 'はを みがくことを わすれました。', vi: 'Tôi quên việc đánh răng.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'のみます → dạng đứng trước こと',
          sentence: 'くすりを ___ことが できます。',
          options: ['のみます', 'のむ', 'のんで', 'のみ'],
          answerIndex: 1, explanationVi: 'Trước こと dùng thể thường (bỏ ます): のむ こと. て-form (のんで) và ます-form (のみます) đều không đứng trước こと.',
        },
        {
          kind: 'fill', prompt: 'Điền danh từ hóa (Sở thích của tôi là bơi ở bể bơi)',
          sentence: 'わたしの しゅみは プールで すいえいを する___です。',
          options: ['こと', 'もの', 'とき', 'ところ'],
          answerIndex: 0, explanationVi: 'Câu định nghĩa "A là việc ~" dùng こと: する ことです. もの/とき/ところ không danh từ hóa hành động theo cách này.',
        },
        {
          kind: 'choice', prompt: '「はを みがくことを わすれました。」 có nghĩa là gì?',
          options: ['Tôi quên đánh răng', 'Tôi không thích đánh răng', 'Tôi vừa đánh răng xong', 'Tôi không được phép đánh răng'],
          answerIndex: 0, explanationVi: 'みがくことを わすれました = quên VIỆC đánh răng — こと biến "đánh răng" thành tân ngữ của わすれました.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['しゅみは えを かく ことです。', 'しゅみは えを かきます ことです。', 'しゅみは えを かいて ことです。', 'しゅみは えを かいた ことです。'],
          answerIndex: 0, explanationVi: 'V thể thường + こと + です: かく ことです. Không chen ます hay て-form; かいた こと là mẫu "trải nghiệm trong quá khứ" — khác nghĩa, không dùng để định nghĩa sở thích.',
        },
      ],
    },
    {
      code: 'l28-no',
      title: '〜の — danh từ hóa mang cảm nhận trực tiếp',
      formation: 'V thể thường + の: ききます→きく の / たべます→たべる の; の + が じょうずです / が へたです / が にがてです / が すきです',
      explanationVi:
        'の cũng danh từ hóa động từ (V thể thường + の) nhưng mang màu sắc GẦN GŨI, CẢM NHẬN TRỰC TIẾP hơn こと: người nói như đang nhìn thấy, nghe thấy hoặc từng trải việc đó của chính mình hay người khác. Vì vậy の là lựa chọn BẮT BUỘC khi nói về TÀI NĂNG qua đánh giá trực tiếp: じょうずです (giỏi), へたです (vụng), にがてです (không giỏi) — うたを うたうのが じょうずですね. Trong văn nói hằng ngày, の cũng được dùng nhiều với すきです・きらいです. Về hình thức, の ghép trợ từ giống hệt こと: のが すきです, のを わすれました. Trước の cũng phải là thể thường của động từ.',
      examples: [
        { ja: 'リンさんは うたを うたうのが じょうずですね。', vi: 'Linh hát giỏi nhỉ.', tokens: ['リンさん', 'は', 'うた', 'を', 'うたうの', 'が', 'じょうずですね'] },
        { ja: 'わたしは あさ はやく おきるのが にがてです。', vi: 'Tôi không giỏi việc dậy sớm.' },
        { ja: 'ギターを ひくのが すきです。', vi: 'Tôi thích chơi guitar.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'かきます → dạng + の (danh từ hóa)',
          sentence: 'てがみを かく___が すきです。',
          options: ['かくの', 'かきの', 'かいての', 'かきますの'],
          answerIndex: 0, explanationVi: 'V thể thường + の: かく の. Giữ ます (かきますの), dùng gốc ます (かきの) hay て-form (かいての) đều sai.',
        },
        {
          kind: 'fill', prompt: 'Điền danh từ hóa (Em gái tôi nấu ăn giỏi)',
          sentence: 'いもうとは りょうりを する___が じょうずです。',
          options: ['の', 'こと', 'もの', 'とき'],
          answerIndex: 0, explanationVi: 'Trước じょうずです・へたです・にがてです bắt buộc dùng の: するのが じょうずです. こと không đi chung với các từ đánh giá tài năng.',
        },
        {
          kind: 'choice', prompt: '「わたしは あさ はやく おきるのが にがてです。」 có nghĩa là gì?',
          options: ['Tôi dậy sớm mỗi sáng', 'Tôi không giỏi việc dậy sớm', 'Tôi thích dậy sớm', 'Tôi phải dậy sớm'],
          answerIndex: 1, explanationVi: 'おきるのが にがてです = không giỏi việc dậy sớm — の danh từ hóa "dậy sớm", にがて = không giỏi, ngại.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['うたを うたうのが じょうずです。', 'うたを うたうことが じょうずです。', 'うたを うたいますのが じょうずです。', 'うたを うたってのが じょうずです。'],
          answerIndex: 0, explanationVi: 'じょうずです chỉ dùng の: うたうのが じょうずです. Bản với こと sai; ます-form hay て-form đứng trước の cũng sai.',
        },
      ],
    },
    {
      code: 'l28-koto-vs-no',
      title: 'こと vs の — khi nào thay nhau, khi nào bắt buộc',
      formation: 'すきです・きらいです・できます → こと も の も OK; じょうず・へた・にがて → の; định nghĩa 「Aは～ことです」・「～ことが わかります」 → こと',
      explanationVi:
        'Quy tắc chọn giữa こと と の: (1) Cả hai dùng được với が すきです・きらいです・が できます: たべるのが すきです = たべることが すきです — の thiên về văn nói, こと thiên về trang trọng; (2) BẮT BUỘC の với các từ đánh giá tài năng cảm nhận trực tiếp: じょうずです・へたです・にがてです (không nói することが じょうずです); (3) BẮT BUỘC こと khi mệnh đề danh từ hóa là VỊ NGỮ định nghĩa 「Aは ～ことです」 hoặc đi với わかります: 「しゅみは りょうりを することです」. Mẹo nhanh: nói về "tài năng thấy được của ai" → の; phát biểu "khái quát, định nghĩa, năng lực" → こと.',
      examples: [
        { ja: 'わたしの しごとは こどもに えを おしえる ことです。', vi: 'Công việc của tôi là dạy vẽ cho trẻ em. (định nghĩa → こと)' },
        { ja: 'ともだちは テニスを するのが じょうずです。', vi: 'Bạn tôi chơi tennis giỏi. (じょうず → の)' },
        { ja: 'こうえんを さんぽするのが すきです。', vi: 'Tôi thích đi dạo trong công viên. (với すきです dùng được cả の と こと)' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '「サッカーを みるのが すきです。」 — nếu thay の bằng こと thì sao?',
          options: ['Sai ngữ pháp, phải dùng の', 'Vẫn đúng — với すきです dùng được cả の と こと', 'Sai nghĩa hoàn toàn', 'Phải đổi すき thành じょうず'],
          answerIndex: 1, explanationVi: 'すきです・きらいです chấp nhận cả hai: みるのが すきです = みることが すきです. Chỉ じょうず・へた mới bắt buộc の.',
        },
        {
          kind: 'fill', prompt: 'Điền こと hoặc の (Công việc của tôi là dạy tiếng Nhật)',
          sentence: 'わたしの しごとは にほんごを おしえる___です。',
          options: ['の', 'こと', 'もの', 'とき'],
          answerIndex: 1, explanationVi: 'Câu định nghĩa "A là việc ~" chỉ dùng こと: おしえる ことです. の không đứng cuối để định nghĩa.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['テニスを することが じょうずです。', 'テニスを するのが じょうずです。', 'テニスを しますのが じょうずです。', 'テニスを してのが じょうずです。'],
          answerIndex: 1, explanationVi: 'じょうず = đánh giá tài năng cảm nhận trực tiếp → chỉ の: するのが じょうずです. Bản こと sai, ます/て-form trước の cũng sai.',
        },
        {
          kind: 'choice', prompt: 'Vì sao 「ピアノを ひくのが じょうずです」 không dùng こと?',
          options: ['Vì こと chỉ dùng cho quá khứ', 'Vì じょうず là cảm nhận trực tiếp về khả năng nên bắt buộc の', 'Vì ピアノ là từ mượn nước ngoài', 'Vì ひく là động từ nhóm 1'],
          answerIndex: 1, explanationVi: 'じょうず・へた nói về tài năng "nhìn thấy được" → の. こと dành cho phát biểu khái quát: ことが できます・ことが わかります.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Sở thích của bạn là gì?',
      situationVi: 'Ở lớp, Tanaka hỏi Linh về sở thích.',
      lines: [
        { speaker: 'たなか', ja: 'リンさんの しゅみは なんですか。', vi: 'Sở thích của Linh là gì?' },
        { speaker: 'リン', ja: 'わたしの しゅみは でんしゃの しゃしんを とる ことです。', vi: 'Sở thích của tôi là chụp ảnh tàu điện.' },
        { speaker: 'たなか', ja: 'へえ、おもしろいですね。どこで しゃしんを とりますか。', vi: 'Ồ, thú vị nhỉ. Bạn chụp ảnh ở đâu?' },
        { speaker: 'リン', ja: 'まちで たくさん とります。でんしゃが すきです。', vi: 'Tôi chụp rất nhiều trong phố. Tôi thích tàu điện.' },
        { speaker: 'たなか', ja: 'リンさんは しゃしんを とるのが じょうずですね。', vi: 'Linh chụp ảnh giỏi nhỉ.' },
        { speaker: 'リン', ja: 'いいえ、まだ へたです。たなかさんの しゅみは なんですか。', vi: 'Đâu, tôi còn vụng lắm. Còn sở thích của Tanaka là gì?' },
        { speaker: 'たなか', ja: 'わたしの しゅみは おんがくを きく ことです。', vi: 'Sở thích của tôi là nghe nhạc.' },
        { speaker: 'リン', ja: 'おんがくを きくのが すきですか。よく ききますか。', vi: 'Bạn thích nghe nhạc à. Bạn nghe thường không?' },
        { speaker: 'たなか', ja: 'ええ、まいにち おちゃを のみながら ききます。', vi: 'Ừ, mỗi ngày tôi vừa uống trà vừa nghe.' },
        { speaker: 'リン', ja: 'いいですね。', vi: 'Hay nhỉ.' },
      ],
    },
    {
      titleVi: 'Tài năng riêng',
      situationVi: 'Min và Linh kể về sở trường của mỗi người.',
      lines: [
        { speaker: 'ミン', ja: 'リンさん、とくぎは なんですか。', vi: 'Linh, sở trường của bạn là gì?' },
        { speaker: 'リン', ja: 'とくぎは うたを うたう ことです。カラオケが すきです。', vi: 'Sở trường của tôi là hát. Tôi thích karaoke.' },
        { speaker: 'ミン', ja: 'いいですね。どんな うたを うたいますか。', vi: 'Tốt đấy. Bạn hát loại bài nào?' },
        { speaker: 'リン', ja: 'にほんの うたを うたいます。ミンさんは？', vi: 'Tôi hát bài tiếng Nhật. Còn Min thì sao?' },
        { speaker: 'ミン', ja: 'わたしは うたを うたうのが にがてです。', vi: 'Tôi thì không giỏi việc hát.' },
        { speaker: 'リン', ja: 'じゃあ、とくぎは なんですか。', vi: 'Vậy sở trường của bạn là gì?' },
        { speaker: 'ミン', ja: 'わたしは ギターを ひくのが じょうずです。', vi: 'Tôi chơi guitar giỏi.' },
        { speaker: 'リン', ja: 'ギターも ひくことが できますか。すごいですね。', vi: 'Bạn chơi được cả guitar nữa à? Tài ghê.' },
        { speaker: 'ミン', ja: 'ええ、まいにち すこし れんしゅうします。', vi: 'Ừ, mỗi ngày tôi luyện một chút.' },
        { speaker: 'リン', ja: 'すごいですね。こんど ひいて ください。', vi: 'Tài thật. Lần này chơi cho nghe với nhé.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'わたしの しゅみは おんがくを きく ことです。', meaningVi: 'Sở thích của tôi là nghe nhạc.', choices: ['Sở thích của tôi là nghe nhạc', 'Tôi ghét nghe nhạc', 'Tôi muốn mua đĩa nhạc mới', 'Tôi vừa nghe nhạc vừa hát'], answerIndex: 0, dictation: true },
    { scriptJa: 'リンさんは ピアノを ひくのが じょうずです。', meaningVi: 'Linh chơi piano giỏi.', choices: ['Linh vừa mua một cây piano', 'Linh chơi piano giỏi', 'Linh muốn học piano', 'Linh không thích piano'], answerIndex: 1, dictation: true },
    { scriptJa: 'わたしは あさ はやく おきるのが にがてです。', meaningVi: 'Tôi không giỏi việc dậy sớm.', choices: ['Tôi dậy rất sớm mỗi sáng', 'Mai tôi phải dậy sớm', 'Tôi không giỏi việc dậy sớm', 'Tôi thích dậy sớm buổi sáng'], answerIndex: 2 },
    { scriptJa: 'はを みがくことを わすれました。', meaningVi: 'Tôi quên đánh răng.', choices: ['Tôi quên đánh răng', 'Tôi vừa đánh răng xong', 'Tôi không thích đánh răng', 'Tôi phải đánh răng trước khi ngủ'], answerIndex: 0 },
    { scriptJa: '例えば、こうえんを さんぽするのが すきです。', meaningVi: 'Ví dụ, tôi thích đi dạo trong công viên.', choices: ['Tôi không thích đi dạo chút nào', 'Ví dụ, tôi thích đi dạo trong công viên', 'Tôi chạy trong công viên mỗi sáng', 'Công viên trong ví dụ rất đẹp'], answerIndex: 1 },
  ],
  reading: {
    titleVi: 'Sở thích cuối tuần',
    lines: [
      { text: 'リンさんの しゅみは でんしゃの しゃしんを とる ことです。', vi: 'Sở thích của Linh là chụp ảnh tàu điện.' },
      { text: 'まいしゅう まちへ いって、しゃしんを たくさん とります。', vi: 'Mỗi tuần Linh đi vào phố và chụp rất nhiều ảnh.' },
      { text: 'リンさんは しゃしんを とるのが じょうずです。', vi: 'Linh chụp ảnh giỏi.' },
      { text: 'ミンさんの しゅみは りょうりを することです。', vi: 'Sở thích của Min là nấu ăn.' },
      { text: 'ミンさんは おかしを つくるのが じょうずです。', vi: 'Min làm bánh giỏi.' },
      { text: 'でも、からい りょうりは にがてです。', vi: 'Nhưng món cay thì Min không giỏi.' },
      { text: 'こんどの にちようび、ふたりは こうえんへ いきます。', vi: 'Chủ nhật này, hai bạn sẽ đi đến công viên.' },
      { text: 'ミンさんは おかしを つくって いきます。リンさんは しゃしんを たくさん とります。', vi: 'Min sẽ mang bánh tự làm đến. Linh sẽ chụp rất nhiều ảnh.' },
    ],
    questions: [
      { questionVi: 'Sở thích của Linh là gì?', choices: ['Chụp ảnh tàu điện', 'Nấu ăn', 'Chơi guitar', 'Hát karaoke'], answerIndex: 0, explanationVi: 'Câu 1: しゅみは でんしゃの しゃしんを とる ことです — danh từ hóa bằng こと.' },
      { questionVi: 'Min không giỏi món nào?', choices: ['Món ngọt', 'Món cay', 'Món Nhật', 'Món bánh'], answerIndex: 1, explanationVi: 'Câu 6: からい りょうりは にがてです — còn bánh ngọt thì giỏi (câu 5).' },
      { questionVi: 'Chủ nhật này ở công viên, điều nào đúng?', choices: ['Min mang bánh tự làm đến', 'Linh sẽ hát karaoke', 'Hai bạn chơi tennis', 'Min dạy nấu ăn cho Linh'], answerIndex: 0, explanationVi: 'Câu 8: ミンさんは おかしを つくって いきます (mẫu ていく đã học bài 27), còn Linh chụp ảnh.' },
    ],
  },
  speakSentences: [
    { ja: 'わたしの しゅみは でんしゃの しゃしんを とる ことです。', vi: 'Sở thích của tôi là chụp ảnh tàu điện.' },
    { ja: 'リンさんは うたを うたうのが じょうずですね。', vi: 'Linh hát giỏi nhỉ.' },
    { ja: 'わたしは あさ はやく おきるのが にがてです。', vi: 'Tôi không giỏi việc dậy sớm.' },
    { ja: 'テニスを することが できますか。', vi: 'Bạn có thể chơi tennis không?' },
  ],
  translatePairs: [
    { ja: 'わたしの しゅみは すいえいを する ことです。', vi: 'Sở thích của tôi là bơi lội.', tokens: ['わたしの', 'しゅみ', 'は', 'すいえい', 'を', 'する', 'ことです'], distractors: ['の'] },
    { ja: 'ギターを ひくのが すきです。', vi: 'Tôi thích chơi guitar.', tokens: ['ギター', 'を', 'ひくの', 'が', 'すきです'], distractors: ['こと'] },
    { ja: 'テニスを することが できます。', vi: 'Tôi có thể chơi tennis.', tokens: ['テニス', 'を', 'する', 'ことが', 'できます'], distractors: ['のが'] },
    { ja: 'わたしは まちを あるくのが すきです。', vi: 'Tôi thích đi bộ trong phố.', tokens: ['わたし', 'は', 'まち', 'を', 'あるくの', 'が', 'すきです'], distractors: ['こと'] },
    { ja: 'はを みがくことを わすれました。', vi: 'Tôi quên việc đánh răng.', tokens: ['は', 'を', 'みがく', 'ことを', 'わすれました'], distractors: ['のを'] },
  ],
  kanji: ['事', '者', '例'],
}
