/**
 * NihongoGo — Bài 27: 〜ていく・〜てくる (chuyển biến theo thời gian & di chuyển).
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson27: CurriculumLesson = {
  order: 27,
  slug: 'l27-te-iku-kuru',
  title: '〜ていく・〜てくる — Chuyển biến theo thời gian',
  titleJa: '〜ていく・〜てくる',
  description: 'Diễn tả sự thay đổi diễn ra về sau (ていく) và diễn ra đến hiện tại (てくる).',
  learningObjectives: [
    'Dùng 〜ていく cho xu hướng phía trước',
    'Dùng 〜てくる cho diễn biến đến hiện tại',
    'Kể về sự thay đổi theo thời gian',
  ],
  grammarTopics: ['〜ていく (tiếp diễn về sau)', '〜てくる (diễn biến đến hiện tại)'],
  vocabularyTopics: ['Sự thay đổi', 'Từ nói về xu hướng'],
  kanjiTopics: ['Kanji chuyển động (出・向・越)'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'だんだん', romaji: 'dandan', meaningVi: 'dần dần, mỗi lúc một', pos: 'phó từ', exampleJa: 'だんだん さむく なって きました。', exampleVi: 'Trời dần lạnh lên.' },
    { term: 'これから', romaji: 'kore kara', meaningVi: 'từ giờ trở đi, từ nay', pos: 'danh từ (trạng ngữ)', exampleJa: 'これから にほんごを べんきょうします。', exampleVi: 'Từ giờ tôi học tiếng Nhật.' },
    { term: 'さいきん', romaji: 'saikin', meaningVi: 'dạo này, gần đây', pos: 'danh từ (trạng ngữ)', exampleJa: 'さいきん、よく あめが ふります。', exampleVi: 'Dạo này trời hay mưa.' },
    { term: 'もうすぐ', romaji: 'mōsugu', meaningVi: 'sắp, không lâu nữa', pos: 'trạng ngữ', exampleJa: 'もうすぐ ふゆです。', exampleVi: 'Sắp đến mùa đông rồi.' },
    { term: 'むかし', romaji: 'mukashi', meaningVi: 'ngày xưa, trước kia', pos: 'danh từ (trạng ngữ)', exampleJa: 'むかしは でんしゃが ありませんでした。', exampleVi: 'Ngày xưa chưa có tàu điện.' },
    { term: 'なります', romaji: 'narimasu', meaningVi: 'trở nên, trở thành', pos: 'động từ nhóm 1', exampleJa: 'あしたから ふゆに なります。', exampleVi: 'Từ ngày mai chuyển sang mùa đông.' },
    { term: 'さむい', romaji: 'samui', meaningVi: 'lạnh (thời tiết)', pos: 'tính từ い', exampleJa: 'とうきょうの ふゆは さむいです。', exampleVi: 'Mùa đông ở Tokyo lạnh.' },
    { term: 'すずしい', romaji: 'suzushii', meaningVi: 'mát mẻ', pos: 'tính từ い', exampleJa: 'あきは すずしいです。', exampleVi: 'Mùa thu mát mẻ.' },
    { term: 'ふゆ', romaji: 'fuyu', meaningVi: 'mùa đông', pos: 'danh từ', exampleJa: 'ふゆに なって、ゆきが ふります。', exampleVi: 'Đến mùa đông thì có tuyết rơi.' },
    { term: 'はる', romaji: 'haru', meaningVi: 'mùa xuân', pos: 'danh từ', exampleJa: 'はるに なって、あたたかく なりました。', exampleVi: 'Đến mùa xuân, trời ấm lên.' },
    { term: 'きせつ', romaji: 'kisetsu', meaningVi: 'mùa', pos: 'danh từ', exampleJa: 'にほんには きせつが よっつ あります。', exampleVi: 'Ở Nhật có bốn mùa.' },
    { term: 'かわります', romaji: 'kawarimasu', meaningVi: 'thay đổi, đổi khác', pos: 'động từ nhóm 1', exampleJa: 'この まちは だんだん かわります。', exampleVi: 'Thị trấn này dần thay đổi.' },
    { term: 'ふえます', romaji: 'fuemasu', meaningVi: 'tăng, đông lên', pos: 'động từ nhóm 2', exampleJa: 'まちの ひとが だんだん ふえます。', exampleVi: 'Người trong thị trấn dần đông lên.' },
    { term: '出口', reading: 'でぐち', romaji: 'deguchi', meaningVi: 'lối ra, cửa ra', pos: 'danh từ', exampleJa: 'えきの 出口は あそこです。', exampleVi: 'Lối ra của nhà ga ở kia.' },
    { term: '出発します', reading: 'しゅっぱつします', romaji: 'shuppatsushimasu', meaningVi: 'khởi hành, xuất phát', pos: 'động từ nhóm 3', exampleJa: 'バスは あさ 七じに 出発します。', exampleVi: 'Xe buýt khởi hành lúc 7 giờ sáng.' },
    { term: '向かいます', reading: 'むかいます', romaji: 'mukaimasu', meaningVi: 'hướng tới, đi về phía', pos: 'động từ nhóm 1', exampleJa: 'えきに 向かいます。', exampleVi: 'Tôi đi về phía nhà ga.' },
    { term: '越えます', reading: 'こえます', romaji: 'koemasu', meaningVi: 'vượt qua (núi, ranh giới)', pos: 'động từ nhóm 2', exampleJa: 'この やまを 越えます。', exampleVi: 'Tôi vượt qua ngọn núi này.' },
    { term: 'にもつ', romaji: 'nimotsu', meaningVi: 'hành lý', pos: 'danh từ', exampleJa: 'にもつが おもいです。', exampleVi: 'Hành lý nặng.' },
    { term: 'もちます', romaji: 'mochimasu', meaningVi: 'mang, cầm, xách', pos: 'động từ nhóm 1', exampleJa: 'にもつを もちます。', exampleVi: 'Tôi xách hành lý.' },
    { term: 'ひっこし', romaji: 'hikkoshi', meaningVi: 'việc chuyển nhà', pos: 'danh từ', exampleJa: 'いなかに ひっこしします。', exampleVi: 'Tôi chuyển về quê.' },
    { term: 'いなか', romaji: 'inaka', meaningVi: 'vùng quê, nông thôn', pos: 'danh từ', exampleJa: 'いなかは しずかです。', exampleVi: 'Vùng quê yên tĩnh.' },
    { term: 'そと', romaji: 'soto', meaningVi: 'bên ngoài', pos: 'danh từ', exampleJa: 'そとが さむいです。', exampleVi: 'Bên ngoài trời lạnh.' },
  ],
  grammar: [
    {
      code: 'l27-te-kuru',
      title: '〜てくる — diễn biến đến hiện tại / di chuyển về phía mình',
      formation: 'Vて + きます: なって きます・もって きます; quá khứ: 〜て きました',
      explanationVi:
        'てくる có hai cách dùng. (1) CHUYỂN BIẾN ĐẾN HIỆN TẠI: thay đổi bắt đầu từ trước và kéo dài đến bây giờ — だんだん さむく なって きました = "trời lạnh dần lên (cho đến giờ này)"; ゆきが ふって きました = "tuyết bắt đầu rơi (và giờ vẫn rơi)". Thường đi với だんだん・さいきん. (2) DI CHUYỂN VỀ PHÍA NGƯỜI NÓI: ともだちが おかしを もって きました = "bạn mang bánh đến (chỗ tôi)". Vì hay ghép với なって, ôn lại cách đổi: tính từ い bỏ い thêm く (さむい → さむく), tính từ な và danh từ thêm に (しずか → しずかに, ふゆ → ふゆに) rồi + なって きました.',
      examples: [
        { ja: 'だんだん さむく なって きました。', vi: 'Trời dần lạnh lên (tính đến bây giờ).', tokens: ['だんだん', 'さむく', 'なって', 'きました'] },
        { ja: 'さいきん、まちの ひとが ふえて きました。', vi: 'Dạo này người trong thị trấn đông dần lên.' },
        { ja: 'ゆきが ふって きました。', vi: 'Trời bắt đầu tuyết rơi (và bây giờ vẫn rơi).' },
        { ja: 'ともだちが おかしを もって きました。', vi: 'Bạn tôi mang bánh đến.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '「だんだん さむく なって きました。」 — sự thay đổi diễn ra trong khoảng thời gian nào?',
          options: ['Từ trước đến bây giờ', 'Từ bây giờ về sau', 'Chỉ đúng hôm qua', 'Không có sự thay đổi nào'],
          answerIndex: 0, explanationVi: 'て きました = quá trình bắt đầu từ trước, kéo dài đến hiện tại; だんだん nhấn mạnh mức độ tăng dần.',
        },
        {
          kind: 'conjugate', prompt: 'なります → dạng て + くる (Dạo này trời ấm dần lên)',
          sentence: 'さいきん、あたたかく ___ きました。',
          options: ['なった', 'なって', 'なりて', 'なります'],
          answerIndex: 1, explanationVi: 'なります là nhóm 1 (なる): る → って → なって + きました. なった là thể た, なりて là cách chia kiểu nhóm 2 (sai).',
        },
        {
          kind: 'fill', prompt: 'Điền trợ động từ đúng (Dạo này trời hay mưa, tính đến bây giờ)',
          sentence: 'さいきん、よく あめが ふって ___ きました。',
          options: ['いって', 'きて', 'みて', 'おいて'],
          answerIndex: 1, explanationVi: 'Mưa bắt đầu từ trước và còn tiếp đến nay → てくる. ていく là cho tương lai, てみる・ておく mang sắc thái khác.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ (Đến mùa đông thì tuyết bắt đầu rơi)',
          sentence: 'ふゆ___ なって、ゆきが ふって きます。',
          options: ['に', 'を', 'が', 'で'],
          answerIndex: 0, explanationVi: 'Danh từ + に + なって (ふゆに なって) = "trở thành mùa đông". を đánh dấu tân ngữ, が đánh dấu chủ ngữ — không đứng trước なって chỉ kết quả biến đổi.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['ゆきが ふって きした。', 'ゆきが ふった きました。', 'ゆきが ふって きました。', 'ゆきが ふって くるました。'],
          answerIndex: 2, explanationVi: 'Ghép trực tiếp thể て + きました: ふって きました. Không chen た vào giữa (ふった きました), không biến きます thành きした・くるました.',
        },
        {
          kind: 'choice', prompt: 'Hành động nào di chuyển VỀ PHÍA người nói?',
          options: ['にもつを もって いきます。', 'にもつを もって きます。', 'にもつを かって おきます。', 'にもつが ふえて いきます。'],
          answerIndex: 1, explanationVi: 'もって きます = mang đồ đến chỗ người nói; もって いきます = mang đi xa khỏi người nói. Hai câu còn lại không diễn tả hướng di chuyển về phía người nói.',
        },
      ],
    },
    {
      code: 'l27-te-iku',
      title: '〜ていく — tiếp diễn về sau / di chuyển rời xa',
      formation: 'Vて + いきます: なって いきます・もって いきます; quá khứ: 〜て いきました',
      explanationVi:
        'ていく mang hướng ngược với てくる. (1) CHUYỂN BIẾN TỪ NAY VỀ SAU: これから さむく なって いきます = "từ giờ trời sẽ lạnh dần về sau" — thường đi với これから. (2) DI CHUYỂN RỜI XA NGƯỜI NÓI: にもつを もって いきます = "mang hành lý đi (khỏi chỗ này)"; らいねん、いなかに ひっこしして いきます = "năm sau tôi sẽ chuyển về quê, rời nơi này". Chia: ていきます・ていきました. Mẹo phân biệt: hướng về người nói hoặc diễn ra đến hiện tại → てくる; rời người nói hoặc diễn ra về sau → ていく. Cả hai mẫu đều ghép trực tiếp sau động từ thể て hoặc sau なって.',
      examples: [
        { ja: 'これから べんきょうして いきます。', vi: 'Từ giờ trở đi, tôi sẽ tiếp tục học.', tokens: ['これから', 'べんきょう', 'して', 'いきます'] },
        { ja: 'これから だんだん あつく なって いきます。', vi: 'Từ giờ trời sẽ nóng dần lên.' },
        { ja: 'らいねん、いなかに ひっこしして いきます。', vi: 'Năm sau tôi sẽ chuyển về quê (rời nơi này).' },
        { ja: 'にもつを もって いきます。', vi: 'Tôi mang hành lý đi (khỏi đây).' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '「これから べんきょうして いきます。」 có nghĩa là gì?',
          options: ['Tôi đã học từ trước đến giờ', 'Từ giờ tôi sẽ tiếp tục học', 'Tôi thử học một lần xem sao', 'Tôi học cho xong hết hôm nay'],
          answerIndex: 1, explanationVi: 'これから (từ giờ) + て いきます = hành động tiếp diễn về phía tương lai.',
        },
        {
          kind: 'conjugate', prompt: 'なります → dạng て + いく (Từ giờ trời sẽ lạnh dần về sau)',
          sentence: 'これから さむく ___ いきます。',
          options: ['なった', 'なりて', 'なって', 'なります'],
          answerIndex: 2, explanationVi: 'なる → なって + いきます. なった là thể た, なりて là cách chia kiểu nhóm 2 (sai), còn なります là dạng lịch sự — không dùng trực tiếp trước いきます.',
        },
        {
          kind: 'fill', prompt: 'Điền trợ động từ đúng (Năm sau tôi sẽ chuyển về quê, rời nơi này)',
          sentence: 'らいねん、いなかに ひっこしして ___。',
          options: ['いきます', 'きます', 'しまいます', 'みます'],
          answerIndex: 0, explanationVi: 'Chuyển nhà = rời xa nơi người nói đang ở, việc xảy ra về sau → ていく. てくる là hướng về phía người nói hoặc diễn biến đến hiện tại.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ (Tôi đi bộ đến nhà ga)',
          sentence: 'えき___ あるいて いきます。',
          options: ['まで', 'を', 'が', 'の'],
          answerIndex: 0, explanationVi: 'まで chỉ điểm kết thúc quãng đường: えきまで あるいて いきます = đi bộ cho đến nhà ga. の・が không nối điểm đến; を đánh dấu tân ngữ.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['にもつを もちて いきます。', 'にもつを もって いくします。', 'にもつを もって いきます。', 'にもつを もうて いきます。'],
          answerIndex: 2, explanationVi: 'もちます là nhóm 1 (もつ): つ → って → もって + いきます. もちて là cách chia kiểu nhóm 2 (sai); いくします・もうて đều sai.',
        },
        {
          kind: 'choice', prompt: 'Muốn kể về tương lai của thị trấn (từ nay về sau người sẽ đông dần lên), mẫu nào đúng?',
          options: ['ひとが ふえて きました', 'ひとが ふえて いきます', 'ひとが ふえて みます', 'ひとが ふえて あります'],
          answerIndex: 1, explanationVi: 'Diễn biến từ nay về sau → ていく. ふえて きました là đã kéo dài đến hiện tại; てみる (thử) và あります (tồn tại) không dùng được ở đây.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Mùa đông đang đến gần',
      situationVi: 'Tanaka và Linh trò chuyện trên đường đi học về.',
      lines: [
        { speaker: 'たなか', ja: 'リンさん、だんだん さむく なって きましたね。', vi: 'Linh, trời dần lạnh lên nhỉ.' },
        { speaker: 'リン', ja: 'ええ。もうすぐ ふゆですね。', vi: 'Đúng vậy. Sắp đến mùa đông rồi.' },
        { speaker: 'たなか', ja: 'そうですね。これから もっと さむく なって いきますよ。', vi: 'Phải đấy. Từ giờ trời sẽ còn lạnh hơn nữa.' },
        { speaker: 'リン', ja: 'ふゆは ゆきが ふって きますね。', vi: 'Mùa đông thì tuyết bắt đầu rơi nhiều.' },
        { speaker: 'たなか', ja: 'ええ。リンさんは ゆきを みたいですか。', vi: 'Ừ. Linh có muốn ngắm tuyết không?' },
        { speaker: 'リン', ja: 'はい、とても みたいです。スキーも して みたいです。', vi: 'Có, rất muốn. Tôi cũng muốn thử trượt tuyết.' },
        { speaker: 'たなか', ja: 'いいですね。わたしも ゆきを みたいです。', vi: 'Hay đấy. Tôi cũng muốn ngắm tuyết.' },
        { speaker: 'リン', ja: 'はるに なって、はなを みたいですね。', vi: 'Đến mùa xuân, tôi muốn ngắm hoa.' },
        { speaker: 'たなか', ja: 'ええ、はるも いいですね。', vi: 'Ừ, mùa xuân cũng đẹp.' },
      ],
    },
    {
      titleVi: 'Tin vui: chuyển về quê',
      situationVi: 'Min báo với Linh tin mình sẽ chuyển nhà vào năm sau.',
      lines: [
        { speaker: 'ミン', ja: 'リンさん、らいねん わたしは いなかに ひっこしします。', vi: 'Linh, năm sau mình chuyển về quê.' },
        { speaker: 'リン', ja: 'えっ、ほんとうですか。どうしてですか。', vi: 'Hả, thật à? Vì sao thế?' },
        { speaker: 'ミン', ja: 'いなかに かぞくが いますから。', vi: 'Vì gia đình mình ở quê.' },
        { speaker: 'リン', ja: 'そうですか。いなかは しずかですね。', vi: 'Vậy à. Vùng quê yên tĩnh nhỉ.' },
        { speaker: 'ミン', ja: 'ええ。そらも きれいです。きせつも きれいです。', vi: 'Ừ. Bầu trời cũng đẹp. Bốn mùa đều đẹp.' },
        { speaker: 'リン', ja: 'バスで 出発しますか。', vi: 'Bạn khởi hành bằng xe buýt à?' },
        { speaker: 'ミン', ja: 'ええ、あさ 七じに 出発します。にもつが おもいですから、ちょっと たいへんです。', vi: 'Ừ, mình khởi hành lúc 7 giờ sáng. Vì hành lý nặng nên cũng vất vả.' },
        { speaker: 'リン', ja: 'にもつを ひとりで もちますか。', vi: 'Bạn tự mình xách hành lý à?' },
        { speaker: 'ミン', ja: 'いいえ、かぞくが とりに きて くれます。', vi: 'Không, gia đình đến đón mình.' },
        { speaker: 'リン', ja: 'いいですね。わたしも あそびに いきます。', vi: 'Tốt đấy. Mình cũng sẽ đến chơi.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'だんだん さむく なって きました。', meaningVi: 'Trời dần lạnh lên (tính đến bây giờ).', choices: ['Trời dần lạnh lên tính đến bây giờ', 'Trời sẽ lạnh dần về sau', 'Trời lạnh từ năm ngoái', 'Trời không hề lạnh'], answerIndex: 0, dictation: true },
    { scriptJa: 'これから べんきょうして いきます。', meaningVi: 'Từ giờ tôi sẽ tiếp tục học.', choices: ['Tôi đã học xong từ trước', 'Tôi sẽ tiếp tục học từ giờ', 'Tôi thử học một lần', 'Tôi không học nữa'], answerIndex: 1, dictation: true },
    { scriptJa: 'ゆきが ふって きました。', meaningVi: 'Trời bắt đầu tuyết rơi.', choices: ['Tuyết bắt đầu rơi (bây giờ vẫn rơi)', 'Tuyết sẽ rơi vào mùa đông sau', 'Tuyết rơi cách đây rất lâu', 'Trời bắt đầu nóng lên'], answerIndex: 0 },
    { scriptJa: 'にもつを もって いきます。', meaningVi: 'Tôi mang hành lý đi (rời khỏi đây).', choices: ['Tôi mang hành lý đến đây', 'Tôi mang hành lý đi khỏi đây', 'Tôi làm mất hành lý', 'Tôi mua hành lý mới'], answerIndex: 1 },
    { scriptJa: 'さいきん、まちの ひとが ふえて きました。', meaningVi: 'Dạo này người trong thị trấn đông dần lên.', choices: ['Thị trấn sẽ đông người từ nay', 'Thị trấn đang vắng dần', 'Dạo này người trong thị trấn đông dần lên', 'Không ai sống ở thị trấn'], answerIndex: 2 },
  ],
  reading: {
    titleVi: 'Thị trấn của tôi',
    lines: [
      { text: 'わたしの まちは ちいさい まちです。', vi: 'Thị trấn của tôi là một thị trấn nhỏ.' },
      { text: 'むかしは とても しずかでした。', vi: 'Ngày xưa nó rất yên tĩnh.' },
      { text: 'でも、さいきん まちの ひとが ふえて きました。', vi: 'Nhưng dạo này người trong thị trấn đông dần lên.' },
      { text: 'あたらしい みせも ふえて きました。', vi: 'Cửa hàng mới cũng nhiều dần lên.' },
      { text: 'まちは だんだん にぎやかに なって いきます。', vi: 'Thị trấn sẽ nhộn nhịp dần lên từ nay về sau.' },
      { text: 'わたしは この まちが とても すきです。', vi: 'Tôi rất yêu thị trấn này.' },
      { text: 'これからも ここに いたいです。', vi: 'Từ nay tôi vẫn muốn tiếp tục sống ở đây.' },
    ],
    questions: [
      { questionVi: 'Thị trấn này ngày xưa như thế nào?', choices: ['Rất yên tĩnh', 'Rất nhộn nhịp', 'Không có ai sống', 'Có rất nhiều cửa hàng'], answerIndex: 0, explanationVi: 'Câu 2: むかしは とても しずかでした — むかし = ngày xưa, đối lập với さいきん (dạo này).' },
      { questionVi: 'Câu 「まちは だんだん にぎやかに なって いきます」 cho biết điều gì?', choices: ['Thị trấn sẽ nhộn nhịp dần lên từ nay về sau', 'Thị trấn đã nhộn nhịp từ trước đến nay', 'Thị trấn sắp vắng đi', 'Thị trấn không thay đổi'], answerIndex: 0, explanationVi: 'て いきます = diễn biến bắt đầu từ bây giờ hướng về tương lai — khác với て きました (kéo dài đến hiện tại, câu 3–4).' },
      { questionVi: 'Câu nào ĐÚNG theo đoạn văn?', choices: ['Người viết muốn rời khỏi thị trấn', 'Người viết muốn tiếp tục sống ở đây', 'Thị trấn đang vắng dần', 'Cửa hàng mới đang giảm dần'], answerIndex: 1, explanationVi: 'Câu 7: これからも ここに いたいです (từ nay vẫn muốn ở đây). Thị trấn đang đông/nhộn dần lên (câu 3–5), không phải vắng đi.' },
    ],
  },
  speakSentences: [
    { ja: 'だんだん さむく なって きました。', vi: 'Trời dần lạnh lên.' },
    { ja: 'これから べんきょうして いきます。', vi: 'Từ giờ tôi sẽ tiếp tục học.' },
    { ja: 'ゆきが ふって きました。', vi: 'Trời bắt đầu tuyết rơi.' },
    { ja: 'にもつを もって いきます。', vi: 'Tôi mang hành lý đi.' },
  ],
  translatePairs: [
    { ja: 'だんだん さむく なって きました。', vi: 'Trời dần lạnh lên (từ trước đến nay).', tokens: ['だんだん', 'さむく', 'なって', 'きました'], distractors: ['いきました'] },
    { ja: 'これから べんきょうして いきます。', vi: 'Từ giờ tôi sẽ tiếp tục học.', tokens: ['これから', 'べんきょう', 'して', 'いきます'], distractors: ['きました'] },
    { ja: 'ゆきが ふって きました。', vi: 'Trời bắt đầu tuyết rơi.', tokens: ['ゆき', 'が', 'ふって', 'きました'], distractors: ['いきます'] },
    { ja: 'バスは あさ 七じに 出発します。', vi: 'Xe buýt khởi hành lúc 7 giờ sáng.', tokens: ['バス', 'は', 'あさ', '七じ', 'に', '出発します'], distractors: ['出口'] },
    { ja: 'えきに 向かいます。', vi: 'Tôi đi về phía nhà ga.', tokens: ['えき', 'に', '向かいます'], distractors: ['越えます'] },
  ],
  kanji: ['出', '向', '越'],
}
