/**
 * NihongoGo — Bài 13: Thể て & yêu cầu (〜てください).
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson13: CurriculumLesson = {
  order: 13,
  slug: 'l13-the-te-yeu-cau',
  title: 'Thể て & yêu cầu — 〜てください',
  titleJa: 'て形と依頼',
  description: 'Chia động từ sang thể て và dùng nó để đưa ra yêu cầu lịch sự.',
  learningObjectives: [
    'Chia thể て cho các nhóm động từ',
    'Đưa yêu cầu với 〜てください',
    'Mô tả chuỗi hành động liên tiếp',
  ],
  grammarTopics: ['Quy tắc chia thể て', '〜てください (đề nghị làm)'],
  vocabularyTopics: ['Chỉ dẫn và cách làm', 'Động từ thao tác (mở, đóng, đặt...)'],
  kanjiTopics: ['Kanji học tập (書・読・話)'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: '書きます', reading: 'かきます', romaji: 'kakimasu', meaningVi: 'viết', pos: 'động từ nhóm 1', exampleJa: 'ともだちに てがみを 書きます。', exampleVi: 'Tôi viết thư cho bạn.' },
    { term: '読みます', reading: 'よみます', romaji: 'yomimasu', meaningVi: 'đọc', pos: 'động từ nhóm 1', exampleJa: 'まいにち ほんを 読みます。', exampleVi: 'Mỗi ngày tôi đọc sách.' },
    { term: '話します', reading: 'はなします', romaji: 'hanashimasu', meaningVi: 'nói, trò chuyện', pos: 'động từ nhóm 1', exampleJa: 'がっこうで せんせいと 話します。', exampleVi: 'Ở trường tôi trò chuyện với thầy giáo.' },
    { term: 'ききます', romaji: 'kikimasu', meaningVi: 'nghe', pos: 'động từ nhóm 1', exampleJa: 'うちで おんがくを ききます。', exampleVi: 'Ở nhà tôi nghe nhạc.' },
    { term: 'おしえます', romaji: 'oshiemasu', meaningVi: 'dạy, chỉ cho', pos: 'động từ nhóm 2', exampleJa: 'せんせいは かんじを おしえます。', exampleVi: 'Thầy giáo dạy chữ Hán.' },
    { term: 'みせます', romaji: 'misemasu', meaningVi: 'cho xem, đưa xem', pos: 'động từ nhóm 2', exampleJa: 'ともだちに しゃしんを みせます。', exampleVi: 'Tôi cho bạn xem ảnh.' },
    { term: 'あけます', romaji: 'akemasu', meaningVi: 'mở', pos: 'động từ nhóm 2', exampleJa: 'あさ、まどを あけます。', exampleVi: 'Buổi sáng tôi mở cửa sổ.' },
    { term: 'しめます', romaji: 'shimemasu', meaningVi: 'đóng', pos: 'động từ nhóm 2', exampleJa: 'よる、ドアを しめます。', exampleVi: 'Buổi tối tôi đóng cửa.' },
    { term: 'つけます', romaji: 'tsukemasu', meaningVi: 'bật (máy, đèn)', pos: 'động từ nhóm 2', exampleJa: 'うちで テレビを つけます。', exampleVi: 'Ở nhà tôi bật tivi.' },
    { term: 'けします', romaji: 'keshimasu', meaningVi: 'tắt (máy, đèn)', pos: 'động từ nhóm 1', exampleJa: 'せんせいは でんきを けします。', exampleVi: 'Thầy giáo tắt đèn.' },
    { term: 'おします', romaji: 'oshimasu', meaningVi: 'bấm, đẩy', pos: 'động từ nhóm 1', exampleJa: 'テレビの ボタンを おします。', exampleVi: 'Tôi bấm nút tivi.' },
    { term: 'すわります', romaji: 'suwarimasu', meaningVi: 'ngồi', pos: 'động từ nhóm 1', exampleJa: 'いすに すわります。', exampleVi: 'Tôi ngồi vào ghế.' },
    { term: 'とめます', romaji: 'tomemasu', meaningVi: 'đỗ (xe)', pos: 'động từ nhóm 2', exampleJa: 'こうえんの まえで じてんしゃを とめます。', exampleVi: 'Tôi đỗ xe đạp trước công viên.' },
    { term: 'いれます', romaji: 'iremasu', meaningVi: 'pha (đồ uống)', pos: 'động từ nhóm 2', exampleJa: 'あさ、コーヒーを いれます。', exampleVi: 'Buổi sáng tôi pha cà phê.' },
    { term: 'まど', romaji: 'mado', meaningVi: 'cửa sổ', pos: 'danh từ', exampleJa: 'まどを あけて ください。', exampleVi: 'Xin hãy mở cửa sổ.' },
    { term: 'ドア', romaji: 'doa', meaningVi: 'cửa (ra vào)', pos: 'danh từ', exampleJa: 'ドアを しめます。', exampleVi: 'Tôi đóng cửa.' },
    { term: 'でんき', romaji: 'denki', meaningVi: 'đèn, điện', pos: 'danh từ', exampleJa: 'でんきを つけて ください。', exampleVi: 'Xin hãy bật đèn.' },
    { term: 'ボタン', romaji: 'botan', meaningVi: 'nút bấm', pos: 'danh từ', exampleJa: 'この ボタンを おして ください。', exampleVi: 'Xin hãy bấm nút này.' },
    { term: 'てがみ', romaji: 'tegami', meaningVi: 'thư, bức thư', pos: 'danh từ', exampleJa: 'こんど、てがみを 書きます。', exampleVi: 'Dịp tới tôi viết thư.' },
    { term: 'なまえ', romaji: 'namae', meaningVi: 'tên', pos: 'danh từ', exampleJa: 'ここに なまえを 書いて ください。', exampleVi: 'Hãy viết tên vào đây.' },
    { term: 'ゆっくり', romaji: 'yukkuri', meaningVi: 'chậm rãi', pos: 'phó từ', exampleJa: 'ゆっくり 話して ください。', exampleVi: 'Xin hãy nói chậm rãi.' },
    { term: 'もういちど', romaji: 'mō ichido', meaningVi: 'một lần nữa', pos: 'phó từ', exampleJa: 'もういちど 話して ください。', exampleVi: 'Xin hãy nói lại một lần nữa.' },
  ],
  grammar: [
    {
      code: 'l13-te-form-group1',
      title: 'Thể て nhóm 1 — んで・って・いて・して',
      formation: 'Gốc nhóm 1 (bỏ ます) đổi âm cuối: み/び/に→んで, ち/り/い→って, き→いて, し→して',
      explanationVi:
        'Động từ nhóm 1 chia thể て theo âm cuối của gốc: kết thúc み・び・に thì đổi thành んで (のみます→のんで, あそびます→あそんで, しにます...); kết thúc ち・り・い thì thành って (まちます→まって, かえります→かえって, かいます→かって); kết thúc き thì thành いて (かきます→かいて, ききます→きいて) — ngoại lệ quan trọng: 行きます→行って; kết thúc し thì thành して (はなします→はなして). Thể て đứng ở giữa câu để nối chuỗi hành động: A て、B ます = làm A rồi làm B.',
      examples: [
        { ja: 'うちへ 帰って、ばんごはんを 食べます。', vi: 'Tôi về nhà rồi ăn tối.', tokens: ['うち', 'へ', '帰って', 'ばんごはん', 'を', '食べます'] },
        { ja: 'デパートで くつを 買って、こうえんへ 行きました。', vi: 'Tôi mua giày ở cửa hàng bách hóa rồi đi công viên.' },
        { ja: 'きのう、えきで ともだちを まって、いっしょに えいがを 見ました。', vi: 'Hôm qua tôi đợi bạn ở nhà ga rồi cùng xem phim.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'Chia 「帰ります」 (về) sang thể て',
          sentence: 'うちへ ___、ばんごはんを 食べます。',
          options: ['帰って', '帰いて', '帰りて', '帰んで'],
          answerIndex: 0, explanationVi: '帰います (nhóm 1) có gốc kết thúc âm え → って: 帰って. 帰いて/帰りて không phải dạng đúng.',
        },
        {
          kind: 'conjugate', prompt: 'Chia 「飲みます」 (uống) sang thể て',
          sentence: 'ジュースを ___、ケーキを 食べます。',
          options: ['飲みて', '飲んて', '飲んで', '飲いて'],
          answerIndex: 2, explanationVi: 'Gốc kết thúc み → んで: 飲んで. Lưu ý nhỏ っ trong 飲って chỉ dùng cho âm ち/り/い.',
        },
        {
          kind: 'conjugate', prompt: 'Chia 「ききます」 (nghe) sang thể て',
          sentence: 'おんがくを ___、まんがを 読みます。',
          options: ['きいて', 'きって', 'ききて', 'きいで'],
          answerIndex: 0, explanationVi: 'Gốc kết thúc き → いて: きいて. Cẩn thận: きって là thể て của động từ kết thúc ち/り (như まちます→まって).',
        },
        {
          kind: 'choice', prompt: 'Thể て của 「行きます」 (đi) là gì?',
          options: ['行いて', '行って', '行きて', '行んて'],
          answerIndex: 1, explanationVi: '行きます là NGOẠI LỆ duy nhất của nhóm き: 行って (không phải 行いて). Đây là một trong những từ thông dụng nhất nên cần nhớ riêng.',
        },
      ],
    },
    {
      code: 'l13-te-form-group23',
      title: 'Thể て nhóm 2 & nhóm 3 — て・して・来て',
      formation: 'Nhóm 2: bỏ ます + て; Nhóm 3: します→して, 来ます→来て',
      explanationVi:
        'Thể て của nhóm 2 rất dễ: chỉ cần bỏ ます rồi thêm て (たべます→たべて, あけます→あけて, みせます→みせて). Nhóm 3 chỉ có 2 động từ: します→して và 来ます→来て (きます→きて). Vì nhóm 2 và 3 không đổi âm nên nếu thấy một động từ lạ, hãy thử nhớ nhóm của nó: đổi được bằng cách bỏ ます là nhóm 2. Thể て nối hành động: あけて、見ます = mở ra rồi xem.',
      examples: [
        { ja: 'テレビを つけて、ドラマを 見ます。', vi: 'Tôi bật tivi rồi xem phim truyền hình.', tokens: ['テレビ', 'を', 'つけて', 'ドラマ', 'を', '見ます'] },
        { ja: 'まどを あけて、こうえんを 見ます。', vi: 'Tôi mở cửa sổ rồi ngắm công viên.' },
        { ja: 'きのう、こうえんを さんぽして、しゃしんを とりました。', vi: 'Hôm qua tôi đi dạo ở công viên rồi chụp ảnh.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'Chia 「あけます」 (mở) sang thể て',
          sentence: 'まどを ___、こうえんを 見ます。',
          options: ['あけて', 'あけって', 'あけんで', 'あけいて'],
          answerIndex: 0, explanationVi: 'あけます là động từ NHÓM 2: bỏ ます thêm て → あけて. Các dạng って/んで/いて chỉ dùng cho nhóm 1.',
        },
        {
          kind: 'fill', prompt: 'Điền thể て của 「みせます」 (cho xem)',
          sentence: 'ともだちに しゃしんを ___、はなします。',
          options: ['みせって', 'みせて', 'みせんで', 'みせいて'],
          answerIndex: 1, explanationVi: 'みせます thuộc nhóm 2 → みせて. Nhóm 2 không bao giờ có 音便 んで/って/いて.',
        },
        {
          kind: 'conjugate', prompt: 'Chia 「さんぽします」 (đi dạo) sang thể て',
          sentence: 'こうえんを ___、うちへ 帰ります。',
          options: ['さんぽって', 'さんぽんで', 'さんぽして', 'さんぽいて'],
          answerIndex: 2, explanationVi: 'さんぽします là động từ NHÓM 3 (します + danh từ): します → して nên さんぽします → さんぽして.',
        },
        {
          kind: 'error', prompt: '「Bạn tôi đến nhà tôi rồi nghe nhạc。」 câu nào đúng?',
          options: ['ともだちが うちへ 来て、おんがくを ききます。', 'ともだちが うちへ 来って、おんがくを ききます。', 'ともだちが うちへ 来いて、おんがくを ききます。', 'ともだちが うちへ 来ますて、おんがくを ききます。'],
          answerIndex: 0, explanationVi: '来ます (nhóm 3) → 来て. 来って/来いて/来ますて đều sai — nhóm 3 phải thuộc lòng: して và 来て.',
        },
      ],
    },
    {
      code: 'l13-te-kudasai',
      title: '〜てください — yêu cầu lịch sự',
      formation: 'Thể て + ください',
      explanationVi:
        'Muốn nhờ ai đó làm gì một cách lịch sự, lấy thể て của động từ rồi thêm ください: 待って ください (xin đợi), 話して ください (xin hãy nói), 書いて ください (xin hãy viết). Có thể thêm すみません ở đầu cho lịch sự hơn, hoặc もういちど (một lần nữa), ゆっくり (chậm rãi) để làm rõ nội dung yêu cầu. Đây là mẫu câu dùng rất nhiều khi hỏi đường, nhờ giúp đỡ hay trong lớp học.',
      examples: [
        { ja: 'ちょっと 待って ください。', vi: 'Xin đợi một chút.', tokens: ['ちょっと', '待って', 'ください'] },
        { ja: 'ゆっくり 話して ください。', vi: 'Xin hãy nói chậm rãi.' },
        { ja: 'ここに なまえを 書いて ください。', vi: 'Hãy viết tên vào đây.' },
        { ja: 'もういちど 話して ください。', vi: 'Xin hãy nói lại một lần nữa.' },
      ],
      drills: [
        {
          kind: 'fill', prompt: 'Hoàn thành yêu cầu «Xin hãy mở cửa sổ»',
          sentence: 'すみません、まどを ___ ください。',
          options: ['あけて', 'あけって', 'あけます', 'あけました'],
          answerIndex: 0, explanationVi: 'Trước ください phải là THỂ て: あけます (nhóm 2) → あけて. あけます/あけました là các thể khác, không dùng được ở đây.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ (xin hãy nghe lại bản nhạc này)',
          sentence: 'もういちど この おんがく___ きいて ください。',
          options: ['を', 'に', 'へ', 'と'],
          answerIndex: 0, explanationVi: 'おんがく là tân ngữ của hành động "nghe" → を. に chỉ thời điểm/đích, へ chỉ hướng đi, と chỉ người cùng làm.',
        },
        {
          kind: 'choice', prompt: '「ゆっくり 話して ください。」 có nghĩa là gì?',
          options: ['Xin hãy nói chậm rãi', 'Xin hãy đọc chậm rãi', 'Xin hãy nói to hơn', 'Mình cùng trò chuyện nhé'],
          answerIndex: 0, explanationVi: 'ゆっくり = chậm rãi, 話して ください = xin hãy nói. Câu "mời cùng làm" là 〜ましょう, "xin hãy đọc" là 読んで ください.',
        },
        {
          kind: 'error', prompt: '「Hãy tắt đèn nhé。」 câu nào đúng?',
          options: ['でんきを けして ください。', 'でんきを けって ください。', 'でんきを けしんで ください。', 'でんきを けして くださいです。'],
          answerIndex: 0, explanationVi: 'けします (nhóm 1, gốc kết thúc し) → けして + ください. けって/けしんで sai âm便, còn くださいです là dạng thừa không tồn tại.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Trong giờ tiếng Nhật',
      situationVi: 'Linh nhờ thầy giáo nói chậm và chỉ thêm một chữ Hán.',
      lines: [
        { speaker: 'リン', ja: 'すみません、せんせい。', vi: 'Thưa thầy, cho em hỏi ạ.' },
        { speaker: 'せんせい', ja: 'はい、なんですか。', vi: 'Ừ, có gì nào?' },
        { speaker: 'リン', ja: 'ゆっくり 話して ください。', vi: 'Thầy nói chậm lại giúp em ạ.' },
        { speaker: 'せんせい', ja: 'あ、はい。わかりました。', vi: 'À, được rồi.' },
        { speaker: 'リン', ja: 'それから、この かんじを おしえて ください。', vi: 'Và thầy dạy giúp em chữ Hán này ạ.' },
        { speaker: 'せんせい', ja: 'いいですよ。よく 見て ください。', vi: 'Được nhé. Em nhìn cho kỹ nhé.' },
        { speaker: 'リン', ja: 'ああ、そうですか。ありがとうございます。', vi: 'À, ra vậy. Em cảm ơn thầy.' },
        { speaker: 'せんせい', ja: 'ここに なまえを 書いて ください。', vi: 'Em viết tên vào chỗ này nhé.' },
        { speaker: 'リン', ja: 'はい、書きます。', vi: 'Vâng, em viết ạ.' },
      ],
    },
    {
      titleVi: 'Chụp ảnh ở công viên',
      situationVi: 'Cuối tuần, Linh nhờ Tanaka chụp ảnh giúp mình.',
      lines: [
        { speaker: 'リン', ja: 'たなかさん、すみません。しゃしんを とって ください。', vi: 'Tanaka ơi, làm ơn chụp giúp mình tấm ảnh.' },
        { speaker: 'たなか', ja: 'いいですよ。その いすに すわって ください。', vi: 'Được chứ. Bạn ngồi lên chiếc ghế ấy đi.' },
        { speaker: 'リン', ja: 'はい。', vi: 'Vâng.' },
        { speaker: 'たなか', ja: 'ちょっと 待って ください。…とりますよ。', vi: 'Đợi một chút nhé.… Chụp đây.' },
        { speaker: 'たなか', ja: 'はい、とりました。いい しゃしんですね。', vi: 'Xong, chụp rồi. Ảnh đẹp đấy nhé.' },
        { speaker: 'リン', ja: 'ありがとうございます。見せて ください。', vi: 'Cảm ơn bạn. Cho mình xem với.' },
        { speaker: 'たなか', ja: 'はい、これです。', vi: 'Đây này.' },
        { speaker: 'リン', ja: 'わあ、きれいですね。', vi: 'Ồ, đẹp thật đấy.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'まどを あけて ください。', meaningVi: 'Xin hãy mở cửa sổ.', choices: ['Xin hãy mở cửa sổ', 'Xin hãy đóng cửa sổ', 'Cửa sổ đang mở', 'Xin hãy bật đèn'], answerIndex: 0, dictation: true },
    { scriptJa: 'もういちど ゆっくり 話して ください。', meaningVi: 'Xin hãy nói chậm lại một lần nữa.', choices: ['Xin hãy nói to thêm một lần nữa', 'Xin hãy viết chậm lại một lần nữa', 'Xin hãy nói chậm lại một lần nữa', 'Xin hãy nghe lại một lần nữa'], answerIndex: 2 },
    { scriptJa: 'ここに なまえを 書いて ください。', meaningVi: 'Hãy viết tên vào đây.', choices: ['Hãy đọc tên ở đây', 'Hãy viết tên vào đây', 'Hãy nói tên của mình', 'Hãy viết thư ở đây'], answerIndex: 1, dictation: true },
    { scriptJa: 'でんきを けして、ドアを しめて ください。', meaningVi: 'Hãy tắt đèn và đóng cửa nhé.', choices: ['Hãy tắt đèn và đóng cửa nhé', 'Hãy bật đèn và mở cửa nhé', 'Hãy tắt đèn và mở cửa nhé', 'Hãy bật đèn và đóng cửa nhé'], answerIndex: 0 },
    { scriptJa: 'じてんしゃを ここに とめて ください。', meaningVi: 'Hãy đỗ xe đạp ở đây nhé.', choices: ['Hãy mua xe đạp ở đây nhé', 'Xin đừng đỗ xe đạp ở đây', 'Hãy đỗ xe đạp ở đây nhé', 'Hãy đưa xe đạp vào đây'], answerIndex: 2 },
  ],
  reading: {
    titleVi: 'Chủ nhật của Linh',
    lines: [
      { text: 'きょうは にちようびです。', vi: 'Hôm nay là Chủ nhật.' },
      { text: 'あさ、起きて、コーヒーを のみます。', vi: 'Buổi sáng tôi dậy rồi uống cà phê.' },
      { text: '九じに でんしゃで こうえんへ 行きます。', vi: '9 giờ tôi đến công viên bằng tàu điện.' },
      { text: 'こうえんで ともだちに 会います。', vi: 'Ở công viên tôi gặp bạn.' },
      { text: 'ともだちと 話して、さんぽします。', vi: 'Tôi trò chuyện cùng bạn rồi đi dạo.' },
      { text: 'こうえんで しゃしんも とります。', vi: 'Ở công viên tôi còn chụp ảnh nữa.' },
      { text: 'ごご、うちへ 帰って、ほんを 読みます。', vi: 'Buổi chiều tôi về nhà rồi đọc sách.' },
      { text: 'よる、まどを あけて、おんがくを ききます。', vi: 'Buổi tối tôi mở cửa sổ rồi nghe nhạc.' },
    ],
    questions: [
      { questionVi: 'Buổi sáng, sau khi dậy Linh làm gì?', choices: ['Ăn tối', 'Uống cà phê', 'Nghe nhạc', 'Đọc sách'], answerIndex: 1, explanationVi: 'Dòng 2: あさ、起きて、コーヒーを のみます — dậy rồi UỐNG CÀ PHÊ.' },
      { questionVi: 'Linh đi công viên bằng phương tiện nào?', choices: ['Xe buýt', 'Đi bộ', 'Tàu điện', 'Xe đạp'], answerIndex: 2, explanationVi: 'Dòng 3: でんしゃで こうえんへ 行きます — đi bằng TÀU ĐIỆN (でんしゃ).' },
      { questionVi: 'Buổi chiều, sau khi về nhà Linh làm gì?', choices: ['Nghe nhạc', 'Đọc sách', 'Uống cà phê', 'Gặp bạn'], answerIndex: 1, explanationVi: 'Dòng 7: うちへ 帰って、ほんを 読みます — về nhà rồi ĐỌC SÁCH.' },
    ],
  },
  speakSentences: [
    { ja: 'ちょっと 待って ください。', vi: 'Xin đợi một chút.' },
    { ja: 'ゆっくり 話して ください。', vi: 'Xin hãy nói chậm rãi.' },
    { ja: 'ここに なまえを 書いて ください。', vi: 'Hãy viết tên vào đây.' },
    { ja: 'まどを あけて ください。', vi: 'Hãy mở cửa sổ nhé.' },
  ],
  translatePairs: [
    { ja: 'まどを あけて ください。', vi: 'Hãy mở cửa sổ nhé.', tokens: ['まど', 'を', 'あけて', 'ください'], distractors: ['しめて', 'ます'] },
    { ja: 'ゆっくり 話して ください。', vi: 'Xin hãy nói chậm rãi.', tokens: ['ゆっくり', '話して', 'ください'], distractors: ['読んで', 'もういちど'] },
    { ja: 'うちへ 帰って、ばんごはんを 食べます。', vi: 'Tôi về nhà rồi ăn tối.', tokens: ['うち', 'へ', '帰って', 'ばんごはん', 'を', '食べます'], distractors: ['行って', '飲みます'] },
    { ja: 'でんきを けして ください。', vi: 'Hãy tắt đèn nhé.', tokens: ['でんき', 'を', 'けして', 'ください'], distractors: ['つけて', 'します'] },
  ],
  kanji: ['書', '読', '話'],
}
