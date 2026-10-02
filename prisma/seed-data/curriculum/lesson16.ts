/**
 * NihongoGo — Bài 16: Thể ない — phủ định động từ + 〜ないでください.
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson16: CurriculumLesson = {
  order: 16,
  slug: 'l16-the-nai',
  title: 'Thể ない — Phủ định động từ',
  titleJa: 'ない形',
  description: 'Chia và dùng thể ない để nói không làm việc gì.',
  learningObjectives: [
    'Chia động từ sang thể ない',
    'Nhắc đừng làm với 〜ないでください',
    'Nói kinh nghiệm "chưa từng" với 〜たことがありません',
  ],
  grammarTopics: ['Quy tắc chia thể ない', '〜ないでください (đừng làm)'],
  vocabularyTopics: ['Lời nhắc nhở', 'Việc cần tránh'],
  kanjiTopics: ['Kanji công cụ & sử dụng (乗・使・忘)'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: '乗ります', reading: 'のります', romaji: 'norimasu', meaningVi: 'lên (xe, tàu)', pos: 'động từ nhóm 1', exampleJa: 'えきで でんしゃに 乗ります。', exampleVi: 'Tôi lên tàu điện ở nhà ga.' },
    { term: '使います', reading: 'つかいます', romaji: 'tsukaimasu', meaningVi: 'dùng, sử dụng', pos: 'động từ nhóm 1', exampleJa: 'としょかんで パソコンを 使います。', exampleVi: 'Tôi dùng máy tính ở thư viện.' },
    { term: '忘れます', reading: 'わすれます', romaji: 'wasuremasu', meaningVi: 'quên', pos: 'động từ nhóm 2', exampleJa: 'がっこうで かさを 忘れます。', exampleVi: 'Tôi quên dù ở trường.' },
    { term: 'やめます', romaji: 'yamemasu', meaningVi: 'bỏ, cai (thói quen)', pos: 'động từ nhóm 2', exampleJa: 'わたしは たばこを やめます。', exampleVi: 'Tôi bỏ thuốc.' },
    { term: 'あけます', romaji: 'akemasu', meaningVi: 'mở', pos: 'động từ nhóm 2', exampleJa: 'あさ まどを あけます。', exampleVi: 'Buổi sáng tôi mở cửa sổ.' },
    { term: 'しめます', romaji: 'shimemasu', meaningVi: 'đóng', pos: 'động từ nhóm 2', exampleJa: 'よる ドアを しめます。', exampleVi: 'Buổi tối tôi đóng cửa.' },
    { term: 'すてます', romaji: 'sutemasu', meaningVi: 'vứt, bỏ (rác)', pos: 'động từ nhóm 2', exampleJa: 'まいにち ごみを すてます。', exampleVi: 'Tôi vứt rác mỗi ngày.' },
    { term: 'こわれます', romaji: 'kowaremasu', meaningVi: '(đồ vật) bị hỏng', pos: 'động từ nhóm 2', exampleJa: 'みずで パソコンが こわれます。', exampleVi: 'Máy tính bị nước làm hỏng.' },
    { term: 'きります', romaji: 'kirimasu', meaningVi: 'cắt', pos: 'động từ nhóm 1', exampleJa: 'ケーキを きります。', exampleVi: 'Tôi cắt bánh.' },
    { term: 'まちます', romaji: 'machimasu', meaningVi: 'chờ, đợi', pos: 'động từ nhóm 1', exampleJa: 'えきの まえで ともだちを まちます。', exampleVi: 'Tôi chờ bạn trước nhà ga.' },
    { term: 'とります', romaji: 'torimasu', meaningVi: 'chụp (ảnh)', pos: 'động từ nhóm 1', exampleJa: 'こうえんで しゃしんを とります。', exampleVi: 'Tôi chụp ảnh ở công viên.' },
    { term: 'きをつけます', romaji: 'kiotsukemasu', meaningVi: 'cẩn thận, để ý', pos: 'động từ nhóm 2', exampleJa: 'じてんしゃに きをつけます。', exampleVi: 'Tôi trông chừng xe đạp.' },
    { term: 'ごみ', romaji: 'gomi', meaningVi: 'rác', pos: 'danh từ', exampleJa: 'ここに ごみを すてないで ください。', exampleVi: 'Đừng vứt rác ở đây nhé.' },
    { term: 'ドア', romaji: 'doa', meaningVi: 'cửa (mở đóng)', pos: 'danh từ', exampleJa: 'ドアを あけて ください。', exampleVi: 'Mở cửa giúp nhé.' },
    { term: 'まど', romaji: 'mado', meaningVi: 'cửa sổ', pos: 'danh từ', exampleJa: 'まどを あけないで ください。', exampleVi: 'Đừng mở cửa sổ nhé.' },
    { term: 'エスカレーター', romaji: 'esukarētā', meaningVi: 'thang cuốn', pos: 'danh từ', exampleJa: 'エスカレーターに 乗ります。', exampleVi: 'Tôi lên thang cuốn.' },
    { term: 'きっぷ', romaji: 'kippu', meaningVi: 'vé (tàu, xe)', pos: 'danh từ', exampleJa: 'きっぷを 忘れないで ください。', exampleVi: 'Đừng quên vé nhé.' },
    { term: 'かさ', romaji: 'kasa', meaningVi: 'dù, ô', pos: 'danh từ', exampleJa: 'バスで かさを 忘れます。', exampleVi: 'Tôi quên dù trên xe buýt.' },
    { term: 'しんごう', romaji: 'shingō', meaningVi: 'đèn tín hiệu', pos: 'danh từ', exampleJa: 'しんごうを 見て ください。', exampleVi: 'Hãy nhìn đèn tín hiệu.' },
    { term: 'きけん', romaji: 'kiken', meaningVi: 'nguy hiểm', pos: 'danh từ', exampleJa: 'ここは きけんです。', exampleVi: 'Chỗ này nguy hiểm.' },
    { term: 'だめ', romaji: 'dame', meaningVi: 'không được (thân mật)', pos: 'danh từ', exampleJa: 'たばこは だめです。', exampleVi: 'Thuốc lá là không được nhé.' },
    { term: 'ぜったいに', romaji: 'zettai ni', meaningVi: 'tuyệt đối', pos: 'phó từ', exampleJa: 'ぜったいに 忘れないで ください。', exampleVi: 'Tuyệt đối đừng quên nhé.' },
  ],
  grammar: [
    {
      code: 'l16-nai-group1',
      title: 'Thể ない động từ nhóm 1 — cột う → cột あ + ない',
      formation: 'Gốc ます (bỏ ます) → đổi âm cuối sang cột あ + ない (う → わ)',
      explanationVi:
        'Động từ nhóm 1 lấy gốc trước ます rồi đổi nguyên âm cuối về cột あ và thêm ない: のみます → のまない, ききます → きかない, まちます → またない, とります → とらない. Đặc biệt quan trọng: động từ có gốc kết thúc bằng う chuyển thành わ (chứ không phải あ): かいます → かわない, すいます → すわない, つかいます → つかわない. Thể ない là phủ định ở dạng thường, dùng khi nói thân mật; câu lịch sự vẫn dùng 〜ません (のみません = のまない). Thể ない còn là gốc của nhiều mẫu câu quan trọng sẽ học ở các bài sau.',
      examples: [
        { ja: 'よる コーヒーを のまない。', vi: 'Buổi tối tôi không uống cà phê.', tokens: ['よる', 'コーヒー', 'を', 'のまない'] },
        { ja: 'にちようびは でんしゃに のらない。', vi: 'Chủ nhật tôi không đi tàu điện.' },
        { ja: 'じゅぎょうで パソコンを つかわない。', vi: 'Tôi không dùng máy tính trong giờ học.', tokens: ['じゅぎょう', 'で', 'パソコン', 'を', 'つかわない'] },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'Chia 「のみます」 (nhóm 1) sang thể ない: buổi tối không uống cà phê',
          sentence: 'よる コーヒーを ___。',
          options: ['のまない', 'のみない', 'のわない', 'のまありません'],
          answerIndex: 0, explanationVi: 'のみます: み (cột い) → ま (cột あ) + ない = のまない. のみない giữ nguyên gốc là sai; のまありません là phủ định lịch sự, không phải thể ない.',
        },
        {
          kind: 'conjugate', prompt: 'Chia 「使います」 — chú ý động từ gốc kết thúc bằng う',
          sentence: 'じゅぎょうで パソコンを ___。',
          options: ['つかあない', 'つかいない', 'つかわない', 'つかてない'],
          answerIndex: 2, explanationVi: 'Gốc kết thúc う → わ (đặc biệt, không phải あ): 使います → つかわない. Tương tự: かいます → かわない, すいます → すわない.',
        },
        {
          kind: 'error', prompt: '「Tôi không chờ bạn ở nhà ga。」 câu nào đúng?',
          options: ['えきで ともだちを まちない。', 'えきで ともだちを またない。', 'えきで ともだちを まちませんでした。', 'えきで ともだちを まちたくないです。'],
          answerIndex: 1, explanationVi: 'まちます → またない (ち → た). まちない sai vì không đổi sang cột あ; hai câu còn lại là quá khứ (ませんでした) và "không muốn chờ" (たくない).',
        },
        {
          kind: 'choice', prompt: '「たなかさんは じてんしゃで 行かない。」 có nghĩa là gì?',
          options: ['Tanaka đi bằng xe đạp', 'Tanaka đừng đi bằng xe đạp', 'Tanaka muốn đi bằng xe đạp', 'Tanaka không đi bằng xe đạp'],
          answerIndex: 3, explanationVi: '行かない = phủ định thường của 行きます (い → か + ない). "Đừng đi" phải dùng 〜ないで ください; "muốn đi" là 〜たいです.',
        },
      ],
    },
    {
      code: 'l16-nai-group23',
      title: 'Thể ない nhóm 2, nhóm 3 và ngoại lệ あります',
      formation: 'Nhóm 2: 〜ます → 〜ない / Nhóm 3: します → しない, きます → こない / あります → ない',
      explanationVi:
        'Nhóm 2 dễ nhất: chỉ cần bỏ ます thêm ない: たべます → たべない, みます → みない, ねます → ねない. Nhóm 3 có 2 ngoại lệ bắt buộc phải nhớ: します → しない và きます → こない (chứ không phải きない). Cuối cùng, あります là ngoại lệ duy nhất của cả tiếng Nhật: あります → ない, không tồn tại dạng あらない hay ありない. Hãy so sánh với phủ định lịch sự đã học: たべません ↔ たべない, しません ↔ しない — nghĩa giống nhau, chỉ khác mức độ lịch sự.',
      examples: [
        { ja: 'あさ パンを 食べない。', vi: 'Buổi sáng tôi không ăn bánh mì.', tokens: ['あさ', 'パン', 'を', '食べない'] },
        { ja: 'きょうは かいものを しない。', vi: 'Hôm nay tôi không đi mua sắm.' },
        { ja: 'あしたは がっこうへ 来ない。', vi: 'Ngày mai tôi không đến trường.' },
        { ja: 'ここに えきが ない。', vi: 'Ở đây không có nhà ga.', tokens: ['ここ', 'に', 'えき', 'が', 'ない'] },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'Chia 「食べます」 (nhóm 2) sang thể ない',
          sentence: 'あさ パンを ___。',
          options: ['たべらない', 'たべない', 'たべあない', 'たべません'],
          answerIndex: 1, explanationVi: 'Nhóm 2: bỏ ます thêm ない → たべない. たべらない là lỗi chia kiểu nhóm 1 (không có ら); たべません là phủ định lịch sự.',
        },
        {
          kind: 'conjugate', prompt: 'Chia 「します」 (nhóm 3): hôm nay không đi mua sắm',
          sentence: 'きょうは かいものを ___。',
          options: ['しなない', 'すない', 'しない', 'しらない'],
          answerIndex: 2, explanationVi: 'します (nhóm 3) → しない. Chú ý しらない là thể ない của しります (biết) — nghĩa hoàn toàn khác.',
        },
        {
          kind: 'error', prompt: '「Ngày mai không đến trường。」 câu nào đúng?',
          options: ['あした がっこうへ きない。', 'あした がっこうへ きらない。', 'あした がっこうへ こない。', 'あした がっこうへ きます。'],
          answerIndex: 2, explanationVi: 'きます (nhóm 3) → こない, phải nhớ riêng. きない và きらない không tồn tại; きます là khẳng định lịch sự.',
        },
        {
          kind: 'fill', prompt: 'Chia 「あります」 sang thể ない: ở đây không có cửa hàng tiện lợi',
          sentence: 'ここに コンビニが ___。',
          options: ['あらない', 'ありない', 'あれない', 'ない'],
          answerIndex: 3, explanationVi: 'あります là ngoại lệ duy nhất: あります → ない. Không có dạng あらない, ありない hay あれない.',
        },
      ],
    },
    {
      code: 'l16-nai-de-kudasai',
      title: '〜ないで ください — đừng làm (nhắc nhở lịch sự)',
      formation: 'Thể ない + で + ください',
      explanationVi:
        'Muốn nhắc ai đó KHÔNG làm việc gì đó, lấy thể ない của động từ rồi thêm でください: とらないで ください (đừng lấy/chụp nhé), のまないで ください (đừng uống nhé). So sánh với hai mẫu đã học: 〜てください (bài 13) là nhờ LÀM, còn 〜ないでください là nhắc ĐỪNG LÀM; 〜てはいけません (bài 15) là nội quy cấm, còn 〜ないでください nhẹ nhàng hơn — dùng khi nhắc nhở lịch sự. Cấu trúc cố định là ない + で + ください, đừng quên chữ で.',
      examples: [
        { ja: 'ここで しゃしんを とらないで ください。', vi: 'Đừng chụp ảnh ở đây nhé.', tokens: ['ここ', 'で', 'しゃしん', 'を', 'とらないで', 'ください'] },
        { ja: 'ドアを あけないで ください。', vi: 'Đừng mở cửa nhé.' },
        { ja: '大きい こえで 話さないで ください。', vi: 'Đừng nói to giọng nhé.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'Nhắc "đừng hút thuốc ở đây": chia 「すいます」',
          sentence: 'ここで たばこを ___ ください。',
          options: ['すらないで', 'すわないで', 'すあないで', 'すがないで'],
          answerIndex: 1, explanationVi: 'すいます → すわない (う → わ) → すわないで ください. Mẫu cố định: thể ない + で + ください.',
        },
        {
          kind: 'choice', prompt: '「みずを のまないで ください。」 là lời nói gì?',
          options: ['Nhắc đừng uống nước', 'Nhờ uống nước giúp', 'Cấm tuyệt đối uống nước', 'Hỏi có được uống nước không'],
          answerIndex: 0, explanationVi: '〜ないで ください = "đừng … nhé" (nhắc nhẹ). Nhờ uống là 〜て ください; cấm mạnh là 〜ては いけません; hỏi phép là 〜ても いいですか.',
        },
        {
          kind: 'error', prompt: '「Đừng nói to giọng。」 câu nào đúng?',
          options: ['大きい こえで 話しないで ください。', '大きい こえで 話さないで ください。', '大きい こえで 話さない ください。', '大きい こえで 話して ください。'],
          answerIndex: 1, explanationVi: 'はなします → はなさない (し → さ) → はなさないで ください. Thiếu で là sai; 話して ください là nhờ NÓI to (nghĩa ngược lại).',
        },
        {
          kind: 'particle', prompt: 'Điền từ còn thiếu trong mẫu nhắc đừng làm',
          sentence: 'ここに ごみを すてない___ ください。',
          options: ['で', 'て', 'に', 'は'],
          answerIndex: 0, explanationVi: 'Mẫu cố định: 〜ない + で + ください. て dành cho 〜てください (nhờ làm); は thuộc mẫu cấm 〜ては いけません.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Ở nhà ga',
      situationVi: 'Linh hỏi thăm và được nhân viên nhà ga nhắc vài điều.',
      lines: [
        { speaker: 'リン', ja: 'すみません、ここで しゃしんを とっても いいですか。', vi: 'Xin hỏi chụp ảnh ở đây được không ạ?' },
        { speaker: 'えきのひと', ja: 'いいえ、とらないで ください。', vi: 'Không, đừng chụp nhé.' },
        { speaker: 'リン', ja: 'そうですか。', vi: 'Vậy à.' },
        { speaker: 'えきのひと', ja: 'エスカレーターで とまらないで ください。きけんです。', vi: 'Đừng dừng lại ở thang cuốn nhé. Nguy hiểm đấy.' },
        { speaker: 'リン', ja: 'はい、きをつけます。', vi: 'Vâng, tôi sẽ cẩn thận.' },
        { speaker: 'えきのひと', ja: 'しんごうを 見て ください。', vi: 'Hãy nhìn đèn tín hiệu nhé.' },
        { speaker: 'リン', ja: 'はい。', vi: 'Vâng.' },
        { speaker: 'えきのひと', ja: 'きっぷを 忘れないで くださいね。', vi: 'Đừng quên vé nhé.' },
        { speaker: 'リン', ja: 'はい、ありがとうございます。', vi: 'Vâng, cảm ơn ạ.' },
      ],
    },
    {
      titleVi: 'Nội quy phòng máy tính',
      situationVi: 'Thầy giáo giới thiệu nội quy phòng máy tính với lớp.',
      lines: [
        { speaker: 'せんせい', ja: 'みなさん、これは パソコンの へやの ルールです。', vi: 'Các bạn ơi, đây là nội quy phòng máy tính.' },
        { speaker: 'リン', ja: 'せんせい、パソコンを 使っても いいですか。', vi: 'Thưa thầy, dùng máy tính được không ạ?' },
        { speaker: 'せんせい', ja: 'ええ、使っても いいですよ。', vi: 'Ừ, dùng thì được nhé.' },
        { speaker: 'たなか', ja: 'パソコンで おんがくを 聞いても いいですか。', vi: 'Nghe nhạc trên máy tính được không ạ?' },
        { speaker: 'せんせい', ja: 'いいえ、聞かないで ください。', vi: 'Không, đừng nghe nhé.' },
        { speaker: 'リン', ja: 'みずを のんでも いいですか。', vi: 'Uống nước được không ạ?' },
        { speaker: 'せんせい', ja: 'みずも だめです。パソコンが こわれます。', vi: 'Nước cũng không được. Máy tính sẽ hỏng đấy.' },
        { speaker: 'たなか', ja: 'あ、そうですか。', vi: 'À, vậy à.' },
        { speaker: 'せんせい', ja: 'いすに のらないで くださいね。', vi: 'Đừng trèo lên ghế nhé.' },
        { speaker: 'リン', ja: 'はい、わかりました。', vi: 'Vâng, em hiểu rồi ạ.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'ここで しゃしんを とらないで ください。', meaningVi: 'Đừng chụp ảnh ở đây nhé.', choices: ['Đừng chụp ảnh ở đây nhé', 'Hãy chụp ảnh ở đây nhé', 'Xin phép chụp ảnh ở đây', 'Đừng quên chụp ảnh nhé'], answerIndex: 0, dictation: true },
    { scriptJa: 'エスカレーターで とまらないで ください。', meaningVi: 'Đừng dừng lại ở thang cuốn nhé.', choices: ['Hãy dừng ở thang cuốn nhé', 'Đừng dừng lại ở thang cuốn nhé', 'Thang cuốn đang dừng lại', 'Đừng chạy ở thang cuốn nhé'], answerIndex: 1, dictation: true },
    { scriptJa: 'きっぷを 忘れないで ください。', meaningVi: 'Đừng quên vé nhé.', choices: ['Đừng mua vé nhé', 'Đừng quên vé nhé', 'Hãy mua vé nhé', 'Vé ở đâu ạ?'], answerIndex: 1 },
    { scriptJa: 'ここに ごみを すてないで ください。', meaningVi: 'Đừng vứt rác ở đây nhé.', choices: ['Hãy vứt rác ở đây', 'Đừng nhặt rác ở đây nhé', 'Ở đây không có thùng rác', 'Đừng vứt rác ở đây nhé'], answerIndex: 3 },
    { scriptJa: 'ドアを あけないで ください。', meaningVi: 'Đừng mở cửa nhé.', choices: ['Đừng đóng cửa nhé', 'Hãy mở cửa nhé', 'Đừng mở cửa nhé', 'Cửa không mở được'], answerIndex: 2 },
  ],
  reading: {
    titleVi: 'Nội quy mới ở nhà ga',
    lines: [
      { text: 'えきに あたらしい ルールが あります。', vi: 'Nhà ga có nội quy mới.' },
      { text: 'エスカレーターで とまらないで ください。', vi: 'Đừng dừng lại ở thang cuốn.' },
      { text: 'ここで たばこを すわないで ください。', vi: 'Đừng hút thuốc ở đây.' },
      { text: 'ごみは ここに すてないで ください。', vi: 'Rác thì đừng vứt ở đây.' },
      { text: 'しんごうを 見て ください。', vi: 'Hãy nhìn đèn tín hiệu.' },
      { text: 'エレベーターを 使っても いいです。', vi: 'Thang máy thì được dùng.' },
      { text: 'えきのひとに きいて ください。', vi: 'Hãy hỏi nhân viên nhà ga.' },
      { text: 'みなさん、きをつけて ください。', vi: 'Mọi người hãy cẩn thận nhé.' },
    ],
    questions: [
      { questionVi: 'Trên thang cuốn KHÔNG được làm gì?', choices: ['Dừng lại', 'Đi bộ', 'Nói chuyện', 'Ngồi xuống'], answerIndex: 0, explanationVi: 'エスカレーターで とまらないで ください — đừng dừng lại ở thang cuốn.' },
      { questionVi: 'Điều nào ĐƯỢC phép theo nội quy?', choices: ['Hút thuốc', 'Vứt rác ở đây', 'Dùng thang máy', 'Dừng lại ở thang cuốn'], answerIndex: 2, explanationVi: 'エレベーターを 使っても いいです — được dùng thang máy; hút thuốc, vứt rác, dừng ở thang cuốn đều có mẫu 〜ないで ください.' },
      { questionVi: 'Có việc không rõ thì nên làm gì?', choices: ['Tự nhìn đèn tín hiệu', 'Chờ thêm chút nữa', 'Hỏi nhân viên nhà ga', 'Chụp ảnh hỏi'], answerIndex: 2, explanationVi: 'えきのひとに きいて ください — hãy hỏi nhân viên nhà ga; đèn tín hiệu chỉ để nhìn trước khi đi.' },
    ],
  },
  speakSentences: [
    { ja: 'ここで しゃしんを とらないで ください。', vi: 'Đừng chụp ảnh ở đây nhé.' },
    { ja: 'きっぷを 忘れないで ください。', vi: 'Đừng quên vé nhé.' },
    { ja: 'エレベーターを 使っても いいですか。', vi: 'Tôi dùng thang máy được không?' },
    { ja: 'ドアを あけないで ください。', vi: 'Đừng mở cửa nhé.' },
  ],
  translatePairs: [
    { ja: 'ここに ごみを すてないで ください。', vi: 'Đừng vứt rác ở đây nhé.', tokens: ['ここ', 'に', 'ごみ', 'を', 'すてないで', 'ください'], distractors: ['すてって', 'います'] },
    { ja: 'まどを あけないで ください。', vi: 'Đừng mở cửa sổ nhé.', tokens: ['まど', 'を', 'あけないで', 'ください'], distractors: ['あけて', 'ましょう'] },
    { ja: 'よる コーヒーを のまない。', vi: 'Buổi tối tôi không uống cà phê.', tokens: ['よる', 'コーヒー', 'を', 'のまない'], distractors: ['のみます', 'まで'] },
    { ja: 'いすに のらないで ください。', vi: 'Đừng trèo lên ghế nhé.', tokens: ['いす', 'に', 'のらないで', 'ください'], distractors: ['のって', 'を'] },
    { ja: 'かさを 忘れないで ください。', vi: 'Đừng quên dù nhé.', tokens: ['かさ', 'を', '忘れないで', 'ください'], distractors: ['忘れて', 'ます'] },
  ],
  kanji: ['乗', '使', '忘'],
}
