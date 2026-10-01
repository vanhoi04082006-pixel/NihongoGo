/**
 * NihongoGo — Bài 39: 〜ばかり — Vừa mới / chỉ toàn.
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson39: CurriculumLesson = {
  order: 39,
  slug: 'l39-bakari',
  title: '〜ばかり — Vừa mới / chỉ toàn',
  titleJa: '〜ばかり',
  description: 'Nói việc vừa mới xảy ra và thói quen chỉ toàn làm một việc với ばかり.',
  learningObjectives: [
    'Dùng 〜たばかり (vừa mới làm)',
    'Dùng 〜ばかり (chỉ mỗi việc đó)',
    'Than phiền nhẹ nhàng về thói quen',
  ],
  grammarTopics: ['〜たばかり (vừa mới)', '〜ばかり (chỉ mỗi việc đó)'],
  vocabularyTopics: ['Sự việc vừa xảy ra', 'Thói quen lặp lại'],
  kanjiTopics: ['Kanji thời điểm gần (今・昨・頃)'],
  difficulty: 'ELEMENTARY',
  vocabulary: [
    { term: '今', reading: 'いま', romaji: 'ima', meaningVi: 'bây giờ, ngay lúc này', pos: 'danh từ', exampleJa: '今から としょかんへ いきます。', exampleVi: 'Bây giờ tôi sẽ đến thư viện.' },
    { term: '今日', reading: 'きょう', romaji: 'kyō', meaningVi: 'hôm nay', pos: 'danh từ', exampleJa: '今日は とても いそがしいです。', exampleVi: 'Hôm nay tôi rất bận.' },
    { term: '昨日', reading: 'きのう', romaji: 'kinō', meaningVi: 'hôm qua', pos: 'danh từ', exampleJa: '昨日、こうえんへ さんぽに いきました。', exampleVi: 'Hôm qua tôi đi dạo ở công viên.' },
    { term: '昨晩', reading: 'さくばん', romaji: 'sakuban', meaningVi: 'tối qua, đêm qua', pos: 'danh từ', exampleJa: '昨晩は おそくまで ほんを よんで いました。', exampleVi: 'Tối qua tôi đọc sách đến khuya.' },
    { term: '頃', reading: 'ころ', romaji: 'koro', meaningVi: 'lúc, khoảng thời gian (khi nhớ lại)', pos: 'danh từ', exampleJa: '学生の 頃を おもいだしました。', exampleVi: 'Tôi chợt nhớ lại thuở còn đi học.' },
    { term: 'この頃', reading: 'このごろ', romaji: 'kono goro', meaningVi: 'dạo này, thời gian gần đây', pos: 'danh từ', exampleJa: 'この頃、よく あめが ふります。', exampleVi: 'Dạo này trời hay mưa.' },
    { term: '子どもの頃', reading: 'こどものころ', romaji: 'kodomo no koro', meaningVi: 'thời thơ ấu, hồi nhỏ', pos: 'danh từ', exampleJa: '子どもの頃は よく こうえんで あそびました。', exampleVi: 'Hồi nhỏ tôi hay chơi ở công viên.' },
    { term: 'さっき', romaji: 'sakki', meaningVi: 'lúc nãy, mới đây', pos: 'phó từ', exampleJa: 'さっき、コーヒーを のみました。', exampleVi: 'Lúc nãy tôi uống cà phê.' },
    { term: 'ちょうど', romaji: 'chōdo', meaningVi: 'đúng lúc, vừa khéo', pos: 'phó từ', exampleJa: 'ちょうど 今から でかけます。', exampleVi: 'Đúng lúc tôi cũng sắp ra khỏi nhà.' },
    { term: 'しょっちゅう', romaji: 'shocchū', meaningVi: 'liên tục, suốt ngày', pos: 'phó từ', exampleJa: 'あには しょっちゅう としょかんへ いきます。', exampleVi: 'Anh trai tôi suốt ngày lượn thư viện.' },
    { term: 'おやつ', romaji: 'oyatsu', meaningVi: 'quà xế, đồ ăn vặt', pos: 'danh từ', exampleJa: 'おやつは あまい もの ばかりです。', exampleVi: 'Đồ ăn xế của tôi toàn đồ ngọt.' },
    { term: 'あまい', romaji: 'amai', meaningVi: 'ngọt', pos: 'tính từ い', exampleJa: 'かのじょは あまい ものが すきです。', exampleVi: 'Cô ấy thích đồ ngọt.' },
    { term: 'ゲーム', romaji: 'gēmu', meaningVi: 'trò chơi điện tử', pos: 'danh từ', exampleJa: '弟は ゲーム ばかり して います。', exampleVi: 'Em trai tôi chỉ toàn chơi game.' },
    { term: 'ざっし', romaji: 'zasshi', meaningVi: 'tạp chí', pos: 'danh từ', exampleJa: 'でんしゃの 中で ざっしを よみました。', exampleVi: 'Trên tàu điện tôi đọc tạp chí.' },
    { term: 'うそ', romaji: 'uso', meaningVi: 'lời nói dối', pos: 'danh từ', exampleJa: 'うそ ばかり いわないで ください。', exampleVi: 'Đừng có toàn nói dối như thế.' },
    { term: 'あかちゃん', romaji: 'akachan', meaningVi: 'em bé', pos: 'danh từ', exampleJa: 'うちの あかちゃんは ないて ばかり います。', exampleVi: 'Em bé nhà tôi cứ khóc hoài.' },
    { term: '休みの日', reading: 'やすみのひ', romaji: 'yasumi no hi', meaningVi: 'ngày nghỉ', pos: 'danh từ', exampleJa: '休みの日は そうじしたり、こうえんへ いったり します。', exampleVi: 'Ngày nghỉ tôi vừa dọn nhà vừa đi công viên.' },
    { term: 'スマホ', romaji: 'sumaho', meaningVi: 'điện thoại thông minh', pos: 'danh từ', exampleJa: 'この頃、スマホを みて ばかり います。', exampleVi: 'Dạo này tôi chỉ toàn nhìn vào điện thoại.' },
  ],
  grammar: [
    {
      code: 'l39-ta-bakari',
      title: '〜たばかり — vừa mới làm xong',
      formation: 'V-thể た (thường) + ばかり: たべた ばかり・おきた ばかり・かった ばかり; vế sau thường là です・でした・から…',
      explanationVi:
        'たばかり nói về việc VỪA KẾT THÚC với cảm giác "mới đây thôi" của người nói. Điểm quan trọng nhất: "vừa" ở đây mang tính TƯƠNG ĐỐI và CHỦ QUAN — không nhất thiết là vài phút trước; miễn là người nói CẢM THẤY còn mới, dù vài giờ, vài ngày hay thậm chí vài tháng vẫn dùng được: 日本に きた ばかりです (vừa sang Nhật — có thể đã nửa năm), この しんぶんは きのう かった ばかりです (tờ báo mới mua hôm qua, vẫn còn mới). Cách nối: động từ ở THỂ THƯỜNG quá khứ (bỏ ます, chia た): たべます→たべた ばかり, かきます→かいた ばかり; KHÔNG dùng ます-form (×たべますばかり) và KHÔNG dùng て-form (×たべてばかり — đó là cấu trúc khác, xem điểm 3 của bài). Dùng khi muốn giải thích ("vừa ăn xong nên chưa đói") hoặc nhấn thời gian ngắn đã có kết quả bất ngờ.',
      examples: [
        { ja: 'さっき おきた ばかりです。', vi: 'Tôi vừa mới dậy lúc nãy.', tokens: ['さっき', 'おきた', 'ばかり', 'です'] },
        { ja: 'この しんぶんは きのう かった ばかりです。', vi: 'Tờ báo này tôi mới mua hôm qua thôi (vẫn còn mới nguyên).', tokens: ['この', 'しんぶん', 'は', 'きのう', 'かった', 'ばかり', 'です'] },
        { ja: 'ひるごはんを たべた ばかりですから、おなかが すいて いません。', vi: 'Tôi vừa ăn trưa xong nên chưa đói bụng.' },
        { ja: '日本に きた ばかりの とき、日本語が ぜんぜん わかりませんでした。', vi: 'Hồi vừa mới sang Nhật, tôi chẳng hiểu nổi tiếng Nhật.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'たべます → ghép với ばかり (vừa ăn xong)',
          sentence: 'ひるごはんを ___ばかりです。',
          options: ['たべた', 'たべて', 'たべます', 'たべない'],
          answerIndex: 0, explanationVi: 'たばかり cần THỂ た của thể thường: たべた ばかり. て-form dành cho てばかり います (nghĩa khác — thói quen); ます-form không đứng trước ばかり.',
        },
        {
          kind: 'particle', prompt: 'Chọn trợ từ (Tàu điện vừa rời ga mất rồi)',
          sentence: 'でんしゃが ちょうど 今、えき___ でた ばかりです。',
          options: ['を', 'に', 'で', 'が'],
          answerIndex: 0, explanationVi: '出る là động từ di chuyển rời khỏi nơi chốn nên nơi đó đánh dấu bằng を: えきを でた. Cả câu: tàu VỪA RỜI ga — でた ばかり.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['今 えきに ついた ばかりです。', '今 えきに つきます ばかりです。', '今 えきに ついて ばかりです。', '今 えきに ついた ばかりします。'],
          answerIndex: 0, explanationVi: 'Thể た + ばかり: ついた ばかり ("vừa đến nơi"). つきますばかり dùng ます-form sai; ついてばかり là ghép て-form; ばかりします là ghép thừa.',
        },
        {
          kind: 'choice', prompt: '「日本に きた ばかりです。」 — người nói đến Nhật được bao lâu rồi?',
          options: ['Không rõ con số — chỉ biết người nói CẢM THẤY vẫn còn mới (có thể là vài tháng)', 'Chính xác 5 phút trước', 'Đúng một ngày trước', 'Đã hơn mười năm rồi'],
          answerIndex: 0, explanationVi: '"Vừa" của ばかり là tương đối, phụ thuộc cảm nhận người nói — người mới sang vẫn có thể nói 来たばかり sau nửa năm. Đây là điểm khác biệt quan trọng nhất của たばかり.',
        },
        {
          kind: 'fill', prompt: 'Điền (Tôi vừa mới bắt đầu học tiếng Nhật)',
          sentence: '日本語を ならいはじめた ___です。',
          options: ['ばかり', 'だけ', 'しか', 'ころ'],
          answerIndex: 0, explanationVi: 'V-た + ばかり = vừa mới. だけ・しか là "chỉ" (giới hạn số lượng), không nói thời gian; ころ là mốc thời gian khi nhớ lại.',
        },
      ],
    },
    {
      code: 'l39-n-bakari',
      title: 'N + ばかり — chỉ toàn, mỗi việc đó',
      formation: 'N + ばかり (+ V): あまい もの ばかり たべます・学生 ばかり です; sắc thái: lặp lại một chiều, thường kèm phê phán nhẹ',
      explanationVi:
        'Đặt ばかり sau DANH TỪ với nghĩa "chỉ toàn N, toàn N thôi" — sự vật đó lặp đi lặp lại hoặc chiếm trọn, và câu thường mang SẮC THÁI PHÊ PHÁN nhẹ của người nói: あまい もの ばかり たべて います (chỉ toàn ăn đồ ngọt — nghe như lời thở dài), うそ ばかり いいます (toàn nói dối không thôi). Đây là điểm khác với だけ đã học: だけ giới hạn một cách TRUNG TÍNH (みず だけ ください = cho tôi nước thôi — không khen không chê), còn ばかり gợi hành vi MỘT CHIỀU lặp lại và người nói thấy KHÔNG NÊN. Vì sắc thái này, câu khen ngợi hầu như không dùng ばかり. N ばかり còn có thể đóng luôn vai trò vị ngữ: この へやは ほん ばかりです (căn phòng này toàn là sách).',
      examples: [
        { ja: 'かのじょは あまい もの ばかり たべます。', vi: 'Cô ấy chỉ toàn ăn đồ ngọt.', tokens: ['かのじょ', 'は', 'あまい', 'もの', 'ばかり', 'たべます'] },
        { ja: 'この アパートには 学生 ばかり 住んで います。', vi: 'Trong chung cư này chỉ toàn sinh viên ở.' },
        { ja: 'あの 人は うそ ばかり いいます。', vi: 'Người ấy toàn nói dối không thôi.' },
        { ja: 'この へやは ほん ばかりです。', vi: 'Căn phòng này toàn là sách.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '「かれは ゲーム ばかり して います。」 — sắc thái của người nói là gì?',
          options: ['Chê nhẹ: cả ngày chỉ toàn chơi game mỗi việc đó', 'Khen: chơi game rất giỏi', 'Trung tính: kể rằng anh ấy có chơi game', 'Thắc mắc: không biết anh ấy có chơi game không'],
          answerIndex: 0, explanationVi: 'N ばかり (+して います) mang sắc thái phê phán thói quen một chiều — khác hẳn だけ trung tính. Muốn kể trung tính thì nói ゲームを します.',
        },
        {
          kind: 'fill', prompt: 'Điền (Người ấy chỉ toàn nói dối)',
          sentence: 'あの 人は うそ ___いいます。',
          options: ['ばかり', 'だけ', 'しか', 'まで'],
          answerIndex: 0, explanationVi: 'N + ばかり + V = chỉ toàn N, tự nhiên mang sắc thái chê. だけ cũng nghĩa "chỉ" nhưng trung tính; しか bắt buộc đi cùng phủ định; まで = "đến cả".',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['弟は ゲーム ばかり して います。', '弟は ゲーム ばかりです して います。', '弟は ゲーム ばかりして します。', '弟は ゲーム ばかりに して います。'],
          answerIndex: 0, explanationVi: 'N ばかり + して います là cách nói thói quen "chỉ toàn N": ゲーム ばかり して います. Chèn です vào giữa, lặp động từ, hay thêm に đều là ghép sai.',
        },
        {
          kind: 'choice', prompt: 'Muốn kể TRUNG TÍNH "hôm nay tôi chỉ uống nước (không uống trà)", dùng câu nào?',
          options: ['きょうは みず だけ のみました。', 'きょうは みず ばかり のみました。', 'きょうは みず しか のみました。', 'きょうは みず まで のみました。'],
          answerIndex: 0, explanationVi: 'Trung tính → だけ. ばかり sẽ nghe như lời phiền "nước chè gì suốt"; しか phải đi với phủ định (のみませんでした); まで = "đến cả nước cũng uống".',
        },
      ],
    },
    {
      code: 'l39-te-bakari',
      title: '〜てばかり います — thói quen một chiều + tổng kết 3 vị trí ばかり',
      formation: 'V-て + ばかり + います: ねて ばかり います・して ばかり います; luôn kèm います; sắc thái phê phán',
      explanationVi:
        'てばかり います nói hành động LẶP ĐI LẶP LẠI gần như một chiều — "cả ngày chỉ toàn…": 毎日 テレビを みて ばかり います, 休みの 日は ねて ばかり います. Nhận biết: luôn đi cùng います (thể tiếp diễn) và mang sắc thái CHÊ hoặc LO lắng — hầu như không dùng để khen. Tổng kết ba vị trí của ばかり trong bài: (1) V-た + ばかり = VỪA MỚI (thời gian, một lần): おきた ばかり; (2) N + ばかり = CHỈ TOÀN danh từ đó: あまい もの ばかり; (3) V-て + ばかり います = LẶP LẠI một hành động: あそんで ばかり います. Chỗ ghép (た・N・て) quyết định nghĩa — đây là cặp dễ nhầm nhất, hãy nhìn chữ đứng ngay trước ばかり để đoán nghĩa.',
      examples: [
        { ja: '弟は 毎日 テレビを みて ばかり います。', vi: 'Em trai tôi ngày nào cũng chỉ toàn xem TV.', tokens: ['弟', 'は', 'テレビ', 'を', 'みて', 'ばかり', 'います'] },
        { ja: '休みの 日は ねて ばかり います。', vi: 'Ngày nghỉ tôi chỉ toàn ngủ.' },
        { ja: 'かのじょは この頃 はたらいて ばかり います。', vi: 'Dạo này cô ấy chỉ toàn cày việc không thôi.' },
        { ja: 'あそんで ばかり いないで、少し べんきょうしてください。', vi: 'Đừng chỉ toàn chơi, hãy học bài một chút đi.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'ねます → ghép ばかり います (ngày nghỉ chỉ toàn ngủ)',
          sentence: '休みの 日は ね___ばかり います。',
          options: ['て', 'た', 'ない', 'ます'],
          answerIndex: 0, explanationVi: 'てばかり います cần THỂ て: ねて ばかり います. Nếu là ねた ばかり thì nghĩa đổi thành "vừa mới ngủ/xong"; ます không ghép trước ばかり.',
        },
        {
          kind: 'choice', prompt: 'Câu nào đúng nghĩa "cả ngày chỉ toàn chơi game (thói quen, kèm ý chê)"?',
          options: ['毎日 ゲームを して ばかり います。', '毎日 ゲームを した ばかり います。', '毎日 ゲームを します ばかり います。', '毎日 ゲームを しない ばかり います。'],
          answerIndex: 0, explanationVi: 'Thói quen lặp lại → て + ばかり + います. たばかり là "vừa mới" (một lần); ます-form và ない-form không ghép được với ばかり います.',
        },
        {
          kind: 'fill', prompt: 'Điền (Em gái tôi VỪA MỚI về đến nhà)',
          sentence: 'いもうとは 今 うちに ___ばかりです。',
          options: ['かえって', 'かえった', 'かえります', 'かえらない'],
          answerIndex: 1, explanationVi: '"Vừa mới" → た + ばかりです: かえった ばかりです. Nếu nói かえって ばかり います thì nghĩa thành "cứ về nhà hoài" — kiểu lặp lại, khác hẳn.',
        },
        {
          kind: 'choice', prompt: '「ねて ばかり います」 và 「ねた ばかりです」 khác nhau thế nào?',
          options: ['Câu 1: chỉ toàn ngủ (thói quen lặp lại, phê phán); câu 2: vừa mới ngủ xong', 'Cả hai đều nghĩa "vừa ngủ xong"', 'Câu 1: vừa ngủ dậy; câu 2: thường xuyên ngủ', 'Câu 2 sai ngữ pháp'],
          answerIndex: 0, explanationVi: 'Chữ đứng ngay trước ばかり quyết định nghĩa: て → lặp lại một chiều (＋います); た → vừa mới (một lần, thời gian). Đây là cặp phân biệt quan trọng nhất của bài.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Mười một giờ sáng… chào buổi sáng?',
      situationVi: 'Min ghé phòng Linh lúc gần trưa và phát hiện bạn vừa mới dậy.',
      lines: [
        { speaker: 'ミン', ja: 'リンさん、おはようございます。……あれ? 今 おきた ばかりですか。', vi: 'Linh, chào buổi sáng.… Hả? Bạn vừa mới dậy à?' },
        { speaker: 'リン', ja: 'はい。さっき おきた ばかりです。昨晩は ほんを よんで いて、三じに ねました。', vi: 'Ừ. Lúc nãy tôi vừa mới dậy. Tối qua đọc sách đến ba giờ sáng mới ngủ.' },
        { speaker: 'ミン', ja: '三じですか。たいへんですね。もう あさごはんを たべましたか。', vi: 'Ba giờ á? Ghê nhỉ. Ăn sáng chưa?' },
        { speaker: 'リン', ja: 'いいえ、まだです。今から つくります。', vi: 'Chưa. Bây giờ tôi sẽ làm.' },
        { speaker: 'ミン', ja: 'じゃあ、そとへ たべに いきませんか。この 前 いった パンの みせ……', vi: 'Vậy ra ngoài ăn đi. Cửa hàng bánh mì lần trước mình tới…' },
        { speaker: 'リン', ja: 'いいですね。でも、あそこは この 前 いった ばかりですよ。', vi: 'Được đấy. Nhưng quán ấy lần trước mình VỪA mới đi mà.' },
        { speaker: 'ミン', ja: 'そうですか。じゃあ、ほかの みせに しましょう。', vi: 'Thế à. Vậy chọn quán khác thôi.' },
        { speaker: 'リン', ja: 'はい。えきの まえに あたらしい みせが あります。', vi: 'Ừ. Trước ga có một quán mới mở.' },
        { speaker: 'ミン', ja: 'いいですね。わたしも ちょうど 今から でかけたいと おもって いました。', vi: 'Hay đấy. Tôi cũng đang định ra ngoài ngay bây giờ đây.' },
        { speaker: 'リン', ja: 'よかった。じゃあ、十五ふん後に えきで あいましょう。', vi: 'Vậy tiện quá. Mười lăm phút nữa gặp nhau ở ga nhé.' },
      ],
    },
    {
      titleVi: 'Cả nhà ai cũng một việc',
      situationVi: 'Linh hỏi Tanaka về kỳ nghỉ cuối tuần; hai bạn phát hiện cả nhà Tanaka ai cũng chỉ toàn làm một việc.',
      lines: [
        { speaker: 'リン', ja: 'たなかさん、しゅうまつは どうでしたか。', vi: 'Tanaka này, cuối tuần rồi thế nào?' },
        { speaker: 'たなか', ja: 'ぜんぶ ねて いました。休みの 日は ねて ばかり います。', vi: 'Toàn ngủ. Ngày nghỉ tôi chỉ toàn ngủ mỗi việc đó.' },
        { speaker: 'リン', ja: 'どこにも いきませんでしたか。', vi: 'Không đi đâu cả à?' },
        { speaker: 'たなか', ja: 'いいえ。あねは かいものに いきましたが、ふく ばかり かって きますよ。', vi: 'Ừ, không. Chị tôi có đi mua sắm, mà chỉ toàn mua quần áo không thôi.' },
        { speaker: 'リン', ja: 'おかあさんと おとうさんは どうですか。', vi: 'Bố mẹ bạn thì sao?' },
        { speaker: 'たなか', ja: '母は テレビを みて ばかり います。', vi: 'Mẹ thì chỉ toàn xem TV.' },
        { speaker: 'リン', ja: 'にぎやかで たのしそうですね。わたしも この頃 スマホを みて ばかり いました。', vi: 'Nghe nhộn nhịp vui đấy. Dạo này tôi cũng chỉ toàn nhìn vào điện thoại.' },
        { speaker: 'たなか', ja: 'じゃあ、こんどの 休みの 日は いっしょに こうえんへ いきましょう。', vi: 'Vậy kỳ nghỉ tới mình cùng đi công viên nhé.' },
        { speaker: 'リン', ja: 'いいですね。子どもの頃は よく そとで あそびましたから、なつかしいです。', vi: 'Được đấy. Hồi nhỏ mình hay chơi ngoài trời lắm, nghe mà nhớ.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'さっき ひるごはんを たべた ばかりです。', meaningVi: 'Tôi vừa mới ăn trưa xong lúc nãy.', choices: ['Vừa mới ăn trưa xong', 'Sắp ăn trưa', 'Cả ngày chỉ toàn ăn', 'Hôm nay bỏ bữa trưa'], answerIndex: 0, dictation: true },
    { scriptJa: '弟は ゲームを して ばかり います。', meaningVi: 'Em trai tôi chỉ toàn chơi game.', choices: ['Em trai vừa mới chơi game xong', 'Em trai sắp mua game mới', 'Em trai chỉ toàn chơi game', 'Em trai không thích chơi game'], answerIndex: 2, dictation: true },
    { scriptJa: 'でんしゃが えきを でた ばかりです。', meaningVi: 'Tàu điện vừa mới rời ga.', choices: ['Tàu điện vừa mới rời ga', 'Tàu điện sắp rời ga', 'Tàu điện đã đến từ rất lâu', 'Tàu điện hôm nay không chạy'], answerIndex: 0 },
    { scriptJa: 'あの 人は うそ ばかり いいます。', meaningVi: 'Người ấy chỉ toàn nói dối.', choices: ['Người ấy vừa nói dối lần đầu tiên', 'Người ấy chỉ toàn nói dối', 'Người ấy không biết nói dối', 'Người ấy hay khóc'], answerIndex: 1 },
    { scriptJa: '子どもの 頃、よく ここで あそびました。', meaningVi: 'Hồi nhỏ tôi hay chơi ở đây.', choices: ['Tôi vừa mới chơi ở đây', 'Tôi sắp đi chơi cùng trẻ con', 'Đây là ngôi trường ngày nhỏ của tôi', 'Hồi nhỏ tôi hay chơi ở đây'], answerIndex: 3 },
  ],
  reading: {
    titleVi: 'Em trai tôi',
    lines: [
      { text: 'わたしの 弟は 十六さいです。', vi: 'Em trai tôi mười sáu tuổi.' },
      { text: '休みの 日は あさから よるまで ゲームを して ばかり います。', vi: 'Ngày nghỉ, từ sáng đến tối em chỉ toàn chơi game.' },
      { text: '昨晩も 三じまで して いましたから、けさも おそく おきました。', vi: 'Tối qua cũng chơi đến ba giờ nên sáng nay em lại dậy muộn.' },
      { text: '母は いつも こまって います。', vi: 'Mẹ lúc nào cũng khổ sở vì chuyện đó.' },
      { text: 'でも きのうの よる、弟の ゲームが こわれました。', vi: 'Nhưng tối qua, máy game của em bị hỏng.' },
      { text: '弟は ないて、すぐ ねました。', vi: 'Em khóc rồi lên giường ngủ luôn.' },
      { text: 'けさ、母が 「来週 新しいのを 買って あげる」と いいました。', vi: 'Sáng nay mẹ nói: "Tuần sau mẹ mua cái mới cho".' },
      { text: '弟は 今、母の かえりを まって います。', vi: 'Bây giờ em đang ngồi chờ mẹ về.' },
      { text: 'わたしも この頃 スマホを みて ばかり いました。よくないと おもいます。', vi: 'Dạo này tôi cũng chỉ toàn nhìn vào điện thoại. Tôi thấy thế là không tốt.' },
    ],
    questions: [
      { questionVi: 'Vào ngày nghỉ, em trai thường làm gì?', choices: ['Chỉ toàn chơi game từ sáng đến tối', 'Đi mua sắm cùng mẹ', 'Dọn dẹp nhà cửa', 'Đọc tạp chí'], answerIndex: 0, explanationVi: 'Dòng 2: あさから よるまで ゲームを して ばかり います — てばかり います diễn tả thói quen một chiều.' },
      { questionVi: 'Chuyện gì đã xảy ra với em trai tối qua?', choices: ['Em bị mẹ mắng', 'Em làm mất điện thoại', 'Máy game của em bị hỏng nên em khóc', 'Em bị ốm phải nằm nhà'], answerIndex: 2, explanationVi: 'Dòng 5–6: ゲームが こわれました → ないて、すぐ ねました.' },
      { questionVi: 'Người viết tự suy nghĩ gì về bản thân?', choices: ['Muốn mua một chiếc điện thoại mới', 'Thấy việc mình chỉ toàn nhìn điện thoại là không tốt', 'Muốn chơi game cùng em trai', 'Thấy em trai như thế là hoàn toàn bình thường'], answerIndex: 1, explanationVi: 'Dòng cuối: スマホを みて ばかり いました。よくないと おもいます — người viết cũng tự nhận thấy thói quen một chiều của mình không tốt.' },
    ],
  },
  speakSentences: [
    { ja: 'さっき おきた ばかりです。', vi: 'Tôi vừa mới dậy lúc nãy.' },
    { ja: '日本に きた ばかりです。', vi: 'Tôi vừa mới đến Nhật.' },
    { ja: '弟は ゲーム ばかり して います。', vi: 'Em trai tôi chỉ toàn chơi game.' },
    { ja: '休みの 日は ねて ばかり います。', vi: 'Ngày nghỉ tôi chỉ toàn ngủ.' },
  ],
  translatePairs: [
    { ja: 'さっき ひるごはんを たべた ばかりです。', vi: 'Tôi vừa mới ăn trưa xong lúc nãy.', tokens: ['さっき', 'ひるごはん', 'を', 'たべた', 'ばかり', 'です'], distractors: ['ながら'] },
    { ja: '日本に きた ばかりです。', vi: 'Tôi vừa mới đến Nhật.', tokens: ['日本', 'に', 'きた', 'ばかり', 'です'], distractors: ['ころ'] },
    { ja: '弟は ゲーム ばかり して います。', vi: 'Em trai tôi chỉ toàn chơi game.', tokens: ['弟', 'は', 'ゲーム', 'ばかり', 'して', 'います'], distractors: ['だけ'] },
    { ja: 'あまい もの ばかり たべて います。', vi: 'Tôi chỉ toàn ăn đồ ngọt.', tokens: ['あまい', 'もの', 'ばかり', 'たべて', 'います'], distractors: ['しか'] },
  ],
  kanji: ['今', '昨', '頃'],
}
