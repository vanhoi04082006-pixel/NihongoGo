/**
 * NihongoGo — Bài 33: Kính ngữ tôn trọng — 尊敬語.
 * Nội dung GỐC — chỉ tham chiếu progression chủ đề cấp cao, không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 */
import type { CurriculumLesson } from './types'

export const lesson33: CurriculumLesson = {
  order: 33,
  slug: 'l33-kinh-ngu-ton-trong',
  title: 'Kính ngữ tôn trọng — 尊敬語',
  titleJa: '尊敬語',
  description: 'Nói lịch sự về hành động của người trên, khách hàng với kính ngữ tôn trọng.',
  learningObjectives: [
    'Dùng các động từ tôn trọng thông dụng',
    'Dùng mẫu お〜になる',
    'Giao tiếp lịch sự nơi công sở',
  ],
  grammarTopics: ['Động từ tôn trọng thông dụng', 'Mẫu お〜になる'],
  vocabularyTopics: ['Từ xưng hô lịch sự', 'Giao tiếp nơi công sở'],
  kanjiTopics: ['Kanji kính ngữ (御・申・貴)'],
  difficulty: 'ELEMENTARY',
  vocabulary: [
    { term: 'いらっしゃいます', romaji: 'irasshaimasu', meaningVi: 'có mặt / đi / đến (tôn trọng của います・いきます・きます)', pos: 'động từ tôn trọng', exampleJa: 'しゃちょうは かいぎしつに いらっしゃいます。', exampleVi: 'Giám đốc có mặt ở phòng họp.' },
    { term: 'なさいます', romaji: 'nasaimasu', meaningVi: 'làm (tôn trọng của します)', pos: 'động từ tôn trọng', exampleJa: 'ぶちょうは その しごとを なさいます。', exampleVi: 'Trưởng phòng làm việc đó.' },
    { term: 'めしあがります', romaji: 'meshiagaimasu', meaningVi: 'ăn, uống (tôn trọng của たべます・のみます)', pos: 'động từ tôn trọng', exampleJa: 'おきゃくさまは テラスで めしあがります。', exampleVi: 'Quý khách dùng bữa ở sân thượng.' },
    { term: 'おっしゃいます', romaji: 'osshaimasu', meaningVi: 'nói (tôn trọng của いいます)', pos: 'động từ tôn trọng', exampleJa: 'せんせいは なんと おっしゃいますか。', exampleVi: 'Thầy nói thế nào ạ?' },
    { term: 'ごらんになります', romaji: 'goran ni narimasu', meaningVi: 'xem, ngắm (tôn trọng của みます)', pos: 'động từ tôn trọng', exampleJa: 'おきゃくさまは にわの はなを ごらんになります。', exampleVi: 'Quý khách ngắm hoa trong vườn.' },
    { term: 'おやすみになります', romaji: 'oyasumi ni narimasu', meaningVi: 'ngủ, nghỉ (tôn trọng của ねます)', pos: 'động từ tôn trọng', exampleJa: 'おきゃくさまは 十じに おやすみになります。', exampleVi: 'Quý khách đi ngủ lúc 10 giờ.' },
    { term: 'おなまえ', romaji: 'onamae', meaningVi: 'tên (cách nói lịch sự)', pos: 'danh từ (kính)', exampleJa: 'おなまえは なんと おっしゃいますか。', exampleVi: 'Tên ngài đọc là thế nào ạ?' },
    { term: 'ごしゅみ', romaji: 'goshumi', meaningVi: 'sở thích (cách nói lịch sự)', pos: 'danh từ (kính)', exampleJa: 'おきゃくさまの ごしゅみは なんですか。', exampleVi: 'Sở thích của quý khách là gì ạ?' },
    { term: 'おへや', romaji: 'oheya', meaningVi: 'phòng (cách nói lịch sự)', pos: 'danh từ (kính)', exampleJa: 'おへやは 五かいに あります。', exampleVi: 'Phòng ở tầng năm.' },
    { term: 'ご予約', reading: 'ごよやく', romaji: 'goyoyaku', meaningVi: 'lượt đặt trước (cách nói lịch sự)', pos: 'danh từ (kính)', exampleJa: 'ご予約の おなまえは ヤマダさまですね。', exampleVi: 'Tên đặt phòng là ngài Yamada phải không ạ?' },
    { term: 'おさしみ', romaji: 'osashimi', meaningVi: 'món sashimi (cách nói lịch sự)', pos: 'danh từ (kính)', exampleJa: 'おさしみは もう めしあがりましたか。', exampleVi: 'Ngài đã dùng sashimi chưa ạ?' },
    { term: 'おさけ', romaji: 'osake', meaningVi: 'rượu, sake (cách nói lịch sự)', pos: 'danh từ (kính)', exampleJa: 'おさけも めしあがりますか。', exampleVi: 'Ngài dùng rượu luôn không ạ?' },
    { term: 'お客様', reading: 'おきゃくさま', romaji: 'okyakusama', meaningVi: 'quý khách, khách hàng', pos: 'danh từ (kính)', exampleJa: 'お客様、どうぞ こちらへ。', exampleVi: 'Quý khách, mời bên này.' },
    { term: '御社', reading: 'おんしゃ', romaji: 'onsha', meaningVi: 'quý công ty (của ngài — văn nói)', pos: 'danh từ (kính)', exampleJa: '御社の せいひんは ゆうめいです。', exampleVi: 'Sản phẩm của quý công ty nổi tiếng.' },
    { term: '貴社', reading: 'きしゃ', romaji: 'kisha', meaningVi: 'quý công ty (của ngài — văn viết)', pos: 'danh từ (kính)', exampleJa: '貴社の カタログを ありがとう ございました。', exampleVi: 'Cảm ơn về catalogue của quý công ty.' },
    { term: '申し訳ございません', reading: 'もうしわけございません', romaji: 'mōshiwakegozaimasen', meaningVi: 'thành thật xin lỗi (lời xin lỗi trang trọng)', pos: 'cụm từ trang trọng', exampleJa: 'おまたせしました。申し訳ございません。', exampleVi: 'Để ngài đợi lâu. Thành thật xin lỗi.' },
    { term: 'かいぎ', romaji: 'kaigi', meaningVi: 'cuộc họp', pos: 'danh từ', exampleJa: 'かいぎは 十じから はじまります。', exampleVi: 'Cuộc họp bắt đầu từ 10 giờ.' },
    { term: 'しゃちょう', romaji: 'shachō', meaningVi: 'giám đốc', pos: 'danh từ', exampleJa: 'しゃちょうは あした とうきょうへ いらっしゃいます。', exampleVi: 'Giám đốc ngày mai đi Tokyo.' },
    { term: 'ぶちょう', romaji: 'buchō', meaningVi: 'trưởng phòng', pos: 'danh từ', exampleJa: 'ぶちょうは きょう しゅっちょうです。', exampleVi: 'Trưởng phòng hôm nay đi công tác.' },
    { term: 'しゅっちょう', romaji: 'shucchō', meaningVi: 'chuyến công tác', pos: 'danh từ', exampleJa: 'しゃちょうは らいしゅう しゅっちょうに いらっしゃいます。', exampleVi: 'Giám đốc tuần sau đi công tác.' },
    { term: 'フロント', romaji: 'furonto', meaningVi: 'lễ tân (khách sạn)', pos: 'danh từ', exampleJa: 'フロントは 一かいに あります。', exampleVi: 'Lễ tân ở tầng một.' },
    { term: 'ホテル', romaji: 'hoteru', meaningVi: 'khách sạn', pos: 'danh từ', exampleJa: 'ホテルの レストランは 九じまでです。', exampleVi: 'Nhà hàng của khách sạn mở đến 9 giờ.' },
  ],
  grammar: [
    {
      code: 'l33-sonkeigo-doushi',
      title: 'Động từ tôn trọng thông dụng — いらっしゃいます・なさいます・めしあがります・おっしゃいます',
      formation: 'います・いきます・きます → いらっしゃいます / します → なさいます / たべます・のみます → めしあがります / いいます → おっしゃいます / みます → ごらんに なります / ねます → おやすみに なります',
      explanationVi:
        '尊敬語 (kính ngữ tôn trọng) là "nâng NGƯỜI KHÁC lên": khi nói về hành động của khách hàng, cấp trên, thầy cô, ta THAY động từ thường bằng dạng tôn trọng đặc biệt — います・いきます・きます → いらっしゃいます, します → なさいます, たべます・のみます → めしあがります, いいます → おっしゃいます, みます → ごらんに なります, ねます → おやすみに なります. Câu vẫn chia như động ます bình thường: phủ định いらっしゃいません, quá khứ めしあがりました, mời 「ごらんに なって ください」. Bắt buộc: dạng này CHỈ dùng cho hành động của người trên — hành động của chính mình vẫn dùng dạng thường (điểm 3 sẽ nói kỹ).',
      examples: [
        { ja: 'しゃちょうは きょうも かいぎに いらっしゃいます。', vi: 'Giám đốc hôm nay cũng đến dự cuộc họp.', tokens: ['しゃちょう', 'は', 'きょうも', 'かいぎ', 'に', 'いらっしゃいます'] },
        { ja: 'おきゃくさまは もう めしあがりましたか。', vi: 'Quý khách đã dùng bữa chưa ạ?' },
        { ja: 'せんせいは なんと おっしゃいましたか。', vi: 'Thầy đã nói thế nào ạ?' },
      ],
      drills: [
        {
          kind: 'conjugate', prompt: 'します → dạng tôn trọng (dạng ます)',
          sentence: 'しゃちょうは その しごとを ___。',
          options: ['なさいます', 'します', 'めしあがります', 'いらっしゃいます'],
          answerIndex: 0, explanationVi: 'Dạng tôn trọng của します là なさいます. めしあがります = たべます・のみます; いらっしゃいます = います・いきます・きます; giữ nguyên します thì mất tính tôn trọng.',
        },
        {
          kind: 'fill', prompt: 'Điền động từ tôn trọng của たべます (Quý khách ăn sashimi)',
          sentence: 'おきゃくさまは おさしみを ___。',
          options: ['めしあがります', 'たべなさいます', 'たべします', 'たべました'],
          answerIndex: 0, explanationVi: 'たべます・のみます có dạng tôn trọng đặc biệt là めしあがります. たべなさいます・たべします là dạng chắp nối sai; たべました đúng ngữ pháp nhưng không tôn trọng.',
        },
        {
          kind: 'choice', prompt: '「せんせいは なんと おっしゃいましたか。」 có nghĩa là gì?',
          options: ['Thầy đã nói gì ạ?', 'Thầy đã ăn gì ạ?', 'Thầy đã viết gì ạ?', 'Thầy đã ngủ chưa ạ?'],
          answerIndex: 0, explanationVi: 'おっしゃいました = いいました (tôn trọng). なんと = "nói (nội dung) gì" — hỏi lại lời của người trên.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['しゃちょうは さきほど いらっしゃいました。', 'しゃちょうは さきほど いらっしゃいますでした。', 'しゃちょうは さきほど いらっしゃいましたです。', 'しゃちょうは さきほど おっしゃいました。'],
          answerIndex: 0, explanationVi: 'Quá khứ của いらっしゃいます là いらっしゃいました — không thêm です hay します phía sau. おっしゃいました nghĩa là "đã nói" — nghĩa khác hẳn.',
        },
      ],
    },
    {
      code: 'l33-o-ni-naru',
      title: 'お/ご + danh từ・お〜になる — tiền tố và mẫu bọc tôn trọng',
      formation: 'お + danh từ thuần Nhật: おなまえ・おへや・おさけ / ご + danh từ Hán: ごしゅみ・ご予約 / お + thân động từ nhóm 1・2 + になります: たべます → おたべに なります・まちます → おまちに なります・すわります → おすわりに なります',
      explanationVi:
        'Với danh từ và động từ CHƯA có dạng đặc biệt, tôn trọng bằng hai cách: (1) thêm お trước danh từ thuần Nhật (wago) hoặc ご trước danh từ gốc Hán (kango) khi nói về thứ thuộc về người trên — おなまえ, おへや, おさけ, ごしゅみ, ご予約; (2) bọc động từ nhóm 1・2: お + thân ます + になります — たべます → おたべに なります, すわります → おすわりに なります. Lời mời lịch sự 「どうぞ おすわりに なって ください」 cũng theo mẫu này. Lưu ý: động từ nhóm 3 và động từ đã có dạng đặc biệt (いらっしゃいます…) KHÔNG bọc thêm お〜になる; お/ご không dùng cho thứ của CHÍNH MÌNH (không nói "おてがみ" của mình).',
      examples: [
        { ja: 'おなまえは なんと おっしゃいますか。', vi: 'Tên ngài đọc là thế nào ạ?', tokens: ['おなまえ', 'は', 'なんと', 'おっしゃいますか'] },
        { ja: 'どうぞ おすわりに なって ください。', vi: 'Mời ngài ngồi.' },
        { ja: 'ご予約の おなまえは ヤマダさまですね。', vi: 'Tên đặt phòng là ngài Yamada phải không ạ?' },
      ],
      drills: [
        {
          kind: 'fill', prompt: 'Điền tiền tố tôn trọng (Sở thích của quý khách là gì ạ?)',
          sentence: '___しゅみは なんですか。',
          options: ['ご', 'お', 'さま', 'さん'],
          answerIndex: 0, explanationVi: 'しゅみ là danh từ gốc Hán (kango) nên dùng ご → ごしゅみ. お dành cho danh từ thuần Nhật.',
        },
        {
          kind: 'fill', prompt: 'Điền tiền tố tôn trọng (Tên ngài là gì ạ?)',
          sentence: '___なまえは なんですか。',
          options: ['お', 'ご', 'み', 'さん'],
          answerIndex: 0, explanationVi: 'なまえ là danh từ thuần Nhật (wago) nên dùng お → おなまえ. ご chỉ đi với danh từ gốc Hán.',
        },
        {
          kind: 'choice', prompt: 'たべます ở dạng tôn trọng kiểu "bọc" là gì?',
          options: ['おたべに なります', 'ごたべに なります', 'おたべします', 'たべに なさいます'],
          answerIndex: 0, explanationVi: 'Động từ nhóm 2: お + thân ます + になります → おたべに なります. ごたべ sai vì たべ là từ thuần; おたべします là dạng khiêm nhường (học ở bài 34); たべに なさいます không tồn tại.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['おきゃくさまは もう おすわりに なりました。', 'おきゃくさまは もう ごすわりに なりました。', 'おきゃくさまは もう おすわりに なさいました。', 'おきゃくさまは もう おすわりに なしました。'],
          answerIndex: 0, explanationVi: 'すわる là động từ thuần → おすわりに なります. ご sai (すわり không phải từ Hán); なさいました・なしました là chia sai của なります.',
        },
      ],
    },
    {
      code: 'l33-sonkeigo-uchi-soto',
      title: 'Khi nào dùng kính ngữ tôn trọng — và khi nào KHÔNG dùng',
      formation: 'Hành động của khách・cấp trên・thầy cô → 尊敬語 / hành động của CHÍNH MÌNH・người nhà → dạng thường・ます / mỗi hành động chỉ chọn MỘT cách tôn trọng',
      explanationVi:
        'Ba lỗi hay gặp của người mới: (1) Dùng tôn trọng cho CHÍNH MÌNH — 「わたしは もう めしあがりました」 là SAI: mình ăn thì nói たべます; (2) Dùng cho NGƯỜI NHÀ khi kể với người ngoài — bố mẹ, em trai, cả sếp CỦA MÌNH khi đứng trước khách đều thuộc "phe trong" (うち), kể về họ dùng dạng thường: 「しゃちょうは きませんでした」; (3) Chồng hai kiểu tôn trọng — めしあがりに なりました・おめしあがりに なりました là "kính ngữ kép" sai, mỗi hành động chỉ chọn MỘT cách (めしあがりました HOẶC おたべに なりました). Nhớ nguyên tắc gốc: 尊敬語 nâng người KHÁC — mọi người thuộc "phe mình" thì không nâng.',
      examples: [
        { ja: 'しゃちょうは もう めしあがりました。', vi: 'Giám đốc đã dùng bữa rồi.', tokens: ['しゃちょう', 'は', 'もう', 'めしあがりました'] },
        { ja: 'わたしは さかなを たべます。', vi: 'Tôi ăn cá. (hành động của mình — KHÔNG dùng めしあがります)' },
        { ja: 'おきゃくさまは もう おやすみに なりましたか。', vi: 'Quý khách đã nghỉ chưa ạ?' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '「わたしは あした 大阪に ___。」 — điền dạng đúng của いきます',
          options: ['いきます', 'いらっしゃいます', 'おいきに なります', 'いきなさいます'],
          answerIndex: 0, explanationVi: 'Chủ ngữ là わたし — hành động của CHÍNH MÌNH → dạng thường いきます. いらっしゃいます・おいきに なります là tôn trọng, chỉ dùng cho người khác.',
        },
        {
          kind: 'error', prompt: 'Câu nào đúng?',
          options: ['おきゃくさまは もう めしあがりました。', 'おきゃくさまは もう おめしあがりに なりました。', 'おきゃくさまは もう めしあがりに なりました。', 'おきゃくさまは もう ごめしあがりに なりました。'],
          answerIndex: 0, explanationVi: 'Mỗi hành động chỉ chọn MỘT cách tôn trọng: めしあがりました hoặc おたべに なりました. Chồng hai kiểu (お+めしあがり+になる) là "kính ngữ kép" — sai; ご cũng sai vì めしあがり không phải từ Hán.',
        },
        {
          kind: 'choice', prompt: 'Bạn nói với KHÁCH: "Giám đốc của công ty tôi đã về rồi." — dùng từ nào cho "về"?',
          options: ['かえりました', 'おかえりに なりました', 'いらっしゃいました', 'おっしゃいました'],
          answerIndex: 0, explanationVi: 'Trước khách, sếp của mình thuộc "phe trong" (うち) → kể về ông ấy dùng dạng thường かえりました. おかえりに なりました dành cho hành động của chính khách.',
        },
        {
          kind: 'fill', prompt: 'Điền dạng đúng (Tôi đọc báo mỗi ngày)',
          sentence: 'わたしは まいにち しんぶんを ___。',
          options: ['よみます', 'およみに なります', 'ごらんに なります', 'よみなさいます'],
          answerIndex: 0, explanationVi: 'Hành động của mình → よみます. ごらんに なります là dạng tôn trọng của みます — chỉ dùng cho người khác.',
        },
      ],
    },
  ],
  dialogues: [
    {
      titleVi: 'Nhận phòng ở khách sạn',
      situationVi: 'Khách Yamada đến lễ tân khách sạn, nhân viên dùng kính ngữ tôn trọng.',
      lines: [
        { speaker: 'フロント', ja: 'いらっしゃいませ。おなまえは なんと おっしゃいますか。', vi: 'Xin chào mừng ngài. Xin hỏi tên ngài đọc là thế nào ạ?' },
        { speaker: 'ヤマダ', ja: 'ヤマダです。ホテルを よやくしました。', vi: 'Tôi là Yamada. Tôi đã đặt phòng khách sạn.' },
        { speaker: 'フロント', ja: 'はい、ヤマダさまですね。ご予約の おへやは 五かいです。', vi: 'Vâng, ngài Yamada phải không ạ. Phòng ngài đặt ở tầng năm.' },
        { speaker: 'ヤマダ', ja: 'おへやは しずかですか。', vi: 'Phòng có yên tĩnh không?' },
        { speaker: 'フロント', ja: 'はい、とても しずかです。あさの レストランは 七じからです。', vi: 'Vâng, rất yên tĩnh ạ. Nhà hàng buổi sáng mở từ 7 giờ.' },
        { speaker: 'ヤマダ', ja: 'わかりました。', vi: 'Tôi đã rõ.' },
        { speaker: 'フロント', ja: 'おさけは めしあがりますか。よるは バーが ありますよ。', vi: 'Ngài dùng rượu không ạ? Tối có quầy bar đấy.' },
        { speaker: 'ヤマダ', ja: 'ええ、ときどき のみます。', vi: 'Vâng, thỉnh thoảng tôi uống.' },
        { speaker: 'フロント', ja: 'では、どうぞ ゆっくり おやすみに なって ください。', vi: 'Vậy thì xin ngài hãy nghỉ ngơi thật thoải mái.' },
        { speaker: 'ヤマダ', ja: 'ありがとう ございます。', vi: 'Xin cảm ơn.' },
      ],
    },
    {
      titleVi: 'Khách hàng đến công ty',
      situationVi: 'Nhân viên Tanaka đón khách hàng Kim đến công ty họp.',
      lines: [
        { speaker: 'たなか', ja: 'キムさま、いらっしゃいませ。どうぞ こちらへ。', vi: 'Ngài Kim, xin chào mừng. Mời ngài bên này.' },
        { speaker: 'キム', ja: 'こんにちは。ぶちょうは もう いらっしゃいますか。', vi: 'Chào anh. Trưởng phòng đã đến chưa ạ?' },
        { speaker: 'たなか', ja: 'はい、かいぎしつで まって います。', vi: 'Vâng, đang đợi ở phòng họp ạ.' },
        { speaker: 'キム', ja: 'じゃあ、すぐ いきます。', vi: 'Vậy tôi vào ngay đây.' },
        { speaker: 'たなか', ja: 'コーヒーは めしあがりますか。', vi: 'Ngài dùng cà phê không ạ?' },
        { speaker: 'キム', ja: 'ええ、ありがとう ございます。', vi: 'Vâng, cảm ơn anh.' },
        { speaker: 'たなか', ja: 'どうぞ、あたらしい カタログを ごらんに なって ください。', vi: 'Mời ngài xem catalogue mới bên này.' },
        { speaker: 'キム', ja: 'きれいですね。御社の あたらしい せいひんですか。', vi: 'Đẹp nhỉ. Là sản phẩm mới của quý công ty anh à?' },
        { speaker: 'たなか', ja: 'そうです。らいげつから うります。', vi: 'Vâng. Bắt đầu bán từ tháng sau.' },
        { speaker: 'キム', ja: 'じゃあ、ぜひ みたいです。', vi: 'Vậy thì nhất định tôi muốn xem.' },
      ],
    },
  ],
  listening: [
    { scriptJa: 'しゃちょうは かいぎしつに いらっしゃいます。', meaningVi: 'Giám đốc có mặt ở phòng họp.', choices: ['Giám đốc có mặt ở phòng họp', 'Giám đốc đang ngủ ở phòng họp', 'Tôi sẽ đến phòng họp', 'Cuộc họp rất lâu'], answerIndex: 0, dictation: true },
    { scriptJa: 'おきゃくさまは もう めしあがりましたか。', meaningVi: 'Quý khách đã dùng bữa chưa ạ?', choices: ['Quý khách đã dùng bữa chưa ạ?', 'Quý khách đã xem thực đơn chưa ạ?', 'Tôi đã ăn cơm rồi', 'Mời quý khách dùng bữa'], answerIndex: 0, dictation: true },
    { scriptJa: 'せんせいは なんと おっしゃいましたか。', meaningVi: 'Thầy đã nói gì ạ?', choices: ['Thầy đã nói gì ạ?', 'Thầy đã ăn gì ạ?', 'Thầy đã viết gì ạ?', 'Thầy đã ngủ dậy chưa ạ?'], answerIndex: 0 },
    { scriptJa: 'どうぞ、こちらの カタログを ごらんに なって ください。', meaningVi: 'Mời ngài xem catalogue bên này.', choices: ['Mời ngài xem catalogue bên này', 'Mời ngài mua catalogue này', 'Làm ơn đặt catalogue trước', 'Tôi đã xem catalogue rồi'], answerIndex: 0 },
    { scriptJa: 'おきゃくさまは もう おやすみに なりました。', meaningVi: 'Quý khách đã nghỉ rồi.', choices: ['Quý khách đã nghỉ rồi', 'Quý khách muốn ngủ sớm', 'Quý khách chưa ngủ', 'Phòng ngủ ở tầng ba'], answerIndex: 0 },
  ],
  reading: {
    titleVi: 'Chuyến thăm công ty của ngài Kim',
    lines: [
      { text: 'きのう、キムさまが わたしの かいしゃに いらっしゃいました。', vi: 'Hôm qua, ngài Kim đã đến công ty của chúng tôi.' },
      { text: 'キムさまは 九じに いらっしゃいました。', vi: 'Ngài Kim đến lúc 9 giờ.' },
      { text: 'たなかさんは 三かいの かいぎしつで まって いました。', vi: 'Tanaka đã đợi ở phòng họp tầng ba.' },
      { text: 'キムさまは あたらしい カタログを ごらんに なりました。', vi: 'Ngài Kim đã xem catalogue mới.' },
      { text: '「この せいひんは いいですね」と おっしゃいました。', vi: 'Ngài nói: "Sản phẩm này tốt nhỉ".' },
      { text: 'かいぎは 十じから 六じまででした。', vi: 'Cuộc họp từ 10 giờ đến 6 giờ.' },
      { text: 'たなかさんは おちゃを だしました。キムさまは すぐ めしあがりました。', vi: 'Tanaka đưa trà ra. Ngài Kim dùng ngay.' },
      { text: '六じに、キムさまは 「ありがとう ございました」と おっしゃいました。', vi: 'Lúc 6 giờ, ngài Kim nói: "Cảm ơn nhiều".' },
      { text: 'キムさまは らいげつも かいしゃに いらっしゃいます。', vi: 'Tháng sau ngài Kim cũng sẽ đến công ty.' },
    ],
    questions: [
      { questionVi: 'Ngài Kim đến công ty lúc mấy giờ?', choices: ['9 giờ', '10 giờ', '6 giờ', '7 giờ'], answerIndex: 0, explanationVi: 'Câu 2: キムさまは 九じに いらっしゃいました — いらっしゃいます là tôn trọng của きます.' },
      { questionVi: 'Ngài Kim đã làm gì với catalogue mới?', choices: ['Đã xem', 'Đã mua', 'Đã làm mất', 'Đã tặng cho Tanaka'], answerIndex: 0, explanationVi: 'Câu 4: ごらんに なりました = みました (dạng tôn trọng của みます).' },
      { questionVi: 'Câu nào đúng về cuộc họp?', choices: ['Từ 10 giờ đến 6 giờ', 'Từ 9 giờ đến 6 giờ', 'Chỉ diễn ra buổi sáng', 'Đã bị hoãn'], answerIndex: 0, explanationVi: 'Câu 6: かいぎは 十じから 六じまででした. Ngài Kim đến lúc 9 giờ nhưng cuộc họp bắt đầu từ 10 giờ.' },
    ],
  },
  speakSentences: [
    { ja: 'しゃちょうは かいぎしつに いらっしゃいます。', vi: 'Giám đốc có mặt ở phòng họp.' },
    { ja: 'おきゃくさまは もう めしあがりましたか。', vi: 'Quý khách đã dùng bữa chưa ạ?' },
    { ja: 'せんせいは なんと おっしゃいましたか。', vi: 'Thầy đã nói gì ạ?' },
    { ja: 'どうぞ こちらを ごらんに なって ください。', vi: 'Mời ngài xem bên này.' },
  ],
  translatePairs: [
    { ja: 'しゃちょうは あした とうきょうへ いらっしゃいます。', vi: 'Giám đốc ngày mai đi Tokyo.', tokens: ['しゃちょう', 'は', 'あした', 'とうきょう', 'へ', 'いらっしゃいます'], distractors: ['いきます'] },
    { ja: 'おきゃくさまは もう めしあがりました。', vi: 'Quý khách đã dùng bữa rồi.', tokens: ['おきゃくさま', 'は', 'もう', 'めしあがりました'], distractors: ['たべました'] },
    { ja: 'せんせいは なんと おっしゃいましたか。', vi: 'Thầy đã nói gì ạ?', tokens: ['せんせい', 'は', 'なんと', 'おっしゃいましたか'], distractors: ['いいましたか'] },
    { ja: 'どうぞ こちらを ごらんに なって ください。', vi: 'Mời ngài xem bên này.', tokens: ['どうぞ', 'こちら', 'を', 'ごらんに', 'なって', 'ください'], distractors: ['みて'] },
    { ja: 'おきゃくさまは もう おやすみに なりました。', vi: 'Quý khách đã nghỉ rồi.', tokens: ['おきゃくさま', 'は', 'もう', 'おやすみに', 'なりました'], distractors: ['ねました'] },
  ],
  kanji: ['御', '申', '貴'],
}
