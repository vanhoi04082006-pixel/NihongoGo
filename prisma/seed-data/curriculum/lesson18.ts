/**
 * NihongoGo — Bài 18: 可能形 (thể khả năng & 〜ことができます).
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson18: CurriculumLesson = {
  order: 18,
  slug: 'l18-the-kha-nang',
  title: 'Thể khả năng — Có thể & không thể',
  titleJa: '可能形',
  description: 'Nói về khả năng làm được việc gì với thể khả năng và ことができます.',
  learningObjectives: [
    'Chia động từ sang thể khả năng',
    'Dùng ことができます',
    'Nói không thể với 〜られません',
  ],
  grammarTopics: ['Quy tắc chia thể khả năng', '〜ことができます (có thể làm)'],
  vocabularyTopics: ['Kỹ năng và tài năng', 'Thể thao và sở thích'],
  kanjiTopics: ['Kanji năng lực đặc biệt (泳・作・覚)'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'できます', romaji: 'dekimasu', meaningVi: 'làm được, có thể', pos: 'động từ nhóm 3', exampleJa: 'にほんごの しゅくだいが できます。', exampleVi: 'Tôi làm được bài tập tiếng Nhật.' },
    { term: 'ピアノ', romaji: 'piano', meaningVi: 'đàn piano', pos: 'danh từ', exampleJa: 'ピアノを ひきます。', exampleVi: 'Tôi chơi đàn piano.' },
    { term: 'ひきます', romaji: 'hikimasu', meaningVi: 'chơi (nhạc cụ)', pos: 'động từ nhóm 1', exampleJa: 'まいにち ピアノを ひきます。', exampleVi: 'Mỗi ngày tôi chơi piano.' },
    { term: 'サッカー', romaji: 'sakkā', meaningVi: 'bóng đá', pos: 'danh từ', exampleJa: 'サッカーを します。', exampleVi: 'Tôi chơi bóng đá.' },
    { term: 'スキー', romaji: 'sukī', meaningVi: 'trượt tuyết', pos: 'danh từ', exampleJa: 'スキーが できます。', exampleVi: 'Tôi biết trượt tuyết.' },
    { term: 'およぎます', romaji: 'oyogimasu', meaningVi: 'bơi, lội', pos: 'động từ nhóm 1', exampleJa: 'プールで およぎます。', exampleVi: 'Tôi bơi ở bể bơi.' },
    { term: 'つくります', romaji: 'tsukurimasu', meaningVi: 'làm, chế biến', pos: 'động từ nhóm 1', exampleJa: 'おかしを つくります。', exampleVi: 'Tôi làm bánh kẹo.' },
    { term: 'おぼえます', romaji: 'oboemasu', meaningVi: 'ghi nhớ, thuộc lòng', pos: 'động từ nhóm 2', exampleJa: 'あたらしい ことばを おぼえます。', exampleVi: 'Tôi học thuộc từ mới.' },
    { term: 'ことば', romaji: 'kotoba', meaningVi: 'từ, ngôn ngữ', pos: 'danh từ', exampleJa: 'にほんごの ことばを おぼえます。', exampleVi: 'Tôi học thuộc từ tiếng Nhật.' },
    { term: 'おかし', romaji: 'okashi', meaningVi: 'bánh kẹo', pos: 'danh từ', exampleJa: 'この おかしは おいしいです。', exampleVi: 'Bánh kẹo này ngon.' },
    { term: 'すし', romaji: 'sushi', meaningVi: 'sushi, cơm nắm', pos: 'danh từ', exampleJa: 'わたしは すしを たべられます。', exampleVi: 'Tôi ăn được sushi.' },
    { term: 'カレー', romaji: 'karē', meaningVi: 'món cà ri', pos: 'danh từ', exampleJa: 'この カレーは からいです。', exampleVi: 'Món cà ri này cay.' },
    { term: 'からい', romaji: 'karai', meaningVi: 'cay', pos: 'tính từ い', exampleJa: 'この りょうりは からいです。', exampleVi: 'Món này cay.' },
    { term: 'むずかしい', romaji: 'muzukashii', meaningVi: 'khó', pos: 'tính từ い', exampleJa: 'テストは むずかしいです。', exampleVi: 'Bài kiểm tra khó.' },
    { term: 'やさしい', romaji: 'yasashii', meaningVi: 'dễ', pos: 'tính từ い', exampleJa: 'この ことばは やさしいです。', exampleVi: 'Từ này dễ.' },
    { term: 'みせ', romaji: 'mise', meaningVi: 'cửa hàng, tiệm', pos: 'danh từ', exampleJa: 'この みせで しんぶんを かいます。', exampleVi: 'Tôi mua báo ở cửa hàng này.' },
    { term: 'すこし', romaji: 'sukoshi', meaningVi: 'một chút', pos: 'phó từ', exampleJa: 'にほんごを すこし はなせます。', exampleVi: 'Tôi nói được tiếng Nhật một chút.' },
    { term: 'れんしゅうします', romaji: 'renshūshimasu', meaningVi: 'luyện tập', pos: 'động từ nhóm 3', exampleJa: 'まいにち ピアノを れんしゅうします。', exampleVi: 'Mỗi ngày tôi luyện piano.' },
    { term: 'まだ', romaji: 'mada', meaningVi: 'vẫn chưa', pos: 'phó từ', exampleJa: 'まだ できません。', exampleVi: 'Tôi vẫn chưa làm được.' },
    { term: 'ひらがな', romaji: 'hiragana', meaningVi: 'chữ hiragana', pos: 'danh từ', exampleJa: 'ひらがなを かけます。', exampleVi: 'Tôi viết được chữ hiragana.' },
    { term: 'かんじ', romaji: 'kanji', meaningVi: 'chữ kanji', pos: 'danh từ', exampleJa: 'かんじを おぼえます。', exampleVi: 'Tôi học chữ kanji.' },
  ],
  grammar: [
    {
      code: 'l18-potential-group1',
      title: 'Thể khả năng nhóm 1 — cột え + ます',
      formation: 'Nhóm 1: đổi đuôi cột う sang cột え + ます (のみます→のめます)',
      explanationVi:
        'Động từ nhóm 1 chuyển âm cuối từ cột う sang cột え rồi thêm ます: のみます→のめます (uống được), かいます→かえます (mua được), よみます→よめます (đọc được), かきます→かけます (viết được), はなします→はなせます (nói được), およぎます→およげます (bơi được), うたいます→うたえます (hát được). Thể khả năng nghĩa "làm được / có khả năng làm". Phủ định thêm 〜ません: のめません = không uống được. Tân ngữ vẫn giữ trợ từ を.',
      examples: [
        { ja: 'わたしは ひらがなを かけます。', vi: 'Tôi viết được chữ hiragana.', tokens: ['わたし', 'は', 'ひらがな', 'を', 'かけます'] },
        { ja: 'この みせで しんぶんを かえます。', vi: 'Ở cửa hàng này mua được báo.' },
        { ja: 'にほんごの ほんを すこし よめます。', vi: 'Tôi đọc được sách tiếng Nhật một chút.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'のみます → thể khả năng (uống được)',
          sentence: 'おちゃを ___。',
          options: ['のまます', 'のめます', 'のれます', 'のみます'],
          answerIndex: 1, explanationVi: 'Nhóm 1 のみます: み (cột い) → め (cột え) + ます = のめます. のれます là cách chia kiểu nhóm 2 — sai với nhóm 1.',
        },
        {
          kind: 'conjugate', prompt: 'はなします → thể khả năng (nói được)',
          sentence: 'にほんごを すこし ___。',
          options: ['はなせます', 'はなします', 'はなれません', 'はなけます'],
          answerIndex: 0, explanationVi: 'Nhóm 1 はなします: す → せ + ます = はなせます. はなれません vừa sai quy tắc vừa là phủ định.',
        },
        {
          kind: 'choice', prompt: '「この みせで しんぶんを かえます。」 có nghĩa là gì?',
          options: ['Ở cửa hàng này không thể mua báo', 'Tôi đã mua báo ở cửa hàng này', 'Ở cửa hàng này mua được báo', 'Cửa hàng này bán báo đắt'],
          answerIndex: 2, explanationVi: 'かえます = かいます (mua) ở thể khả năng → "mua được". で chỉ nơi diễn ra hành động.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ',
          sentence: 'プール___ およげます。',
          options: ['へ', 'に', 'を', 'で'],
          answerIndex: 3, explanationVi: 'プール là nơi diễn ra hành động bơi → で. へ chỉ hướng đến, を chỉ tân ngữ.',
        },
      ],
    },
    {
      code: 'l18-potential-group23',
      title: 'Thể khả năng nhóm 2 (〜られます) và nhóm 3 (できます・こられます)',
      formation: 'Nhóm 2: bỏ ます + られます / Nhóm 3: します→できます, きます→こられます',
      explanationVi:
        'Động từ nhóm 2 bỏ ます thêm られます: たべます→たべられます (ăn được), みます→みられます (xem được), おきます→おきられます (dậy được). Nhóm 2 KHÔNG đổi sang cột え (không nói たべせます). Nhóm 3 bất quy tắc: します→できます (làm được), きます→こられます (đến được). Phủ định: たべられません, できません. Riêng できます thường đi sau danh từ kỹ năng với trợ từ が — giống あります/います đã học ở bài 9: スキーが できます.',
      examples: [
        { ja: 'わたしは すしを たべられます。', vi: 'Tôi ăn được sushi.', tokens: ['わたし', 'は', 'すし', 'を', 'たべられます'] },
        { ja: 'えいがかんで にほんの えいがを みられます。', vi: 'Ở rạp chiếu phim xem được phim Nhật.' },
        { ja: 'スキーが できます。', vi: 'Tôi biết trượt tuyết.' },
        { ja: 'あしたも こられます。', vi: 'Ngày mai tôi cũng có thể đến.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'たべます → thể khả năng (ăn được)',
          sentence: 'この りょうりを ___。',
          options: ['たべせます', 'たべられます', 'たべれます', 'たべえます'],
          answerIndex: 1, explanationVi: 'Nhóm 2: たべます → たべ + られます = たべられます. たべれます là cách nói khẩu ngữ thiếu chuẩn (bỏ ら) — tránh khi viết và khi thi.',
        },
        {
          kind: 'conjugate', prompt: 'します → thể khả năng (làm được)',
          sentence: 'にほんごの しゅくだいが ___。',
          options: ['しられます', 'されます', 'できます', 'しえます'],
          answerIndex: 2, explanationVi: 'Nhóm 3 します bất quy tắc: thể khả năng là できます. Hai dạng còn lại không theo quy tắc nào.',
        },
        {
          kind: 'choice', prompt: '「あしたも こられます。」 có nghĩa là gì?',
          options: ['Ngày mai tôi cũng phải đến', 'Ngày mai tôi cũng có thể đến', 'Ngày mai tôi cũng muốn đến', 'Ngày mai tôi cũng đến bằng tàu'],
          answerIndex: 1, explanationVi: 'こられます = きます (đến) ở thể khả năng = "có thể đến". "Phải đến" là こなければなりません, "muốn đến" là きたいです.',
        },
        {
          kind: 'error', prompt: 'Câu nào chia đúng thể khả năng?',
          options: ['わたしは すしを たべせます。', 'わたしは すしが たべります。', 'わたしは すしを たべします。', 'わたしは すしを たべられます。'],
          answerIndex: 3, explanationVi: 'たべます là nhóm 2 → たべられます. たべせます là chia kiểu nhóm 1 (sai), すしが たべります sai cả trợ từ lẫn động từ.',
        },
      ],
    },
    {
      code: 'l18-koto-ga-dekimasu',
      title: 'V thể thường + ことができます',
      formation: 'Gốc động từ (thể thường) + ことができます: のみます→のむ, たべます→たべる, します→する, きます→くる',
      explanationVi:
        'Cách nói thứ hai của "có thể": lấy GỐC động từ (thể thường) rồi thêm ことができます. Quy tắc lấy gốc: nhóm 1 bỏ ます rồi đổi đuôi cột い sang cột う (のみます→のむ, ききます→きく, はなします→はなす); nhóm 2 bỏ ます thêm る (たべます→たべる, みます→みる); nhóm 3 là する và くる. Ví dụ: のむことができます = có thể uống. Nghĩa tương đương thể khả năng nhưng trang trọng hơn, hay dùng cho kỹ năng, năng lực chung: にほんごを はなすことができます. Phủ định: ことができません. Danh từ kỹ năng có thể đi thẳng với が + できます: スキーが できます.',
      examples: [
        { ja: 'わたしは にほんごを はなすことができます。', vi: 'Tôi có thể nói tiếng Nhật.', tokens: ['わたし', 'は', 'にほんご', 'を', 'はなす', 'ことが', 'できます'] },
        { ja: 'この みせで とけいを かうことができます。', vi: 'Ở cửa hàng này có thể mua đồng hồ.' },
        { ja: 'まだ かんじを かくことができません。', vi: 'Tôi vẫn chưa viết được kanji.' },
      ],
      drills: [
        {
          kind: 'fill', prompt: 'Điền thể thường của たべます',
          sentence: 'すしを ___ことができます。',
          options: ['たべます', 'たべる', 'たべられる', 'たべて'],
          answerIndex: 1, explanationVi: 'Trước こと phải là thể thường: たべます→たべる. たべられる là thể khả năng, たべて là thể て — đều không đứng trước こと.',
        },
        {
          kind: 'fill', prompt: 'Điền thể thường của します',
          sentence: 'しゅくだいを ___ことができます。',
          options: ['する', 'します', 'できる', 'して'],
          answerIndex: 0, explanationVi: 'Nhóm 3 します có thể thường là する: する + ことができます. できる tự thân đã nghĩa "được", không ghép với こと theo cách này.',
        },
        {
          kind: 'choice', prompt: '「まだ かんじを かくことができません。」 có nghĩa là gì?',
          options: ['Tôi vẫn chưa viết được kanji', 'Tôi đã viết được kanji rồi', 'Tôi không muốn viết kanji', 'Tôi không được phép viết kanji'],
          answerIndex: 0, explanationVi: 'できません = phủ định của できます, kèm まだ (vẫn chưa) → "vẫn chưa viết được". "Không được phép" là 〜てはいけません.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ',
          sentence: 'えいがかん___ えいがを みることができます。',
          options: ['を', 'で', 'へ', 'と'],
          answerIndex: 1, explanationVi: 'えいがかん là nơi diễn ra hành động → で. を đã dùng cho tân ngữ えいが.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Biệt tài của Linh',
      situationVi: 'Tanaka hỏi Linh xem Linh hát và viết chữ tiếng Nhật đến mức nào.',
      lines: [
        { speaker: 'たなか', ja: 'リンさん、にほんごの うたを うたえますか。', vi: 'Linh, bạn hát được bài hát tiếng Nhật không?' },
        { speaker: 'リン', ja: 'はい、すこし うたえます。', vi: 'Vâng, tôi hát được một chút.' },
        { speaker: 'たなか', ja: 'いいですね。わたしは まだ うたえません。', vi: 'Giỏi đấy. Còn tôi vẫn chưa hát được.' },
        { speaker: 'リン', ja: 'たなかさんも れんしゅうしてください。', vi: 'Bạn cũng hãy luyện tập đi.' },
        { speaker: 'たなか', ja: 'はい、まいにち れんしゅうします。リンさん、ひらがなも かけますか。', vi: 'Ừ, mỗi ngày tôi sẽ luyện. Linh, bạn viết được cả hiragana nữa à?' },
        { speaker: 'リン', ja: 'はい、ひらがなも かけます。かんじは まだ かくことができません。', vi: 'Vâng, tôi viết được hiragana. Còn kanji thì vẫn chưa viết được.' },
        { speaker: 'たなか', ja: 'かんじは むずかしいですね。', vi: 'Kanji khó nhỉ.' },
        { speaker: 'リン', ja: 'ええ、まいにち おぼえなければなりません。', vi: 'Đúng vậy, mỗi ngày tôi phải học thuộc.' },
      ],
    },
    {
      titleVi: 'Cuối tuần của Linh',
      situationVi: 'Ông Sato hỏi Linh về kế hoạch cuối tuần và những môn Linh chơi được.',
      lines: [
        { speaker: 'さとう', ja: 'リンさん、しゅうまつは なにを しますか。', vi: 'Linh, cuối tuần bạn làm gì?' },
        { speaker: 'リン', ja: 'プールへ いきます。プールで およぎます。', vi: 'Tôi đi bể bơi. Tôi bơi ở bể.' },
        { speaker: 'さとう', ja: 'リンさんは スキーが できますか。', vi: 'Linh có biết trượt tuyết không?' },
        { speaker: 'リン', ja: 'いいえ、スキーは まだ できません。', vi: 'Không, trượt tuyết tôi vẫn chưa biết.' },
        { speaker: 'さとう', ja: 'スキーは むずかしいですか。', vi: 'Trượt tuyết khó à?' },
        { speaker: 'リン', ja: 'はい、ちょっと むずかしいです。', vi: 'Vâng, hơi khó một chút.' },
        { speaker: 'さとう', ja: 'サッカーは できますか。', vi: 'Thế bóng đá thì chơi được không?' },
        { speaker: 'リン', ja: 'はい、サッカーが できます。', vi: 'Vâng, tôi chơi được bóng đá.' },
        { speaker: 'さとう', ja: 'いいですね。こんど いっしょに しましょう。', vi: 'Tốt đấy. Lần này ta chơi cùng nhau nhé.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'わたしは ひらがなを かけます。', meaningVi: 'Tôi viết được chữ hiragana.', choices: ['Tôi viết được chữ hiragana', 'Tôi viết được chữ kanji', 'Tôi đọc được chữ hiragana', 'Tôi chưa viết được chữ hiragana'], answerIndex: 0 },
    { scriptJa: 'この みせで しんぶんを かうことができます。', meaningVi: 'Ở cửa hàng này có thể mua báo.', choices: ['Không thể mua báo ở cửa hàng này', 'Có thể mua báo ở cửa hàng này', 'Có thể mượn sách ở thư viện này', 'Đã mua báo ở cửa hàng này'], answerIndex: 1, dictation: true },
    { scriptJa: 'からい りょうりは たべられません。', meaningVi: 'Tôi không ăn được món cay.', choices: ['Có thể ăn món cay', 'Muốn ăn món cay', 'Không ăn được món cay', 'Không được phép ăn món cay'], answerIndex: 2, dictation: true },
    { scriptJa: 'スキーが できます。', meaningVi: 'Tôi biết trượt tuyết.', choices: ['Biết trượt tuyết', 'Không biết trượt tuyết', 'Muốn đi trượt tuyết', 'Phải đi trượt tuyết'], answerIndex: 0 },
    { scriptJa: 'まだ にほんごの しんぶんを よめません。', meaningVi: 'Tôi vẫn chưa đọc được báo tiếng Nhật.', choices: ['Đã đọc được báo tiếng Nhật rồi', 'Vẫn chưa đọc được báo tiếng Nhật', 'Không muốn đọc báo tiếng Nhật', 'Vẫn chưa mua được báo tiếng Nhật'], answerIndex: 1 },
  ],
  reading: {
    titleVi: 'Giáo viên đa tài',
    lines: [
      { text: 'たなかさんは だいがくの せんせいです。', vi: 'Tanaka là giáo viên đại học.' },
      { text: 'にほんごと ベトナムごを はなすことができます。', vi: 'Ông ấy có thể nói tiếng Nhật và tiếng Việt.' },
      { text: 'ピアノも ひくことができます。', vi: 'Ông ấy cũng có thể chơi piano.' },
      { text: 'スキーは できません。', vi: 'Còn trượt tuyết thì ông ấy không biết.' },
      { text: 'まいにち にじかん ピアノを れんしゅうします。', vi: 'Mỗi ngày ông ấy luyện piano hai tiếng.' },
      { text: 'よるは おんがくを ききます。', vi: 'Buổi tối ông ấy nghe nhạc.' },
      { text: 'げつようびから きんようびまで だいがくへ いきます。', vi: 'Từ thứ Hai đến thứ Sáu ông ấy đến trường đại học.' },
    ],
    questions: [
      { questionVi: 'Tanaka có thể làm được những gì?', choices: ['Trượt tuyết', 'Nấu được món cay', 'Nói được tiếng Nhật và tiếng Việt', 'Chụp ảnh đẹp'], answerIndex: 2, explanationVi: 'にほんごと ベトナムごを はなすことができます = nói được tiếng Nhật và tiếng Việt; còn スキーは できません.' },
      { questionVi: 'Mỗi ngày Tanaka luyện piano trong bao lâu?', choices: ['1 giờ', '3 giờ', '30 phút', '2 giờ'], answerIndex: 3, explanationVi: 'まいにち にじかん ピアノを れんしゅうします — にじかん = hai tiếng.' },
      { questionVi: 'Tanaka đến trường đại học vào những ngày nào?', choices: ['Chỉ thứ Bảy và Chủ nhật', 'Thứ Hai đến thứ Sáu', 'Mỗi ngày trong tuần', 'Chỉ thứ Hai'], answerIndex: 1, explanationVi: 'げつようびから きんようびまで だいがくへ いきます = từ thứ Hai đến thứ Sáu.' },
    ],
  },
  speakSentences: [
    { ja: 'わたしは ひらがなを かけます。', vi: 'Tôi viết được chữ hiragana.' },
    { ja: 'すしを たべることができます。', vi: 'Tôi có thể ăn sushi.' },
    { ja: 'からい りょうりは たべられません。', vi: 'Tôi không ăn được món cay.' },
    { ja: 'スキーが できますか。', vi: 'Bạn biết trượt tuyết không?' },
  ],
  translatePairs: [
    { ja: 'わたしは ひらがなを かけます。', vi: 'Tôi viết được chữ hiragana.', tokens: ['わたし', 'は', 'ひらがな', 'を', 'かけます'], distractors: ['の'] },
    { ja: 'この みせで しんぶんを かえます。', vi: 'Ở cửa hàng này mua được báo.', tokens: ['この', 'みせ', 'で', 'しんぶん', 'を', 'かえます'], distractors: ['へ'] },
    { ja: 'まだ かんじを かくことができません。', vi: 'Tôi vẫn chưa viết được kanji.', tokens: ['まだ', 'かんじ', 'を', 'かく', 'ことが', 'できません'], distractors: ['です'] },
    { ja: 'ピアノを ひくことができます。', vi: 'Tôi có thể chơi piano.', tokens: ['ピアノ', 'を', 'ひく', 'ことが', 'できます'], distractors: ['の'] },
    { ja: 'よる おんがくを きくことができます。', vi: 'Buổi tối tôi có thể nghe nhạc.', tokens: ['よる', 'おんがく', 'を', 'きく', 'ことが', 'できます'], distractors: ['へ'] },
  ],
  kanji: ['泳', '作', '覚'],
}
