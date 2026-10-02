/**
 * NihongoGo — Bài 40: 〜そうに見えます / 〜ようです — Nhìn có vẻ.
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson40: CurriculumLesson = {
  order: 40,
  slug: 'l40-sou-ni-miemasu',
  title: '〜そうに見えます — Nhìn có vẻ',
  titleJa: '〜そうに見えます',
  description: 'Nhận xét về vẻ bề ngoài một cách giữ khoảng cách với 〜そうに見えます.',
  learningObjectives: [
    'Dùng 〜そうに見えます khi nhận xét người khác',
    'Phân biệt với 〜そうです',
    'Miêu tả dáng vẻ bên ngoài',
  ],
  grammarTopics: ['〜そうに見えます (trông có vẻ)', 'Phân biệt そうです (trực tiếp/gián tiếp)'],
  vocabularyTopics: ['Dáng vẻ bề ngoài', 'Từ miêu tả người'],
  kanjiTopics: ['Kanji dáng vẻ (若・年・疲)'],
  difficulty: 'ELEMENTARY',
  vocabulary: [
    { term: '若い', reading: 'わかい', romaji: 'wakai', meaningVi: 'trẻ, còn trẻ', pos: 'tính từ い', exampleJa: 'あの せんせいは まだ 若いです。', exampleVi: 'Vị giáo sư ấy vẫn còn trẻ.' },
    { term: '去年', reading: 'きょねん', romaji: 'kyonen', meaningVi: 'năm ngoái', pos: 'danh từ', exampleJa: '去年、日本へ きました。', exampleVi: 'Năm ngoái tôi đến Nhật.' },
    { term: '疲れます', reading: 'つかれます', romaji: 'tsukaremasu', meaningVi: 'mệt mỏi, kiệt sức', pos: 'động từ nhóm 2', exampleJa: '母は しごとで 疲れます。', exampleVi: 'Mẹ tôi làm việc xong rất mệt.' },
    { term: '健康', reading: 'けんこう', romaji: 'kenkō', meaningVi: 'khỏe mạnh', pos: 'tính từ な', exampleJa: '毎日 うんどうして いますから、健康です。', exampleVi: 'Vì tập thể dục mỗi ngày nên tôi khỏe mạnh.' },
    { term: '幸せ', reading: 'しあわせ', romaji: 'shiawase', meaningVi: 'hạnh phúc', pos: 'tính từ な', exampleJa: 'かのじょは 幸せそうに わらって います。', exampleVi: 'Cô ấy cười trông có vẻ hạnh phúc.' },
    { term: 'うんどうします', romaji: 'undō shimasu', meaningVi: 'vận động, tập luyện thể thao', pos: 'động từ nhóm 3', exampleJa: 'あさ、こうえんで うんどうします。', exampleVi: 'Buổi sáng tôi tập thể dục ở công viên.' },
    { term: 'やせます', romaji: 'yasemasu', meaningVi: 'gầy đi, giảm cân', pos: 'động từ nhóm 2', exampleJa: 'まいにち はしると やせます。', exampleVi: 'Chạy bộ mỗi ngày thì sẽ gầy đi.' },
    { term: 'ふとります', romaji: 'futorimasu', meaningVi: 'béo lên, tăng cân', pos: 'động từ nhóm 1', exampleJa: '毎日 ビールを のむと ふとります。', exampleVi: 'Uống bia mỗi ngày là béo lên đấy.' },
    { term: 'よごれます', romaji: 'yogoremasu', meaningVi: 'bị bẩn', pos: 'động từ nhóm 2', exampleJa: 'あめの 日は くつが よごれます。', exampleVi: 'Ngày mưa giày hay dính bẩn.' },
    { term: 'あせ', romaji: 'ase', meaningVi: 'mồ hôi', pos: 'danh từ', exampleJa: 'はしったから、あせを かきました。', exampleVi: 'Vì vừa chạy nên tôi ra mồ hôi.' },
    { term: 'めがね', romaji: 'megane', meaningVi: 'kính mắt', pos: 'danh từ', exampleJa: 'めがねを かけて いる 人は おにいさんです。', exampleVi: 'Người đeo kính là anh trai tôi.' },
    { term: 'かっこいい', romaji: 'kakkoii', meaningVi: 'đẹp trai, ngầu', pos: 'tính từ い', exampleJa: 'その かっこいい 人は だれですか。', exampleVi: 'Người ngầu kia là ai vậy?' },
    { term: 'まじめ', romaji: 'majime', meaningVi: 'nghiêm túc, chăm chỉ', pos: 'tính từ な', exampleJa: 'かれは まじめな 学生です。', exampleVi: 'Anh ấy là sinh viên chăm chỉ.' },
    { term: 'はずかしい', romaji: 'hazukashii', meaningVi: 'thẹn, ngại ngùng', pos: 'tính từ い', exampleJa: 'みんなの 前で うたうのは はずかしいです。', exampleVi: 'Hát trước mặt mọi người thì ngại lắm.' },
    { term: 'じつは', romaji: 'jitsu wa', meaningVi: 'thật ra, thực tế là', pos: 'phó từ', exampleJa: 'じつは、わたしも はじめてです。', exampleVi: 'Thật ra đây cũng là lần đầu của tôi.' },
    { term: 'ぬれます', romaji: 'nuremasu', meaningVi: 'bị ướt', pos: 'động từ nhóm 2', exampleJa: 'かさを もって いかないと ぬれますよ。', exampleVi: 'Không mang ô theo là ướt đấy.' },
    { term: 'おとな', romaji: 'otona', meaningVi: 'người lớn', pos: 'danh từ', exampleJa: '十八さいから おとなです。', exampleVi: 'Từ mười tám tuổi trở đi là người lớn.' },
    { term: 'しばらく', romaji: 'shibaraku', meaningVi: 'một lúc, một khoảng thời gian', pos: 'phó từ', exampleJa: 'しばらく まって ください。', exampleVi: 'Xin đợi một lát.' },
  ],
  grammar: [
    {
      code: 'l40-sou-ni-miemasu',
      title: '〜そうに見えます — trông có vẻ (nhận xét bề ngoài)',
      formation: 'い-Adj bỏ い + そうに 見えます: おいしそうに・あまそうに; な-Adj + そうに: げんきそうに・まじめそうに; よい→よさそう; V bỏ ます + そうに: ふりそうに・こわれそうに',
      explanationVi:
        'そうに見えます nghĩa là "trông có vẻ…" — nhận xét DÁNG VẺ BÊN NGOÀI qua cái nhìn trực tiếp với giọng GIỮ KHOẢNG CÁCH: không nếm thử vẫn có thể nói おいしそうに 見えます, chưa hỏi vẫn có thể nói つかれそうに 見えます. Cách ghép giống hệt そうです ngoại quan đã học ở L35: tính từ い bỏ い (おいしい→おいしそう), tính từ な giữ nguyên (げんき→げんきそう), bất quy tắc よい→よさそう (KHÔNG nói ×よそう・×いそう); động từ bỏ ます (ふります→ふりそう) mang nghĩa "trông như sắp…". Khác biệt so với L35: おいしそうです là nhận xét thẳng; おいしそうに 見えます nhấn "THEO NHƯ MẮT THẤY" — lịch sự, dè dặt hơn, hay dùng khi nói về người khác một cách giữ ý. 見えます ở đây là dạng "có thể nhìn thấy/có vẻ" của 見ます. Lưu ý: không dùng cho cảm xúc trực tiếp của chính mình (không nói ×わたしは うれしそうです) — nhưng bản chất "qua mắt nhìn" khiến mẫu câu này tự nhiên dùng cho người và vật quanh mình.',
      examples: [
        { ja: 'この レストランは おいしそうに 見えますね。', vi: 'Nhà hàng này trông có vẻ ngon nhỉ.', tokens: ['この', 'レストラン', 'は', 'おいしそうに', '見えます'] },
        { ja: 'かれは 今日も げんきそうに 見えます。', vi: 'Hôm nay anh ấy trông vẫn rất khỏe mạnh.' },
        { ja: 'そらが とても くらいです。いまにも あめが ふりそうに 見えます。', vi: 'Trời tối om — trông như phút nữa mưa sẽ trút xuống.' },
        { ja: 'この ふるい いえは こわれそうに 見えます。', vi: 'Ngôi nhà cũ này trông có vẻ sập đến nơi.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'おいしい → ghép そうに見えます (nhà hàng trông có vẻ ngon)',
          sentence: 'この レストランは ___に 見えます。',
          options: ['おいしそう', 'おいしいそう', 'おいしくそう', 'おいしかったそう'],
          answerIndex: 0, explanationVi: 'い-Adj bỏ い + そう: おいしそう. おいしいそう sai ghép; おいしかったそう nghe như truyền đạt (L35) về quá khứ.',
        },
        {
          kind: 'particle', prompt: 'Chọn trợ từ (Tanaka trông có vẻ trẻ)',
          sentence: 'たなかさんは 若そう___ 見えますね。',
          options: ['に', 'で', 'を', 'と'],
          answerIndex: 0, explanationVi: 'そう + に + 見えます là khối cố định: 若そうに 見えます. で・を・と không ghép được ở vị trí này.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['あの ケーキは あまそうに 見えます。', 'あの ケーキは あまいそうに 見えます。', 'あの ケーキは あまくそうに 見えます。', 'あの ケーキは あまそうに 見ます。'],
          answerIndex: 0, explanationVi: 'あまい→あまそう (bỏ い). Ngoài ra phải dùng 見えます ("trông có vẻ") chứ không phải 見ます ("nhìn") — 意味 hoàn toàn khác nhau.',
        },
        {
          kind: 'conjugate', prompt: 'よい → "công việc mới trông có vẻ tốt"',
          sentence: 'あたらしい しごとは ___そうに 見えます。',
          options: ['よさ', 'よ', 'よく', 'いい'],
          answerIndex: 0, explanationVi: 'Bất quy tắc: よい → よさ + そう = よさそう (giống L35). Không nói ×よそう hay ×いそう.',
        },
        {
          kind: 'conjugate', prompt: 'ふります → "trông như sắp mưa"',
          sentence: 'そらが くらいです。あめが ___そうに 見えます。',
          options: ['ふり', 'ふる', 'ふって', 'ふった'],
          answerIndex: 0, explanationVi: 'Động từ bỏ ます + そうに 見えます = trông như sắp…: ふりそうに 見えます. て-form・た-form・nguyên dạng đều không đứng ở đây.',
        },
      ],
    },
    {
      code: 'l40-you-desu',
      title: '〜ように見えます・〜ようです — trông như… / dường như… (từ bằng chứng)',
      formation: 'Thể thường + ように 見えます: つかれた ように 見えます・ぬれている ように 見えます; N + の ようです: 学生の ようです; な-Adj + な ようです; い-Adj nguyên dạng + ようです',
      explanationVi:
        'ようです diễn tả phỏng đoán DỰA TRÊN BẰNG CHỨNG cụ thể mà người nói nắm được — "dường như, có vẻ như": みちが ぬれて いる ようです (thấy đường ướt → dường như đã mưa), かのじょは つかれた ように 見えます (dáng vẻ nhìn thấy → trông như đã mệt). Cách nối: mệnh đề trước ở THỂ THƯỜNG với mọi thì (quá khứ つかれた ように, tiếp diễn ぬれて いる ように, phủ định おきて いない ようです); danh từ nối bằng の (学生の ようです); tính từ な giữ な (まじめな ようです); tính từ い nguyên dạng (ねむい ようです). ように見えます thiên về cái NHÌN THẤY (trực quan); ようです khái quát mọi bằng chứng — dấu vết, hoàn cảnh, lời kể lẻ tẻ. So với かもしれません (L37): ようです có căn cứ rõ hơn — người nói ĐÃ thấy dấu hiệu rồi mới nói, còn かもしれません là phỏng đoán mù mờ.',
      examples: [
        { ja: 'かのじょは つかれた ように 見えます。', vi: 'Cô ấy trông có vẻ đã mệt.', tokens: ['かのじょ', 'は', 'つかれた', 'ように', '見えます'] },
        { ja: 'みちが ぬれて いる ようです。さっき あめが ふった ようです。', vi: 'Đường đang ướt — dường như mưa vừa ụp qua.' },
        { ja: 'かれは まだ おきて いない ようです。', vi: 'Có vẻ anh ấy vẫn chưa dậy.' },
        { ja: 'あの 人は 学生の ようです。大きい かばんを もって いますから。', vi: 'Người kia có vẻ là sinh viên — vì đang xách cái cặp to.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'つかれます → "trông như đã mệt"',
          sentence: 'かのじょは ___ように 見えます。',
          options: ['つかれた', 'つかれて', 'つかれます', 'つかれるだ'],
          answerIndex: 0, explanationVi: 'Trước ように 見えます là THỂ THƯỜNG (không ます); "như ĐÃ mệt" → quá khứ つかれた. つかれて một mình không ghép được; つかれるだ là ghép sai.',
        },
        {
          kind: 'fill', prompt: 'Điền (thấy đường đang ướt — dường như đã mưa)',
          sentence: 'みちが ぬれて いる ___です。',
          options: ['よう', 'そう', 'はず', 'ころ'],
          answerIndex: 0, explanationVi: 'Bằng chứng nhìn thấy (đường ướt) → ようです. そうです (L35) là truyền đạt hoặc ngoại quan với cách ghép khác; はずです (L36) là suy luận chắc chắn — mạnh hơn "dường như"; ころ là mốc thời gian.',
        },
        {
          kind: 'particle', prompt: 'Chọn từ (Có vẻ là sinh viên)',
          sentence: 'あの 人は 学生___ようです。',
          options: ['の', 'な', 'は', 'を'],
          answerIndex: 0, explanationVi: 'DANH TỪ + の + ようです: 学生の ようです. な chỉ dùng sau tính từ な (まじめな ようです).',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['かれは ねむい ようです。', 'かれは ねむいだ ようです。', 'かれは ねむそうだ ようです。', 'かれは ねむいようそうです。'],
          answerIndex: 0, explanationVi: 'い-Adj nguyên dạng + ようです: ねむい ようです — không chen だ; cũng không trộn そう với よう trong cùng một khối.',
        },
      ],
    },
    {
      code: 'l40-sou-you-phan-biet',
      title: 'Phân biệt そうに見えます・ようです・そうです (L35)',
      formation: 'そうに見えます: nhìn TRỰC TIẾP dáng vẻ (おいしそうに 見えます); ようです: suy từ BẰNG CHỨNG (ぬれている ようです); そうです伝聞: KỂ LẠI nguồn (〜に よると…そうです); そうです外観: đánh giá ngoại quan trực tiếp (おいしそうです)',
      explanationVi:
        'Bốn cách "có vẻ / nghe nói" cần tách bạch: (1) そうに見えます — nhận xét dáng vẻ NHÌN THẤY NGAY, giọng giữ khoảng cách: この レストランは おいしそうに 見えます (nhìn từ ngoài cửa, chưa ăn thử); (2) ようです — phỏng đoán từ BẰNG CHỨNG, bằng chứng không nhất thiết là thị giác: みちが ぬれている ようです (thấy đường ướt, suy ra đã mưa) hay nghe người khác kể lẻ tẻ; (3) そうです truyền đạt (L35) — KỂ LẠI thông tin có nguồn rõ: てんきよほうに よると、あしたは あめ だそうです; (4) そうです ngoại quan (L35) — khẳng định vẻ ngoài trực tiếp, đậm hơn: この ケーキは おいしそうです. Mẹo nhanh: MẮT THẤY ngay → そうに見えます/そうです(外観); DẤU VẾT ĐỂ SUY → ようです; NGƯỜI KHÁC KỂ → そうです(伝聞). Còn かもしれません (L37) là đoán mù mờ chưa có căn cứ, はずです (L36) là suy luận chắc chắn có cơ sở.',
      examples: [
        { ja: 'この レストランは おいしそうに 見えますが、じつは あまり おいしくないです。', vi: 'Nhà hàng này trông có vẻ ngon đấy, nhưng thật ra không ngon lắm.' },
        { ja: 'てんきよほうに よると、あしたは あめが ふる そうです。', vi: 'Theo dự báo thời tiết, ngày mai trời mưa (nghe kể lại).', tokens: ['てんきよほう', 'に', 'よると', 'あした', 'は', 'あめ', 'が', 'ふる', 'そうです'] },
        { ja: 'みせの 前に 人が たくさん います。あの ラーメンは おいしい ようです。', vi: 'Trước quán kín người — ramen bên kia có vẻ ngon thật.' },
      ],
      drills: [
        {
          kind: 'fill', prompt: 'Điền (nhìn thẳng bầu trời đen kịt — chọn cách nói nhấn CÁI NHÌN THẤY)',
          sentence: 'そらが くろく なって きました。あめが ふり___。',
          options: ['そうに 見えます', 'ようです', 'そうです', 'はずです'],
          answerIndex: 0, explanationVi: 'Nhìn trực tiếp dáng vẻ (trời đang đen dần) → そうに 見えます chuẩn nhất. ふるようです thiên về suy từ bằng chứng; そうです truyền đạt cần nguồn; はずです quá chắc chắn.',
        },
        {
          kind: 'fill', prompt: 'Điền (trong tay là chiếc ô đang ướt, không tận mắt thấy mưa)',
          sentence: 'この かさは ぬれて います。さっきまで あめが ふって いた ___です。',
          options: ['よう', 'そう', 'はず', 'まま'],
          answerIndex: 0, explanationVi: 'Bằng chứng gián tiếp (ô ướt) → ようです. そうです truyền đạt cần người/kh nguồn kể; はずです suy luận chắc chắn hơn; まま là "giữ nguyên trạng thái".',
        },
        {
          kind: 'choice', prompt: '「田中さんは げんきだと さゆりさんが いって いました。」 — rút gọn thành một câu, dùng mẫu nào?',
          options: ['田中さんは げんきだ そうです。(truyền đạt — nghe kể)', '田中さんは げんきな ようです。(bằng chứng)', '田中さんは げんきそうに 見えます。(trực quan)', '田中さんは げんきな はずです。(suy luận chắc chắn)'],
          answerIndex: 0, explanationVi: 'Có nguồn kể lại (さゆりさん) → そうです truyền đạt (L35); danh từ/tính từ な cần だ: げんきだ そうです. Ba mẫu kia không phản ánh đúng "nghe người khác nói".',
        },
        {
          kind: 'choice', prompt: '「かのじょは つかれた ように 見えます」 và 「かのじょは つかれた ようです」 khác nhau thế nào?',
          options: ['Câu 1 nhấn "trông thấy" bằng mắt; câu 2 suy từ bằng chứng nói chung (chưa hẳn mình nhìn thấy)', 'Câu 1 là nghe người khác kể; câu 2 cũng nghe kể', 'Câu 1 sai ngữ pháp, chỉ câu 2 đúng', 'Hai câu giống hệt nhau, thay nhau tự do'],
          answerIndex: 0, explanationVi: 'ように見えます = trực quan (qua mắt); ようです = bằng chứng bất kỳ (dấu vết, hoàn cảnh, lời kể). Cùng gốc つかれた nhưng căn cứ phỏng đoán khác nhau.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Người kia là ai thế?',
      situationVi: 'Min và Linh nhìn một người lạ ở công viên và đoán tuổi, nghề của anh ấy.',
      lines: [
        { speaker: 'ミン', ja: 'リンさん、あの 人を みて ください。だれだと おもいますか。', vi: 'Linh này, nhìn người kia kìa. Bạn nghĩ ai thế?' },
        { speaker: 'リン', ja: '二十さいぐらいだと おもいます。とても 若く 見えますね。', vi: 'Tôi nghĩ khoảng hai mươi tuổi. Trông trẻ quá nhỉ.' },
        { speaker: 'ミン', ja: 'わたしは 三十さいぐらいだと おもいますよ。この頃の 人は 若く 見えますから。', vi: 'Tôi thấy khoảng ba mươi đấy. Dạo này ai cũng trông trẻ cả.' },
        { speaker: 'リン', ja: 'あの 人は 学生の ようです。大きい かばんを もって います。', vi: 'Người ấy có vẻ là sinh viên. Đang xách cái cặp to đùng.' },
        { speaker: 'ミン', ja: 'そうですね。めがねを かけて いて、まじめそうに 見えます。', vi: 'Thật đấy. Đeo kính trông có vẻ nghiêm túc lắm.' },
        { speaker: 'リン', ja: 'じつは、わたし、あの 人を しって います。', vi: 'Thật ra tôi biết người ấy đấy.' },
        { speaker: 'ミン', ja: 'えっ、ほんとうですか。だれですか。', vi: 'Hả? Thật à? Là ai vậy?' },
        { speaker: 'リン', ja: '去年まで おなじ だいがくに いた ともだちです。', vi: 'Là bạn tôi, học cùng đại học đến năm ngoái.' },
        { speaker: 'ミン', ja: 'どうして すぐ わかりましたか。', vi: 'Sao bạn nhận ra ngay thế?' },
        { speaker: 'リン', ja: 'めがねと かばんで わかりました。……じゃあ、あいさつして きます。', vi: 'Nhờ cái kính và chiếc cặp ấy.… Để tôi đi chào đã.' },
      ],
    },
    {
      titleVi: 'Quán trông có vẻ ngon',
      situationVi: 'Tanaka và Linh chọn chỗ ăn trưa; cái trông thấy chưa chắc đã giống cái ăn được.',
      lines: [
        { speaker: 'たなか', ja: 'リンさん、おなかが すきましたね。あの レストランは どうですか。', vi: 'Linh này, đói bụng rồi nhỉ. Kia kìa, nhà hàng đó thế nào?' },
        { speaker: 'リン', ja: 'おいしそうに 見えますね。でも、人が おおい ようです。', vi: 'Trông có vẻ ngon nhỉ. Nhưng có vẻ đông người quá.' },
        { speaker: 'たなか', ja: 'じつは、せんしゅう いきました。あまり おいしくなかったです。', vi: 'Thật ra tuần trước tôi đi rồi. Không ngon lắm.' },
        { speaker: 'リン', ja: 'そうですか。おいしそうに 見えたのに、ちがいましたね。', vi: 'Vậy à. Trông có vẻ ngon thế mà lại khác nhỉ.' },
        { speaker: 'たなか', ja: 'ええ、そうに 見えるのと、じっさいは ちがう ことが ありますね。', vi: 'Ừ, cái nhìn thấy và thực tế đôi khi khác nhau thật.' },
        { speaker: 'リン', ja: 'この 前 はいった ちいさい みせは どうでしたか。', vi: 'Quán nhỏ mình vào lần trước thế nào?' },
        { speaker: 'たなか', ja: 'あそこは いつも 人が おおいですよ。おいしい ようです。', vi: 'Quán ấy lúc nào cũng đông. Có vẻ là ngon thật.' },
        { speaker: 'リン', ja: 'じゃあ、今日は そこに いきましょう。……あ、みちが ぬれて いますね。', vi: 'Vậy hôm nay đến đó nhé.… Ơ, đường đang ướt kia.' },
        { speaker: 'たなか', ja: 'さっき ちょっと あめが ふった ようです。わたしたちは かさが ありますから、だいじょうぶですね。', vi: 'Có vẻ vừa nãy mưa rơi nhẹ. Mình có mang ô rồi nên không sao.' },
        { speaker: 'リン', ja: 'はい。じゃあ、いそいで いきましょう。', vi: 'Ừ. Vậy mau đi thôi.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'かのじょは つかれた ように 見えます。', meaningVi: 'Cô ấy trông có vẻ đã mệt.', choices: ['Cô ấy nói rằng cô ấy mệt', 'Cô ấy trông có vẻ đã mệt', 'Cô ấy chắc chắn không mệt', 'Tôi làm cô ấy mệt'], answerIndex: 1, dictation: true },
    { scriptJa: 'この ケーキは おいしそうに 見えますね。', meaningVi: 'Chiếc bánh này trông có vẻ ngon nhỉ.', choices: ['Ai đó khen chiếc bánh ngon', 'Chiếc bánh trông có vẻ ngon', 'Nghe nói chiếc bánh ngon', 'Chiếc bánh không ngon'], answerIndex: 1, dictation: true },
    { scriptJa: 'みちが ぬれて いる ようです。', meaningVi: 'Đường đang ướt — dường như vừa có mưa.', choices: ['Sắp mưa đến nơi', 'Ai đó làm đổ nước lên đường', 'Dường như đã mưa — đường còn ướt', 'Nghe nói mai sẽ mưa'], answerIndex: 2 },
    { scriptJa: 'あの せんせいは 六十さいですが、とても 若く 見えます。', meaningVi: 'Vị giáo sư ấy đã sáu mươi nhưng trông rất trẻ.', choices: ['Vị giáo sư ấy trông rất trẻ dù đã sáu mươi', 'Vị giáo sư ấy mới mười sáu tuổi', 'Vị giáo sư ấy trông già hơn tuổi', 'Vị giáo sư ấy không nói tuổi'], answerIndex: 0 },
    { scriptJa: '弟は 今 ねて いる ようです。へやが とても しずかです。', meaningVi: 'Em trai có vẻ đang ngủ — phòng rất im ắng.', choices: ['Em trai vừa mới ngủ dậy', 'Em trai chỉ toàn ngủ cả ngày', 'Nghe nói em trai ngủ rất lâu', 'Em trai có vẻ đang ngủ vì phòng rất im ắng'], answerIndex: 3 },
  ],
  reading: {
    titleVi: 'Bà mẹ trong nhà nghỉ',
    lines: [
      { text: '今、わたしは やまださんの いえに すんで います。', vi: 'Hiện tại tôi đang ở trong nhà bà Yamada.' },
      { text: 'やまださんは 五十さいですが、とても 若く 見えます。', vi: 'Bà Yamada đã năm mươi nhưng trông rất trẻ.' },
      { text: 'でも、じつは 毎日 とても いそがしいです。', vi: 'Nhưng thật ra bà ấy bận rộn mỗi ngày.' },
      { text: 'あさ 六じに おきて、よる 十一じまで はたらきます。', vi: 'Sáu giờ sáng dậy, làm việc đến mười một giờ đêm.' },
      { text: 'きのう、やまださんは つかれた ように 見えました。', vi: 'Hôm qua, bà Yamada trông có vẻ mệt.' },
      { text: 'わたしは 「だいじょうぶですか」と ききました。', vi: 'Tôi hỏi: "Bà có sao không ạ?"' },
      { text: 'やまださんは 「昨晩から しごとが おおくて、よく ねて いません」と こたえました。', vi: 'Bà Yamada trả lời: "Từ tối qua việc nhiều quá, tôi chưa ngủ được giấc nào."' },
      { text: 'それから、「きょうは はやく ねます」と わらって いいました。', vi: 'Rồi bà cười nói: "Hôm nay tôi sẽ đi ngủ sớm."' },
      { text: 'やさしい 人だと おもいます。わたしは 「ゆっくり ねて ください」と いいました。', vi: 'Tôi nghĩ bà là người rất hiền. Tôi nói: "Bà hãy ngủ một giấc thật ngon đi ạ."' },
    ],
    questions: [
      { questionVi: 'Dù đã năm mươi tuổi, bà Yamada trông thế nào?', choices: ['Rất trẻ so với tuổi thật', 'Già hơn tuổi thật rất nhiều', 'Luôn trông buồn bã', 'Trông yếu hơn tuổi'], answerIndex: 0, explanationVi: 'Dòng 2: 五十さいですが、とても 若く 見えます — vế が nối hai vế trái ngược trung tính.' },
      { questionVi: 'Vì sao hôm qua bà Yamada trông có vẻ mệt?', choices: ['Vì bà thức khuya đọc sách', 'Vì từ tối qua việc nhiều, chưa ngủ được giấc nào', 'Vì bà vừa đi du lịch về', 'Vì bà bị cảm từ tuần trước'], answerIndex: 1, explanationVi: 'Dòng 5–7: つかれた ように 見えました → 「昨晩から しごとが おおくて、よく ねて いません」— phỏng đoán từ bằng chứng được lời kể xác nhận.' },
      { questionVi: 'Người viết đã nói gì với bà Yamada?', choices: ['Nhờ bà nấu bữa sáng', 'Mời bà đi dạo công viên', 'Khuyên bà ngủ một giấc thật ngon', 'Hỏi bà có cần giúp việc không'], answerIndex: 2, explanationVi: 'Dòng cuối: 「ゆっくり ねて ください」と いいました — lời đề nghị nhẹ nhàng với てください.' },
    ],
  },
  speakSentences: [
    { ja: 'かのじょは つかれた ように 見えます。', vi: 'Cô ấy trông có vẻ đã mệt.' },
    { ja: 'この レストランは おいしそうに 見えます。', vi: 'Nhà hàng này trông có vẻ ngon.' },
    { ja: 'みちが ぬれて いる ようです。', vi: 'Đường đang ướt — dường như đã mưa.' },
    { ja: 'たなかさんは 若く 見えますね。', vi: 'Tanaka trông trẻ nhỉ.' },
  ],
  translatePairs: [
    { ja: 'かのじょは つかれた ように 見えます。', vi: 'Cô ấy trông có vẻ đã mệt.', tokens: ['かのじょ', 'は', 'つかれた', 'ように', '見えます'], distractors: ['そうに'] },
    { ja: 'この ケーキは おいしそうに 見えます。', vi: 'Chiếc bánh này trông có vẻ ngon.', tokens: ['この', 'ケーキ', 'は', 'おいしそうに', '見えます'], distractors: ['ようです'] },
    { ja: 'みちが ぬれて いる ようです。', vi: 'Đường đang ướt — dường như đã mưa.', tokens: ['みち', 'が', 'ぬれて', 'いる', 'ようです'], distractors: ['そうです'] },
    { ja: 'たなかさんは 若く 見えます。', vi: 'Tanaka trông có vẻ trẻ.', tokens: ['たなかさん', 'は', '若く', '見えます'], distractors: ['若い'] },
  ],
  kanji: ['若', '年', '疲'],
}
