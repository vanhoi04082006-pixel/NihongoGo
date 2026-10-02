/**
 * NihongoGo — Bài 24: Điều kiện ば (V-えば・Adj-ければ・N なら・〜なければ).
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson24: CurriculumLesson = {
  order: 24,
  slug: 'l24-dieu-kien-ba',
  title: 'Điều kiện ば — Nếu... thì...',
  titleJa: 'ば',
  description: 'Điều kiện ば và cách dùng nó để so sánh, đưa ra lời khuyên.',
  learningObjectives: [
    'Chia động từ sang dạng ば',
    'Dùng 〜ば…どうですか để gợi ý',
    'So sánh điều kiện ば và たら',
  ],
  grammarTopics: ['Cách tạo dạng ば', '〜ば…どうですか (gợi ý)'],
  vocabularyTopics: ['Lời khuyên', 'Tình huống so sánh'],
  kanjiTopics: ['Kanji thời tiết (天・気・雨)'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: '天気', reading: 'てんき', romaji: 'tenki', meaningVi: 'thời tiết', pos: 'danh từ', exampleJa: 'あしたの てんきは いいと おもいます。', exampleVi: 'Tôi nghĩ thời tiết ngày mai tốt.' },
    { term: '雨', reading: 'あめ', romaji: 'ame', meaningVi: 'mưa', pos: 'danh từ', exampleJa: 'あめが ふったら、でかけません。', exampleVi: 'Nếu mưa thì tôi không đi chơi.' },
    { term: 'ゆき', romaji: 'yuki', meaningVi: 'tuyết', pos: 'danh từ', exampleJa: 'きのう ゆきが ふりました。', exampleVi: 'Hôm qua trời có tuyết.' },
    { term: 'くもり', romaji: 'kumori', meaningVi: 'trời nhiều mây', pos: 'danh từ', exampleJa: 'きょうは くもりです。', exampleVi: 'Hôm nay trời nhiều mây.' },
    { term: 'はれます', romaji: 'haremasu', meaningVi: '(trời) quang, sáng rõ', pos: 'động từ nhóm 2', exampleJa: 'あしたは はれますと おもいます。', exampleVi: 'Tôi nghĩ ngày mai trời quang.' },
    { term: 'ふります', romaji: 'furimasu', meaningVi: '(mưa, tuyết) rơi, tuôn xuống', pos: 'động từ nhóm 1', exampleJa: 'あしたは あめが ふります。', exampleVi: 'Ngày mai trời sẽ mưa.' },
    { term: 'てんきよほう', romaji: 'tenkiyohō', meaningVi: 'dự báo thời tiết', pos: 'danh từ', exampleJa: 'よる、てんきよほうを みます。', exampleVi: 'Tối nào tôi cũng xem dự báo thời tiết.' },
    { term: 'かさ', romaji: 'kasa', meaningVi: 'ô, dù', pos: 'danh từ', exampleJa: 'あめなら、かさを もちます。', exampleVi: 'Nếu mưa thì tôi mang ô theo.' },
    { term: 'そら', romaji: 'sora', meaningVi: 'trời, bầu trời', pos: 'danh từ', exampleJa: 'きょうは そらが きれいです。', exampleVi: 'Hôm nay bầu trời đẹp.' },
    { term: 'いります', romaji: 'irimasu', meaningVi: 'cần, cần có', pos: 'động từ nhóm 1', exampleJa: 'あめ なら、かさが いります。', exampleVi: 'Nếu mưa thì cần có ô.' },
    { term: 'きぶん', romaji: 'kibun', meaningVi: 'cảm giác, tinh thần', pos: 'danh từ', exampleJa: 'くすりを のめば、きぶんが よくなります。', exampleVi: 'Nếu uống thuốc thì người sẽ dễ chịu hơn.' },
    { term: 'こまります', romaji: 'komarimasu', meaningVi: 'lúng túng, gặp rắc rối', pos: 'động từ nhóm 1', exampleJa: 'おかねが なければ、こまります。', exampleVi: 'Nếu không có tiền thì tôi gặp khó.' },
    { term: 'しんぱいします', romaji: 'shinpaishimasu', meaningVi: 'lo lắng', pos: 'động từ nhóm 3', exampleJa: 'あしたの てんきを しんぱいします。', exampleVi: 'Tôi lo về thời tiết ngày mai.' },
    { term: 'すすめます', romaji: 'susumemasu', meaningVi: 'khuyên, giới thiệu', pos: 'động từ nhóm 2', exampleJa: 'ともだちは この みせを すすめます。', exampleVi: 'Bạn tôi giới thiệu quán này.' },
    { term: 'そうだんします', romaji: 'sōdanshimasu', meaningVi: 'trao đổi, hỏi ý kiến', pos: 'động từ nhóm 3', exampleJa: 'こまったら、そうだんします。', exampleVi: 'Gặp khó khăn thì tôi trao đổi với người khác.' },
    { term: 'なおります', romaji: 'naorimasu', meaningVi: 'khỏi (bệnh), hồi phục', pos: 'động từ nhóm 1', exampleJa: 'この くすりを のめば、すぐ なおります。', exampleVi: 'Uống thuốc này thì khỏi ngay.' },
    { term: 'よやくします', romaji: 'yoyakushimasu', meaningVi: 'đặt (vé, chỗ) trước', pos: 'động từ nhóm 3', exampleJa: 'ホテルを よやくします。', exampleVi: 'Tôi đặt phòng khách sạn trước.' },
    { term: 'でかけます', romaji: 'dekakemasu', meaningVi: 'đi ra ngoài, đi chơi', pos: 'động từ nhóm 2', exampleJa: 'てんきが よければ、でかけます。', exampleVi: 'Nếu thời tiết tốt thì tôi đi chơi.' },
    { term: 'もっと', romaji: 'motto', meaningVi: 'hơn nữa, nhiều hơn', pos: 'phó từ', exampleJa: 'もっと やすければ、かいます。', exampleVi: 'Nếu rẻ hơn nữa thì tôi mua.' },
    { term: 'たいへん', romaji: 'taihen', meaningVi: 'vất vả, khổ sở', pos: 'tính từ な / phó từ', exampleJa: 'きのうの しごとは たいへんでした。', exampleVi: 'Công việc hôm qua vất vả thật.' },
    { term: 'むり', romaji: 'muri', meaningVi: 'quá sức, gắng ép', pos: 'tính từ な / danh từ', exampleJa: 'むりを しないで ください。', exampleVi: 'Đừng cố làm quá sức nhé.' },
  ],
  grammar: [
    {
      code: 'l24-ba-condition',
      title: 'V-ば・Adj-ければ — điều kiện ば (nếu… thì…)',
      formation: 'V nh1: cột う → cột え + ば (のむ→のめば, いく→いけば); V nh2: る→れば (たべる→たべれば); する→すれば, くる→くれば; Adj-い: い→ければ (やすい→やすければ)',
      explanationVi:
        'Bài 23 đã học たら; ば là mẫu điều kiện khác, nghĩa cũng là "nếu… thì…". Cách chia: động từ nhóm 1 đổi âm cuối sang cột え rồi thêm ば (のみます→のめば, いきます→いけば, かいます→かえば); nhóm 2 bỏ る thêm れば (たべます→たべれば); します→すれば, きます→くれば. Tính từ い đổi い thành ければ (やすい→やすければ, よい→よければ). Dạng ば hay dùng cho quy luật, kết quả tất nhiên và LỜI KHUYÊN nhẹ nhàng: 〜ば、どうですか (thử… xem sao): はやく ねれば どうですか. Khác たら: vế sau ば không dùng cho chuyện đã kết thúc trong quá khứ.',
      examples: [
        { ja: 'この くすりを のめば、きぶんが よくなります。', vi: 'Nếu uống thuốc này thì bạn sẽ thấy dễ chịu hơn.', tokens: ['この', 'くすり', 'を', 'のめば', 'きぶん', 'が', 'よく', 'なります'] },
        { ja: 'もっと やすければ、かいます。', vi: 'Nếu rẻ hơn nữa thì tôi mua.' },
        { ja: 'こうえんへ いけば、はなを みられます。', vi: 'Nếu đến công viên thì có thể ngắm hoa.' },
        { ja: 'はやく ねれば どうですか。', vi: 'Thử ngủ sớm xem sao?' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'のみます → dạng ば (nếu uống)',
          sentence: 'この くすりを ___、きぶんが よくなります。',
          options: ['のみますば', 'のめば', 'のんでば', 'のむれば'],
          answerIndex: 1, explanationVi: 'Nhóm 1: のみ→のめ (cột え) + ば = のめば. のんでば lẫn với thể て, のむれば là cách chia kiểu nhóm 2 — đều sai.',
        },
        {
          kind: 'conjugate', prompt: 'いきます → dạng ば (nếu đi)',
          sentence: 'こうえんへ ___、はなを みられます。',
          options: ['いえば', 'いってば', 'いけば', 'いければ'],
          answerIndex: 2, explanationVi: 'いきます (nhóm 1): いく→いけ + ば = いけば. いければ là dạng ば của thể khả năng いけます.',
        },
        {
          kind: 'conjugate', prompt: 'たかい (tính từ い) → dạng ば (nếu đắt)',
          sentence: 'この かさは ___、かいません。',
          options: ['たかいば', 'たかくば', 'たかくれば', 'たかければ'],
          answerIndex: 3, explanationVi: 'Tính từ い: い→ければ = たかければ. Các dạng ば・くば・くれば không phải quy tắc của tính từ い.',
        },
        {
          kind: 'choice', prompt: '「はやく ねれば どうですか。」 là lời nói như thế nào?',
          options: ['Bạn đã ngủ sớm chưa?', 'Thử ngủ sớm xem sao?', 'Ngủ sớm thì mệt lắm', 'Hôm qua tôi ngủ sớm'],
          answerIndex: 1, explanationVi: 'V-ば + どうですか = gợi ý "thử… xem sao" — cách đưa lời khuyên nhẹ nhàng, rất thông dụng trong tiếng Nhật.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng khi khuyên "nếu nghỉ ngơi thì khỏi bệnh"?',
          options: ['やすみば、なおります。', 'やすんでば、なります。', 'やすむれば、なります。', 'やすめば、なおります。'],
          answerIndex: 3, explanationVi: 'やすみます (nhóm 1): やすみ→やすめ + ば = やすめば. ば luôn gắn sau âm cột え của nhóm 1.',
        },
      ],
    },
    {
      code: 'l24-nara',
      title: 'N/Adj-な + なら — nếu là…, còn về… thì',
      formation: 'Danh từ + なら (あめ なら) / Adj-な (bỏ な) + なら (ひま なら)',
      explanationVi:
        'なら gắn TRỰC TIẾP sau danh từ hoặc tính từ な (đã bỏ な) để nói "nếu là… / nếu trường hợp là…": あめ なら、でかけません = nếu là mưa thì không đi chơi. なら thường nhắc lại thông tin hai người vừa đề cập: khi được hỏi "cuối tuần đi chơi không?", có thể đáp しゅうまつ なら、ひまです = về cuối tuần thì tôi rảnh. Lưu ý: danh từ hoặc gốc tính từ な đứng thẳng trước なら, không thêm の・な・だ.',
      examples: [
        { ja: 'あめ なら、でかけません。', vi: 'Nếu trời mưa thì tôi không đi chơi.', tokens: ['あめ', 'なら', 'でかけません'] },
        { ja: 'しゅうまつ なら、わたしは ひまです。', vi: 'Về cuối tuần thì tôi rảnh.' },
        { ja: 'ひま なら、いっしょに えいがを みませんか。', vi: 'Nếu bạn rảnh thì cùng xem phim không?' },
        { ja: 'この みせなら、やすいですよ。', vi: 'Còn nếu là quán này thì rẻ đấy.' },
      ],
      drills: [
        {
          kind: 'fill', prompt: 'Điền dạng đúng của あめ (danh từ) trước なら (Nếu mưa thì cần ô)',
          sentence: '___ なら、かさが いります。',
          options: ['あめ', 'あめの', 'あめな', 'あめで'],
          answerIndex: 0, explanationVi: 'Danh từ + なら trực tiếp, không chen の/な/で: あめ なら.',
        },
        {
          kind: 'conjugate', prompt: 'ひま (tính từ な) → dạng đứng trước なら',
          sentence: '___ なら、さんぽに いきませんか。',
          options: ['ひまな', 'ひまだ', 'ひま', 'ひまの'],
          answerIndex: 2, explanationVi: 'Tính từ な đứng trước なら thì BỎ な: ひま なら. な chỉ giữ khi tính từ bổ nghĩa cho danh từ (ひまな ひ).',
        },
        {
          kind: 'choice', prompt: '「この みせなら、やすいですよ。」 có nghĩa là gì?',
          options: ['Quán này rất đắt', 'Tôi đã mua ở quán này rồi', 'Nếu là quán này thì rẻ đấy', 'Quán kia rẻ hơn quán này'],
          answerIndex: 2, explanationVi: 'N なら = "nếu (nói đến) N thì…" — người nói giới hạn chủ đề vào quán này rồi kết luận là rẻ.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['あめだ なら、でかけません。', 'あめ なら、でかけません。', 'あめの なら、でかけません。', 'あめな なら、でかけません。'],
          answerIndex: 1, explanationVi: 'Danh từ ghép なら trực tiếp: あめ なら. Thêm だ・の・な vào giữa đều sai.',
        },
      ],
    },
    {
      code: 'l24-nakereba',
      title: '〜なければ — nếu không… thì…',
      formation: 'V: 〜ない → 〜なければ (いく→いかない→いかなければ); Adj-い: くない→くなければ (たかい→たかくなければ)',
      explanationVi:
        'Phủ định của dạng ば: lấy thể ない đã học, đổi ない thành なければ. Nghĩa: "nếu không… thì…", vế sau thường là hậu quả không tốt: いかなければ、だめです = nếu không đi thì không được. Với tính từ い: たかくなければ = nếu không đắt. Các bạn đã biết なければなりません (phải) — nghĩa gốc chính là "nếu không làm thì không xong". Ở bài này, なければ đi cùng các kết quả như だめです・こまります・なおりません để cảnh báo "nếu không… thì (rắc rối)".',
      examples: [
        { ja: 'いかなければ、だめです。', vi: 'Nếu không đi thì không được.' },
        { ja: 'たかくなければ、この かさを かいます。', vi: 'Nếu không đắt thì tôi mua chiếc ô này.' },
        { ja: 'くすりを のまなければ、なおりません。', vi: 'Nếu không uống thuốc thì sẽ không khỏi.' },
        { ja: 'はやく よやくしなければ、ホテルが いっぱいに なります。', vi: 'Nếu không đặt sớm thì khách sạn sẽ đầy.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'いきます → dạng phủ định của ば (nếu không đi)',
          sentence: 'きょう がっこうへ ___、だめです。',
          options: ['いかなければ', 'いけば', 'いかないば', 'いかなかった'],
          answerIndex: 0, explanationVi: 'いく→いかない (thể ない) → đổi ない thành なければ = いかなければ (nếu không đi). いかないば là dạng sai, phải dùng なければ.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng với nghĩa "nếu không uống thuốc thì không khỏi bệnh"?',
          options: ['くすりを のみなければ、なおりません。', 'くすりを のまないば、なおりません。', 'くすりを のまなければ、なおりません。', 'くすりを のまれば、なおりません。'],
          answerIndex: 2, explanationVi: 'のみます→のまない→のまなければ. のみなければ sai vì gắn なければ vào gốc のみ (chưa chuyển sang thể ない).',
        },
        {
          kind: 'choice', prompt: '「たかくなければ、かいます。」 có nghĩa là gì?',
          options: ['Đắt quá nên tôi không mua', 'Cái này đắt nhất', 'Nếu không đắt thì tôi mua', 'Tôi đã mua với giá rẻ'],
          answerIndex: 2, explanationVi: 'たかい→たかくなければ = "nếu không đắt" — phủ định của ければ là くなければ (không phải くないば).',
        },
        {
          kind: 'fill', prompt: 'Điền từ đúng (Nếu không đặt sớm thì khách sạn sẽ đầy)',
          sentence: 'はやく ___、ホテルが いっぱいに なります。',
          options: ['よやくすれば', 'よやくしても', 'よやくしました', 'よやくしなければ'],
          answerIndex: 3, explanationVi: 'Nghĩa "nếu không… thì (xấu)" → phủ định: よやくしなければ. よやくすれば nghĩa ngược lại (nếu đặt trước thì…).',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Trước chuyến đi cuối tuần',
      situationVi: 'Ở trường, Tanaka hỏi Linh về kế hoạch đi công viên cuối tuần này.',
      lines: [
        { speaker: 'たなか', ja: 'リンさん、しゅうまつは どこかへ でかけますか。', vi: 'Linh, cuối tuần này bạn có đi đâu không?' },
        { speaker: 'リン', ja: 'ええ、こうえんへ さんぽに いきます。', vi: 'Vâng, tôi đến công viên để đi bộ.' },
        { speaker: 'たなか', ja: 'いいですね。でも、てんきよほうを みましたか。', vi: 'Hay đấy. Nhưng bạn có xem dự báo thời tiết chưa?' },
        { speaker: 'リン', ja: 'いいえ、みませんでした。しゅうまつの てんきは どうですか。', vi: 'Chưa, tôi chưa xem. Thời tiết cuối tuần thế nào?' },
        { speaker: 'たなか', ja: 'よほうでは、あめです。', vi: 'Theo dự báo thì mưa.' },
        { speaker: 'リン', ja: 'そうですか。あめ なら、さんぽは できませんね。', vi: 'Vậy à. Nếu mưa thì không đi bộ được nhỉ.' },
        { speaker: 'たなか', ja: 'ええ。でも、かさが あれば、だいじょうぶですよ。', vi: 'Ừ. Nhưng nếu có ô thì không sao đâu.' },
        { speaker: 'リン', ja: 'そうですね。かさを もちます。', vi: 'Đúng rồi. Tôi sẽ mang ô theo.' },
        { speaker: 'たなか', ja: 'あめが ふらなければ、はなも きれいですよ。', vi: 'Nếu không mưa thì hoa cũng đẹp đấy.' },
        { speaker: 'リン', ja: 'はい、たのしみです。', vi: 'Vâng, tôi rất mong chờ.' },
      ],
    },
    {
      titleVi: 'Ở phòng khám',
      situationVi: 'Linh thấy khó chịu trong người, bác sĩ hỏi thăm và đưa lời khuyên.',
      lines: [
        { speaker: 'いしゃ', ja: 'どうしましたか。', vi: 'Bạn bị sao vậy?' },
        { speaker: 'リン', ja: 'きのうから、きぶんが わるいです。', vi: 'Từ hôm qua tôi thấy khó chịu trong người.' },
        { speaker: 'いしゃ', ja: 'よく ねていますか。', vi: 'Bạn ngủ có đủ không?' },
        { speaker: 'リン', ja: 'いいえ、よる じゅういちじまで しごとを します。', vi: 'Không, tôi làm việc đến 11 giờ đêm.' },
        { speaker: 'いしゃ', ja: 'それは たいへんですね。この くすりを のめば、きぶんが よくなりますよ。', vi: 'Vất vả thật đấy. Uống thuốc này thì bạn sẽ dễ chịu hơn.' },
        { speaker: 'リン', ja: 'そうですか。まいにち のみますか。', vi: 'Vậy ạ. Mỗi ngày đều phải uống ạ?' },
        { speaker: 'いしゃ', ja: 'ええ、あさと よるに のんで ください。そして、むりを しないで ください。', vi: 'Vâng, hãy uống vào buổi sáng và buổi tối. Và đừng cố làm quá sức.' },
        { speaker: 'リン', ja: 'はい、よく ねれば、すぐ なおりますね。ありがとうございます。', vi: 'Vâng, nghỉ ngơi kỹ thì sẽ khỏi nhanh đúng không ạ. Cảm ơn bác sĩ.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'あめ なら、でかけません。', meaningVi: 'Nếu mưa thì tôi không đi chơi.', choices: ['Nếu mưa thì tôi không đi chơi', 'Tôi sẽ đi chơi cả khi mưa', 'Hôm nay trời mưa rồi', 'Tôi không thích đi chơi'], answerIndex: 0, dictation: true },
    { scriptJa: 'この くすりを のめば、すぐ なおります。', meaningVi: 'Uống thuốc này thì khỏi ngay.', choices: ['Thuốc này đắt lắm', 'Uống thuốc này thì khỏi ngay', 'Tôi không muốn uống thuốc', 'Bác sĩ không cho thuốc'], answerIndex: 1, dictation: true },
    { scriptJa: 'てんきが よければ、でかけます。', meaningVi: 'Nếu thời tiết tốt thì tôi đi chơi.', choices: ['Thời tiết hôm nay thật đẹp', 'Tôi đã đi chơi rồi', 'Nếu thời tiết tốt thì tôi đi chơi', 'Tôi không bao giờ đi chơi'], answerIndex: 2 },
    { scriptJa: 'よやくしなければ、ホテルが いっぱいに なります。', meaningVi: 'Nếu không đặt trước thì khách sạn sẽ đầy.', choices: ['Khách sạn đã đầy rồi', 'Tôi đã đặt khách sạn rồi', 'Đặt trước thì đắt hơn', 'Nếu không đặt trước thì khách sạn sẽ đầy'], answerIndex: 3 },
    { scriptJa: 'たかくなければ、この かさを かいます。', meaningVi: 'Nếu không đắt thì tôi mua chiếc ô này.', choices: ['Chiếc ô này rất đắt', 'Tôi đã mua ô rồi', 'Nếu không đắt thì tôi mua chiếc ô này', 'Tôi không cần ô'], answerIndex: 2 },
  ],
  reading: {
    titleVi: 'Nhật ký thời tiết của Linh',
    lines: [
      { text: 'きょうは くもりでした。あしたの てんきを しんぱいしています。', vi: 'Hôm nay trời nhiều mây. Tôi đang lo thời tiết ngày mai.' },
      { text: 'よる、てんきよほうを みました。あしたは あめです。', vi: 'Tối nay tôi xem dự báo thời tiết. Ngày mai mưa.' },
      { text: 'あめ なら、こうえんで テニスが できません。', vi: 'Nếu mưa thì không chơi tennis ở công viên được.' },
      { text: 'でも、わたしは あめが すきですから、かさが あれば、こうえんへ いきます。', vi: 'Nhưng tôi thích mưa, nên nếu có ô thì tôi vẫn đến công viên.' },
      { text: 'こうえんの はなは とても きれいだと おもいます。', vi: 'Tôi nghĩ hoa ở công viên rất đẹp.' },
      { text: 'あめが ふらなければ、ともだちと テニスを します。', vi: 'Nếu không mưa thì tôi chơi tennis với bạn.' },
      { text: 'てんきが よければ、しゅうまつも でかけます。', vi: 'Nếu thời tiết tốt thì cuối tuần tôi cũng đi chơi.' },
    ],
    questions: [
      { questionVi: 'Theo dự báo, thời tiết ngày mai thế nào?', choices: ['Trời quang', 'Nhiều mây', 'Mưa', 'Có tuyết'], answerIndex: 2, explanationVi: 'Câu 2: てんきよほうを みました。あしたは あめです — theo dự báo, ngày mai mưa.' },
      { questionVi: 'Nếu mưa thì điều gì xảy ra theo người viết?', choices: ['Không chơi tennis ở công viên được', 'Phải ở nhà cả ngày', 'Không được phép ra ngoài', 'Không xem được dự báo'], answerIndex: 0, explanationVi: 'Câu 3: あめ なら、こうえんで テニスが できません.' },
      { questionVi: 'Người viết sẽ làm gì nếu trời không mưa?', choices: ['Ngủ cả ngày', 'Đi công viên một mình', 'Chơi tennis với bạn', 'Mua một chiếc ô mới'], answerIndex: 2, explanationVi: 'Câu 6: あめが ふらなければ、ともだちと テニスを します.' },
    ],
  },
  speakSentences: [
    { ja: 'あめ なら、でかけません。', vi: 'Nếu mưa thì tôi không đi chơi.' },
    { ja: 'この くすりを のめば、きぶんが よくなります。', vi: 'Nếu uống thuốc này thì người sẽ dễ chịu hơn.' },
    { ja: 'はやく よやくしなければ、こまります。', vi: 'Nếu không đặt sớm thì sẽ phiền to.' },
    { ja: 'てんきが よければ、でかけましょう。', vi: 'Nếu thời tiết tốt thì mình đi chơi nhé.' },
  ],
  translatePairs: [
    { ja: 'あめが ふれば、でかけません。', vi: 'Nếu mưa thì tôi không đi chơi.', tokens: ['あめ', 'が', 'ふれば', 'でかけません'], distractors: ['なら'] },
    { ja: 'この みせなら、やすいですよ。', vi: 'Còn nếu là quán này thì rẻ đấy.', tokens: ['この', 'みせ', 'なら', 'やすい', 'です', 'よ'], distractors: ['の'] },
    { ja: 'くすりを のまなければ、なおりません。', vi: 'Nếu không uống thuốc thì sẽ không khỏi.', tokens: ['くすり', 'を', 'のまなければ', 'なおりません'], distractors: ['のめば'] },
    { ja: 'もっと やすければ、かいます。', vi: 'Nếu rẻ hơn nữa thì tôi mua.', tokens: ['もっと', 'やすければ', 'かいます'], distractors: ['やすい'] },
    { ja: 'しゅうまつ なら、わたしは ひまです。', vi: 'Về cuối tuần thì tôi rảnh.', tokens: ['しゅうまつ', 'なら', 'わたし', 'は', 'ひま', 'です'], distractors: ['な'] },
  ],
  kanji: ['天', '気', '雨'],
}
