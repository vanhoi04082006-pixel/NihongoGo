/**
 * NihongoGo — Bài 21: Đối chiếu & lý do — trợ từ が (tương phản) và 〜から (lý do).
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson21: CurriculumLesson = {
  order: 21,
  slug: 'l21-doi-chieu-ly-do',
  title: 'Đối chiếu & lý do — 〜が・〜から',
  titleJa: 'が・から',
  description: 'Nối hai vế câu có sự tương phản với が và nêu lý do với から.',
  learningObjectives: [
    'Dùng が để đối chiếu hai sự việc',
    'Nêu lý do với から',
    'Hỏi lý do với どうして',
  ],
  grammarTopics: ['Trợ từ が (tương phản)', '〜から (vì, bởi vì)'],
  vocabularyTopics: ['Từ chỉ cảm xúc', 'Từ hỏi và trình bày lý do'],
  kanjiTopics: ['Kanji số lượng & so sánh (多・少・同)'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'どうして', romaji: 'dōshite', meaningVi: 'vì sao, tại sao', pos: 'phó từ nghi vấn', exampleJa: 'どうして にほんごを べんきょうしますか。', exampleVi: 'Bạn học tiếng Nhật vì sao?' },
    { term: 'から', romaji: 'kara', meaningVi: 'vì, bởi vì (nêu lý do)', pos: 'trợ từ', exampleJa: 'あついですから、まどを あけます。', exampleVi: 'Trời nóng nên tôi mở cửa sổ.' },
    { term: 'でも', romaji: 'demo', meaningVi: 'nhưng mà (đứng đầu câu)', pos: 'liên từ', exampleJa: 'かんじは むずかしいです。でも、おもしろいです。', exampleVi: 'Chữ kanji khó. Nhưng mà thú vị.' },
    { term: 'いそがしい', romaji: 'isogashii', meaningVi: 'bận rộn', pos: 'tính từ い', exampleJa: 'きょうは いそがしいですが、あしたは ひまです。', exampleVi: 'Hôm nay bận nhưng ngày mai rảnh.' },
    { term: 'きらい', romaji: 'kirai', meaningVi: 'ghét, không thích', pos: 'tính từ な', exampleJa: 'さかなが きらいですから、食べません。', exampleVi: 'Vì ghét cá nên tôi không ăn.' },
    { term: 'すき', romaji: 'suki', meaningVi: 'thích, yêu thích', pos: 'tính từ な', exampleJa: 'わたしは こうえんが すきです。', exampleVi: 'Tôi thích công viên.' },
    { term: '多い', reading: 'おおい', romaji: 'ōi', meaningVi: 'nhiều', pos: 'tính từ い', exampleJa: 'この えきは あさ ひとが 多いです。', exampleVi: 'Nhà ga này buổi sáng đông người.' },
    { term: '少ない', reading: 'すくない', romaji: 'sukunai', meaningVi: 'ít', pos: 'tính từ い', exampleJa: 'よるの えきは ひとが 少ないです。', exampleVi: 'Nhà ga buổi tối vắng người.' },
    { term: '同じ', reading: 'おなじ', romaji: 'onaji', meaningVi: 'giống nhau', pos: 'tính từ な', exampleJa: 'これは あれと 同じです。', exampleVi: 'Cái này giống cái kia.' },
    { term: 'テスト', romaji: 'tesuto', meaningVi: 'bài kiểm tra', pos: 'danh từ', exampleJa: 'あした テストが あります。', exampleVi: 'Ngày mai có bài kiểm tra.' },
    { term: 'しごと', romaji: 'shigoto', meaningVi: 'công việc', pos: 'danh từ', exampleJa: 'しごとが 多いですから、いそがしいです。', exampleVi: 'Vì công việc nhiều nên tôi bận.' },
    { term: 'たんじょうび', romaji: 'tanjōbi', meaningVi: 'sinh nhật', pos: 'danh từ', exampleJa: 'あしたは ともだちの たんじょうびです。', exampleVi: 'Ngày mai là sinh nhật của bạn tôi.' },
    { term: 'アニメ', romaji: 'anime', meaningVi: 'phim hoạt hình', pos: 'danh từ', exampleJa: 'にほんの アニメが すきです。', exampleVi: 'Tôi thích anime Nhật.' },
    { term: 'てんき', romaji: 'tenki', meaningVi: 'thời tiết', pos: 'danh từ', exampleJa: 'あしたの てんきは どうですか。', exampleVi: 'Thời tiết ngày mai thế nào?' },
    { term: 'びょうき', romaji: 'byōki', meaningVi: 'bệnh, ốm', pos: 'danh từ', exampleJa: 'きのうは びょうきでした。', exampleVi: 'Hôm qua tôi bị ốm.' },
    { term: 'やすみます', romaji: 'yasumimasu', meaningVi: 'nghỉ (học, làm)', pos: 'động từ nhóm 1', exampleJa: 'びょうきですから、がっこうを やすみます。', exampleVi: 'Vì ốm nên tôi nghỉ học.' },
    { term: 'おくれます', romaji: 'okuremasu', meaningVi: 'đi trễ, đến muộn', pos: 'động từ nhóm 2', exampleJa: 'あさ バスが おくれます。', exampleVi: 'Buổi sáng xe buýt đến trễ.' },
    { term: 'こわい', romaji: 'kowai', meaningVi: 'sợ, đáng sợ', pos: 'tính từ い', exampleJa: 'いぬが こわいですから、さわりません。', exampleVi: 'Vì sợ chó nên tôi không vuốt.' },
    { term: 'うれしい', romaji: 'ureshii', meaningVi: 'vui mừng', pos: 'tính từ い', exampleJa: 'たんじょうびですから、うれしいです。', exampleVi: 'Vì là sinh nhật nên tôi vui.' },
    { term: 'かなしい', romaji: 'kanashii', meaningVi: 'buồn, buồn bã', pos: 'tính từ い', exampleJa: 'この えいがは かなしいです。', exampleVi: 'Bộ phim này buồn.' },
    { term: 'とおい', romaji: 'tōi', meaningVi: 'xa', pos: 'tính từ い', exampleJa: 'うちから がっこうまで とおいです。', exampleVi: 'Từ nhà đến trường xa.' },
    { term: 'りゆう', romaji: 'riyū', meaningVi: 'lý do', pos: 'danh từ', exampleJa: 'りゆうを 言って ください。', exampleVi: 'Hãy nói lý do.' },
  ],
  grammar: [
    {
      code: 'l21-ga-contrast',
      title: 'Trợ từ が — đối chiếu "… nhưng …"',
      formation: 'Câu 1 + が、+ Câu 2 (vế trước dùng です/ます hoặc thể thường)',
      explanationVi:
        'Muốn nối hai vế có nội dung trái ngược nhau, đặt が ở cuối vế đầu: むずかしいですが、たのしいです (khó nhưng vui), ふるいですが、きれいです (cũ nhưng sạch đẹp). Đây là trợ từ nối câu đối chiếu — đừng nhầm với が của あります/います (bài 9) hay が trong すきです (đánh dấu đối tượng). Khi nói nhẹ nhàng hơn có thể gặp でも — nhưng でも đứng ở đầu câu riêng, còn が đứng giữa hai vế. Phân biệt chốt với から (học ngay phần sau): A が B = "A nhưng B", còn A から B = "vì A nên B".',
      examples: [
        { ja: 'にほんごは むずかしいですが、たのしいです。', vi: 'Tiếng Nhật khó nhưng vui.', tokens: ['にほんご', 'は', 'むずかしいです', 'が', 'たのしいです'] },
        { ja: 'この アパートは ふるいですが、きれいです。', vi: 'Căn hộ này cũ nhưng sạch đẹp.' },
        { ja: 'きょうは いそがしいですが、あしたは ひまです。', vi: 'Hôm nay bận nhưng ngày mai rảnh.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Đối chiếu: tiếng Nhật khó nhưng vui',
          sentence: 'にほんごは むずかしいです___ たのしいです。',
          options: ['が', 'から', 'でも', 'も'],
          answerIndex: 0, explanationVi: 'が nối hai vế trái ngược (đối chiếu). から nêu lý do; でも đứng đầu câu riêng chứ không đứng giữa; も nghĩa là "cũng".',
        },
        {
          kind: 'choice', prompt: '「この りんごは 小さいですが、あまいです。」 nghĩa là gì?',
          options: ['Quả táo này nhỏ vì ngọt', 'Quả táo này nhỏ nhưng ngọt', 'Quả táo này nhỏ và ngọt', 'Quả táo này không nhỏ, không ngọt'],
          answerIndex: 1, explanationVi: 'が đối chiếu hai tính chất trái ngược: nhỏ nhưng ngọt. から là lý do; "và" không phải nghĩa của が.',
        },
        {
          kind: 'error', prompt: '「Tôi thích karaoke nhưng hôm nay bận。」 câu nào đúng?',
          options: ['カラオケを すきですが、きょうは いそがしいです。', 'カラオケが すきですから、きょうは いそがしいです。', 'カラオケが すきですが、きょうは いそがしいです。', 'カラオケが すきですが、きょうは ひまです。'],
          answerIndex: 2, explanationVi: 'すきです (và きらいです) dùng が đánh dấu đối tượng; vế nối đối chiếu cũng dùng が. Câu 1 sai trợ từ を; câu 2 biến thành lý do; câu 4 trái nghĩa với "bận".',
        },
        {
          kind: 'choice', prompt: 'Chọn câu diễn đạt "cũ nhưng sạch đẹp":',
          options: ['ふるいですから、きれいです', 'ふるいですが、おおきいです', 'あたらしいですが、きれいです', 'ふるいですが、きれいです'],
          answerIndex: 3, explanationVi: '"Cũ nhưng sạch đẹp" = ふるいですが、きれいです. から nghĩa là "vì"; あたらしい là "mới" (trái nghĩa với ふるい); おおきい là "to" (không phải "sạch đẹp").',
        },
      ],
    },
    {
      code: 'l21-kara-reason',
      title: '〜から — nêu lý do "vì, bởi vì"',
      formation: 'Vế lý do (thể thường hoặc です/ます) + から、+ vế kết quả',
      explanationVi:
        'Đặt から ngay sau vế nêu LÝ DO, vế sau là kết quả: あついですから、まどを あけます (trời nóng nên mở cửa sổ), テストが ありますから、べんきょうします (có kiểm tra nên học bài). Vế trước から có thể dùng thể thường (あついから) hoặc lịch sự (あついですから) — trong hội thoại lịch sự nên giữ です/ます cho đều. Khác biệt chốt với が: から là QUAN HỆ NHÂN QUẢ ("vì… nên…"), còn が là đối chiếu ("… nhưng…"). Khi trả lời câu hỏi lý do, có thể nói gọn chỉ vế lý do + から: 「びょうきですから。」',
      examples: [
        { ja: 'あついですから、まどを あけました。', vi: 'Trời nóng nên tôi đã mở cửa sổ.', tokens: ['あついです', 'から', 'まど', 'を', 'あけました'] },
        { ja: 'あしたは テストが ありますから、きょう べんきょうします。', vi: 'Mai có bài kiểm tra nên hôm nay tôi học bài.' },
        { ja: 'きのうは ともだちの たんじょうびでしたから、ケーキを 買いました。', vi: 'Hôm qua là sinh nhật bạn nên tôi đã mua bánh.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Nhân quả: trời nóng nên tôi mở cửa sổ',
          sentence: 'あついです___ まどを あけます。',
          options: ['が', 'から', 'まで', 'でも'],
          answerIndex: 1, explanationVi: '"Trời nóng → mở cửa sổ" là quan hệ nhân quả nên dùng から. が là đối chiếu; まで là "đến"; でも đứng đầu câu.',
        },
        {
          kind: 'choice', prompt: '「びょうきですから、きょうは 学校を 休みます。」 nghĩa là gì?',
          options: ['Vì ốm nên hôm nay nghỉ học', 'Ốm nhưng hôm nay vẫn đi học', 'Vì nghỉ học nên bị ốm', 'Hôm nay ốm nên ngày mai nghỉ'],
          answerIndex: 0, explanationVi: 'Vế trước から là lý do (ốm), vế sau là kết quả (nghỉ học). が là đối chiếu; hai đáp án còn lại sai chiều nhân quả hoặc thời gian.',
        },
        {
          kind: 'error', prompt: '「Vì trời nóng nên tôi không đi công viên。」 câu nào đúng?',
          options: ['あついですが、こうえんへ 行きません。', 'あついですから、こうえんへ 行きます。', 'あついですから、こうえんへ 行きません。', 'あついでしたから、こうえんへ 行きます。'],
          answerIndex: 2, explanationVi: 'Lý do (あついです) + から + phủ định (行きません). Câu 1 là đối chiếu (が); câu 2 mâu thuẫn nghĩa; câu 4 sai thì (lý do hiện tại mà hành động quá khứ).',
        },
        {
          kind: 'choice', prompt: 'Chọn câu trả lời đúng: 「どうして まいにち 六じに おきますか。」',
          options: ['がっこうが とおいですから。', 'がっこうが ちかいですから。', '六じに おきますから。', 'やすみですから。'],
          answerIndex: 0, explanationVi: 'Trả lời どうして cần lý do hợp lý: trường xa nên phải dậy sớm. "Trường gần" không giải thích được; lặp lại câu hỏi không phải lý do; "ngày nghỉ" mâu thuẫn với "mỗi ngày".',
        },
      ],
    },
    {
      code: 'l21-doushite-kara-desu',
      title: 'どうして — hỏi lý do và trả lời với 〜から',
      formation: 'どうして + câu hỏi? — Trả lời: lý do + から(です)',
      explanationVi:
        'どうして nghĩa là "vì sao / tại sao", đứng đầu câu hỏi: どうして にほんごを べんきょうしますか. Câu trả lời đưa lý do rồi kết bằng から: 「にほんの アニメが すきですから。」 Đừng nhầm どうして với どう đã học ở bài 8: どうですか hỏi đánh giá ("thế nào?"), còn どうして hỏi nguyên nhân ("vì sao?"). Cũng lưu ý khác với いつ (khi nào), どこ (ở đâu) — nếu hỏi lý do mà đáp thời gian hay nơi chốn là sai lệch.',
      examples: [
        { ja: 'どうして にほんごを べんきょうしますか。', vi: 'Bạn học tiếng Nhật vì sao?', tokens: ['どうして', 'にほんご', 'を', 'べんきょうしますか'] },
        { ja: 'にほんの アニメが すきですから。', vi: 'Vì tôi thích anime Nhật.' },
        { ja: '「どうして きのう あそびませんでしたか。」「しごとが いそがしかったですから。」', vi: '«Sao hôm qua bạn không đi chơi?» «Vì công việc bận.»' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '「どうして」 dùng để hỏi điều gì?',
          options: ['Lý do, nguyên nhân', 'Thời gian', 'Nơi chốn', 'Cách làm'],
          answerIndex: 0, explanationVi: 'どうして = "vì sao". Hỏi thời gian dùng いつ, nơi chốn dùng どこ, cách làm dùng どう (bài 8).',
        },
        {
          kind: 'fill', prompt: 'Hoàn thành câu trả lời lý do: «Vì mai có bài kiểm tra»',
          sentence: '「どうして きょう べんきょうしますか。」「あした テストが あります___。」',
          options: ['が', 'です', 'から', 'まで'],
          answerIndex: 2, explanationVi: 'Câu trả lời cho どうして kết thúc bằng から: ありますから。 が đối chiếu; です không kết thúc được câu lý do; まで là "đến".',
        },
        {
          kind: 'error', prompt: '「Vì tôi ghét cá nên không ăn。」 câu nào đúng?',
          options: ['さかなが きらいですが、食べません。', 'さかなが きらいですから、食べません。', 'さかなを きらいですから、食べません。', 'さかなが きらいですから、食べます。'],
          answerIndex: 1, explanationVi: 'きらい (và すき) dùng が đánh dấu đối tượng; lý do đi với から. Câu 1 là đối chiếu "nhưng"; câu 3 sai を; câu 4 mâu thuẫn (ghét cá mà ăn).',
        },
        {
          kind: 'particle', prompt: 'Điền từ còn thiếu trong câu trả lời lý do',
          sentence: '「どうして がっこうを 休みますか。」「びょうきです___。」',
          options: ['が', 'です', 'ました', 'から'],
          answerIndex: 3, explanationVi: 'Trả lời どうして = lý do + から: びょうきですから。 Các từ còn lại không tạo thành câu trả lời đúng.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Vì sao học tiếng Nhật?',
      situationVi: 'Tanaka hỏi Linh lý do học tiếng Nhật và ngược lại.',
      lines: [
        { speaker: 'たなか', ja: 'リンさんは どうして にほんごを べんきょうしますか。', vi: 'Linh học tiếng Nhật vì sao?' },
        { speaker: 'リン', ja: 'にほんの アニメが すきですから。', vi: 'Vì tôi thích anime Nhật.' },
        { speaker: 'たなか', ja: 'そうですか。', vi: 'Vậy à.' },
        { speaker: 'リン', ja: 'でも、かんじは むずかしいですね。', vi: 'Nhưng mà chữ kanji khó nhỉ.' },
        { speaker: 'たなか', ja: 'かんじは むずかしいですが、おもしろいですよ。', vi: 'Kanji khó nhưng thú vị đấy.' },
        { speaker: 'リン', ja: 'たなかさんは どうして ベトナムごを べんきょうしますか。', vi: 'Còn anh Tanaka học tiếng Việt vì sao?' },
        { speaker: 'たなか', ja: 'しごとで ベトナムへ 行きますから。', vi: 'Vì tôi sẽ sang Việt Nam vì công việc.' },
        { speaker: 'リン', ja: 'しごとは いそがしいですね。', vi: 'Công việc của anh bận nhỉ.' },
        { speaker: 'たなか', ja: 'ええ、とても いそがしいですが、たのしいです。', vi: 'Ừ, rất bận nhưng vui.' },
      ],
    },
    {
      titleVi: 'Vì sao nghỉ học?',
      situationVi: 'Tanaka bị ốm, thầy giáo hỏi lý do và nhắc lịch kiểm tra.',
      lines: [
        { speaker: 'せんせい', ja: 'たなかさん、きのう どうして 学校を 休みましたか。', vi: 'Tanaka, hôm qua em nghỉ học vì sao?' },
        { speaker: 'たなか', ja: 'びょうきでしたから。', vi: 'Thưa thầy, vì em bị ốm ạ.' },
        { speaker: 'せんせい', ja: 'そうですか。もう だいじょうぶですか。', vi: 'Vậy à. Giờ ổn chưa?' },
        { speaker: 'たなか', ja: 'はい、もう だいじょうぶです。', vi: 'Vâng, em ổn rồi ạ.' },
        { speaker: 'せんせい', ja: 'きょうは テストが ありますから、きを つけて ください。', vi: 'Hôm nay có bài kiểm tra nên em cẩn thận nhé.' },
        { speaker: 'たなか', ja: 'はい。あしたも テストが ありますか。', vi: 'Vâng ạ. Ngày mai cũng có kiểm tra ạ?' },
        { speaker: 'せんせい', ja: 'ええ、あしたも ありますから、忘れないで ください。', vi: 'Ừ, mai cũng có nên đừng quên nhé.' },
        { speaker: 'たなか', ja: 'あしたの テストは なんじからですか。', vi: 'Bài kiểm tra ngày mai bắt đầu từ mấy giờ ạ?' },
        { speaker: 'せんせい', ja: '九じからです。おくれないで くださいね。', vi: 'Từ 9 giờ. Đừng đi trễ nhé.' },
        { speaker: 'たなか', ja: 'はい、ぜったいに おくれません。', vi: 'Vâng, em tuyệt đối không trễ ạ.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'あしたは テストが ありますから、きょうは べんきょうします。', meaningVi: 'Vì mai có bài kiểm tra nên hôm nay tôi học bài.', choices: ['Vì mai có kiểm tra nên hôm nay học bài', 'Mai có kiểm tra nhưng hôm nay không học', 'Hôm nay có kiểm tra nên mai học bài', 'Mai không có kiểm tra nên hôm nay nghỉ'], answerIndex: 0, dictation: true },
    { scriptJa: 'この レストランは ちいさいですが、おいしいです。', meaningVi: 'Nhà hàng này nhỏ nhưng ngon.', choices: ['Nhà hàng này nhỏ và ngon', 'Nhà hàng này nhỏ nhưng ngon', 'Nhà hàng này to nhưng ngon', 'Nhà hàng này nhỏ vì ngon'], answerIndex: 1, dictation: true },
    { scriptJa: 'どうして にほんごを べんきょうしますか。', meaningVi: 'Bạn học tiếng Nhật vì sao?', choices: ['Bạn học tiếng Nhật lúc nào?', 'Bạn học tiếng Nhật ở đâu?', 'Bạn học tiếng Nhật với ai?', 'Bạn học tiếng Nhật vì sao?'], answerIndex: 3 },
    { scriptJa: 'あついですから、まどを あけます。', meaningVi: 'Trời nóng nên tôi mở cửa sổ.', choices: ['Trời lạnh nên tôi đóng cửa sổ', 'Trời nóng nên tôi mở cửa sổ', 'Trời nóng nhưng tôi không mở cửa sổ', 'Trời mưa nên tôi mở cửa sổ'], answerIndex: 1 },
    { scriptJa: 'びょうきですから、きょうは 学校を 休みます。', meaningVi: 'Vì ốm nên hôm nay tôi nghỉ học.', choices: ['Ốm nhưng hôm nay vẫn đi học', 'Vì ốm nên hôm nay nghỉ học', 'Vì nghỉ học nên bị ốm', 'Hôm nay khỏe nên đi học'], answerIndex: 1 },
  ],
  reading: {
    titleVi: 'Nhật ký của Linh',
    lines: [
      { text: 'きのうは 七じに おきました。', vi: 'Hôm qua tôi thức dậy lúc 7 giờ.' },
      { text: 'うちから がっこうまで とおいですから、バスで 行きました。', vi: 'Vì từ nhà đến trường xa nên tôi đã đi bằng xe buýt.' },
      { text: 'バスの 中は ひとが 多いですが、しずかでした。', vi: 'Trên xe buýt người đông nhưng yên tĩnh.' },
      { text: 'きのうは テストが ありましたから、バスで ほんを 読みました。', vi: 'Hôm qua có bài kiểm tra nên tôi đã đọc sách trên xe.' },
      { text: 'テストは むずかしかったですが、おもしろかったです。', vi: 'Bài kiểm tra khó nhưng thú vị.' },
      { text: 'よるは ともだちの たんじょうびでしたから、ケーキを 食べました。', vi: 'Buổi tối là sinh nhật của bạn nên tôi đã ăn bánh.' },
      { text: 'とても うれしい 一にちでした。', vi: 'Đó là một ngày rất vui.' },
    ],
    questions: [
      { questionVi: 'Vì sao Linh đi bằng xe buýt?', choices: ['Vì từ nhà đến trường xa', 'Vì xe buýt rẻ', 'Vì trời mưa', 'Vì thích xe buýt'], answerIndex: 0, explanationVi: 'うちから がっこうまで とおいですから — vì nhà đến trường xa nên đi xe buýt.' },
      { questionVi: 'Bài kiểm tra hôm qua thế nào?', choices: ['Dễ và thú vị', 'Khó nhưng thú vị', 'Khó và buồn tẻ', 'Không có kiểm tra'], answerIndex: 1, explanationVi: 'むずかしかったですが、おもしろかったです — khó nhưng thú vị (が đối chiếu).' },
      { questionVi: 'Vì sao tối qua Linh ăn bánh?', choices: ['Vì thi xong rồi', 'Vì là sinh nhật bạn', 'Vì đói', 'Vì bánh rẻ'], answerIndex: 1, explanationVi: 'たんじょうびでしたから、ケーキを 食べました — vì là sinh nhật của bạn nên ăn bánh.' },
    ],
  },
  speakSentences: [
    { ja: 'どうして にほんごを べんきょうしますか。', vi: 'Sao bạn học tiếng Nhật?' },
    { ja: 'にほんの アニメが すきですから。', vi: 'Vì tôi thích anime Nhật.' },
    { ja: 'にほんごは むずかしいですが、たのしいです。', vi: 'Tiếng Nhật khó nhưng vui.' },
    { ja: 'あしたは テストが ありますから、べんきょうします。', vi: 'Vì mai có kiểm tra nên tôi học bài.' },
  ],
  translatePairs: [
    { ja: 'あついですから、まどを あけます。', vi: 'Trời nóng nên tôi mở cửa sổ.', tokens: ['あついです', 'から', 'まど', 'を', 'あけます'], distractors: ['が', 'です'] },
    { ja: 'にほんごは むずかしいですが、たのしいです。', vi: 'Tiếng Nhật khó nhưng vui.', tokens: ['にほんご', 'は', 'むずかしいです', 'が', 'たのしいです'], distractors: ['から', 'も'] },
    { ja: 'どうして きょうは ひまですか。', vi: 'Sao hôm nay bạn rảnh?', tokens: ['どうして', 'きょう', 'は', 'ひま', 'ですか'], distractors: ['いつ', 'から'] },
    { ja: 'びょうきですから、がっこうを やすみます。', vi: 'Vì ốm nên tôi nghỉ học.', tokens: ['びょうき', 'ですから', 'がっこう', 'を', 'やすみます'], distractors: ['ですが', 'に'] },
    { ja: 'たんじょうびですから、うれしいです。', vi: 'Vì là sinh nhật nên tôi vui.', tokens: ['たんじょうび', 'ですから', 'うれしいです'], distractors: ['が', 'かなしいです'] },
  ],
  kanji: ['多', '少', '同'],
}
