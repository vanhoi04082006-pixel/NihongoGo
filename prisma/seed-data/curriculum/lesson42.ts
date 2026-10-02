/**
 * NihongoGo — Bài 42: Tổng ôn ngữ pháp N5 — Phần 2 (文法総復習Ⅱ).
 * Bài TỔNG ÔN: mỗi "grammar point" là một NHÓM ôn (điều kiện & nhượng bộ /
 * suy đoán & trích dẫn / cho–nhận & kính ngữ cốt lõi), drills heterogeneous
 * mỗi câu một ngữ điểm, bám ngữ pháp L1–L41. Không dạy mẫu mới.
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson42: CurriculumLesson = {
  order: 42,
  slug: 'l42-tong-on-ngu-phap-n5-2',
  title: 'Tổng ôn ngữ pháp N5 — Phần 2',
  titleJa: '文法総復習Ⅱ',
  description: 'Ôn các mẫu câu giao tiếp và kính ngữ cơ bản, chốt lại toàn bộ phạm vi N5.',
  learningObjectives: [
    'Ôn mẫu câu mời, đề nghị, điều kiện',
    'Ôn kính ngữ cơ bản',
    'Tự kiểm tra tổng thể trước khi lên N4',
  ],
  grammarTopics: ['Ôn mẫu câu giao tiếp thông dụng', 'Ôn so sánh và điều kiện'],
  vocabularyTopics: ['Ôn từ vựng giao tiếp', 'Ôn từ vựng thời gian và số'],
  kanjiTopics: ['Kanji thời gian (日・月・年)', 'Kanji phương vị (上・下・中)'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'せつめい', romaji: 'setsumei', meaningVi: 'sự giải thích, lời giảng giải', pos: 'danh từ', exampleJa: '先生の せつめいは わかりやすいです。', exampleVi: 'Lời giải thích của thầy rất dễ hiểu.' },
    { term: 'さんか', romaji: 'sanka', meaningVi: 'sự tham gia', pos: 'danh từ (する)', exampleJa: 'サッカーの しあいに さんかします。', exampleVi: 'Tôi tham gia trận đấu bóng đá.' },
    { term: 'こたえ', romaji: 'kotae', meaningVi: 'câu trả lời, đáp án', pos: 'danh từ', exampleJa: 'この もんだいの こたえが わかりません。', exampleVi: 'Tôi không biết câu trả lời của bài này.' },
    { term: 'メール', romaji: 'mēru', meaningVi: 'email, thư điện tử', pos: 'danh từ', exampleJa: '日本の ともだちに メールを かきます。', exampleVi: 'Tôi viết email cho bạn người Nhật.' },
    { term: 'クラス', romaji: 'kurasu', meaningVi: 'lớp học', pos: 'danh từ', exampleJa: 'クラスの 人と 一緒に 勉強します。', exampleVi: 'Tôi học cùng người trong lớp.' },
    { term: 'がくせい', romaji: 'gakusei', meaningVi: 'sinh viên', pos: 'danh từ', exampleJa: 'あの 人は だいがくの がくせいです。', exampleVi: 'Người kia là sinh viên đại học.' },
    { term: '新年', reading: 'しんねん', romaji: 'shinnen', meaningVi: 'năm mới', pos: 'danh từ', exampleJa: '新年の あさ、こうえんへ 行きます。', exampleVi: 'Sáng năm mới tôi đi công viên.' },
    { term: '毎年', reading: 'まいとし', romaji: 'maitoshi', meaningVi: 'hằng năm, mỗi năm', pos: 'phó từ', exampleJa: '毎年、海で およぎます。', exampleVi: 'Hằng năm tôi đều bơi ở biển.' },
    { term: '祝日', reading: 'しゅくじつ', romaji: 'shukujitsu', meaningVi: 'ngày lễ, ngày nghỉ lễ', pos: 'danh từ', exampleJa: 'つぎの 祝日は 何月ですか。', exampleVi: 'Kỳ nghỉ lễ tiếp theo là tháng mấy nhỉ?' },
    { term: '何月', reading: 'なんがつ', romaji: 'nangatsu', meaningVi: 'tháng mấy', pos: 'danh từ (nghi vấn)', exampleJa: 'たんじょうびは 何月ですか。', exampleVi: 'Sinh nhật của bạn là tháng mấy?' },
    { term: 'いちばん', romaji: 'ichiban', meaningVi: 'hơn cả, trên hết, số một', pos: 'phó từ', exampleJa: 'いちばん すきな きせつは 春です。', exampleVi: 'Mùa tôi thích nhất là mùa xuân.' },
    { term: 'おわり', romaji: 'owari', meaningVi: 'phần kết thúc, sự chấm dứt', pos: 'danh từ', exampleJa: 'これで 先生の はなしは おわりです。', exampleVi: 'Nói chuyện của thầy đến đây là hết.' },
    { term: '簡単', reading: 'かんたん', romaji: 'kantan', meaningVi: 'đơn giản, dễ', pos: 'tính từ な', exampleJa: 'この テストは 簡単でした。', exampleVi: 'Bài kiểm tra này (hóa ra) khá dễ.' },
    { term: 'おくに', romaji: 'okuni', meaningVi: 'quê/quốc gia của ngài (kính)', pos: 'danh từ (kính ngữ)', exampleJa: 'おくには どちらですか。', exampleVi: 'Ngài quê ở đâu ạ?' },
    { term: 'おしごと', romaji: 'oshigoto', meaningVi: 'công việc của ngài (kính)', pos: 'danh từ (kính ngữ)', exampleJa: 'おしごとは いつも いそがしいですか。', exampleVi: 'Công việc của ngài lúc nào cũng bận à?' },
    { term: 'おいそがしい', romaji: 'oisogashii', meaningVi: 'bận (cách nói kính)', pos: 'tính từ い (kính ngữ)', exampleJa: '先生、おいそがしいですか。', exampleVi: 'Thầy ơi, thầy có bận không ạ?' },
    { term: 'おばあさん', romaji: 'obāsan', meaningVi: 'bà (gọi người khác hoặc bà mình)', pos: 'danh từ', exampleJa: 'おばあさんに セーターを あげました。', exampleVi: 'Tôi đã tặng bà chiếc áo len.' },
    { term: 'おります', romaji: 'orimasu', meaningVi: 'ở, có (người) — dạng khiêm nhường của います', pos: 'động từ nhóm 2', exampleJa: '父は 今 うちに おります。', exampleVi: 'Bố tôi (nói khiêm) hiện đang ở nhà.' },
    { term: 'えらびます', romaji: 'erabimasu', meaningVi: 'chọn, lựa', pos: 'động từ nhóm 1', exampleJa: 'たんじょうびの プレゼントを えらびます。', exampleVi: 'Tôi chọn quà sinh nhật.' },
    { term: 'はじまります', romaji: 'hajimarimasu', meaningVi: 'bắt đầu (tự khởi động)', pos: 'động từ nhóm 1', exampleJa: 'しけんは 九じに はじまります。', exampleVi: 'Kỳ thi bắt đầu lúc 9 giờ.' },
  ],
  grammar: [
    {
      code: 'l42-dieu-kien-nhuong-bo',
      title: 'Điều kiện & nhượng bộ — たら・ば・なら・のに・ても',
      formation: 'V (thể た) + ら / tính từ い→ければ・Vば (かえば・たべれば・あれば) / N・V (thể thường) + なら / V (thể thường) + のに / V (thể て) + も',
      explanationVi:
        'Tổng ôn nhóm "nếu… thì…" và "dù… vẫn…" của N5. (1) たら — điều kiện giả định tự nhiên nhất, vế sau nói gì cũng được (khuyên, mời, quá khứ): あめが ふったら、うちで 本を よみます. (2) ば — nhấn "chỉ cần điều kiện đúng thì kết quả xảy ra": tính từ い → ければ (やすければ かいます), nhóm 1 → え-ば (かえば), nhóm 2 → れば (たべれば), đặc biệt あります → あれば. (3) なら — "nếu là chuyện đó thì…": đón lấy ý người nghe vừa nêu làm đề tài, ghép sau danh từ hoặc thể thường: だいがくへ いくなら…. (4) のに — "mặc dù… (mà)": kết quả trái kỳ vọng, kèm sắc thái ngạc nhiên hoặc tiếc: 9じに ねたのに、ねむいです. (5) ても — "dù… vẫn": kết quả không đổi dù điều kiện đổi; nhóm 1 → て/でも (よんでも・かっても), nhóm 2 → ても (たべても), danh từ/な-adj → でも (ひまでも). Mẹo phân biệt nhanh: nghĩa "nếu" → たら/ば/なら; nghĩa "dù/mặc dù" → ても (kết quả giữ nguyên) và のに (kết quả trái mong đợi).',
      examples: [
        { ja: 'あめが ふったら、うちで 本を よみます。', vi: 'Nếu trời mưa thì tôi đọc sách ở nhà.', tokens: ['あめ', 'が', 'ふったら', 'うち', 'で', 'ほん', 'を', 'よみます'] },
        { ja: 'この かさは たかければ、かいません。', vi: 'Nếu chiếc ô này đắt thì tôi không mua.' },
        { ja: 'だいがくへ いくなら、この じてんしゃが べんりですよ。', vi: 'Nếu bạn định lên đại học thì chiếc xe đạp này tiện đấy.' },
        { ja: 'にがてでも、毎日 新聞を よみます。', vi: 'Dù không giỏi tôi vẫn đọc báo mỗi ngày.' },
      ],
      drills: [
        {
          kind: 'fill', prompt: 'Điền giả định (Nếu mưa rơi thì tôi không đi công viên)',
          sentence: 'あめが ふっ___、こうえんへ いきません。',
          options: ['たら', 'ても', 'なら', 'のに'],
          answerIndex: 0, explanationVi: 'たら = "nếu… thì" — giả định tự nhiên nhất của N5. ても = "dù… vẫn"; なら cần bám vào đề tài người nghe vừa nêu; のに = "mặc dù (trái kỳ vọng)".',
        },
        {
          kind: 'fill', prompt: 'Điền điều kiện (Nếu cuốn từ điển này rẻ thì tôi sẽ mua)',
          sentence: 'この じてんしょは やすけれ___、かいます。',
          options: ['ら', 'ば', 'なら', 'のに'],
          answerIndex: 1, explanationVi: 'Tính từ い → ければ (やすい → やすければ) rồi ghép ば: "chỉ cần rẻ là mua". なら ghép sau danh từ/thể thường để lấy lại đề tài, không đứng được ở vị trí này.',
        },
        {
          kind: 'fill', prompt: 'Điền (Nếu bạn định đi học đại học thì cuốn từ điển này hữu ích đấy)',
          sentence: 'だいがくへ いく___、この じてんしょが べんりですよ。',
          options: ['たら', 'ば', 'なら', 'のに'],
          answerIndex: 2, explanationVi: 'なら đón lấy thông tin vừa được nhắc ("định đi đại học") làm điều kiện: "nếu là chuyện đó thì…". たら/ば nói về giả định chưa ai có kế hoạch.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng nghĩa "Tôi đã hẹn 8 giờ mà bạn ấy không đến"?',
          options: ['8じに やくそくしたから、きませんでした。', '8じに やくそくしたのに、きませんでした。', '8じに やくそくしても、きました。', '8じに やくそくしたので、きました。'],
          answerIndex: 1, explanationVi: 'のに = "mặc dù… (mà)", mang sắc thái ngạc nhiên/tiếc; から/ので = "vì" (nêu lý do, sai nghĩa); しても…きました = "dù hẹn vẫn đến" — nghĩa ngược hoàn toàn.',
        },
      ],
    },
    {
      code: 'l42-suy-doan-trich-dan',
      title: 'Suy đoán & trích dẫn — と 思います・かもしれません・はずです・そうです・ようです',
      formation: 'Câu (thể thường) + と おもいます (chủ quan) / V・N + かもしれません (khả năng thấp) / ~た/している + はずです (chắc chắn, có căn cứ) / Câu (thể thường) + そうです (nghe nói) / N + の ようです (dường như)',
      explanationVi:
        'Tổng ôn "thang độ chắc chắn" và cách trích dẫn thông tin. (1) と おもいます — suy đoán CHỦ QUAN của người nói: あしたは あめが ふると おもいます; trước おもいます bắt buộc trợ từ と, nội dung trích dẫn đứng ở thể thường. (2) かもしれません — "có thể" (khả năng thấp, ~50%): こんや 来る かもしれません. (3) はずです — "chắc hẳn" — người nói tin chắc DỰA TRÊN CĂN CỨ: かえった はずです. (4) そうです (nghe nói) — trích dẫn lời người khác: thể thường + そうです (danh từ/な-adj thì だ → そうです): てんきよほうに よると、あしたは はれだ そうです; phân biệt với そうです (trông có vẻ) ghép sau gốc ます: おいしそうです. (5) ようです — "dường như": suy đoán từ quan sát gián tiếp, ghép sau danh từ + の hoặc thể thường: びょうきの ようです. Thang chắc chắn giảm dần: はずです > と おもいます > かもしれません; còn そうです (nghe nói) là tin từ người khác, ようです là ấn tượng của chính mình.',
      examples: [
        { ja: 'あしたは あめが ふると おもいます。', vi: 'Tôi nghĩ ngày mai trời sẽ mưa.', tokens: ['あした', 'は', 'あめ', 'が', 'ふると', 'おもいます'] },
        { ja: 'こんやの パーティーに たなかさんが 来る かもしれません。', vi: 'Có thể bạn Tanaka sẽ đến bữa tiệc tối nay.' },
        { ja: 'たなかさんは もう うちに かえった はずです。', vi: 'Chắc hẳn Tanaka đã về nhà rồi (có căn cứ).' },
        { ja: 'てんきよほうに よると、あしたは はれだ そうです。', vi: 'Theo dự báo thời tiết thì nghe nói ngày mai trời quang.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Chọn trợ từ (Tôi nghĩ ngày mai trời sẽ lạnh)',
          sentence: 'あしたは さむい___ おもいます。',
          options: ['と', 'を', 'に', 'の'],
          answerIndex: 0, explanationVi: 'Trước おもいます bắt buộc trợ từ と để dẫn nội dung suy đoán: さむいと おもいます. を là tân ngữ, の là sở hữu — đều sai ở đây.',
        },
        {
          kind: 'choice', prompt: '"Chắc hẳn Tanaka đã về nhà rồi — vì cặp của bạn ấy không còn ở đây nữa" — dùng mẫu nào?',
          options: ['かえった はずです。', 'かえる かもしれません。', 'かえたいと おもいます。', 'かえって ください。'],
          answerIndex: 0, explanationVi: 'はずです = suy luận CHẮC CHẮN có căn cứ (cặp không còn). かもしれません = khả năng thấp không căn cứ; かえたい là ước muốn; かえって ください là yêu cầu.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng nghĩa "Nghe nói tuần sau ở công viên có lễ hội"?',
          options: ['らいしゅう、こうえんで おまつりが ある そうです。', 'らいしゅう、こうえんで おまつりが あって そうです。', 'らいしゅう、こうえんで おまつりが あります そうです。', 'らいしゅう、こうえんで おまつりが あった はずです。'],
          answerIndex: 0, explanationVi: 'Trích dẫn "nghe nói" = thể THƯỜNG + そうです (ある そうです); trước そうです không dùng ます-form; あって そうです là "trông sắp có" (ghép gốc ます — nghĩa khác); はずです là suy luận của chính mình.',
        },
        {
          kind: 'fill', prompt: 'Điền (Yuki nghỉ học hôm nay — dường như bạn ấy bị ốm)',
          sentence: 'ゆきさんは きょう やすんで います。びょうきの___です。',
          options: ['よう', 'はず', 'こと', 'ところ'],
          answerIndex: 0, explanationVi: 'Danh từ + の + ようです = suy đoán từ dấu hiệu gián tiếp ("dường như bị ốm"). Riêng そうです (trông có vẻ) không ghép được sau danh từ の, nên よう là đáp án duy nhất.',
        },
      ],
    },
    {
      code: 'l42-cho-nhan-kinh-ngu',
      title: 'Cho & nhận + kính ngữ cốt lõi — あげます・くれます・もらいます・いらっしゃいます・おります',
      formation: 'わたしは [người nhận]に [vật]を あげます / [người cho]が わたしに [vật]を くれます / わたしは [người cho]に・から [vật]を もらいます / いらっしゃいます (tôn xưng: ở/đi/đến)・おります (khiêm: ở)',
      explanationVi:
        'Tổng ôn trao đổi vật và kính ngữ cốt lõi. CHO–NHẬN có "la bàn hướng": あげます (tôi → người khác), くれます (người khác → TÔI, kèm lòng biết ơn), もらいます (tôi nhận ← người khác; người cho đứng với に hoặc から, から nhấn nguồn): わたしは ともだちに ケーキを あげます / たなかさんが わたしに かさを くれます / わたしは おばあさんから てがみを もらいます. Lưu ý: người nhận là bậc trên thì nâng cấp あげます → さしあげます, もらいます → いただきます (đã học ở các bài trước). KÍNH NGỮ cốt lõi: いらっしゃいます thay います/いきます/きます khi nói về NGƯỜI TRÊN (先生は じむしつに いらっしゃいます); nói khiêm về chính mình dùng おります (わたしは うちに おります). Nguyên tắc vàng: tôn xưng người ngoài — khiêm nhường bản thân; tuyệt đối không dùng いらっしゃいます cho chính mình.',
      examples: [
        { ja: 'わたしは ともだちに ケーキを あげました。', vi: 'Tôi đã tặng bạn cái bánh kem.', tokens: ['わたし', 'は', 'ともだち', 'に', 'ケーキ', 'を', 'あげました'] },
        { ja: 'たなかさんが わたしに かさを くれました。', vi: 'Tanaka đã tặng tôi chiếc ô.' },
        { ja: 'わたしは おばあさんから てがみを もらいました。', vi: 'Tôi đã nhận được thư của bà.' },
        { ja: 'やまだ先生は じむしつに いらっしゃいます。', vi: 'Thầy Yamada đang ở phòng làm việc ạ.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Chọn trợ từ (Tôi đã nhận tờ báo từ senpai)',
          sentence: 'わたしは せんぱい___ しんぶんを もらいました。',
          options: ['から', 'まで', 'より', 'へ'],
          answerIndex: 0, explanationVi: 'もらいます đánh dấu người cho bằng に hoặc から (から nhấn "nguồn"). まで (đến), より (so sánh), へ (hướng đi) đều không dùng với もらいます.',
        },
        {
          kind: 'particle', prompt: 'Chọn trợ từ (Tanaka đã tặng tôi sách)',
          sentence: 'たなかさん___ わたしに ほんを くれました。',
          options: ['が', 'を', 'で', 'も'],
          answerIndex: 0, explanationVi: 'Với くれます, NGƯỜI CHO làm chủ ngữ → が; người nhận đứng với に. Đừng đánh dấu người cho bằng を — を chỉ dành cho vật được tặng.',
        },
        {
          kind: 'fill', prompt: 'Điền dạng kính ngữ (Ngày mai giám đốc sẽ đến nơi này)',
          sentence: 'しゅちょうは あした こちらへ___。',
          options: ['いらっしゃいます', 'おります', 'まいります', 'もうします'],
          answerIndex: 0, explanationVi: 'いらっしゃいます = tôn xưng "đi/đến/ở" nói về người trên. おります (ở, khiêm), まいります (đi, khiêm), もうします (nói, khiêm) chỉ dùng cho CHÍNH MÌNH.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng nghĩa "Tôi (khiêm) luôn ở phòng làm việc vào thứ Sáu"?',
          options: ['わたしは いつも きんようびに じむしつに いらっしゃいます。', 'わたしは いつも きんようびに じむしつに おります。', 'わたしは いつも きんようびに じむしつに いらっしゃいました。', 'わたしは いつも きんようびに じむしつを おります。'],
          answerIndex: 1, explanationVi: 'いらっしゃいます chỉ dùng TÔN XƯNG NGƯỜI KHÁC — nói về mình phải dùng dạng khiêm nhường おります, và nơi ở nối bằng に (không dùng を).',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Ghé phòng thầy Yamada',
      situationVi: 'Linh mang bánh quà Việt Nam đến cảm ơn thầy Yamada; thầy đang ở phòng làm việc.',
      lines: [
        { speaker: 'リン', ja: '先生、しつれいします。今、お時間は ありますか。', vi: 'Thầy ơi, con xin phép vào. Bây giờ thầy có chút thời gian không ạ?' },
        { speaker: 'やまだ', ja: 'あ、リンさん。どうぞ 入って ください。わたしは この 時間、いつも じむしつに おりますよ。', vi: 'À, Linh à. Mời bạn vào. Giờ này tôi vẫn thường ở phòng làm việc đấy.' },
        { speaker: 'リン', ja: '先生は いつも おいそがしいですね。', vi: 'Thầy lúc nào cũng bận ạ.' },
        { speaker: 'やまだ', ja: 'いいえ、今週は しけんが ありませんから、すこし ゆっくりです。', vi: 'Không hẳn, tuần này không có kỳ thi nên thầy rảnh hơn một chút.' },
        { speaker: 'リン', ja: 'あの、これは ベトナムの おかしです。おばあさんが 送ってくれました。先生に あげます。', vi: 'Dạ, đây là bánh Việt Nam ạ. Bà con gửi sang. Con tặng thầy ạ.' },
        { speaker: 'やまだ', ja: 'まあ、ありがとう。じゃあ、テーブルの 上に おいて、あとで みんなで たべましょう。', vi: 'Ơ, cảm ơn nhé. Vậy để lên bàn, chút nữa mọi người cùng ăn.' },
        { speaker: 'リン', ja: 'はい。おばあさんは 毎年 冬に てがみを 送ってくれます。', vi: 'Vâng ạ. Bà con mỗi năm mùa đông lại gửi thư cho con.' },
        { speaker: 'やまだ', ja: 'それは いいですね。おばあさんに どうぞ よろしく 伝えて ください。', vi: 'Thế thì hay đấy. Nhờ bạn chuyển lời chúc sức khỏe đến bà nhé.' },
        { speaker: 'リン', ja: 'はい、伝えます。しけんは 12月に ありますから、これから 毎日 勉強します。それでは、しつれいしました。', vi: 'Vâng, con sẽ nói với bà ạ. Tháng 12 có kỳ thi nên từ giờ con học mỗi ngày. Thế rồi, con xin phép về ạ.' },
      ],
    },
    {
      titleVi: 'Kế hoạch đón năm mới',
      situationVi: 'Cuối năm, Linh và Sayuri trò chuyện về kế hoạch Tết Nhật của hai người.',
      lines: [
        { speaker: 'さゆり', ja: 'リンさん、もうすぐ 新年ですね。何か よていは ありますか。', vi: 'Linh này, sắp sang năm mới rồi nhỉ. Bạn có kế hoạch gì không?' },
        { speaker: 'リン', ja: 'もし 天気が よかったら、ともだちと 京都へ 行きます。ホテルは えきの となりです。', vi: 'Nếu trời đẹp thì tôi đi Kyoto với bạn. Khách sạn ngay cạnh nhà ga.' },
        { speaker: 'さゆり', ja: 'いいですね。京都の 山の 上に 古い お寺が ありますよ。その 下に きれいな 町が あります。', vi: 'Tốt đấy. Trên núi ở Kyoto có ngôi chùa cổ lắm. Phía dưới là một khu phố rất đẹp.' },
        { speaker: 'リン', ja: 'じゃあ、お寺も 見たいです。京都は さむいと おもいますから、コートを 持って 行きます。', vi: 'Vậy thì tôi muốn xem cả chùa nữa. Tôi nghĩ Kyoto lạnh nên sẽ mang áo khoác theo.' },
        { speaker: 'さゆり', ja: 'わたしは うちで ゆっくり します。テレビで おまつりを 見る かもしれません。', vi: 'Còn tôi ở nhà nghỉ ngơi. Có khi tôi xem lễ hội trên tivi.' },
        { speaker: 'リン', ja: '京都から 帰ったら、さゆりさんに おみやげを あげますね。', vi: 'Từ Kyoto về rồi, tôi sẽ tặng quà lưu niệm cho cậu nhé.' },
        { speaker: 'さゆり', ja: 'わあ、ありがとう。京都で たくさん 写真を 撮って ください。', vi: 'Ơ hay, cảm ơn trước nhé. Ở Kyoto chụp thật nhiều ảnh vào giúp mình.' },
        { speaker: 'リン', ja: 'はい。もし ゆきが ふったら、山が とても きれいだと おもいます。', vi: 'Ừ. Nếu mà có tuyết rơi thì tôi nghĩ núi sẽ đẹp lắm.' },
        { speaker: 'さゆり', ja: 'そうですね。でも、ゆきが ふっても、電車は うごきますから、だいじょうぶですよ。', vi: 'Đúng đấy. Nhưng dù có tuyết thì tàu vẫn chạy, nên yên tâm nhé.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'やまだ先生は 今 じむしつに いらっしゃいます。', meaningVi: 'Thầy Yamada hiện đang ở phòng làm việc ạ.', choices: ['Thầy Yamada hiện đang ở phòng làm việc', 'Thầy Yamada hiện đang ở nhà', 'Tôi (khiêm) đang ở phòng làm việc', 'Thầy Yamada đã về nhà rồi'], answerIndex: 0, dictation: true },
    { scriptJa: 'もし あめが ふったら、しあいは ありません。', meaningVi: 'Nếu mưa rơi thì sẽ không có trận đấu.', choices: ['Nếu mưa rơi thì sẽ không có trận đấu', 'Dù mưa rơi trận đấu vẫn diễn ra', 'Trận đấu đã bị hoãn vì mưa', 'Nếu trời nắng thì không có trận đấu'], answerIndex: 0, dictation: true },
    { scriptJa: 'たなかさんは もう うちに かえった はずです。', meaningVi: 'Chắc hẳn Tanaka đã về nhà rồi.', choices: ['Tanaka có thể sẽ về nhà', 'Chắc hẳn Tanaka đã về nhà rồi', 'Tanaka định về nhà ngay bây giờ', 'Nghe nói Tanaka đã về nhà'], answerIndex: 1 },
    { scriptJa: 'わたしは 毎年 おばあさんの うちへ 行きます。', meaningVi: 'Tôi hằng năm đều đến nhà bà.', choices: ['Tôi hằng năm đều đến nhà bà', 'Tôi hằng tháng đều đến nhà bà', 'Tôi chưa từng đến nhà bà', 'Bà hằng năm đến nhà tôi'], answerIndex: 0 },
  ],
  reading: {
    titleVi: 'Email mời dự tiệc năm mới',
    lines: [
      { text: 'たなかさん、こんにちは。お元気ですか。', vi: 'Tanaka này, chào bạn. Bạn vẫn khỏe chứ?' },
      { text: '12月28日に クラブの 新年パーティーが あります。', vi: 'Ngày 28 tháng 12 có tiệc năm mới của câu lạc bộ.' },
      { text: '会場は 大学の 中の レストランです。2かいに あります。', vi: 'Địa điểm là nhà hàng trong khuôn viên đại học, ở tầng 2.' },
      { text: 'もし あめが ふっても、レストランは 大学の 中に ありますから、だいじょうぶです。', vi: 'Dù trời mưa thì nhà hàng cũng nằm trong khuôn viên đại học nên không sao.' },
      { text: 'たなかさんが 来るなら、えきから 一緒に あるいて 行きましょう。', vi: 'Nếu bạn định đến thì mình cùng đi bộ từ nhà ga nhé.' },
      { text: 'わたしは おかしを たくさん 作って 行きます。', vi: 'Tôi sẽ làm nhiều bánh mang đến.' },
      { text: '夜は さむくなると 思いますから、コートを 忘れないで ください。', vi: 'Tôi nghĩ buổi tối trời sẽ lạnh nên bạn đừng quên áo khoác nhé.' },
      { text: '時間が あったら、返事を メールで ください。', vi: 'Nếu có thời gian, bạn hãy trả lời qua email nhé.' },
      { text: 'ぜひ 来て ください。みんな 待って います。', vi: 'Nhất định hãy đến nhé. Mọi người đang chờ đấy.' },
    ],
    questions: [
      { questionVi: 'Tiệc năm mới diễn ra ở đâu?', choices: ['Nhà hàng trong khuôn viên đại học', 'Nhà hàng gần nhà ga', 'Sảnh tầng 1 của đại học', 'Công viên gần đại học'], answerIndex: 0, explanationVi: 'Dòng 3: 大学の 中の レストラン — の định ngữ + 中 (trong) + 2かい (tầng 2); に chỉ vị trí tồn tại.' },
      { questionVi: 'Vì sao người viết email nói "dù mưa cũng không sao"?', choices: ['Vì tiệc sẽ chuyển vào trong nhà', 'Vì khi mưa vẫn có xe đưa đón', 'Vì nhà hàng nằm trong khuôn viên đại học (rất gần)', 'Vì ngày 28 tháng 12 không bao giờ mưa'], answerIndex: 2, explanationVi: 'Dòng 4: ても (nhượng bộ "dù… vẫn") + から (lý do): 大学の 中に ありますから.' },
      { questionVi: 'Người viết dự đoán gì về buổi tối ngày tiệc?', choices: ['Trời sẽ mưa to', 'Trời sẽ lạnh', 'Sẽ không ai đến', 'Tiệc sẽ kết thúc rất muộn'], answerIndex: 1, explanationVi: 'Dòng 7: さむくなると 思います — と + おもいます (suy đoán chủ quan) + から nêu lý do của lời dặn.' },
    ],
  },
  speakSentences: [
    { ja: 'もし あめが ふったら、うちで ゆっくり します。', vi: 'Nếu mưa rơi thì tôi sẽ nghỉ ngơi ở nhà.' },
    { ja: 'あしたは さむいと おもいます。', vi: 'Tôi nghĩ ngày mai trời lạnh.' },
    { ja: 'わたしは あした うちに おります。', vi: 'Ngày mai tôi (nói khiêm) ở nhà.' },
    { ja: 'つぎの 祝日は 何月ですか。', vi: 'Kỳ nghỉ lễ tiếp theo là tháng mấy nhỉ?' },
  ],
  translatePairs: [
    { ja: 'もし あめが ふったら、しあいは ありません。', vi: 'Nếu mưa rơi thì sẽ không có trận đấu.', tokens: ['もし', 'あめ', 'が', 'ふったら', 'しあい', 'は', 'ありません'], distractors: ['ても'] },
    { ja: 'たなかさんは もう うちに かえった はずです。', vi: 'Chắc hẳn Tanaka đã về nhà rồi.', tokens: ['たなかさん', 'は', 'もう', 'うち', 'に', 'かえった', 'はずです'], distractors: ['かもしれません'] },
    { ja: 'わたしは おばあさんに とけいを あげました。', vi: 'Tôi đã tặng bà chiếc đồng hồ.', tokens: ['わたし', 'は', 'おばあさん', 'に', 'とけい', 'を', 'あげました'], distractors: ['くれました'] },
    { ja: 'しゅちょうは あした こちらへ いらっしゃいます。', vi: 'Ngày mai giám đốc sẽ đến nơi này.', tokens: ['しゅちょう', 'は', 'あした', 'こちら', 'へ', 'いらっしゃいます'], distractors: ['おります'] },
  ],
  kanji: ['日', '年', '上', '下', '中'],
}
