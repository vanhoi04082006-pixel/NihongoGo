/**
 * NihongoGo — Bài 46: Hội thoại thực tế — Giao tiếp tình huống đời thường.
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson46: CurriculumLesson = {
  order: 46,
  slug: 'l46-hoi-thoai-thuc-te',
  title: 'Hội thoại thực tế — Giao tiếp tình huống đời thường',
  titleJa: '実践会話',
  description: 'Thực hành hội thoại trong các tình huống đời thường như mua sắm, hỏi đường, ăn uống.',
  learningObjectives: [
    'Thực hành hội thoại theo tình huống',
    'Dùng cách đáp tự nhiên của người Nhật',
    'Phân biệt ngữ điệu lịch sự và thân mật',
  ],
  grammarTopics: [],
  vocabularyTopics: ['Ngôn ngữ đời thường', 'Từ đệm hội thoại'],
  kanjiTopics: ['Kanji giao tiếp thường ngày'],
  difficulty: 'ELEMENTARY',
  vocabulary: [
    { term: '挨拶', reading: 'あいさつ', romaji: 'aisatsu', meaningVi: 'lời chào, sự chào hỏi', pos: 'danh từ (する)', exampleJa: '朝は 「おはようございます」と 挨拶します。', exampleVi: 'Buổi sáng tôi chào "chào buổi sáng".' },
    { term: '自己紹介', reading: 'じこしょうかい', romaji: 'jiko shōkai', meaningVi: 'sự tự giới thiệu', pos: 'danh từ (する)', exampleJa: 'はじめまして。自己紹介を します。ベトナムから 来ました。', exampleVi: 'Xin chào, lần đầu gặp gỡ. Tôi xin tự giới thiệu. Tôi đến từ Việt Nam.' },
    { term: 'はじめまして', romaji: 'hajimemashite', meaningVi: 'xin chào (lần đầu gặp mặt)', pos: 'cụm chào', exampleJa: 'はじめまして、リンと 申します。', exampleVi: 'Xin chào, tôi là Linh (lần đầu gặp mặt).' },
    { term: 'おひさしぶりです', romaji: 'ohisashiburi desu', meaningVi: 'lâu quá không gặp', pos: 'cụm chào', exampleJa: '田中さん、おひさしぶりです。お元気でしたか。', exampleVi: 'Tanaka, lâu quá không gặp. Bạn vẫn khỏe chứ?' },
    { term: 'またあした', romaji: 'mata ashita', meaningVi: 'hẹn gặp lại ngày mai', pos: 'cụm chào', exampleJa: 'おつかれさまでした。またあした。', exampleVi: 'Vất vả rồi nhé. Hẹn gặp lại ngày mai.' },
    { term: 'おつかれさま', romaji: 'otsukaresama', meaningVi: 'vất vả rồi nhé (chào nơi làm việc)', pos: 'cụm chào', exampleJa: '仕事が 終わりましたね。おつかれさまでした。', exampleVi: 'Xong việc rồi nhỉ. Vất vả rồi nhé.' },
    { term: 'ごめんなさい', romaji: 'gomen nasai', meaningVi: 'xin lỗi (thân mật)', pos: 'cụm cảm thán', exampleJa: 'ごめんなさい、わすれて いました。', exampleVi: 'Xin lỗi nhé, tôi quên mất.' },
    { term: '失礼します', reading: 'しつれいします', romaji: 'shitsurei shimasu', meaningVi: 'xin phép (vào phòng, về trước)', pos: 'động từ nhóm 3', exampleJa: 'お先に 失礼します。', exampleVi: 'Tôi xin phép về trước (nói với người còn ở lại).' },
    { term: 'あいづち', romaji: 'aizuchi', meaningVi: 'tiếng phản ứng giữ nhịp hội thoại', pos: 'danh từ', exampleJa: '「はい」や「そうですか」は 会話の あいづちです。', exampleVi: '"Vâng", "vậy à" là những aizuchi trong hội thoại.' },
    { term: 'たしかに', romaji: 'tashika ni', meaningVi: 'quả đúng là, đúng thật', pos: 'phó từ', exampleJa: 'たしかに、この 店の ラーメンは おいしいですね。', exampleVi: 'Quả đúng thế, ramen quán này ngon thật.' },
    { term: '言葉', reading: 'ことば', romaji: 'kotoba', meaningVi: 'từ ngữ, ngôn từ', pos: 'danh từ', exampleJa: '「なるほど」は よく 使う 言葉です。', exampleVi: '"Ra thế" là từ rất hay được dùng.' },
    { term: '相談', reading: 'そうだん', romaji: 'sōdan', meaningVi: 'sự bàn bạc, trao đổi ý kiến', pos: 'danh từ (する)', exampleJa: 'すみませんが、ちょっと 相談が あります。', exampleVi: 'Xin lỗi bạn, tôi có chút việc muốn bàn.' },
    { term: '都合', reading: 'つごう', romaji: 'tsugō', meaningVi: 'thời gian thuận tiện, lịch trình của ai', pos: 'danh từ', exampleJa: 'あしたの 都合は どうですか。', exampleVi: 'Ngày mai thời gian của bạn thế nào?' },
    { term: '今度', reading: 'こんど', romaji: 'kondo', meaningVi: 'lần này; dịp gần đây', pos: 'danh từ', exampleJa: '今度、いっしょに 映画を 見ませんか。', exampleVi: 'Dịp này cùng đi xem phim không?' },
    { term: '誘います', reading: 'さそいます', romaji: 'sasoimasu', meaningVi: 'rủ, mời (đi đâu/cùng làm gì)', pos: 'động từ nhóm 1', exampleJa: '今度、田中さんを カラオケに 誘います。', exampleVi: 'Dịp này tôi sẽ rủ Tanaka đi karaoke.' },
    { term: '食事', reading: 'しょくじ', romaji: 'shokuji', meaningVi: 'bữa ăn, việc dùng bữa', pos: 'danh từ (する)', exampleJa: '六時に 家族と 食事を します。', exampleVi: 'Lúc 6 giờ tôi dùng bữa cùng gia đình.' },
    { term: '機会', reading: 'きかい', romaji: 'kikai', meaningVi: 'dịp, cơ hội', pos: 'danh từ', exampleJa: '日本へ 行く 機会が あります。', exampleVi: 'Tôi có dịp đi Nhật Bản.' },
    { term: '友人', reading: 'ゆうじん', romaji: 'yūjin', meaningVi: 'bạn bè (cách nói trang trọng)', pos: 'danh từ', exampleJa: '友人に 誕生日の プレゼントを あげました。', exampleVi: 'Tôi đã tặng quà sinh nhật cho một người bạn.' },
    { term: '親切', reading: 'しんせつ', romaji: 'shinsetsu', meaningVi: 'tốt bụng, tử tế', pos: 'tính từ な', exampleJa: '駅員さんは とても 親切でした。', exampleVi: 'Anh nhân viên ga rất tử tế.' },
    { term: 'あとで', romaji: 'ato de', meaningVi: 'sau đó, để sau', pos: 'phó từ', exampleJa: '今は 忙しいですから、あとで 電話します。', exampleVi: 'Bây giờ tôi bận, để sau tôi sẽ gọi điện.' },
  ],
  grammar: [
    {
      code: 'l46-mo-dau-ket-thuc',
      title: 'Công thức mở đầu & kết thúc hội thoại theo tình huống',
      formation: 'Gặp lần đầu: はじめまして + 自己紹介 + どうぞ よろしく お願いします / Lâu ngày gặp lại: おひさしぶりです / Nhờ vả: すみませんが、〜 / Xin lỗi thân mật: ごめんなさい / Chia tay: またあした・おつかれさま・(お先に) 失礼します',
      explanationVi:
        'Mỗi tình huống có "công thức" cố định. (1) GẶP LẦN ĐẦU: はじめまして → 自己紹介 → どうぞ よろしく お願いします — bộ ba mở đầu không thể thiếu. (2) GẶP LẠI SAU LÂU NGÀY: おひさしぶりです + お元気でしたか. (3) NHỜ VẢ: mở đầu bằng すみませんが、〜 — thêm が làm cho lời vào đề mềm mại hơn (そうだんが あります / お願いが あります); đừng nói thẳng yêu cầu ngay. (4) XIN LỖI: ごめんなさい thân mật, dùng với bạn bè/người thân; すみません trung tính hơn — vừa xin lỗi vừa nhờ vả vừa gọi người, dùng được với cả người lạ; với khách hàng thì nâng cấp lên 申し訳ございません (đã học bài 33). (5) KẾT THÚC: またあした (hẹn ngày mai — bạn bè, đồng nghiệp), おつかれさま (nơi làm việc), お先に 失礼します (xin phép về trước). Mẹo: học theo BỘ TÌNH HUỐNG chứ không học từng câu rời.',
      examples: [
        { ja: 'はじめまして。リンと 申します。どうぞ よろしく お願いします。', vi: 'Xin chào, lần đầu gặp gỡ. Tôi là Linh. Rất mong được giúp đỡ.', tokens: ['はじめまして', 'リン', 'と', '申します', 'どうぞ', 'よろしく', 'お願いします'] },
        { ja: '田中さん、おひさしぶりです。お元気でしたか。', vi: 'Tanaka, lâu quá không gặp. Bạn vẫn khỏe chứ?' },
        { ja: 'すみませんが、ちょっと 相談が あります。', vi: 'Xin lỗi bạn, tôi có chút việc muốn bàn.', tokens: ['すみませんが', 'ちょっと', '相談', 'が', 'あります'] },
        { ja: 'おつかれさまでした。またあした。', vi: 'Vất vả rồi nhé. Hẹn gặp lại ngày mai.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Gặp đối tác lần đầu tiên — câu mở đầu phù hợp nhất là gì?',
          options: ['はじめまして。どうぞ よろしく お願いします。', 'おひさしぶりです。お元気ですか。', 'ごちそうさまでした。', 'おつかれさまでした。'],
          answerIndex: 0, explanationVi: 'はじめまして chỉ dùng cho lần đầu gặp mặt, kèm 自己紹介 và どうぞ よろしく お願いします. おひさしぶりです là gặp lại sau lâu ngày.',
        },
        {
          kind: 'choice', prompt: 'Gặp lại bạn học cũ sau 3 năm không gặp — nên chào thế nào?',
          options: ['おつかれさまでした。', 'はじめまして。', 'おひさしぶりです。お元気でしたか。', 'またあした。'],
          answerIndex: 2, explanationVi: 'おひさしぶりです = "lâu quá không gặp", thường kèm お元気でしたか. はじめまして chỉ cho lần đầu; おつかれさま là chào nơi làm việc; またあした là chào tạm biệt.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ (Xin lỗi bạn, tôi có chút việc muốn bàn)',
          sentence: 'すみません___、ちょっと 相談が あります。',
          options: ['を', 'が', 'に', 'で'],
          answerIndex: 1, explanationVi: 'すみませんが là mẫu mở đầu lời nhờ vả — が làm mềm lời dẫn vào. を/に/で không đứng sau すみません với chức năng này.',
        },
        {
          kind: 'error', prompt: 'Bạn làm rơi cốc của bạn cùng phòng và muốn xin lỗi THÂN MẬT — câu nào đúng?',
          options: ['ごめんなさい、わすれて いました。', 'すみませんが、わすれて いました。', '失礼します、わすれて いました。', 'またあした、わすれて いました。'],
          answerIndex: 0, explanationVi: 'ごめんなさい = xin lỗi thân mật (bạn bè, người thân). すみませんが là mẫu mở đầu lời NHỜ VẢ, còn 失礼します là xin phép rời chỗ, またあした là chào hẹn ngày mai — đều không phải lời xin lỗi.',
        },
      ],
    },
    {
      code: 'l46-aizuchi',
      title: 'Aizuchi (あいづち) — phản ứng giữ nhịp hội thoại',
      formation: 'はい・ええ (vâng, tôi nghe nè) / そうですか (vậy à — thông tin mới) / そうですよね (đúng thế nhỉ — đồng tình) / なるほど (ra thế — hiểu ra) / たしかに (quả đúng thế — thừa nhận)',
      explanationVi:
        'Aizuchi là tiếng phản ứng ngắn chen vào trong lúc nghe: はい・ええ cho biết "tôi đang nghe"; そうですか tiếp nhận thông tin MỚI một cách trung tính ("vậy à"); そうですよね (đã gặp bài 44) là ĐỒNG TÌNH kèm mong đối phương xác nhận ("đúng thế nhỉ"); なるほど tỏ ra vừa HIỂU RA điều gì đó ("à, ra thế"); たしかに thừa nhận ý kiến của đối phương đúng ("quả thật thế"). Người Nhật coi việc im lặng tuyệt đối khi nghe là mất lịch sự — nghe mà không phản ứng, đối phương sẽ tưởng bạn không chú ý. Mẹo dùng: mỗi 3–5 lượt thoại thả một aizuchi, đổi loại luân phiên (vừa そうですか xong thì lần sau そうですよね) để hội thoại tự nhiên. Lưu ý: aizuchi ≠ đồng ý hoàn toàn — そうですか chỉ có nghĩa "tôi tiếp nhận thông tin", chưa hẳn là tán thành.',
      examples: [
        { ja: '「来週、京都へ 行きます。」「そうですか。いいですね。」', vi: '"Tuần sau tôi đi Kyoto." "Vậy à. Tuyệt nhỉ."' },
        { ja: '「日本の 電車は 少し 高いですね。」「そうですよね。でも、便利ですね。」', vi: '"Tàu điện Nhật hơi đắt nhỉ." "Đúng nhỉ. Nhưng mà tiện."' },
        { ja: '話を きく 時は、あいづちを 忘れないで ください。', vi: 'Khi nghe chuyện, đừng quên phản ứng giữ nhịp nhé.', tokens: ['話', 'を', 'きく', '時', 'は', 'あいづち', 'を', '忘れないで', 'ください'] },
        { ja: '「今度の 休みは 二日です。」「なるほど。どこかへ 行きますか。」', vi: '"Kỳ nghỉ lần này có hai ngày." "Ra thế. Bạn có định đi đâu không?"' },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Aizuchi (あいづち) là gì?',
          options: ['Tiếng phản ứng ngắn cho biết mình đang lắng nghe', 'Lời mời lịch sự trong hội thoại', 'Câu cảm ơn sau bữa ăn', 'Cách xưng hô nơi công sở'],
          answerIndex: 0, explanationVi: 'Aizuchi = はい・そうですか・そうですよね… chen vào lúc nghe để giữ nhịp. Im lặng hoàn toàn khi nghe dễ bị coi là mất lịch sự.',
        },
        {
          kind: 'fill', prompt: 'Điền aizuchi (Nghe "Tuần này bận ghê nhỉ" — muốn ĐỒNG TÌNH kèm xin xác nhận)',
          sentence: '「今週は 忙しいですね。」「___、私も 忙しかったです。」',
          options: ['そうですよね', 'おひさしぶりです', 'ごちそうさまでした', 'またあした'],
          answerIndex: 0, explanationVi: 'そうですよね = "đúng thế nhỉ" — đồng tình + mời đối phương xác nhận. Ba từ còn lại là công thức chào/xin phép, không phải aizuchi.',
        },
        {
          kind: 'choice', prompt: 'Nghe một thông tin hoàn toàn MỚI, muốn phản ứng trung tính — dùng cụm nào?',
          options: ['おつかれさま', 'そうですか', 'またあした', 'はじめまして'],
          answerIndex: 1, explanationVi: 'そうですか tiếp nhận thông tin mới ("vậy à"). Muốn đồng tình thì そうですよね, còn おつかれさま・またあした・はじめまして là câu chào theo tình huống.',
        },
        {
          kind: 'error', prompt: 'Trao đổi nào dùng aizuchi HỢP LÝ?',
          options: ['「あした、テストが あります。」「そうですか。がんばって ください。」', '「あした、テストが あります。」「また あした。」', '「あした、テストが あります。」「ごちそうさまでした。」', '「あした、テストが あります。」「おひさしぶりです。」'],
          answerIndex: 0, explanationVi: 'Nghe thông tin mới (có bài kiểm tra) → そうですか + lời động がんばって ください. Các cụm còn lại là chào tạm biệt/cảm ơn/gặp lại sau lâu ngày — đặt vào đây lệch tình huống.',
        },
      ],
    },
    {
      code: 'l46-moi-va-du-dinh',
      title: 'Mời & bày tỏ dự định: 〜ませんか・〜ましょう・〜たいと思っています',
      formation: 'V (bỏ ます) + ませんか (mời mềm) / V (bỏ ます) + ましょう (rủ dứt khoát) / V-たい + と 思っています (mong muốn, dự định — mềm mại)',
      explanationVi:
        'Ba bậc của lời mời/bày tỏ trong giao tiếp thật. (1) 〜ませんか (ôn bài 7): lời mời mềm, để cửa mở cho đối phương — nhận bằng いいですね、行きましょう; từ chối mềm bằng すみません、ちょっと… (kết câu bằng "…" thay vì nói thẳng lý do). (2) 〜ましょう: khi đã gần thống nhất, rủ dứt khoát hơn — 六時に 会いましょう. (3) MỚI — 〜たいと思っています: ghép thể mong muốn たい (bài 12) với と 思っています (ôn mẫu と思います bài 20 ở dạng đang diễn ra): 日本で 働きたいと 思っています = "tôi đang có mong muốn làm việc ở Nhật" — nhã nhặn, khiêm tốn hơn たいです, hay dùng để bày tỏ nguyện vọng/dự định còn đang cân nhắc. Trong hội thoại rủ đi chơi, bạn có thể gợi trước bằng 今度〜たいと思っています rồi mới chuyển sang 〜ませんか.',
      examples: [
        { ja: '今度、いっしょに ラーメンを 食べませんか。', vi: 'Dịp này cùng đi ăn mì ramen không?', tokens: ['今度', 'いっしょに', 'ラーメン', 'を', '食べませんか'] },
        { ja: 'いいですね。じゃあ、六時に 会いましょう。', vi: 'Hay đấy. Vậy 6 giờ gặp nhau nhé.' },
        { ja: '日本で 働きたいと 思って います。', vi: 'Tôi đang có mong muốn làm việc tại Nhật.', tokens: ['日本', 'で', '働きたい', 'と', '思って', 'います'] },
        { ja: 'すみません、あしたは ちょっと…。', vi: 'Xin lỗi, ngày mai tôi hơi bận… (cách từ chối mềm).' },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Nghe 「いっしょに 映画を 見ませんか。」 — muốn NHẬN lời, đáp thế nào?',
          options: ['すみません、ちょっと…。', 'いいですね。見ましょう。', '見たくないです。', 'はい、見ません。'],
          answerIndex: 1, explanationVi: 'Nhận lời mời → いいですね + ましょう. すみません、ちょっと… là từ chối mềm; 見ません là phủ định của thấy (không xem); 見たくないです quá thẳng.',
        },
        {
          kind: 'fill', prompt: 'Điền đuôi còn thiếu (Tôi đang muốn học kanji nhiều hơn)',
          sentence: 'もっと 漢字を 勉強したいと 思って___。',
          options: ['あります', 'います', 'します', 'ください'],
          answerIndex: 1, explanationVi: 'と思っています = と + 思う đang diễn ra → 思って + います. 思ってあります/します/ください không tồn tại với động từ 思う.',
        },
        {
          kind: 'conjugate', prompt: 'Đổi 「行きます」 sang thể mong muốn rồi ghép với と 思っています (Tôi muốn đi Kyoto)',
          sentence: '京都へ ___と 思って います。',
          options: ['行きます', '行きたい', '行きました', '行きません'],
          answerIndex: 1, explanationVi: 'V (bỏ ます) + たい = thể mong muốn: 行きます → 行きたい. Sau đó ghép と 思っています để bày tỏ nguyện vọng mềm mại.',
        },
        {
          kind: 'error', prompt: 'Câu nào ĐÚNG ngữ pháp (bày tỏ mong muốn làm việc ở Nhật)?',
          options: ['日本で 働きたいと 思って います。', '日本で 働くたいと 思って います。', '日本で 働きたと 思って います。', '日本で 働きないと 思って います。'],
          answerIndex: 0, explanationVi: 'たい gắn vào thân ます: 働きます → 働きたい, rồi + と 思っています. 働くたい gắn sai vị trí (phải bỏ ます trước), 働きた thiếu い, 働きない là thể ない chứ không phải mong muốn.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Gặp lại bạn cũ trước cửa ga',
      situationVi: 'Linh tình cờ gặp lại Yamada — bạn học cũ — trước cửa ga sau hai năm.',
      lines: [
        { speaker: 'やまだ', ja: 'あれ? リンさんですか。', vi: 'Ơ? Phải Linh đó không?' },
        { speaker: 'リン', ja: 'やまださん! おひさしぶりです!', vi: 'Yamada! Lâu quá không gặp!' },
        { speaker: 'やまだ', ja: 'おひさしぶりです。お元気でしたか。', vi: 'Lâu quá không gặp. Bạn vẫn khỏe chứ?' },
        { speaker: 'リン', ja: 'ええ、元気でした。四月から 大阪で 働いて います。', vi: 'Vâng, tôi vẫn khỏe. Từ tháng Tư tôi làm việc ở Osaka.' },
        { speaker: 'やまだ', ja: 'そうですか。大阪は 遠いですね。週末も 東京に 帰りますか。', vi: 'Vậy à. Osaka xa nhỉ. Cuối tuần bạn có về Tokyo không?' },
        { speaker: 'リン', ja: 'ええ、よく 帰ります。少し 疲れますよ。', vi: 'Ừ, tôi hay về. Hơi mệt đấy.' },
        { speaker: 'やまだ', ja: 'そうですよね。電車も 高いですから、たいへんですね。', vi: 'Đúng nhỉ. Vé tàu cũng đắt mà, vất vả thật.' },
        { speaker: 'リン', ja: 'ええ。でも、新しい 仕事は 楽しいです。', vi: 'Ừ. Nhưng công việc mới thì vui.' },
        { speaker: 'やまだ', ja: 'それは よかったですね。あ、今度、いっしょに 食事を しませんか。田中さんも 誘いましょう。', vi: 'Vậy thì tốt. À, dịp này cùng đi ăn không? Rủ cả Tanaka nữa.' },
        { speaker: 'リン', ja: 'いいですね、ぜひ。私も 会いたいと 思って います。', vi: 'Hay đấy, nhất định. Tôi cũng đang muốn gặp mọi người.' },
      ],
    },
    {
      titleVi: 'Rủ đồng nghiệp đi ăn ramen',
      situationVi: 'Cuối giờ làm, Tanaka gọi Linh lại để rủ đi ăn tối ở quán ramen mới.',
      lines: [
        { speaker: 'たなか', ja: 'リンさん、すみませんが、ちょっと いいですか。', vi: 'Linh này, xin lỗi bạn, làm phiền chút nhé?' },
        { speaker: 'リン', ja: 'はい、何ですか。', vi: 'Vâng, có việc gì thế ạ?' },
        { speaker: 'たなか', ja: '今晩、いっしょに 食事を しませんか。駅の そばに 新しい ラーメンの 店が できたそうです。', vi: 'Tối nay cùng đi ăn không? Nghe nói gần ga có quán ramen mới mở.' },
        { speaker: 'リン', ja: '新しい ラーメンの 店ですか。いいですね。実は 今 おなかが すいて います。', vi: 'Quán ramen mới à? Hay đấy. Nói thật là bây giờ tôi đang đói bụng.' },
        { speaker: 'たなか', ja: 'なるほど。じゃあ、六時に 会社の 前で 会いましょう。', vi: 'Ra thế. Vậy 6 giờ gặp nhau trước công ty nhé.' },
        { speaker: 'リン', ja: 'はい、わかりました。あのう、お酒も 飲めますか。', vi: 'Vâng, biết rồi. Mà cho hỏi, có uống được rượu bia không nhỉ?' },
        { speaker: 'たなか', ja: 'ええ、ビールも ありますよ。', vi: 'Có, bia cũng có đấy.' },
        { speaker: 'リン', ja: 'そうですか。じゃあ、楽しみです。ビールも 飲みたいと 思って います。', vi: 'Vậy à. Vậy hay quá. Tôi cũng đang muốn uống bia.' },
        { speaker: 'たなか', ja: 'はは、そうですよね。じゃあ、あとで 会いましょう。', vi: 'Ha ha, đúng nhỉ. Vậy lát nữa gặp nhau nhé.' },
        { speaker: 'リン', ja: 'はい。じゃあ、また 六時に。', vi: 'Vâng. Hẹn 6 giờ nhé.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'はじめまして。ベトナムから 来ました。どうぞ よろしく お願いします。', meaningVi: 'Xin chào, tôi đến từ Việt Nam. Rất mong được giúp đỡ.', choices: ['Người nói đang tự giới thiệu khi gặp lần đầu', 'Người nói chào người cũ lâu ngày không gặp', 'Người nói đang xin lỗi vì đến trễ', 'Người nói đang mời đi ăn'], answerIndex: 0, dictation: true },
    { scriptJa: 'おひさしぶりです。お元気でしたか。', meaningVi: 'Lâu quá không gặp. Bạn vẫn khỏe chứ?', choices: ['Hai người vừa mới quen nhau', 'Một người đang xin phép về trước', 'Hai người lâu ngày gặp lại nhau', 'Một người đang cảm ơn sau bữa ăn'], answerIndex: 2, dictation: true },
    { scriptJa: 'すみませんが、ちょっと 相談が あります。', meaningVi: 'Xin lỗi bạn, tôi có chút việc muốn bàn.', choices: ['Người nói muốn mời đi ăn', 'Người nói có việc muốn bàn bạc', 'Người nói muốn xin lỗi vì quên hẹn', 'Người nói muốn hỏi giờ tàu'], answerIndex: 1 },
    { scriptJa: '今度、いっしょに ラーメンを 食べませんか。', meaningVi: 'Dịp này cùng ăn mì ramen nhé?', choices: ['Từ chối lời mời ăn ramen', 'Hỏi quán ramen ở đâu', 'Kể đã ăn ramen hôm qua', 'Đề nghị cùng đi ăn ramen'], answerIndex: 3 },
    { scriptJa: 'ごめんなさい。わすれて いました。', meaningVi: 'Xin lỗi nhé, tôi quên mất.', choices: ['Người nói mở đầu lời nhờ vả', 'Người nói chào khi rời công ty', 'Người nói đồng tình với ý kiến', 'Người nói xin lỗi thân mật vì đã quên'], answerIndex: 3 },
  ],
  reading: {
    titleVi: 'Hỏi về cách chào nơi công sở',
    lines: [
      { speaker: 'リン', text: '田中さん、日本の 会社では 朝 どんな 挨拶を しますか。', vi: 'Tanaka này, ở công ty Nhật buổi sáng người ta chào thế nào ạ?' },
      { speaker: 'たなか', text: '朝は 「おはようございます」と 言います。帰る 時は 「お先に 失礼します」と 言います。', vi: 'Buổi sáng thì chào "おはようございます". Lúc về thì nói "お先に 失礼します" (tôi xin phép về trước).' },
      { speaker: 'リン', text: 'なるほど。初めて 会う 人には 何と 言いますか。', vi: 'Ra thế. Với người lần đầu gặp thì nói gì ạ?' },
      { speaker: 'たなか', text: '「はじめまして」と 言って、自己紹介を します。', vi: 'Nói "はじめまして" rồi tự giới thiệu.' },
      { speaker: 'リン', text: '会話の 中では どうですか。', vi: 'Còn trong lúc trò chuyện thì thế nào ạ?' },
      { speaker: 'たなか', text: '「はい」や「そうですか」を 言いながら、話を きいて ください。それが あいづちです。', vi: 'Hãy vừa nói "vâng", "vậy à" vừa nghe chuyện. Đó chính là aizuchi.' },
      { speaker: 'リン', text: 'たしかに。私は 「はい」ばかり 言って います。', vi: 'Quả đúng thế. Cứ tôi toàn nói "vâng" hoài.' },
      { speaker: 'たなか', text: '大丈夫ですよ。「そうですよね」も 使って ください。会話が 楽しく なりますよ。', vi: 'Không sao đâu. Dùng thêm cả "đúng nhỉ" nữa nhé. Hội thoại sẽ vui lên đấy.' },
      { speaker: 'リン', text: 'わかりました。今日から 使います。', vi: 'Tôi hiểu rồi. Hôm nay tôi dùng luôn.' },
    ],
    questions: [
      { questionVi: '「お先に 失礼します」 được dùng khi nào?', choices: ['Khi gặp đồng nghiệp lần đầu', 'Khi về trước đồng nghiệp (rời công ty)', 'Khi bắt đầu bữa ăn', 'Khi kết thúc cuộc họp'], answerIndex: 1, explanationVi: 'Dòng 2: 帰る 時は 「お先に 失礼します」と 言います — câu chào khi xin phép về trước.' },
      { questionVi: 'Theo Tanaka, aizuchi là gì?', choices: ['Nói 「はい」や「そうですか」 trong lúc nghe đối phương nói', 'Đặt câu hỏi cuối mỗi đoạn hội thoại', 'Lời mời lịch sự khi kết thúc', 'Cách chào buổi sáng ở công ty'], answerIndex: 0, explanationVi: 'Dòng 6: 「はい」や「そうですか」を 言いながら、話を きいて ください。それが あいづちです。' },
      { questionVi: 'Tanaka khuyên Linh nên dùng thêm cụm nào trong hội thoại?', choices: ['「おひさしぶりです」', '「お先に 失礼します」', '「そうですよね」', '「ごちそうさま」'], answerIndex: 2, explanationVi: 'Dòng 8: 「そうですよね」も 使って ください。会話が 楽しく なりますよ — dùng aizuchi đa dạng hơn thay vì chỉ 「はい」.' },
    ],
  },
  speakSentences: [
    { ja: 'おひさしぶりです。お元気でしたか。', vi: 'Lâu quá không gặp. Bạn vẫn khỏe chứ?' },
    { ja: 'すみませんが、ちょっと 相談が あります。', vi: 'Xin lỗi bạn, tôi có chút việc muốn bàn.' },
    { ja: '今度、いっしょに 食事を しませんか。', vi: 'Dịp này cùng đi ăn không?' },
    { ja: 'おつかれさまでした。またあした。', vi: 'Vất vả rồi nhé. Hẹn gặp lại ngày mai.' },
  ],
  translatePairs: [
    { ja: 'はじめまして。リンと 申します。', vi: 'Xin chào, lần đầu gặp gỡ. Tôi là Linh.', tokens: ['はじめまして', 'リン', 'と', '申します'], distractors: ['お願いします'] },
    { ja: 'おひさしぶりです。お元気でしたか。', vi: 'Lâu quá không gặp. Bạn vẫn khỏe chứ?', tokens: ['おひさしぶりです', 'お元気', 'でしたか'], distractors: ['ですよね'] },
    { ja: 'すみませんが、ちょっと 相談が あります。', vi: 'Xin lỗi bạn, tôi có chút việc muốn bàn.', tokens: ['すみませんが', 'ちょっと', '相談', 'が', 'あります'], distractors: ['失礼します'] },
    { ja: '今度、いっしょに ラーメンを 食べませんか。', vi: 'Dịp này cùng ăn mì ramen nhé?', tokens: ['今度', 'いっしょに', 'ラーメン', 'を', '食べませんか'], distractors: ['飲みませんか'] },
    { ja: '日本で 働きたいと 思って います。', vi: 'Tôi đang có mong muốn làm việc tại Nhật.', tokens: ['日本', 'で', '働きたい', 'と', '思って', 'います'], distractors: ['思います'] },
  ],
  kanji: ['話', '言', '思'],
}
