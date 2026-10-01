/**
 * NihongoGo — Bài 9: あります・います (Sự tồn tại & vị trí).
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson9: CurriculumLesson = {
  order: 9,
  slug: 'l9-su-ton-tai',
  title: 'あります・います — Sự tồn tại',
  titleJa: 'あります・います',
  description: 'Nói về sự tồn tại của đồ vật, người và động vật cùng vị trí của chúng.',
  learningObjectives: [
    'Dùng あります cho đồ vật vô tri',
    'Dùng います cho người và động vật',
    'Nói vị trí bằng các từ chỉ nơi chốn',
  ],
  grammarTopics: ['あります (đồ vật tồn tại)', 'います (người, động vật tồn tại)', 'Cấu trúc N に あります/います'],
  vocabularyTopics: ['Đồ vật trong phòng', 'Con vật thường gặp', 'Từ chỉ vị trí'],
  kanjiTopics: [],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'うえ', romaji: 'ue', meaningVi: 'trên, phía trên', pos: 'danh từ chỉ vị trí', exampleJa: 'つくえの うえに とけいが あります。', exampleVi: 'Trên bàn có đồng hồ.' },
    { term: 'した', romaji: 'shita', meaningVi: 'dưới, phía dưới', pos: 'danh từ chỉ vị trí', exampleJa: 'いすの したに ねこが います。', exampleVi: 'Dưới ghế có con mèo.' },
    { term: 'なか', romaji: 'naka', meaningVi: 'trong, bên trong', pos: 'danh từ chỉ vị trí', exampleJa: 'かばんの なかに さいふが あります。', exampleVi: 'Trong cặp có cái ví.' },
    { term: 'まえ', romaji: 'mae', meaningVi: 'trước, phía trước', pos: 'danh từ chỉ vị trí', exampleJa: 'えきの まえに コンビニが あります。', exampleVi: 'Trước nhà ga có cửa hàng tiện lợi.' },
    { term: 'うしろ', romaji: 'ushiro', meaningVi: 'sau, phía sau', pos: 'danh từ chỉ vị trí', exampleJa: 'いえの うしろに にわが あります。', exampleVi: 'Sau nhà có khu vườn.' },
    { term: 'ちかく', romaji: 'chikaku', meaningVi: 'gần, gần bên', pos: 'danh từ chỉ vị trí', exampleJa: 'うちの ちかくに こうえんが あります。', exampleVi: 'Gần nhà tôi có công viên.' },
    { term: 'となり', romaji: 'tonari', meaningVi: 'bên cạnh', pos: 'danh từ chỉ vị trí', exampleJa: 'つくえの となりに ベッドが あります。', exampleVi: 'Bên cạnh bàn có chiếc giường.' },
    { term: 'つくえ', romaji: 'tsukue', meaningVi: 'bàn (học, làm việc)', pos: 'danh từ', exampleJa: 'へやに つくえが あります。', exampleVi: 'Trong phòng có cái bàn.' },
    { term: 'いす', romaji: 'isu', meaningVi: 'ghế', pos: 'danh từ', exampleJa: 'テレビの まえに いすが あります。', exampleVi: 'Trước ti vi có chiếc ghế.' },
    { term: 'ベッド', romaji: 'beddo', meaningVi: 'giường', pos: 'danh từ', exampleJa: 'ベッドの したに くつが あります。', exampleVi: 'Dưới giường có đôi giày.' },
    { term: 'テレビ', romaji: 'terebi', meaningVi: 'ti vi', pos: 'danh từ', exampleJa: 'へやに テレビが あります。', exampleVi: 'Trong phòng có ti vi.' },
    { term: 'パソコン', romaji: 'pasokon', meaningVi: 'máy tính', pos: 'danh từ', exampleJa: 'つくえの うえに パソコンが あります。', exampleVi: 'Trên bàn có máy tính.' },
    { term: 'コンビニ', romaji: 'konbini', meaningVi: 'cửa hàng tiện lợi', pos: 'danh từ', exampleJa: 'こうえんの となりに コンビニが あります。', exampleVi: 'Bên cạnh công viên có cửa hàng tiện lợi.' },
    { term: 'トイレ', romaji: 'toire', meaningVi: 'nhà vệ sinh', pos: 'danh từ', exampleJa: 'レストランの なかに トイレが あります。', exampleVi: 'Trong nhà hàng có nhà vệ sinh.' },
    { term: 'さいふ', romaji: 'saifu', meaningVi: 'ví (đựng tiền)', pos: 'danh từ', exampleJa: 'この さいふは ちょっと たかいです。', exampleVi: 'Cái ví này hơi đắt.' },
    { term: 'かぎ', romaji: 'kagi', meaningVi: 'chìa khóa', pos: 'danh từ', exampleJa: 'つくえの うえに かぎが あります。', exampleVi: 'Trên bàn có chìa khóa.' },
    { term: 'にわ', romaji: 'niwa', meaningVi: 'vườn, khu vườn', pos: 'danh từ', exampleJa: 'にわに とりが います。', exampleVi: 'Trong vườn có con chim.' },
    { term: 'ねこ', romaji: 'neko', meaningVi: 'con mèo', pos: 'danh từ', exampleJa: 'へやに ねこが います。', exampleVi: 'Trong phòng có con mèo.' },
    { term: 'いぬ', romaji: 'inu', meaningVi: 'con chó', pos: 'danh từ', exampleJa: 'こうえんに いぬが います。', exampleVi: 'Trong công viên có con chó.' },
    { term: 'とり', romaji: 'tori', meaningVi: 'con chim', pos: 'danh từ', exampleJa: 'まどの まえに とりが います。', exampleVi: 'Trước cửa sổ có con chim.' },
    { term: 'こども', romaji: 'kodomo', meaningVi: 'trẻ con, đứa trẻ', pos: 'danh từ', exampleJa: 'びょういんに こどもが います。', exampleVi: 'Ở bệnh viện có trẻ con.' },
  ],
  grammar: [
    {
      code: 'l9-arimasu-ga',
      title: '(場所に) 物が あります — đồ vật tồn tại',
      formation: 'N (nơi chốn) に + N (đồ vật) が あります / ありません',
      explanationVi:
        'あります diễn tả sự tồn tại của đồ vật vô tri (sách, bàn, ti vi, cây cối...). Danh từ chỉ đồ vật đóng vai chủ ngữ tồn tại nên đi với trợ từ が (không dùng は hay を). Nơi chốn đứng trước, thêm に. Phủ định: ありません (thể ません của あります). Câu hỏi: 「N に 何が ありますか」.',
      examples: [
        { ja: 'つくえの うえに ほんが あります。', vi: 'Trên bàn có quyển sách.', tokens: ['つくえ', 'の', 'うえ', 'に', 'ほん', 'が', 'あります'] },
        { ja: 'こうえんに きが あります。', vi: 'Trong công viên có cây.' },
        { ja: 'この へやに テレビが ありません。', vi: 'Trong phòng này không có ti vi.' },
        { ja: 'つくえの うえに なにが ありますか。', vi: 'Trên bàn có gì?' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Điền trợ từ cho chủ ngữ tồn tại',
          sentence: 'つくえの うえに ほん ___ あります。',
          options: ['を', 'は', 'が', 'で'],
          answerIndex: 2, explanationVi: 'Chủ ngữ tồn tại (đồ vật) đi với が: ほんが あります. を chỉ dùng cho tân ngữ của động từ hành động.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ chỉ nơi chốn',
          sentence: 'へや ___ テレビが あります。',
          options: ['で', 'に', 'へ', 'と'],
          answerIndex: 1, explanationVi: 'Nơi chốn tồn tại thêm に: へやに テレビが あります.',
        },
        {
          kind: 'choice', prompt: '«Trên bàn có quyển sách.» câu nào đúng?',
          options: ['つくえの うえに ほんを あります。', 'つくえの うえは ほんが あります。', 'つくえの うえに ほんが います。', 'つくえの うえに ほんが あります。'],
          answerIndex: 3, explanationVi: 'Cấu trúc: つくえの うえに (nơi chốn) + ほんが (chủ ngữ + が) + あります. を sai vì あります không phải động từ hành động; います chỉ dùng cho người/động vật.',
        },
        {
          kind: 'choice', prompt: 'Danh từ nào dùng được với あります?',
          options: ['ねこ', 'ベッド', 'こども', 'いぬ'],
          answerIndex: 1, explanationVi: 'ベッド là đồ vật vô tri → ベッドが あります. ねこ, いぬ, こども là sinh vật → dùng います.',
        },
        {
          kind: 'error', prompt: 'Câu phủ định nào đúng?',
          options: ['この へやに テレビが ありません。', 'この へやに テレビが ありませんした。', 'この へやに テレビが ないです。', 'この へやに テレビが ありませんでした。'],
          answerIndex: 0, explanationVi: 'Phủ định của あります là ありません (thể ます/ません đã học ở bài 6). ないです là dạng của tính từ; ありませんでした là quá khứ (chưa học).',
        },
      ],
    },
    {
      code: 'l9-imasu',
      title: '(場所に) 人・動物が います — người & động vật tồn tại',
      formation: 'N (nơi chốn) に + N (người/động vật) が います / いません',
      explanationVi:
        'います diễn tả sự tồn tại của người và động vật — sinh vật có tri giác: こども, ねこ, いぬ, がくせい... Cấu trúc giống あります: nơi chốn に + người/động vật が います. Phủ định: いません. Lưu ý: đồ vật vô tri KHÔNG dùng います (không nói テレビが います). Câu hỏi về người: 「N に だれが いますか」.',
      examples: [
        { ja: 'こうえんに こどもが います。', vi: 'Trong công viên có trẻ con.', tokens: ['こうえん', 'に', 'こども', 'が', 'います'] },
        { ja: 'きょうしつに がくせいが います。', vi: 'Trong lớp học có sinh viên.' },
        { ja: 'にわに いぬが います。', vi: 'Trong vườn có con chó.' },
        { ja: 'みせに たなかさんが いません。', vi: 'Anh Tanaka không có ở cửa hàng.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '«Trong lớp học có sinh viên.» câu nào đúng?',
          options: ['きょうしつに がくせいが あります。', 'きょうしつに がくせいを います。', 'きょうしつに がくせいが います。', 'きょうしつに がくせいが いてます。'],
          answerIndex: 2, explanationVi: 'がくせい là người → dùng います: がくせいが います. あります chỉ cho đồ vật vô tri.',
        },
        {
          kind: 'choice', prompt: 'Danh từ nào dùng います?',
          options: ['とけい', 'パソコン', 'ベッド', 'いぬ'],
          answerIndex: 3, explanationVi: 'いぬ là động vật → いぬが います. Ba từ còn lại là đồ vật vô tri → あります.',
        },
        {
          kind: 'conjugate', prompt: 'Chia います sang phủ định: «Trong công viên không có trẻ con.»',
          sentence: 'こうえんに こどもが ___。',
          options: ['いません', 'ありません', 'いませんです', 'いますん'],
          answerIndex: 0, explanationVi: 'Phủ định của います là いません (thể ません). ありません chỉ dùng cho あります.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ cho chủ ngữ tồn tại (sinh vật)',
          sentence: 'にわ ___ いぬが います。',
          options: ['は', 'を', 'が', 'の'],
          answerIndex: 2, explanationVi: 'いぬ là chủ ngữ tồn tại → いぬが います.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['みせに たなかさんが いません。', 'みせに たなかさんが ありません。', 'みせに たなかさんが いませんです。', 'みせに たなかさんが いてます。'],
          answerIndex: 0, explanationVi: 'たなかさん là người: phủ định của います là いません. ありません dành cho đồ vật.',
        },
      ],
    },
    {
      code: 'l9-basho-ni',
      title: 'N1 の N2 に — cụm từ chỉ vị trí',
      formation: 'N (tham chiếu) の + うえ/した/なか/まえ/うしろ/ちかく/となり + に',
      explanationVi:
        'Để nói vị trí chính xác, ghép danh từ tham chiếu + の + từ chỉ vị trí: つくえの うえ (mặt bàn), いすの した (gầm ghế), えきの まえ (trước nhà ga), うちの ちかく (gần nhà). Trợ từ に đứng sau cụm vị trí để chỉ nơi tồn tại: つくえの うえに ほんが あります.',
      examples: [
        { ja: 'いすの したに ねこが います。', vi: 'Dưới ghế có con mèo.', tokens: ['いす', 'の', 'した', 'に', 'ねこ', 'が', 'います'] },
        { ja: 'かばんの なかに さいふが あります。', vi: 'Trong cặp có cái ví.' },
        { ja: 'えきの まえに コンビニが あります。', vi: 'Trước nhà ga có cửa hàng tiện lợi.' },
        { ja: 'うちの ちかくに こうえんが あります。', vi: 'Gần nhà tôi có công viên.' },
      ],
      drills: [
        {
          kind: 'fill', prompt: '«Dưới ghế có con mèo.» — điền từ chỉ vị trí',
          sentence: 'いすの ___に ねこが います。',
          options: ['うえ', 'した', 'なか', 'まえ'],
          answerIndex: 1, explanationVi: 'Dưới = した: いすの したに (dưới ghế). うえ = trên, なか = trong, まえ = trước.',
        },
        {
          kind: 'choice', prompt: '«Trong cặp có cái ví.» câu nào đúng?',
          options: ['かばんの なかで さいふが あります。', 'かばんの なかに さいふを あります。', 'かばんは なかに さいふが あります。', 'かばんの なかに さいふが あります。'],
          answerIndex: 3, explanationVi: 'Cụm vị trí かばんの なか + に, chủ ngữ さいふ + が, rồi あります. で là trợ từ phương tiện; を không dùng với あります.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['えきの まえで コンビニが あります。', 'えきの まえに コンビニが あります。', 'えきの まえは コンビニが あります。', 'えきに まえの コンビニが あります。'],
          answerIndex: 1, explanationVi: 'Sau cụm vị trí phải là に: えきの まえに. で chỉ phương tiện; に không chen vào giữa えきの と まえ.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ đứng sau cụm chỉ vị trí',
          sentence: 'うちの ちかく ___ こうえんが あります。',
          options: ['で', 'に', 'と', 'へ'],
          answerIndex: 1, explanationVi: 'Cụm vị trí (うちの ちかく = gần nhà) + に: うちの ちかくに こうえんが あります.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Tìm chiếc ví',
      situationVi: 'Linh đánh mất ví, Tanaka giúp tìm quanh phòng.',
      lines: [
        { speaker: 'リン', ja: 'たなかさん、わたしの さいふは どこですか。', vi: 'Anh Tanaka, ví của tôi đâu rồi?' },
        { speaker: 'たなか', ja: 'つくえの うえに ありますか。', vi: 'Trên bàn có không?' },
        { speaker: 'リン', ja: 'いいえ、つくえの うえに さいふが ありません。', vi: 'Không, trên bàn không có ví.' },
        { speaker: 'たなか', ja: 'じゃ、かばんの なかは どうですか。', vi: 'Vậy trong cặp thì sao?' },
        { speaker: 'リン', ja: 'あ、かばんの なかに さいふが あります。', vi: 'À, trong cặp có ví.' },
        { speaker: 'たなか', ja: 'ああ、そうですか。', vi: 'À, vậy à.' },
        { speaker: 'リン', ja: 'はい。さいふの なかに かぎも あります。', vi: 'Vâng. Trong ví còn có cả chìa khóa.' },
        { speaker: 'たなか', ja: 'じゃ、だいじょうぶです。', vi: 'Vậy là không sao rồi.' },
      ],
    },
    {
      titleVi: 'Đi dạo công viên',
      situationVi: 'Tanaka và Linh đi dạo công viên, quan sát xung quanh.',
      lines: [
        { speaker: 'たなか', ja: 'この こうえんは しずかですね。', vi: 'Công viên này yên tĩnh nhỉ.' },
        { speaker: 'リン', ja: 'はい。あ、にわに とりが います。', vi: 'Vâng. À, trong vườn có con chim.' },
        { speaker: 'たなか', ja: 'かわいいですね。', vi: 'Đáng yêu nhỉ.' },
        { speaker: 'リン', ja: 'こうえんに こどもも います。', vi: 'Trong công viên cũng có trẻ con.' },
        { speaker: 'たなか', ja: 'いぬも いますか。', vi: 'Có cả con chó nữa à?' },
        { speaker: 'リン', ja: 'いいえ、いぬは いません。ねこが います。', vi: 'Không, không có chó. Có con mèo.' },
        { speaker: 'たなか', ja: 'ちかくに コンビニも ありますか。', vi: 'Gần đây có cửa hàng tiện lợi không?' },
        { speaker: 'リン', ja: 'はい、えきの まえに あります。', vi: 'Có, ở trước nhà ga.' },
        { speaker: 'たなか', ja: 'じゃ、そこへ いきましょう。', vi: 'Vậy mình đến đó nhé.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'つくえの うえに とけいが あります。', meaningVi: 'Trên bàn có đồng hồ.', choices: ['Dưới bàn có đồng hồ', 'Trên bàn có đồng hồ', 'Trên bàn có ti vi', 'Trong tủ có đồng hồ'], answerIndex: 1 },
    { scriptJa: 'こうえんに こどもが います。', meaningVi: 'Trong công viên có trẻ con.', choices: ['Trong công viên có trẻ con', 'Trong công viên có con mèo', 'Trong lớp có trẻ con', 'Trong vườn có con chó'], answerIndex: 0 },
    { scriptJa: 'かばんの なかに さいふが ありません。', meaningVi: 'Trong cặp không có ví.', choices: ['Trong cặp có ví', 'Trên bàn không có ví', 'Trong cặp không có ví', 'Trong cặp không có chìa khóa'], answerIndex: 2 },
    { scriptJa: 'いすの したに ねこが います。', meaningVi: 'Dưới ghế có con mèo.', choices: ['Trên ghế có con mèo', 'Dưới ghế có con mèo', 'Dưới bàn có con chó', 'Sau ghế có con mèo'], answerIndex: 1, dictation: true },
    { scriptJa: 'うちの ちかくに こうえんが あります。', meaningVi: 'Gần nhà tôi có công viên.', choices: ['Sau nhà tôi có công viên', 'Gần trường có công viên', 'Gần nhà tôi có công viên', 'Gần nhà tôi có cửa hàng'], answerIndex: 2, dictation: true },
  ],
  reading: {
    titleVi: 'Căn phòng của Linh',
    lines: [
      { text: 'これは リンさんの へやです。', vi: 'Đây là phòng của Linh.' },
      { text: 'へやの なかに つくえと いすが あります。', vi: 'Trong phòng có bàn và ghế.' },
      { text: 'つくえの うえに パソコンが あります。', vi: 'Trên bàn có máy tính.' },
      { text: 'つくえの したに かばんが あります。', vi: 'Dưới bàn có chiếc cặp.' },
      { text: 'まどの ちかくに ベッドが あります。', vi: 'Gần cửa sổ có chiếc giường.' },
      { text: 'へやに ねこも います。ねこは ベッドの うえに います。', vi: 'Trong phòng còn có con mèo. Con mèo đang ở trên giường.' },
      { text: 'へやは ちいさいです。でも、とても きれいです。', vi: 'Phòng nhỏ. Nhưng rất sạch đẹp.' },
    ],
    questions: [
      { questionVi: 'Trên bàn có gì?', choices: ['Cái cặp', 'Con mèo', 'Chiếc giường', 'Máy tính'], answerIndex: 3, explanationVi: 'つくえの うえに パソコンが あります — trên bàn có máy tính (cặp thì ở dưới bàn, mèo thì trên giường).' },
      { questionVi: 'Con mèo đang ở đâu?', choices: ['Trên giường', 'Dưới bàn', 'Trong cặp', 'Gần cửa sổ'], answerIndex: 0, explanationVi: 'ねこは ベッドの うえに います — con mèo ở trên giường.' },
      { questionVi: 'Phòng của Linh thế nào?', choices: ['Rộng và sạch đẹp', 'Rất lớn', 'Không có cửa sổ', 'Nhỏ nhưng rất sạch đẹp'], answerIndex: 3, explanationVi: 'へやは ちいさいです。でも、とても きれいです — nhỏ nhưng rất sạch đẹp.' },
    ],
  },
  speakSentences: [
    { ja: 'つくえの うえに ほんが あります。', vi: 'Trên bàn có quyển sách.' },
    { ja: 'こうえんに こどもが います。', vi: 'Trong công viên có trẻ con.' },
    { ja: 'かばんの なかに さいふが あります。', vi: 'Trong cặp có cái ví.' },
    { ja: 'いすの したに ねこが います。', vi: 'Dưới ghế có con mèo.' },
  ],
  translatePairs: [
    { ja: 'つくえの うえに ほんが あります。', vi: 'Trên bàn có quyển sách.', tokens: ['つくえ', 'の', 'うえ', 'に', 'ほん', 'が', 'あります'], distractors: ['した'] },
    { ja: 'こうえんに こどもが います。', vi: 'Trong công viên có trẻ con.', tokens: ['こうえん', 'に', 'こども', 'が', 'います'], distractors: ['あります', 'ねこ'] },
    { ja: 'いすの したに ねこが います。', vi: 'Dưới ghế có con mèo.', tokens: ['いす', 'の', 'した', 'に', 'ねこ', 'が', 'います'], distractors: ['うえ'] },
    { ja: 'へやに テレビが ありません。', vi: 'Trong phòng không có ti vi.', tokens: ['へや', 'に', 'テレビ', 'が', 'ありません'], distractors: ['あります'] },
    { ja: 'えきの まえに コンビニが あります。', vi: 'Trước nhà ga có cửa hàng tiện lợi.', tokens: ['えき', 'の', 'まえ', 'に', 'コンビニ', 'が', 'あります'], distractors: ['うしろ'] },
  ],
  kanji: [],
}
