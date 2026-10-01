/**
 * NihongoGo — Bài 3: ここ・そこ・あそこ (Chỉ đường & địa điểm).
 * Nội dung GỐC do NihongoGo biên soạn, chỉ phục vụ mục đích học tập.
 */
import type { SeedLesson } from './types'

export const lesson3: SeedLesson = {
  order: 3,
  slug: 'l3-koko-soko-asoko',
  title: 'ここ・そこ・あそこ — Chỉ đường & địa điểm',
  titleJa: 'ここ・そこ・あそこ',
  description:
    'Chỉ và hỏi nơi chốn bằng ここ・そこ・あそこ・どこ, kèm hỏi "của ai" với だれの để tự tin hỏi đường và nói về các địa điểm quen thuộc quanh mình.',
  learningObjectives: [
    'Chỉ đúng vị trí nơi chốn bằng ここ・そこ・あそこ',
    'Hỏi địa điểm bằng 「どこですか」 và trả lời ngắn gọn',
    'Hỏi đồ vật, nơi chốn thuộc về ai với 「だれの ですか」',
  ],
  grammarTopics: ['ここ は ~ です (nơi chốn)', 'N は だれの ですか (của ai)'],
  vocabularyTopics: ['Đại từ chỉ nơi chốn', 'Địa điểm công cộng', 'Từ nghi vấn どこ・だれ'],
  kanjiTopics: [],
  difficulty: 'BEGINNER',
  status: 'PUBLISHED',
  vocabulary: [
    {
      term: 'ここ',
      romaji: 'koko',
      meaningVi: 'nơi đây, chỗ này (gần người nói)',
      pos: 'đại từ chỉ nơi chốn',
      exampleJa: 'ここはわたしのうちです。',
      exampleVi: 'Đây là nhà của tôi.',
    },
    {
      term: 'そこ',
      romaji: 'soko',
      meaningVi: 'chỗ đó (gần người nghe)',
      pos: 'đại từ chỉ nơi chốn',
      exampleJa: 'そこはゆうびんきょくです。',
      exampleVi: 'Đó là bưu điện.',
    },
    {
      term: 'あそこ',
      romaji: 'asoko',
      meaningVi: 'chỗ kia (xa cả hai người)',
      pos: 'đại từ chỉ nơi chốn',
      exampleJa: 'あそこはこうえんです。',
      exampleVi: 'Kia là công viên.',
    },
    {
      term: 'どこ',
      romaji: 'doko',
      meaningVi: 'ở đâu',
      pos: 'đại từ nghi vấn',
      exampleJa: 'えきはどこですか。',
      exampleVi: 'Nhà ga ở đâu?',
    },
    {
      term: 'だれ',
      romaji: 'dare',
      meaningVi: 'ai',
      pos: 'đại từ nghi vấn',
      exampleJa: 'これはだれのめいしですか。',
      exampleVi: 'Đây là danh thiếp của ai?',
    },
    {
      term: 'きょうしつ',
      romaji: 'kyōshitsu',
      meaningVi: 'lớp học',
      pos: 'danh từ',
      exampleJa: 'ここはわたしたちのきょうしつです。',
      exampleVi: 'Đây là lớp học của chúng tôi.',
    },
    {
      term: 'としょかん',
      romaji: 'toshokan',
      meaningVi: 'thư viện',
      pos: 'danh từ',
      exampleJa: 'としょかんはここです。',
      exampleVi: 'Thư viện ở đây.',
    },
    {
      term: 'ゆうびんきょく',
      romaji: 'yūbinkyoku',
      meaningVi: 'bưu điện',
      pos: 'danh từ',
      exampleJa: 'ゆうびんきょくはどこですか。',
      exampleVi: 'Bưu điện ở đâu?',
    },
    {
      term: 'えき',
      romaji: 'eki',
      meaningVi: 'nhà ga, trạm',
      pos: 'danh từ',
      exampleJa: 'あそこはえきです。',
      exampleVi: 'Kia là nhà ga.',
    },
    {
      term: 'スーパー',
      romaji: 'sūpā',
      meaningVi: 'siêu thị',
      pos: 'danh từ',
      exampleJa: 'スーパーはあそこです。',
      exampleVi: 'Siêu thị ở kia.',
    },
    {
      term: 'こうえん',
      romaji: 'kōen',
      meaningVi: 'công viên',
      pos: 'danh từ',
      exampleJa: 'ここはこうえんです。',
      exampleVi: 'Đây là công viên.',
    },
    {
      term: 'ビル',
      romaji: 'biru',
      meaningVi: 'tòa nhà, tòa nhà cao tầng',
      pos: 'danh từ',
      exampleJa: 'あれはビルです。',
      exampleVi: 'Kia là tòa nhà.',
    },
    {
      term: 'がっこう',
      romaji: 'gakkō',
      meaningVi: 'trường học',
      pos: 'danh từ',
      exampleJa: 'わたしのがっこうはあそこです。',
      exampleVi: 'Trường của tôi ở kia.',
    },
    {
      term: 'うち',
      romaji: 'uchi',
      meaningVi: 'nhà, nhà mình',
      pos: 'danh từ',
      exampleJa: 'あそこはだれのうちですか。',
      exampleVi: 'Kia là nhà của ai?',
    },
  ],
  grammar: [
    {
      code: 'l3-koko',
      title: 'ここ は ~ です',
      explanationVi:
        'ここ・そこ・あそこ chỉ nơi chốn, dùng thay cho tên địa điểm: ここ = nơi gần người nói; そこ = nơi gần người nghe; あそこ = nơi xa cả hai. Hỏi "ở đâu" bằng どこ, trả lời ngắn bằng 「ここ/そこ/あそこ です。」',
      examples: [
        { ja: 'ここはとしょかんです。', vi: 'Đây là thư viện.' },
        { ja: 'そこはスーパーです。', vi: 'Đó là siêu thị.' },
        { ja: 'えきはどこですか。— あそこです。', vi: 'Nhà ga ở đâu? - Ở kia.' },
      ],
    },
    {
      code: 'l3-dare-no',
      title: 'N は だれの ですか',
      explanationVi:
        '「だれの ですか」 dùng để hỏi vật hay nơi chốn đó "của ai" (だれ + の). Khi trả lời có thể lược danh từ sau の: 「わたしのです。」 (của tôi), 「トムさんのです。」 (của bạn Tom).',
      examples: [
        { ja: 'これはだれのかばんですか。— わたしのです。', vi: 'Đây là cặp của ai? - Của tôi.' },
        { ja: 'あれはだれのパソコンですか。— スミスさんのです。', vi: 'Kia là máy tính của ai? - Của anh Smith.' },
        { ja: 'あそこはだれのうちですか。— トムさんのです。', vi: 'Kia là nhà của ai? - Của bạn Tom.' },
      ],
    },
  ],
  nodes: [
    {
      key: 'l3-n1',
      title: 'Từ vựng',
      description: 'Làm quen 14 từ vựng về nơi chốn và địa điểm công cộng.',
      icon: 'BookOpen',
      nodeType: 'VOCAB',
      xpReward: 25,
      difficulty: 'EASY',
      exercises: [
        {
          type: 'MATCHING',
          instructions: 'Nối từ tiếng Nhật với nghĩa tiếng Việt đúng.',
          questions: [
            {
              type: 'MATCHING',
              data: {
                kind: 'matching',
                pairs: [
                  { id: 'p1', left: { text: 'ここ' }, right: { text: 'nơi đây (gần người nói)' } },
                  { id: 'p2', left: { text: 'そこ' }, right: { text: 'chỗ đó (gần người nghe)' } },
                  { id: 'p3', left: { text: 'あそこ' }, right: { text: 'chỗ kia (xa cả hai)' } },
                  { id: 'p4', left: { text: 'どこ' }, right: { text: 'ở đâu' } },
                  { id: 'p5', left: { text: 'えき' }, right: { text: 'nhà ga, trạm' } },
                  { id: 'p6', left: { text: 'がっこう' }, right: { text: 'trường học' } },
                ],
              },
              correct: {
                pairs: {
                  p1: 'nơi đây (gần người nói)',
                  p2: 'chỗ đó (gần người nghe)',
                  p3: 'chỗ kia (xa cả hai)',
                  p4: 'ở đâu',
                  p5: 'nhà ga, trạm',
                  p6: 'trường học',
                },
              },
              explanation: 'ここ・そこ・あそこ phân biệt theo khoảng cách; どこ dùng để hỏi nơi chốn.',
            },
          ],
        },
        {
          type: 'SELECT_MEANING',
          instructions: 'Chọn nghĩa tiếng Việt của từ.',
          questions: [
            {
              type: 'SELECT_MEANING',
              prompt: '「としょかん」 nghĩa là gì?',
              data: {
                kind: 'choice',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'thư viện' },
                  { id: 'o2', text: 'bưu điện' },
                  { id: 'o3', text: 'lớp học' },
                  { id: 'o4', text: 'nhà ga' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'としょかん (toshokan) = thư viện.',
              itemRef: { type: 'VOCAB', key: 'としょかん' },
            },
            {
              type: 'SELECT_MEANING',
              prompt: '「ゆうびんきょく」 nghĩa là gì?',
              data: {
                kind: 'choice',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'bưu điện' },
                  { id: 'o2', text: 'thư viện' },
                  { id: 'o3', text: 'siêu thị' },
                  { id: 'o4', text: 'tòa nhà' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'ゆうびんきょく (yūbinkyoku) = bưu điện.',
              itemRef: { type: 'VOCAB', key: 'ゆうびんきょく' },
            },
          ],
        },
        {
          type: 'SELECT_WORD',
          instructions: 'Chọn từ tiếng Nhật đúng với nghĩa cho trước.',
          questions: [
            {
              type: 'SELECT_WORD',
              prompt: 'Từ nào nghĩa là "công viên"?',
              data: {
                kind: 'choice',
                layout: 'grid',
                options: [
                  { id: 'o1', text: 'こうえん', sub: 'kōen', big: true },
                  { id: 'o2', text: 'きょうしつ', sub: 'kyōshitsu', big: true },
                  { id: 'o3', text: 'ビル', sub: 'biru', big: true },
                  { id: 'o4', text: 'うち', sub: 'uchi', big: true },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'こうえん (kōen) = công viên; きょうしつ là lớp học.',
              itemRef: { type: 'VOCAB', key: 'こうえん' },
            },
            {
              type: 'SELECT_WORD',
              prompt: 'Từ nào nghĩa là "siêu thị"?',
              data: {
                kind: 'choice',
                layout: 'grid',
                options: [
                  { id: 'o1', text: 'ビル', sub: 'biru', big: true },
                  { id: 'o2', text: 'スーパー', sub: 'sūpā', big: true },
                  { id: 'o3', text: 'がっこう', sub: 'gakkō', big: true },
                  { id: 'o4', text: 'ゆうびんきょく', sub: 'yūbinkyoku', big: true },
                ],
              },
              correct: { optionId: 'o2' },
              explanation: 'スーパー (sūpā) = siêu thị; ビル là tòa nhà.',
              itemRef: { type: 'VOCAB', key: 'スーパー' },
            },
          ],
        },
        {
          type: 'MULTIPLE_CHOICE',
          instructions: 'Chọn nghĩa đúng của từ.',
          questions: [
            {
              type: 'MULTIPLE_CHOICE',
              prompt: '「きょうしつ」 nghĩa là gì?',
              data: {
                kind: 'choice',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'lớp học' },
                  { id: 'o2', text: 'thư viện' },
                  { id: 'o3', text: 'công viên' },
                  { id: 'o4', text: 'nhà ga' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'きょうしつ (kyōshitsu) = lớp học.',
              itemRef: { type: 'VOCAB', key: 'きょうしつ' },
            },
            {
              type: 'MULTIPLE_CHOICE',
              prompt: '「だれ」 nghĩa là gì?',
              data: {
                kind: 'choice',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'ai' },
                  { id: 'o2', text: 'ở đâu' },
                  { id: 'o3', text: 'cái nào' },
                  { id: 'o4', text: 'cái gì' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'だれ (dare) = ai; どこ = ở đâu, どれ = cái nào.',
              itemRef: { type: 'VOCAB', key: 'だれ' },
            },
          ],
        },
      ],
    },
    {
      key: 'l3-n2',
      title: 'Grammar',
      description: 'Luyện ここ・そこ・あそこ・どこ và cấu trúc だれの ですか.',
      icon: 'Shapes',
      nodeType: 'GRAMMAR',
      xpReward: 30,
      difficulty: 'EASY',
      exercises: [
        {
          type: 'FILL_BLANK',
          instructions: 'Điền trợ từ đúng vào chỗ trống.',
          questions: [
            {
              type: 'FILL_BLANK',
              data: {
                kind: 'fill-blank',
                sentence: 'ここ＿＿わたしのうちです。',
                options: [
                  { id: 'o1', text: 'は' },
                  { id: 'o2', text: 'を' },
                  { id: 'o3', text: 'の' },
                  { id: 'o4', text: 'へ' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'ここ là chủ đề của câu nên dùng は.',
              itemRef: { type: 'GRAMMAR', key: 'l3-koko' },
            },
            {
              type: 'FILL_BLANK',
              data: {
                kind: 'fill-blank',
                sentence: 'としょかん＿＿どこですか。',
                options: [
                  { id: 'o1', text: 'は' },
                  { id: 'o2', text: 'が' },
                  { id: 'o3', text: 'を' },
                  { id: 'o4', text: 'も' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'Danh từ cần hỏi (としょかん) đứng trước どこ làm chủ đề → は.',
            },
          ],
        },
        {
          type: 'GRAMMAR_CHOICE',
          instructions: 'Chọn từ thích hợp cho chỗ trống.',
          questions: [
            {
              type: 'GRAMMAR_CHOICE',
              prompt: 'Chọn từ thích hợp.',
              data: {
                kind: 'choice',
                promptJa: '（自分の立っている場所を指して）＿＿はえきです。',
                promptSub: 'Đang chỉ nơi mình đứng.',
                layout: 'grid',
                options: [
                  { id: 'o1', text: 'ここ', big: true },
                  { id: 'o2', text: 'そこ', big: true },
                  { id: 'o3', text: 'あそこ', big: true },
                  { id: 'o4', text: 'どこ', big: true },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'Nơi người nói đang đứng → ここ.',
              itemRef: { type: 'GRAMMAR', key: 'l3-koko' },
            },
            {
              type: 'GRAMMAR_CHOICE',
              prompt: 'Chọn từ thích hợp.',
              data: {
                kind: 'choice',
                promptJa: 'A: そこはスーパーですか。 B: はい、＿＿はスーパーです。',
                promptSub: 'B đang đứng ngay cạnh siêu thị.',
                layout: 'grid',
                options: [
                  { id: 'o1', text: 'ここ', big: true },
                  { id: 'o2', text: 'そこ', big: true },
                  { id: 'o3', text: 'あそこ', big: true },
                  { id: 'o4', text: 'どこ', big: true },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'Siêu thị ở ngay nơi B đang đứng nên với B đó là ここ (A ở xa hơn mới gọi là そこ).',
              itemRef: { type: 'GRAMMAR', key: 'l3-koko' },
            },
          ],
        },
        {
          type: 'ERROR_CORRECTION',
          instructions: 'Tìm câu sửa đúng cho câu bị lỗi.',
          questions: [
            {
              type: 'ERROR_CORRECTION',
              prompt: 'Câu nào sửa đúng?',
              data: {
                kind: 'choice',
                promptJa: '× ここわわたしのうちです。',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'ここはわたしのうちです。' },
                  { id: 'o2', text: 'ここをわたしのうちです。' },
                  { id: 'o3', text: 'ここがわたしのうちです。' },
                  { id: 'o4', text: 'ここのわたしのうちです。' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'Trợ từ chủ đề là は (đọc "wa"), không phải わ.',
            },
            {
              type: 'ERROR_CORRECTION',
              prompt: 'Câu nào sửa đúng?',
              data: {
                kind: 'choice',
                promptJa: '× えきはどこです。',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'えきはどこですか。' },
                  { id: 'o2', text: 'えきはどれですか。' },
                  { id: 'o3', text: 'どこはえきですか。' },
                  { id: 'o4', text: 'えきはだれですか。' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'Câu hỏi nơi chốn phải có どこ và kết thúc bằng ですか.',
            },
          ],
        },
        {
          type: 'GRAMMAR_CHOICE',
          instructions: 'Luyện hỏi "của ai" với だれの.',
          questions: [
            {
              type: 'TRANSLATE_VI_JA',
              prompt: '「Đây là chiếc cặp của ai?」 dịch sang tiếng Nhật:',
              data: {
                kind: 'choice',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'これはだれのかばんですか。' },
                  { id: 'o2', text: 'ここはだれのかばんですか。' },
                  { id: 'o3', text: 'これはだれがかばんですか。' },
                  { id: 'o4', text: 'だれはこのかばんですか。' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'Đồ vật = これ; だれ + の + かばん = cặp của ai.',
              itemRef: { type: 'GRAMMAR', key: 'l3-dare-no' },
            },
            {
              type: 'GRAMMAR_CHOICE',
              prompt: 'Chọn câu trả lời đúng.',
              data: {
                kind: 'choice',
                promptJa: 'A: これはだれのノートですか。 B: ＿＿。',
                promptSub: 'B trả lời ngắn, lược danh từ sau の.',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'わたしのです。' },
                  { id: 'o2', text: 'わたしです。' },
                  { id: 'o3', text: 'わたしのノートですか。' },
                  { id: 'o4', text: 'ノートのわたしです。' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'Sau の có thể lược danh từ: わたしのです = của tôi.',
              itemRef: { type: 'GRAMMAR', key: 'l3-dare-no' },
            },
          ],
        },
      ],
    },
    {
      key: 'l3-n3',
      title: 'Luyện nghe',
      description: 'Nghe chỉ nơi chốn và chép chính tả câu cơ bản.',
      icon: 'Headphones',
      nodeType: 'LISTENING',
      xpReward: 30,
      difficulty: 'EASY',
      exercises: [
        {
          type: 'LISTEN_SELECT',
          instructions: 'Nghe và chọn câu bạn nghe được.',
          questions: [
            {
              type: 'LISTEN_SELECT',
              data: {
                kind: 'audio-choice',
                audioText: 'ここはきょうしつです。',
                meaningVi: 'Đây là lớp học.',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'ここはきょうしつです。' },
                  { id: 'o2', text: 'そこはきょうしつです。' },
                  { id: 'o3', text: 'ここはとしょかんです。' },
                  { id: 'o4', text: 'あそこはきょうしつです。' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'Chú ý phân biệt ここ・そこ・あそこ và きょうしつ・としょかん.',
            },
            {
              type: 'LISTEN_SELECT',
              data: {
                kind: 'audio-choice',
                audioText: 'ゆうびんきょくはどこですか。',
                meaningVi: 'Bưu điện ở đâu?',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'ゆうびんきょくはどこですか。' },
                  { id: 'o2', text: 'としょかんはどこですか。' },
                  { id: 'o3', text: 'ゆうびんきょくはあそこです。' },
                  { id: 'o4', text: 'ゆうびんきょくはなんですか。' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'ゆうびんきょく là từ dài, nghe kỹ từng âm.',
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
                audioText: 'あそこはスーパーです。',
                meaningVi: 'Kia là siêu thị.',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'Kia là siêu thị.' },
                  { id: 'o2', text: 'Đây là siêu thị.' },
                  { id: 'o3', text: 'Đó là bưu điện.' },
                  { id: 'o4', text: 'Kia là công viên.' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'あそこ = chỗ kia (xa cả hai người).',
            },
            {
              type: 'LISTEN_SELECT',
              data: {
                kind: 'audio-choice',
                audioText: 'わたしのがっこうはあそこです。',
                meaningVi: 'Trường của tôi ở kia.',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'Trường của tôi ở kia.' },
                  { id: 'o2', text: 'Trường của tôi ở đây.' },
                  { id: 'o3', text: 'Kia là nhà của tôi.' },
                  { id: 'o4', text: 'Trường học ở đâu?' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'わたしのがっこう (trường của tôi) + は + あそこです.',
            },
          ],
        },
        {
          type: 'LISTEN_SELECT',
          instructions: 'Nghe câu hỏi và chọn câu trả lời phù hợp.',
          questions: [
            {
              type: 'LISTEN_SELECT',
              data: {
                kind: 'audio-choice',
                audioText: 'としょかんはどこですか。',
                meaningVi: 'Thư viện ở đâu?',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'としょかんはあそこです。' },
                  { id: 'o2', text: 'としょかんはだれですか。' },
                  { id: 'o3', text: 'ここはとしょかんです。' },
                  { id: 'o4', text: 'としょかんはどれですか。' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'Câu hỏi どこ cần câu trả lời chỉ nơi chốn: あそこです.',
            },
          ],
        },
        {
          type: 'DICTATION',
          instructions: 'Nghe và gõ lại câu bằng tiếng Nhật.',
          questions: [
            {
              type: 'DICTATION',
              data: {
                kind: 'text-input',
                label: 'Câu bạn nghe được',
                placeholder: 'えきは…',
                audioText: 'えきはあそこです。',
                accept: ['えきはあそこです。', 'えきはあそこです'],
              },
              correct: { answers: ['えきはあそこです。', 'えきはあそこです'] },
              explanation: 'えき は あそこ です - nhà ga ở kia.',
            },
            {
              type: 'DICTATION',
              data: {
                kind: 'text-input',
                label: 'Câu bạn nghe được',
                placeholder: 'ここは…',
                audioText: 'ここはわたしのうちです。',
                accept: ['ここはわたしのうちです。', 'ここはわたしのうちです'],
              },
              correct: { answers: ['ここはわたしのうちです。', 'ここはわたしのうちです'] },
              explanation: 'ここ は わたしの うち です - đây là nhà của tôi.',
            },
          ],
        },
      ],
    },
  ],
}
