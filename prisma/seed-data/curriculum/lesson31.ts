/**
 * NihongoGo — Bài 31: Thể sai khiến (使役形).
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson31: CurriculumLesson = {
  order: 31,
  slug: 'l31-the-sai-khien',
  title: 'Thể sai khiến — 使役',
  titleJa: '使役形',
  description: 'Nói việc bắt hoặc cho phép người khác làm gì với thể sai khiến.',
  learningObjectives: [
    'Chia động từ sang thể sai khiến',
    'Phân biệt させる và 〜てもらう',
    'Ra chỉ thị, phân công công việc',
  ],
  grammarTopics: ['Quy tắc chia thể sai khiến', '〜させる (bảo làm, cho phép làm)'],
  vocabularyTopics: ['Chỉ thị và phân công', 'Quan hệ cấp trên cấp dưới'],
  kanjiTopics: ['Kanji dạy & học (教・習・学)'],
  difficulty: 'ELEMENTARY',
  vocabulary: [
    { term: '教えます', reading: 'おしえます', romaji: 'oshiemasu', meaningVi: 'dạy, chỉ cho', pos: 'động từ nhóm 2', exampleJa: 'せんせいは がくせいに にほんごを 教えます。', exampleVi: 'Thầy giáo dạy tiếng Nhật cho học sinh.' },
    { term: '習います', reading: 'ならいます', romaji: 'naraimasu', meaningVi: 'học (môn kỹ năng, nghề)', pos: 'động từ nhóm 1', exampleJa: 'わたしは まいにち ピアノを 習います。', exampleVi: 'Tôi học đàn piano mỗi ngày.' },
    { term: 'てつだいます', romaji: 'tetsudaimasu', meaningVi: 'giúp đỡ, phụ giúp', pos: 'động từ nhóm 1', exampleJa: 'おかあさんを てつだいます。', exampleVi: 'Tôi giúp mẹ.' },
    { term: 'やさい', romaji: 'yasai', meaningVi: 'rau, rau củ', pos: 'danh từ', exampleJa: 'まいにち やさいを たべます。', exampleVi: 'Mỗi ngày tôi ăn rau.' },
    { term: 'いれます', romaji: 'iremasu', meaningVi: 'pha (trà, cà phê), rót vào', pos: 'động từ nhóm 2', exampleJa: 'まいあさ おちゃを いれます。', exampleVi: 'Mỗi sáng tôi pha trà.' },
    { term: 'ゆるします', romaji: 'yurushimasu', meaningVi: 'tha thứ, bỏ qua', pos: 'động từ nhóm 1', exampleJa: 'おとうとが わたしを ゆるします。', exampleVi: 'Em trai đã tha thứ cho tôi.' },
    { term: 'せんぱい', romaji: 'senpai', meaningVi: 'tiền bối, anh chị khóa trên', pos: 'danh từ', exampleJa: 'せんぱいは いつも やさしいです。', exampleVi: 'Tiền bối luôn tử tế.' },
    { term: 'こうはい', romaji: 'kōhai', meaningVi: 'em khóa dưới, junior', pos: 'danh từ', exampleJa: 'こうはいと いっしょに はたらきます。', exampleVi: 'Tôi làm việc cùng em khóa dưới.' },
    { term: 'じぶん', romaji: 'jibun', meaningVi: 'chính mình, tự (mình)', pos: 'danh từ (phản thân)', exampleJa: 'こどもが じぶんで しゅくだいを します。', exampleVi: 'Con tôi tự làm bài tập.' },
    { term: 'おつかい', romaji: 'otsukai', meaningVi: 'việc vặt (chạy việc hộ)', pos: 'danh từ', exampleJa: 'スーパーへ おつかいに いきます。', exampleVi: 'Tôi đi chạy việc vặt ở siêu thị.' },
    { term: 'しらべます', romaji: 'shirabemasu', meaningVi: 'tra cứu, tìm hiểu', pos: 'động từ nhóm 2', exampleJa: 'わからない ことばを じしょで しらべます。', exampleVi: 'Tôi tra cứu từ không hiểu bằng từ điển.' },
    { term: 'こづかい', romaji: 'kozukai', meaningVi: 'tiền tiêu vặt', pos: 'danh từ', exampleJa: 'こどもに こづかいを あげます。', exampleVi: 'Tôi cho con tiền tiêu vặt.' },
    { term: 'よびます', romaji: 'yobimasu', meaningVi: 'gọi, triệu tập', pos: 'động từ nhóm 1', exampleJa: 'せんせいが わたしを よびます。', exampleVi: 'Thầy giáo đã gọi tôi.' },
    { term: 'きまり', romaji: 'kimari', meaningVi: 'quy tắc, quy định', pos: 'danh từ', exampleJa: '九じに ねるのが うちの きまりです。', exampleVi: 'Chín giờ đi ngủ là quy định của nhà tôi.' },
    { term: 'ひるね', romaji: 'hirune', meaningVi: 'giấc ngủ trưa', pos: 'danh từ', exampleJa: 'こどもは いま ひるねを しています。', exampleVi: 'Bé đang ngủ trưa.' },
    { term: 'ねむい', romaji: 'nemui', meaningVi: 'buồn ngủ', pos: 'tính từ い', exampleJa: 'よる 九じに なると、こどもは ねむいです。', exampleVi: 'Đứa trẻ nào cũng buồn ngủ lúc chín giờ tối.' },
    { term: 'じょうず', romaji: 'jōzu', meaningVi: 'giỏi, khéo léo', pos: 'tính từ な', exampleJa: 'せんぱいは ピアノが じょうずです。', exampleVi: 'Tiền bối chơi piano rất giỏi.' },
    { term: 'かたづけます', romaji: 'katazukemasu', meaningVi: 'dọn dẹp, cất dọn', pos: 'động từ nhóm 2', exampleJa: 'つくえの うえを かたづけます。', exampleVi: 'Tôi dọn gọn mặt bàn.' },
  ],
  grammar: [
    {
      code: 'l31-shieki-formation',
      title: 'Thể sai khiến (使役) — cách chia',
      formation: 'Nhóm 1: gốc う段 → あ段 + せます (のみます → のませます); Nhóm 2: ます → させます (たべます → たべさせます); Nhóm 3: します → させます, きます → こさせます',
      explanationVi:
        'Sai khiến dùng để bảo, cho phép hoặc bắt AI ĐÓ làm việc gì. Cách chia: nhóm 1 đổi nguyên âm cuối gốc sang hàng あ rồi thêm せます — のみます → のませます, かきます → かかせます; riêng động từ kết thúc う thì thành わ: かいます → かわせます. Nhóm 2 bỏ ます thêm させます — たべます → たべさせます, いれます → いれさせます. Nhóm 3: します → させます, きます → こさせます. Đừng nhầm với bị động của bài 30: sai khiến nhóm 1 dùng せ, bị động dùng れ; nhóm 2 sai khiến させる, bị động られる.',
      examples: [
        { ja: 'せんせいが がくせいに ほんを よませます。', vi: 'Thầy giáo cho học sinh đọc sách.', tokens: ['せんせい', 'が', 'がくせい', 'に', 'ほん', 'を', 'よませます'] },
        { ja: 'おかあさんが 弟に くすりを のませます。', vi: 'Mẹ cho em trai uống thuốc.' },
        { ja: 'こどもに やさいを たべさせます。', vi: 'Tôi bảo con ăn rau.' },
        { ja: 'せんせいは あした がくせいを こうえんに こさせます。', vi: 'Thầy giáo cho học sinh đến công viên vào ngày mai.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'のみます → thể sai khiến (dạng ます)',
          sentence: 'おかあさんが 弟に くすりを ___。',
          options: ['のまれます', 'のませます', 'のさせます', 'のまされました'],
          answerIndex: 1, explanationVi: 'のみます là nhóm 1 (み → ませ): のみます → のませます. のまれます là bị động (bài 30); のさせます là lỗi chia nhóm 2.',
        },
        {
          kind: 'conjugate', prompt: 'たべます → thể sai khiến (dạng ます)',
          sentence: 'こどもに やさいを ___。',
          options: ['たべれます', 'たべらせます', 'たべさせます', 'たべわされます'],
          answerIndex: 2, explanationVi: 'たべます là nhóm 2: bỏ ます thêm させます → たべさせます. たべらせます là lỗi chắp nối; たべれます là dạng khả năng suồng sã.',
        },
        {
          kind: 'choice', prompt: 'Chia 「します」 sang thể sai khiến?',
          options: ['しせられます', 'せさせます', 'しさせます', 'させます'],
          answerIndex: 3, explanationVi: 'Nhóm 3: します → させます (và きます → こさせます). Không thêm せ/させ vào gốc し.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['せんせいが がくせいに ほんを よせます。', 'せんせいが がくせいに ほんを よばせます。', 'せんせいが がくせいに ほんを よませます。', 'せんせいが がくせいに ほんを よまれます。'],
          answerIndex: 2, explanationVi: 'よみます là nhóm 1 (み → ませ): よませます. よせます/よばせます sai quy tắc; よまれます là bị động — nghĩa là "cuốn sách được đọc".',
        },
      ],
    },
    {
      code: 'l31-shieki-ni',
      title: 'Aが Bに Vさせます — bảo B làm',
      formation: 'A (người ra lệnh) が + B (người được sai) に/を + (tân ngữ を) + động từ sai khiến',
      explanationVi:
        'A là chủ ngữ — người có quyền quyết định; B là người trực tiếp thực hiện hành động. Động từ QUÁ ĐỘ (có tân ngữ) thì B đi với に: せんせいが がくせいに しゅくだいを させます. Động từ TỰ ĐỘNG (không tân ngữ: ねます, あそびます, いきます…) thì B đi với を: こどもを ねさせます, こどもを あそばせます. B thường là người cấp dưới, em nhỏ, học sinh; với bạn bè hay người trên thì nên dùng cách nhờ vả lịch sự (〜てもらう) chứ đừng dùng させます.',
      examples: [
        { ja: 'おかあさんが 弟に へやを そうじさせました。', vi: 'Mẹ bảo em trai dọn phòng.', tokens: ['おかあさん', 'が', '弟', 'に', 'へや', 'を', 'そうじさせました'] },
        { ja: 'よる、こどもを はやく ねさせます。', vi: 'Buổi tối tôi cho con đi ngủ sớm.', tokens: ['よる', 'こども', 'を', 'はやく', 'ねさせます'] },
        { ja: 'つかれた こどもを ゆっくり あそばせます。', vi: 'Tôi để đứa trẻ mệt được chơi thong thả.' },
        { ja: 'こどもに じぶんで かいものを させます。', vi: 'Tôi để con tự đi mua đồ.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Người được sai bảo (học sinh) đi với trợ từ nào? (Thầy giáo bắt học sinh làm bài tập)',
          sentence: 'せんせいが がくせい___ しゅくだいを させます。',
          options: ['に', 'を', 'が', 'の'],
          answerIndex: 0, explanationVi: 'させます ở đây là động từ quá độ (có しゅくだいを) nên người được sai (がくせい) đi với に.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ (Buổi tối tôi cho con đi ngủ sớm — ねます không có tân ngữ)',
          sentence: 'よる、こども___ はやく ねさせます。',
          options: ['に', 'を', 'が', 'へ'],
          answerIndex: 1, explanationVi: 'ねます là động từ tự động (không tân ngữ) nên người được sai (こども) đi với を: こどもを ねさせます.',
        },
        {
          kind: 'choice', prompt: '「おかあさんが 弟に へやを そうじさせました。」 — ai là người dọn phòng?',
          options: ['Em trai', 'Mẹ', 'Cả hai cùng dọn', 'Không ai dọn'],
          answerIndex: 0, explanationVi: 'が = người ra lệnh (mẹ); に = người thực hiện → em trai là người dọn phòng.',
        },
        {
          kind: 'fill', prompt: 'Điền dạng đúng (Tôi cho đứa trẻ mệt được nghỉ ngơi)',
          sentence: 'つかれた こどもを ゆっくり ___。',
          options: ['やすまれます', 'やすませます', 'やすみられます', 'やすませられます'],
          answerIndex: 1, explanationVi: 'やすみます là nhóm 1 (み → ませ): やすませます = cho/bắt nghỉ. やすまれます là bị động; やすませられます là sai khiến kết hợp bị động (xem điểm 3).',
        },
      ],
    },
    {
      code: 'l31-shieki-permit',
      title: 'Cho phép làm & đối chiếu 〜てもらう',
      formation: 'Bắt buộc lẫn cho phép đều dùng 〜させます; xin phép lịch sự: V-sai khiến + て + も いいですか; nhờ ai làm: 〜てもらいます',
      explanationVi:
        'Sai khiến mang hai sắc thái: (1) BẮT BUỘC — cấp trên ép cấp dưới: せんせいが わたしに もういちど かかせました; (2) CHO PHÉP — để người dưới làm điều tốt cho họ: こどもに じぶんで かいものを させます. Muốn xin phép cho ai thì dùng V-sai khiến + て + も いいですか: やすませて も いいですか. Phân biệt với 〜てもらいます: 「せんぱいに 教えて もらいました」 = tôi NHỜ, người giúp là せんぱい (tôi hưởng lợi, họ tự nguyện); 「せんぱいに 教えさせました」 = tôi BẢO せんぱい dạy (tôi ra lệnh — thô lỗ với người trên). Ngoài ra còn gặp させられます — sai khiến kết hợp bị động, nghĩa "bị bắt phải làm": たくさんの しごとを させられました; bài sau sẽ luyện kỹ dạng này.',
      examples: [
        { ja: 'こどもに じぶんで かいものを させます。', vi: 'Tôi để con tự đi mua đồ.' },
        { ja: 'こどもが つかれて いるから、やすませて も いいですか。', vi: 'Con mệt rồi, cho con nghỉ ngơi được không?' },
        { ja: 'わたしは せんぱいに たくさん 教えて もらいました。', vi: 'Tôi được tiền bối chỉ dạy rất nhiều.', tokens: ['わたし', 'は', 'せんぱい', 'に', 'たくさん', '教えて', 'もらいました'] },
        { ja: 'きのう、たくさんの しごとを させられました。', vi: 'Hôm qua tôi bị bắt phải làm rất nhiều việc.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '「こどもに じぶんで かいものを させます。」 có nghĩa là gì?',
          options: ['Tôi đi mua đồ thay con', 'Con tôi không muốn mua đồ', 'Tôi mua đồ cùng con', 'Tôi để con tự đi mua đồ'],
          answerIndex: 3, explanationVi: 'じぶんで = tự mình; させます ở đây là CHO PHÉP → tôi để con tự đi mua đồ. Nếu tôi mua hộ thì phải nói かいものに いって あげます.',
        },
        {
          kind: 'fill', prompt: 'Điền cụm đúng (Con mệt rồi, cho con nghỉ ngơi được không?)',
          sentence: 'こどもが つかれて いるから、___。',
          options: ['やすませて は いけません', 'やすみませんでした', 'やすませて も いいですか', 'やすまないで ください'],
          answerIndex: 2, explanationVi: 'Xin phép: V-sai khiến + て + も いいですか → やすませて も いいですか. ては いけません là "không được phép" — ngược nghĩa.',
        },
        {
          kind: 'choice', prompt: '「わたしは せんぱいに たくさん 教えて もらいました。」 — ai là người dạy?',
          options: ['Tôi', 'Tiền bối', 'Cả hai cùng dạy', 'Không ai'],
          answerIndex: 1, explanationVi: '〜てもらう = tôi nhờ → người thực hiện là せんぱい. Nếu nói せんぱいに 教えさせました thì tôi ra lệnh cho tiền bối — rất thô lỗ.',
        },
        {
          kind: 'fill', prompt: 'Điền dạng đúng (Hôm qua tôi bị bắt phải làm rất nhiều việc)',
          sentence: 'きのう、かいしゃで たくさんの しごとを ___。',
          options: ['させました', 'しられました', 'させられました', 'させて います'],
          answerIndex: 2, explanationVi: 'させられます = sai khiến + bị động: "bị bắt phải làm". させました nghĩa là tôi bắt người khác làm — chủ ngữ là người ra lệnh.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Ngày cuối tuần phụ việc nhà',
      situationVi: 'Linh hỏi Min về chủ nhật vừa qua ở nhà Min.',
      lines: [
        { speaker: 'リン', ja: 'ミンさん、にちようびは なにを しましたか。', vi: 'Min, chủ nhật vừa rồi bạn làm gì?' },
        { speaker: 'ミン', ja: 'おかあさんの しごとを てつだいました。', vi: 'Tôi phụ giúp việc của mẹ.' },
        { speaker: 'リン', ja: 'どんな しごとでしたか。', vi: 'Việc gì vậy?' },
        { speaker: 'ミン', ja: 'おかあさんは わたしに へやの そうじを させました。', vi: 'Mẹ bảo tôi dọn phòng.' },
        { speaker: 'リン', ja: 'ミンさんは おとうとさんにも させましたか。', vi: 'Bạn có bảo em trai làm gì không?' },
        { speaker: 'ミン', ja: 'はい。おとうとを スーパーへ おつかいに いかせました。', vi: 'Có. Tôi bảo em trai đi chạy việc vặt ở siêu thị.' },
        { speaker: 'リン', ja: 'おとうとさんは じぶんで いきましたか。', vi: 'Em trai bạn tự mình đi à?' },
        { speaker: 'ミン', ja: 'はい。よく できましたから、おかあさんは おとうとに こづかいを あげました。', vi: 'Ừ. Vì làm tốt nên mẹ cho em tiền tiêu vặt.' },
        { speaker: 'リン', ja: 'いいですね。やさしい おかあさんですね。', vi: 'Hay đấy. Mẹ bạn thật tử tế.' },
        { speaker: 'ミン', ja: 'ええ。こんどの しゅうまつも おかあさんを てつだいます。', vi: 'Ừ. Cuối tuần này tôi cũng giúp mẹ.' },
      ],
    },
    {
      titleVi: 'Bài học vui',
      situationVi: 'Tanaka hỏi Linh về tiết học tiếng Nhật hôm qua.',
      lines: [
        { speaker: 'たなか', ja: 'リンさん、きのうの じゅぎょうは どうでしたか。', vi: 'Linh, tiết học hôm qua thế nào?' },
        { speaker: 'リン', ja: 'たのしかったですよ。せんせいが わたしたちに にほんごの うたを うたわせました。', vi: 'Vui lắm. Thầy cho chúng tôi hát bài hát tiếng Nhật.' },
        { speaker: 'たなか', ja: 'うたは むずかしかったですか。', vi: 'Bài hát có khó không?' },
        { speaker: 'リン', ja: 'はい。でも、せんせいが ゆっくり うたって、わたしたちに ならわせました。', vi: 'Khó. Nhưng thầy hát chậm rồi cho chúng tôi học theo.' },
        { speaker: 'たなか', ja: 'いい じゅぎょうですね。', vi: 'Tiết học hay nhỉ.' },
        { speaker: 'リン', ja: 'せんせいは わたしたちに もんだいにも こたえさせました。', vi: 'Thầy cũng bắt chúng tôi trả lời câu hỏi.' },
        { speaker: 'たなか', ja: 'わたしの じゅぎょうでは、せんせいが じしょで ことばを しらべさせます。', vi: 'Ở lớp tôi, thầy bắt tra từ mới bằng từ điển.' },
        { speaker: 'リン', ja: 'わたしも ことばを せんぱいに 教えて もらいました。', vi: 'Tôi cũng được tiền bối dạy từ mới.' },
        { speaker: 'たなか', ja: 'じゃあ、わたしも にほんごの うたを うたいたいです。', vi: 'Vậy tôi cũng muốn hát bài hát tiếng Nhật.' },
        { speaker: 'リン', ja: 'いいですね。こんど いっしょに うたいましょう。', vi: 'Hay đấy. Lần này mình cùng hát nhé.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'せんせいが がくせいに ほんを よませます。', meaningVi: 'Thầy giáo cho học sinh đọc sách.', choices: ['Học sinh đọc sách cho thầy nghe', 'Thầy giáo đọc sách cho học sinh', 'Thầy giáo cho học sinh đọc sách', 'Học sinh không muốn đọc sách'], answerIndex: 2, dictation: true },
    { scriptJa: 'こどもに やさいを たべさせます。', meaningVi: 'Tôi bảo con ăn rau.', choices: ['Tôi nấu rau cho con ăn', 'Tôi bảo con ăn rau', 'Con tôi thích ăn rau', 'Tôi ăn rau cùng con'], answerIndex: 1, dictation: true },
    { scriptJa: 'よる、こどもを はやく ねさせます。', meaningVi: 'Buổi tối tôi cho con đi ngủ sớm.', choices: ['Buổi tối tôi cho con đi ngủ sớm', 'Buổi tối con tôi thức khuya', 'Tôi ngủ sớm hơn con', 'Con tôi không chịu ngủ'], answerIndex: 0 },
    { scriptJa: 'わたしは せんぱいに たくさん 教えて もらいました。', meaningVi: 'Tôi được tiền bối chỉ dạy rất nhiều.', choices: ['Tôi dạy rất nhiều cho tiền bối', 'Tôi được tiền bối chỉ dạy rất nhiều', 'Tiền bối bắt tôi phải dạy', 'Tôi và tiền bối cùng học'], answerIndex: 1 },
    { scriptJa: 'おとうとを スーパーへ おつかいに いかせました。', meaningVi: 'Tôi bảo em trai đi chạy việc vặt ở siêu thị.', choices: ['Tôi đi siêu thị cùng em trai', 'Em trai bảo tôi đi siêu thị', 'Tôi mua đồ ở siêu thị thay em', 'Tôi bảo em trai đi chạy việc vặt ở siêu thị'], answerIndex: 3 },
  ],
  reading: {
    titleVi: 'Chủ nhật ở nhà Min',
    lines: [
      { text: 'にちようび、わたしの うちでは みんなが はたらきます。', vi: 'Chủ nhật, ở nhà tôi mọi người cùng làm việc.' },
      { text: 'おかあさんは わたしに へやの そうじを させます。', vi: 'Mẹ bảo tôi dọn phòng.' },
      { text: 'わたしは おとうとに かいものを てつだわせます。', vi: 'Tôi bảo em trai phụ giúp việc mua đồ.' },
      { text: 'でも、おとうとは まだ ちいさいですから、おつかいは させません。', vi: 'Nhưng vì em trai còn nhỏ nên không bắt em chạy việc vặt.' },
      { text: 'おかあさんは わたしに やさいを あらわせます。', vi: 'Mẹ bảo tôi rửa rau.' },
      { text: 'ごはんが できたら、わたしは おとうとを よびます。', vi: 'Cơm xong, tôi gọi em trai.' },
      { text: 'しょくじが おわって、わたしは しゅくだいを します。', vi: 'Ăn xong, tôi làm bài tập.' },
      { text: 'つかれましたが、たのしい にちようびでした。', vi: 'Mệt thật, nhưng đó là một chủ nhật vui.' },
    ],
    questions: [
      { questionVi: 'Người viết được mẹ bảo làm những việc gì?', choices: ['Dọn phòng và rửa rau', 'Đi mua đồ ở siêu thị', 'Chạy việc vặt', 'Gọi em trai ăn cơm'], answerIndex: 0, explanationVi: 'Câu 2: へやの そうじを させます; câu 5: やさいを あらわせます. Đi siêu thị/ chạy việc vặt là việc không bị giao (câu 4); gọi em trai là việc người viết tự làm (câu 6).' },
      { questionVi: 'Vì sao em trai không bị sai đi chạy việc vặt?', choices: ['Vì em hay khóc', 'Vì em còn nhỏ', 'Vì em phải làm bài tập', 'Vì em bị ốm'], answerIndex: 1, explanationVi: 'Câu 4: おとうとは まだ ちいさいですから、おつかいは させません — "vì còn nhỏ nên không bắt chạy việc vặt".' },
      { questionVi: 'Câu nào ĐÚNG theo đoạn văn?', choices: ['Sau bữa ăn, người viết làm bài tập', 'Em trai bị bắt gọi mọi người', 'Mẹ đi siêu thị một mình', 'Chủ nhật cả nhà ngủ cả ngày'], answerIndex: 0, explanationVi: 'Câu 7: しょくじが おわって、わたしは しゅくだいを します. Người gọi em là người viết (câu 6), không phải em bị bắt gọi.' },
    ],
  },
  speakSentences: [
    { ja: 'せんせいが がくせいに ほんを よませます。', vi: 'Thầy giáo cho học sinh đọc sách.' },
    { ja: 'おかあさんが 弟に くすりを のませます。', vi: 'Mẹ cho em trai uống thuốc.' },
    { ja: 'よる、こどもを はやく ねさせます。', vi: 'Buổi tối tôi cho con đi ngủ sớm.' },
    { ja: 'わたしは せんぱいに たくさん 教えて もらいました。', vi: 'Tôi được tiền bối chỉ dạy rất nhiều.' },
  ],
  translatePairs: [
    { ja: 'せんせいが がくせいに ほんを よませます。', vi: 'Thầy giáo cho học sinh đọc sách.', tokens: ['せんせい', 'が', 'がくせい', 'に', 'ほん', 'を', 'よませます'], distractors: ['よまれます'] },
    { ja: 'おかあさんが 弟に くすりを のませます。', vi: 'Mẹ cho em trai uống thuốc.', tokens: ['おかあさん', 'が', '弟', 'に', 'くすり', 'を', 'のませます'], distractors: ['のまれます'] },
    { ja: 'よる、こどもを はやく ねさせます。', vi: 'Buổi tối tôi cho con đi ngủ sớm.', tokens: ['よる', 'こども', 'を', 'はやく', 'ねさせます'], distractors: ['に'] },
    { ja: 'こどもに やさいを たべさせます。', vi: 'Tôi bảo con ăn rau.', tokens: ['こども', 'に', 'やさい', 'を', 'たべさせます'], distractors: ['たべられます'] },
    { ja: 'わたしは せんぱいに たくさん 教えて もらいました。', vi: 'Tôi được tiền bối chỉ dạy rất nhiều.', tokens: ['わたし', 'は', 'せんぱい', 'に', 'たくさん', '教えて', 'もらいました'], distractors: ['教えさせました'] },
  ],
  kanji: ['教', '習', '学'],
}
