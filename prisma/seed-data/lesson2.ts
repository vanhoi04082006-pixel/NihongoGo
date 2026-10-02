/**
 * NihongoGo — Bài 2: これ・それ・あれ (Đồ vật ở quanh ta).
 * Nội dung GỐC do NihongoGo biên soạn, chỉ phục vụ mục đích học tập.
 */
import type { SeedLesson } from './types'

export const lesson2: SeedLesson = {
  order: 2,
  slug: 'l2-kore-sore-are',
  title: 'これ・それ・あれ — Đồ vật ở quanh ta',
  titleJa: 'これ・それ・あれ',
  description:
    'Chỉ đồ vật bằng これ・それ・あれ tùy theo vị trí, hỏi "cái nào" bằng どれ và nối danh từ với の để nói sở hữu, kèm 18 từ vựng về đồ vật quen thuộc hằng ngày.',
  learningObjectives: [
    'Phân biệt và dùng đúng これ・それ・あれ・どれ theo vị trí của đồ vật',
    'Nối hai danh từ bằng trợ từ の để nói sở hữu và thuộc tính',
    'Hỏi và trả lời "cái này là gì, là của ai" một cách tự nhiên',
  ],
  grammarTopics: ['これ は N です (chỉ đồ vật)', 'N1 の N2 (sở hữu, thuộc về)', 'どれ (câu hỏi lựa chọn)'],
  vocabularyTopics: ['Đại từ chỉ thị これ・それ・あれ・どれ', 'Đồ dùng học tập', 'Đồ vật cá nhân quen thuộc'],
  kanjiTopics: [],
  difficulty: 'BEGINNER',
  status: 'PUBLISHED',
  vocabulary: [
    {
      term: 'これ',
      romaji: 'kore',
      meaningVi: 'cái này (đồ vật gần người nói)',
      pos: 'đại từ',
      exampleJa: 'これはあなたのめいしですか。',
      exampleVi: 'Đây là danh thiếp của bạn à?',
    },
    {
      term: 'それ',
      romaji: 'sore',
      meaningVi: 'cái đó (đồ vật gần người nghe)',
      pos: 'đại từ',
      exampleJa: 'それはなんですか。',
      exampleVi: 'Cái đó là cái gì?',
    },
    {
      term: 'あれ',
      romaji: 'are',
      meaningVi: 'cái kia (đồ vật xa cả hai người)',
      pos: 'đại từ',
      exampleJa: 'あれはトムさんのカメラです。',
      exampleVi: 'Kia là máy ảnh của bạn Tom.',
    },
    {
      term: 'どれ',
      romaji: 'dore',
      meaningVi: 'cái nào (khi chọn trong nhiều vật)',
      pos: 'đại từ nghi vấn',
      exampleJa: 'あなたのノートはどれですか。',
      exampleVi: 'Quyển vở của bạn là quyển nào?',
    },
    {
      term: 'ほん',
      romaji: 'hon',
      meaningVi: 'sách',
      pos: 'danh từ',
      exampleJa: 'それはにほんごのほんです。',
      exampleVi: 'Đó là quyển sách tiếng Nhật.',
    },
    {
      term: 'じしょ',
      romaji: 'jisho',
      meaningVi: 'từ điển',
      pos: 'danh từ',
      exampleJa: 'わたしのじしょはこれです。',
      exampleVi: 'Từ điển của tôi là cái này.',
    },
    {
      term: 'ざっし',
      romaji: 'zasshi',
      meaningVi: 'tạp chí',
      pos: 'danh từ',
      exampleJa: 'それはファッションのざっしです。',
      exampleVi: 'Đó là cuốn tạp chí thời trang.',
    },
    {
      term: 'しんぶん',
      romaji: 'shinbun',
      meaningVi: 'báo',
      pos: 'danh từ',
      exampleJa: 'あれはきょうのしんぶんです。',
      exampleVi: 'Kia là tờ báo hôm nay.',
    },
    {
      term: 'ノート',
      romaji: 'nōto',
      meaningVi: 'vở ghi, sổ tay',
      pos: 'danh từ',
      exampleJa: 'それはトムさんのノートです。',
      exampleVi: 'Đó là quyển vở của bạn Tom.',
    },
    {
      term: 'めいし',
      romaji: 'meishi',
      meaningVi: 'danh thiếp (thẻ giới thiệu)',
      pos: 'danh từ',
      exampleJa: 'はじめまして。わたしのめいしです。',
      exampleVi: 'Rất hân hạnh. Đây là danh thiếp của tôi.',
    },
    {
      term: 'ボールペン',
      romaji: 'bōrupen',
      meaningVi: 'bút bi',
      pos: 'danh từ',
      exampleJa: 'あれはアンナさんのボールペンです。',
      exampleVi: 'Kia là cây bút bi của bạn Anna.',
    },
    {
      term: 'えんぴつ',
      romaji: 'enpitsu',
      meaningVi: 'bút chì',
      pos: 'danh từ',
      exampleJa: 'それはわたしのえんぴつです。',
      exampleVi: 'Đó là cây bút chì của tôi.',
    },
    {
      term: 'かさ',
      romaji: 'kasa',
      meaningVi: 'ô, dù',
      pos: 'danh từ',
      exampleJa: 'これはスミスさんのかさです。',
      exampleVi: 'Đây là cây ô của anh Smith.',
    },
    {
      term: 'かばん',
      romaji: 'kaban',
      meaningVi: 'cặp sách, túi xách',
      pos: 'danh từ',
      exampleJa: 'あれはたなかさんのかばんです。',
      exampleVi: 'Kia là chiếc cặp của anh Tanaka.',
    },
    {
      term: 'カメラ',
      romaji: 'kamera',
      meaningVi: 'máy ảnh',
      pos: 'danh từ',
      exampleJa: 'それはリーさんのカメラです。',
      exampleVi: 'Đó là máy ảnh của bạn Lee.',
    },
    {
      term: 'パソコン',
      romaji: 'pasokon',
      meaningVi: 'máy tính',
      pos: 'danh từ',
      exampleJa: 'これはわたしのパソコンです。',
      exampleVi: 'Đây là máy tính của tôi.',
    },
    {
      term: 'とけい',
      romaji: 'tokei',
      meaningVi: 'đồng hồ',
      pos: 'danh từ',
      exampleJa: 'これはあなたのとけいですか。',
      exampleVi: 'Đây là đồng hồ của bạn à?',
    },
    {
      term: 'スマートフォン',
      romaji: 'sumātofon',
      meaningVi: 'điện thoại thông minh',
      pos: 'danh từ',
      exampleJa: 'あれはトムさんのスマートフォンです。',
      exampleVi: 'Kia là điện thoại thông minh của bạn Tom.',
    },
  ],
  grammar: [
    {
      code: 'l2-kore-wa',
      title: 'これ は N です',
      explanationVi:
        'これ・それ・あれ là đại từ chỉ đồ vật, đứng độc lập, không cần danh từ theo sau. これ chỉ vật gần người nói; それ chỉ vật gần người nghe; あれ chỉ vật xa cả hai người. Khi hỏi chọn một vật trong nhiều vật, dùng どれ.',
      examples: [
        { ja: 'これはわたしのノートです。', vi: 'Đây là quyển vở của tôi.' },
        { ja: 'それはにほんごのじしょです。', vi: 'Đó là quyển từ điển tiếng Nhật.' },
        { ja: 'あれはスミスさんのカメラです。', vi: 'Kia là máy ảnh của anh Smith.' },
      ],
    },
    {
      code: 'l2-no',
      title: 'N1 の N2',
      explanationVi:
        'Trợ từ の nối hai danh từ: N1 の N2 nghĩa là "N2 của N1". Có thể diễn đạt sở hữu (わたしのかばん - cặp của tôi), thuộc tính (にほんごのほん - sách tiếng Nhật) hay vật thuộc về ai (せんせいのめいし - danh thiếp của thầy cô).',
      examples: [
        { ja: 'これはわたしのかさです。', vi: 'Đây là cây ô của tôi.' },
        { ja: 'それはにほんごのざっしです。', vi: 'Đó là cuốn tạp chí tiếng Nhật.' },
        { ja: 'あれはやまださんのパソコンです。', vi: 'Kia là máy tính của anh Yamada.' },
      ],
    },
    {
      code: 'l2-dono',
      title: 'N は どれ ですか',
      explanationVi:
        'Dùng どれ để hỏi "cái nào" khi có nhiều vật để lựa chọn: 「N は どれ ですか。」 Trả lời bằng これ・それ・あれ kèm です, ví dụ 「あれです。」',
      examples: [
        { ja: 'あなたのパソコンはどれですか。', vi: 'Máy tính của bạn là cái nào?' },
        { ja: 'たなかさんのかさはどれですか。', vi: 'Ô của anh Tanaka là cây nào?' },
        { ja: 'わたしのえんぴつはどれですか。', vi: 'Bút chì của tôi là cây nào?' },
      ],
    },
  ],
  nodes: [
    {
      key: 'l2-n1',
      title: 'Từ vựng',
      description: 'Làm quen 18 từ vựng về đồ vật và các đại từ chỉ thị.',
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
                  { id: 'p1', left: { text: 'これ' }, right: { text: 'cái này (gần người nói)' } },
                  { id: 'p2', left: { text: 'それ' }, right: { text: 'cái đó (gần người nghe)' } },
                  { id: 'p3', left: { text: 'あれ' }, right: { text: 'cái kia (xa cả hai)' } },
                  { id: 'p4', left: { text: 'じしょ' }, right: { text: 'từ điển' } },
                  { id: 'p5', left: { text: 'ノート' }, right: { text: 'vở ghi, sổ tay' } },
                  { id: 'p6', left: { text: 'とけい' }, right: { text: 'đồng hồ' } },
                ],
              },
              correct: {
                pairs: {
                  p1: 'cái này (gần người nói)',
                  p2: 'cái đó (gần người nghe)',
                  p3: 'cái kia (xa cả hai)',
                  p4: 'từ điển',
                  p5: 'vở ghi, sổ tay',
                  p6: 'đồng hồ',
                },
              },
              explanation: 'これ・それ・あれ phân biệt theo khoảng cách; じしょ là từ điển, ノート là vở ghi, とけい là đồng hồ.',
            },
          ],
        },
        {
          type: 'SELECT_MEANING',
          instructions: 'Chọn nghĩa tiếng Việt của từ.',
          questions: [
            {
              type: 'SELECT_MEANING',
              prompt: '「しんぶん」 nghĩa là gì?',
              data: {
                kind: 'choice',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'báo' },
                  { id: 'o2', text: 'tạp chí' },
                  { id: 'o3', text: 'từ điển' },
                  { id: 'o4', text: 'quyển vở' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'しんぶん (shinbun) = báo.',
              itemRef: { type: 'VOCAB', key: 'しんぶん' },
            },
            {
              type: 'SELECT_MEANING',
              prompt: '「スマートフォン」 nghĩa là gì?',
              data: {
                kind: 'choice',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'máy tính' },
                  { id: 'o2', text: 'máy ảnh' },
                  { id: 'o3', text: 'điện thoại thông minh' },
                  { id: 'o4', text: 'đồng hồ' },
                ],
              },
              correct: { optionId: 'o3' },
              explanation: 'スマートフォン (sumātofon) = điện thoại thông minh.',
              itemRef: { type: 'VOCAB', key: 'スマートフォン' },
            },
          ],
        },
        {
          type: 'SELECT_WORD',
          instructions: 'Chọn từ tiếng Nhật đúng với nghĩa cho trước.',
          questions: [
            {
              type: 'SELECT_WORD',
              prompt: 'Từ nào nghĩa là "bút bi"?',
              data: {
                kind: 'choice',
                layout: 'grid',
                options: [
                  { id: 'o1', text: 'ボールペン', sub: 'bōrupen', big: true },
                  { id: 'o2', text: 'えんぴつ', sub: 'enpitsu', big: true },
                  { id: 'o3', text: 'ノート', sub: 'nōto', big: true },
                  { id: 'o4', text: 'カメラ', sub: 'kamera', big: true },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'ボールペン (bōrupen) = bút bi; えんぴつ là bút chì.',
              itemRef: { type: 'VOCAB', key: 'ボールペン' },
            },
            {
              type: 'SELECT_WORD',
              prompt: 'Từ nào nghĩa là "cặp sách, túi xách"?',
              data: {
                kind: 'choice',
                layout: 'grid',
                options: [
                  { id: 'o1', text: 'かさ', sub: 'kasa', big: true },
                  { id: 'o2', text: 'かばん', sub: 'kaban', big: true },
                  { id: 'o3', text: 'めいし', sub: 'meishi', big: true },
                  { id: 'o4', text: 'ほん', sub: 'hon', big: true },
                ],
              },
              correct: { optionId: 'o2' },
              explanation: 'かばん (kaban) = cặp sách, túi xách; かさ là ô/dù.',
              itemRef: { type: 'VOCAB', key: 'かばん' },
            },
          ],
        },
        {
          type: 'TRANSLATE_JA_VI',
          instructions: 'Chọn câu dịch tiếng Việt đúng.',
          questions: [
            {
              type: 'TRANSLATE_JA_VI',
              prompt: 'Chọn câu dịch đúng.',
              data: {
                kind: 'choice',
                promptJa: 'これはわたしのほんです。',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'Đây là quyển sách của tôi.' },
                  { id: 'o2', text: 'Đó là quyển sách của tôi.' },
                  { id: 'o3', text: 'Đây là quyển vở của tôi.' },
                  { id: 'o4', text: 'Kia là quyển sách tiếng Nhật.' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'これ = cái này (gần người nói); ほん = sách.',
              itemRef: { type: 'VOCAB', key: 'ほん' },
            },
            {
              type: 'TRANSLATE_JA_VI',
              prompt: 'Chọn câu dịch đúng.',
              data: {
                kind: 'choice',
                promptJa: 'それはざっしですか。',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'Đó là tạp chí à?' },
                  { id: 'o2', text: 'Đây là tạp chí à?' },
                  { id: 'o3', text: 'Đó là tờ báo à?' },
                  { id: 'o4', text: 'Đó là quyển từ điển à?' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'それ = cái đó (gần người nghe); ざっし = tạp chí.',
              itemRef: { type: 'VOCAB', key: 'ざっし' },
            },
          ],
        },
        {
          type: 'TRANSLATE_VI_JA',
          instructions: 'Chọn câu tiếng Nhật đúng với nghĩa cho trước.',
          questions: [
            {
              type: 'TRANSLATE_VI_JA',
              prompt: '「Máy tính của bạn là cái nào?」 dịch sang tiếng Nhật:',
              data: {
                kind: 'choice',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'あなたのパソコンはどれですか。' },
                  { id: 'o2', text: 'あなたのパソコンはなんですか。' },
                  { id: 'o3', text: 'あなたのパソコンはこれです。' },
                  { id: 'o4', text: 'あなたはどのパソコンですか。' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'Hỏi chọn một vật trong nhiều vật → dùng どれ.',
              itemRef: { type: 'GRAMMAR', key: 'l2-dono' },
            },
            {
              type: 'TRANSLATE_VI_JA',
              prompt: '「Kia là máy ảnh của bạn Anna.」 dịch sang tiếng Nhật:',
              data: {
                kind: 'choice',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'あれはアンナさんのカメラです。' },
                  { id: 'o2', text: 'これはアンナさんのカメラです。' },
                  { id: 'o3', text: 'それはアンナさんのカメラです。' },
                  { id: 'o4', text: 'あれはアンナさんのカメラですか。' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'Vật xa cả hai người → あれ; "của Anna" → アンナさんの.',
              itemRef: { type: 'VOCAB', key: 'カメラ' },
            },
          ],
        },
      ],
    },
    {
      key: 'l2-n2',
      title: 'Grammar これ・それ・あれ',
      description: 'Luyện chọn これ・それ・あれ・どれ đúng theo vị trí và bối cảnh.',
      icon: 'Shapes',
      nodeType: 'GRAMMAR',
      xpReward: 30,
      difficulty: 'EASY',
      exercises: [
        {
          type: 'GRAMMAR_CHOICE',
          instructions: 'Chọn từ thích hợp cho chỗ trống.',
          questions: [
            {
              type: 'GRAMMAR_CHOICE',
              prompt: 'Chọn từ thích hợp.',
              data: {
                kind: 'choice',
                promptJa: '（物を手に持って）＿＿はわたしのノートです。',
                promptSub: 'Cầm quyển vở trên tay - vật ở ngay gần người nói.',
                layout: 'grid',
                options: [
                  { id: 'o1', text: 'これ', big: true },
                  { id: 'o2', text: 'それ', big: true },
                  { id: 'o3', text: 'あれ', big: true },
                  { id: 'o4', text: 'どれ', big: true },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'Vật đang ở trong tay người nói → これ.',
              itemRef: { type: 'GRAMMAR', key: 'l2-kore-wa' },
            },
            {
              type: 'GRAMMAR_CHOICE',
              prompt: 'Chọn từ thích hợp.',
              data: {
                kind: 'choice',
                promptJa: 'A: これはあなたのかさですか。 B: いいえ、＿＿はやまださんのかさです。',
                promptSub: 'B đang nói về cây ô nằm trong tay A (người B đang nghe).',
                layout: 'grid',
                options: [
                  { id: 'o1', text: 'これ', big: true },
                  { id: 'o2', text: 'それ', big: true },
                  { id: 'o3', text: 'あれ', big: true },
                  { id: 'o4', text: 'どれ', big: true },
                ],
              },
              correct: { optionId: 'o2' },
              explanation: 'Với B, cây ô ở gần người nghe (A) nên B dùng それ.',
              itemRef: { type: 'GRAMMAR', key: 'l2-kore-wa' },
            },
            {
              type: 'GRAMMAR_CHOICE',
              prompt: 'Chọn từ thích hợp.',
              data: {
                kind: 'choice',
                promptJa: '（二人とも遠くの物を見て）＿＿はトムさんのパソコンです。',
                promptSub: 'Cả hai người cùng nhìn một vật ở xa.',
                layout: 'grid',
                options: [
                  { id: 'o1', text: 'これ', big: true },
                  { id: 'o2', text: 'それ', big: true },
                  { id: 'o3', text: 'あれ', big: true },
                  { id: 'o4', text: 'どれ', big: true },
                ],
              },
              correct: { optionId: 'o3' },
              explanation: 'Vật xa cả người nói lẫn người nghe → あれ.',
              itemRef: { type: 'GRAMMAR', key: 'l2-kore-wa' },
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
                promptJa: '× これわかばんです。',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'これはかばんです。' },
                  { id: 'o2', text: 'これをかばんです。' },
                  { id: 'o3', text: 'これもかばんです。' },
                  { id: 'o4', text: 'これのかばんです。' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'Trợ từ đánh dấu chủ đề viết là は nhưng đọc là "wa", không dùng わ.',
            },
            {
              type: 'ERROR_CORRECTION',
              prompt: 'Câu nào sửa đúng?',
              data: {
                kind: 'choice',
                promptJa: '× あれはスマートフォンですあなたの。',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'あれはあなたのスマートフォンです。' },
                  { id: 'o2', text: 'あなたのはあれスマートフォンです。' },
                  { id: 'o3', text: 'あなたのあれはスマートフォンです。' },
                  { id: 'o4', text: 'スマートフォンはあれあなたののです。' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'Trật tự chuẩn: あれは + phần sở hữu (あなたの) + danh từ + です.',
            },
          ],
        },
        {
          type: 'SENTENCE_ORDER',
          instructions: 'Sắp xếp các mảnh thành câu đúng.',
          questions: [
            {
              type: 'SENTENCE_ORDER',
              data: {
                kind: 'token-order',
                promptVi: 'Đây là quyển vở của tôi.',
                tokens: [
                  { id: 't1', text: 'これ' },
                  { id: 't2', text: 'は' },
                  { id: 't3', text: 'わたし' },
                  { id: 't4', text: 'の' },
                  { id: 't5', text: 'ノート' },
                  { id: 't6', text: 'です。' },
                ],
                audioText: 'これはわたしのノートです。',
              },
              correct: { tokenOrder: ['t1', 't2', 't3', 't4', 't5', 't6'] },
              explanation: 'これ は + わたしの (của tôi) + ノート + です.',
            },
            {
              type: 'SENTENCE_ORDER',
              data: {
                kind: 'token-order',
                promptVi: 'Quyển vở của bạn là quyển nào?',
                tokens: [
                  { id: 't1', text: 'あなたの' },
                  { id: 't2', text: 'ノート' },
                  { id: 't3', text: 'は' },
                  { id: 't4', text: 'どれ' },
                  { id: 't5', text: 'です。' },
                ],
                audioText: 'あなたのノートはどれですか。',
              },
              correct: { tokenOrder: ['t1', 't2', 't3', 't4', 't5'] },
              explanation: 'Chủ đề (あなたのノート) + は + どれ + です.',
              itemRef: { type: 'GRAMMAR', key: 'l2-dono' },
            },
          ],
        },
        {
          type: 'FILL_BLANK',
          instructions: 'Điền từ đúng vào chỗ trống.',
          questions: [
            {
              type: 'FILL_BLANK',
              data: {
                kind: 'fill-blank',
                sentence: 'これ＿＿トムさんのめいしです。',
                options: [
                  { id: 'o1', text: 'は' },
                  { id: 'o2', text: 'を' },
                  { id: 'o3', text: 'の' },
                  { id: 'o4', text: 'が' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'これ là chủ đề của câu nên dùng trợ từ は.',
            },
            {
              type: 'FILL_BLANK',
              prompt: 'Chú ý: điện thoại đang ở ngay cạnh B.',
              data: {
                kind: 'fill-blank',
                sentence: 'A: それはあなたのスマートフォンですか。 B: はい、＿＿はわたしのスマートフォンです。',
                options: [
                  { id: 'o1', text: 'これ' },
                  { id: 'o2', text: 'それ' },
                  { id: 'o3', text: 'あれ' },
                  { id: 'o4', text: 'どれ' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'Điện thoại ở gần B (người đang trả lời) nên B dùng これ.',
            },
          ],
        },
        {
          type: 'GRAMMAR_CHOICE',
          instructions: 'Tổng hợp: chọn đáp án đúng.',
          questions: [
            {
              type: 'GRAMMAR_CHOICE',
              prompt: 'Chọn từ thích hợp.',
              data: {
                kind: 'choice',
                promptJa: 'A: わたしのめいしは＿＿ですか。 B: あれです。',
                promptSub: 'A đang hỏi chọn một vật trong nhiều vật.',
                layout: 'grid',
                options: [
                  { id: 'o1', text: 'どれ' },
                  { id: 'o2', text: 'なん' },
                  { id: 'o3', text: 'これ' },
                  { id: 'o4', text: 'だれ' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'Hỏi "cái nào" trong một nhóm vật → どれ.',
              itemRef: { type: 'GRAMMAR', key: 'l2-dono' },
            },
            {
              type: 'TRANSLATE_VI_JA',
              prompt: '「Cái kia là chiếc đồng hồ.」 dịch sang tiếng Nhật:',
              data: {
                kind: 'choice',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'あれはとけいです。' },
                  { id: 'o2', text: 'これはとけいです。' },
                  { id: 'o3', text: 'それはとけいですか。' },
                  { id: 'o4', text: 'とけいはあれですか。' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'Vật xa cả hai người → あれ; câu khẳng định kết thúc bằng です。',
              itemRef: { type: 'VOCAB', key: 'とけい' },
            },
          ],
        },
      ],
    },
    {
      key: 'l2-n3',
      title: 'Grammar の',
      description: 'Luyện nối hai danh từ với trợ từ の.',
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
                sentence: 'これはわたし＿＿ノートです。',
                options: [
                  { id: 'o1', text: 'の' },
                  { id: 'o2', text: 'は' },
                  { id: 'o3', text: 'を' },
                  { id: 'o4', text: 'に' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'Giữa hai danh từ (わたし + ノート) dùng の: わたしのノート = vở của tôi.',
              itemRef: { type: 'GRAMMAR', key: 'l2-no' },
            },
            {
              type: 'FILL_BLANK',
              data: {
                kind: 'fill-blank',
                sentence: 'あれはにほんご＿＿じしょです。',
                options: [
                  { id: 'o1', text: 'は' },
                  { id: 'o2', text: 'の' },
                  { id: 'o3', text: 'で' },
                  { id: 'o4', text: 'が' },
                ],
              },
              correct: { optionId: 'o2' },
              explanation: 'にほんごのじしょ = từ điển tiếng Nhật (danh từ + の + danh từ).',
              itemRef: { type: 'GRAMMAR', key: 'l2-no' },
            },
          ],
        },
        {
          type: 'TRANSLATE_VI_JA',
          instructions: 'Chọn câu tiếng Nhật đúng.',
          questions: [
            {
              type: 'TRANSLATE_VI_JA',
              prompt: '「Đây là máy tính của bạn tôi.」 dịch sang tiếng Nhật:',
              data: {
                kind: 'choice',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'これはともだちのパソコンです。' },
                  { id: 'o2', text: 'これはパソコンのともだちです。' },
                  { id: 'o3', text: 'ともだちはパソコンこれです。' },
                  { id: 'o4', text: 'これはともだちはパソコンです。' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'Người sở hữu đứng trước の: ともだちのパソコン = máy tính của bạn tôi.',
              itemRef: { type: 'GRAMMAR', key: 'l2-no' },
            },
            {
              type: 'TRANSLATE_VI_JA',
              prompt: '「Đó là quyển từ điển tiếng Nhật.」 dịch sang tiếng Nhật:',
              data: {
                kind: 'choice',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'それはじしょですにほんご。' },
                  { id: 'o2', text: 'それはにほんごのじしょです。' },
                  { id: 'o3', text: 'それはにほんごはじしょです。' },
                  { id: 'o4', text: 'それはにほんごでじしょです。' },
                ],
              },
              correct: { optionId: 'o2' },
              explanation: 'にほんごのじしょ = từ điển tiếng Nhật.',
              itemRef: { type: 'GRAMMAR', key: 'l2-no' },
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
                promptJa: '× これはわたしはめいしです。',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'これはわたしのめいしです。' },
                  { id: 'o2', text: 'これはわたしはめいしのです。' },
                  { id: 'o3', text: 'わたしのはめいしです。' },
                  { id: 'o4', text: 'これはめいしのわたしです。' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'Giữa hai danh từ dùng の, không dùng は: わたしのめいし.',
            },
            {
              type: 'ERROR_CORRECTION',
              prompt: 'Câu nào sửa đúng?',
              data: {
                kind: 'choice',
                promptJa: '× あれはスミスさんカメラです。',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'あれはスミスさんのカメラです。' },
                  { id: 'o2', text: 'あれはカメラのスミスさんです。' },
                  { id: 'o3', text: 'あれはスミスさんをカメラです。' },
                  { id: 'o4', text: 'あれはスミスさんはカメラです。' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'Tên người + さん + の + danh từ: スミスさんのカメラ = máy ảnh của anh Smith.',
            },
          ],
        },
        {
          type: 'SENTENCE_ORDER',
          instructions: 'Sắp xếp các mảnh thành câu đúng.',
          questions: [
            {
              type: 'SENTENCE_ORDER',
              data: {
                kind: 'token-order',
                promptVi: 'Đây là chiếc đồng hồ của anh Tanaka.',
                tokens: [
                  { id: 't1', text: 'これ' },
                  { id: 't2', text: 'は' },
                  { id: 't3', text: 'たなかさんの' },
                  { id: 't4', text: 'とけい' },
                  { id: 't5', text: 'です。' },
                ],
                audioText: 'これはたなかさんのとけいです。',
              },
              correct: { tokenOrder: ['t1', 't2', 't3', 't4', 't5'] },
              explanation: 'これ は + たなかさんの (của anh Tanaka) + とけい + です.',
            },
            {
              type: 'SENTENCE_ORDER',
              data: {
                kind: 'token-order',
                promptVi: 'Kia là tờ báo tiếng Nhật.',
                tokens: [
                  { id: 't1', text: 'あれ' },
                  { id: 't2', text: 'は' },
                  { id: 't3', text: 'にほんご' },
                  { id: 't4', text: 'の' },
                  { id: 't5', text: 'しんぶん' },
                  { id: 't6', text: 'です。' },
                ],
                audioText: 'あれはにほんごのしんぶんです。',
              },
              correct: { tokenOrder: ['t1', 't2', 't3', 't4', 't5', 't6'] },
              explanation: 'あれ は + にほんごの (tiếng Nhật) + しんぶん + です.',
            },
          ],
        },
      ],
    },
    {
      key: 'l2-n4',
      title: 'Luyện nghe',
      description: 'Nghe chỉ đồ vật và nghe đoạn hội thoại ngắn.',
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
                audioText: 'それはトムさんのボールペンです。',
                meaningVi: 'Đó là bút bi của bạn Tom.',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'それはトムさんのボールペンです。' },
                  { id: 'o2', text: 'これはトムさんのボールペンです。' },
                  { id: 'o3', text: 'それはトムさんのえんぴつです。' },
                  { id: 'o4', text: 'あれはトムさんのカメラです。' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'Chú ý phân biệt これ・それ・あれ và ボールペン・えんぴつ.',
            },
            {
              type: 'LISTEN_SELECT',
              data: {
                kind: 'audio-choice',
                audioText: 'あれはわたしのかばんです。',
                meaningVi: 'Kia là chiếc cặp của tôi.',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'あれはわたしのかばんです。' },
                  { id: 'o2', text: 'あれはわたしのかさです。' },
                  { id: 'o3', text: 'これはわたしのかばんです。' },
                  { id: 'o4', text: 'あれはわたしたちのかばんです。' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'かばん (cặp) khác かさ (ô); chủ ngữ là あれ.',
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
                audioText: 'これはだれのノートですか。',
                meaningVi: 'Đây là quyển vở của ai?',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'Đây là quyển vở của ai?' },
                  { id: 'o2', text: 'Đây là quyển vở của tôi.' },
                  { id: 'o3', text: 'Đó là cuốn sách gì?' },
                  { id: 'o4', text: 'Cái kia là cái gì?' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'だれの = của ai; câu nghi vấn kết thúc bằng ですか.',
            },
            {
              type: 'LISTEN_SELECT',
              data: {
                kind: 'audio-choice',
                audioText: 'わたしのじしょはどれですか。',
                meaningVi: 'Quyển từ điển của tôi là quyển nào?',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'Quyển từ điển của tôi là quyển nào?' },
                  { id: 'o2', text: 'Đây là quyển từ điển của tôi.' },
                  { id: 'o3', text: 'Cái đó là từ điển tiếng Anh.' },
                  { id: 'o4', text: 'Quyển vở của bạn là quyển nào?' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'どれ hỏi "cái nào" khi có nhiều vật để chọn.',
              itemRef: { type: 'GRAMMAR', key: 'l2-dono' },
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
                audioText: 'すみません、それはあなたのスマートフォンですか。',
                meaningVi: 'Xin lỗi, đó là điện thoại thông minh của bạn à?',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'はい、これはわたしのスマートフォンです。' },
                  { id: 'o2', text: 'はい、それはわたしのスマートフォンです。' },
                  { id: 'o3', text: 'はい、あれはスマートフォンです。' },
                  { id: 'o4', text: 'いいえ、スマートフォンじゃありません。' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'Trả lời về vật ở gần mình (người nghe) → dùng これ.',
            },
          ],
        },
        {
          type: 'READING',
          instructions: 'Nghe hoặc đọc đoạn hội thoại rồi trả lời câu hỏi.',
          questions: [
            {
              type: 'READING',
              data: {
                kind: 'passage',
                title: 'だれのノート？',
                lines: [
                  {
                    speaker: 'サクラ',
                    text: 'それはリンさんのノートですか。',
                    vi: 'Đó là quyển vở của bạn Linh à?',
                  },
                  {
                    speaker: 'リン',
                    text: 'いいえ、これはわたしのノートじゃありません。トムさんのノートです。',
                    vi: 'Không, đây không phải vở của tôi. Là vở của bạn Tom.',
                  },
                  {
                    speaker: 'サクラ',
                    text: 'そうですか。あれはだれのかばんですか。',
                    vi: 'Vậy à. Kia là chiếc cặp của ai?',
                  },
                  {
                    speaker: 'リン',
                    text: 'あれはせんせいのかばんです。',
                    vi: 'Kia là chiếc cặp của thầy giáo.',
                  },
                ],
                questions: [
                  {
                    type: 'MULTIPLE_CHOICE',
                    prompt: '「これ」はだれのノートですか。',
                    data: {
                      kind: 'choice',
                      layout: 'list',
                      options: [
                        { id: 'o1', text: 'トムさんのノートです。' },
                        { id: 'o2', text: 'リンさんのノートです。' },
                        { id: 'o3', text: 'サクラさんのノートです。' },
                        { id: 'o4', text: 'せんせいのノートです。' },
                      ],
                    },
                    correct: { optionId: 'o1' },
                    explanation: 'Linh nói: これはわたしのノートじゃありません。トムさんのノートです。',
                  },
                  {
                    type: 'MULTIPLE_CHOICE',
                    prompt: '「あれ」はなんですか。',
                    data: {
                      kind: 'choice',
                      layout: 'list',
                      options: [
                        { id: 'o1', text: 'かばんです。' },
                        { id: 'o2', text: 'ノートです。' },
                        { id: 'o3', text: 'じしょです。' },
                        { id: 'o4', text: 'めいしです。' },
                      ],
                    },
                    correct: { optionId: 'o1' },
                    explanation: 'あれはせんせいのかばんです - kia là chiếc cặp của thầy giáo.',
                  },
                ],
              },
              correct: { score: 100 },
            },
          ],
        },
      ],
    },
    {
      key: 'l2-n5',
      title: 'Sắp xếp câu',
      description: 'Dựng câu hoàn chỉnh từ các mảnh chữ, có thêm mảnh gây nhiễu.',
      icon: 'ListOrdered',
      nodeType: 'SENTENCE',
      xpReward: 30,
      difficulty: 'EASY',
      exercises: [
        {
          type: 'SENTENCE_ORDER',
          instructions: 'Sắp xếp các mảnh thành câu đúng.',
          questions: [
            {
              type: 'SENTENCE_ORDER',
              data: {
                kind: 'token-order',
                promptVi: 'Đây là điện thoại thông minh của tôi.',
                tokens: [
                  { id: 't1', text: 'これ' },
                  { id: 't2', text: 'は' },
                  { id: 't3', text: 'わたし' },
                  { id: 't4', text: 'の' },
                  { id: 't5', text: 'スマートフォン' },
                  { id: 't6', text: 'です。' },
                ],
                audioText: 'これはわたしのスマートフォンです。',
              },
              correct: { tokenOrder: ['t1', 't2', 't3', 't4', 't5', 't6'] },
              explanation: 'これ は + わたしの + スマートフォン + です.',
            },
          ],
        },
        {
          type: 'SENTENCE_ORDER',
          instructions: 'Sắp xếp các mảnh thành câu đúng.',
          questions: [
            {
              type: 'SENTENCE_ORDER',
              data: {
                kind: 'token-order',
                promptVi: 'Cây ô của anh Tanaka là cây nào?',
                tokens: [
                  { id: 't1', text: 'たなかさんの' },
                  { id: 't2', text: 'かさ' },
                  { id: 't3', text: 'は' },
                  { id: 't4', text: 'どれ' },
                  { id: 't5', text: 'です。' },
                ],
                audioText: 'たなかさんのかさはどれですか。',
              },
              correct: { tokenOrder: ['t1', 't2', 't3', 't4', 't5'] },
              explanation: 'たなかさんのかさ (cây ô của anh Tanaka) là chủ đề, theo sau là は + どれ + です.',
              itemRef: { type: 'GRAMMAR', key: 'l2-dono' },
            },
          ],
        },
        {
          type: 'SENTENCE_ORDER',
          instructions: 'Sắp xếp các mảnh thành câu đúng. Coi chừng mảnh gây nhiễu.',
          questions: [
            {
              type: 'SENTENCE_ORDER',
              data: {
                kind: 'token-order',
                promptVi: 'Kia là chiếc đồng hồ của anh Smith.',
                tokens: [
                  { id: 't1', text: 'あれ' },
                  { id: 't2', text: 'は' },
                  { id: 't3', text: 'スミスさんの' },
                  { id: 't4', text: 'とけい' },
                  { id: 't5', text: 'です。' },
                ],
                distractors: [
                  { id: 'd1', text: 'を' },
                  { id: 'd2', text: 'へ' },
                ],
                audioText: 'あれはスミスさんのとけいです。',
              },
              correct: { tokenOrder: ['t1', 't2', 't3', 't4', 't5'] },
              explanation: 'Câu này dùng は; を và へ không dùng với あれ trong mẫu câu này.',
            },
          ],
        },
        {
          type: 'SENTENCE_ORDER',
          instructions: 'Sắp xếp các mảnh thành câu đúng. Coi chừng mảnh gây nhiễu.',
          questions: [
            {
              type: 'SENTENCE_ORDER',
              data: {
                kind: 'token-order',
                promptVi: 'Đó là cuốn tạp chí tiếng Nhật.',
                tokens: [
                  { id: 't1', text: 'それ' },
                  { id: 't2', text: 'は' },
                  { id: 't3', text: 'にほんご' },
                  { id: 't4', text: 'の' },
                  { id: 't5', text: 'ざっし' },
                  { id: 't6', text: 'です。' },
                ],
                distractors: [
                  { id: 'd1', text: 'を' },
                  { id: 'd2', text: 'に' },
                ],
                audioText: 'それはにほんごのざっしです。',
              },
              correct: { tokenOrder: ['t1', 't2', 't3', 't4', 't5', 't6'] },
              explanation: 'Nối hai danh từ bằng の: にほんごのざっし = tạp chí tiếng Nhật.',
              itemRef: { type: 'GRAMMAR', key: 'l2-no' },
            },
          ],
        },
      ],
    },
    {
      key: 'l2-n6',
      title: 'Boss Quiz',
      description: 'Bài kiểm tra tổng hợp cuối bài, cần đạt ít nhất 80% để vượt qua.',
      icon: 'Crown',
      nodeType: 'BOSS',
      xpReward: 60,
      requiredScore: 80,
      difficulty: 'MEDIUM',
      exercises: [
        {
          type: 'GRAMMAR_CHOICE',
          instructions: 'Chọn đáp án đúng nhất.',
          questions: [
            {
              type: 'GRAMMAR_CHOICE',
              prompt: 'Chọn từ thích hợp.',
              data: {
                kind: 'choice',
                promptJa: '（かばんは話し手のすぐ横にあります）＿＿はわたしのかばんです。',
                promptSub: 'Chiếc cặp ở ngay bên người nói.',
                layout: 'grid',
                options: [
                  { id: 'o1', text: 'これ' },
                  { id: 'o2', text: 'それ' },
                  { id: 'o3', text: 'あれ' },
                  { id: 'o4', text: 'どれ' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'Vật ở ngay cạnh người nói → これ.',
              itemRef: { type: 'GRAMMAR', key: 'l2-kore-wa' },
            },
            {
              type: 'GRAMMAR_CHOICE',
              prompt: 'Chọn trợ từ thích hợp.',
              data: {
                kind: 'choice',
                promptJa: 'これはにほんご＿＿ほんです。',
                layout: 'grid',
                options: [
                  { id: 'o1', text: 'の' },
                  { id: 'o2', text: 'は' },
                  { id: 'o3', text: 'を' },
                  { id: 'o4', text: 'で' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'にほんごのほん = quyển sách tiếng Nhật.',
              itemRef: { type: 'GRAMMAR', key: 'l2-no' },
            },
          ],
        },
        {
          type: 'FILL_BLANK',
          instructions: 'Điền từ đúng vào chỗ trống.',
          questions: [
            {
              type: 'FILL_BLANK',
              data: {
                kind: 'fill-blank',
                sentence: 'あなたのパソコンは＿＿ですか。 — あれです。',
                options: [
                  { id: 'o1', text: 'どれ' },
                  { id: 'o2', text: 'なん' },
                  { id: 'o3', text: 'だれ' },
                  { id: 'o4', text: 'これ' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'Hỏi chọn một vật trong nhiều vật → どれ.',
              itemRef: { type: 'GRAMMAR', key: 'l2-dono' },
            },
            {
              type: 'FILL_BLANK',
              prompt: 'Chú ý: vật đang nói tới ở xa cả hai người.',
              data: {
                kind: 'fill-blank',
                sentence: 'A: あれはなんですか。 B: ＿＿はとけいです。',
                options: [
                  { id: 'o1', text: 'あれ' },
                  { id: 'o2', text: 'これ' },
                  { id: 'o3', text: 'それ' },
                  { id: 'o4', text: 'どれ' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'Vật xa cả hai người → cả A và B đều gọi là あれ.',
            },
          ],
        },
        {
          type: 'MULTIPLE_CHOICE',
          instructions: 'Chọn nghĩa đúng của từ.',
          questions: [
            {
              type: 'MULTIPLE_CHOICE',
              prompt: '「じしょ」 nghĩa là gì?',
              data: {
                kind: 'choice',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'từ điển' },
                  { id: 'o2', text: 'báo' },
                  { id: 'o3', text: 'tạp chí' },
                  { id: 'o4', text: 'sách' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'じしょ (jisho) = từ điển.',
              itemRef: { type: 'VOCAB', key: 'じしょ' },
            },
            {
              type: 'MULTIPLE_CHOICE',
              prompt: '「めいし」 nghĩa là gì?',
              data: {
                kind: 'choice',
                layout: 'list',
                options: [
                  { id: 'o1', text: 'danh thiếp' },
                  { id: 'o2', text: 'bút chì' },
                  { id: 'o3', text: 'đồng hồ' },
                  { id: 'o4', text: 'cặp sách' },
                ],
              },
              correct: { optionId: 'o1' },
              explanation: 'めいし (meishi) = danh thiếp.',
              itemRef: { type: 'VOCAB', key: 'めいし' },
            },
          ],
        },
      ],
    },
  ],
}
