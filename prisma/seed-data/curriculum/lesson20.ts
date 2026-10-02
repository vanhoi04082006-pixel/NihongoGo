/**
 * NihongoGo — Bài 20: と思います・と言いました (suy nghĩ & trích dẫn).
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson20: CurriculumLesson = {
  order: 20,
  slug: 'l20-suy-nghi-trich-dan',
  title: 'Suy nghĩ & trích dẫn — 〜と思います',
  titleJa: 'と思います',
  description: 'Diễn đạt ý kiến, suy nghĩ của mình và trích dẫn lời người khác.',
  learningObjectives: [
    'Nói ý kiến với 〜と思います',
    'Trích dẫn với 〜と言いました',
    'Diễn đạt suy đoán nhẹ nhàng',
  ],
  grammarTopics: ['〜と思います (tôi nghĩ rằng)', '〜と言いました (nói rằng)'],
  vocabularyTopics: ['Từ diễn đạt ý kiến', 'Từ nối suy luận'],
  kanjiTopics: ['Kanji tư duy & ngôn ngữ (思・言・知)'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'おもいます', romaji: 'omoimasu', meaningVi: 'nghĩ, cho rằng', pos: 'động từ nhóm 1', exampleJa: 'この えいがは おもしろいと おもいます。', exampleVi: 'Tôi nghĩ bộ phim này thú vị.' },
    { term: 'いいます', romaji: 'iimasu', meaningVi: 'nói', pos: 'động từ nhóm 1', exampleJa: 'まいにち せんせいに 「おはよう」と いいます。', exampleVi: 'Mỗi ngày tôi chào buổi sáng với thầy.' },
    { term: 'しっています', romaji: 'shitte imasu', meaningVi: 'biết (ai/cái gì)', pos: 'động từ nhóm 1', exampleJa: 'わたしは その ひとを しっています。', exampleVi: 'Tôi biết người đó.' },
    { term: 'わかります', romaji: 'wakarimasu', meaningVi: 'hiểu, hiểu rõ', pos: 'động từ nhóm 1', exampleJa: 'にほんごが すこし わかります。', exampleVi: 'Tôi hiểu một chút tiếng Nhật.' },
    { term: 'かんがえます', romaji: 'kangaemasu', meaningVi: 'suy nghĩ (về vấn đề)', pos: 'động từ nhóm 2', exampleJa: 'しゅくだいの こたえを かんがえます。', exampleVi: 'Tôi suy nghĩ câu trả lời cho bài tập.' },
    { term: 'こたえます', romaji: 'kotaemasu', meaningVi: 'trả lời', pos: 'động từ nhóm 2', exampleJa: 'せんせいの もんだいに こたえます。', exampleVi: 'Tôi trả lời câu hỏi của thầy.' },
    { term: 'いみ', romaji: 'imi', meaningVi: 'nghĩa, ý nghĩa', pos: 'danh từ', exampleJa: 'この ことばの いみが わかりません。', exampleVi: 'Tôi không hiểu nghĩa của từ này.' },
    { term: 'もんだい', romaji: 'mondai', meaningVi: 'vấn đề, câu hỏi', pos: 'danh từ', exampleJa: 'この もんだいは むずかしいと おもいます。', exampleVi: 'Tôi nghĩ câu hỏi này khó.' },
    { term: 'まちがい', romaji: 'machigai', meaningVi: 'lỗi, chỗ sai', pos: 'danh từ', exampleJa: 'きのうの テストに まちがいが たくさん ありました。', exampleVi: 'Trong bài kiểm tra hôm qua tôi sai rất nhiều.' },
    { term: 'さんせい', romaji: 'sansei', meaningVi: 'sự tán thành', pos: 'danh từ', exampleJa: 'わたしは その かんがえに さんせいです。', exampleVi: 'Tôi tán thành ý kiến đó.' },
    { term: 'はんたい', romaji: 'hantai', meaningVi: 'sự phản đối', pos: 'danh từ', exampleJa: 'わたしは その かんがえに はんたいです。', exampleVi: 'Tôi phản đối ý kiến đó.' },
    { term: 'かんがえ', romaji: 'kangae', meaningVi: 'ý kiến, suy nghĩ', pos: 'danh từ', exampleJa: 'たなかさんの かんがえは どうですか。', exampleVi: 'Ý kiến của Tanaka thế nào?' },
    { term: 'ひみつ', romaji: 'himitsu', meaningVi: 'bí mật', pos: 'danh từ', exampleJa: 'これは ともだちの ひみつです。', exampleVi: 'Đây là bí mật của bạn tôi.' },
    { term: 'はなし', romaji: 'hanashi', meaningVi: 'câu chuyện, lời nói', pos: 'danh từ', exampleJa: 'せんせいの はなしは おもしろいです。', exampleVi: 'Chuyện thầy kể rất thú vị.' },
    { term: 'ほんとう', romaji: 'hontō', meaningVi: 'sự thật, thật ra', pos: 'danh từ', exampleJa: 'その はなしは ほんとうですか。', exampleVi: 'Câu chuyện đó có thật không?' },
    { term: 'たぶん', romaji: 'tabun', meaningVi: 'chắc hẳn, có lẽ', pos: 'phó từ', exampleJa: 'たぶん あしたも いそがしいと おもいます。', exampleVi: 'Tôi nghĩ có lẽ ngày mai cũng bận.' },
    { term: 'きっと', romaji: 'kitto', meaningVi: 'chắc chắn', pos: 'phó từ', exampleJa: 'きっと だいじょうぶだと おもいます。', exampleVi: 'Tôi nghĩ chắc chắn sẽ không sao.' },
    { term: 'ぜんぜん', romaji: 'zenzen', meaningVi: 'hoàn toàn (không)', pos: 'phó từ', exampleJa: 'この もんだいは ぜんぜん わかりません。', exampleVi: 'Tôi hoàn toàn không hiểu câu hỏi này.' },
    { term: 'よく', romaji: 'yoku', meaningVi: 'hay, thường xuyên, chăm chỉ', pos: 'phó từ', exampleJa: 'せんせいの はなしを よく ききます。', exampleVi: 'Tôi chăm chú lắng nghe lời thầy.' },
    { term: 'ふべん', romaji: 'fuben', meaningVi: 'bất tiện', pos: 'tính từ な', exampleJa: 'この バスの じかんは ふべんですね。', exampleVi: 'Lịch xe buýt này bất tiện nhỉ.' },
    { term: 'かしこい', romaji: 'kashikoi', meaningVi: 'thông minh', pos: 'tính từ い', exampleJa: 'あの ひとは かしこいと おもいます。', exampleVi: 'Tôi nghĩ người kia thông minh.' },
  ],
  grammar: [
    {
      code: 'l20-to-omoimasu',
      title: '〜と思います — tôi nghĩ rằng…',
      formation: 'Mệnh đề thể thường + と おもいます',
      explanationVi:
        'Trước と おもいます dùng THỂ THƯỜNG (đã học ở bài 18, 19): động từ のむ・たべる・する・くる, tính từ い giữ nguyên (たかい), tính từ な và danh từ thêm だ (きれいだ・がくせいだ). Cả câu vẫn lịch sự nhờ おもいます ở cuối: あの たてものは たかいと おもいます. Phủ định mệnh đề: たかくないと おもいます, いかないと おもいます. Hỏi ý kiến người khác: どう おもいますか. Người Nhật rất hay dùng 〜と おもいます để nêu ý kiến một cách nhẹ nhàng, mềm mại thay vì nói thẳng.',
      examples: [
        { ja: 'この まちは きれいだと おもいます。', vi: 'Tôi nghĩ thành phố này đẹp.', tokens: ['この', 'まち', 'は', 'きれい', 'だ', 'と', 'おもいます'] },
        { ja: 'あしたは いそがしいと おもいます。', vi: 'Tôi nghĩ ngày mai sẽ bận.' },
        { ja: 'こんど にほんへ いきたいと おもいます。', vi: 'Tôi đang nghĩ là lần này muốn sang Nhật.', tokens: ['こんど', 'にほん', 'へ', 'いきたい', 'と', 'おもいます'] },
        { ja: 'あの えいがは おもしろいと おもいます。', vi: 'Tôi nghĩ bộ phim kia thú vị.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'きれい (tính từ な) → dạng đứng trước と おもいます',
          sentence: 'この まちは ___と おもいます。',
          options: ['きれいです', 'きれいな', 'きれいだ', 'きれいでした'],
          answerIndex: 2, explanationVi: 'Trước と おもいます là thể thường: tính từ な/danh từ lấy だ → きれいだと おもいます. な chỉ dùng khi tính từ な đứng trước danh từ (bài 19).',
        },
        {
          kind: 'conjugate', prompt: 'きます → thể thường đứng trước と おもいます',
          sentence: 'ともだちも ___と おもいます。',
          options: ['きます', 'くる', 'きて', 'こられます'],
          answerIndex: 1, explanationVi: 'きます (nhóm 3) có thể thường là くる: くると おもいます = tôi nghĩ bạn ấy cũng sẽ đến. きて là thể て, こられます là thể khả năng (bài 18).',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ đứng giữa mệnh đề và おもいます',
          sentence: 'この えいがは おもしろい___ おもいます。',
          options: ['を', 'と', 'が', 'の'],
          answerIndex: 1, explanationVi: 'と trích dẫn nội dung suy nghĩ ("rằng…") rồi mới đến おもいます: おもしろいと おもいます.',
        },
        {
          kind: 'choice', prompt: '「こんど にほんへ いきたいと おもいます。」 có nghĩa là gì?',
          options: ['Tôi đã đến Nhật rồi', 'Tôi không muốn đến Nhật', 'Tôi phải đến Nhật', 'Tôi nghĩ là tôi muốn sang Nhật lần này'],
          answerIndex: 3, explanationVi: 'いきたい (muốn đi, bài 12) + と おもいます = tôi nghĩ/nghi là mình muốn… — cách nói ý định, mong muốn nhẹ nhàng.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['この まちは きれいと おもいます。', 'この まちは きれいですと おもいます。', 'この まちは きれいだと おもいます。', 'この まちは きれいだのおもいます。'],
          answerIndex: 2, explanationVi: 'Tính từ な trước と phải có だ: きれいだと おもいます. です không đứng trước と vì sự lịch sự đã nằm ở おもいます.',
        },
        {
          kind: 'fill', prompt: 'Điền từ đúng (Tôi nghĩ có lẽ ngày mai cũng bận)',
          sentence: 'たぶん あしたも ___と おもいます。',
          options: ['いそがしいです', 'いそがしく', 'いそがしかった', 'いそがしい'],
          answerIndex: 3, explanationVi: 'Tính từ い giữ nguyên thể thường trước と: いそがしいと おもいます. Không thêm です vì おもいます đã là dạng lịch sự.',
        },
      ],
    },
    {
      code: 'l20-to-iimashita',
      title: '〜と言いました — ai đó nói rằng…',
      formation: 'Người nói は (+ người nghe に) + mệnh đề thể thường + と いいました',
      explanationVi:
        'Mẫu trích dẫn: A は …と いいました = A nói rằng…. Trước と cũng dùng thể thường giống như với と おもいます: くる・むずかしい・テストだ. Nếu có người nghe thì thêm に: リンさんに いいました = nói với Linh (は là người nói, に là người nghe). Khi trích nguyên văn lời người ta (có dấu 「」) thì giữ đúng dạng người ta đã nói, kể cả ます: 「いきませんか」と いいました. Câu hỏi: なんじに くると いいましたか. Chú ý: いいました là hành vi NÓI, khác おもいました (nghĩ).',
      examples: [
        { ja: 'たなかさんは こんど くると いいました。', vi: 'Tanaka nói là lần này sẽ đến.', tokens: ['たなかさん', 'は', 'こんど', 'くる', 'と', 'いいました'] },
        { ja: 'せんせいは あしたは テストだと いいました。', vi: 'Thầy nói là ngày mai có bài kiểm tra.', tokens: ['せんせい', 'は', 'あした', 'は', 'テスト', 'だ', 'と', 'いいました'] },
        { ja: 'リンさんは きょうは いそがしいと いいました。', vi: 'Linh nói là hôm nay bận.' },
        { ja: 'ともだちは なんじに くると いいましたか。', vi: 'Bạn nói là sẽ đến lúc mấy giờ?' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '「せんせいは あしたは テストだと いいました。」 có nghĩa là gì?',
          options: ['Thầy nghĩ ngày mai có bài kiểm tra', 'Tôi nói với thầy về bài kiểm tra', 'Thầy nói là ngày mai có bài kiểm tra', 'Bài kiểm tra ngày mai rất khó'],
          answerIndex: 2, explanationVi: '〜と いいました = ai đó NÓI rằng… Nếu là "nghĩ" thì phải dùng と おもいました.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ trích dẫn lời nói',
          sentence: 'リンさんは すしを たべたい___ いいました。',
          options: ['を', 'と', 'の', 'か'],
          answerIndex: 1, explanationVi: 'と nối nội dung được trích dẫn với động từ nói: たべたいと いいました = nói là muốn ăn sushi.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ cho NGƯỜI NGHE',
          sentence: 'たなかさんは リンさん___ ありがとうと いいました。',
          options: ['と', 'を', 'へ', 'に'],
          answerIndex: 3, explanationVi: 'Người nghe đi với に: リンさんに いいました = nói với Linh. Trợ từ は đánh dấu người NÓI.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng khi nói "Tanaka nói là sẽ đến"?',
          options: ['たなかさんは くると いいました。', 'たなかさんは くるですと いいました。', 'たなかさんは くると おもいました。', 'たなかさんは くるを いいました。'],
          answerIndex: 0, explanationVi: 'Trước と dùng thể thường くる; です không đứng trước と; おもいました nghĩa là "nghĩ" chứ không phải "nói".',
        },
        {
          kind: 'fill', prompt: 'Điền dạng đúng của いく (Hôm qua bạn tôi nói là cuối tuần sẽ đi biển)',
          sentence: 'きのう ともだちは しゅうまつは うみへ ___と いいました。',
          options: ['いきます', 'いきました', 'いく', 'いって'],
          answerIndex: 2, explanationVi: 'Lời được trích dẫn chia ở thể thường: いくと いいました. Động từ nói いいました ở quá khứ nhưng động từ trong lời nói vẫn giữ thể thường.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Giáo viên mới',
      situationVi: 'Ở trường, Tanaka hỏi Linh về tiết học của giáo viên mới.',
      lines: [
        { speaker: 'たなか', ja: 'リンさん、あたらしい せんせいの じゅぎょうは どうでしたか。', vi: 'Linh, tiết học của giáo viên mới thế nào?' },
        { speaker: 'リン', ja: 'たのしいと おもいます。せんせいの はなしも おもしろいです。', vi: 'Tôi thấy vui. Chuyện thầy kể cũng thú vị.' },
        { speaker: 'たなか', ja: 'そうですか。テストは たくさん ありますか。', vi: 'Vậy à. Có nhiều bài kiểm tra không?' },
        { speaker: 'リン', ja: 'ええ。でも、テストは むずかしくないと おもいます。', vi: 'Có. Nhưng tôi nghĩ bài kiểm tra không khó.' },
        { speaker: 'たなか', ja: 'いいせんせいだと おもいますか。', vi: 'Bạn nghĩ thầy là giáo viên giỏi à?' },
        { speaker: 'リン', ja: 'はい。せんせいの はなしは ゆっくりです。よく わかります。', vi: 'Vâng. Thầy nói chậm rãi. Tôi hiểu rõ.' },
        { speaker: 'たなか', ja: 'いいですね。わたしも その せんせいの じゅぎょうへ いきたいです。', vi: 'Hay đấy. Tôi cũng muốn học tiết của thầy ấy.' },
        { speaker: 'リン', ja: 'はい、いっしょに いきましょう。', vi: 'Vâng, mình cùng đi nhé.' },
      ],
    },
    {
      titleVi: 'Cuộc điện thoại của bạn',
      situationVi: 'Min hỏi Linh về cuộc điện thoại tối qua của một người bạn.',
      lines: [
        { speaker: 'ミン', ja: 'リンさん、きのう ともだちに でんわを しましたか。', vi: 'Linh, hôm qua bạn có gọi điện cho bạn bè không?' },
        { speaker: 'リン', ja: 'いいえ、ともだちは わたしに でんわを しました。', vi: 'Không, bạn ấy gọi điện cho tôi.' },
        { speaker: 'ミン', ja: 'ともだちは なにを いいましたか。', vi: 'Bạn ấy nói gì?' },
        { speaker: 'リン', ja: '「こんどの しゅうまつ、えいがへ いきませんか」と いいました。', vi: 'Bạn ấy nói: "Cuối tuần này đi xem phim không?".' },
        { speaker: 'ミン', ja: 'いいですね。リンさんは どう おもいますか。', vi: 'Hay đấy. Linh nghĩ sao?' },
        { speaker: 'リン', ja: 'えいがは たのしいと おもいます。でも、しゅうまつは いそがしいです。', vi: 'Tôi nghĩ phim sẽ vui. Nhưng cuối tuần tôi bận.' },
        { speaker: 'ミン', ja: 'そうですか。', vi: 'Vậy à.' },
        { speaker: 'リン', ja: 'でも、ともだちと いっしょに いきたいです。', vi: 'Nhưng tôi vẫn muốn đi cùng bạn ấy.' },
        { speaker: 'ミン', ja: 'きっと たのしいと おもいます。', vi: 'Tôi nghĩ chắc chắn sẽ vui.' },
        { speaker: 'リン', ja: 'はい。こんど いっしょに いきましょう。', vi: 'Vâng. Lần này mình cùng đi nhé.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'この まちは きれいだと おもいます。', meaningVi: 'Tôi nghĩ thành phố này đẹp.', choices: ['Tôi nghĩ thành phố này đẹp', 'Thành phố này không đẹp', 'Tôi đã đến thành phố này', 'Tôi muốn đến thành phố đẹp'], answerIndex: 0, dictation: true },
    { scriptJa: 'たなかさんは あした くると いいました。', meaningVi: 'Tanaka nói là ngày mai sẽ đến.', choices: ['Tanaka nghĩ ngày mai sẽ đến', 'Tanaka nói là ngày mai sẽ đến', 'Tôi bảo Tanaka ngày mai đến', 'Tanaka đã đến rồi'], answerIndex: 1, dictation: true },
    { scriptJa: 'この もんだいは ぜんぜん わかりません。', meaningVi: 'Câu hỏi này tôi hoàn toàn không hiểu.', choices: ['Tôi hiểu rõ câu này', 'Câu này rất dễ', 'Hoàn toàn không hiểu câu này', 'Tôi đã hỏi câu này'], answerIndex: 2 },
    { scriptJa: 'たぶん あしたも いそがしいと おもいます。', meaningVi: 'Tôi nghĩ có lẽ ngày mai cũng bận.', choices: ['Ngày mai tôi rảnh', 'Tôi nghĩ có lẽ ngày mai cũng bận', 'Hôm qua tôi bận', 'Tôi không muốn làm gì'], answerIndex: 1 },
    { scriptJa: 'せんせいの はなしは おもしろいと おもいます。', meaningVi: 'Tôi nghĩ chuyện thầy kể thú vị.', choices: ['Bài giảng của thầy khó hiểu', 'Tôi nghĩ chuyện thầy kể thú vị', 'Thầy không nói gì cả', 'Tôi đã kể chuyện cho thầy'], answerIndex: 1 },
  ],
  reading: {
    titleVi: 'Tin từ Min',
    lines: [
      { text: 'きのう、ともだちの ミンさんに でんわを しました。', vi: 'Hôm qua tôi đã gọi điện cho bạn tôi là Min.' },
      { text: 'ミンさんは 「らいしゅう、かんじの テストが あります」と いいました。', vi: 'Min nói: "Tuần sau có bài kiểm tra kanji".' },
      { text: 'わたしは かんじの テストは ちょっと むずかしいと おもいます。', vi: 'Tôi nghĩ bài kiểm tra kanji hơi khó.' },
      { text: 'でも、まいにち すこし べんきょうします。', vi: 'Nhưng mỗi ngày tôi học một chút.' },
      { text: 'ミンさんは 「こんどの しゅうまつ、いっしょに こうえんへ いきませんか」と いいました。', vi: 'Min hỏi: "Cuối tuần này cùng đi công viên không?".' },
      { text: 'わたしは その かんがえに さんせいです。', vi: 'Tôi tán thành ý kiến đó.' },
      { text: 'こうえんは きれいだと おもいます。', vi: 'Tôi nghĩ công viên đẹp.' },
      { text: 'わたしは 「はい、いっしょに いきましょう」と こたえました。', vi: 'Tôi trả lời: "Vâng, mình cùng đi nhé".' },
    ],
    questions: [
      { questionVi: 'Min nói gì trong cuộc điện thoại?', choices: ['Min đã thi xong rồi', 'Tuần sau có bài kiểm tra kanji', 'Min mời đi công viên ngay hôm nay', 'Min không học kanji'], answerIndex: 1, explanationVi: 'Câu 2: 「らいしゅう、かんじの テストが あります」と いいました — Min nói tuần sau có bài kiểm tra kanji.' },
      { questionVi: 'Người viết nghĩ sao về bài kiểm tra kanji?', choices: ['Rất dễ', 'Không phải làm bài', 'Đã thi rồi', 'Hơi khó'], answerIndex: 3, explanationVi: 'Câu 3: ちょっと むずかしいと おもいます = nghĩ rằng hơi khó.' },
      { questionVi: 'Cuối tuần này hai bạn định làm gì?', choices: ['Học kanji ở nhà', 'Đi công viên cùng nhau', 'Gọi điện cho thầy', 'Đi siêu thị mua quà'], answerIndex: 1, explanationVi: 'Câu 5 và câu 8: Min rủ đi công viên, người viết đã đồng ý cùng đi.' },
    ],
  },
  speakSentences: [
    { ja: 'この まちは きれいだと おもいます。', vi: 'Tôi nghĩ thành phố này đẹp.' },
    { ja: 'たなかさんは こんど くると いいました。', vi: 'Tanaka nói là lần này sẽ đến.' },
    { ja: 'たぶん あしたも いそがしいと おもいます。', vi: 'Tôi nghĩ có lẽ ngày mai cũng bận.' },
    { ja: 'わたしは さんせいです。', vi: 'Tôi tán thành.' },
  ],
  translatePairs: [
    { ja: 'この えいがは おもしろいと おもいます。', vi: 'Tôi nghĩ bộ phim này thú vị.', tokens: ['この', 'えいが', 'は', 'おもしろい', 'と', 'おもいます'], distractors: ['です'] },
    { ja: 'たなかさんは あした くると いいました。', vi: 'Tanaka nói là ngày mai sẽ đến.', tokens: ['たなかさん', 'は', 'あした', 'くる', 'と', 'いいました'], distractors: ['を'] },
    { ja: 'きのうの テストは むずかしいと おもいます。', vi: 'Tôi nghĩ bài kiểm tra hôm qua khó.', tokens: ['きのう', 'の', 'テスト', 'は', 'むずかしい', 'と', 'おもいます'], distractors: ['でした'] },
    { ja: 'リンさんは はんたいです。', vi: 'Linh phản đối.', tokens: ['リンさん', 'は', 'はんたい', 'です'], distractors: ['さんせい'] },
    { ja: 'せんせいの はなしは よく わかります。', vi: 'Tôi hiểu rõ lời thầy giảng.', tokens: ['せんせい', 'の', 'はなし', 'は', 'よく', 'わかります'], distractors: ['を'] },
  ],
  kanji: ['思', '言', '知'],
}
