/**
 * NihongoGo — Bài 47: Mở rộng từ vựng N5→N4 — Làm giàu vốn từ.
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson47: CurriculumLesson = {
  order: 47,
  slug: 'l47-mo-rong-tu-vung-n5-n4',
  title: 'Mở rộng từ vựng N5→N4 — Làm giàu vốn từ',
  titleJa: '語彙拡張',
  description: 'Bắc cầu sang N4 bằng cách mở rộng từ vựng theo chủ đề và theo nhóm đồng nghĩa, trái nghĩa.',
  learningObjectives: [
    'Mở rộng từ vựng theo chủ đề quen thuộc',
    'Phân biệt các cặp từ dễ nhầm',
    'Chuyển tiếp tự nhiên sang N4',
  ],
  grammarTopics: [],
  vocabularyTopics: ['Từ đồng nghĩa và trái nghĩa', 'Từ vựng N4 theo chủ đề'],
  kanjiTopics: ['Kanji từ vựng chuyển tiếp N4'],
  difficulty: 'ELEMENTARY',
  vocabulary: [
    { term: '積極的', reading: 'せっきょくてき', romaji: 'sekkyokuteki', meaningVi: 'tích cực, chủ động', pos: 'tính từ な', exampleJa: '田中さんは 積極的な 人です。', exampleVi: 'Tanaka là người tích cực, chủ động.' },
    { term: '経済的', reading: 'けいざいてき', romaji: 'keizaiteki', meaningVi: 'tiết kiệm, có lợi về kinh tế', pos: 'tính từ な', exampleJa: 'この 店は 安くて、経済的です。', exampleVi: 'Quán này giá rẻ nên khá kinh tế (tiết kiệm).' },
    { term: '大切', reading: 'たいせつ', romaji: 'taisetsu', meaningVi: 'quý giá, đáng trân trọng', pos: 'tính từ な', exampleJa: '古い 写真を 大切に して います。', exampleVi: 'Tôi giữ gìn cẩn thận những tấm ảnh cũ.' },
    { term: '重要', reading: 'じゅうよう', romaji: 'jūyō', meaningVi: 'quan trọng (về tầm mức)', pos: 'tính từ な', exampleJa: '明日の 会議は 重要です。', exampleVi: 'Cuộc họp ngày mai rất quan trọng.' },
    { term: '興味', reading: 'きょうみ', romaji: 'kyōmi', meaningVi: 'sự thích thú, hứng thú', pos: 'danh từ', exampleJa: '日本の 音楽に 興味が あります。', exampleVi: 'Tôi có hứng thú với âm nhạc Nhật Bản.' },
    { term: '記録', reading: 'きろく', romaji: 'kiroku', meaningVi: 'sự ghi chép; kỷ lục', pos: 'danh từ (する)', exampleJa: '新しい 言葉を ノートに 記録します。', exampleVi: 'Tôi ghi chép từ mới vào vở.' },
    { term: '経験', reading: 'けいけん', romaji: 'keiken', meaningVi: 'kinh nghiệm', pos: 'danh từ (する)', exampleJa: '日本で 働いた 経験が あります。', exampleVi: 'Tôi có kinh nghiệm làm việc ở Nhật.' },
    { term: '意味', reading: 'いみ', romaji: 'imi', meaningVi: 'ý nghĩa', pos: 'danh từ', exampleJa: '「おひさしぶりです」の 意味を 教えて ください。', exampleVi: 'Xin bạn cho tôi biết ý nghĩa của "lâu quá không gặp".' },
    { term: '考えます', reading: 'かんがえます', romaji: 'kangaemasu', meaningVi: 'suy nghĩ, cân nhắc', pos: 'động từ nhóm 2', exampleJa: '日本で 働く ことを 考えます。', exampleVi: 'Tôi đang suy nghĩ đến việc làm việc ở Nhật.' },
    { term: '調べます', reading: 'しらべます', romaji: 'shirabemasu', meaningVi: 'tra cứu, tìm hiểu', pos: 'động từ nhóm 2', exampleJa: 'わからない 言葉を 調べます。', exampleVi: 'Tôi tra cứu những từ mình không hiểu.' },
    { term: '決めます', reading: 'きめます', romaji: 'kimemasu', meaningVi: 'quyết định, chốt (ngày, kế hoạch)', pos: 'động từ nhóm 2', exampleJa: '来週、旅行の 日を 決めます。', exampleVi: 'Tuần sau tôi sẽ chốt ngày đi du lịch.' },
    { term: '伝えます', reading: 'つたえます', romaji: 'tsutaemasu', meaningVi: 'truyền đạt, báo cho biết', pos: 'động từ nhóm 2', exampleJa: 'この ニュースを 友達に 伝えます。', exampleVi: 'Tôi sẽ báo tin này cho bạn bè.' },
    { term: '育てます', reading: 'そだてます', romaji: 'sodatemasu', meaningVi: 'nuôi dưỡng, trồng (nuôi nấng)', pos: 'động từ nhóm 2', exampleJa: '私は 庭で 花を 育てます。', exampleVi: 'Tôi trồng hoa trong vườn.' },
    { term: '面倒', reading: 'めんどう', romaji: 'mendō', meaningVi: 'phiền phức, phiền toái', pos: 'danh từ / tính từ な', exampleJa: 'この 仕事は ちょっと 面倒です。', exampleVi: 'Công việc này hơi phiền phức.' },
    { term: '文化', reading: 'ぶんか', romaji: 'bunka', meaningVi: 'văn hóa', pos: 'danh từ', exampleJa: '日本の 文化に 興味が あります。', exampleVi: 'Tôi có hứng thú với văn hóa Nhật Bản.' },
    { term: '歴史', reading: 'れきし', romaji: 'rekishi', meaningVi: 'lịch sử', pos: 'danh từ', exampleJa: '日本の 歴史は 面白いです。', exampleVi: 'Lịch sử Nhật Bản rất thú vị.' },
    { term: '習慣', reading: 'しゅうかん', romaji: 'shūkan', meaningVi: 'thói quen', pos: 'danh từ', exampleJa: '朝 早く 起きるのが 習慣です。', exampleVi: 'Dậy sớm vào buổi sáng là thói quen của tôi.' },
    { term: '目的', reading: 'もくてき', romaji: 'mokuteki', meaningVi: 'mục đích', pos: 'danh từ', exampleJa: '旅行の 目的は 写真を とる ことです。', exampleVi: 'Mục đích chuyến đi là chụp ảnh.' },
    { term: '日記', reading: 'にっき', romaji: 'nikki', meaningVi: 'nhật ký', pos: 'danh từ', exampleJa: '毎日 日記を 書きます。', exampleVi: 'Tôi viết nhật ký mỗi ngày.' },
    { term: '質問', reading: 'しつもん', romaji: 'shitsumon', meaningVi: 'câu hỏi, thắc mắc', pos: 'danh từ (する)', exampleJa: '先生に 日本語の 質問を しました。', exampleVi: 'Tôi đã hỏi thầy/cô về tiếng Nhật.' },
    { term: '特別', reading: 'とくべつ', romaji: 'tokubetsu', meaningVi: 'đặc biệt', pos: 'danh từ / tính từ な', exampleJa: '今日は 特別な 日です。', exampleVi: 'Hôm nay là một ngày đặc biệt.' },
    { term: 'ぜひ', romaji: 'zehi', meaningVi: 'nhất định, bằng mọi giá (mong muốn)', pos: 'phó từ', exampleJa: '京都へ ぜひ 行きたいです。', exampleVi: 'Tôi nhất định muốn đi Kyoto.' },
  ],
  grammar: [
    {
      code: 'l47-kanji-teki',
      title: 'Học từ N4 qua kanji đã biết & hậu tố 〜的(てき)',
      formation: 'Kanji quen + tổ hợp mới (経 → 経済・経験) / N + 的(てき) → tính từ な ("thuộc về N") / N + 的 + に → phó từ',
      explanationVi:
        'Chìa khóa chuyển từ N5 sang N4: đa số từ N4 được GHÉP từ những kanji đã học. Ví dụ chữ 同 (đã học với 同じ ở bài 21) còn xuất hiện trong hàng loạt từ mới; chữ 経 đứng trong cả 経済 (けいざい — kinh tế) lẫn 経験 (けいけん — kinh nghiệm). Cách học: gặp từ mới, tách kanji ra, tự hỏi "kanji này mình đã gặp trong từ nào?" — nghĩa của từ mới thường gần với nghĩa kanji quen. Bậc thứ hai là hậu tố 〜的(てき): gắn vào danh từ (chủ yếu từ Hán-Nhật) để tạo TÍNH TỪ な mang nghĩa "thuộc về / mang tính": 積極的 = chủ động, năng nổ; 経済的 = tiết kiệm, có lợi về kinh tế. Trước danh từ dùng 的な (積極的な 人); biến thành phó từ thì thêm に (積極的に 使う). Lưu ý: không phải danh từ nào cũng ghép được với 的 — học theo từng từ cụ thể.',
      examples: [
        { ja: '「経」は 「経済」にも 「経験」にも 使います。', vi: 'Chữ 経 được dùng cả trong 経済 (kinh tế) lẫn 経験 (kinh nghiệm).' },
        { ja: '田中さんは 積極的な 人です。', vi: 'Tanaka là người tích cực, chủ động.', tokens: ['田中さん', 'は', '積極的', 'な', '人', 'です'] },
        { ja: 'この 店は 安くて、経済的です。', vi: 'Quán này giá rẻ nên khá kinh tế (tiết kiệm).' },
        { ja: '授業で 日本語を 積極的に 使って ください。', vi: 'Trong giờ học, hãy chủ động dùng tiếng Nhật nhé.', tokens: ['授業', 'で', '日本語', 'を', '積極的', 'に', '使って', 'ください'] },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Hậu tố 「〜的」(てき) biến danh từ thành gì?',
          options: ['Tính từ な với nghĩa "thuộc về / mang tính"', 'Động từ nhóm 2', 'Trợ từ chỉ hướng', 'Phó từ chỉ thời gian'],
          answerIndex: 0, explanationVi: 'N + 的 → tính từ な: 積極的 (chủ động), 経済的 (kinh tế). Trước danh từ thêm な, làm phó từ thêm に.',
        },
        {
          kind: 'fill', prompt: 'Điền từ (Quán này giá rẻ nên khá…)',
          sentence: 'この 店は 安くて、___です。',
          options: ['積極的', '経済的', '大切', '質問'],
          answerIndex: 1, explanationVi: 'Rẻ tiền → có lợi về kinh tế → 経済的. 積極的 là tích cực (chỉ con người/cách làm), 大切 là quý giá, 質問 là câu hỏi — đều không hợp nghĩa.',
        },
        {
          kind: 'fill', prompt: 'Điền từ (Trong giờ học, hãy dùng tiếng Nhật một cách…)',
          sentence: '授業で 日本語を ___に 使って ください。',
          options: ['経済的', '大切', '積極的', '特別'],
          answerIndex: 2, explanationVi: 'Chủ động dùng tiếng Nhật → 積極的に (的 + に = phó từ). 経済的に 使う nghĩa là "dùng tiết kiệm" — không hợp ngữ cảnh lớp học.',
        },
        {
          kind: 'particle', prompt: 'Điền (biến 積極的 thành phó từ trước động từ 使います)',
          sentence: '日本語を 積極的___ 使って ください。',
          options: ['な', 'に', 'で', 'と'],
          answerIndex: 1, explanationVi: 'Tính từ な + に → phó từ: 積極的に 使う. Dạng な chỉ dùng khi đứng TRƯỚC danh từ (積極的な 人).',
        },
        {
          kind: 'error', prompt: 'Câu nào ĐÚNG ngữ pháp?',
          options: ['田中さんは 積極的な 人です。', '田中さんは 積極的なです。', '田中さんは 積極的に 人です。', '田中さんは 積極的です 人。'],
          answerIndex: 0, explanationVi: 'Tính từ な trước danh từ: 積極的な 人. 積極的なです sai vì な không đứng cuối câu; 積極的に là phó từ nên không sửa được danh từ 人.',
        },
        {
          kind: 'choice', prompt: 'Vì sao học từ N4 qua kanji đã biết lại hiệu quả?',
          options: ['Vì nhiều từ N4 ghép từ những kanji đã học ở N5', 'Vì kanji N4 ít hơn N5', 'Vì từ N4 không dùng kanji', 'Vì từ N4 đều mượn từ tiếng Anh'],
          answerIndex: 0, explanationVi: '経 → 経済・経験; 同 → 同じ… — từ mới N4 phần lớn tái sử dụng kanji N5, nên gom theo "gia đình kanji" sẽ nhớ nhanh hơn học rời rạc.',
        },
      ],
    },
    {
      code: 'l47-tsuite-totte',
      title: '「〜について」(về chủ đề) vs 「〜にとって」(đối với ai) & 大切 vs 重要',
      formation: 'N + について + 話します・書きます・調べます (về chủ đề) / N + にとって + 大切です・難しいです (từ góc nhìn của ai) / 大切 = quý giá (nghĩa tình cảm) ↔ 重要 = quan trọng (tầm mức)',
      explanationVi:
        'Hai cụm N4 hay lẫn nhất. (1) 「〜について」 gắn với TRỌNG TÂM NÓI/VIẾT/TÌM HIỂU: 日本の音楽について 調べました = tra cứu VỀ âm nhạc Nhật — sau nó là động từ như 話します・書きます・調べます・考えます. (2) 「〜にとって」 gắn với GÓC NHÌN ĐÁNH GIÁ: 私にとって 大切です = "quý đối với TÔI" — đứng trước nhận xét, đánh giá (大切・難しい・一番…). So sánh: 私について 話します (nói về tôi) ≠ 私にとって 大切です (quý đối với tôi) — đổi một cụm là đổi hẳn nghĩa. (3) Cặp đồng nghĩa: 大切 = quý giá, đáng trân trọng, đậm tình cảm (gia đình, kỷ vật, sức khỏe — gần với 大事 đã học bài 17); 重要 = quan trọng về tầm mức, vị thế (cuộc họp, tài liệu, vấn đề) — trang trọng hơn, ít màu sắc tình cảm.',
      examples: [
        { ja: '日本の 音楽について 調べました。', vi: 'Tôi đã tìm hiểu về âm nhạc Nhật Bản.', tokens: ['日本', 'の', '音楽', 'について', '調べました'] },
        { ja: '私にとって、この 写真は 大切です。', vi: 'Đối với tôi, tấm ảnh này quý giá biết bao.', tokens: ['私', 'にとって', 'この', '写真', 'は', '大切', 'です'] },
        { ja: '明日の 会議について、メールで 伝えます。', vi: 'Tôi sẽ báo về cuộc họp ngày mai qua email.', tokens: ['明日', 'の', '会議', 'について', 'メール', 'で', '伝えます'] },
        { ja: 'この 資料は 重要ですから、忘れないで ください。', vi: 'Tài liệu này quan trọng, đừng quên nhé.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Chọn cụm đúng (Tôi đã nói VỀ âm nhạc Nhật Bản)',
          sentence: '日本の 音楽___ 話しました。',
          options: ['と', 'にとって', 'について', 'や'],
          answerIndex: 2, explanationVi: 'Nói về chủ đề → について. と 話しました nghĩa là "nói chuyện CÙNG ai" — 日本の音楽と話す vô nghĩa; にとって chỉ dùng cho góc nhìn đánh giá.',
        },
        {
          kind: 'particle', prompt: 'Chọn cụm đúng (ĐỐI VỚI tôi, gia đình là quý giá)',
          sentence: '私___、家族は 大切です。',
          options: ['について', 'に', 'にとって', 'で'],
          answerIndex: 2, explanationVi: 'Đánh giá từ góc nhìn của ai → にとって. について = về chủ đề (nói/tra cứu); 私に/私で không phải mẫu bày tỏ quan điểm.',
        },
        {
          kind: 'choice', prompt: '「私について 話します」 và 「私にとって 大切です」 khác nhau thế nào?',
          options: ['について = nói về đối tượng; にとって = đánh giá từ góc nhìn của ai đó', 'Cả hai đều nghĩa là "về tôi"', 'について = góc nhìn; にとって = chủ đề nói chuyện', 'Cả hai đều nghĩa là "của tôi"'],
          answerIndex: 0, explanationVi: 'について theo sau là nội dung nói/viết/tra cứu về CHỦ ĐỀ; にとって đứng trước NHẬN XÉT đánh giá từ quan điểm của người/vật đó.',
        },
        {
          kind: 'fill', prompt: 'Điền từ (Tài liệu cuộc họp quan trọng — đừng quên)',
          sentence: 'この 資料は ___ですから、忘れないで ください。',
          options: ['経済的', '重要', '面倒', '特別'],
          answerIndex: 1, explanationVi: 'Tài liệu cuộc họp = tầm quan trọng công việc → 重要. 面倒 là phiền phức; 特別 là đặc biệt; 経済的 là tiết kiệm — đều lệch nghĩa.',
        },
        {
          kind: 'choice', prompt: 'Phân biệt 「大切」 và 「重要」?',
          options: ['大切 nghiêng giá trị tình cảm (đáng trân trọng); 重要 nghiêng tầm quan trọng của sự việc', '大切 chỉ dùng với người; 重要 chỉ dùng với vật', '大切 trang trọng hơn 重要 trong văn viết', '重要 nghĩa là "rẻ tiền, kinh tế"'],
          answerIndex: 0, explanationVi: '家族が 大切 (gia đình quý — tình cảm) vs 会議が 重要 (cuộc họp quan trọng — tầm mức). Cả hai đều có thể bổ nghĩa cho người/vật; 大切 gần với 大事 (bài 17).',
        },
        {
          kind: 'conjugate', prompt: 'Đổi 「大切です」 thành trạng ngữ rồi ghép (hãy giữ gìn tấm ảnh này)',
          sentence: 'この 写真を 大切___ して ください。',
          options: ['な', 'に', 'で', 'は'],
          answerIndex: 1, explanationVi: 'Tính từ な → に khi làm trạng ngữ: 大切に します = trân trọng, giữ gìn. な chỉ dùng trước danh từ (大切な 写真).',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Bí quyết học từ mới của Linh',
      situationVi: 'Tanaka hỏi Linh cách học từ vựng mới khi chuẩn bị bước sang trình độ N4.',
      lines: [
        { speaker: 'たなか', ja: 'リンさん、毎日 日本語を 勉強して いますか。', vi: 'Linh này, cậu có học tiếng Nhật mỗi ngày không?' },
        { speaker: 'リン', ja: 'はい。今、新しい 言葉を たくさん 覚えて います。', vi: 'Có chứ. Giờ tôi đang ghi nhớ rất nhiều từ mới.' },
        { speaker: 'たなか', ja: 'そうですか。でも、言葉が 多くて、大変ですね。どう 覚えますか。', vi: 'Vậy à. Nhưng từ nhiều thật, vất vả nhỉ. Học thuộc thế nào?' },
        { speaker: 'リン', ja: '知っている 漢字から 覚えます。例えば、「経」は 「経済」にも 「経験」にも 使います。', vi: 'Tôi học từ kanji đã biết. Ví dụ chữ 経 có mặt cả trong 経済 (kinh tế) lẫn 経験 (kinh nghiệm).' },
        { speaker: 'たなか', ja: 'なるほど、それは いいですね。ノートも 使いますか。', vi: 'Ra thế, cách đó hay đấy. Cậu có dùng vở không?' },
        { speaker: 'リン', ja: 'はい。新しい 言葉を ノートに 記録します。それから、日記も 書きます。', vi: 'Có. Tôi ghi chép từ mới vào vở. Ngoài ra còn viết nhật ký nữa.' },
        { speaker: 'たなか', ja: '日記ですか。それは いい 習慣ですね。', vi: 'Nhật ký á? Đó là thói quen tốt đấy.' },
        { speaker: 'リン', ja: 'ええ。小さい 習慣ですが、大切だと 思います。', vi: 'Ừ. Tuy là thói quen nhỏ nhưng tôi nghĩ nó rất quý giá.' },
        { speaker: 'たなか', ja: 'そうですよね。私も やって みます。', vi: 'Đúng nhỉ. Tôi cũng sẽ thử làm xem.' },
        { speaker: 'リン', ja: 'ぜひ、いっしょに やりましょう。', vi: 'Nhất định, cùng làm nhé.' },
      ],
    },
    {
      titleVi: 'Hẹn đi Kyoto cuối tuần',
      situationVi: 'Senpai rủ Linh đi Kyoto chơi, hai người cùng nhớ lại kỷ niệm cũ và chốt ngày đi.',
      lines: [
        { speaker: 'せんぱい', ja: 'リンさん、今度の 土曜日、予定が ありますか。', vi: 'Linh này, thứ Bảy tuần này có lịch gì chưa?' },
        { speaker: 'リン', ja: 'いいえ、まだ 何も 決めて いません。', vi: 'Chưa, tôi còn chưa quyết định gì cả.' },
        { speaker: 'せんぱい', ja: 'じゃあ、京都へ 行きませんか。私にとって、京都は 大切な 場所です。', vi: 'Vậy đi Kyoto không? Đối với tôi, Kyoto là nơi rất quý giá.' },
        { speaker: 'リン', ja: 'そうですか。どうして 大切ですか。', vi: 'Vậy à. Vì sao lại quý đến thế ạ?' },
        { speaker: 'せんぱい', ja: '昔、家族と いっしょに 京都へ 行きました。写真を たくさん とりました。', vi: 'Ngày xưa tôi từng đi Kyoto cùng gia đình. Chụp được rất nhiều ảnh.' },
        { speaker: 'リン', ja: 'なるほど。私も 京都に 興味が あります。', vi: 'Ra thế. Tôi cũng có hứng thú với Kyoto.' },
        { speaker: 'せんぱい', ja: 'じゃあ、行く 日を 決めましょう。土曜日は どうですか。', vi: 'Vậy chốt ngày đi thôi. Thứ Bảy thế nào?' },
        { speaker: 'リン', ja: 'はい、大丈夫です。電車で 行きますか。', vi: 'Được ạ. Đi bằng tàu điện à?' },
        { speaker: 'せんぱい', ja: 'ええ、電車が 便利ですよ。朝の 電車に 乗りましょう。', vi: 'Ừ, tàu điện tiện lắm. Mình đi chuyến sáng nhé.' },
        { speaker: 'リン', ja: 'なるほど。じゃあ、土曜日の 朝、えきの 前で 会いましょう。', vi: 'Ra vậy. Vậy sáng thứ Bảy gặp nhau trước nhà ga nhé.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'まいにち、ノートに ことばを きろくします。', meaningVi: 'Mỗi ngày tôi ghi chép từ vào vở.', choices: ['Ghi chép từ vựng vào vở mỗi ngày', 'Đọc sách mỗi ngày', 'Viết thư cho bạn mỗi ngày', 'Chụp ảnh trang vở mỗi ngày'], answerIndex: 0, dictation: true },
    { scriptJa: 'わたしに とって、かぞくが たいせつです。', meaningVi: 'Đối với tôi, gia đình là quý giá nhất.', choices: ['Người nói nói về chủ đề gia đình', 'Người nói muốn mời gia đình đi chơi', 'Người nói thấy gia đình phiền phức', 'Người nói coi trọng gia đình của mình'], answerIndex: 3, dictation: true },
    { scriptJa: '日本の 歴史について 読みました。', meaningVi: 'Tôi đã đọc về lịch sử Nhật Bản.', choices: ['Đọc về văn hóa Nhật Bản', 'Đọc về lịch sử Nhật Bản', 'Viết về lịch sử Nhật Bản', 'Hỏi về lịch sử Việt Nam'], answerIndex: 1 },
    { scriptJa: '田中さんは 積極的な 人です。', meaningVi: 'Tanaka là người tích cực, chủ động.', choices: ['Tanaka là người tiết kiệm', 'Tanaka là người hay quên', 'Tanaka là người tích cực, chủ động', 'Tanaka là người phiền phức'], answerIndex: 2 },
    { scriptJa: 'あしたの 会議は 重要ですから、忘れないで ください。', meaningVi: 'Cuộc họp ngày mai quan trọng, đừng quên nhé.', choices: ['Cuộc họp ngày mai bị hoãn', 'Cuộc họp ngày mai không quan trọng', 'Đừng quên mua tài liệu nữa', 'Đừng quên cuộc họp quan trọng ngày mai'], answerIndex: 3 },
  ],
  reading: {
    titleVi: 'Sổ tay từ vựng của Linh',
    lines: [
      { text: '今日から 新しい 言葉を ノートに 記録します。', vi: 'Từ hôm nay tôi ghi chép từ mới vào vở.' },
      { text: '同じ 漢字から 新しい 言葉を 覚えます。例えば、「経」は 「経済」にも 「経験」にも 使います。', vi: 'Tôi học từ mới dựa trên những kanji đã biết. Ví dụ chữ 経 có trong cả 経済 (kinh tế) lẫn 経験 (kinh nghiệm).' },
      { text: '「積極的」は 「せっきょくてき」と 読みます。「経済的」は 「けいざいてき」です。', vi: '「積極的」 đọc là sekkyokuteki. 「経済的」 đọc là keizaiteki.' },
      { text: '新しい 言葉の 意味を 調べます。それから、自分で 例文を 作ります。', vi: 'Tôi tra nghĩa của từ mới. Sau đó tự viết câu ví dụ.' },
      { text: '日記も 毎日 書きます。日本の 文化や 歴史について 書く ことが 多いです。', vi: 'Tôi cũng viết nhật ký mỗi ngày, phần nhiều viết về văn hóa và lịch sử Nhật Bản.' },
      { text: '小さい 習慣ですが、この 習慣は 大切だと 思います。', vi: 'Tuy là thói quen nhỏ, nhưng tôi nghĩ nó quý giá.' },
      { text: 'いつか 日本で 日本語を 使って 働きたいと 思って います。', vi: 'Một ngày nào đó tôi muốn dùng tiếng Nhật để làm việc ở Nhật.' },
    ],
    questions: [
      { questionVi: 'Linh học từ mới bằng cách nào?', choices: ['Dựa vào kanji đã biết để mở rộng (例: 経 → 経済・経験)', 'Học thuộc theo bảng chữ cái', 'Chỉ học từ xuất hiện trong phim', 'Nhờ bạn dịch từng từ sang tiếng Việt'], answerIndex: 0, explanationVi: 'Dòng 2: 同じ 漢字から 新しい 言葉を 覚えます — học theo "gia đình kanji" là trọng tâm của bài.' },
      { questionVi: 'Sau khi tra nghĩa của từ mới, Linh làm gì tiếp?', choices: ['Nghe nhạc để nhớ từ', 'Tự viết câu ví dụ (例文)', 'Ghi vào lịch học', 'Dịch từ sang tiếng Anh'], answerIndex: 1, explanationVi: 'Dòng 4: 意味を 調べます。それから、自分で 例文を 作ります — tra nghĩa xong thì tự tạo câu ví dụ.' },
      { questionVi: 'Trong nhật ký, Linh viết nhiều nhất về đề tài nào?', choices: ['Thời tiết mỗi ngày', 'Món ăn Việt Nam', 'Văn hóa và lịch sử Nhật Bản', 'Kết quả học mỗi tuần'], answerIndex: 2, explanationVi: 'Dòng 5: 日本の 文化や 歴史について 書く ことが 多いです — dùng mẫu について (về chủ đề) vừa học.' },
    ],
  },
  speakSentences: [
    { ja: '日本の 文化に 興味が あります。', vi: 'Tôi có hứng thú với văn hóa Nhật Bản.' },
    { ja: 'わからない 言葉を 調べます。', vi: 'Tôi tra cứu những từ mình không hiểu.' },
    { ja: '私にとって、家族は 大切です。', vi: 'Đối với tôi, gia đình là quý giá nhất.' },
    { ja: '今度、旅行の 日を 決めましょう。', vi: 'Dịp này mình chốt ngày đi du lịch nhé.' },
  ],
  translatePairs: [
    { ja: '日本の 文化に 興味が あります。', vi: 'Tôi có hứng thú với văn hóa Nhật Bản.', tokens: ['日本', 'の', '文化', 'に', '興味', 'が', 'あります'], distractors: ['歴史'] },
    { ja: '新しい 言葉を ノートに 記録します。', vi: 'Tôi ghi chép từ mới vào vở.', tokens: ['新しい', '言葉', 'を', 'ノート', 'に', '記録します'], distractors: ['調べます'] },
    { ja: '私に とって、家族は 大切です。', vi: 'Đối với tôi, gia đình là quý giá nhất.', tokens: ['私', 'に', 'とって', '家族', 'は', '大切', 'です'], distractors: ['について'] },
    { ja: '田中さんは 積極的な 人です。', vi: 'Tanaka là người tích cực, chủ động.', tokens: ['田中さん', 'は', '積極的', 'な', '人', 'です'], distractors: ['経済的'] },
    { ja: '旅行の 目的は 写真を とる ことです。', vi: 'Mục đích chuyến đi là chụp ảnh.', tokens: ['旅行', 'の', '目的', 'は', '写真', 'を', 'とる', 'こと', 'です'], distractors: ['意味'] },
  ],
  kanji: ['同', '例', '物'],
}
