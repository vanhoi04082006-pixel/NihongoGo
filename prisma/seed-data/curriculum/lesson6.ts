/**
 * NihongoGo — Bài 6: 動詞と目的語 (Động từ & tân ngữ — を・何).
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson6: CurriculumLesson = {
  order: 6,
  slug: 'l6-dong-tu-tan-ngu',
  title: 'Động từ & tân ngữ — を・何',
  titleJa: '動詞と目的語',
  description: 'Bước đầu làm quen động từ và cách đưa tân ngữ vào câu với trợ từ を, kèm từ hỏi 何.',
  learningObjectives: [
    'Nhận diện động từ thể từ điển',
    'Dùng を để đánh dấu tân ngữ',
    'Hỏi "làm gì" bằng 何',
  ],
  grammarTopics: ['Động từ thể từ điển cơ bản', 'Trợ từ を (tân ngữ trực tiếp)', 'Từ nghi vấn 何 (làm gì)'],
  vocabularyTopics: ['Động từ hoạt động thường ngày', 'Đồ ăn và đồ uống', 'Hoạt động giải trí'],
  kanjiTopics: [],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'なに', romaji: 'nani', meaningVi: 'gì, cái gì', pos: 'từ hỏi', exampleJa: 'にちようびは なにを しますか。', exampleVi: 'Chủ nhật bạn làm gì?' },
    { term: 'みます', romaji: 'mimasu', meaningVi: 'xem (phim, tivi)', pos: 'động từ nhóm 1', exampleJa: 'えいがを みます。', exampleVi: 'Tôi xem phim.' },
    { term: 'ききます', romaji: 'kikimasu', meaningVi: 'nghe (nhạc, đài)', pos: 'động từ nhóm 1', exampleJa: 'おんがくを ききます。', exampleVi: 'Tôi nghe nhạc.' },
    { term: 'よみます', romaji: 'yomimasu', meaningVi: 'đọc (sách, báo)', pos: 'động từ nhóm 1', exampleJa: 'ほんを よみます。', exampleVi: 'Tôi đọc sách.' },
    { term: 'かきます', romaji: 'kakimasu', meaningVi: 'viết, ghi chép', pos: 'động từ nhóm 1', exampleJa: 'てがみを かきます。', exampleVi: 'Tôi viết thư.' },
    { term: 'たべます', romaji: 'tabemasu', meaningVi: 'ăn', pos: 'động từ nhóm 1', exampleJa: 'りょうりを たべます。', exampleVi: 'Tôi ăn món ăn.' },
    { term: 'のみます', romaji: 'nomimasu', meaningVi: 'uống', pos: 'động từ nhóm 1', exampleJa: 'コーヒーを のみます。', exampleVi: 'Tôi uống cà phê.' },
    { term: 'します', romaji: 'shimasu', meaningVi: 'làm, chơi (thể thao)', pos: 'động từ nhóm 3', exampleJa: 'にちようびに テニスを します。', exampleVi: 'Chủ nhật tôi chơi quần vợt.' },
    { term: 'おきます', romaji: 'okimasu', meaningVi: 'thức dậy', pos: 'động từ nhóm 1', exampleJa: 'あさ ろくじに おきます。', exampleVi: 'Buổi sáng tôi dậy lúc 6 giờ.' },
    { term: 'ねます', romaji: 'nemasu', meaningVi: 'đi ngủ, ngủ', pos: 'động từ nhóm 1', exampleJa: 'ごご じゅういちじに ねます。', exampleVi: 'Tôi đi ngủ lúc 11 giờ tối.' },
    { term: 'べんきょうします', romaji: 'benkyōshimasu', meaningVi: 'học (bài)', pos: 'động từ nhóm 3', exampleJa: 'まいにち にほんごを べんきょうします。', exampleVi: 'Tôi học tiếng Nhật mỗi ngày.' },
    { term: 'はたらきます', romaji: 'hatarakimasu', meaningVi: 'làm việc', pos: 'động từ nhóm 1', exampleJa: 'げつようびから きんようびまで はたらきます。', exampleVi: 'Từ thứ Hai đến thứ Sáu tôi làm việc.' },
    { term: 'かいものします', romaji: 'kaimonoshimasu', meaningVi: 'đi mua sắm', pos: 'động từ nhóm 3', exampleJa: 'にちようびに かいものします。', exampleVi: 'Chủ nhật tôi đi mua sắm.' },
    { term: 'おんがく', romaji: 'ongaku', meaningVi: 'âm nhạc, nhạc', pos: 'danh từ', exampleJa: 'おんがくを ききます。', exampleVi: 'Tôi nghe nhạc.' },
    { term: 'えいが', romaji: 'eiga', meaningVi: 'phim, điện ảnh', pos: 'danh từ', exampleJa: 'えいがを みます。', exampleVi: 'Tôi xem phim.' },
    { term: 'ほん', romaji: 'hon', meaningVi: 'sách, quyển sách', pos: 'danh từ', exampleJa: 'ほんを よみます。', exampleVi: 'Tôi đọc sách.' },
    { term: 'テレビ', romaji: 'terebi', meaningVi: 'tivi', pos: 'danh từ', exampleJa: 'テレビを みます。', exampleVi: 'Tôi xem tivi.' },
    { term: 'しんぶん', romaji: 'shinbun', meaningVi: 'báo, báo chí', pos: 'danh từ', exampleJa: 'しんぶんを よみます。', exampleVi: 'Tôi đọc báo.' },
    { term: 'コーヒー', romaji: 'kōhī', meaningVi: 'cà phê', pos: 'danh từ', exampleJa: 'コーヒーを のみます。', exampleVi: 'Tôi uống cà phê.' },
    { term: 'りょうり', romaji: 'ryōri', meaningVi: 'món ăn, đồ ăn', pos: 'danh từ', exampleJa: 'りょうりを たべます。', exampleVi: 'Tôi ăn món ăn.' },
    { term: 'テニス', romaji: 'tenisu', meaningVi: 'quần vợt, tennis', pos: 'danh từ', exampleJa: 'テニスを します。', exampleVi: 'Tôi chơi quần vợt.' },
    { term: 'まいにち', romaji: 'mainichi', meaningVi: 'mỗi ngày', pos: 'phó từ', exampleJa: 'まいにち しんぶんを よみます。', exampleVi: 'Tôi đọc báo mỗi ngày.' },
  ],
  grammar: [
    {
      code: 'l6-masu-masen',
      title: 'V ます・V ません — động từ lịch sự khẳng định & phủ định',
      formation: 'Gốc động từ + ます (khẳng định) / ません (phủ định)',
      explanationVi:
        'Động từ lịch sự dùng đuôi ます: たべます = ăn, のみます = uống, みます = xem. Muốn phủ định chỉ cần thay ます bằng ません: たべません = không ăn, みません = không xem. Vì từ vựng đã ở dạng ます nên quy tắc rất gọn: ます → ます (khẳng định), ます → ません (phủ định). Lưu ý quan trọng: じゃありません chỉ dùng cho câu danh từ 「AはBじゃありません」 (bài 1), KHÔNG dùng được với động từ — sai: たべじゃありません. Câu với ます diễn tả thói quen lặp lại (まいにち…) hoặc việc ở hiện tại / tương lai gần.',
      examples: [
        { ja: 'まいにち にほんごを べんきょうします。', vi: 'Tôi học tiếng Nhật mỗi ngày.', tokens: ['まいにち', 'にほんご', 'を', 'べんきょうします'] },
        { ja: 'ごご コーヒーを のみます。', vi: 'Buổi chiều tôi uống cà phê.' },
        { ja: 'わたしは テレビを みません。', vi: 'Tôi không xem tivi.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'Điền đuôi động từ: 「Tôi xem tivi。」',
          sentence: 'テレビを み___。',
          options: ['ます', 'ません', 'です'],
          answerIndex: 0, explanationVi: 'Khẳng định lịch sự của động từ dùng ます. ません là phủ định, です là câu danh từ.',
        },
        {
          kind: 'conjugate', prompt: 'Điền đuôi động từ: 「Tôi không uống cà phê。」',
          sentence: 'コーヒーを のみ___。',
          options: ['ます', 'ません', 'です', 'じゃありません'],
          answerIndex: 1, explanationVi: 'Phủ định động từ: ます → ません. じゃありません chỉ dùng cho danh từ, không dùng cho động từ.',
        },
        {
          kind: 'choice', prompt: '「Buổi sáng tôi ăn món ăn Nhật。」 câu nào đúng?',
          options: ['あさ にほんの りょうりを たべません。', 'あさ にほんの りょうりを たべです。', 'あさ にほんの りょうりを たべます。', 'あさ にほんの りょうりを たべじゃありません。'],
          answerIndex: 2, explanationVi: 'Khẳng định → たべます. Các dạng たべです / たべじゃありません / たべません đều sai về đuôi động từ.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng ngữ pháp?',
          options: ['まいにち はたらきませんです。', 'まいにち はたらきです。', 'まいにち はたらきますます。', 'まいにち はたらきます。'],
          answerIndex: 3, explanationVi: 'Chỉ có はたらきます là dạng đúng. Phủ định là はたらきません (không phải はたらきませんです), và động từ không kết hợp với です.',
        },
        {
          kind: 'fill', prompt: 'Điền động từ phù hợp: 「Tôi học tiếng Nhật mỗi ngày。」',
          sentence: 'まいにち にほんごを ___。',
          options: ['ねます', 'べんきょうします', 'のみます', 'みます'],
          answerIndex: 1, explanationVi: 'Học (bài) = べんきょうします. ねます = ngủ, のみます = uống, みます = xem — đều không đúng nghĩa với 「học tiếng Nhật」.',
        },
      ],
    },
    {
      code: 'l6-wo-object',
      title: 'N を V — tân ngữ trực tiếp',
      formation: 'Danh từ (tân ngữ) + を + động từ',
      explanationVi:
        'を là trợ từ đánh dấu TÂN NGỮ trực tiếp — người hoặc vật chịu tác động của hành động: ほんを よみます = đọc quyển sách, コーヒーを のみます = uống cà phê, テニスを します = chơi quần vợt. Khi làm trợ từ, を được đọc là "o". Phân biệt với các trợ từ đã học: へ = hướng đi đến nơi (がっこうへ いきます), で = phương tiện (でんしゃで いきます), と = người cùng đi (ともだちと いきます). Mỗi động từ thường "gọi" tân ngữ riêng: みます → えいが・テレビ, ききます → おんがく, よみます → ほん・しんぶん.',
      examples: [
        { ja: 'えいがを みます。', vi: 'Tôi xem phim.', tokens: ['えいが', 'を', 'みます'] },
        { ja: 'あさ しんぶんを よみます。', vi: 'Buổi sáng tôi đọc báo.' },
        { ja: 'にちようびに テニスを します。', vi: 'Chủ nhật tôi chơi quần vợt.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Điền trợ từ: 「Tôi nghe nhạc。」',
          sentence: 'おんがく___ ききます。',
          options: ['へ', 'を', 'で', 'の'],
          answerIndex: 1, explanationVi: 'おんがく là tân ngữ (vật bị nghe) → を. へ là hướng đi, で là phương tiện, の nối hai danh từ.',
        },
        {
          kind: 'choice', prompt: '「Tôi đọc sách。」 câu nào đúng?',
          options: ['ほんへ よみます。', 'ほんで よみます。', 'ほんを よみます。', 'ほんと よみます。'],
          answerIndex: 2, explanationVi: 'ほん là tân ngữ của よみます → ほんを よみます. へ cho nơi đến, で cho phương tiện, と cho người cùng đi.',
        },
        {
          kind: 'error', prompt: 'Câu nào dùng trợ từ đúng?',
          options: ['コーヒーへ のみます。', 'コーヒーを のみます。', 'コーヒーと のみます。', 'コーヒーに のみます。'],
          answerIndex: 1, explanationVi: 'コーヒー là thứ bị uống → phải dùng を. へ là hướng đến nơi, と là "cùng với", に không dùng cho tân ngữ.',
        },
        {
          kind: 'fill', prompt: 'Điền tân ngữ: 「Tôi xem tivi。」',
          sentence: '___を みます。',
          options: ['コーヒー', 'テニス', 'テレビ', 'おんがく'],
          answerIndex: 2, explanationVi: 'Tân ngữ của みます (xem) là テレビ. コーヒー đi với のみます, テニス đi với します, おんがく đi với ききます.',
        },
      ],
    },
    {
      code: 'l6-nani-ni-time',
      title: '何を しますか ・ 〜に — hỏi "làm gì" & thời điểm hành động',
      formation: '何を + Vますか / [Thời điểm cụ thể] に + Vます',
      explanationVi:
        'Hai mẫu dùng chung một chỗ trong câu. (1) Hỏi việc làm: thay tân ngữ bằng なに rồi thêm を: なにを しますか = «bạn làm gì?», なにを たべますか = «ăn gì?». Lưu ý: hỏi "mấy giờ" là なんじ (bài 4), còn なに đứng trước を. (2) Thời điểm cụ thể (mấy giờ, thứ mấy, ngày) đi với に rồi mới tới động từ: ろくじに おきます = dậy lúc 6 giờ, にちようびに かいものします = Chủ nhật đi mua sắm. Từ chỉ thời gian tương đối như きょう・あした・まいにち KHÔNG dùng に: あした かいものします (không nói あしたに). So sánh với ごろ (bài 4): に = mốc chính xác, ごろ = khoảng.',
      examples: [
        { ja: 'にちようびは なにを しますか。', vi: 'Chủ nhật bạn làm gì?', tokens: ['にちようび', 'は', 'なに', 'を', 'しますか'] },
        { ja: 'あさ ろくじに おきます。', vi: 'Buổi sáng tôi dậy lúc 6 giờ.', tokens: ['あさ', 'ろくじ', 'に', 'おきます'] },
        { ja: 'なんじに ねますか。', vi: 'Bạn đi ngủ lúc mấy giờ?' },
        { ja: 'あした かいものします。', vi: 'Ngày mai tôi đi mua sắm.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Điền trợ từ: 「Buổi sáng tôi dậy lúc 7 giờ。」',
          sentence: 'あさ しちじ___ おきます。',
          options: ['で', 'を', 'に', 'へ'],
          answerIndex: 2, explanationVi: 'Thời điểm cụ thể (しちじ = 7 giờ) đi với に. を là tân ngữ, へ là hướng đi, で là phương tiện.',
        },
        {
          kind: 'choice', prompt: '「Chủ nhật bạn làm gì?」 câu nào đúng?',
          options: ['にちようびは なんじを しますか。', 'にちようびは だれを しますか。', 'にちようびは なにを しますか。', 'にちようびは どこを しますか。'],
          answerIndex: 2, explanationVi: 'Hỏi "làm gì" dùng なにを しますか. なんじ hỏi giờ (đi với に), だれ hỏi người, どこ hỏi nơi chốn.',
        },
        {
          kind: 'choice', prompt: '「Ngày mai tôi đi mua sắm。」 câu nào đúng?',
          options: ['あしたに かいものします。', 'あした かいものします。', 'あしたへ かいものします。', 'あしたを かいものします。'],
          answerIndex: 1, explanationVi: 'あした là từ thời gian tương đối nên KHÔNG dùng に (nói あしたに là sai). あした cũng không phải nơi chốn hay tân ngữ nên へ / を đều sai.',
        },
        {
          kind: 'fill', prompt: 'Điền từ hỏi: 「Bạn đi ngủ lúc mấy giờ?」',
          sentence: '___に ねますか。',
          options: ['なに', 'どこ', 'だれ', 'なんじ'],
          answerIndex: 3, explanationVi: 'Hỏi "mấy giờ" dùng なんじ + に. なに hỏi "cái gì", どこ hỏi nơi, だれ hỏi người.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['ごご ろくじを おきます。', 'ごご ろくじへ おきます。', 'ごご ろくじで おきます。', 'ごご ろくじに おきます。'],
          answerIndex: 3, explanationVi: 'Thời điểm hành động dùng に: ろくじに おきます. を là tân ngữ, へ là hướng đi, で là phương tiện — đều sai với giờ.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Một ngày của Linh',
      situationVi: 'Tanaka hỏi về sinh hoạt hằng ngày của Linh.',
      lines: [
        { speaker: 'たなか', ja: 'リンさんは あさ なんじに おきますか。', vi: 'Linh, buổi sáng bạn dậy lúc mấy giờ?' },
        { speaker: 'リン', ja: 'ろくじに おきます。', vi: 'Tôi dậy lúc 6 giờ.' },
        { speaker: 'たなか', ja: 'あさ なにを たべますか。', vi: 'Buổi sáng bạn ăn gì?' },
        { speaker: 'リン', ja: 'りょうりは たべません。コーヒーを のみます。', vi: 'Tôi không ăn món gì cả. Tôi chỉ uống cà phê.' },
        { speaker: 'たなか', ja: 'まいにち にほんごを べんきょうしますか。', vi: 'Bạn học tiếng Nhật mỗi ngày à?' },
        { speaker: 'リン', ja: 'はい、まいにち べんきょうします。', vi: 'Vâng, tôi học mỗi ngày.' },
        { speaker: 'たなか', ja: 'ごご なんじに ねますか。', vi: 'Buổi tối bạn đi ngủ lúc mấy giờ?' },
        { speaker: 'リン', ja: 'じゅういちじに ねます。', vi: 'Tôi đi ngủ lúc 11 giờ.' },
      ],
    },
    {
      titleVi: 'Chủ nhật của Linh',
      situationVi: 'Tanaka hỏi Linh làm gì vào Chủ nhật.',
      lines: [
        { speaker: 'たなか', ja: 'リンさん、にちようびは なにを しますか。', vi: 'Linh, Chủ nhật bạn làm gì?' },
        { speaker: 'リン', ja: 'あさ しんぶんを よみます。', vi: 'Buổi sáng tôi đọc báo.' },
        { speaker: 'たなか', ja: 'テニスを しますか。', vi: 'Bạn chơi quần vợt à?' },
        { speaker: 'リン', ja: 'いいえ、テニスは しません。こうえんへ あるきます。', vi: 'Không, tôi không chơi quần vợt. Tôi đi bộ đến công viên.' },
        { speaker: 'たなか', ja: 'えいがは みますか。', vi: 'Còn phim thì bạn có xem không?' },
        { speaker: 'リン', ja: 'はい、えいがを みます。', vi: 'Vâng, tôi xem phim.' },
        { speaker: 'たなか', ja: 'おんがくも ききますか。', vi: 'Bạn cũng nghe nhạc à?' },
        { speaker: 'リン', ja: 'はい、まいにち おんがくを ききます。', vi: 'Vâng, tôi nghe nhạc mỗi ngày.' },
        { speaker: 'たなか', ja: 'いいですね。わたしも おんがくを ききます。', vi: 'Tốt đấy. Tôi cũng nghe nhạc.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'まいにち しんぶんを よみます。', meaningVi: 'Tôi đọc báo mỗi ngày.', choices: ['Đọc sách mỗi ngày', 'Đọc báo mỗi ngày', 'Xem tivi mỗi ngày', 'Không đọc báo'], answerIndex: 1, dictation: true },
    { scriptJa: 'あさ ろくじに おきます。', meaningVi: 'Buổi sáng tôi dậy lúc 6 giờ.', choices: ['Dậy lúc 7 giờ sáng', 'Ngủ lúc 6 giờ tối', 'Dậy lúc 6 giờ sáng', 'Dậy lúc 10 giờ sáng'], answerIndex: 2 },
    { scriptJa: 'コーヒーを のみません。', meaningVi: 'Tôi không uống cà phê.', choices: ['Uống cà phê', 'Không uống trà', 'Không ăn món ăn', 'Không uống cà phê'], answerIndex: 3, dictation: true },
    { scriptJa: 'にちようびに テニスを します。', meaningVi: 'Chủ nhật tôi chơi quần vợt.', choices: ['Chơi quần vợt vào Chủ nhật', 'Chơi quần vợt vào thứ Bảy', 'Xem quần vợt vào Chủ nhật', 'Chơi quần vợt mỗi ngày'], answerIndex: 0 },
  ],
  reading: {
    titleVi: 'Ngày thường của Tanaka',
    lines: [
      { text: 'たなかさんは まいにち あさ しちじに おきます。', vi: 'Mỗi ngày, Tanaka dậy lúc 7 giờ sáng.' },
      { text: 'あさ しんぶんを よみます。', vi: 'Buổi sáng ông ấy đọc báo.' },
      { text: 'でんしゃで かいしゃへ いきます。', vi: 'Ông ấy đi công ty bằng tàu điện.' },
      { text: 'かいしゃは くじから ごご ろくじまでです。', vi: 'Công ty làm việc từ 9 giờ đến 6 giờ tối.' },
      { text: 'ごご ろくじに うちへ かえります。', vi: 'Lúc 6 giờ tối ông ấy về nhà.' },
      { text: 'テレビを みます。', vi: 'Ông ấy xem tivi.' },
      { text: 'おんがくも ききます。', vi: 'Ông ấy cũng nghe nhạc.' },
      { text: 'じゅういちじに ねます。', vi: 'Ông ấy đi ngủ lúc 11 giờ.' },
      { text: 'にちようびは ともだちと テニスを します。', vi: 'Chủ nhật ông ấy chơi quần vợt cùng bạn.' },
    ],
    questions: [
      { questionVi: 'Tanaka dậy lúc mấy giờ?', choices: ['7 giờ sáng', '6 giờ sáng', '9 giờ sáng', '11 giờ'], answerIndex: 0, explanationVi: 'まいにち あさ しちじに おきます = dậy lúc 7 giờ sáng mỗi ngày (しちじ = 7 giờ).' },
      { questionVi: 'Tanaka đi công ty bằng phương tiện nào?', choices: ['Xe buýt', 'Tàu điện', 'Xe đạp', 'Đi bộ'], answerIndex: 1, explanationVi: 'でんしゃで かいしゃへ いきます = đi công ty bằng tàu điện (でんしゃで).' },
      { questionVi: 'Chủ nhật Tanaka làm gì cùng bạn?', choices: ['Xem phim', 'Đi dạo', 'Chơi quần vợt', 'Hát karaoke'], answerIndex: 2, explanationVi: 'にちようびは ともだちと テニスを します — テニスを します = chơi quần vợt.' },
    ],
  },
  speakSentences: [
    { ja: 'まいにち にほんごを べんきょうします。', vi: 'Tôi học tiếng Nhật mỗi ngày.' },
    { ja: 'あさ ろくじに おきます。', vi: 'Buổi sáng tôi dậy lúc 6 giờ.' },
    { ja: 'えいがを みます。', vi: 'Tôi xem phim.' },
    { ja: 'にちようびは なにを しますか。', vi: 'Chủ nhật bạn làm gì?' },
  ],
  translatePairs: [
    { ja: 'ほんを よみます。', vi: 'Tôi đọc sách.', tokens: ['ほん', 'を', 'よみます'], distractors: ['へ'] },
    { ja: 'まいにち しんぶんを よみます。', vi: 'Tôi đọc báo mỗi ngày.', tokens: ['まいにち', 'しんぶん', 'を', 'よみます'], distractors: ['に', 'で'] },
    { ja: 'あさ ろくじに おきます。', vi: 'Buổi sáng tôi dậy lúc 6 giờ.', tokens: ['あさ', 'ろくじ', 'に', 'おきます'], distractors: ['を'] },
    { ja: 'テレビを みません。', vi: 'Tôi không xem tivi.', tokens: ['テレビ', 'を', 'みません'], distractors: ['で'] },
    { ja: 'にちようびは なにを しますか。', vi: 'Chủ nhật bạn làm gì?', tokens: ['にちようび', 'は', 'なに', 'を', 'しますか'], distractors: ['と'] },
  ],
  kanji: [],
}
