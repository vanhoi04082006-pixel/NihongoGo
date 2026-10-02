/**
 * NihongoGo — Irodori A1 · Bài 3: すうじ・じかん (Số, giờ, ngày tháng).
 * Nội dung GỐC 100% — không sao chép dialogue/ví dụ/bài tập có bản quyền.
 * Provenance: ORIGINAL_GENERATED · MACHINE_REVIEWED (validator + audit).
 */
import type { IrodoriLesson } from './types'

export const irodori3: IrodoriLesson = {
  order: 3,
  slug: 'irodori-3',
  title: 'すうじ・じかん — Số, giờ, ngày tháng',
  titleJa: 'すうじと じかん',
  description: 'Đếm số, hỏi giờ, đọc ngày tháng — bộ kỹ năng sinh tồn để bắt tàu, hẹn lịch và chốt thời gian với người Nhật.',
  learningObjectives: [
    'Đếm và ghép số 0–99.999',
    'Hỏi & nói giờ chính xác (kể cả các cách đọc đặc biệt)',
    'Đọc ngày tháng sinh nhật, lịch hẹn',
  ],
  grammarTopics: ['Ghép số & cách đọc đặc biệt (さんびゃく…)', '何時ですか — hỏi giờ', '〜月〜日 — tháng & ngày'],
  vocabularyTopics: ['Số đếm cơ bản', 'Từ hỏi thời gian (なんじ・なんがつ・なんにち)'],
  kanjiTopics: ['Kanji 一・二・三・十・百'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'ゼロ', romaji: 'zero', meaningVi: 'số 0', pos: 'số đếm', exampleJa: 'ゼロから はじめます。', exampleVi: 'Bắt đầu từ con số 0.' },
    { term: 'いち', romaji: 'ichi', meaningVi: 'số 1', pos: 'số đếm', exampleJa: 'ばんごうは いちです。', exampleVi: 'Số thứ tự là 1.' },
    { term: 'に', romaji: 'ni', meaningVi: 'số 2', pos: 'số đếm', exampleJa: 'つぎの ばんごうは にです。', exampleVi: 'Số tiếp theo là 2.' },
    { term: 'さん', romaji: 'san', meaningVi: 'số 3', pos: 'số đếm', exampleJa: 'へやの ばんごうは さんです。', exampleVi: 'Số phòng là 3.' },
    { term: 'よん', romaji: 'yon', meaningVi: 'số 4', pos: 'số đếm', exampleJa: 'バスは よんばんです。', exampleVi: 'Xe buýt số 4.' },
    { term: 'ご', romaji: 'go', meaningVi: 'số 5', pos: 'số đếm', exampleJa: 'ごふん まって ください。', exampleVi: 'Vui lòng đợi 5 phút.' },
    { term: 'ろく', romaji: 'roku', meaningVi: 'số 6', pos: 'số đếm', exampleJa: 'ろくじに おきます。', exampleVi: '6 giờ tôi dậy.' },
    { term: 'なな', romaji: 'nana', meaningVi: 'số 7', pos: 'số đếm', exampleJa: 'ホテルの へやは ななかいです。', exampleVi: 'Phòng khách sạn ở tầng 7.' },
    { term: 'はち', romaji: 'hachi', meaningVi: 'số 8', pos: 'số đếm', exampleJa: 'あさ はちじに でかけます。', exampleVi: 'Sáng 8 giờ tôi ra ngoài.' },
    { term: 'きゅう', romaji: 'kyū', meaningVi: 'số 9', pos: 'số đếm', exampleJa: 'きゅうふん かかります。', exampleVi: 'Mất 9 phút.' },
    { term: 'じゅう', romaji: 'jū', meaningVi: 'số 10', pos: 'số đếm', exampleJa: 'りんごを じゅうこ かいました。', exampleVi: 'Tôi mua 10 quả táo.' },
    { term: 'ひゃく', romaji: 'hyaku', meaningVi: 'trăm (100)', pos: 'số đếm', exampleJa: 'この ほんは ひゃくえんです。', exampleVi: 'Quyển sách này 100 yên.' },
    { term: 'せん', romaji: 'sen', meaningVi: 'nghìn (1.000)', pos: 'số đếm', exampleJa: 'せんえんを はらいました。', exampleVi: 'Tôi trả 1.000 yên.' },
    { term: 'まん', romaji: 'man', meaningVi: 'vạn (10.000)', pos: 'số đếm', exampleJa: 'じてんしゃは いちまんえんでした。', exampleVi: 'Chiếc xe đạp là 10.000 yên.' },
    { term: 'なん', romaji: 'nan', meaningVi: 'số mấy, bao nhiêu', pos: 'từ hỏi', exampleJa: 'でんわばんごうは なんですか。', exampleVi: 'Số điện thoại là số mấy?' },
    { term: 'なんじ', romaji: 'nanji', meaningVi: 'mấy giờ', pos: 'từ hỏi', exampleJa: 'なんじに ねますか。', exampleVi: 'Bạn đi ngủ lúc mấy giờ?' },
    { term: 'なんがつ', romaji: 'nangatsu', meaningVi: 'tháng mấy', pos: 'từ hỏi', exampleJa: 'なんがつに にほんへ きましたか。', exampleVi: 'Bạn đến Nhật vào tháng mấy?' },
    { term: 'なんにち', romaji: 'nannichi', meaningVi: 'ngày mấy', pos: 'từ hỏi', exampleJa: 'なんにちに かえりますか。', exampleVi: 'Bạn về vào ngày mấy?' },
  ],
  grammar: [
    {
      code: 'i3-kazu',
      title: 'Ghép số & các cách đọc đặc biệt',
      formation: '11–19: じゅう+[số] · 20–99: [số]+じゅう+[số] · 300: さんびゃく · 600: ろっぴゃく · 800: はっぴゃく · 3000: さんぜん · 8000: はっせん',
      explanationVi:
        'Số tiếng Nhật ghép rất logic: 21 = にじゅういち (hai-mười-một), 47 = よんじゅうなな. Chỉ cần nhớ các cách đọc BIẾN ĐỔI: 300 = さんびゃく (không phải さんひゃく), 600 = ろっぴゃく, 800 = はっぴゃく; 3.000 = さんぜん, 8.000 = はっせん. Riêng số 4 và 7 nên dùng よん・なな thay vì し・しち cho rõ ràng (し dễ nhầm với いち và nghe giống chữ "chết"). Giá tiền thêm えん phía sau: さんびゃくえん = 300 yên.',
      examples: [
        { ja: 'この ほんは さんびゃくえんです。', vi: 'Quyển sách này 300 yên.', tokens: ['この', 'ほん', 'は', 'さんびゃく', 'えん', 'です'] },
        { ja: 'きっぷは ろっぴゃくえんでした。', vi: 'Vé tàu là 600 yên.' },
        { ja: '47は「よんじゅうなな」と よみます。', vi: 'Số 47 đọc là "yon-jū-nana".' },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Số 25 đọc thế nào?',
          options: ['にじゅうご', 'ごじゅうに', 'ごにじゅう', 'にごじゅう'],
          answerIndex: 0, explanationVi: 'Hàng chục trước: にじゅう (20) + ご (5) = にじゅうご.',
        },
        {
          kind: 'choice', prompt: '300 yên đọc thế nào cho đúng?',
          options: ['さんひゃくえん', 'さんびゃくえん', 'さんぴゃくえん', 'みひゃくえん'],
          answerIndex: 1, explanationVi: 'Trước えん, さん+ひゃく biến thành さんびゃく (đọc ngắt "bya-ku").',
        },
        {
          kind: 'error', prompt: 'Cách đọc nào đúng cho số 68?',
          options: ['はちじゅうろく', 'ろくはちじゅう', 'ろくじゅうはち', 'はちろくじゅう'],
          answerIndex: 2, explanationVi: '60 = ろくじゅう, cộng 8 = はち → ろくじゅうはち. Ba đáp án kia đảo trật tự hàng chục/hàng đơn vị.',
        },
        {
          kind: 'fill', prompt: 'Điền số còn thiếu (14 = じゅう…)',
          sentence: '14は「じゅう___」と よみます。',
          options: ['しち', 'きゅう', 'ご', 'よん'],
          answerIndex: 3, explanationVi: '14 = 10 + 4 → じゅう + よん. しち là 7 (dễ nhầm).',
        },
      ],
    },
    {
      code: 'i3-nanji',
      title: '何時ですか — hỏi & nói giờ',
      formation: '[số]+じ + です · [giờ]+じ+[phút]+ふん(ぷん) · 〜じはん (…giờ rưỡi) · ごぜん/ごご + [giờ]',
      explanationVi:
        'Hỏi giờ: いま、なんじですか. BA cách đọc giờ PHẢI thuộc lòng: 4時 = よじ, 7時 = しちじ, 9時 = くじ (tuyệt đối không đọc きゅうじ). Phút dùng ふん, nhưng 1・3・6・8・10 phút đọc いっぷん・さんぷん・ろっぷん・はっぷん・じゅっぷん. 30 phút nói gọn là はん: くじはん = 9:30. Buổi sáng thêm ごぜん, buổi chiều/tối thêm ごご phía trước.',
      examples: [
        { ja: 'いま くじです。', vi: 'Bây giờ là 9 giờ.', tokens: ['いま', 'くじ', 'です'] },
        { ja: 'でんしゃは しちじはんです。', vi: 'Tàu là 7 giờ rưỡi.' },
        { ja: 'なんじまで しごとですか。', vi: 'Bạn làm việc đến mấy giờ?' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '"9 giờ tối" đọc thế nào cho đúng?',
          options: ['ごご くじ', 'ごご きゅうじ', 'ごぜん くじ', 'くじ はん'],
          answerIndex: 0, explanationVi: '9 giờ đọc đặc biệt là くじ (không phải きゅうじ); tối là ごご.',
        },
        {
          kind: 'error', prompt: 'Câu nói giờ nào đúng?',
          options: ['がっこうは ごぜんは はちじです。', 'がっこうは ごぜん はちじです。', 'がっこうは はちじ ごぜんです。', 'がっこう ごぜん はちじです。'],
          answerIndex: 1, explanationVi: 'ごぜん/ごご đứng NGAY TRƯỚC mốc giờ và sau trợ từ は: ごぜん + はちじ.',
        },
        {
          kind: 'fill', prompt: 'Điền từ (9:30)',
          sentence: 'くじ___です。',
          options: ['ごろ', 'ふん', 'はん', 'まで'],
          answerIndex: 2, explanationVi: 'はん = rưỡi (30 phút). ごろ = khoảng; ふん = phút; まで = đến.',
        },
        {
          kind: 'choice', prompt: '「なんじですか」 dùng để hỏi điều gì?',
          options: ['Thứ mấy', 'Ngày mấy', 'Bao nhiêu tiền', 'Mấy giờ'],
          answerIndex: 3, explanationVi: 'なんじ = mấy giờ. Thứ mấy / ngày mấy / bao nhiêu tiền là なんようび / なんにち / いくら.',
        },
        {
          kind: 'fill', prompt: 'Điền trợ từ (làm việc đến mấy giờ?)',
          sentence: 'しごとは なんじ___ですか。',
          options: ['まで', 'から', 'ごろ', 'に'],
          answerIndex: 0, explanationVi: 'まで = "đến" (điểm kết thúc). から = "từ" (điểm bắt đầu).',
        },
      ],
    },
    {
      code: 'i3-gatsu-nichi',
      title: '〜月〜日 — tháng & ngày',
      formation: '[số]+がつ (tháng) · [số]+にち (ngày) · đặc biệt: 1日=ついたち · 4日=よっか · 8日=ようか · 10日=とおか · 14日=じゅうよっか · 20日=はつか · 24日=にじゅうよっか · 4月=しがつ · 7月=しちがつ · 9月=くがつ',
      explanationVi:
        'Tháng = số + がつ, nhưng 4・7・9 tháng đọc đặc biệt: しがつ・しちがつ・くがつ. Ngày = số + にち, trừ nhóm "nhỏ": ついたち (1日), よっか (4日), ようか (8日), とおか (10日), じゅうよっか (14日), はつか (20日), にじゅうよっか (24日). Hỏi ngày sinh: たんじょうびは なんがつ なんにちですか. Ghi nhớ cặp dễ nhầm: よっか (4日) ≠ ようか (8日).',
      examples: [
        { ja: 'たんじょうびは さんがつ とおかです。', vi: 'Sinh nhật của tôi là ngày 10 tháng 3.', tokens: ['たんじょうび', 'は', 'さんがつ', 'とおか', 'です'] },
        { ja: 'しけんは しちがつ よっかです。', vi: 'Kỳ thi là ngày 4 tháng 7.' },
        { ja: 'なんがつ なんにちに にほんへ きましたか。', vi: 'Bạn đến Nhật vào tháng mấy, ngày mấy?' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '"Ngày 8 tháng 8" đọc thế nào?',
          options: ['はちがつ やっか', 'はちがつ ようか', 'はちがつ はちにち', 'ようがつ はちにち'],
          answerIndex: 1, explanationVi: '8日 = ようか (đọc đặc biệt); tháng 8 bình thường là はちがつ.',
        },
        {
          kind: 'error', prompt: 'Cách viết "1 tháng 4" nào đúng?',
          options: ['いちがつ よっか', 'しがつ いちにち', 'しがつ ついたち', 'よんがつ ついたち'],
          answerIndex: 2, explanationVi: 'Tháng 4 = しがつ; ngày 1 = ついたち. Ba đáp án kia sai tháng hoặc sai ngày.',
        },
        {
          kind: 'fill', prompt: 'Điền từ hỏi (ngày mấy?)',
          sentence: 'たんじょうびは なんがつ___ですか。',
          options: ['なんじ', 'なんさい', 'なんばん', 'なんにち'],
          answerIndex: 3, explanationVi: 'なんがつ なんにち = tháng mấy ngày mấy. なんじ hỏi giờ, なんさい hỏi tuổi.',
        },
        {
          kind: 'choice', prompt: 'Tháng 9 đọc là?',
          options: ['くがつ', 'きゅうがつ', 'ここのつがつ', 'つきがつ'],
          answerIndex: 0, explanationVi: '9月 = くがつ (không phải きゅうがつ).',
        },
        {
          kind: 'choice', prompt: 'はつか là ngày mấy?',
          options: ['Ngày 8', 'Ngày 20', 'Ngày 10', 'Ngày 2'],
          answerIndex: 1, explanationVi: 'はつか = 20日. Cẩn thận đừng nhầm với はち (số 8) hay ふつか (2日).',
        },
      ],
    },
  ],
  dialogue: {
    titleVi: 'Ở quầy nhà ga',
    situationVi: 'Mai hỏi nhân viên nhà ga về giờ tàu và lịch nghỉ.',
    lines: [
      { speaker: 'まい', text: 'すみません、つぎの でんしゃは なんじですか。', vi: 'Xin lỗi, chuyến tàu tiếp theo là mấy giờ ạ?' },
      { speaker: 'えきいん', text: 'つぎは ごご さんじです。', vi: 'Chuyến kế tiếp là 3 giờ chiều ạ.' },
      { speaker: 'まい', text: 'くうこうまで なんぷん かかりますか。', vi: 'Đi đến sân bay mất bao nhiêu phút ạ?' },
      { speaker: 'えきいん', text: 'ごふん です。', vi: '5 phút ạ.' },
      { speaker: 'まい', text: 'あさっては なんがつ なんにちですか。', vi: 'Ngày mốt là tháng mấy, ngày mấy ạ?' },
      { speaker: 'えきいん', text: 'じゅうがつ とおかです。', vi: 'Là ngày 10 tháng 10 ạ.' },
      { speaker: 'まい', text: 'その ひは やすみですか。', vi: 'Ngày đó có nghỉ không ạ?' },
      { speaker: 'えきいん', text: 'いいえ、へいじつです。でんしゃは あります。', vi: 'Không, đó là ngày thường. Vẫn có tàu ạ.' },
      { speaker: 'まい', text: 'どうも ありがとう ございました。', vi: 'Cảm ơn anh nhiều ạ.' },
    ],
    questions: [
      { questionVi: 'Chuyến tàu tiếp theo là mấy giờ?', choices: ['3 giờ sáng', '5 phút nữa', '3 giờ chiều', '10 giờ 10'], answerIndex: 2, explanationVi: 'Nhân viên nói: つぎは ごご さんじです = chuyến kế tiếp 3 giờ chiều.' },
      { questionVi: 'Đến sân bay mất bao lâu?', choices: ['3 phút', '10 phút', '30 phút', '5 phút'], answerIndex: 3, explanationVi: 'くうこうまで なんぷん かかりますか → ごふん です = 5 phút.' },
      { questionVi: 'Ngày mốt là ngày nào?', choices: ['10 tháng 10', '4 tháng 10', '10 tháng 1', '20 tháng 10'], answerIndex: 0, explanationVi: 'じゅうがつ とおか = 10/10. はつか (20日) và よっか (4日) là các ngày đặc biệt dễ nhầm.' },
    ],
  },
  listening: [
    { scriptJa: 'いま ごご さんじです。', meaningVi: 'Bây giờ là 3 giờ chiều.', choices: ['3 giờ sáng', '3 giờ chiều', '9 giờ tối', '1 giờ'], answerIndex: 1 },
    { scriptJa: 'でんしゃは はちじ はんです。', meaningVi: 'Tàu là 8 giờ rưỡi.', choices: ['8 giờ kém', '7 giờ rưỡi', '8 giờ rưỡi', '8 phút'], answerIndex: 2 },
    { scriptJa: 'たんじょうびは しちがつ むいかです。', meaningVi: 'Sinh nhật là ngày 6 tháng 7.', choices: ['7 tháng 6', '4 tháng 7', '6 giờ 7', '6 tháng 7'], answerIndex: 3 },
    { scriptJa: 'しけんは じゅうがつ にじゅうよっかです。', meaningVi: 'Kỳ thi là ngày 24 tháng 10.', choices: ['24 tháng 10', '20 tháng 10', '4 tháng 10', '14 tháng 10'], answerIndex: 0, dictation: true },
    { scriptJa: 'えきから うちまで さんじゅっぷん かかります。', meaningVi: 'Từ nhà ga về nhà mất 30 phút.', choices: ['13 phút', '30 phút', '3 phút', '300 phút'], answerIndex: 1, dictation: true },
  ],
  reading: {
    titleVi: 'まいさんの いちにち — Một ngày của Mai (theo giờ)',
    lines: [
      { text: 'まいさんの クラスは ごぜん くじに はじまります。', vi: 'Lớp của Mai bắt đầu vào 9 giờ sáng.' },
      { text: 'ひるやすみは じゅうにじから いちじまでです。', vi: 'Giờ nghỉ trưa từ 12 giờ đến 1 giờ.' },
      { text: 'こうぎは ごご さんじまでです。', vi: 'Bài giảng kết thúc lúc 3 giờ chiều.' },
      { text: 'がっこうは どようびと にちようびは やすみです。', vi: 'Thứ Bảy và Chủ nhật trường nghỉ.' },
      { text: 'でんしゃで がっこうへ いきます。えきまで じゅうぷん かかります。', vi: 'Tôi đi tàu đến trường. Đến nhà ga mất 10 phút.' },
      { text: 'あさは いつも はちじの でんしゃに のります。', vi: 'Buổi sáng tôi luôn đi chuyến tàu 8 giờ.' },
    ],
    questions: [
      { questionVi: 'Lớp của Mai bắt đầu lúc mấy giờ?', choices: ['10 giờ sáng', '12 giờ', '9 giờ sáng', '8 giờ'], answerIndex: 2, explanationVi: 'Dòng 1: ごぜん くじに はじまります — 9時 đọc là くじ.' },
      { questionVi: 'Nghỉ trưa kết thúc lúc mấy giờ?', choices: ['12 giờ', '3 giờ', '8 giờ', '1 giờ'], answerIndex: 3, explanationVi: 'Dòng 2: じゅうにじから いちじまで — đến (まで) 1 giờ.' },
      { questionVi: 'Buổi sáng Mai thường đi chuyến tàu mấy giờ?', choices: ['8 giờ', '9 giờ', '6 giờ', '10 giờ'], answerIndex: 0, explanationVi: 'Dòng cuối: はちじの でんしゃに のります = chuyến tàu 8 giờ.' },
    ],
  },
  speakSentences: [
    { ja: 'いま なんじですか。', vi: 'Bây giờ là mấy giờ?' },
    { ja: 'ごぜん くじです。', vi: '9 giờ sáng.' },
    { ja: 'でんしゃは しちじ はんです。', vi: 'Tàu là 7 giờ rưỡi.' },
    { ja: 'たんじょうびは さんがつ とおかです。', vi: 'Sinh nhật của tôi là 10 tháng 3.' },
    { ja: 'じゅうぷん まって ください。', vi: 'Xin vui lòng đợi 10 phút.' },
  ],
  translatePairs: [
    { ja: 'いま くじです。', vi: 'Bây giờ là 9 giờ.', tokens: ['いま', 'くじ', 'です'], distractors: ['きゅうじ'] },
    { ja: 'でんしゃは よじはんです。', vi: 'Tàu là 4 giờ rưỡi.', tokens: ['でんしゃ', 'は', 'よじ', 'はん', 'です'], distractors: ['よんじ'] },
    { ja: 'たんじょうびは なんがつ なんにちですか。', vi: 'Sinh nhật của bạn là tháng mấy, ngày mấy?', tokens: ['たんじょうび', 'は', 'なんがつ', 'なんにち', 'です', 'か'], distractors: ['なんじ'] },
    { ja: 'ひるやすみは じゅうにじからです。', vi: 'Nghỉ trưa bắt đầu từ 12 giờ.', tokens: ['ひるやすみ', 'は', 'じゅうにじ', 'から', 'です'], distractors: ['まで'] },
    { ja: 'きっぷは さんびゃくえんです。', vi: 'Vé tàu là 300 yên.', tokens: ['きっぷ', 'は', 'さんびゃく', 'えん', 'です'], distractors: ['さんひゃく'] },
  ],
  translateJaVi: [
    { ja: 'しごとは ごご ろくじまでです。', vi: 'Làm việc đến 6 giờ tối.', wrongVi: ['Làm việc từ 6 giờ tối.', 'Bây giờ là 6 giờ tối.', 'Nghỉ làm từ 6 giờ tối.', 'Làm việc được 6 tiếng.'] },
    { ja: 'いま しちじ はんです。', vi: 'Bây giờ là 7 giờ rưỡi.', wrongVi: ['Bây giờ là 7 giờ.', 'Bây giờ là 8 giờ rưỡi.', 'Bây giờ là 7 phút.', 'Bây giờ là 5 giờ rưỡi.'] },
    { ja: 'クラスは あさ はちじから はじまります。', vi: 'Lớp học bắt đầu từ 8 giờ sáng.', wrongVi: ['Lớp học kết thúc lúc 8 giờ sáng.', 'Lớp học kéo dài 8 tiếng.', 'Sáng nào cũng có 8 tiết học.', 'Lớp học bắt đầu từ 8 giờ tối.'] },
  ],
  wordBank: [
    { ja: 'こうえんは くじから さんじまでです。', vi: 'Công viên mở từ 9 giờ đến 3 giờ.', tokens: ['こうえん', 'は', 'くじ', 'から', 'さんじ', 'まで', 'です'], distractors: ['ひゃく'] },
    { ja: 'いま なんじですか。', vi: 'Bây giờ là mấy giờ?', tokens: ['いま', 'なんじ', 'です', 'か'], distractors: ['なんにち'] },
  ],
  kanji: ['一', '二', '三', '十', '百'],
  writingKana: ['ふ', 'ん', 'じ', 'か', 'う'],
}
