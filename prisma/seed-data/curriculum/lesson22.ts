/**
 * NihongoGo — Bài 22: あげる・くれる・もらう (cho & nhận).
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson22: CurriculumLesson = {
  order: 22,
  slug: 'l22-cho-nhan',
  title: 'Cho & nhận — あげる・くれる・もらう',
  titleJa: 'あげる・くれる・もらう',
  description: 'Nói về việc cho và nhận theo hướng quan hệ giữa người nói và các bên.',
  learningObjectives: [
    'Dùng あげる khi mình cho người khác',
    'Dùng くれる khi người khác cho mình',
    'Dùng もらう khi mình nhận từ người khác',
  ],
  grammarTopics: ['あげる (cho đi)', 'くれる (người khác cho mình)', 'もらう (được nhận)'],
  vocabularyTopics: ['Quà tặng và dịp tặng quà', 'Lời cảm ơn'],
  kanjiTopics: ['Kanji vị trí & hướng (上・下・内)'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'あげます', romaji: 'agemasu', meaningVi: 'cho (mình cho người khác)', pos: 'động từ nhóm 2', exampleJa: 'たんじょうびに ともだちに プレゼントを あげます。', exampleVi: 'Vào sinh nhật tôi tặng bạn món quà.' },
    { term: 'くれます', romaji: 'kuremasu', meaningVi: '(người khác) cho mình', pos: 'động từ nhóm 2', exampleJa: 'たなかさんが わたしに かさを くれます。', exampleVi: 'Tanaka cho tôi cây dù.' },
    { term: 'もらいます', romaji: 'moraimasu', meaningVi: 'nhận, được (cho)', pos: 'động từ nhóm 1', exampleJa: 'わたしは せんせいに てがみを もらいます。', exampleVi: 'Tôi nhận thư từ thầy.' },
    { term: 'プレゼント', romaji: 'purezento', meaningVi: 'món quà (tặng)', pos: 'danh từ', exampleJa: 'たんじょうびに プレゼントを もらいました。', exampleVi: 'Vào sinh nhật tôi đã nhận được quà.' },
    { term: 'おくりもの', romaji: 'okurimono', meaningVi: 'quà tặng', pos: 'danh từ', exampleJa: 'ともだちに おくりものを あげます。', exampleVi: 'Tôi tặng quà cho bạn.' },
    { term: 'おみやげ', romaji: 'omiyage', meaningVi: 'quà lưu niệm (từ chuyến đi)', pos: 'danh từ', exampleJa: 'りょこうの おみやげを ともだちに あげました。', exampleVi: 'Tôi đã tặng bạn quà lưu niệm từ chuyến đi.' },
    { term: 'うち', romaji: 'uchi', meaningVi: 'nhà (của mình)', pos: 'danh từ', exampleJa: 'うちで パーティーを します。', exampleVi: 'Tôi tổ chức tiệc ở nhà.' },
    { term: 'はな', romaji: 'hana', meaningVi: 'hoa', pos: 'danh từ', exampleJa: 'ともだちの おかあさんに はなを あげました。', exampleVi: 'Tôi đã tặng hoa cho mẹ của bạn.' },
    { term: 'くつ', romaji: 'kutsu', meaningVi: 'đôi giày', pos: 'danh từ', exampleJa: 'わたしの おとうとに くつを あげました。', exampleVi: 'Tôi đã tặng em trai tôi đôi giày.' },
    { term: 'かさ', romaji: 'kasa', meaningVi: 'cây dù', pos: 'danh từ', exampleJa: 'たなかさんが わたしに かさを くれました。', exampleVi: 'Tanaka đã cho tôi cây dù.' },
    { term: 'とけい', romaji: 'tokei', meaningVi: 'đồng hồ', pos: 'danh từ', exampleJa: 'たんじょうびに とけいを もらいました。', exampleVi: 'Vào sinh nhật tôi đã nhận được đồng hồ.' },
    { term: 'てがみ', romaji: 'tegami', meaningVi: 'lá thư', pos: 'danh từ', exampleJa: 'せんせいに てがみを もらいました。', exampleVi: 'Tôi đã nhận được thư từ thầy.' },
    { term: 'きっぷ', romaji: 'kippu', meaningVi: 'vé (xe, tàu)', pos: 'danh từ', exampleJa: 'えきで きっぷを かいます。', exampleVi: 'Tôi mua vé ở nhà ga.' },
    { term: 'さいふ', romaji: 'saifu', meaningVi: 'cái ví (đựng tiền)', pos: 'danh từ', exampleJa: 'たんじょうびに おとうとに さいふを あげます。', exampleVi: 'Vào sinh nhật tôi sẽ tặng em trai cái ví.' },
    { term: 'たんじょうび', romaji: 'tanjōbi', meaningVi: 'sinh nhật', pos: 'danh từ', exampleJa: 'あしたは わたしの たんじょうびです。', exampleVi: 'Ngày mai là sinh nhật của tôi.' },
    { term: 'クリスマス', romaji: 'kurisumasu', meaningVi: 'lễ Giáng sinh', pos: 'danh từ', exampleJa: 'クリスマスに なにを もらいましたか。', exampleVi: 'Bạn đã nhận được gì vào Giáng sinh?' },
    { term: 'うれしい', romaji: 'ureshii', meaningVi: 'vui mừng', pos: 'tính từ い', exampleJa: 'プレゼントを もらって、うれしいです。', exampleVi: 'Được nhận quà, tôi vui lắm.' },
    { term: 'しんせつ', romaji: 'shinsetsu', meaningVi: 'tử tế', pos: 'tính từ な', exampleJa: 'たなかさんは しんせつな ひとです。', exampleVi: 'Tanaka là người tử tế.' },
    { term: 'おかあさん', romaji: 'okāsan', meaningVi: 'mẹ (của người khác)', pos: 'danh từ', exampleJa: 'ともだちの おかあさんに あいました。', exampleVi: 'Tôi đã gặp mẹ của bạn.' },
    { term: 'おとうと', romaji: 'otōto', meaningVi: 'em trai', pos: 'danh từ', exampleJa: 'おとうとに とけいを あげました。', exampleVi: 'Tôi đã tặng em trai đồng hồ.' },
    { term: 'いもうと', romaji: 'imōto', meaningVi: 'em gái', pos: 'danh từ', exampleJa: 'いもうとは この がっこうの がくせいです。', exampleVi: 'Em gái tôi là học sinh của trường này.' },
    { term: 'ありがとう', romaji: 'arigatō', meaningVi: 'cảm ơn', pos: 'lời cảm ơn', exampleJa: 'おくりものを どうも ありがとう。', exampleVi: 'Cảm ơn bạn nhiều về món quà.' },
  ],
  grammar: [
    {
      code: 'l22-agemasu',
      title: 'あげます — mình cho người khác',
      formation: 'Người cho は + người nhận に + vật + を + あげます',
      explanationVi:
        'あげます là động từ CHO với hướng "đi ra xa người nói": tôi cho người khác, hoặc người cùng phía tôi cho người ngoài. Người nhận luôn đi với に, vật được cho đi với を. Điều tối quan trọng: người nhận của あげます KHÔNG THỂ là わたし — khi người khác cho mình phải dùng くれます. Quá khứ: あげました; phủ định: あげません. Chủ ngữ わたし thường được lược bỏ: ともだちに ほんを あげます.',
      examples: [
        { ja: 'わたしは ともだちに ほんを あげます。', vi: 'Tôi cho bạn cuốn sách.', tokens: ['わたし', 'は', 'ともだち', 'に', 'ほん', 'を', 'あげます'] },
        { ja: 'たんじょうびに いもうとに かさを あげました。', vi: 'Vào sinh nhật tôi đã tặng em gái cây dù.', tokens: ['たんじょうび', 'に', 'いもうと', 'に', 'かさ', 'を', 'あげました'] },
        { ja: 'リンさんは ミンさんに くつを あげました。', vi: 'Linh tặng Min đôi giày.' },
        { ja: 'こんど おとうとに とけいを あげます。', vi: 'Lần này tôi sẽ tặng em trai đồng hồ.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Điền trợ từ cho NGƯỜI NHẬN của あげます',
          sentence: 'わたしは ともだち___ プレゼントを あげます。',
          options: ['に', 'を', 'が', 'で'],
          answerIndex: 0, explanationVi: 'Người nhận của あげます đi với に: ともだちに あげます. を dùng cho VẬT được cho; で chỉ nơi thực hiện hành động.',
        },
        {
          kind: 'choice', prompt: '「わたしは いもうとに くつを あげました。」 có nghĩa là gì?',
          options: ['Em gái cho tôi đôi giày', 'Tôi cho em gái đôi giày', 'Tôi mua giày cùng em gái', 'Tôi nhận đôi giày của em gái'],
          answerIndex: 1, explanationVi: 'あげます = cho ĐI từ phía người nói → tôi là người cho, いもうと (に) là người nhận.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['わたしは わたしに とけいを あげました。', 'わたしは ともだちに とけいを あげました。', 'わたしは ともだちが とけいを あげました。', 'ともだちは わたしに とけいを あげました。'],
          answerIndex: 1, explanationVi: 'Người nhận của あげます không thể là わたし (câu 1 sai); người nhận đi với に chứ không phải が (câu 3 sai); khi ともだち cho わたし thì phải dùng くれました (câu 4 sai).',
        },
        {
          kind: 'conjugate', prompt: 'あげます → dạng quá khứ',
          sentence: 'きのう おとうとに さいふを ___。',
          options: ['あげます', 'あげません', 'あげましょう', 'あげました'],
          answerIndex: 3, explanationVi: 'きのう (hôm qua) đòi hỏi quá khứ: あげました — きのう おとうとに さいふを あげました.',
        },
      ],
    },
    {
      code: 'l22-kuremasu',
      title: 'くれます — người khác cho mình',
      formation: 'Người cho が + (わたし に) + vật + を + くれます',
      explanationVi:
        'くれます cũng nghĩa là CHO nhưng hướng ngược với あげます — hướng VỀ phía người nói: người khác cho tôi (hoặc người thân phía tôi). Người cho là chủ ngữ, đánh dấu bằng が (hoặc は); わたし là người nhận nên thường được lược bỏ, muốn nói rõ thì thêm わたしに. Nếu người nhận không phải mình hay người phía mình thì phải dùng あげます. Khi vừa được tặng quà thường kèm lời cảm ơn: ともだちが おみやげを くれました。ありがとう.',
      examples: [
        { ja: 'たなかさんが わたしに くつを くれました。', vi: 'Tanaka đã cho tôi đôi giày.', tokens: ['たなかさん', 'が', 'わたし', 'に', 'くつ', 'を', 'くれました'] },
        { ja: 'ともだちが おみやげを くれました。', vi: 'Bạn đã cho tôi quà lưu niệm.', tokens: ['ともだち', 'が', 'おみやげ', 'を', 'くれました'] },
        { ja: 'せんせいが この とけいを くれました。', vi: 'Thầy đã cho tôi chiếc đồng hồ này.' },
        { ja: 'いもうとが てがみを くれます。', vi: 'Em gái sẽ cho tôi lá thư.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Điền trợ từ cho NGƯỜI CHO của くれます',
          sentence: 'たなかさん___ わたしに かさを くれました。',
          options: ['が', 'に', 'を', 'へ'],
          answerIndex: 0, explanationVi: 'Với くれます, người CHO là chủ ngữ đi với が; わたし (người nhận) đi với に.',
        },
        {
          kind: 'choice', prompt: '「いもうとが わたしに てがみを くれました。」 có nghĩa là gì?',
          options: ['Tôi cho em gái lá thư', 'Tôi viết thư cho em gái', 'Tôi nhận được lá thư từ em gái', 'Em gái đọc thư của tôi'],
          answerIndex: 2, explanationVi: 'くれます = người khác cho MÌNH → tôi là người nhận lá thư từ em gái.',
        },
        {
          kind: 'error', prompt: 'Muốn nói "Bạn cho tôi vé", câu nào đúng?',
          options: ['ともだちに わたしが きっぷを くれました。', 'ともだちが わたしに きっぷを くれました。', 'わたしは ともだちに きっぷを くれました。', 'ともだちは わたしを きっぷに くれました。'],
          answerIndex: 1, explanationVi: 'くれます hướng về phía tôi: người cho (ともだち) + が, người nhận (わたし) + に. Câu 3 là hướng cho đi (tôi cho bạn) — phải dùng あげました.',
        },
        {
          kind: 'fill', prompt: 'Điền từ đúng (vật được tặng)',
          sentence: 'たんじょうびに ともだちが ___を くれました。',
          options: ['プレゼント', 'ありがとう', 'に', 'あげます'],
          answerIndex: 0, explanationVi: 'Chỗ trống đứng trước を nên phải là VẬT được cho: プレゼントを くれました = bạn đã cho tôi món quà.',
        },
      ],
    },
    {
      code: 'l22-moraimasu',
      title: 'もらいます — nhận (từ người khác)',
      formation: '(Người nhận は) + người cho に/から + vật + を + もらいます',
      explanationVi:
        'もらいます nghĩa là NHẬN/ĐƯỢC CHO, đặt người NHẬN làm chủ ngữ: わたしは たなかさんに てがみを もらいました. Người cho đi với に hoặc から — cả hai đều đúng khi người cho là một người; から nghe trung lập hơn. Cùng một sự việc có thể nói theo hai hướng: たなかさんが わたしに はなを くれました = わたしは たなかさんに はなを もらいました. Phủ định: もらいません; quá khứ: もらいました.',
      examples: [
        { ja: 'わたしは たなかさんに てがみを もらいました。', vi: 'Tôi đã nhận thư từ Tanaka.', tokens: ['わたし', 'は', 'たなかさん', 'に', 'てがみ', 'を', 'もらいました'] },
        { ja: 'クリスマスに ともだちから とけいを もらいました。', vi: 'Vào Giáng sinh tôi đã nhận đồng hồ từ một người bạn.', tokens: ['クリスマス', 'に', 'ともだち', 'から', 'とけい', 'を', 'もらいました'] },
        { ja: 'せんせいに この ほんを もらいました。', vi: 'Tôi đã nhận cuốn sách này từ thầy.' },
        { ja: 'きのう いもうとに きっぷを もらいました。', vi: 'Hôm qua tôi đã nhận vé từ em gái.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Điền trợ từ cho NGƯỜI CHO của もらいます',
          sentence: 'わたしは せんせい___ とけいを もらいました。',
          options: ['を', 'が', 'に', 'は'],
          answerIndex: 2, explanationVi: 'Với もらいます, người cho đi với に (hoặc から): せんせいに/から とけいを もらいました.',
        },
        {
          kind: 'choice', prompt: 'Câu 「たなかさんが わたしに はなを くれました。」 nói lại bằng もらいます là câu nào?',
          options: ['わたしは たなかさんに はなを もらいました。', 'たなかさんは わたしに はなを もらいました。', 'わたしは たなかさんに はなを あげました。', 'たなかさんが わたしに はなを あげました。'],
          answerIndex: 0, explanationVi: 'Cùng một sự việc, đổi hướng nói: người nhận (わたし) thành chủ ngữ với は, người cho (たなかさん) đi với に/から.',
        },
        {
          kind: 'particle', prompt: 'Điền từ đúng với nghĩa "từ ai đó"',
          sentence: 'たんじょうびに いもうと___ かさを もらいました。',
          options: ['から', 'を', 'へ', 'と'],
          answerIndex: 0, explanationVi: 'から = "từ…" — người cho của もらいます có thể đi với に hoặc から; を/へ/と không dùng ở vị trí này.',
        },
        {
          kind: 'conjugate', prompt: 'もらいます → dạng phủ định',
          sentence: 'わたしは なにも ___。',
          options: ['もらいます', 'もらいました', 'もらいません', 'もらって'],
          answerIndex: 2, explanationVi: 'Phủ định của もらいます là もらいません; なにも + phủ định = "không nhận được gì cả".',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Quà sinh nhật',
      situationVi: 'Tanaka biết ngày mai là sinh nhật của Linh.',
      lines: [
        { speaker: 'たなか', ja: 'リンさん、あしたは たんじょうびですね。', vi: 'Linh, ngày mai là sinh nhật của bạn nhỉ.' },
        { speaker: 'リン', ja: 'はい、そうですよ。', vi: 'Vâng, đúng vậy.' },
        { speaker: 'たなか', ja: 'わたしは きょう プレゼントを かいました。', vi: 'Hôm nay tôi đã mua món quà.' },
        { speaker: 'リン', ja: 'ありがとうございます。なにを かいましたか。', vi: 'Cảm ơn bạn. Bạn đã mua gì?' },
        { speaker: 'たなか', ja: 'それは ひみつです。あした わかります。', vi: 'Đó là bí mật. Ngày mai bạn sẽ biết.' },
        { speaker: 'リン', ja: 'じゃ、あした いっしょに ケーキを たべませんか。', vi: 'Vậy mai mình cùng ăn bánh kem nhé?' },
        { speaker: 'たなか', ja: 'ええ、いいですね。ケーキを たべたいです。', vi: 'Ừ, hay đấy. Tôi muốn ăn bánh kem.' },
        { speaker: 'リン', ja: 'わたしも です。じゃ、また あした。', vi: 'Tôi cũng vậy. Hẹn gặp lại ngày mai.' },
      ],
    },
    {
      titleVi: 'Quà lưu niệm',
      situationVi: 'Min vừa đi Tokyo về, gặp Linh ở trường và tặng quà lưu niệm.',
      lines: [
        { speaker: 'ミン', ja: 'リンさん、おはよう ございます。これは おみやげです。', vi: 'Linh, chào buổi sáng. Đây là quà lưu niệm.' },
        { speaker: 'リン', ja: 'わあ、ありがとうございます。とうきょうの おかしですか。', vi: 'Ôi, cảm ơn bạn. Đây là bánh kẹo Tokyo à?' },
        { speaker: 'ミン', ja: 'はい、そうです。きのう とうきょうから かえりました。', vi: 'Vâng, đúng vậy. Hôm qua tôi vừa trở về từ Tokyo.' },
        { speaker: 'リン', ja: 'とうきょうは たのしかったですか。', vi: 'Chuyến đi Tokyo vui chứ?' },
        { speaker: 'ミン', ja: 'ええ、とても たのしかったです。', vi: 'Vâng, rất vui.' },
        { speaker: 'リン', ja: 'いいですね。わたしも とうきょうへ いきたいです。', vi: 'Hay nhỉ. Tôi cũng muốn đi Tokyo.' },
        { speaker: 'ミン', ja: 'じゃ、こんど いっしょに いきましょう。', vi: 'Vậy lần này mình cùng đi nhé.' },
        { speaker: 'リン', ja: 'はい。これは わたしの おくりものです。ミンさんに あげます。', vi: 'Vâng. Đây là quà của tôi. Tôi tặng Min.' },
        { speaker: 'ミン', ja: 'わあ、うれしいです。ありがとう。', vi: 'Ôi, tôi vui lắm. Cảm ơn bạn.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'わたしは ともだちに ほんを あげました。', meaningVi: 'Tôi đã cho bạn cuốn sách.', choices: ['Tôi đã cho bạn cuốn sách', 'Bạn đã cho tôi cuốn sách', 'Tôi đã mua sách cùng bạn', 'Tôi đã đọc sách với bạn'], answerIndex: 0, dictation: true },
    { scriptJa: 'たなかさんが わたしに くつを くれました。', meaningVi: 'Tanaka đã cho tôi đôi giày.', choices: ['Tôi đã cho Tanaka đôi giày', 'Tanaka đã cho tôi đôi giày', 'Tôi đã mua giày cho Tanaka', 'Tanaka đã mua đôi giày'], answerIndex: 1, dictation: true },
    { scriptJa: 'クリスマスに ともだちから とけいを もらいました。', meaningVi: 'Vào Giáng sinh tôi đã nhận được đồng hồ từ một người bạn.', choices: ['Tôi đã tặng bạn chiếc đồng hồ vào Giáng sinh', 'Bạn đã mua đồng hồ vào Giáng sinh', 'Vào Giáng sinh tôi đã nhận được đồng hồ từ một người bạn', 'Chiếc đồng hồ là quà Giáng sinh của tôi tặng bạn'], answerIndex: 2 },
    { scriptJa: 'たんじょうびに なにを もらいましたか。', meaningVi: 'Bạn đã nhận được gì vào sinh nhật?', choices: ['Sinh nhật của bạn là khi nào', 'Bạn đã tặng gì vào sinh nhật?', 'Bạn muốn nhận gì vào sinh nhật?', 'Bạn đã nhận được gì vào sinh nhật?'], answerIndex: 3 },
    { scriptJa: 'ともだちが おみやげを くれました。うれしいです。', meaningVi: 'Bạn đã cho tôi quà lưu niệm. Tôi vui lắm.', choices: ['Tôi đã mua quà lưu niệm cho bạn', 'Bạn đã cho tôi quà lưu niệm, tôi vui lắm', 'Tôi đã tặng bạn quà lưu niệm', 'Quà lưu niệm rất đắt'], answerIndex: 1 },
  ],
  reading: {
    titleVi: 'Sinh nhật của tôi',
    lines: [
      { text: 'きのうは わたしの たんじょうびでした。', vi: 'Hôm qua là sinh nhật của tôi.' },
      { text: 'あさ、ともだちの ミンさんが わたしに てがみを くれました。', vi: 'Buổi sáng, bạn tôi là Min đã cho tôi lá thư.' },
      { text: 'てがみを よんで、とても うれしかったです。', vi: 'Đọc lá thư, tôi vui lắm.' },
      { text: 'ごご、いもうとが わたしに とけいを くれました。', vi: 'Buổi chiều, em gái đã cho tôi chiếc đồng hồ.' },
      { text: 'わたしは いもうとに さいふを あげました。いもうとは 「ありがとう」と いいました。', vi: 'Tôi tặng em gái cái ví. Em gái nói: "Cảm ơn chị".' },
      { text: 'よる、ともだちの たなかさんが わたしに かさを くれました。', vi: 'Buổi tối, bạn tôi là Tanaka đã cho tôi cây dù.' },
      { text: 'わたしは たなかさんに おかしを あげました。', vi: 'Tôi đã tặng Tanaka bánh kẹo.' },
      { text: 'たんじょうびは とても たのしかったです。', vi: 'Sinh nhật năm nay rất vui.' },
    ],
    questions: [
      { questionVi: 'Min đã cho người viết cái gì?', choices: ['Bó hoa', 'Lá thư', 'Chiếc đồng hồ', 'Cây dù'], answerIndex: 1, explanationVi: 'Câu 2: ミンさんが わたしに てがみを くれました — Min cho người viết lá thư.' },
      { questionVi: 'Người viết đã tặng em gái cái gì?', choices: ['Cái ví', 'Cây dù', 'Bó hoa', 'Chiếc đồng hồ'], answerIndex: 0, explanationVi: 'Câu 5: いもうとに さいふを あげました — người viết tặng em gái cái ví.' },
      { questionVi: 'Buổi tối, Tanaka đã cho người viết cái gì?', choices: ['Bánh kẹo', 'Cái ví', 'Cây dù', 'Chiếc đồng hồ'], answerIndex: 2, explanationVi: 'Câu 6: たなかさんが わたしに かさを くれました — Tanaka cho cây dù (bánh kẹo là người viết tặng lại Tanaka).' },
    ],
  },
  speakSentences: [
    { ja: 'わたしは ともだちに ほんを あげます。', vi: 'Tôi cho bạn cuốn sách.' },
    { ja: 'たなかさんが わたしに かさを くれました。', vi: 'Tanaka đã cho tôi cây dù.' },
    { ja: 'わたしは せんせいに てがみを もらいました。', vi: 'Tôi đã nhận được thư từ thầy.' },
    { ja: 'ありがとうございます。うれしいです。', vi: 'Cảm ơn bạn. Tôi vui lắm.' },
  ],
  translatePairs: [
    { ja: 'わたしは ともだちに プレゼントを あげます。', vi: 'Tôi tặng bạn món quà.', tokens: ['わたし', 'は', 'ともだち', 'に', 'プレゼント', 'を', 'あげます'], distractors: ['くれます'] },
    { ja: 'たなかさんが わたしに くつを くれました。', vi: 'Tanaka đã cho tôi đôi giày.', tokens: ['たなかさん', 'が', 'わたし', 'に', 'くつ', 'を', 'くれました'], distractors: ['あげました'] },
    { ja: 'わたしは いもうとに はなを あげました。', vi: 'Tôi đã tặng em gái bó hoa.', tokens: ['わたし', 'は', 'いもうと', 'に', 'はな', 'を', 'あげました'], distractors: ['もらいました'] },
    { ja: 'クリスマスに とけいを もらいました。', vi: 'Vào Giáng sinh tôi đã nhận được đồng hồ.', tokens: ['クリスマス', 'に', 'とけい', 'を', 'もらいました'], distractors: ['くれました'] },
    { ja: 'ともだちが おみやげを くれました。', vi: 'Bạn đã cho tôi quà lưu niệm.', tokens: ['ともだち', 'が', 'おみやげ', 'を', 'くれました'], distractors: ['あげました'] },
  ],
  kanji: ['上', '下', '内'],
}
