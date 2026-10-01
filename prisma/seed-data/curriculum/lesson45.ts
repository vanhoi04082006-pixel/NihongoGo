/**
 * NihongoGo — Bài 45: Luyện đọc đoạn ngắn — Nắm ý chính & chi tiết (読解練習).
 * Bài KỸ NĂNG ĐỌC: trọng tâm là reading (bức thư 9 dòng của Linh gửi bạn Nhật)
 * + 2 điểm "ngữ pháp chiến lược đọc" (ý chính & từ khóa / cấu trúc bức thư).
 * Toàn bộ mẫu câu nằm trong phạm vi đã học L1–L44.
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson45: CurriculumLesson = {
  order: 45,
  slug: 'l45-luyen-doc-doan-ngan',
  title: 'Luyện đọc đoạn ngắn — Nắm ý chính & chi tiết',
  titleJa: '読解練習',
  description: 'Đọc các đoạn văn ngắn về đời sống, nắm ý chính và chi tiết quan trọng.',
  learningObjectives: [
    'Nắm ý chính của đoạn văn',
    'Tìm chi tiết theo câu hỏi',
    'Đoán nghĩa từ mới qua ngữ cảnh',
  ],
  grammarTopics: [],
  vocabularyTopics: ['Từ vựng đọc hiểu', 'Từ nối đoạn văn'],
  kanjiTopics: ['Kanji trong đoạn văn ngắn'],
  difficulty: 'ELEMENTARY',
  vocabulary: [
    { term: '手紙', reading: 'てがみ', romaji: 'tegami', meaningVi: 'thư, lá thư', pos: 'danh từ', exampleJa: 'ゆきさんに 手紙を 書きました。', exampleVi: 'Tôi đã viết thư cho Yuki.' },
    { term: '送ります', reading: 'おくります', romaji: 'okurimasu', meaningVi: 'gửi, đưa đi (thư, quà)', pos: 'động từ nhóm 1', exampleJa: 'ともだちに 写真を 送ります。', exampleVi: 'Tôi gửi ảnh cho bạn.' },
    { term: '続きます', reading: 'つづきます', romaji: 'tsuzukimasu', meaningVi: 'tiếp diễn, kéo dài', pos: 'động từ nhóm 1', exampleJa: '日本語の 勉強は これからも 続きます。', exampleVi: 'Việc học tiếng Nhật từ giờ vẫn tiếp tục.' },
    { term: '楽しみ', reading: 'たのしみ', romaji: 'tanoshimi', meaningVi: 'niềm vui; điều mong chờ', pos: 'danh từ', exampleJa: 'あしたの えいがが 楽しみです。', exampleVi: 'Tôi mong chờ bộ phim ngày mai.' },
    { term: 'はがき', romaji: 'hagaki', meaningVi: 'bưu thiếp', pos: 'danh từ', exampleJa: '旅行の とき、はがきを かいました。', exampleVi: 'Lúc đi du lịch tôi đã mua bưu thiếp.' },
    { term: '文章', reading: 'ぶんしょう', romaji: 'bunshō', meaningVi: 'đoạn văn, bài văn', pos: 'danh từ', exampleJa: 'この 文章は ちょっと むずかしいです。', exampleVi: 'Đoạn văn này hơi khó.' },
    { term: '最初', reading: 'さいしょ', romaji: 'saisho', meaningVi: 'ban đầu, phần đầu', pos: 'danh từ', exampleJa: '文章の 最初に あいさつを 書きます。', exampleVi: 'Ở đầu đoạn văn người ta viết lời chào.' },
    { term: '最後', reading: 'さいご', romaji: 'saigo', meaningVi: 'cuối cùng, phần cuối', pos: 'danh từ', exampleJa: '手紙の 最後に 名前を 書きます。', exampleVi: 'Cuối thư người ta viết tên.' },
    { term: 'だから', romaji: 'dakara', meaningVi: 'vì thế, vậy nên', pos: 'liên từ', exampleJa: 'あめが ふりました。だから、行きませんでした。', exampleVi: 'Trời đã mưa. Vì thế tôi đã không đi.' },
    { term: 'しかし', romaji: 'shikashi', meaningVi: 'tuy nhiên (văn viết)', pos: 'liên từ', exampleJa: 'テストは むずかしかったです。しかし、よく できました。', exampleVi: 'Bài kiểm tra khó. Tuy nhiên tôi làm tốt.' },
    { term: '生活', reading: 'せいかつ', romaji: 'seikatsu', meaningVi: 'cuộc sống, sinh hoạt', pos: 'danh từ', exampleJa: '日本の 生活は とても 楽しいです。', exampleVi: 'Cuộc sống ở Nhật rất vui.' },
    { term: '大学', reading: 'だいがく', romaji: 'daigaku', meaningVi: 'trường đại học', pos: 'danh từ', exampleJa: 'わたしの 大学は 京都に あります。', exampleVi: 'Trường đại học của tôi ở Kyoto.' },
    { term: 'さくら', romaji: 'sakura', meaningVi: 'hoa anh đào', pos: 'danh từ', exampleJa: 'こうえんの さくらが とても きれいです。', exampleVi: 'Hoa anh đào ở công viên đẹp lắm.' },
    { term: 'いつか', romaji: 'itsuka', meaningVi: 'một ngày nào đó', pos: 'phó từ', exampleJa: 'いつか また 会いましょう。', exampleVi: 'Một ngày nào đó gặp lại nhé.' },
    { term: 'すぎます', romaji: 'sugimasu', meaningVi: 'trôi qua (thời gian)', pos: 'động từ nhóm 1', exampleJa: '日本に 来てから、一年が すぎます。', exampleVi: 'Từ lúc sang Nhật, một năm đã trôi qua.' },
    { term: '思い出', reading: 'おもいで', romaji: 'omoide', meaningVi: 'kỷ niệm', pos: 'danh từ', exampleJa: '京都の 思い出を わすれません。', exampleVi: 'Tôi không quên những kỷ niệm ở Kyoto.' },
    { term: '住所', reading: 'じゅうしょ', romaji: 'jūsho', meaningVi: 'địa chỉ', pos: 'danh từ', exampleJa: '住所は ここに 書いて ください。', exampleVi: 'Hãy viết địa chỉ vào đây.' },
    { term: 'ポスト', romaji: 'posuto', meaningVi: 'hòm thư', pos: 'danh từ', exampleJa: 'この 手紙を ポストに 入れます。', exampleVi: 'Tôi bỏ lá thư này vào hòm thư.' },
  ],
  grammar: [
    {
      code: 'l45-y-chinh-tu-khoa',
      title: 'Chiến lược đọc: nắm ý chính & từ khóa — câu đầu + từ lặp lại',
      formation: 'Câu đầu đoạn → chốt chủ đề; từ lặp ≥2 lần → từ khóa (キーワード); ý chính = từ khóa + [だれが・なにを・どうする]',
      explanationVi:
        'Đọc đoạn ngắn tiếng Nhật đừng vội tra từng từ mới — hãy "quét" cấu trúc trước: (1) CÂU ĐẦU ĐOẠN thường chốt chủ đề: わたしの しゅみは りょうりです / 東京は 大きい 町です — chủ ngữ + は chính là đề tài cả đoạn. (2) TỪ LẶP LẠI (xuất hiện ≥2 lần) gần như chắc chắn là từ khóa (キーワード): thấy りょうり lặp 3 lần thì chủ đề phải là "nấu ăn", không thể là "mỗi ngày" hay "ngôi nhà". (3) Câu hỏi "đoạn nói về điều gì?" → ghép công thức: từ khóa + [だれが・なにを・どうする]. (4) Gặp từ mới: đoán qua chữ Hán đã học (毎週 = 每 "mỗi" + 週 "tuần" → "mỗi tuần") và qua ngữ cảnh trước khi tra từ điển. (5) Câu hỏi chi tiết (số, giờ, địa điểm, nguyên nhân) → quét mắt tìm con số, địa danh và cụm から/ので thay vì đọc lại cả đoạn. Luyện "đọc lướt có mục tiêu" chính là kỹ năng số một của phần 読解.',
      examples: [
        { ja: 'わたしの しゅみは りょうりです。毎日 うちで りょうりを つくります。りょうりは とても たのしいです。', vi: 'Sở thích của tôi là nấu ăn. Ngày nào tôi cũng nấu ở nhà. Nấu ăn rất vui. — 「りょうり」 lặp 3 lần → từ khóa; câu đầu chốt chủ đề.', tokens: ['わたし', 'の', 'しゅみ', 'は', 'りょうり', 'です'] },
        { ja: '東京は 大きい 町です。この 町には 毎日 たくさんの 人が 来ます。', vi: 'Tokyo là thành phố lớn. Ngày nào thành phố này cũng có rất nhiều người đến. — 「町」 lặp lại → từ khóa.' },
        { ja: '兄は 毎朝 六時に 起きます。それから、一時間 漢字の 勉強を します。勉強は とても 好きです。', vi: 'Anh trai tôi dậy lúc 6 giờ mỗi sáng. Sau đó học chữ Hán một tiếng. Học là điều anh ấy rất thích. — 「勉強」 lặp → từ khóa.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Đoạn: 「わたしは パンの みせで はたらいて います。毎日 パンを つくります。この みせの パンは ゆうめいです。」 — từ khóa (キーワード) của đoạn là gì?',
          options: ['パン', 'えいが', 'がっこう', 'バス'],
          answerIndex: 0, explanationVi: 'パン xuất hiện 3 lần và đã hiện diện ngay câu đầu → từ khóa. Ba từ còn lại không hề xuất hiện trong đoạn nên loại ngay.',
        },
        {
          kind: 'choice', prompt: 'Đoạn: 「京都は 古い 町です。毎年 たくさんの 人が 京都へ 旅行に 来ます。京都の お寺は ゆうめいです。」 — đoạn chủ yếu nói về điều gì?',
          options: ['Nét đẹp của thành phố cổ Kyoto', 'Cách làm bánh mì', 'Chuyến du lịch tuần trước của tác giả', 'Lễ hội ở Tokyo'],
          answerIndex: 0, explanationVi: '「京都」 lặp 3 lần → từ khóa; câu đầu 「京都は 古い 町です」 chốt chủ đề. Công thức: từ lặp + câu đầu = ý chính của cả đoạn.',
        },
        {
          kind: 'particle', prompt: 'Chọn trợ từ (Từ quan trọng nhất TRONG đoạn văn này là "さくら")',
          sentence: 'この 文章___ 一番 大事な 言葉は 「さくら」です。',
          options: ['で', 'に', 'を', 'が'],
          answerIndex: 0, explanationVi: 'で trong mẫu 「〜で いちばん〜」 chỉ phạm vi so sánh ("trong đoạn văn này"). Từ khóa là từ lặp nhiều nhất trong phạm vi ấy.',
        },
        {
          kind: 'error', prompt: 'Đoạn: 「昨日は 母と 買い物に 行きました。デパートで かばんを 買いました。かばんは 黒くて 大きいです。」 — câu nào tóm Ý CHÍNH của đoạn?',
          options: ['昨日 買い物に 行って、かばんを 買いました。', '昨日 デパートで くつを 買いました。', '母は 黒い かばんを 持って います。', 'デパートは とても 大きいです。'],
          answerIndex: 0, explanationVi: 'Ý chính = ghép "đi mua sắm" + "mua được cặp". Các lựa chọn khác hoặc sai chi tiết (くつ), hoặc chỉ là chi tiết phụ của đoạn.',
        },
        {
          kind: 'choice', prompt: 'Từ 「毎週」 trong câu 「毎週 母に 電話を かけます」 nghĩa là gì? (đoán qua chữ Hán đã học)',
          options: ['mỗi tuần một lần', 'mỗi tháng một lần', 'mỗi ngày một lần', 'mỗi năm một lần'],
          answerIndex: 0, explanationVi: '每 = "mỗi", 週 = "tuần" (đã gặp trong 毎日, 毎年) → 毎週 = mỗi tuần. Đây là mẹo đoán nghĩa từ mới bằng chữ Hán quen thuộc.',
        },
      ],
    },
    {
      code: 'l45-cau-truc-doan',
      title: 'Cấu trúc bức thư: mở đầu あいさつ → giải thích ので/から → kết これからも',
      formation: '① Mở đầu: [Tên]+さん、お元気ですか。 → ② Thân bài: [việc] + から/ので (lý do); nối ý: それから・だから; đổi hướng: しかし → ③ Kết: これからも〜ます / また 会いましょう / どうぞ お元気で',
      explanationVi:
        'Một bức thư/email thân mật tiếng Nhật có "khung 3 tầng" rất chuẩn: (1) MỞ ĐẦU — chào hỏi và hỏi thăm: ゆきさん、お元気ですか; có thể cảm ơn thư trước đó: メール、ありがとう. (2) THÂN BÀI — nêu việc rồi GIẢI THÍCH lý do bằng から (thân mật) hoặc ので (nhã nhặn, thiên văn viết): しけんが おわりましたから、ゆっくり やすみます; nối các ý bằng それから/だから, chuyển hướng bằng しかし. (3) KẾT — hứa hẹn tiếp tục và lời chúc: 日本語の 勉強は これからも 続きます / また 会いましょう / どうぞ お元気で. Mẹo làm bài đọc hiểu thư: câu hỏi "người viết là ai, viết cho ai" → nhìn cách xưng hô (〜さん); câu hỏi "thư kể chuyện gì" → đọc phần thân bài quanh から/ので; câu hỏi "người viết hứa hay mong điều gì" → đọc hai câu cuối (これからも…).',
      examples: [
        { ja: 'ゆきさん、お元気ですか。ベトナムは 毎日 あついです。', vi: 'Yuki này, bạn vẫn khỏe chứ? Việt Nam ngày nào cũng nóng. (Mở đầu: chào + hỏi thăm)', tokens: ['ゆきさん', 'お元気ですか', 'ベトナム', 'は', '毎日', 'あついです'] },
        { ja: 'しけんが おわりましたから、こんしゅうは ゆっくり やすみます。', vi: 'Vì thi xong rồi nên tuần này tôi nghỉ ngơi thoải mái. (Thân bài: việc + lý do から)' },
        { ja: '日本語の 勉強は これからも 続きます。', vi: 'Việc học tiếng Nhật từ giờ vẫn sẽ tiếp tục. (Kết: hứa hẹn với これからも)' },
        { ja: 'どうぞ お元気で。いつか また 会いましょう。', vi: 'Chúc bạn luôn khỏe. Một ngày nào đó gặp lại nhé. (Kết: lời chúc + hẹn gặp)' },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Câu nào phù hợp làm MỞ ĐẦU bức thư gửi bạn bè?',
          options: ['ゆきさん、お元気ですか。', 'ゆきさん、さようなら。', 'ゆきさん、しつれいします。', 'ゆきさん、ごちそうさまでした。'],
          answerIndex: 0, explanationVi: 'Mở đầu thư = chào hỏi + hỏi th sức khỏe (お元気ですか). さようなら là lời tạm biệt khi kết thúc; しつれいします dùng khi vào phòng/cửa hàng; ごちそうさま là nói sau bữa ăn.',
        },
        {
          kind: 'fill', prompt: 'Điền từ nối (Tuần trước thi nên tôi đã không đi chơi nhiều — văn phong nhã)',
          sentence: 'せんしゅうは しけんでした___、あまり あそびませんでした。',
          options: ['ので', 'のに', 'からは', 'では'],
          answerIndex: 0, explanationVi: 'ので = "vì" nhã nhặn, thường gặp trong văn viết; のに = "mặc dù" (nghĩa ngược). からは・では không phải từ nối lý do.',
        },
        {
          kind: 'particle', prompt: 'Chọn từ nối đúng (Thi xong rồi NÊN tôi đi xem phim với bạn)',
          sentence: 'しけんが おわりました___、ともだちと えいがを みました。',
          options: ['から', 'まで', 'ながら', 'のに'],
          answerIndex: 0, explanationVi: 'から = "vì/vậy nên" — chuẩn của thân bài thư. まで (đến), ながら (vừa…vừa), のに (mặc dù) đều sai nghĩa ở đây.',
        },
        {
          kind: 'error', prompt: 'Câu nào đóng vai trò KẾT THÚC bức thư?',
          options: ['また 会える 日を 楽しみに して います。', 'まず、自己紹介を します。', 'それから、買い物に 行きました。', 'はじめまして、田中です。'],
          answerIndex: 0, explanationVi: 'Câu kết = mong gặp lại + lời chúc. 自己紹介・それから thuộc phần thân bài; はじめまして chỉ dùng trong thư gửi lần đầu tiên.',
        },
        {
          kind: 'conjugate', prompt: '続きます (tự động) → dạng dùng với tân ngữ を (Việc học tiếng Nhật từ giờ cũng sẽ ___)',
          sentence: '日本語の 勉強を これからも ___。',
          options: ['つづけます', 'つづきます', 'つづけて', 'つづかせます'],
          answerIndex: 0, explanationVi: 'Có tân ngữ を → phải dùng 他 động つづけます (続けます); つづきます (tự động) đi với が; つづけて là て-form; つづかせます là sai khiến.',
        },
        {
          kind: 'choice', prompt: 'Trong câu 「日本語の 勉強は これからも 続きます」, 「これからも」 nghĩa là gì?',
          options: ['từ bây giờ và cả về sau nữa', 'chỉ đúng thời điểm này', 'hồi trước đây', 'một cách chậm rãi'],
          answerIndex: 0, explanationVi: 'これから = "từ bây giờ", も = "cũng/nữa" → これからも = "từ giờ về sau vẫn tiếp tục" — cụm từ kinh điển ở phần kết bức thư.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Cách viết một lá thư',
      situationVi: 'Linh định viết thư gửi bạn Nhật; Sayuri chỉ cho cô "khung 3 tầng" của bức thư.',
      lines: [
        { speaker: 'さゆり', ja: 'リンさん、今 何を 書いて いますか。', vi: 'Linh này, bạn đang viết gì thế?' },
        { speaker: 'リン', ja: 'ともだちに 手紙を 書いて います。でも、文章が 長くて、こまって います。', vi: 'Tôi đang viết thư cho bạn. Nhưng bài văn dài quá, tôi đang bí.' },
        { speaker: 'さゆり', ja: '手紙は かんたんで いいですよ。最初に あいさつを 書きます。', vi: 'Thư từ thì viết đơn giản là được mà. Đầu tiên viết lời chào.' },
        { speaker: 'リン', ja: '「ゆきさん、お元気ですか」— これで いいですか。', vi: '"Yuki này, bạn có khỏe không" — viết thế này ổn chứ?' },
        { speaker: 'さゆり', ja: 'はい、いいですね。つぎに、書きたい ことを 短く 書きます。理由は 「から」や「ので」を 使って ください。', vi: 'Ừ, ổn đấy. Tiếp theo, viết điều muốn nói một cách ngắn gọn. Còn lý do thì dùng "kara" hoặc "node" nhé.' },
        { speaker: 'リン', ja: 'わかりました。最後に 何を 書きますか。', vi: 'Rồi. Còn cuối thư thì viết gì?' },
        { speaker: 'さゆり', ja: '「また 会いましょう」や「お元気で」を 書きます。', vi: 'Viết "Hẹn gặp lại nhé" hoặc "Chúc bạn luôn khỏe".' },
        { speaker: 'リン', ja: 'なるほど! 短く しても、大切な ことは 全部 書けますね。', vi: 'Ra vậy! Dù viết ngắn vẫn ghi được hết những điều quan trọng nhỉ.' },
        { speaker: 'さゆり', ja: 'そうですよ。さあ、書けたら、ポストに 出しに 行きましょう。', vi: 'Đúng vậy. Nào, viết xong rồi mình cùng ra bỏ hòm thư nhé.' },
      ],
    },
    {
      titleVi: 'Gửi thư ở bưu điện',
      situationVi: 'Linh ra bưu điện gửi lá thư kèm ảnh về Việt Nam.',
      lines: [
        { speaker: 'リン', ja: 'すみません。ベトナムに この 手紙を 送りたいです。', vi: 'Xin lỗi ạ. Tôi muốn gửi lá thư này về Việt Nam.' },
        { speaker: 'てんいん', ja: 'はい。中に 何か 入って いますか。', vi: 'Vâng ạ. Trong thư có đựng gì không ạ?' },
        { speaker: 'リン', ja: '写真が 二まい 入って います。さくらの 写真です。', vi: 'Có hai tấm ảnh ạ. Là ảnh hoa anh đào.' },
        { speaker: 'てんいん', ja: 'では、この 紙に 名前と 住所を 書いて ください。', vi: 'Vậy thì quý khách viết tên và địa chỉ vào tờ giấy này.' },
        { speaker: 'リン', ja: 'はい。……書きました。きっては いくらですか。', vi: 'Vâng ạ. … Tôi viết xong rồi ạ. Con tem giá bao nhiêu ạ?' },
        { speaker: 'てんいん', ja: 'ベトナムまで 130円です。', vi: 'Gửi về Việt Nam là 130 yên ạ.' },
        { speaker: 'リン', ja: 'じゃあ、きってを 一まい ください。それから、この はがきも お願いします。', vi: 'Vậy cho tôi một con tem ạ. Rồi nữa, làm ơn cho tôi luôn tấm bưu thiếp này.' },
        { speaker: 'てんいん', ja: 'かしこまりました。ポストは あそこですよ。', vi: 'Được ngay ạ. Hòm thư ở đằng kia ạ.' },
        { speaker: 'リン', ja: 'ありがとう ございました。', vi: 'Xin cảm ơn ạ.' },
      ],
    },
  ],
  listening: [
    { scriptJa: '毎週 母に メールを 送ります。', meaningVi: 'Tôi gửi email cho mẹ mỗi tuần.', choices: ['Tôi gửi email cho mẹ mỗi tuần', 'Tôi gửi thư tay cho mẹ mỗi tháng', 'Tôi nhận được email của mẹ mỗi tuần', 'Tôi gọi điện cho mẹ mỗi tuần'], answerIndex: 0, dictation: true },
    { scriptJa: 'この 文章の 最初の 文が 一番 大切です。', meaningVi: 'Câu đầu tiên của đoạn văn này là quan trọng nhất.', choices: ['Câu cuối cùng là quan trọng nhất', 'Câu đầu tiên của đoạn văn quan trọng nhất', 'Tất cả các câu đều dài như nhau', 'Đoạn văn này không có ý chính'], answerIndex: 1, dictation: true },
    { scriptJa: '手紙の 最後に 「また 会いましょう」と 書きました。', meaningVi: 'Cuối thư tôi đã viết "Hẹn gặp lại nhé".', choices: ['Đầu thư tôi viết lời chào', 'Cuối thư tôi đã viết "Hẹn gặp lại nhé"', 'Tôi định viết thư vào cuối tuần', 'Cuối thư tôi viết địa chỉ'], answerIndex: 1 },
    { scriptJa: 'いつか 京都で 会いましょう。', meaningVi: 'Một ngày nào đó hãy gặp nhau ở Kyoto nhé.', choices: ['Mai gặp nhau ở Tokyo nhé', 'Tôi đã gặp bạn ở Kyoto rồi', 'Tuần sau gặp nhau ở Kyoto nhé', 'Một ngày nào đó hãy gặp nhau ở Kyoto nhé'], answerIndex: 3 },
  ],
  reading: {
    titleVi: 'Lá thư của Linh gửi Yuki',
    lines: [
      { text: 'ゆきさん、こんばんは。お元気ですか。', vi: 'Yuki này, chào bạn buổi tối. Bạn vẫn khỏe chứ?' },
      { text: '日本に 来てから、はんとしが すぎました。', vi: 'Tính từ lúc sang Nhật đến giờ, nửa năm đã trôi qua.' },
      { text: '大学の 生活は とても 楽しいです。毎日 日本語を 勉強して います。', vi: 'Cuộc sống đại học rất vui. Ngày nào tôi cũng học tiếng Nhật.' },
      { text: '先週の 土よう日、クラスの 人たちと 公園で さくらを 見ました。', vi: 'Thứ Bảy tuần trước, tôi cùng mọi người trong lớp xem hoa anh đào ở công viên.' },
      { text: 'さくらは とても きれいでしたから、写真を たくさん 撮りました。', vi: 'Hoa anh đào đẹp lắm nên tôi đã chụp rất nhiều ảnh.' },
      { text: 'だから、今日 その 写真を この 手紙と 一緒に 送ります。', vi: 'Vậy nên hôm nay tôi gửi những tấm ảnh ấy cùng với lá thư này.' },
      { text: '夏休みには ベトナムへ 帰ります。家族に 会いたいです。', vi: 'Kỳ nghỉ hè tôi sẽ về Việt Nam. Tôi muốn gặp gia đình lắm rồi.' },
      { text: '日本語の 勉強は これからも 続きます。', vi: 'Việc học tiếng Nhật của tôi từ giờ vẫn sẽ tiếp tục.' },
      { text: 'いつか また 会える 日を 楽しみに して います。どうぞ お元気で。', vi: 'Tôi đang mong chờ ngày nào đó được gặp lại bạn. Chúc bạn luôn khỏe nhé.' },
    ],
    questions: [
      { questionVi: 'Linh viết lá thư này nhằm mục đích chính là gì?', choices: ['Kể về cuộc sống học tiếng Nhật và gửi kèm ảnh hoa anh đào', 'Nhờ Yuki tìm giúp trường học ở Nhật', 'Mời Yuki về Việt Nam chơi mùa hè', 'Hỏi thăm Yuki vì Yuki bị ốm'], answerIndex: 0, explanationVi: 'Câu 1 là lời chào; thân bài (câu 3–6) kể về việc học tiếng Nhật và đi xem hoa. Từ lặp nhiều nhất (日本語・勉強・さくら・写真) chính là từ khóa — đúng chiến lược "câu đầu + từ lặp".' },
      { questionVi: 'Vì sao Linh gửi kèm ảnh trong thư?', choices: ['Vì Yuki từng nhờ Linh chụp ảnh giúp', 'Vì hoa anh đào đẹp nên Linh đã chụp rất nhiều ảnh', 'Vì muốn trả lại ảnh cho Yuki', 'Vì bưu điện yêu cầu phải đính kèm ảnh'], answerIndex: 1, explanationVi: 'Câu 5–6: さくらは とても きれいでしたから… だから、写真を… 送ります — chuỗi lý do (から) → kết quả (だから) kinh điển của thân bài thư.' },
      { questionVi: 'Trong hai câu cuối, Linh hứa điều gì?', choices: ['Tiếp tục học tiếng Nhật', 'Dừng học tiếng Nhật để nghỉ hè', 'Mùa hè này sẽ ở lại Nhật', 'Gửi thư cho Yuki mỗi tuần'], answerIndex: 0, explanationVi: 'Câu 8: これからも 続きます; câu 9 là phần kết chuẩn của thư. Mẹo: câu hỏi về lời hứa/lời chúc → đọc hai câu cuối trước.' },
    ],
  },
  speakSentences: [
    { ja: 'ゆきさん、お元気ですか。', vi: 'Yuki này, bạn vẫn khỏe chứ?' },
    { ja: 'さくらの 写真を 送ります。', vi: 'Tôi sẽ gửi ảnh hoa anh đào.' },
    { ja: '日本語の 勉強は これからも 続きます。', vi: 'Việc học tiếng Nhật từ giờ vẫn tiếp tục.' },
    { ja: 'いつか また 会いましょう。', vi: 'Một ngày nào đó gặp lại nhé.' },
  ],
  translatePairs: [
    { ja: 'ゆきさんに 手紙を 送ります。', vi: 'Tôi gửi thư cho Yuki.', tokens: ['ゆきさん', 'に', '手紙', 'を', '送ります'], distractors: ['もらいます'] },
    { ja: '文章の 最初に あいさつを 書きます。', vi: 'Ở đầu đoạn văn người ta viết lời chào.', tokens: ['文章', 'の', '最初', 'に', 'あいさつ', 'を', '書きます'], distractors: ['最後'] },
    { ja: '毎日 日本語を 勉強して います。', vi: 'Tôi đang học tiếng Nhật mỗi ngày.', tokens: ['毎日', '日本語', 'を', '勉強して', 'います'], distractors: ['あります'] },
    { ja: 'しけんが おわりましたから、ゆっくり やすみます。', vi: 'Vì thi xong rồi nên tôi nghỉ ngơi thoải mái.', tokens: ['しけん', 'が', 'おわりましたから', 'ゆっくり', 'やすみます'], distractors: ['のに'] },
    { ja: 'いつか また 会える 日を 楽しみに して います。', vi: 'Tôi đang mong chờ ngày nào đó được gặp lại.', tokens: ['いつか', 'また', '会える', '日', 'を', '楽しみ', 'に', 'して', 'います'], distractors: ['これからも'] },
  ],
  kanji: ['今', '日', '来', '見', '学'],
}
