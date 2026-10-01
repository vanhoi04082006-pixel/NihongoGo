/**
 * NihongoGo — Bài 49: Thi thử tổng hợp — Làm quen cấu trúc đề.
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson49: CurriculumLesson = {
  order: 49,
  slug: 'l49-thi-thu-tong-hop',
  title: 'Thi thử tổng hợp — Làm quen cấu trúc đề',
  titleJa: '模擬試験',
  description: 'Làm bài thi thử theo cấu trúc đề N5 với đủ phần ngữ pháp, từ vựng, đọc và nghe.',
  learningObjectives: [
    'Làm quen cấu trúc đề thi',
    'Phân bổ thời gian hợp lý',
    'Rà soát lỗ hổng kiến thức',
  ],
  grammarTopics: ['Ôn tổng hợp phạm vi N5', 'Chiến lược làm bài thi'],
  vocabularyTopics: ['Từ vựng thi thử'],
  kanjiTopics: ['Ôn Kanji tổng hợp'],
  difficulty: 'ELEMENTARY',
  vocabulary: [
    { term: '天気', reading: 'てんき', romaji: 'tenki', meaningVi: 'thời tiết', pos: 'danh từ', exampleJa: '今日は 天気が いいです。', exampleVi: 'Hôm nay thời tiết đẹp.' },
    { term: 'よてい', romaji: 'yotei', meaningVi: 'kế hoạch, lịch dự kiến', pos: 'danh từ', exampleJa: '夏休みの よていを 友だちと 話しました。', exampleVi: 'Tôi đã bàn kế hoạch nghỉ hè với bạn.' },
    { term: 'しつもん', romaji: 'shitsumon', meaningVi: 'câu hỏi, thắc mắc', pos: 'danh từ', exampleJa: '先生に しつもんを しました。', exampleVi: 'Tôi đã hỏi thầy cô.' },
    { term: 'へんじ', romaji: 'henji', meaningVi: 'lời hồi âm, câu trả lời', pos: 'danh từ', exampleJa: 'メールの へんじを 書きます。', exampleVi: 'Tôi viết hồi âm cho email.' },
    { term: 'やくそく', romaji: 'yakusoku', meaningVi: 'lời hẹn, lời hứa', pos: 'danh từ', exampleJa: '友だちと 三時に 会う やくそくを しました。', exampleVi: 'Tôi đã hẹn bạn gặp lúc 3 giờ.' },
    { term: 'じゅんび', romaji: 'junbi', meaningVi: 'sự chuẩn bị', pos: 'danh từ', exampleJa: '旅行の じゅんびが 終わりました。', exampleVi: 'Việc chuẩn bị du lịch đã xong.' },
    { term: 'ちず', romaji: 'chizu', meaningVi: 'bản đồ', pos: 'danh từ', exampleJa: 'この ちずを 見せて ください。', exampleVi: 'Xin hãy cho tôi xem bản đồ này.' },
    { term: '病院', reading: 'びょういん', romaji: 'byōin', meaningVi: 'bệnh viện', pos: 'danh từ', exampleJa: '病院で くすりを もらいました。', exampleVi: 'Tôi đã được cấp thuốc ở bệnh viện.' },
    { term: 'くすり', romaji: 'kusuri', meaningVi: 'thuốc', pos: 'danh từ', exampleJa: 'ごはんの あとで くすりを 飲みます。', exampleVi: 'Tôi uống thuốc sau bữa ăn.' },
    { term: 'ねつ', romaji: 'netsu', meaningVi: 'cơn sốt, thân nhiệt', pos: 'danh từ', exampleJa: '今朝から ねつが あります。', exampleVi: 'Tôi bị sốt từ sáng nay.' },
    { term: '銀行', reading: 'ぎんこう', romaji: 'ginkō', meaningVi: 'ngân hàng', pos: 'danh từ', exampleJa: '銀行は 何時から 何時までですか。', exampleVi: 'Ngân hàng mở cửa từ mấy giờ đến mấy giờ ạ?' },
    { term: 'ゆうびんきょく', romaji: 'yūbinkyoku', meaningVi: 'bưu điện', pos: 'danh từ', exampleJa: 'ゆうびんきょくで きってを 買います。', exampleVi: 'Tôi mua tem ở bưu điện.' },
    { term: '注意', reading: 'ちゅうい', romaji: 'chūi', meaningVi: 'sự chú ý, cẩn thận', pos: 'danh từ', exampleJa: '車に 注意してください。', exampleVi: 'Xin hãy chú ý xe cộ.' },
    { term: '相談', reading: 'そうだん', romaji: 'sōdan', meaningVi: 'việc bàn bạc, xin ý kiến', pos: 'danh từ', exampleJa: '先生に 相談しました。', exampleVi: 'Tôi đã xin ý kiến thầy cô.' },
    { term: '案内', reading: 'あんない', romaji: 'annai', meaningVi: 'việc hướng dẫn, dẫn đường', pos: 'danh từ', exampleJa: '駅の人に 道を 案内して もらいました。', exampleVi: 'Tôi được nhân viên nhà ga chỉ đường.' },
    { term: 'きせつ', romaji: 'kisetsu', meaningVi: 'mùa (bốn mùa)', pos: 'danh từ', exampleJa: '日本の きせつは きれいです。', exampleVi: 'Bốn mùa của Nhật Bản đẹp.' },
    { term: '雑誌', reading: 'ざっし', romaji: 'zasshi', meaningVi: 'tạp chí', pos: 'danh từ', exampleJa: '電車の 中で 雑誌を 読みます。', exampleVi: 'Tôi đọc tạp chí trên tàu điện.' },
    { term: 'きって', romaji: 'kitte', meaningVi: 'tem (thư)', pos: 'danh từ', exampleJa: '手紙に きってを はります。', exampleVi: 'Tôi dán tem lên thư.' },
  ],
  grammar: [
    {
      code: 'l49-chien-luoc-lam-bai',
      title: 'Chiến lược làm bài: đọc kỹ cả câu — chọn trợ từ/dạng chia theo ngữ cảnh, quản lý thời gian',
      formation: 'Bước 1: đọc trọn câu (bỏ qua chỗ trống) → Bước 2: xác định chỗ trống cần TRỢ TỪ hay DẠNG CHIA → Bước 3: loại lựa chọn sai hiển nhiên → Bước 4: điền đáp án còn lại và ĐỌC LẠI. Thời gian: quét một vòng làm câu chắc chắn trước, câu khó đánh dấu quay lại.',
      explanationVi:
        'Phần "cấu trúc câu" của đề (dù thi thử trong app hay JLPT thật) luôn có 4 lựa chọn rất giống nhau — ăn điểm bằng QUY TRÌNH, không bằng cảm giác. (1) Che 4 lựa chọn, đọc TRỌN câu trước: nắm ai làm gì, lúc nào, ở đâu; (2) Xác định chỗ trống thuộc loại nào — TRỢ TỪ thì hỏi "quan hệ ngữ pháp" (đích đến? nơi diễn ra? cùng ai? đối tượng?), DẠNG CHIA thì hỏi "thời nào, khẳng định/phủ định, lịch sự thế nào, khung mẫu nào"; (3) Loại ngay lựa chọn sai hiển nhiên (chia sai thể, sai nghĩa rõ); (4) Điền phương án còn lại, đọc lại cả câu cho trôi tai rồi mới chuyển câu. Quản lý thời gian: quét một lượt làm TRƯỚC các câu chắc chắn, câu khó đánh dấu quay lại sau; hết giờ thì cứ chọn phương án khả năng cao nhất — đề không trừ điểm câu sai, tuyệt đối không để trống. Nghe: đọc trước các lựa chọn, đoán loại thông tin cần nắm (giờ? nơi? ai?); Đọc hiểu: đọc câu hỏi TRƯỚC đoạn văn để biết cần tìm gì.',
      examples: [
        { ja: '私の 趣味は 音楽を 聞く ことです。', vi: 'Sở thích của tôi là nghe nhạc.', tokens: ['私の', '趣味', 'は', '音楽', 'を', '聞く', 'こと', 'です'] },
        { ja: '毎朝 六時に 起きて、朝ご飯を 食べます。', vi: 'Buổi sáng nào tôi cũng dậy lúc 6 giờ rồi ăn sáng.', tokens: ['毎朝', '六時', 'に', '起きて', '朝ご飯', 'を', '食べます'] },
        { ja: 'きのう 友だちに 電話を かけました。', vi: 'Hôm qua tôi gọi điện cho bạn.', tokens: ['きのう', '友だち', 'に', '電話', 'を', 'かけました'] },
      ],
      drills: [
        {
          kind: 'particle', prompt: '(Đề thi) Chọn trợ từ đúng: Tôi đến trường bằng xe buýt mỗi ngày.',
          sentence: 'わたしは 毎日 バス___ 学校へ 行きます。',
          options: ['で', 'に', 'を', 'が'],
          answerIndex: 0, explanationVi: 'PHƯƠNG TIỆN di chuyển → で (バスで). Đích đến đã có 学校へ; バスに nghĩa là "lên ngồi lên xe", không phải cách di chuyển.',
        },
        {
          kind: 'conjugate', prompt: '(Đề thi) Chọn dạng đúng: Bữa tiệc hôm qua rất vui.',
          sentence: 'きのうの パーティーは とても ___です。',
          options: ['たのしかった', 'たのしいでした', 'たのしかったでした', 'たのしく'],
          answerIndex: 0, explanationVi: 'Tính từ い quá khứ: たのしい → たのしかった + です. 「たのしいでした」 là bẫy kinh điển — です đứng sau tính từ い không bao giờ chia quá khứ.',
        },
        {
          kind: 'fill', prompt: '(Đề thi) Chọn từ đúng: Trên bàn có một cuốn sách.',
          sentence: 'つくえの 上に 本が ___。',
          options: ['あります', 'います', 'です', 'しません'],
          answerIndex: 0, explanationVi: 'Sự tồn tại của ĐỒ VẬT → あります. います chỉ dùng cho người/động vật; です không diễn tả sự tồn tại ở mẫu này.',
        },
        {
          kind: 'choice', prompt: 'Chiến lược: khi gặp câu cấu trúc dài, bước ĐẦU TIÊN nên làm gì?',
          options: ['Che lựa chọn, đọc trọn câu để nắm nghĩa rồi mới xác định chỗ trống cần gì', 'Chọn ngay lựa chọn trông quen mắt nhất', 'Điền đại một lựa chọn rồi chuyển câu', 'Bỏ qua câu đó đến hết bài mới quay lại'],
          answerIndex: 0, explanationVi: 'Đọc trọn câu giúp xác định chỗ trống cần TRỢ TỪ hay DẠNG CHIA, từ đó loại nhanh lựa chọn sai — chọn theo "quen mắt" là cách mất điểm nhiều nhất.',
        },
        {
          kind: 'choice', prompt: 'Quản lý thời gian: còn 10 phút, vẫn còn 8 câu khó — nên xử lý thế nào?',
          options: ['Quét nhanh chốt điểm các câu chắc chắn, câu khó chọn phương án hợp lý nhất rồi chuyển', 'Dừng hẳn ở câu khó đầu tiên cho đến khi làm xong', 'Để trống toàn bộ 8 câu', 'Dành hết thời gian viết dài phần đọc hiểu'],
          answerIndex: 0, explanationVi: 'Đề thi không trừ điểm câu sai → câu khó cứ chọn phương án khả năng cao nhất, ưu tiên lấy điểm ở câu chắc chắn. Dừng quá lâu ở một câu là mất điểm cả chuỗi câu sau.',
        },
      ],
    },
    {
      code: 'l49-bay-thi-thuong-gap',
      title: 'Bẫy thi thường gặp: は/が・に/で・い-tính từ + です・あります/います',
      formation: 'は = chủ đề đã biết; が = thông tin mới (đáp lại "cái nào là…") / sự tồn tại; に = đích đến & thời điểm; で = nơi diễn ra hành động; い-adj quá khứ: 高い → 高かったです (không nói 高いでした); đồ vật → あります, người/động vật → います',
      explanationVi:
        'Bốn nhóm bẫy rơi nhiều điểm nhất ở mức N5. (1) は/が: câu HỎI giới thiệu chủ đề bằng は (としょかんは どこですか), câu ĐÁP cung cấp thông tin MỚI "cái nào là thư viện" → が (あの 白い 建物が としょかんです); tả sự tồn tại cũng dùng が (本が あります). (2) に/で: に = ĐÍCH ĐẾN (学校へ 行きます) hoặc THỜI ĐIỂM (七時に 起きます); で = NƠI DIỄN RA hành động (学校で 勉強します) — hỏi "hành động xảy ra ở đâu?" thì chọn で, hỏi "đi đến đâu / lúc mấy giờ?" thì chọn に. (3) い-tính từ + です: です không bao giờ chia quá khứ cho tính từ い — 高い → 高かったです; còn tính từ な thì chia ở です (静かでした). (4) あります/います: đồ vật, sự kiện, thực vật → あります; người và động vật → います — nhìn chủ ngữ là 本か 人か trước khi chọn. Gặp bốn nhóm này trong đề, hãy kéo câu về KHUNG MẪU đã học rồi mới so 4 lựa chọn — bẫy chỉ có tác dụng khi bạn đọc lướt.',
      examples: [
        { ja: 'コンビニは えきの 前に あります。', vi: 'Cửa hàng tiện lợi nằm trước nhà ga.', tokens: ['コンビニ', 'は', 'えき', 'の', '前', 'に', 'あります'] },
        { ja: '毎朝 七時に 起きて、学校へ 行きます。', vi: 'Buổi sáng nào tôi cũng dậy lúc 7 giờ rồi đến trường.' },
        { ja: '学校で 日本語を 勉強します。', vi: 'Tôi học tiếng Nhật ở trường.' },
        { ja: 'きのうは あつかったです。', vi: 'Hôm qua trời nóng.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: '(Bẫy に/で) Chọn trợ từ: Tôi đã mua cặp ở cửa hàng bách hóa.',
          sentence: 'デパート___ かばんを 買いました。',
          options: ['で', 'に', 'を', 'へ'],
          answerIndex: 0, explanationVi: 'Mua là HÀNH ĐỘNG diễn ra tại nơi đó → で (デパートで). に đánh dấu đích đến (デパートに 行きます) hoặc thời điểm, không đánh dấu nơi diễn ra hành động.',
        },
        {
          kind: 'particle', prompt: '(Bẫy に/で) Chọn trợ từ: Tôi rời nhà lúc 7 giờ.',
          sentence: '七時___ 家を 出ます。',
          options: ['に', 'で', 'と', 'が'],
          answerIndex: 0, explanationVi: 'THỜI ĐIỂM cụ thể → に (七時に). で đánh dấu nơi diễn ra hành động, không dùng cho mốc thời gian.',
        },
        {
          kind: 'error', prompt: '(Bẫy い-tính từ + です) Câu nào đúng?',
          options: ['きのうは あつかったです。', 'きのうは あついでした。', 'きのうは あついですでした。', 'きのうは あつくでした。'],
          answerIndex: 0, explanationVi: 'Tính từ い TỰ chia quá khứ (あつい → あつかった), です chỉ đứng phụ phía sau và giữ nguyên. Ba câu còn lại đều là các cách gắn です sai kinh điển trong đề.',
        },
        {
          kind: 'fill', prompt: '(Bẫy あります/います) Chọn từ đúng: Trong công viên có trẻ con.',
          sentence: 'こうえんに こどもが ___。',
          options: ['います', 'あります', 'です', 'わかります'],
          answerIndex: 0, explanationVi: 'こども là NGƯỜI (sinh vật động) → います. あります chỉ dùng cho đồ vật, thực vật, sự kiện.',
        },
        {
          kind: 'particle', prompt: '(Bẫy は/が) Chọn trợ từ: "Thư viện ở đâu?" — "Ngôi nhà trắng kia chính là thư viện."',
          sentence: '「としょかんは どこですか。」「あの 白い 建物___ としょかんです。」',
          options: ['が', 'は', 'を', 'に'],
          answerIndex: 0, explanationVi: 'Câu hỏi đã dùng は cho chủ đề; câu ĐÁP cung cấp thông tin mới "cái nào là thư viện" → が. Cặp は (hỏi) – が (đáp) xuất hiện rất nhiều trong đề.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Trước buổi thi thử',
      situationVi: 'Tối trước buổi thi thử của lớp, Linh hồi hộp hỏi Tanaka cách phân bổ thời gian làm bài.',
      lines: [
        { speaker: 'リン', ja: 'あした、クラスの 模擬しけんが ありますね。', vi: 'Mai lớp mình có bài thi thử nhỉ.' },
        { speaker: 'たなか', ja: 'そう。時間は 九十分で、もんだいは 全部で 三十もんです。', vi: 'Ừ. Thời gian 90 phút, tổng cộng 30 câu.' },
        { speaker: 'リン', ja: '九十分は みじかいですね。ちょっと こわいです。', vi: '90 phút ngắn quá. Sợ thật đấy.' },
        { speaker: 'たなか', ja: '大丈夫ですよ。まず、やさしい もんだいから してください。', vi: 'Không sao đâu. Trước hết hãy làm các câu dễ trước.' },
        { speaker: 'リン', ja: 'むずかしい もんだいは どうしますか。', vi: 'Còn câu khó thì xử lý thế nào?' },
        { speaker: 'たなか', ja: 'ときどき 見て、あとで 考えます。時間が なくなった ときは、すぐ 選んで ください。', vi: 'Thỉnh thoảng liếc qua, để suy nghĩ sau. Khi sắp hết giờ thì chọn ngay phương án.' },
        { speaker: 'リン', ja: 'まちがえる ことが こわいです。', vi: 'Tôi sợ trả lời sai.' },
        { speaker: 'たなか', ja: '答える まえに、もんだいを 二回 読んで ください。それから、車と 同じで、 注意が 大事です。', vi: 'Trước khi trả lời, hãy đọc đề hai lần. Và giống như với xe cộ vậy, sự cẩn thận là quan trọng nhất.' },
        { speaker: 'リン', ja: 'なるほど。今夜から れんしゅうします。ありがとう ございます。', vi: 'Ra thế. Tối nay tôi luyện ngay. Cảm ơn nhé.' },
      ],
    },
    {
      titleVi: 'Sau bài thi thử',
      situationVi: 'Sau khi biết kết quả thi thử, Linh kể hai lỗi sai kinh điển; Tanaka phân tích bẫy に/で và cách chia tính từ い.',
      lines: [
        { speaker: 'たなか', ja: '模擬しけんは どうでしたか。', vi: 'Bài thi thử thế nào rồi?' },
        { speaker: 'リン', ja: 'むずかしかったです。二つ まちがえました。', vi: 'Khó lắm. Tôi sai hai câu.' },
        { speaker: 'たなか', ja: 'どんな ところですか。', vi: 'Sai ở chỗ nào?' },
        { speaker: 'リン', ja: '「デパートに 買いました」を 選びました。', vi: 'Tôi đã chọn "デパートに 買いました".' },
        { speaker: 'たなか', ja: 'ああ、そこは「デパートで」ですね。「買いました」は 行動ですから、場所には「で」を 使います。', vi: 'À, chỗ đó phải là "デパートで". "Đã mua" là hành động nên nơi chốn dùng で.' },
        { speaker: 'リン', ja: 'それから、「きのうは あついでした」も 書きました。', vi: 'Rồi tôi còn viết "きのうは あついでした" nữa.' },
        { speaker: 'たなか', ja: 'い-adjの ときは「あつかったです」ですよ。ですは 変えません。', vi: 'Với tính từ い thì là "あつかったです" nhé. です không đổi.' },
        { speaker: 'リン', ja: 'なるほど。今夜から ノートで 覚えます。', vi: 'Ra thế. Tối nay tôi học lại theo vở.' },
        { speaker: 'たなか', ja: 'その 調子です。がんばって ください。', vi: 'Giữ thế ấy là được. Cố lên nhé.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'あしたは 銀行へ 行きます。それから、ゆうびんきょくへも 行きます。', meaningVi: 'Ngày mai tôi đến ngân hàng. Ngoài ra còn đến cả bưu điện.', choices: ['Ngày mai đến ngân hàng rồi đến cả bưu điện', 'Ngày mai chỉ đến ngân hàng', 'Ngày mai chỉ đến bưu điện', 'Hôm nay đã đến ngân hàng và bưu điện'], answerIndex: 0 },
    { scriptJa: '頭が 痛いですから、今日は 早く 帰ります。', meaningVi: 'Vì đau đầu nên hôm nay tôi về sớm.', choices: ['Vì đau đầu nên hôm nay về sớm', 'Vì đau đầu nên hôm nay xin nghỉ', 'Đau đầu nhưng vẫn làm đến tối', 'Mai sẽ đến bệnh viện'], answerIndex: 0 },
    { scriptJa: 'おんなのこは ふゆが いちばん すきです。', meaningVi: 'Bạn gái thích mùa đông nhất.', choices: ['Thích mùa đông nhất', 'Thích mùa hè nhất', 'Ghét mùa đông', 'Thích cả bốn mùa như nhau'], answerIndex: 0, dictation: true },
    { scriptJa: 'でんしゃが でるまで、ここで まって ください。', meaningVi: 'Xin hãy đợi ở đây cho đến khi tàu xuất phát.', choices: ['Đợi ở đây đến khi tàu chạy', 'Lên tàu ngay bây giờ', 'Đợi tàu chạy đến sân ga', 'Không cần đợi nữa'], answerIndex: 0, dictation: true },
    { scriptJa: 'まっすぐ 行って、二つ目の かどを 右に 曲がって ください。', meaningVi: 'Đi thẳng rồi rẽ phải ở góc phố thứ hai.', choices: ['Đi thẳng, rẽ phải ở góc thứ hai', 'Rẽ phải ở góc đầu tiên', 'Đi thẳng, rẽ trái ở góc thứ hai', 'Quay lại rồi rẽ phải'], answerIndex: 0 },
  ],
  reading: {
    titleVi: 'Bài đọc thi thử: Thông báo về cuộc thi hùng biện',
    lines: [
      { text: '学生の みなさんへ', vi: 'Gửi tất cả các bạn học sinh,' },
      { text: '来週の 土よう日に、日本語の スピーチ大会が あります。', vi: 'Thứ Bảy tuần sau sẽ có cuộc thi hùng biện tiếng Nhật.' },
      { text: '時間は 午前十時から 四時までです。', vi: 'Thời gian từ 10 giờ sáng đến 4 giờ chiều.' },
      { text: '場所は 三号館の 二階の 大きい 部屋です。', vi: 'Địa điểm là căn phòng lớn tầng 2, tòa nhà số 3.' },
      { text: 'スピーチは 五分ぐらいで、一人で 話します。', vi: 'Bài hùng biện dài khoảng 5 phút, thuyết trình một mình.' },
      { text: '出たい 人は、今週の 金よう日までに 先生に 申し込んで ください。', vi: 'Ai muốn tham gia hãy đăng ký với thầy cô trước thứ Sáu tuần này.' },
      { text: '賞品は 旅行の きっぷです。', vi: 'Giải thưởng là vé du lịch.' },
      { text: '質問が ある 人は、いつでも 先生に 聞いて ください。', vi: 'Ai có thắc mắc cứ hỏi thầy cô bất cứ lúc nào.' },
      { text: 'みなさんの 参加を 待っています。', vi: 'Chúng tôi mong chờ sự tham gia của các bạn.' },
    ],
    questions: [
      { questionVi: 'Cuộc thi hùng biện diễn ra khi nào, ở đâu?', choices: ['Thứ Bảy tuần sau, tòa nhà số 3 tầng 2', 'Thứ Bảy tuần này, tòa nhà số 2 tầng 3', 'Chủ nhật tuần sau, nhà văn hóa', 'Thứ Sáu tuần này, phòng học lớn'], answerIndex: 0, explanationVi: 'Dòng 2: 来週の 土よう日 (thứ Bảy tuần sau); dòng 4: 三号館の 二階 (tòa số 3, tầng 2) — câu hỏi ghép 2 mốc thông tin, đúng kiểu đề đọc hiểu.' },
      { questionVi: 'Mỗi bài hùng biện dài khoảng bao lâu và trình bày thế nào?', choices: ['Khoảng 5 phút, thuyết trình một mình', 'Khoảng 15 phút, theo nhóm hai người', 'Khoảng 50 phút, cả lớp cùng nói', 'Không quy định thời lượng'], answerIndex: 0, explanationVi: 'Dòng 5: スピーチは 五分ぐらいで、一人で 話します — 5 phút, một người.' },
      { questionVi: 'Người muốn tham gia phải làm gì?', choices: ['Đăng ký với thầy cô trước thứ Sáu tuần này', 'Nộp bài viết trước thứ Bảy tuần sau', 'Mua vé tham dự trước', 'Học thêm lớp hùng biện riêng'], answerIndex: 0, explanationVi: 'Dòng 6: 今週の 金よう日までに 先生に 申し込んで ください — "までに" là hạn chót, phải đăng ký xong trước thứ Sáu tuần này.' },
    ],
  },
  speakSentences: [
    { ja: '銀行は 何時から 何時までですか。', vi: 'Ngân hàng mở cửa từ mấy giờ đến mấy giờ ạ?' },
    { ja: '先生に しつもんを しました。', vi: 'Tôi đã hỏi thầy cô.' },
    { ja: '電車が 出るまで、ここで 待って ください。', vi: 'Xin hãy đợi ở đây đến khi tàu xuất phát.' },
    { ja: 'まっすぐ 行って、二つ目の かどを 右に 曲がって ください。', vi: 'Đi thẳng rồi rẽ phải ở góc phố thứ hai.' },
  ],
  translatePairs: [
    { ja: '銀行は 九時から 三時までです。', vi: 'Ngân hàng mở cửa từ 9 giờ đến 3 giờ.', tokens: ['銀行', 'は', '九時', 'から', '三時', 'まで', 'です'], distractors: ['四時'] },
    { ja: '先生に しつもんを しました。', vi: 'Tôi đã hỏi thầy cô.', tokens: ['先生', 'に', 'しつもん', 'を', 'しました'], distractors: ['おしえました'] },
    { ja: '頭が 痛いですから、今日は 早く 帰ります。', vi: 'Vì đau đầu nên hôm nay tôi về sớm.', tokens: ['頭', 'が', '痛いですから', '今日', 'は', '早く', '帰ります'], distractors: ['病院'] },
    { ja: '電車が 出るまで、ここで 待って ください。', vi: 'Xin hãy đợi ở đây đến khi tàu xuất phát.', tokens: ['電車', 'が', '出るまで', 'ここ', 'で', '待って', 'ください'], distractors: ['出て'] },
    { ja: '日本の きせつの 中で 冬が いちばん 好きです。', vi: 'Trong bốn mùa của Nhật Bản, tôi thích mùa đông nhất.', tokens: ['日本', 'の', 'きせつ', 'の', '中', 'で', '冬', 'が', 'いちばん', '好きです'], distractors: ['夏'] },
  ],
  kanji: ['時', '間', '読', '書'],
}
