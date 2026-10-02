/**
 * NihongoGo — Bài 30: Thể bị động (受身形).
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson30: CurriculumLesson = {
  order: 30,
  slug: 'l30-the-bi-dong',
  title: 'Thể bị động — 受身',
  titleJa: '受身形',
  description: 'Đưa đối tượng chịu tác động làm chủ ngữ với thể bị động.',
  learningObjectives: [
    'Chia động từ sang thể bị động',
    'Dùng bị động để kể sự khó chịu',
    'Nói về người chịu ảnh hưởng',
  ],
  grammarTopics: ['Quy tắc chia thể bị động', 'Bị động chỉ sự gây phiền'],
  vocabularyTopics: ['Tình huống bị ảnh hưởng', 'Cảm xúc tiêu cực'],
  kanjiTopics: ['Kanji gia đình (親・兄・弟)'],
  difficulty: 'ELEMENTARY',
  vocabulary: [
    { term: '親', reading: 'おや', romaji: 'oya', meaningVi: 'cha mẹ', pos: 'danh từ', exampleJa: '親に でんわを かけました。', exampleVi: 'Tôi gọi điện cho bố mẹ.' },
    { term: '兄', reading: 'あに', romaji: 'ani', meaningVi: 'anh trai (anh ruột của mình)', pos: 'danh từ', exampleJa: '兄に てがみを よまれました。', exampleVi: 'Tôi bị anh trai đọc thư.' },
    { term: '弟', reading: 'おとうと', romaji: 'otōto', meaningVi: 'em trai', pos: 'danh từ', exampleJa: '弟に じゃまを されました。', exampleVi: 'Tôi bị em trai làm phiền.' },
    { term: '兄弟', reading: 'きょうだい', romaji: 'kyōdai', meaningVi: 'anh em (ruột)', pos: 'danh từ', exampleJa: 'わたしには 兄弟が います。', exampleVi: 'Tôi có anh em ruột.' },
    { term: 'ほめます', romaji: 'homemasu', meaningVi: 'khen, khen ngợi', pos: 'động từ nhóm 2', exampleJa: 'せんせいは よく わたしを ほめます。', exampleVi: 'Thầy giáo thường khen tôi.' },
    { term: 'しかります', romaji: 'shikarimasu', meaningVi: 'mắng, trách mắng', pos: 'động từ nhóm 1', exampleJa: 'おかあさんは 弟を しかります。', exampleVi: 'Mẹ mắng em trai.' },
    { term: 'さそいます', romaji: 'sasoimasu', meaningVi: 'mời (đi chơi, đi cùng)', pos: 'động từ nhóm 1', exampleJa: 'ともだちが わたしを えいがに さそいます。', exampleVi: 'Bạn mời tôi đi xem phim.' },
    { term: 'ぬすみます', romaji: 'nusumimasu', meaningVi: 'lấy cắp, trộm', pos: 'động từ nhóm 1', exampleJa: 'どろぼうが ぎんこうの おかねを ぬすみます。', exampleVi: 'Kẻ trộm ăn cắp tiền ngân hàng.' },
    { term: 'どろぼう', romaji: 'dorobō', meaningVi: 'kẻ trộm', pos: 'danh từ', exampleJa: 'どろぼうに さいふを ぬすまれました。', exampleVi: 'Tôi bị kẻ trộm lấy cắp ví.' },
    { term: 'じゃま', romaji: 'jama', meaningVi: 'sự làm phiền, sự cản trở', pos: 'danh từ', exampleJa: 'べんきょうの じゃまを しないで ください。', exampleVi: 'Xin đừng làm phiền việc học.' },
    { term: 'おこります', romaji: 'okorimasu', meaningVi: 'tức giận, nổi giận', pos: 'động từ nhóm 2', exampleJa: 'ちちが わたしに おこります。', exampleVi: 'Bố tôi nổi giận với tôi.' },
    { term: 'なきます', romaji: 'nakimasu', meaningVi: 'khóc', pos: 'động từ nhóm 1', exampleJa: 'よる こどもが なきます。', exampleVi: 'Ban đêm trẻ con khóc.' },
    { term: 'わらいます', romaji: 'waraimasu', meaningVi: 'cười', pos: 'động từ nhóm 1', exampleJa: 'わたしは よく わらいます。', exampleVi: 'Tôi hay cười.' },
    { term: 'せき', romaji: 'seki', meaningVi: 'chỗ ngồi', pos: 'danh từ', exampleJa: 'でんしゃの せきを とられました。', exampleVi: 'Tôi bị chiếm chỗ ngồi trên tàu điện.' },
    { term: 'うるさい', romaji: 'urusai', meaningVi: 'ồn ào, làm ồn', pos: 'tính từ い', exampleJa: 'となりの テレビが うるさいです。', exampleVi: 'TV nhà bên cạnh ồn ào.' },
    { term: 'いや', romaji: 'iya', meaningVi: 'ghét, khó chịu (không muốn)', pos: 'tính từ な', exampleJa: 'あめの ときは でかけるのが いやです。', exampleVi: 'Ngày mưa tôi ngại phải ra ngoài.' },
    { term: 'びっくりします', romaji: 'bikkurishimasu', meaningVi: 'giật mình, sửng sốt', pos: 'động từ nhóm 3', exampleJa: 'ニュースに びっくりします。', exampleVi: 'Tôi giật mình vì tin tức.' },
    { term: 'がっかりします', romaji: 'gakkirishimasu', meaningVi: 'thất vọng, chán nản', pos: 'động từ nhóm 3', exampleJa: 'しけんの けっかに がっかりします。', exampleVi: 'Tôi thất vọng về kết quả kỳ thi.' },
    { term: 'りょうしん', romaji: 'ryōshin', meaningVi: 'cha mẹ (hai đấng sinh thành)', pos: 'danh từ', exampleJa: 'りょうしんは とうきょうに います。', exampleVi: 'Bố mẹ tôi ở Tokyo.' },
    { term: 'けが', romaji: 'kega', meaningVi: 'vết thương, sự bị thương', pos: 'danh từ', exampleJa: 'きのう、じてんしゃで けがを しました。', exampleVi: 'Hôm qua tôi bị thương khi đi xe đạp.' },
  ],
  grammar: [
    {
      code: 'l30-ukemi-formation',
      title: 'Thể bị động (受身) — cách chia',
      formation: 'Nhóm 1: gốc う段 → え段 + れます (のみます → のまれます); Nhóm 2: ます → られます (たべます → たべられます); Nhóm 3: します → されます, きます → こられます',
      explanationVi:
        'Bị động đưa người/vật CHỊU TÁC ĐỘNG lên làm chủ ngữ. Cách chia: nhóm 1 đổi nguyên âm cuối gốc sang hàng え rồi thêm れます — のみます → のまれます, いいます → いわれます (い → わ là ngoại lệ đáng nhớ); nhóm 2 bỏ ます thêm られます — たべます → たべられます, ほめます → ほめられます; nhóm 3: します → されます, きます → こられます. Dạng bị động nhóm 2 viết giống dạng khả năng (たべられます), nên phải nhìn cả câu: nếu có người thực hiện đi với に thì là bị động. Người thực hiện hành động có thể lược bỏ khi không cần nói rõ.',
      examples: [
        { ja: 'せんせいに ほめられました。', vi: 'Tôi được thầy giáo khen.', tokens: ['せんせい', 'に', 'ほめられました'] },
        { ja: 'この おちゃは たくさん のまれます。', vi: 'Trà này được uống nhiều.' },
        { ja: 'わたしは みんなに わらわれました。', vi: 'Tôi bị mọi người cười.' },
        { ja: 'この しんぶんは よく よまれて います。', vi: 'Báo này được đọc nhiều.', tokens: ['この', 'しんぶん', 'は', 'よく', 'よまれて', 'います'] },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'のみます → thể bị động (dạng ます)',
          sentence: 'この おちゃは まいにち ___。',
          options: ['のみます', 'のみられます', 'のまれました', 'のまれます'],
          answerIndex: 3, explanationVi: 'のみます là nhóm 1 (み → め): のみます → のまれます. のみられます là cách chia nhóm 2 — sai; のまれました là quá khứ, không khớp với まいにち.',
        },
        {
          kind: 'conjugate', prompt: 'たべます → thể bị động (dạng ます)',
          sentence: 'この おかしは こどもに ___。',
          options: ['たべれます', 'たべらせます', 'たべられます', 'たばれます'],
          answerIndex: 2, explanationVi: 'たべます là nhóm 2: bỏ ます thêm られます → たべられます. たべれます là cách nói suồng sã của dạng khả năng, không phải bị động; こどもに cho biết đây là bị động (tác nhân + に).',
        },
        {
          kind: 'choice', prompt: 'Chia 「します」 sang thể bị động?',
          options: ['しされます', 'されます', 'せられます', 'しられます'],
          answerIndex: 1, explanationVi: 'Nhóm 3: します → されます (và きます → こられます). Các dạng còn lại không theo quy tắc nào của tiếng Nhật hiện đại.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['せんせいに ほめれました。', 'せんせいに ほまれました。', 'せんせいに ほめられました。', 'せんせいに ほめさせました。'],
          answerIndex: 2, explanationVi: 'ほめます là nhóm 2 → ほめられました. ほめれました sai vì bỏ ら; ほまれました sai gốc; ほめさせました là thể sai khiến (sẽ học ở bài 31).',
        },
      ],
    },
    {
      code: 'l30-ukemi-direct',
      title: 'Aが Bに 〜られます — bị động trực tiếp',
      formation: '(Aは/が) + B + に + động từ bị động — A là người chịu tác động, B (đi với に) là người thực hiện',
      explanationVi:
        'Ở câu chủ động, B tác động lên A. Khi chuyển sang bị động: A (người chịu tác động) trở thành chủ ngữ, B (người thực hiện) đi với trợ từ に, động từ chia thể bị động: せんせいは わたしを ほめます → わたしは せんせいに ほめられました. Nếu tác nhân không quan trọng hoặc không rõ, có thể lược bỏ hẳn: この しんぶんは よく よまれて います — kiểu không nêu tác nhân này rất phổ biến khi nói về sự việc ai cũng biết. Tùy động từ mà nghĩa là "được" (ほめられる) hay "bị" (しかられる).',
      examples: [
        { ja: 'わたしは せんせいに ほめられました。', vi: 'Tôi được thầy giáo khen.', tokens: ['わたし', 'は', 'せんせい', 'に', 'ほめられました'] },
        { ja: 'ともだちに えいがに さそわれました。', vi: 'Tôi được bạn mời đi xem phim.' },
        { ja: 'りょうしんに しかられました。', vi: 'Tôi bị bố mẹ mắng.' },
        { ja: 'この うたは よく うたわれて います。', vi: 'Bài hát này thường được hát.', tokens: ['この', 'うた', 'は', 'よく', 'うたわれて', 'います'] },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Người thực hiện hành động đi với trợ từ nào? (Tôi được thầy giáo khen)',
          sentence: 'わたしは せんせい___ ほめられました。',
          options: ['に', 'を', 'が', 'で'],
          answerIndex: 0, explanationVi: 'Trong câu bị động, người thực hiện hành động (せんせい) đi với に. を chỉ dùng cho tân ngữ của câu chủ động; で là nơi thực hiện.',
        },
        {
          kind: 'choice', prompt: '「ともだちに さそわれました。」 có nghĩa là gì?',
          options: ['Tôi mời bạn đi chơi', 'Tôi được bạn mời đi chơi', 'Tôi không được mời', 'Tôi từ chối lời mời của bạn'],
          answerIndex: 1, explanationVi: 'さそわれました là bị động của さそいます: người mời (ともだち) + に, người được mời là chủ ngữ → "tôi được bạn mời".',
        },
        {
          kind: 'fill', prompt: 'Điền dạng đúng (Tôi bị mẹ mắng)',
          sentence: 'わたしは おかあさんに ___。',
          options: ['しかりました', 'しからせました', 'しかられました', 'しかれて います'],
          answerIndex: 2, explanationVi: 'しかります là nhóm 1 (しかる → しかられる): bị mắng = しかられます. しかりました nghĩa là "tôi mắng mẹ" — chủ động, sai nghĩa.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['わたしは せんせいを ほめられました。', 'わたしは せんせいに ほめられました。', 'わたしに せんせいは ほめられました。', 'わたしは せんせいが ほめられました。'],
          answerIndex: 1, explanationVi: 'Chỉ có に đứng sau người thực hiện (せんせい) trong câu bị động trực tiếp. を/が/đảo vị trí đều sai cấu trúc.',
        },
      ],
    },
    {
      code: 'l30-ukemi-suffering',
      title: 'Bị động bất lợi — kể chuyện "chịu thiệt"',
      formation: 'Người chịu thiệt + は/が + (vật bị mất) を / (tác nhân gây phiền) に + động từ bị động: かさを ぬすまれました, あめに ふられました',
      explanationVi:
        'Tiếng Nhật có một kiểu bị động đặc biệt để kể việc KHÓ CHỊU xảy đến cho mình, dù mình không phải tân ngữ trực tiếp: người nói (nạn nhân) làm chủ ngữ, vật bị mất vẫn giữ を, tác nhân gây phiền — kẻ trộm, tiếng ồn, cả thiên tai — đi với に: どろぼうに さいふを ぬすまれました (bị lấy cắp ví), あめに ふられました (bị dầm mưa), こどもに なかれて ねられませんでした (bị tiếng trẻ khóc nên không ngủ được), 弟に じゃまを されました (bị em trai làm phiền). Mẫu này truyền tải cảm giác "mình chịu thiệt" — rất hay dùng khi kể chuyện rủi ro trong ngày.',
      examples: [
        { ja: 'えきで かさを ぬすまれました。', vi: 'Tôi bị lấy cắp chiếc dù ở nhà ga.', tokens: ['えき', 'で', 'かさ', 'を', 'ぬすまれました'] },
        { ja: 'こうえんで あめに ふられました。', vi: 'Tôi bị dầm mưa ở công viên.' },
        { ja: 'よる こどもに なかれて、ねられませんでした。', vi: 'Tối qua bị tiếng trẻ khóc nên tôi không ngủ được.' },
        { ja: 'べんきょうして いる とき、弟に じゃまを されました。', vi: 'Lúc đang học, tôi bị em trai làm phiền.', tokens: ['べんきょう', 'して', 'いる', 'とき', '弟', 'に', 'じゃま', 'を', 'されました'] },
      ],
      drills: [
        {
          kind: 'choice', prompt: '「えきで かさを ぬすまれました。」 có nghĩa là gì?',
          options: ['Tôi lấy cắp một chiếc dù ở nhà ga', 'Tôi mua được dù rẻ ở nhà ga', 'Tôi để quên dù ở nhà ga', 'Chiếc dù của tôi bị lấy cắp ở nhà ga'],
          answerIndex: 3, explanationVi: 'ぬすまれました là bị động bất lợi: tôi là nạn nhân, chiếc dù (を) là vật bị mất → "dù của tôi bị lấy cắp ở nhà ga".',
        },
        {
          kind: 'particle', prompt: 'Thiên tai gây phiền (mưa) đi với trợ từ nào?',
          sentence: 'こうえんで あめ___ ふられました。',
          options: ['に', 'を', 'が', 'へ'],
          answerIndex: 0, explanationVi: 'あめに ふられました — tác nhân gây phiền, kể cả thiên tai, đi với に: bị mưa dầm, bị tuyết rơi trúng…',
        },
        {
          kind: 'fill', prompt: 'Điền cụm đúng (Tôi bị làm phiền)',
          sentence: 'べんきょうして いる とき、弟に ___。',
          options: ['じゃまを しました', 'じゃまに なりました', 'じゃまを されました', 'じゃまが ありました'],
          answerIndex: 2, explanationVi: 'Bị động bất lợi: (nạn nhân)は + 弟に + じゃまを されました. じゃまを しました là chủ động — "tôi làm phiền".',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['よる こどもが なかれて、ねられませんでした。', 'よる こどもに なかれて、ねられませんでした。', 'よる こどもを なかれて、ねられませんでした。', 'よる こどもに なかれて、ねれて いません。'],
          answerIndex: 1, explanationVi: 'Tác nhân (tiếng trẻ khóc) đi với に, không phải が hay を. ねられて いません là phủ định khả năng (L19); ねれて là dạng bỏ ら — sai.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Một ngày rủi ro',
      situationVi: 'Min thấy Linh có vẻ mệt, hỏi chuyện ngày hôm qua.',
      lines: [
        { speaker: 'ミン', ja: 'リンさん、げんきが ありませんね。', vi: 'Linh trông không khỏe nhỉ.' },
        { speaker: 'リン', ja: 'ええ、きのうは たいへんでした。', vi: 'Ừ, hôm qua là một ngày vất vả.' },
        { speaker: 'ミン', ja: 'どうしましたか。', vi: 'Chuyện gì vậy?' },
        { speaker: 'リン', ja: 'あさ、でんしゃで せきを とられました。', vi: 'Buổi sáng, tôi bị chiếm chỗ ngồi trên tàu điện.' },
        { speaker: 'ミン', ja: 'それは たいへんでしたね。', vi: 'Thật là vất vả nhỉ.' },
        { speaker: 'リン', ja: 'それから、えきで かさを ぬすまれました。', vi: 'Rồi ở nhà ga, tôi bị lấy cắp chiếc dù.' },
        { speaker: 'ミン', ja: 'えっ、ほんとうですか。', vi: 'Hả, thật à?' },
        { speaker: 'リン', ja: 'はい。そして、こうえんを さんぽして いた とき、あめに ふられました。', vi: 'Thật. Và lúc đang đi bộ trong công viên, tôi bị dầm mưa.' },
        { speaker: 'ミン', ja: 'それは こまりましたね。', vi: 'Thật là khó xử nhỉ.' },
        { speaker: 'リン', ja: 'うちでも 弟に じゃまを されました。でも、きょうは だいじょうぶです。', vi: 'Ở nhà tôi cũng bị em trai làm phiền. Nhưng hôm nay không sao rồi.' },
      ],
    },
    {
      titleVi: 'Bức ảnh được khen',
      situationVi: 'Tanaka khen bức ảnh của Linh, hai người trò chuyện về nơi chụp ảnh.',
      lines: [
        { speaker: 'たなか', ja: 'リンさん、その さかなの しゃしんは きれいですね。', vi: 'Linh, bức ảnh con cá đó đẹp nhỉ.' },
        { speaker: 'リン', ja: 'ありがとう ございます。ともだちに さそわれて、うみへ いきました。', vi: 'Cảm ơn nhé. Tôi được bạn mời đi biển.' },
        { speaker: 'たなか', ja: 'わあ、いい しゃしんですね。', vi: 'Ồ, bức ảnh đẹp thật.' },
        { speaker: 'リン', ja: 'いいえ、いいえ。でも、この しゃしんは せんせいに ほめられました。', vi: 'Da nào. Nhưng bức ảnh này được thầy giáo khen đấy.' },
        { speaker: 'たなか', ja: 'その うみは ゆうめいですか。', vi: 'Bãi biển đó nổi tiếng à?' },
        { speaker: 'リン', ja: 'ええ、この うみは ゆうめいで、たくさんの ひとに しられて います。', vi: 'Ừ, bãi biển này nổi tiếng và được nhiều người biết đến.' },
        { speaker: 'たなか', ja: 'じゃあ、わたしも いきたいです。', vi: 'Vậy tôi cũng muốn đi.' },
        { speaker: 'リン', ja: 'いいですよ。こんど いっしょに いきましょう。', vi: 'Được chứ. Lần này mình cùng đi nhé.' },
        { speaker: 'たなか', ja: 'ええ、たのしいと おもいます。', vi: 'Ừ, tôi nghĩ sẽ vui.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'えきで かさを ぬすまれました。', meaningVi: 'Tôi bị lấy cắp chiếc dù ở nhà ga.', choices: ['Tôi bị lấy cắp chiếc dù ở nhà ga', 'Tôi mua một chiếc dù ở nhà ga', 'Tôi nhặt được chiếc dù ở nhà ga', 'Tôi để quên dù ở nhà ga'], answerIndex: 0, dictation: true },
    { scriptJa: 'せんせいに ほめられて、うれしかったです。', meaningVi: 'Tôi được thầy giáo khen nên rất vui.', choices: ['Tôi bị thầy giáo mắng nên buồn', 'Tôi được thầy giáo khen nên rất vui', 'Thầy giáo khen tôi hát hay', 'Tôi khen thầy giáo'], answerIndex: 1, dictation: true },
    { scriptJa: 'でんしゃで せきを とられました。', meaningVi: 'Tôi bị chiếm chỗ ngồi trên tàu điện.', choices: ['Tôi tìm được chỗ ngồi trên tàu điện', 'Tôi nhường chỗ ngồi trên tàu điện', 'Tôi đổi chỗ ngồi trên tàu điện', 'Tôi bị chiếm chỗ ngồi trên tàu điện'], answerIndex: 3 },
    { scriptJa: 'この しんぶんは よく よまれて います。', meaningVi: 'Tờ báo này được đọc nhiều.', choices: ['Báo này khó đọc', 'Tôi vừa đọc xong tờ báo', 'Báo này được đọc nhiều', 'Tôi không đọc báo'], answerIndex: 2 },
    { scriptJa: 'よる こどもに なかれて、ねられませんでした。', meaningVi: 'Tối qua bị tiếng trẻ khóc nên tôi không ngủ được.', choices: ['Tối qua tôi khóc nên không ngủ được', 'Tối qua trẻ con ngủ rất ngon', 'Tối qua bị tiếng trẻ khóc nên tôi không ngủ được', 'Tối qua tôi hát ru trẻ con ngủ'], answerIndex: 2 },
  ],
  reading: {
    titleVi: 'Một ngày không may của Linh',
    lines: [
      { text: 'きのうは たいへんでした。', vi: 'Hôm qua là một ngày vất vả.' },
      { text: 'あさ、でんしゃで せきを とられました。', vi: 'Buổi sáng, tôi bị chiếm chỗ ngồi trên tàu điện.' },
      { text: 'えきで かさを ぬすまれて、あめに ふられました。', vi: 'Ở nhà ga tôi bị lấy cắp dù, rồi bị dầm mưa.' },
      { text: 'うちへ かえって、しゅくだいを しました。', vi: 'Về đến nhà, tôi làm bài tập.' },
      { text: 'でも、弟に じゃまを されました。', vi: 'Nhưng tôi bị em trai làm phiền.' },
      { text: 'きょう、がっこうで せんせいに しかられました。', vi: 'Hôm nay ở trường, tôi bị thầy giáo mắng.' },
      { text: 'でも、ばんごはんの とき、おかあさんに 「だいじょうぶよ」と いわれました。', vi: 'Nhưng lúc ăn tối, mẹ nói với tôi rằng "không sao đâu".' },
      { text: 'きのうは わるかったですが、きょうは うれしいです。', vi: 'Hôm qua tệ thật, nhưng hôm nay tôi thấy vui.' },
    ],
    questions: [
      { questionVi: 'Trên tàu điện, chuyện gì đã xảy ra với người viết?', choices: ['Bị lấy cắp chiếc dù', 'Bị chiếm chỗ ngồi', 'Bị dầm mưa', 'Bị mắng'], answerIndex: 1, explanationVi: 'Câu 2: あさ、でんしゃで せきを とられました — bị chiếm chỗ ngồi trên tàu. Lấy cắp dù và dầm mưa là ở nhà ga (câu 3), bị mắng là hôm nay ở trường (câu 6).' },
      { questionVi: 'Lúc người viết làm bài tập, em trai đã làm gì?', choices: ['Ngủ', 'Xem TV', 'Làm phiền', 'Hát'], answerIndex: 2, explanationVi: 'Câu 5: でも、弟に じゃまを されました — bị động bất lợi: tôi bị em trai làm phiền.' },
      { questionVi: 'Câu nào ĐÚNG theo đoạn văn?', choices: ['Mẹ đã mắng người viết lúc ăn tối', 'Người viết bị mắng ở trường hôm nay', 'Người viết mua chiếc dù mới', 'Em trai bị mắng'], answerIndex: 1, explanationVi: 'Câu 6: きょう、がっこうで せんせいに しかられました. Lúc ăn tối mẹ động viên "だいじょうぶよ" (câu 7), không phải mắng.' },
    ],
  },
  speakSentences: [
    { ja: 'せんせいに ほめられて、うれしいです。', vi: 'Được thầy khen, tôi rất vui.' },
    { ja: 'えきで かさを ぬすまれました。', vi: 'Tôi bị lấy cắp chiếc dù ở nhà ga.' },
    { ja: 'この しんぶんは よく よまれて います。', vi: 'Tờ báo này được đọc nhiều.' },
    { ja: 'こうえんで あめに ふられました。', vi: 'Tôi bị dầm mưa ở công viên.' },
  ],
  translatePairs: [
    { ja: 'わたしは せんせいに ほめられました。', vi: 'Tôi được thầy giáo khen.', tokens: ['わたし', 'は', 'せんせい', 'に', 'ほめられました'], distractors: ['ほめました'] },
    { ja: 'えきで かさを ぬすまれました。', vi: 'Tôi bị lấy cắp chiếc dù ở nhà ga.', tokens: ['えき', 'で', 'かさ', 'を', 'ぬすまれました'], distractors: ['とられました'] },
    { ja: 'ともだちに えいがに さそわれました。', vi: 'Tôi được bạn mời đi xem phim.', tokens: ['ともだち', 'に', 'えいが', 'に', 'さそわれました'], distractors: ['さそいました'] },
    { ja: 'この しんぶんは よく よまれて います。', vi: 'Tờ báo này được đọc nhiều.', tokens: ['この', 'しんぶん', 'は', 'よく', 'よまれて', 'います'], distractors: ['よんで'] },
    { ja: 'よる こどもに なかれて、ねられませんでした。', vi: 'Tối qua bị tiếng trẻ khóc nên tôi không ngủ được.', tokens: ['よる', 'こども', 'に', 'なかれて', 'ねられませんでした'], distractors: ['なきました'] },
  ],
  kanji: ['親', '兄', '弟'],
}
