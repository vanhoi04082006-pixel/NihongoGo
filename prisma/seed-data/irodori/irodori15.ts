/**
 * NihongoGo — Irodori A1 · Bài 15: でんしゃのなかで (Trên tàu điện).
 * Thông báo trên tàu, ứng xử lịch sự: つぎは〜です, 〜に のります/おります,
 * trạng từ に của tính từ な (しずかに してください). Nội dung GỐC — không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 * Provenance: ORIGINAL_GENERATED · MACHINE_REVIEWED (validator + audit).
 */
import type { IrodoriLesson } from './types'

export const irodori15: IrodoriLesson = {
  order: 15,
  slug: 'irodori-15',
  title: 'でんしゃのなかで — Trên tàu điện',
  titleJa: 'いろどり A1 でんしゃのなかで',
  description: 'Nghe thông báo, nhường ghế, giữ im lặng và cất điện thoại đúng cách — phép lịch sự trên tàu là "mặt nạ xã giao" bắt buộc ở Nhật.',
  learningObjectives: [
    'Hiểu thông báo trên tàu bằng つぎは 〜です',
    'Dùng に với động từ lên/xuống (でんしゃに のります)',
    'Yêu cầu nhẹ nhàng bằng trạng từ に (しずかに してください)',
  ],
  grammarTopics: ['つぎは 〜です — thông báo', '〜に のります / おります', 'な-adj + に — trạng từ cách'],
  vocabularyTopics: ['Trên toa tàu', 'Đồ điện tử & đồ vật', 'Tính từ môi trường'],
  kanjiTopics: ['止', '使'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'まんなか', romaji: 'mannaka', meaningVi: 'chính giữa, ở giữa', pos: 'danh từ', exampleJa: 'まんなかの せきは あいています。', exampleVi: 'Ghế ở giữa còn trống.' },
    { term: 'まど', romaji: 'mado', meaningVi: 'cửa sổ', pos: 'danh từ', exampleJa: 'まどの そばの せきです。', exampleVi: 'Là chỗ cạnh cửa sổ.' },
    { term: 'ドア', romaji: 'doa', meaningVi: 'cửa (toà nhà, tàu)', pos: 'danh từ', exampleJa: 'ドアは みぎがわで あきます。', exampleVi: 'Cửa mở ở bên phải.' },
    { term: 'でんわ', romaji: 'denwa', meaningVi: 'điện thoại', pos: 'danh từ', exampleJa: 'でんわは でません。', exampleVi: 'Điện thoại không nghe máy (không gọi được).' },
    { term: 'スマホ', romaji: 'sumaho', meaningVi: 'điện thoại thông minh', pos: 'danh từ', exampleJa: 'スマホは まんなかの ポケットに あります。', exampleVi: 'Điện thoại để trong túi giữa.' },
    { term: 'つけます', romaji: 'tsukemasu', meaningVi: 'bật (đèn, máy)', pos: 'động từ nhóm 2', exampleJa: 'でんきを つけます。', exampleVi: 'Tôi bật đèn.' },
    { term: 'けします', romaji: 'keshimasu', meaningVi: 'tắt (đèn, máy)', pos: 'động từ nhóm 1', exampleJa: 'でんわを けします。', exampleVi: 'Tôi tắt điện thoại.' },
    { term: 'しずか', romaji: 'shizuka', meaningVi: 'yên tĩnh', pos: 'tính từ な', exampleJa: 'よなかは しずかです。', exampleVi: 'Đêm khuya rất yên tĩnh.' },
    { term: 'うるさい', romaji: 'urusai', meaningVi: 'ồn ào, phiền', pos: 'tính từ い', exampleJa: 'この まちの ひとは うるさいです。', exampleVi: 'Người ở khu này ồn ào.' },
    { term: 'こみます', romaji: 'komimasu', meaningVi: 'đông, chật người', pos: 'động từ nhóm 1', exampleJa: 'あさの でんしゃは こみます。', exampleVi: 'Tàu buổi sáng rất đông.' },
    { term: 'あぶない', romaji: 'abunai', meaningVi: 'nguy hiểm', pos: 'tính từ い', exampleJa: 'ドアの まえは あぶないです。', exampleVi: 'Trước cửa thì nguy hiểm lắm.' },
    { term: 'つめたい', romaji: 'tsumetai', meaningVi: 'lạnh (chạm vào)', pos: 'tính từ い', exampleJa: 'この みずは つめたいです。', exampleVi: 'Nước này lạnh buốt.' },
    { term: 'やさしい', romaji: 'yasashii', meaningVi: 'dịu dàng, tốt bụng', pos: 'tính từ い', exampleJa: 'この せんせいは やさしいです。', exampleVi: 'Thầy này hiền lắm.' },
    { term: 'はやい', romaji: 'hayai', meaningVi: 'nhanh, sớm', pos: 'tính từ い', exampleJa: 'この でんしゃは はやいです。', exampleVi: 'Tàu này chạy nhanh.' },
  ],
  grammar: [
    {
      code: 'i15-tsugi-wa',
      title: 'つぎは 〜です — thông báo "kế tiếp là…"',
      formation: 'つぎは + [tên nơi] + です',
      explanationVi:
        'Thông báo trên tàu/bus luôn mở đầu つぎは (kế tiếp là…): つぎは しんじゅく、しんじゅくです (kế tiếp là Shinjuku). Cấu trúc 〜は 〜です quen thuộc (bài 1) nhưng つぎ thay cho chủ ngữ: つぎは きょうとです (kế tiếp là Kyoto), つぎは とうきょうえきに とまります (ga kế tàu sẽ dừng ở ga Tokyo — với とまります từ bài 13). Nghe được つぎは là kịp chuẩn bị xếp hàng ra cửa. Phủ định cũng cần: つぎは とまりません (ga kế KHÔNG dừng).',
      examples: [
        { ja: 'つぎは きょうと、きょうとです。', vi: 'Kế tiếp là Kyoto, ga Kyoto.', tokens: ['つぎ', 'は', 'きょうと', 'きょうと', 'です'] },
        { ja: 'つぎは とまりません。', vi: 'Ga kế tiếp tàu không dừng.' },
      ],
      drills: [
        {
          kind: 'fill', prompt: 'Điền từ còn thiếu (Ga kế tiếp là Shinjuku)',
          sentence: '___は しんじゅくです。',
          options: ['つぎ', 'まえ', 'うしろ', 'とおい'],
          answerIndex: 0, explanationVi: 'つぎ = kế tiếp. まえ là trước; うしろ là sau (vị trí); とおい là xa.',
        },
        {
          kind: 'choice', prompt: 'Nghe thông báo「つぎは とまりません。」— nên làm gì?',
          options: ['Chuẩn bị xuống ngay', 'Ở yên trên tàu', 'Lên tàu luôn', 'Xuống mua vé'], answerIndex: 1, explanationVi: 'とまりません = không dừng — tàu không mở cửa, bạn vẫn ngồi yên trên tàu.',
        },
        {
          kind: 'particle', prompt: 'Chọn trợ từ đúng (Kế tiếp là ga Tokyo)',
          sentence: 'つぎ___とうきょうえきです。',
          options: ['は', 'を', 'へ', 'が'],
          answerIndex: 0, explanationVi: 'つぎ là chủ ngữ của câu định nghĩa → は. Cấu trúc: つぎは N です.',
        },
        {
          kind: 'error', prompt: 'Thông báo nào SAI ngữ pháp?',
          options: ['つぎは えきです。', 'つぎは しんじゅくです。', 'つぎ は きょうとです。', 'つぎは です しんじゅく。'],
          answerIndex: 3, explanationVi: 'Trật tự chuẩn: つぎは + N + です. Đảo です lên giữa là sai hoàn toàn.',
        },
      ],
    },
    {
      code: 'i15-ni-norimasu',
      title: '〜に のります / おります — lên/xuống VÀO cái gì',
      formation: '[phương tiện / điểm dừng] + に + のります / おります',
      explanationVi:
        'Với lên/xuống phương tiện, trợ từ に chỉ ĐIỂM TIẾP XÚC: でんしゃに のります (lên tàu — vào trong tàu), えきで おります (xuống TẠI ga — nơi xảy ra hành động dùng で!). Quy tắc nhớ nhanh: のります gắn với に (vào trong tàu); おります gắn với で (xuống tại ga); とまります gắn với に (dừng VÀO ga). Câu báo trước của nhân viên: みぎがわの ドアが あきます (cửa phải sẽ mở).',
      examples: [
        { ja: 'しぶやで でんしゃに のります。', vi: 'Tôi lên tàu ở Shibuya.', tokens: ['しぶや', 'で', 'でんしゃ', 'に', 'のります'] },
        { ja: 'つぎの えきで おります。', vi: 'Tôi xuống ở ga kế tiếp.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Chọn trợ từ đúng (Tôi lên tàu điện)',
          sentence: 'でんしゃ___ のります。',
          options: ['に', 'を', 'で', 'へ'],
          answerIndex: 0, explanationVi: 'Phương tiện mình bước vào → に のります. で chỉ nơi làm hành động, を chỉ tân ngữ.',
        },
        {
          kind: 'particle', prompt: 'Chọn trợ từ đúng (Tôi xuống ở ga Shibuya)',
          sentence: 'しぶや___ おります。',
          options: ['で', 'に', 'を', 'へ'],
          answerIndex: 0, explanationVi: 'Xuống TẠI nơi nào → で (nơi hành động). に おります là lỗi kinh điển.',
        },
        {
          kind: 'error', prompt: 'Câu nào SAI cách dùng trợ từ?',
          options: ['えきで おります。', 'でんしゃに のります。', 'でんしゃを のります。', 'えきに でんしゃが とまります。'],
          answerIndex: 2, explanationVi: 'のります phải đi với に (でんしゃに のります). を は nơi nhận hành động của động từ khác.',
        },
        {
          kind: 'choice', prompt: '「Tàu dừng vào ga kế tiếp」 — câu nào đúng?',
          options: ['つぎの えきに とまります。', 'つぎの えきで とまります。', 'つぎの えきを とまります。', 'つぎの えきが のります。'],
          answerIndex: 0, explanationVi: 'とまります (dừng VÀO) đi với に: えきに とまります. Đừng nhầm với おります (で).',
        },
      ],
    },
    {
      code: 'i15-shizuka-ni',
      title: 'な-adj + に — biến tính từ thành trạng từ',
      formation: '[tính từ な] + に + động từ',
      explanationVi:
        'Tính từ な thêm に để BỔ NGỮ cho động từ (trạng từ cách): しずか → しずかに はなします (nói nhẹ nhàng), しずかに してください (hãy giữ yên tĩnh). Với tính từ い thì thay い bằng く: やさしい → やさしく はなします (nói hiền hoà). Mẫu này dùng khắp nơi trên tàu: スマホは しずかに (điện thoại để im tiếng), けして ください (tắt máy giúp). Lưu ý: うるさい là い-adj — trạng từ là うるさく, KHÔNG phải うるさに.',
      examples: [
        { ja: 'でんしゃの なかで しずかに してください。', vi: 'Trên tàu xin hãy giữ yên tĩnh.', tokens: ['でんしゃ', 'の', 'なか', 'で', 'しずかに', 'してください'] },
        { ja: 'せんせいは やさしく はなします。', vi: 'Thầy nói chuyện rất hiền hoà.' },
      ],
      drills: [
        {
          kind: 'fill', prompt: 'Điền dạng đúng (Hãy nói nhẹ nhàng)',
          sentence: 'しずか___ はなして ください。',
          options: ['に', 'な', 'の', 'を'],
          answerIndex: 0, explanationVi: 'Tính từ な + に → trạng từ bổ nghĩa động từ: しずかに はなします.',
        },
        {
          kind: 'choice', prompt: 'Trạng từ của やさしい là gì?',
          options: ['やさしいに', 'やさしく', 'やさか', 'やさしに'],
          answerIndex: 1, explanationVi: 'Tính từ い đổi い → く: やさしい → やさしく. しずか (な-adj) mới thêm に.',
        },
        {
          kind: 'error', prompt: 'Câu nào SAI dạng trạng từ?',
          options: ['しずかに してください。', 'やさしく いいます。', 'ゆっくり きます。', 'うるさに します。'],
          answerIndex: 3, explanationVi: 'うるさい là い-adj → trạng từ là うるさく. うるさに là trộn hai quy tắc — sai.',
        },
        {
          kind: 'choice', prompt: 'Nhờ ai đó TẮT điện thoại — nói thế nào?',
          options: ['でんわを つけて ください。', 'でんわを けして ください。', 'でんわに けします。', 'でんわを あけて ください。'],
          answerIndex: 1, explanationVi: 'けします = tắt → でんわを けして ください. つけて là BẬT; あけて là mở (cửa).',
        },
      ],
    },
  ],
  dialogue: {
    titleVi: 'Nhường ghế trên tàu',
    situationVi: 'An và Yamada ngồi cạnh nhau trên tàu — chuyện điện thoại, ghế trống và thông báo ga.',
    lines: [
      { speaker: 'やまだ', text: 'あんさん、この まどの そばの せきは あいていますよ。', vi: 'An ơi, chỗ cạnh cửa sổ này còn trống đó.' },
      { speaker: 'あん', text: 'ありがとうございます。ここに すわります。', vi: 'Em cảm ơn. Em ngồi đây ạ.' },
      { speaker: 'やまだ', text: 'でんしゃの なかでは しずかに してくださいね。', vi: 'Trên tàu nhớ giữ yên tĩnh nhé.' },
      { speaker: 'あん', text: 'はい。すみません、でんわを けして も いいですか。', vi: 'Vâng. À, em tắt điện thoại được không ạ?' },
      { speaker: 'やまだ', text: 'ええ、マナーモードに します。', vi: 'Ừ, để chế độ im lặng đi.' },
      { speaker: 'でんしゃ', text: 'つぎは きょうと、きょうとです。ドアは みぎがわで あきます。', vi: 'Kế tiếp là Kyoto, ga Kyoto. Cửa sẽ mở ở bên phải.' },
      { speaker: 'あん', text: 'きょうとですか。ここで おります！', vi: 'Kyoto à? Em xuống ở đây!' },
      { speaker: 'やまだ', text: 'きをつけて。あぶないですから、ドアの まえに たって ください。', vi: 'Cẩn thận nha. Nguy hiểm đấy, đứng trước cửa đi.' },
    ],
    questions: [
      { questionVi: 'An ngồi chỗ nào?', choices: ['Cạnh cửa sổ', 'Cạnh cửa tàu', 'Chỗ đứng', 'Cuối toa'], answerIndex: 0, explanationVi: 'まどの そばの せきは あいていますよ — chỗ cạnh cửa sổ còn trống.' },
      { questionVi: 'Cửa toa mở ở bên nào?', choices: ['Bên trái', 'Bên phải', 'Hai bên', 'Đầu toa'], answerIndex: 1, explanationVi: 'ドアは みぎがわで あきます — cửa mở ở bên phải.' },
      { questionVi: 'Yamada nhắc An điều gì trước khi xuống?', choices: ['Mua vé thêm', 'Đứng trước cửa nguy hiểm', 'Tắt điện thoại', 'Mang hành lý'], answerIndex: 1, explanationVi: 'あぶないですから、ドアの まえに たって ください — nhắc vì đứng trước cửa nguy hiểm.' },
    ],
  },
  listening: [
    { scriptJa: 'つぎは しんじゅくです。', meaningVi: 'Kế tiếp là Shinjuku.', choices: ['Ga này là Shinjuku', 'Kế tiếp là Shinjuku', 'Tàu không dừng ở Shinjuku', 'Tàu về cuối cùng Shinjuku'], answerIndex: 1 },
    { scriptJa: 'でんわを けして ください。', meaningVi: 'Xin tắt điện thoại giúp.', choices: ['Bật điện thoại lên', 'Tắt điện thoại giúp', 'Cầm điện thoại lại', 'Cho mượn điện thoại'], answerIndex: 1 },
    { scriptJa: 'あさの でんしゃは こみます。', meaningVi: 'Tàu buổi sáng rất đông.', choices: ['Tàu sáng chạy nhanh', 'Tàu sáng rất đông', 'Tàu sáng chạy sớm', 'Tàu sáng rẻ hơn'], answerIndex: 1 },
    { scriptJa: 'つぎは とまりません。', meaningVi: 'Ga kế tiếp tàu không dừng.', choices: ['Kế tiếp dừng', 'Kế tiếp không dừng', 'Dừng ở ga cuối', 'Xin hãy xuống'], answerIndex: 1, dictation: true },
    { scriptJa: 'ドアは みぎがわで あきます。', meaningVi: 'Cửa sẽ mở ở bên phải.', choices: ['Cửa mở bên trái', 'Cửa mở bên phải', 'Cửa không mở', 'Cửa đóng rồi'], answerIndex: 1, dictation: true },
  ],
  reading: {
    titleVi: 'Lưu ý khi đi tàu giờ cao điểm',
    lines: [
      { text: 'あさの でんしゃは とても こみます。', vi: 'Tàu buổi sáng đông vô cùng.' },
      { text: 'さきに おりる ひとの ため、ドアの そばを あけます。', vi: 'Vì người xuống trước, hãy mở toang lối cửa.' },
      { text: 'なかでは スマホを しずかに します。', vi: 'Trong toa, điện thoại để chế độ im tiếng.' },
      { text: 'うるさい でんわは だめです。', vi: 'Điện thoại ồn ào là không được.' },
      { text: 'ろうじんや こどもに せきを ゆずります。', vi: 'Nhường ghế cho người già và trẻ em.' },
      { text: 'あぶないから、つりかわに つかまって ください。', vi: 'Nguy hiểm lắm nên nắm chặt tay nắm nhé.' },
    ],
    questions: [
      { questionVi: 'Trước khi tàu đến, lối cửa phải thế nào?', choices: ['Đóng lại', 'Mở toang cho người xuống', 'Chặn lại', 'Bị khóa'], answerIndex: 1, explanationVi: 'さきに おりる ひとの ため、ドアの そばを あけます — mở lối cho người xuống trước.' },
      { questionVi: 'Điện thoại trong toa phải thế nào?', choices: ['Bật loa to', 'Để im tiếng', 'Tắt hẳn', 'Gọi thoải mái'], answerIndex: 1, explanationVi: 'スマホを しずかに します — điện thoại để im tiếng (chế độ im lặng).' },
      { questionVi: 'Phải nhường ghế cho ai?', choices: ['Bạn cùng lớp', 'Người già và trẻ em', 'Người có vé', 'Nhân viên tàu'], answerIndex: 1, explanationVi: 'ろうじんや こどもに せきを ゆずります — nhường ghế cho người già và trẻ em.' },
    ],
  },
  speakSentences: [
    { ja: 'つぎは きょうとです。', vi: 'Kế tiếp là Kyoto.' },
    { ja: 'ここに すわって も いいですか。', vi: 'Tôi ngồi đây được không ạ?' },
    { ja: 'でんしゃの なかは しずかです。', vi: 'Trong tàu rất yên tĩnh.' },
    { ja: 'ドアは みぎがわで あきます。', vi: 'Cửa sẽ mở ở bên phải.' },
    { ja: 'つりかわに つかまって ください。', vi: 'Xin nắm chặt tay nắm.' },
  ],
  translatePairs: [
    { ja: 'つぎは きょうとです。', vi: 'Kế tiếp là Kyoto.', tokens: ['つぎ', 'は', 'きょうと', 'です'], distractors: ['まえ'] },
    { ja: 'でんしゃに のります。', vi: 'Tôi lên tàu.', tokens: ['でんしゃ', 'に', 'のります'], distractors: ['おります'] },
    { ja: 'でんわを けして ください。', vi: 'Xin tắt điện thoại giúp.', tokens: ['でんわ', 'を', 'けして', 'ください'], distractors: ['つけて'] },
    { ja: 'しずかに はなして ください。', vi: 'Xin hãy nói nhẹ nhàng.', tokens: ['しずかに', 'はなして', 'ください'], distractors: ['うるさく'] },
    { ja: 'あさの でんしゃは こみます。', vi: 'Tàu buổi sáng rất đông.', tokens: ['あさ', 'の', 'でんしゃ', 'は', 'こみます'], distractors: ['はやい'] },
  ],
  translateJaVi: [
    { ja: 'この せきは あいていますか。', vi: 'Ghế này còn trống không ạ?', wrongVi: ['Ghế này đắt không ạ?', 'Ghế này của bạn à?', 'Tôi ngồi ghế này nhé?'] },
    { ja: 'うるさいですから、しずかに してください。', vi: 'Vì ồn ào nên xin hãy giữ yên tĩnh.', wrongVi: ['Vì yên tĩnh nên hãy nói to lên.', 'Ồn quá, mình ra ngoài đi.', 'Yên tĩnh hơn không được sao?'] },
    { ja: 'つぎの えきは とても あぶないです。', vi: 'Ga kế tiếp rất nguy hiểm.', wrongVi: ['Ga kế tiếp rất tiện lợi.', 'Ga kế tiếp rất rộng rãi.', 'Ga kế tiếp rất vắng người.'] },
  ],
  wordBank: [
    { ja: 'スマホを しずかに します。', vi: 'Tôi để điện thoại im tiếng.', tokens: ['スマホ', 'を', 'しずかに', 'します'], distractors: ['つけます'] },
    { ja: 'この せきは やさしい せんせいの です。', vi: 'Ghế này của thầy hiền lành.', tokens: ['この', 'せき', 'は', 'やさしい', 'せんせい', 'の', 'です'], distractors: ['あの'] },
  ],
  kanji: ['止', '使'],
  writingKana: ['つ', 'ぎ', 'は', 'く', 'も'],
}
