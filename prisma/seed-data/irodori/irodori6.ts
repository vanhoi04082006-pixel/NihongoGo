/**
 * NihongoGo — Irodori A1 · Bài 6: まいにち (Thói quen & lịch trình ngày).
 * Nội dung GỐC 100% — không sao chép dialogue/ví dụ/bài tập có bản quyền.
 * Provenance: ORIGINAL_GENERATED · MACHINE_REVIEWED (validator + audit).
 */
import type { IrodoriLesson } from './types'

export const irodori6: IrodoriLesson = {
  order: 6,
  slug: 'irodori-6',
  title: 'まいにち — Thói quen & lịch trình ngày',
  titleJa: 'まいにち',
  description: 'Kể về một ngày của mình: dậy mấy giờ, làm gì, lúc nào nghỉ — bộ khung câu để trò chuyện cùng bạn Nhật.',
  learningObjectives: [
    'Nói thói quen hằng ngày bằng ます / ません',
    'Gắn thời điểm cho hành động với trợ từ に',
    'Kể lịch trình từ… đến… bằng から〜まで',
  ],
  grammarTopics: ['V ます / ません — khẳng định & phủ định', 'Thời điểm + に', 'から〜まで — lịch trình'],
  vocabularyTopics: ['Động từ hằng ngày', 'Bữa ăn & buổi trong ngày', 'Công việc'],
  kanjiTopics: ['Kanji 毎・朝・夜'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'まいにち', romaji: 'mainichi', meaningVi: 'mỗi ngày', pos: 'danh từ', exampleJa: 'まいにち べんきょうします。', exampleVi: 'Tôi học hành mỗi ngày.' },
    { term: 'まいあさ', romaji: 'maiasa', meaningVi: 'mỗi sáng', pos: 'danh từ', exampleJa: 'まいあさ ろくじに おきます。', exampleVi: 'Mỗi sáng tôi dậy lúc 6 giờ.' },
    { term: 'おきます', romaji: 'okimasu', meaningVi: 'dậy, thức dậy', pos: 'động từ nhóm 2', exampleJa: 'しちじに おきます。', exampleVi: 'Tôi dậy lúc 7 giờ.' },
    { term: 'ねます', romaji: 'nemasu', meaningVi: 'đi ngủ', pos: 'động từ nhóm 2', exampleJa: 'じゅうじに ねます。', exampleVi: 'Tôi đi ngủ lúc 10 giờ.' },
    { term: 'あさごはん', romaji: 'asagohan', meaningVi: 'bữa sáng', pos: 'danh từ', exampleJa: 'あさごはんは パンです。', exampleVi: 'Bữa sáng là bánh mì.' },
    { term: 'ひるごはん', romaji: 'hirugohan', meaningVi: 'bữa trưa', pos: 'danh từ', exampleJa: 'ひるごはんは じゅうにじに たべます。', exampleVi: 'Bữa trưa tôi ăn lúc 12 giờ.' },
    { term: 'よる', romaji: 'yoru', meaningVi: 'buổi tối, đêm', pos: 'danh từ', exampleJa: 'よる、うちへ かえります。', exampleVi: 'Buổi tối tôi về nhà.' },
    { term: 'しごと', romaji: 'shigoto', meaningVi: 'công việc, việc làm', pos: 'danh từ', exampleJa: 'しごとは なんじからですか。', exampleVi: 'Công việc bắt đầu từ mấy giờ?' },
    { term: 'かいしゃ', romaji: 'kaisha', meaningVi: 'công ty', pos: 'danh từ', exampleJa: 'かいしゃへ いきます。', exampleVi: 'Tôi đi đến công ty.' },
    { term: 'でかけます', romaji: 'dekakemasu', meaningVi: 'ra khỏi nhà, đi ra ngoài', pos: 'động từ nhóm 2', exampleJa: 'あさ はちじに でかけます。', exampleVi: 'Buổi sáng 8 giờ tôi ra ngoài.' },
    { term: 'かえります', romaji: 'kaerimasu', meaningVi: 'về (nhà)', pos: 'động từ nhóm 1', exampleJa: 'ごご ろくじに かえります。', exampleVi: '6 giờ chiều tôi về nhà.' },
    { term: 'やすみます', romaji: 'yasumimasu', meaningVi: 'nghỉ, nghỉ làm', pos: 'động từ nhóm 1', exampleJa: 'にちようびは やすみます。', exampleVi: 'Chủ nhật tôi nghỉ.' },
    { term: 'べんきょうします', romaji: 'benkyō shimasu', meaningVi: 'học, học hành', pos: 'động từ nhóm 3', exampleJa: 'まいにち にほんごを べんきょうします。', exampleVi: 'Mỗi ngày tôi học tiếng Nhật.' },
    { term: 'いつも', romaji: 'itsumo', meaningVi: 'luôn, bao giờ cũng', pos: 'phó từ', exampleJa: 'いつも くじに ねます。', exampleVi: 'Tôi luôn ngủ lúc 9 giờ.' },
  ],
  grammar: [
    {
      code: 'i6-masu-masen',
      title: 'V ます / ません — thói quen khẳng định & phủ định',
      formation: '[gốc động từ] + ます (làm) · ません (không làm)',
      explanationVi:
        'Muốn kể thói quen, lấy GỐC động từ (bỏ đuôi từ điển) thêm ます: たべます (ăn), のみます (uống), おきます (dậy). Phủ định đổi ます thành ません: たべません (không ăn), やすみません (không nghỉ). Thời gian trong câu: hành động lặp lại hằng ngày → tự nhiên dùng thì hiện tại. Câu hỏi thêm か: まいにち きますか (có đến mỗi ngày không?).',
      examples: [
        { ja: 'わたしは まいにち にほんごを べんきょうします。', vi: 'Tôi học tiếng Nhật mỗi ngày.', tokens: ['わたし', 'は', 'まいにち', 'にほんご', 'を', 'べんきょう', 'します'] },
        { ja: 'にちようびは しごとを しません。', vi: 'Chủ nhật tôi không làm việc.' },
        { ja: 'まいさんは おちゃを のみます。', vi: 'Mai uống trà.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'Chia động từ (Mai ăn ramen — khẳng định)',
          sentence: 'まいさんは ラーメンを ___。',
          options: ['たべません', 'たべますか', 'のみます', 'たべます'],
          answerIndex: 3, explanationVi: 'Khẳng định = gốc + ます → たべます. たべません là phủ định; のみます là "uống" — sai động từ.',
        },
        {
          kind: 'conjugate', prompt: 'Chia động từ (tôi không uống sữa — phủ định)',
          sentence: 'わたしは ぎゅうにゅうを ___。',
          options: ['のみます', 'のみません', 'ねません', 'たべません'],
          answerIndex: 1, explanationVi: 'Phủ định = ません → のみません. Hai đáp án cuối sai động từ (ngủ / ăn).',
        },
        {
          kind: 'choice', prompt: 'Phủ định của ねます là gì?',
          options: ['ねました', 'ねません', 'ねまありません', 'ねないでした'],
          answerIndex: 1, explanationVi: 'Đuôi ます đổi thành ません là xong: ねません. Các đuôi còn lại không tồn tại ở mức A1.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng: "Hôm nay tôi không làm việc"?',
          options: ['きょう、しごとを しますません。', 'きょう、しごとが しません。', 'きょう、しごとを しません。', 'きょう、しごとは しませんか。'],
          answerIndex: 2, explanationVi: 'しごと là tân ngữ → を + しません. しますません là đuôi sai; しませんか là lời mời.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ',
          sentence: 'あさごはん___ たべます。',
          options: ['に', 'を', 'は', 'と'],
          answerIndex: 1, explanationVi: 'Bữa ăn là tân ngữ của たべます → を. に dành cho thời điểm.',
        },
      ],
    },
    {
      code: 'i6-ni-time',
      title: 'Thời điểm + に — hành động diễn ra lúc mấy giờ',
      formation: '[giờ/ngày/tháng] + に + [động từ] · NGOẠI LỆ không dùng に: まいにち・まいあさ・きょう・あした・いつ',
      explanationVi:
        'Mốc thời gian CỤ THỂ (giờ, thứ, ngày tháng) đứng trước động từ kèm に: ろくじに おきます (dậy lúc 6 giờ); にちようびに やすみます (chủ nhật nghỉ). Từ chỉ KHOẢNG lặp lại hoặc tương đối KHÔNG dùng に: まいにち (mỗi ngày), まいあさ (mỗi sáng), きょう, あした, いつ (khi nào) — nói thẳng まいにち べんきょうします. Đây là lỗi kinh điển của người mới: thêm に sau まいにち.',
      examples: [
        { ja: 'ろくじに おきます。', vi: 'Tôi dậy lúc 6 giờ.', tokens: ['ろくじ', 'に', 'おきます'] },
        { ja: 'にちようびに かいしゃへ いきます。', vi: 'Chủ nhật tôi đến công ty.' },
        { ja: 'まいにち べんきょうします。', vi: 'Tôi học mỗi ngày. (KHÔNG dùng に)' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Điền trợ từ',
          sentence: 'ろくじ___ おきます。',
          options: ['を', 'に', 'で', 'は'],
          answerIndex: 1, explanationVi: 'Mốc giờ cụ thể (6 giờ) + に. を chỉ đi với tân ngữ.',
        },
        {
          kind: 'choice', prompt: 'Câu nào đúng?',
          options: ['まいにちに べんきょうします。', 'まいにちで べんきょうします。', 'まいにちを べんきょうします。', 'まいにち べんきょうします。'],
          answerIndex: 3, explanationVi: 'まいにち là từ chỉ khoảng lặp lại → KHÔNG dùng に (cũng không dùng で/を). Nói thẳng: まいにち べんきょうします.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ (nghỉ vào chủ nhật)',
          sentence: 'にちようび___ やすみます。',
          options: ['に', 'を', 'と', 'も'],
          answerIndex: 0, explanationVi: 'Thứ/ngày cụ thể (chủ nhật) + に — mốc thời gian xác định.',
        },
        {
          kind: 'fill', prompt: 'Điền trợ từ (bữa trưa lúc 12 giờ)',
          sentence: 'じゅうにじ___ ひるごはんです。',
          options: ['に', 'を', 'は', 'で'],
          answerIndex: 0, explanationVi: '12 giờ là mốc cụ thể → に. は đã dùng cho chủ đề ở vế khác.',
        },
        {
          kind: 'choice', prompt: 'Từ nào dưới đây KHÔNG dùng に khi làm trạng ngữ thời gian?',
          options: ['くじ', 'にちようび', 'まいにち', 'さんがつ とおか'],
          answerIndex: 2, explanationVi: 'まいにち (mỗi ngày) là khoảng lặp lại → bỏ に. Giờ, thứ, ngày tháng đều dùng に.',
        },
      ],
    },
    {
      code: 'i6-kara-made',
      title: 'から〜まで — từ… đến…',
      formation: '[bắt đầu] + から + [kết thúc] + まで',
      explanationVi:
        'Kể lịch trình: mốc bắt đầu + から, mốc kết thúc + まで: しごとは くじから ごじまでです (làm từ 9 giờ đến 5 giờ). Cặp này dùng được cho GIỜ (くじから さんじまで), THỨ (どようびから にちようびまで) và cả khoảng khác như số tầng. Đừng đảo trật tự: câu ★から★まで luôn đi theo chiều thời gian. Đã gặp から (xuất xứ) ở bài 2 — ở đây là "mốc bắt đầu", cùng một chữ, cùng tinh thần "từ".',
      examples: [
        { ja: 'しごとは くじから ごじまでです。', vi: 'Làm việc từ 9 giờ đến 5 giờ.', tokens: ['しごと', 'は', 'くじ', 'から', 'ごじ', 'まで', 'です'] },
        { ja: 'やすみは どようびから にちようびまでです。', vi: 'Nghỉ từ thứ Bảy đến chủ nhật.' },
        { ja: 'べんきょうは よる はちじから じゅうじまでです。', vi: 'Học từ 8 giờ đến 10 giờ tối.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Điền trợ từ (làm từ 9 giờ…)',
          sentence: 'しごとは くじ___ ごじまでです。',
          options: ['まで', 'から', 'に', 'と'],
          answerIndex: 1, explanationVi: 'Mốc BẮT ĐẦU + から. まで dành cho mốc kết thúc đứng sau.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ (…đến 9 giờ)',
          sentence: 'アルバイトは よじから くじ___です。',
          options: ['まで', 'から', 'に', 'で'],
          answerIndex: 0, explanationVi: 'Mốc KẾT THÚC + まで. Cặp から〜まで luôn theo thứ tự bắt đầu → kết thúc.',
        },
        {
          kind: 'error', prompt: 'Câu lịch trình nào đúng?',
          options: ['しごとは ごぜん くじまで ごご ごじからです。', 'しごとは ごぜん くじに ごご ごじにです。', 'しごとは ごぜん くじから ごご ごじまでです。', 'しごとは からごぜん くじ までごご ごじです。'],
          answerIndex: 2, explanationVi: 'Trật tự chuẩn: [bắt đầu]から [kết thúc]まで. Đảo から/まで hoặc dán chúng vào sai vị trí đều sai.',
        },
        {
          kind: 'fill', prompt: 'Điền trợ từ (nghỉ đến chủ nhật)',
          sentence: 'やすみは どようびから にちようび___です。',
          options: ['から', 'に', 'まで', 'を'],
          answerIndex: 2, explanationVi: 'にちようび là mốc kết thúc của kỳ nghỉ → まで.',
        },
      ],
    },
  ],
  dialogue: {
    titleVi: 'Một ngày của Mai',
    situationVi: 'An hỏi Mai về lịch trình hằng ngày để soạn thời gian học chung.',
    lines: [
      { speaker: 'あん', text: 'まいさんは まいにち なんじに おきますか。', vi: 'Mai dậy lúc mấy giờ mỗi ngày vậy?' },
      { speaker: 'まい', text: 'ごぜん ろくじに おきます。', vi: 'Tôi dậy lúc 6 giờ sáng.' },
      { speaker: 'あん', text: 'あさごはんは なんですか。', vi: 'Bữa sáng ăn gì?' },
      { speaker: 'まい', text: 'パンを たべます。ぎゅうにゅうも のみます。', vi: 'Tôi ăn bánh mì. Cũng uống sữa nữa.' },
      { speaker: 'あん', text: 'アルバイトは なんじから なんじまでですか。', vi: 'Việc làm thêm từ mấy giờ đến mấy giờ?' },
      { speaker: 'まい', text: 'アルバイトは ごご よじから ろくじまでです。', vi: 'Làm thêm từ 4 giờ đến 6 giờ chiều.' },
      { speaker: 'あん', text: 'よるは なにを しますか。', vi: 'Buổi tối làm gì?' },
      { speaker: 'まい', text: 'べんきょうします。じゅういちじに ねます。', vi: 'Tôi học bài. 11 giờ đi ngủ.' },
      { speaker: 'あん', text: 'そうですか。とても いそがしいですね。', vi: 'Vậy à. Bận thật đấy nhỉ.' },
    ],
    questions: [
      { questionVi: 'Mai dậy lúc mấy giờ?', choices: ['6 giờ sáng', '7 giờ sáng', '6 giờ tối', '11 giờ'], answerIndex: 0, explanationVi: 'ごぜん ろくじに おきます — ごぜん = buổi sáng (đã học bài 3).' },
      { questionVi: 'Mai làm thêm trong khoảng nào?', choices: ['16:00 – 18:00', '4:00 – 6:00 sáng', '18:00 – 20:00', 'Cả ngày'], answerIndex: 0, explanationVi: 'ごご よじから ろくじまで = từ 4 giờ đến 6 giờ CHIỀU.' },
      { questionVi: 'Buổi tối Mai làm gì trước khi ngủ?', choices: ['Học bài', 'Làm thêm', 'Xem ti vi', 'Đi siêu thị'], answerIndex: 0, explanationVi: 'べんきょうします = học bài, rồi 11 giờ (じゅういちじに) đi ngủ.' },
    ],
  },
  listening: [
    { scriptJa: 'まいにち ろくじに おきます。', meaningVi: 'Mỗi ngày tôi dậy lúc 6 giờ.', choices: ['Mỗi ngày tôi dậy lúc 6 giờ', 'Mai dậy lúc 6 giờ', 'Ngày mai tôi dậy 6 giờ', 'Mỗi ngày tôi ngủ 6 tiếng'], answerIndex: 0 },
    { scriptJa: 'しごとは ごご はちじまでです。', meaningVi: 'Làm việc đến 8 giờ tối.', choices: ['Làm đến 8 giờ tối', 'Làm từ 8 giờ tối', 'Làm được 8 tiếng', 'Nghỉ lúc 8 giờ sáng'], answerIndex: 0 },
    { scriptJa: 'よる じゅうにじに ねます。', meaningVi: 'Tối 12 giờ tôi đi ngủ.', choices: ['Tối 12 giờ đi ngủ', 'Sáng 12 giờ đi ngủ', 'Dậy lúc 12 giờ', 'Ngủ đủ 12 tiếng'], answerIndex: 0 },
    { scriptJa: 'なんじに ねますか。', meaningVi: 'Bạn đi ngủ lúc mấy giờ?', choices: ['Bạn đi ngủ lúc mấy giờ?', 'Bạn dậy lúc mấy giờ?', 'Hôm nay là thứ mấy?', 'Bạn ăn gì?'], answerIndex: 0, dictation: true },
    { scriptJa: 'にちようびは やすみます。', meaningVi: 'Chủ nhật tôi nghỉ.', choices: ['Chủ nhật tôi nghỉ', 'Chủ nhật tôi đi làm', 'Ngày mai tôi nghỉ', 'Hôm nay tôi nghỉ'], answerIndex: 0, dictation: true },
  ],
  reading: {
    titleVi: 'アンさんの まいにち — Một ngày của An',
    lines: [
      { text: 'アンさんは まいあさ しちじに おきます。', vi: 'Mỗi sáng An dậy lúc 7 giờ.' },
      { text: 'あさごはんは パンと ぎゅうにゅうです。', vi: 'Bữa sáng là bánh mì với sữa.' },
      { text: 'しごとは ごぜん きゅうじから ごご ごじまでです。', vi: 'Công việc từ 9 giờ sáng đến 5 giờ chiều.' },
      { text: 'ひるごはんは じゅうにじに たべます。', vi: 'Bữa trưa anh ăn lúc 12 giờ.' },
      { text: 'くじに うちへ かえります。', vi: '9 giờ tối anh về đến nhà.' },
      { text: 'よるは やすみます。じゅうじに ねます。', vi: 'Buổi tối anh nghỉ ngơi. 10 giờ đi ngủ.' },
    ],
    questions: [
      { questionVi: 'An ăn sáng với những gì?', choices: ['Bánh mì và sữa', 'Cơm và súp miso', 'Bánh mì và trà', 'Chỉ uống sữa'], answerIndex: 0, explanationVi: 'Dòng 2: パンと ぎゅうにゅう — と liệt kê hai món (ôn bài 5).' },
      { questionVi: 'An làm việc đến mấy giờ?', choices: ['5 giờ chiều', '9 giờ sáng', '12 giờ trưa', '10 giờ tối'], answerIndex: 0, explanationVi: 'ごご ごじまで = đến 5 giờ chiều (まで = mốc kết thúc).' },
      { questionVi: 'An dậy lúc mấy giờ?', choices: ['7 giờ', '9 giờ', '5 giờ', '10 giờ'], answerIndex: 0, explanationVi: 'まいあさ しちじに おきます = mỗi sáng dậy 7 giờ.' },
    ],
  },
  speakSentences: [
    { ja: 'まいにち ろくじに おきます。', vi: 'Mỗi ngày tôi dậy lúc 6 giờ.' },
    { ja: 'はちじに かいしゃへ いきます。', vi: '8 giờ tôi đi công ty.' },
    { ja: 'ごご ろくじに うちへ かえります。', vi: '6 giờ chiều tôi về nhà.' },
    { ja: 'まいにち にほんごを べんきょうします。', vi: 'Mỗi ngày tôi học tiếng Nhật.' },
    { ja: 'じゅういちじに ねます。', vi: '11 giờ tôi đi ngủ.' },
  ],
  translatePairs: [
    { ja: 'まいにち しちじに おきます。', vi: 'Mỗi ngày tôi dậy lúc 7 giờ.', tokens: ['まいにち', 'しちじ', 'に', 'おきます'], distractors: ['ねます'] },
    { ja: 'よる じゅうじに ねます。', vi: 'Tối tôi đi ngủ lúc 10 giờ.', tokens: ['よる', 'じゅうじ', 'に', 'ねます'], distractors: ['おきます'] },
    { ja: 'しごとは くじから ごじまでです。', vi: 'Làm việc từ 9 giờ đến 5 giờ.', tokens: ['しごと', 'は', 'くじ', 'から', 'ごじ', 'まで', 'です'], distractors: ['なんじ'] },
    { ja: 'まいにち にほんごを べんきょうします。', vi: 'Mỗi ngày tôi học tiếng Nhật.', tokens: ['まいにち', 'にほんご', 'を', 'べんきょう', 'します'], distractors: ['おきます'] },
    { ja: 'あしたは やすみます。', vi: 'Ngày mai tôi nghỉ.', tokens: ['あした', 'は', 'やすみ', 'ます'], distractors: ['まいにち'] },
  ],
  translateJaVi: [
    { ja: 'かいしゃは ごぜん はちじからです。', vi: 'Công ty bắt đầu từ 8 giờ sáng.', wrongVi: ['Công ty kết thúc lúc 8 giờ sáng.', 'Công ty mở cửa 8 tiếng mỗi ngày.', 'Bây giờ là 8 giờ sáng.', 'Tôi đến công ty lúc 8 giờ tối.'] },
    { ja: 'ひるごはんは じゅうにじから いちじまでです。', vi: 'Giờ ăn trưa từ 12 giờ đến 1 giờ.', wrongVi: ['Bữa tối từ 12 giờ đến 1 giờ.', 'Bữa sáng lúc 12 giờ.', 'Ăn trưa mất tròn 12 tiếng.', 'Tôi ăn trưa lúc 1 giờ.'] },
    { ja: 'まいさんは よる くじに かえります。', vi: 'Tối Mai về nhà lúc 9 giờ.', wrongVi: ['Sáng Mai về nhà lúc 9 giờ.', 'Mai dậy lúc 9 giờ tối.', 'Mai về nhà sau 9 tiếng làm việc.', 'Mai đi làm lúc 9 giờ tối.'] },
  ],
  wordBank: [
    { ja: 'しちじに おきます。', vi: 'Tôi dậy lúc 7 giờ.', tokens: ['しちじ', 'に', 'おきます'], distractors: ['ねます'] },
    { ja: 'まいにち かいしゃへ いきます。', vi: 'Mỗi ngày tôi đi công ty.', tokens: ['まいにち', 'かいしゃ', 'へ', 'いきます'], distractors: ['かえります'] },
  ],
  kanji: ['毎', '朝', '夜'],
  writingKana: ['ま', 'い', 'に', 'ち', 'よ'],
}
