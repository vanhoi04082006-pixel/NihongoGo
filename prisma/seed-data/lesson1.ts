/**
 * NihongoGo — Lesson 1: はじめまして (Chào hỏi & giới thiệu bản thân)
 * Nội dung GỐC 100%, tự biên soạn riêng cho NihongoGo (không sao chép giáo trình).
 * Tuân thủ đúng contract trong prisma/seed-data/types.ts.
 */
import type { SeedLesson } from './types'

export const lesson1: SeedLesson = {
  order: 1,
  slug: 'l1-hajimemashite',
  title: 'はじめまして — Chào hỏi & giới thiệu bản thân',
  titleJa: 'はじめまして',
  description:
    'Bài học đầu tiên của hành trình NihongoGo: chào hỏi khi gặp lần đầu và giới thiệu tên, quốc tịch, nghề nghiệp bằng mẫu câu A は B です. Bạn cũng sẽ học cách đặt câu hỏi với ですか, phủ định với じゃありません và tập viết 5 chữ hiragana đầu tiên.',
  learningObjectives: [
    'Chào hỏi lịch sự khi gặp lần đầu bằng はじめまして và よろしくおねがいします',
    'Dùng mẫu câu A は B です để giới thiệu tên, quốc tịch và nghề nghiệp',
    'Đặt câu hỏi với ですか và trả lời bằng はい / いいえ',
    'Phủ định với じゃありません và nói "cũng là" với trợ từ も',
    'Đọc và viết 5 chữ hiragana đầu tiên: あ、い、う、え、お',
  ],
  grammarTopics: [
    'Trợ từ chủ đề は',
    'Động từ liên hệ です',
    'Phủ định じゃありません',
    'Câu hỏi với trợ từ か',
    'Trợ từ も (cũng là)',
    'Hậu tố tôn kính さん',
  ],
  vocabularyTopics: [
    'Đại từ nhân xưng cơ bản',
    'Nghề nghiệp',
    'Tên quốc gia và quốc tịch',
    'Lời chào cơ bản',
    'Từ hỏi なん',
    'Đáp từ はい / いいえ / そう',
  ],
  kanjiTopics: [],
  difficulty: 'BEGINNER',
  status: 'PUBLISHED',

  /* ============================== Vocabulary ============================== */
  vocabulary: [
    {
      term: 'わたし',
      romaji: 'watashi',
      meaningVi: 'tôi',
      pos: 'đại từ',
      exampleJa: 'わたしはリンです。',
      exampleVi: 'Tôi là Linh.',
    },
    {
      term: 'あなた',
      romaji: 'anata',
      meaningVi: 'bạn',
      pos: 'đại từ',
      exampleJa: 'あなたはがくせいですか。',
      exampleVi: 'Bạn là học sinh chứ?',
    },
    {
      term: 'せんせい',
      romaji: 'sensei',
      meaningVi: 'giáo viên',
      pos: 'danh từ',
      exampleJa: 'たなかさんはせんせいです。',
      exampleVi: 'Anh Tanaka là giáo viên.',
    },
    {
      term: 'がくせい',
      romaji: 'gakusei',
      meaningVi: 'học sinh, sinh viên',
      pos: 'danh từ',
      exampleJa: 'リンさんはがくせいです。',
      exampleVi: 'Bạn Linh là học sinh.',
    },
    {
      term: 'かいしゃいん',
      romaji: 'kaishain',
      meaningVi: 'nhân viên công ty',
      pos: 'danh từ',
      exampleJa: 'ミンさんはかいしゃいんですか。',
      exampleVi: 'Anh Minh là nhân viên công ty à?',
    },
    {
      term: 'エンジニア',
      romaji: 'enjinia',
      meaningVi: 'kỹ sư',
      pos: 'danh từ',
      exampleJa: 'わたしはエンジニアです。',
      exampleVi: 'Tôi là kỹ sư.',
    },
    {
      term: 'ぎんこういん',
      romaji: 'ginkōin',
      meaningVi: 'nhân viên ngân hàng',
      pos: 'danh từ',
      exampleJa: 'わたしはぎんこういんじゃありません。',
      exampleVi: 'Tôi không phải là nhân viên ngân hàng.',
    },
    {
      term: 'いしゃ',
      romaji: 'isha',
      meaningVi: 'bác sĩ',
      pos: 'danh từ',
      exampleJa: 'キムさんはいしゃです。',
      exampleVi: 'Anh Kim là bác sĩ.',
    },
    {
      term: 'ベトナム',
      romaji: 'betonamu',
      meaningVi: 'Việt Nam',
      pos: 'danh từ riêng',
      exampleJa: 'わたしはベトナムじんです。',
      exampleVi: 'Tôi là người Việt Nam.',
    },
    {
      term: 'にほん',
      romaji: 'nihon',
      meaningVi: 'Nhật Bản',
      pos: 'danh từ riêng',
      exampleJa: 'たなかさんはにほんじんです。',
      exampleVi: 'Anh Tanaka là người Nhật.',
    },
    {
      term: 'ちゅうごく',
      romaji: 'chūgoku',
      meaningVi: 'Trung Quốc',
      pos: 'danh từ riêng',
      exampleJa: 'ワンさんはちゅうごくじんです。',
      exampleVi: 'Anh Vương là người Trung Quốc.',
    },
    {
      term: 'アメリカ',
      romaji: 'amerika',
      meaningVi: 'nước Mỹ',
      pos: 'danh từ riêng',
      exampleJa: 'スミスさんはアメリカじんです。',
      exampleVi: 'Anh Smith là người Mỹ.',
    },
    {
      term: '～じん',
      romaji: '~jin',
      meaningVi: 'hậu tố chỉ quốc tịch: "người ..."',
      pos: 'hậu tố',
      exampleJa: 'わたしはにほんじんじゃありません。',
      exampleVi: 'Tôi không phải là người Nhật.',
    },
    {
      term: '～さい',
      romaji: '~sai',
      meaningVi: 'hậu tố chỉ tuổi: "... tuổi"',
      pos: 'hậu tố',
      exampleJa: 'わたしはじゅうはっさいです。',
      exampleVi: 'Tôi 18 tuổi.',
    },
    {
      term: 'はじめまして',
      romaji: 'hajimemashite',
      meaningVi: 'chào khi gặp lần đầu (rất vui được gặp bạn)',
      pos: 'lời chào',
      exampleJa: 'はじめまして。わたしはリンです。',
      exampleVi: 'Rất vui được gặp bạn. Tôi là Linh.',
    },
    {
      term: 'よろしくおねがいします',
      romaji: 'yoroshiku onegaishimasu',
      meaningVi: 'lời chào xin nhờ cậy (mong được giúp đỡ)',
      pos: 'lời chào',
      exampleJa: 'たなかさん、よろしくおねがいします。',
      exampleVi: 'Anh Tanaka, mong được anh giúp đỡ.',
    },
    {
      term: 'おなまえ',
      romaji: 'onamae',
      meaningVi: 'tên (cách nói lịch sự)',
      pos: 'danh từ',
      exampleJa: 'おなまえはなんですか。',
      exampleVi: 'Tên bạn là gì?',
    },
    {
      term: 'なん',
      romaji: 'nan',
      meaningVi: 'gì (từ hỏi)',
      pos: 'đại từ nghi vấn',
      exampleJa: 'これはなんですか。',
      exampleVi: 'Đây là cái gì?',
    },
    {
      term: 'はい',
      romaji: 'hai',
      meaningVi: 'vâng, có, đúng vậy',
      pos: 'đáp từ',
      exampleJa: 'はい、わたしはがくせいです。',
      exampleVi: 'Vâng, tôi là học sinh.',
    },
    {
      term: 'いいえ',
      romaji: 'iie',
      meaningVi: 'không, không phải',
      pos: 'đáp từ',
      exampleJa: 'いいえ、わたしはせんせいじゃありません。',
      exampleVi: 'Không, tôi không phải là giáo viên.',
    },
    {
      term: 'そう',
      romaji: 'sō',
      meaningVi: 'vậy, đúng như thế',
      pos: 'phó từ',
      exampleJa: 'はい、そうです。',
      exampleVi: 'Vâng, đúng vậy.',
    },
    {
      term: 'にほんご',
      romaji: 'nihongo',
      meaningVi: 'tiếng Nhật',
      pos: 'danh từ',
      exampleJa: 'リンさんはにほんごのがくせいです。',
      exampleVi: 'Bạn Linh là học sinh tiếng Nhật.',
    },
    {
      term: 'だいがく',
      romaji: 'daigaku',
      meaningVi: 'trường đại học',
      pos: 'danh từ',
      exampleJa: 'わたしはだいがくのがくせいです。',
      exampleVi: 'Tôi là sinh viên đại học.',
    },
  ],

  /* =============================== Grammar =============================== */
  grammar: [
    {
      code: 'l1-wa-desu',
      title: 'A は B です',
      explanationVi:
        '「は」 là trợ từ đánh dấu chủ đề của câu, khi viết là "ha" nhưng đọc là "wa". 「です」 là động từ liên hệ lịch sự, tương đương với "là" trong tiếng Việt. Đây là mẫu câu khẳng định cơ bản nhất, dùng để giới thiệu hay mô tả A chính là B.',
      examples: [
        { ja: 'わたしはがくせいです。', vi: 'Tôi là học sinh.' },
        { ja: 'たなかさんはせんせいです。', vi: 'Anh Tanaka là giáo viên.' },
        { ja: 'リンさんはベトナムじんです。', vi: 'Bạn Linh là người Việt Nam.' },
      ],
    },
    {
      code: 'l1-wa-ja-arimasen',
      title: 'A は B じゃありません',
      explanationVi:
        'Dạng phủ định của 「です」 trong hội thoại là 「じゃありません」, dùng để nói A không phải là B. Văn nói hằng ngày còn có thể rút gọn thành 「じゃないです」, còn văn viết trang trọng dùng 「ではありません」.',
      examples: [
        { ja: 'わたしはせんせいじゃありません。', vi: 'Tôi không phải là giáo viên.' },
        { ja: 'たなかさんはがくせいじゃありません。', vi: 'Anh Tanaka không phải là học sinh.' },
        { ja: 'わたしはアメリカじんじゃありません。', vi: 'Tôi không phải là người Mỹ.' },
      ],
    },
    {
      code: 'l1-desu-ka',
      title: 'A は B ですか',
      explanationVi:
        'Thêm trợ từ 「か」 vào cuối câu khẳng định thì câu đó trở thành câu hỏi, không cần đổi trật tự từ. Khi trả lời, dùng 「はい、そうです」 nếu đúng, hoặc 「いいえ、～じゃありません」 nếu phủ định.',
      examples: [
        { ja: 'あなたはがくせいですか。', vi: 'Bạn là học sinh chứ?' },
        { ja: 'たなかさんはいしゃですか。', vi: 'Anh Tanaka là bác sĩ à?' },
        { ja: 'ミンさんはにほんじんですか。', vi: 'Anh Minh là người Nhật à?' },
      ],
    },
    {
      code: 'l1-mo',
      title: 'A も B です',
      explanationVi:
        'Trợ từ 「も」 thay thế cho 「は」 khi muốn nói chủ đề A "cũng" giống như người hoặc vật đã nhắc tới trước đó. Chú ý trong một câu chỉ dùng 「は」 hoặc 「も」, không dùng đồng thời cả hai.',
      examples: [
        { ja: 'わたしもがくせいです。', vi: 'Tôi cũng là học sinh.' },
        { ja: 'リンさんもベトナムじんです。', vi: 'Bạn Linh cũng là người Việt Nam.' },
        { ja: 'ミンさんもエンジニアです。', vi: 'Anh Minh cũng là kỹ sư.' },
      ],
    },
    {
      code: 'l1-san',
      title: '~さん',
      explanationVi:
        '「さん」 gắn sau họ tên người khác để thể hiện sự tôn trọng, tương đương "anh/chị/cô/ông" trong tiếng Việt. Tuyệt đối không gắn 「さん」 sau tên chính mình. Với giáo viên, bác sĩ... thường dùng 「せんせい」 thay cho 「さん」.',
      examples: [
        { ja: 'たなかさんはせんせいです。', vi: 'Anh Tanaka là giáo viên.' },
        { ja: 'リンさんはかいしゃいんですか。', vi: 'Chị Linh là nhân viên công ty à?' },
        { ja: 'ミンさんもだいがくのがくせいです。', vi: 'Anh Minh cũng là sinh viên đại học.' },
      ],
    },
  ],

  /* ================================ Nodes ================================ */
  nodes: [
    /* ------------------------------ Node 1 ------------------------------ */
    {
      key: 'l1-n1',
      title: 'Từ vựng cơ bản',
      description: 'Làm quen các từ vựng nền tảng của bài: đại từ, nghề nghiệp và lời chào.',
      icon: 'BookOpen',
      nodeType: 'VOCAB',
      xpReward: 10,
      difficulty: 'EASY',
      exercises: [
        {
          type: 'MATCHING',
          instructions: 'Nối mỗi từ tiếng Nhật với nghĩa tiếng Việt đúng.',
          questions: [
            {
              type: 'MATCHING',
              data: {
                kind: 'matching',
                pairs: [
                  { id: 'p1', left: { text: 'わたし', reading: 'watashi' }, right: { text: 'tôi' } },
                  { id: 'p2', left: { text: 'せんせい', reading: 'sensei' }, right: { text: 'giáo viên' } },
                  { id: 'p3', left: { text: 'がくせい', reading: 'gakusei' }, right: { text: 'học sinh' } },
                  { id: 'p4', left: { text: 'エンジニア', reading: 'enjinia' }, right: { text: 'kỹ sư' } },
                  { id: 'p5', left: { text: 'いしゃ', reading: 'isha' }, right: { text: 'bác sĩ' } },
                  { id: 'p6', left: { text: 'だいがく', reading: 'daigaku' }, right: { text: 'trường đại học' } },
                ],
              },
              correct: {
                pairs: {
                  p1: 'tôi',
                  p2: 'giáo viên',
                  p3: 'học sinh',
                  p4: 'kỹ sư',
                  p5: 'bác sĩ',
                  p6: 'trường đại học',
                },
              },
              explanation: 'Sáu từ này xuất hiện xuyên suốt bài học, hãy học kỹ phần đọc kana.',
            },
          ],
        },
        {
          type: 'SELECT_MEANING',
          instructions: 'Chọn nghĩa tiếng Việt của từ.',
          questions: [
            {
              type: 'SELECT_MEANING',
              prompt: 'かいしゃいん nghĩa là gì?',
              data: {
                kind: 'choice',
                promptJa: 'かいしゃいん',
                promptSub: 'kaishain',
                options: [
                  { id: 'a', text: 'nhân viên ngân hàng' },
                  { id: 'b', text: 'nhân viên công ty' },
                  { id: 'c', text: 'giáo viên' },
                  { id: 'd', text: 'bác sĩ' },
                ],
              },
              correct: { optionId: 'b' },
              explanation: 'かいしゃいん (kaishain) = nhân viên công ty. Chú ý phân biệt với ぎんこういん (nhân viên ngân hàng).',
              itemRef: { type: 'VOCAB', key: 'かいしゃいん' },
            },
          ],
        },
        {
          type: 'SELECT_MEANING',
          instructions: 'Chọn nghĩa tiếng Việt của từ.',
          questions: [
            {
              type: 'SELECT_MEANING',
              prompt: 'ぎんこういん nghĩa là gì?',
              data: {
                kind: 'choice',
                promptJa: 'ぎんこういん',
                promptSub: 'ginkōin',
                options: [
                  { id: 'a', text: 'kỹ sư' },
                  { id: 'b', text: 'giáo viên' },
                  { id: 'c', text: 'nhân viên ngân hàng' },
                  { id: 'd', text: 'học sinh' },
                ],
              },
              correct: { optionId: 'c' },
              explanation: 'ぎんこういん (ginkōin) = nhân viên ngân hàng, ghép từ ぎんこう (ngân hàng) + いん (nhân viên).',
              itemRef: { type: 'VOCAB', key: 'ぎんこういん' },
            },
          ],
        },
        {
          type: 'SELECT_MEANING',
          instructions: 'Chọn nghĩa tiếng Việt của từ.',
          questions: [
            {
              type: 'SELECT_MEANING',
              prompt: 'にほんご nghĩa là gì?',
              data: {
                kind: 'choice',
                promptJa: 'にほんご',
                promptSub: 'nihongo',
                options: [
                  { id: 'a', text: 'trường đại học' },
                  { id: 'b', text: 'người Nhật' },
                  { id: 'c', text: 'Việt Nam' },
                  { id: 'd', text: 'tiếng Nhật' },
                ],
              },
              correct: { optionId: 'd' },
              explanation: 'にほんご (nihongo) = tiếng Nhật. にほん + ご (ngôn ngữ).',
              itemRef: { type: 'VOCAB', key: 'にほんご' },
            },
          ],
        },
        {
          type: 'MULTIPLE_CHOICE',
          instructions: 'Chọn đáp án đúng.',
          questions: [
            {
              type: 'MULTIPLE_CHOICE',
              prompt: 'Từ nào có nghĩa là "bác sĩ"?',
              data: {
                kind: 'choice',
                options: [
                  { id: 'a', text: 'せんせい', big: true, audio: 'せんせい' },
                  { id: 'b', text: 'いしゃ', big: true, audio: 'いしゃ' },
                  { id: 'c', text: 'エンジニア', big: true, audio: 'エンジニア' },
                  { id: 'd', text: 'がくせい', big: true, audio: 'がくせい' },
                ],
              },
              correct: { optionId: 'b' },
              explanation: 'いしゃ (isha) = bác sĩ. せんせい là giáo viên, エンジニア là kỹ sư, がくせい là học sinh.',
              itemRef: { type: 'VOCAB', key: 'いしゃ' },
            },
          ],
        },
      ],
    },

    /* ------------------------------ Node 2 ------------------------------ */
    {
      key: 'l1-n2',
      title: 'Nhận diện từ',
      description: 'Nhận diện mặt chữ kana, cách đọc romaji và nghĩa của từ vựng.',
      icon: 'Sparkles',
      nodeType: 'VOCAB_PRACTICE',
      xpReward: 10,
      difficulty: 'EASY',
      exercises: [
        {
          type: 'SELECT_WORD',
          instructions: 'Chọn từ tiếng Nhật đúng với nghĩa cho trước.',
          questions: [
            {
              type: 'SELECT_WORD',
              prompt: 'Chọn từ tiếng Nhật có nghĩa là "tên" (cách nói lịch sự).',
              data: {
                kind: 'choice',
                layout: 'grid',
                options: [
                  { id: 'a', text: 'おなまえ', big: true, audio: 'おなまえ' },
                  { id: 'b', text: 'なん', big: true, audio: 'なん' },
                  { id: 'c', text: 'はい', big: true, audio: 'はい' },
                  { id: 'd', text: 'そう', big: true, audio: 'そう' },
                ],
              },
              correct: { optionId: 'a' },
              explanation: 'おなまえ (onamae) = tên, tiền tố お làm cho từ nghe lịch sự hơn.',
              itemRef: { type: 'VOCAB', key: 'おなまえ' },
            },
          ],
        },
        {
          type: 'SELECT_WORD',
          instructions: 'Chọn từ tiếng Nhật đúng với nghĩa cho trước.',
          questions: [
            {
              type: 'SELECT_WORD',
              prompt: 'Chọn từ tiếng Nhật là lời chào khi gặp nhau lần đầu.',
              data: {
                kind: 'choice',
                layout: 'grid',
                options: [
                  { id: 'a', text: 'よろしくおねがいします', big: true, audio: 'よろしくおねがいします' },
                  { id: 'b', text: 'おなまえ', big: true, audio: 'おなまえ' },
                  { id: 'c', text: 'はじめまして', big: true, audio: 'はじめまして' },
                  { id: 'd', text: 'だいがく', big: true, audio: 'だいがく' },
                ],
              },
              correct: { optionId: 'c' },
              explanation: 'はじめまして (hajimemashite) dùng khi gặp ai đó lần đầu. よろしくおねがいします thường nói ngay sau đó.',
              itemRef: { type: 'VOCAB', key: 'はじめまして' },
            },
          ],
        },
        {
          type: 'FILL_BLANK',
          instructions: 'Điền từ thích hợp vào chỗ trống.',
          questions: [
            {
              type: 'FILL_BLANK',
              data: {
                kind: 'fill-blank',
                sentence: 'A: あなたはがくせいですか。 B: はい、___はがくせいです。',
                options: [
                  { id: 'a', text: 'あなた', big: true, audio: 'あなた' },
                  { id: 'b', text: 'なん', big: true, audio: 'なん' },
                  { id: 'c', text: 'わたし', big: true, audio: 'わたし' },
                  { id: 'd', text: 'せんせい', big: true, audio: 'せんせい' },
                ],
              },
              correct: { optionId: 'c' },
              explanation: 'B trả lời về chính mình nên dùng đại từ わたし (tôi): はい、わたしはがくせいです。',
              itemRef: { type: 'VOCAB', key: 'わたし' },
            },
          ],
        },
        {
          type: 'HIRAGANA_RECOGNITION',
          instructions: 'Đọc kana và chọn romaji đúng.',
          questions: [
            {
              type: 'HIRAGANA_RECOGNITION',
              data: {
                kind: 'choice',
                promptJa: 'せんせい',
                promptSub: 'Từ này đọc như thế nào?',
                layout: 'grid',
                options: [
                  { id: 'a', text: 'senpai' },
                  { id: 'b', text: 'sensei' },
                  { id: 'c', text: 'gakusei' },
                  { id: 'd', text: 'sensai' },
                ],
              },
              correct: { optionId: 'b' },
              explanation: 'せ = se, ん = n, せ = se, い = i, ghép lại thành sensei.',
              itemRef: { type: 'VOCAB', key: 'せんせい' },
            },
          ],
        },
        {
          type: 'HIRAGANA_RECOGNITION',
          instructions: 'Đọc kana và chọn romaji đúng.',
          questions: [
            {
              type: 'HIRAGANA_RECOGNITION',
              data: {
                kind: 'choice',
                promptJa: 'ぎんこういん',
                promptSub: 'Từ này đọc như thế nào?',
                layout: 'grid',
                options: [
                  { id: 'a', text: 'ginkanin' },
                  { id: 'b', text: 'kinkōin' },
                  { id: 'c', text: 'ginkōnin' },
                  { id: 'd', text: 'ginkōin' },
                ],
              },
              correct: { optionId: 'd' },
              explanation: 'ぎ = gi (có dấu ngang Dakuten), こ = ko, う = ō (kéo dài), い = i, ん = n: ginkōin.',
              itemRef: { type: 'VOCAB', key: 'ぎんこういん' },
            },
          ],
        },
      ],
    },

    /* ------------------------------ Node 3 ------------------------------ */
    {
      key: 'l1-n3',
      title: 'Mẫu câu A は B です',
      description: 'Mẫu câu khẳng định cơ bản nhất: A là B.',
      icon: 'Shapes',
      nodeType: 'GRAMMAR',
      xpReward: 12,
      difficulty: 'EASY',
      exercises: [
        {
          type: 'GRAMMAR_CHOICE',
          instructions: 'Chọn đáp án đúng về ngữ pháp.',
          questions: [
            {
              type: 'GRAMMAR_CHOICE',
              prompt: 'Mẫu câu 「A は B です」 dùng để làm gì?',
              data: {
                kind: 'choice',
                options: [
                  { id: 'a', text: 'Nói rằng A là B (câu khẳng định)' },
                  { id: 'b', text: 'Phủ định A là B' },
                  { id: 'c', text: 'Hỏi xem A có phải là B không' },
                  { id: 'd', text: 'Nói rằng A cũng là B' },
                ],
              },
              correct: { optionId: 'a' },
              explanation: 'は đánh dấu chủ đề, です tương đương "là": わたしはがくせいです = Tôi là học sinh.',
              itemRef: { type: 'GRAMMAR', key: 'l1-wa-desu' },
            },
          ],
        },
        {
          type: 'GRAMMAR_CHOICE',
          instructions: 'Chọn phần hoàn thành câu đúng.',
          questions: [
            {
              type: 'GRAMMAR_CHOICE',
              data: {
                kind: 'choice',
                promptJa: 'わたしはエンジニア___。',
                promptSub: 'Chọn phần hoàn thành để tạo câu khẳng định "Tôi là kỹ sư".',
                options: [
                  { id: 'a', text: 'ですか' },
                  { id: 'b', text: 'じゃありません' },
                  { id: 'c', text: 'です' },
                  { id: 'd', text: 'でした' },
                ],
              },
              correct: { optionId: 'c' },
              explanation: 'Khẳng định "là" dùng です. ですか là câu hỏi, じゃありません là phủ định.',
              itemRef: { type: 'GRAMMAR', key: 'l1-wa-desu' },
            },
          ],
        },
        {
          type: 'ERROR_CORRECTION',
          instructions: 'Chọn câu viết đúng ngữ pháp.',
          questions: [
            {
              type: 'ERROR_CORRECTION',
              prompt: 'Câu nào viết đúng mẫu 「A は B です」?',
              data: {
                kind: 'choice',
                options: [
                  { id: 'a', text: 'わたしがくせいです。' },
                  { id: 'b', text: 'わたしはがくせいです。' },
                  { id: 'c', text: 'わたしはですがくせい。' },
                  { id: 'd', text: 'わたしはがくせいはです。' },
                ],
              },
              correct: { optionId: 'b' },
              explanation: 'Trật tự chuẩn: わたし (A) + は + がくせい (B) + です. Câu a thiếu は, câu c và d sai trật tự.',
              itemRef: { type: 'GRAMMAR', key: 'l1-wa-desu' },
            },
          ],
        },
        {
          type: 'SENTENCE_ORDER',
          instructions: 'Sắp xếp các token thành câu đúng.',
          questions: [
            {
              type: 'SENTENCE_ORDER',
              data: {
                kind: 'token-order',
                promptVi: 'Tôi là người Việt Nam.',
                tokens: [
                  { id: 't1', text: 'わたし' },
                  { id: 't2', text: 'は' },
                  { id: 't3', text: 'ベトナムじん' },
                  { id: 't4', text: 'です' },
                ],
                audioText: 'わたしはベトナムじんです。',
              },
              correct: { tokenOrder: ['t1', 't2', 't3', 't4'] },
              explanation: 'わたし + は + ベトナムじん + です: chủ đề + trợ từ + danh từ + động từ liên hệ.',
              itemRef: { type: 'GRAMMAR', key: 'l1-wa-desu' },
            },
          ],
        },
        {
          type: 'SENTENCE_ORDER',
          instructions: 'Sắp xếp các token thành câu đúng. Coi chừng token gây nhiễu.',
          questions: [
            {
              type: 'SENTENCE_ORDER',
              data: {
                kind: 'token-order',
                promptVi: 'Anh Tanaka là giáo viên.',
                tokens: [
                  { id: 't1', text: 'たなかさん' },
                  { id: 't2', text: 'は' },
                  { id: 't3', text: 'せんせい' },
                  { id: 't4', text: 'です' },
                ],
                distractors: [
                  { id: 't5', text: 'か' },
                  { id: 't6', text: 'も' },
                ],
                audioText: 'たなかさんはせんせいです。',
              },
              correct: { tokenOrder: ['t1', 't2', 't3', 't4'] },
              explanation: 'か biến câu thành câu hỏi, も nghĩa là "cũng" — đều không phù hợp nghĩa đề bài.',
              itemRef: { type: 'GRAMMAR', key: 'l1-wa-desu' },
            },
          ],
        },
      ],
    },

    /* ------------------------------ Node 4 ------------------------------ */
    {
      key: 'l1-n4',
      title: 'Phủ định じゃありません',
      description: 'Cách nói "không phải là": A は B じゃありません.',
      icon: 'Shapes',
      nodeType: 'GRAMMAR',
      xpReward: 12,
      difficulty: 'EASY',
      exercises: [
        {
          type: 'GRAMMAR_CHOICE',
          instructions: 'Chọn đáp án đúng về ngữ pháp.',
          questions: [
            {
              type: 'GRAMMAR_CHOICE',
              prompt: 'Dạng phủ định lịch sự của 「です」 trong hội thoại là gì?',
              data: {
                kind: 'choice',
                options: [
                  { id: 'a', text: 'ですか', big: true, audio: 'ですか' },
                  { id: 'b', text: 'でした', big: true, audio: 'でした' },
                  { id: 'c', text: 'じゃありません', big: true, audio: 'じゃありません' },
                  { id: 'd', text: 'ません', big: true, audio: 'ません' },
                ],
              },
              correct: { optionId: 'c' },
              explanation: 'じゃありません là phủ định của です. ません chỉ dùng phủ định cho động từ loại ます.',
              itemRef: { type: 'GRAMMAR', key: 'l1-wa-ja-arimasen' },
            },
          ],
        },
        {
          type: 'GRAMMAR_CHOICE',
          instructions: 'Chọn phần hoàn thành câu đúng.',
          questions: [
            {
              type: 'GRAMMAR_CHOICE',
              data: {
                kind: 'choice',
                promptJa: 'わたしはかいしゃいん___。',
                promptSub: 'Muốn nói "Tôi KHÔNG phải là nhân viên công ty".',
                options: [
                  { id: 'a', text: 'です' },
                  { id: 'b', text: 'じゃありません' },
                  { id: 'c', text: 'ですか' },
                  { id: 'd', text: 'でした' },
                ],
              },
              correct: { optionId: 'b' },
              explanation: 'Phủ định: わたしはかいしゃいんじゃありません。= Tôi không phải là nhân viên công ty.',
              itemRef: { type: 'GRAMMAR', key: 'l1-wa-ja-arimasen' },
            },
          ],
        },
        {
          type: 'ERROR_CORRECTION',
          instructions: 'Chọn câu viết đúng ngữ pháp.',
          questions: [
            {
              type: 'ERROR_CORRECTION',
              prompt: 'Câu phủ định nào viết đúng?',
              data: {
                kind: 'choice',
                options: [
                  { id: 'a', text: 'わたしはいしゃじゃです。' },
                  { id: 'b', text: 'わたしはいしゃじゃありません。' },
                  { id: 'c', text: 'わたしいしゃじゃありません。' },
                  { id: 'd', text: 'わたしはいしゃありませんじゃ。' },
                ],
              },
              correct: { optionId: 'b' },
              explanation: 'Phủ định đúng: A は B じゃありません. Câu a gắn thêm です sai, câu c thiếu は, câu d sai vị trí じゃ.',
              itemRef: { type: 'GRAMMAR', key: 'l1-wa-ja-arimasen' },
            },
          ],
        },
        {
          type: 'TRANSLATE_JA_VI',
          instructions: 'Chọn câu dịch tiếng Việt đúng.',
          questions: [
            {
              type: 'TRANSLATE_JA_VI',
              data: {
                kind: 'choice',
                promptJa: 'リンさんはせんせいじゃありません。',
                options: [
                  { id: 'a', text: 'Bạn Linh là giáo viên.' },
                  { id: 'b', text: 'Bạn Linh có phải là giáo viên không?' },
                  { id: 'c', text: 'Bạn Linh cũng là giáo viên.' },
                  { id: 'd', text: 'Bạn Linh không phải là giáo viên.' },
                ],
              },
              correct: { optionId: 'd' },
              explanation: 'じゃありません = không phải là. Chú ý phân biệt với ですか (câu hỏi) và も (cũng).',
              itemRef: { type: 'GRAMMAR', key: 'l1-wa-ja-arimasen' },
            },
          ],
        },
        {
          type: 'TRANSLATE_JA_VI',
          instructions: 'Chọn câu dịch tiếng Việt đúng.',
          questions: [
            {
              type: 'TRANSLATE_JA_VI',
              data: {
                kind: 'choice',
                promptJa: 'わたしはアメリカじんじゃありません。',
                options: [
                  { id: 'a', text: 'Tôi không phải là người Mỹ.' },
                  { id: 'b', text: 'Tôi là người Mỹ.' },
                  { id: 'c', text: 'Tôi không phải là người Nhật.' },
                  { id: 'd', text: 'Tôi cũng là người Mỹ.' },
                ],
              },
              correct: { optionId: 'a' },
              explanation: 'アメリカじん = người Mỹ. Câu c sai vì đổi quốc tịch, câu d sai vì も = "cũng".',
              itemRef: { type: 'GRAMMAR', key: 'l1-wa-ja-arimasen' },
            },
          ],
        },
      ],
    },

    /* ------------------------------ Node 5 ------------------------------ */
    {
      key: 'l1-n5',
      title: 'Câu hỏi ですか',
      description: 'Đặt câu hỏi với か và cách trả lời はい / いいえ.',
      icon: 'MessageCircle',
      nodeType: 'GRAMMAR',
      xpReward: 12,
      difficulty: 'EASY',
      exercises: [
        {
          type: 'GRAMMAR_CHOICE',
          instructions: 'Chọn đáp án đúng về ngữ pháp.',
          questions: [
            {
              type: 'GRAMMAR_CHOICE',
              prompt: 'Để biến 「たなかさんはせんせいです」 thành câu hỏi, ta cần làm gì?',
              data: {
                kind: 'choice',
                options: [
                  { id: 'a', text: 'Thêm か vào cuối câu' },
                  { id: 'b', text: 'Thêm か ngay sau たなかさん' },
                  { id: 'c', text: 'Đảo です lên đầu câu' },
                  { id: 'd', text: 'Thêm じゃありません vào cuối câu' },
                ],
              },
              correct: { optionId: 'a' },
              explanation: 'Chỉ cần thêm か cuối câu: たなかさんはせんせいですか. Trật tự từ giữ nguyên.',
              itemRef: { type: 'GRAMMAR', key: 'l1-desu-ka' },
            },
          ],
        },
        {
          type: 'PARTICLE_FILL',
          instructions: 'Điền trợ từ は hoặc か cho đúng.',
          questions: [
            {
              type: 'PARTICLE_FILL',
              data: {
                kind: 'fill-blank',
                sentence: 'あなたはがくせいです___。',
                options: [
                  { id: 'a', text: 'は' },
                  { id: 'b', text: 'も' },
                  { id: 'c', text: 'か' },
                  { id: 'd', text: 'さん' },
                ],
              },
              correct: { optionId: 'c' },
              explanation: 'Đây là câu hỏi "Bạn là học sinh chứ?" nên cuối câu phải là か.',
              itemRef: { type: 'GRAMMAR', key: 'l1-desu-ka' },
            },
          ],
        },
        {
          type: 'PARTICLE_FILL',
          instructions: 'Điền trợ từ は hoặc か cho đúng.',
          questions: [
            {
              type: 'PARTICLE_FILL',
              data: {
                kind: 'fill-blank',
                sentence: 'ミンさん___エンジニアですか。',
                options: [
                  { id: 'a', text: 'は' },
                  { id: 'b', text: 'か' },
                  { id: 'c', text: 'を' },
                  { id: 'd', text: 'さん' },
                ],
              },
              correct: { optionId: 'a' },
              explanation: 'Sau chủ đề ミンさん cần trợ từ は; か đã có sẵn ở cuối câu hỏi.',
              itemRef: { type: 'GRAMMAR', key: 'l1-wa-desu' },
            },
          ],
        },
        {
          type: 'GRAMMAR_CHOICE',
          instructions: 'Chọn câu trả lời phù hợp cho câu hỏi.',
          questions: [
            {
              type: 'GRAMMAR_CHOICE',
              data: {
                kind: 'choice',
                promptJa: 'あなたはベトナムじんですか。',
                promptSub: 'Bạn ĐÚNG là người Việt Nam. Chọn câu trả lời phù hợp nhất.',
                options: [
                  { id: 'a', text: 'いいえ、わたしはベトナムじんじゃありません。' },
                  { id: 'b', text: 'はい、わたしはベトナムじんです。' },
                  { id: 'c', text: 'はい、ベトナムじんじゃありません。' },
                  { id: 'd', text: 'わたしはベトナムじんですか。' },
                ],
              },
              correct: { optionId: 'b' },
              explanation: 'Trả lời khẳng định: はい + lặp lại câu khẳng định. Câu c mâu thuẫn, câu d hỏi lại đề bài.',
              itemRef: { type: 'GRAMMAR', key: 'l1-desu-ka' },
            },
          ],
        },
        {
          type: 'GRAMMAR_CHOICE',
          instructions: 'Chọn câu trả lời phù hợp cho câu hỏi.',
          questions: [
            {
              type: 'GRAMMAR_CHOICE',
              data: {
                kind: 'choice',
                promptJa: 'たなかさんはいしゃですか。',
                promptSub: 'Bạn biết Tanaka làm ở công ty, không phải bác sĩ. Chọn câu trả lời đúng.',
                options: [
                  { id: 'a', text: 'はい、いしゃです。' },
                  { id: 'b', text: 'いいえ、せんせいじゃありません。' },
                  { id: 'c', text: 'いいえ、いしゃじゃありません。かいしゃいんです。' },
                  { id: 'd', text: 'たなかさんはいしゃです。' },
                ],
              },
              correct: { optionId: 'c' },
              explanation: 'Trả lời phủ định: いいえ、いしゃじゃありません, sau đó bổ sung thông tin đúng かいしゃいんです.',
              itemRef: { type: 'GRAMMAR', key: 'l1-wa-ja-arimasen' },
            },
          ],
        },
      ],
    },

    /* ------------------------------ Node 6 ------------------------------ */
    {
      key: 'l1-n6',
      title: 'Quốc tịch & nghề nghiệp',
      description: 'Từ vựng về quốc gia, quốc tịch và nghề nghiệp qua bài tập nghe và điền từ.',
      icon: 'GraduationCap',
      nodeType: 'VOCAB_PRACTICE',
      xpReward: 10,
      difficulty: 'EASY',
      exercises: [
        {
          type: 'SELECT_MEANING',
          instructions: 'Chọn nghĩa tiếng Việt của từ.',
          questions: [
            {
              type: 'SELECT_MEANING',
              prompt: 'エンジニア nghĩa là gì?',
              data: {
                kind: 'choice',
                promptJa: 'エンジニア',
                promptSub: 'enjinia',
                options: [
                  { id: 'a', text: 'bác sĩ' },
                  { id: 'b', text: 'kỹ sư' },
                  { id: 'c', text: 'giáo viên' },
                  { id: 'd', text: 'nhân viên công ty' },
                ],
              },
              correct: { optionId: 'b' },
              explanation: 'エンジニア là từ mượn tiếng Anh "engineer", viết bằng katakana.',
              itemRef: { type: 'VOCAB', key: 'エンジニア' },
            },
          ],
        },
        {
          type: 'SELECT_MEANING',
          instructions: 'Chọn nghĩa tiếng Việt của từ.',
          questions: [
            {
              type: 'SELECT_MEANING',
              prompt: 'ちゅうごく nghĩa là gì?',
              data: {
                kind: 'choice',
                promptJa: 'ちゅうごく',
                promptSub: 'chūgoku',
                options: [
                  { id: 'a', text: 'Nhật Bản' },
                  { id: 'b', text: 'nước Mỹ' },
                  { id: 'c', text: 'Việt Nam' },
                  { id: 'd', text: 'Trung Quốc' },
                ],
              },
              correct: { optionId: 'd' },
              explanation: 'ちゅうごく = Trung Quốc. にほん = Nhật Bản, ベトナム = Việt Nam, アメリカ = Mỹ.',
              itemRef: { type: 'VOCAB', key: 'ちゅうごく' },
            },
          ],
        },
        {
          type: 'FILL_BLANK',
          instructions: 'Điền từ thích hợp vào chỗ trống.',
          questions: [
            {
              type: 'FILL_BLANK',
              data: {
                kind: 'fill-blank',
                sentence: 'わたしはベトナム___です。',
                options: [
                  { id: 'a', text: 'さい' },
                  { id: 'b', text: 'さん' },
                  { id: 'c', text: 'じん' },
                  { id: 'd', text: 'ご' },
                ],
              },
              correct: { optionId: 'c' },
              explanation: 'じん gắn sau tên nước để chỉ quốc tịch: ベトナムじん = người Việt Nam. さい chỉ tuổi, ご chỉ ngôn ngữ.',
              itemRef: { type: 'VOCAB', key: '～じん' },
            },
          ],
        },
        {
          type: 'LISTEN_SELECT',
          instructions: 'Nghe âm thanh rồi chọn câu dịch đúng.',
          questions: [
            {
              type: 'LISTEN_SELECT',
              data: {
                kind: 'audio-choice',
                audioText: 'たなかさんはかいしゃいんです。',
                meaningVi: 'Anh Tanaka là nhân viên công ty.',
                options: [
                  { id: 'a', text: 'Anh Tanaka là giáo viên.' },
                  { id: 'b', text: 'Anh Tanaka là nhân viên ngân hàng.' },
                  { id: 'c', text: 'Anh Tanaka là nhân viên công ty.' },
                  { id: 'd', text: 'Anh Tanaka là bác sĩ.' },
                ],
              },
              correct: { optionId: 'c' },
              explanation: 'かいしゃいん = nhân viên công ty. Chú ý nghe rõ かいしゃいん với ぎんこういん.',
              itemRef: { type: 'VOCAB', key: 'かいしゃいん' },
            },
          ],
        },
        {
          type: 'LISTEN_SELECT',
          instructions: 'Nghe âm thanh rồi chọn câu dịch đúng.',
          questions: [
            {
              type: 'LISTEN_SELECT',
              data: {
                kind: 'audio-choice',
                audioText: 'わたしはぎんこういんじゃありません。',
                meaningVi: 'Tôi không phải là nhân viên ngân hàng.',
                options: [
                  { id: 'a', text: 'Tôi là nhân viên ngân hàng.' },
                  { id: 'b', text: 'Tôi không phải là nhân viên công ty.' },
                  { id: 'c', text: 'Tôi không phải là bác sĩ.' },
                  { id: 'd', text: 'Tôi không phải là nhân viên ngân hàng.' },
                ],
              },
              correct: { optionId: 'd' },
              explanation: 'じゃありません = không phải là. Nghe kỹ 2 từ: ぎんこういん (ngân hàng) và かいしゃいん (công ty).',
              itemRef: { type: 'VOCAB', key: 'ぎんこういん' },
            },
          ],
        },
      ],
    },

    /* ------------------------------ Node 7 ------------------------------ */
    {
      key: 'l1-n7',
      title: 'Luyện nghe từ vựng',
      description: 'Luyện tai nghe từ vựng và chép chính tả câu cơ bản.',
      icon: 'Headphones',
      nodeType: 'LISTENING',
      xpReward: 12,
      difficulty: 'MEDIUM',
      exercises: [
        {
          type: 'LISTEN_SELECT',
          instructions: 'Nghe và chọn nghĩa đúng của từ.',
          questions: [
            {
              type: 'LISTEN_SELECT',
              data: {
                kind: 'audio-choice',
                audioText: 'にほんご',
                meaningVi: 'tiếng Nhật',
                layout: 'grid',
                options: [
                  { id: 'a', text: 'trường đại học' },
                  { id: 'b', text: 'tiếng Nhật' },
                  { id: 'c', text: 'người Nhật' },
                  { id: 'd', text: 'Nhật Bản' },
                ],
              },
              correct: { optionId: 'b' },
              explanation: 'にほんご = tiếng Nhật (にほん + ご). にほんじん = người Nhật, だいがく = trường đại học.',
              itemRef: { type: 'VOCAB', key: 'にほんご' },
            },
          ],
        },
        {
          type: 'LISTEN_SELECT',
          instructions: 'Nghe và chọn nghĩa đúng của câu.',
          questions: [
            {
              type: 'LISTEN_SELECT',
              data: {
                kind: 'audio-choice',
                audioText: 'よろしくおねがいします',
                meaningVi: 'Mong được giúp đỡ (lời chào lịch sự).',
                options: [
                  { id: 'a', text: 'Rất vui được gặp bạn.' },
                  { id: 'b', text: 'Xin lỗi.' },
                  { id: 'c', text: 'Mong được giúp đỡ (lời chào lịch sự).' },
                  { id: 'd', text: 'Tạm biệt.' },
                ],
              },
              correct: { optionId: 'c' },
              explanation: 'よろしくおねがいします là lời chào xin nhờ cậy, thường nói sau はじめまして.',
              itemRef: { type: 'VOCAB', key: 'よろしくおねがいします' },
            },
          ],
        },
        {
          type: 'DICTATION',
          instructions: 'Nghe và gõ lại toàn bộ câu (có thể có hoặc không có dấu chấm câu).',
          questions: [
            {
              type: 'DICTATION',
              data: {
                kind: 'text-input',
                audioText: 'わたしはがくせいです。',
                label: 'Nghe và gõ lại câu',
                placeholder: 'わたしは…',
                accept: ['わたしはがくせいです。', 'わたしはがくせいです'],
              },
              correct: { answers: ['わたしはがくせいです。', 'わたしはがくせいです'] },
              explanation: 'わたしはがくせいです = Tôi là học sinh. Chú ý trợ từ は và dấu chấm 。',
              itemRef: { type: 'VOCAB', key: 'がくせい' },
            },
          ],
        },
        {
          type: 'DICTATION',
          instructions: 'Nghe và gõ lại toàn bộ câu (có thể có hoặc không có dấu chấm câu).',
          questions: [
            {
              type: 'DICTATION',
              data: {
                kind: 'text-input',
                audioText: 'リンさんはだいがくのがくせいです。',
                label: 'Nghe và gõ lại câu',
                placeholder: 'リンさんは…',
                accept: ['リンさんはだいがくのがくせいです。', 'リンさんはだいがくのがくせいです'],
              },
              correct: { answers: ['リンさんはだいがくのがくせいです。', 'リンさんはだいがくのがくせいです'] },
              explanation: 'だいがくのがくせい = sinh viên đại học; の nối hai danh từ.',
              itemRef: { type: 'VOCAB', key: 'だいがく' },
            },
          ],
        },
        {
          type: 'LISTEN_TYPE',
          instructions: 'Nghe và gõ lại từ bằng kana.',
          questions: [
            {
              type: 'LISTEN_TYPE',
              data: {
                kind: 'text-input',
                audioText: 'エンジニア',
                label: 'Nghe và gõ từ (katakana)',
                placeholder: 'エ…',
                accept: ['エンジニア'],
              },
              correct: { answers: ['エンジニア'] },
              explanation: 'エンジニア viết bằng katakana vì là từ mượn tiếng nước ngoài.',
              itemRef: { type: 'VOCAB', key: 'エンジニア' },
            },
          ],
        },
      ],
    },

    /* ------------------------------ Node 8 ------------------------------ */
    {
      key: 'l1-n8',
      title: 'Đọc hội thoại',
      description: 'Ba đoạn hội thoại gốc giữa Linh và Tanaka: chào hỏi, hỏi nghề, hỏi quốc tịch.',
      icon: 'BookText',
      nodeType: 'READING',
      xpReward: 15,
      difficulty: 'MEDIUM',
      exercises: [
        {
          type: 'READING',
          instructions: 'Đọc đoạn hội thoại rồi trả lời các câu hỏi bên dưới.',
          questions: [
            {
              type: 'READING',
              data: {
                kind: 'passage',
                title: 'Gặp nhau lần đầu',
                lines: [
                  { speaker: 'たなか', text: 'はじめまして。', vi: 'Xin chào, rất vui được gặp bạn.' },
                  { speaker: 'リン', text: 'はじめまして。わたしはリンです。', vi: 'Rất vui được gặp anh. Tôi là Linh.' },
                  { speaker: 'たなか', text: 'わたしはたなかです。', vi: 'Tôi là Tanaka.' },
                  { speaker: 'リン', text: 'たなかさん、よろしくおねがいします。', vi: 'Anh Tanaka, mong được anh giúp đỡ.' },
                  { speaker: 'たなか', text: 'よろしくおねがいします。', vi: 'Mong được bạn giúp đỡ.' },
                ],
                questions: [
                  {
                    type: 'MULTIPLE_CHOICE',
                    prompt: 'Hai người trong hội thoại có quan hệ với nhau như thế nào?',
                    data: {
                      kind: 'choice',
                      options: [
                        { id: 'a', text: 'Họ vừa gặp nhau lần đầu' },
                        { id: 'b', text: 'Họ đã quen biết từ lâu' },
                        { id: 'c', text: 'Họ là người trong gia đình' },
                        { id: 'd', text: 'Họ là đồng nghiệp cũ' },
                      ],
                    },
                    correct: { optionId: 'a' },
                    explanation: 'はじめまして là lời chào chỉ dùng khi gặp nhau lần đầu.',
                    itemRef: { type: 'VOCAB', key: 'はじめまして' },
                  },
                  {
                    type: 'MULTIPLE_CHOICE',
                    prompt: 'Câu 「たなかさん、よろしくおねがいします。」 có nghĩa là gì?',
                    data: {
                      kind: 'choice',
                      options: [
                        { id: 'a', text: 'Anh Tanaka, tạm biệt.' },
                        { id: 'b', text: 'Anh Tanaka, tên anh là gì?' },
                        { id: 'c', text: 'Anh Tanaka, mong được anh giúp đỡ.' },
                        { id: 'd', text: 'Anh Tanaka là giáo viên à?' },
                      ],
                    },
                    correct: { optionId: 'c' },
                    explanation: 'よろしくおねがいします là lời chào lịch sự thể hiện sự khiêm nhường, xin nhờ cậy.',
                    itemRef: { type: 'VOCAB', key: 'よろしくおねがいします' },
                  },
                  {
                    type: 'MULTIPLE_CHOICE',
                    prompt: 'Vì sao Linh gọi đối phương là 「たなかさん」 mà không phải 「たなか」?',
                    data: {
                      kind: 'choice',
                      options: [
                        { id: 'a', text: 'Vì さん nghĩa là "giáo viên"' },
                        { id: 'b', text: 'Vì さん là hậu tố tôn kính gắn sau tên người khác' },
                        { id: 'c', text: 'Vì さん nghĩa là "bạn bè"' },
                        { id: 'd', text: 'Vì Tanaka lớn tuổi hơn Linh' },
                      ],
                    },
                    correct: { optionId: 'b' },
                    explanation: 'さん gắn sau họ tên người khác để thể hiện lịch sự; không bao giờ dùng cho chính mình.',
                    itemRef: { type: 'GRAMMAR', key: 'l1-san' },
                  },
                ],
              },
              correct: { answers: [] },
            },
          ],
        },
        {
          type: 'READING',
          instructions: 'Đọc đoạn hội thoại rồi trả lời các câu hỏi bên dưới.',
          questions: [
            {
              type: 'READING',
              data: {
                kind: 'passage',
                title: 'Hỏi về công việc',
                lines: [
                  { speaker: 'たなか', text: 'リンさんはがくせいですか。', vi: 'Bạn Linh là học sinh chứ?' },
                  { speaker: 'リン', text: 'はい、わたしはだいがくのがくせいです。', vi: 'Vâng, tôi là sinh viên đại học.' },
                  { speaker: 'リン', text: 'たなかさんはせんせいですか。', vi: 'Còn anh Tanaka có phải là giáo viên không?' },
                  { speaker: 'たなか', text: 'いいえ、せんせいじゃありません。', vi: 'Không, tôi không phải là giáo viên.' },
                  { speaker: 'たなか', text: 'わたしはかいしゃいんです。', vi: 'Tôi là nhân viên công ty.' },
                  { speaker: 'リン', text: 'そうですか。', vi: 'Thế à.' },
                ],
                questions: [
                  {
                    type: 'MULTIPLE_CHOICE',
                    prompt: 'Nghề nghiệp của Tanaka là gì?',
                    data: {
                      kind: 'choice',
                      options: [
                        { id: 'a', text: 'Giáo viên' },
                        { id: 'b', text: 'Bác sĩ' },
                        { id: 'c', text: 'Sinh viên' },
                        { id: 'd', text: 'Nhân viên công ty' },
                      ],
                    },
                    correct: { optionId: 'd' },
                    explanation: 'Tanaka nói: わたしはかいしゃいんです = Tôi là nhân viên công ty.',
                    itemRef: { type: 'VOCAB', key: 'かいしゃいん' },
                  },
                  {
                    type: 'MULTIPLE_CHOICE',
                    prompt: 'Linh là học sinh của nơi nào?',
                    data: {
                      kind: 'choice',
                      options: [
                        { id: 'a', text: 'Trường đại học' },
                        { id: 'b', text: 'Ngân hàng' },
                        { id: 'c', text: 'Công ty' },
                        { id: 'd', text: 'Bệnh viện' },
                      ],
                    },
                    correct: { optionId: 'a' },
                    explanation: 'Linh nói: だいがくのがくせいです = là học sinh (sinh viên) của trường đại học.',
                    itemRef: { type: 'VOCAB', key: 'だいがく' },
                  },
                  {
                    type: 'MULTIPLE_CHOICE',
                    prompt: 'Câu 「せんせいじゃありません」 dùng để làm gì?',
                    data: {
                      kind: 'choice',
                      options: [
                        { id: 'a', text: 'Hỏi xem có phải là giáo viên không' },
                        { id: 'b', text: 'Nói rằng cũng là giáo viên' },
                        { id: 'c', text: 'Nói rằng không phải là giáo viên' },
                        { id: 'd', text: 'Chào hỏi giáo viên' },
                      ],
                    },
                    correct: { optionId: 'c' },
                    explanation: 'じゃありません là dạng phủ định của です: "không phải là".',
                    itemRef: { type: 'GRAMMAR', key: 'l1-wa-ja-arimasen' },
                  },
                ],
              },
              correct: { answers: [] },
            },
          ],
        },
        {
          type: 'READING',
          instructions: 'Đọc đoạn hội thoại rồi trả lời các câu hỏi bên dưới.',
          questions: [
            {
              type: 'READING',
              data: {
                kind: 'passage',
                title: 'Quốc tịch và tuổi',
                lines: [
                  { speaker: 'たなか', text: 'リンさんはベトナムじんですか。', vi: 'Bạn Linh là người Việt Nam à?' },
                  { speaker: 'リン', text: 'はい、わたしはベトナムじんです。', vi: 'Vâng, tôi là người Việt Nam.' },
                  { speaker: 'リン', text: 'ミンさんもベトナムじんです。', vi: 'Bạn Minh cũng là người Việt Nam.' },
                  { speaker: 'たなか', text: 'わたしはにほんじんです。', vi: 'Tôi là người Nhật.' },
                  { speaker: 'リン', text: 'たなかさんはなんさいですか。', vi: 'Anh Tanaka bao nhiêu tuổi?' },
                  { speaker: 'たなか', text: 'わたしはさんじゅうさいです。', vi: 'Tôi 30 tuổi.' },
                ],
                questions: [
                  {
                    type: 'MULTIPLE_CHOICE',
                    prompt: 'Ngoài Linh, ai cũng là người Việt Nam?',
                    data: {
                      kind: 'choice',
                      options: [
                        { id: 'a', text: 'たなかさん' },
                        { id: 'b', text: 'ミンさん' },
                        { id: 'c', text: 'スミスさん' },
                        { id: 'd', text: 'ワンさん' },
                      ],
                    },
                    correct: { optionId: 'b' },
                    explanation: 'Câu ミンさんもベトナムじんです với trợ từ も cho biết Minh cũng là người Việt Nam.',
                    itemRef: { type: 'VOCAB', key: 'ベトナム' },
                  },
                  {
                    type: 'MULTIPLE_CHOICE',
                    prompt: 'Tanaka bao nhiêu tuổi?',
                    data: {
                      kind: 'choice',
                      options: [
                        { id: 'a', text: '20 tuổi' },
                        { id: 'b', text: '35 tuổi' },
                        { id: 'c', text: '30 tuổi' },
                        { id: 'd', text: '13 tuổi' },
                      ],
                    },
                    correct: { optionId: 'c' },
                    explanation: 'さんじゅうさい = 30 tuổi. Chú ý nghe kỹ さんじゅう (30) với にじゅう (20).',
                    itemRef: { type: 'VOCAB', key: '～さい' },
                  },
                  {
                    type: 'MULTIPLE_CHOICE',
                    prompt: 'Câu 「わたしはにほんじんです。」 có nghĩa là gì?',
                    data: {
                      kind: 'choice',
                      options: [
                        { id: 'a', text: 'Tôi là người Nhật.' },
                        { id: 'b', text: 'Tôi không phải là người Nhật.' },
                        { id: 'c', text: 'Tôi là người Việt Nam.' },
                        { id: 'd', text: 'Tôi cũng là người Nhật.' },
                      ],
                    },
                    correct: { optionId: 'a' },
                    explanation: 'にほんじん = người Nhật (にほん + じん). Đây là câu khẳng định với です.',
                    itemRef: { type: 'VOCAB', key: 'にほん' },
                  },
                ],
              },
              correct: { answers: [] },
            },
          ],
        },
      ],
    },

    /* ------------------------------ Node 9 ------------------------------ */
    {
      key: 'l1-n9',
      title: 'Sắp xếp câu',
      description: 'Sắp xếp token thành câu tiếng Nhật đúng trật tự.',
      icon: 'ListOrdered',
      nodeType: 'SENTENCE',
      xpReward: 12,
      difficulty: 'MEDIUM',
      exercises: [
        {
          type: 'SENTENCE_ORDER',
          instructions: 'Sắp xếp các token thành câu đúng.',
          questions: [
            {
              type: 'SENTENCE_ORDER',
              data: {
                kind: 'token-order',
                promptVi: 'Tôi là học sinh.',
                tokens: [
                  { id: 't1', text: 'わたし' },
                  { id: 't2', text: 'は' },
                  { id: 't3', text: 'がくせい' },
                  { id: 't4', text: 'です' },
                ],
                audioText: 'わたしはがくせいです。',
              },
              correct: { tokenOrder: ['t1', 't2', 't3', 't4'] },
              explanation: 'Chủ đề + は + danh từ + です — trật tự cơ bản của câu khẳng định.',
              itemRef: { type: 'GRAMMAR', key: 'l1-wa-desu' },
            },
          ],
        },
        {
          type: 'SENTENCE_ORDER',
          instructions: 'Sắp xếp các token thành câu đúng.',
          questions: [
            {
              type: 'SENTENCE_ORDER',
              data: {
                kind: 'token-order',
                promptVi: 'Bạn là người Nhật à?',
                tokens: [
                  { id: 't1', text: 'あなた' },
                  { id: 't2', text: 'は' },
                  { id: 't3', text: 'にほんじん' },
                  { id: 't4', text: 'です' },
                  { id: 't5', text: 'か' },
                ],
                audioText: 'あなたはにほんじんですか。',
              },
              correct: { tokenOrder: ['t1', 't2', 't3', 't4', 't5'] },
              explanation: 'Câu hỏi giữ nguyên trật tự câu khẳng định, chỉ thêm か ở cuối.',
              itemRef: { type: 'VOCAB', key: 'あなた' },
            },
          ],
        },
        {
          type: 'SENTENCE_ORDER',
          instructions: 'Sắp xếp các token thành câu đúng.',
          questions: [
            {
              type: 'SENTENCE_ORDER',
              data: {
                kind: 'token-order',
                promptVi: 'Tôi không phải là bác sĩ.',
                tokens: [
                  { id: 't1', text: 'わたし' },
                  { id: 't2', text: 'は' },
                  { id: 't3', text: 'いしゃ' },
                  { id: 't4', text: 'じゃ' },
                  { id: 't5', text: 'ありません' },
                ],
                audioText: 'わたしはいしゃじゃありません。',
              },
              correct: { tokenOrder: ['t1', 't2', 't3', 't4', 't5'] },
              explanation: 'Phủ định: じゃありません đứng cuối câu, ngay sau danh từ.',
              itemRef: { type: 'GRAMMAR', key: 'l1-wa-ja-arimasen' },
            },
          ],
        },
        {
          type: 'SENTENCE_ORDER',
          instructions: 'Sắp xếp các token thành câu đúng. Coi chừng token gây nhiễu.',
          questions: [
            {
              type: 'SENTENCE_ORDER',
              data: {
                kind: 'token-order',
                promptVi: 'Anh Minh cũng là kỹ sư.',
                tokens: [
                  { id: 't1', text: 'ミンさん' },
                  { id: 't2', text: 'も' },
                  { id: 't3', text: 'エンジニア' },
                  { id: 't4', text: 'です' },
                ],
                distractors: [
                  { id: 't5', text: 'は' },
                  { id: 't6', text: 'か' },
                ],
                audioText: 'ミンさんもエンジニアです。',
              },
              correct: { tokenOrder: ['t1', 't2', 't3', 't4'] },
              explanation: 'Nghĩa "cũng là" yêu cầu trợ từ も thay cho は. か không dùng vì đây không phải câu hỏi.',
              itemRef: { type: 'GRAMMAR', key: 'l1-mo' },
            },
          ],
        },
        {
          type: 'SENTENCE_ORDER',
          instructions: 'Sắp xếp các token thành câu đúng. Coi chừng token gây nhiễu.',
          questions: [
            {
              type: 'SENTENCE_ORDER',
              data: {
                kind: 'token-order',
                promptVi: 'Chị Linh là người Việt Nam.',
                tokens: [
                  { id: 't1', text: 'リンさん' },
                  { id: 't2', text: 'は' },
                  { id: 't3', text: 'ベトナムじん' },
                  { id: 't4', text: 'です' },
                ],
                distractors: [
                  { id: 't5', text: 'も' },
                  { id: 't6', text: 'じゃ' },
                ],
                audioText: 'リンさんはベトナムじんです。',
              },
              correct: { tokenOrder: ['t1', 't2', 't3', 't4'] },
              explanation: 'Đề chỉ khẳng định bình thường nên dùng は, không dùng も (cũng) hay じゃ (phủ định).',
              itemRef: { type: 'GRAMMAR', key: 'l1-wa-desu' },
            },
          ],
        },
      ],
    },

    /* ------------------------------ Node 10 ----------------------------- */
    {
      key: 'l1-n10',
      title: 'Dịch câu',
      description: 'Dịch hai chiều Nhật–Việt và Việt–Nhật với vốn từ của bài 1.',
      icon: 'Languages',
      nodeType: 'TRANSLATION',
      xpReward: 12,
      difficulty: 'MEDIUM',
      exercises: [
        {
          type: 'TRANSLATE_JA_VI',
          instructions: 'Chọn câu dịch tiếng Việt đúng.',
          questions: [
            {
              type: 'TRANSLATE_JA_VI',
              data: {
                kind: 'choice',
                promptJa: 'はじめまして。よろしくおねがいします。',
                options: [
                  { id: 'a', text: 'Tạm biệt. Hẹn gặp lại.' },
                  { id: 'b', text: 'Rất vui được gặp bạn. Mong được giúp đỡ.' },
                  { id: 'c', text: 'Tôi là Linh. Tôi là sinh viên.' },
                  { id: 'd', text: 'Tên bạn là gì?' },
                ],
              },
              correct: { optionId: 'b' },
              explanation: 'Cặp lời chào kinh điển khi giới thiệu bản thân lần đầu.',
              itemRef: { type: 'VOCAB', key: 'はじめまして' },
            },
          ],
        },
        {
          type: 'TRANSLATE_JA_VI',
          instructions: 'Chọn câu dịch tiếng Việt đúng.',
          questions: [
            {
              type: 'TRANSLATE_JA_VI',
              data: {
                kind: 'choice',
                promptJa: 'おなまえはなんですか。',
                options: [
                  { id: 'a', text: 'Bạn bao nhiêu tuổi?' },
                  { id: 'b', text: 'Bạn là người nước nào?' },
                  { id: 'c', text: 'Bạn làm nghề gì?' },
                  { id: 'd', text: 'Tên bạn là gì?' },
                ],
              },
              correct: { optionId: 'd' },
              explanation: 'おなまえ = tên, なん = gì: hỏi tên ai đó một cách lịch sự.',
              itemRef: { type: 'VOCAB', key: 'なん' },
            },
          ],
        },
        {
          type: 'TRANSLATE_JA_VI',
          instructions: 'Chọn câu dịch tiếng Việt đúng.',
          questions: [
            {
              type: 'TRANSLATE_JA_VI',
              data: {
                kind: 'choice',
                promptJa: 'キムさんもかいしゃいんです。',
                options: [
                  { id: 'a', text: 'Anh Kim là nhân viên công ty.' },
                  { id: 'b', text: 'Anh Kim không phải là nhân viên công ty.' },
                  { id: 'c', text: 'Anh Kim cũng là nhân viên công ty.' },
                  { id: 'd', text: 'Anh Kim cũng là bác sĩ.' },
                ],
              },
              correct: { optionId: 'c' },
              explanation: 'も = "cũng": anh Kim cũng là nhân viên công ty như người được nhắc trước đó.',
              itemRef: { type: 'GRAMMAR', key: 'l1-mo' },
            },
          ],
        },
        {
          type: 'TRANSLATE_VI_JA',
          instructions: 'Dịch câu tiếng Việt sang tiếng Nhật bằng cách sắp xếp token.',
          questions: [
            {
              type: 'TRANSLATE_VI_JA',
              data: {
                kind: 'token-order',
                promptVi: 'Tôi cũng là nhân viên ngân hàng.',
                tokens: [
                  { id: 't1', text: 'わたし' },
                  { id: 't2', text: 'も' },
                  { id: 't3', text: 'ぎんこういん' },
                  { id: 't4', text: 'です' },
                ],
                distractors: [{ id: 't5', text: 'は' }],
                audioText: 'わたしもぎんこういんです。',
              },
              correct: { tokenOrder: ['t1', 't2', 't3', 't4'] },
              explanation: '"Cũng là" dùng も; nếu dùng は thì mất nghĩa "cũng".',
              itemRef: { type: 'GRAMMAR', key: 'l1-mo' },
            },
          ],
        },
        {
          type: 'TRANSLATE_VI_JA',
          instructions: 'Dịch câu tiếng Việt sang tiếng Nhật bằng cách sắp xếp token.',
          questions: [
            {
              type: 'TRANSLATE_VI_JA',
              data: {
                kind: 'token-order',
                promptVi: 'Anh Vương là người Trung Quốc.',
                tokens: [
                  { id: 't1', text: 'ワンさん' },
                  { id: 't2', text: 'は' },
                  { id: 't3', text: 'ちゅうごくじん' },
                  { id: 't4', text: 'です' },
                ],
                distractors: [
                  { id: 't5', text: 'か' },
                  { id: 't6', text: 'も' },
                ],
                audioText: 'ワンさんはちゅうごくじんです。',
              },
              correct: { tokenOrder: ['t1', 't2', 't3', 't4'] },
              explanation: 'Câu khẳng định đơn giản: ワンさん + は + ちゅうごくじん + です.',
              itemRef: { type: 'VOCAB', key: 'ちゅうごく' },
            },
          ],
        },
      ],
    },

    /* ------------------------------ Node 11 ----------------------------- */
    {
      key: 'l1-n11',
      title: 'Luyện nói',
      description: 'Luyện phát âm các câu chào và giới thiệu bản thân.',
      icon: 'Mic',
      nodeType: 'SPEAKING',
      xpReward: 10,
      difficulty: 'MEDIUM',
      exercises: [
        {
          type: 'SPEAK',
          instructions: 'Nhấn micro và đọc to câu sau.',
          questions: [
            {
              type: 'SPEAK',
              data: {
                kind: 'speak',
                speakText: 'はじめまして。',
                meaningVi: 'Rất vui được gặp bạn (lời chào khi gặp lần đầu).',
                threshold: 65,
              },
              correct: { score: 65 },
              explanation: 'Đọc rõ từng âm: ha-ji-me-ma-shi-te, không nhấn mạnh vào âm nào.',
              itemRef: { type: 'VOCAB', key: 'はじめまして' },
            },
          ],
        },
        {
          type: 'SPEAK',
          instructions: 'Nhấn micro và đọc to câu sau.',
          questions: [
            {
              type: 'SPEAK',
              data: {
                kind: 'speak',
                speakText: 'わたしはリンです。',
                meaningVi: 'Tôi là Linh.',
                threshold: 65,
              },
              correct: { score: 65 },
              explanation: 'Chú ý: は trong vai trò trợ từ đọc là "wa", không phải "ha".',
              itemRef: { type: 'VOCAB', key: 'わたし' },
            },
          ],
        },
        {
          type: 'SPEAK',
          instructions: 'Nhấn micro và đọc to câu sau.',
          questions: [
            {
              type: 'SPEAK',
              data: {
                kind: 'speak',
                speakText: 'わたしはベトナムじんです。',
                meaningVi: 'Tôi là người Việt Nam.',
                threshold: 65,
              },
              correct: { score: 65 },
              explanation: 'ベトナム là từ mượn, phát âm gần giống "Be-to-na-mu", nhớ kéo dài âm na.',
              itemRef: { type: 'VOCAB', key: 'ベトナム' },
            },
          ],
        },
        {
          type: 'SPEAK',
          instructions: 'Nhấn micro và đọc to câu sau.',
          questions: [
            {
              type: 'SPEAK',
              data: {
                kind: 'speak',
                speakText: 'わたしはエンジニアです。',
                meaningVi: 'Tôi là kỹ sư.',
                threshold: 65,
              },
              correct: { score: 65 },
              explanation: 'エンジニア đọc là "e-n-ji-ni-a", giữ nhịp đều cả câu.',
              itemRef: { type: 'VOCAB', key: 'エンジニア' },
            },
          ],
        },
      ],
    },

    /* ------------------------------ Node 12 ----------------------------- */
    {
      key: 'l1-n12',
      title: 'Luyện viết kana',
      description: 'Tập viết 5 chữ hiragana đầu tiên: あ、い、う、え、お.',
      icon: 'PenLine',
      nodeType: 'WRITING',
      xpReward: 10,
      difficulty: 'EASY',
      exercises: [
        {
          type: 'KANA_WRITING',
          instructions: 'Viết chữ hiragana theo đúng số nét. Có thể bật chế độ hướng dẫn.',
          questions: [
            {
              type: 'KANA_WRITING',
              data: {
                kind: 'writing',
                character: 'あ',
                romaji: 'a',
                meaningVi: 'Ví dụ: あい (ai — tình yêu)',
                strokeCount: 3,
                guide: true,
              },
              correct: { score: 70 },
              explanation: 'Chữ あ gồm 3 nét: ngang, dọc cong, rồi vòng lớn cuối cùng.',
              itemRef: { type: 'KANA', key: 'あ' },
            },
          ],
        },
        {
          type: 'KANA_WRITING',
          instructions: 'Viết chữ hiragana theo đúng số nét. Có thể bật chế độ hướng dẫn.',
          questions: [
            {
              type: 'KANA_WRITING',
              data: {
                kind: 'writing',
                character: 'い',
                romaji: 'i',
                meaningVi: 'Ví dụ: いえ (ie — ngôi nhà)',
                strokeCount: 2,
                guide: true,
              },
              correct: { score: 70 },
              explanation: 'Chữ い gồm 2 nét: nét phẩy ngắn bên trái và nét dọc cong bên phải.',
              itemRef: { type: 'KANA', key: 'い' },
            },
          ],
        },
        {
          type: 'KANA_WRITING',
          instructions: 'Viết chữ hiragana theo đúng số nét. Có thể bật chế độ hướng dẫn.',
          questions: [
            {
              type: 'KANA_WRITING',
              data: {
                kind: 'writing',
                character: 'う',
                romaji: 'u',
                meaningVi: 'Ví dụ: うみ (umi — biển)',
                strokeCount: 2,
                guide: true,
              },
              correct: { score: 70 },
              explanation: 'Chữ う gồm 2 nét: nét ngang ngắn trên và nét cong mở sang phải.',
              itemRef: { type: 'KANA', key: 'う' },
            },
          ],
        },
        {
          type: 'KANA_WRITING',
          instructions: 'Viết chữ hiragana theo đúng số nét. Có thể bật chế độ hướng dẫn.',
          questions: [
            {
              type: 'KANA_WRITING',
              data: {
                kind: 'writing',
                character: 'え',
                romaji: 'e',
                meaningVi: 'Ví dụ: えき (eki — nhà ga)',
                strokeCount: 2,
                guide: true,
              },
              correct: { score: 70 },
              explanation: 'Chữ え gồm 2 nét: nét ngang rồi nét xuyên xuống vuông góc và cong lên.',
              itemRef: { type: 'KANA', key: 'え' },
            },
          ],
        },
        {
          type: 'KANA_WRITING',
          instructions: 'Viết chữ hiragana theo đúng số nét. Có thể bật chế độ hướng dẫn.',
          questions: [
            {
              type: 'KANA_WRITING',
              data: {
                kind: 'writing',
                character: 'お',
                romaji: 'o',
                meaningVi: 'Ví dụ: おいしい (oishii — ngon)',
                strokeCount: 3,
                guide: true,
              },
              correct: { score: 70 },
              explanation: 'Chữ お gồm 3 nét: ngang, dọc cong, và nét vòng giống chữ あ nhưng nhỏ hơn.',
              itemRef: { type: 'KANA', key: 'お' },
            },
          ],
        },
      ],
    },

    /* ------------------------------ Node 13 ----------------------------- */
    {
      key: 'l1-n13',
      title: 'Luyện tổng hợp',
      description: 'Ôn tập tổng hợp mọi kiến thức của bài dưới nhiều dạng bài khác nhau.',
      icon: 'Shuffle',
      nodeType: 'MIXED',
      xpReward: 15,
      difficulty: 'MEDIUM',
      exercises: [
        {
          type: 'SELECT_MEANING',
          instructions: 'Chọn nghĩa tiếng Việt của từ.',
          questions: [
            {
              type: 'SELECT_MEANING',
              prompt: 'だいがく nghĩa là gì?',
              data: {
                kind: 'choice',
                promptJa: 'だいがく',
                promptSub: 'daigaku',
                options: [
                  { id: 'a', text: 'học sinh' },
                  { id: 'b', text: 'giáo viên' },
                  { id: 'c', text: 'trường đại học' },
                  { id: 'd', text: 'bệnh viện' },
                ],
              },
              correct: { optionId: 'c' },
              explanation: 'だいがく (daigaku) = trường đại học. がくせい mới là học sinh, sinh viên.',
              itemRef: { type: 'VOCAB', key: 'だいがく' },
            },
          ],
        },
        {
          type: 'GRAMMAR_CHOICE',
          instructions: 'Điền trợ từ thích hợp vào chỗ trống.',
          questions: [
            {
              type: 'GRAMMAR_CHOICE',
              data: {
                kind: 'choice',
                promptJa: 'ミンさん___エンジニアです。',
                promptSub: 'Điền trợ từ thích hợp.',
                options: [
                  { id: 'a', text: 'か' },
                  { id: 'b', text: 'を' },
                  { id: 'c', text: 'さん' },
                  { id: 'd', text: 'は' },
                ],
              },
              correct: { optionId: 'd' },
              explanation: 'Sau chủ đề cần trợ từ は. か chỉ dùng cuối câu hỏi, を dùng với tân ngữ của động từ.',
              itemRef: { type: 'GRAMMAR', key: 'l1-wa-desu' },
            },
          ],
        },
        {
          type: 'LISTEN_SELECT',
          instructions: 'Nghe âm thanh rồi chọn câu dịch đúng.',
          questions: [
            {
              type: 'LISTEN_SELECT',
              data: {
                kind: 'audio-choice',
                audioText: 'あなたはなんさいですか。',
                meaningVi: 'Bạn bao nhiêu tuổi?',
                options: [
                  { id: 'a', text: 'Tên bạn là gì?' },
                  { id: 'b', text: 'Bạn bao nhiêu tuổi?' },
                  { id: 'c', text: 'Bạn là học sinh à?' },
                  { id: 'd', text: 'Bạn làm nghề gì?' },
                ],
              },
              correct: { optionId: 'b' },
              explanation: 'なんさい = bao nhiêu tuổi (なん + さい). Đừng nhầm với おなまえ (tên).',
              itemRef: { type: 'VOCAB', key: '～さい' },
            },
          ],
        },
        {
          type: 'SENTENCE_ORDER',
          instructions: 'Sắp xếp các token thành câu đúng.',
          questions: [
            {
              type: 'SENTENCE_ORDER',
              data: {
                kind: 'token-order',
                promptVi: 'Tôi cũng là học sinh.',
                tokens: [
                  { id: 't1', text: 'わたし' },
                  { id: 't2', text: 'も' },
                  { id: 't3', text: 'がくせい' },
                  { id: 't4', text: 'です' },
                ],
                audioText: 'わたしもがくせいです。',
              },
              correct: { tokenOrder: ['t1', 't2', 't3', 't4'] },
              explanation: 'も thay thế は khi muốn nói "cũng là".',
              itemRef: { type: 'GRAMMAR', key: 'l1-mo' },
            },
          ],
        },
        {
          type: 'TRANSLATE_JA_VI',
          instructions: 'Chọn câu dịch tiếng Việt đúng.',
          questions: [
            {
              type: 'TRANSLATE_JA_VI',
              data: {
                kind: 'choice',
                promptJa: 'はい、そうです。',
                options: [
                  { id: 'a', text: 'Không, không phải.' },
                  { id: 'b', text: 'Vâng, tôi là sinh viên.' },
                  { id: 'c', text: 'Vâng, đúng vậy.' },
                  { id: 'd', text: 'Không có gì.' },
                ],
              },
              correct: { optionId: 'c' },
              explanation: 'はい、そうです là cách trả lời "Vâng, đúng vậy" cho câu hỏi ですか.',
              itemRef: { type: 'VOCAB', key: 'そう' },
            },
          ],
        },
        {
          type: 'FILL_BLANK',
          instructions: 'Điền trợ từ thích hợp vào chỗ trống.',
          questions: [
            {
              type: 'FILL_BLANK',
              data: {
                kind: 'fill-blank',
                sentence: 'A: たなかさんはせんせいです___。 B: はい、そうです。',
                options: [
                  { id: 'a', text: 'か' },
                  { id: 'b', text: 'は' },
                  { id: 'c', text: 'も' },
                  { id: 'd', text: 'さん' },
                ],
              },
              correct: { optionId: 'a' },
              explanation: 'A hỏi "Anh Tanaka là giáo viên à?" nên cần か cuối câu; B xác nhận bằng はい、そうです.',
              itemRef: { type: 'GRAMMAR', key: 'l1-desu-ka' },
            },
          ],
        },
        {
          type: 'MATCHING',
          instructions: 'Nối mỗi từ tiếng Nhật với nghĩa tiếng Việt đúng.',
          questions: [
            {
              type: 'MATCHING',
              data: {
                kind: 'matching',
                pairs: [
                  { id: 'p1', left: { text: 'おなまえ', reading: 'onamae' }, right: { text: 'tên (cách lịch sự)' } },
                  { id: 'p2', left: { text: 'なん', reading: 'nan' }, right: { text: 'gì' } },
                  { id: 'p3', left: { text: 'はい', reading: 'hai' }, right: { text: 'vâng, có' } },
                  { id: 'p4', left: { text: 'いいえ', reading: 'iie' }, right: { text: 'không, không phải' } },
                  { id: 'p5', left: { text: 'そう', reading: 'sō' }, right: { text: 'vậy, đúng thế' } },
                  { id: 'p6', left: { text: 'にほんご', reading: 'nihongo' }, right: { text: 'tiếng Nhật' } },
                ],
              },
              correct: {
                pairs: {
                  p1: 'tên (cách lịch sự)',
                  p2: 'gì',
                  p3: 'vâng, có',
                  p4: 'không, không phải',
                  p5: 'vậy, đúng thế',
                  p6: 'tiếng Nhật',
                },
              },
              explanation: 'Nhóm từ để hỏi và đáp từ sẽ dùng rất nhiều trong các bài tiếp theo.',
            },
          ],
        },
      ],
    },

    /* ------------------------------ Node 14 ----------------------------- */
    {
      key: 'l1-n14',
      title: 'Boss Quiz',
      description: 'Boss Quiz cuối bài: 10 câu hỏi trộn mọi kiến thức, cần đạt 80% để vượt qua.',
      icon: 'Crown',
      nodeType: 'BOSS',
      xpReward: 30,
      requiredScore: 80,
      difficulty: 'HARD',
      exercises: [
        {
          type: 'MULTIPLE_CHOICE',
          instructions: 'Boss Quiz: trả lời đúng ít nhất 80% để vượt qua.',
          questions: [
            {
              type: 'MULTIPLE_CHOICE',
              prompt: 'Lời chào dùng khi gặp ai đó lần đầu là gì?',
              data: {
                kind: 'choice',
                options: [
                  { id: 'a', text: 'よろしくおねがいします', big: true, audio: 'よろしくおねがいします' },
                  { id: 'b', text: 'おなまえ', big: true, audio: 'おなまえ' },
                  { id: 'c', text: 'はじめまして', big: true, audio: 'はじめまして' },
                  { id: 'd', text: 'だいがく', big: true, audio: 'だいがく' },
                ],
              },
              correct: { optionId: 'c' },
              explanation: 'はじめまして = lời chào lần đầu gặp mặt.',
              itemRef: { type: 'VOCAB', key: 'はじめまして' },
            },
          ],
        },
        {
          type: 'SELECT_MEANING',
          instructions: 'Boss Quiz: trả lời đúng ít nhất 80% để vượt qua.',
          questions: [
            {
              type: 'SELECT_MEANING',
              prompt: 'かいしゃいん nghĩa là gì?',
              data: {
                kind: 'choice',
                promptJa: 'かいしゃいん',
                promptSub: 'kaishain',
                options: [
                  { id: 'a', text: 'nhân viên ngân hàng' },
                  { id: 'b', text: 'nhân viên công ty' },
                  { id: 'c', text: 'giáo viên' },
                  { id: 'd', text: 'kỹ sư' },
                ],
              },
              correct: { optionId: 'b' },
              explanation: 'かいしゃいん = nhân viên công ty; ぎんこういん = nhân viên ngân hàng.',
              itemRef: { type: 'VOCAB', key: 'かいしゃいん' },
            },
          ],
        },
        {
          type: 'GRAMMAR_CHOICE',
          instructions: 'Boss Quiz: trả lời đúng ít nhất 80% để vượt qua.',
          questions: [
            {
              type: 'GRAMMAR_CHOICE',
              data: {
                kind: 'choice',
                promptJa: 'わたしはぎんこういん___。',
                promptSub: 'Khẳng định: "Tôi là nhân viên ngân hàng".',
                options: [
                  { id: 'a', text: 'じゃありません' },
                  { id: 'b', text: 'ですか' },
                  { id: 'c', text: 'でした' },
                  { id: 'd', text: 'です' },
                ],
              },
              correct: { optionId: 'd' },
              explanation: 'Khẳng định "là" dùng です cuối câu.',
              itemRef: { type: 'GRAMMAR', key: 'l1-wa-desu' },
            },
          ],
        },
        {
          type: 'GRAMMAR_CHOICE',
          instructions: 'Boss Quiz: trả lời đúng ít nhất 80% để vượt qua.',
          questions: [
            {
              type: 'GRAMMAR_CHOICE',
              data: {
                kind: 'choice',
                promptJa: 'スミスさんはアメリカじん___。',
                promptSub: 'Phủ định: "không phải là người Mỹ".',
                options: [
                  { id: 'a', text: 'じゃありません' },
                  { id: 'b', text: 'です' },
                  { id: 'c', text: 'ですか' },
                  { id: 'd', text: 'でした' },
                ],
              },
              correct: { optionId: 'a' },
              explanation: 'Phủ định: アメリカじんじゃありません = không phải là người Mỹ.',
              itemRef: { type: 'GRAMMAR', key: 'l1-wa-ja-arimasen' },
            },
          ],
        },
        {
          type: 'PARTICLE_FILL',
          instructions: 'Boss Quiz: trả lời đúng ít nhất 80% để vượt qua.',
          questions: [
            {
              type: 'PARTICLE_FILL',
              data: {
                kind: 'fill-blank',
                sentence: 'リンさん___だいがくのがくせいです。',
                options: [
                  { id: 'a', text: 'を' },
                  { id: 'b', text: 'は' },
                  { id: 'c', text: 'か' },
                  { id: 'd', text: 'さん' },
                ],
              },
              correct: { optionId: 'b' },
              explanation: 'は đánh dấu chủ đề リンさん của câu khẳng định.',
              itemRef: { type: 'GRAMMAR', key: 'l1-wa-desu' },
            },
          ],
        },
        {
          type: 'SENTENCE_ORDER',
          instructions: 'Boss Quiz: trả lời đúng ít nhất 80% để vượt qua.',
          questions: [
            {
              type: 'SENTENCE_ORDER',
              data: {
                kind: 'token-order',
                promptVi: 'Bạn là giáo viên à?',
                tokens: [
                  { id: 't1', text: 'あなた' },
                  { id: 't2', text: 'は' },
                  { id: 't3', text: 'せんせい' },
                  { id: 't4', text: 'です' },
                  { id: 't5', text: 'か' },
                ],
                audioText: 'あなたはせんせいですか。',
              },
              correct: { tokenOrder: ['t1', 't2', 't3', 't4', 't5'] },
              explanation: 'Câu hỏi = câu khẳng định + か ở cuối.',
              itemRef: { type: 'GRAMMAR', key: 'l1-desu-ka' },
            },
          ],
        },
        {
          type: 'TRANSLATE_JA_VI',
          instructions: 'Boss Quiz: trả lời đúng ít nhất 80% để vượt qua.',
          questions: [
            {
              type: 'TRANSLATE_JA_VI',
              data: {
                kind: 'choice',
                promptJa: 'ミンさんもだいがくのがくせいです。',
                options: [
                  { id: 'a', text: 'Anh Minh là sinh viên đại học.' },
                  { id: 'b', text: 'Anh Minh không phải là sinh viên đại học.' },
                  { id: 'c', text: 'Anh Minh cũng là giáo viên.' },
                  { id: 'd', text: 'Anh Minh cũng là sinh viên đại học.' },
                ],
              },
              correct: { optionId: 'd' },
              explanation: 'も = "cũng"; だいがくのがくせい = sinh viên đại học.',
              itemRef: { type: 'GRAMMAR', key: 'l1-mo' },
            },
          ],
        },
        {
          type: 'LISTEN_SELECT',
          instructions: 'Boss Quiz: trả lời đúng ít nhất 80% để vượt qua.',
          questions: [
            {
              type: 'LISTEN_SELECT',
              data: {
                kind: 'audio-choice',
                audioText: 'わたしはにほんじんじゃありません。',
                meaningVi: 'Tôi không phải là người Nhật.',
                options: [
                  { id: 'a', text: 'Tôi là người Nhật.' },
                  { id: 'b', text: 'Tôi không phải là người Nhật.' },
                  { id: 'c', text: 'Tôi không phải là người Việt Nam.' },
                  { id: 'd', text: 'Tôi cũng là người Nhật.' },
                ],
              },
              correct: { optionId: 'b' },
              explanation: 'Chú ý nghe じゃありません (phủ định) và にほんじん (người Nhật).',
              itemRef: { type: 'VOCAB', key: 'にほん' },
            },
          ],
        },
        {
          type: 'TRANSLATE_VI_JA',
          instructions: 'Boss Quiz: trả lời đúng ít nhất 80% để vượt qua.',
          questions: [
            {
              type: 'TRANSLATE_VI_JA',
              data: {
                kind: 'token-order',
                promptVi: 'Tôi là bác sĩ.',
                tokens: [
                  { id: 't1', text: 'わたし' },
                  { id: 't2', text: 'は' },
                  { id: 't3', text: 'いしゃ' },
                  { id: 't4', text: 'です' },
                ],
                distractors: [{ id: 't5', text: 'か' }],
                audioText: 'わたしはいしゃです。',
              },
              correct: { tokenOrder: ['t1', 't2', 't3', 't4'] },
              explanation: 'Câu khẳng định không cần か; か chỉ dành cho câu hỏi.',
              itemRef: { type: 'VOCAB', key: 'いしゃ' },
            },
          ],
        },
        {
          type: 'MULTIPLE_CHOICE',
          instructions: 'Boss Quiz: trả lời đúng ít nhất 80% để vượt qua.',
          questions: [
            {
              type: 'MULTIPLE_CHOICE',
              prompt: 'Hậu tố さん KHÔNG được dùng trong trường hợp nào?',
              data: {
                kind: 'choice',
                options: [
                  { id: 'a', text: 'Gắn sau họ tên người khác khi xưng hô lịch sự' },
                  { id: 'b', text: 'Gắn sau tên đồng nghiệp' },
                  { id: 'c', text: 'Gắn sau tên mình khi giới thiệu bản thân' },
                  { id: 'd', text: 'Gắn sau tên bạn bè để thể hiện sự tôn trọng' },
                ],
              },
              correct: { optionId: 'c' },
              explanation: 'Không bao giờ gắn さん sau tên chính mình — đó là lỗi lịch sự kinh điển của người mới học.',
              itemRef: { type: 'GRAMMAR', key: 'l1-san' },
            },
          ],
        },
      ],
    },
  ],
}
