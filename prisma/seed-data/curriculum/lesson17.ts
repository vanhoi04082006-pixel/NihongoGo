/**
 * NihongoGo — Bài 17: 義務と不必要 (〜なければなりません・〜なくてもいい).
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson17: CurriculumLesson = {
  order: 17,
  slug: 'l17-nghia-vu',
  title: 'Nghĩa vụ — 〜なければなりません・〜なくてもいい',
  titleJa: '義務と不必要',
  description: 'Nói về việc bắt buộc phải làm và việc không nhất thiết phải làm.',
  learningObjectives: [
    'Diễn đạt nghĩa vụ với 〜なければなりません',
    'Nói "không cần" với 〜なくてもいい',
    'Phân biệt mức độ bắt buộc của từng mẫu câu',
  ],
  grammarTopics: ['〜なければなりません (phải làm)', '〜なくてもいい (không cần cũng được)'],
  vocabularyTopics: ['Việc phải làm', 'Nghĩa vụ hằng ngày'],
  kanjiTopics: ['Kanji sinh hoạt hằng ngày (帰・起・寝)'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'しごと', romaji: 'shigoto', meaningVi: 'công việc', pos: 'danh từ', exampleJa: 'まいにち しごとを します。', exampleVi: 'Hằng ngày tôi làm việc.' },
    { term: 'くすり', romaji: 'kusuri', meaningVi: 'thuốc', pos: 'danh từ', exampleJa: 'まいにち くすりを のみます。', exampleVi: 'Hằng ngày tôi uống thuốc.' },
    { term: 'しゅくだい', romaji: 'shukudai', meaningVi: 'bài tập về nhà', pos: 'danh từ', exampleJa: 'しゅくだいは なんようびまでですか。', exampleVi: 'Bài tập về nhà đến thứ mấy thì hết hạn?' },
    { term: 'じゅぎょう', romaji: 'jugyō', meaningVi: 'buổi học, tiết học', pos: 'danh từ', exampleJa: 'じゅぎょうは くじからです。', exampleVi: 'Buổi học bắt đầu từ 9 giờ.' },
    { term: 'やくそく', romaji: 'yakusoku', meaningVi: 'lời hẹn, lời hứa', pos: 'danh từ', exampleJa: 'ともだちと やくそくが あります。', exampleVi: 'Tôi có hẹn với bạn.' },
    { term: 'ばんごはん', romaji: 'bangohan', meaningVi: 'bữa tối, cơm tối', pos: 'danh từ', exampleJa: 'ろくじに ばんごはんを たべます。', exampleVi: 'Lúc 6 giờ tôi ăn tối.' },
    { term: 'らいしゅう', romaji: 'raishū', meaningVi: 'tuần sau', pos: 'danh từ', exampleJa: 'らいしゅう ともだちと カラオケへ いきます。', exampleVi: 'Tuần sau tôi đi karaoke cùng bạn.' },
    { term: 'テスト', romaji: 'tesuto', meaningVi: 'bài kiểm tra', pos: 'danh từ', exampleJa: 'あした テストが あります。', exampleVi: 'Ngày mai có bài kiểm tra.' },
    { term: 'つかれます', romaji: 'tsukaremasu', meaningVi: 'mệt, mỏi', pos: 'động từ nhóm 2', exampleJa: 'まいにち しごとで つかれます。', exampleVi: 'Hằng ngày tôi mệt vì công việc.' },
    { term: 'そうじします', romaji: 'sōjishimasu', meaningVi: 'dọn dẹp, làm sạch', pos: 'động từ nhóm 3', exampleJa: 'あさ へやを そうじします。', exampleVi: 'Buổi sáng tôi dọn phòng.' },
    { term: 'せんたくします', romaji: 'sentakushimasu', meaningVi: 'giặt quần áo', pos: 'động từ nhóm 3', exampleJa: 'しゅうまつに せんたくします。', exampleVi: 'Cuối tuần tôi giặt quần áo.' },
    { term: 'りょうりします', romaji: 'ryōrishimasu', meaningVi: 'nấu ăn', pos: 'động từ nhóm 3', exampleJa: 'ばんごはんを りょうりします。', exampleVi: 'Tôi nấu bữa tối.' },
    { term: 'おきます', romaji: 'okimasu', meaningVi: 'thức dậy', pos: 'động từ nhóm 1', exampleJa: 'あさ ろくじに おきます。', exampleVi: 'Buổi sáng tôi dậy lúc 6 giờ.' },
    { term: 'ねます', romaji: 'nemasu', meaningVi: 'đi ngủ', pos: 'động từ nhóm 1', exampleJa: 'よる じゅういちじに ねます。', exampleVi: 'Tối tôi đi ngủ lúc 11 giờ.' },
    { term: 'かえります', romaji: 'kaerimasu', meaningVi: 'về (nhà)', pos: 'động từ nhóm 1', exampleJa: 'ごご ろくじに かえります。', exampleVi: 'Chiều 6 giờ tôi về nhà.' },
    { term: 'やすみます', romaji: 'yasumimasu', meaningVi: 'nghỉ, nghỉ ngơi', pos: 'động từ nhóm 1', exampleJa: 'にちようびは やすみます。', exampleVi: 'Chủ nhật tôi nghỉ.' },
    { term: 'いそがしい', romaji: 'isogashii', meaningVi: 'bận rộn', pos: 'tính từ い', exampleJa: 'きょうは いそがしいです。', exampleVi: 'Hôm nay tôi bận.' },
    { term: 'たくさん', romaji: 'takusan', meaningVi: 'nhiều', pos: 'phó từ', exampleJa: 'しごとが たくさん あります。', exampleVi: 'Tôi có rất nhiều việc.' },
    { term: 'だいじ', romaji: 'daiji', meaningVi: 'quan trọng', pos: 'tính từ な', exampleJa: 'その やくそくは だいじです。', exampleVi: 'Lời hẹn đó quan trọng.' },
    { term: 'はやく', romaji: 'hayaku', meaningVi: 'sớm, mau', pos: 'phó từ', exampleJa: 'あした はやく おきます。', exampleVi: 'Ngày mai tôi dậy sớm.' },
    { term: 'ゆっくり', romaji: 'yukkuri', meaningVi: 'thong thả, thoải mái', pos: 'phó từ', exampleJa: 'やすみは ゆっくり ねます。', exampleVi: 'Ngày nghỉ tôi ngủ thoải mái.' },
  ],
  grammar: [
    {
      code: 'l17-nakereba-narimasen',
      title: '〜なければなりません — phải làm',
      formation: 'V (thể ない bỏ ない) + なければなりません',
      explanationVi:
        'Lấy thể ない đã học ở bài 16, bỏ ない rồi thêm なければなりません: のみます → のまない → のまなければなりません; します → しない → しなければなりません. Mẫu này diễn tả NGHĨA VỤ — việc bắt buộc phải làm do luật, nội quy hay hoàn cảnh, mạnh hơn cả 〜てください (đề nghị). Câu hỏi xin ý kiến cũng dùng được: 「いかなければなりませんか。」 (Có nhất thiết phải đi không?).',
      examples: [
        { ja: 'くすりを まいにち のまなければなりません。', vi: 'Hằng ngày tôi phải uống thuốc.', tokens: ['くすり', 'を', 'まいにち', 'のまなければなりません'] },
        { ja: 'あしたは ろくじに おきなければなりません。', vi: 'Ngày mai tôi phải dậy lúc 6 giờ.' },
        { ja: 'あさ へやを そうじしなければなりません。', vi: 'Buổi sáng tôi phải dọn phòng.' },
        { ja: 'まいにち にほんごを べんきょうしなければなりません。', vi: 'Mỗi ngày tôi phải học tiếng Nhật.', tokens: ['まいにち', 'にほんご', 'を', 'べんきょうしなければなりません'] },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'いきます → mẫu "phải": điền dạng đúng',
          sentence: 'あした かいしゃへ ___。',
          options: ['いきなければなりません', 'いけなければなりません', 'いかなければなりません', 'いかないでなりません'],
          answerIndex: 2, explanationVi: 'Nhóm 1: いきます → いかない → bỏ ない → いかなければなりません. Các dạng khác không theo quy tắc bỏ ない của thể ない.',
        },
        {
          kind: 'conjugate', prompt: 'のみます → mẫu "phải uống"',
          sentence: 'この くすりを ___。',
          options: ['のまなければなりません', 'のみなければなりません', 'のまなくてもいいです', 'のまないです'],
          answerIndex: 0, explanationVi: 'のみます → のまない → のまなければなりません. のみなければ là sai (không bỏ い trước ない), のまなくてもいいです nghĩa "không cần uống" — thuộc mẫu khác.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ',
          sentence: 'まいにち くすり___ のまなければなりません。',
          options: ['に', 'を', 'で', 'へ'],
          answerIndex: 1, explanationVi: 'くすり là tân ngữ của のみます → dùng を. に chỉ thời điểm, で chỉ nơi/phương tiện, へ chỉ hướng đi.',
        },
        {
          kind: 'choice', prompt: '「まいにち はたらかなければなりません。」 có nghĩa là gì?',
          options: ['Hằng ngày tôi muốn làm việc', 'Hằng ngày tôi không cần làm việc', 'Hằng ngày tôi được phép làm việc', 'Hằng ngày tôi phải làm việc'],
          answerIndex: 3, explanationVi: '〜なければなりません = PHẢI làm. Muốn làm là 〜たい, không cần là 〜なくてもいい, được phép là 〜てもいい.',
        },
        {
          kind: 'error', prompt: 'Câu nào chia đúng mẫu "phải làm"?',
          options: ['しゅくだいを しないければなりません。', 'しゅくだいを しなければなりません。', 'しゅくだいを しくなければなりません。', 'しゅくだいを しないでなりません。'],
          answerIndex: 1, explanationVi: 'します → しない → しなければなりません. Phải có なければ; しないで dùng cho 〜ないでください (bài 16), không ghép với なりません.',
        },
        {
          kind: 'fill', prompt: 'Điền mẫu đúng (Tôi phải dọn nhà vào ngày nghỉ)',
          sentence: 'やすみの ひは うちの そうじを ___。',
          options: ['しなくてもいいです', 'したいです', 'しなければなりません', 'してはいけません'],
          answerIndex: 2, explanationVi: '"Phải làm" → しなければなりません. したいです = muốn làm, しなくてもいいです = không cần, してはいけません = bị cấm.',
        },
      ],
    },
    {
      code: 'l17-nakutemo-ii',
      title: '〜なくてもいいです — không cần (làm)',
      formation: 'V (thể ない bỏ ない) + なくてもいいです',
      explanationVi:
        'Cũng lấy thể ない bỏ ない nhưng thêm なくてもいいです: いきます → いかない → いかなくてもいいです. Mẫu này nói việc KHÔNG CẦN làm / không bắt buộc — nghĩa ngược với なければなりません. Dạng hỏi 〜なくてもいいですか dùng để hỏi "liệu có nhất thiết phải… không?". Chú ý khi trả lời: はい (đúng, không cần) / いいえ、〜なければなりません (không đâu, phải làm đấy).',
      examples: [
        { ja: 'あした かいしゃへ いかなくてもいいです。', vi: 'Ngày mai tôi không cần đến công ty.', tokens: ['あした', 'かいしゃ', 'へ', 'いかなくてもいいです'] },
        { ja: 'きょうは しゅくだいを しなくてもいいです。', vi: 'Hôm nay tôi không cần làm bài tập về nhà.' },
        { ja: 'にちようびは はたらかなくてもいいです。', vi: 'Chủ nhật tôi không cần làm việc.' },
        { ja: 'この くすりを のまなくてもいいですか。', vi: 'Liệu có nhất thiết phải uống thuốc này không?' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'ねます → mẫu "không cần": điền dạng đúng',
          sentence: 'やすみの ひは はやく ___。',
          options: ['ねなくてもいいです', 'ねないでもいいです', 'ねらなくてもいいです', 'ねたくないです'],
          answerIndex: 0, explanationVi: 'ねます → ねない → ねなくてもいいです. ねないでは dạng sai (thiếu くて), ねられる là thể khả năng (bài 18), ねたくない là "không muốn ngủ".',
        },
        {
          kind: 'choice', prompt: '「あした しごとを しなくてもいいです。」 có nghĩa là gì?',
          options: ['Ngày mai tôi không cần làm việc', 'Ngày mai tôi không được làm việc', 'Ngày mai tôi phải làm việc', 'Ngày mai tôi muốn làm việc'],
          answerIndex: 0, explanationVi: '〜なくてもいいです = không cần cũng được. "Không được làm" là 〜てはいけません, "phải làm" là 〜なければなりません.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ',
          sentence: 'にちようび___ はたらかなくてもいいです。',
          options: ['を', 'は', 'の', 'で'],
          answerIndex: 1, explanationVi: 'にちようび là chủ đề của câu → は. を chỉ tân ngữ, の nối danh từ, で chỉ nơi/phương tiện.',
        },
        {
          kind: 'error', prompt: 'Câu nào chia đúng mẫu "không cần làm"?',
          options: ['せんたくしないでもいいです。', 'せんたくしなくていいです。', 'せんたくしなくてもいいです。', 'せんたくしいなくてもいいです。'],
          answerIndex: 2, explanationVi: 'Chuẩn là しない → しなくてもいいです. Thiếu ても hoặc thêm い vào đuôi đều sai.',
        },
        {
          kind: 'fill', prompt: 'Điền mẫu đúng (Ngày mai tôi không cần dậy sớm)',
          sentence: 'あした はやく ___。',
          options: ['おきなければなりません', 'おきなくてもいいです', 'おきたくないです', 'おかなくてもいいです'],
          answerIndex: 1, explanationVi: '"Không cần dậy" → おきます → おきない → おきなくてもいいです. おかない là chia sai (không bỏ き trước ない).',
        },
        {
          kind: 'choice', prompt: 'Câu nào nói "Tôi phải về lúc 9 giờ tối"?',
          options: ['ごご くじに かえらなくてもいいです。', 'ごご くじに かえりたくないです。', 'ごご くじに かえません。', 'ごご くじに かえらなければなりません。'],
          answerIndex: 3, explanationVi: '"Phải về" → かえらなければなりません (かえります → かえらない). Ba câu kia lần lượt là "không cần về", "không muốn về", "không về".',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Trước kỳ thi',
      situationVi: 'Tanaka gặp Linh ở thư viện và hỏi về việc học trước bài kiểm tra tiếng Nhật.',
      lines: [
        { speaker: 'たなか', ja: 'リンさん、らいしゅう テストが ありますね。', vi: 'Linh, tuần sau có bài kiểm tra nhỉ.' },
        { speaker: 'リン', ja: 'はい、にほんごの テストです。まいにち べんきょうしなければなりません。', vi: 'Vâng, bài kiểm tra tiếng Nhật. Hằng ngày tôi phải học.' },
        { speaker: 'たなか', ja: 'なんじまで べんきょうしますか。', vi: 'Bạn học đến mấy giờ?' },
        { speaker: 'リン', ja: 'よる じゅうじまで べんきょうします。', vi: 'Tối tôi học đến 10 giờ.' },
        { speaker: 'たなか', ja: 'しゅくだいも ありますか。', vi: 'Có bài tập về nhà không?' },
        { speaker: 'リン', ja: 'はい、しゅくだいも しなければなりません。', vi: 'Có, tôi cũng phải làm bài tập về nhà.' },
        { speaker: 'たなか', ja: 'にちようびは やすみますか。', vi: 'Chủ nhật bạn có nghỉ không?' },
        { speaker: 'リン', ja: 'はい、にちようびは べんきょうしなくてもいいです。ゆっくり ねます。', vi: 'Vâng, Chủ nhật tôi không cần học. Tôi ngủ thoải mái.' },
        { speaker: 'たなか', ja: 'いいですね。', vi: 'Tốt đấy.' },
      ],
    },
    {
      titleVi: 'Công ty của Tanaka',
      situationVi: 'Linh hỏi Tanaka về giờ giấc làm việc ở công ty.',
      lines: [
        { speaker: 'リン', ja: 'たなかさん、かいしゃは なんじからですか。', vi: 'Tanaka, công ty bắt đầu từ mấy giờ?' },
        { speaker: 'たなか', ja: 'くじからです。はやく おきなければなりません。', vi: 'Từ 9 giờ. Tôi phải dậy sớm.' },
        { speaker: 'リン', ja: 'なんじに おきますか。', vi: 'Bạn dậy lúc mấy giờ?' },
        { speaker: 'たなか', ja: 'ろくじはんに おきます。でんしゃで かいしゃへ いきます。', vi: 'Tôi dậy lúc 6 giờ rưỡi và đi công ty bằng tàu điện.' },
        { speaker: 'リン', ja: 'なんじに かえりますか。', vi: 'Bạn về nhà lúc mấy giờ?' },
        { speaker: 'たなか', ja: 'ごご ろくじごろ かえります。うちで ばんごはんを たべます。', vi: 'Khoảng 6 giờ tối tôi về. Tôi ăn tối ở nhà.' },
        { speaker: 'リン', ja: 'しゅうまつも しごとですか。', vi: 'Cuối tuần cũng phải làm việc à?' },
        { speaker: 'たなか', ja: 'どようびは しごとを しなければなりません。にちようびは しなくてもいいです。', vi: 'Thứ Bảy tôi phải làm việc. Chủ nhật thì không cần.' },
        { speaker: 'リン', ja: 'にちようびは なにを しますか。', vi: 'Chủ nhật bạn làm gì?' },
        { speaker: 'たなか', ja: 'かぞくと こうえんへ いきます。', vi: 'Tôi đi công viên cùng gia đình.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'まいにち くすりを のまなければなりません。', meaningVi: 'Hằng ngày tôi phải uống thuốc.', choices: ['Phải uống thuốc mỗi ngày', 'Không cần uống thuốc mỗi ngày', 'Muốn uống thuốc mỗi ngày', 'Được phép uống thuốc mỗi ngày'], answerIndex: 0 },
    { scriptJa: 'あした はやく おきなければなりません。', meaningVi: 'Ngày mai tôi phải dậy sớm.', choices: ['Ngày mai không cần dậy sớm', 'Ngày mai phải dậy sớm', 'Ngày mai muốn dậy sớm', 'Hôm qua phải dậy sớm'], answerIndex: 1, dictation: true },
    { scriptJa: 'しゅうまつは しごとを しなくてもいいです。', meaningVi: 'Cuối tuần tôi không cần làm việc.', choices: ['Cuối tuần phải làm việc', 'Cuối tuần không được làm việc', 'Cuối tuần không cần làm việc', 'Cuối tuần muốn làm việc'], answerIndex: 2, dictation: true },
    { scriptJa: 'きょうは じゅぎょうが みっつ あります。', meaningVi: 'Hôm nay tôi có ba tiết học.', choices: ['Hôm nay có hai tiết học', 'Mai có ba tiết học', 'Hôm nay có ba tiết học', 'Hôm qua có ba tiết học'], answerIndex: 2 },
    { scriptJa: 'らいしゅう テストが あります。', meaningVi: 'Tuần sau có bài kiểm tra.', choices: ['Tuần trước có bài kiểm tra', 'Tuần sau có bài kiểm tra', 'Tuần sau không có bài kiểm tra', 'Mai có bài kiểm tra'], answerIndex: 1 },
  ],
  reading: {
    titleVi: 'Một tuần của Linh',
    lines: [
      { text: 'リンさんは だいがくの がくせいです。', vi: 'Linh là sinh viên đại học.' },
      { text: 'げつようびから きんようびまで じゅぎょうが あります。', vi: 'Từ thứ Hai đến thứ Sáu, Linh có tiết học.' },
      { text: 'まいあさ ろくじはんに おきなければなりません。', vi: 'Mỗi sáng Linh phải dậy lúc 6 giờ rưỡi.' },
      { text: 'だいがくへ でんしゃで いきます。', vi: 'Linh đến trường bằng tàu điện.' },
      { text: 'よるは しゅくだいを しなければなりません。', vi: 'Buổi tối Linh phải làm bài tập về nhà.' },
      { text: 'らいしゅう テストも あります。', vi: 'Tuần sau Linh cũng có bài kiểm tra.' },
      { text: 'どようびは ともだちと カラオケへ いきます。', vi: 'Thứ Bảy Linh đi karaoke cùng bạn.' },
      { text: 'にちようびは だいがくへ いかなくてもいいです。うちで ゆっくり ねます。', vi: 'Chủ nhật Linh không cần đến trường. Linh ngủ thoải mái ở nhà.' },
    ],
    questions: [
      { questionVi: 'Mỗi sáng Linh phải làm gì?', choices: ['Dậy lúc 7 giờ', 'Dậy lúc 6 giờ rưỡi', 'Đi bộ đến trường', 'Nấu bữa sáng'], answerIndex: 1, explanationVi: 'まいあさ ろくじはんに おきなければなりません = mỗi sáng phải dậy lúc 6 giờ rưỡi (ろくじはん).' },
      { questionVi: 'Buổi tối Linh phải làm gì?', choices: ['Làm bài tập về nhà', 'Dọn phòng', 'Giặt quần áo', 'Đi mua sắm'], answerIndex: 0, explanationVi: 'よるは しゅくだいを しなければなりません = buổi tối phải làm bài tập về nhà.' },
      { questionVi: 'Chủ nhật Linh làm gì?', choices: ['Đến trường học', 'Đi karaoke cùng bạn', 'Phải đi làm', 'Ở nhà ngủ thoải mái'], answerIndex: 3, explanationVi: 'にちようびは いかなくてもいいです。うちで ゆっくり ねます = Chủ nhật không cần đến trường, ở nhà ngủ thoải mái. Đi karaoke là thứ Bảy.' },
    ],
  },
  speakSentences: [
    { ja: 'くすりを のまなければなりません。', vi: 'Tôi phải uống thuốc.' },
    { ja: 'あした はやく おきなければなりません。', vi: 'Ngày mai tôi phải dậy sớm.' },
    { ja: 'にちようびは はたらかなくてもいいです。', vi: 'Chủ nhật tôi không cần làm việc.' },
    { ja: 'まいにち にほんごを べんきょうしなければなりません。', vi: 'Mỗi ngày tôi phải học tiếng Nhật.' },
  ],
  translatePairs: [
    { ja: 'くすりを のまなければなりません。', vi: 'Tôi phải uống thuốc.', tokens: ['くすり', 'を', 'のまなければなりません'], distractors: ['は'] },
    { ja: 'しゅくだいを しなければなりません。', vi: 'Tôi phải làm bài tập về nhà.', tokens: ['しゅくだい', 'を', 'しなければなりません'], distractors: ['へ', 'まで'] },
    { ja: 'あした かいしゃへ いかなくてもいいです。', vi: 'Ngày mai tôi không cần đến công ty.', tokens: ['あした', 'かいしゃ', 'へ', 'いかなくてもいいです'], distractors: ['で', 'まで'] },
    { ja: 'よる じゅういちじに ねます。', vi: 'Tối tôi đi ngủ lúc 11 giờ.', tokens: ['よる', 'じゅういちじ', 'に', 'ねます'], distractors: ['から'] },
    { ja: 'にちようびは ゆっくり ねてもいいです。', vi: 'Chủ nhật tôi được ngủ thoải mái.', tokens: ['にちようび', 'は', 'ゆっくり', 'ねてもいいです'], distractors: ['を'] },
  ],
  kanji: ['帰', '起', '寝'],
}
