/**
 * NihongoGo — Bài 32: Động từ tự động & quá độ — 自動詞・他動詞.
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson32: CurriculumLesson = {
  order: 32,
  slug: 'l32-tu-dong-qua-do',
  title: 'Động từ tự động & quá độ — 自動詞・他動詞',
  titleJa: '自動詞・他動詞',
  description: 'Phân biệt cặp động từ tự động và quá độ để miêu tả chính xác trạng thái và hành động.',
  learningObjectives: [
    'Nhận diện cặp động từ tự động/quá độ',
    'Chọn đúng trợ từ cho từng loại động từ',
    'Miêu tả trạng thái của vật thể',
  ],
  grammarTopics: ['Cặp động từ tự động và quá độ', 'Phân biệt を・が theo loại động từ'],
  vocabularyTopics: ['Cặp động từ thông dụng', 'Trạng thái vật thể'],
  kanjiTopics: ['Kanji tự động & quá độ (開・閉・壊)'],
  difficulty: 'ELEMENTARY',
  vocabulary: [
    { term: '開きます', reading: 'あきます', romaji: 'akimasu', meaningVi: 'mở ra (tự động — cửa, cửa hàng)', pos: 'động từ nhóm 1', exampleJa: 'デパートは あさ 10じに 開きます。', exampleVi: 'Bách hóa tổng hợp mở cửa lúc 10 giờ sáng.' },
    { term: '開けます', reading: 'あけます', romaji: 'akemasu', meaningVi: 'mở (quá độ — tác động lên vật)', pos: 'động từ nhóm 2', exampleJa: 'あさ、まどを 開けます。', exampleVi: 'Buổi sáng tôi mở cửa sổ.' },
    { term: '閉まります', reading: 'しまります', romaji: 'shimarimasu', meaningVi: 'đóng lại (tự động)', pos: 'động từ nhóm 1', exampleJa: 'みせは よる 8じに 閉まります。', exampleVi: 'Cửa hàng đóng cửa lúc 8 giờ tối.' },
    { term: '閉めます', reading: 'しめます', romaji: 'shimemasu', meaningVi: 'đóng (quá độ — tác động lên vật)', pos: 'động từ nhóm 2', exampleJa: 'うちへ かえる とき、ドアを 閉めます。', exampleVi: 'Khi về nhà, tôi đóng cửa lại.' },
    { term: '壊れます', reading: 'こわれます', romaji: 'kowaremasu', meaningVi: 'bị hỏng, bị vỡ (tự động)', pos: 'động từ nhóm 2', exampleJa: 'この パソコンは よく 壊れます。', exampleVi: 'Chiếc máy tính này hay hỏng.' },
    { term: '壊します', reading: 'こわします', romaji: 'kowashimasu', meaningVi: 'làm hỏng, làm vỡ (quá độ)', pos: 'động từ nhóm 1', exampleJa: 'いもうとは よく コップを 壊します。', exampleVi: 'Em gái tôi hay làm vỡ cốc.' },
    { term: 'きえます', romaji: 'kiemasu', meaningVi: 'tắt đi, lụi tắt (tự động — đèn, lửa)', pos: 'động từ nhóm 1', exampleJa: 'よる 12じに でんきが きえます。', exampleVi: 'Đèn tắt lúc 12 giờ đêm.' },
    { term: 'けします', romaji: 'keshimasu', meaningVi: 'tắt (quá độ — đèn, lửa, TV)', pos: 'động từ nhóm 1', exampleJa: 'うちを でる とき、でんきを けします。', exampleVi: 'Khi ra khỏi nhà, tôi tắt đèn.' },
    { term: 'はいります', romaji: 'hairimasu', meaningVi: 'vào, nằm trong (tự động)', pos: 'động từ nhóm 1', exampleJa: 'この かさは かばんに はいります。', exampleVi: 'Chiếc dù này vừa chiếc cặp.' },
    { term: 'いれます', romaji: 'iremasu', meaningVi: 'bỏ vào, cắm vào (quá độ)', pos: 'động từ nhóm 2', exampleJa: 'かばんに ほんを いれます。', exampleVi: 'Tôi bỏ sách vào cặp.' },
    { term: 'でます', romaji: 'demasu', meaningVi: 'ra (ngoài), đi ra (tự động)', pos: 'động từ nhóm 2', exampleJa: 'あさ 7じに うちから でます。', exampleVi: 'Buổi sáng 7 giờ tôi ra khỏi nhà.' },
    { term: 'だします', romaji: 'dashimasu', meaningVi: 'lấy ra, đưa ra (quá độ)', pos: 'động từ nhóm 1', exampleJa: 'かばんから ほんを だします。', exampleVi: 'Tôi lấy sách ra khỏi cặp.' },
    { term: 'ドア', romaji: 'doa', meaningVi: 'cửa (ra vào)', pos: 'danh từ', exampleJa: 'ドアが あいて います。', exampleVi: 'Cửa đang mở.' },
    { term: 'まど', romaji: 'mado', meaningVi: 'cửa sổ', pos: 'danh từ', exampleJa: 'まどを 開けて ください。', exampleVi: 'Xin vui lòng mở cửa sổ.' },
    { term: 'れいぞうこ', romaji: 'reizōko', meaningVi: 'tủ lạnh', pos: 'danh từ', exampleJa: 'れいぞうこに ジュースが はいって います。', exampleVi: 'Trong tủ lạnh có nước ép.' },
    { term: 'スイッチ', romaji: 'suitchi', meaningVi: 'công tắc, nút bật', pos: 'danh từ', exampleJa: 'スイッチを いれて ください。', exampleVi: 'Xin vui lòng bật công tắc.' },
    { term: 'エアコン', romaji: 'eakon', meaningVi: 'máy lạnh, máy điều hòa', pos: 'danh từ', exampleJa: 'エアコンが ついて います。', exampleVi: 'Máy lạnh đang chạy.' },
    { term: 'ふた', romaji: 'futa', meaningVi: 'nắp, nắp đậy', pos: 'danh từ', exampleJa: 'ふたを 閉めて ください。', exampleVi: 'Xin vui lòng đóng nắp lại.' },
  ],
  grammar: [
    {
      code: 'l32-jidou-tadou',
      title: 'Cặp động từ 自動詞・他動詞 — cùng sự việc, hai góc nhìn',
      formation: 'Tự động (chủ ngữ + が, không tân ngữ): あきます・しまります・きえます・こわれます・はいります・でます ↔ Quá độ (tân ngữ + を): あけます・しめます・けします・こわします・いれます・だします',
      explanationVi:
        'Nhiều động từ tiếng Nhật đi thành CẶP: TỰ ĐỘNG (自動詞) mô tả sự việc diễn ra TỰ NHIÊN — cửa mở, đèn tắt, máy hỏng — không nhấn người tác động, chủ ngữ đứng với が; QUÁ ĐỘ (他動詞) mô tả HÀNH ĐỘNG của người TÁC ĐỘNG LÊN vật — mở cửa, tắt đèn, làm hỏng máy — tân ngữ đứng với を. So sánh: 「ドアが あきました」 = cửa đã mở ra — chỉ kể sự việc; 「(わたしは) ドアを あけました」 = tôi đã MỞ cửa — nhấn người làm. Hình thức hai động từ trong cặp hơi khác nhau (あきます/あけます; しまります/しめます; こわれます/こわします) nên cần học KHÔNG theo từng từ lẻ mà theo cả cặp.',
      examples: [
        { ja: 'ドアが あきました。', vi: 'Cửa đã mở ra. (tự động — kể sự việc)' },
        { ja: 'わたしは ドアを あけました。', vi: 'Tôi đã mở cửa. (quá độ — hành động)', tokens: ['わたし', 'は', 'ドア', 'を', 'あけました'] },
        { ja: 'とけいが こわれました。', vi: 'Chiếc đồng hồ bị hỏng. (tự động)' },
        { ja: 'いもうとは コップを こわしました。', vi: 'Em gái tôi làm vỡ cái cốc. (quá độ)' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'こわします / こわれます — chọn dạng đúng (Em gái tôi đã làm vỡ cốc)',
          sentence: 'いもうとは コップを ___ました。',
          options: ['こわし', 'こわれ', 'こわって', 'こわり'],
          answerIndex: 0, explanationVi: 'Có tân ngữ コップを (người tác động lên vật) → dùng QUÁ ĐỘ こわします, thân ghép ました là こわしま… → こわし＋ました. こわれ là thân TỰ ĐỘNG.',
        },
        {
          kind: 'choice', prompt: '「まどが しまりました。」 và 「まどを しめました。」 khác nhau ở đâu?',
          options: ['Câu 1: cửa sổ tự đóng; câu 2: ai đó đã đóng cửa sổ', 'Hai câu giống hệt nhau', 'Câu 1: ai đó đã đóng; câu 2: cửa sổ tự đóng', 'Câu 1 sai ngữ pháp, câu 2 đúng'],
          answerIndex: 0, explanationVi: 'しまりました là TỰ ĐỘNG + が — cửa tự đóng (kể sự việc); しめました là QUÁ ĐỘ + を — có người đã chủ động đóng cửa.',
        },
        {
          kind: 'particle', prompt: 'Chọn trợ từ (Đèn đã tắt)',
          sentence: 'でんき___ きえました。',
          options: ['が', 'を', 'に', 'で'],
          answerIndex: 0, explanationVi: 'きえます là TỰ ĐỘNG — sự việc của chính vật đó → chủ ngữ でんき đứng với が, không dùng を.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['パソコンを こわれました。', 'パソコンが こわれました。', 'パソコンが こわしました。', 'パソコンを こわって いました。'],
          answerIndex: 1, explanationVi: 'Máy tự hỏng → TỰ ĐỘNG こわれました + が. を + こわれ là sai cặp trợ từ; が + こわしました thiếu người tác động; こわって いました không ghép được với を.',
        },
      ],
    },
    {
      code: 'l32-jidou-teiru',
      title: '自動詞 + ています — mô tả trạng thái của vật thể',
      formation: 'Tự động (chỉ sự thay đổi) + ています: あいて います / しまって います / きえて います / こわれて います / はいって います',
      explanationVi:
        'Với TỰ ĐỘNG chỉ sự thay đổi (あきます・しまります・きえます…), mẫu 〜ています KHÔNG mang nghĩa "đang làm" mà mô tả KẾT QUẢ còn giữ đến hiện tại — TRẠNG THÁI của vật: 「ドアが あいて います」 = cửa ĐANG MỞ (không phải "cửa đang tự mở ra"). So sánh ba mức: 「ドアが あきました」 = cửa vừa mở (SỰ KIỆN tại một thời điểm); 「ドアが あいて います」 = cửa đang mở (TÌNH TRẠNG bây giờ); 「ドアを あけました」 = (ai đó) đã mở cửa (HÀNH ĐỘNG của người). Phủ định trạng thái: 「しまって いません」 = cửa chưa đóng. Đây là cách nói tự nhiên nhất khi tả cảnh vật quanh mình: 「でんきが きえて います」・「みせは もう しまって います」.',
      examples: [
        { ja: 'ドアが あいて います。', vi: 'Cửa đang mở.', tokens: ['ドア', 'が', 'あいて', 'います'] },
        { ja: 'でんきが きえて います。', vi: 'Đèn đang tắt.' },
        { ja: 'みせは もう しまって います。', vi: 'Cửa hàng đã đóng cửa rồi.' },
        { ja: 'かばんに にもつが はいって います。', vi: 'Hành lý đang nằm trong cặp.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '「みせは しまって います。」 có nghĩa là gì?',
          options: ['Cửa hàng vừa mở cửa', 'Cửa hàng đang đóng cửa (trạng thái)', 'Cửa hàng đang tự đóng lại (đang chuyển động)', 'Cửa hàng bán cửa ra vào'],
          answerIndex: 1, explanationVi: '自動詞 + ています = trạng thái còn giữ: cửa hàng ĐANG ở trạng thái đóng (không phải đang thực hiện hành động đóng). Nếu kể sự kiện vừa xảy ra thì dùng しまりました.',
        },
        {
          kind: 'fill', prompt: 'Điền dạng đúng (Cửa đang mở nên xin mời vào)',
          sentence: 'ドアが ___いますから、はいって ください。',
          options: ['あけます', 'あきます', 'あいて', 'あけて'],
          answerIndex: 2, explanationVi: 'Trạng thái "đang mở" dùng TỰ ĐỘNG あきます ở て-form: あいて います. あけて là QUÁ ĐỘ (cần người mở), ます-form không đứng trước います.',
        },
        {
          kind: 'particle', prompt: 'Chọn trợ từ (Trong tủ lạnh có nước ép)',
          sentence: 'れいぞうこ___ ジュースが はいって います。',
          options: ['を', 'が', 'に', 'で'],
          answerIndex: 2, explanationVi: 'はいって います mô tả vật NẰM TRONG chỗ nào → chỗ chứa đứng với に: れいぞうこに はいって います. を・が không đánh dấu vị trí chứa.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['ドアが あいて います。', 'ドアが あけて います。', 'ドアを あいて います。'],
          answerIndex: 0, explanationVi: 'Trạng thái của chính cửa → TỰ ĐỘNG あいて + が. あけて là QUÁ ĐỘ (phải có người làm, đi với を); あいて là tự động nên không ghép với を.',
        },
      ],
    },
    {
      code: 'l32-particle-wo-ga',
      title: 'Phân biệt を・が — chọn trợ từ theo loại động từ',
      formation: 'Tự động → が: まどが しまりました / エアコンが きえました; Quá độ → を: まどを しめました / エアコンを けしました; lời nhờ/câu mệnh lệnh luôn dùng quá độ: まどを あけて ください',
      explanationVi:
        'Cùng một vật, trợ từ thay đổi theo loại động từ: kể SỰ VIỆC / TRẠNG THÁI của chính vật đó → TỰ ĐỘNG + が: 「エアコンが きえました」 (máy lạnh tự tắt). Nói HÀNH ĐỘNG của người tác động lên vật → QUÁ ĐỘ + を: 「(わたしが) エアコンを けしました」 (tôi đã tắt máy lạnh). Khi YÊU CẦU / NHỜ ai làm gì, bắt buộc dùng QUÁ ĐỘ: 「まどを あけて ください」 — không nói 「まどが あけて ください」. Ngược lại, khi BÁO một sự việc cho người khác, TỰ ĐỘNG tự nhiên hơn: 「まどが こわれましたよ」. Mẹo nhanh: muốn nói "cửa / máy TỰ NHIÊN thế nào" → が; muốn nói "AI ĐÓ làm gì cửa / máy" → を.',
      examples: [
        { ja: 'すみません、ドアを あけて ください。', vi: 'Xin lỗi, vui lòng mở giúp cửa.', tokens: ['すみません', 'ドア', 'を', 'あけて', 'ください'] },
        { ja: 'エアコンが きえました。', vi: 'Máy lạnh (tự) tắt rồi.' },
        { ja: 'さむいですから、まどを しめて ください。', vi: 'Trời lạnh nên vui lòng đóng cửa sổ.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Chọn trợ từ (Vui lòng đóng cửa sổ lại)',
          sentence: 'まど___ しめて ください。',
          options: ['を', 'が', 'に', 'で'],
          answerIndex: 0, explanationVi: 'Lời nhờ ai tác động lên vật → QUÁ ĐỘ しめて + を: まどを しめて ください. が dùng với tự động (まどが しまります).',
        },
        {
          kind: 'particle', prompt: 'Chọn trợ từ (Cửa đã mở ra — sự việc)',
          sentence: 'ドア___ あきました。',
          options: ['を', 'に', 'へ', 'が'],
          answerIndex: 3, explanationVi: 'あきました là TỰ ĐỘNG, cửa là CHỦ NGỮ của sự việc → ドアが あきました. を chỉ dùng với quá độ (ドアを あけました).',
        },
        {
          kind: 'choice', prompt: 'Muốn NHỜ người khác bật máy lạnh, nói câu nào?',
          options: ['エアコンが はいって ください。', 'エアコンが いれて ください。', 'エアコンを いれて ください。', 'エアコンを はいって ください。'],
          answerIndex: 2, explanationVi: 'Nhờ người tác động lên máy → QUÁ ĐỘ いれます + を: エアコンを いれて ください. はいって/はいって ください là TỰ ĐỘNG, không dùng để nhờ việc.',
        },
        {
          kind: 'fill', prompt: 'Điền dạng đúng (Trời nóng nhỉ, vui lòng bật công tắc máy lạnh)',
          sentence: 'あついですね。エアコンの スイッチを ___ください。',
          options: ['はいって', 'いれて', 'いれました', 'はいりません'],
          answerIndex: 1, explanationVi: 'スイッチを + QUÁ ĐỘ いれます (bỏ vào/bật) ở て-form: いれて ください. はいって là TỰ ĐỘNG; いれました・はいりません không ghép với ください.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Phòng nóng quá!',
      situationVi: 'Trong phòng câu lạc bộ, trời nóng, Linh và Min chỉnh cửa sổ và máy lạnh.',
      lines: [
        { speaker: 'リン', ja: 'ここは あついですね。エアコンは ついて いますか。', vi: 'Phòng này nóng nhỉ. Máy lạnh có đang chạy không?' },
        { speaker: 'ミン', ja: 'いいえ、きえて います。スイッチを いれますね。', vi: 'Không, đang tắt. Để tôi bật công tắc nhé.' },
        { speaker: 'リン', ja: 'ありがとう。あ、まどが あいて いますよ。', vi: 'Cảm ơn. À, cửa sổ đang mở đấy.' },
        { speaker: 'ミン', ja: 'じゃ、まどを しめて ください。', vi: 'Vậy thì bạn đóng cửa sổ giúp tôi nhé.' },
        { speaker: 'リン', ja: 'はい。あ、エアコンが つきました。すずしく なりましたね。', vi: 'Được. À, máy lạnh đã chạy rồi. Mát hẳn ra nhỉ.' },
        { speaker: 'ミン', ja: 'でも、ドアが あいて いますよ。', vi: 'Nhưng mà cửa ra vào đang mở đấy.' },
        { speaker: 'リン', ja: 'あ、すみません。ドアも しめます。', vi: 'Á, xin lỗi. Tôi đóng cả cửa luôn.' },
        { speaker: 'ミン', ja: 'ありがとうございます。これで だいじょうぶです。', vi: 'Cảm ơn bạn. Vậy là ổn rồi.' },
      ],
    },
    {
      titleVi: 'Chiếc đồng hồ bị hỏng',
      situationVi: 'Min làm rơi vỡ đồng hồ, Linh giới thiệu một cửa hàng gần ga.',
      lines: [
        { speaker: 'ミン', ja: 'リンさん、ちょっと みて ください。とけいが こわれました。', vi: 'Linh ơi, nhìn này. Đồng hồ của tôi bị hỏng rồi.' },
        { speaker: 'リン', ja: 'ああ、どうしましたか。', vi: 'Ồ, đã có chuyện gì vậy?' },
        { speaker: 'ミン', ja: 'きのう おとして しまいました。', vi: 'Hôm qua tôi đánh rơi mất rồi.' },
        { speaker: 'リン', ja: 'たいへんですね。', vi: 'Thật là khổ nhé.' },
        { speaker: 'ミン', ja: 'ええ。あたらしい とけいを かいます。', vi: 'Ừ. Tôi sẽ mua đồng hồ mới.' },
        { speaker: 'リン', ja: 'えきの まえに とけいの みせが ありますよ。', vi: 'Trước ga có cửa hàng đồng hồ đấy.' },
        { speaker: 'ミン', ja: 'その みせは なんじまで あいて いますか。', vi: 'Cửa hàng đó mở đến mấy giờ?' },
        { speaker: 'リン', ja: 'よる 8じまでです。いっしょに いきませんか。', vi: 'Mở đến 8 giờ tối. Đi cùng nhau không?' },
        { speaker: 'ミン', ja: 'いいですね。じゃあ、6じに えきで あいましょう。', vi: 'Được đấy. Vậy 6 giờ gặp nhau ở ga nhé.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'ドアが あいて いますよ。', meaningVi: 'Cửa đang mở đấy.', choices: ['Cửa đang mở', 'Cửa đã bị đóng sầm', 'Cửa vừa tự đóng lại', 'Bạn hãy mở cửa ra'], answerIndex: 0, dictation: true },
    { scriptJa: 'まどを しめて ください。', meaningVi: 'Vui lòng đóng cửa sổ lại.', choices: ['Vui lòng đóng cửa sổ lại', 'Cửa sổ đang đóng', 'Vui lòng mở cửa sổ ra', 'Cửa sổ tự đóng rồi'], answerIndex: 0, dictation: true },
    { scriptJa: 'けさ、パソコンが こわれました。', meaningVi: 'Sáng nay máy tính bị hỏng.', choices: ['Sáng nay máy tính bị hỏng', 'Sáng nay tôi làm hỏng máy tính', 'Máy tính đã được sửa sáng nay', 'Tôi mua máy tính sáng nay'], answerIndex: 0 },
    { scriptJa: 'みせは もう しまって います。', meaningVi: 'Cửa hàng đã đóng cửa rồi.', choices: ['Cửa hàng vừa mới mở cửa', 'Cửa hàng đã đóng cửa rồi', 'Cửa hàng đang dọn dẹp để đóng', 'Cửa hàng mở cửa đến sáng mai'], answerIndex: 1 },
    { scriptJa: 'れいぞうこに ジュースが はいって います。', meaningVi: 'Trong tủ lạnh có nước ép.', choices: ['Tôi vừa bỏ nước ép vào tủ lạnh', 'Trong tủ lạnh có nước ép', 'Nước ép trong tủ lạnh bị hỏng', 'Tôi muốn uống nước ép lạnh'], answerIndex: 1 },
  ],
  reading: {
    titleVi: 'Phòng của Min bây giờ',
    lines: [
      { text: 'ミンさんは きょう ともだちの いえへ いきました。', vi: 'Hôm nay Min đi đến nhà bạn.' },
      { text: 'でも、へやの でんきが ついて います。', vi: 'Nhưng đèn trong phòng vẫn đang bật.' },
      { text: 'エアコンも ついて います。', vi: 'Máy lạnh cũng vẫn đang chạy.' },
      { text: 'まどが あいて いますから、へやは すずしいです。', vi: 'Vì cửa sổ đang mở nên phòng mát.' },
      { text: 'テレビは きえて います。', vi: 'Tivi đang tắt.' },
      { text: 'つくえの うえに とけいが あります。とけいは こわれて いません。', vi: 'Trên bàn có chiếc đồng hồ. Đồng hồ không hỏng.' },
      { text: 'れいぞうこには ケーキが はいって います。', vi: 'Trong tủ lạnh có bánh kem.' },
      { text: 'あとで リンさんが でんきを けして、まどを しめます。', vi: 'Lát nữa Linh sẽ tắt đèn và đóng cửa sổ lại.' },
    ],
    questions: [
      { questionVi: 'Bây giờ đèn trong phòng của Min như thế nào?', choices: ['Đang bật', 'Đã tắt', 'Bị hỏng', 'Không có đèn'], answerIndex: 0, explanationVi: 'Câu 2: でんきが ついて います — tự động + ています = trạng thái "đang bật".' },
      { questionVi: 'Vì sao phòng của Min mát?', choices: ['Vì cửa sổ đang mở', 'Vì máy lạnh đã hỏng', 'Vì đang là mùa đông', 'Vì phòng ở tầng cao'], answerIndex: 0, explanationVi: 'Câu 4: まどが あいて いますから、すずしいです — cửa sổ đang mở nên mát (dùng から đã học để nêu lý do).' },
      { questionVi: 'Lát nữa Linh làm gì?', choices: ['Tắt đèn và đóng cửa sổ', 'Bật tivi', 'Ăn bánh kem', 'Mở cửa sổ to hơn'], answerIndex: 0, explanationVi: 'Câu 8: でんきを けして、まどを しめます — hành động của NGƯỜI lên vật nên dùng QUÁ ĐỘ + を.' },
    ],
  },
  speakSentences: [
    { ja: 'ドアが あいて います。', vi: 'Cửa đang mở.' },
    { ja: 'まどを あけて ください。', vi: 'Vui lòng mở cửa sổ ra.' },
    { ja: 'みせは もう しまって います。', vi: 'Cửa hàng đã đóng cửa rồi.' },
    { ja: 'でんきを けして、まどを しめました。', vi: 'Tôi đã tắt đèn và đóng cửa sổ lại.' },
  ],
  translatePairs: [
    { ja: 'ドアが あいて います。', vi: 'Cửa đang mở.', tokens: ['ドア', 'が', 'あいて', 'います'], distractors: ['を', 'あけます'] },
    { ja: 'まどを あけて ください。', vi: 'Vui lòng mở cửa sổ ra.', tokens: ['まど', 'を', 'あけて', 'ください'], distractors: ['が', 'あいて'] },
    { ja: 'みせは もう しまって います。', vi: 'Cửa hàng đã đóng cửa rồi.', tokens: ['みせ', 'は', 'もう', 'しまって', 'います'], distractors: ['しめて'] },
    { ja: 'けさ とけいが こわれました。', vi: 'Sáng nay chiếc đồng hồ bị hỏng.', tokens: ['けさ', 'とけい', 'が', 'こわれました'], distractors: ['こわしました'] },
    { ja: 'スイッチを いれて ください。', vi: 'Vui lòng bật công tắc lên.', tokens: ['スイッチ', 'を', 'いれて', 'ください'], distractors: ['はいって'] },
  ],
  kanji: ['開', '閉', '壊'],
}
