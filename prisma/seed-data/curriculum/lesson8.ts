/**
 * NihongoGo — Bài 8: い形容詞・な形容詞 (Tính từ い/な — miêu tả sự vật).
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson8: CurriculumLesson = {
  order: 8,
  slug: 'l8-tinh-tu-i-na',
  title: 'Tính từ い/な — Miêu tả sự vật',
  titleJa: 'い形容詞・な形容詞',
  description: 'Miêu tả người và sự vật bằng hai nhóm tính từ い và な, ở cả khẳng định lẫn phủ định.',
  learningObjectives: [
    'Phân biệt tính từ い và な',
    'Chia phủ định cho cả hai nhóm tính từ',
    'Nói cảm nhận về đồ vật, món ăn',
  ],
  grammarTopics: ['Tính từ い (khẳng định, phủ định)', 'Tính từ な (khẳng định, phủ định)', 'Trạng từ từ tính từ (〜く・〜に)'],
  vocabularyTopics: ['Tính từ cảm quan', 'Tính từ đánh giá', 'Từ cảm thán thường dùng'],
  kanjiTopics: [],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'たかい', romaji: 'takai', meaningVi: 'đắt, cao', pos: 'tính từ い', exampleJa: 'これは たかい とけいです。', exampleVi: 'Đây là chiếc đồng hồ đắt.' },
    { term: 'やすい', romaji: 'yasui', meaningVi: 'rẻ', pos: 'tính từ い', exampleJa: 'この かばんは やすいです。', exampleVi: 'Cái cặp này rẻ.' },
    { term: 'おおきい', romaji: 'ōkii', meaningVi: 'to, lớn', pos: 'tính từ い', exampleJa: 'きょうしつは おおきいです。', exampleVi: 'Lớp học thì to.' },
    { term: 'ちいさい', romaji: 'chiisai', meaningVi: 'nhỏ', pos: 'tính từ い', exampleJa: 'わたしの へやは ちいさいです。', exampleVi: 'Phòng của tôi nhỏ.' },
    { term: 'ひろい', romaji: 'hiroi', meaningVi: 'rộng', pos: 'tính từ い', exampleJa: 'この こうえんは ひろいです。', exampleVi: 'Công viên này rộng.' },
    { term: 'せまい', romaji: 'semai', meaningVi: 'chật, chật hẹp', pos: 'tính từ い', exampleJa: 'その へやは せまいです。', exampleVi: 'Căn phòng đó chật.' },
    { term: 'あたらしい', romaji: 'atarashii', meaningVi: 'mới', pos: 'tính từ い', exampleJa: 'わたしの じてんしゃは あたらしいです。', exampleVi: 'Xe đạp của tôi mới.' },
    { term: 'ふるい', romaji: 'furui', meaningVi: 'cũ', pos: 'tính từ い', exampleJa: 'この アパートは ふるいです。', exampleVi: 'Căn chung cư này cũ.' },
    { term: 'いい', romaji: 'ii', meaningVi: 'tốt, ổn', pos: 'tính từ い', exampleJa: 'この レストランは いいです。', exampleVi: 'Nhà hàng này ổn đấy.' },
    { term: 'あつい', romaji: 'atsui', meaningVi: 'nóng, nóng hổi', pos: 'tính từ い', exampleJa: 'この おちゃは あついです。', exampleVi: 'Trà này nóng.' },
    { term: 'つめたい', romaji: 'tsumetai', meaningVi: 'lạnh (đồ vật, đồ uống)', pos: 'tính từ い', exampleJa: 'この みずは つめたいです。', exampleVi: 'Nước này lạnh.' },
    { term: 'おいしい', romaji: 'oishii', meaningVi: 'ngon', pos: 'tính từ い', exampleJa: 'この りんごは おいしいです。', exampleVi: 'Quả táo này ngon.' },
    { term: 'まずい', romaji: 'mazui', meaningVi: 'dở, không ngon', pos: 'tính từ い', exampleJa: 'この コーヒーは まずいです。', exampleVi: 'Cà phê này dở.' },
    { term: 'しずか', romaji: 'shizuka', meaningVi: 'yên tĩnh', pos: 'tính từ な', exampleJa: 'よるの こうえんは しずかです。', exampleVi: 'Công viên buổi đêm yên tĩnh.' },
    { term: 'にぎやか', romaji: 'nigiyaka', meaningVi: 'nhộn nhịp, đông vui', pos: 'tính từ な', exampleJa: 'よるの まちは にぎやかです。', exampleVi: 'Phố buổi tối nhộn nhịp.' },
    { term: 'ゆうめい', romaji: 'yūmei', meaningVi: 'nổi tiếng', pos: 'tính từ な', exampleJa: 'ふじさんは ゆうめいです。', exampleVi: 'Núi Phú Sĩ nổi tiếng.' },
    { term: 'きれい', romaji: 'kirei', meaningVi: 'đẹp, sạch', pos: 'tính từ な', exampleJa: 'この はなは きれいです。', exampleVi: 'Bông hoa này đẹp.' },
    { term: 'べんり', romaji: 'benri', meaningVi: 'tiện lợi, tiện dùng', pos: 'tính từ な', exampleJa: 'この じてんしゃは べんりです。', exampleVi: 'Chiếc xe đạp này tiện dụng.' },
    { term: 'とても', romaji: 'totemo', meaningVi: 'rất', pos: 'phó từ', exampleJa: 'この かばんは とても おおきいです。', exampleVi: 'Cái cặp này rất to.' },
    { term: 'あまり', romaji: 'amari', meaningVi: 'không... lắm (đi với phủ định)', pos: 'phó từ', exampleJa: 'この みせは あまり ゆうめいじゃないです。', exampleVi: 'Cửa hàng này không nổi tiếng lắm.' },
    { term: 'ちょっと', romaji: 'chotto', meaningVi: 'hơi, một chút', pos: 'phó từ', exampleJa: 'これは ちょっと たかいです。', exampleVi: 'Cái này hơi đắt.' },
    { term: 'どう', romaji: 'dō', meaningVi: 'thế nào, ra sao', pos: 'từ hỏi', exampleJa: 'にほんの たべものは どうですか。', exampleVi: 'Đồ ăn Nhật thế nào?' },
  ],
  grammar: [
    {
      code: 'l8-i-keiyoushi',
      title: 'Tính từ い — 〜いです / 〜くないです',
      formation: 'い-adj + です (khẳng định) / い-adj: ~い → ~くないです (phủ định) / い-adj + N (trước danh từ)',
      explanationVi:
        'Tính từ い luôn kết thúc bằng い (たかい, ひろい, おいしい...). Đứng cuối câu: tính từ + です (たかいです). Phủ định: bỏ い rồi thêm くないです → たかくないです. Đứng trước danh từ thì giữ nguyên: たかい とけい. Đặc biệt: いい (tốt) chia phủ định là よくないです, không phải いくないです.',
      examples: [
        { ja: 'これは たかい とけいです。', vi: 'Đây là chiếc đồng hồ đắt.', tokens: ['これ', 'は', 'たかい', 'とけい', 'です'] },
        { ja: 'この へやは ひろいです。', vi: 'Căn phòng này rộng.' },
        { ja: 'わたしの へやは ひろくないです。', vi: 'Phòng của tôi không rộng.', tokens: ['わたし', 'の', 'へや', 'は', 'ひろくない', 'です'] },
        { ja: 'それは ふるい じてんしゃです。', vi: 'Đó là chiếc xe đạp cũ.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'Chia tính từ たかい sang phủ định: «Chiếc đồng hồ này không đắt.»',
          sentence: 'この とけいは ___です。',
          options: ['たかいじゃない', 'たかくない', 'たかがない', 'たかない'],
          answerIndex: 1, explanationVi: 'Tính từ い phủ định: bỏ い, thêm くないです → たかくないです.',
        },
        {
          kind: 'conjugate', prompt: 'Chia tính từ おいしい sang phủ định: «Quả táo này không ngon.»',
          sentence: 'この りんごは ___です。',
          options: ['おいしいじゃない', 'おいしない', 'おいしくない', 'おいしいがない'],
          answerIndex: 2, explanationVi: 'おいしい → おいしくないです (bỏ い, thêm くないです).',
        },
        {
          kind: 'choice', prompt: '«Phòng của tôi không rộng.» câu nào đúng?',
          options: ['わたしの へやは ひろいじゃないです。', 'わたしの へやは ひろくないです。', 'わたしの へやは ひろしくないです。', 'わたしの へやは ひろく ないでした。'],
          answerIndex: 1, explanationVi: 'ひろい là tính từ い → phủ định ひろくないです. Dạng ひろいじゃない chỉ dùng cho tính từ な.',
        },
        {
          kind: 'choice', prompt: 'Phủ định của いい (tốt, ổn) là gì?',
          options: ['いくないです', 'よいじゃないです', 'よくないです', 'いいじゃないです'],
          answerIndex: 2, explanationVi: 'いい là tính từ い bất quy tắc: phủ định là よくないです (không phải いくないです).',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng ngữ pháp?',
          options: ['この じてんしゃは あたらしいです。', 'この じてんしゃは あたらしいなです。', 'この じてんしゃは あたらしくです。', 'この じてんしゃは あたらしいじゃないです。'],
          answerIndex: 0, explanationVi: 'Tính từ い + です cho câu khẳng định: あたらしいです. な/じゃない là của tính từ な; あたらしく chỉ xuất hiện trong dạng phủ định あたらしくない.',
        },
      ],
    },
    {
      code: 'l8-na-keiyoushi',
      title: 'Tính từ な — 〜です / 〜じゃないです',
      formation: 'な-adj + です (khẳng định) / な-adj + じゃないです (phủ định) / な-adj + な + N (trước danh từ)',
      explanationVi:
        'Tính từ な (しずか, ゆうめい, にぎやか, きれい, べんり...) khi đứng cuối câu chỉ cần + です: しずかです. Phủ định: + じゃないです: しずかじゃないです. Khi đứng TRƯỚC danh từ phải thêm な: ゆうめいな まち. Cẩn thận: きれい, ゆうめい kết thúc bằng い nhưng vẫn là tính từ な → phủ định là きれいじゃないです, không phải きれいくないです.',
      examples: [
        { ja: 'この こうえんは とても しずかです。', vi: 'Công viên này rất yên tĩnh.', tokens: ['この', 'こうえん', 'は', 'とても', 'しずか', 'です'] },
        { ja: 'この みせは にぎやかじゃないです。', vi: 'Cửa hàng này không nhộn nhịp.' },
        { ja: 'きょうとは ゆうめいな まちです。', vi: 'Kyoto là thành phố nổi tiếng.', tokens: ['きょうと', 'は', 'ゆうめいな', 'まち', 'です'] },
        { ja: 'これは きれいな はなです。', vi: 'Đây là bông hoa đẹp.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'Chia tính từ しずか sang phủ định: «Công viên này không yên tĩnh.»',
          sentence: 'この こうえんは ___です。',
          options: ['しずかくない', 'しずかじゃない', 'しずかなかない', 'しずかない'],
          answerIndex: 1, explanationVi: 'Tính từ な phủ định: + じゃないです → しずかじゃないです. Dạng 〜くない chỉ dành cho tính từ い.',
        },
        {
          kind: 'choice', prompt: '«Cái này không đẹp.» (dùng きれい) — câu nào đúng?',
          options: ['きれいくないです', 'きれいなかったです', 'きれいじゃないです', 'きれいらないです'],
          answerIndex: 2, explanationVi: 'きれい kết thúc bằng い nhưng là tính từ な → phủ định きれいじゃないです.',
        },
        {
          kind: 'particle', prompt: 'Tính từ な đứng trước danh từ cần từ nối nào?',
          sentence: 'きょうとは ゆうめい ___ まちです。',
          options: ['い', 'な', 'の', 'で'],
          answerIndex: 1, explanationVi: 'Tính từ な trước danh từ thêm な: ゆうめいな まち (thành phố nổi tiếng).',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng ngữ pháp?',
          options: ['ここは しずかい まちです。', 'ここは しずかの まちです。', 'ここは しずか まちです。', 'ここは しずかな まちです。'],
          answerIndex: 3, explanationVi: 'しずか là tính từ な nên trước danh từ phải là しずかな まち. Dạng しずかい không tồn tại.',
        },
      ],
    },
    {
      code: 'l8-totemo-amari',
      title: 'とても / あまり — mức độ của tính từ',
      formation: 'とても + adj (khẳng định) / あまり + adj-phủ định',
      explanationVi:
        'とても = rất, chỉ dùng với câu khẳng định: とても たかいです. あまり = không...lắm, bắt buộc đi cùng phủ định: あまり たかくないです / あまり ゆうめいじゃないです. Nói あまり たかいです là sai. Ngoài ra ちょっと = hơi, một chút (với khẳng định): ちょっと たかいです.',
      examples: [
        { ja: 'この レストランは とても おいしいです。', vi: 'Nhà hàng này rất ngon.', tokens: ['この', 'レストラン', 'は', 'とても', 'おいしい', 'です'] },
        { ja: 'この カレーは あまり おいしくないです。', vi: 'Món cà ri này không ngon lắm.' },
        { ja: 'きょうは あまり あつくないです。', vi: 'Hôm nay không nóng lắm.', tokens: ['きょう', 'は', 'あまり', 'あつくない', 'です'] },
      ],
      drills: [
        {
          kind: 'fill', prompt: '«Cái cặp này không đắt lắm.» — điền từ còn thiếu',
          sentence: 'この かばんは ___ たかくないです。',
          options: ['とても', 'あまり', 'じゃない', 'にぎやか'],
          answerIndex: 1, explanationVi: 'あまり = không...lắm, luôn đi với phủ định: あまり たかくないです. とても chỉ dùng với khẳng định.',
        },
        {
          kind: 'choice', prompt: 'Câu nào dùng あまり ĐÚNG?',
          options: ['この みせは あまり ゆうめいです。', 'この みせは あまり ゆうめいじゃないです。', 'この みせは あまり とても ゆうめいです。', 'この みせは あまり ゆうめいでした。'],
          answerIndex: 1, explanationVi: 'あまり phải đi với phủ định: あまり ゆうめいじゃないです = không nổi tiếng lắm.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['この こうえんは とても しずかじゃないです。', 'この こうえんは あまり しずかです。', 'この こうえんは あまり しずかじゃないです。', 'この こうえんは とても しずくないです。'],
          answerIndex: 2, explanationVi: 'あまり + phủ định (あまり しずかじゃないです); とても + khẳng định (とても しずかです). Hai câu còn lại ghép sai cặp.',
        },
        {
          kind: 'choice', prompt: '«Rất rộng.» nói thế nào?',
          options: ['あまり ひろいです。', 'とても ひろいです。', 'とても ひろくないです。', 'あまり ひろくないです。'],
          answerIndex: 1, explanationVi: 'Rất + khẳng định → とても ひろいです. あまり ひろくないです nghĩa là «không rộng lắm».',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Ở cửa hàng đồng hồ',
      situationVi: 'Linh mua đồng hồ, nhân viên giới thiệu các mẫu.',
      lines: [
        { speaker: 'リン', ja: 'すみません、この とけいは あたらしいですか。', vi: 'Xin lỗi, chiếc đồng hồ này mới phải không ạ?' },
        { speaker: 'みせのひと', ja: 'はい、とても あたらしい とけいです。', vi: 'Vâng, là đồng hồ rất mới ạ.' },
        { speaker: 'リン', ja: 'これは ちょっと おおきいです。', vi: 'Chiếc này hơi to quá.' },
        { speaker: 'みせのひと', ja: 'じゃ、これは どうですか。ちいさい とけいです。', vi: 'Vậy còn chiếc này thế nào? Là đồng hồ nhỏ đấy ạ.' },
        { speaker: 'リン', ja: 'これは とても きれいです。', vi: 'Chiếc này rất đẹp.' },
        { speaker: 'みせのひと', ja: 'でも、ちょっと たかいです。', vi: 'Nhưng hơi đắt ạ.' },
        { speaker: 'リン', ja: 'そうですか。じゃ、これを ください。', vi: 'Vậy à. Thế thì cho tôi chiếc này.' },
        { speaker: 'みせのひと', ja: 'ありがとう ございます。', vi: 'Cảm ơn chị.' },
      ],
    },
    {
      titleVi: 'Ăn tối ở nhà hàng',
      situationVi: 'Linh hỏi ý kiến Tanaka về một nhà hàng, hai người cùng ăn tối.',
      lines: [
        { speaker: 'リン', ja: 'たなかさん、この レストランは どうですか。', vi: 'Anh Tanaka, nhà hàng này thế nào?' },
        { speaker: 'たなか', ja: 'とても おいしいです。でも、ちょっと たかいです。', vi: 'Rất ngon. Nhưng hơi đắt.' },
        { speaker: 'リン', ja: 'じゃ、はいりましょう。', vi: 'Vậy mình vào thôi.' },
        { speaker: 'たなか', ja: 'ここは しずかですね。とても いい レストランです。', vi: 'Ở đây yên tĩnh nhỉ. Là nhà hàng rất ổn.' },
        { speaker: 'リン', ja: 'はい。でも、あまり ゆうめいじゃないです。', vi: 'Đúng vậy. Nhưng không nổi tiếng lắm.' },
        { speaker: 'たなか', ja: 'この さかなは どうですか。', vi: 'Cá này thế nào?' },
        { speaker: 'リン', ja: 'とても おいしいです。でも、この スープは あまり あつくないです。', vi: 'Rất ngon. Nhưng món súp này không nóng lắm.' },
        { speaker: 'たなか', ja: 'そうですか。でも、この りんごは おいしいですよ。', vi: 'Vậy à. Nhưng quả táo này ngon đấy.' },
        { speaker: 'リン', ja: 'はい。とても おいしいです。', vi: 'Vâng. Rất ngon.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'この りんごは とても おいしいです。', meaningVi: 'Quả táo này rất ngon.', choices: ['Quả táo này không ngon lắm', 'Quả táo này rất đắt', 'Quả táo này rất ngon', 'Quả táo này rất nhỏ'], answerIndex: 2 },
    { scriptJa: 'わたしの へやは ひろくないです。せまいです。', meaningVi: 'Phòng của tôi không rộng. Chật đấy.', choices: ['Phòng của tôi rộng', 'Phòng của tôi chật', 'Phòng của tôi mới', 'Phòng của tôi đẹp'], answerIndex: 1 },
    { scriptJa: 'この レストランは あまり ゆうめいじゃないです。', meaningVi: 'Nhà hàng này không nổi tiếng lắm.', choices: ['Nhà hàng này rất nổi tiếng', 'Nhà hàng này không nổi tiếng lắm', 'Nhà hàng này rất yên tĩnh', 'Nhà hàng này hơi đắt'], answerIndex: 1 },
    { scriptJa: 'これは ちょっと たかい とけいです。', meaningVi: 'Đây là chiếc đồng hồ hơi đắt.', choices: ['Chiếc đồng hồ hơi đắt', 'Chiếc đồng hồ rất rẻ', 'Chiếc đồng hồ hơi cũ', 'Quả táo hơi đắt'], answerIndex: 0, dictation: true },
    { scriptJa: 'よるの こうえんは とても しずかです。', meaningVi: 'Công viên ban đêm rất yên tĩnh.', choices: ['Công viên ban đêm rất nhộn nhịp', 'Công viên ban ngày rất yên tĩnh', 'Công viên ban đêm rất yên tĩnh', 'Công viên không yên tĩnh lắm'], answerIndex: 2, dictation: true },
  ],
  reading: {
    titleVi: 'Đồ của Linh',
    lines: [
      { text: 'これは リンさんの とけいです。', vi: 'Đây là chiếc đồng hồ của Linh.' },
      { text: 'この とけいは あたらしいです。でも、ちょっと たかいです。', vi: 'Chiếc đồng hồ này mới. Nhưng hơi đắt.' },
      { text: 'リンさんの へやは ちいさいです。', vi: 'Phòng của Linh nhỏ.' },
      { text: 'でも、とても きれいです。', vi: 'Nhưng rất sạch đẹp.' },
      { text: 'リンさんの じてんしゃは ふるいです。でも、べんりです。', vi: 'Xe đạp của Linh cũ. Nhưng tiện đấy.' },
      { text: 'リンさんは まいあさ じてんしゃで だいがくへ いきます。', vi: 'Mỗi sáng Linh đi đại học bằng xe đạp.' },
      { text: 'だいがくは とても おおきいです。', vi: 'Đại học rất rộng.' },
    ],
    questions: [
      { questionVi: 'Chiếc đồng hồ của Linh như thế nào?', choices: ['Cũ nhưng tiện', 'Mới nhưng hơi đắt', 'Mới và rẻ', 'Cũ và đắt'], answerIndex: 1, explanationVi: 'とけいは あたらしいです。でも、ちょっと たかいです — mới nhưng hơi đắt.' },
      { questionVi: 'Phòng của Linh thế nào?', choices: ['Rộng và đẹp', 'Rất lớn', 'Nhỏ nhưng rất sạch đẹp', 'Cũ và chật'], answerIndex: 2, explanationVi: 'へやは ちいさいです。でも、とても きれいです — nhỏ nhưng rất sạch đẹp.' },
      { questionVi: 'Linh đi đại học bằng gì?', choices: ['Xe đạp', 'Tàu điện', 'Xe buýt', 'Đi bộ'], answerIndex: 0, explanationVi: 'じてんしゃで だいがくへ いきます = đi đại học bằng xe đạp.' },
    ],
  },
  speakSentences: [
    { ja: 'この こうえんは とても しずかです。', vi: 'Công viên này rất yên tĩnh.' },
    { ja: 'わたしの へやは ひろくないです。', vi: 'Phòng của tôi không rộng.' },
    { ja: 'これは あたらしい とけいです。', vi: 'Đây là chiếc đồng hồ mới.' },
    { ja: 'この レストランは あまり おいしくないです。', vi: 'Nhà hàng này không ngon lắm.' },
  ],
  translatePairs: [
    { ja: 'この こうえんは しずかです。', vi: 'Công viên này yên tĩnh.', tokens: ['この', 'こうえん', 'は', 'しずか', 'です'], distractors: ['にぎやか'] },
    { ja: 'わたしの へやは ひろくないです。', vi: 'Phòng của tôi không rộng.', tokens: ['わたし', 'の', 'へや', 'は', 'ひろくない', 'です'], distractors: ['せまい'] },
    { ja: 'これは たかい とけいです。', vi: 'Đây là chiếc đồng hồ đắt.', tokens: ['これ', 'は', 'たかい', 'とけい', 'です'], distractors: ['やすい'] },
    { ja: 'その まちは ゆうめいじゃないです。', vi: 'Thành phố đó không nổi tiếng.', tokens: ['その', 'まち', 'は', 'ゆうめい', 'じゃない', 'です'], distractors: ['とても'] },
    { ja: 'この みせは あまり にぎやかじゃないです。', vi: 'Cửa hàng này không nhộn nhịp lắm.', tokens: ['この', 'みせ', 'は', 'あまり', 'にぎやか', 'じゃない', 'です'], distractors: ['とても'] },
  ],
  kanji: [],
}
