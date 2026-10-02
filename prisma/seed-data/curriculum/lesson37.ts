/**
 * NihongoGo — Bài 37: 〜かもしれません — Có thể là.
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson37: CurriculumLesson = {
  order: 37,
  slug: 'l37-kamo-shiremasen',
  title: '〜かもしれません — Có thể là',
  titleJa: '〜かもしれません',
  description: 'Nói về khả năng xảy ra một cách dè dặt với かもしれません.',
  learningObjectives: [
    'Dùng 〜かもしれません cho phỏng đoán',
    'So sánh mức độ với でしょう',
    'Nói dự báo, phỏng đoán tình huống',
  ],
  grammarTopics: ['〜かもしれません (có lẽ)', 'Phân biệt でしょう・かもしれません'],
  vocabularyTopics: ['Dự báo thời tiết', 'Lời phỏng đoán'],
  kanjiTopics: ['Kanji khả năng (可・能・確)'],
  difficulty: 'ELEMENTARY',
  vocabulary: [
    { term: '可能', reading: 'かのう', romaji: 'kanō', meaningVi: 'khả thi, có thể được', pos: 'danh từ', exampleJa: 'じかんが あれば、可能です。', exampleVi: 'Nếu có thời gian thì khả thi.' },
    { term: '能力', reading: 'のうりょく', romaji: 'nōryoku', meaningVi: 'năng lực, tài năng', pos: 'danh từ', exampleJa: 'かれには 能力が ありますから、だいじょうぶです。', exampleVi: 'Anh ấy có năng lực nên không sao.' },
    { term: '確認', reading: 'かくにん', romaji: 'kakunin', meaningVi: 'sự xác nhận, kiểm tra lại', pos: 'danh từ', exampleJa: 'でんしゃの じかんを 確認します。', exampleVi: 'Tôi xác nhận lại giờ tàu điện.' },
    { term: '許可', reading: 'きょか', romaji: 'kyoka', meaningVi: 'sự cho phép', pos: 'danh từ', exampleJa: 'せんせいに 許可を もらいました。', exampleVi: 'Tôi đã xin phép thầy giáo.' },
    { term: '台風', reading: 'たいふう', romaji: 'taifū', meaningVi: 'cơn bão', pos: 'danh từ', exampleJa: '台風が くる かもしれません。', exampleVi: 'Có thể bão sẽ ập đến.' },
    { term: '気温', reading: 'きおん', romaji: 'kion', meaningVi: 'nhiệt độ không khí', pos: 'danh từ', exampleJa: 'きょうの 気温は 三十どです。', exampleVi: 'Nhiệt độ hôm nay là 30 độ.' },
    { term: '予想', reading: 'よそう', romaji: 'yosō', meaningVi: 'dự đoán', pos: 'danh từ', exampleJa: 'わたしの 予想では あしたは はれです。', exampleVi: 'Theo dự đoán của tôi, ngày mai nắng.' },
    { term: 'はずれます', romaji: 'hazuremasu', meaningVi: 'trật, hụt (dự đoán, khóa)', pos: 'động từ nhóm 1', exampleJa: 'てんきの 予想は よく はずれます。', exampleVi: 'Dự báo thời tiết hay trật lắm.' },
    { term: 'おそらく', romaji: 'osoraku', meaningVi: 'có lẽ (trang trọng)', pos: 'phó từ', exampleJa: 'おそらく こんやは さむく なる でしょう。', exampleVi: 'Có lẽ tối nay trời sẽ lạnh lên.' },
    { term: 'にわかあめ', romaji: 'niwakaame', meaningVi: 'mưa rào', pos: 'danh từ', exampleJa: 'ごご、にわかあめが ふる かもしれません。', exampleVi: 'Buổi chiều có thể có mưa rào.' },
    { term: 'やみます', romaji: 'yamimasu', meaningVi: 'tạnh (mưa, gió)', pos: 'động từ nhóm 1', exampleJa: 'あめは ひるごろ やみます。', exampleVi: 'Mưa khoảng trưa sẽ tạnh.' },
    { term: '交通', reading: 'こうつう', romaji: 'kōtsū', meaningVi: 'giao thông', pos: 'danh từ', exampleJa: '大雪で 交通が とまる かもしれません。', exampleVi: 'Tuyết lớn có thể làm giao thông tê liệt.' },
    { term: '見込み', reading: 'みこみ', romaji: 'mikomi', meaningVi: 'triển vọng, dự kiến (thời tiết)', pos: 'danh từ', exampleJa: 'あしたは あめの 見込みです。', exampleVi: 'Ngày mai dự kiến trời mưa.' },
    { term: 'のち', romaji: 'nochi', meaningVi: 'sau đó, về sau (dùng trong dự báo)', pos: 'danh từ', exampleJa: 'てんきは くもり、のち はれに なる でしょう。', exampleVi: 'Trời nhiều mây, sau đó chuyển nắng.' },
    { term: 'うん', romaji: 'un', meaningVi: 'vận may', pos: 'danh từ', exampleJa: 'きょうは うんが いいですね。', exampleVi: 'Hôm nay may mắn nhỉ.' },
    { term: 'くうこう', romaji: 'kūkō', meaningVi: 'sân bay', pos: 'danh từ', exampleJa: '台風で くうこうが しまる かもしれません。', exampleVi: 'Bão có thể khiến sân bay đóng cửa.' },
    { term: 'えんき', romaji: 'enki', meaningVi: 'sự hoãn lại', pos: 'danh từ', exampleJa: 'かいぎは らいしゅうに えんきに なりました。', exampleVi: 'Cuộc họp đã bị hoãn sang tuần sau.' },
    { term: 'はっきり', romaji: 'hakkiri', meaningVi: 'rõ ràng, rõ rệt', pos: 'phó từ', exampleJa: 'てんきは まだ はっきり しません。', exampleVi: 'Thời tiết vẫn chưa rõ.' },
  ],
  grammar: [
    {
      code: 'l37-kamo-shiremasen',
      title: '〜かもしれません — có thể là (khả năng khoảng 50/50)',
      formation: 'V thể thường + かもしれません: いく かもしれません・こない かもしれません; い-Adj nguyên dạng: あつい かもしれません; な-Adj: かんたん(な) かもしれません; N ghép thẳng: あめ かもしれません',
      explanationVi:
        'かもしれません nói lên khả năng xảy ra ở mức KHOẢNG NỬA (50/50) — thấp hơn でしょう đã học. Dùng khi không dám chắc, muốn nói dè dặt: あしたは あめ かもしれません (ngày mai trời có thể mưa — cũng có thể không). Cách nối giống はずです (L36) ở chỗ mệnh đề phải ở THỂ THƯỜNG, nhưng có một điểm KHÁC quan trọng: danh từ ghép THẲNG vào かもしれません mà KHÔNG cần だ (あめ かもしれません) — trong khi と おもいます thì phải là あめ だと おもいます, còn そうです truyền đạt (L35) là あめ だそうです. Tính từ な thường bỏ な (かんたん かもしれません, giữ な cũng được), tính từ い giữ nguyên dạng (あつい かもしれません), động từ dùng mọi dạng thể thường (いく・いった・こない かもしれません). しれません trong かもしれません là dạng lịch sự; nói thân mật rút thành かもしれない.',
      examples: [
        { ja: 'あしたは あめ かもしれません。', vi: 'Ngày mai trời có thể mưa.', tokens: ['あした', 'は', 'あめ', 'かもしれません'] },
        { ja: 'かれは この ニュースを しらない かもしれません。', vi: 'Có thể anh ấy không biết tin này.' },
        { ja: 'よるの みちは きけん かもしれません。', vi: 'Đường phố ban đêm có thể nguy hiểm.' },
        { ja: 'かのじょは もう うちに かえった かもしれません。', vi: 'Chẳng nhẽ cô ấy đã về nhà mất rồi.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'Danh từ あめ + かもしれません ghép thế nào?',
          sentence: 'あしたは あめ ___。',
          options: ['かもしれません', 'だかもしれません', 'ですかもしれません', 'の かもしれません'],
          answerIndex: 0, explanationVi: 'かもしれません ghép THẲNG vào danh từ: あめ かもしれません. KHÔNG thêm だ/です — khác với あめだと おもいます và あめ だそうです (L35).',
        },
        {
          kind: 'conjugate', prompt: 'いきます → ghép với かもしれません (có thể tuần sau đi Nhật)',
          sentence: 'かれは 来週 日本へ ___かもしれません。',
          options: ['いく', 'いきます', 'いって', 'いこう'],
          answerIndex: 0, explanationVi: 'Động từ trước かもしれません phải ở THỂ THƯỜNG: いく かもしれません. ます-form và て-form không đứng trước かもしれません (giống はずです・と おもいます).',
        },
        {
          kind: 'particle', prompt: 'Chọn trợ từ (Ngày mai bão có thể đến)',
          sentence: 'あした、台風___くる かもしれません。',
          options: ['が', 'を', 'に', 'で'],
          answerIndex: 0, explanationVi: '台風 là chủ ngữ của くる nên dùng が. を đánh dấu túc từ, に là nơi đến, で là nơi diễn ra hành động.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['あしたは にわかあめ かもしれません。', 'あしたは にわかあめだ かもしれません。', 'あしたは にわかあめです かもしれません。', 'あしたは にわかあめの かもしれません。'],
          answerIndex: 0, explanationVi: 'Danh từ + かもしれません không cần だ・です・の. Lỗi này hay gặp vì そうです (L35) và と おもいます lại CẦN だ khi nối danh từ.',
        },
        {
          kind: 'fill', prompt: 'Điền (Tàu điện có thể bị trễ)',
          sentence: 'でんしゃが ___かもしれません。',
          options: ['おくれる', 'おくれます', 'おくれて', 'おくれるだ'],
          answerIndex: 0, explanationVi: 'Động từ thể thường + かもしれません: おくれる かもしれません. ます-form/て-form không dùng; おくれるだ là ghép sai.',
        },
      ],
    },
    {
      code: 'l37-kamo-keishiki',
      title: 'かもしれません với quá khứ・phủ định・dạng rút gọn',
      formation: 'Quá khứ: いった・あつかった・あめだった + かもしれません; phủ định: こない・あつくない + かもしれません; thân mật: かもしれない / かも',
      explanationVi:
        'Giống như はずです và と おもいます, mọi thông tin về THỜI GIAN và PHỦ ĐỊNH nằm trong mệnh đề trước, còn かもしれません giữ nguyên. Nói "có thể ĐÃ…" thì dùng quá khứ: いった かもしれません (có thể đã đi), あつかった かもしれません (có thể (hôm qua) đã nóng) — riêng danh từ ở quá khứ trở thành だった: あめ だった かもしれません (có thể (hôm qua) là mưa). Phủ định cũng nằm trong mệnh đề: こない かもしれません (có thể không đến), あつくない かもしれません (có thể không nóng). Riêng かもしれません KHÔNG có dạng quá khứ — không nói ×かもしれました. Trong hội thoại thân mật có thể rút gọn: かもしれない (thể thường) hoặc ngắn hơn nữa là かも (たなかくんは しってる かも = chẳng nhẽ cậu ấy biết nhỉ).',
      examples: [
        { ja: 'かのじょは きのう つかれて いた かもしれません。', vi: 'Có thể hôm qua cô ấy đã mệt.', tokens: ['かのじょ', 'は', 'きのう', 'つかれて', 'いた', 'かもしれません'] },
        { ja: 'きのうの かいぎは ながかった かもしれません。', vi: 'Chẳng nhẽ cuộc họp hôm qua lại dài thế.' },
        { ja: 'でんしゃが まだ こない かもしれません。', vi: 'Có thể chuyến tàu vẫn chưa đến.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'あつい → quá khứ + かもしれません (có thể hôm qua đã nóng)',
          sentence: 'きのうは ___かもしれません。',
          options: ['あつかった', 'あついでした', 'あつくて', 'あついだった'],
          answerIndex: 0, explanationVi: 'い-Adj quá khứ là あつかった + かもしれません. あついでした là cách chia sai của tiếng Nhật; あつくて là thể て.',
        },
        {
          kind: 'fill', prompt: 'Điền (Có thể hôm nay anh ấy không đến)',
          sentence: 'かれは きょう ___かもしれません。',
          options: ['こない', 'きません', 'こなくて', 'こないで'],
          answerIndex: 0, explanationVi: 'Phủ định nằm trong mệnh đề ở thể thường: こない かもしれません. ます-form phủ định (きません) không đứng trước かもしれません.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng nghĩa "có thể hôm qua là mưa"?',
          options: ['きのうは あめ だった かもしれません。', 'きのうは あめでした かもしれません。', 'きのうは あめ かもしれました。', 'きのうは あめだ かもしれません。'],
          answerIndex: 0, explanationVi: 'Quá khứ của danh từ là だった: あめ だった かもしれません. かもしれません KHÔNG chia quá khứ (không có かもしれました); còn ở hiện tại danh từ ghép thẳng không だ.',
        },
        {
          kind: 'choice', prompt: '「たなかくんは しってる かも。」 — từ "かも" ở cuối câu là gì?',
          options: ['Dạng rút gọn thân mật của かもしれません', 'Cách nói trang trọng hơn でしょう', 'Từ hỏi kiểu nghi vấn', 'Dạng phủ định của です'],
          answerIndex: 0, explanationVi: 'Trong nói chuyện thân mật, かもしれない rút còn かも. Câu này nghĩa là "chẳng nhể cậu ấy biết nhỉ" — vẫn giữ mức phỏng đoán 50/50.',
        },
      ],
    },
    {
      code: 'l37-kamo-phan-biet',
      title: 'Phân biệt でしょう・かもしれません・はずです・そうです',
      formation: 'Mức chắc giảm dần: たぶん〜でしょう > 〜かもしれません > たぶん〜ないでしょう; はずです = suy luận CÓ CƠ SỞ chắc chắn (L36); そうです = kể lại NGUỒN NGOÀI (〜に よると, L35)',
      explanationVi:
        'Ba mẫu "đoán" đã học cần phân biệt rõ: たぶん〜でしょう là đoán khá chắc (khoảng 60–70%, thường kèm たぶん); かもしれません đặt khả năng đúng con nửa (50/50, dè dặt); たぶん〜ないでしょう là đoán phủ định "chắc là không". Tách biệt khỏi hai mẫu khác: はずです (L36) là SUY LUẬN CHẮC CHẮN từ cơ sở cụ thể (lịch trình, lời hứa, quy tắc) — mức tin cao nhất, không dùng khi đoán mò; そうです (L35) KHÔNG phải tự đoán mà là KỂ LẠI nguồn tin (てんきよほうに よると…そうです) hoặc nhận định vẻ ngoài (からそうです). Mẹo nhanh: người khác kể cho mình nghe → そうです; tự mình tính ra → はずです; phỏng đoán mù mờ chưa dám chắc → かもしれません.',
      examples: [
        { ja: 'たぶん あしたも あつい でしょう。', vi: 'Chắc hẳn ngày mai cũng nóng (đoán khá chắc).' },
        { ja: 'こんやは さむく なる かもしれません。', vi: 'Tối nay có thể trời sẽ lạnh lên (50/50).', tokens: ['こんや', 'は', 'さむく', 'なる', 'かもしれません'] },
        { ja: 'かれは たぶん こない でしょう。', vi: 'Chắc là anh ấy không đến đâu.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Hãy xếp mức độ chắc chắn GIẢM DẦN của ba cách nói.',
          options: ['たぶん〜でしょう > 〜かもしれません > たぶん〜ないでしょう', '〜かもしれません > たぶん〜ないでしょう > たぶん〜でしょう', 'たぶん〜ないでしょう > 〜かもしれません > たぶん〜でしょう', 'Ba cách nói có mức độ giống nhau'],
          answerIndex: 0, explanationVi: 'たぶん〜でしょう chắc nhất (60–70%); かもしれません khoảng 50/50; たぶん〜ないでしょう là đoán phủ định "chắc là không".',
        },
        {
          kind: 'fill', prompt: 'Điền (Theo dự báo thời tiết, ngày mai có tuyết)',
          sentence: 'てんきよほうに よると、あしたは ゆきが ふる ___。',
          options: ['そうです', 'はずです', 'かもしれません', 'はずが ありません'],
          answerIndex: 0, explanationVi: 'Có に よると (nguồn tin bên ngoài) → そうです truyền đạt (L35). はずです là suy luận tự tính; かもしれません là phỏng đoán mơ hồ không kèm nguồn.',
        },
        {
          kind: 'fill', prompt: 'Điền (Anh ấy đã hứa rồi — chắc chắn sẽ đến)',
          sentence: 'かれは やくそくしましたから、くる ___。',
          options: ['はずです', 'かもしれません', 'そうです', 'たぶん でしょう'],
          answerIndex: 0, explanationVi: 'Có cơ sở cụ thể (lời hứa) → suy luận chắc chắn はずです (L36). かもしれません chỉ 50/50 là nhẹ hơn mức cần thiết; そうです là nghe nói; でしょう chỉ đoán chung chung.',
        },
        {
          kind: 'choice', prompt: 'Câu nào nói khả năng chỉ khoảng 50/50?',
          options: ['かれは きょう くにへ かえる かもしれません。', 'かれは きょう くにへ かえる はずです。', 'かれは きょう くにへ かえる そうです。', 'かれは きょう くにへ かえません。'],
          answerIndex: 0, explanationVi: 'かもしれません = phỏng đoán dè dặt 50/50. はずです chắc chắn vì có cơ sở; そうです là kể lại nguồn; かえません là khẳng định phủ định.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Kế hoạch leo núi cuối tuần',
      situationVi: 'Tanaka rủ Linh leo núi cuối tuần; hai bạn bàn về cơn bão và mưa rào.',
      lines: [
        { speaker: 'たなか', ja: 'リンさん、しゅうまつに やまに のぼりに いきませんか。', vi: 'Linh này, cuối tuần đi leo núi không?' },
        { speaker: 'リン', ja: 'ええ、いきたいです。でも、てんきは だいじょうぶでしょうか。', vi: 'Được, tôi muốn lắm. Nhưng thời tiết có ổn không nhỉ?' },
        { speaker: 'たなか', ja: 'ニュースで 台風の ことを いって いました。', vi: 'Bản tin có nhắc đến chuyện cơn bão.' },
        { speaker: 'リン', ja: 'じゃあ、やまに のぼるのは きけん かもしれませんね。', vi: 'Vậy thì leo núi có thể nguy hiểm nhỉ.' },
        { speaker: 'たなか', ja: 'てんきよほうでは、土よう日は はれの 見込みですよ。', vi: 'Theo dự báo thì thứ Bảy trời nắng đấy.' },
        { speaker: 'リン', ja: 'そうですか。でも、ごごは にわかあめが ふる かもしれません。', vi: 'Vậy à. Nhưng buổi chiều có thể có mưa rào.' },
        { speaker: 'たなか', ja: 'くもりでも のぼれますよ。あめが ふらなければ、だいじょうぶです。', vi: 'Trời nhiều mây vẫn leo được. Chỉ cần mưa không rơi là không sao.' },
        { speaker: 'リン', ja: 'じゃあ、かさを もって いきます。', vi: 'Vậy tôi mang ô theo.' },
        { speaker: 'たなか', ja: 'うん。きょうの よる、もういちど 予想を 確認しましょう。', vi: 'Ừ. Tối nay mình cùng xem lại dự báo nhé.' },
        { speaker: 'リン', ja: 'はい。台風が くる かもしれませんから、わたしも よく しらべます。', vi: 'Vâng. Có thể bão sẽ đến nên tôi cũng sẽ tra kỹ.' },
      ],
    },
    {
      titleVi: 'Chiếc chìa khóa lạc mất',
      situationVi: 'Min tìm không thấy chìa khóa; bạn cùng phòng cùng đoán xem để quên ở đâu.',
      lines: [
        { speaker: 'さゆり', ja: 'ミンさん、かばんの 中に かぎは ありますか。', vi: 'Min này, trong cặp có chìa khóa không?' },
        { speaker: 'ミン', ja: 'いいえ、ありません。さっき さがしましたが、ありませんでした。', vi: 'Không có. Lúc nãy tôi tìm rồi mà không thấy.' },
        { speaker: 'さゆり', ja: 'へやに おとした かもしれませんよ。', vi: 'Có khi bạn đánh rơi trong phòng đấy.' },
        { speaker: 'ミン', ja: 'へやも よく さがしましたが、ありませんでした。', vi: 'Trong phòng tôi cũng lục kỹ rồi, không có.' },
        { speaker: 'さゆり', ja: 'じゃあ、きのう スーパーに わすれた かもしれませんね。', vi: 'Vậy có khi hôm qua bạn để quên ở siêu thị.' },
        { speaker: 'ミン', ja: 'そうかもしれません。きのう かいものを しましたから。', vi: 'Có thể lắm. Hôm qua tôi có đi mua sắm mà.' },
        { speaker: 'さゆり', ja: 'でんわで きいて みましょう。', vi: 'Gọi điện hỏi thử nhé.' },
        { speaker: 'ミン', ja: 'はい。……あ、スーパーに ありました。レジの まえに おいた そうです。', vi: 'Vâng.… A, để ở siêu thị rồi. Nghe nói (tôi) đã đặt trước quầy thu ngân.' },
        { speaker: 'さゆり', ja: 'よかったですね。じゃあ、あした とりに いきましょう。', vi: 'May quá. Vậy mai mình đi lấy nhé.' },
        { speaker: 'ミン', ja: 'ありがとう。ほんとうに たすかりました。', vi: 'Cảm ơn nhé. Được cậu giúp, nhẹ nhõm thật.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'あしたは あめ かもしれません。', meaningVi: 'Ngày mai trời có thể mưa.', choices: ['Ngày mai trời có thể mưa', 'Ngày mai chắc chắn mưa', 'Nghe nói ngày mai mưa', 'Tôi muốn đi vào ngày mai'], answerIndex: 0, dictation: true },
    { scriptJa: 'かれは たぶん こない でしょう。', meaningVi: 'Chắc là anh ấy không đến đâu.', choices: ['Anh ấy chắc chắn sẽ đến', 'Chắc là anh ấy không đến', 'Nghe nói anh ấy không đến', 'Có thể anh ấy sẽ đến'], answerIndex: 1, dictation: true },
    { scriptJa: 'こんやは さむく なる かもしれません。', meaningVi: 'Tối nay có thể trời sẽ lạnh lên.', choices: ['Tối nay chắc chắn ấm áp', 'Tối nay có thể trời sẽ lạnh lên', 'Tối qua trời đã lạnh rồi', 'Tôi sẽ mặc áo ấm tối nay'], answerIndex: 1 },
    { scriptJa: 'でんしゃが おくれる かもしれません。', meaningVi: 'Tàu điện có thể bị trễ.', choices: ['Tàu điện có thể bị trễ', 'Tàu điện đã trễ mất rồi', 'Tàu điện không bao giờ trễ', 'Nghe nói hôm qua tàu trễ'], answerIndex: 0 },
    { scriptJa: 'かのじょは きのう びょうき だった かもしれません。', meaningVi: 'Có thể hôm qua cô ấy đã bị bệnh.', choices: ['Cô ấy đang bị bệnh', 'Có thể hôm qua cô ấy đã bị bệnh', 'Nghe nói cô ấy bị bệnh', 'Cô ấy chắc chắn không bệnh'], answerIndex: 1 },
  ],
  reading: {
    titleVi: 'Chuyến đi biển Chủ nhật',
    lines: [
      { text: 'にちようびに ともだちと うみへ いく 予定でした。', vi: 'Chủ nhật tôi có hẹn đi biển với bạn.' },
      { text: 'あさ、てんきよほうを 確認しました。', vi: 'Buổi sáng tôi xem lại dự báo thời tiết.' },
      { text: 'よほうでは、ひるから はれの 見込みでした。', vi: 'Theo dự báo, từ trưa trời sẽ nắng.' },
      { text: 'でも、そらが だんだん くろく なりました。', vi: 'Nhưng bầu trời dần dần đen lại.' },
      { text: 'わたしは 「あめが ふる かもしれない」と おもいました。', vi: 'Tôi nghĩ: "chẳng nhẽ trời sắp mưa".' },
      { text: 'ともだちは 「だいじょうぶ でしょう」と いいました。', vi: 'Bạn tôi nói: "Chắc không sao đâu".' },
      { text: 'でんしゃに のって いる とき、あめが ふって きました。', vi: 'Đang ngồi trên tàu thì mưa bắt đầu rơi.' },
      { text: 'うみで およぐ ことは できませんでしたが、えきの まえで おいしい ラーメンを たべました。', vi: 'Cuối cùng không bơi được ở biển, nhưng chúng tôi ăn mì ramen ngon trước ga.' },
    ],
    questions: [
      { questionVi: 'Dự báo thời tiết nói gì?', choices: ['Từ trưa trời sẽ nắng', 'Cả ngày mưa to', 'Cả ngày nhiều mây', 'Sẽ có bão'], answerIndex: 0, explanationVi: 'Dòng 2–3: てんきよほうを 確認しました → はれの 見込みでした (見込み là từ vựng của bài).' },
      { questionVi: 'Vì sao người viết nghĩ "có thể mưa"?', choices: ['Vì bầu trời dần đen lại', 'Vì bạn đi cùng nói thế', 'Vì dự báo nói sẽ mưa', 'Vì mưa đã rơi từ sáng'], answerIndex: 0, explanationVi: 'Dòng 4–5: そらが くろく なりました → ふる かもしれない — phỏng đoán 50/50 từ dấu hiệu bầu trời.' },
      { questionVi: 'Cuối cùng hai bạn đã làm gì?', choices: ['Ăn mì ramen trước ga', 'Vẫn bơi ở biển dưới mưa', 'Đi mua ô rồi mới bơi', 'Về nhà ngay từ ga đầu'], answerIndex: 0, explanationVi: 'Dòng cuối: およぐ ことは できませんでしたが…ラーメンを たべました — vế が nối hai sự việc trái ngược theo cách trung tính.' },
    ],
  },
  speakSentences: [
    { ja: 'あしたは あめ かもしれません。', vi: 'Ngày mai trời có thể mưa.' },
    { ja: 'かれは きょう こない かもしれません。', vi: 'Có thể hôm nay anh ấy không đến.' },
    { ja: 'こんやは さむく なる かもしれません。', vi: 'Tối nay có thể trời sẽ lạnh lên.' },
    { ja: 'よるの みちは きけん かもしれません。', vi: 'Đường phố ban đêm có thể nguy hiểm.' },
  ],
  translatePairs: [
    { ja: 'あしたは あめ かもしれません。', vi: 'Ngày mai trời có thể mưa.', tokens: ['あした', 'は', 'あめ', 'かもしれません'], distractors: ['でしょう'] },
    { ja: 'かれは たぶん こない でしょう。', vi: 'Chắc là anh ấy không đến đâu.', tokens: ['かれ', 'は', 'たぶん', 'こない', 'でしょう'], distractors: ['かもしれません'] },
    { ja: '台風が くる かもしれません。', vi: 'Có thể bão sẽ ập đến.', tokens: ['台風', 'が', 'くる', 'かもしれません'], distractors: ['はずです'] },
    { ja: 'でんしゃが おくれる かもしれません。', vi: 'Tàu điện có thể bị trễ.', tokens: ['でんしゃ', 'が', 'おくれる', 'かもしれません'], distractors: ['そうです'] },
  ],
  kanji: ['可', '能', '確'],
}
