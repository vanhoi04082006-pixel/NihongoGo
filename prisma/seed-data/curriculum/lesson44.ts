/**
 * NihongoGo — Bài 44: Luyện nghe giao tiếp — Nghe hiểu tình huống thực tế.
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson44: CurriculumLesson = {
  order: 44,
  slug: 'l44-luyen-nghe-giao-tiep',
  title: 'Luyện nghe giao tiếp — Nghe hiểu tình huống thực tế',
  titleJa: '聞き取り練習',
  description: 'Luyện nghe các tình huống giao tiếp ngắn, bám theo tốc độ tự nhiên.',
  learningObjectives: [
    'Nghe hiểu câu hỏi và trả lời nhanh',
    'Nghe chính xác số, giờ, địa điểm',
    'Làm quen tốc độ hội thoại thật',
  ],
  grammarTopics: [],
  vocabularyTopics: ['Mẫu câu giao tiếp nhanh', 'Nghe số và thời gian'],
  kanjiTopics: ['Ôn tập Kanji N5 qua bối cảnh nghe'],
  difficulty: 'ELEMENTARY',
  vocabulary: [
    { term: 'えき', romaji: 'eki', meaningVi: 'nhà ga', pos: 'danh từ', exampleJa: 'えきの まえで まって ください。', exampleVi: 'Vui lòng đợi tôi trước nhà ga.' },
    { term: 'きっぷ', romaji: 'kippu', meaningVi: 'vé (tàu, xe)', pos: 'danh từ', exampleJa: '東京までの きっぷを 買いました。', exampleVi: 'Tôi đã mua vé đi đến Tokyo.' },
    { term: '予約', reading: 'よやく', romaji: 'yoyaku', meaningVi: 'việc đặt trước (chỗ, phòng)', pos: 'danh từ', exampleJa: 'レストランを 予約しました。', exampleVi: 'Tôi đã đặt chỗ nhà hàng.' },
    { term: '注文', reading: 'ちゅうもん', romaji: 'chūmon', meaningVi: 'việc gọi (món, đồ)', pos: 'danh từ', exampleJa: 'コーヒーを 注文しました。', exampleVi: 'Tôi đã gọi cà phê.' },
    { term: 'おすすめ', romaji: 'osusume', meaningVi: 'món/đồ đáng thử, được khuyên dùng', pos: 'danh từ', exampleJa: 'おすすめの ラーメンは どれですか。', exampleVi: 'Món mì ramen được khuyên dùng là món nào ạ?' },
    { term: 'おつり', romaji: 'otsuri', meaningVi: 'tiền thừa', pos: 'danh từ', exampleJa: 'おつりは 三百円です。', exampleVi: 'Tiền thừa của quý khách là 300 yên.' },
    { term: 'レシート', romaji: 'reshīto', meaningVi: 'biên lai, hóa đơn', pos: 'danh từ', exampleJa: 'レシートを ください。', exampleVi: 'Cho tôi xin biên lai.' },
    { term: '会議', reading: 'かいぎ', romaji: 'kaigi', meaningVi: 'cuộc họp', pos: 'danh từ', exampleJa: '会議は 三時に 終わります。', exampleVi: 'Cuộc họp kết thúc lúc 3 giờ.' },
    { term: '資料', reading: 'しりょう', romaji: 'shiryō', meaningVi: 'tài liệu', pos: 'danh từ', exampleJa: 'この 資料を 見せて いただけますか。', exampleVi: 'Tôi xem tài liệu này được không ạ?' },
    { term: '電話番号', reading: 'でんわばんごう', romaji: 'denwa bangō', meaningVi: 'số điện thoại', pos: 'danh từ', exampleJa: '電話番号を 教えて ください。', exampleVi: 'Xin bạn cho tôi số điện thoại.' },
    { term: '伝言', reading: 'でんごん', romaji: 'dengon', meaningVi: 'lời nhắn (qua điện thoại)', pos: 'danh từ', exampleJa: '伝言を お願いします。', exampleVi: 'Làm ơn giúp tôi gửi lời nhắn.' },
    { term: 'それから', romaji: 'sorekara', meaningVi: 'rồi thì, sau đó; thêm nữa', pos: 'liên từ', exampleJa: 'ジュースを 買いました。それから、ほんやへ 行きました。', exampleVi: 'Tôi mua nước trái cây. Sau đó đến hiệu sách.' },
    { term: 'でも', romaji: 'demo', meaningVi: 'nhưng mà', pos: 'liên từ', exampleJa: 'その えいがは 見たいです。でも、今夜は 時間が ありません。', exampleVi: 'Phim đó tôi muốn xem. Nhưng tối nay không có thời gian.' },
    { term: 'なるほど', romaji: 'naruhodo', meaningVi: 'ra thế, hóa ra là thế', pos: 'phó từ', exampleJa: '「えきは あそこですよ。」「なるほど、わかりました。」', exampleVi: '"Nhà ga ở kia ạ." "Ra thế, tôi hiểu rồi."' },
    { term: 'みぎ', romaji: 'migi', meaningVi: 'bên phải', pos: 'danh từ', exampleJa: 'こうえんは えきの みぎに あります。', exampleVi: 'Công viên ở bên phải nhà ga.' },
    { term: '何番線', reading: 'なんばんせん', romaji: 'nanbansen', meaningVi: 'ke số mấy (nhà ga)', pos: 'danh từ', exampleJa: 'つぎの 電車は 何番線ですか。', exampleVi: 'Chuyến tàu tiếp theo đỗ ke mấy ạ?' },
    { term: '間に合います', reading: 'まにあいます', romaji: 'maniaimasu', meaningVi: 'kịp (đến nơi, kịp giờ)', pos: 'động từ nhóm 1', exampleJa: 'この でんしゃに のれば、会議に 間に合います。', exampleVi: 'Nếu đi chuyến tàu này thì tôi kịp cuộc họp.' },
    { term: 'お待ちください', reading: 'おまちください', romaji: 'omachi kudasai', meaningVi: 'vui lòng chờ một chút (lịch sự)', pos: 'cụm kính ngữ', exampleJa: '少々 お待ちください。', exampleVi: 'Quý khách vui lòng đợi một chút ạ.' },
    { term: 'もういちど', romaji: 'mōichido', meaningVi: 'một lần nữa, lần nữa', pos: 'phó từ', exampleJa: 'すみません、もういちど お願いします。', exampleVi: 'Xin lỗi, vui lòng làm lại một lần nữa ạ.' },
    { term: 'もしもし', romaji: 'moshimoshi', meaningVi: 'alô (khi nghe máy)', pos: 'lời chào (điện thoại)', exampleJa: 'もしもし、田中さんですか。', exampleVi: 'Alô, phải anh Tanaka không ạ?' },
  ],
  grammar: [
    {
      code: 'l44-mau-hoi-dap-giao-tiep',
      title: 'Mẫu hỏi – đáp giao tiếp: 〜ませんか・〜ましょうか・〜ていただけますか・そうですか',
      formation: 'V (thể ます bỏ ます) + ませんか (mời) / ましょうか (đề nghị làm) / Vて + いただけますか (yêu cầu lịch sự) / そうですか (phản ứng)',
      explanationVi:
        'Nghe hội thoại thật cần nhận ngay 4 "khung" hỏi–đáp. (1) 〜ませんか — LỜI MỜI: 一緒に食べませんか; cách từ chối mềm: すみません、ちょっと…; (2) 〜ましょうか — ĐỀ NGHỊ LÀM GIÚP: ドアを閉めましょうか — đáp chuẩn là はい、お願いします hoặc いいえ、大丈夫です; (3) 〜ていただけますか — YÊU CẦU lịch sự nhất trong N5 (đã gặp ở bài 34): もう一度言っていただけますか — nhã nhặn hơn hẳn 〜てください, dùng với người lạ hoặc người trên; (4) そうですか — phản ứng "vậy à / tôi hiểu rồi", giữ mạch trò chuyện trôi chảy (ngạc nhiên mạnh hơn thì dùng えっ). Mẹo luyện nghe: bám vào ĐUÔI câu — nghe thấy ませんか là người ta định mời mình, ましょうか là đề nghị làm giúp, いただけますか là đang nhờ mình một việc.',
      examples: [
        { ja: 'すみません、もういちど 言って いただけますか。', vi: 'Xin lỗi, anh nói lại một lần nữa được không ạ?', tokens: ['すみません', 'もういちど', '言って', 'いただけますか'] },
        { ja: '一緒に コーヒーを 飲みませんか。', vi: 'Cùng uống cà phê không?', tokens: ['一緒に', 'コーヒー', 'を', '飲みませんか'] },
        { ja: 'ドアを 閉めましょうか。', vi: 'Tôi đóng giúp cửa nhé?', tokens: ['ドア', 'を', '閉めましょうか'] },
        { ja: '「会議は 二時からです。」「そうですか。わかりました。」', vi: '"Cuộc họp từ 2 giờ." "Vậy à, tôi hiểu rồi."' },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Nghe 「一緒に 昼ご飯を 食べませんか。」 — người nói đang làm gì?',
          options: ['Mời mình cùng ăn trưa', 'Từ chối lời mời ăn trưa', 'Hỏi món nào để ăn trưa', 'Kể rằng đã ăn trưa xong'],
          answerIndex: 0, explanationVi: '〜ませんか là LỜI MỜI. Trả lời nhận: いいですね、行きましょう; từ chối mềm: すみません、ちょっと…',
        },
        {
          kind: 'choice', prompt: 'Nghe 「にもつを 持ちましょうか。」 — câu trả lời tự nhiên nhất là gì?',
          options: ['はい、お願いします。', 'はい、食べません。', 'いいえ、行きません。', 'そうですか、そうですか。'],
          answerIndex: 0, explanationVi: '〜ましょうか = đề nghị LÀM GIÚP (xách hành lý giúp) → nhận bằng はい、お願いします, từ chối bằng いいえ、大丈夫です.',
        },
        {
          kind: 'fill', prompt: 'Điền (Xin lỗi, anh nói lại giúp một lần nữa được không ạ?)',
          sentence: 'すみません、もういちど 言って___か。',
          options: ['いただけます', 'もらいます', 'くださいました', 'いらっしゃいます'],
          answerIndex: 0, explanationVi: '〜ていただけますか là yêu cầu lịch sự (ôn từ bài 34). いらっしゃいます là kính ngữ của いる・来る・行く, không dùng ở đây.',
        },
        {
          kind: 'error', prompt: 'Câu nào là lời MỜI (chứ không phải đề nghị làm giúp hay nhờ vả)?',
          options: ['一緒に 映画を 見ませんか。', 'ドアを 開けましょうか。', 'お名前を 書いて いただけますか。', 'ここに 座りましょうか。'],
          answerIndex: 0, explanationVi: '〜ませんか = mời cùng làm; 〜ましょうか = đề nghị làm giúp; 〜ていただけますか = xin nhờ người khác. Chỉ câu đầu là lời mời.',
        },
        {
          kind: 'choice', prompt: 'Trong hội thoại, 「そうですか。」 dùng để làm gì?',
          options: ['Phản ứng cho biết mình đã nghe và tiếp nhận thông tin', 'Từ chối thẳng lời mời', 'Xin người nói nhắc lại', 'Chuyển sang chủ đề mới'],
          answerIndex: 0, explanationVi: 'そうですか là tiếng "gật đầu bằng miệng" — nghe thấy nó là người nghe đã nắm thông tin. Muốn nhờ nhắc lại thì dùng もういちど お願いします.',
        },
      ],
    },
    {
      code: 'l44-tu-noi-dam-thoai',
      title: 'Từ nối đàm thoại: それから・でも・そうですよね・なるほど',
      formation: 'Câu 1。それから、Câu 2 (thêm thông tin) / Câu 1。でも、Câu 2 (ý ngược) / そうですよね (đồng tình + xin xác nhận) / なるほど (ra thế!)',
      explanationVi:
        'Hội thoại thật luôn có những "chốt nối" giúp người nghe định vị thông tin. それから = "rồi thì / thêm nữa" — báo hiệu sắp có thông tin TIẾP THEO: 買いました。それから、行きました; でも = "nhưng mà" — tương phản nhẹ nhàng, thân mật hơn しかし (bài 38 còn có それなのに nặng cảm xúc hơn nữa); そうですよね = đồng tình KÈM mong đối phương xác nhận ("đúng thế nhỉ") — khác そうですか chỉ tiếp nhận thông tin một cách trung tính; なるほど = "à, ra thế" — tỏ ra vừa hiểu ra điều gì đó. Mẹo luyện nghe: nghe thấy それから → chuẩn bị đón thông tin mới; でも → sắp nói điều ngược lại; そうですよね → người nói đang đồng tình với chính bạn; なるほど → người nghe đã thông suốt. Bắt được các mốc này, nghe dài cũng không bị lạc dòng.',
      examples: [
        { ja: '朝は パンを 食べます。それから、コーヒーを 飲みます。', vi: 'Buổi sáng tôi ăn bánh mì. Sau đó uống cà phê.', tokens: ['朝', 'は', 'パン', 'を', '食べます', 'それから', 'コーヒー', 'を', '飲みます'] },
        { ja: 'この かばんは すてきですね。でも、ちょっと 高いです。', vi: 'Cái cặp này thật xinh. Nhưng mà hơi đắt.' },
        { ja: '「日本の 冬は さむいですね。」「そうですよね。ゆきも ふりますよ。」', vi: '"Mùa đông Nhật Bản lạnh nhỉ." "Đúng nhỉ, còn có tuyết rơi nữa đấy."' },
        { ja: '「あしたは 会議が 二つ あります。」「なるほど、たいへんですね。」', vi: '"Mai có hai cuộc họp." "Ra thế, vất vả nhỉ."' },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Nghe 「…。それから、…」 — điều gì sắp xảy ra?',
          options: ['Một thông tin mới sắp được thêm vào', 'Một ý trái ngược sắp được nêu', 'Người nói đang đồng tình với bạn', 'Hội thoại sắp kết thúc'],
          answerIndex: 0, explanationVi: 'それから = "rồi thì/thêm nữa" — nối tiếp thông tin. Muốn ý ngược thì dùng でも.',
        },
        {
          kind: 'fill', prompt: 'Điền từ nối (Mua xong nước trái cây, SAU ĐÓ đến hiệu sách)',
          sentence: 'ジュースを 買いました。___、ほんやへ 行きました。',
          options: ['それから', 'でも', 'そうですか', 'なるほど'],
          answerIndex: 0, explanationVi: 'Hai sự việc nối tiếp theo trình tự → それから. でも dùng cho tương phản, そうですか・なるほど là phản ứng nghe.',
        },
        {
          kind: 'fill', prompt: 'Điền từ nối (Bánh kem này ngon đấy. NHƯNG hơi đắt)',
          sentence: 'この ケーキは おいしいですね。___、ちょっと 高いです。',
          options: ['でも', 'それから', 'そうですよね', 'なるほど'],
          answerIndex: 0, explanationVi: 'Câu sau nói điều ngược với lời khen → でも (nhưng mà). それから là nối tiếp cùng chiều.',
        },
        {
          kind: 'choice', prompt: 'Bạn vừa nghe 「日本の たべものは おいしいですね。」 và muốn đồng tình kèm xin xác nhận — nên nói gì?',
          options: ['そうですよね。', 'でも。', 'それから。', 'もういちど。'],
          answerIndex: 0, explanationVi: 'そうですよね = "đúng thế nhỉ" — đồng tình + mời đối tác xác nhận. でも là phản bác, もういちど là xin nhắc lại.',
        },
        {
          kind: 'error', prompt: 'Câu nào dùng từ nối HỢP LÝ?',
          options: ['かぜを ひきました。でも、学校へ 行きました。', 'かぜを ひきました。それから、学校へ 行きました。', 'かぜを ひきました。そうですよね、学校へ 行きました。', 'かぜを ひいました。なるほど、学校へ 行きました。'],
          answerIndex: 0, explanationVi: 'Bị cảm NHƯNG vẫn đến trường — hai vế tương phản → でも. それから chỉ nối tiếp cùng chiều; そうですよね・なるほど là phản ứng đàm thoại, không đứng ở vị trí nối hai sự việc.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Hỏi chuyến tàu ở nhà ga',
      situationVi: 'Ở nhà ga, Linh hỏi nhân viên ga về giờ tàu, sàn lên tàu, giá vé và lối ra.',
      lines: [
        { speaker: 'リン', ja: 'すみません、東京までの でんしゃは 何時ですか。', vi: 'Xin lỗi, chuyến tàu đi Tokyo lúc mấy giờ ạ?' },
        { speaker: 'えきいん', ja: '十時十分です。三番線から 出ます。', vi: '10 giờ 10 phút ạ. Tàu chạy từ sàn ba.' },
        { speaker: 'リン', ja: '東京まで 何分ですか。', vi: 'Đến Tokyo mất bao nhiêu phút ạ?' },
        { speaker: 'えきいん', ja: '四十分ぐらいです。', vi: 'Khoảng 40 phút ạ.' },
        { speaker: 'リン', ja: 'じゃあ、きっぷを 二まい ください。', vi: 'Vậy cho tôi hai tấm vé.' },
        { speaker: 'えきいん', ja: 'ぜんぶで 三千二百円です。', vi: 'Tổng cộng là 3.200 yên.' },
        { speaker: 'リン', ja: 'はい。あのう、でんしゃの 中に トイレは ありますか。', vi: 'Vâng ạ. Mà cho hỏi, trong tàu có toilet không ạ?' },
        { speaker: 'えきいん', ja: 'ええ、ありますよ。', vi: 'Dạ, có đấy ạ.' },
        { speaker: 'リン', ja: 'でぐちは みぎですか、ひだりですか。', vi: 'Lối ra ở bên phải hay bên trái ạ?' },
        { speaker: 'えきいん', ja: 'みぎと ひだり、ふたつ ありますよ。', vi: 'Bên phải và bên trái, có hai lối ra đấy ạ.' },
      ],
    },
    {
      titleVi: 'Gọi điện đặt chỗ nhà hàng',
      situationVi: 'Linh gọi điện cho nhà hàng Sakura để đặt bàn cho bốn người tối thứ Bảy.',
      lines: [
        { speaker: 'リン', ja: 'もしもし、さくらレストランですか。', vi: 'Alô, phải nhà hàng Sakura không ạ?' },
        { speaker: 'てんいん', ja: 'はい、さくらレストランです。', vi: 'Vâng, đây là nhà hàng Sakura.' },
        { speaker: 'リン', ja: '今週の 土よう日を 予約できますか。', vi: 'Tôi đặt chỗ thứ Bảy tuần này được không ạ?' },
        { speaker: 'てんいん', ja: 'はい、何人ですか。', vi: 'Được ạ, quý khách đi mấy người?' },
        { speaker: 'リン', ja: '四人です。六時から お願いします。', vi: 'Bốn người ạ. Làm ơn từ 6 giờ.' },
        { speaker: 'てんいん', ja: '六時ですね。お名前を お願いします。', vi: 'Vâng, 6 giờ. Xin quý khách cho biết tên ạ.' },
        { speaker: 'リン', ja: 'リンです。それから、こどもの いすも ありますか。', vi: 'Tôi là Linh. Thêm nữa, nhà hàng có ghế trẻ em không ạ?' },
        { speaker: 'てんいん', ja: 'はい、ございます。', vi: 'Dạ, có ạ.' },
        { speaker: 'リン', ja: 'じゃあ、お願いします。', vi: 'Vậy làm ơn cho tôi luôn ạ.' },
        { speaker: 'てんいん', ja: 'はい、わかりました。土よう日の 六時に、四人ですね。', vi: 'Vâng, tôi đã ghi. Thứ Bảy lúc 6 giờ, bốn người đúng không ạ.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'つぎの 電車は 三番線から 出ます。東京まで 四十分です。', meaningVi: 'Chuyến tàu tiếp theo chạy từ sàn ba. Đến Tokyo mất 40 phút.', choices: ['Sàn 3, đến Tokyo 40 phút', 'Sàn 4, đến Tokyo 40 phút', 'Sàn 3, đến Tokyo 14 phút', 'Sàn 3, đến Tokyo 30 phút'], answerIndex: 0 },
    { scriptJa: 'いらっしゃいませ。その とけいは 八千円です。', meaningVi: 'Xin chào quý khách. Chiếc đồng hồ đó giá 8.000 yên.', choices: ['Đồng hồ giá 8.000 yên', 'Đồng hồ giá 3.000 yên', 'Đồng hồ giá 800 yên', 'Cái túi giá 8.000 yên'], answerIndex: 0 },
    { scriptJa: 'コーヒーを ちゅうもんしました。それから、ケーキも ちゅうもんしました。', meaningVi: 'Tôi đã gọi cà phê. Ngoài ra còn gọi cả bánh kem.', choices: ['Gọi cà phê và cả bánh kem', 'Chỉ gọi cà phê', 'Chỉ gọi bánh kem', 'Đổi cà phê lấy bánh kem'], answerIndex: 0, dictation: true },
    { scriptJa: 'すみません、すこし おくれます。会議を 五時まで 待って いただけますか。', meaningVi: 'Xin lỗi, tôi đến trễ một chút. Đợi đến tận 5 giờ giúp tôi được không?', choices: ['Xin đợi đến tận 5 giờ', 'Xin dời cuộc họp sang 5 giờ', 'Tôi sẽ đến đúng 5 giờ', 'Xin đừng đợi tôi'], answerIndex: 0 },
    { scriptJa: 'もしもし、たなかです。あしたの ごご、もういちど でんわします。', meaningVi: 'Alô, tôi là Tanaka. Chiều mai tôi sẽ gọi lại.', choices: ['Tanaka sẽ gọi lại vào chiều mai', 'Tanaka đã gọi chiều mai rồi', 'Nhờ Tanaka gọi lại giúp', 'Tanaka muốn hẹn gặp chiều mai'], answerIndex: 0, dictation: true },
  ],
  reading: {
    titleVi: 'Sau bài kiểm tra nghe',
    lines: [
      { speaker: 'たなか', text: 'リンさん、ききとりの テストは どうでしたか。', vi: 'Linh này, bài kiểm tra nghe thế nào rồi?' },
      { speaker: 'リン', text: 'すこし むずかしかったです。じかんや ばんごうが はやくて、わかりませんでした。', vi: 'Hơi khó một chút. Giờ giấc và số điện thoại đọc nhanh quá nên tôi không nghe kịp.' },
      { speaker: 'たなか', text: 'そうですか。じゃあ、ニュースを まいにち きいて ください。', vi: 'Vậy à. Vậy thì mỗi ngày nghe bản tin đi.' },
      { speaker: 'リン', text: 'ニュースは まだ はやいと おもいます。', vi: 'Tôi nghĩ bản tin vẫn còn nhanh.' },
      { speaker: 'たなか', text: 'そうですよね。じゃあ、わたしの はなしを 毎日 きいて ください。ゆっくり はなしますから。', vi: 'Đúng nhỉ. Vậy thì mỗi ngày nghe tôi kể chuyện đi. Tôi nói chậm mà.' },
      { speaker: 'リン', text: '一日に 十分ぐらい ききますか。', vi: 'Mỗi ngày nghe chừng mười phút à?' },
      { speaker: 'たなか', text: 'はい。それから、わからない ことばは ノートに 書いて ください。', vi: 'Đúng vậy. Rồi nữa, từ nào không hiểu thì ghi vào vở nhé.' },
      { speaker: 'リン', text: 'なるほど。じゃあ、今夜から はじめます。', vi: 'Ra thế. Vậy tối nay tôi bắt đầu luôn.' },
      { speaker: 'たなか', text: 'がんばって ください。きっと じょうずに なりますよ。', vi: 'Cố lên nhé. Chắc chắn cậu sẽ khá lên mà.' },
    ],
    questions: [
      { questionVi: 'Vì sao Linh thấy bài nghe khó?', choices: ['Số và giờ được đọc quá nhanh', 'Trong phòng quá ồn', 'Loa lớp học bị hỏng', 'Đề nói về chủ đề xa lạ'], answerIndex: 0, explanationVi: 'Dòng 2: じかんや ばんごうが はやくて、わかりませんでした — nghe số/giờ là điểm yếu luyện ở bài này.' },
      { questionVi: 'Tanaka gợi ý Linh luyện nghe bằng cách nào?', choices: ['Nghe Tanaka kể chuyện mỗi ngày vì Tanaka nói chậm', 'Nghe bản tin mỗi ngày', 'Nghe nhạc Nhật mỗi tối', 'Xem phim không phụ đề'], answerIndex: 0, explanationVi: 'Dòng 5: わたしの はなしを 毎日 きいて ください。ゆっくり はなしますから — sau khi Linh chêニュース nhanh (dòng 4).' },
      { questionVi: 'Tanaka dặn Linh làm gì với từ không hiểu?', choices: ['Ghi vào vở', 'Tra từ điển ngay lập tức', 'Bỏ qua không cần nhớ', 'Hỏi thầy giáo vào hôm sau'], answerIndex: 0, explanationVi: 'Dòng 7: わからない ことばは ノートに 書いて ください — nối bằng それから.' },
    ],
  },
  speakSentences: [
    { ja: 'すみません、もういちど お願いします。', vi: 'Xin lỗi, vui lòng nhắc lại một lần nữa ạ.' },
    { ja: 'まどを 開けて いただけますか。', vi: 'Bạn mở giúp cửa sổ được không?' },
    { ja: '一緒に ラーメンを 食べませんか。', vi: 'Cùng ăn mì ramen không?' },
    { ja: 'それから、会議の 時間も 教えて ください。', vi: 'Và rồi, vui lòng cho biết cả giờ họp nữa.' },
  ],
  translatePairs: [
    { ja: 'すみません、もういちど お願いします。', vi: 'Xin lỗi, vui lòng làm lại một lần nữa ạ.', tokens: ['すみません', 'もういちど', 'お願いします'], distractors: ['どうぞ'] },
    { ja: '一緒に 昼ご飯を 食べませんか。', vi: 'Cùng ăn trưa không?', tokens: ['一緒に', '昼ご飯', 'を', '食べませんか'], distractors: ['飲みませんか'] },
    { ja: 'にもつを 持ちましょうか。', vi: 'Tôi xách giúp bạn hành lý nhé?', tokens: ['にもつ', 'を', '持ちましょうか'], distractors: ['食べましょうか'] },
    { ja: 'この ケーキは おいしいですね。でも、ちょっと 高いです。', vi: 'Bánh kem này ngon nhỉ. Nhưng mà hơi đắt.', tokens: ['この', 'ケーキ', 'は', 'おいしいですね', 'でも', 'ちょっと', '高いです'], distractors: ['それから'] },
    { ja: '会議は 二時に 終わります。それから、資料を 読みます。', vi: 'Cuộc họp kết thúc lúc 2 giờ. Sau đó tôi đọc tài liệu.', tokens: ['会議', 'は', '二時', 'に', '終わります', 'それから', '資料', 'を', '読みます'], distractors: ['でも'] },
  ],
  kanji: ['話', '買', '食', '待'],
}
