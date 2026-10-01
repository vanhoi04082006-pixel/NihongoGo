/**
 * NihongoGo — Bài 5: 移動と交通手段 (Di chuyển & phương tiện — へ・で・と).
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson5: CurriculumLesson = {
  order: 5,
  slug: 'l5-di-chuyen-phuong-tien',
  title: 'Di chuyển & phương tiện — へ・で・と',
  titleJa: '移動と交通手段',
  description: 'Nói về việc đi đâu, bằng phương tiện gì và đi cùng ai với ba trợ từ へ・で・と.',
  learningObjectives: [
    'Dùng へ để nói hướng đi đến nơi chốn',
    'Dùng で để nói phương tiện di chuyển',
    'Dùng と để nói đi cùng ai',
  ],
  grammarTopics: ['Trợ từ へ (hướng đến nơi chốn)', 'Trợ từ で (phương tiện, cách thức)', 'Cụm と (cùng với ai)'],
  vocabularyTopics: ['Phương tiện giao thông', 'Địa điểm công cộng', 'Động từ di chuyển'],
  kanjiTopics: [],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'いきます', romaji: 'ikimasu', meaningVi: 'đi (đến nơi khác)', pos: 'động từ nhóm 1', exampleJa: 'あした でんしゃで かいしゃへ いきます。', exampleVi: 'Ngày mai tôi đi công ty bằng tàu điện.' },
    { term: 'きます', romaji: 'kimasu', meaningVi: 'đến (hướng về phía người nói)', pos: 'động từ nhóm 1', exampleJa: 'ともだちは あした うちへ きます。', exampleVi: 'Bạn tôi ngày mai đến nhà tôi.' },
    { term: 'かえります', romaji: 'kaerimasu', meaningVi: 'về (nhà)', pos: 'động từ nhóm 1', exampleJa: 'ごご ろくじごろ うちへ かえります。', exampleVi: 'Khoảng 6 giờ tối tôi về nhà.' },
    { term: 'でんしゃ', romaji: 'densha', meaningVi: 'tàu điện', pos: 'danh từ', exampleJa: 'でんしゃで かいしゃへ いきます。', exampleVi: 'Tôi đi công ty bằng tàu điện.' },
    { term: 'バス', romaji: 'basu', meaningVi: 'xe buýt', pos: 'danh từ', exampleJa: 'バスで がっこうへ いきます。', exampleVi: 'Tôi đến trường bằng xe buýt.' },
    { term: 'じてんしゃ', romaji: 'jitensha', meaningVi: 'xe đạp', pos: 'danh từ', exampleJa: 'じてんしゃで スーパーへ いきます。', exampleVi: 'Tôi đến siêu thị bằng xe đạp.' },
    { term: 'ちかてつ', romaji: 'chikatetsu', meaningVi: 'tàu điện ngầm', pos: 'danh từ', exampleJa: 'ちかてつで ゆうびんきょくへ いきます。', exampleVi: 'Tôi đến bưu điện bằng tàu điện ngầm.' },
    { term: 'ひこうき', romaji: 'hikōki', meaningVi: 'máy bay', pos: 'danh từ', exampleJa: 'ひこうきで にほんへ いきます。', exampleVi: 'Tôi đi Nhật bằng máy bay.' },
    { term: 'あるきます', romaji: 'arukimasu', meaningVi: 'đi bộ', pos: 'động từ nhóm 1', exampleJa: 'えきへ あるきます。', exampleVi: 'Tôi đi bộ đến nhà ga.' },
    { term: 'かいしゃ', romaji: 'kaisha', meaningVi: 'công ty', pos: 'danh từ', exampleJa: 'かいしゃは くじから ごご ろくじまでです。', exampleVi: 'Công ty làm từ 9 giờ đến 6 giờ tối.' },
    { term: 'びょういん', romaji: 'byōin', meaningVi: 'bệnh viện', pos: 'danh từ', exampleJa: 'ともだちと びょういんへ いきます。', exampleVi: 'Tôi đến bệnh viện cùng bạn.' },
    { term: 'えいがかん', romaji: 'eigakan', meaningVi: 'rạp chiếu phim', pos: 'danh từ', exampleJa: 'えいがかんへ でんしゃで いきます。', exampleVi: 'Tôi đến rạp phim bằng tàu điện.' },
    { term: 'デパート', romaji: 'depāto', meaningVi: 'cửa hàng bách hóa', pos: 'danh từ', exampleJa: 'デパートへ バスで いきます。', exampleVi: 'Tôi đến cửa hàng bách hóa bằng xe buýt.' },
    { term: 'レストラン', romaji: 'resutoran', meaningVi: 'nhà hàng', pos: 'danh từ', exampleJa: 'レストランへ かぞくと いきます。', exampleVi: 'Tôi đến nhà hàng cùng gia đình.' },
    { term: 'ホテル', romaji: 'hoteru', meaningVi: 'khách sạn', pos: 'danh từ', exampleJa: 'ホテルへ ちかてつで いきます。', exampleVi: 'Tôi đến khách sạn bằng tàu điện ngầm.' },
    { term: 'ともだち', romaji: 'tomodachi', meaningVi: 'bạn, bạn bè', pos: 'danh từ', exampleJa: 'ともだちと こうえんへ いきます。', exampleVi: 'Tôi đến công viên cùng bạn.' },
    { term: 'かぞく', romaji: 'kazoku', meaningVi: 'gia đình', pos: 'danh từ', exampleJa: 'かぞくは にほんへ いきます。', exampleVi: 'Gia đình tôi đi Nhật.' },
    { term: 'ひとりで', romaji: 'hitoride', meaningVi: 'một mình (không cùng ai)', pos: 'phó từ', exampleJa: 'だいがくへ ひとりで いきます。', exampleVi: 'Tôi đến trường đại học một mình.' },
  ],
  grammar: [
    {
      code: 'l5-e-direction',
      title: 'N へ いきます — hướng đến nơi chốn',
      formation: 'Nơi chốn + へ + いきます / きます / かえります',
      explanationVi:
        'へ là trợ từ chỉ HƯỚNG di chuyển, đứng ngay sau danh từ nơi chốn: がっこうへ = đến (hướng) trường. Khi làm trợ từ, へ đọc là "e" chứ không phải "he". Kết hợp với các động từ di chuyển đã học: いきます (đi), きます (đến), かえります (về). Trật tự chuẩn: [nơi chốn] へ [động từ].',
      examples: [
        { ja: 'がっこうへ いきます。', vi: 'Tôi đến trường học.', tokens: ['がっこう', 'へ', 'いきます'] },
        { ja: 'あした、ともだちは うちへ きます。', vi: 'Ngày mai bạn tôi đến nhà tôi.' },
        { ja: 'ごご ろくじごろ うちへ かえります。', vi: 'Khoảng 6 giờ tối tôi về nhà.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Điền trợ từ chỉ hướng đi',
          sentence: 'うち___ かえります。',
          options: ['へ', 'で', 'と', 'は'],
          answerIndex: 0, explanationVi: 'うち (nhà) là nơi chốn cần đến → dùng へ. で chỉ phương tiện, と chỉ người cùng đi, は là chủ đề.',
        },
        {
          kind: 'choice', prompt: '「Tôi đến nhà ga。」 câu nào đúng?',
          options: ['えきへ いきます。', 'えきで いきます。', 'えきと いきます。', 'えきを いきます。'],
          answerIndex: 0, explanationVi: 'Nơi đến + へ + động từ di chuyển. で là phương tiện, と là người cùng đi, を là tân ngữ (học ở bài 6).',
        },
        {
          kind: 'error', prompt: 'Câu nào dùng trợ từ đúng?',
          options: ['がっこうへ いきます。', 'がっこうが いきます。', 'がっこうで いきます。', 'がっこうと いきます。'],
          answerIndex: 0, explanationVi: 'Với động từ di chuyển, nơi chốn phải đi với へ. が sai ở đây, で chỉ phương tiện, と chỉ người cùng đi.',
        },
        {
          kind: 'fill', prompt: 'Điền nơi chốn (Tôi đến bệnh viện)',
          sentence: '___へ いきます。',
          options: ['びょういん', 'でんしゃ', 'なんじ', 'やすみ'],
          answerIndex: 0, explanationVi: 'Trước へ cần danh từ nơi chốn: びょういん. でんしゃ là phương tiện (đi với で), なんじ hỏi giờ, やすみ là ngày nghỉ.',
        },
        {
          kind: 'choice', prompt: 'Trợ từ へ trong 「がっこうへ いきます」 được đọc là?',
          options: ['e', 'he', 'wa', 'no'],
          answerIndex: 0, explanationVi: 'Khi làm trợ từ, へ đọc là "e". Chỉ chữ へ đứng riêng (từ "hướng") mới đọc "he".',
        },
      ],
    },
    {
      code: 'l5-de-means',
      title: 'N で いきます — phương tiện di chuyển',
      formation: 'Phương tiện (danh từ) + で + động từ',
      explanationVi:
        'で là trợ từ chỉ PHƯƠNG TIỆN / cách thức: でんしゃで = bằng tàu điện, バスで = bằng xe buýt. Công thức: [phương tiện] で [động từ]. Lưu ý: "đi bộ" là động từ あるきます nên KHÔNG dùng で (không nói あるきで). Khi câu có cả phương tiện lẫn nơi đến: でんしゃで かいしゃへ いきます — phương tiện đứng trước, nơi đến + へ đứng sau.',
      examples: [
        { ja: 'でんしゃで かいしゃへ いきます。', vi: 'Tôi đi công ty bằng tàu điện.', tokens: ['でんしゃ', 'で', 'かいしゃ', 'へ', 'いきます'] },
        { ja: 'じてんしゃで スーパーへ いきます。', vi: 'Tôi đến siêu thị bằng xe đạp.' },
        { ja: 'ひこうきで にほんへ いきます。', vi: 'Tôi đi Nhật bằng máy bay.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Điền trợ từ',
          sentence: 'バス___ としょかんへ いきます。',
          options: ['で', 'へ', 'と', 'を'],
          answerIndex: 0, explanationVi: 'バス là phương tiện → phương tiện + で. へ cho nơi đến, と cho người cùng đi.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ',
          sentence: 'ひこうき___ にほんへ いきます。',
          options: ['で', 'へ', 'の', 'も'],
          answerIndex: 0, explanationVi: 'ひこうき (máy bay) là phương tiện → で. Nơi đến にほん đã có へ rồi.',
        },
        {
          kind: 'choice', prompt: '「Tôi đến bệnh viện bằng tàu điện ngầm。」 câu nào đúng?',
          options: ['ちかてつで びょういんへ いきます。', 'ちかてつへ びょういんで いきます。', 'びょういんで ちかてつへ いきます。', 'ちかてつと びょういんへ いきます。'],
          answerIndex: 0, explanationVi: 'Phương tiện + で đứng trước, nơi chốn + へ đứng sau: ちかてつで びょういんへ.',
        },
        {
          kind: 'fill', prompt: 'Điền phương tiện (Tôi đến siêu thị bằng xe đạp)',
          sentence: '___で スーパーへ いきます。',
          options: ['じてんしゃ', 'ともだち', 'ホテル', 'いま'],
          answerIndex: 0, explanationVi: 'Trước で cần danh từ phương tiện: じてんしゃ. ともだち là người (dùng と), ホテル là nơi chốn (dùng へ), いま là "bây giờ".',
        },
      ],
    },
    {
      code: 'l5-to-companion',
      title: 'N と いきます — đi cùng với ai',
      formation: 'Người (danh từ) + と + động từ',
      explanationVi:
        'と đứng sau danh từ chỉ NGƯỜI để nói "cùng với ai": ともだちと いきます = đi cùng bạn, かぞくと = cùng gia đình. Muốn nói "một mình" dùng ひとりで (không phải ひとりと). Ngoài ra と còn nối hai danh từ với nghĩa "và": でんしゃと バス = tàu điện và xe buýt.',
      examples: [
        { ja: 'ともだちと えいがかんへ いきます。', vi: 'Tôi đến rạp phim cùng bạn.', tokens: ['ともだち', 'と', 'えいがかん', 'へ', 'いきます'] },
        { ja: 'かぞくと レストランへ いきます。', vi: 'Tôi đến nhà hàng cùng gia đình.' },
        { ja: 'うちへ ひとりで かえります。', vi: 'Tôi về nhà một mình.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Điền trợ từ',
          sentence: 'ともだち___ デパートへ いきます。',
          options: ['と', 'へ', 'で', 'を'],
          answerIndex: 0, explanationVi: 'ともだち là người cùng đi → と. へ cho nơi đến, で cho phương tiện.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ',
          sentence: 'かぞく___ レストランへ いきます。',
          options: ['と', 'へ', 'で', 'の'],
          answerIndex: 0, explanationVi: 'かぞく (gia đình) là người cùng đi → と. の nối hai danh từ, ở đây không đúng.',
        },
        {
          kind: 'choice', prompt: '「Tôi đến thư viện một mình。」 câu nào đúng?',
          options: ['としょかんへ ひとりで いきます。', 'としょかんと ひとりで いきます。', 'としょかんへ ひとりと いきます。', 'ひとりで としょかんで いきます。'],
          answerIndex: 0, explanationVi: 'Một mình = ひとりで (dùng で). Nơi chốn としょかん đi với へ, không dùng と cho nơi chốn.',
        },
        {
          kind: 'choice', prompt: '「でんしゃで ともだちと かいしゃへ いきます。」 có nghĩa là gì?',
          options: ['Đi công ty bằng tàu điện cùng bạn', 'Đi công ty bằng tàu điện một mình', 'Đi bệnh viện bằng tàu điện cùng bạn', 'Đi công ty bằng xe buýt cùng bạn'],
          answerIndex: 0, explanationVi: 'でんしゃで = bằng tàu điện (phương tiện), ともだちと = cùng bạn (người), かいしゃへ = đến công ty (nơi đến).',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Đi học bằng gì?',
      situationVi: 'Tanaka hỏi Linh cách Linh đi học đại học.',
      lines: [
        { speaker: 'たなか', ja: 'リンさん、あしたも だいがくへ いきますか。', vi: 'Linh, ngày mai cậu cũng đến đại học à?' },
        { speaker: 'リン', ja: 'はい、だいがくへ いきます。', vi: 'Vâng, tôi đến đại học.' },
        { speaker: 'たなか', ja: 'バスで いきますか。でんしゃで いきますか。', vi: 'Cậu đi bằng xe buýt hay tàu điện?' },
        { speaker: 'リン', ja: 'ちかてつで いきます。', vi: 'Tôi đi bằng tàu điện ngầm.' },
        { speaker: 'たなか', ja: 'えきへ あるきますか。', vi: 'Cậu đi bộ đến nhà ga à?' },
        { speaker: 'リン', ja: 'はい、うちから えきへ あるきます。', vi: 'Vâng, từ nhà tôi đi bộ đến nhà ga.' },
        { speaker: 'たなか', ja: 'だいがくは なんじからですか。', vi: 'Đại học bắt đầu từ mấy giờ?' },
        { speaker: 'リン', ja: 'ごぜん はちじからです。', vi: 'Từ 8 giờ sáng.' },
      ],
    },
    {
      titleVi: 'Chủ nhật của Linh',
      situationVi: 'Tanaka hỏi Linh kế hoạch Chủ nhật.',
      lines: [
        { speaker: 'たなか', ja: 'リンさん、にちようびは どこへ いきますか。', vi: 'Linh, Chủ nhật cậu đi đâu?' },
        { speaker: 'リン', ja: 'かぞくと デパートへ いきます。', vi: 'Tôi đến cửa hàng bách hóa cùng gia đình.' },
        { speaker: 'たなか', ja: 'でんしゃで いきますか。', vi: 'Cậu đi bằng tàu điện à?' },
        { speaker: 'リン', ja: 'いいえ、バスで いきます。', vi: 'Không, tôi đi bằng xe buýt.' },
        { speaker: 'たなか', ja: 'ごごは どこへ いきますか。', vi: 'Buổi chiều cậu đi đâu?' },
        { speaker: 'リン', ja: 'かぞくと レストランへ いきます。', vi: 'Tôi đến nhà hàng cùng gia đình.' },
        { speaker: 'たなか', ja: 'いいですね。わたしは ひとりで こうえんへ いきます。', vi: 'Tốt đấy. Còn tôi đến công viên một mình.' },
        { speaker: 'リン', ja: 'こうえんも いいですね。', vi: 'Công viên cũng tốt đấy.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'でんしゃで かいしゃへ いきます。', meaningVi: 'Tôi đi công ty bằng tàu điện.', choices: ['Đi công ty bằng tàu điện', 'Đi công ty bằng xe buýt', 'Đi bệnh viện bằng tàu điện', 'Về nhà bằng tàu điện'], answerIndex: 0 },
    { scriptJa: 'ともだちと えいがかんへ いきます。', meaningVi: 'Tôi đến rạp phim cùng bạn.', choices: ['Đến rạp phim cùng bạn', 'Đến rạp phim cùng gia đình', 'Đến công viên cùng bạn', 'Một mình đến rạp phim'], answerIndex: 0, dictation: true },
    { scriptJa: 'あした うちへ かえります。', meaningVi: 'Ngày mai tôi về nhà.', choices: ['Ngày mai về nhà', 'Hôm nay về nhà', 'Ngày mai đến nhà ga', 'Hôm qua về nhà'], answerIndex: 0 },
    { scriptJa: 'バスで デパートへ いきます。', meaningVi: 'Tôi đến cửa hàng bách hóa bằng xe buýt.', choices: ['Đến cửa hàng bách hóa bằng xe buýt', 'Đến cửa hàng bách hóa bằng tàu điện ngầm', 'Đến nhà hàng bằng xe buýt', 'Đến khách sạn bằng xe buýt'], answerIndex: 0, dictation: true },
    { scriptJa: 'かぞくと レストランへ いきます。', meaningVi: 'Tôi đến nhà hàng cùng gia đình.', choices: ['Đến nhà hàng cùng gia đình', 'Đến nhà hàng cùng bạn', 'Đến bệnh viện cùng gia đình', 'Một mình đến nhà hàng'], answerIndex: 0 },
  ],
  reading: {
    titleVi: 'Chủ nhật của Tanaka',
    lines: [
      { text: 'たなかさんは げつようびから きんようびまで かいしゃへ いきます。', vi: 'Từ thứ Hai đến thứ Sáu, Tanaka đến công ty.' },
      { text: 'でんしゃで かいしゃへ いきます。', vi: 'Ông ấy đi công ty bằng tàu điện.' },
      { text: 'うちから えきへ あるきます。', vi: 'Từ nhà đến nhà ga, ông ấy đi bộ.' },
      { text: 'ごご ろくじごろ うちへ かえります。', vi: 'Khoảng 6 giờ tối, ông ấy về nhà.' },
      { text: 'どようびと にちようびは やすみです。', vi: 'Thứ Bảy và Chủ nhật là ngày nghỉ.' },
      { text: 'どようびは ともだちと こうえんへ いきます。', vi: 'Thứ Bảy, ông ấy đến công viên cùng bạn.' },
      { text: 'にちようびは かぞくと デパートへ いきます。', vi: 'Chủ nhật, ông ấy đến cửa hàng bách hóa cùng gia đình.' },
    ],
    questions: [
      { questionVi: 'Tanaka đi công ty bằng phương tiện nào?', choices: ['Tàu điện', 'Xe buýt', 'Xe đạp', 'Đi bộ'], answerIndex: 0, explanationVi: 'Đoạn nói でんしゃで かいしゃへ いきます = đi công ty bằng tàu điện.' },
      { questionVi: 'Từ nhà đến nhà ga, Tanaka di chuyển thế nào?', choices: ['Đi bộ', 'Bằng tàu điện', 'Bằng xe buýt', 'Bằng tàu điện ngầm'], answerIndex: 0, explanationVi: 'うちから えきへ あるきます = đi bộ từ nhà đến nhà ga (あるきます = đi bộ).' },
      { questionVi: 'Chủ nhật Tanaka đi đâu cùng gia đình?', choices: ['Cửa hàng bách hóa', 'Công viên', 'Nhà hàng', 'Bệnh viện'], answerIndex: 0, explanationVi: 'にちようびは かぞくと デパートへ いきます — デパート = cửa hàng bách hóa.' },
    ],
  },
  speakSentences: [
    { ja: 'がっこうへ いきます。', vi: 'Tôi đến trường học.' },
    { ja: 'でんしゃで かいしゃへ いきます。', vi: 'Tôi đi công ty bằng tàu điện.' },
    { ja: 'ともだちと こうえんへ いきます。', vi: 'Tôi đến công viên cùng bạn.' },
    { ja: 'あした うちへ かえります。', vi: 'Ngày mai tôi về nhà.' },
  ],
  translatePairs: [
    { ja: 'がっこうへ いきます。', vi: 'Tôi đến trường học.', tokens: ['がっこう', 'へ', 'いきます'], distractors: ['で'] },
    { ja: 'バスで えきへ いきます。', vi: 'Tôi đến nhà ga bằng xe buýt.', tokens: ['バス', 'で', 'えき', 'へ', 'いきます'], distractors: ['と', 'を'] },
    { ja: 'ともだちと えいがかんへ いきます。', vi: 'Tôi đến rạp phim cùng bạn.', tokens: ['ともだち', 'と', 'えいがかん', 'へ', 'いきます'], distractors: ['で'] },
    { ja: 'かぞくと デパートへ いきます。', vi: 'Tôi đến cửa hàng bách hóa cùng gia đình.', tokens: ['かぞく', 'と', 'デパート', 'へ', 'いきます'], distractors: ['の'] },
    { ja: 'うちへ ひとりで かえります。', vi: 'Tôi về nhà một mình.', tokens: ['うち', 'へ', 'ひとりで', 'かえります'], distractors: ['と'] },
  ],
  kanji: [],
}
