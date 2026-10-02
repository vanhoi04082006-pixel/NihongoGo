/**
 * NihongoGo — Bài 35: 〜そうです — Nghe nói & trông có vẻ.
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson35: CurriculumLesson = {
  order: 35,
  slug: 'l35-sou-desu',
  title: '〜そうです — Nghe nói & trông có vẻ',
  titleJa: '〜そうです',
  description: 'Dự đoán theo vẻ ngoài và truyền lại thông tin nghe được với hai dạng そうです.',
  learningObjectives: [
    'Dùng そうです khi dự đoán từ vẻ ngoài',
    'Dùng そうです khi truyền lại thông tin nghe được',
    'Phân biệt hai dạng theo cách nối câu',
  ],
  grammarTopics: ['〜そうです (dự đoán từ vẻ ngoài)', '〜そうです (truyền đạt thông tin)'],
  vocabularyTopics: ['Dự đoán từ hình dáng', 'Từ truyền tin'],
  kanjiTopics: ['Kanji ngoại hình & dáng vẻ (顔・目・声)'],
  difficulty: 'ELEMENTARY',
  vocabulary: [
    { term: '顔', reading: 'かお', romaji: 'kao', meaningVi: 'khuôn mặt, vẻ mặt', pos: 'danh từ', exampleJa: 'かのじょの 顔は とても うれしそうです。', exampleVi: 'Khuôn mặt cô ấy trông rất vui.' },
    { term: '目', reading: 'め', romaji: 'me', meaningVi: 'mắt', pos: 'danh từ', exampleJa: 'かれの 目は おおきくて きれいです。', exampleVi: 'Mắt anh ấy to và đẹp.' },
    { term: '声', reading: 'こえ', romaji: 'koe', meaningVi: 'giọng nói, tiếng', pos: 'danh từ', exampleJa: 'かれは ちいさい 声で はなしました。', exampleVi: 'Anh ấy nói bằng giọng nhỏ.' },
    { term: '笑顔', reading: 'えがお', romaji: 'egao', meaningVi: 'nụ cười', pos: 'danh từ', exampleJa: 'かのじょは いつも 笑顔です。', exampleVi: 'Cô ấy lúc nào cũng tươi cười.' },
    { term: '天気予報', reading: 'てんきよほう', romaji: 'tenkiyohō', meaningVi: 'bản dự báo thời tiết', pos: 'danh từ', exampleJa: '天気予報に よると、あしたは あめ だそうです。', exampleVi: 'Theo dự báo thời tiết, ngày mai trời mưa.' },
    { term: 'うわさ', romaji: 'uwasa', meaningVi: 'tin đồn', pos: 'danh từ', exampleJa: 'うわさに よると、あの レストランは おいしい そうです。', exampleVi: 'Theo tin đồn, nhà hàng đó ngon.' },
    { term: '事故', reading: 'じこ', romaji: 'jiko', meaningVi: 'tai nạn', pos: 'danh từ', exampleJa: 'ニュースに よると、きのう えきの まえで 事故が あった そうです。', exampleVi: 'Theo bản tin, hôm qua trước ga có tai nạn.' },
    { term: '結婚', reading: 'けっこん', romaji: 'kekkon', meaningVi: 'kết hôn, cưới', pos: 'danh từ', exampleJa: 'かのじょは 来年 結婚する そうです。', exampleVi: 'Nghe nói năm sau cô ấy kết hôn.' },
    { term: 'れんらく', romaji: 'renraku', meaningVi: 'liên lạc', pos: 'danh từ', exampleJa: 'かれから れんらくが ありました。', exampleVi: 'Anh ấy đã liên lạc.' },
    { term: 'きもち', romaji: 'kimochi', meaningVi: 'tâm trạng, cảm giác', pos: 'danh từ', exampleJa: 'かれの きもちが よく わかります。', exampleVi: 'Tôi hiểu rõ tâm trạng của anh ấy.' },
    { term: 'ようす', romaji: 'yōsu', meaningVi: 'dáng vẻ, tình hình', pos: 'danh từ', exampleJa: 'こどもの ようすが ちょっと おかしいです。', exampleVi: 'Dáng vẻ của đứa trẻ hơi lạ.' },
    { term: 'しらせ', romaji: 'shirase', meaningVi: 'tin báo, thư báo tin', pos: 'danh từ', exampleJa: 'かのじょから けっこんの しらせが きました。', exampleVi: 'Cô ấy gửi tin báo kết hôn đến.' },
    { term: 'かいぎ', romaji: 'kaigi', meaningVi: 'cuộc họp', pos: 'danh từ', exampleJa: 'あしたの 十じから かいぎが あります。', exampleVi: 'Ngày mai có cuộc họp từ 10 giờ.' },
    { term: 'つよい', romaji: 'tsuyoi', meaningVi: 'khỏe, mạnh', pos: 'tính từ い', exampleJa: 'かれは からだが つよいです。', exampleVi: 'Anh ấy có thân hình khỏe mạnh.' },
    { term: 'きびしい', romaji: 'kibishii', meaningVi: 'nghiêm khắc', pos: 'tính từ い', exampleJa: 'かのじょの おかあさんは きびしいです。', exampleVi: 'Mẹ của cô ấy nghiêm khắc.' },
    { term: 'めずらしい', romaji: 'mezurashii', meaningVi: 'hiếm, lạ, ít gặp', pos: 'tính từ い', exampleJa: 'めずらしい かさですね。どこで かいましたか。', exampleVi: 'Chiếc ô hiếm thấy nhỉ. Bạn mua ở đâu?' },
    { term: 'つたえます', romaji: 'tsutaemasu', meaningVi: 'truyền đạt, kể lại', pos: 'động từ nhóm 2', exampleJa: 'この ニュースを ともだちに つたえます。', exampleVi: 'Tôi kể lại tin này cho bạn.' },
    { term: 'よろこびます', romaji: 'yorokobimasu', meaningVi: 'vui mừng, lấy làm vui', pos: 'động từ nhóm 1', exampleJa: 'かのじょは プレゼントを もらって、よろこびます。', exampleVi: 'Cô ấy nhận quà và rất vui mừng.' },
  ],
  grammar: [
    {
      code: 'l35-sou-truyen-dat',
      title: '〜そうです (truyền đạt) — nghe nói rằng',
      formation: 'Nguồn + によると + [N/な-Adj + だ / い-Adj nguyên dạng / V thể thường] + そうです: あめ だそうです・にぎやか だそうです・あつい そうです・いく そうです',
      explanationVi:
        'Dạng THỨ NHẤT của そうです dùng để TRUYỀN LẠI thông tin nghe từ một nguồn khác (báo, tin đồn, người khác kể) mà mình không tự xác nhận. Cách nối giống hệt mệnh đề trước と おもいます: N và tính từ な phải có だ (あめ だそうです), tính từ い và động từ giữ NGUYÊN dạng thể thường (あつい そうです・いく そうです), quá khứ dùng だった・かった・いった + そうです. Thường mở đầu bằng 「〜に よると」 (theo như…) hoặc 「〜の はなしでは」 (theo lời kể của…) để nêu nguồn tin. Lưu ý: ます-form và て-form KHÔNG đứng trước そうです — phải bỏ ます về thể thường trước khi ghép.',
      examples: [
        { ja: 'てんきよほうに よると あしたは あめ だそうです。', vi: 'Theo dự báo thời tiết, ngày mai trời mưa.', tokens: ['てんきよほう', 'に', 'よると', 'あした', 'は', 'あめ', 'だそうです'] },
        { ja: 'うわさに よると かのじょは 来年 結婚する そうです。', vi: 'Theo tin đồn, năm sau cô ấy kết hôn.' },
        { ja: 'ともだちの はなしでは あの えいがは おもしろかった そうです。', vi: 'Theo lời bạn tôi, bộ phim đó rất hay (bạn đã xem rồi).' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'Ghép danh từ あめ + そうです (truyền đạt: nghe nói trời mưa)',
          sentence: 'ニュースに よると、あしたは あめ ___。',
          options: ['だそうです', 'そうです', 'でしたそうです', 'ですそうです'],
          answerIndex: 0, explanationVi: 'Danh từ cần だ trước そうです: あめ だそうです. Không thêm です/でした vào giữa — đó là lỗi của người mới.',
        },
        {
          kind: 'fill', prompt: 'Điền (Theo lời bạn tôi, buổi hòa nhạc rất náo nhiệt)',
          sentence: 'ともだちの はなしでは、コンサートは とても にぎやか ___。',
          options: ['だそうです', 'そうです', 'だったそうです', 'でしたそうです'],
          answerIndex: 0, explanationVi: 'Tính từ な như にぎやか cũng cần だ: にぎやか だそうです. だった そうです dành cho quá khứ (にぎやかだった そうです).',
        },
        {
          kind: 'conjugate', prompt: 'いきます → dạng truyền đạt (nghe nói năm sau anh ấy đi Mỹ)',
          sentence: 'かれは 来年 アメリカへ ___そうです。',
          options: ['いく', 'いきます', 'いって', 'いった'],
          answerIndex: 0, explanationVi: 'Động từ đứng trước そうです ở THỂ THƯỜNG: いく そうです ("nghe nói sẽ đi"). いった そうです = nghe nói ĐÃ đi (quá khứ); ます/て-form không dùng trước そうです.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['ニュースに よると、あしたは あめ だそうです。', 'ニュースに よると、あしたは あめ です そうです。', 'ニュースに よると、あしたは あめ でした そうです。', 'ニュースに よると、あしたは あめの そうです。'],
          answerIndex: 0, explanationVi: 'Chỉ có だ + そうです là ghép đúng với danh từ. です/でした chen vào giữa, hay の の そうです đều sai cấu trúc truyền đạt.',
        },
        {
          kind: 'choice', prompt: '「かれは 来月 結婚する そうです。」 — người nói biết tin này bằng cách nào?',
          options: ['Nghe từ một nguồn khác rồi kể lại, không tự xác nhận', 'Nhìn tận mắt anh ấy đang làm đám cưới', 'Suy luận logic từ bằng chứng', 'Tự nghĩ ra cho vui'],
          answerIndex: 0, explanationVi: 'V そうです (truyền đạt) = relay lại thông tin từ nguồn bên ngoài (người khác kể, báo chí). Vì vậy câu thường đi kèm によると・の はなしでは.',
        },
      ],
    },
    {
      code: 'l35-sou-ve-ngoai',
      title: '〜そうです (vẻ ngoài) — trông có vẻ',
      formation: 'い-Adj bỏ い + そうです: からい → からそうです / うれしい → うれしそうです; な-Adj bỏ な + そうです: きれい → きれいそうです; bất quy tắc: よい → よさそうです',
      explanationVi:
        'Dạng THỨ HAI của そうです nói lên NHẬN ĐỊNH BẰNG MẮT về người hoặc vật đang ở trước mặt: "trông có vẻ…". Cách nối hoàn toàn khác dạng truyền đạt: phải BỎ い của tính từ い (からい → からそう, うれしい → うれしそう, ねむい → ねむそう), bỏ な của tính từ な (きれい → きれいそう); riêng よい đổi thành よさそう (không nói よいそう). RẤT QUAN TRỌNG: dạng này KHÔNG dùng cho cảm giác của chính mình — bản thân mình biết rõ mình thế nào, không cần "trông có vẻ": nói わたしは うれしいです, KHÔNG nói ×わたしは うれしそうです. Ngoài hình dạng kết thúc câu, そうです còn thành phó từ 〜そうに (うれしそうに わらって います) và 〜そうな + danh từ (かなしそうな 顔).',
      examples: [
        { ja: 'この カレーは からそうです。', vi: 'Cà ri này trông có vẻ cay.', tokens: ['この', 'カレー', 'は', 'から', 'そうです'] },
        { ja: 'かのじょは うれしそうに わらって います。', vi: 'Cô ấy đang cười một cách vui vẻ. (〜そうに + động từ)' },
        { ja: 'かれは ねむそうですね。', vi: 'Trông anh ấy có vẻ buồn ngủ nhỉ.' },
        { ja: 'あたらしい パソコンは よさそうです。', vi: 'Chiếc máy tính mới trông có vẻ tốt. (よい → よさそうです)' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'うれしい → dạng "trông có vẻ vui"',
          sentence: 'かのじょは ___ですね。',
          options: ['うれしそう', 'うれしいそうです', 'うれしいそう', 'うれしだそう'],
          answerIndex: 0, explanationVi: 'Tính từ い bỏ い rồi mới thêm そうです: うれしそう. Lưu ý うれしい そうです (giữ nguyên tính từ) là dạng TRUYỀN ĐẠT "nghe nói cô ấy vui" — khác nghĩa.',
        },
        {
          kind: 'fill', prompt: 'Điền (Chiếc bánh này trông ngon)',
          sentence: 'この ケーキは おいし___です。',
          options: ['そう', 'いそう', 'い', 'かった'],
          answerIndex: 0, explanationVi: 'おいしい → おいし + そう → おいしそうです. Nếu điền い thì câu chỉ là "bánh này ngon" (đã nếm rồi), không còn nghĩa "trông có vẻ".',
        },
        {
          kind: 'error', prompt: 'Câu nào nói "cà ri này TRÔNG có vẻ cay" (đang nhìn bằng mắt)?',
          options: ['この カレーは からそうです。', 'この カレーは からいそうです。', 'この カレーは からだそうです。', 'この カレーは からいだそうです。'],
          answerIndex: 0, explanationVi: 'Vẻ ngoài: bỏ い → からそうです. Bản からい そうです là "nghe nói cay" (truyền đạt); だ không ghép vào tính từ い.',
        },
        {
          kind: 'choice', prompt: 'Vì sao KHÔNG nói 「わたしは うれしそうです」?',
          options: ['Dạng "vẻ ngoài" là nhận định bằng mắt về người/vật khác — cảm giác của chính mình nói thẳng: わたしは うれしいです', 'Vì うれしい là danh từ nên không ghép được', 'Vì うれしそう là lỗi chính tả', 'Vì mình không được phép vui'],
          answerIndex: 0, explanationVi: 'そうです (vẻ ngoài) phỏng đoán từ quan sát — bản thân mình thì không cần phỏng đoán. Nói về mình dùng trực tiếp tính từ: うれしいです・ねむいです.',
        },
      ],
    },
    {
      code: 'l35-sou-phan-biet',
      title: 'Phân biệt hai dạng そうです — cùng chữ, khác cách nối',
      formation: 'Truyền đạt: [thể thường đầy đủ, có だ với N/な-Adj] + そうです, thường kèm 〜に よると; Vẻ ngoài: [gốc tính từ, bỏ い/な] + そうです, chỉ dùng cho thứ đang nhìn thấy',
      explanationVi:
        'Hai dạng そうです khác nhau Ở CHỖ GHÉP: truyền đạt giữ nguyên mệnh đề thể thường (あめ だそうです・あつい そうです・いく そうです), còn vẻ ngoài chỉ lấy GỐC tính từ (あつ → あつそうです・たか → たかそうです). Vì vậy cùng một tính từ tạo ra hai câu khác nghĩa: からい そうです = NGHE NÓI cay (ai đó kể lại), からそうです = TRÔNG có vẻ cay (mình nhìn miếng cà ri). Cách kiểm tra nhanh: nếu trong câu có によると/の はなしでは thì chắc chắn là truyền đạt; nếu đang tả người/vật trước mặt (kèm ですね) thì là vẻ ngoài. Vẻ ngoài còn có dạng 〜そうな + danh từ (かなしそうな 顔 = gương mặt buồn bã) và 〜そうに + động từ (うれしそうに わらって います).',
      examples: [
        { ja: 'この まんじゅうは おいしそうです。', vi: 'Chiếc bánh manju này trông ngon. (nhìn bằng mắt — bỏ い)', tokens: ['この', 'まんじゅう', 'は', 'おいしそう', 'です'] },
        { ja: 'あの 店の まんじゅうは おいしい そうです。', vi: 'Nghe nói bánh manju của quán đó ngon. (nguồn: người khác kể)' },
        { ja: 'かのじょは かなしそうな 顔を しています。', vi: 'Cô ấy có gương mặt buồn bã. (〜そうな + danh từ)' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '「この スープは からい そうです。」 nghĩa là gì?',
          options: ['Nghe nói súp này cay (có người kể lại)', 'Trông súp này có vẻ cay (đang nhìn)', 'Súp này chắc chắn cay', 'Tôi muốn súp này cay hơn'],
          answerIndex: 0, explanationVi: 'からい giữ nguyên + そうです = TRUYỀN ĐẠT. Nếu là "trông có vẻ cay" thì phải bỏ い: からそうです.',
        },
        {
          kind: 'fill', prompt: 'Điền (Trông súp này có vẻ cay — đang nhìn bằng mắt)',
          sentence: 'この スープは から___。',
          options: ['そうです', 'いそうです', 'いです', 'くないです'],
          answerIndex: 0, explanationVi: 'Vẻ ngoài: からい → から + そうです = からそうです. Bản いそうです giữ い nên thành "nghe nói cay" — sai với ngữ cảnh đề bài.',
        },
        {
          kind: 'choice', prompt: '「かのじょは うれしそうです。」 — vì sao biết đây là "trông có vẻ" chứ không phải "nghe nói"?',
          options: ['Vì うれしい đã bỏ い, lấy gốc tính từ ghép そうです — dấu hiệu của dạng vẻ ngoài', 'Vì câu có chữ です cuối câu', 'Vì うれしい là tính từ な', 'Vì そうです luôn luôn nghĩa là trông có vẻ'],
          answerIndex: 0, explanationVi: 'Chỗ ghép quyết định nghĩa: gốc tính từ (bỏ い/な) + そうです = vẻ ngoài; mệnh đề đầy đủ + そうです = nghe nói. です cuối câu thì cả hai dạng đều có.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng nghĩa "kỳ thi này trông có vẻ khó"?',
          options: ['この しけんは むずかしそうです。', 'この しけんは むずかしい そうです。', 'この しけんは むずかしいだ そうです。', 'この しけんは むずかしかったそうです。'],
          answerIndex: 0, explanationVi: 'むずかしい → むずかし + そうです (bỏ い). Bản 2 là "nghe nói khó", bản 3 sai vì い-Adj không ghép だ, bản 4 là "nghe nói (kỳ trước) đã khó".',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Picnic Chủ nhật',
      situationVi: 'Tanaka rủ Linh đi công viên Chủ nhật; hai bạn bàn về dự báo thời tiết.',
      lines: [
        { speaker: 'たなか', ja: 'リンさん、にちようびに こうえんへ いきませんか。', vi: 'Linh này, Chủ nhật đi công viên không?' },
        { speaker: 'リン', ja: 'いいですね。でも、てんきが ちょっと しんぱいです。', vi: 'Tốt đấy. Nhưng tôi hơi lo thời tiết.' },
        { speaker: 'たなか', ja: '天気予報に よると、にちようびは はれ だそうですよ。', vi: 'Theo dự báo thời tiết thì Chủ nhật trời nắng đấy.' },
        { speaker: 'リン', ja: 'ほんとうですか。よかったですね。', vi: 'Thật à. May quá.' },
        { speaker: 'たなか', ja: 'ええ。でも、ニュースに よると、あさは すずしく なる そうです。ジャケットを もって いきましょう。', vi: 'Ừ. Nhưng theo bản tin, sáng sẽ lạnh lên. Mang theo áo khoác nhé.' },
        { speaker: 'リン', ja: 'そうですね。あした、かさを かいに いきます。', vi: 'Đúng rồi. Mai tôi đi mua ô.' },
        { speaker: 'たなか', ja: 'この まえの かさは どうしましたか。', vi: 'Chiếc ô hôm trước thế nào rồi?' },
        { speaker: 'リン', ja: 'えきに わすれた と おもいます。', vi: 'Tôi nghĩ là để quên ở ga.' },
        { speaker: 'たなか', ja: 'それは ざんねんでしたね。じゃあ、あした いっしょに かいに いきましょう。', vi: 'Tiếc thật. Vậy mai mình cùng đi mua nhé.' },
        { speaker: 'リン', ja: 'はい、よろしく おねがいします。', vi: 'Vâng, nhờ bạn.' },
      ],
    },
    {
      titleVi: 'Cô giáo mới',
      situationVi: 'Min và Linh nói chuyện trong giờ giải lao tại trường.',
      lines: [
        { speaker: 'ミン', ja: 'リンさん、ねむそうですね。だいじょうぶですか。', vi: 'Linh, trông bạn có vẻ buồn ngủ nhỉ. Bạn ổn chứ?' },
        { speaker: 'リン', ja: 'ええ、きのう 十二じまで しゅくだいを して いました。', vi: 'Ừ, hôm qua tôi làm bài tập đến 12 giờ.' },
        { speaker: 'ミン', ja: 'たいへんでしたね。あの人は だれですか。きびしそうな 人ですね。', vi: 'Vất vả nhỉ. Người kia là ai vậy? Trông nghiêm khắc thế.' },
        { speaker: 'リン', ja: 'あの人は ことし きた 新しい せんせいです。', vi: 'Người đó là cô giáo mới đến năm nay.' },
        { speaker: 'ミン', ja: 'そうなんですか。どんな せんせいですか。', vi: 'Vậy à. Cô là người thế nào?' },
        { speaker: 'リン', ja: 'いつも きびしいですが、こどもが すき だそうです。', vi: 'Lúc nào cũng nghiêm khắc, nhưng nghe nói cô rất thích trẻ con.' },
        { speaker: 'ミン', ja: 'うわさに よると、その せんせいは ことし 結婚する そうですよ。', vi: 'Theo tin đồn thì năm nay cô ấy sắp kết hôn đấy.' },
        { speaker: 'リン', ja: 'ほんとうですか。だれから ききましたか。', vi: 'Thật à? Bạn nghe từ ai vậy?' },
        { speaker: 'ミン', ja: 'こうちょうせんせいに ききました。おいしゃさんと けっこんする そうです。', vi: 'Tôi nghe hiệu trưởng nói. Nghe nói cô cưới bác sĩ.' },
        { speaker: 'リン', ja: 'それは よかったですね。なんだか わたしも うれしく なりました。', vi: 'Vậy thì tốt quá. Không hiểu sao tôi cũng vui theo.' },
      ],
    },
  ],
  listening: [
    { scriptJa: '天気予報に よると、あしたは あめ だそうです。', meaningVi: 'Theo dự báo thời tiết, ngày mai trời mưa.', choices: ['Ngày mai trời mưa theo dự báo', 'Ngày mai trời nắng to', 'Tôi sẽ đi picnic ngày mai', 'Hôm qua trời mưa to'], answerIndex: 0, dictation: true },
    { scriptJa: 'この カレーは からそうです。', meaningVi: 'Cà ri này trông có vẻ cay.', choices: ['Cà ri này rất cay', 'Tôi vừa ăn cà ri xong', 'Cà ri này trông có vẻ cay', 'Nghe nói quán hết cà ri'], answerIndex: 2, dictation: true },
    { scriptJa: 'かのじょは うれしそうに わらって います。', meaningVi: 'Cô ấy đang cười một cách vui vẻ.', choices: ['Cô ấy cười mà trông rất buồn', 'Cô ấy đang cười một cách vui vẻ', 'Nghe nói cô ấy vừa mua đồ', 'Cô ấy vừa khóc xong'], answerIndex: 1 },
    { scriptJa: 'ともだちの はなしでは あの えいがは おもしろかった そうです。', meaningVi: 'Theo lời bạn tôi, bộ phim đó rất hay.', choices: ['Bộ phim đó nhàm chán', 'Tôi sẽ không xem phim đó', 'Theo lời bạn tôi, bộ phim đó rất hay', 'Chúng tôi vừa xem phim xong'], answerIndex: 2 },
  ],
  reading: {
    titleVi: 'Bạn bị bệnh',
    lines: [
      { text: 'きのう、ゆきさんに でんわを かけました。', vi: 'Hôm qua tôi gọi điện cho Yukisan.' },
      { text: 'でも、だれも でませんでした。', vi: 'Nhưng không ai bắt máy.' },
      { text: 'きょう、ゆきさんの ともだちに ききました。', vi: 'Hôm nay tôi hỏi bạn của Yukisan.' },
      { text: 'ともだちの はなしでは、ゆきさんは びょうき だそうです。', vi: 'Theo lời bạn ấy kể, Yukisan bị bệnh.' },
      { text: 'かぜを ひいて、ねている そうです。', vi: 'Nghe nói cô ấy bị cảm và đang nằm nghỉ.' },
      { text: 'ゆきさんは あしたも やすむ そうです。', vi: 'Nghe nói ngày mai Yukisan cũng nghỉ.' },
      { text: 'わたしは ゆきさんの 顔を おもいだしました。いつも かわいい 笑顔でした。', vi: 'Tôi nhớ lại khuôn mặt Yukisan. Lúc nào cô ấy cũng có nụ cười đáng yêu.' },
      { text: 'はやく よく なって ください。', vi: 'Mong cô ấy sớm khỏe lại.' },
    ],
    questions: [
      { questionVi: 'Vì sao hôm qua không ai bắt máy?', choices: ['Vì Yukisan bị bệnh, đang nằm nghỉ', 'Vì cô ấy đi du lịch', 'Vì cô ấy đang học bài', 'Vì điện thoại bị hỏng'], answerIndex: 0, explanationVi: 'Dòng 4–5: びょうき だそうです・かぜを ひいて ねている そうです — tin được bạn của Yuksan kể lại theo dạng truyền đạt.' },
      { questionVi: 'Người viết biết tin Yukisan bị bệnh từ đâu?', choices: ['Bạn của Yukisan kể lại', 'Bản tin thời tiết', 'Thầy cô giáo', 'Nhìn thấy tận mắt'], answerIndex: 0, explanationVi: 'Dòng 3–4: ともだちに ききました → ともだちの はなしでは — nguồn tin là bạn của Yukisan.' },
      { questionVi: 'Theo người viết, Yukisan thường có nụ cười thế nào?', choices: ['Lúc nào cũng đáng yêu', 'Buồn bã', 'Nghiêm khắc', 'Hiếm khi cười'], answerIndex: 0, explanationVi: 'Dòng 7: いつも かわいい 笑顔でした — 笑顔 là từ vựng kanji của bài (顔 + 笑).' },
    ],
  },
  speakSentences: [
    { ja: '天気予報に よると、あしたは あめ だそうです。', vi: 'Theo dự báo thời tiết, ngày mai trời mưa.' },
    { ja: 'この カレーは からそうです。', vi: 'Cà ri này trông có vẻ cay.' },
    { ja: 'かのじょは うれしそうですね。', vi: 'Trông cô ấy có vẻ vui nhỉ.' },
    { ja: 'かれは ねむそうです。', vi: 'Trông anh ấy có vẻ buồn ngủ.' },
  ],
  translatePairs: [
    { ja: '天気予報に よると、あしたは はれ だそうです。', vi: 'Theo dự báo thời tiết, ngày mai trời quang đãng.', tokens: ['天気予報', 'に', 'よると', 'あした', 'は', 'はれ', 'だそうです'], distractors: ['そうです'] },
    { ja: 'うわさに よると、あの レストランは おいしい そうです。', vi: 'Theo tin đồn, nhà hàng đó ngon.', tokens: ['うわさに', 'よると', 'あの', 'レストラン', 'は', 'おいしい', 'そうです'], distractors: ['だそうです'] },
    { ja: 'かのじょは かなしそうな 顔を しています。', vi: 'Cô ấy có gương mặt buồn bã.', tokens: ['かのじょ', 'は', 'かなしそうな', '顔', 'を', 'しています'], distractors: ['うれしそうな'] },
    { ja: 'この いぬは こわそうです。', vi: 'Con chó này trông đáng sợ.', tokens: ['この', 'いぬ', 'は', 'こわ', 'そうです'], distractors: ['こわい'] },
    { ja: 'かれは 来年 結婚する そうです。', vi: 'Nghe nói năm sau anh ấy kết hôn.', tokens: ['かれ', 'は', '来年', '結婚する', 'そうです'], distractors: ['そうに'] },
  ],
  kanji: ['顔', '目', '声'],
}
