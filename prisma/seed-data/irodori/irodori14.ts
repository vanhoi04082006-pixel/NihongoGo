/**
 * NihongoGo — Irodori A1 · Bài 14: おねがい (Nhờ vả & xin phép).
 * Xin phép làm gì (〜ても いいですか), từ chối lịch sự, nhờ giúp đỡ —
 * "bộ cầu chì" cho mọi tình huống sinh tồn. Nội dung GỐC — không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 * Provenance: ORIGINAL_GENERATED · MACHINE_REVIEWED (validator + audit).
 */
import type { IrodoriLesson } from './types'

export const irodori14: IrodoriLesson = {
  order: 14,
  slug: 'irodori-14',
  title: 'おねがい — Nhờ vả & xin phép',
  titleJa: 'いろどり A1 おねがい',
  description: 'Xin mượn thứ gì đó, hỏi được phép hay không, nhờ người giúp một tay — những câu "cầu chì" giúp bạn bế tắc cũng xoay xở được.',
  learningObjectives: [
    'Xin phép lịch sự bằng 〜ても いいですか',
    'Từ chối nhẹ nhàng và hỏi lại bằng だめですか',
    'Nhờ người khác hành động với ちょっと + て ください',
  ],
  grammarTopics: ['〜ても いいですか — xin phép', 'だめです / すみませんが — từ chối & mở lời', 'ちょっと 〜て ください — nhờ nhẹ nhàng'],
  vocabularyTopics: ['Động từ nhờ vả', 'Đồ vật mượn & dùng', 'Cụm xin phép'],
  kanjiTopics: ['入', '出'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'しゃしん', romaji: 'shashin', meaningVi: 'tấm ảnh', pos: 'danh từ', exampleJa: 'しゃしんを とっても いいですか。', exampleVi: 'Tôi chụp ảnh được không ạ?' },
    { term: 'とります', romaji: 'torimasu', meaningVi: 'chụp, cầm lấy', pos: 'động từ nhóm 1', exampleJa: 'しゃしんを とります。', exampleVi: 'Tôi chụp ảnh.' },
    { term: 'つかいます', romaji: 'tsukaimasu', meaningVi: 'sử dụng', pos: 'động từ nhóm 1', exampleJa: 'あたらしい でんわを つかいます。', exampleVi: 'Tôi dùng điện thoại mới.' },
    { term: 'かします', romaji: 'kashimasu', meaningVi: 'cho mượn', pos: 'động từ nhóm 1', exampleJa: 'ぺんを かしますよ。', exampleVi: 'Tôi cho bạn mượn bút nhé.' },
    { term: 'かります', romaji: 'karimasu', meaningVi: 'mượn', pos: 'động từ nhóm 2', exampleJa: 'ほんを かります。', exampleVi: 'Tôi mượn sách.' },
    { term: 'まちます', romaji: 'machimasu', meaningVi: 'chờ đợi', pos: 'động từ nhóm 1', exampleJa: 'ここで ともだちを まちます。', exampleVi: 'Tôi chờ bạn ở đây.' },
    { term: 'はいります', romaji: 'hairimasu', meaningVi: 'vào, đi vào', pos: 'động từ nhóm 1', exampleJa: 'きょうしつに はいります。', exampleVi: 'Tôi vào lớp học.' },
    { term: 'でます', romaji: 'demasu', meaningVi: 'ra, đi ra', pos: 'động từ nhóm 2', exampleJa: 'かいしゃを でます。', exampleVi: 'Tôi rời công ty (ra khỏi công ty).' },
    { term: 'すわります', romaji: 'suwarimasu', meaningVi: 'ngồi', pos: 'động từ nhóm 1', exampleJa: 'ここに すわります。', exampleVi: 'Tôi ngồi đây.' },
    { term: 'てつだいます', romaji: 'tetsudaimasu', meaningVi: 'giúp đỡ', pos: 'động từ nhóm 1', exampleJa: 'にもつを てつだいます。', exampleVi: 'Tôi giúp xách hành lý.' },
    { term: 'にもつ', romaji: 'nimotsu', meaningVi: 'hành lý, đồ đạc', pos: 'danh từ', exampleJa: 'にもつは おもいです。', exampleVi: 'Hành lý nặng quá.' },
    { term: 'べんり', romaji: 'benri', meaningVi: 'tiện lợi', pos: 'tính từ な', exampleJa: 'この きっぷは とても べんりです。', exampleVi: 'Loại vé này tiện lợi lắm.' },
    { term: 'だめです', romaji: 'dame desu', meaningVi: 'không được, không nên', pos: 'cụm cố định', exampleJa: 'ここで たばこは だめです。', exampleVi: 'Ở đây không được hút thuốc.' },
    { term: 'とけい', romaji: 'tokei', meaningVi: 'đồng hồ', pos: 'danh từ', exampleJa: 'とけいを かして ください。', exampleVi: 'Cho tôi mượn đồng hồ với.' },
  ],
  grammar: [
    {
      code: 'i14-temo-iidesuka',
      title: '〜て も いいですか — xin phép làm gì',
      formation: 'động từ て-form + も いいですか',
      explanationVi:
        'Muốn xin phép lịch sự: động từ dạng て + も いいですか — "làm … được không ạ?". はいって も いいですか (tôi vào được không?), しゃしんを とって も いいですか (chụp ảnh được không?). Đáp cho phép: はい、いいですよ / どうぞ. Từ chối khéo: すみません、ちょっと… (trời ơi, hơi khó…). Đây là mẫu lịch sự QUAN TRỌNG NHẤT của A1 — thay cho câu hỏi trần trống しますか. Ghép với ちょっと (một chút): ちょっと まって も いいですか?',
      examples: [
        { ja: 'しゃしんを とって も いいですか。', vi: 'Tôi chụp ảnh được không ạ?', tokens: ['しゃしん', 'を', 'とって', 'も', 'いいです', 'か'] },
        { ja: 'ぺんを かして も いいですか。', vi: 'Cho tôi mượn bút được không ạ?' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '「Tôi ngồi đây được không ạ?」 — câu nào đúng?',
          options: ['ここに すわって も いいですか。', 'ここに すわります いいですか。', 'ここに すわって いいも ですか。', 'ここに すわる いいですか。'],
          answerIndex: 0, explanationVi: 'Công thức: て-form + も + いいですか. すわります → すわって → すわって も いいですか.',
        },
        {
          kind: 'fill', prompt: 'Điền hình thức còn thiếu (dùng điện thoại được không?)',
          sentence: 'でんわを つか___ も いいですか。',
          options: ['って', 'います', 'る', 'た'],
          answerIndex: 0, explanationVi: 'つかいます → て-form là つかって. Đủ câu: でんわを つかって も いいですか.',
        },
        {
          kind: 'error', prompt: 'Câu xin phép nào SAI?',
          options: ['はいって も いいですか。', 'かして も いいですか。', 'まって も いいですか。', 'でます も いいですか。'],
          answerIndex: 3, explanationVi: 'でます phải đổi sang て-form: でて も いいですか. Đặt nguyên ます-form trước も là sai cấu trúc.',
        },
        {
          kind: 'choice', prompt: 'Người ta hỏi mượn bút — muốn CHO MƯỢN, đáp thế nào?',
          options: ['はい、いいですよ。', 'いいえ、だめです。', 'すみません、ちょっと…', 'もう けっこうです。'],
          answerIndex: 0, explanationVi: 'Cho phép: はい、いいですよ (được nhé). Từ chối là だめです hoặc すみません、ちょっと…',
        },
      ],
    },
    {
      code: 'i14-dame-sumimasen',
      title: 'だめです / すみませんが… — từ chối & mở lời nhờ',
      formation: 'だめです (không được) · すみませんが、[lời nhờ]',
      explanationVi:
        'Từ chối xin phép một cách lịch sự: すみません、だめです (xin lỗi, không được) hoặc mềm hơn: すみません、ちょっと… (giọng đi xuống — hiểu là ngại lắm). Ngược lại, để MỞ LỜI nhờ vả, luôn chèn すみませんが phía trước: すみませんが、しゅくだいを てつだって ください. Người Nhật đánh giá cao lời mở đầu này — nó biến mệnh lệnh thành đề nghị. Câu cấm ngắn gọn: ここでは だめです (ở đây không được đâu).',
      examples: [
        { ja: 'すみませんが、にもつを もって も いいですか。', vi: 'Xin lỗi, tôi xách hành lý giúp được không ạ?', tokens: ['すみません', 'が', 'にもつ', 'を', 'もって', 'も', 'いいです', 'か'] },
        { ja: 'すみません、ここは だめです。', vi: 'Xin lỗi, ở đây không được đâu.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Mở đầu lời nhờ lịch sự nhất — câu nào?',
          options: ['てつだって ください！', 'すみませんが、てつだって ください。', 'てつだいます！', 'だめですか！'],
          answerIndex: 1, explanationVi: 'Trước lời nhờ luôn có すみませんが (cho tôi làm phiền) — nhờ mà không mở lời nghe rất mệnh lệnh.',
        },
        {
          kind: 'fill', prompt: 'Điền từ còn thiếu (Xin lỗi, ở đây chụp ảnh không được)',
          sentence: 'すみません、ここは しゃしんが___です。',
          options: ['だめ', 'いい', 'べんり', 'すき'],
          answerIndex: 0, explanationVi: 'だめです = không được. Đối lập với いいです (được); べんり là tiện lợi; すき là thích.',
        },
        {
          kind: 'error', prompt: 'Cách từ chối xin phép nào THIẾU lịch sự nhất?',
          options: ['すみません、ちょっと…', 'すみませんが、だめです。', 'だめ！', 'ごめんなさい、できません。'],
          answerIndex: 2, explanationVi: 'Chỉ nói だめ！ trần trống là thô với người lạ. Thêm すみません / ごめんなさい để làm mềm.',
        },
        {
          kind: 'choice', prompt: '「が」 trong すみませんが có vai trò gì?',
          options: ['Như "nhưng" — làm câu mềm đi', 'Chỉ tân ngữ', 'Chỉ chủ sở hữu', 'Nghĩa "vì"'],
          answerIndex: 0, explanationVi: 'が nối đuôi câu nhờ/khó nói — giống "à nhưng mà" — biến yêu cầu thành lời đề nghị nhẹ nhàng.',
        },
      ],
    },
    {
      code: 'i14-chotto-kudasai',
      title: 'ちょっと + 〜て ください — nhờ hành động nhẹ nhàng',
      formation: 'ちょっと + động từ て-form + ください',
      explanationVi:
        'ちょっと (một chút) đặt trước động từ て ください làm lời nhờ bớt nặng: ちょっと まって ください (chờ chút nhé), ちょっと きて ください (lại đây một chút). Muốn nhờ GIÚP ĐỠ thì dùng てつだって ください; mượn đồ dùng かして ください; nhờ chờ dùng まって ください. Kèm chỉ vật: [đồ] を かして ください (cho tôi mượn…). Mẫu này là công cụ sinh tồn số 1 khi bạn bế tắc — nhờ người Nhật chậm nói lại: ゆっくり はなして ください (bài 12) cũng là họ て ください!',
      examples: [
        { ja: 'ちょっと まって ください。', vi: 'Xin chờ một chút nhé.', tokens: ['ちょっと', 'まって', 'ください'] },
        { ja: 'その とけいを かして ください。', vi: 'Cho tôi mượn đồng hồ đó với.' },
      ],
      drills: [
        {
          kind: 'fill', prompt: 'Điền từ còn thiếu (Cho tôi mượn bút với)',
          sentence: 'ぺんを___ ください。',
          options: ['かして', 'かって', 'かりて', 'かきて'],
          answerIndex: 0, explanationVi: 'Cho mượn (từ phía người cho) = かします → て-form かして. かりて là "mượn (từ tôi)".',
        },
        {
          kind: 'particle', prompt: 'Chọn trợ từ đúng (Cho tôi mượn cái đồng hồ đó)',
          sentence: 'その とけい___ かして ください。',
          options: ['を', 'が', 'へ', 'も'],
          answerIndex: 0, explanationVi: 'Đồ cho mượn là tân ngữ của かします → を. Cấu trúc: [đồ] を かして ください.',
        },
        {
          kind: 'choice', prompt: '「Xin giúp tôi xách hành lý」 — câu nào đúng?',
          options: ['にもつを てつだって ください。', 'にもつへ てつだって ください。', 'にもつを てつだいます ください。', 'にもつが てつだって ください。'],
          answerIndex: 0, explanationVi: 'Nhờ giúp: [đối tượng] を + て-form てつだって ください. Trợ từ に/が không đúng vai trò tân ngữ ở đây.',
        },
        {
          kind: 'error', prompt: 'Câu nhờ nào SAI て-form?',
          options: ['まって ください。', 'すわって ください。', 'はいって ください。', 'つかうて ください。'],
          answerIndex: 3, explanationVi: 'つかいます là nhóm 1, て-form là つかって (う → って). つかうて sai quy tắc biến đổi.',
        },
        {
          kind: 'choice', prompt: 'Nhờ ai đó CHỜ một chút — nói thế nào?',
          options: ['ちょっと まって ください。', 'ちょっと まちます。', 'まって も だめです。', 'ちょっと ください まって。'],
          answerIndex: 0, explanationVi: 'Trạng từ ちょっと + て-form + ください: ちょっと まって ください. Trật tự khác là sai.',
        },
      ],
    },
  ],
  dialogue: {
    titleVi: 'Xin mượn bút trên tàu',
    situationVi: 'An ngồi cạnh người nhật Yamada trên tàu — cần điền tờ khai và hỏi xin phép vài việc.',
    lines: [
      { speaker: 'あん', text: 'すみません、ぺんを かして も いいですか。', vi: 'Xin lỗi, cho tôi mượn bút được không ạ?' },
      { speaker: 'やまだ', text: 'はい、いいですよ。どうぞ。', vi: 'Được chứ. Mời bạn.' },
      { speaker: 'あん', text: 'ありがとうございます。すぐ かえします。', vi: 'Em cảm ơn. Em trả ngay ạ.' },
      { speaker: 'やまだ', text: 'この せきは ひろいですね。', vi: 'Ghế này rộng nhỉ.' },
      { speaker: 'あん', text: 'あのう、まどを あけて も いいですか。', vi: 'À, tôi mở cửa sổ được không ạ?' },
      { speaker: 'やまだ', text: 'ごめんなさい、ちょっと さむいです。', vi: 'Xin lỗi, hơi lạnh một chút…' },
      { speaker: 'あん', text: 'わかりました。だいじょうぶです。', vi: 'Vâng, em hiểu rồi. Không sao ạ.' },
      { speaker: 'やまだ', text: 'つぎの えきで てつだいましょう。にもつ、おもいでしょう？', vi: 'Sang ga sau tôi giúp nhé. Hành lý nặng lắm đúng không?' },
    ],
    questions: [
      { questionVi: 'An xin mượn đồ gì đầu tiên?', choices: ['Đồng hồ', 'Bút', 'Sách', 'Hành lý'], answerIndex: 1, explanationVi: 'ぺんを かして も いいですか — cho mượn bút.' },
      { questionVi: 'Yamada từ chối việc nào?', choices: ['Mở cửa sổ', 'Mượn bút', 'Ngồi lại', 'Chụp ảnh'], answerIndex: 0, explanationVi: 'まどを あけて も いいですか → ごめんなさい、ちょっと さむいです — từ chối vì lạnh.' },
      { questionVi: 'Yamada hứa giúp An việc gì?', choices: ['Mua vé', 'Xách hành lý', 'Điền tờ khai', 'Chụp ảnh'], answerIndex: 1, explanationVi: 'にもつ、おもいでしょう？ + てつだいましょう — giúp xách hành lý.' },
    ],
  },
  listening: [
    { scriptJa: 'ちょっと まって ください。', meaningVi: 'Xin chờ một chút nhé.', choices: ['Hãy đi cùng tôi', 'Xin chờ một chút', 'Hãy chụp giúp tôi', 'Xin hãy vào đây'], answerIndex: 1 },
    { scriptJa: 'ここで しゃしんを とって も いいですか。', meaningVi: 'Ở đây chụp ảnh được không ạ?', choices: ['Ở đây chụp ảnh được không?', 'Đây là ảnh của tôi', 'Cho tôi xem ảnh', 'Ảnh này đẹp không?'], answerIndex: 0 },
    { scriptJa: 'すみません、だめです。', meaningVi: 'Xin lỗi, không được.', choices: ['Được rồi, mời bạn', 'Xin lỗi, không được', 'Cảm ơn bạn nhiều', 'Tôi sẽ giúp bạn'], answerIndex: 1 },
    { scriptJa: 'ぺんを かして ください。', meaningVi: 'Cho tôi mượn bút với.', choices: ['Cho tôi mượn bút', 'Tôi cho bạn bút', 'Tôi mua bút rồi', 'Bút này của ai?'], answerIndex: 0, dictation: true },
    { scriptJa: 'はいって も いいですか。', meaningVi: 'Tôi vào được không ạ?', choices: ['Tôi vào được không ạ?', 'Tôi ra ngoài nhé?', 'Bạn vào đi chứ?', 'Cửa mở rồi đấy ạ?'], answerIndex: 0, dictation: true },
  ],
  reading: {
    titleVi: 'Quy tắc trong phòng học tiếng',
    lines: [
      { text: 'べんきょうしつには きそくが あります。', vi: 'Phòng tự học có quy định.' },
      { text: 'まず、なかにはいって も いいです。でも、りょうりは だめです。', vi: 'Trước tiên, được phép vào bên trong. Nhưng nấu ăn thì không được.' },
      { text: 'おちゃは だいじょうぶです。ひるごはんは だめです。', vi: 'Trà thì được. Cơm trưa thì không.' },
      { text: 'でんわは うるさいですから、みせの まえで つかって ください。', vi: 'Điện thoại làm ồn nên hãy dùng ngoài hiên.' },
      { text: 'ほんを かして も いいです。どうぞ ゆっくり よんで ください。', vi: 'Sách thì cho mượn. Hãy đọc thoải mái nhé.' },
      { text: 'わからない ときは、せんせいに きいて ください。', vi: 'Khi không hiểu, hãy hỏi thầy cô.' },
    ],
    questions: [
      { questionVi: 'Phòng tự học cho phép làm gì?', choices: ['Nấu ăn', 'Uống trà', 'Ăn cơm trưa', 'Hát to'], answerIndex: 1, explanationVi: 'おちゃは だいじょうぶです — trà thì được phép.' },
      { questionVi: 'Điện thoại phải dùng ở đâu?', choices: ['Trong phòng', 'Ở hiên ngoài cửa', 'Ở ga', 'Ở bưu điện'], answerIndex: 1, explanationVi: 'みせの まえで つかって ください — dùng ở trước hiên (ngoài phòng).' },
      { questionVi: 'Sách trong phòng thì thế nào?', choices: ['Không được chạm', 'Cho mượn', 'Phải mua', 'Chỉ đọc trong phòng'], answerIndex: 1, explanationVi: 'ほんを かして も いいです — được cho mượn sách.' },
    ],
  },
  speakSentences: [
    { ja: 'すみませんが、ちょっと まって ください。', vi: 'Xin lỗi, xin chờ một chút.' },
    { ja: 'しゃしんを とって も いいですか。', vi: 'Tôi chụp ảnh được không ạ?' },
    { ja: 'ぺんを かして も いいですか。', vi: 'Cho tôi mượn bút được không ạ?' },
    { ja: 'ここは だめです。', vi: 'Ở đây không được đâu.' },
    { ja: 'にもつを てつだって ください。', vi: 'Xin giúp tôi xách hành lý.' },
  ],
  translatePairs: [
    { ja: 'ちょっと まって ください。', vi: 'Xin chờ một chút nhé.', tokens: ['ちょっと', 'まって', 'ください'], distractors: ['すわって'] },
    { ja: 'しゃしんを とって も いいですか。', vi: 'Tôi chụp ảnh được không ạ?', tokens: ['しゃしん', 'を', 'とって', 'も', 'いいです', 'か'], distractors: ['みます'] },
    { ja: 'ここで でんわを つかって も いいですか。', vi: 'Ở đây tôi dùng điện thoại được không ạ?', tokens: ['ここ', 'で', 'でんわ', 'を', 'つかって', 'も', 'いいです', 'か'], distractors: ['だめ'] },
    { ja: 'その とけいを かして ください。', vi: 'Cho tôi mượn đồng hồ đó với.', tokens: ['その', 'とけい', 'を', 'かして', 'ください'], distractors: ['かりて'] },
    { ja: 'すみませんが、にもつを てつだって ください。', vi: 'Xin lỗi, hãy giúp tôi xách hành lý.', tokens: ['すみません', 'が', 'にもつ', 'を', 'てつだって', 'ください'], distractors: ['まって'] },
  ],
  translateJaVi: [
    { ja: 'すみません、ここで すわって も いいですか。', vi: 'Xin lỗi, tôi ngồi đây được không ạ?', wrongVi: ['Xin lỗi, tôi ngồi đây nhé.', 'Ở đây không được ngồi đâu.', 'Xin lỗi, ghế này của ai vậy?'] },
    { ja: 'ごめんなさい、ちょっと だめです。', vi: 'Xin lỗi, hơi khó một chút (không được).', wrongVi: ['Xin lỗi, rất tiện lợi.', 'Không sao, cứ tự nhiên.', 'Cảm ơn bạn đã giúp tôi.'] },
    { ja: 'ほんを かりても いいですか。', vi: 'Tôi mượn sách được không ạ?', wrongVi: ['Tôi cho bạn mượn sách nhé?', 'Sách này mua ở đâu vậy?', 'Tôi đọc sách mỗi ngày.'] },
  ],
  wordBank: [
    { ja: 'でんわを つかって も いいですか。', vi: 'Tôi dùng điện thoại được không ạ?', tokens: ['でんわ', 'を', 'つかって', 'も', 'いいです', 'か'], distractors: ['だめ'] },
    { ja: 'にもつを てつだいます。', vi: 'Tôi giúp xách hành lý.', tokens: ['にもつ', 'を', 'てつだいます'], distractors: ['まちます'] },
  ],
  kanji: ['入', '出'],
  writingKana: ['み', 'ち', 'た', 'ず', 'ね'],
}
