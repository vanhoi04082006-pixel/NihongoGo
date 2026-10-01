/**
 * NihongoGo — Bài 4: 何時ですか (Thời gian & thời điểm).
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson4: CurriculumLesson = {
  order: 4,
  slug: 'l4-nanji-desu-ka',
  title: '何時ですか — Thời gian & thời điểm',
  titleJa: '何時ですか',
  description: 'Hỏi và nói giờ cụ thể, các mốc thời gian trong ngày, ngày trong tuần và khoảng thời gian với から〜まで.',
  learningObjectives: [
    'Hỏi và trả lời giờ phút chính xác',
    'Nói về khoảng thời gian với から〜まで',
    'Gọi tên các ngày trong tuần và thời điểm trong ngày',
  ],
  grammarTopics: ['Cấu trúc 今・何時ですか', 'Trợ từ から〜まで (từ... đến...)', 'N 時ごろ (khoảng... giờ)'],
  vocabularyTopics: ['Giờ phút và thời điểm trong ngày', 'Các ngày trong tuần', 'Lịch làm việc & nghỉ ngơi'],
  kanjiTopics: [],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'いま', romaji: 'ima', meaningVi: 'bây giờ, hiện tại', pos: 'danh từ', exampleJa: 'いま なんじですか。', exampleVi: 'Bây giờ là mấy giờ?' },
    { term: 'じかん', romaji: 'jikan', meaningVi: 'thời gian', pos: 'danh từ', exampleJa: 'すみません、じかんを おねがいします。', exampleVi: 'Xin lỗi, cho tôi hỏi giờ.' },
    { term: 'ごぜん', romaji: 'gozen', meaningVi: 'buổi sáng (AM)', pos: 'danh từ', exampleJa: 'がっこうは ごぜん はちじからです。', exampleVi: 'Trường học bắt đầu từ 8 giờ sáng.' },
    { term: 'ごご', romaji: 'gogo', meaningVi: 'buổi chiều (PM)', pos: 'danh từ', exampleJa: 'こうえんは ごご さんじまでです。', exampleVi: 'Công viên mở đến 3 giờ chiều.' },
    { term: 'はん', romaji: 'han', meaningVi: 'nửa (giờ, 30 phút)', pos: 'danh từ', exampleJa: 'いま くじ はんです。', exampleVi: 'Bây giờ là 9 giờ rưỡi.' },
    { term: 'なんじ', romaji: 'nanji', meaningVi: 'mấy giờ', pos: 'từ hỏi', exampleJa: 'しごとは なんじからですか。', exampleVi: 'Công việc bắt đầu từ mấy giờ?' },
    { term: 'なんようび', romaji: 'nanyōbi', meaningVi: 'thứ mấy, ngày thứ mấy', pos: 'từ hỏi', exampleJa: 'きょうは なんようびですか。', exampleVi: 'Hôm nay là thứ mấy?' },
    { term: 'げつようび', romaji: 'getsuyōbi', meaningVi: 'thứ Hai', pos: 'danh từ', exampleJa: 'げつようびは しごとです。', exampleVi: 'Thứ Hai là ngày làm việc.' },
    { term: 'かようび', romaji: 'kayōbi', meaningVi: 'thứ Ba', pos: 'danh từ', exampleJa: 'かようびも しごとです。', exampleVi: 'Thứ Ba cũng là ngày làm việc.' },
    { term: 'すいようび', romaji: 'suiyōbi', meaningVi: 'thứ Tư', pos: 'danh từ', exampleJa: 'すいようびは やすみです。', exampleVi: 'Thứ Tư là ngày nghỉ.' },
    { term: 'もくようび', romaji: 'mokuyōbi', meaningVi: 'thứ Năm', pos: 'danh từ', exampleJa: 'もくようびは なんじまでですか。', exampleVi: 'Thứ Năm (làm) đến mấy giờ?' },
    { term: 'きんようび', romaji: 'kinyōbi', meaningVi: 'thứ Sáu', pos: 'danh từ', exampleJa: 'きんようびは ごご やすみです。', exampleVi: 'Thứ Sáu chiều được nghỉ.' },
    { term: 'どようび', romaji: 'doyōbi', meaningVi: 'thứ Bảy', pos: 'danh từ', exampleJa: 'どようびも やすみです。', exampleVi: 'Thứ Bảy cũng được nghỉ.' },
    { term: 'にちようび', romaji: 'nichiyōbi', meaningVi: 'Chủ nhật', pos: 'danh từ', exampleJa: 'にちようびは やすみの ひです。', exampleVi: 'Chủ nhật là ngày nghỉ.' },
    { term: 'きょう', romaji: 'kyō', meaningVi: 'hôm nay', pos: 'danh từ', exampleJa: 'きょうは どようびです。', exampleVi: 'Hôm nay là thứ Bảy.' },
    { term: 'あした', romaji: 'ashita', meaningVi: 'ngày mai', pos: 'danh từ', exampleJa: 'あしたは にちようびです。', exampleVi: 'Ngày mai là Chủ nhật.' },
    { term: 'きのう', romaji: 'kinō', meaningVi: 'hôm qua', pos: 'danh từ', exampleJa: 'きのうは きんようびでした。', exampleVi: 'Hôm qua là thứ Sáu.' },
    { term: 'やすみ', romaji: 'yasumi', meaningVi: 'ngày nghỉ, kỳ nghỉ', pos: 'danh từ', exampleJa: 'あしたは やすみです。', exampleVi: 'Ngày mai là ngày nghỉ.' },
    { term: 'しゅうまつ', romaji: 'shūmatsu', meaningVi: 'cuối tuần', pos: 'danh từ', exampleJa: 'しゅうまつは なんようびですか。', exampleVi: 'Cuối tuần là những ngày thứ mấy?' },
    { term: 'ひるやすみ', romaji: 'hiruyasumi', meaningVi: 'giờ nghỉ trưa', pos: 'danh từ', exampleJa: 'ひるやすみは じゅうにじから いちじまでです。', exampleVi: 'Nghỉ trưa từ 12 giờ đến 1 giờ.' },
  ],
  grammar: [
    {
      code: 'l4-nanji-desu-ka',
      title: '今・何時ですか — Hỏi & nói giờ',
      formation: 'Số + じ / 〜ふん(ぷん) / 〜はん / ごぜん・ごご + 時刻 + です',
      explanationVi:
        'Để hỏi giờ dùng 「なんじですか」. Trả lời bằng mốc giờ + です. Sáng dùng ごぜん, chiều/tối dùng ごご; 30 phút dùng はん. Lưu ý cách đọc đặc biệt: 4 giờ = よじ (không读 よんじ), 7 giờ = しちじ, 9 giờ = くじ (không đọc きゅうじ).',
      examples: [
        { ja: 'いま さんじです。', vi: 'Bây giờ là 3 giờ.', tokens: ['いま', 'さんじ', 'です'] },
        { ja: 'いま ごぜん じゅういちじ はんです。', vi: 'Bây giờ là 11 giờ rưỡi sáng.', tokens: ['いま', 'ごぜん', 'じゅういちじ', 'はん', 'です'] },
        { ja: 'えきの しょくどうは ごご さんじです。', vi: 'Canteen nhà ga mở đến 3 giờ chiều (bây giờ là 3 giờ chiều).' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '「Bây giờ là 9 giờ tối.» nói thế nào cho đúng?',
          options: ['ごご くじです。', 'ごぜん くじです。', 'ごご きゅうじです。', 'くじ はんです。'],
          answerIndex: 0, explanationVi: '9 giờ đọc là くじ (không phải きゅうじ); tối là ごご.',
        },
        {
          kind: 'choice', prompt: '7:30 tối (7 giờ rưỡi tối) là:',
          options: ['ごご しちじ はんです。', 'ごご ななじ はんです。', 'ごぜん しちじ はんです。', 'ごご しちじです。'],
          answerIndex: 0, explanationVi: '7 giờ đọc しちじ; rưỡi thêm はん; tối là ごご.',
        },
        {
          kind: 'particle', prompt: 'Chọn từ hỏi đúng cho chỗ trống',
          sentence: 'いま ___ ですか。',
          options: ['なんじ', 'なんさい', 'だれ', 'どこ'],
          answerIndex: 0, explanationVi: 'Hỏi giờ dùng なんじ; なんさい hỏi tuổi, だれ hỏi người, どこ hỏi nơi.',
        },
        {
          kind: 'fill', prompt: 'Điền từ đúng (bây giờ là 6 giờ rưỡi)',
          sentence: 'いま ろくじ ___ です。',
          options: ['はん', 'ごろ', 'から', 'まで'],
          answerIndex: 0, explanationVi: 'はん = rưỡi (30 phút). ごろ = khoảng, から/まで = từ/đến.',
        },
        {
          kind: 'error', prompt: 'Câu nào nói giờ ĐÚNG ngữ pháp?',
          options: ['がっこうは ごぜん はちじです。', 'がっこうは ごぜんは はちじです。', 'がっこうは はちじ ごぜんです。', 'がっこうごぜん はちじです。'],
          answerIndex: 0, explanationVi: 'ごぜん/ごご đứng ngay trước mốc giờ: ごぜん + はちじ.',
        },
      ],
    },
    {
      code: 'l4-kara-made',
      title: 'N1 から N2 まで — từ... đến...',
      formation: 'N1 (thời gian) から N2 (thời gian) まで です',
      explanationVi:
        'から đánh dấu điểm bắt đầu, まで đánh dấu điểm kết thúc. Dùng cho giờ làm việc, giờ mở cửa, giờ học... Khác tiếng Việt, trợ từ đứng SAU mốc thời gian.',
      examples: [
        { ja: 'かいしゃは くじから ごご ろくじまでです。', vi: 'Công ty (làm việc) từ 9 giờ đến 6 giờ tối.', tokens: ['かいしゃ', 'は', 'くじ', 'から', 'ごご', 'ろくじ', 'まで', 'です'] },
        { ja: 'しょくどうは じゅういちじ はんから いちじまでです。', vi: 'Canteen mở từ 11 giờ rưỡi đến 1 giờ.' },
        { ja: 'にほんごの じゅぎょうは ごぜん はちじから ひるまでです。', vi: 'Tiếng Nhật học từ 8 giờ sáng đến trưa.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Điền trợ từ',
          sentence: 'デパートは じゅうじ ___ しちじまでです。',
          options: ['から', 'まで', 'ごろ', 'は'],
          answerIndex: 0, explanationVi: 'Điểm bắt đầu dùng から: 10時から.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ',
          sentence: 'ぎんこうは くじから さんじ ___ です。',
          options: ['まで', 'から', 'ごろ', 'の'],
          answerIndex: 0, explanationVi: 'Điểm kết thúc dùng まで: 3時まで.',
        },
        {
          kind: 'choice', prompt: '「Từ 9 giờ đến 5 giờ.» dùng から〜まで thế nào?',
          options: ['くじから ごじまで', 'くじまで ごじから', 'くじ ごごから ごじまで', 'くじに ごじを'],
          answerIndex: 0, explanationVi: 'から đứng sau giờ bắt đầu, まで đứng sau giờ kết thúc.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['ひるやすみは じゅうにじから いちじまでです。', 'ひるやすみは じゅうにじまで いちじからです。', 'ひるやすみは じゅうにじからが いちじまでです。', 'ひるやすみは じゅうにじ いちじ からまでです。'],
          answerIndex: 0, explanationVi: 'Trật tự đúng: [bắt đầu]から [kết thúc]まで.',
        },
        {
          kind: 'fill', prompt: 'Điền mẫu đúng (làm từ sáng đến tối)',
          sentence: 'あさ ___ ばん ___ しごとです。',
          options: ['から / まで', 'まで / から', 'ごろ / ごろ', 'に / で'],
          answerIndex: 0, explanationVi: 'あさから ばんまで = từ sáng đến tối.',
        },
      ],
    },
    {
      code: 'l4-goro',
      title: 'N 時ごろ — khoảng... giờ',
      formation: 'N 時 ごろ',
      explanationVi:
        'ごろ đứng sau mốc giờ để nói "khoảng". Ví dụ よる じゅうにじごろ = khoảng 12 giờ đêm. Không dùng ごろ khi muốn nói chính xác.',
      examples: [
        { ja: 'わたしは よる じゅうにじごろ ねます。', vi: 'Tôi ngủ khoảng 12 giờ đêm.', tokens: ['わたし', 'は', 'よる', 'じゅうにじごろ', 'ねます'] },
        { ja: 'かいしゃは あさ はちじごろからです。', vi: 'Công ty bắt đầu từ khoảng 8 giờ sáng.' },
        { ja: 'ひるやすみは じゅうにじごろからです。', vi: 'Nghỉ trưa bắt đầu từ khoảng 12 giờ.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'ごろ trong 「よる じゅうにじごろ」 có nghĩa là gì?',
          options: ['khoảng (không chính xác)', 'chính xác', 'trước', 'sau'],
          answerIndex: 0, explanationVi: 'ごろ = khoảng, làm mềm mốc thời gian.',
        },
        {
          kind: 'fill', prompt: 'Điền đúng (tôi về nhà khoảng 7 giờ tối)',
          sentence: 'うちに ごご しちじ ___ かえります。',
          options: ['ごろ', 'はん', 'から', 'です'],
          answerIndex: 0, explanationVi: 'ごろ đứng ngay sau mốc giờ: 7時ごろ.',
        },
        {
          kind: 'error', prompt: 'Câu nào đặt ごろ đúng chỗ?',
          options: ['よる じゅういちじごろです。', 'よる ごろ じゅういちじです。', 'よる じゅういち ごろです。', 'ごろ よる じゅういちじです。'],
          answerIndex: 0, explanationVi: 'ごろ bám sát mốc giờ: 11時ごろ.',
        },
        {
          kind: 'choice', prompt: 'Bạn hẹn bạn đến "khoảng 10 giờ". Nói thế nào?',
          options: ['じゅうじごろに きてください。', 'じゅうじにごろ きてください。', 'じゅうごろじ きてください。', 'ごろじゅうじ きてください。'],
          answerIndex: 0, explanationVi: 'Mốc giờ + ごろ; に trước động từ đến (bài sau học sâu hơn).',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Ở nhà ga',
      situationVi: 'Tanaka hỏi nhân viên nhà ga về giờ tàu.',
      lines: [
        { speaker: 'たなか', ja: 'すみません、かいさいの でんしゃは なんじですか。', vi: 'Xin lỗi, tàu đi Hải Tría mấy giờ ạ?' },
        { speaker: 'えきいん', ja: 'ごぜん はちじ はんと ごご さんじです。', vi: '8 giờ rưỡi sáng và 3 giờ chiều ạ.' },
        { speaker: 'たなか', ja: 'つぎの でんしゃは いまから なんじごろですか。', vi: 'Chuyến tàu kế tiếp khoảng mấy giờ ạ?' },
        { speaker: 'えきいん', ja: 'じゅうぶんごろ まいります。', vi: 'Khoảng 10 phút nữa sẽ đến ạ.' },
        { speaker: 'たなか', ja: 'しょくどうは なんじから なんじまでですか。', vi: 'Canteen mở từ mấy giờ đến mấy giờ ạ?' },
        { speaker: 'えきいん', ja: 'じゅういちじから ごご にじまでです。', vi: 'Từ 11 giờ đến 2 giờ chiều ạ.' },
        { speaker: 'たなか', ja: 'どうも ありがとう ございました。', vi: 'Cảm ơn anh nhiều.' },
      ],
    },
    {
      titleVi: 'Lịch làm việc',
      situationVi: 'Linh hỏi Tanaka về lịch làm việc ở công ty.',
      lines: [
        { speaker: 'リン', ja: 'たなかさんの かいしゃは なんじから なんじまでですか。', vi: 'Công ty của anh Tanaka làm từ mấy giờ đến mấy giờ?' },
        { speaker: 'たなか', ja: 'くじから ごご ろくじまでです。', vi: 'Từ 9 giờ đến 6 giờ tối.' },
        { speaker: 'リン', ja: 'しゅうまつも しごとですか。', vi: 'Cuối tuần cũng làm việc à?' },
        { speaker: 'たなか', ja: 'いいえ、どようびと にちようびは やすみです。', vi: 'Không, thứ Bảy và Chủ nhật được nghỉ.' },
        { speaker: 'リン', ja: 'ひるやすみは なんじごろですか。', vi: 'Nghỉ trưa khoảng mấy giờ?' },
        { speaker: 'たなか', ja: 'じゅうにじから いちじまでです。しょくどうも あっています。', vi: 'Từ 12 giờ đến 1 giờ. Cũng có canteen nữa.' },
        { speaker: 'リン', ja: 'いいですね。わたしの だいがくは ごぜん はちじからです。', vi: 'Tốt đấy. Đại học của tôi từ 8 giờ sáng.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'いま ごぜん くじ はんです。', meaningVi: 'Bây giờ là 9 giờ rưỡi sáng.', choices: ['9 giờ rưỡi sáng', '9 giờ rưỡi tối', '7 giờ rưỡi sáng', '12 giờ rưỡi'], answerIndex: 0 },
    { scriptJa: 'かいしゃは あさ くじから ごご ろくじまでです。', meaningVi: 'Công ty làm từ 9 giờ sáng đến 6 giờ tối.', choices: ['9:00 sáng – 6:00 tối', '9:00 tối – 6:00 sáng', '9:30 sáng – 6:00 tối', '6:00 sáng – 9:00 tối'], answerIndex: 0 },
    { scriptJa: 'きょうは すいようびです。あしたは もくようびです。', meaningVi: 'Hôm nay là thứ Tư. Ngày mai là thứ Năm.', choices: ['Thứ Tư', 'Thứ Năm', 'Thứ Ba', 'Thứ Sáu'], answerIndex: 0 },
    { scriptJa: 'あしたは やすみです。', meaningVi: 'Ngày mai là ngày nghỉ.', choices: ['Ngày mai nghỉ', 'Hôm nay nghỉ', 'Ngày mai đi làm', 'Hôm qua nghỉ'], answerIndex: 0, dictation: true },
    { scriptJa: 'しょくどうは じゅういちじ はんから いちじまでです。', meaningVi: 'Canteen mở từ 11 giờ rưỡi đến 1 giờ.', choices: ['11:30 – 1:00', '11:00 – 1:30', '1:00 – 11:30', '11:30 – 12:00'], answerIndex: 0, dictation: true },
  ],
  reading: {
    titleVi: 'Một ngày của Linh',
    lines: [
      { text: 'リンさんは だいがくの がくせいです。', vi: 'Linh là sinh viên đại học.' },
      { text: 'まいあさ しちじごろ おきます。', vi: 'Mỗi sáng Linh dậy khoảng 7 giờ.' },
      { text: 'だいがくは ごぜん はちじから ごご さんじまでです。', vi: 'Đại học học từ 8 giờ sáng đến 3 giờ chiều.' },
      { text: 'ひるやすみは じゅうにじから いちじまでです。', vi: 'Nghỉ trưa từ 12 giờ đến 1 giờ.' },
      { text: 'よる うちで にほんごを べんきょうします。', vi: 'Tối Linh học tiếng Nhật ở nhà.' },
      { text: 'どようびと にちようびは やすみです。', vi: 'Thứ Bảy và Chủ nhật được nghỉ.' },
    ],
    questions: [
      { questionVi: 'Linh dậy khoảng mấy giờ?', choices: ['7 giờ', '8 giờ', '12 giờ', '6 giờ'], answerIndex: 0, explanationVi: 'Đoạn nói しちじごろ おきます = dậy khoảng 7 giờ.' },
      { questionVi: 'Đại học của Linh học đến mấy giờ?', choices: ['3 giờ chiều', '1 giờ', '8 giờ sáng', '6 giờ tối'], answerIndex: 0, explanationVi: 'ごご さんじまで = đến 3 giờ chiều.' },
      { questionVi: 'Ngày nào Linh được nghỉ?', choices: ['Thứ Bảy và Chủ nhật', 'Thứ Hai và thứ Ba', 'Chỉ Chủ nhật', 'Không có'], answerIndex: 0, explanationVi: 'どようびと にちようびは やすみです.' },
    ],
  },
  speakSentences: [
    { ja: 'いま なんじですか。', vi: 'Bây giờ là mấy giờ?' },
    { ja: 'かいしゃは くじから ごご ろくじまでです。', vi: 'Công ty làm từ 9 giờ đến 6 giờ tối.' },
    { ja: 'きょうは どようびです。', vi: 'Hôm nay là thứ Bảy.' },
    { ja: 'あしたは やすみです。', vi: 'Ngày mai là ngày nghỉ.' },
  ],
  translatePairs: [
    { ja: 'いま なんじですか。', vi: 'Bây giờ là mấy giờ?', tokens: ['いま', 'なんじ', 'です', 'か'], distractors: ['どようび'] },
    { ja: 'かいしゃは くじから ごご ろくじまでです。', vi: 'Công ty (làm việc) từ 9 giờ đến 6 giờ tối.', tokens: ['かいしゃ', 'は', 'くじ', 'から', 'ごご', 'ろくじ', 'まで', 'です'], distractors: ['ごぜん'] },
    { ja: 'きょうは すいようびです。', vi: 'Hôm nay là thứ Tư.', tokens: ['きょう', 'は', 'すいようび', 'です'], distractors: ['あした'] },
    { ja: 'あしたは やすみです。', vi: 'Ngày mai là ngày nghỉ.', tokens: ['あした', 'は', 'やすみ', 'です'], distractors: ['きのう'] },
    { ja: 'いま ごご くじ はんです。', vi: 'Bây giờ là 9 giờ rưỡi tối.', tokens: ['いま', 'ごご', 'くじ', 'はん', 'です'], distractors: ['ごぜん'] },
  ],
  kanji: [],
}
