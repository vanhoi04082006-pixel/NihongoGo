/**
 * NihongoGo — Irodori A1 · Bài 5: たべもの (Ăn uống & gọi món).
 * Nội dung GỐC 100% — không sao chép dialogue/ví dụ/bài tập có bản quyền.
 * Provenance: ORIGINAL_GENERATED · MACHINE_REVIEWED (validator + audit).
 */
import type { IrodoriLesson } from './types'

export const irodori5: IrodoriLesson = {
  order: 5,
  slug: 'irodori-5',
  title: 'たべもの — Ăn uống & gọi món',
  titleJa: 'たべもの',
  description: 'Vào nhà hàng, đọc menu, gọi món và tạm ứng những câu giao tiếp bàn ăn — bộ câu sống còn cho bụng đói ở Nhật.',
  learningObjectives: [
    'Gọi món lịch sự bằng 〜を おねがいします',
    'Liệt kê nhiều món một câu với と',
    'Đáp lời mời dùng thử món bằng いかがですか / けっこうです',
  ],
  grammarTopics: ['N を おねがいします — gọi món', 'A と B — liệt kê', '〜は いかがですか — mời & đề xuất'],
  vocabularyTopics: ['Món ăn Nhật', 'Đồ uống', 'Lời bàn ăn lịch sự'],
  kanjiTopics: ['Kanji 食・飲'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'レストラン', romaji: 'resutoran', meaningVi: 'nhà hàng', pos: 'danh từ', exampleJa: 'レストランで すしを たべます。', exampleVi: 'Tôi ăn sushi ở nhà hàng.' },
    { term: 'メニュー', romaji: 'menyū', meaningVi: 'thực đơn', pos: 'danh từ', exampleJa: 'メニューを おねがいします。', exampleVi: 'Cho tôi xin thực đơn.' },
    { term: 'たべます', romaji: 'tabemasu', meaningVi: 'ăn', pos: 'động từ nhóm 2', exampleJa: 'まいさんは すしを たべます。', exampleVi: 'Mai ăn sushi.' },
    { term: 'のみます', romaji: 'nomimasu', meaningVi: 'uống', pos: 'động từ nhóm 1', exampleJa: 'おちゃを のみます。', exampleVi: 'Tôi uống trà.' },
    { term: 'おいしい', romaji: 'oishii', meaningVi: 'ngon', pos: 'tính từ い', exampleJa: 'この ラーメンは おいしいです。', exampleVi: 'Món ramen này ngon.' },
    { term: 'すし', romaji: 'sushi', meaningVi: 'sushi (cơm cuốn cá)', pos: 'danh từ', exampleJa: 'すしを ふたつ ください。', exampleVi: 'Cho tôi hai phần sushi.' },
    { term: 'ラーメン', romaji: 'rāmen', meaningVi: 'mì ramen', pos: 'danh từ', exampleJa: 'ラーメンを たべます。', exampleVi: 'Tôi ăn ramen.' },
    { term: 'うどん', romaji: 'udon', meaningVi: 'mì udon', pos: 'danh từ', exampleJa: 'うどんは とても おいしいです。', exampleVi: 'Udon rất ngon.' },
    { term: 'おちゃ', romaji: 'ocha', meaningVi: 'trà (Nhật)', pos: 'danh từ', exampleJa: 'おちゃは ひゃくにじゅうえんです。', exampleVi: 'Trà là 120 yên.' },
    { term: 'みそしる', romaji: 'misoshiru', meaningVi: 'súp miso', pos: 'danh từ', exampleJa: 'みそしるも おいしいです。', exampleVi: 'Súp miso cũng ngon.' },
    { term: 'のみもの', romaji: 'nomimono', meaningVi: 'đồ uống', pos: 'danh từ', exampleJa: 'のみものは おちゃです。', exampleVi: 'Đồ uống là trà.' },
    { term: 'ごはん', romaji: 'gohan', meaningVi: 'cơm; bữa ăn', pos: 'danh từ', exampleJa: 'ごはんを たべます。', exampleVi: 'Tôi ăn cơm.' },
    { term: 'ていしょく', romaji: 'teishoku', meaningVi: 'phần cơm trưa (set)', pos: 'danh từ', exampleJa: 'ていしょくを おねがいします。', exampleVi: 'Cho tôi phần cơm set.' },
    { term: 'いらっしゃいませ', romaji: 'irasshaimase', meaningVi: 'chào mừng quý khách (nhà hàng/cửa hàng)', pos: 'lời nói lịch sự', exampleJa: 'みせの ひとは「いらっしゃいませ」と いいました。', exampleVi: 'Nhân viên cửa hàng nói "Chào mừng quý khách".' },
    { term: 'けっこうです', romaji: 'kekkō desu', meaningVi: 'không cần nữa, đủ rồi (từ chối lịch sự)', pos: 'lời nói lịch sự', exampleJa: 'デザートは けっこうです。', exampleVi: 'Món tráng miệng thì thôi ạ.' },
    { term: 'ごちそうさまでした', romaji: 'gochisōsama deshita', meaningVi: 'cảm ơn vì bữa ăn (nói khi ăn xong)', pos: 'lời nói lịch sự', exampleJa: 'まいさんは「ごちそうさまでした」と いいました。', exampleVi: 'Mai nói "Cảm ơn vì bữa ăn".' },
  ],
  grammar: [
    {
      code: 'i5-o-onegai-shimasu',
      title: 'N を おねがいします — cho tôi… (lịch sự)',
      formation: '[món/đồ] + を + おねがいします',
      explanationVi:
        'Ở nhà hàng, gọi món bằng [món] を おねがいします — lịch sự hơn ください một bậc: うどんを おねがいします = "cho tôi món udon ạ". Cấu trúc y hệt ください (tân ngữ + を) nên chỉ cần thay từ đuôi. Khi nhân viên mang món ra, đáp ありがとうございます. Ăn xong nói ごちそうさまでした — câu "đóng hộp" bữa ăn kiểu Nhật, nói to rõ để nhân viên nghe được.',
      examples: [
        { ja: 'メニューを おねがいします。', vi: 'Cho tôi xin thực đơn ạ.' },
        { ja: 'うどんと おちゃを おねがいします。', vi: 'Cho tôi udon và trà ạ.' },
        { ja: 'ごちそうさまでした。', vi: 'Cảm ơn vì bữa ăn ạ.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Gọi món udon một cách lịch sự — câu nào đúng?',
          options: ['うどんを たべますか。', 'うどんを おねがいします。', 'うどんは おねがいします。', 'うどんに おねがいします。'],
          answerIndex: 1, explanationVi: 'Món ăn là tân ngữ → を + おねがいします. たべますか là câu hỏi "ăn không?", không phải gọi món.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ',
          sentence: 'おちゃ___ おねがいします。',
          options: ['を', 'は', 'と', 'の'],
          answerIndex: 0, explanationVi: 'おちゃ là món được yêu cầu → を. と chỉ dùng khi liệt kê hai món trở lên.',
        },
        {
          kind: 'fill', prompt: 'Điền từ (yêu cầu món ramen một cách lịch sự)',
          sentence: 'ラーメンを ___します。',
          options: ['ください', 'おねがい', 'ありがとう', 'しつれい'],
          answerIndex: 1, explanationVi: 'ラーメンを おねがいします. ください không ghép với します; ありがとう là lời cảm ơn.',
        },
        {
          kind: 'error', prompt: 'Câu gọi sushi nào đúng?',
          options: ['すしは おねがいします。', 'すしを おねがいです。', 'すしを おねがいします。', 'おねがいを すしします。'],
          answerIndex: 2, explanationVi: 'Công thức cứng: [món] を おねがいします. Trợ từ は sai; おねがいです thiếu します; trật tự đảo sai hoàn toàn.',
        },
        {
          kind: 'choice', prompt: 'おねがいします so với ください thì thế nào?',
          options: ['おねがいします lịch sự hơn ください', 'ください lịch sự hơn おねがいします', 'hai câu khác nghĩa hoàn toàn', 'おねがいします chỉ dùng cho người nhà'],
          answerIndex: 0, explanationVi: 'Cả hai đều là "cho tôi…", nhưng おねがいします trang trọng hơn — an toàn khi gọi món với nhân viên nhà hàng.',
        },
      ],
    },
    {
      code: 'i5-to-listing',
      title: 'A と B — liệt kê "và"',
      formation: '[danh từ A] + と + [danh từ B] (lặp được: A と B と C)',
      explanationVi:
        'Muốn gọi nhiều món một lượt, nối các danh từ bằng と: ラーメンと おちゃ = "ramen VÀ trà". と đứng GIỮA các danh từ, còn trợ từ を/は của cả cụm đứng ở cuối: ラーメンと おちゃを おねがいします. Sai phổ biến: dùng は hay も để liệt kê (おちゃは ごはん ✗). Riêng も nghĩa là "cũng" (thêm một món khác) — đã gặp ở bài trước với ぎゅうにゅうも.',
      examples: [
        { ja: 'ラーメンと おちゃを ください。', vi: 'Cho tôi ramen và trà.', tokens: ['ラーメン', 'と', 'おちゃ', 'を', 'ください'] },
        { ja: 'ていしょくは ごはんと みそしるです。', vi: 'Phần set gồm cơm và súp miso.' },
        { ja: 'すしと うどんと ラーメンを たべます。', vi: 'Tôi ăn sushi, udon và ramen.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Điền trợ từ (ramen và trà)',
          sentence: 'ラーメン___ おちゃを ください。',
          options: ['は', 'と', 'で', 'に'],
          answerIndex: 1, explanationVi: 'と nối hai danh từ khi liệt kê. を đã có ở cuối cụm (おちゃを), không lặp lại ở giữa.',
        },
        {
          kind: 'choice', prompt: '"Trà và cơm" nói thế nào?',
          options: ['おちゃで ごはん', 'おちゃは ごはん', 'おちゃと ごはん', 'おちゃに ごはん'],
          answerIndex: 2, explanationVi: 'Liệt kê = A と B. で/に là trợ từ khác; A は B không phải phép liệt kê.',
        },
        {
          kind: 'fill', prompt: 'Điền trợ từ liệt kê (cơm và súp miso)',
          sentence: 'ごはん___ みそしるです。',
          options: ['の', 'か', 'と', 'も'],
          answerIndex: 2, explanationVi: 'ごはんと みそしる = cơm với súp miso. も là "cũng" — thêm món chứ không nối hai danh từ.',
        },
        {
          kind: 'error', prompt: 'Câu mô tả phần set nào đúng?',
          options: ['ていしょくは ごはんは みそしるです。', 'ていしょくは ごはんに みそしるです。', 'ていしょくと ごはんと みそしるです。', 'ていしょくは ごはんと みそしるです。'],
          answerIndex: 3, explanationVi: 'Chủ đề là ていしょく → は; hai món trong set nối bằng と. Câu 3 liệt kê cả "set" như một món — sai nghĩa.',
        },
        {
          kind: 'choice', prompt: 'Liệt kê ba món A, B, C nói thế nào?',
          options: ['A は B は C', 'A と B と C', 'A に B に C', 'A を B を C'],
          answerIndex: 1, explanationVi: 'と lặp được cho mọi số lượng danh từ: すしと うどんと ラーメン.',
        },
      ],
    },
    {
      code: 'i5-ikaga-desu-ka',
      title: '〜は いかがですか — mời & đề xuất',
      formation: '[món/đồ] + は + いかが + ですか · Từ chối: けっこうです · Nhận: おねがいします',
      explanationVi:
        'Nhân viên nhà hàng đề xuất bằng [món] は いかがですか = "Bạn dùng… nhé?" (dùng thử món hôm nay, món nổi bật…). いかが là cách nói lịch sự của どう. Đáp nhận: はい、おねがいします. Đáp từ chối lịch sự: けっこうです (đủ rồi ạ) — KHÔNG nói いえだめ (thô lỗ). Câu này cũng dùng để mời người khác khi bạn làm chủ: おちゃは いかがですか.',
      examples: [
        { ja: 'おちゃは いかがですか。', vi: 'Bạn dùng tách trà nhé?', tokens: ['おちゃ', 'は', 'いかが', 'です', 'か'] },
        { ja: 'デザートは いかがですか。', vi: 'Bạn dùng món tráng miệng nhé?' },
        { ja: 'けっこうです。ありがとうございます。', vi: 'Thôi đủ rồi ạ. Cảm ơn anh/chị.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Nhân viên hỏi「おちゃは いかがですか」— câu này nghĩa là gì?',
          options: ['Trà giá bao nhiêu?', 'Trà của ai?', 'Bạn dùng trà nhé? (lời mời)', 'Bạn có biết pha trà không?'],
          answerIndex: 2, explanationVi: '[Món] は いかがですか = lời MỜI dùng món. Hỏi giá là いくらですか.',
        },
        {
          kind: 'choice', prompt: 'Muốn từ chối món tráng miệng một cách lịch sự?',
          options: ['おいしいです。', 'たべますです。', 'いかがですか。', 'けっこうです。'],
          answerIndex: 3, explanationVi: 'けっこうです = "đủ rồi, không cần nữa" — từ chối mềm mại. いかがですか là lời mời (dùng khi MỜI người khác).',
        },
        {
          kind: 'fill', prompt: 'Điền từ (mời cà phê)',
          sentence: 'コーヒーは ___ですか。',
          options: ['いくら', 'なん', 'どちら', 'いかが'],
          answerIndex: 3, explanationVi: 'いかがですか = mời dùng thử. いくら hỏi giá; なん/どちら hỏi thông tin.',
        },
        {
          kind: 'error', prompt: 'Câu mời dùng món nào đúng?',
          options: ['デザートを いかがですか。', 'デザートは いかがを ですか。', 'デザートは いかがですか。', 'デザートが いかがです。'],
          answerIndex: 2, explanationVi: 'Món được mời là CHỦ ĐỀ → は; いかがですか là khối cố định. が sai trợ từ, thiếu か thì mất nghĩa hỏi.',
        },
        {
          kind: 'choice', prompt: 'いかが liên quan đến どう thế nào?',
          options: ['いかが lịch sự hơn どう', 'いかが và どう khác nghĩa', 'いかが chỉ dùng hỏi giá', 'どう không dùng được trong câu hỏi'],
          answerIndex: 0, explanationVi: 'いかが = どう ở bậc lịch sự — nhà hàng dùng với khách, mình dùng khi mời người lớn tuổi.',
        },
      ],
    },
  ],
  dialogue: {
    titleVi: 'Trưa ở nhà hàng udon',
    situationVi: 'Mai bước vào một tiệm udon gần trường, gọi món trưa.',
    lines: [
      { speaker: 'みせのひと', text: 'いらっしゃいませ。どうぞ、こちらへ。', vi: 'Chào mừng quý khách. Mời quý khách bên này.' },
      { speaker: 'まい', text: 'ありがとうございます。メニューを おねがいします。', vi: 'Cảm ơn anh. Cho em xin thực đơn ạ.' },
      { speaker: 'みせのひと', text: 'はい、どうぞ。うどんは おいしいですよ。', vi: 'Vâng, đây ạ. Udon nhà mình ngon lắm đó.' },
      { speaker: 'まい', text: 'じゃ、うどんと おちゃを おねがいします。', vi: 'Vậy cho em udon và trà ạ.' },
      { speaker: 'みせのひと', text: 'うどんと おちゃですね。', vi: 'Udon với trà, đúng không ạ.' },
      { speaker: 'まい', text: 'すみません、すしも おねがいします。', vi: 'Xin lỗi, cho em thêm sushi nữa ạ.' },
      { speaker: 'みせのひと', text: 'はい。デザートは いかがですか。', vi: 'Vâng ạ. Bạn dùng món tráng miệng nhé?' },
      { speaker: 'まい', text: 'いいえ、けっこうです。', vi: 'Thôi, đủ rồi ạ.' },
      { speaker: 'まい', text: 'ごちそうさまでした。とても おいしかったです。', vi: 'Cảm ơn anh vì bữa ăn. Món rất ngon ạ.' },
    ],
    questions: [
      { questionVi: 'Mai gọi những gì ngay từ đầu?', choices: ['Udon và trà', 'Udon và sushi', 'Cơm và trà', 'Sushi và tráng miệng'], answerIndex: 0, explanationVi: 'うどんと おちゃを おねがいします — と liệt kê hai món đầu tiên; sushi gọi THÊM ở lượt sau.' },
      { questionVi: 'Nhân viên gợi ý món gì thêm cho Mai?', choices: ['Món tráng miệng', 'Sushi', 'Cơm set', 'Trà'], answerIndex: 0, explanationVi: 'デザートは いかがですか = lời mời dùng món tráng miệng.' },
      { questionVi: 'Mai đáp lời mời đó thế nào?', choices: ['Từ chối lịch sự', 'Đồng ý ngay', 'Hỏi lại giá', 'Gọi thêm hai phần'], answerIndex: 0, explanationVi: 'けっこうです = "đủ rồi, không cần nữa" — cách từ chối mềm mại chuẩn nhà hàng.' },
    ],
  },
  listening: [
    { scriptJa: 'ラーメンを おねがいします。', meaningVi: 'Cho tôi món ramen ạ.', choices: ['Tôi gọi món ramen', 'Tôi gọi món udon', 'Tôi uống trà', 'Cảm ơn vì bữa ăn'], answerIndex: 0 },
    { scriptJa: 'おちゃと みそしるを ください。', meaningVi: 'Cho tôi trà và súp miso.', choices: ['Cho tôi trà và súp miso', 'Cho tôi trà và cơm', 'Cho tôi sữa và súp miso', 'Cho tôi hai chén trà'], answerIndex: 0 },
    { scriptJa: 'この すしは おいしいですね。', meaningVi: 'Sushi này ngon nhỉ.', choices: ['Sushi này ngon nhỉ', 'Sushi này đắt nhỉ', 'Tôi muốn ăn sushi', 'Sushi này rẻ nhỉ'], answerIndex: 0 },
    { scriptJa: 'ごはんを おねがいします。', meaningVi: 'Cho tôi cơm ạ.', choices: ['Cho tôi cơm', 'Cho tôi trà', 'Cho tôi bánh mì', 'Cho tôi nước'], answerIndex: 0, dictation: true },
    { scriptJa: 'おちゃは いかがですか。', meaningVi: 'Bạn dùng trà nhé?', choices: ['Bạn dùng trà nhé? (mời)', 'Trà giá bao nhiêu?', 'Trà rất ngon', 'Cho tôi một chén trà'], answerIndex: 0, dictation: true },
  ],
  reading: {
    titleVi: 'ラーメンの みせ — Tiệm ramen của ông Yamada',
    lines: [
      { text: 'この レストランは ラーメンの みせです。', vi: 'Nhà hàng này là tiệm ramen.' },
      { text: 'ラーメンは はっぴゃくえんです。', vi: 'Ramen là 800 yên.' },
      { text: 'ていしょくは ごひゃくえんです。ごはんと みそしるです。', vi: 'Phần set là 500 yên. Gồm cơm và súp miso.' },
      { text: 'おちゃは ひゃくにじゅうえんです。', vi: 'Trà là 120 yên.' },
      { text: 'まいさんは ラーメンを たべます。おちゃも のみます。', vi: 'Mai ăn ramen. Cô cũng uống trà.' },
      { text: 'ぜんぶで きゅうひゃくにじゅうえんです。', vi: 'Tổng cộng là 920 yên.' },
    ],
    questions: [
      { questionVi: 'Phần set (ていしょく) gồm những gì?', choices: ['Cơm và súp miso', 'Ramen và trà', 'Cơm và ramen', 'Súp miso và trà'], answerIndex: 0, explanationVi: 'Dòng 3: ごはんと みそしるです — と liệt kê cơm + súp miso.' },
      { questionVi: 'Một tô ramen giá bao nhiêu?', choices: ['800 yên', '500 yên', '120 yên', '920 yên'], answerIndex: 0, explanationVi: 'Dòng 2: ラーメンは はっぴゃくえんです = 800 yên.' },
      { questionVi: 'Mai tổng cộng trả bao nhiêu?', choices: ['920 yên', '800 yên', '620 yên', '1.420 yên'], answerIndex: 0, explanationVi: 'Ramen 800 + trà 120 = 920 yên (きゅうひゃくにじゅうえん).' },
    ],
  },
  speakSentences: [
    { ja: 'メニューを おねがいします。', vi: 'Cho tôi xin thực đơn.' },
    { ja: 'うどんと おちゃを おねがいします。', vi: 'Cho tôi udon và trà.' },
    { ja: 'おいしいですね。', vi: 'Ngon nhỉ.' },
    { ja: 'けっこうです。', vi: 'Thôi, đủ rồi ạ.' },
    { ja: 'ごちそうさまでした。', vi: 'Cảm ơn vì bữa ăn.' },
  ],
  translatePairs: [
    { ja: 'メニューを おねがいします。', vi: 'Cho tôi thực đơn.', tokens: ['メニュー', 'を', 'おねがい', 'します'], distractors: ['ください'] },
    { ja: 'ラーメンと おちゃを ください。', vi: 'Cho tôi ramen và trà.', tokens: ['ラーメン', 'と', 'おちゃ', 'を', 'ください'], distractors: ['みそしる'] },
    { ja: 'この すしは おいしいです。', vi: 'Sushi này ngon.', tokens: ['この', 'すし', 'は', 'おいしい', 'です'], distractors: ['たかい'] },
    { ja: 'ごはんを たべます。', vi: 'Tôi ăn cơm.', tokens: ['ごはん', 'を', 'たべます'], distractors: ['のみます'] },
    { ja: 'おちゃは いかがですか。', vi: 'Bạn dùng trà nhé?', tokens: ['おちゃ', 'は', 'いかが', 'です', 'か'], distractors: ['いくら'] },
  ],
  translateJaVi: [
    { ja: 'うどんは とても おいしいです。', vi: 'Món udon rất ngon.', wrongVi: ['Món udon rất đắt.', 'Tôi rất thích udon.', 'Udon là món ăn của Việt Nam.', 'Cho tôi một tô udon.'] },
    { ja: 'すしを たべます。ラーメンも たべます。', vi: 'Tôi ăn sushi. Tôi cũng ăn ramen.', wrongVi: ['Tôi chỉ ăn sushi không thôi.', 'Tôi uống sushi và ramen.', 'Tôi mua sushi và ramen.', 'Sushi và ramen rất đắt.'] },
    { ja: 'おちゃは ひゃくにじゅうえんです。', vi: 'Trà là 120 yên.', wrongVi: ['Trà là 210 yên.', 'Trà là 1.200 yên.', 'Hai chén trà.', 'Trà rất đắt.'] },
  ],
  wordBank: [
    { ja: 'ていしょくを おねがいします。', vi: 'Cho tôi phần cơm set.', tokens: ['ていしょく', 'を', 'おねがい', 'します'], distractors: ['たべます'] },
    { ja: 'ごはんと みそしるを ください。', vi: 'Cho tôi cơm và súp miso.', tokens: ['ごはん', 'と', 'みそしる', 'を', 'ください'], distractors: ['ラーメン'] },
  ],
  kanji: ['食', '飲'],
  writingKana: ['た', 'べ', 'も', 'の', 'し'],
}
