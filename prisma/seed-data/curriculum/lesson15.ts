/**
 * NihongoGo — Bài 15: Cho phép & cấm (〜てもいいですか・〜てはいけません).
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson15: CurriculumLesson = {
  order: 15,
  slug: 'l15-cho-phep-cam',
  title: 'Cho phép & cấm — 〜てもいい・〜てはいけない',
  titleJa: '許可と禁止',
  description: 'Xin phép làm gì và nêu điều bị cấm ở trường học, nơi công cộng.',
  learningObjectives: [
    'Xin phép với 〜てもいいですか',
    'Nêu điều cấm với 〜てはいけません',
    'Đọc hiểu nội quy cơ bản',
  ],
  grammarTopics: ['〜てもいいですか (được phép)', '〜てはいけません (bị cấm)'],
  vocabularyTopics: ['Nội quy và quy định', 'Câu hỏi xin phép'],
  kanjiTopics: ['Kanji biển báo & quy tắc (入・立・止)'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: '入ります', reading: 'はいります', romaji: 'hairimasu', meaningVi: 'đi vào', pos: 'động từ nhóm 1', exampleJa: '九じに きょうしつに 入ります。', exampleVi: '9 giờ tôi đi vào lớp học.' },
    { term: '出ます', reading: 'でます', romaji: 'demasu', meaningVi: 'đi ra', pos: 'động từ nhóm 2', exampleJa: 'ごご 五じに がっこうを 出ます。', exampleVi: '5 giờ chiều tôi ra khỏi trường.' },
    { term: '立ちます', reading: 'たちます', romaji: 'tachimasu', meaningVi: 'đứng, đứng dậy', pos: 'động từ nhóm 1', exampleJa: 'いすの となりに 立ちます。', exampleVi: 'Tôi đứng cạnh chiếc ghế.' },
    { term: '止まります', reading: 'とまります', romaji: 'tomarimasu', meaningVi: '(xe) dừng lại', pos: 'động từ nhóm 1', exampleJa: 'バスは えきの まえで 止まります。', exampleVi: 'Xe buýt dừng trước nhà ga.' },
    { term: 'すいます', romaji: 'suimasu', meaningVi: 'hút (thuốc)', pos: 'động từ nhóm 1', exampleJa: 'かいしゃの まえで たばこを すいます。', exampleVi: 'Tôi hút thuốc trước công ty.' },
    { term: 'さわります', romaji: 'sawarimasu', meaningVi: 'chạm vào, vuốt', pos: 'động từ nhóm 1', exampleJa: 'こうえんの いぬに さわります。', exampleVi: 'Tôi vuốt con chó ở công viên.' },
    { term: 'ぬぎます', romaji: 'nugimasu', meaningVi: 'cởi (giày, mũ)', pos: 'động từ nhóm 1', exampleJa: 'うちで くつを ぬぎます。', exampleVi: 'Ở nhà tôi cởi giày.' },
    { term: '出します', reading: 'だします', romaji: 'dashimasu', meaningVi: 'lấy ra, nộp', pos: 'động từ nhóm 1', exampleJa: 'きょうかしょを かばんから 出します。', exampleVi: 'Tôi lấy sách giáo khoa ra khỏi cặp.' },
    { term: 'かります', romaji: 'karimasu', meaningVi: 'mượn', pos: 'động từ nhóm 1', exampleJa: 'としょかんで ほんを かります。', exampleVi: 'Tôi mượn sách ở thư viện.' },
    { term: 'たばこ', romaji: 'tabako', meaningVi: 'thuốc lá', pos: 'danh từ', exampleJa: 'ここで たばこを すっては いけません。', exampleVi: 'Không được hút thuốc ở đây.' },
    { term: 'きょうしつ', romaji: 'kyōshitsu', meaningVi: 'lớp học', pos: 'danh từ', exampleJa: 'せんせいは きょうしつに 入ります。', exampleVi: 'Thầy giáo đi vào lớp học.' },
    { term: 'きょうかしょ', romaji: 'kyōkasho', meaningVi: 'sách giáo khoa', pos: 'danh từ', exampleJa: 'せんせいは きょうかしょを みせます。', exampleVi: 'Thầy giáo đưa sách giáo khoa cho xem.' },
    { term: 'みず', romaji: 'mizu', meaningVi: 'nước', pos: 'danh từ', exampleJa: 'この みずを のんでも いいですか。', exampleVi: 'Uống nước này được không?' },
    { term: 'けいたいでんわ', romaji: 'keitaidenwa', meaningVi: 'điện thoại di động', pos: 'danh từ', exampleJa: 'きょうしつで けいたいでんわを つかっては いけません。', exampleVi: 'Không được dùng điện thoại di động trong lớp.' },
    { term: 'エレベーター', romaji: 'erebētā', meaningVi: 'thang máy', pos: 'danh từ', exampleJa: 'エレベーターを つかっても いいですか。', exampleVi: 'Dùng thang máy được không?' },
    { term: 'くすり', romaji: 'kusuri', meaningVi: 'thuốc (uống)', pos: 'danh từ', exampleJa: 'くすりを のんでも いいですか。', exampleVi: 'Uống thuốc được không?' },
    { term: 'おべんとう', romaji: 'obentō', meaningVi: 'cơm hộp', pos: 'danh từ', exampleJa: 'こうえんで おべんとうを 食べます。', exampleVi: 'Tôi ăn cơm hộp ở công viên.' },
    { term: 'こえ', romaji: 'koe', meaningVi: 'giọng, tiếng nói', pos: 'danh từ', exampleJa: '大きい こえで 話しては いけません。', exampleVi: 'Không được nói chuyện to giọng.' },
    { term: 'どうぞ', romaji: 'dōzo', meaningVi: 'mời (lời đáp cho phép)', pos: 'phó từ', exampleJa: 'はい、どうぞ。エレベーターを つかって ください。', exampleVi: 'Vâng, mời bạn. Hãy dùng thang máy.' },
  ],
  grammar: [
    {
      code: 'l15-te-mo-ii-desu-ka',
      title: '〜ても いいですか — xin phép làm gì',
      formation: 'Thể て + も + いいですか',
      explanationVi:
        'Muốn xin phép làm việc gì đó, lấy thể て của động từ (đã học ở bài 13) thêm も và いいですか: とっても いいですか (chụp được không?), はいっても いいですか (vào được không?). Lưu ý: thiếu も thì câu sai — phải là 〜ても いいですか. Khi trả lời cho phép nói: はい、いいですよ / はい、どうぞ; khi từ chối nói: すみません、ちょっと… hoặc dùng mẫu cấm 〜ては いけません ở phần sau. Thêm すみません ở đầu câu để lịch sự hơn.',
      examples: [
        { ja: 'ここで しゃしんを とっても いいですか。', vi: 'Tôi chụp ảnh ở đây được không?', tokens: ['ここ', 'で', 'しゃしん', 'を', 'とっても', 'いいですか'] },
        { ja: 'トイレへ 行っても いいですか。', vi: 'Tôi đi nhà vệ sinh được không ạ?' },
        { ja: 'すみません、エレベーターを つかっても いいですか。', vi: 'Xin hỏi tôi dùng thang máy được không?' },
        { ja: 'はい、どうぞ。', vi: 'Vâng, mời bạn.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'Xin phép chụp ảnh: chia 「とります」 rồi hoàn thành câu',
          sentence: 'ここで しゃしんを ___ いいですか。',
          options: ['とっても', 'とって', 'とってもって', 'とりても'],
          answerIndex: 0, explanationVi: 'Mẫu xin phép = thể て + も + いいですか: とります (nhóm 1) → とって + も → とっても.',
        },
        {
          kind: 'conjugate', prompt: 'Chia 「入ります」 (nhóm 1) để xin phép vào lớp học',
          sentence: 'きょうしつに ___ いいですか。',
          options: ['入って', '入っても', '入っては', '入りても'],
          answerIndex: 1, explanationVi: '入ります có gốc kết thúc り → って: 入って, rồi thêm も → 入っても いいですか. 入っては là mẫu cấm (ては いけません).',
        },
        {
          kind: 'choice', prompt: '「トイレへ 行っても いいですか。」 là câu gì?',
          options: ['Xin phép đi nhà vệ sinh', 'Bị cấm vào nhà vệ sinh', 'Hỏi nhà vệ sinh ở đâu', 'Mời vào nhà vệ sinh'],
          answerIndex: 0, explanationVi: '行っても いいですか = xin phép đi. Câu hỏi vị trí là トイレは どこですか; mẫu cấm là 〜ては いけません.',
        },
        {
          kind: 'error', prompt: '「Tôi được đọc sách ở đây không?」 câu nào đúng?',
          options: ['ここで ほんを 読んでも いいですか。', 'ここで ほんを 読んで いいですか。', 'ここで ほんを 読むても いいですか。', 'ここで ほんを 読みても いいですか。'],
          answerIndex: 0, explanationVi: '読みます → 読んで (み→んで) + も → 読んでも いいですか. Thiếu も (chọn 2) là sai; 読むて/読みて không phải thể て đúng.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ (uống nước này được không?)',
          sentence: 'この みず___ のんでも いいですか。',
          options: ['を', 'に', 'へ', 'で'],
          answerIndex: 0, explanationVi: 'みず là tân ngữ của のみます → を. へ/に chỉ hướng hoặc đích đến, で chỉ nơi diễn ra hành động.',
        },
        {
          kind: 'choice', prompt: 'Bạn xin phép mở cửa sổ. Câu trả lời CHO PHÉP đúng là?',
          options: ['はい、いいですよ。', 'いいえ、いいですよ。', 'はい、いけません。', 'はい、ちょっと…'],
          answerIndex: 0, explanationVi: 'はい、いいですよ = "vâng, được nhé". いいえ + いい mâu thuẫn; いけません là từ chối; すみません、ちょっと… là từ chối nhẹ nhàng chứ không cho phép.',
        },
      ],
    },
    {
      code: 'l15-te-wa-ikemasen',
      title: '〜ては いけません — điều cấm, nội quy',
      formation: 'Thể て + は + いけません',
      explanationVi:
        'Muốn nói điều BỊ CẤM (nội quy trường học, nơi công cộng), lấy thể て thêm は và いけません: すっては いけません (cấm hút thuốc), つかっては いけません (cấm sử dụng). Mẫu này mạnh hơn và mang tính quy định hơn 〜ないでください (lời nhắc nhẹ — học ở bài sau). Trên biển báo thường thấy chữ 禁止 (cấm): 立ち入り禁止 (cấm vào). Câu hỏi "có được không?" là 〜ても いいですか, còn khẳng định nội quy cấm là 〜ては いけません — hai mẫu này luôn đi cặp với nhau.',
      examples: [
        { ja: 'きょうしつで けいたいでんわを つかっては いけません。', vi: 'Trong lớp học không được dùng điện thoại di động.', tokens: ['きょうしつ', 'で', 'けいたいでんわ', 'を', 'つかっては', 'いけません'] },
        { ja: 'ここで たばこを すっては いけません。', vi: 'Không được hút thuốc ở đây.', tokens: ['ここ', 'で', 'たばこ', 'を', 'すっては', 'いけません'] },
        { ja: '大きい こえで 話しては いけません。', vi: 'Không được nói chuyện to giọng.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'Nêu điều cấm: chia 「すいます」 (hút thuốc)',
          sentence: 'ここで たばこを ___ いけません。',
          options: ['すっては', 'すっても', 'すって', 'すみては'],
          answerIndex: 0, explanationVi: 'Mẫu cấm = thể て + は + いけません: すいます → すって + は → すっては いけません. すっても là mẫu xin phép.',
        },
        {
          kind: 'error', prompt: '「Trong lớp không được dùng điện thoại di động。」 câu nào đúng?',
          options: ['きょうしつで けいたいでんわを つかっては いけません。', 'きょうしつで けいたいでんわを つかっても いけません。', 'きょうしつで けいたいでんわを つかって いけません。', 'きょうしつで けいたいでんわを つかいては いけません。'],
          answerIndex: 0, explanationVi: 'Cấm = て + は + いけません, thiếu は là sai. つかっても いけません sai nghĩa (も dành cho xin phép), つかいて không phải thể て của つかいます.',
        },
        {
          kind: 'choice', prompt: '「ここに じてんしゃを とめては いけません。」 có nghĩa là gì?',
          options: ['Không được đỗ xe đạp ở đây', 'Được phép đỗ xe đạp ở đây', 'Xin phép đỗ xe đạp ở đây', 'Không được đi xe đạp ở đây'],
          answerIndex: 0, explanationVi: 'とめては いけません = điều cấm "không được đỗ xe". Xin phép là とめても いいですか; mẫu này không cấm việc ĐI xe đạp.',
        },
        {
          kind: 'fill', prompt: 'Nội quy hồ bơi: điền dạng đúng của 「とります」 (không được chụp ảnh)',
          sentence: 'プールで しゃしんを ___は いけません。',
          options: ['とって', 'とっても', 'とります', 'とまして'],
          answerIndex: 0, explanationVi: 'とります (nhóm 1, り→って) → とって + は → とっては いけません. Chỗ trống đã có は nên chỉ cần thể て.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ (nơi diễn ra hành động bị cấm)',
          sentence: 'きょうしつ___ けいたいでんわを つかっては いけません。',
          options: ['で', 'に', 'を', 'へ'],
          answerIndex: 0, explanationVi: 'Nơi DIỄN RA hành động dùng で (đã học bài 5). に chỉ đích đến của 入ります; を đánh dấu tân ngữ.',
        },
        {
          kind: 'choice', prompt: 'Biển hiệu nào mang nghĩa CẤM đoán?',
          options: ['入っては いけません', '入っても いいですか', '入って ください', '入りません'],
          answerIndex: 0, explanationVi: '〜ては いけません = cấm. 入っても いいですか là xin phép, 入って ください là yêu cầu, 入りません chỉ là câu phủ định thường.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Ở thư viện',
      situationVi: 'Linh hỏi nhân viên thư viện xem được làm những gì.',
      lines: [
        { speaker: 'リン', ja: 'すみません、ここで ほんを 読んでも いいですか。', vi: 'Xin hỏi đọc sách ở đây được không ạ?' },
        { speaker: 'としょかんのひと', ja: 'ええ、いいですよ。どうぞ。', vi: 'Vâng, được chứ. Mời bạn.' },
        { speaker: 'リン', ja: 'あのう、しゃしんを とっても いいですか。', vi: 'À, cho tôi chụp ảnh được không ạ?' },
        { speaker: 'としょかんのひと', ja: 'いいえ、とっては いけません。', vi: 'Không, chụp ảnh là không được.' },
        { speaker: 'リン', ja: 'そうですか。すみません。', vi: 'Vậy à. Xin lỗi ạ.' },
        { speaker: 'としょかんのひと', ja: 'たばこも すっては いけません。おべんとうも 食べては いけません。', vi: 'Thuốc cũng không được hút. Cơm hộp cũng không được ăn.' },
        { speaker: 'リン', ja: 'わかりました。', vi: 'Em hiểu rồi ạ.' },
        { speaker: 'としょかんのひと', ja: 'トイレは あそこですよ。', vi: 'Nhà vệ sinh ở đằng kia đấy.' },
        { speaker: 'リン', ja: 'ありがとうございます。', vi: 'Em cảm ơn ạ.' },
      ],
    },
    {
      titleVi: 'Nội quy lớp học',
      situationVi: 'Ngày đầu học, thầy giáo giới thiệu nội quy lớp với các bạn.',
      lines: [
        { speaker: 'せんせい', ja: 'みなさん、これを 見て ください。きょうしつの ルールです。', vi: 'Các bạn nhìn lên đây nhé. Đây là nội quy lớp học.' },
        { speaker: 'リン', ja: 'せんせい、けいたいでんわを つかっても いいですか。', vi: 'Thưa thầy, dùng điện thoại di động được không ạ?' },
        { speaker: 'せんせい', ja: 'いいえ、つかっては いけません。', vi: 'Không, không được dùng đâu.' },
        { speaker: 'リン', ja: 'はい。じゃ、トイレへ 行っても いいですか。', vi: 'Vâng ạ. Thế đi nhà vệ sinh được không ạ?' },
        { speaker: 'せんせい', ja: 'ええ、いいですよ。', vi: 'Ừ, được chứ.' },
        { speaker: 'たなか', ja: 'せんせい、みずを のんでも いいですか。', vi: 'Thưa thầy, uống nước được không ạ?' },
        { speaker: 'せんせい', ja: 'みずは いいですよ。コーヒーは いけません。', vi: 'Nước thì được nhé. Cà phê thì không được.' },
        { speaker: 'たなか', ja: 'そうですか。', vi: 'Vậy à.' },
        { speaker: 'せんせい', ja: '大きい こえを 出しては いけません。', vi: 'Không được nói to giọng nhé.' },
        { speaker: 'リン', ja: 'はい、わかりました。', vi: 'Vâng, em hiểu rồi ạ.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'ここで しゃしんを とっては いけません。', meaningVi: 'Không được chụp ảnh ở đây.', choices: ['Không được chụp ảnh ở đây', 'Chụp ảnh ở đây được không', 'Hãy chụp ảnh ở đây nhé', 'Đừng quên chụp ảnh nhé'], answerIndex: 0, dictation: true },
    { scriptJa: 'トイレへ 行っても いいですか。', meaningVi: 'Tôi đi nhà vệ sinh được không?', choices: ['Nhà vệ sinh ở đâu?', 'Tôi đi nhà vệ sinh được không?', 'Không được vào nhà vệ sinh', 'Mời vào nhà vệ sinh'], answerIndex: 1 },
    { scriptJa: 'ここに じてんしゃを とめても いいですか。', meaningVi: 'Tôi đỗ xe đạp ở đây được không?', choices: ['Đừng đỗ xe đạp ở đây nhé', 'Không được đỗ xe đạp ở đây', 'Tôi đỗ xe đạp ở đây được không?', 'Hãy đỗ xe đạp ở đây nhé'], answerIndex: 2, dictation: true },
    { scriptJa: 'きょうしつで けいたいでんわを つかっては いけません。', meaningVi: 'Trong lớp học không được dùng điện thoại di động.', choices: ['Trong lớp được dùng điện thoại di động', 'Xin phép dùng điện thoại trong lớp', 'Không được mang điện thoại vào trường', 'Trong lớp học không được dùng điện thoại di động'], answerIndex: 3 },
    { scriptJa: 'プールで たばこを すっては いけません。', meaningVi: 'Ở hồ bơi không được hút thuốc.', choices: ['Ở hồ bơi không được hút thuốc', 'Hút thuốc ở hồ bơi được không', 'Đừng hút thuốc ở công viên', 'Ở hồ bơi không được bơi'], answerIndex: 0 },
  ],
  reading: {
    titleVi: 'Nội quy thư viện trường',
    lines: [
      { text: 'これは がっこうの としょかんの ルールです。', vi: 'Đây là nội quy thư viện của trường.' },
      { text: 'としょかんで たばこを すっては いけません。', vi: 'Trong thư viện không được hút thuốc.' },
      { text: 'おべんとうも 食べては いけません。', vi: 'Cơm hộp cũng không được ăn.' },
      { text: '大きい こえで 話しては いけません。', vi: 'Không được nói chuyện to giọng.' },
      { text: 'ここで しゃしんを とっては いけません。', vi: 'Không được chụp ảnh ở đây.' },
      { text: 'ノートに 書いても いいです。', vi: 'Được ghi chép vào vở.' },
      { text: 'ほんを かっても いいです。', vi: 'Được mượn sách.' },
      { text: 'としょかんは げつようびから きんようびまで、九じから 五じまでです。', vi: 'Thư viện mở từ thứ Hai đến thứ Sáu, từ 9 giờ đến 5 giờ.' },
    ],
    questions: [
      { questionVi: 'Trong thư viện KHÔNG được làm gì?', choices: ['Ăn cơm hộp', 'Mượn sách', 'Ghi chép vào vở', 'Đọc sách'], answerIndex: 0, explanationVi: 'おべんとうも 食べては いけません — cơm hộp là điều bị cấm; mượn sách (かっても いいです) và ghi chép (書いても いいです) đều được phép.' },
      { questionVi: 'Điều nào ĐƯỢC phép ở thư viện?', choices: ['Chụp ảnh', 'Ghi chép vào vở', 'Ăn cơm hộp', 'Hút thuốc'], answerIndex: 1, explanationVi: 'ノートに 書いても いいです = được ghi vào vở. Ba việc còn lại đều có câu 〜ては いけません.' },
      { questionVi: 'Thư viện mở cửa lúc nào?', choices: ['Thứ Hai–thứ Sáu, 9 giờ–17 giờ', 'Thứ Hai–thứ Bảy, 9 giờ–17 giờ', 'Thứ Hai–thứ Sáu, 8 giờ–18 giờ', 'Chỉ mở cửa Chủ nhật'], answerIndex: 0, explanationVi: 'げつようびから きんようびまで (T2–T6)、九じから 五じまで (9g–17g).' },
    ],
  },
  speakSentences: [
    { ja: 'トイレへ 行っても いいですか。', vi: 'Tôi đi nhà vệ sinh được không ạ?' },
    { ja: 'ここで しゃしんを とっても いいですか。', vi: 'Chụp ảnh ở đây được không?' },
    { ja: 'ここで たばこを すっては いけません。', vi: 'Không được hút thuốc ở đây.' },
    { ja: 'けいたいでんわを つかっては いけません。', vi: 'Không được dùng điện thoại di động.' },
  ],
  translatePairs: [
    { ja: 'ここで しゃしんを とっても いいですか。', vi: 'Chụp ảnh ở đây được không?', tokens: ['ここ', 'で', 'しゃしん', 'を', 'とっても', 'いいですか'], distractors: ['とっては', 'です'] },
    { ja: 'たばこを すっては いけません。', vi: 'Không được hút thuốc.', tokens: ['たばこ', 'を', 'すっては', 'いけません'], distractors: ['すっても', 'ください'] },
    { ja: 'きょうしつに 入っても いいですか。', vi: 'Vào lớp học được không?', tokens: ['きょうしつ', 'に', '入っても', 'いいですか'], distractors: ['入っては', 'へ'] },
    { ja: 'プールで およいでも いいですか。', vi: 'Bơi ở hồ bơi được không?', tokens: ['プール', 'で', 'およいでも', 'いいですか'], distractors: ['およんで', 'います'] },
  ],
  kanji: ['入', '立', '止'],
}
