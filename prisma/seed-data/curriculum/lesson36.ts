/**
 * NihongoGo — Bài 36: 〜はずです — Chắc chắn là.
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson36: CurriculumLesson = {
  order: 36,
  slug: 'l36-hazu-desu',
  title: '〜はずです — Chắc chắn là',
  titleJa: '〜はずです',
  description: 'Suy luận có căn cứ chắc chắn với はずです và dạng phủ định はずがありません.',
  learningObjectives: [
    'Dùng 〜はずです cho suy luận hợp lý',
    'Phủ định với 〜はずがありません',
    'Phân biệt はず và でしょう',
  ],
  grammarTopics: ['〜はずです (chắc chắn là)', '〜はずがありません (không thể nào)'],
  vocabularyTopics: ['Từ suy luận', 'Kỳ vọng và thực tế'],
  kanjiTopics: ['Kanji suy luận & dự kiến (理・由・予)'],
  difficulty: 'ELEMENTARY',
  vocabulary: [
    { term: '理由', reading: 'りゆう', romaji: 'riyū', meaningVi: 'lý do', pos: 'danh từ', exampleJa: 'おくれた 理由を せんせいに はなしました。', exampleVi: 'Tôi nói với thầy lý do đến trễ.' },
    { term: '予定', reading: 'よてい', romaji: 'yotei', meaningVi: 'dự định, lịch hẹn', pos: 'danh từ', exampleJa: 'らいしゅう おおさかへ いく 予定です。', exampleVi: 'Tuần sau tôi có kế hoạch đi Osaka.' },
    { term: '無理', reading: 'むり', romaji: 'muri', meaningVi: 'vô lý, quá sức', pos: 'danh từ', exampleJa: 'こんな みじかい じかんでは 無理です。', exampleVi: 'Trong thời gian ngắn như vậy là quá sức.' },
    { term: '自由', reading: 'じゆう', romaji: 'jiyū', meaningVi: 'tự do', pos: 'danh từ', exampleJa: 'どうぞ 自由に すわって ください。', exampleVi: 'Xin hãy ngồi tự nhiên.' },
    { term: '予習', reading: 'よしゅう', romaji: 'yoshū', meaningVi: 'học trước bài', pos: 'danh từ', exampleJa: 'よる、あしたの じゅぎょうの 予習を します。', exampleVi: 'Buổi tối tôi học trước bài cho giờ học mai.' },
    { term: '期待', reading: 'きたい', romaji: 'kitai', meaningVi: 'kỳ vọng, mong đợi', pos: 'danh từ', exampleJa: 'せんせいは かれに 期待して います。', exampleVi: 'Thầy giáo đặt kỳ vọng vào anh ấy.' },
    { term: '実際', reading: 'じっさい', romaji: 'jissai', meaningVi: 'thực tế', pos: 'danh từ', exampleJa: 'うわさと ちがって、実際は かんたんでした。', exampleVi: 'Khác với tin đồn, thực tế lại đơn giản.' },
    { term: 'けっか', romaji: 'kekka', meaningVi: 'kết quả', pos: 'danh từ', exampleJa: 'しけんの けっかは らいしゅう わかります。', exampleVi: 'Kết quả kỳ thi tuần sau mới biết.' },
    { term: 'せいかい', romaji: 'seikai', meaningVi: 'đáp án đúng', pos: 'danh từ', exampleJa: 'この もんだいの せいかいは Bです。', exampleVi: 'Đáp án đúng của câu này là B.' },
    { term: 'わすれもの', romaji: 'wasuremono', meaningVi: 'đồ để quên', pos: 'danh từ', exampleJa: 'えきに わすれものが ありました。', exampleVi: 'Ở ga có đồ ai đó để quên.' },
    { term: 'むこう', romaji: 'mukō', meaningVi: 'bên kia, phía kia', pos: 'danh từ', exampleJa: 'えきの むこうに コンビニが あります。', exampleVi: 'Bên kia ga có cửa hàng tiện lợi.' },
    { term: 'よていどおり', romaji: 'yoteidōri', meaningVi: 'đúng như kế hoạch', pos: 'danh từ', exampleJa: 'しけんは よていどおりに おわりました。', exampleVi: 'Kỳ thi kết thúc đúng như kế hoạch.' },
    { term: 'きぼう', romaji: 'kibō', meaningVi: 'hy vọng', pos: 'danh từ', exampleJa: 'わたしの きぼうは せんせいに なる ことです。', exampleVi: 'Hy vọng của tôi là trở thành giáo viên.' },
    { term: 'たしか', romaji: 'tashika', meaningVi: 'nhớ không nhầm là', pos: 'phó từ', exampleJa: 'たしか、かのじょは きょう やすみです。', exampleVi: 'Nếu tôi nhớ không nhầm, hôm nay cô ấy nghỉ.' },
    { term: 'やっと', romaji: 'yatto', meaningVi: 'cuối cùng cũng, mới vừa', pos: 'phó từ', exampleJa: 'やっと バスが きました。', exampleVi: 'Cuối cùng xe buýt cũng đến.' },
    { term: 'とどきます', romaji: 'todokimasu', meaningVi: '(thư, hàng) được giao đến', pos: 'động từ nhóm 1', exampleJa: 'にもつは らいしゅう とどきます。', exampleVi: 'Hành lý sẽ được chuyển đến vào tuần sau.' },
    { term: 'まにあいます', romaji: 'maniaimasu', meaningVi: 'kịp (đến nơi)', pos: 'động từ nhóm 1', exampleJa: '九じの でんしゃに まにあいます。', exampleVi: 'Tôi kịp chuyến tàu 9 giờ.' },
    { term: 'くわしい', romaji: 'kuwashii', meaningVi: 'rành rẽ, nắm chi tiết', pos: 'tính từ い', exampleJa: 'かれは でんしゃの じかんに くわしいです。', exampleVi: 'Anh ấy rành lịch trình tàu điện.' },
  ],
  grammar: [
    {
      code: 'l36-hazu-desu',
      title: '〜はずです — chắc chắn là (suy luận có cơ sở)',
      formation: 'V thể thường + はずです: いく はずです・いかなかった はずです; い-Adj nguyên dạng + はずです: あつい はずです; な-Adj + な はずです: かんたんな はずです; N + の はずです: 学生の はずです',
      explanationVi:
        'はず diễn tả SUY LUẬN CHẮC CHẮN dựa trên cơ sở rõ ràng (lịch trình, lời hứa, quy tắc, thông tin đã biết): "đúng ra là thế, chắc chắn là thế". Mức độ tin cao hơn でしょう (đoán chung chung đã học) — chỉ dùng はず khi có căn cứ để kết luận, còn khi đoán mò thoáng qua thì dùng でしょう. Cách nối giống các mẫu đã học (と おもいます, とき): mệnh đề trước はず phải ở THỂ THƯỜNG — động từ giữ dạng gốc/quá khứ/phủ định (つく・ついた・こない はずです), tính từ い nguyên dạng (やさしかった はずです), tính từ な thêm な (かんたんな はずです), danh từ thêm の (学生の はずです). KHÔNG dùng です/ます-form trước はず. Quá khứ của sự việc nằm trong mệnh đề (ついた はずです = chắc là ĐÃ đến), còn はず vẫn giữ です.',
      examples: [
        { ja: 'かれは むこうに ついた はずです。', vi: 'Chắc chắn anh ấy đã đến nơi rồi (tôi tính giờ tàu).', tokens: ['かれ', 'は', 'むこう', 'に', 'ついた', 'はずです'] },
        { ja: 'しけんは やさしかった はずです。', vi: 'Chắc là đề thi (hôm đó) đã dễ — tôi kết luận về quá khứ.' },
        { ja: 'あの人は 学生の はずです。', vi: 'Người kia chắc chắn là học sinh. (N + の はずです)' },
        { ja: 'でんしゃは 九じに でる はずです。', vi: 'Tàu điện đúng lịch phải xuất phát lúc 9 giờ.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'Danh từ 学生 + はず ghép thế nào?',
          sentence: 'あの人は 学生___はずです。',
          options: ['の', 'だ', 'な', 'が'],
          answerIndex: 0, explanationVi: 'Danh từ nối với はず bằng の: 学生の はずです. な dành cho tính từ な (かんたんな はずです), còn だ/が không đứng trước はずです.',
        },
        {
          kind: 'particle', prompt: 'Điền nối (Kỳ thi này chắc là dễ)',
          sentence: 'この しけんは かんたん___はずです。',
          options: ['な', 'の', 'だ', 'に'],
          answerIndex: 0, explanationVi: 'Tính từ な + な + はずです: かんたんな はずです. の chỉ dùng với danh từ; だ không ghép trước はず.',
        },
        {
          kind: 'conjugate', prompt: 'つきます → dạng + はず (chắc là ĐÃ đến)',
          sentence: 'かれは むこうに ___はずです。',
          options: ['ついた', 'つきます', 'ついて', 'つき'],
          answerIndex: 0, explanationVi: 'Trước はず là thể thường: suy luận về việc đã xong dùng quá khứ ついた はずです. つきます (ます-form) và ついて (て-form) không đứng trước はず.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['しけんは やさしかった はずです。', 'しけんは やさしいでした はずです。', 'しけんは やさしかったです はずです。', 'しけんは やさしい はずでしたです。'],
          answerIndex: 0, explanationVi: 'Tính từ い quá khứ = やさしかった, rồi thêm はずです. Các bản chèn でした/です vào giữa hoặc ghép はずでしたです đều sai cấu trúc.',
        },
        {
          kind: 'fill', prompt: 'Điền (anh ấy đã hẹn rồi — chắc chắn sẽ đến)',
          sentence: 'かれは あした ここへ くる___です。',
          options: ['はず', 'そう', 'はずの', 'そうの'],
          answerIndex: 0, explanationVi: 'Suy luận có cơ sở (lời hẹn) → くる はずです. そうです không diễn tả suy luận logic (chỉ dùng cho nghe nói hoặc vẻ ngoài — bài 35); はずの/そうの sai ghép trước です.',
        },
      ],
    },
    {
      code: 'l36-hazu-deshita',
      title: '〜はずでした — đáng lẽ phải… (kỳ vọng bị vỡ)',
      formation: '[mệnh đề ở hiện tại/thể thường] + はずでした: はじまる はずでした・やさしい はずでした — mong đợi lẽ ra đúng nhưng thực tế khác',
      explanationVi:
        'はずでした nói về KỲ VỌNG đã có nhưng thực tế ĐÃ TRÁI NGƯỢC: "đáng lẽ phải… (nhưng không thế)". パーティーは 六じに はじまる はずでした = đáng lẽ tiệc phải bắt đầu lúc 6 giờ — hàm ý thực tế bắt đầu muộn hơn. Cẩn thận đừng nhầm hai cấu trúc gần giống: [quá khứ + はずです] (やさしかった はずです) là SUY LUẬN chắc chắn về sự việc quá khứ; còn [hiện tại + はずでした] (やさしい はずでした) là KỲ VỌNG thất bại — đề đáng lẽ phải dễ mà thực ra khó. Vì vậy mệnh đề trước はずでした thường để ở hình thức mà TƯỞNG LÀ ĐÚNG lúc ban đầu (はじまる・やさしい・つく), còn thực tế sai lệch được nói ở vế sau (でも…).',
      examples: [
        { ja: 'きのうの パーティーは 六じに はじまる はずでした。', vi: 'Đáng lẽ bữa tiệc hôm qua phải bắt đầu lúc 6 giờ (nhưng thực tế muộn hơn).', tokens: ['きのうの', 'パーティー', 'は', '六じ', 'に', 'はじまる', 'はずでした'] },
        { ja: 'しけんは やさしい はずでした。', vi: 'Đáng lẽ đề thi phải dễ (nhưng thực ra khó).' },
        { ja: 'バスは 九じに くる はずでした。', vi: 'Đáng lẽ xe buýt phải đến lúc 9 giờ.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '「バスは 九じに くる はずでした。」 — thực tế xe buýt đã đến lúc 9 giờ chưa?',
          options: ['Rất có thể KHÔNG — はずでした diễn tả kỳ vọng bị thực tế phá vỡ', 'Rồi — câu khẳng định đúng như vậy', 'Không thể biết được', 'Xe buýt đã bị hủy tuyến'],
          answerIndex: 0, explanationVi: 'はずでした = "đáng lẽ phải thế" — nghe xong người ta hiểu ngầm là thực tế đã khác (xe đến muộn hoặc không đến).',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng nghĩa "đáng lẽ đề thi phải dễ (nhưng thực ra khó)"?',
          options: ['しけんは やさしい はずでした。', 'しけんは やさしかった はずです。', 'しけんは やさしい はずです。', 'しけんは やさしいかった はずでした。'],
          answerIndex: 0, explanationVi: 'Kỳ vọng thất bại: giữ tính từ như lúc mong đợi (やさしい) + はずでした. Bản 2 là suy luận về quá khứ; bản 4 sai cách chia quá khứ của tính từ い.',
        },
        {
          kind: 'fill', prompt: 'Điền (Đáng lẽ chuyến tàu phải xuất phát lúc 9 giờ — nhưng đã trễ)',
          sentence: 'でんしゃは 九じに でる___。',
          options: ['はずでした', 'はずです', 'そうです', 'はずでしたです'],
          answerIndex: 0, explanationVi: 'でる (lẽ ra đúng lúc đặt kỳ vọng) + はずでした = đáng lẽ phải xuất phát. はずです là suy luận bây giờ; そうです thuộc bài 35.',
        },
        {
          kind: 'choice', prompt: '「むこうに ついた はずです」 và 「むこうに つく はずでした」 khác nhau thế nào?',
          options: ['Câu 1: chắc là đã đến (suy luận); Câu 2: đáng lẽ phải đến (kỳ vọng thất bại)', 'Câu 1: đáng lẽ phải đến; Câu 2: chắc là đã đến', 'Hai câu giống hệt nhau về nghĩa', 'Cả hai câu đều sai ngữ pháp'],
          answerIndex: 0, explanationVi: 'Vị trí thời gian nằm trong mệnh đề: ついた + はずです = suy luận chắc chắn về việc đã xong; つく + はずでした = mong đợi bị thực tế phản bội.',
        },
      ],
    },
    {
      code: 'l36-hazu-ga-arimasen',
      title: '〜はずがありません — không thể nào',
      formation: 'V/Adj/N thể thường + はずが ありません: つく はずがありません・学生の はずがありません; phủ định kép: 〜ない はずが ありません = chắc chắn là…',
      explanationVi:
        'はずがありません là PHỦ ĐỊNH MẠNH của はずです — "không thể nào, không đời nào" — cũng dựa trên cơ sở chắc chắn (quy tắc, hiểu biết về người/việc). So với cách nói thường はずじゃありません, dạng はずがありません trang trọng và dứt khoát hơn. Điểm cần chú ý là PHỦ ĐỊNH KÉP: [〜ない はずがありません] phủ định của [〜ない はずです] nên nghĩa lật trở lại thành khẳng định — かのじょは しらない はずがありません = "không thể nào cô ấy không biết" = chắc chắn cô ấy BIẾT. Nhớ ghép mệnh đề ở thể thường (V gốc/N の/な-Adj な) y như はずです, và はずがありません đã là dạng lịch sự nên không thêm です phía sau.',
      examples: [
        { ja: 'かれは うそを つく はずが ありません。', vi: 'Không đời nào anh ấy nói dối.', tokens: ['かれ', 'は', 'うそ', 'を', 'つく', 'はずが', 'ありません'] },
        { ja: 'かのじょは これを しらない はずが ありません。', vi: 'Không thể nào cô ấy không biết việc này — tức là chắc chắn cô ấy biết.' },
        { ja: 'でんしゃが こんな じかんに おくれる はずが ありません。', vi: 'Không thể nào tàu điện lại trễ vào giờ này.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '「かれは それを しらない はずがありません。」 — anh ấy có biết việc đó không?',
          options: ['Chắc chắn BIẾT — phủ định của "không biết" nên nghĩa lật lại thành khẳng định', 'Chắc chắn không biết', 'Trông có vẻ không biết', 'Nghe nói không biết'],
          answerIndex: 0, explanationVi: 'Phủ định kép: しらない はずがありません = phủ định của しらない はずです → chắc chắn là biết. Đây là bẫy nghĩa kinh điển của はずがありません.',
        },
        {
          kind: 'fill', prompt: 'Điền (Không đời nào anh ấy nói dối)',
          sentence: 'かれは うそを つく___が ありません。',
          options: ['はず', 'そう', 'こと', 'ところ'],
          answerIndex: 0, explanationVi: 'はずがありません = phủ định mạnh của はずです. そうです không có dạng 〜がありません; こと/ところ không diễn tả suy luận.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['かれは こない はずが ありません。', 'かれは こないの はずが ありません。', 'かれは きません はずが ありません。', 'かれは こない はずが ありませんです。'],
          answerIndex: 0, explanationVi: 'Động từ thể thường nối thẳng はずがありません: こない はずがありません. Không chen の, không dùng ます-form, và ありません đã là dạng lịch sự — không thêm です.',
        },
        {
          kind: 'choice', prompt: 'So với 「でんしゃが おくれる はずです」, câu 「でんしゃが おくれる はずがありません」 khác ở điểm nào?',
          options: ['Phủ định tuyệt đối dựa trên cơ sở — mức tin MẠNH hơn hẳn', 'Ít chắc chắn hơn vì câu dài hơn', 'Chỉ khác mức độ lịch sự, nghĩa như nhau', 'Là cách nói của trẻ con'],
          answerIndex: 0, explanationVi: 'はずです = chắc là thế; はずがありません = không thể nào thế (phủ định dứt khoát). Cùng dựa trên cơ sở nhưng đi hai chiều ngược nhau.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Đợi bạn ở ga',
      situationVi: 'Linh và Tanaka đợi Min ở ga để cùng đi chơi.',
      lines: [
        { speaker: 'リン', ja: 'たなかさん、ミンさんは もう えきに ついた はずですよ。', vi: 'Tanaka này, chắc chắn Min đã đến ga rồi đấy.' },
        { speaker: 'たなか', ja: 'そうですね。九じの でんしゃですから。', vi: 'Đúng rồi. Vì là chuyến tàu 9 giờ mà.' },
        { speaker: 'リン', ja: 'でも、まだ みえませんね。', vi: 'Nhưng vẫn chưa thấy bóng đâu.' },
        { speaker: 'たなか', ja: 'でんしゃが おくれた と おもいます。', vi: 'Tôi nghĩ là tàu bị trễ.' },
        { speaker: 'リン', ja: 'あ、むこうから ミンさんが あるいて きますよ。', vi: 'A, Min đang đi bộ từ phía kia kìa.' },
        { speaker: 'ミン', ja: 'すみません、バスが おくれました。', vi: 'Xin lỗi nhé, xe buýt bị trễ.' },
        { speaker: 'リン', ja: 'だいじょうぶです。わたしたちの でんしゃは 十じですから、まだ じかんが あります。', vi: 'Không sao. Tàu của chúng ta là 10 giờ nên vẫn còn thời gian.' },
        { speaker: 'ミン', ja: 'よかったです。あ、コーヒーを かって きます。ふたりは どうしますか。', vi: 'May quá. À, tôi đi mua cà phê đây. Hai bạn thế nào?' },
        { speaker: 'たなか', ja: 'わたしも いっしょに いきます。', vi: 'Tôi cũng đi cùng.' },
        { speaker: 'リン', ja: 'はい、わかりました。ここで まって います。', vi: 'Vâng, biết rồi. Tôi đợi ở đây.' },
      ],
    },
    {
      titleVi: 'Kết quả kỳ thi',
      situationVi: 'Sau kỳ thi, Min và Linh kể về đề thi và mong đợi kết quả.',
      lines: [
        { speaker: 'ミン', ja: 'リンさん、きのうの しけんは どうでしたか。', vi: 'Linh, kỳ thi hôm qua thế nào?' },
        { speaker: 'リン', ja: 'しけんは やさしい はずでした。でも、実際は とても むずかしかったです。', vi: 'Đáng lẽ đề thi phải dễ. Nhưng thực tế lại rất khó.' },
        { speaker: 'ミン', ja: 'わたしも です。六ばんと 七ばんの もんだいが わかりませんでした。', vi: 'Tôi cũng vậy. Câu số 6 và số 7 tôi không làm được.' },
        { speaker: 'リン', ja: 'あの もんだいの せいかいは Bでした。ともだちに ききました。', vi: 'Đáp án đúng của câu đó là B. Tôi hỏi bạn rồi.' },
        { speaker: 'ミン', ja: 'Bですか。ざんねんですね。わたしは Aに しました。', vi: 'Là B á? Tiếc thật. Tôi chọn A.' },
        { speaker: 'リン', ja: 'だいじょうぶですよ。ミンさんは まいばん 予習して いましたから、できる はずです。', vi: 'Không sao đâu. Bạn học trước bài mỗi tối rồi, chắc làm được mà.' },
        { speaker: 'ミン', ja: 'ありがとうございます。リンさんは どうでしたか。', vi: 'Cảm ơn bạn. Còn Linh thì sao?' },
        { speaker: 'リン', ja: 'わたしは 三ばんを まちがえました。でも、まちがえたのは 三ばんだけだと おもいます。', vi: 'Tôi sai câu số 3. Nhưng tôi nghĩ chỉ sai mỗi câu đó thôi.' },
        { speaker: 'ミン', ja: 'それなら、ふたりとも うかる はずですね。', vi: 'Vậy thì chắc chắn cả hai đỗ cả.' },
        { speaker: 'リン', ja: 'そうですね。けっかは らいしゅう わかる はずですから、ゆっくり まちましょう。', vi: 'Đúng vậy. Kết quả chắc là tuần sau biết, nên mình cứ từ từ chờ nhé.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'かれは もう むこうに ついた はずです。', meaningVi: 'Chắc chắn anh ấy đã đến nơi rồi.', choices: ['Chắc chắn anh ấy đã đến nơi rồi', 'Anh ấy vừa mới rời đi', 'Trông anh ấy rất mệt', 'Đáng lẽ anh ấy phải đến'], answerIndex: 0, dictation: true },
    { scriptJa: 'バスは 九じに くる はずでした。', meaningVi: 'Đáng lẽ xe buýt phải đến lúc 9 giờ.', choices: ['Xe buýt đến đúng 9 giờ', 'Xe buýt đã chạy rồi', 'Đáng lẽ xe buýt phải đến lúc 9 giờ', 'Tôi đợi xe buýt mỗi ngày'], answerIndex: 2, dictation: true },
    { scriptJa: 'あの人は 学生の はずです。', meaningVi: 'Người kia chắc chắn là học sinh.', choices: ['Người kia chắc chắn là học sinh', 'Người kia là giáo viên', 'Tôi hỏi người kia là học sinh', 'Người kia trông giống học sinh'], answerIndex: 0 },
    { scriptJa: 'かれは うそを つく はずが ありません。', meaningVi: 'Không đời nào anh ấy nói dối.', choices: ['Anh ấy hay nói dối', 'Nghe nói anh ấy nói dối', 'Không đời nào anh ấy nói dối', 'Đáng lẽ anh ấy không nên nói dối'], answerIndex: 2 },
  ],
  reading: {
    titleVi: 'Gói quà từ Việt Nam',
    lines: [
      { text: 'きのう、ともだちの ミンから にもつが とどきました。', vi: 'Hôm qua tôi nhận được kiện hàng từ bạn Min.' },
      { text: 'ミンは せんしゅう ベトナムへ かえりました。', vi: 'Min tuần trước đã về Việt Nam.' },
      { text: 'にもつの 中に おかしと てがみが はいって いました。', vi: 'Trong kiện hàng có bánh kẹo và thư.' },
      { text: 'てがみに よると、この おかしは とても おいしい そうです。', vi: 'Theo lá thư, món bánh này rất ngon.' },
      { text: 'でも、実際は すこし からかったです。', vi: 'Nhưng thực tế thì nó hơi cay.' },
      { text: 'ミンは 「つぎは もっと あまい おかしを おくるよ」と かきました。', vi: 'Min viết: "Lần sau tớ sẽ gửi món bánh ngọt hơn nhé".' },
      { text: 'わたしは つぎの おかしも すきに なる はずです。', vi: 'Chắc chắn món bánh lần sau tôi cũng sẽ thích.' },
      { text: 'こんや、ミンに でんわを かけます。', vi: 'Tối nay tôi sẽ gọi điện cho Min.' },
    ],
    questions: [
      { questionVi: 'Kiện hàng của Min chứa những gì?', choices: ['Bánh kẹo và thư', 'Quần áo và giày', 'Sách tiếng Nhật', 'Ô và mũ'], answerIndex: 0, explanationVi: 'Dòng 3: おかしと てがみが はいって いました — 中 (trong) là từ đã học.' },
      { questionVi: 'Món bánh thực tế như thế nào?', choices: ['Ngon y như lời trong thư', 'Hơi cay', 'Ngọt lắm', 'Đã hết hạn'], answerIndex: 1, explanationVi: 'Dòng 5: 実際は すこし からかったです — 実際 đối lập với điều thư viết (dòng 4 dùng そうです truyền đạt của bài 35).' },
      { questionVi: 'Người viết dự định làm gì tối nay?', choices: ['Gọi điện cho Min', 'Gửi bánh cho Min', 'Đi ngủ sớm', 'Viết thư cho giáo viên'], answerIndex: 0, explanationVi: 'Dòng cuối: こんや、ミンに でんわを かけます.' },
    ],
  },
  speakSentences: [
    { ja: 'かれは むこうに ついた はずです。', vi: 'Chắc chắn anh ấy đã đến nơi rồi.' },
    { ja: 'あの人は 学生の はずです。', vi: 'Người kia chắc chắn là học sinh.' },
    { ja: 'バスは 九じに くる はずでした。', vi: 'Đáng lẽ xe buýt phải đến lúc 9 giờ.' },
    { ja: 'かれは うそを つく はずが ありません。', vi: 'Không đời nào anh ấy nói dối.' },
  ],
  translatePairs: [
    { ja: 'かれは むこうに ついた はずです。', vi: 'Chắc chắn anh ấy đã đến nơi rồi.', tokens: ['かれ', 'は', 'むこう', 'に', 'ついた', 'はずです'], distractors: ['そうです'] },
    { ja: 'しけんは やさしかった はずです。', vi: 'Chắc là đề thi (hôm đó) đã dễ.', tokens: ['しけん', 'は', 'やさしかった', 'はずです'], distractors: ['やさしい'] },
    { ja: 'あの人は 学生の はずです。', vi: 'Người kia chắc chắn là học sinh.', tokens: ['あの人', 'は', '学生', 'の', 'はずです'], distractors: ['だ'] },
    { ja: 'バスは 九じに くる はずでした。', vi: 'Đáng lẽ xe buýt phải đến lúc 9 giờ.', tokens: ['バス', 'は', '九じ', 'に', 'くる', 'はずでした'], distractors: ['はずです'] },
    { ja: 'でんしゃが おくれる はずが ありません。', vi: 'Không thể nào tàu điện lại trễ.', tokens: ['でんしゃ', 'が', 'おくれる', 'はずが', 'ありません'], distractors: ['あります'] },
  ],
  kanji: ['理', '由', '予'],
}
