/**
 * NihongoGo — Bài 34: Kính ngữ khiêm nhường — 謙譲語.
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson34: CurriculumLesson = {
  order: 34,
  slug: 'l34-kinh-ngu-khiem-nhuong',
  title: 'Kính ngữ khiêm nhường — 謙譲語',
  titleJa: '謙譲語',
  description: 'Hạ thấp hành động của chính mình để tỏ ra khiêm tốn với người nghe.',
  learningObjectives: [
    'Dùng các động từ khiêm nhường thông dụng',
    'Dùng mẫu お〜する',
    'Giao tiếp với khách hàng',
  ],
  grammarTopics: ['Động từ khiêm nhường thông dụng', 'Mẫu お〜する'],
  vocabularyTopics: ['Giao tiếp khách hàng', 'Lời chào trang trọng'],
  kanjiTopics: ['Kanji khiêm nhường (参・致・承)'],
  difficulty: 'ELEMENTARY',
  vocabulary: [
    { term: 'おあいします', romaji: 'oaimashimasu', meaningVi: 'gặp (người trên) — khiêm nhường của あいます', pos: 'động từ khiêm nhường', exampleJa: 'あした おきゃくさまと おあいします。', exampleVi: 'Ngày mai tôi gặp quý khách.' },
    { term: 'もうします', romaji: 'mōshimasu', meaningVi: 'xưng (tên), nói — khiêm nhường của いいます', pos: 'động từ khiêm nhường', exampleJa: 'わたしは ヤマダと もうします。', exampleVi: 'Tôi tên là Yamada.' },
    { term: '申し上げます', reading: 'もうしあげます', romaji: 'mōshiagemasu', meaningVi: 'bày tỏ, nói — khiêm nhường cao của いいます', pos: 'động từ khiêm nhường', exampleJa: 'どうぞ よろしく 申し上げます。', exampleVi: 'Kính mong ngài giúp đỡ.' },
    { term: '致します', reading: 'いたします', romaji: 'itashimasu', meaningVi: 'làm — khiêm nhường của します', pos: 'động từ khiêm nhường', exampleJa: 'その しごとを わたしが 致します。', exampleVi: 'Việc đó để tôi làm.' },
    { term: '参ります', reading: 'まいります', romaji: 'mairimasu', meaningVi: 'đi, đến — khiêm nhường của いきます・きます', pos: 'động từ khiêm nhường', exampleJa: 'わたしは 十じに 御社へ 参ります。', exampleVi: 'Lúc 10 giờ tôi sẽ đến quý công ty.' },
    { term: 'はいけんします', romaji: 'haikenshimasu', meaningVi: 'xem — khiêm nhường của みます', pos: 'động từ khiêm nhường', exampleJa: 'きょうの ごご カタログを はいけんします。', exampleVi: 'Chiều nay tôi sẽ xem catalogue.' },
    { term: 'さしあげます', romaji: 'sashiagemasu', meaningVi: 'tặng, dâng — khiêm nhường của あげます', pos: 'động từ khiêm nhường', exampleJa: 'この ほんを せんせいに さしあげます。', exampleVi: 'Tôi tặng cuốn sách này cho cô giáo.' },
    { term: 'いただきます', romaji: 'itadakimasu', meaningVi: 'nhận (từ người trên) — khiêm nhường của もらいます', pos: 'động từ khiêm nhường', exampleJa: 'あした せんせいに てがみを いただきます。', exampleVi: 'Ngày mai tôi nhận thư của cô giáo.' },
    { term: 'ぞんじています', romaji: 'zonjiteimasu', meaningVi: 'biết (về người/việc) — khiêm nhường của しっています', pos: 'động từ khiêm nhường', exampleJa: 'おなまえは よく ぞんじています。', exampleVi: 'Tôi biết rõ tên ngài.' },
    { term: 'いただけます', romaji: 'itadakemasu', meaningVi: 'được (ngài) làm cho — gốc của 〜ていただけますか', pos: 'động từ khiêm nhường', exampleJa: 'でんわばんごうを おしえて いただけますか。', exampleVi: 'Xin ngài cho biết số điện thoại được không ạ?' },
    { term: 'おまちします', romaji: 'omachishimasu', meaningVi: 'chờ (ngài) — khiêm nhường của まちます', pos: 'động từ khiêm nhường', exampleJa: 'ロビーで おまちします。', exampleVi: 'Tôi sẽ chờ ngài ở sảnh.' },
    { term: 'おもちします', romaji: 'omochishimasu', meaningVi: 'mang (giúp ngài) — khiêm nhường của もちます', pos: 'động từ khiêm nhường', exampleJa: 'にもつを おもちします。', exampleVi: 'Hành lý để tôi mang cho ngài.' },
    { term: 'おとどけします', romaji: 'otodokeshimasu', meaningVi: 'giao tận tay, mang đến — khiêm nhường của とどけます', pos: 'động từ khiêm nhường', exampleJa: 'おへやへ メニューを おとどけします。', exampleVi: 'Tôi sẽ mang thực đơn đến phòng ngài.' },
    { term: 'ごあんないします', romaji: 'goannaishimasu', meaningVi: 'hướng dẫn, dẫn đường (cho ngài)', pos: 'động từ khiêm nhường', exampleJa: 'かいぎしつへ ごあんないします。', exampleVi: 'Tôi xin hướng dẫn ngài tới phòng họp.' },
    { term: '参加します', reading: 'さんかします', romaji: 'sankashimasu', meaningVi: 'tham gia', pos: 'động từ nhóm 3', exampleJa: 'らいしゅうの かいぎに 参加します。', exampleVi: 'Tôi tham gia cuộc họp tuần sau.' },
    { term: '承知しました', reading: 'しょうちしました', romaji: 'shōchishimashita', meaningVi: 'đã rõ, xin vâng (nhận lời)', pos: 'động từ nhóm 3 (khiêm nhường)', exampleJa: 'はい、承知しました。', exampleVi: 'Vâng, tôi đã rõ ạ.' },
    { term: 'めいし', romaji: 'meishi', meaningVi: 'danh thiếp, thẻ giới thiệu', pos: 'danh từ', exampleJa: 'はじめまして。わたしの めいしです。', exampleVi: 'Rất hân hạnh. Đây là danh thiếp của tôi.' },
    { term: 'しりょう', romaji: 'shiryō', meaningVi: 'tài liệu', pos: 'danh từ', exampleJa: 'かいぎの しりょうを はいけんしました。', exampleVi: 'Tôi đã xem tài liệu cuộc họp.' },
    { term: 'よやく', romaji: 'yoyaku', meaningVi: 'việc đặt trước (phòng, vé)', pos: 'danh từ', exampleJa: 'ホテルの よやくを しました。', exampleVi: 'Tôi đã đặt phòng khách sạn.' },
    { term: 'おみやげ', romaji: 'omiyage', meaningVi: 'quà lưu niệm, quà mang về', pos: 'danh từ', exampleJa: 'おみやげに おちゃを さしあげます。', exampleVi: 'Tôi tặng trà làm quà lưu niệm.' },
    { term: 'ごしつもん', romaji: 'goshitsumon', meaningVi: 'câu hỏi (cách nói lịch sự)', pos: 'danh từ (kính)', exampleJa: 'ごしつもんが あれば、メールを ください。', exampleVi: 'Nếu có câu hỏi, xin gửi email.' },
  ],
  grammar: [
    {
      code: 'l34-kenjougo-doushi',
      title: 'Động từ khiêm nhường thông dụng — おあいします・もうします・いたします・まいります',
      formation: 'あいます → おあいします / いいます → もうします / します → いたします（致します） / いきます・きます → まいります（参ります） / みます → はいけんします / あげます → さしあげます / もらいます → いただきます / しっています → ぞんじています',
      explanationVi:
        '謙譲語 (kính ngữ khiêm nhường) là "hạ CHÍNH MÌNH xuống" — đối trọng của 尊敬語 (bài 33 nâng người khác lên): khi nói về hành động CỦA MÌNH (hoặc phe mình) với khách hàng, cấp trên, ta thay động từ thường bằng dạng khiêm nhường — あいます → おあいします, いいます → もうします, します → いたします, いきます・きます → まいります, みます → はいけんします, あげます → さしあげます, もらいます → いただきます, しっています → ぞんじています. もうします chủ yếu dùng xưng tên: 「ヤマダと もうします】. さしあげます・いただきます ghép trợ từ giống あげます・もらいます: 「せんせいに さしあげます」「せんせいに いただきます」. Nhớ: hành động của KHÁCH vẫn dùng 尊敬語 — tuyệt đối không trộn hai chiều.',
      examples: [
        { ja: 'わたしは ABCホテルの リンと もうします。', vi: 'Tôi là Lin của khách sạn ABC.', tokens: ['わたし', 'は', 'ABCホテル', 'の', 'リン', 'と', 'もうします'] },
        { ja: 'これは せんせいに さしあげます。', vi: 'Cái này tôi xin tặng cô giáo.' },
        { ja: 'カタログは もう はいけんしました。', vi: 'Catalogue tôi đã xem rồi.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'いきます → dạng khiêm nhường (dạng ます)',
          sentence: 'わたしは あした おおさかへ ___。',
          options: ['まいります', 'いらっしゃいます', 'おいきに なります', 'いかれます'],
          answerIndex: 0, explanationVi: 'Mình đi → まいります. いらっしゃいます・おいきに なります là tôn trọng — dành cho hành động của NGƯỜI KHÁC; いかれます là dạng khả năng.',
        },
        {
          kind: 'fill', prompt: 'Điền dạng khiêm nhường của みます (Hôm qua tôi đã xem catalogue)',
          sentence: 'きのう カタログを ___。',
          options: ['はいけんしました', 'ごらんに なりました', 'みなさいました', 'おみに なりました'],
          answerIndex: 0, explanationVi: 'Khiêm nhường của みます là はいけんします. ごらんに なりました là tôn trọng — dùng khi NGƯỜI KHÁC xem; hai dạng còn lại không tồn tại.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['その しごとを わたしが いたします。', 'その しごとを わたしが なさいます。', 'その しごとを わたしが いらっしゃいます。', 'その しごとを わたしが ごらんに なります。'],
          answerIndex: 0, explanationVi: 'Chủ ngữ là わたし → khiêm nhường いたします. なさいます・いらっしゃいます・ごらんに なります đều là tôn trọng — chỉ dùng cho hành động của người khác.',
        },
        {
          kind: 'choice', prompt: '「せんせいに とけいを いただきました。」 — ai là người NHẬN đồng hồ?',
          options: ['Tôi — được cô giáo tặng', 'Cô giáo — được tôi tặng', 'Tôi đã bán đồng hồ', 'Cô giáo mua đồng hồ mới'],
          answerIndex: 0, explanationVi: 'いただきました = もらいました (khiêm nhường) — chủ ngữ là TÔI, người cho đánh dấu bằng に. Nếu tôi tặng thì dùng さしあげます.',
        },
      ],
    },
    {
      code: 'l34-o-suru',
      title: 'Mẫu お〜する・ご〜する — khiêm nhường bằng cách bọc động từ',
      formation: 'お + thân động từ nhóm 1・2 + します: まちます → おまちします / もちます → おもちします / とどけます → おとどけします; ご + danh từ Hán + します: あんない → ごあんないします / れんらく → ごれんらくします',
      explanationVi:
        'Với động từ chưa có dạng khiêm nhường đặc biệt, bọc bằng お〜する (động từ nhóm 1・2: lấy お + thân ます + します) hoặc ご〜する (danh từ gốc Hán + します): おまちします (tôi xin chờ), おもちします (để tôi mang), おとどけします (tôi mang đến), ごあんないします (tôi xin hướng dẫn). Đây là mẫu đối xứng với お〜になる của bài 33: お〜になる nâng NGƯỜI KHÁC (ngài làm), お〜する hạ MÌNH (tôi làm cho ngài). Câu mời lịch sự 「どうぞ おすわりください」「おまちください」 cũng nằm trong họ này nhưng là mời NGƯỜI KHÁC làm — đừng lẫn với お〜します của chính mình. Lưu ý: động từ thuần đi với お, danh từ Hán đi với ご — giống quy tắc tiền tố của bài 33.',
      examples: [
        { ja: 'ロビーで おまちします。', vi: 'Tôi sẽ chờ ngài ở sảnh.', tokens: ['ロビー', 'で', 'おまちします'] },
        { ja: 'にもつを おもちします。', vi: 'Hành lý để tôi mang cho ngài.' },
        { ja: 'かいぎしつへ ごあんないします。', vi: 'Tôi xin hướng dẫn ngài tới phòng họp.' },
      ],
      drills: [
        {
          kind: 'fill', prompt: 'Điền tiền tố đúng (Tôi xin hướng dẫn ngài tới phòng họp)',
          sentence: 'かいぎしつへ ___あんないします。',
          options: ['ご', 'お', 'もう', 'さん'],
          answerIndex: 0, explanationVi: 'あんない là danh từ gốc Hán → ご + あんない + します = ごあんないします. お chỉ đi với từ thuần Nhật.',
        },
        {
          kind: 'choice', prompt: '「にもつを おもちします。」 có nghĩa là gì?',
          options: ['Hành lý để tôi mang cho ngài', 'Ngài hãy tự mang hành lý', 'Hành lý đã được mang lên rồi', 'Tôi đã làm mất hành lý'],
          answerIndex: 0, explanationVi: 'おもちします = もちます (khiêm nhường) — người MANG là TÔI, làm cho ngài. Nếu ngài tự mang thì nói おもちに なります.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['にもつは わたしが おもちします。', 'にもつは わたしが おもちに なります。', 'にもつは わたしが ごもちします。', 'にもつは わたしが もちなさいます。'],
          answerIndex: 0, explanationVi: 'Người mang là tôi → おもちします (khiêm nhường). おもちに なります là "ngài mang" — tôn trọng; ご sai vì もち là từ thuần; もちなさいます không tồn tại.',
        },
        {
          kind: 'choice', prompt: 'Bạn là nhân viên, muốn mời KHÁCH ngồi. Câu nào đúng?',
          options: ['どうぞ おすわりください。', 'どうぞ おすわりします。', 'どうぞ おすわりもうします。', 'すわりたいです。'],
          answerIndex: 0, explanationVi: 'Mời NGƯỜI KHÁC làm → お〜ください: どうぞ おすわりください. おすわりします là "tôi ngồi" (khiêm nhường); すわりたいです là "tôi muốn ngồi" — không phải lời mời.',
        },
      ],
    },
    {
      code: 'l34-te-itadakemasu',
      title: '〜ていただけますか — xin ai đó làm gì giúp mình',
      formation: 'Vて + いただけますか: おしえて いただけますか / かいて いただけますか / おまち いただけますか; lịch sự hơn: Vて + いただけませんか',
      explanationVi:
        'Mẫu xin lịch sự nhất của chương trình: LẤY động từ thể て (đã học từ bài 22) cộng いただけますか — 「もういちど おしえて いただけますか」 = "Xin ngài dạy lại một lần nữa được không ạ?". Vì いただく là khiêm nhường của もらう, câu tự hạ mình xuống ("tôi xin được nhận hành động của ngài"), nên rất lịch sự — dùng để nhờ KHÁCH HÀNG hoặc CẤP TRÊN làm gì. Dạng phủ định nghi vấn 〜ていただけませんか còn mềm mại hơn nữa. Phân biệt với 〜てください (mệnh lệnh nhẹ — dùng với bạn bè, em nhỏ) và 〜てくれますか (với người ngang hàng thân quen): người càng trên càng nên dùng いただけますか. Câu trả lời thường gặp: 「はい、いいですよ」「もちろんです」.',
      examples: [
        { ja: 'もういちど おしえて いただけますか。', vi: 'Xin ngài dạy lại một lần nữa được không ạ?', tokens: ['もういちど', 'おしえて', 'いただけますか'] },
        { ja: 'ここに おなまえを かいて いただけますか。', vi: 'Xin ngài viết tên vào đây ạ?' },
        { ja: 'すこし おまち いただけませんか。', vi: 'Xin ngài đợi một chút được không ạ?' },
      ],
      drills: [
        {
          kind: 'fill', prompt: 'Điền đúng (Xin ngài cho biết số điện thoại)',
          sentence: 'でんわばんごうを おしえて ___か。',
          options: ['いただけます', 'いただきます', 'もらいます', 'さしあげます'],
          answerIndex: 0, explanationVi: 'Nhờ người trên làm giúp mình → Vて + いただけますか. いただきます là "nhận" — không đứng sau て; さしあげます là "tôi tặng".',
        },
        {
          kind: 'choice', prompt: '「もういちど かいて いただけますか。」 có nghĩa là gì?',
          options: ['Xin ngài viết lại một lần nữa được không ạ?', 'Tôi sẽ viết lại một lần nữa', 'Tôi đã viết xong rồi', 'Mời ngài viết ít thôi nhé'],
          answerIndex: 0, explanationVi: 'かいて (thể て của かきます) + いただけますか = xin NGƯỜI KHÁC viết giúp mình — lời nhờ rất lịch sự.',
        },
        {
          kind: 'choice', prompt: 'Muốn nhờ CẤP TRÊN gửi email — câu nào đúng?',
          options: ['メールを おくって いただけますか。', 'メールを おくって あげますか。', 'メールが おくられますか。', 'メールを おくりたいですか。'],
          answerIndex: 0, explanationVi: 'おくって + いただけますか = xin ngài gửi giúp. あげます là mình làm cho người khác; おくりたいですか là "anh muốn gửi à?" — hỏi, không phải lời xin.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['すこし おまち いただけますか。', 'すこし おまち いただきます。', 'すこし おまちに なりますか。', 'すこし まって さしあげます。'],
          answerIndex: 0, explanationVi: 'Xin ngài chờ → おまち(して) + いただけますか. いただきます = tôi nhận — sai chỗ; おまちに なりますか = "ngài có chờ không?" — không phải lời xin; さしあげます = tôi tặng.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Lễ tân đón khách mới đến',
      situationVi: 'Nhân viên mới Lin đón khách Yamada tại lễ tân khách sạn, dùng kính ngữ khiêm nhường.',
      lines: [
        { speaker: 'リン', ja: 'いらっしゃいませ。はじめまして。フロントの リンと もうします。', vi: 'Xin chào mừng ngài. Rất hân hạnh. Tôi là Lin ở lễ tân.' },
        { speaker: 'ヤマダ', ja: 'はじめまして。ヤマダです。よやくして います。', vi: 'Rất hân hạnh. Tôi là Yamada. Tôi có đặt phòng.' },
        { speaker: 'リン', ja: 'はい、ヤマダさまですね。おへやは 五かいです。にもつは わたしが おもちします。', vi: 'Vâng, ngài Yamada phải không ạ. Phòng ở tầng năm. Hành lý để tôi mang cho ngài.' },
        { speaker: 'ヤマダ', ja: 'ありがとう ございます。', vi: 'Xin cảm ơn.' },
        { speaker: 'リン', ja: 'エレベーターは こちらです。ごあんないします。', vi: 'Thang máy bên này. Tôi xin hướng dẫn ngài.' },
        { speaker: 'ヤマダ', ja: 'レストランは なんじまでですか。', vi: 'Nhà hàng mở đến mấy giờ?' },
        { speaker: 'リン', ja: '九じまでです。メニューも おへやへ おとどけします。', vi: 'Đến 9 giờ ạ. Tôi cũng sẽ mang thực đơn đến phòng ngài.' },
        { speaker: 'ヤマダ', ja: 'じゃあ、おへやで まって います。', vi: 'Vậy tôi sẽ chờ ở phòng.' },
        { speaker: 'リン', ja: 'はい、では、おさきに まいります。', vi: 'Vâng, vậy tôi sẽ lên phòng trước ạ.' },
      ],
    },
    {
      titleVi: 'Nhờ trưởng phòng xem tài liệu',
      situationVi: 'Nhân viên Lin báo công việc với trưởng phòng Tanaka và chuẩn bị đón khách.',
      lines: [
        { speaker: 'リン', ja: 'たなかぶちょう、おはよう ございます。', vi: 'Trưởng phòng Tanaka, chào buổi sáng ạ.' },
        { speaker: 'たなか', ja: 'おはよう。リンさん、その しりょうは もう できましたか。', vi: 'Chào nhé. Lin, tài liệu đó đã xong chưa?' },
        { speaker: 'リン', ja: 'はい、できました。ちょっと みて いただけますか。', vi: 'Vâng, xong rồi ạ. Anh xem giúp em một chút được không ạ?' },
        { speaker: 'たなか', ja: 'ええ、いいですよ。', vi: 'Ừ, được chứ.' },
        { speaker: 'リン', ja: 'ありがとうございます。それから、あした キムさまと おあいします。', vi: 'Em cảm ơn ạ. Và rồi, ngày mai em sẽ gặp ngài Kim.' },
        { speaker: 'たなか', ja: 'どこで あいますか。', vi: 'Gặp ở đâu?' },
        { speaker: 'リン', ja: 'ホテルの ロビーで おあいします。九じはんに まいります。', vi: 'Em gặp ở sảnh khách sạn. Em sẽ đến lúc 9 rưỡi.' },
        { speaker: 'たなか', ja: 'そうですか。おみやげは なにが いいと おもいますか。', vi: 'Vậy à. Còn quà thì em nghĩ thứ gì là hợp?' },
        { speaker: 'リン', ja: 'おちゃは どうですか。', vi: 'Trà thì sao ạ?' },
        { speaker: 'たなか', ja: 'いいですね。おちゃを さしあげましょう。', vi: 'Tốt đấy. Vậy thì tặng trà nhé.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'わたしは ABCホテルの リンと もうします。', meaningVi: 'Tôi là Lin của khách sạn ABC.', choices: ['Tôi là Lin của khách sạn ABC', 'Khách sạn ABC tên là Lin', 'Tôi muốn đặt phòng khách sạn ABC', 'Lin là khách của khách sạn ABC'], answerIndex: 0, dictation: true },
    { scriptJa: '御社の カタログを はいけんしました。', meaningVi: 'Tôi đã xem catalogue của quý công ty.', choices: ['Tôi đã xem catalogue của quý công ty', 'Xin quý công ty xem catalogue', 'Tôi sẽ gửi catalogue cho quý công ty', 'Catalogue của quý công ty rất đẹp'], answerIndex: 0, dictation: true },
    { scriptJa: 'にもつは わたしが おもちします。', meaningVi: 'Hành lý để tôi mang cho ngài.', choices: ['Hành lý để tôi mang cho ngài', 'Ngài hãy tự mang hành lý', 'Hành lý đã được mang lên rồi', 'Tôi đã làm mất hành lý'], answerIndex: 0 },
    { scriptJa: 'もういちど おしえて いただけますか。', meaningVi: 'Xin ngài dạy lại một lần nữa được không ạ?', choices: ['Xin ngài dạy lại một lần nữa được không ạ?', 'Tôi sẽ dạy lại một lần nữa', 'Tôi đã học xong bài đó rồi', 'Xin lỗi vì đã hỏi nhiều'], answerIndex: 0 },
    { scriptJa: 'せんせいに とけいを いただきました。', meaningVi: 'Tôi được cô giáo tặng đồng hồ.', choices: ['Tôi được cô giáo tặng đồng hồ', 'Tôi tặng đồng hồ cho cô giáo', 'Cô giáo đã mua một chiếc đồng hồ', 'Chiếc đồng hồ đắt quá'], answerIndex: 0 },
  ],
  reading: {
    titleVi: 'Email hẹn gặp khách hàng',
    lines: [
      { text: 'キムさま', vi: 'Kính gửi ngài Kim.' },
      { text: 'はじめまして。ABCしょうじの ヤマダと もうします。', vi: 'Rất hân hạnh. Tôi là Yamada của công ty thương mại ABC.' },
      { text: 'あしたの 十じに 御社へ まいります。', vi: 'Ngày mai lúc 10 giờ tôi sẽ đến quý công ty.' },
      { text: 'あたらしい せいひんの しりょうを おもちします。', vi: 'Tôi sẽ mang theo tài liệu về sản phẩm mới.' },
      { text: 'かいぎの あとで、せつめいを いたします。', vi: 'Sau cuộc họp, tôi xin trình bày (giải thích).' },
      { text: 'ごしつもんが あれば、メールで ごれんらくください。', vi: 'Nếu có câu hỏi, xin ngài liên lạc qua email.' },
      { text: 'どうぞ よろしく もうしあげます。', vi: 'Kính mong ngài giúp đỡ.' },
      { text: 'ヤマダ', vi: 'Yamada.' },
    ],
    questions: [
      { questionVi: 'Yamada làm việc ở đâu?', choices: ['Công ty thương mại ABC', 'Công ty của ngài Kim', 'Khách sạn ABC', 'Cửa hàng bách hóa'], answerIndex: 0, explanationVi: 'Câu 2: ABCしょうじの ヤマダと もうします — xưng tên công ty kèm もうします (khiêm nhường của いいます).' },
      { questionVi: 'Yamada sẽ đến quý công ty lúc mấy giờ?', choices: ['10 giờ', '9 giờ', '11 giờ', '1 giờ'], answerIndex: 0, explanationVi: 'Câu 3: 十じに 御社へ まいります — まいります là khiêm nhường của いきます.' },
      { questionVi: 'Yamada sẽ mang theo thứ gì?', choices: ['Tài liệu về sản phẩm mới', 'Quà là trà', 'Danh thiếp', 'Mẫu sản phẩm'], answerIndex: 0, explanationVi: 'Câu 4: せいひんの しりょうを おもちします — お〜する là mẫu khiêm nhường "tôi mang".' },
    ],
  },
  speakSentences: [
    { ja: 'わたしは ABCホテルの リンと もうします。', vi: 'Tôi là Lin của khách sạn ABC.' },
    { ja: 'かいぎしつへ ごあんないします。', vi: 'Tôi xin hướng dẫn ngài tới phòng họp.' },
    { ja: 'もういちど おしえて いただけますか。', vi: 'Xin ngài dạy lại một lần nữa được không ạ?' },
    { ja: 'にもつは わたしが おもちします。', vi: 'Hành lý để tôi mang cho ngài.' },
  ],
  translatePairs: [
    { ja: 'わたしは ヤマダと もうします。', vi: 'Tôi tên là Yamada.', tokens: ['わたし', 'は', 'ヤマダ', 'と', 'もうします'], distractors: ['いいます'] },
    { ja: 'おきゃくさまと 十じに おあいします。', vi: 'Tôi gặp quý khách lúc 10 giờ.', tokens: ['おきゃくさま', 'と', '十じ', 'に', 'おあいします'], distractors: ['あいます'] },
    { ja: 'この ほんを せんせいに さしあげます。', vi: 'Tôi tặng cuốn sách này cho cô giáo.', tokens: ['この', 'ほん', 'を', 'せんせい', 'に', 'さしあげます'], distractors: ['あげます'] },
    { ja: 'もういちど かいて いただけますか。', vi: 'Xin ngài viết lại một lần nữa được không ạ?', tokens: ['もういちど', 'かいて', 'いただけますか'], distractors: ['ください'] },
    { ja: 'ホテルの ロビーで おまちします。', vi: 'Tôi sẽ chờ ở sảnh khách sạn.', tokens: ['ホテル', 'の', 'ロビー', 'で', 'おまちします'], distractors: ['まちます'] },
  ],
  kanji: ['参', '致', '承'],
}
