/**
 * NihongoGo — Bài 41: Tổng ôn ngữ pháp N5 — Phần 1 (文法総復習Ⅰ).
 * Bài TỔNG ÔN: mỗi "grammar point" là một NHÓM ôn (trợ từ / chia động từ /
 * tính từ), drills heterogeneous bám ngữ pháp L1–L38. Không dạy mẫu mới.
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson41: CurriculumLesson = {
  order: 41,
  slug: 'l41-tong-on-ngu-phap-n5-1',
  title: 'Tổng ôn ngữ pháp N5 — Phần 1',
  titleJa: '文法総復習Ⅰ',
  description: 'Ôn lại toàn bộ trợ từ và các thể động từ nền tảng trong phạm vi N5.',
  learningObjectives: [
    'Ôn trợ từ cơ bản (は・が・を・に・で)',
    'Ôn thể て・ない・quá khứ',
    'Làm bài tập trộn tổng hợp',
  ],
  grammarTopics: ['Ôn trợ từ cơ bản', 'Ôn các thể động từ nền tảng'],
  vocabularyTopics: ['Ôn từ vựng trường học', 'Ôn từ vựng sinh hoạt'],
  kanjiTopics: ['Kanji số & đơn vị (一〜十)', 'Kanji người (人・男・女)'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'けんきゅう', romaji: 'kenkyū', meaningVi: 'sự nghiên cứu', pos: 'danh từ', exampleJa: 'だいがくで にほんごの けんきゅうを します。', exampleVi: 'Tôi nghiên cứu tiếng Nhật ở trường đại học.' },
    { term: 'きんちょう', romaji: 'kinchō', meaningVi: 'sự căng thẳng, hồi hộp', pos: 'danh từ', exampleJa: 'しけんの まえに、いつも きんちょうします。', exampleVi: 'Trước kỳ thi tôi luôn hồi hộp.' },
    { term: 'しけん', romaji: 'shiken', meaningVi: 'kỳ thi, bài kiểm tra', pos: 'danh từ', exampleJa: 'あしたは にほんごの しけんが あります。', exampleVi: 'Ngày mai có kỳ thi tiếng Nhật.' },
    { term: 'いろいろ', romaji: 'iroiro', meaningVi: 'đủ mọi thứ, này kia', pos: 'phó từ', exampleJa: 'デパートで いろいろ かいました。', exampleVi: 'Tôi đã mua đủ thứ ở cửa hàng bách hóa.' },
    { term: 'ぎんこう', romaji: 'ginkō', meaningVi: 'ngân hàng', pos: 'danh từ', exampleJa: 'ぎんこうで おかねを だします。', exampleVi: 'Tôi rút tiền ở ngân hàng.' },
    { term: 'だいどころ', romaji: 'daidokoro', meaningVi: 'nhà bếp', pos: 'danh từ', exampleJa: 'わたしは だいどころで ごはんを つくります。', exampleVi: 'Tôi nấu cơm ở nhà bếp.' },
    { term: 'おかね', romaji: 'okane', meaningVi: 'tiền', pos: 'danh từ', exampleJa: 'おかねが ないから、きょうは かいものに いきません。', exampleVi: 'Vì không có tiền nên hôm nay tôi không đi mua sắm.' },
    { term: 'あさごはん', romaji: 'asagohan', meaningVi: 'bữa sáng', pos: 'danh từ', exampleJa: 'しちじに あさごはんを たべます。', exampleVi: 'Tôi ăn bữa sáng lúc 7 giờ.' },
    { term: 'ひるごはん', romaji: 'hirugohan', meaningVi: 'bữa trưa', pos: 'danh từ', exampleJa: 'ともだちと ひるごはんを たべました。', exampleVi: 'Tôi đã ăn trưa với bạn.' },
    { term: 'ごはん', romaji: 'gohan', meaningVi: 'cơm, bữa cơm', pos: 'danh từ', exampleJa: 'ごはんは もう たべました。', exampleVi: 'Cơm thì tôi ăn rồi.' },
    { term: 'パン', romaji: 'pan', meaningVi: 'bánh mì', pos: 'danh từ', exampleJa: 'あさは パンと コーヒーです。', exampleVi: 'Bữa sáng là bánh mì và cà phê.' },
    { term: 'にく', romaji: 'niku', meaningVi: 'thịt', pos: 'danh từ', exampleJa: 'スーパーで にくと やさいを かいました。', exampleVi: 'Tôi đã mua thịt và rau ở siêu thị.' },
    { term: 'さかな', romaji: 'sakana', meaningVi: 'cá', pos: 'danh từ', exampleJa: 'この さかなは とても おいしいです。', exampleVi: 'Con cá này rất ngon.' },
    { term: 'くだもの', romaji: 'kudamono', meaningVi: 'trái cây', pos: 'danh từ', exampleJa: 'わたしは くだものが すきです。', exampleVi: 'Tôi thích trái cây.' },
    { term: 'サラダ', romaji: 'sarada', meaningVi: 'món salad', pos: 'danh từ', exampleJa: 'やさいの サラダを つくりました。', exampleVi: 'Tôi đã làm món salad rau.' },
    { term: 'テーブル', romaji: 'tēburu', meaningVi: 'bàn (kiểu phương Tây)', pos: 'danh từ', exampleJa: 'テーブルの うえに かばんが あります。', exampleVi: 'Trên bàn có chiếc cặp.' },
    { term: '一人', reading: 'ひとり', romaji: 'hitori', meaningVi: 'một người', pos: 'danh từ', exampleJa: '一人で えいがを みに いきます。', exampleVi: 'Tôi đi xem phim một mình.' },
    { term: '二人', reading: 'ふたり', romaji: 'futari', meaningVi: 'hai người', pos: 'danh từ', exampleJa: '二人で ひるごはんを たべました。', exampleVi: 'Hai người chúng tôi đã cùng ăn trưa.' },
    { term: '男の人', reading: 'おとこのひと', romaji: 'otoko no hito', meaningVi: 'người đàn ông', pos: 'danh từ', exampleJa: 'あの 男の人は リンさんの おとうさんです。', exampleVi: 'Người đàn ông kia là bố của bạn Linh.' },
    { term: '女の人', reading: 'おんなのひと', romaji: 'onna no hito', meaningVi: 'người phụ nữ', pos: 'danh từ', exampleJa: '女の人たちが うたを うたっています。', exampleVi: 'Những người phụ nữ đang hát.' },
    { term: 'おとうさん', romaji: 'otōsan', meaningVi: 'bố (gọi người khác)', pos: 'danh từ', exampleJa: 'おとうさんは おげんきですか。', exampleVi: 'Bố anh/chị có khỏe không?' },
    { term: '一緒に', reading: 'いっしょに', romaji: 'issho ni', meaningVi: 'cùng nhau', pos: 'phó từ', exampleJa: 'あした 一緒に えいがを みませんか。', exampleVi: 'Mai mình cùng đi xem phim nhé?' },
  ],
  grammar: [
    {
      code: 'l41-particle-system',
      title: 'Hệ thống trợ từ N5 — chọn đúng trợ từ theo ngữ cảnh',
      formation: 'Nは (chủ đề) ・ Nが (chủ ngữ mới/đối lập) ・ Nを (tân ngữ) ・ Nに (thời điểm・đích・người nhận・nơi tồn tại) ・ Nで (nơi diễn ra・phương tiện) ・ Nへ (hướng) ・ Nと (cùng với・và) ・ Nから/まで (từ…đến) ・ Nも (cũng) ・ Nの (sở hữu・định ngữ)',
      explanationVi:
        'Tổng ôn "bộ xương" của câu N5 — 11 trợ từ cốt lõi: は đánh dấu CHỦ ĐỀ đang bàn (わたしは だいどころで…); が đánh dấu chủ ngữ mới/nghi vấn hoặc nối hai vế đối lập (しけんが あります / あついですが…); を đánh dấu tân ngữ của động từ quá độ (ごはんを つくります); に chỉ thời điểm cụ thể (しちじに), đích đến (だいがくへ/に いきます), người nhận (おばあさんに あげます) và nơi tồn tại với あります/います (テーブルの うえに…); で chỉ nơi DIỄN RA hành động (だいどころで つくります) hay phương tiện/ngôn ngữ (にほんごで かきます); へ nhấn hướng di chuyển; と vừa là "cùng với" (ともだちと), vừa là "và" khi liệt kê (にくと やさい); から/まで là "từ…đến" (九じより…) cho thời gian, nơi chốn và cả người cho (せんせいから もらいました); も thay thế は/が/ để nói "cũng/cả…lẫn…" (にくも さかなも); の nối danh từ sở hữu (テーブルの うえ). Bẫy thi cử kinh điển: に vs で (tồn tại vs hành động) và は vs が (cũ đã biết vs mới đưa vào).',
      examples: [
        { ja: 'わたしは だいどころで ごはんを つくります。', vi: 'Tôi nấu cơm ở nhà bếp.', tokens: ['わたし', 'は', 'だいどころ', 'で', 'ごはん', 'を', 'つくります'] },
        { ja: '男の人から おくりものを もらいました。', vi: 'Tôi đã nhận quà từ một người đàn ông.' },
        { ja: 'にくも さかなも かいました。', vi: 'Tôi mua cả thịt lẫn cá.' },
        { ja: 'テーブルの うえに くだものが あります。', vi: 'Trên bàn có trái cây.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Chọn trợ từ đúng (Tôi dậy lúc 7 giờ mỗi sáng)',
          sentence: 'わたしは まいあさ しちじ___ おきます。',
          options: ['に', 'で', 'を', 'は'],
          answerIndex: 0, explanationVi: 'Thời điểm cụ thể (しちじ = 7 giờ) dùng に. で là nơi diễn ra hành động, を đánh dấu tân ngữ, は đánh dấu chủ đề.',
        },
        {
          kind: 'particle', prompt: 'Chọn trợ từ đúng (Tôi đã nấu cơm ở nhà bếp)',
          sentence: 'わたしは だいどころ___ ごはんを つくりました。',
          options: ['に', 'で', 'へ', 'が'],
          answerIndex: 1, explanationVi: 'Nơi DIỄN RA hành động (nấu) → で. に dùng cho nơi tồn tại (あります/います) hay đích đến; ở đây hành động diễn ra tại bếp nên phải dùng で.',
        },
        {
          kind: 'choice', prompt: '"Tôi mua cả thịt lẫn cá" — câu nào đúng?',
          options: ['にくを さかなを かいました。', 'にくは さかなは かいました。', 'にくも さかなも かいました。', 'にくが さかなが かいました。'],
          answerIndex: 2, explanationVi: 'も thay thế cho を/が khi liệt kê "cả… lẫn…": にくも さかなも. Lặp lại を/は/が khi liệt kê hai tân ngữ là sai ngữ pháp.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng nghĩa "Tôi học ở thư viện"?',
          options: ['としょかに べんきょうします。', 'としょかんで べんきょうします。', 'としょかんへ べんきょうします。', 'としょかんを べんきょうします。'],
          answerIndex: 1, explanationVi: 'Hành động học diễn ra tại thư viện → で (nơi diễn ra). に chỉ nơi tồn tại (としょかに ほんが あります), へ chỉ hướng di chuyển (としょかんへ いきます).',
        },
      ],
    },
    {
      code: 'l41-verb-conjugation',
      title: 'Chia động từ toàn diện — ます・て・ない・khả năng・bị động・sai khiến',
      formation: 'ます/ません → ました/ませんでした; て-form (かいて・たべて・して・きて); ない-form (かかない・たべない・しない・こない); khả năng (かけます・たべられます・できます); bị động (かかれます・たべられます); sai khiến (かかせます・たべさせます・させます)',
      explanationVi:
        'Một động từ, nhiều "chiếc áo" — ôn lại toàn bộ hệ thống thể đã học L6–L31: (1) ます/ません (hiện tại) → ました/ませんでした (quá khứ): かきます → かきました/かきませんでした. (2) て-form (L13) dùng cho てください, ています, nối hành động: かいて・いそいで・きいて・よんで・して・きて. (3) ない-form (L16): nhóm 1 đổi う段→あ段 (かかない, う→わ: かわない), nhóm 2 bỏ ます (たべない), nhóm 3: しない/こない, đặc biệt あります→ない. (4) Thể khả năng (L18): nhóm 1 え段+ます (よめます), nhóm 2 られます (たべられます), nhóm 3 できます/こられます — tân ngữ thường chuyển sang が. (5) Bị động (L30): れます/られます, người gây tác động đứng với に (ともだちに さそわれました). (6) Sai khiến (L31): せます/させます, người được bảo làm đứng với に (弟に たべさせました). Chú ý nhóm 2: たべられます vừa là khả năng vừa là bị động — phải căn cứ ngữ cảnh. Trước ませんでした/た/ない (thể thường) không dùng ます-form.',
      examples: [
        { ja: 'しけんが ありますから、テレビを みません。', vi: 'Vì có kỳ thi nên tôi không xem tivi.', tokens: ['しけん', 'が', 'あります', 'から', 'テレビ', 'を', 'みません'] },
        { ja: 'わたしは きのう ともだちに えいがに さそわれました。', vi: 'Hôm qua tôi được/từng được bạn rủ đi xem phim. (bị động)' },
        { ja: 'わたしは ひらがなも かんじも よめます。', vi: 'Tôi đọc được cả hiragana lẫn kanji. (khả năng)' },
        { ja: 'おかあさんは 弟に やさいを たべさせました。', vi: 'Mẹ đã bảo em trai ăn rau. (sai khiến)' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'かきます → quá khứ khẳng định (Tối qua tôi đã viết thư)',
          sentence: 'きのうの よる、てがみを ___。',
          options: ['かきませんでした', 'かかせます', 'かきました', 'かかれます'],
          answerIndex: 2, explanationVi: 'Quá khứ khẳng định của かきます là かきました. かきませんでした là quá khứ phủ định; かかせます (sai khiến) và かかれます (bị động) là thể khác.',
        },
        {
          kind: 'conjugate', prompt: 'たべます → quá khứ phủ định (Hôm qua tôi đã không ăn sáng)',
          sentence: 'きのうは あさごはんを ___。',
          options: ['たべなかったでした', 'たべませんでした', 'たべないでした', 'たべません'],
          answerIndex: 1, explanationVi: 'Quá khứ phủ định của ます là ませんでした: たべませんでした. Không có dạng ×たべなかったでした hay ×たべないでした; たべません là phủ định hiện tại.',
        },
        {
          kind: 'conjugate', prompt: 'きます → て-form (Mau đến đây)',
          sentence: 'はやく ここへ ___ください。',
          options: ['きて', 'きって', 'きた', 'こない'],
          answerIndex: 0, explanationVi: 'きます (nhóm 3) → て-form là きて. Nhóm 3 bất quy tắc: します→して, きます→きて; きって là chia sai theo kiểu nhóm 1.',
        },
        {
          kind: 'fill', prompt: 'Điền (Hôm nay trời không nóng nên không bật máy lạnh cũng được)',
          sentence: 'きょうは あつくないですから、エアコンを ___なくても いいですよ。',
          options: ['つけ', 'つけない', 'つけて', 'つけます'],
          answerIndex: 0, explanationVi: 'Trước なくても いいです (L17) là gốc ない bỏ ない: つけ + なくても いいです. つけない là dạng ない đầy đủ, つけて là て-form — đều không ghép đúng ở đây.',
        },
        {
          kind: 'choice', prompt: 'Câu nào đúng nghĩa "Tôi đọc được báo tiếng Nhật" (thể khả năng)?',
          options: ['わたしは にほんごの しんぶんが よんで できます。', 'わたしは にほんごの しんぶんが よみます できます。', 'わたしは にほんごの しんぶんを よめるです。', 'わたしは にほんごの しんぶんが よめます。'],
          answerIndex: 3, explanationVi: 'Thể khả năng nhóm 1: う段→え段+ます (よみます→よめます), tân ngữ thường dùng が. よんで できます / よみます できます là ghép sai; よめるです sai vì よめます đã là dạng lịch sự.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng nghĩa "Em trai bị mẹ mắng" (thể bị động)?',
          options: ['おとうとは おかあさんを しかりました。', 'おとうとは おかあさんに しからせました。', 'おとうとは おかあさんに しかられました。', 'おとうとが おかあさんは しかりました。'],
          answerIndex: 2, explanationVi: 'Bị động (L30): người chịu tác động は + người gây tác động に + れます/られます → しかられました. しかりました là chủ động (em mắng mẹ); しからせました là sai khiến (bảo mẹ mắng).',
        },
      ],
    },
    {
      code: 'l41-adjective-mastery',
      title: 'Tính từ い/な + danh từ — phủ định・quá khứ・mức độ',
      formation: 'い-Adj: あつい・あつくない・あつかった(です)・あつくなかった(です); +N: あつい なつ; な-Adj: べんり・べんりじゃない・べんりでした; +N: べんりな バス; mức độ: とても + khẳng định / あまり + phủ định / ちょっと (nhẹ); danh từ hóa: V thể thường + こと/の',
      explanationVi:
        'Chốt lại "bộ chia" của tính từ: い-adj tự biến đổi (あつい → あつくない → あつかった → あつくなかった), còn な-adj mượn です/じゃありません (しずか → しずかじゃない → しずかでした). Trước danh từ, い-adj ghép thẳng (たのしい まつり) còn な-adj phải giữ な (きれいな おかし, すきな たべもの) — quên な là lỗi phổ biến nhất trong thi cử. Mức độ: とても/だいぶ đi với khẳng định, あまり/ぜんぜん đi với phủ định (あまり おいしくないです), ちょっと hạ nhẹ mức (ちょっと あついですね). Riêng danh từ hóa hành động (L28): V thể thường + こと/の biến "làm gì" thành danh từ (つくる こと) để gắn vào しゅみは…です; và tính từ/động từ thể thường + N mở rộng định ngữ (L19: ともだちが つくった サラダ).',
      examples: [
        { ja: 'わたしは たのしい まつりが すきです。', vi: 'Tôi thích lễ hội vui vẻ.', tokens: ['わたし', 'は', 'たのしい', 'まつり', 'が', 'すきです'] },
        { ja: 'きょうは ちょっと あついですね。', vi: 'Hôm nay trời hơi nóng nhỉ.' },
        { ja: 'ホテルの 人は とても しんせつでした。', vi: 'Nhân viên khách sạn rất tử tế.' },
        { ja: 'わたしは ともだちが つくった サラダを たべました。', vi: 'Tôi đã ăn món salad bạn tôi làm.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'おもしろい → quá khứ phủ định (Bộ phim hôm qua không thú vị lắm)',
          sentence: 'きのうの えいがは あまり ___。',
          options: ['おもしろくないでした', 'おもしろくなかったでした', 'おもしろくなかったです', 'おもしろいじゃありませんでした'],
          answerIndex: 2, explanationVi: 'い-adj quá khứ phủ định: bỏ い → くなかったです: おもしろくなかったです. Không ghép でした trực tiếp vào tính từ (×おもしろくないでした); じゃありませんでした chỉ dùng với な-adj/danh từ.',
        },
        {
          kind: 'fill', prompt: 'Điền (Đồ ăn tôi thích là trái cây)',
          sentence: 'わたしの すき___ たべものは くだものです。',
          options: ['の', 'な', 'に', 'で'],
          answerIndex: 1, explanationVi: 'すき là tính từ な nên trước danh từ phải là すきな たべもの. の chỉ nối danh từ + danh từ (ともだちの かばん), không dùng sau tính từ な.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng nghĩa "Phòng tôi rất sạch đẹp"?',
          options: ['わたしの へやは とても きれいです。', 'わたしの へやは あまり きれいです。', 'わたしの へやは とても きれいなです。', 'わたしの へやは とても きれくないです。'],
          answerIndex: 0, explanationVi: 'きれい là tính từ な: khẳng định là きれいです (không có ×きれいなです). あまり phải đi với phủ định; きれくないです là chia sai (きれい không phải tính từ い).',
        },
        {
          kind: 'fill', prompt: 'Điền (Sở thích của tôi là nấu ăn)',
          sentence: 'わたしの しゅみは りょうりを つくる ___です。',
          options: ['こと', 'もの', 'とき', 'ところ'],
          answerIndex: 0, explanationVi: 'Danh từ hóa hành động (L28): V thể thường + こと — つくる こと. もの/とき/ところ là danh từ thật, không biến hành động thành danh từ trong mẫu しゅみは〜です.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Cùng ôn bài ở thư viện',
      situationVi: 'Sắp đến kỳ thi tiếng Nhật; Tanaka rủ Linh đến thư viện ôn bài.',
      lines: [
        { speaker: 'たなか', ja: 'もうすぐ にほんごの しけんですね。だいじょうぶですか。', vi: 'Sắp đến kỳ thi tiếng Nhật rồi nhỉ. Bạn ổn chứ?' },
        { speaker: 'リン', ja: 'はい。でも、かんじが たくさん ありますから、ちょっと きんちょうしています。', vi: 'Có. Nhưng chữ Hán nhiều quá nên tôi hơi căng thẳng.' },
        { speaker: 'たなか', ja: 'わたしは まいばん としょかんで さんじかん べんきょうします。', vi: 'Còn tôi mỗi tối học ba tiếng ở thư viện.' },
        { speaker: 'リン', ja: 'すごいですね。わたしは あまり よく べんきょうしません。', vi: 'Giỏi nhỉ. Còn tôi thì không chịu học lắm.' },
        { speaker: 'たなか', ja: 'じゃあ、こんしゅうの しゅうまつ、としょかんへ 一緒に いきませんか。', vi: 'Vậy cuối tuần này, cùng đến thư viện không?' },
        { speaker: 'リン', ja: 'いいですね。なんじに あいましょうか。', vi: 'Được đấy. Mấy giờ mình gặp nhau nhỉ?' },
        { speaker: 'たなか', ja: 'じゅうじに としょかんの まえで あいましょう。', vi: '10 giờ gặp trước thư viện nhé.' },
        { speaker: 'リン', ja: 'わかりました。ひるごはんは どうしますか。', vi: 'Rồi. Còn bữa trưa thì tính sao?' },
        { speaker: 'たなか', ja: 'わたしが おべんとうを 二つ つくります。', vi: 'Tôi sẽ làm hai suất cơm hộp.' },
        { speaker: 'リン', ja: 'ありがとう。しけんが おわったら、いっしょに なにか たべに いきましょう。', vi: 'Cảm ơn nhé. Thi xong rồi mình cùng đi ăn gì đó.' },
      ],
    },
    {
      titleVi: 'Bữa trưa ở nhà Min',
      situationVi: 'Min đang nấu bữa trưa; bạn cùng phòng Sayuri sang hỏi chuyện.',
      lines: [
        { speaker: 'さゆり', ja: 'ミンさん、だいどころで 何を していますか。', vi: 'Min này, bạn đang làm gì ở bếp vậy?' },
        { speaker: 'ミン', ja: 'ひるごはんを つくって います。きょうは サラダと さかなです。', vi: 'Tôi đang nấu bữa trưa. Hôm nay là salad và cá.' },
        { speaker: 'さゆり', ja: 'わあ、おいしそうですね。', vi: 'Ơ, nhìn ngon phết.' },
        { speaker: 'ミン', ja: 'ありがとうございます。さゆりさんも 一緒に たべませんか。', vi: 'Cảm ơn. Sayuri cũng cùng ăn nhé?' },
        { speaker: 'さゆり', ja: 'ありがとう。じゃあ、おねがいします。ごはんも ありますか。', vi: 'Cảm ơn. Vậy làm phiền bạn nhé. Có cơm không?' },
        { speaker: 'ミン', ja: 'はい、あつい ごはんも パンも ありますよ。', vi: 'Có, vừa có cơm nóng vừa có bánh mì đấy.' },
        { speaker: 'さゆり', ja: 'くだものは? ', vi: 'Còn trái cây thì sao?' },
        { speaker: 'ミン', ja: 'はい、テーブルの うえに りんごが たくさん あります。', vi: 'Có, trên bàn có rất nhiều táo.' },
        { speaker: 'さゆり', ja: 'わたしは くだものが すきです。毎日 たべたいです。', vi: 'Tôi thích trái cây lắm. Ngày nào cũng muốn ăn.' },
        { speaker: 'ミン', ja: 'じゃあ、ゆっくり たべて ください。この さかなは ぜんぜん からくないですよ。', vi: 'Vậy ăn chậm rãi nhé. Con cá này hoàn toàn không cay đâu.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'わたしは まいにち だいどころで ごはんを つくります。', meaningVi: 'Tôi nấu cơm ở bếp mỗi ngày.', choices: ['Tôi nấu cơm ở bếp mỗi ngày', 'Tôi ăn cơm ở nhà hàng mỗi ngày', 'Tôi dọn dẹp bếp mỗi ngày', 'Tôi mua cơm mỗi ngày'], answerIndex: 0, dictation: true },
    { scriptJa: 'きのうの えいがは あまり おもしろくなかったです。', meaningVi: 'Bộ phim hôm qua không thú vị lắm.', choices: ['Bộ phim hôm qua rất thú vị', 'Bộ phim hôm qua không thú vị lắm', 'Bộ phim hôm qua hơi đáng sợ', 'Tôi đã không đi xem phim hôm qua'], answerIndex: 1, dictation: true },
    { scriptJa: 'あの 男の人は リンさんの おとうさんです。', meaningVi: 'Người đàn ông kia là bố của Linh.', choices: ['Người đàn ông kia là bố của Linh', 'Người đàn ông kia là anh trai của Linh', 'Linh là con trai', 'Bố của Linh là giáo viên'], answerIndex: 0 },
    { scriptJa: '女の人が 二人、こうえんで うたを うたっています。', meaningVi: 'Hai người phụ nữ đang hát ở công viên.', choices: ['Một người phụ nữ đang hát', 'Hai người đàn ông đang chạy ở công viên', 'Hai người phụ nữ đang hát ở công viên', 'Những người phụ nữ đã hát xong'], answerIndex: 2 },
  ],
  reading: {
    titleVi: 'Ngày ôn thi của Ken',
    lines: [
      { text: 'あしたは にほんごの しけんが あります。', vi: 'Ngày mai tôi có kỳ thi tiếng Nhật.' },
      { text: 'きょうは あさ ろくじに おきて、だいどころで あさごはんを つくりました。', vi: 'Hôm nay tôi dậy lúc 6 giờ sáng và nấu bữa sáng ở bếp.' },
      { text: 'パンと たまごを たべて、はちじに だいがくへ いきました。', vi: 'Tôi ăn bánh mì với trứng, rồi 8 giờ đến trường đại học.' },
      { text: 'としょかんは とても しずかでしたが、ひとが たくさん いました。', vi: 'Thư viện rất yên tĩnh nhưng có rất nhiều người.' },
      { text: '男の 学生と 一緒に さんじかん べんきょうしました。', vi: 'Tôi đã học ba tiếng cùng một bạn nam.' },
      { text: 'その 人は 日本語の しんぶんが よめますから、わたしに いろいろ おしえました。', vi: 'Bạn ấy đọc được báo tiếng Nhật nên đã dạy tôi rất nhiều thứ.' },
      { text: 'こんやも まだ べんきょうしますから、ちょっと きんちょうしています。', vi: 'Tối nay tôi vẫn phải học tiếp nên đang hơi căng thẳng.' },
      { text: 'しけんが おわったら、ともだちと たくさん あそびます。', vi: 'Thi xong rồi tôi sẽ chơi thả ga với bạn bè.' },
    ],
    questions: [
      { questionVi: 'Sau khi thức dậy, Ken đã làm gì?', choices: ['Nấu bữa sáng ở bếp', 'Đi thẳng đến thư viện', 'Ngủ thêm một chút', 'Đọc báo tiếng Nhật'], answerIndex: 0, explanationVi: 'Dòng 2: だいどころで あさごはんを つくりました — で (nơi diễn ra) + を (tân ngữ) + ました (quá khứ).' },
      { questionVi: 'Thư viện hôm nay thế nào?', choices: ['Ồn ào vì rất đông người', 'Rất yên tĩnh nhưng rất đông người', 'Vắng người và yên tĩnh', 'Đóng cửa đến 8 giờ'], answerIndex: 1, explanationVi: 'Dòng 4: とても しずかでしたが、ひとが たくさん いました — が nối hai vế trái chiều (L21).' },
      { questionVi: 'Bạn học cùng được Ken đánh giá thế nào?', choices: ['Nói tiếng Việt rất giỏi', 'Đã thi đỗ từ năm ngoái', 'Đọc được báo tiếng Nhật', 'Không thích học ở thư viện'], answerIndex: 2, explanationVi: 'Dòng 6: しんぶんが よめます — thể khả năng (L18) + が, cộng các trợ từ から・に ôn lại trong bài.' },
    ],
  },
  speakSentences: [
    { ja: 'わたしは まいにち だいどころで ごはんを つくります。', vi: 'Tôi nấu cơm ở bếp mỗi ngày.' },
    { ja: 'しけんの まえに、いつも きんちょうします。', vi: 'Trước kỳ thi tôi luôn căng thẳng.' },
    { ja: 'あした 一緒に としょかんへ いきませんか。', vi: 'Mai mình cùng đi thư viện nhé?' },
    { ja: 'きのうの えいがは あまり おもしろくなかったです。', vi: 'Bộ phim hôm qua không thú vị lắm.' },
  ],
  translatePairs: [
    { ja: 'わたしは まいにち だいどころで ごはんを つくります。', vi: 'Tôi nấu cơm ở bếp mỗi ngày.', tokens: ['わたし', 'は', 'まいにち', 'だいどころ', 'で', 'ごはん', 'を', 'つくります'], distractors: ['に'] },
    { ja: 'あしたは しけんが ありますから、テレビを みません。', vi: 'Ngày mai có kỳ thi nên tôi không xem tivi.', tokens: ['あした', 'は', 'しけん', 'が', 'あります', 'から', 'テレビ', 'を', 'みません'], distractors: ['でも'] },
    { ja: 'たなかさんから ほんを もらいました。', vi: 'Tôi đã nhận sách từ Tanaka.', tokens: ['たなかさん', 'から', 'ほん', 'を', 'もらいました'], distractors: ['に'] },
    { ja: 'この さかなは あまり おいしくないです。', vi: 'Con cá này không ngon lắm.', tokens: ['この', 'さかな', 'は', 'あまり', 'おいしくない', 'です'], distractors: ['とても'] },
  ],
  kanji: ['人', '男', '女'],
}
