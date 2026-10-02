/**
 * NihongoGo — Bài 7: 誘いと提案 (Lời mời & đề nghị — 〜ませんか・〜ましょう).
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson7: CurriculumLesson = {
  order: 7,
  slug: 'l7-loi-moi-de-nghi',
  title: 'Lời mời & đề nghị — 〜ませんか・〜ましょう',
  titleJa: '誘いと提案',
  description: 'Mời ai cùng làm gì một cách lịch sự với 〜ませんか và đề nghị cùng hành động với 〜ましょう.',
  learningObjectives: [
    'Mời lịch sự bằng 〜ませんか',
    'Đề nghị cùng làm bằng 〜ましょう',
    'Chấp nhận hoặc từ chối lời mời một cách tự nhiên',
  ],
  grammarTopics: ['〜ませんか (lời mời lịch sự)', '〜ましょう (cùng làm nhé)'],
  vocabularyTopics: ['Hoạt động cuối tuần', 'Mẫu câu chấp nhận và từ chối'],
  kanjiTopics: [],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'いっしょに', romaji: 'issho ni', meaningVi: 'cùng nhau, cùng với nhau', pos: 'phó từ', exampleJa: 'いっしょに えいがを みませんか。', exampleVi: 'Cùng xem phim nhé?' },
    { term: 'こんど', romaji: 'kondo', meaningVi: 'lần này tới, dịp sau', pos: 'danh từ', exampleJa: 'こんど カラオケへ いきませんか。', exampleVi: 'Dịp này cùng đi karaoke nhé?' },
    { term: 'ええ', romaji: 'ee', meaningVi: 'vâng, ừ (đồng ý)', pos: 'thán từ', exampleJa: 'ええ、いいですね。', exampleVi: 'Vâng, hay đấy.' },
    { term: 'いいですね', romaji: 'ii desu ne', meaningVi: 'hay đấy, được đấy', pos: 'cụm từ', exampleJa: 'ええ、いいですね。', exampleVi: 'Vâng, hay đấy.' },
    { term: 'ちょっと', romaji: 'chotto', meaningVi: 'một chút (dùng để từ chối nhẹ)', pos: 'phó từ', exampleJa: 'すみません、ちょっと…', exampleVi: 'Xin lỗi, tôi hơi bận…' },
    { term: 'また', romaji: 'mata', meaningVi: 'lại, lần nữa', pos: 'phó từ', exampleJa: 'また あいましょう。', exampleVi: 'Hẹn gặp lại nhé.' },
    { term: 'そうしましょう', romaji: 'sō shimashō', meaningVi: 'làm vậy nhé (đồng ý)', pos: 'cụm từ', exampleJa: 'ええ、そうしましょう。', exampleVi: 'Vâng, làm vậy nhé.' },
    { term: 'あいます', romaji: 'aimasu', meaningVi: 'gặp, gặp gỡ', pos: 'động từ nhóm 1', exampleJa: 'ともだちに あいます。', exampleVi: 'Tôi gặp bạn.' },
    { term: 'カラオケ', romaji: 'karaoke', meaningVi: 'karaoke', pos: 'danh từ', exampleJa: 'カラオケへ いきませんか。', exampleVi: 'Cùng đi karaoke nhé?' },
    { term: 'うた', romaji: 'uta', meaningVi: 'bài hát', pos: 'danh từ', exampleJa: 'うたを うたいます。', exampleVi: 'Tôi hát một bài.' },
    { term: 'うたいます', romaji: 'utaimasu', meaningVi: 'hát', pos: 'động từ nhóm 1', exampleJa: 'カラオケで うたいます。', exampleVi: 'Tôi hát ở quán karaoke.' },
    { term: 'およぎます', romaji: 'oyogimasu', meaningVi: 'bơi', pos: 'động từ nhóm 1', exampleJa: 'まいにち およぎます。', exampleVi: 'Tôi bơi mỗi ngày.' },
    { term: 'はなします', romaji: 'hanashimasu', meaningVi: 'nói, nói chuyện', pos: 'động từ nhóm 1', exampleJa: 'にほんごを はなします。', exampleVi: 'Tôi nói tiếng Nhật.' },
    { term: 'あそびます', romaji: 'asobimasu', meaningVi: 'đi chơi, vui chơi', pos: 'động từ nhóm 1', exampleJa: 'にちようびに ともだちと あそびます。', exampleVi: 'Chủ nhật tôi đi chơi với bạn.' },
    { term: 'もちろん', romaji: 'mochiron', meaningVi: 'tất nhiên, dĩ nhiên', pos: 'phó từ', exampleJa: 'もちろん、いきます。', exampleVi: 'Tất nhiên là tôi đi.' },
    { term: 'だいじょうぶ', romaji: 'daijōbu', meaningVi: 'không sao, ổn', pos: 'danh từ', exampleJa: 'あしたは だいじょうぶです。', exampleVi: 'Ngày mai tôi ổn.' },
    { term: 'ひま', romaji: 'hima', meaningVi: 'rảnh, có thời gian rảnh', pos: 'tính từ な', exampleJa: 'にちようびは ひまです。', exampleVi: 'Chủ nhật tôi rảnh.' },
    { term: 'プール', romaji: 'pūru', meaningVi: 'hồ bơi', pos: 'danh từ', exampleJa: 'プールへ いきませんか。', exampleVi: 'Cùng đến hồ bơi nhé?' },
    { term: 'ざんねん', romaji: 'zannen', meaningVi: 'tiếc, nuối tiếc', pos: 'tính từ な', exampleJa: 'ざんねんですね。', exampleVi: 'Tiếc nhỉ.' },
    { term: 'パーティー', romaji: 'pātī', meaningVi: 'bữa tiệc, tiệc', pos: 'danh từ', exampleJa: 'パーティーを します。', exampleVi: 'Tôi tổ chức tiệc.' },
    { term: 'さんぽします', romaji: 'sanposhimasu', meaningVi: 'đi dạo', pos: 'động từ nhóm 3', exampleJa: 'あさ さんぽします。', exampleVi: 'Buổi sáng tôi đi dạo.' },
  ],
  grammar: [
    {
      code: 'l7-masen-ka',
      title: '〜ませんか — lời mời lịch sự',
      formation: 'Gốc động từ + ませんか',
      explanationVi:
        'Lấy phần trước ます rồi thêm ませんか để MỜI ai cùng làm gì một cách nhẹ nhàng: いきます → いきませんか = «đi (cùng mình) nhé?», たべます → たべませんか = «ăn cùng nhé?». Tuy có chữ ません nhưng đây KHÔNG phải phủ định — đừng dịch là «không đi»! Trước lời mời hay thêm いっしょに (cùng nhau) cho rõ ý. Cách đáp lời mời: đồng ý → ええ、いいですね (Vâng, hay đấy) hoặc そうしましょう (Làm vậy nhé); từ chối → すみません、ちょっと… (Xin lỗi, hơi bận…) — người Nhật tránh nói thẳng «いいえ» khi từ chối.',
      examples: [
        { ja: 'いっしょに えいがを みませんか。', vi: 'Cùng xem phim nhé?', tokens: ['いっしょに', 'えいが', 'を', 'みませんか'] },
        { ja: 'こんど テニスを しませんか。', vi: 'Dịp này chơi quần vợt nhé?' },
        { ja: 'こうえんへ いきませんか。', vi: 'Đến công viên chơi nhé?' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'Mời bạn cùng đi đến công viên — điền đuôi động từ.',
          sentence: 'いっしょに こうえんへ い___。',
          options: ['きませんか', 'きます', 'きません', 'きますか'],
          answerIndex: 0, explanationVi: 'Lời mời lịch sự: いきます → いきませんか. きます chỉ là khẳng định, きません là phủ định, きますか chỉ là câu hỏi đúng/sai.',
        },
        {
          kind: 'choice', prompt: '「Cùng uống cà phê nhé?」 câu mời đúng là?',
          options: ['いっしょに コーヒーを のみません。', 'いっしょに コーヒーを のみます。', 'いっしょに コーヒーを のみませんか。', 'いっしょに コーヒーを のみです。'],
          answerIndex: 2, explanationVi: 'のみます → のみませんか là lời mời. のみません là phủ định («tôi không uống»), のみです sai đuôi động từ.',
        },
        {
          kind: 'error', prompt: 'Câu nào là lời mời lịch sự?',
          options: ['テニスを しません。', 'テニスを します。', 'テニスを しましせんか。', 'テニスを しませんか。'],
          answerIndex: 3, explanationVi: 'Lời mời là しませんか (します → しませんか). しません = «tôi không chơi», します = khẳng định thường, しましせんか viết sai chính tả.',
        },
        {
          kind: 'choice', prompt: 'Bạn ĐỒNG Ý với lời mời 「テニスを しませんか。」 — nên nói gì?',
          options: ['ええ、いいですね。', 'すみません、ちょっと…', 'なにを しますか。', 'だれですか。'],
          answerIndex: 0, explanationVi: 'Đồng ý lời mời: ええ、いいですね (Vâng, hay đấy). すみません、ちょっと… là từ chối; hai câu còn lại là hỏi lại, không phải đáp lời mời.',
        },
        {
          kind: 'choice', prompt: 'Muốn TỪ CHỐI lời mời một cách lịch sự, nói thế nào?',
          options: ['ええ、そうしましょう。', 'すみません、ちょっと…', 'はい、いきます。', 'もちろん、いきます。'],
          answerIndex: 1, explanationVi: 'Từ chối lịch sự: すみません、ちょっと… (Xin lỗi, hơi bận…). Ba câu còn lại đều là đồng ý.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ: 「Cùng đến quán karaoke nhé?」',
          sentence: 'いっしょに カラオケ___ いきませんか。',
          options: ['へ', 'を', 'と', 'で'],
          answerIndex: 0, explanationVi: 'カラオケ là nơi đến → へ (bài 5). を là tân ngữ, と là người cùng đi, で là phương tiện.',
        },
      ],
    },
    {
      code: 'l7-mashou',
      title: '〜ましょう — đề nghị cùng làm',
      formation: 'Gốc động từ + ましょう',
      explanationVi:
        'Lấy phần trước ます rồi thêm ましょう để ĐỀ NGHỊ cùng làm: いきます → いきましょう = «mình đi nhé», うたいます → うたいましょう = «mình hát nhé», さんぽします → さんぽしましょう = «mình đi dạo nhé». So với ませんか (mời và hỏi ý kiến đối phương), ましょう thể hiện ý muốn chủ động, tự tin hơn của người nói. Khi đồng ý với một đề nghị, có thể đáp そうしましょう = «vậy làm vậy nhé». Chú ý ghép đuôi: たべます → たべましょう, ききます → ききましょう, します → しましょう.',
      examples: [
        { ja: 'いっしょに テニスを しましょう。', vi: 'Cùng chơi quần vợt nhé.', tokens: ['いっしょに', 'テニス', 'を', 'しましょう'] },
        { ja: 'あした こうえんへ いきましょう。', vi: 'Ngày mai mình cùng đến công viên nhé.', tokens: ['あした', 'こうえん', 'へ', 'いきましょう'] },
        { ja: 'そうしましょう。', vi: 'Vậy mình làm thế nhé.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'Điền đuôi để đề nghị cùng làm: 「Mình cùng nghe nhạc nhé。」',
          sentence: 'おんがくを き___。',
          options: ['きます', 'きましょう', 'きません', 'きませんか'],
          answerIndex: 1, explanationVi: 'Đề nghị trực tiếp: ききます → ききましょう. きます là khẳng định, きません là phủ định, きませんか là lời mời hỏi ý kiến.',
        },
        {
          kind: 'choice', prompt: '「Mình cùng xem phim nhé。」 câu đúng là?',
          options: ['えいがを みません。', 'えいがを みましょう。', 'えいがを みます。', 'えいがを みましょうです。'],
          answerIndex: 1, explanationVi: 'みます → みましょう = «mình cùng xem nhé». みません là phủ định, みます thiếu ý «cùng», みましょうです sai đuôi.',
        },
        {
          kind: 'fill', prompt: 'Điền phần gốc động từ: 「Mình cùng đi dạo nhé。」',
          sentence: 'いっしょに ___ましょう。',
          options: ['さんぽし', 'さんぽ', 'さんぽす', 'さんぽする'],
          answerIndex: 0, explanationVi: 'さんぽします → lấy phần trước ます là さんぽし, rồi thêm ましょう: さんぽしましょう. Các dạng còn lại đều sai cấu trúc.',
        },
        {
          kind: 'error', prompt: 'Câu đề nghị đúng là?',
          options: ['うたを うたいましょう。', 'うたを うたましょう。', 'うたを うたいますましょう。', 'うたを うたうましょう。'],
          answerIndex: 0, explanationVi: 'うたいます → うたいましょう (giữ nguyên phần うたい). うたましょう bị mất い, うたいますましょう ghép thừa ます, うたうましょう ghép sai gốc.',
        },
        {
          kind: 'choice', prompt: '「そうしましょう。」 dùng trong trường hợp nào?',
          options: ['Đồng ý với một đề nghị', 'Từ chối lời mời', 'Nói mình làm một mình', 'Hỏi giờ'],
          answerIndex: 0, explanationVi: 'そうしましょう = «vậy làm vậy nhé» — câu đáp đồng ý sau khi nghe đề nghị 〜ましょう / 〜ませんか.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Rủ đi xem phim',
      situationVi: 'Tanaka rủ Linh đi xem phim.',
      lines: [
        { speaker: 'たなか', ja: 'リンさん、こんど えいがを みませんか。', vi: 'Linh, dịp này cùng xem phim nhé?' },
        { speaker: 'リン', ja: 'ええ、いいですね。', vi: 'Vâng, hay đấy.' },
        { speaker: 'たなか', ja: 'どようびは ひまですか。', vi: 'Thứ Bảy bạn có rảnh không?' },
        { speaker: 'リン', ja: 'はい、ひまです。', vi: 'Vâng, tôi rảnh.' },
        { speaker: 'たなか', ja: 'なんじから みますか。', vi: 'Xem từ mấy giờ?' },
        { speaker: 'リン', ja: 'ごご はちじから みましょう。', vi: 'Mình xem từ 8 giờ tối nhé.' },
        { speaker: 'たなか', ja: 'ええ、そうしましょう。', vi: 'Vâng, làm vậy nhé.' },
        { speaker: 'リン', ja: 'いっしょに えいがかんへ いきましょう。', vi: 'Mình cùng đến rạp phim nhé.' },
      ],
    },
    {
      titleVi: 'Từ chối lịch sự',
      situationVi: 'Linh rủ Tanaka đi karaoke nhưng Tanaka bận việc.',
      lines: [
        { speaker: 'リン', ja: 'たなかさん、こんど カラオケへ いきませんか。', vi: 'Tanaka, dịp này cùng đi karaoke nhé?' },
        { speaker: 'たなか', ja: 'すみません、こんどは ちょっと…', vi: 'Xin lỗi, lần này tôi hơi bận…' },
        { speaker: 'リン', ja: 'しごとですか。', vi: 'Bạn bận việc à?' },
        { speaker: 'たなか', ja: 'ええ、きんようびまで しごとです。', vi: 'Vâng, tôi làm việc đến thứ Sáu.' },
        { speaker: 'リン', ja: 'ざんねんですね。', vi: 'Tiếc nhỉ.' },
        { speaker: 'たなか', ja: 'すみません。こんど いっしょに いきましょう。', vi: 'Xin lỗi nhé. Lần sau mình cùng đi nhé.' },
        { speaker: 'リン', ja: 'はい、そうしましょう。', vi: 'Vâng, làm vậy nhé.' },
        { speaker: 'たなか', ja: 'また あいましょう。', vi: 'Hẹn gặp lại nhé.' },
        { speaker: 'リン', ja: 'ええ、また あいましょう。', vi: 'Vâng, hẹn gặp lại.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'いっしょに テニスを しませんか。', meaningVi: 'Cùng chơi quần vợt nhé?', choices: ['Mời cùng chơi quần vợt', 'Nói rằng không chơi quần vợt', 'Mời cùng xem phim', 'Hỏi giờ chơi quần vợt'], answerIndex: 0, dictation: true },
    { scriptJa: 'あした こうえんへ いきませんか。', meaningVi: 'Ngày mai đi đến công viên nhé?', choices: ['Mời đến công viên hôm nay', 'Tuyên bố sẽ đến công viên ngày mai', 'Mời đến công viên ngày mai', 'Mời đến hồ bơi ngày mai'], answerIndex: 2 },
    { scriptJa: 'いっしょに おんがくを ききましょう。', meaningVi: 'Cùng nghe nhạc nhé.', choices: ['Đề nghị cùng nghe nhạc', 'Đề nghị cùng hát', 'Từ chối nghe nhạc', 'Hỏi mấy giờ nghe nhạc'], answerIndex: 0, dictation: true },
    { scriptJa: 'すみません、ちょっと…', meaningVi: 'Xin lỗi, tôi hơi bận… (từ chối lịch sự)', choices: ['Đồng ý với lời mời', 'Từ chối lời mời một cách lịch sự', 'Mời ai cùng làm gì', 'Cảm ơn ai'], answerIndex: 1 },
    { scriptJa: 'パーティーを しませんか。', meaningVi: 'Tổ chức tiệc nhé?', choices: ['Mời cùng tổ chức tiệc', 'Từ chối tổ chức tiệc', 'Đề nghị cùng hát ở tiệc', 'Hỏi tiệc lúc mấy giờ'], answerIndex: 0 },
  ],
  reading: {
    titleVi: 'Chủ nhật ở quán karaoke',
    lines: [
      { text: 'こんど の にちようび、たなかさんは リンさんと カラオケへ いきます。', vi: 'Chủ nhật này, Tanaka đến karaoke cùng Linh.' },
      { text: 'ごご さんじに いきます。', vi: 'Họ đi lúc 3 giờ chiều.' },
      { text: 'リンさんは うたを うたいます。', vi: 'Linh hát.' },
      { text: 'たなかさんは うたを うたいません。', vi: 'Tanaka không hát.' },
      { text: 'たなかさんは おんがくを ききます。', vi: 'Tanaka nghe nhạc.' },
      { text: 'ごご ろくじに うちへ かえります。', vi: 'Lúc 6 giờ tối họ về nhà.' },
      { text: 'また こんど いっしょに カラオケへ いきます。', vi: 'Lần sau họ lại cùng đến karaoke nữa.' },
    ],
    questions: [
      { questionVi: 'Chủ nhật này Tanaka đi đâu cùng Linh?', choices: ['Hồ bơi', 'Quán karaoke', 'Rạp chiếu phim', 'Công viên'], answerIndex: 1, explanationVi: 'リンさんと カラオケへ いきます — đi đến karaoke cùng Linh.' },
      { questionVi: 'Ở quán karaoke, Tanaka làm gì?', choices: ['Hát', 'Đọc báo', 'Nghe nhạc', 'Chơi quần vợt'], answerIndex: 2, explanationVi: 'たなかさんは うたを うたいません。おんがくを ききます — Tanaka không hát mà nghe nhạc.' },
      { questionVi: 'Họ đến karaoke lúc mấy giờ?', choices: ['6 giờ tối', '3 giờ chiều', '3 giờ sáng', '8 giờ tối'], answerIndex: 1, explanationVi: 'ごご さんじに いきます = đi lúc 3 giờ chiều (ごご さんじ).' },
    ],
  },
  speakSentences: [
    { ja: 'いっしょに えいがを みませんか。', vi: 'Cùng xem phim nhé?' },
    { ja: 'ええ、いいですね。', vi: 'Vâng, hay đấy.' },
    { ja: 'いっしょに さんぽしましょう。', vi: 'Mình cùng đi dạo nhé.' },
    { ja: 'また あいましょう。', vi: 'Hẹn gặp lại nhé.' },
  ],
  translatePairs: [
    { ja: 'いっしょに テニスを しませんか。', vi: 'Cùng chơi quần vợt nhé?', tokens: ['いっしょに', 'テニス', 'を', 'しませんか'], distractors: ['へ'] },
    { ja: 'えいがを みましょう。', vi: 'Mình cùng xem phim nhé.', tokens: ['えいが', 'を', 'みましょう'], distractors: ['に', 'と'] },
    { ja: 'あした こうえんへ いきませんか。', vi: 'Ngày mai đến công viên nhé?', tokens: ['あした', 'こうえん', 'へ', 'いきませんか'], distractors: ['を'] },
    { ja: 'こんど カラオケへ いきませんか。', vi: 'Dịp này cùng đi karaoke nhé?', tokens: ['こんど', 'カラオケ', 'へ', 'いきませんか'], distractors: ['で'] },
    { ja: 'にちようびに さんぽしませんか。', vi: 'Chủ nhật cùng đi dạo nhé?', tokens: ['にちようび', 'に', 'さんぽしませんか'], distractors: ['へ'] },
  ],
  kanji: [],
}
