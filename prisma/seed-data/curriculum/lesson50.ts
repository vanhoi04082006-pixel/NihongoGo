/**
 * NihongoGo — Bài 50: Tổng kết sơ cấp — Chốt kiến thức, mở lối trung cấp (初級総まとめ).
 * Bài CUỐI KHÓA: KHÔNG dạy mẫu mới — 3 "grammar point" là 3 NHÓM CHỐT KIẾN THỨC
 * (bản đồ động từ + trợ từ / mẫu giao tiếp lõi / cầu nối N4). Ngữ pháp sử dụng
 * toàn bộ phạm vi L1–L49. Nội dung GỐC — không sao chép dialogue/ví dụ/bài tập
 * từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson50: CurriculumLesson = {
  order: 50,
  slug: 'l50-tong-ket-so-cap',
  title: 'Tổng kết sơ cấp — Chốt kiến thức, mở lối trung cấp',
  titleJa: '初級総まとめ',
  description: 'Nhìn lại toàn bộ hành trình sơ cấp, chốt kiến thức cốt lõi và định hướng lộ trình trung cấp.',
  learningObjectives: [
    'Tổng ôn kiến thức cốt lõi sơ cấp',
    'Tự đánh giá trình độ hiện tại',
    'Lên kế hoạch học trung cấp',
  ],
  grammarTopics: ['Tổng ôn sơ cấp'],
  vocabularyTopics: ['Từ vựng tổng hợp', 'Ôn tập theo chủ đề'],
  kanjiTopics: ['Tổng ôn Kanji sơ cấp'],
  difficulty: 'ELEMENTARY',
  vocabulary: [
    { term: '卒業', reading: 'そつぎょう', romaji: 'sotsugyō', meaningVi: 'sự tốt nghiệp (một cấp học)', pos: 'danh từ', exampleJa: 'やっと 初級を 卒業しました。', exampleVi: 'Cuối cùng tôi cũng đã tốt nghiệp trình độ sơ cấp.' },
    { term: '目標', reading: 'もくひょう', romaji: 'mokuhyō', meaningVi: 'mục tiêu', pos: 'danh từ', exampleJa: 'わたしの 目標は 来年 N4に 合格することです。', exampleVi: 'Mục tiêu của tôi là thi đậu N4 năm tới.' },
    { term: '実力', reading: 'じつりょく', romaji: 'jitsuryoku', meaningVi: 'trình độ thực lực', pos: 'danh từ', exampleJa: '毎日 勉強して、実力が つきました。', exampleVi: 'Tôi học mỗi ngày nên trình độ đã tăng lên.' },
    { term: '大事', reading: 'だいじ', romaji: 'daiji', meaningVi: 'quan trọng, quý giá', pos: 'tính từ な', exampleJa: '毎日 少し 勉強することが 大事です。', exampleVi: 'Việc mỗi ngày học một chút là điều quan trọng.' },
    { term: '興味', reading: 'きょうみ', romaji: 'kyōmi', meaningVi: 'hứng thú, sự quan tâm', pos: 'danh từ', exampleJa: '日本の 文化に 興味が あります。', exampleVi: 'Tôi có hứng thú với văn hóa Nhật.' },
    { term: '経験', reading: 'けいけん', romaji: 'keiken', meaningVi: 'kinh nghiệm', pos: 'danh từ', exampleJa: '日本へ 行った 経験が あります。', exampleVi: 'Tôi có kinh nghiệm từng đi Nhật.' },
    { term: '機会', reading: 'きかい', romaji: 'kikai', meaningVi: 'cơ hội', pos: 'danh từ', exampleJa: '日本語を 話す 機会が 多く なりました。', exampleVi: 'Cơ hội được nói tiếng Nhật đã trở nên nhiều hơn.' },
    { term: '成功', reading: 'せいこう', romaji: 'seikō', meaningVi: 'sự thành công', pos: 'danh từ', exampleJa: '新しい 計画は 成功しました。', exampleVi: 'Kế hoạch mới đã thành công.' },
    { term: '失敗', reading: 'しっぱい', romaji: 'shippai', meaningVi: 'sự thất bại, làm hỏng', pos: 'danh từ', exampleJa: '失敗は いい 経験です。', exampleVi: 'Thất bại cũng là một kinh nghiệm quý.' },
    { term: '達成', reading: 'たっせい', romaji: 'tassei', meaningVi: 'sự đạt được (mục tiêu)', pos: 'danh từ', exampleJa: '今年の 目標を 達成しました。', exampleVi: 'Tôi đã đạt được mục tiêu của năm nay.' },
    { term: '続けます', reading: 'つづけます', romaji: 'tsuzukemasu', meaningVi: 'tiếp tục (không bỏ cuộc)', pos: 'động từ nhóm 1', exampleJa: '来年も 勉強を 続けます。', exampleVi: 'Năm sau tôi cũng tiếp tục việc học.' },
    { term: '頑張ります', reading: 'がんばります', romaji: 'ganbarimasu', meaningVi: 'cố gắng, nỗ lực', pos: 'động từ nhóm 1', exampleJa: 'これからも 頑張ります。', exampleVi: 'Từ giờ tôi vẫn sẽ tiếp tục cố gắng.' },
    { term: 'やっと', romaji: 'yatto', meaningVi: 'cuối cùng cũng (sau nhiều cố gắng)', pos: 'phó từ', exampleJa: 'やっと 自分の 目標が わかりました。', exampleVi: 'Cuối cùng tôi cũng đã xác định được mục tiêu của mình.' },
    { term: '計画', reading: 'けいかく', romaji: 'keikaku', meaningVi: 'kế hoạch', pos: 'danh từ', exampleJa: '来年の 計画を 書きました。', exampleVi: 'Tôi đã viết kế hoạch cho năm tới.' },
    { term: '理由', reading: 'りゆう', romaji: 'riyū', meaningVi: 'lý do', pos: 'danh từ', exampleJa: '日本が 好きな 理由を 話しました。', exampleVi: 'Tôi đã kể lý do mình yêu thích Nhật Bản.' },
    { term: '習慣', reading: 'しゅうかん', romaji: 'shūkan', meaningVi: 'thói quen', pos: 'danh từ', exampleJa: '朝 早く 起きる 習慣が あります。', exampleVi: 'Tôi có thói quen dậy sớm.' },
    { term: '自分', reading: 'じぶん', romaji: 'jibun', meaningVi: 'bản thân, chính mình', pos: 'danh từ', exampleJa: '自分の 興味を 大事に してください。', exampleVi: 'Hãy trân trọng hứng thú của chính mình.' },
    { term: '未来', reading: 'みらい', romaji: 'mirai', meaningVi: 'tương lai', pos: 'danh từ', exampleJa: '未来の 自分に 手紙を 書きました。', exampleVi: 'Tôi đã viết thư gửi bản thân ở tương lai.' },
    { term: '夢', reading: 'ゆめ', romaji: 'yume', meaningVi: 'giấc mơ, ước mơ', pos: 'danh từ', exampleJa: '夢は 日本で 働くことです。', exampleVi: 'Ước mơ của tôi là được làm việc ở Nhật.' },
    { term: '言葉', reading: 'ことば', romaji: 'kotoba', meaningVi: 'từ ngữ, lời nói', pos: 'danh từ', exampleJa: '毎日 新しい 言葉を 三つ 覚えます。', exampleVi: 'Mỗi ngày tôi học thuộc ba từ mới.' },
    { term: '手紙', reading: 'てがみ', romaji: 'tegami', meaningVi: 'bức thư', pos: 'danh từ', exampleJa: '母に 手紙を 書きました。', exampleVi: 'Tôi đã viết thư cho mẹ.' },
  ],
  grammar: [
    {
      code: 'l50-bo-toan-thoi',
      title: 'Dòng thời gian động từ & trợ từ theo vai — bản đồ tổng thể',
      formation: '動詞: từ điển形 → ます/ません (hiện tại) → ました/ませんでした (quá khứ) → て形 (nối hành động・てください・ています) → ない形 (ないでください・なくても いいです) → khả năng (読めます) → bị động (読まれます) → sai khiến (読ませます); trợ từ theo vai: は・が・を・に・で・へ・と・から・まで',
      explanationVi:
        'Bài cuối sơ cấp — giăng lại TẤT CẢ "chiếc áo" của động từ trên một trục thời gian. (1) ます/ません là hiện tại–tương lai, ました/ませんでした là quá khứ; (2) khi KỂ CHUYỆN nhiều hành động nối tiếp (dậy → ăn → đi học), các vế GIỮA dùng て形 (起きて・食べて), chỉ vế CUỐI chia theo thì (行きました); (3) ない形 dùng cho phủ định thể thường, mời đừng làm (ないでください) và xin phép (〜なくても いいです); (4) thể khả năng (読めます・食べられます) — tân ngữ thường chuyển sang が; (5) bị động (〜れます/られます) và sai khiến (〜せます/させます) — người thực hiện việc đứng với に. Song song là bản đồ trợ từ: は (chủ đề)・が (chủ ngữ mới)・を (tân ngữ)・に (thời điểm・đích・người nhận・đối tượng)・で (nơi diễn ra・phương tiện)・へ (hướng)・と (cùng với)・から/まで (từ…đến). Kể chuyện hay = chọn đúng DẠNG động từ + đúng TRỢ TỪ theo vai của danh từ — hai nửa của cùng một kỹ năng.',
      examples: [
        { ja: '一年前は ひらがなも 読めませんでしたが、今は 新聞が 読めます。', vi: 'Một năm trước tôi còn không đọc được hiragana, nhưng giờ đã đọc được cả báo.', tokens: ['一年前', 'は', 'ひらがな', 'も', '読めませんでした', 'が', '今', 'は', '新聞', 'が', '読めます'] },
        { ja: '先週、友達と 図書館へ 行って、日本語の 本を 借りました。', vi: 'Tuần trước tôi đi thư viện cùng bạn và mượn sách tiếng Nhật.' },
        { ja: '先生は 学生に 漢字を 書かせました。', vi: 'Thầy đã bảo học sinh viết kanji. (sai khiến)' },
        { ja: 'わたしは 友達に 電話番号を 聞かれました。', vi: 'Tôi được bạn hỏi số điện thoại. (bị động)' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'Kể chuyện: "Sáng nay tôi dậy lúc 6 giờ, ăn sáng, đến trường rồi gặp bạn" — chọn dạng đúng cho chỗ trống',
          sentence: '今朝 六時に 起きて、朝ご飯を 食べて、学校へ ___、友達に 会いました。',
          options: ['行きました', '行って', '行きます', '行った'],
          answerIndex: 1, explanationVi: 'Chuỗi hành động nối tiếp: các vế TRƯỚC dùng て形 (起きて・食べて・行って), chỉ vế cuối (会いました) chia theo thì quá khứ. Đặt 行きました/行きます giữa chuỗi sẽ cắt đứt mạch kể chuyện.',
        },
        {
          kind: 'particle', prompt: 'Chọn trợ từ đúng (Hôm qua tôi đã gặp bạn ở nhà ga)',
          sentence: 'きのう 駅___ 友達に 会いました。',
          options: ['に', 'で', 'へ', 'を'],
          answerIndex: 1, explanationVi: 'Hành động "gặp" DIỄN RA tại nhà ga → で. に sau 会います đánh dấu NGƯỜI được gặp (友達に); へ chỉ hướng di chuyển; を đánh dấu tân ngữ của động từ khác.',
        },
        {
          kind: 'particle', prompt: 'Chọn trợ từ đúng (Chủ nhật tôi đi bảo tàng cùng bạn)',
          sentence: '日曜日、友達___ 美術館へ 行きます。',
          options: ['と', 'に', 'を', 'で'],
          answerIndex: 0, explanationVi: 'と = "cùng với (ai)": 友達と 行きます. に đánh dấu đích đến (cùng với へ); を đánh dấu tân ngữ — đều không phải vai "người đồng hành".',
        },
        {
          kind: 'choice', prompt: '"Sáng nay tôi dậy lúc 6 giờ, ăn sáng rồi đến trường" — câu kể nào đúng?',
          options: ['今朝 六時に 起って、朝ご飯を 食べて、学校へ 行きました。', '今朝 六時で 起きて、朝ご飯を 食べて、学校へ 行きました。', '今朝 六時に 起きて、朝ご飯を 食べて、学校へ 行きました。', '今朝 六時に 起きて、朝ご飯を 食べて、学校へ 行きます。'],
          answerIndex: 2, explanationVi: 'Ba chốt của câu kể: (1) nối chuỗi hành động bằng て形 — 起きます là nhóm 2 → 起きて, không phải 起って; (2) thời điểm cụ thể 六時 + に (không dùng で); (3) chuyện đã xong → vế cuối là 行きました (thì quá khứ).',
        },
        {
          kind: 'conjugate', prompt: 'Chọn dạng đúng (Một năm trước tôi còn đọc không được cả chữ Hán)',
          sentence: '一年前は 漢字も ___でした。',
          options: ['読みません', '読ませません', '読んで いません', '読めません'],
          answerIndex: 3, explanationVi: 'KHẢ NĂNG phủ định + quá khứ: 読めませんでした = "không đọc được". 読みませんでした chỉ là "không đọc" (phủ định hành động); 読ませません là sai khiến phủ định; 読んでいません là "đang không đọc".',
        },
      ],
    },
    {
      code: 'l50-giao-tiep-chot',
      title: 'Chốt mẫu giao tiếp: mời・xin phép・nhờ vả・cho–nhận',
      formation: 'Mời: V (bỏ ます) + ませんか / ましょう; Xin phép: Vて + も いいですか; Nhờ: Vて + ください → lịch sự hơn: 〜ていただけませんか; Cho–nhận: あげます (mình cho người khác)・くれます (người khác cho mình)・もらいます (mình nhận) + てあげる/てくれる/てもらう',
      explanationVi:
        'Chốt 4 nhóm mẫu giao tiếp quan trọng nhất của sơ cấp — dùng được ngay trong đời sống Nhật. (1) MỜI: 〜ませんか (一緒に 見ませんか) nhẹ nhàng hơn 〜ましょう (đề xuất chắc chắn cùng làm); (2) XIN PHÉP: 〜ても いいですか — mấu chốt là も đứng ngay sau て形; (3) NHỜ VẢ: 〜てください trực tiếp, còn 〜ていただけませんか nhã nhặn nhất khi nhờ người lạ hoặc người trên (đáp nhận: はい、どうぞ; từ chối mềm: すみません、ちょっと…); (4) CHO–NHẬN: あげます = chủ ngữ trao đi, くれます = người khác trao về phía MÌNH, もらいます = mình nhận TỪ người khác (người cho đứng với に/から). Nâng cấp thành てあげる・てくれる・てもらう để nói "làm ơn/làm giúp cho ai". Nhầm hướng あげる↔くれる là lỗi giao tiếp kinh điển của người Việt học tiếng Nhật — hãy chốt thật chắc trước khi lên N4.',
      examples: [
        { ja: '今度、一緒に 映画を 見に 行きませんか。', vi: 'Lần tới cùng đi xem phim nhé?', tokens: ['今度', '一緒に', '映画', 'を', '見に', '行きませんか'] },
        { ja: 'すみません、この 鉛筆を 借りても いいですか。', vi: 'Xin lỗi, tôi mượn cây bút chì này một chút được không?' },
        { ja: '窓を 開けて いただけませんか。', vi: 'Anh/chị mở giúp cửa sổ được không ạ?' },
        { ja: '田中さんは わたしに 辞書を 貸して くれました。', vi: 'Tanaka đã cho tôi mượn từ điển. (làm lợi cho tôi)' },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Người nói 「一緒に 昼ご飯を 食べませんか。」 — họ đang làm gì?',
          options: ['Mời mình cùng đi ăn trưa', 'Từ chối lời mời đi ăn trưa', 'Hỏi quán nào bán cơm trưa', 'Kể rằng họ đã ăn trưa xong'],
          answerIndex: 0, explanationVi: '〜ませんか là LỜI MỜI lịch sự. Nhận: いいですね、行きましょう. Từ chối mềm: すみません、ちょっと…',
        },
        {
          kind: 'particle', prompt: 'Chọn từ đúng để hoàn thành câu XIN PHÉP (Tôi ngồi đây được không?)',
          sentence: 'すみません、ここに 座って___ いいですか。',
          options: ['は', 'が', 'も', 'で'],
          answerIndex: 2, explanationVi: 'Mẫu xin phép là Vて + も + いいですか — も là linh hồn của mẫu câu: 座っても・使っても・見ても… Bỏ も thì câu mất hẳn nghĩa xin phép.',
        },
        {
          kind: 'choice', prompt: 'Muốn nhờ NGƯỜI LẠ chỉ cho số điện thoại — câu nào lịch sự nhất?',
          options: ['電話番号を 教えて ください。', '電話番号を 教えて いただけませんか。', '電話番号を 教えませんか。', '電話番号を 教えても いいですか。'],
          answerIndex: 1, explanationVi: '〜ていただけませんか là cách nhờ lịch sự nhất trong phạm vi đã học. 〜てください thẳng thắng (dùng với người thân/quen); 〜ませんか là LỜI MỜI; 〜てもいいですか là XIN PHÉP.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng nghĩa "Tôi đã NHẬN một quyển sách từ Tanaka"?',
          options: ['田中さんは わたしに 本を あげました。', '田中さんは わたしに 本を くれました。', '田中さんは わたしが 本を もらいました。', 'わたしは 田中さんに 本を くれました。'],
          answerIndex: 1, explanationVi: 'Người khác cho MÌNH → くれました (người cho は + người nhận là mình に). あげました là trao đi (không dùng khi người nhận là mình); câu もらう đúng phải đảo vai: わたしは 田中さんに 本を もらいました.',
        },
        {
          kind: 'fill', prompt: 'Điền (Tôi đã dạy chữ Hán giúp bạn)',
          sentence: 'わたしは 友達に 漢字を 教えて___ました。',
          options: ['くれ', 'もらい', 'あげられ', 'あげ'],
          answerIndex: 3, explanationVi: 'MÌNH làm ơn cho người khác → てあげる: 教えてあげました. てくれる là người khác làm cho mình, てもらう là mình nhờ–nhận việc — cả hai đều ngược hướng với nghĩa câu này; てあげられました nghĩa là "có thể làm ơn".',
        },
      ],
    },
    {
      code: 'l50-duong-len-n4',
      title: 'Cầu nối sang N4: 〜たことがあります・〜たり〜たりします・〜と思います',
      formation: 'V (thể た) + ことが あります — đã từng…; Vたり Vたり します — liệt kê hành động đại diện; câu thường/tính từ + と 思います — tôi nghĩ là…; kế hoạch: 〜たいと 思っています・〜ように なります',
      explanationVi:
        'Ba mẫu "khớp nối" quan trọng nhất giữa N5 và N4. (1) 〜たことが あります kể KINH NGHIỆM đã sống qua — động từ phải ở THỂ た (行った ことが あります = đã từng đi), khác 〜ました chỉ kể một sự việc đã xảy ra. (2) 〜たり〜たり します liệt kê 2–3 hành động ĐẠI DIỆN ("kiểu như… này nọ") mà không kể hết: 映画を 見たり 音楽を 聞いたり します — công thức: た + り lặp 2 lần rồi kết bằng します. (3) 〜と 思います trích dẫn SUY NGHĨ hoặc kế hoạch: 日本語は 面白いと 思います; kế hoạch dài hạn dùng 〜たいと 思っています; 〜ように なります chỉ mức tiến bộ mới đạt được. Đây cũng là bộ công cụ TỰ ĐÁNH GIÁ cuối sơ cấp: hãy kể 3 kinh nghiệm đã có (たことがあります), 3 việc bạn vẫn làm đều đặn (たり〜たりします) và 1 mục tiêu N4 (〜たいと 思っています) — làm trôi chảy là bạn sẵn sàng bước tiếp.',
      examples: [
        { ja: '日本料理を 作った ことが あります。', vi: 'Tôi đã từng nấu món Nhật.', tokens: ['日本料理', 'を', '作った', 'こと', 'が', 'あります'] },
        { ja: '休みの 日は 音楽を 聞いたり、散歩したり します。', vi: 'Ngày nghỉ tôi nghe nhạc, đi dạo này nọ.' },
        { ja: 'この 一年は とても 楽しかったと 思います。', vi: 'Tôi nghĩ rằng một năm qua thật sự rất vui.' },
        { ja: '日本語で 手紙が 書けるように なりました。', vi: 'Tôi đã tiến bộ đến mức viết được thư bằng tiếng Nhật.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'Chọn dạng đúng của 行きます (Tôi đã TỪNG đi Kyoto)',
          sentence: '京都へ ___ ことが あります。',
          options: ['行きます', '行った', '行きました', '行って'],
          answerIndex: 1, explanationVi: 'Trước ことが あります phải là THỂ た (quá khứ thường): 行った ことが あります. 行きました là dạng lịch sự không ghép được vào mẫu này; 行って là て形 dùng cho mục đích khác.',
        },
        {
          kind: 'choice', prompt: '"Ngày nghỉ tôi dọn nhà, giặt đồ này nọ" — câu nào dùng mẫu LIỆT KÊ đúng?',
          options: ['休みの 日は 掃除したことが 洗濯したことが あります。', '休みの 日は 掃除したり 洗濯したり します。', '休みの 日は 掃除するり 洗濯するり します。', '休みの 日は 掃除たり 洗濯たり します。'],
          answerIndex: 1, explanationVi: 'たり〜たり: THỂ た + り, lặp 2 lần rồi kết bằng します: 掃除したり 洗濯したり します. Câu cuối thiếu た; たことがあります là kể kinh nghiệm, không phải liệt kê thói quen.',
        },
        {
          kind: 'particle', prompt: 'Chọn từ nối đúng (Tôi đang định sẽ đi Nhật năm tới)',
          sentence: '来年 日本へ 行きたい___ 思っています。',
          options: ['と', 'を', 'が', 'の'],
          answerIndex: 0, explanationVi: 'Nội dung suy nghĩ/kế hoạch nối với 思っています bằng と: 行きたいと 思っています. の nối danh từ; が/を là trợ từ bên trong phần trích dẫn — không phải từ nối.',
        },
        {
          kind: 'choice', prompt: 'Mẫu câu nào dùng để KỂ KINH NGHIỆM "đã từng làm gì"?',
          options: ['京都へ 行きます。', '京都へ 行きたいです。', '京都へ 行った ことが あります。', '京都へ 行った ほうが いいです。'],
          answerIndex: 2, explanationVi: '〜たことがあります = kinh nghiệm đã có. 〜たいです là mong muốn; 〜たほうがいいです là lời khuyên "nên…". Cả ba đều bắt nguồn từ thể た — chính là điểm dễ nhầm khi bước sang N4.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Nhìn lại một năm học',
      situationVi: 'Ngày lễ tốt nghiệp khóa sơ cấp, Tanaka và Linh ngồi ở quán cà phê, nhớ lại hành trình một năm học tiếng Nhật.',
      lines: [
        { speaker: 'たなか', ja: 'リンさん、日本語の 勉強を 始めてから、もう 一年ですね。', vi: 'Linh này, kể từ khi bắt đầu học tiếng Nhật cũng đã một năm rồi nhỉ.' },
        { speaker: 'リン', ja: '本当ですね。去年は ひらがなも 読めませんでした。', vi: 'Đúng thật. Năm ngoái tôi còn không đọc được hiragana.' },
        { speaker: 'たなか', ja: '今は 新聞も 読めるように なりましたね。', vi: 'Giờ cậu đã tiến bộ đến mức đọc được cả báo rồi đấy.' },
        { speaker: 'リン', ja: 'はい。毎日 漢字を 書いたり、単語を 覚えたり しましたから。', vi: 'Vâng. Vì ngày nào tôi cũng luyện viết kanji, học thuộc từ mới này nọ.' },
        { speaker: 'たなか', ja: 'すごいですね。わたしは いつも リンさんに 元気を もらっています。', vi: 'Giỏi thật. Tôi lúc nào cũng được Linh tiếp thêm năng lượng.' },
        { speaker: 'リン', ja: '田中さんこそ、何度も 日本語を 教えて くれました。本当に ありがとうございました。', vi: 'Chính Tanaka mới là người đã bao lần dạy tiếng Nhật cho tôi. Thật sự cảm ơn bạn nhiều.' },
        { speaker: 'たなか', ja: '前に 一緒に 京都へ 行きましたね。あの 旅行は 楽しかったです。', vi: 'Dạo trước chúng ta từng cùng đi Kyoto nhỉ. Chuyến đi đó vui thật.' },
        { speaker: 'リン', ja: 'はい。着物を 着たり、おいしい ものを 食べたり しました。', vi: 'Vâng. Chúng mình vừa mặc kimono vừa ăn đủ món ngon này nọ.' },
        { speaker: 'たなか', ja: 'これからも 一緒に 勉強しましょう。N4も 頑張って ください。', vi: 'Từ giờ chúng ta cứ cùng học tiếp nhé. N4 cũng cố gắng lên.' },
        { speaker: 'リン', ja: 'はい、これからも 頑張ります。田中さんも おねがいします。', vi: 'Vâng, tôi sẽ tiếp tục cố gắng. Mong Tanaka cũng giúp đỡ nhiều nhé.' },
      ],
    },
    {
      titleVi: 'Kế hoạch thăng cấp lên N4',
      situationVi: 'Sayuri chúc mừng Linh tốt nghiệp sơ cấp và hỏi về kế hoạch học tiếp lên N4.',
      lines: [
        { speaker: 'さゆり', ja: 'リンさん、初級が 卒業ですね。おめでとう ございます。', vi: 'Linh, cậu tốt nghiệp sơ cấp rồi à. Xin chúc mừng!' },
        { speaker: 'リン', ja: 'ありがとうございます。やっと 卒業しました。', vi: 'Cảm ơn bạn. Cuối cùng tôi cũng đã tốt nghiệp.' },
        { speaker: 'さゆり', ja: 'これから どうしますか。', vi: 'Từ giờ cậu định thế nào?' },
        { speaker: 'リン', ja: '十二月に N4の 試験を 受けたいと 思っています。', vi: 'Tôi đang định thi lấy N4 vào tháng 12.' },
        { speaker: 'さゆり', ja: 'いいですね。毎日 どのくらい 勉強しますか。', vi: 'Tốt đấy. Mỗi ngày cậu học khoảng bao lâu?' },
        { speaker: 'リン', ja: '一時間ぐらい 勉強して、日本語で 日記を 書きたいと 思っています。', vi: 'Khoảng một tiếng, và tôi muốn viết nhật ký bằng tiếng Nhật.' },
        { speaker: 'さゆり', ja: '日記ですか。すごいですね。日本語が もっと 上手に なると 思いますよ。', vi: 'Nhật ký á? Giỏi ghê. Tớ nghĩ tiếng Nhật của cậu sẽ còn tiến bộ hơn nữa đấy.' },
        { speaker: 'リン', ja: 'ありがとう。いつか 日本の ドラマが 全部 わかるように なりたいです。', vi: 'Cảm ơn nhé. Một ngày nào đó tôi muốn hiểu trọn vẹn các bộ drama Nhật.' },
        { speaker: 'さゆり', ja: '応援しています。また 一緒に 勉強しましょう。', vi: 'Tớ ủng hộ cậu. Lại cùng nhau học tiếp nhé.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'やっと 初級を 卒業しました。', meaningVi: 'Cuối cùng tôi cũng đã tốt nghiệp trình độ sơ cấp.', choices: ['Cuối cùng tôi cũng đã tốt nghiệp trình độ sơ cấp', 'Tôi vừa mới bắt đầu học sơ cấp', 'Tôi sắp thi tốt nghiệp đại học', 'Tôi đã bỏ khóa sơ cấp từ lâu'], answerIndex: 0, dictation: true },
    { scriptJa: '来年の 目標は N4に 合格することです。', meaningVi: 'Mục tiêu năm tới của tôi là thi đậu N4.', choices: ['Năm tới tôi sẽ không thi N4', 'Mục tiêu năm tới là thi đậu N4', 'Tôi đã đậu N4 từ năm ngoái', 'Mục tiêu năm tới là đi du lịch Nhật Bản'], answerIndex: 1, dictation: true },
    { scriptJa: '休みの 日は 音楽を 聞いたり、散歩したり します。', meaningVi: 'Ngày nghỉ tôi nghe nhạc, đi dạo này nọ.', choices: ['Ngày nghỉ tôi chỉ nghe nhạc', 'Tôi đi dạo mỗi buổi sáng', 'Ngày nghỉ tôi nghe nhạc và đi dạo này nọ', 'Ngày nghỉ tôi học nhạc'], answerIndex: 2 },
    { scriptJa: '先生は わたしに いろいろな ことを 教えて くれました。', meaningVi: 'Thầy đã dạy cho tôi rất nhiều điều.', choices: ['Tôi đã dạy thầy rất nhiều điều', 'Thầy đã dạy cho tôi rất nhiều điều', 'Thầy nhờ tôi dạy một điều', 'Tôi được nhờ dạy thay lớp'], answerIndex: 1 },
  ],
  reading: {
    titleVi: '手紙 — Thư gửi bản thân ở tương lai',
    lines: [
      { text: '未来の 自分へ', vi: 'Gửi bản thân ở tương lai,' },
      { text: '初級を 卒業した 自分に、「おめでとう」と 言いたいです。', vi: 'Tôi muốn nói lời "xin chúc mừng" với chính mình đã tốt nghiệp sơ cấp.' },
      { text: '去年の 四月、日本語の 勉強を 始めました。', vi: 'Tháng Tư năm ngoái, tôi bắt đầu học tiếng Nhật.' },
      { text: '最初は ひらがなも 読めませんでしたから、とても 心配でした。', vi: 'Lúc đầu tôi còn không đọc được hiragana nên rất lo lắng.' },
      { text: 'でも、毎日 少しずつ 勉強して、言葉を 覚えて、簡単な 日記を 書きました。', vi: 'Nhưng tôi học mỗi ngày một chút, ghi nhớ từ mới rồi viết những trang nhật ký đơn giản.' },
      { text: '秋には やっと 漢字が 読めるように なりました。', vi: 'Đến mùa thu, cuối cùng tôi cũng đã đọc được chữ Hán.' },
      { text: '勉強は 時々 大変でしたが、楽しかったと 思います。', vi: 'Việc học thỉnh thoảng vất vả, nhưng tôi nghĩ nó rất vui.' },
      { text: '来年は N4に 合格したいです。だから、これからも 勉強を 続けます。', vi: 'Năm tới tôi muốn thi đậu N4. Vì thế tôi sẽ tiếp tục việc học.' },
      { text: 'それでは、未来の 自分、元気で ください。―― 一年前の 自分より', vi: 'Vậy nhé, bản thân ở tương lai, hãy luôn khỏe mạnh. — Gửi từ chính mình của một năm trước' },
    ],
    questions: [
      { questionVi: 'Người viết bắt đầu học tiếng Nhật khi nào?', choices: ['Tháng Tư năm ngoái', 'Mùa thu năm ngoái', 'Đầu tháng Mười Hai', 'Một tuần trước ngày viết thư'], answerIndex: 0, explanationVi: 'Dòng 3: 去年の 四月、…勉強を 始めました — 四月 (tháng 4) + 始めます, cả hai đều thuộc nhóm từ đã ôn.' },
      { questionVi: 'Đến mùa thu, người viết đã tiến bộ đến mức nào?', choices: ['Viết được thư tay bằng tiếng Nhật', 'Đọc được chữ Hán', 'Thi đậu chứng chỉ N4', 'Hiểu hết các bộ drama Nhật'], answerIndex: 1, explanationVi: 'Dòng 6: 漢字が 読めるように なりました — mẫu 〜ようになります diễn tả sự tiến bộ đạt tới mức mới.' },
      { questionVi: 'Vì sao người viết nói sẽ tiếp tục học?', choices: ['Vì mục tiêu thi đậu N4 năm tới', 'Vì thầy giáo yêu cầu viết thư', 'Vì muốn trở thành giáo viên', 'Vì chưa đọc được hiragana'], answerIndex: 0, explanationVi: 'Dòng 8: N4に 合格したいです。だから、…続けます — だから nối nguyên nhân (mục tiêu N4) với kết quả (tiếp tục học).' },
    ],
  },
  speakSentences: [
    { ja: 'やっと 初級を 卒業しました。', vi: 'Cuối cùng tôi cũng đã tốt nghiệp sơ cấp rồi.' },
    { ja: 'おつかれさまでした。ありがとうございました。', vi: 'Bạn đã vất vả rồi (chúc mừng sự nỗ lực). Thật sự cảm ơn nhiều.' },
    { ja: 'この 一年は とても 楽しかったです。', vi: 'Một năm qua thật sự rất vui.' },
    { ja: 'これからも 勉強を 続けて、頑張ります。', vi: 'Từ giờ tôi sẽ tiếp tục học và cố gắng.' },
  ],
  translatePairs: [
    { ja: 'わたしの 目標は 来年 N4に 合格することです。', vi: 'Mục tiêu của tôi là thi đậu N4 năm tới.', tokens: ['わたし', 'の', '目標', 'は', '来年', 'N4', 'に', '合格する', 'こと', 'です'], distractors: ['もの'] },
    { ja: '日本の 文化に 興味が あります。', vi: 'Tôi có hứng thú với văn hóa Nhật.', tokens: ['日本', 'の', '文化', 'に', '興味', 'が', 'あります'], distractors: ['で'] },
    { ja: '友達に 漢字を 教えて あげました。', vi: 'Tôi đã dạy chữ Hán giúp bạn.', tokens: ['友達', 'に', '漢字', 'を', '教えて', 'あげました'], distractors: ['くれました'] },
    { ja: '勉強は 時々 大変ですが、楽しいと 思います。', vi: 'Việc học thỉnh thoảng vất vả, nhưng tôi nghĩ nó rất vui.', tokens: ['勉強', 'は', '時々', '大変', 'ですが', '楽しい', 'と', '思います'], distractors: ['から'] },
  ],
  kanji: ['学', '夢', '目'],
}
