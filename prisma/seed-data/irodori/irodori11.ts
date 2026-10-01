/**
 * NihongoGo — Irodori A1 · Bài 11: げんき (Sức khoẻ & cảm giác).
 * Nội dung GỐC 100% — chỉ tham chiếu chủ đề giao tiếp sinh tồn cấp A1,
 * KHÔNG sao chép dialogue/ví dụ/bài tập từ giáo trình có bản quyền.
 * Provenance: ORIGINAL_GENERATED · MACHINE_REVIEWED (validator + audit).
 */
import type { IrodoriLesson } from './types'

export const irodori11: IrodoriLesson = {
  order: 11,
  slug: 'irodori-11',
  title: 'げんき — Sức khoẻ & cảm giác',
  titleJa: 'からだの ちょうし',
  description: 'Hỏi thăm khi ai đó trông mệt, kể rằng mình sốt, ho, đau đầu — và nói câu chúc mau khỏe "quốc dân" おだいじに.',
  learningObjectives: [
    'Hỏi ai đó không ổn bằng どうしましたか',
    'Kể triệu chứng: sốt, ho, đau, mệt',
    'Dùng phủ định trạng thái じゃないです',
  ],
  grammarTopics: ['どうしましたか', 'ねつが あります', '〜じゃないです (trạng thái)'],
  vocabularyTopics: ['Triệu chứng bệnh', 'Cảm giác & tinh thần', 'Lời chúc mau khỏe'],
  kanjiTopics: ['病', '顔'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'かぜ', romaji: 'kaze', meaningVi: 'cảm cúm, cảm lạnh', pos: 'danh từ', exampleJa: 'かぜを ひきました。', exampleVi: 'Tôi bị cảm.' },
    { term: 'ねつ', romaji: 'netsu', meaningVi: 'cơn sốt', pos: 'danh từ', exampleJa: 'ねつが あります。', exampleVi: 'Tôi bị sốt.' },
    { term: 'せき', romaji: 'seki', meaningVi: 'cơn ho', pos: 'danh từ', exampleJa: 'せきが でます。', exampleVi: 'Tôi bị ho.' },
    { term: 'くすり', romaji: 'kusuri', meaningVi: 'thuốc', pos: 'danh từ', exampleJa: 'くすりを のみます。', exampleVi: 'Tôi uống thuốc.' },
    { term: 'びょうき', romaji: 'byōki', meaningVi: 'bệnh, ốm', pos: 'danh từ', exampleJa: 'びょうきですから、やすみます。', exampleVi: 'Vì ốm nên tôi nghỉ.' },
    { term: 'びょういん', romaji: 'byōin', meaningVi: 'bệnh viện', pos: 'danh từ', exampleJa: 'びょういんへ いきます。', exampleVi: 'Tôi đến bệnh viện.' },
    { term: 'いたい', romaji: 'itai', meaningVi: 'đau', pos: 'tính từ い', exampleJa: 'あたまが いたいです。', exampleVi: 'Tôi đau đầu.' },
    { term: 'ねむい', romaji: 'nemui', meaningVi: 'buồn ngủ', pos: 'tính từ い', exampleJa: 'ちょっと ねむいです。', exampleVi: 'Tôi hơi buồn ngủ.' },
    { term: 'つかれます', romaji: 'tsukaremasu', meaningVi: 'mệt (động từ)', pos: 'động từ nhóm 2', exampleJa: 'きょうは とても つかれます。', exampleVi: 'Hôm nay tôi mệt lắm.' },
    { term: 'きぶん', romaji: 'kibun', meaningVi: 'cảm giác, tinh thần', pos: 'danh từ', exampleJa: 'きぶんは どうですか。', exampleVi: 'Cảm giác của bạn thế nào?' },
    { term: 'おだいじに', romaji: 'odaiji ni', meaningVi: 'chúc mau khỏe nhé', pos: 'lời chúc', exampleJa: 'おだいじに。', exampleVi: 'Chúc bạn mau khỏe nhé.' },
    { term: 'はやく', romaji: 'hayaku', meaningVi: 'nhanh, sớm', pos: 'phó từ', exampleJa: 'はやく ねます。', exampleVi: 'Tôi đi ngủ sớm.' },
    { term: 'むり', romaji: 'muri', meaningVi: 'quá sức, gắng quá', pos: 'danh từ', exampleJa: 'むりは しません。', exampleVi: 'Tôi không cố quá.' },
    { term: 'しんぱいします', romaji: 'shinpai shimasu', meaningVi: 'lo lắng', pos: 'động từ nhóm 3', exampleJa: 'かぞくは しんぱいします。', exampleVi: 'Gia đình tôi lo lắng.' },
    { term: 'だいじょうぶ', romaji: 'daijōbu', meaningVi: 'không sao, ổn rồi', pos: 'tính từ な', exampleJa: 'だいじょうぶです。', exampleVi: 'Tôi không sao.' },
  ],
  grammar: [
    {
      code: 'i11-dou-shimashita',
      title: 'どうしましたか — hỏi khi ai đó có vẻ không ổn',
      formation: 'どうしましたか · Trả lời: [triệu chứng] · かぜを ひきました / ねつが あります',
      explanationVi:
        'Thấy bạn bè trông mệt hay ho nhiều, hãy hỏi どうしましたか (có chuyện gì vậy / bạn làm sao vậy?). Đây là câu hỏi về SỰ VIỆC vừa xảy ra — khác どうですか (bài 9) vốn hỏi trạng thái. Trả lời bằng triệu chứng: ねつが あります (tôi bị sốt), せきが でます (tôi ho), あたまが いたいです (tôi đau đầu), かぜを ひきました (tôi bị cảm). Đi khám thì nói với bác sĩ y hệt các câu này — bộ câu "sinh tồn" tại bệnh viện Nhật.',
      examples: [
        { ja: 'どうしましたか。', vi: 'Bạn làm sao vậy?', tokens: ['どう', 'しました', 'か'] },
        { ja: 'ねつが あります。あたまも いたいです。', vi: 'Tôi bị sốt. Đầu cũng đau nữa.' },
        { ja: 'かぜを ひきましたから、きょうは やすみます。', vi: 'Vì tôi bị cảm nên hôm nay tôi nghỉ.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Bạn trông thấy bạn mình trông rất mệt — nên hỏi câu nào?',
          options: ['どうですか。', 'どうしましたか。', 'なにが すきですか。', 'いくらですか。'],
          answerIndex: 1, explanationVi: 'どうしましたか = "chuyện gì vừa xảy ra với bạn?" — hỏi sự việc. どうですか hỏi trạng thái chung chung.',
        },
        {
          kind: 'fill', prompt: 'Điền từ còn thiếu (Tôi bị sốt)',
          sentence: '___が あります。',
          options: ['ねつ', 'せき', 'くすり', 'きぶん'],
          answerIndex: 0, explanationVi: 'ねつが あります = bị sốt. せき đi với でます (せきが でます); くすり là thuốc; きぶん là cảm giác.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng: "Tôi đau đầu"?',
          options: ['あたまを いたいです。', 'あたまが いたいです。', 'あたまは いたいがあります。', 'あたまに いたいです。'],
          answerIndex: 1, explanationVi: 'Bộ phận đau + が + いたいです: あたまが いたいです. を là trợ từ tân ngữ hành động — tính từ đau không dùng を.',
        },
        {
          kind: 'choice', prompt: '「かぜを ひきました。」 có nghĩa là gì?',
          options: ['Tôi bị cảm', 'Tôi bị ho', 'Tôi uống thuốc', 'Tôi đi bệnh viện'],
          answerIndex: 0, explanationVi: 'ひきます (bắt phải) + かぜ = bị cảm cúm. Câu cố định rất thông dụng khi xin nghỉ.',
        },
        {
          kind: 'particle', prompt: 'Chọn trợ từ đúng (Vì bị cảm nên hôm nay tôi nghỉ)',
          sentence: 'かぜを ひきました___、きょうは やすみます。',
          options: ['から', 'が', 'まで', 'も'],
          answerIndex: 0, explanationVi: '〜から đứng sau vế lý do: ひきましたから = "vì đã bị cảm". Chú ý khác biệt với trợ từ chủ ngữ が.',
        },
      ],
    },
    {
      code: 'i11-janai-desu',
      title: '〜じゃないです — phủ định trạng thái (biết きぶん / げんき / びょうき)',
      formation: '[danh từ / tính từ な] + じゃないです · Vd: びょうきじゃないです・げんきじゃないです',
      explanationVi:
        'Muốn phủ định một TRẠNG THÁI diễn đạt bằng danh từ hoặc tính từ な, thêm じゃないです: びょうきです (ốm) → びょうきじゃないです (không ốm); げんきじゃないです (không được khỏe cho lắm). Câu trả lời mềm mại kiểu Nhật khi không muốn nói thẳng "ốm nặng": あまり げんきじゃないです (hơi không được khỏe…). Lưu ý: げんきじゃないです thường hàm ý mệt mỏi nhẹ, chưa thoải mái — nghe dịu hơn nhiều so với "tôi ốm nặng".',
      examples: [
        { ja: 'びょうきじゃないです。ちょっと つかれました。', vi: 'Tôi không ốm đâu. Chỉ hơi mệt thôi.' },
        { ja: 'きょうは あまり げんきじゃないです。', vi: 'Hôm nay tôi không được khỏe lắm.', tokens: ['きょう', 'は', 'あまり', 'げんき', 'じゃない', 'です'] },
        { ja: 'むりじゃないですか。', vi: 'Vậy có quá sức không?' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'Chọn dạng phủ định đúng (Tôi không ốm)',
          sentence: 'びょうき___。だいじょうぶです。',
          options: ['じゃないです', 'じゃあります', 'ですか', 'でした'],
          answerIndex: 0, explanationVi: 'Danh từ/tính từ な + じゃないです = phủ định. びょうきじゃないです = không ốm.',
        },
        {
          kind: 'choice', prompt: '「あまり げんきじゃないです。」 hàm ý gì?',
          options: ['Rất khỏe mạnh', 'Hơi không được khỏe', 'Đã khỏi bệnh', 'Rất thích vận động'],
          answerIndex: 1, explanationVi: 'あまり + phủ định = "không mấy…": không được khỏe cho lắm — cách nói mềm khi mệt.',
        },
        {
          kind: 'error', prompt: 'Câu phủ định nào đúng?',
          options: ['げんきじゃないです。', 'げんきじゃありません です。', 'げんきないです。', 'げんきを じゃないです。'],
          answerIndex: 0, explanationVi: 'Phủ định danh từ/tính từ な chuẩn A1: じゃないです. Các câu khác nối sai mẫu.',
        },
        {
          kind: 'fill', prompt: 'Điền từ còn thiếu (Tôi không sao, ổn rồi)',
          sentence: '___です。しんぱいしないで ください。',
          options: ['だいじょうぶ', 'ざんねん', 'こんど', 'きぶん'],
          answerIndex: 0, explanationVi: 'だいじょうぶです = "không sao". Câu này trấn an người lo lắng cho mình.',
        },
      ],
    },
    {
      code: 'i11-kibun-dou',
      title: 'きぶんは どうですか — hỏi cảm giác & lời chúc おだいじに',
      formation: 'きぶんは どうですか · Trả lời: だいじょうぶです / あまり よくないです · Chúc: おだいじに',
      explanationVi:
        'Khi biết ai đó đang không khỏe, ngày hôm sau hỏi thăm bằng きぶんは どうですか (cảm giác hôm nay thế nào?) hoặc げんきになりましたか (đã khỏe lại chưa?). Trả lời: だいじょうぶです (ổn rồi), ちょっと まだ… (vẫn chưa khá hơn lắm…). Lời chúc "quốc dân" khi tạm biệt người ốm là おだいじに — chúc mau khỏe nhé; nói kèm cảm ơn: ありがとうございます。おだいじに。Cặp từ động viên: むりしないで ください (đừng cố quá) + ゆっくり やすんで ください (nghỉ ngơi thật thoải mái nhé).',
      examples: [
        { ja: 'きぶんは どうですか。', vi: 'Cảm giác của bạn thế nào?', tokens: ['きぶん', 'は', 'どう', 'です', 'か'] },
        { ja: 'ありがとうございます。だいじょうぶです。', vi: 'Cảm ơn bạn. Tôi ổn rồi.' },
        { ja: 'おだいじに。むりしないで ください。', vi: 'Chúc mau khỏe nhé. Đừng cố quá.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Bạn vừa nghe tin đồng nghiệp ốm — câu tạm biệt nào phù hợp?',
          options: ['おだいじに。', 'またあした。', 'いっしょに いきませんか。', 'がんばります。'],
          answerIndex: 0, explanationVi: 'おだいじに = chúc mau khỏe — câu cố định nói với người đang ốm. またあした là hẹn gặp lại bình thường.',
        },
        {
          kind: 'fill', prompt: 'Điền từ còn thiếu (Cảm giác của bạn thế nào?)',
          sentence: '___は どうですか。',
          options: ['きぶん', 'びょうき', 'くすり', 'ねつ'],
          answerIndex: 0, explanationVi: 'きぶん = cảm giác/tinh thần; きぶんは どうですか là câu hỏi thăm sức khoẻ chuẩn.',
        },
        {
          kind: 'choice', prompt: '「ゆっくり やすんで ください。」 nghĩa là gì?',
          options: ['Hãy cố gắng lên!', 'Hãy nghỉ ngơi thật thoải mái nhé.', 'Hãy đi khám sớm!', 'Hãy uống thuốc đi.'],
          answerIndex: 1, explanationVi: 'ゆっくり (thong thả) + やすんで (nghỉ) + ください — lời dặn người ốm nghỉ ngơi đầy đủ.',
        },
        {
          kind: 'particle', prompt: 'Chọn từ đúng (Đừng cố quá — đừng làm quá sức)',
          sentence: 'むり___ しないで ください。',
          options: ['は', 'を', 'が', 'も'],
          answerIndex: 0, explanationVi: 'むりは しないで ください — は nhấn chủ đề "chuyện gắng sức thì đừng làm". Cụm しないで ください = "đừng làm…".',
        },
      ],
    },
  ],
  dialogue: {
    titleVi: 'Sáng mai đi khám nhé',
    situationVi: 'Buổi tối, An thấy Mai ho nhiều khi hai bạn đang ôn bài.',
    lines: [
      { speaker: 'あん', text: 'まいさん、どうしましたか。かおの いろが よくないです。', vi: 'Mai, bạn làm sao vậy? Mặt bạn trông không được khỏe.' },
      { speaker: 'まい', text: 'せきが でます。あたまも ちょっと いたいです。', vi: 'Tôi bị ho. Đầu cũng hơi đau.' },
      { speaker: 'あん', text: 'ねつは ありますか。', vi: 'Bạn có bị sốt không?' },
      { speaker: 'まい', text: 'はい、すこし あります。かぜかもしれません。', vi: 'Vâng, sốt nhẹ. Có lẽ mình bị cảm.' },
      { speaker: 'あん', text: 'びょういんへ いきませんか。あした、いっしょに いきます。', vi: 'Đi khám nhé? Mai này mình đi cùng.' },
      { speaker: 'まい', text: 'ありがとうございます。じゃあ、あした おねがいします。', vi: 'Cảm ơn bạn. Vậy mai làm phiền bạn nhé.' },
      { speaker: 'あん', text: 'きょうは はやく ねて ください。くすりものみましたか。', vi: 'Hôm nay bạn đi ngủ sớm nhé. Uống thuốc chưa?' },
      { speaker: 'まい', text: 'はい、のみました。おだいじに、って いって ください。', vi: 'Rồi, uống rồi. Chúc mình mau khỏe nhé.' },
    ],
    questions: [
      { questionVi: 'Mai có những triệu chứng nào?', choices: ['Chỉ ho', 'Ho + đau đầu + sốt nhẹ', 'Sốt cao + lạnh run', 'Mệt + buồn ngủ'], answerIndex: 1, explanationVi: 'Mai nói: せきが でます (ho), あたまも ちょっと いたい (đau đầu nhẹ), すこし ねつが あります (sốt nhẹ).' },
      { questionVi: 'An đề nghị gì?', choices: ['Đi khám cùng mai', 'Mua thuốc cho Mai', 'Báo cho thầy giáo', 'Cho Mai mượn sách'], answerIndex: 0, explanationVi: 'An mời: びょういんへ いきませんか。あした、いっしょに いきます — đi bệnh viện cùng vào mai.' },
      { questionVi: 'An dặn Mai tối nay làm gì?', choices: ['Ôn bài thêm', 'Đi ngủ sớm', 'Uống nhiều nước', 'Gọi điện về nhà'], answerIndex: 1, explanationVi: 'きょうは はやく ねて ください — hôm nay hãy ngủ sớm; An còn hỏi đã uống thuốc chưa.' },
    ],
  },
  listening: [
    { scriptJa: 'どうしましたか。', meaningVi: 'Bạn làm sao vậy?', choices: ['Bạn khỏe không?', 'Bạn làm sao vậy?', 'Bạn là ai?', 'Cần gì không?'], answerIndex: 1 },
    { scriptJa: 'ねつが あります。', meaningVi: 'Tôi bị sốt.', choices: ['Tôi bị ho', 'Tôi uống thuốc', 'Tôi bị sốt', 'Tôi đi bệnh viện'], answerIndex: 2 },
    { scriptJa: 'くすりを のみます。', meaningVi: 'Tôi uống thuốc.', choices: ['Tôi mua thuốc', 'Tôi uống thuốc', 'Thuốc đắt quá', 'Thuốc hết rồi'], answerIndex: 1 },
    { scriptJa: 'おだいじに。', meaningVi: 'Chúc mau khỏe nhé.', choices: ['Chúc ngủ ngon', 'Hẹn gặp lại', 'Chúc may mắn', 'Chúc mau khỏe nhé'], answerIndex: 3, dictation: true },
    { scriptJa: 'きぶんは どうですか。', meaningVi: 'Cảm giác của bạn thế nào?', choices: ['Thời tiết thế nào?', 'Bạn tên gì?', 'Cảm giác của bạn thế nào?', 'Đây là cái gì?'], answerIndex: 2, dictation: true },
  ],
  reading: {
    titleVi: 'せんせいへの メール — Email xin nghỉ ốm',
    lines: [
      { text: 'やまだせんせい、おはようございます。あんです。', vi: 'Thầy Yamada, chào buổi sáng. Em là An.' },
      { text: 'きょうは かぜを ひきました。', vi: 'Hôm nay em bị cảm.' },
      { text: 'ねつも ありますから、がっこうは やすみます。', vi: 'Vì em bị sốt nên em nghỉ học.' },
      { text: 'びょういんへ いって、くすりを もらいます。', vi: 'Em sẽ đi bệnh viện lấy thuốc.' },
      { text: 'あしたは げんきになります。だいじょうぶです。', vi: 'Mai em sẽ khỏe lại. Không sao ạ.' },
      { text: 'ありがとうございます。', vi: 'Em cảm ơn thầy.' },
    ],
    questions: [
      { questionVi: 'Vì sao An nghỉ học?', choices: ['Bị cảm và sốt', 'Đi chơi với bạn', 'Trời mưa to', 'Có việc gia đình'], answerIndex: 0, explanationVi: 'かぜを ひきました + ねつも あります — bị cảm kèm sốt nên nghỉ.' },
      { questionVi: 'An định làm gì trong ngày nghỉ?', choices: ['Ngủ cả ngày', 'Đi bệnh viện lấy thuốc', 'Học ở nhà', 'Đi mua sắm'], answerIndex: 1, explanationVi: 'びょういんへ いって、くすりを もらいます — đi bệnh viện để được cấp thuốc.' },
      { questionVi: 'An hứa điều gì cho ngày mai?', choices: ['Nộp bài tập', 'Sẽ khỏe lại', 'Đi học sớm', 'Gặp thầy ở văn phòng'], answerIndex: 1, explanationVi: 'あしたは げんきになります。だいじょうぶです — mai sẽ khỏe lại, thầy đừng lo.' },
    ],
  },
  speakSentences: [
    { ja: 'どうしましたか。', vi: 'Bạn làm sao vậy?' },
    { ja: 'ねつが あります。', vi: 'Tôi bị sốt.' },
    { ja: 'あたまが いたいです。', vi: 'Tôi đau đầu.' },
    { ja: 'くすりを のみます。', vi: 'Tôi uống thuốc.' },
    { ja: 'おだいじに。', vi: 'Chúc mau khỏe nhé.' },
  ],
  translatePairs: [
    { ja: 'どうしましたか。', vi: 'Bạn làm sao vậy?', tokens: ['どう', 'しました', 'か'], distractors: ['きぶん'] },
    { ja: 'ねつが あります。', vi: 'Tôi bị sốt.', tokens: ['ねつ', 'が', 'あります'], distractors: ['くすり'] },
    { ja: 'あたまが いたいです。', vi: 'Tôi đau đầu.', tokens: ['あたま', 'が', 'いたい', 'です'], distractors: ['ねむい'] },
    { ja: 'びょういんへ いきます。', vi: 'Tôi đến bệnh viện.', tokens: ['びょういん', 'へ', 'いきます'], distractors: ['びょうき'] },
    { ja: 'きょうは やすみます。', vi: 'Hôm nay tôi nghỉ.', tokens: ['きょう', 'は', 'やすみます'], distractors: ['あした'] },
  ],
  translateJaVi: [
    { ja: 'せきが でます。', vi: 'Tôi bị ho.', wrongVi: ['Tôi bị sốt.', 'Tôi đau đầu.', 'Tôi uống thuốc.'] },
    { ja: 'だいじょうぶです。', vi: 'Tôi không sao.', wrongVi: ['Tôi ốm rồi.', 'Tôi rất mệt.', 'Tôi bị ho.'] },
    { ja: 'はやく ねて ください。', vi: 'Hãy đi ngủ sớm nhé.', wrongVi: ['Hãy dậy sớm nhé.', 'Hãy nghỉ ngơi thoải mái.', 'Hãy uống thuốc đi.'] },
  ],
  wordBank: [
    { ja: 'かぜを ひきました。', vi: 'Tôi bị cảm.', tokens: ['かぜ', 'を', 'ひきました'], distractors: ['ねつ'] },
    { ja: 'きょうは がっこうを やすみます。', vi: 'Hôm nay tôi nghỉ học.', tokens: ['きょう', 'は', 'がっこう', 'を', 'やすみます'], distractors: ['びょうき'] },
  ],
  kanji: ['病', '顔'],
  writingKana: ['び', 'く', 'す', 'り', 'ね'],
}
