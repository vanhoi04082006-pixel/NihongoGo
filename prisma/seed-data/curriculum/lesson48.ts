/**
 * NihongoGo — Bài 48: Ngữ pháp N4 nền tảng — Những mẫu câu đầu tiên của N4.
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson48: CurriculumLesson = {
  order: 48,
  slug: 'l48-ngu-phap-n4-nen-tang',
  title: 'Ngữ pháp N4 nền tảng — Những mẫu câu đầu tiên của N4',
  titleJa: 'N4文法入門',
  description: 'Làm quen các cấu trúc ghép câu và mẫu chức năng đầu tiên của N4.',
  learningObjectives: [
    'Nhận diện cấu trúc câu ghép N4',
    'Dùng các mẫu chức năng thông dụng',
    'Kết nối với vốn N5 đã có',
  ],
  grammarTopics: ['Tổng quan câu ghép N4', 'Các mẫu câu chức năng đầu tiên'],
  vocabularyTopics: ['Từ vựng học thuật đơn giản'],
  kanjiTopics: ['Kanji ngữ pháp N4 cơ bản'],
  difficulty: 'ELEMENTARY',
  vocabulary: [
    { term: '結婚', reading: 'けっこん', romaji: 'kekkon', meaningVi: 'sự kết hôn, việc cưới', pos: 'danh từ', exampleJa: '兄は 来年 結婚します。', exampleVi: 'Anh trai tôi năm sau kết hôn.' },
    { term: '料理', reading: 'りょうり', romaji: 'ryōri', meaningVi: 'món ăn; việc nấu nướng', pos: 'danh từ', exampleJa: '母は 料理が 上手です。', exampleVi: 'Mẹ tôi nấu ăn giỏi.' },
    { term: '練習', reading: 'れんしゅう', romaji: 'renshū', meaningVi: 'sự luyện tập', pos: 'danh từ', exampleJa: '毎日 一時間 日本語を 練習します。', exampleVi: 'Tôi luyện tập tiếng Nhật một tiếng mỗi ngày.' },
    { term: '教えます', reading: 'おしえます', romaji: 'oshiemasu', meaningVi: 'dạy, chỉ cho', pos: 'động từ nhóm 2', exampleJa: '妹に ベトナム語を 教えます。', exampleVi: 'Tôi dạy tiếng Việt cho em gái.' },
    { term: '直します', reading: 'なおします', romaji: 'naoshimasu', meaningVi: 'sửa, chữa, chỉnh lại', pos: 'động từ nhóm 1', exampleJa: '宿題の まちがいを 直します。', exampleVi: 'Tôi sửa lỗi trong bài tập về nhà.' },
    { term: '貸します', reading: 'かします', romaji: 'kashimasu', meaningVi: 'cho mượn', pos: 'động từ nhóm 1', exampleJa: 'ともだちに かさを 貸します。', exampleVi: 'Tôi cho bạn mượn ô.' },
    { term: '借ります', reading: 'かります', romaji: 'karirimasu', meaningVi: 'mượn', pos: 'động từ nhóm 1', exampleJa: '図書館で 本を 借ります。', exampleVi: 'Tôi mượn sách ở thư viện.' },
    { term: '掃除', reading: 'そうじ', romaji: 'sōji', meaningVi: 'việc dọn dẹp, quét dọn', pos: 'danh từ', exampleJa: '朝、部屋の 掃除を します。', exampleVi: 'Buổi sáng tôi dọn phòng.' },
    { term: '洗濯', reading: 'せんたく', romaji: 'sentaku', meaningVi: 'việc giặt giũ', pos: 'danh từ', exampleJa: 'しゅうまつは 洗濯を したり、そうじを したり します。', exampleVi: 'Cuối tuần tôi giặt đồ, dọn dẹp…' },
    { term: 'けいけん', romaji: 'keiken', meaningVi: 'kinh nghiệm, trải nghiệm', pos: 'danh từ', exampleJa: '日本で 働いた けいけんが あります。', exampleVi: 'Tôi có kinh nghiệm đã từng làm việc ở Nhật.' },
    { term: 'きかい', romaji: 'kikai', meaningVi: 'cơ hội', pos: 'danh từ', exampleJa: '日本語を 話す きかいが あまり ありません。', exampleVi: 'Tôi ít có cơ hội nói tiếng Nhật.' },
    { term: 'しゅうかん', romaji: 'shūkan', meaningVi: 'thói quen', pos: 'danh từ', exampleJa: '夜 早く 寝る しゅうかんが あります。', exampleVi: 'Tôi có thói quen ngủ sớm buổi tối.' },
    { term: '夢', reading: 'ゆめ', romaji: 'yume', meaningVi: 'giấc mơ; ước mơ', pos: 'danh từ', exampleJa: '子どもの ときの 夢は パイロットでした。', exampleVi: 'Ước mơ hồi nhỏ của tôi là làm phi công.' },
    { term: '覚えます', reading: 'おぼえます', romaji: 'oboemasu', meaningVi: 'ghi nhớ, nhớ lấy', pos: 'động từ nhóm 2', exampleJa: '新しい ことばを 覚えます。', exampleVi: 'Tôi ghi nhớ từ mới.' },
    { term: '作ります', reading: 'つくります', romaji: 'tsukurimasu', meaningVi: 'làm, nấu (món ăn)', pos: 'động từ nhóm 1', exampleJa: 'こんばん カレーを 作ります。', exampleVi: 'Tối nay tôi nấu cà ri.' },
    { term: '使います', reading: 'つかいます', romaji: 'tsukaimasu', meaningVi: 'dùng, sử dụng', pos: 'động từ nhóm 1', exampleJa: 'この 辞書を 毎日 使います。', exampleVi: 'Tôi dùng quyển từ điển này mỗi ngày.' },
    { term: 'しゅみ', romaji: 'shumi', meaningVi: 'sở thích', pos: 'danh từ', exampleJa: 'わたしの しゅみは 料理です。', exampleVi: 'Sở thích của tôi là nấu ăn.' },
    { term: 'いみ', romaji: 'imi', meaningVi: 'nghĩa (của từ, câu)', pos: 'danh từ', exampleJa: 'この ことばの いみを 教えて ください。', exampleVi: 'Xin hãy dạy cho tôi nghĩa của từ này.' },
    { term: 'きぶん', romaji: 'kibun', meaningVi: 'cảm giác, tâm trạng', pos: 'danh từ', exampleJa: '今日は きぶんが いいです。', exampleVi: 'Hôm nay tôi thấy thoải mái.' },
    { term: '旅行', reading: 'りょこう', romaji: 'ryokō', meaningVi: 'chuyến du lịch', pos: 'danh từ', exampleJa: '去年 日本へ 旅行に 行きました。', exampleVi: 'Năm ngoái tôi đi du lịch Nhật Bản.' },
  ],
  grammar: [
    {
      code: 'l48-te-ageru-morau-kureru',
      title: '〜てあげます・〜てもらいます・〜てくれます — cho・nhận ơn với thể て',
      formation: 'Vて + あげます (mình làm ơn cho người khác) / 人に Vて + もらいます (mình được người đó làm ơn) / 人が Vて + くれます (người khác làm ơn cho mình)',
      explanationVi:
        'Bộ ba cho–nhận đã học ở bài 22 (あげます・くれます・もらいます với DANH TỪ) giờ ghép vào THỂ て để kể việc ƠN: (1) 〜てあげます — mình (hoặc chủ ngữ) làm ơn CHO người khác: ともだちに かさを 貸して あげました = tôi cho bạn mượn ô, việc ơn đi TỪ mình RA; (2) 〜てもらいます — mình ĐƯỢC người khác làm ơn, người làm ơn đứng với に: せんせいに さくぶんを 直して もらいました = tôi được thầy sửa bài luận; (3) 〜てくれます — người khác TỰ động làm ơn cho mình, người cho ơn là chủ ngữ với が: 母は わたしに 買って くれました = mẹ mua cho tôi. Mẹo phân biệt nhanh: người NHẬN ơn là chính mình → くれる; người nhận không phải mình → あげる; muốn nhấn "mình đã xin/được hưởng" → もらう. Ba mẫu này là nền của mọi câu giao tiếp nhờ vả ở N4 — xử lý trôi chảy là chuyển cấp êm thấm.',
      examples: [
        { ja: 'ともだちに かさを 貸して あげました。', vi: 'Tôi đã cho bạn mượn ô.', tokens: ['ともだち', 'に', 'かさ', 'を', '貸して', 'あげました'] },
        { ja: 'せんせいに さくぶんを 直して もらいました。', vi: 'Tôi đã được thầy giáo sửa bài luận.', tokens: ['せんせい', 'に', 'さくぶん', 'を', '直して', 'もらいました'] },
        { ja: '母は わたしに かばんを 買って くれました。', vi: 'Mẹ đã mua cặp cho tôi.', tokens: ['母', 'は', 'わたし', 'に', 'かばん', 'を', '買って', 'くれました'] },
      ],
      drills: [
        {
          kind: 'fill', prompt: 'Điền (Tôi đã cho bạn mượn ô.)',
          sentence: 'ともだちに かさを 貸して___。',
          options: ['あげました', 'もらいました', 'くれました', 'くださいました'],
          answerIndex: 0, explanationVi: 'Người làm ơn là MÌNH, người nhận là bạn → 〜てあげました. もらいました sẽ đảo thành "tôi được bạn cho mượn", くれました cần chủ ngữ là người cho ơn.',
        },
        {
          kind: 'particle', prompt: 'Chọn trợ từ (Tôi đã được thầy giáo sửa bài luận.)',
          sentence: 'せんせい___ さくぶんを 直して もらいました。',
          options: ['に', 'が', 'を', 'で'],
          answerIndex: 0, explanationVi: 'Với 〜てもらう, NGƯỜI LÀM ƠN cho mình đánh dấu bằng に (せんせいに). が đánh dấu chủ ngữ — ở đây chủ ngữ (người hưởng ơn) đã được lược bỏ là "tôi".',
        },
        {
          kind: 'choice', prompt: 'Trong 「ともだちが わたしに 本を 貸して くれました。」, ai là người CHO mượn?',
          options: ['Bạn (ともだち)', 'Tôi (người nói)', 'Thư viện', 'Một người thứ ba không xuất hiện'],
          answerIndex: 0, explanationVi: 'Với 〜てくれる, chủ ngữ đứng trước が chính là NGƯỜI TRAO ƠN — bạn là người cho mượn, tôi là người nhận.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng khi nói "Yamada đã chụp ảnh giúp tôi"?',
          options: ['やまださんは わたしに 写真を 撮って くれました。', 'やまださんは わたしに 写真を 撮って あげました。', 'やまださんは わたしに 写真を 撮って もらいました。', 'やまださんは わたしに 写真を 撮って あります。'],
          answerIndex: 0, explanationVi: 'Người nhận ơn là CHÍNH MÌNH → 〜てくれました. てあげました không dùng khi người nhận là mình; てもらいました sẽ đổi hướng (Yamada thành người được nhờ); てあります là trạng thái kết quả, sai nghĩa.',
        },
      ],
    },
    {
      code: 'l48-ta-koto-ga-arimasu',
      title: '〜たことがあります — đã từng…',
      formation: 'V (thể た) + ことが あります / phủ định: 〜たことが ありません',
      explanationVi:
        'Mẫu kinh nghiệm kinh điển của N4: động từ THỂ た + ことが あります = "đã từng làm gì" (trong đời, không gắn mốc thời gian cụ thể). 日本へ 行った ことが あります = tôi đã từng đến Nhật. Ba điểm phải nắm: (1) trước ことが bắt buộc là THỂ た giản lược (行った) — 「行きました ことが」 là lỗi kinh điển vì ことがあります tự nó mang nghĩa quá khứ–kinh nghiệm; (2) phủ định: 〜たことが ありません = "chưa từng": すしを 食べた ことが ありません; (3) câu hỏi: 〜たことが ありますか. Phân biệt bẫy hay ra thi: のぼった ことが あります (đã từng) ≠ のぼることが あります (thỉnh thoảng có leo — thói quen) ≠ のぼっています (đang leo). Nếu có từ chỉ thời gian rõ ràng như きのう thì dùng quá khứ thường (きのう のぼりました), không dùng mẫu kinh nghiệm.',
      examples: [
        { ja: '日本へ 行った ことが あります。', vi: 'Tôi đã từng đến Nhật Bản.', tokens: ['日本', 'へ', '行った', 'ことが', 'あります'] },
        { ja: 'すしを 食べた ことが ありません。', vi: 'Tôi chưa từng ăn sushi.', tokens: ['すし', 'を', '食べた', 'ことが', 'ありません'] },
        { ja: 'ふじさんに のぼった ことが ありますか。', vi: 'Bạn đã từng leo núi Phú Sĩ chưa?' },
        { ja: 'この 歌を 聞いた ことが あります。', vi: 'Tôi từng nghe bài hát này.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'Chia động từ 行く (Tôi đã từng đến Kyoto.)',
          sentence: 'きょうとへ ___ ことが あります。',
          options: ['行った', '行って', '行きます', '行く'],
          answerIndex: 0, explanationVi: '〜たことがあります ghép với THỂ た: 行く → 行った. 行って là thể て, 行く/行きます là hiện tại — đều sai mẫu.',
        },
        {
          kind: 'conjugate', prompt: 'Chia động từ 食べる (Tôi chưa từng ăn món này.)',
          sentence: 'この 料理を ___ ことが ありません。',
          options: ['食べた', '食べて', '食べる', '食べない'],
          answerIndex: 0, explanationVi: 'Phủ định của mẫu kinh nghiệm chỉ đổi phần CUỐI (→ ことが ありません), phần trước こと vẫn giữ THỂ た: 食べた. 「食べないことが」 là sai hoàn toàn cấu trúc.',
        },
        {
          kind: 'choice', prompt: '「〜たことがあります」 diễn tả điều gì?',
          options: ['Kinh nghiệm: đã từng làm gì trong quá khứ, không gắn mốc thời gian cụ thể', 'Thói quen lặp lại hằng ngày', 'Hành động đang diễn ra ngay lúc nói', 'Kế hoạch cho tương lai gần'],
          answerIndex: 0, explanationVi: 'Đây là mẫu KINH NGHIỆM — kinh nghiệm tích lũy trong đời. Thói quen dùng thể ます/〜ことがあります(động từ nguyên dạng), đang diễn ra dùng 〜ています, kế hoạch dùng 〜つもりです.',
        },
        {
          kind: 'error', prompt: 'Câu nào nói về KINH NGHIỆM "đã từng"?',
          options: ['ふじさんに のぼった ことが あります。', 'ふじさんに のぼることが あります。', 'ふじさんに のぼっています。', 'ふじさんに のぼりました ことが あります。'],
          answerIndex: 0, explanationVi: 'のぼった(Thể た)+ことが = đã từng. のぼる(nguyên dạng)+ことが = thỉnh thoảng có leo; のぼっています = đang leo; のぼりました ことが sai vì trước ことが phải là thể た giản lược, không phải ました.',
        },
      ],
    },
    {
      code: 'l48-tari-tari-shimasu',
      title: '〜たり、〜たりします — liệt kê hành động đại diện',
      formation: 'V (thể た) + り、V (thể た) + り + します / しました',
      explanationVi:
        'Mẫu liệt kê N4: しゅうまつは 掃除したり、買い物に 行ったり します = "cuối tuần tôi dọn dẹp, đi mua sắm… (và còn việc khác nữa)". Khác biệt cốt lõi so với liệt kê bằng thể て (掃除して、買い物に 行きます — kể TRỌN và TUẦN TỰ mọi việc): 〜たり chỉ nêu VÀI hành động ĐẠI DIỆN, hàm ý "đại khái là thế, còn nữa nhưng không kể hết" — nên ngữ cảnh cuối tuần ngoài dọn nhà và mua sắm có thể còn ngủ trưa, xem phim. Vì cả chuỗi gom lại thành MỘT cụm nên kết câu bằng します, và thời thể dồn hết về đó: quá khứ → 〜たり、〜たり しました; phủ định → 〜たり、〜たり しません. Động từ nào cũng chia về THỂ た rồi mới thêm り (読む→読んだ+り; する→した+り, danh từ+する như 掃除する → 掃除したり). Cấu trúc này cực tiện khi trả lời câu hỏi "cuối tuần/ngày nghỉ anh làm gì?" — câu trả lời nghe tự nhiên và không bị ép phải kể đủ.',
      examples: [
        { ja: 'しゅうまつは 掃除したり、買い物に 行ったり します。', vi: 'Cuối tuần tôi dọn dẹp, đi mua sắm… (và việc khác).', tokens: ['しゅうまつ', 'は', '掃除', 'したり', '買い物', 'に', '行ったり', 'します'] },
        { ja: '休みの 日は 音楽を 聞いたり、本を 読んだり します。', vi: 'Ngày nghỉ tôi nghe nhạc, đọc sách…', tokens: ['休みの', '日', 'は', '音楽', 'を', '聞いたり', '本', 'を', '読んだり', 'します'] },
        { ja: 'きのう 友だちと 話したり、写真を 撮ったり しました。', vi: 'Hôm qua tôi nói chuyện, chụp ảnh… cùng bạn.' },
        { ja: 'あさは 顔を 洗ったり、ごはんを 食べたり します。', vi: 'Buổi sáng tôi rửa mặt, ăn cơm…' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'Chia động từ 読む (Ngày nghỉ tôi đọc sách, nghe nhạc…)',
          sentence: '休みの 日は 本を ___、音楽を 聞いたり します。',
          options: ['読んだり', '読むたり', '読みたり', '読んで'],
          answerIndex: 0, explanationVi: '読む là động từ nhóm 1 (cột う→んだ): 読んだ + り → 読んだり. 読むたり/読みたり là lỗi chia; 読んで là thể て dùng để nối tuần tự, khác mẫu liệt kê.',
        },
        {
          kind: 'fill', prompt: 'Điền (Cuối tuần tôi dọn dẹp, đi mua sắm…)',
          sentence: 'しゅうまつは そうじ___、かいものに 行ったり します。',
          options: ['したり', 'するり', 'してり', 'します'],
          answerIndex: 0, explanationVi: 'Danh từ + する (掃除する) cũng đưa về THỂ た trước khi thêm り: 掃除する → 掃除した + り → そうじしたり.',
        },
        {
          kind: 'choice', prompt: '〜たり、〜たりします khác gì so với liệt kê bằng thể て (そうじして、かいものに 行きます)?',
          options: ['〜たり chỉ nêu VÀI hành động đại diện, hàm ý "còn việc khác nữa"', '〜たり bắt buộc liệt kê đầy đủ mọi hành động', '〜たり chỉ dùng được với câu quá khứ', '〜たり chỉ dùng được với danh từ'],
          answerIndex: 0, explanationVi: '〜たり mang tính MƠ HỒ có chủ đích — kể đại diện vài việc, người nghe hiểu "khoảng chừng là thế". Thể て liệt kê tuần tự và gợi ý kể đủ.',
        },
        {
          kind: 'conjugate', prompt: 'Chia phần cuối (Hôm qua tôi xem phim, đi mua sắm…)',
          sentence: 'きのう 映画を 見たり、買い物に 行ったり ___。',
          options: ['しました', 'します', 'して', 'したいです'],
          answerIndex: 0, explanationVi: 'Cả chuỗi 〜たり〜たり là MỘT cụm, thời thể dồn về します ở cuối: câu quá khứ → しました. したいです là ý định, sai đề bài "hôm qua đã làm".',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Nửa năm ở Nhật',
      situationVi: 'Sau giờ học, Tanaka hỏi Linh về cuộc sống nửa năm qua: việc nhà cuối tuần, học nấu ăn và chuyến leo núi dự kiến.',
      lines: [
        { speaker: 'たなか', ja: 'リンさん、日本へ 来て、六か月ですね。生活は どうですか。', vi: 'Linh này, đến Nhật được sáu tháng rồi nhỉ. Cuộc sống thế nào?' },
        { speaker: 'リン', ja: 'もう 大丈夫です。しゅうまつは たのしいですよ。', vi: 'Tôi ổn rồi ạ. Cuối tuần vui lắm.' },
        { speaker: 'たなか', ja: 'しゅうまつは 何を していますか。', vi: 'Cuối tuần cậu làm gì?' },
        { speaker: 'リン', ja: '掃除したり、洗濯したり、買い物に 行ったり します。', vi: 'Tôi dọn dẹp, giặt giũ, đi mua sắm…' },
        { speaker: 'たなか', ja: 'たいへんですね。日本の 料理も 作りますか。', vi: 'Vất vả nhỉ. Cậu cũng nấu món Nhật chứ?' },
        { speaker: 'リン', ja: 'はい。となりの おばあさんに 教えて もらいました。', vi: 'Có ạ. Tôi được bà hàng xóm dạy.' },
        { speaker: 'たなか', ja: 'すごいですね。わたしは ぜんぜん 作れません。', vi: 'Giỏi nhỉ. Còn tôi thì hoàn toàn không nấu được.' },
        { speaker: 'リン', ja: 'でも、まだ ふじさんに のぼった ことが ありません。', vi: 'Nhưng tôi vẫn chưa từng leo núi Phú Sĩ.' },
        { speaker: 'たなか', ja: 'じゃあ、夏に 一緒に のぼりましょう。', vi: 'Vậy hè này cùng nhau leo nhé.' },
      ],
    },
    {
      titleVi: 'Quên từ điển',
      situationVi: 'Trước giờ học, Linh quên mang từ điển; Yamada cho mượn và hai bạn nói chuyện về cách học từ mới.',
      lines: [
        { speaker: 'やまだ', ja: 'リンさん、どうしましたか。', vi: 'Linh này, có chuyện gì vậy?' },
        { speaker: 'リン', ja: 'じしょを 忘れました。今日の 授業で 使いますから、こまっています。', vi: 'Tôi quên mang từ điển. Vì tiết học hôm nay phải dùng đến nên tôi đang bí.' },
        { speaker: 'やまだ', ja: 'あ、わたしのを 貸して あげますよ。', vi: 'À, tôi cho bạn mượn của tôi này.' },
        { speaker: 'リン', ja: 'ありがとう ございます。いつも やまださんは わたしに いろいろな ことを 教えて くれますね。', vi: 'Cảm ơn bạn. Yamada lúc nào cũng dạy tôi đủ thứ.' },
        { speaker: 'やまだ', ja: 'いいえ。リンさんの 日本語は 上手に なりましたね。', vi: 'Không có gì. Tiếng Nhật của bạn tiến bộ hẳn rồi nhỉ.' },
        { speaker: 'リン', ja: 'いいえ、まだまだです。先週も 作文を 直して もらいました。', vi: 'Dạ vẫn còn kém lắm. Tuần trước tôi cũng được bạn sửa bài văn.' },
        { speaker: 'やまだ', ja: '毎日 がんばっていますね。', vi: 'Cậu chăm chỉ mỗi ngày nhỉ.' },
        { speaker: 'リン', ja: 'はい。日本の 歌を 覚えたり、ドラマを 見たり して います。', vi: 'Vâng. Tôi đang học vừa nhớ lời bài hát Nhật, vừa xem drama…' },
        { speaker: 'やまだ', ja: 'いい 勉強の しかたですね。', vi: 'Cách học hay đấy.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'ふじさんに のぼった ことが ありますか。', meaningVi: 'Bạn đã từng leo núi Phú Sĩ chưa?', choices: ['Hỏi xem người nghe đã từng leo núi Phú Sĩ chưa', 'Rủ người nghe cùng leo núi Phú Sĩ', 'Hỏi núi Phú Sĩ nằm ở đâu', 'Kể rằng đã leo núi Phú Sĩ xong'], answerIndex: 0 },
    { scriptJa: 'しゅうまつは そうじしたり、せんたくしたり します。', meaningVi: 'Cuối tuần tôi dọn dẹp, giặt giũ… (còn việc khác).', choices: ['Cuối tuần dọn dẹp và giặt giũ cùng các việc khác', 'Cuối tuần chỉ dọn dẹp', 'Cuối tuần chỉ giặt giũ', 'Cuối tuần không làm việc nhà nào'], answerIndex: 0, dictation: true },
    { scriptJa: 'ともだちに かさを 貸して あげました。', meaningVi: 'Tôi đã cho bạn mượn ô.', choices: ['Tôi cho bạn mượn ô', 'Tôi mượn ô của bạn', 'Bạn cho tôi mượn ô', 'Tôi mua ô tặng bạn'], answerIndex: 0 },
    { scriptJa: '先生に 作文を 直して もらいました。', meaningVi: 'Tôi đã được thầy giáo sửa bài văn.', choices: ['Thầy giáo đã sửa bài văn giúp tôi', 'Tôi sửa bài văn cho thầy giáo', 'Thầy giáo nhờ tôi sửa bài văn', 'Bài văn của tôi bị mất'], answerIndex: 0 },
    { scriptJa: 'すしを たべた ことが ありません。', meaningVi: 'Tôi chưa từng ăn sushi.', choices: ['Chưa từng ăn sushi', 'Thường xuyên ăn sushi', 'Không thích ăn sushi', 'Sắp ăn sushi lần đầu'], answerIndex: 0, dictation: true },
  ],
  reading: {
    titleVi: 'Cuối tuần và những trải nghiệm của Linh',
    lines: [
      { speaker: 'たなか', text: 'リンさん、しゅうまつは たいてい 何を しますか。', vi: 'Linh này, cuối tuần cậu thường làm gì?' },
      { speaker: 'リン', text: 'そうじを したり、せんたくを したり します。それから、ともだちに 会いに 行ったり します。', vi: 'Tôi dọn dẹp, giặt giũ… Rồi thỉnh thoảng còn đi gặp bạn bè.' },
      { speaker: 'たなか', text: '買い物も しますか。', vi: 'Cũng đi mua sắm chứ?' },
      { speaker: 'リン', text: 'ええ、スーパーへ 行きます。やすい やさいを 買ったり、おいしい パンを 買ったり します。', vi: 'Vâng, tôi đi siêu thị. Mua rau rẻ, mua bánh mì ngon…' },
      { speaker: 'たなか', text: '日本で 何か おもしろい けいけんを しましたか。', vi: 'Ở Nhật cậu đã có trải nghiệm thú vị nào chưa?' },
      { speaker: 'リン', text: 'はい、こうえんで はなみを した ことが あります。とても きれいでした。', vi: 'Có, tôi đã từng ngắm hoa trong công viên. Đẹp lắm.' },
      { speaker: 'たなか', text: 'いいですね。わたしも きょねん ともだちと 行きました。', vi: 'Tốt nhỉ. Năm ngoái tôi cũng đi cùng bạn.' },
      { speaker: 'リン', text: 'らいねんも 行きたいです。きものも 着たいです。', vi: 'Năm sau tôi cũng muốn đi. Còn muốn mặc kimono nữa.' },
    ],
    questions: [
      { questionVi: 'Linh thường làm những gì vào cuối tuần?', choices: ['Dọn dẹp, giặt đồ và đi gặp bạn (cùng việc khác)', 'Chỉ đi mua sắm ở siêu thị', 'Chỉ nấu ăn ở nhà', 'Đi làm thêm cả ngày'], answerIndex: 0, explanationVi: 'Dòng 2: そうじを したり、せんたくを したり します。それから、ともだちに 会いに 行ったり します — mẫu 〜たり〜たり liệt kê đại diện các việc cuối tuần.' },
      { questionVi: 'Linh đã từng trải nghiệm gì ở Nhật?', choices: ['Ngắm hoa (hanami) trong công viên', 'Leo núi Phú Sĩ', 'Mặc kimono ngắm hoa', 'Đánh trống ở lễ hội'], answerIndex: 0, explanationVi: 'Dòng 6: はなみを した ことが あります = đã TỪNG ngắm hoa. Mặc kimono mới là mong MUỐN (着たい, dòng 8), chưa từng.' },
      { questionVi: 'Linh định làm gì vào năm sau?', choices: ['Đi ngắm hoa và muốn thử mặc kimono', 'Leo núi Phú Sĩ với Tanaka', 'Về Việt Nam thăm nhà', 'Mở cửa hàng bánh mì'], answerIndex: 0, explanationVi: 'Dòng 8: らいねんも 行きたいです。きものも 着たいです — 〜たい diễn tả mong muốn.' },
    ],
  },
  speakSentences: [
    { ja: 'ともだちに かさを 貸して あげました。', vi: 'Tôi đã cho bạn mượn ô.' },
    { ja: 'せんせいに さくぶんを 直して もらいました。', vi: 'Tôi đã được thầy giáo sửa bài luận.' },
    { ja: 'ふじさんに のぼった ことが あります。', vi: 'Tôi đã từng leo núi Phú Sĩ.' },
    { ja: 'しゅうまつは 掃除したり、買い物に 行ったり します。', vi: 'Cuối tuần tôi dọn dẹp, đi mua sắm…' },
  ],
  translatePairs: [
    { ja: '日本へ 行った ことが あります。', vi: 'Tôi đã từng đến Nhật Bản.', tokens: ['日本', 'へ', '行った', 'ことが', 'あります'], distractors: ['ありません'] },
    { ja: 'ともだちに かさを 貸して あげました。', vi: 'Tôi đã cho bạn mượn ô.', tokens: ['ともだち', 'に', 'かさ', 'を', '貸して', 'あげました'], distractors: ['もらいました'] },
    { ja: 'すしを 食べた ことが ありません。', vi: 'Tôi chưa từng ăn sushi.', tokens: ['すし', 'を', '食べた', 'ことが', 'ありません'], distractors: ['あります'] },
    { ja: '休みの 日は 音楽を 聞いたり、本を 読んだり します。', vi: 'Ngày nghỉ tôi nghe nhạc, đọc sách…', tokens: ['休みの', '日', 'は', '音楽', 'を', '聞いたり', '本', 'を', '読んだり', 'します'], distractors: ['行ったり'] },
  ],
  kanji: ['事', '覚', '教', '習'],
}
