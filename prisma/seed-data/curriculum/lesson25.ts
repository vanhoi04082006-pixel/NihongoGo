/**
 * NihongoGo — Bài 25: とき (lúc, khi) & 〜ながら (vừa… vừa…).
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson25: CurriculumLesson = {
  order: 25,
  slug: 'l25-toki-nagara',
  title: 'とき・ながら — Lúc... / vừa... vừa...',
  titleJa: 'とき・ながら',
  description: 'Nói về thời điểm hành động xảy ra với とき và hai hành động song song với ながら.',
  learningObjectives: [
    'Dùng とき đúng thì của động từ',
    'Diễn tả hành động song song với ながら',
    'Kể lại thói quen theo thời điểm',
  ],
  grammarTopics: ['とき (lúc, khi)', '〜ながら (vừa... vừa...)'],
  vocabularyTopics: ['Thói quen hằng ngày', 'Hoạt động song song'],
  kanjiTopics: ['Kanji tần suất (毎・週・間)'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: '毎日', reading: 'まいにち', romaji: 'mainichi', meaningVi: 'mỗi ngày', pos: 'danh từ (trạng ngữ)', exampleJa: 'まいにち にほんごを べんきょうします。', exampleVi: 'Mỗi ngày tôi học tiếng Nhật.' },
    { term: '毎朝', reading: 'まいあさ', romaji: 'maiasa', meaningVi: 'mỗi sáng', pos: 'danh từ (trạng ngữ)', exampleJa: 'まいあさ ろくじに おきます。', exampleVi: 'Mỗi sáng tôi dậy lúc 6 giờ.' },
    { term: '毎晩', reading: 'まいばん', romaji: 'maiban', meaningVi: 'mỗi tối', pos: 'danh từ (trạng ngữ)', exampleJa: 'まいばん おんがくを ききます。', exampleVi: 'Mỗi tối tôi nghe nhạc.' },
    { term: '毎週', reading: 'まいしゅう', romaji: 'maishū', meaningVi: 'mỗi tuần', pos: 'danh từ (trạng ngữ)', exampleJa: 'まいしゅう こうえんで テニスを します。', exampleVi: 'Mỗi tuần tôi chơi tennis ở công viên.' },
    { term: '週間', reading: 'しゅうかん', romaji: 'shūkan', meaningVi: 'khoảng thời gian (tính bằng) tuần', pos: 'danh từ (hậu tố)', exampleJa: 'とうきょうに さんしゅうかん いました。', exampleVi: 'Tôi ở Tokyo ba tuần.' },
    { term: 'せんしゅう', romaji: 'senshū', meaningVi: 'tuần trước', pos: 'danh từ (trạng ngữ)', exampleJa: 'せんしゅう、えいがを みました。', exampleVi: 'Tuần trước tôi đi xem phim.' },
    { term: 'こんしゅう', romaji: 'konshū', meaningVi: 'tuần này', pos: 'danh từ (trạng ngữ)', exampleJa: 'こんしゅうは いそがしいです。', exampleVi: 'Tuần này tôi bận.' },
    { term: 'らいしゅう', romaji: 'raishū', meaningVi: 'tuần sau', pos: 'danh từ (trạng ngữ)', exampleJa: 'らいしゅう、ともだちに あいます。', exampleVi: 'Tuần sau tôi gặp bạn.' },
    { term: 'しょくじ', romaji: 'shokuji', meaningVi: 'bữa ăn, việc ăn cơm', pos: 'danh từ', exampleJa: 'しょくじの とき、テレビを みません。', exampleVi: 'Lúc ăn cơm tôi không xem TV.' },
    { term: 'おんがく', romaji: 'ongaku', meaningVi: 'âm nhạc', pos: 'danh từ', exampleJa: 'おんがくを ききます。', exampleVi: 'Tôi nghe nhạc.' },
    { term: 'そうじします', romaji: 'sōjishimasu', meaningVi: 'dọn dẹp, quét dọn', pos: 'động từ nhóm 3', exampleJa: 'あさ、へやを そうじします。', exampleVi: 'Buổi sáng tôi dọn phòng.' },
    { term: 'りょうりします', romaji: 'ryōrishimasu', meaningVi: 'nấu ăn, nấu nướng', pos: 'động từ nhóm 3', exampleJa: 'ばんごはんを りょうりします。', exampleVi: 'Tôi nấu bữa tối.' },
    { term: 'みがきます', romaji: 'migakimasu', meaningVi: 'chải, đánh (răng)', pos: 'động từ nhóm 1', exampleJa: 'はを みがきます。', exampleVi: 'Tôi đánh răng.' },
    { term: 'わすれます', romaji: 'wasuremasu', meaningVi: 'quên', pos: 'động từ nhóm 2', exampleJa: 'ともだちの なまえを よく わすれます。', exampleVi: 'Tôi hay quên tên bạn bè.' },
    { term: 'つかれます', romaji: 'tsukaremasu', meaningVi: 'mệt, mỏi', pos: 'động từ nhóm 2', exampleJa: 'まいにち しごとで つかれます。', exampleVi: 'Mỗi ngày tôi mệt vì công việc.' },
    { term: 'ゆっくり', romaji: 'yukkuri', meaningVi: 'thong thả, từ từ', pos: 'phó từ', exampleJa: 'ごはんを ゆっくり たべます。', exampleVi: 'Tôi ăn cơm thong thả.' },
    { term: 'ひとりで', romaji: 'hitori de', meaningVi: 'một mình', pos: 'trạng ngữ', exampleJa: 'ひとりで りょうりします。', exampleVi: 'Tôi nấu ăn một mình.' },
    { term: 'あいさつ', romaji: 'aisatsu', meaningVi: 'lời chào, cái chào', pos: 'danh từ', exampleJa: 'ともだちに あった とき、あいさつを します。', exampleVi: 'Lúc gặp bạn tôi chào hỏi.' },
    { term: 'おふろに はいります', romaji: 'ofuro ni hairimasu', meaningVi: 'tắm (bồn tắm)', pos: 'cụm động từ (nhóm 1)', exampleJa: 'まいばん おふろに はいります。', exampleVi: 'Mỗi tối tôi tắm.' },
  ],
  grammar: [
    {
      code: 'l25-toki',
      title: '〜とき — lúc, khi…',
      formation: 'V thể thường + とき (のむ とき・のんだ とき); Adj-い + とき (あつい とき); N + の + とき (しょくじの とき); Adj-な + な + とき (ひまな とき)',
      explanationVi:
        'とき (時) = "lúc, khi", đứng sau mệnh đề mô tả HOÀN CẢNH; hành động chính nằm ở vế sau. Quy tắc quan trọng: MỆNH ĐỀ TRƯỚC とき QUYẾT ĐỊNH THÌ — (1) việc ở vế とき diễn ra cùng lúc hoặc là thói quen → dùng dạng hiện tại: のむ とき (lúc uống), あつい とき (khi nóng); (2) việc ở vế とき KẾT THÚC trước khi hành động chính xảy ra → dùng dạng quá khứ (thể た): のんだ とき (lúc đã uống xong), あった とき (lúc đã gặp). Với danh từ thêm の (しょくじの とき); tính từ な giữ な (ひまな とき); tính từ い giữ nguyên (あつい とき). Vế とき không dùng です・ます.',
      examples: [
        { ja: 'しょくじの とき、てんきの はなしを します。', vi: 'Lúc ăn cơm, chúng tôi nói chuyện thời tiết.', tokens: ['しょくじ', 'の', 'とき', 'てんきの', 'はなし', 'を', 'します'] },
        { ja: 'はを みがく とき、おんがくを ききます。', vi: 'Lúc đánh răng, tôi nghe nhạc.' },
        { ja: 'あつい とき、つめたい おちゃを のみます。', vi: 'Khi trời nóng, tôi uống trà lạnh.' },
        { ja: 'こどもの とき、よく こうえんで あそびました。', vi: 'Lúc còn nhỏ, tôi hay chơi ở công viên.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'たべます → dạng đứng trước とき (lúc ăn — hai việc diễn ra cùng lúc)',
          sentence: 'ごはんを ___ とき、テレビを みます。',
          options: ['たべる', 'たべた', 'たべて', 'たべます'],
          answerIndex: 0, explanationVi: 'Hai việc xảy ra đồng thời → vế とき dùng thể thường hiện tại: たべる とき. たべて là thể て, たべます là thể lịch sự — đều không dùng trước とき.',
        },
        {
          kind: 'conjugate', prompt: 'あいます → dạng đứng trước とき (gặp xong rồi mới chào)',
          sentence: 'ともだちに ___ とき、あいさつを します。',
          options: ['あう', 'あった', 'あって', 'あいます'],
          answerIndex: 1, explanationVi: 'Gặp nhau (hoàn tất) rồi mới chào → vế とき dùng quá khứ: あった とき. Nếu hai việc cùng lúc thì mới dùng あう とき.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ nối danh từ với とき (Lúc ăn cơm, tôi không xem TV)',
          sentence: 'しょくじ___ とき、テレビを みません。',
          options: ['の', 'な', 'を', 'に'],
          answerIndex: 0, explanationVi: 'Danh từ + の + とき: しょくじの とき. な chỉ đi với tính từ な, を là trợ từ tân ngữ, に là trợ từ thời điểm đơn giản (ろくじに).',
        },
        {
          kind: 'fill', prompt: 'Điền từ đúng (Khi rảnh, tôi nghe nhạc)',
          sentence: 'ひま___ とき、おんがくを ききます。',
          options: ['の', 'な', 'で', 'と'],
          answerIndex: 1, explanationVi: 'Tính từ な giữ な trước とき: ひまな とき. Danh từ mới dùng の (しょくじの とき).',
        },
        {
          kind: 'choice', prompt: '「こどもの とき、よく こうえんで あそびました。」 có nghĩa là gì?',
          options: ['Lúc còn nhỏ tôi thường chơi ở công viên', 'Tôi sẽ đưa trẻ con đến công viên', 'Công viên này dành cho trẻ em', 'Tôi hay đi công viên cùng con'],
          answerIndex: 0, explanationVi: 'こどもの とき = lúc còn là trẻ con (N + の + とき); よく あそびました là thói quen trong quá khứ.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['はを みがいて とき、おんがくを ききます。', 'はを みがきます とき、おんがくを ききます。', 'はを みがく とき、おんがくを ききます。', 'はを みがくの とき、おんがくを ききます。'],
          answerIndex: 2, explanationVi: 'Động từ thể thường + とき trực tiếp: みがく とき. Không dùng て, không dùng ます, cũng không chen の.',
        },
      ],
    },
    {
      code: 'l25-nagara',
      title: '〜ながら — vừa… vừa…',
      formation: 'Gốc ます (bỏ ます) + ながら: ききます → ききながら, します → しながら, きます → きながら',
      explanationVi:
        'ながら diễn tả hai hành động xảy ra CÙNG MỘT LÚC của CÙNG MỘT NGƯỜI: おんがくを ききながら べんきょうします = vừa nghe nhạc vừa học. Hành động chính — được người nói chú ý hơn — đứng ở vế SAU và chia bình thường (ます・ません…); hành động "nền" đưa vào vế ながら. Vì hai vế phải cùng chủ ngữ nên không thể nói "tôi học trong lúc mẹ nấu ăn". Phủ định đặt ở vế chính: テレビを みながら、ごはんを たべません.',
      examples: [
        { ja: 'おんがくを ききながら べんきょうします。', vi: 'Tôi vừa nghe nhạc vừa học.', tokens: ['おんがく', 'を', 'ききながら', 'べんきょう', 'します'] },
        { ja: 'テレビを みながら ごはんを たべます。', vi: 'Tôi vừa xem TV vừa ăn cơm.' },
        { ja: 'うたを うたいながら、へやを そうじします。', vi: 'Tôi vừa hát vừa dọn phòng.' },
        { ja: 'ともだちと はなししながら、こうえんを さんぽします。', vi: 'Tôi vừa trò chuyện với bạn vừa đi bộ trong công viên.' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'ききます → dạng ながら (vừa nghe… vừa…)',
          sentence: 'おんがくを ___、しゅくだいを します。',
          options: ['きながら', 'ききながら', 'きってながら', 'きくながら'],
          answerIndex: 1, explanationVi: 'Bỏ ます thêm ながら: ききます → ききながら. きながら sai vì mất âm き, きくながら sai vì dùng nguyên thể thường.',
        },
        {
          kind: 'conjugate', prompt: 'りょうりします → dạng ながら',
          sentence: '___、おんがくを ききます。',
          options: ['りょうりながら', 'りょうりしてながら', 'りょうりしながら', 'りょうりしたがら'],
          answerIndex: 2, explanationVi: 'Động từ 〜します giữ し: りょうりしながら. Danh từ không tự ghép trực tiếp với ながら.',
        },
        {
          kind: 'fill', prompt: 'Điền vế chính (Tôi vừa đánh răng vừa nghe nhạc)',
          sentence: 'はを みがきながら、おんがくを ___。',
          options: ['ききます', 'ききながら', 'きいて', 'きく とき'],
          answerIndex: 0, explanationVi: 'Vế sau ながら là hành động chính, chia bình thường: ききます. ながら chỉ xuất hiện một lần ở vế nền.',
        },
        {
          kind: 'choice', prompt: 'Điểm nào đúng về mẫu ながら?',
          options: ['Hai hành động phải khác chủ ngữ', 'Hai hành động phải cùng một chủ ngữ', 'Vế ながら luôn là hành động chính', 'Chỉ dùng được với việc đã kết thúc'],
          answerIndex: 1, explanationVi: 'ながら = cùng lúc, cùng một người: tôi vừa A vừa B. Hai việc của hai người khác nhau thì không dùng ながら.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['テレビを みますながら、ごはんを たべます。', 'テレビを みてながら、ごはんを たべます。', 'テレビを みるながら、ごはんを たべます。', 'テレビを みながら、ごはんを たべます。'],
          answerIndex: 3, explanationVi: 'みます → bỏ ます → み + ながら = みながら. Giữ ます, dùng て hoặc みる đều sai.',
        },
        {
          kind: 'choice', prompt: '「そうじしながら、うたを うたいます。」 có nghĩa là gì?',
          options: ['Dọn dẹp xong rồi mới hát', 'Vừa dọn dẹp vừa hát', 'Hát xong rồi mới dọn dẹp', 'Không thích dọn dẹp lắm'],
          answerIndex: 1, explanationVi: 'ながら = hai việc cùng lúc: dọn dẹp (hành động nền) + hát (hành động chính).',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Buổi sáng bận rộn',
      situationVi: 'Ở lớp, Tanaka hỏi Linh về thói quen buổi sáng.',
      lines: [
        { speaker: 'たなか', ja: 'リンさんは まいあさ なんじに おきますか。', vi: 'Linh, mỗi sáng bạn dậy lúc mấy giờ?' },
        { speaker: 'リン', ja: 'ろくじに おきます。はを みがきながら、おんがくを ききます。', vi: 'Tôi dậy lúc 6 giờ. Tôi vừa đánh răng vừa nghe nhạc.' },
        { speaker: 'たなか', ja: 'へえ、いそがしいですね。', vi: 'Ồ, bận thật nhỉ.' },
        { speaker: 'リン', ja: 'そうですよ。しょくじの ときも、じかんが ありません。', vi: 'Đúng vậy. Đến lúc ăn cơm cũng không có thời gian.' },
        { speaker: 'たなか', ja: 'わたしは まいあさ さんぽします。あるきながら、あさの しゅくだいを かんがえます。', vi: 'Còn tôi, mỗi sáng tôi đi bộ. Vừa đi vừa suy nghĩ bài tập buổi sáng.' },
        { speaker: 'リン', ja: 'いいですね。わたしも さんぽが したいです。', vi: 'Hay đấy. Tôi cũng muốn đi bộ.' },
        { speaker: 'たなか', ja: 'じゃあ、あしたから いっしょに さんぽしましょう。', vi: 'Vậy từ mai mình cùng đi bộ nhé.' },
        { speaker: 'リン', ja: 'ええ。はなししながら、あるきましょう。', vi: 'Vâng. Mình vừa trò chuyện vừa đi nhé.' },
        { speaker: 'たなか', ja: 'そうしましょう。たのしいと おもいます。', vi: 'Đồng ý nhé. Tôi nghĩ sẽ vui.' },
      ],
    },
    {
      titleVi: 'Bí quyết nhớ từ mới',
      situationVi: 'Min hỏi Linh cách học thuộc từ tiếng Nhật.',
      lines: [
        { speaker: 'ミン', ja: 'リンさん、にほんごの ことばを おぼえる とき、なにを しますか。', vi: 'Linh, lúc học từ tiếng Nhật, bạn làm gì?' },
        { speaker: 'リン', ja: 'ノートに ことばを かきます。', vi: 'Tôi viết từ vào vở.' },
        { speaker: 'ミン', ja: 'そうですか。わたしは よく わすれます。', vi: 'Vậy à. Tôi thì hay quên.' },
        { speaker: 'リン', ja: 'わたしも わすれました。でも、まいにち ノートを よみました。', vi: 'Tôi cũng từng quên. Nhưng mỗi ngày tôi đọc lại vở.' },
        { speaker: 'ミン', ja: 'よむ とき、じしょを つかいますか。', vi: 'Lúc đọc, bạn có dùng từ điển không?' },
        { speaker: 'リン', ja: 'いいえ。でんしゃの なかで よみます。', vi: 'Không. Tôi đọc trong tàu điện.' },
        { speaker: 'ミン', ja: 'でんしゃの なかでも わすれませんか。', vi: 'Trong tàu điện mà không quên à?' },
        { speaker: 'リン', ja: 'ええ。うちへ かえった とき、もういちど よみます。', vi: 'Vâng. Lúc về đến nhà, tôi đọc lại một lần nữa.' },
        { speaker: 'ミン', ja: 'いいですね。わたしも まいにち よみます。', vi: 'Hay đấy. Tôi cũng sẽ đọc mỗi ngày.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'はを みがく とき、おんがくを ききます。', meaningVi: 'Lúc đánh răng, tôi nghe nhạc.', choices: ['Lúc đánh răng, tôi nghe nhạc', 'Tôi đánh răng xong mới nghe nhạc', 'Tôi không thích nghe nhạc', 'Tôi vừa đánh răng vừa hát'], answerIndex: 0, dictation: true },
    { scriptJa: 'おんがくを ききながら べんきょうします。', meaningVi: 'Tôi vừa nghe nhạc vừa học.', choices: ['Tôi học xong rồi mới nghe nhạc', 'Tôi vừa nghe nhạc vừa học', 'Nghe nhạc nên không học được', 'Tôi không nghe nhạc khi học'], answerIndex: 1, dictation: true },
    { scriptJa: 'こどもの とき、よく こうえんで あそびました。', meaningVi: 'Lúc còn nhỏ, tôi thường chơi ở công viên.', choices: ['Bây giờ tôi hay đi công viên', 'Tôi sẽ đưa trẻ con đến công viên', 'Lúc còn nhỏ, tôi thường chơi ở công viên', 'Tôi chưa từng đến công viên'], answerIndex: 2 },
    { scriptJa: 'あつい とき、つめたい おちゃを のみます。', meaningVi: 'Khi trời nóng, tôi uống trà lạnh.', choices: ['Tôi uống trà nóng mỗi sáng', 'Khi trời nóng, tôi uống trà lạnh', 'Tôi không uống trà', 'Trà lạnh rất đắt'], answerIndex: 1 },
    { scriptJa: 'テレビを みながら、ばんごはんを たべます。', meaningVi: 'Tôi vừa xem TV vừa ăn tối.', choices: ['Tôi vừa xem TV vừa ăn tối', 'Tôi ăn tối xong rồi xem TV', 'Tối nào tôi cũng chỉ xem TV', 'Tôi ăn tối mà không bật TV'], answerIndex: 0 },
  ],
  reading: {
    titleVi: 'Một ngày của Linh',
    lines: [
      { text: 'わたしの まいにちは とても いそがしいです。', vi: 'Mỗi ngày của tôi đều rất bận rộn.' },
      { text: 'まいあさ ろくじに おきます。はを みがきながら、おんがくを ききます。', vi: 'Mỗi sáng tôi dậy lúc 6 giờ, vừa đánh răng vừa nghe nhạc.' },
      { text: 'はちじに うちを でます。でんしゃの なかで、ほんを よみます。', vi: '8 giờ tôi rời nhà. Trong tàu điện tôi đọc sách.' },
      { text: 'しごとの とき、おちゃを よく のみます。', vi: 'Lúc làm việc, tôi hay uống trà.' },
      { text: 'よる、うちへ かえった とき、すぐ おふろに はいります。', vi: 'Buổi tối, lúc về đến nhà, tôi tắm ngay.' },
      { text: 'おふろに はいりながら、うたを うたいます。', vi: 'Tôi vừa tắm vừa hát.' },
      { text: 'ばんごはんを たべながら、テレビを みます。', vi: 'Tôi vừa ăn tối vừa xem TV.' },
      { text: 'つかれた ときは、はやく ねます。', vi: 'Khi mệt thì tôi đi ngủ sớm.' },
    ],
    questions: [
      { questionVi: 'Buổi sáng, lúc đánh răng người viết làm gì?', choices: ['Nghe nhạc', 'Xem TV', 'Hát', 'Gọi điện cho bạn'], answerIndex: 0, explanationVi: 'Câu 2: はを みがきながら、おんがくを ききます — vừa đánh răng vừa nghe nhạc.' },
      { questionVi: 'Lúc về đến nhà buổi tối, người viết làm gì ngay?', choices: ['Nấu cơm', 'Đi tắm', 'Đi ngủ', 'Đi dạo'], answerIndex: 1, explanationVi: 'Câu 5: うちへ かえった とき、すぐ おふろに はいります — quá khứ かえった とき vì hành động về nhà kết thúc trước.' },
      { questionVi: 'Câu nào đúng theo đoạn văn?', choices: ['Người viết xem TV lúc làm việc', 'Người viết hát khi ở trong tàu', 'Người viết vừa ăn tối vừa xem TV', 'Người viết đi ngủ lúc 8 giờ'], answerIndex: 2, explanationVi: 'Câu 7: ばんごはんを たべながら、テレビを みます. Lúc làm việc thì uống trà (câu 4), trong tàu thì đọc sách (câu 3), 8 giờ là lúc rời nhà (câu 3).' },
    ],
  },
  speakSentences: [
    { ja: 'はを みがく とき、おんがくを ききます。', vi: 'Lúc đánh răng, tôi nghe nhạc.' },
    { ja: 'おんがくを ききながら べんきょうします。', vi: 'Tôi vừa nghe nhạc vừa học.' },
    { ja: 'しょくじの とき、テレビを みません。', vi: 'Lúc ăn cơm, tôi không xem TV.' },
    { ja: 'こどもの とき、よく あそびました。', vi: 'Lúc còn nhỏ, tôi hay chơi nghịch.' },
  ],
  translatePairs: [
    { ja: 'しょくじの とき、てんきの はなしを します。', vi: 'Lúc ăn cơm, chúng tôi nói chuyện thời tiết.', tokens: ['しょくじ', 'の', 'とき', 'てんきの', 'はなし', 'を', 'します'], distractors: ['が'] },
    { ja: 'テレビを みながら ごはんを たべます。', vi: 'Tôi vừa xem TV vừa ăn cơm.', tokens: ['テレビ', 'を', 'みながら', 'ごはん', 'を', 'たべます'], distractors: ['とき'] },
    { ja: 'あつい とき、つめたい おちゃを のみます。', vi: 'Khi trời nóng, tôi uống trà lạnh.', tokens: ['あつい', 'とき', 'つめたい', 'おちゃ', 'を', 'のみます'], distractors: ['あつくて'] },
    { ja: 'ともだちに あった とき、あいさつを します。', vi: 'Lúc gặp bạn, tôi chào hỏi.', tokens: ['ともだち', 'に', 'あった', 'とき', 'あいさつ', 'を', 'します'], distractors: ['あう'] },
    { ja: 'まいばん おんがくを ききながら、べんきょうします。', vi: 'Mỗi tối tôi vừa nghe nhạc vừa học.', tokens: ['まいばん', 'おんがく', 'を', 'ききながら', 'べんきょう', 'します'], distractors: ['とき'] },
  ],
  kanji: ['毎', '週', '間'],
}
