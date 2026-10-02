/**
 * NihongoGo — Bài 43: Kanji chuyên sâu N5 — Ký tự, âm đọc & cách viết.
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson43: CurriculumLesson = {
  order: 43,
  slug: 'l43-kanji-chuyen-sau-n5',
  title: 'Kanji chuyên sâu N5 — Ký tự, âm đọc & cách viết',
  titleJa: '漢字特訓',
  description: 'Luyện tập sâu về ký tự, âm đọc và cách viết các kanji trong phạm vi N5.',
  learningObjectives: [
    'Nhớ âm On/Kun của kanji N5',
    'Đọc đúng từ vựng kèm kanji',
    'Viết kanji theo đúng số nét',
  ],
  grammarTopics: [],
  vocabularyTopics: ['Từ vựng kèm kanji thông dụng N5'],
  kanjiTopics: ['Kanji thiên nhiên (山・川・空)', 'Kanji cơ thể (手・目・口)', 'Kanji động tác (行・来・見)'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: '電話', reading: 'でんわ', romaji: 'denwa', meaningVi: 'điện thoại', pos: 'danh từ', exampleJa: 'よる、ともだちに 電話を かけます。', exampleVi: 'Tối tôi gọi điện cho bạn.' },
    { term: '会社', reading: 'かいしゃ', romaji: 'kaisha', meaningVi: 'công ty', pos: 'danh từ', exampleJa: '兄は まいあさ 八時に 会社へ いきます。', exampleVi: 'Anh trai mỗi sáng 8 giờ đi công ty.' },
    { term: '学校', reading: 'がっこう', romaji: 'gakkō', meaningVi: 'trường học', pos: 'danh từ', exampleJa: 'あした、学校は やすみです。', exampleVi: 'Mai trường nghỉ học.' },
    { term: '先生', reading: 'せんせい', romaji: 'sensei', meaningVi: 'thầy cô giáo', pos: 'danh từ', exampleJa: '日本語の 先生は とても しんせつです。', exampleVi: 'Cô giáo tiếng Nhật rất tử tế.' },
    { term: '新聞', reading: 'しんぶん', romaji: 'shinbun', meaningVi: 'tờ báo', pos: 'danh từ', exampleJa: '父は あさ 新聞を よみます。', exampleVi: 'Bố tôi buổi sáng đọc báo.' },
    { term: '仕事', reading: 'しごと', romaji: 'shigoto', meaningVi: 'công việc', pos: 'danh từ', exampleJa: 'この 仕事は むずかしくないです。', exampleVi: 'Công việc này không khó.' },
    { term: '勉強', reading: 'べんきょう', romaji: 'benkyō', meaningVi: 'việc học, học tập', pos: 'danh từ', exampleJa: '夜、へやで 勉強します。', exampleVi: 'Tối tôi học bài trong phòng.' },
    { term: '教室', reading: 'きょうしつ', romaji: 'kyōshitsu', meaningVi: 'phòng học, lớp học', pos: 'danh từ', exampleJa: '日本語の 教室は とても しずかです。', exampleVi: 'Lớp tiếng Nhật rất yên tĩnh.' },
    { term: '銀行', reading: 'ぎんこう', romaji: 'ginkō', meaningVi: 'ngân hàng', pos: 'danh từ', exampleJa: '銀行は えきの まえに あります。', exampleVi: 'Ngân hàng ở trước nhà ga.' },
    { term: '旅行', reading: 'りょこう', romaji: 'ryokō', meaningVi: 'chuyến du lịch', pos: 'danh từ', exampleJa: '夏休みに 家族と 旅行しました。', exampleVi: 'Kỳ nghỉ hè tôi đã đi du lịch với gia đình.' },
    { term: '来週', reading: 'らいしゅう', romaji: 'raishū', meaningVi: 'tuần sau', pos: 'danh từ', exampleJa: '来週の 土よう日は うちに います。', exampleVi: 'Thứ Bảy tuần sau tôi ở nhà.' },
    { term: '来年', reading: 'らいねん', romaji: 'rainen', meaningVi: 'năm sau', pos: 'danh từ', exampleJa: '来年、大学に はいります。', exampleVi: 'Năm sau tôi thi đỗ vào đại học.' },
    { term: '意見', reading: 'いけん', romaji: 'iken', meaningVi: 'ý kiến', pos: 'danh từ', exampleJa: 'ここで 意見を 言っても いいですか。', exampleVi: 'Ở đây tôi nêu ý kiến có được không?' },
    { term: '会話', reading: 'かいわ', romaji: 'kaiwa', meaningVi: 'cuộc hội thoại', pos: 'danh từ', exampleJa: '日本語の 会話を れんしゅうします。', exampleVi: 'Tôi luyện hội thoại tiếng Nhật.' },
    { term: '行く', reading: 'いく', romaji: 'iku', meaningVi: 'đi', pos: 'động từ nhóm 1', exampleJa: '学校へ 行く とき、じてんしゃに のります。', exampleVi: 'Khi đi học tôi đi xe đạp.' },
    { term: '来る', reading: 'くる', romaji: 'kuru', meaningVi: 'đến', pos: 'động từ nhóm 3', exampleJa: 'あした、ともだちが うちに 来る よていです。', exampleVi: 'Mai bạn tôi định đến nhà tôi.' },
    { term: '見る', reading: 'みる', romaji: 'miru', meaningVi: 'xem, nhìn', pos: 'động từ nhóm 2', exampleJa: 'うちで えいがを 見るのが すきです。', exampleVi: 'Tôi thích xem phim ở nhà.' },
    { term: '山', reading: 'やま', romaji: 'yama', meaningVi: 'ngọn núi', pos: 'danh từ', exampleJa: 'あの 山は とても たかいです。', exampleVi: 'Ngọn núi kia rất cao.' },
    { term: '富士山', reading: 'ふじさん', romaji: 'fujisan', meaningVi: 'núi Phú Sĩ', pos: 'danh từ riêng', exampleJa: '富士山は 日本の ゆうめいな 山です。', exampleVi: 'Phú Sĩ là ngọn núi nổi tiếng của Nhật Bản.' },
    { term: '川', reading: 'かわ', romaji: 'kawa', meaningVi: 'dòng sông', pos: 'danh từ', exampleJa: '川の みずは きれいですね。', exampleVi: 'Nước dòng sông thật trong đẹp nhỉ.' },
    { term: 'ご飯', reading: 'ごはん', romaji: 'gohan', meaningVi: 'cơm, bữa cơm', pos: 'danh từ', exampleJa: '毎日 六時に ご飯を たべます。', exampleVi: 'Mỗi ngày 6 giờ tôi ăn cơm.' },
    { term: '話', reading: 'はなし', romaji: 'hanashi', meaningVi: 'câu chuyện, lời kể', pos: 'danh từ', exampleJa: '先生の 話は おもしろかったです。', exampleVi: 'Câu chuyện của thầy rất thú vị.' },
  ],
  grammar: [
    {
      code: 'l43-on-kun-quy-tac',
      title: 'Âm On・âm Kun — quy tắc chọn cách đọc',
      formation: 'Từ ghép (2 kanji trở lên: 学校・銀行・来週) → đọc âm On; kanji đứng độc lập hoặc kèm okurigana (山・行く・見る) → đọc âm Kun',
      explanationVi:
        'Mỗi kanji N5 thường mang hai hệ âm: âm On (音読み — âm gốc Hán mà người Nhật mượn theo chữ Hán) và âm Kun (訓読み — âm Nhật bản địa gắn cho nghĩa của chữ). Quy tắc chọn nhanh: (1) GHÉP — khi hai kanji trở lên đứng cạnh nhau tạo thành từ gốc Hán (学校 がっこう, 電話 でんわ, 銀行 ぎんこう) thì mỗi chữ đọc âm On; (2) ĐỘC LẬP — khi kanji đứng một mình làm từ (山 やま, 川 かわ) hoặc ghép với đuôi kana — okurigana (行く いく, 見る みる, 食べます たべます) thì đọc âm Kun. Ví dụ rõ nhất với 行: trong 銀行 ぎんこう・旅行 りょこう chữ 行 đọc On コウ, còn 行きます いきます đọc Kun いく; tương tự 来: 来週 らいしゅう・来年 らいねん (On ライ) nhưng 来る くる (Kun). Quy tắc đúng với phần lớn từ N5 nhưng vẫn có ngoại lệ (như 一日 ついたち), nên hãy học kèm TỪ trong câu chứ đừng học chữ rời.',
      examples: [
        { ja: '銀行は えきの まえに あります。', vi: 'Ngân hàng ở trước nhà ga. (ぎんこう — 行 đọc On コウ)', tokens: ['銀行', 'は', 'えき', 'の', 'まえに', 'あります'] },
        { ja: '来年、家族と 旅行に 行きます。', vi: 'Năm sau tôi đi du lịch với gia đình. (来年 らいねん・旅行 りょこう — On; 行きます いきます — Kun)', tokens: ['来年', '家族', 'と', '旅行', 'に', '行きます'] },
        { ja: '「見る」は くんよみで、「意見」は おんよみです。', vi: '「見る」 (みる) đọc âm Kun, còn 「意見」 (いけん) đọc âm On.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Từ ghép hai kanji trở lên như 学校・電話 thường được đọc theo hệ âm nào?',
          options: ['Âm On (âm gốc Hán)', 'Âm Kun (âm Nhật bản địa)', 'Bảng chữ cái romaji', 'Không có quy tắc chung'],
          answerIndex: 0, explanationVi: 'Từ ghép Hán (2 kanji trở lên) đọc âm On: 学校 がっこう, 電話 でんわ. Âm Kun chỉ dùng khi kanji đứng độc lập hoặc kèm okurigana.',
        },
        {
          kind: 'choice', prompt: '「行く」 đọc là いく. Chữ 行 ở đây mang hệ âm nào?',
          options: ['Âm Kun — vì có okurigana (chữ kana đuôi く)', 'Âm On — vì 行 là chữ Hán', 'Âm On — vì đi kèm động từ', 'Cả hai hệ âm'],
          answerIndex: 0, explanationVi: 'Kanji ghép với okurigana (く) → chắc chắn đọc âm Kun: 行く いく. Âm On コウ của 行 chỉ xuất hiện trong từ ghép như 銀行 ぎんこう.',
        },
        {
          kind: 'fill', prompt: 'Điền kanji đọc Kun là やま (Tôi sẽ leo ngọn núi kia)',
          sentence: 'あの ___へ のぼりに いきます。',
          options: ['山', '川', '来', '見'],
          answerIndex: 0, explanationVi: '山 đứng độc lập làm danh từ → Kun やま. 川 là かわ, 来/見 là động từ (来る・見る).',
        },
        {
          kind: 'fill', prompt: 'Điền cách đọc đúng của 銀行 (Ngân hàng ở trước nhà ga)',
          sentence: '___は えきの まえに あります。',
          options: ['ぎんこう', 'ぎんこ', 'きんこう', 'ぎょうこう'],
          answerIndex: 0, explanationVi: '銀行 là từ ghép hai kanji → 行 đọc On コウ → ぎんこう. Đây là âm On kinh điển của 行 (xem thêm 旅行 りょこう).',
        },
        {
          kind: 'error', prompt: 'Cách đọc nào GHÉP đúng?',
          options: ['来週 — らいしゅう (âm On)', '来週 — くるしゅう (âm On)', '来週 — きしゅう (âm Kun)', '来週 — きたしゅう (âm Kun)'],
          answerIndex: 0, explanationVi: '来 trong từ ghép 来週 đọc On ライ → らいしゅう. Âm Kun くる chỉ xuất hiện khi 来 đứng với okurigana: 来る・来ます.',
        },
      ],
    },
    {
      code: 'l43-bo-thu-nho-kanji',
      title: 'Nhớ kanji qua bộ thủ (部首)',
      formation: 'Bộ thủ = thành phần mang nghĩa chính của kanji: 目 (mắt) → 見; 言 (lời) → 話・語; 食 (ăn) → 食・飲; 田 + 力 → 男; 木 (cây) → 校・本・来',
      explanationVi:
        'Bộ thủ (部首・ぶしゅ) là "hạt nhân ý nghĩa" nằm trong mỗi kanji — nắm được bộ thủ thì đoán được nghĩa và tự chế ra mánh nhớ cho riêng mình. Các bộ hay gặp trong N5: 口 (くち — miệng) trong 中・四; 目 (め — mắt) trong 見 (mắt đặt trên đôi chân = đi xem); 言 (ことば — lời nói) trong 話 (lời + lưỡi = kể chuyện) và 語 (lời + năm + miệng = ngôn ngữ); 食 (たべる — ăn) đứng bên trái của 飲 (uống = ăn + hớp); 木 (き — cây) trong 校 (cây + giao lưu = mái trường), 本 (gốc cây = quyển sách), 来 (cây lớn + người bước tới = vị khách); 田 (ruộng) + 力 (sức) = 男 (đàn ông cày ruộng); 山 là ba đỉnh núi, 川 là ba dòng nước. Mẹo luyện tập: khi gặp kanji lạ, đừng học vội — hãy tìm bộ thủ trước, nghĩa của chữ thường "nằm" ngay trong bộ.',
      examples: [
        { ja: '男は 田と 力から できて います。', vi: 'Chữ 男 (đàn ông) được tạo từ 田 (ruộng) và 力 (sức).', tokens: ['男', 'は', '田', 'と', '力', 'から', 'できて', 'います'] },
        { ja: '話すは 言と したから できて います。', vi: 'Chữ 話 (nói) được tạo từ 言 (lời nói) và 舌 (lưỡi).' },
        { ja: '飲み物も 食の ぶしゅを つかいます。', vi: '飲み物 (đồ uống) cũng dùng bộ 食 (ăn).', tokens: ['飲み物', 'も', '食', 'の', 'ぶしゅ', 'を', 'つかいます'] },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Bộ 目 (mắt) xuất hiện trong chữ nào dưới đây?',
          options: ['見', '男', '山', '川'],
          answerIndex: 0, explanationVi: '見 = 目 (mắt) + 儿 (chân) — con mắt cắm trên đôi chân, đi tới đâu nhìn tới đó.',
        },
        {
          kind: 'choice', prompt: 'Chữ 男 (đàn ông) được ghép từ những bộ nào?',
          options: ['田 (ruộng) + 力 (sức)', '口 (miệng) + 人 (người)', '山 (núi) + 川 (sông)', '木 (cây) + 子 (đứa trẻ)'],
          answerIndex: 0, explanationVi: 'Người đàn ông dồn hết 力 (sức lực) vào 田 (cánh đồng) — thành ra 男. Mnemonic này có sẵn trong thẻ kanji của app.',
        },
        {
          kind: 'fill', prompt: 'Điền bộ thủ còn thiếu (Chữ 男 tạo từ ruộng và sức)',
          sentence: '男は ___と 力から できて います。',
          options: ['田', '目', '口', '日'],
          answerIndex: 0, explanationVi: '男 = 田 + 力. 目 là mắt (trong 見), 口 là miệng (trong 中・四), 日 là mặt trời (trong 日本).',
        },
        {
          kind: 'choice', prompt: 'Bộ 言 (lời nói) là bộ chính của chữ nào?',
          options: ['話', '山', '行', '来'],
          answerIndex: 0, explanationVi: '話 = 言 (lời) + 舌 (lưỡi) — chữ "kể chuyện". Chữ 語 (ngôn ngữ) cũng mang bộ 言.',
        },
        {
          kind: 'error', prompt: 'Nhận định nào ĐÚNG về bộ thủ?',
          options: ['Bộ thủ gợi ý NGHĨA của kanji (口 → miệng, 目 → mắt)', 'Bộ thủ quyết định âm On của kanji', 'Bộ thủ luôn nằm ở phía bên phải mỗi chữ', 'Kanji càng đơn giản càng không có bộ thủ'],
          answerIndex: 0, explanationVi: 'Bộ thủ nói về NGHĨA, không quyết định cách đọc (âm On/Kun do vị trí từ ghép quyết định — xem mục 1). Vị trí bộ tùy chữ: 言 đứng bên trái 話, 口 có thể trên/dưới/giữa. Mọi kanji đều có bộ.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Ôn kanji trước buổi kiểm tra',
      situationVi: 'Tanaka và Linh ôn bài chuẩn bị cho bài kiểm tra kanji, phân biệt âm On–Kun.',
      lines: [
        { speaker: 'たなか', ja: 'リンさん、あしたは かんじの テストですね。', vi: 'Linh này, mai có bài kiểm tra kanji rồi nhỉ.' },
        { speaker: 'リン', ja: 'はい。でも、よみかたが 多くて、むずかしいです。', vi: 'Vâng. Nhưng cách đọc nhiều quá nên khó.' },
        { speaker: 'たなか', ja: '「行く」と「銀行」は おなじ「行」を つかいますよ。', vi: '「行く」 và 「銀行」 dùng chung một chữ 「行」 đấy.' },
        { speaker: 'リン', ja: 'あ、「いく」と「ぎんこう」。よみ方が ちがいますね。', vi: 'À, 「いく」 với 「ぎんこう». Cách đọc khác nhau nhỉ.' },
        { speaker: 'たなか', ja: 'そうです。かんじが 二つ ある ことばは、たいてい おんよみです。', vi: 'Đúng vậy. Từ có hai kanji ghép lại thì phần lớn đọc âm On.' },
        { speaker: 'リン', ja: 'じゃあ、「来週」は「らいしゅう」ですね。', vi: 'Vậy thì 「来週」 đọc là 「らいしゅう」 nhỉ.' },
        { speaker: 'たなか', ja: 'その とおりです。ひとつの かんじで つかう ときは くんよみです。「来る」は「くる」。', vi: 'Chính xác. Khi dùng một kanji riêng lẻ thì là âm Kun. 「来る」 đọc 「くる」.' },
        { speaker: 'リン', ja: 'そうですか。「山」は「やま」ですが、「富士山」は「ふじさん」ですね。', vi: 'Vậy à. 「山」 đọc 「やま」, nhưng 「富士山」 lại đọc 「ふじさん」 nhỉ.' },
        { speaker: 'たなか', ja: 'その とおりです。リンさんは じょうずに なりましたね。', vi: 'Đúng như thế. Cậu giỏi lên hẳn rồi đấy.' },
        { speaker: 'リン', ja: 'ありがとう ございます。今夜も 勉強します。', vi: 'Cảm ơn anh. Tối nay tôi cũng sẽ học tiếp.' },
      ],
    },
    {
      titleVi: 'Mẹo nhớ kanji bằng bộ thủ',
      situationVi: 'Min khóc ca kanji khó nhớ; Sayuri chỉ thủ thuật ghép nghĩa từ bộ thủ.',
      lines: [
        { speaker: 'ミン', ja: 'さゆりさん、かんじの おぼえかたを 教えて ください。', vi: 'Sayuri này, chỉ mình cách nhớ kanji với.' },
        { speaker: 'さゆり', ja: 'いいですよ。わたしは ぶしゅで おぼえます。', vi: 'Được chứ. Tôi nhớ bằng bộ thủ.' },
        { speaker: 'ミン', ja: 'ぶしゅですか。たとえば、どうですか。', vi: 'Bộ thủ à? Ví dụ thế nào nhỉ?' },
        { speaker: 'さゆり', ja: '「見る」は「目」と「足」から できて います。目で よく 見ます。', vi: '「見る」 tạo từ 「目」 (mắt) và 「足」 (chân). Ta nhìn bằng mắt.' },
        { speaker: 'ミン', ja: 'おもしろいですね。じゃあ、「話す」は？', vi: 'Thú vị nhỉ. Vậy còn 「話す」 thì sao?' },
        { speaker: 'さゆり', ja: '「言」と「した」から できて います。口から ことばが 出ます。', vi: 'Tạo từ 「言」 (lời) và lưỡi. Lời nói thoát ra từ miệng.' },
        { speaker: 'ミン', ja: '「飲む」の 左も「食」ですね。', vi: 'Bên trái chữ 「飲む」 cũng là 「食」 nhỉ.' },
        { speaker: 'さゆり', ja: 'ええ。食べると 飲むは おなじ「食」です。', vi: 'Đúng rồi. 食べる (ăn) và 飲む (uống) cùng mang bộ 「食」.' },
        { speaker: 'ミン', ja: 'そうですか。ぶしゅを おぼえると、かんじも わかりやすく なりますね。', vi: 'Vậy à. Nhớ bộ thủ thì kanji cũng dễ hiểu hẳn nhỉ.' },
        { speaker: 'さゆり', ja: 'ええ。あしたも いっしょに 勉強しましょう。', vi: 'Đúng vậy. Mai mình cùng học tiếp nhé.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'この ぎんこうは くじに あきます。さんじに しまります。', meaningVi: 'Ngân hàng này mở lúc 9 giờ và đóng lúc 3 giờ.', choices: ['Mở 9 giờ, đóng 3 giờ', 'Mở 3 giờ, đóng 9 giờ', 'Mở 9 giờ, đóng 6 giờ', 'Mở 9 giờ sáng, đóng 9 giờ tối'], answerIndex: 0, dictation: true },
    { scriptJa: 'らいしゅうの かようび、がっこうは やすみです。', meaningVi: 'Thứ Ba tuần sau trường nghỉ học.', choices: ['Thứ Ba tuần sau trường nghỉ học', 'Thứ Ba tuần này trường nghỉ học', 'Thứ Năm tuần sau trường nghỉ học', 'Thứ Ba tuần sau vẫn học bình thường'], answerIndex: 0, dictation: true },
    { scriptJa: '兄は まいあさ 新聞を よみます。', meaningVi: 'Anh trai mỗi sáng đều đọc báo.', choices: ['Anh trai đọc báo mỗi sáng', 'Cha đọc báo mỗi sáng', 'Anh trai đọc sách mỗi sáng', 'Anh trai đọc báo mỗi tối'], answerIndex: 0 },
    { scriptJa: '富士山は 日本の ゆうめいな 山です。', meaningVi: 'Phú Sĩ là ngọn núi nổi tiếng của Nhật Bản.', choices: ['Ngọn núi nổi tiếng của Nhật Bản', 'Ngọn núi cao nhất thế giới', 'Dòng sông nổi tiếng của Nhật Bản', 'Ngôi trường nổi tiếng của Nhật Bản'], answerIndex: 0 },
    { scriptJa: 'あした、ともだちが うちに 来ます。ご飯を いっしょに たべます。', meaningVi: 'Mai bạn tôi đến nhà. Chúng tôi sẽ cùng ăn cơm.', choices: ['Mai bạn đến nhà và cùng ăn cơm', 'Mai tôi đến nhà bạn ăn cơm', 'Hôm qua bạn đã đến ăn cơm', 'Mai hai người đi ăn ở nhà hàng'], answerIndex: 0 },
  ],
  reading: {
    titleVi: 'Nhật ký học kanji',
    lines: [
      { text: 'わたしは 毎日 一時間 かんじを 勉強します。', vi: 'Mỗi ngày tôi học kanji một tiếng đồng hồ.' },
      { text: 'かんじは よみかたが 二つ あります。', vi: 'Kanji có hai cách đọc.' },
      { text: 'おんよみは かんじが 二つ ある ことばで つかいます。', vi: 'Âm On được dùng trong từ có hai kanji ghép lại.' },
      { text: 'たとえば、「学校」は「がっこう」です。', vi: 'Chẳng hạn 「学校」 đọc là 「がっこう」.' },
      { text: 'くんよみは かんじが ひとつで つかう ときに つかいます。', vi: 'Âm Kun được dùng khi kanji đứng một mình.' },
      { text: '「山」は「やま」ですが、「富士山」は「ふじさん」です。', vi: '「山」 đọc 「やま」, nhưng 「富士山」 đọc 「ふじさん」.' },
      { text: 'また、ぶしゅも おぼえます。「見」は「目」と「足」から できて います。', vi: 'Ngoài ra tôi còn nhớ bộ thủ. Chữ 「見」 tạo từ 「目」 (mắt) và 「足」 (chân).' },
      { text: 'ぶしゅを おぼえてから、かんじが やさしく なりました。', vi: 'Từ khi nhớ được bộ thủ, kanji trở nên dễ dàng hơn.' },
    ],
    questions: [
      { questionVi: 'Âm On được dùng khi nào?', choices: ['Khi hai kanji ghép cạnh nhau thành từ', 'Khi kanji đứng một mình làm từ', 'Khi viết tên riêng người', 'Khi câu nói rất ngắn'], answerIndex: 0, explanationVi: 'Dòng 3: おんよみは かんじが 二つ ある ことばで つかいます — quy tắc "GHÉP → On".' },
      { questionVi: 'Theo đoạn đọc, 「富士山」 được đọc thế nào?', choices: ['ふじさん', 'ふじやま', 'ふじざん', 'とみやま'], answerIndex: 0, explanationVi: 'Dòng 6: 「富士山」は「ふじさん」 — 山 trong tên núi ghép với 富士 nên chuyển sang âm On サン.' },
      { questionVi: 'Chữ 「見」 được tạo từ những thành phần nào?', choices: ['目 (mắt) và 足 (chân)', '口 (miệng) và 手 (tay)', '田 (ruộng) và 力 (sức)', '山 (núi) và 川 (sông)'], answerIndex: 0, explanationVi: 'Dòng 7: 「見」は「目」と「足」から できて います — con mắt đặt trên đôi chân.' },
    ],
  },
  speakSentences: [
    { ja: '銀行は えきの まえに あります。', vi: 'Ngân hàng ở trước nhà ga.' },
    { ja: '来週、学校は やすみです。', vi: 'Tuần sau trường nghỉ học.' },
    { ja: '毎日、日本語を 勉強します。', vi: 'Mỗi ngày tôi học tiếng Nhật.' },
    { ja: 'あの 山は とても たかいです。', vi: 'Ngọn núi kia rất cao.' },
  ],
  translatePairs: [
    { ja: '来週、銀行へ 行きます。', vi: 'Tuần sau tôi đi ngân hàng.', tokens: ['来週', '銀行', 'へ', '行きます'], distractors: ['来年'] },
    { ja: '毎日 新聞を よみます。', vi: 'Mỗi ngày tôi đọc báo.', tokens: ['毎日', '新聞', 'を', 'よみます'], distractors: ['毎週'] },
    { ja: '夜、へやで 勉強します。', vi: 'Tối tôi học bài trong phòng.', tokens: ['夜', 'へや', 'で', '勉強します'], distractors: ['教室'] },
    { ja: 'あの 川の みずは きれいです。', vi: 'Nước dòng sông kia thật trong đẹp.', tokens: ['あの', '川', 'の', 'みず', 'は', 'きれいです'], distractors: ['山'] },
  ],
  kanji: ['山', '川', '目', '行', '来', '見'],
}
