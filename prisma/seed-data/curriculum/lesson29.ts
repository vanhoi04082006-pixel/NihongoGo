/**
 * NihongoGo — Bài 29: 〜ように — Để mà & cầu mong.
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson29: CurriculumLesson = {
  order: 29,
  slug: 'l29-you-ni',
  title: '〜ように — Để mà & cầu mong',
  titleJa: '〜ように',
  description: 'Nói mục đích cần đạt được và điều mong ước với 〜ように.',
  learningObjectives: [
    'Diễn đạt mục đích với 〜ように',
    'Nói lời chúc, cầu mong',
    'Phân biệt 〜ように và 〜ために',
  ],
  grammarTopics: ['〜ように (nhằm để)', '〜ように (cầu mong)'],
  vocabularyTopics: ['Mục tiêu và kế hoạch', 'Lời chúc'],
  kanjiTopics: ['Kanji mong ước & sức khỏe (様・病・夢)'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: '夢', reading: 'ゆめ', romaji: 'yume', meaningVi: 'giấc mơ, mơ ước', pos: 'danh từ', exampleJa: 'わたしの 夢は にほんで はたらく ことです。', exampleVi: 'Mơ ước của tôi là làm việc ở Nhật.' },
    { term: '病気', reading: 'びょうき', romaji: 'byōki', meaningVi: 'bệnh, bị ốm', pos: 'danh từ', exampleJa: '病気の ときは、うちで やすんで ください。', exampleVi: 'Khi ốm thì xin hãy nghỉ ở nhà.' },
    { term: '病院', reading: 'びょういん', romaji: 'byōin', meaningVi: 'bệnh viện', pos: 'danh từ', exampleJa: 'かぜの とき、病院へ いきます。', exampleVi: 'Khi bị cảm, tôi đi bệnh viện.' },
    { term: '皆様', reading: 'みなさま', romaji: 'minasama', meaningVi: 'quý vị, mọi người (lịch sự)', pos: 'danh từ', exampleJa: '皆様、どうぞ おげんきで。', exampleVi: 'Kính chúc quý vị mạnh khỏe.' },
    { term: 'しあい', romaji: 'shiai', meaningVi: 'trận đấu, cuộc thi', pos: 'danh từ', exampleJa: 'あした テニスの しあいが あります。', exampleVi: 'Ngày mai có trận đấu tennis.' },
    { term: 'もくひょう', romaji: 'mokuhyō', meaningVi: 'mục tiêu', pos: 'danh từ', exampleJa: 'ことしの もくひょうは しあいに かつ ことです。', exampleVi: 'Mục tiêu năm nay là thắng trận đấu.' },
    { term: 'けんこう', romaji: 'kenkō', meaningVi: 'sức khỏe', pos: 'danh từ', exampleJa: 'まいにち はしって、けんこうに なりました。', exampleVi: 'Chạy mỗi ngày, tôi đã khỏe ra.' },
    { term: 'しあわせ', romaji: 'shiawase', meaningVi: 'hạnh phúc', pos: 'tính từ な', exampleJa: 'しあわせに なりますように。', exampleVi: 'Mong bạn sẽ hạnh phúc.' },
    { term: 'おみまい', romaji: 'omimai', meaningVi: 'việc thăm hỏi (người ốm)', pos: 'danh từ', exampleJa: 'せんせいの おみまいに いきます。', exampleVi: 'Tôi đi thăm thầy giáo (đang ốm).' },
    { term: 'ぶじ', romaji: 'buji', meaningVi: 'bình an, vô sự', pos: 'danh từ', exampleJa: '病気は ぶじに なおりました。', exampleVi: 'Cơn bệnh đã khỏi một cách bình an.' },
    { term: 'かないます', romaji: 'kanaimasu', meaningVi: '(mơ ước) thành hiện thực', pos: 'động từ nhóm 1', exampleJa: 'ゆめが かないますように。', exampleVi: 'Mong mơ ước thành hiện thực.' },
    { term: 'かちます', romaji: 'kachimasu', meaningVi: 'thắng (trận đấu, cuộc thi)', pos: 'động từ nhóm 1', exampleJa: 'あしたの しあいに かちます。', exampleVi: 'Tôi sẽ thắng trận đấu ngày mai.' },
    { term: 'がんばります', romaji: 'ganbarimasu', meaningVi: 'cố gắng, nỗ lực', pos: 'động từ nhóm 1', exampleJa: 'たいへんですが、がんばります。', exampleVi: 'Khó khăn đấy, nhưng tôi sẽ cố gắng.' },
    { term: 'ねがいます', romaji: 'negaimasu', meaningVi: 'cầu mong, mong ước', pos: 'động từ nhóm 1', exampleJa: 'ふたりの しあわせを ねがいます。', exampleVi: 'Tôi cầu mong hạnh phúc cho hai người.' },
    { term: 'いのります', romaji: 'inorimasu', meaningVi: 'cầu nguyện', pos: 'động từ nhóm 1', exampleJa: 'しあいに かつ ように いのります。', exampleVi: 'Tôi cầu nguyện để thắng trận đấu.' },
    { term: 'いわいます', romaji: 'iwaimasu', meaningVi: 'chúc mừng (sinh nhật…)', pos: 'động từ nhóm 1', exampleJa: 'ともだちと たんじょうびを いわいます。', exampleVi: 'Tôi tổ chức chúc mừng sinh nhật cùng bạn bè.' },
    { term: 'おだいじに', romaji: 'odaiji ni', meaningVi: 'chúc mau khỏe (khi thăm người ốm)', pos: 'lời chào', exampleJa: 'かぜですか。どうぞ おだいじに。', exampleVi: 'Bạn bị cảm à? Chúc bạn mau khỏe nhé.' },
    { term: 'おげんきで', romaji: 'ogenki de', meaningVi: 'chúc khỏe (lời tạm biệt)', pos: 'lời chào', exampleJa: 'さようなら。おげんきで。', exampleVi: 'Tạm biệt. Chúc bạn mạnh khỏe.' },
  ],
  grammar: [
    {
      code: 'l29-you-ni-purpose',
      title: '〜ように (mục đích) — "để mà, nhằm sao cho"',
      formation: 'V thể thường (khả năng / phủ định / trạng thái) + ように、＋ câu chính: はなせる ように / ひかない ように / わかる ように / おくれない ように',
      explanationVi:
        '〜ように diễn đạt MỤC ĐÍCH: hành động ở câu sau được làm NHẰM SAO CHO kết quả ở vế trước xảy ra. Dấu hiệu nhận diện quan trọng: động từ đứng trước ように thường là điều mình KHÔNG trực tiếp quyết định được — dạng khả năng (はなせる・よめる), dạng phủ định (ひかない・おくれない), hay động từ trạng thái (わかる・きこえる). Ví dụ: 「かぜを ひかない ように、きをつけて います」 — cẩn thận để "không bị cảm" (kết quả không chắc chắn). Cấu trúc này còn cho phép hai vế KHÁC chủ ngữ: 「こどもにも わかる ように、やさしく はなします」. Đối chiếu với ために (mục đích cho hành động CHỦ ĐỘNG, cùng chủ ngữ): 「ピアノを ひく ために、れんしゅうします」 (tự mình luyện) — nhưng với dạng khả năng thì KHÔNG dùng ために (không nói ひける ために) mà phải dùng ように: 「じょうずに ひける ように、れんしゅうします」.',
      examples: [
        { ja: 'にほんごを じょうずに はなせる ように、まいにち れんしゅうしています。', vi: 'Để nói tiếng Nhật giỏi, tôi luyện tập mỗi ngày.', tokens: ['にほんご', 'を', 'じょうずに', 'はなせる', 'ように', 'まいにち', 'れんしゅうしています'] },
        { ja: 'かぜを ひかない ように、きをつけて います。', vi: 'Tôi cẩn thận để không bị cảm.' },
        { ja: 'かいしゃに おくれない ように、あさ はやく おきます。', vi: 'Để không đến công ty trễ, tôi dậy sớm.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'ひきます → dạng đứng trước ように (phủ định)',
          sentence: 'かぜを ___ように、きをつけて います。',
          options: ['ひかない', 'ひきます', 'ひいて', 'ひいた'],
          answerIndex: 0, explanationVi: 'Vế mục đích trước ように dùng thể thường phủ định: ひかない ように. ます-form, て-form hay た-form đều không đứng trước ように.',
        },
        {
          kind: 'fill', prompt: 'Điền mẫu mục đích (Để nói giỏi, tôi luyện tập mỗi ngày)',
          sentence: 'じょうずに はなせる ___、まいにち れんしゅうしています。',
          options: ['ために', 'ように', 'こと', 'とき'],
          answerIndex: 1, explanationVi: 'はなせる là dạng KHẢ NĂNG — kết quả mình không trực tiếp kiểm soát → ように. ために chỉ đi với hành động chủ động cùng chủ ngữ (ひく ために) và không dùng với dạng khả năng.',
        },
        {
          kind: 'choice', prompt: '「かいしゃに おくれない ように、あさ はやく おきます。」 có nghĩa là gì?',
          options: ['Tôi dậy sớm nhưng vẫn trễ', 'Vì đi trễ nên tôi dậy sớm', 'Để không đi làm trễ, tôi dậy sớm', 'Tôi không muốn dậy sớm'],
          answerIndex: 2, explanationVi: 'おくれない ように = "nhằm để không trễ" — mục đích ở vế trước, hành động (dậy sớm) ở vế sau.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['じょうずに はなします ように、れんしゅうしています。', 'じょうずに はなせます ように、れんしゅうしています。', 'じょうずに はなして ように、れんしゅうしています。', 'じょうずに はなせる ように、れんしゅうしています。'],
          answerIndex: 3, explanationVi: 'Trước ように phải là THỂ THƯỜNG (bỏ ます): はなせる ように. ます-form (はなします・はなせます) và て-form (はなして) đều sai.',
        },
      ],
    },
    {
      code: 'l29-you-ni-naru',
      title: '〜ようになる・〜ようにする — thay đổi đạt mức & tự nhắc thói quen',
      formation: 'V khả năng/phủ định thể thường + ように なります: はなせる ように なりました / ひかない ように なりました; V thể thường + ように します: まいにち さんぽする ように して います',
      explanationVi:
        '〜ようになる chỉ SỰ THAY ĐỔI dẫn tới trạng thái mới "đã đến mức ~": 「にほんごが はなせる ように なりました」 = trước đây không nói được, nhờ luyện tập mà GIỜ NÓI ĐƯỢC. Dùng chủ yếu với động từ khả năng (はなせる・よめる) hoặc phủ định. Ngược lại, 〜ようにする là NỖ LỰC Ý THỨC của chính mình để biến việc gì thành THÓI QUEN: 「まいにち さんぽする ように して います」 = tôi duy trì thói quen đi dạo mỗi ngày (không tự nhiên mà có). Dạng hay gặp nhất là ように して います — "tôi vẫn duy trì / vẫn tự dặn". Mẹo phân biệt: ようになる = KẾT QUẢ tự đến ("trở nên có thể"); ようにする = CHỦ Ý của người nói ("dặn lòng làm").',
      examples: [
        { ja: 'にほんごが じょうずに はなせる ように なりました。', vi: 'Tôi đã nói tiếng Nhật giỏi (trước đây chưa).', tokens: ['にほんご', 'が', 'じょうずに', 'はなせる', 'ように', 'なりました'] },
        { ja: 'まいにち さんぽする ように して います。', vi: 'Tôi duy trì thói quen đi dạo mỗi ngày.' },
        { ja: 'いもうとは にほんごの まんがが よめる ように なりました。', vi: 'Em gái tôi đã đọc được manga tiếng Nhật.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'はなします → dạng khả năng + ようになる',
          sentence: 'やっと にほんごが ___ように なりました。',
          options: ['はなせる', 'はなします', 'はなして', 'はなった'],
          answerIndex: 0, explanationVi: 'ようになる đi với động từ KHẢ NĂNG thể thường: はなせる ように なりました = đã đến mức nói được. ます-form và て-form không đứng trước ように.',
        },
        {
          kind: 'fill', prompt: 'Điền mẫu "duy trì thói quen" (Tôi duy trì thói quen đi dạo mỗi ngày)',
          sentence: 'まいにち さんぽする ___ して います。',
          options: ['こと', 'とき', 'ように', 'ところ'],
          answerIndex: 2, explanationVi: 'Tự dặn/duy trì việc gì thành thói quen → V thể thường + ように して います. こと・とき・ところ không ghép được với して います theo nghĩa này.',
        },
        {
          kind: 'choice', prompt: '「まいにち さんぽする ように して います。」 nghĩa là gì?',
          options: ['Tôi sắp đi dạo mỗi ngày', 'Tôi bị bắt đi dạo mỗi ngày', 'Tôi vừa đi dạo xong', 'Tôi duy trì thói quen đi dạo mỗi ngày'],
          answerIndex: 3, explanationVi: 'ように して います = nỗ lực ý thức duy trì thói quen, không phải việc tự nhiên xảy ra (ようになる) cũng không phải việc bị bắt buộc.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['いもうとは まんがが よめます ように なりました。', 'いもうとは まんがが よんで ように なりました。', 'いもうとは まんがが よめる ように なりました。', 'いもうとは まんがが よめました ように なりました。'],
          answerIndex: 2, explanationVi: 'ようになる ghép với động từ khả năng THỂ THƯỜNG: よめる ように なりました. ます-form (よめます), て-form (よんで) đều sai trước ように.',
        },
      ],
    },
    {
      code: 'l29-you-ni-negai',
      title: '〜ように (cầu mong) — lời chúc, lời cầu nguyện',
      formation: 'V thể thường + ように + がんばります / いのります / ねがいます; lời chúc độc lập cuối câu: 「かないますように。」; N・な-adj: 〜に なります ように: ぶじに なりますように',
      explanationVi:
        'ように còn đóng vai trò CẦU MONG: đặt điều mong ước ở vế trước, vế sau là がんばります・いのります・ねがいます: 「しあいに かつ ように がんばります」 = cố gắng NHẰM THẮNG trận. Đặc biệt, khi ように đứng CUỐI CÂU một mình, nó trở thành LỜI CHÚC hoàn chỉnh: 「ゆめが かないますように」 = mong mơ ước thành hiện thực; 「しあわせに なりますように」 = chúc bạn hạnh phúc. Với danh từ / tính từ な, lấy dạng [〜になりますように]: 「ぶじに なりますように」・「けんこうに なる ように」. Đây là mẫu câu cầu ở đền, lời chúc thi cử — thi đấu — thăm người ốm; kèm おだいじに khi chúc người ốm mau khỏe, おげんきで khi tạm biệt.',
      examples: [
        { ja: 'しあいに かつ ように がんばります。', vi: 'Tôi sẽ cố gắng để thắng trận đấu.', tokens: ['しあい', 'に', 'かつ', 'ように', 'がんばります'] },
        { ja: 'ゆめが かないますように。', vi: 'Mong rằng mơ ước sẽ thành hiện thực.' },
        { ja: 'はやく けんこうに なる ように、いのっています。', vi: 'Tôi cầu mong bạn sớm khỏe lại.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Chọn trợ từ (thắng TRONG trận đấu)',
          sentence: 'しあい___ かつ ように がんばります。',
          options: ['に', 'で', 'を', 'へ'],
          answerIndex: 0, explanationVi: 'かちます lấy trợ từ に cho đích đến của chiến thắng: しあいに かちます. で chỉ nơi diễn ra hành động; を・へ không dùng ở đây.',
        },
        {
          kind: 'conjugate', prompt: 'かないます → dạng đứng trước ように',
          sentence: 'ゆめが ___ように がんばります。',
          options: ['かないます', 'かなう', 'かなって', 'かなった'],
          answerIndex: 1, explanationVi: 'Trước ように dùng thể thường (bỏ ます): かなう ように. ます-form, て-form, た-form đều sai.',
        },
        {
          kind: 'choice', prompt: 'Khi thăm người ốm, câu chúc phù hợp là câu nào?',
          options: ['いただきます。', 'はやく なおりますように。', 'おやすみなさい。', 'はじめまして。'],
          answerIndex: 1, explanationVi: 'Chúc người ốm mau khỏe dùng 〜ますように: はやく なおりますように. いただきます (trước ăn), おやすみなさい (đêm khuya), はじめまして (gặp lần đầu) đều lệch ngữ cảnh.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['しあいに かちます ように がんばります。', 'しあいに かって ように がんばります。', 'しあいに かった ように がんばります。', 'しあいに かつ ように がんばります。'],
          answerIndex: 3, explanationVi: 'Vế mong ước trước ように phải là THỂ THƯỜNG: かつ ように. かちます (ます-form), かって (て-form), かった (quá khứ) đều sai.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Thăm bạn ốm',
      situationVi: 'Linh mang hoa đến thăm Min đang bị cảm ở nhà.',
      lines: [
        { speaker: 'リン', ja: 'ミンさん、こんにちは。だいじょうぶですか。', vi: 'Min ơi, chào bạn. Bạn ổn chứ?' },
        { speaker: 'ミン', ja: 'リンさん、こんにちは。ええ、すこし いいです。', vi: 'Linh, chào bạn. Ừ, tôi đỡ rồi.' },
        { speaker: 'リン', ja: 'そうですか。よかったです。おみまいに きました。これは はなです。', vi: 'Vậy à. May quá. Tôi đến thăm bạn. Đây là hoa.' },
        { speaker: 'ミン', ja: 'わあ、ありがとう ございます。きのう、病院へ いきました。', vi: 'Ồ, cảm ơn bạn. Hôm qua tôi đã đi bệnh viện.' },
        { speaker: 'リン', ja: 'そうですか。くすりを もらいましたか。', vi: 'Vậy à. Bạn được cho thuốc chứ?' },
        { speaker: 'ミン', ja: 'ええ、まいにち のんで います。かぜを ひかない ように、きをつけて います。', vi: 'Ừ, tôi uống mỗi ngày. Tôi cẩn thận để không bị cảm lại.' },
        { speaker: 'リン', ja: 'いいですね。はやく けんこうに なる ように、いのります。', vi: 'Tốt đấy. Tôi cầu mong bạn sớm khỏe lại.' },
        { speaker: 'ミン', ja: 'ありがとうございます。', vi: 'Cảm ơn bạn.' },
        { speaker: 'リン', ja: 'じゃあ、かえりますね。どうぞ おだいじに。', vi: 'Vậy tôi về nhé. Chúc bạn mau khỏe.' },
        { speaker: 'ミン', ja: 'はい。リンさんも おげんきで。', vi: 'Vâng. Bạn cũng giữ gìn sức khỏe nhé.' },
      ],
    },
    {
      titleVi: 'Nói về mơ ước',
      situationVi: 'Ở quán cà phê, Min và Linh kể về mơ ước và mục tiêu của mình.',
      lines: [
        { speaker: 'ミン', ja: 'リンさんの ゆめは なんですか。', vi: 'Mơ ước của Linh là gì?' },
        { speaker: 'リン', ja: 'わたしの ゆめは にほんで はたらく ことです。', vi: 'Mơ ước của tôi là làm việc ở Nhật.' },
        { speaker: 'ミン', ja: 'そうですか。にほんごが じょうずですね。', vi: 'Vậy à. Tiếng Nhật của bạn giỏi nhỉ.' },
        { speaker: 'リン', ja: 'いいえ、まだ へたです。じょうずに はなせる ように、まいにち れんしゅうしています。', vi: 'Đâu, tôi còn vụng lắm. Để nói giỏi, tôi luyện tập mỗi ngày.' },
        { speaker: 'ミン', ja: 'すごいですね。ことしの もくひょうは なんですか。', vi: 'Giỏi ghê. Mục tiêu năm nay của bạn là gì?' },
        { speaker: 'リン', ja: 'テニスの しあいに かつ ことです。', vi: 'Là thắng trận đấu tennis.' },
        { speaker: 'ミン', ja: 'がんばって ください。しあいに かつ ように いのります。', vi: 'Cố lên nhé. Tôi cầu nguyện để bạn thắng trận.' },
        { speaker: 'リン', ja: 'ありがとうございます。ミンさんの ゆめは なんですか。', vi: 'Cảm ơn bạn. Còn mơ ước của Min là gì?' },
        { speaker: 'ミン', ja: 'わたしの ゆめは あたらしい かいしゃを つくる ことです。', vi: 'Mơ ước của tôi là thành lập công ty mới.' },
        { speaker: 'リン', ja: 'すごいですね。ゆめが かないますように。', vi: 'Tài ghê. Mong mơ ước bạn thành hiện thực.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'にほんごが はなせる ように なりました。', meaningVi: 'Tôi đã nói được tiếng Nhật.', choices: ['Tôi đã nói được tiếng Nhật', 'Tôi sắp học nói tiếng Nhật', 'Tôi muốn nói tiếng Nhật', 'Tôi không nói được tiếng Nhật'], answerIndex: 0, dictation: true },
    { scriptJa: 'かぜを ひかない ように、きをつけて います。', meaningVi: 'Tôi cẩn thận để không bị cảm.', choices: ['Tôi bị cảm rồi', 'Tôi cẩn thận để không bị cảm', 'Tôi không thích uống thuốc cảm', 'Tôi bị cảm nhưng vẫn đi làm'], answerIndex: 1, dictation: true },
    { scriptJa: 'しあいに かつ ように がんばります。', meaningVi: 'Tôi sẽ cố gắng để thắng trận đấu.', choices: ['Tôi đã thắng trận đấu', 'Tôi thua trận đấu rồi', 'Tôi sẽ cố gắng để thắng trận đấu', 'Tôi xem trận đấu trên TV'], answerIndex: 2 },
    { scriptJa: 'ゆめが かないますように。', meaningVi: 'Mong rằng mơ ước sẽ thành hiện thực.', choices: ['Mơ ước đã thành hiện thực', 'Tôi không còn mơ ước', 'Tôi kể mơ ước cho bạn nghe', 'Mong rằng mơ ước sẽ thành hiện thực'], answerIndex: 3 },
    { scriptJa: 'あさ はやく おきる ように して います。', meaningVi: 'Tôi duy trì thói quen dậy sớm.', choices: ['Tôi duy trì thói quen dậy sớm', 'Tôi dậy sớm một lần rồi thôi', 'Tôi không thể dậy sớm', 'Tôi phải dậy sớm hôm nay'], answerIndex: 0 },
  ],
  reading: {
    titleVi: 'Mơ ước của ba người',
    lines: [
      { text: 'リンさんの ゆめは にほんで はたらく ことです。', vi: 'Mơ ước của Linh là làm việc ở Nhật.' },
      { text: 'じょうずに はなせる ように、まいにち にほんごを べんきょうしています。', vi: 'Để nói giỏi, Linh học tiếng Nhật mỗi ngày.' },
      { text: 'ミンさんの ゆめは あたらしい かいしゃを つくる ことです。', vi: 'Mơ ước của Min là thành lập công ty mới.' },
      { text: 'ミンさんは パソコンの べんきょうも して います。', vi: 'Min cũng học máy tính.' },
      { text: 'たなかさんの ゆめは おいしい レストランを つくる ことです。', vi: 'Mơ ước của Tanaka là mở một nhà hàng ngon.' },
      { text: 'たなかさんは まいにち りょうりを れんしゅうしています。', vi: 'Tanaka luyện nấu ăn mỗi ngày.' },
      { text: 'ことしの もくひょうは たかいですが、さんにんは がんばります。', vi: 'Mục tiêu năm nay cao, nhưng ba người đều cố gắng.' },
      { text: 'ゆめが かないますように。', vi: 'Mong rằng mơ ước sẽ thành hiện thực.' },
    ],
    questions: [
      { questionVi: 'Mơ ước của Linh là gì?', choices: ['Làm việc ở Nhật', 'Mở nhà hàng', 'Thành lập công ty', 'Làm giáo viên'], answerIndex: 0, explanationVi: 'Câu 1: ゆめは にほんで はたらく ことです — dùng danh từ hóa こと (bài 28).' },
      { questionVi: 'Tanaka luyện tập gì mỗi ngày?', choices: ['Nấu ăn', 'Tiếng Nhật', 'Máy tính', 'Đánh tennis'], answerIndex: 0, explanationVi: 'Câu 6: まいにち りょうりを れんしゅうしています — Tanaka luyện nấu ăn để mở nhà hàng (câu 5).' },
      { questionVi: 'Câu cuối 「ゆめが かないますように。」 là lời gì?', choices: ['Lời cầu mong mơ ước thành hiện thực', 'Lời hứa bán nhà', 'Câu hỏi về mơ ước', 'Lời từ chối giúp đỡ'], answerIndex: 0, explanationVi: 'ように đứng cuối câu một mình là lời chúc / cầu nguyện: mong điều ở vế trước thành sự thật.' },
    ],
  },
  speakSentences: [
    { ja: 'にほんごが はなせる ように なりました。', vi: 'Tôi đã nói được tiếng Nhật.' },
    { ja: 'かぜを ひかない ように、きをつけて います。', vi: 'Tôi cẩn thận để không bị cảm.' },
    { ja: 'しあいに かつ ように がんばります。', vi: 'Tôi sẽ cố gắng để thắng trận đấu.' },
    { ja: 'ゆめが かないますように。', vi: 'Mong rằng mơ ước sẽ thành hiện thực.' },
  ],
  translatePairs: [
    { ja: 'にほんごが はなせる ように なりました。', vi: 'Tôi đã nói được tiếng Nhật.', tokens: ['にほんご', 'が', 'はなせる', 'ように', 'なりました'], distractors: ['はなします'] },
    { ja: 'かぜを ひかない ように、きをつけて います。', vi: 'Tôi cẩn thận để không bị cảm.', tokens: ['かぜ', 'を', 'ひかない', 'ように', 'きをつけて', 'います'], distractors: ['ひきます'] },
    { ja: 'しあいに かつ ように がんばります。', vi: 'Tôi sẽ cố gắng để thắng trận đấu.', tokens: ['しあい', 'に', 'かつ', 'ように', 'がんばります'], distractors: ['かちます'] },
    { ja: 'ゆめが かないますように。', vi: 'Mong rằng mơ ước sẽ thành hiện thực.', tokens: ['ゆめ', 'が', 'かないます', 'ように'], distractors: ['を'] },
    { ja: 'あさ はやく おきる ように して います。', vi: 'Tôi duy trì thói quen dậy sớm.', tokens: ['あさ', 'はやく', 'おきる', 'ように', 'して', 'います'], distractors: ['おきます'] },
  ],
  kanji: ['様', '病', '夢'],
}
