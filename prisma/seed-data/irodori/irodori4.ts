/**
 * NihongoGo — Irodori A1 · Bài 4: かいもの (Mua sắm & hỏi giá).
 * Nội dung GỐC 100% — không sao chép dialogue/ví dụ/bài tập có bản quyền.
 * Provenance: ORIGINAL_GENERATED · MACHINE_REVIEWED (validator + audit).
 */
import type { IrodoriLesson } from './types'

export const irodori4: IrodoriLesson = {
  order: 4,
  slug: 'irodori-4',
  title: 'かいもの — Mua sắm & hỏi giá',
  titleJa: 'かいもの',
  description: 'Hỏi giá, chỉ đồ muốn mua và nói số lượng — bộ câu sinh tồn cho siêu thị, cửa hàng tiện lợi và chợ ở Nhật.',
  learningObjectives: [
    'Hỏi giá bằng いくらですか và chỉ đồ bằng これ・それ・あれ',
    'Yêu cầu mua món mình muốn với 〜を ください',
    'Đếm số lượng mua bằng bộ đếm 〜つ (ひとつ・ふたつ…)',
  ],
  grammarTopics: ['これ・それ・あれ — chỉ đồ vật', 'いくらですか — hỏi giá', 'N を ください + bộ đếm 〜つ'],
  vocabularyTopics: ['Nơi mua sắm', 'Đồ ăn & đồ dùng', 'Từ hỏi giá いくら'],
  kanjiTopics: ['Kanji 買・千'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'みせ', romaji: 'mise', meaningVi: 'cửa hàng', pos: 'danh từ', exampleJa: 'みせで ふくを かいます。', exampleVi: 'Tôi mua quần áo ở cửa hàng.' },
    { term: 'スーパー', romaji: 'sūpā', meaningVi: 'siêu thị', pos: 'danh từ', exampleJa: 'スーパーで かいものを します。', exampleVi: 'Tôi đi mua sắm ở siêu thị.' },
    { term: 'コンビニ', romaji: 'konbini', meaningVi: 'cửa hàng tiện lợi', pos: 'danh từ', exampleJa: 'コンビニで ぎゅうにゅうを かいます。', exampleVi: 'Tôi mua sữa ở cửa hàng tiện lợi.' },
    { term: 'かいもの', romaji: 'kaimono', meaningVi: 'việc mua sắm', pos: 'danh từ', exampleJa: 'かいものを します。', exampleVi: 'Tôi đi mua sắm.' },
    { term: 'かいます', romaji: 'kaimasu', meaningVi: 'mua', pos: 'động từ nhóm 1', exampleJa: 'りんごを かいます。', exampleVi: 'Tôi mua táo.' },
    { term: 'これ', romaji: 'kore', meaningVi: 'cái này (gần tôi)', pos: 'đại từ chỉ thị', exampleJa: 'これは なんですか。', exampleVi: 'Cái này là gì?' },
    { term: 'それ', romaji: 'sore', meaningVi: 'cái đó (gần bạn)', pos: 'đại từ chỉ thị', exampleJa: 'それは わたしの ふくです。', exampleVi: 'Cái đó là quần áo của tôi.' },
    { term: 'あれ', romaji: 'are', meaningVi: 'cái kia (xa cả hai)', pos: 'đại từ chỉ thị', exampleJa: 'あれは えきです。', exampleVi: 'Cái kia là nhà ga.' },
    { term: 'この', romaji: 'kono', meaningVi: 'cái… này (đi kèm danh từ)', pos: 'đại từ chỉ thị', exampleJa: 'この りんごは せんえんです。', exampleVi: 'Quả táo này là 1.000 yên.' },
    { term: 'いくら', romaji: 'ikura', meaningVi: 'bao nhiêu tiền', pos: 'từ hỏi', exampleJa: 'これは いくらですか。', exampleVi: 'Cái này bao nhiêu tiền?' },
    { term: 'ぜんぶで', romaji: 'zenbu de', meaningVi: 'tổng cộng', pos: 'phó từ', exampleJa: 'ぜんぶで さんびゃくえんです。', exampleVi: 'Tổng cộng là 300 yên.' },
    { term: 'ふくろ', romaji: 'fukuro', meaningVi: 'túi (đựng đồ)', pos: 'danh từ', exampleJa: 'ふくろを おねがいします。', exampleVi: 'Cho tôi xin cái túi.' },
    { term: 'りんご', romaji: 'ringo', meaningVi: 'quả táo', pos: 'danh từ', exampleJa: 'りんごを みっつ ください。', exampleVi: 'Cho tôi ba quả táo.' },
    { term: 'みかん', romaji: 'mikan', meaningVi: 'quả cam (quýt Nhật)', pos: 'danh từ', exampleJa: 'みかんを ふたつ かいます。', exampleVi: 'Tôi mua hai quả cam.' },
    { term: 'ぎゅうにゅう', romaji: 'gyūnyū', meaningVi: 'sữa bò', pos: 'danh từ', exampleJa: 'ぎゅうにゅうを ひとつ ください。', exampleVi: 'Cho tôi một chai sữa.' },
    { term: 'パン', romaji: 'pan', meaningVi: 'bánh mì', pos: 'danh từ', exampleJa: 'パンを ふたつ ください。', exampleVi: 'Cho tôi hai ổ bánh mì.' },
    { term: 'ふく', romaji: 'fuku', meaningVi: 'quần áo', pos: 'danh từ', exampleJa: 'その ふくは たかいです。', exampleVi: 'Bộ quần áo đó đắt.' },
    { term: 'たかい', romaji: 'takai', meaningVi: 'đắt, cao', pos: 'tính từ い', exampleJa: 'この ふくは たかいです。', exampleVi: 'Bộ quần áo này đắt.' },
    { term: 'やすい', romaji: 'yasui', meaningVi: 'rẻ', pos: 'tính từ い', exampleJa: 'この パンは やすいです。', exampleVi: 'Ổ bánh mì này rẻ.' },
  ],
  grammar: [
    {
      code: 'i4-kore-sore-are',
      title: 'これ・それ・あれ — chỉ đồ vật',
      formation: 'これ (gần tôi) · それ (gần người nghe) · あれ (xa cả hai) · この + [danh từ]',
      explanationVi:
        'Tiếng Nhật chọn từ chỉ đồ theo KHOẢNG CÁCH: これ = cái này (trong tay hoặc gần tôi); それ = cái đó (gần người đối diện — nhân viên cầm trên tay cũng là それ); あれ = cái kia (xa cả hai, ví dụ kệ hàng bên kia cửa hàng). Muốn đi kèm danh từ thì dùng この/その/あの + danh từ: この りんご = quả táo này. Sai lầm kinh điển: これ りんご (sai — これ đứng độc lập, không ghép danh từ được).',
      examples: [
        { ja: 'これは わたしの ふくです。', vi: 'Đây là quần áo của tôi.', tokens: ['これ', 'は', 'わたし', 'の', 'ふく', 'です'] },
        { ja: 'これは いくらですか。', vi: 'Cái này bao nhiêu tiền?', tokens: ['これ', 'は', 'いくら', 'です', 'か'] },
        { ja: 'その みせは こんばんも やって います。', vi: 'Cửa hàng đó tối nay vẫn mở.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Nhân viên đang cầm món đồ trên tay (gần họ) — bạn (đứng đối diện) gọi món đó thế nào?',
          options: ['それを ください。', 'これを ください。', 'あれを ください。', 'ふくろを ください。'],
          answerIndex: 0, explanationVi: 'Đồ ở gần NGƯỜI NGHE (nhân viên) → それ. これ là đồ gần chính mình; あれ là đồ xa cả hai.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ',
          sentence: 'これ___ ひゃくえんです。',
          options: ['を', 'の', 'は', 'か'],
          answerIndex: 2, explanationVi: 'これは = "cái này thì…" → は đánh dấu chủ đề. を chỉ đi với tân ngữ của ください/かいます.',
        },
        {
          kind: 'fill', prompt: 'Điền từ (chiếc áo này là của tôi)',
          sentence: '___ ふくは わたしのです。',
          options: ['この', 'これ', 'それ', 'あれ'],
          answerIndex: 0, explanationVi: 'Đứng TRƯỚC danh từ ふく phải dùng この. これ/それ/あれ đứng độc lập, không ghép được với danh từ.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['これ パンは やすいです。', 'この パンは やすいです。', 'この は パンです。', 'これの パンは やすいです。'],
          answerIndex: 1, explanationVi: 'Danh từ パン cần この phía trước. これ + danh từ hoặc これの + danh từ đều sai cấu trúc.',
        },
        {
          kind: 'choice', prompt: 'あれ dùng để chỉ vật ở đâu?',
          options: ['Xa cả người nói lẫn người nghe', 'Trong tay người nói', 'Trên tay người nghe', 'Đồ đã bán hết'],
          answerIndex: 0, explanationVi: 'あれ/あの chỉ vật XA cả hai bên — ví dụ kệ hàng phía bên kia cửa hàng.',
        },
      ],
    },
    {
      code: 'i4-ikura-desu-ka',
      title: 'いくらですか — hỏi giá',
      formation: '[đồ] は + いくら + ですか · Trả lời: [số] + えん + です · ぜんぶで = tổng cộng',
      explanationVi:
        'Hỏi giá món đồ: これは いくらですか (cái này bao nhiêu tiền). Trả lời bằng số + えん: ひゃくえんです (100 yên). Đọc giá tiền dùng số đã học ở bài 3: さんびゃく (300), ろっぴゃく (600), せん (1.000), いちまん (10.000). Khi thanh toán nhiều món, nghe câu ぜんぶで 〜えんです — ぜんぶで nghĩa là "tổng cộng tất cả". Mua sắm Nhật phần lớn đã có giá niêm yết, nên câu này chủ yếu dùng ở chợ hoặc mua lẻ.',
      examples: [
        { ja: 'この ふくは いくらですか。', vi: 'Bộ quần áo này bao nhiêu tiền?' },
        { ja: 'それは さんぜんえんです。', vi: 'Cái đó là 3.000 yên.' },
        { ja: 'ぜんぶで せんごひゃくえんです。', vi: 'Tổng cộng 1.500 yên.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Hỏi giá chiếc áo — câu nào đúng?',
          options: ['この ふくは なんさいですか。', 'この ふくは だれですか。', 'この ふくは いくらですか。', 'この ふくは なんじですか。'],
          answerIndex: 2, explanationVi: 'いくら = bao nhiêu tiền. なんじ hỏi giờ, なんさい hỏi tuổi, だれ hỏi người — đều sai với giá tiền.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ (tổng cộng 1.000 yên)',
          sentence: 'ぜんぶ___ せんえんです。',
          options: ['を', 'で', 'と', 'も'],
          answerIndex: 1, explanationVi: 'ぜんぶで = "tổng tất cả" — で ở đây gộp các món thành một tổng.',
        },
        {
          kind: 'fill', prompt: 'Điền từ hỏi (cái này giá bao nhiêu?)',
          sentence: 'これは ___ですか。',
          options: ['なんじ', 'なんにち', 'なんがつ', 'いくら'],
          answerIndex: 3, explanationVi: 'いくら hỏi GIÁ. Ba từ còn lại hỏi giờ / ngày / tháng (đã học bài 3).',
        },
        {
          kind: 'error', prompt: 'Câu trả lời giá nào đúng?',
          options: ['ぜんぶで さんびゃくえん ですか。', 'さんびゃくえんを です。', 'ぜんぶで さんびゃくえん あります。', 'ぜんぶで さんびゃくえんです。'],
          answerIndex: 3, explanationVi: 'Trả lời giá = [số]えん + です, KHÔNG có か (か là dấu hỏi). を không đứng trước です.',
        },
        {
          kind: 'choice', prompt: 'Nghe "せんごひゃくえん" — giá bao nhiêu?',
          options: ['150 yên', '5.100 yên', '1.500 yên', '15.000 yên'],
          answerIndex: 2, explanationVi: 'せん (1.000) + ごひゃく (500) = 1.500 yên. Cẩn thận đừng nhầm せん (1.000) với まん (10.000).',
        },
      ],
    },
    {
      code: 'i4-o-kudasai',
      title: 'N を ください — cho tôi…',
      formation: '[đồ] + を + ください · [số]つ + ください: ひとつ・ふたつ・みっつ・よっつ・いつつ・むっつ・ななつ・やっつ・ここのつ・とお',
      explanationVi:
        'Câu mua hàng ngắn nhất tiếng Nhật: [đồ] を ください = "cho tôi…". Muốn nói số lượng, chèn bộ đếm 〜つ: りんごを みっつ ください = cho tôi 3 quả táo. Bộ 〜つ đọc đặc biệt ở 1–2 (ひとつ・ふたつ) và 8 (やっつ); 10 là とお. Với người và một số đồ dạng dài (bút, chai) dùng bộ đếm khác, nhưng ở mức A1 bộ 〜つ dùng được cho hầu hết đồ ở siêu thị. おねがいします cũng thay được ください để lịch sự hơn: ふくろを おねがいします.',
      examples: [
        { ja: 'りんごを ふたつ ください。', vi: 'Cho tôi hai quả táo.', tokens: ['りんご', 'を', 'ふたつ', 'ください'] },
        { ja: 'ぎゅうにゅうを ひとつ おねがいします。', vi: 'Cho tôi một chai sữa (lịch sự).' },
        { ja: 'これを ください。', vi: 'Cho tôi cái này.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Điền trợ từ',
          sentence: 'りんご___ みっつ ください。',
          options: ['を', 'は', 'の', 'で'],
          answerIndex: 0, explanationVi: 'Đồ muốn mua là tân ngữ của ください → を. は đánh dấu chủ đề, không phải tân ngữ.',
        },
        {
          kind: 'choice', prompt: 'Muốn mua 2 ổ bánh mì — nói thế nào?',
          options: ['パンを ふたり ください。', 'パンを に ください。', 'パンを ふたつ ください。', 'パンは ふたつ ください。'],
          answerIndex: 2, explanationVi: 'Hai ĐỒ VẬT = ふたつ. ふたり là hai NGƯỜI; dùng số trần (に) thiếu bộ đếm; は sai trợ từ ở đây.',
        },
        {
          kind: 'fill', prompt: 'Điền bộ đếm (bốn ổ bánh mì)',
          sentence: 'パンを ___ ください。',
          options: ['よっつ', 'とお', 'むっつ', 'やっつ'],
          answerIndex: 0, explanationVi: '4 = よっつ (đọc đặc biệt, không phải よんつ). むっつ = 6, やっつ = 8, とお = 10.',
        },
        {
          kind: 'error', prompt: 'Câu mua sữa nào đúng?',
          options: ['ぎゅうにゅうは ひとつ ください。', 'ぎゅうにゅうを ひとつです。', 'ひとつを ぎゅうにゅう ください。', 'ぎゅうにゅうを ひとつ ください。'],
          answerIndex: 3, explanationVi: 'Trật tự chuẩn: [đồ] を [số]つ ください. は sai trợ từ; ひとつです không phải câu yêu cầu.',
        },
        {
          kind: 'choice', prompt: '「とお」 là số mấy?',
          options: ['8', '10.000', '2', '10'],
          answerIndex: 3, explanationVi: 'とお = 10 (bộ 〜つ). Đừng nhầm với やっつ (8) hay とおい (xa).',
        },
      ],
    },
  ],
  dialogue: {
    titleVi: 'Ở quầy trái cây',
    situationVi: 'Mai mua trái cây ở siêu thị, hỏi giá với nhân viên quầy.',
    lines: [
      { speaker: 'まい', text: 'すみません。この りんごは いくらですか。', vi: 'Xin lỗi ạ. Quả táo này bao nhiêu tiền ạ?' },
      { speaker: 'みせのひと', text: 'りんごは ひとつ さんびゃくえんです。', vi: 'Táo là 300 yên một quả ạ.' },
      { speaker: 'まい', text: 'ちょっと たかいですね。それは いくらですか。', vi: 'Hơi đắt nhỉ. Cái đó bao nhiêu tiền ạ?' },
      { speaker: 'みせのひと', text: 'これは みかんです。ひとつ ひゃくごじゅうえんです。', vi: 'Đây là cam. 150 yên một quả ạ.' },
      { speaker: 'まい', text: 'じゃ、みっつ ください。', vi: 'Vậy thì cho tôi ba quả.' },
      { speaker: 'みせのひと', text: 'はい、みかんを みっつですね。', vi: 'Vâng, ba quả cam phải không ạ.' },
      { speaker: 'まい', text: 'ぎゅうにゅうも ひとつ ください。', vi: 'Cho tôi thêm một chai sữa nữa.' },
      { speaker: 'みせのひと', text: 'ぎゅうにゅうは ごひゃくえんです。ぜんぶで きゅうひゃくごじゅうえんです。', vi: 'Sữa là 500 yên. Tổng cộng 950 yên ạ.' },
      { speaker: 'まい', text: 'ふくろを おねがいします。ありがとうございました。', vi: 'Cho tôi xin cái túi. Cảm ơn anh nhiều ạ.' },
    ],
    questions: [
      { questionVi: 'Một quả táo giá bao nhiêu?', choices: ['300 yên', '150 yên', '500 yên', '950 yên'], answerIndex: 0, explanationVi: 'Nhân viên nói: りんごは ひとつ さんびゃくえんです = táo 300 yên một quả.' },
      { questionVi: 'Mai mua bao nhiêu quả cam?', choices: ['Ba quả', 'Hai quả', 'Một quả', 'Mười quả'], answerIndex: 0, explanationVi: 'Mai nói みっつ ください = cho tôi 3 quả (みっつ = 3 với bộ đếm 〜つ).' },
      { questionVi: 'Tổng cộng Mai trả bao nhiêu tiền?', choices: ['950 yên', '450 yên', '500 yên', '1.500 yên'], answerIndex: 0, explanationVi: '3 cam × 150 = 450, cộng sữa 500 → きゅうひゃくごじゅうえん = 950 yên.' },
    ],
  },
  listening: [
    { scriptJa: 'これは ひゃくえんです。', meaningVi: 'Cái này 100 yên.', choices: ['100 yên', '1.000 yên', '110 yên', '10 yên'], answerIndex: 0 },
    { scriptJa: 'その ふくは さんぜんえんです。', meaningVi: 'Bộ quần áo đó 3.000 yên.', choices: ['3.000 yên', '300 yên', '30.000 yên', '1.300 yên'], answerIndex: 0 },
    { scriptJa: 'りんごを みっつ ください。', meaningVi: 'Cho tôi ba quả táo.', choices: ['Ba quả táo', 'Hai quả táo', 'Sáu quả táo', 'Ba cái túi'], answerIndex: 0 },
    { scriptJa: 'ぜんぶで せんえんです。', meaningVi: 'Tổng cộng 1.000 yên.', choices: ['Tổng 1.000 yên', 'Tổng 100 yên', 'Tổng 10.000 yên', 'Tổng 1.100 yên'], answerIndex: 0, dictation: true },
    { scriptJa: 'この パンは やすいですね。', meaningVi: 'Ổ bánh mì này rẻ nhỉ.', choices: ['Bánh này rẻ nhỉ', 'Bánh này đắt nhỉ', 'Bánh này ngon nhỉ', 'Cho tôi hai ổ bánh'], answerIndex: 0, dictation: true },
  ],
  reading: {
    titleVi: 'まいさんの かいもの — Phiên mua sắm của Mai',
    lines: [
      { text: 'まいさんは スーパーで かいものを します。', vi: 'Mai đi mua sắm ở siêu thị.' },
      { text: 'りんごを ふたつ かいます。ひとつ ひゃくえんです。', vi: 'Cô mua hai quả táo. Một quả 100 yên.' },
      { text: 'ぎゅうにゅうも ひとつ かいます。ごひゃくえんです。', vi: 'Cô cũng mua một chai sữa. 500 yên.' },
      { text: 'パンも ふたつ かいます。ひとつ ひゃくごじゅうえんです。', vi: 'Cô mua thêm hai ổ bánh mì. Một ổ 150 yên.' },
      { text: 'ぜんぶで せんえんでした。', vi: 'Tổng cộng là 1.000 yên.' },
      { text: 'スーパーの ひとは「ありがとうございます」と いいました。', vi: 'Nhân viên siêu thị nói "Cảm ơn quý khách".' },
    ],
    questions: [
      { questionVi: 'Một quả táo ở siêu thị giá bao nhiêu?', choices: ['100 yên', '150 yên', '500 yên', '300 yên'], answerIndex: 0, explanationVi: 'Dòng 2: ひとつ ひゃくえんです = 100 yên một quả.' },
      { questionVi: 'Mai không mua món nào dưới đây?', choices: ['Cam', 'Táo', 'Sữa', 'Bánh mì'], answerIndex: 0, explanationVi: 'Bài đọc chỉ nhắc りんご・ぎゅうにゅう・パン — không có みかん.' },
      { questionVi: 'Tổng cộng Mai trả bao nhiêu?', choices: ['1.000 yên', '750 yên', '1.500 yên', '2.000 yên'], answerIndex: 0, explanationVi: 'Táo 2×100 + sữa 500 + bánh 2×150 = 200+500+300 = 1.000 yên (せんえん).' },
    ],
  },
  speakSentences: [
    { ja: 'これは いくらですか。', vi: 'Cái này bao nhiêu tiền?' },
    { ja: 'その ふくは さんぜんえんです。', vi: 'Bộ quần áo đó 3.000 yên.' },
    { ja: 'りんごを ふたつ ください。', vi: 'Cho tôi hai quả táo.' },
    { ja: 'ふくろを おねがいします。', vi: 'Cho tôi xin cái túi.' },
    { ja: 'ちょっと たかいですね。', vi: 'Hơi đắt nhỉ.' },
  ],
  translatePairs: [
    { ja: 'これは いくらですか。', vi: 'Cái này bao nhiêu tiền?', tokens: ['これ', 'は', 'いくら', 'です', 'か'], distractors: ['だれ'] },
    { ja: 'りんごを みっつ ください。', vi: 'Cho tôi ba quả táo.', tokens: ['りんご', 'を', 'みっつ', 'ください'], distractors: ['ふたつ'] },
    { ja: 'その パンは やすいです。', vi: 'Ổ bánh mì đó rẻ.', tokens: ['その', 'パン', 'は', 'やすい', 'です'], distractors: ['たかい'] },
    { ja: 'ぎゅうにゅうを ひとつ ください。', vi: 'Cho tôi một chai sữa.', tokens: ['ぎゅうにゅう', 'を', 'ひとつ', 'ください'], distractors: ['みっつ'] },
    { ja: 'ぜんぶで せんえんです。', vi: 'Tổng cộng là 1.000 yên.', tokens: ['ぜんぶ', 'で', 'せん', 'えん', 'です'], distractors: ['ひゃく'] },
  ],
  translateJaVi: [
    { ja: 'この みかんは ひとつ ひゃくえんです。', vi: 'Quả cam này 100 yên một quả.', wrongVi: ['Quả cam này 1.000 yên một quả.', 'Tôi mua 100 quả cam.', 'Cam này rất đắt.', 'Cho tôi một quả cam.'] },
    { ja: 'ふくは とても たかいです。', vi: 'Quần áo rất đắt.', wrongVi: ['Quần áo rất rẻ.', 'Tôi muốn mua quần áo.', 'Cái túi rất đắt.', 'Quần áo này vừa vặn.'] },
    { ja: 'すみません、これを ください。', vi: 'Xin lỗi, cho tôi cái này.', wrongVi: ['Xin lỗi, cái này bao nhiêu tiền?', 'Cảm ơn vì món quà.', 'Xin lỗi vì đã đến muộn.', 'Cho tôi xem cái kia.'] },
  ],
  wordBank: [
    { ja: 'それも ください。', vi: 'Cho tôi cái đó nữa.', tokens: ['それ', 'も', 'ください'], distractors: ['だれ'] },
    { ja: 'この りんごは たかいです。', vi: 'Quả táo này đắt.', tokens: ['この', 'りんご', 'は', 'たかい', 'です'], distractors: ['やすい'] },
  ],
  kanji: ['買', '千'],
  writingKana: ['か', 'い', 'そ', 'れ', 'つ'],
}
