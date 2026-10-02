/**
 * NihongoGo — Irodori A1 · Bài 13: えきで (Ở nhà ga).
 * Tàu điện, sân bay, phương tiện — particle へ chỉ hướng, この/その/あの + N,
 * hỏi số nhà ga (なんばん). Nội dung GỐC — không sao chép dialogue/ví dụ/bài tập
 * từ bất kỳ giáo trình có bản quyền nào.
 * Provenance: ORIGINAL_GENERATED · MACHINE_REVIEWED (validator + audit).
 */
import type { IrodoriLesson } from './types'

export const irodori13: IrodoriLesson = {
  order: 13,
  slug: 'irodori-13',
  title: 'えきで — Ở nhà ga & phương tiện',
  titleJa: 'いろどり A1 えきで',
  description: 'Mua vé, hỏi số nhà ga, lên đúng tàu và chuyển tuyến — phương tiện công cộng đầu tiên bạn phải "sống chung" mỗi ngày ở Nhật.',
  learningObjectives: [
    'Nói điểm đến với trợ từ へ (とうきょうえきへ いきます)',
    'Chỉ vật cụ thể bằng この・その・あの + danh từ',
    'Hỏi & trả lời số nhà ga bằng なんばんですか',
  ],
  grammarTopics: ['〜へ いきます — đi đến…', 'この・その・あの + N', 'なんばん / 〜ばん — số thứ tự'],
  vocabularyTopics: ['Phương tiện giao thông', 'Ở nhà ga', 'Động từ di chuyển'],
  kanjiTopics: ['乗', '帰'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'でんしゃ', romaji: 'densha', meaningVi: 'tàu điện', pos: 'danh từ', exampleJa: 'でんしゃで かいしゃへ いきます。', exampleVi: 'Tôi đi công ty bằng tàu điện.' },
    { term: 'ちかてつ', romaji: 'chikatetsu', meaningVi: 'tàu điện ngầm', pos: 'danh từ', exampleJa: 'ちかてつは ひろいです。', exampleVi: 'Tàu điện ngầm rộng lắm.' },
    { term: 'ばんのりば', romaji: 'ban\'noriba', meaningVi: 'nhà ga (số)', pos: 'danh từ', exampleJa: 'さんばんのりばで のります。', exampleVi: 'Tôi lên tàu ở nhà ga số 3.' },
    { term: 'のります', romaji: 'norimasu', meaningVi: 'lên (tàu, xe)', pos: 'động từ nhóm 1', exampleJa: 'でんしゃに のります。', exampleVi: 'Tôi lên tàu điện.' },
    { term: 'おります', romaji: 'orimasu', meaningVi: 'xuống (tàu, xe)', pos: 'động từ nhóm 2', exampleJa: 'つぎの えきで おります。', exampleVi: 'Tôi xuống ở ga kế tiếp.' },
    { term: 'のりかえます', romaji: 'norikaemasu', meaningVi: 'chuyển tuyến, đổi tàu', pos: 'động từ nhóm 2', exampleJa: 'しんじゅくで のりかえます。', exampleVi: 'Tôi chuyển tuyến ở Shinjuku.' },
    { term: 'とまります', romaji: 'tomarimasu', meaningVi: 'dừng lại', pos: 'động từ nhóm 1', exampleJa: 'つぎの えきに とまります。', exampleVi: 'Tàu dừng ở ga kế tiếp.' },
    { term: 'しんかんせん', romaji: 'shinkansen', meaningVi: 'tàu shinkansen (tàu cao tốc)', pos: 'danh từ', exampleJa: 'しんかんせんは とても はやいです。', exampleVi: 'Tàu shinkansen nhanh lắm.' },
    { term: 'くうこう', romaji: 'kūkō', meaningVi: 'sân bay', pos: 'danh từ', exampleJa: 'くうこうまで とおいですか。', exampleVi: 'Sân bay có xa không?' },
    { term: 'ひこうき', romaji: 'hikōki', meaningVi: 'máy bay', pos: 'danh từ', exampleJa: 'ひこうきに のります。', exampleVi: 'Tôi lên máy bay.' },
    { term: 'くるま', romaji: 'kuruma', meaningVi: 'ô tô', pos: 'danh từ', exampleJa: 'ともだちの くるまで かえります。', exampleVi: 'Tôi về bằng xe của bạn.' },
    { term: 'じてんしゃ', romaji: 'jitensha', meaningVi: 'xe đạp', pos: 'danh từ', exampleJa: 'じてんしゃで がっこうへ いきます。', exampleVi: 'Tôi đi học bằng xe đạp.' },
    { term: 'まち', romaji: 'machi', meaningVi: 'phố, thị trấn', pos: 'danh từ', exampleJa: 'まちを あるきます。', exampleVi: 'Tôi dạo bộ quanh phố.' },
    { term: 'つりかわ', romaji: 'tsurikawa', meaningVi: 'tay nắm (trên tàu)', pos: 'danh từ', exampleJa: 'つりかわに つかまります。', exampleVi: 'Tôi nắm lấy tay nắm.' },
  ],
  grammar: [
    {
      code: 'i13-e-ikimasu',
      title: '〜へ いきます — đi đến… (chỉ hướng)',
      formation: '[điểm đến] + へ + いきます / きます / かえります',
      explanationVi:
        'Trợ từ へ (đọc là "e") gắn sau ĐIỂM ĐẾN để nói mình đi đâu, về đâu: とうきょうえきへ いきます (đi đến ga Tokyo), うちへ かえります (về nhà). Khác với に dùng cho THỜI ĐIỂM (しちじに おきます — bài 6), へ nhấn mạnh HƯỚNG di chuyển. Trong hội thoại thường ngày, へ và に với động từ di chuyển gần như thay thế được nhau, nhưng へ cho cảm giác "hướng về phía đó" — an toàn tuyệt đối khi nói điểm đến. Khi đi bằng phương tiện gì thì nói [phương tiện] で: でんしゃで いきます.',
      examples: [
        { ja: 'とうきょうえきへ いきます。', vi: 'Tôi đi đến nhà ga Tokyo.', tokens: ['とうきょうえき', 'へ', 'いきます'] },
        { ja: 'うちへ かえります。', vi: 'Tôi về nhà.' },
        { ja: 'あした、おおさかへ いきます。', vi: 'Ngày mai tôi đi Osaka.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Chọn trợ từ đúng (Tôi đi đến ga Tokyo)',
          sentence: 'とうきょうえき___ いきます。',
          options: ['へ', 'を', 'が', 'も'],
          answerIndex: 0, explanationVi: 'Điểm đến của động từ di chuyển → へ (đọc "e"). を là tân ngữ; が là chủ ngữ; も là "cũng".',
        },
        {
          kind: 'choice', prompt: '「Tôi về nhà」 — câu nào đúng?',
          options: ['うちへ かえります。', 'うちを かえります。', 'うちが かえります。', 'うちへ きます。'],
          answerIndex: 0, explanationVi: 'Điểm đến + へ + かえります (về). かえります đi với へ/に, không đi với を/が.',
        },
        {
          kind: 'fill', prompt: 'Điền trợ từ còn thiếu (Tôi đi Osaka bằng tàu điện)',
          sentence: 'でんしゃで おおさか___ いきます。',
          options: ['へ', 'を', 'は', 'の'],
          answerIndex: 0, explanationVi: 'おおさか là điểm đến → へ. Phương tiện đi thì dùng で (でんしゃで).',
        },
        {
          kind: 'error', prompt: 'Câu nào SAI cách dùng trợ từ?',
          options: ['えきへ いきます。', 'えきで のります。', 'えきを いきます。', 'えきで おります。'],
          answerIndex: 2, explanationVi: 'いきます (đi) phải đi với へ/に — えきへ いきます. を chỉ tân ngữ (けさを のみます), không dùng cho điểm đến.',
        },
        {
          kind: 'choice', prompt: '「Tôi lên tàu ở ga số 3」 — câu nào đúng?',
          options: ['さんばんのりばで でんしゃを みます。', 'さんばんのりばで でんしゃに のります。', 'さんばんのりばへ のります。', 'さんばんのりばが のります。'],
          answerIndex: 1, explanationVi: 'Lên tàu = でんしゃに のります (tàu + に); nơi lên tàu + で (さんばんのりばで).',
        },
      ],
    },
    {
      code: 'i13-kono-sono-ano',
      title: 'この・その・あの + N — chỉ định + danh từ',
      formation: 'この / その / あの + [danh từ]',
      explanationVi:
        'Bài 4 đã học これ・それ・あれ (chỉ đứng một mình). Khi cần chỉ kèm DANH TỪ thì dùng この N (cái này — gần người nói), その N (cái đó — gần người nghe), あの N (cái kia — xa cả hai): この でんしゃ (con tàu này), その きっぷ (tấm vé đó), あの ひこうき (máy bay kia). Lỗi hay gặp: nói これ でんしゃ — SAI, phải là この でんしゃ. Bộ ba hỏi "cái nào?" là どの + N: どの でんしゃですか (tàu nào?).',
      examples: [
        { ja: 'この でんしゃは しんじゅくへ いきます。', vi: 'Tàu này đi đến Shinjuku.', tokens: ['この', 'でんしゃ', 'は', 'しんじゅく', 'へ', 'いきます'] },
        { ja: 'あの しんかんせんは とても はやいです。', vi: 'Con shinkansen kia nhanh lắm.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Chỉ vào tấm vé trong tay MÌNH — nói thế nào?',
          options: ['これ きっぷ', 'この きっぷ', 'その きっぷ', 'あの きっぷ'],
          answerIndex: 1, explanationVi: 'Kèm danh từ phải dùng この (gần người nói): この きっぷ. これ đứng một mình, không ghép trực tiếp với danh từ.',
        },
        {
          kind: 'fill', prompt: 'Điền từ còn thiếu (Tàu KIA nhanh nhỉ)',
          sentence: '___しんかんせんは はやいですね。',
          options: ['あの', 'この', 'どの', 'その'],
          answerIndex: 0, explanationVi: 'Vật xa cả người nói lẫn người nghe → あの. この gần tôi, その gần bạn, どの là "nào?".',
        },
        {
          kind: 'error', prompt: 'Câu nào SAI ngữ pháp chỉ định?',
          options: ['この まちです。', 'これです。', 'あれ えきです。', 'その つりかわです。'],
          answerIndex: 2, explanationVi: 'あれ đứng một mình; kèm danh từ phải là あの えき. あれ + N là lỗi kinh điển.',
        },
        {
          kind: 'choice', prompt: '「Tàu NÀO đi đến Kyoto?」 — hỏi thế nào?',
          options: ['どの でんしゃが きょうとへ いきますか。', 'この でんしゃが きょうとへ いきますか。', 'なんばん でんしゃが きょうとへ いきますか。', 'どこ でんしゃが きょうとへ いきますか。'],
          answerIndex: 0, explanationVi: 'Hỏi "cái nào" kèm danh từ → どの + N. この là khẳng định "cái này", không phải câu hỏi.',
        },
      ],
    },
    {
      code: 'i13-nanban',
      title: 'なんばんですか / 〜ばん — hỏi số thứ tự',
      formation: 'なんばん ですか → [số] + ばん です',
      explanationVi:
        'ばん gắn sau số để nói SỐ THỨ TỰ (nhà ga số, cửa số, phòng): さんばん (số 3), なんばん (số mấy). Ở ga: なんばんのりばですか (nhà ga số mấy?) → にばんです (số 2). Kết hợp số đã học ở bài 3: いちばん, にばん, さんばん, よんばん, ごばん… Mẹo sinh tồn: nhìn bảng toboard (ばんのりばひょう) tìm tên ga đến của mình, số dưới chân nó chính là nhà ga cần lên.',
      examples: [
        { ja: 'なんばんのりばですか。', vi: 'Nhà ga số mấy ạ?', tokens: ['なんばん', 'のりば', 'です', 'か'] },
        { ja: 'きょうとへ いく でんしゃは よんばんです。', vi: 'Tàu đi Kyoto là ga số 4.' },
      ],
      drills: [
        {
          kind: 'fill', prompt: 'Điền từ còn thiếu (Nhà ga số mấy ạ?)',
          sentence: '___のりばですか。',
          options: ['なんばん', 'なんじ', 'なんにち', 'いくら'],
          answerIndex: 0, explanationVi: 'なんばん = số mấy (thứ tự). なんじ hỏi giờ; なんにち hỏi ngày; いくら hỏi giá.',
        },
        {
          kind: 'choice', prompt: '「Ga số 2」 đọc thế nào?',
          options: ['にばん', 'ふたばん', 'にはん', 'にかい'],
          answerIndex: 0, explanationVi: 'Số 2 trước ばん đọc là に → にばん. にかい là "tầng 2" (khai); ふた là bộ đếm vật rời.',
        },
        {
          kind: 'particle', prompt: 'Chọn từ đúng (Tàu đi Kyoto là ga số mấy?)',
          sentence: 'きょうとへ いく でんしゃは___ですか。',
          options: ['なんばん', 'なんじ', 'なに', 'だれ'],
          answerIndex: 0, explanationVi: 'Hỏi số hiệu tàu → なんばん. なんじ hỏi giờ chạy; なに hỏi vật; だれ hỏi người.',
        },
        {
          kind: 'choice', prompt: 'Người ta trả lời「ごばんです。」— nghĩa là gì?',
          options: ['Lúc 5 giờ', 'Ga số 5', '5 nghìn yên', 'Ngày 5'],
          answerIndex: 1, explanationVi: '〜ばん = số thứ tự → ga số 5. 5 giờ là ごじ; 5.000 là ごせん; ngày 5 là いつか.',
        },
      ],
    },
  ],
  dialogue: {
    titleVi: 'Hỏi đường lên tàu ở ga',
    situationVi: 'An lần đầu đi tàu điện — hỏi nhân viên ga (えきいん) về nhà ga số.',
    lines: [
      { speaker: 'あん', text: 'すみません、しんじゅくへ いきたいです。', vi: 'Cho tôi hỏi, tôi muốn đi Shinjuku.' },
      { speaker: 'えきいん', text: 'はい。この でんしゃで いいですよ。', vi: 'Vâng. Đi tàu này là được.' },
      { speaker: 'あん', text: 'なんばんのりばですか。', vi: 'Nhà ga số mấy ạ?' },
      { speaker: 'えきいん', text: 'にばんです。あそこです。', vi: 'Ga số 2. Bên kia ạ.' },
      { speaker: 'あん', text: 'ありがとうございます。つぎの でんしゃは なんじですか。', vi: 'Cảm ơn anh. Tàu kế tiếp chạy lúc mấy giờ?' },
      { speaker: 'えきいん', text: 'くじはんです。いま、くるまに のりますね。', vi: '9 giờ 30. Bây giờ lên xe nhé.' },
      { speaker: 'あん', text: 'はい。つりかわも ありますね。', vi: 'Vâng. Còn có tay nắm nữa nhỉ.' },
      { speaker: 'えきいん', text: 'どうぞ。いい いちにちを！', vi: 'Mời bạn. Chúc một ngày tốt lành!' },
    ],
    questions: [
      { questionVi: 'An muốn đi đâu?', choices: ['Kyoto', 'Shinjuku', 'Osaka', 'Sân bay'], answerIndex: 1, explanationVi: 'Câu mở đầu: しんじゅくへ いきたいです — tôi muốn đi Shinjuku.' },
      { questionVi: 'Tàu đi Shinjuku ở nhà ga nào?', choices: ['Ga số 1', 'Ga số 2', 'Ga số 3', 'Ga số 4'], answerIndex: 1, explanationVi: 'Nhân viên trả lời: にばんです — ga số 2.' },
      { questionVi: 'Tàu kế tiếp chạy lúc mấy giờ?', choices: ['9 giờ', '9 giờ 15', '9 giờ 30', '10 giờ'], answerIndex: 2, explanationVi: 'くじはんです — 9 giờ 30 phút.' },
    ],
  },
  listening: [
    { scriptJa: 'つぎは しんじゅく、しんじゅくです。', meaningVi: 'Kế tiếp là Shinjuku, ga Shinjuku.', choices: ['Ga kế tiếp là Shinjuku', 'Tàu dừng ở ga này', 'Tàu đi đến Kyoto', 'Xin xuống ở cửa bên phải'], answerIndex: 0 },
    { scriptJa: 'この でんしゃは しんかんせんですか。', meaningVi: 'Tàu này là shinkansen phải không?', choices: ['Tàu này chạy nhanh không?', 'Tàu này là shinkansen phải không?', 'Tàu nào đi đến Kyoto?', 'Shinkansen đắt lắm à?'], answerIndex: 1 },
    { scriptJa: 'さんばんのりばで おります。', meaningVi: 'Tôi xuống ở ga số 3.', choices: ['Tôi lên ở ga số 3', 'Tôi chuyển tuyến ở ga số 3', 'Tôi xuống ở ga số 3', 'Tàu dừng ở ga số 5'], answerIndex: 2 },
    { scriptJa: 'でんしゃに のります。', meaningVi: 'Tôi lên tàu điện.', choices: ['Tôi xuống tàu điện', 'Tôi lên tàu điện', 'Tôi chờ tàu điện', 'Tôi chuyển tàu điện'], answerIndex: 1, dictation: true },
    { scriptJa: 'くうこうまで とおいですか。', meaningVi: 'Sân bay có xa không?', choices: ['Sân bay ở đâu?', 'Sân bay xa không?', 'Đi sân bay bao lâu?', 'Sân bay đắt không?'], answerIndex: 1, dictation: true },
  ],
  reading: {
    titleVi: 'Một buổi sáng ở nhà ga',
    lines: [
      { text: 'まいあさ、わたしは ちかてつで がっこうへ いきます。', vi: 'Mỗi sáng, tôi đi học bằng tàu điện ngầm.' },
      { text: 'えきは とても おおきいです。ひとりが たくさん います。', vi: 'Nhà ga rất lớn. Có rất nhiều người.' },
      { text: 'まず、きっぷを かいます。それから、ばんのりばを みます。', vi: 'Trước tiên tôi mua vé. Sau đó nhìn số nhà ga.' },
      { text: 'わたしは いつも ごばんのりばで のります。', vi: 'Tôi luôn lên tàu ở ga số 5.' },
      { text: 'でんしゃの なかで つりかわに つかまります。', vi: 'Trên tàu, tôi nắm vào tay nắm.' },
      { text: 'とても べんりですが、あさは こみます。', vi: 'Rất tiện, nhưng buổi sáng thì đông nghẹt.' },
    ],
    questions: [
      { questionVi: 'Người viết đi học bằng gì?', choices: ['Xe đạp', 'Tàu điện ngầm', 'Ô tô', 'Shinkansen'], answerIndex: 1, explanationVi: 'Câu đầu: ちかてつで がっこうへ いきます — đi học bằng tàu điện ngầm.' },
      { questionVi: 'Người viết luôn lên tàu ở nhà ga nào?', choices: ['Ga số 2', 'Ga số 3', 'Ga số 5', 'Ga số 8'], answerIndex: 2, explanationVi: 'いつも ごばんのりばで のります — luôn lên tàu ở ga số 5.' },
      { questionVi: 'Buổi sáng ở ga có điều gì?', choices: ['Rất vắng', 'Rất đông', 'Đóng cửa', 'Rẻ hơn'], answerIndex: 1, explanationVi: 'あさは こみます — buổi sáng thì đông nghẹt người.' },
    ],
  },
  speakSentences: [
    { ja: 'すみません、なんばんのりばですか。', vi: 'Cho tôi hỏi, nhà ga số mấy ạ?' },
    { ja: 'この でんしゃで いいですか。', vi: 'Đi tàu này được không ạ?' },
    { ja: 'つぎの えきで おります。', vi: 'Tôi xuống ở ga kế tiếp.' },
    { ja: 'とうきょうえきへ いきます。', vi: 'Tôi đi đến ga Tokyo.' },
    { ja: 'でんしゃが とまります。', vi: 'Tàu sắp dừng lại.' },
  ],
  translatePairs: [
    { ja: 'でんしゃに のります。', vi: 'Tôi lên tàu điện.', tokens: ['でんしゃ', 'に', 'のります'], distractors: ['おります'] },
    { ja: 'つぎの えきで おります。', vi: 'Tôi xuống ở ga kế tiếp.', tokens: ['つぎ', 'の', 'えき', 'で', 'おります'], distractors: ['のります'] },
    { ja: 'この でんしゃは きょうとへ いきます。', vi: 'Tàu này đi đến Kyoto.', tokens: ['この', 'でんしゃ', 'は', 'きょうと', 'へ', 'いきます'], distractors: ['あの'] },
    { ja: 'なんばんのりばですか。', vi: 'Nhà ga số mấy ạ?', tokens: ['なんばん', 'のりば', 'です', 'か'], distractors: ['なんじ'] },
    { ja: 'しんじゅくで のりかえます。', vi: 'Tôi chuyển tuyến ở Shinjuku.', tokens: ['しんじゅく', 'で', 'のりかえます'], distractors: ['おります'] },
  ],
  translateJaVi: [
    { ja: 'あの しんかんせんは とても はやいです。', vi: 'Con shinkansen kia nhanh lắm.', wrongVi: ['Con shinkansen này chậm lắm.', 'Con shinkansen kia đắt lắm.', 'Shinkansen của tôi nhanh quá.'] },
    { ja: 'つぎの えきで ちかてつに のりかえます。', vi: 'Ở ga kế tiếp tôi chuyển sang tàu điện ngầm.', wrongVi: ['Ở ga trước tôi xuống tàu điện ngầm.', 'Tôi đi tàu điện ngầm đến ga cuối.', 'Tàu điện ngầm dừng ở ga kế tiếp.'] },
    { ja: 'さんばんのりばは どこですか。', vi: 'Nhà ga số 3 ở đâu ạ?', wrongVi: ['Ga số 3 là mấy giờ?', 'Nhà ga số 3 đắt không?', 'Tôi ở ga số 3.'] },
  ],
  wordBank: [
    { ja: 'うちへ かえります。', vi: 'Tôi về nhà.', tokens: ['うち', 'へ', 'かえります'], distractors: ['いきます'] },
    { ja: 'あの くるまは ともだちの です。', vi: 'Con xe kia của bạn tôi.', tokens: ['あの', 'くるま', 'は', 'ともだち', 'の', 'です'], distractors: ['この'] },
  ],
  kanji: ['乗', '帰'],
  writingKana: ['え', 'き', 'で', 'ん', 'し'],
}
