/**
 * NihongoGo — Irodori A1 · Bài 1: あいさつ (Chào hỏi & nghi thức xã giao).
 * Nội dung GỐC 100% — chỉ tham chiếu chủ đề giao tiếp sinh tồn cấp A1,
 * KHÔNG sao chép dialogue/ví dụ/bài tập từ giáo trình có bản quyền.
 * Provenance: ORIGINAL_GENERATED · MACHINE_REVIEWED (validator + audit).
 */
import type { IrodoriLesson } from './types'

export const irodori1: IrodoriLesson = {
  order: 1,
  slug: 'irodori-1',
  title: 'あいさつ — Chào hỏi & nghi thức xã giao',
  titleJa: 'あいさつ',
  description: 'Bộ lời chào sinh tồn đầu tiên: chào theo thời điểm, làm quen lần đầu, cảm ơn, xin lỗi — dùng được ngay ngày đầu tiên ở Nhật.',
  learningObjectives: [
    'Chào hỏi đúng thời điểm trong ngày',
    'Làm quen lần đầu với はじめまして',
    'Hỏi thăm sức khoẻ bằng おげんきですか',
  ],
  grammarTopics: ['Lời chào theo thời điểm trong ngày', 'おげんきですか — hỏi thăm & trả lời'],
  vocabularyTopics: ['Lời chào cơ bản', 'Lời cảm ơn & xin lỗi', 'Từ trả lời はい・いいえ'],
  kanjiTopics: ['人'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'おはようございます', romaji: 'ohayō gozaimasu', meaningVi: 'chào buổi sáng (lịch sự)', pos: 'lời chào', exampleJa: 'せんせい、おはようございます。', exampleVi: 'Thầy ơi, chào buổi sáng ạ.' },
    { term: 'こんにちは', romaji: 'konnichiwa', meaningVi: 'xin chào (trưa/chiều)', pos: 'lời chào', exampleJa: 'みせの ひとに「こんにちは」と いいました。', exampleVi: 'Tôi chào nhân viên cửa hàng.' },
    { term: 'こんばんは', romaji: 'konbanwa', meaningVi: 'chào buổi tối', pos: 'lời chào', exampleJa: 'よる、となりのおくさんに こんばんはと いいました。', exampleVi: 'Tối tôi chào cô hàng xóm.' },
    { term: 'おやすみなさい', romaji: 'oyasuminasai', meaningVi: 'chúc ngủ ngon', pos: 'lời chào', exampleJa: 'ねるまえに「おやすみなさい」と いいます。', exampleVi: 'Trước khi ngủ tôi nói lời chúc ngủ ngon.' },
    { term: 'さようなら', romaji: 'sayōnara', meaningVi: 'tạm biệt', pos: 'lời chào', exampleJa: 'がっこうの まえで「さようなら」と いいました。', exampleVi: 'Ở cổng trường tôi nói lời tạm biệt.' },
    { term: 'またあした', romaji: 'mata ashita', meaningVi: 'hẹn gặp lại ngày mai', pos: 'lời chào', exampleJa: 'ともだちに「またあした」と いいました。', exampleVi: 'Tôi hẹn bạn gặp lại vào ngày mai.' },
    { term: 'ありがとうございます', romaji: 'arigatō gozaimasu', meaningVi: 'cảm ơn (lịch sự)', pos: 'lời cảm ơn', exampleJa: 'プレゼントを ありがとうございます。', exampleVi: 'Cảm ơn bạn vì món quà.' },
    { term: 'すみません', romaji: 'sumimasen', meaningVi: 'xin lỗi / cho tôi hỏi', pos: 'lời xin lỗi', exampleJa: 'すみません、ちょっと いいですか。', exampleVi: 'Xin lỗi, cho tôi hỏi một chút được không?' },
    { term: 'はじめまして', romaji: 'hajimemashite', meaningVi: 'rất hân hạnh (lần đầu gặp)', pos: 'lời chào', exampleJa: 'はじめまして、まいです。', exampleVi: 'Rất hân hạnh, tôi là Mai.' },
    { term: 'どうぞよろしくおねがいします', romaji: 'dōzo yoroshiku onegai shimasu', meaningVi: 'mong được giúp đỡ / giao thiệp', pos: 'lời chào', exampleJa: 'これから どうぞよろしくおねがいします。', exampleVi: 'Từ nay mong được anh/chị giúp đỡ.' },
    { term: 'おげんきですか', romaji: 'o-genki desu ka', meaningVi: 'bạn khỏe không?', pos: 'câu hỏi thăm', exampleJa: 'せんせい、おげんきですか。', exampleVi: 'Thầy ơi, thầy khỏe không ạ?' },
    { term: 'げんきです', romaji: 'genki desu', meaningVi: 'tôi khỏe', pos: 'câu trả lời', exampleJa: 'はい、げんきです。', exampleVi: 'Vâng, tôi khỏe.' },
    { term: 'おなまえ', romaji: 'o-namae', meaningVi: 'tên (cách nói kính)', pos: 'danh từ', exampleJa: 'おなまえは なんですか。', exampleVi: 'Tên của bạn là gì?' },
    { term: 'はい', romaji: 'hai', meaningVi: 'vâng, có', pos: 'trả lời', exampleJa: 'はい、そうです。', exampleVi: 'Vâng, đúng vậy.' },
    { term: 'いいえ', romaji: 'iie', meaningVi: 'không, không phải', pos: 'trả lời', exampleJa: 'いいえ、ちがいます。', exampleVi: 'Không, không phải.' },
    { term: 'しつれいします', romaji: 'shitsurei shimasu', meaningVi: 'xin phép (về trước / vào phòng)', pos: 'lời chào', exampleJa: 'おくさん、しつれいします。', exampleVi: 'Thưa bà, tôi xin phép về trước.' },
  ],
  grammar: [
    {
      code: 'i1-aisatsu-jikan',
      title: 'Chào hỏi theo thời điểm trong ngày',
      formation: 'sáng: おはよう(ございます) · trưa–chiều: こんにちは · tối: こんばんは · trước khi ngủ: おやすみなさい',
      explanationVi:
        'Tiếng Nhật chọn lời chào theo GIỜ trong ngày. Buổi sáng dùng おはようございます (với bạn thân có thể rút gọn おはよう); từ khoảng trưa đến chiều tối dùng こんにちは; sau khi trời tối dùng こんばんは; trước khi đi ngủ nói おやすみなさい. Thêm ございます làm câu trang trọng hơn — với người lớn tuổi, thầy cô hoặc người lạ nên dùng dạng đầy đủ.',
      examples: [
        { ja: 'あさ、「おはようございます」と いいます。', vi: 'Buổi sáng tôi chào "おはようございます".' },
        { ja: 'ともだちに「おはよう」と いいます。', vi: 'Với bạn bè tôi chào "おはよう" (thân mật).', tokens: ['ともだち', 'に', '「おはよう」', 'と', 'いいます'] },
        { ja: 'よる ねるまえに「おやすみなさい」と いいます。', vi: 'Buổi tối trước khi ngủ tôi nói "おやすみなさい".' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '7 giờ sáng gặp giáo viên ở trường — bạn chào thế nào?',
          options: ['おはようございます。', 'こんにちは。', 'おやすみなさい。', 'さようなら。'],
          answerIndex: 0, explanationVi: 'Buổi sáng + người trên → dùng dạng đầy đủ おはようございます.',
        },
        {
          kind: 'choice', prompt: '20 giờ tối gặp hàng xóm ở thang máy — chào thế nào?',
          options: ['おはようございます。', 'こんばんは。', 'またあした。', 'はじめまして。'],
          answerIndex: 1, explanationVi: 'Sau khi trời tối dùng こんばんは.',
        },
        {
          kind: 'error', prompt: 'Chào người lạ vào lúc 13 giờ — câu nào đúng?',
          options: ['こんばんは。', 'おはよう。', 'こんにちは。', 'おやすみなさい。'],
          answerIndex: 2, explanationVi: '13 giờ là buổi trưa → こんにちは. おはよう thân mật quá cho người lạ; こんばんは chỉ dùng buổi tối.',
        },
        {
          kind: 'fill', prompt: 'Điền lời chào đúng (buổi sáng, lịch sự)',
          sentence: 'あさ、せんせいに「___」と いいます。',
          options: ['こんばんは', 'おやすみなさい', 'さようなら', 'おはようございます'],
          answerIndex: 3, explanationVi: 'Sáng + lịch sự → おはようございます.',
        },
        {
          kind: 'choice', prompt: 'おはようございます so với おはよう thì thế nào?',
          options: ['lịch sự hơn', 'thân mật hơn', 'sai ngữ pháp', 'dùng để tạm biệt'],
          answerIndex: 0, explanationVi: 'ございます làm câu trang trọng: おはようございます lịch sự hơn おはよう.',
        },
      ],
    },
    {
      code: 'i1-genki-desu-ka',
      title: 'おげんきですか — hỏi thăm & trả lời',
      formation: 'お + げんき + ですか → はい、げんきです / いいえ、ちょっと…',
      explanationVi:
        'Khi hỏi thăm sức khoẻ, tiếng Nhật ghép お (tiền tố kính) + げんき (khỏe mạnh) + ですか. Trả lời khẳng định: はい、げんきです; muốn lịch sự hơn thêm おかげさまで (nhờ ơn anh/chị). Trả lời phủ định thường được nói mềm: いいえ、ちょっと… (không được lắm…) thay vì nói thẳng. Lưu ý: おげんきですか chủ yếu dùng khi LÂU KHÔNG gặp lại hoặc viết thư — không dùng để chào hàng ngày.',
      examples: [
        { ja: 'A: おげんきですか。 B: はい、げんきです。', vi: 'A: Bạn khỏe không? B: Vâng, tôi khỏe.' },
        { ja: 'ひさしぶりですね。おげんきですか。', vi: 'Lâu không gặp nhỉ. Bạn dạo này khỏe không?', tokens: ['ひさしぶり', 'です', 'ね', 'おげんき', 'です', 'か'] },
        { ja: 'かぞくも おげんきですか。', vi: 'Gia đình bạn cũng đều khỏe chứ?' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '「おげんきですか」 có nghĩa là gì?',
          options: ['Bạn tên là gì?', 'Bạn khỏe không?', 'Hẹn gặp lại nhé', 'Cảm ơn bạn nhé'],
          answerIndex: 1, explanationVi: 'お(ngữ khí kính) + げんき(khỏe) + ですか(câu hỏi) = "Bạn khỏe không?".',
        },
        {
          kind: 'choice', prompt: 'Trả lời "Vâng, tôi khỏe" bằng câu nào?',
          options: ['いいえ、げんきです。', 'はい、はじめまして。', 'はい、げんきです。', 'いいえ、ありがとう。'],
          answerIndex: 2, explanationVi: 'はい (vâng) + げんきです (tôi khỏe). いいえ là "không" — đi cùng nghĩa phủ định.',
        },
        {
          kind: 'error', prompt: 'Câu trả lời hỏi thăm nào đúng?',
          options: ['はい、げんきじゃないです。', 'いいえ、げんきです。', 'はい、しつれいします。', 'はい、げんきです。'],
          answerIndex: 3, explanationVi: 'はい đi với khẳng định げんきです. Hai câu lẫn lộn はい/いいえ; しつれいします là lời xin phép.',
        },
        {
          kind: 'fill', prompt: 'Điền từ còn thiếu (trả lời: vâng, tôi khỏe)',
          sentence: 'はい、___です。',
          options: ['げんき', 'すみません', 'はじめまして', 'さようなら'],
          answerIndex: 0, explanationVi: 'げんきです = tôi khỏe. Các từ còn lại không phải mô tả sức khoẻ.',
        },
        {
          kind: 'choice', prompt: 'Gặp lại thầy cô sau kỳ nghỉ dài — nên mở đầu bằng câu nào?',
          options: ['はじめまして。', 'おげんきですか。', 'またあした。', 'しつれいします。'],
          answerIndex: 1, explanationVi: 'Hỏi thăm sau thời gian dài không gặp → おげんきですか. はじめまして chỉ dùng lần ĐẦU làm quen.',
        },
      ],
    },
  ],
  dialogue: {
    titleVi: 'Hàng xóm mới',
    situationVi: 'Mai vừa dọn đến chung cư, buổi tối gặp ông Yamada — hàng xóm cửa bên cạnh.',
    lines: [
      { speaker: 'やまだ', text: 'こんばんは。', vi: 'Chào buổi tối.' },
      { speaker: 'まい', text: 'こんばんは。はじめまして、まいです。', vi: 'Chào buổi tối. Rất hân hạnh, tôi là Mai.' },
      { speaker: 'やまだ', text: 'やまだです。どうぞよろしくおねがいします。', vi: 'Tôi là Yamada. Mong cô giúp đỡ cho.' },
      { speaker: 'まい', text: 'こちらこそ、どうぞよろしくおねがいします。', vi: 'Tôi cũng mong ông giúp đỡ cho.' },
      { speaker: 'やまだ', text: 'べんきょうは いそがしいですか。おげんきですか。', vi: 'Việc học có bận không? Cô khỏe không?' },
      { speaker: 'まい', text: 'はい、げんきです。ありがとうございます。', vi: 'Vâng, tôi khỏe. Cảm ơn ông.' },
      { speaker: 'やまだ', text: 'では、おやすみなさい。またあした。', vi: 'Vậy thì chúc ngủ ngon. Hẹn gặp lại ngày mai.' },
      { speaker: 'まい', text: 'はい、おやすみなさい。', vi: 'Vâng, chúc ông ngủ ngon.' },
    ],
    questions: [
      { questionVi: 'Yamada chào Mai bằng câu nào ngay khi gặp?', choices: ['おはようございます。', 'またあした。', 'こんばんは。', 'しつれいします。'], answerIndex: 2, explanationVi: 'Hội thoại diễn ra buổi tối → lời chào là こんばんは.' },
      { questionVi: 'Câu どうぞよろしくおねがいします được dùng trong tình huống nào?', choices: ['Khi tạm biệt', 'Khi cảm ơn', 'Khi xin lỗi', 'Lần đầu làm quen'], answerIndex: 3, explanationVi: ' Đây là câu "trọng thị" nói ngay sau はじめまして khi làm quen.' },
      { questionVi: 'Câu おやすみなさい cuối hội thoại có nghĩa là gì?', choices: ['Chúc ngủ ngon', 'Hẹn gặp ngày mai', 'Cảm ơn', 'Xin lỗi'], answerIndex: 0, explanationVi: 'おやすみなさい nói trước khi đi ngủ; またあした (câu trước đó) mới là "hẹn gặp lại ngày mai".' },
    ],
  },
  listening: [
    { scriptJa: 'おはようございます。', meaningVi: 'Chào buổi sáng (lịch sự).', choices: ['Chào buổi tối', 'Chào buổi sáng', 'Chúc ngủ ngon', 'Tạm biệt'], answerIndex: 1 },
    { scriptJa: 'こんばんは。はじめまして。', meaningVi: 'Chào buổi tối. Rất hân hạnh được làm quen.', choices: ['Chào sáng + tạm biệt', 'Cảm ơn + xin lỗi', 'Chào tối + làm quen', 'Hỏi tên + chào'], answerIndex: 2 },
    { scriptJa: 'おげんきですか。', meaningVi: 'Bạn khỏe không?', choices: ['Bạn tên gì?', 'Mấy giờ rồi?', 'Đây là cái gì?', 'Bạn khỏe không?'], answerIndex: 3 },
    { scriptJa: 'ありがとうございます。', meaningVi: 'Cảm ơn (lịch sự).', choices: ['Cảm ơn', 'Xin lỗi', 'Tạm biệt', 'Chúc ngủ ngon'], answerIndex: 0, dictation: true },
    { scriptJa: 'どうぞよろしくおねがいします。', meaningVi: 'Mong được giúp đỡ (khi làm quen).', choices: ['Đi ngủ ngon nhé', 'Mong được giúp đỡ', 'Hẹn gặp lại', 'Xin lỗi nhé'], answerIndex: 1, dictation: true },
  ],
  reading: {
    titleVi: 'けさの あいさつ — Lời chào sáng nay của Mai',
    lines: [
      { text: 'まいさんは がくせいです。', vi: 'Mai là sinh viên.' },
      { text: 'けさ ろくじに おきました。', vi: 'Sáng nay cô dậy lúc 6 giờ.' },
      { text: 'うちを でるとき、となりの ひとに「おはようございます」と いいました。', vi: 'Khi ra khỏi nhà, cô chào người hàng xóm "おはようございます".' },
      { text: 'その ひとも「おはようございます」と いいました。', vi: 'Người đó cũng chào lại "おはようございます".' },
      { text: 'まいさんは えきで ともだちに あいました。', vi: 'Ở nhà ga, Mai gặp một người bạn.' },
      { text: 'ともだちと「おはよう」と いいました。とても いい あさです。', vi: 'Cô chào bạn bằng "おはよう" (thân mật). Một buổi sáng thật dễ chịu.' },
    ],
    questions: [
      { questionVi: 'Mai chào người hàng xóm bằng câu nào?', choices: ['おはよう', 'こんばんは', 'おはようございます', 'おやすみなさい'], answerIndex: 2, explanationVi: 'Với hàng xóm (người không thân) cô dùng dạng lịch sự おはようございます.' },
      { questionVi: 'Ở nhà ga, Mai chào bạn bằng câu nào?', choices: ['おはようございます', 'さようなら', 'はじめまして', 'おはよう'], answerIndex: 3, explanationVi: 'Với bạn bè thân, cô dùng dạng rút gọn thân mật おはよう.' },
      { questionVi: 'Đoạn đọc kể về khoảng thời gian nào?', choices: ['Một buổi sáng', 'Một buổi tối', 'Đêm khuya', 'Buổi trưa'], answerIndex: 0, explanationVi: 'けさ (sáng nay), ろくじに おきました (6 giờ dậy), lời chào おはよう — tất cả cho thấy đây là buổi sáng.' },
    ],
  },
  speakSentences: [
    { ja: 'おはようございます。', vi: 'Chào buổi sáng (lịch sự).' },
    { ja: 'こんにちは。', vi: 'Xin chào (trưa/chiều).' },
    { ja: 'はじめまして。まいです。', vi: 'Rất hân hạnh. Tôi là Mai.' },
    { ja: 'どうぞよろしくおねがいします。', vi: 'Mong được giúp đỡ.' },
    { ja: 'ありがとうございます。', vi: 'Cảm ơn (lịch sự).' },
  ],
  translatePairs: [
    { ja: 'おはようございます。', vi: 'Chào buổi sáng (lịch sự).', tokens: ['おはよう', 'ございます'], distractors: ['こんばんは'] },
    { ja: 'はじめまして。まいです。', vi: 'Rất hân hạnh. Tôi là Mai.', tokens: ['はじめまして', 'まい', 'です'], distractors: ['さようなら'] },
    { ja: 'おげんきですか。', vi: 'Bạn khỏe không?', tokens: ['おげんき', 'です', 'か'], distractors: ['ありがとう'] },
    { ja: 'すみません。ありがとうございます。', vi: 'Xin lỗi. Cảm ơn (lịch sự).', tokens: ['すみません', 'ありがとうございます'], distractors: ['こんばんは'] },
    { ja: 'またあした。', vi: 'Hẹn gặp lại ngày mai.', tokens: ['また', 'あした'], distractors: ['こんにち'] },
  ],
  translateJaVi: [
    { ja: 'こんばんは。', vi: 'Chào buổi tối.', wrongVi: ['Chào buổi sáng.', 'Chúc ngủ ngon.', 'Hẹn gặp lại ngày mai.'] },
    { ja: 'はじめまして。どうぞよろしくおねがいします。', vi: 'Rất hân hạnh. Mong được giúp đỡ.', wrongVi: ['Tạm biệt. Hẹn gặp lại.', 'Cảm ơn bạn nhiều nhé.', 'Xin lỗi vì đã làm phiền.'] },
    { ja: 'はい、げんきです。', vi: 'Vâng, tôi khỏe.', wrongVi: ['Không, tôi không khỏe.', 'Vâng, tôi buồn ngủ.', 'Tôi tên là Genki.'] },
  ],
  wordBank: [
    { ja: 'おなまえは なんですか。', vi: 'Tên bạn là gì?', tokens: ['おなまえ', 'は', 'なん', 'です', 'か'], distractors: ['だれ'] },
    { ja: 'またあした。おやすみなさい。', vi: 'Hẹn gặp lại ngày mai. Chúc ngủ ngon.', tokens: ['また', 'あした', 'おやすみ', 'なさい'], distractors: ['こんばんは'] },
  ],
  kanji: ['人'],
  writingKana: ['あ', 'こ', 'ん', 'は', 'う'],
}
