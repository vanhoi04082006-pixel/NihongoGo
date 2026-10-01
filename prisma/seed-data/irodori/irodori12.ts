/**
 * NihongoGo — Irodori A1 · Bài 12: そうまとめ (Tổng kết A1).
 * Bài CUỐI khoá: KHÔNG dạy mẫu mới — 3 "grammar point" là 3 NHÓM CHỐT
 * KIẾN THỨC sinh tồn (xã giao / mua sắm & ăn uống / nhờ vả).
 * Ngữ pháp sử dụng toàn bộ phạm vi bài 1–11. Nội dung GỐC — không sao chép
 * dialogue/ví dụ/bài tập từ bất kỳ giáo trình có bản quyền nào.
 * Provenance: ORIGINAL_GENERATED · MACHINE_REVIEWED (validator + audit).
 */
import type { IrodoriLesson } from './types'

export const irodori12: IrodoriLesson = {
  order: 12,
  slug: 'irodori-12',
  title: 'そうまとめ — Tổng kết A1',
  titleJa: 'いろどり A1 そうまとめ',
  description: 'Chốt lại toàn bộ tiếng Nhật sinh tồn A1: chào hỏi, giới thiệu, mua sắm, ăn uống, hỏi đường — và các câu "cứu nguy" khi chưa hiểu.',
  learningObjectives: [
    'Tự đánh giá bộ câu sinh tồn đã chắc chưa',
    'Ôn chào hỏi & giới thiệu trong tình huống thật',
    'Luyện các câu nhờ vả khi giao tiếp bế tắc',
  ],
  grammarTopics: ['Chốt: chào hỏi & giới thiệu', 'Chốt: mua sắm & ăn uống', 'Chốt: câu nhờ vả sinh tồn'],
  vocabularyTopics: ['Từ vựng tổng hợp A1', 'Câu nói sinh tồn', 'Ôn tập theo chủ đề'],
  kanjiTopics: ['夢', '言'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'おねがいします', romaji: 'onegai shimasu', meaningVi: 'làm ơn / nhờ cậu (câu quốc dân)', pos: 'câu cố định', exampleJa: 'これを おねがいします。', exampleVi: 'Làm ơn cho tôi cái này.' },
    { term: 'もういちど', romaji: 'mō ichido', meaningVi: 'một lần nữa', pos: 'phó từ', exampleJa: 'もういちど おねがいします。', exampleVi: 'Xin nói lại một lần nữa.' },
    { term: 'ゆっくり', romaji: 'yukkuri', meaningVi: 'chậm rãi, thoải mái', pos: 'phó từ', exampleJa: 'ゆっくり はなして ください。', exampleVi: 'Xin hãy nói chậm thôi.' },
    { term: 'わかりました', romaji: 'wakarimashita', meaningVi: 'tôi hiểu rồi', pos: 'động từ nhóm 1', exampleJa: 'はい、わかりました。', exampleVi: 'Vâng, tôi hiểu rồi.' },
    { term: 'わかりません', romaji: 'wakarimasen', meaningVi: 'tôi không hiểu / không biết', pos: 'động từ nhóm 1', exampleJa: 'すみません、わかりません。', exampleVi: 'Xin lỗi, tôi không hiểu.' },
    { term: 'さいご', romaji: 'saigo', meaningVi: 'cuối cùng', pos: 'danh từ', exampleJa: 'さいごの テストです。', exampleVi: 'Đây là bài kiểm tra cuối.' },
    { term: 'つぎ', romaji: 'tsugi', meaningVi: 'tiếp theo', pos: 'danh từ', exampleJa: 'つぎの えきです。', exampleVi: 'Nhà ga kế tiếp đấy.' },
    { term: 'これから', romaji: 'kore kara', meaningVi: 'từ giờ trở đi', pos: 'phó từ', exampleJa: 'これからも べんきょうします。', exampleVi: 'Từ giờ tôi vẫn tiếp tục học.' },
    { term: 'ふくしゅう', romaji: 'fukushū', meaningVi: 'việc ôn tập', pos: 'danh từ', exampleJa: 'きょうは ふくしゅうを します。', exampleVi: 'Hôm nay tôi ôn tập.' },
    { term: 'おぼえます', romaji: 'oboemasu', meaningVi: 'ghi nhớ, nhớ được', pos: 'động từ nhóm 2', exampleJa: 'ことばを おぼえます。', exampleVi: 'Tôi ghi nhớ từ ngữ.' },
    { term: 'がんばります', romaji: 'ganbarimasu', meaningVi: 'cố gắng', pos: 'động từ nhóm 1', exampleJa: 'これからも がんばります。', exampleVi: 'Tôi sẽ tiếp tục cố gắng.' },
    { term: 'だいすきです', romaji: 'daisuki desu', meaningVi: 'rất thích', pos: 'tính từ な', exampleJa: 'にほんが だいすきです。', exampleVi: 'Tôi rất thích Nhật Bản.' },
    { term: 'たいへんです', romaji: 'taihen desu', meaningVi: 'vất vả, cực khổ', pos: 'tính từ な', exampleJa: 'しごとは たいへんです。', exampleVi: 'Công việc vất vả thật.' },
    { term: 'おめでとうございます', romaji: 'omedetō gozaimasu', meaningVi: 'chúc mừng (lịch sự)', pos: 'lời chúc', exampleJa: 'ごしゅうりょう、おめでとうございます。', exampleVi: 'Chúc mừng bạn hoàn thành khóa học.' },
  ],
  grammar: [
    {
      code: 'i12-chot-xa-giao',
      title: 'Chốt nhóm 1: chào hỏi · giới thiệu · cảm ơn & xin lỗi',
      formation: 'あいさつ theo giờ → はじめまして + [tên] + です → どうぞよろしくおねがいします → cảm ơn ありがとうございます / xin lỗi すみません',
      explanationVi:
        'Nhìn lại bài 1–2: mỗi cuộc giao tiếp Nhật mở đầu bằng lời chào ĐÚNG GIỜ (おはようございます / こんにちは / こんばんは), lần đầu làm quen thì はじめまして → tên + です → どうぞよろしくおねがいします. Ba câu "chữa cháy" mang đi được cả ngày: ありがとうございます (cảm ơn), すみません (xin lỗi / để gọi người phục vụ), しつれいします (xin phép rời đi). Chốt phân biệt: はじめまして chỉ dùng lần ĐẦU gặp; おげんきですか hỏi thăm người LÂU KHÔNG gặp; またあした hẹn gặp người vẫn gặp thường xuyên.',
      examples: [
        { ja: 'はじめまして。あんです。ベトナムじんです。', vi: 'Rất hân hạnh. Tôi là An, người Việt Nam.', tokens: ['はじめまして', 'あん', 'です', 'ベトナムじん', 'です'] },
        { ja: 'すみません、ありがとうございます。', vi: 'Xin lỗi nhé — cảm ơn bạn.' },
        { ja: 'しつれいします。またあした。', vi: 'Tôi xin phép về trước. Hẹn gặp lại ngày mai.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '9 giờ sáng lần đầu gặp giáo viên mới — mở đầu bằng câu nào?',
          options: ['はじめまして。おはようございます。', 'こんばんは。はじめまして。', 'おげんきですか。さようなら。', 'またあした。しつれいします。'],
          answerIndex: 0, explanationVi: 'Sáng + lần đầu: chào theo giờ (おはようございます) rồi làm quen (はじめまして). こんばんは là buổi tối; おげんきですか cho người lâu không gặp.',
        },
        {
          kind: 'error', prompt: 'Muốn GỌI nhân viên quán ăn tới bàn — câu nào đúng?',
          options: ['こんにちは！', 'すみません！', 'さようなら！', 'おめでとうございます！'],
          answerIndex: 1, explanationVi: 'すみません vừa là "xin lỗi" vừa là "cho tôi hỏi / làm phiền" — cách gọi phục vụ chuẩn mực ở Nhật.',
        },
        {
          kind: 'fill', prompt: 'Điền từ còn thiếu (lời chào khi lần đầu làm quen)',
          sentence: '___。まいです。どうぞよろしくおねがいします。',
          options: ['はじめまして', 'おげんきですか', 'またあした', 'おだいじに'],
          answerIndex: 0, explanationVi: 'はじめまして mở đầu phần tự giới thiệu; どうぞよろしくおねがいします chốt lại.',
        },
        {
          kind: 'choice', prompt: '「またあした。」 — câu chào này dùng khi nào?',
          options: ['Hẹn gặp người lâu không gặp', 'Tạm biệt người vẫn gặp hằng ngày', 'Lần đầu làm quen', 'Chúc ngủ ngon người ốm'],
          answerIndex: 1, explanationVi: 'またあした = "hẹn gặp lại mai" — tạm biệt người quen vẫn gặp thường xuyên (đồng nghiệp, bạn học).',
        },
      ],
    },
    {
      code: 'i12-chot-song-tao',
      title: 'Chốt nhóm 2: mua sắm & ăn uống',
      formation: 'いくらですか → [số]えん → これを おねがいします / [món]を おねがいします → ごちそうさまでした',
      explanationVi:
        'Nhìn lại bài 4–5: mua thì hỏi これは いくらですか, trả tiền bằng [số]えん; muốn lấy món chỉ vào nó: これを おねがいします. Ăn uống: gọi [món]を おねがいします, hỏi gợi ý おすすめは なんですか, từ chối thêm もう けっこうです. Kết bữa nói ごちそうさまでした (cảm ơn bữa ăn); người mời đáp どういたしまして. Chốt con số sinh tồn: 100 = ひゃく, 1.000 = せん — hai mốc đọc giá dùng nhiều nhất. Nguyên tắc vàng: CHỈ vào món rồi nói おねがいします — không cần ghép câu dài vẫn mua được, gọi được.',
      examples: [
        { ja: 'これは いくらですか。', vi: 'Cái này bao nhiêu tiền?', tokens: ['これ', 'は', 'いくら', 'です', 'か'] },
        { ja: 'ラーメンを おねがいします。', vi: 'Cho tôi một bát ramen.' },
        { ja: 'ごちそうさまでした。おいしかったです。', vi: 'Cảm ơn bữa ăn. Ngon lắm.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Trong tiệm muốn mua cây bút đang cầm — câu nào gọn và đúng?',
          options: ['ペンは すきですか。', 'これを おねがいします。', 'ペンを みませんか。', 'いくらでしたか。'],
          answerIndex: 1, explanationVi: 'Chỉ món + これを おねがいします = "cho tôi cái này" — mẫu mua hàng ngắn nhất, đúng nhất.',
        },
        {
          kind: 'fill', prompt: 'Điền từ còn thiếu (Cái này bao nhiêu tiền?)',
          sentence: 'これは ___ですか。',
          options: ['いくら', 'なんじ', 'どこ', 'だれ'],
          answerIndex: 0, explanationVi: 'いくら = bao nhiêu tiền. なんじ hỏi giờ; どこ/だれ hỏi chỗ/người.',
        },
        {
          kind: 'error', prompt: 'Câu nào là lời cảm ơn SAU bữa ăn?',
          options: ['いただきます。', 'ごちそうさまでした。', 'おだいじに。', 'おめでとうございます。'],
          answerIndex: 1, explanationVi: 'ごちそうさまでした nói khi ăn xong. いただきます là lời nói TRƯỚC khi ăn; おだいじに cho người ốm.',
        },
        {
          kind: 'particle', prompt: 'Chọn trợ từ đúng (Cho tôi một bát ramen)',
          sentence: 'ラーメン___ おねがいします。',
          options: ['を', 'が', 'へ', 'も'],
          answerIndex: 0, explanationVi: 'Món gọi là tân ngữ → を + おねがいします. が là chủ ngữ; へ là hướng; も nghĩa "cũng".',
        },
        {
          kind: 'choice', prompt: 'Nhân viên hỏi "còn thêm gì nữa không" — bạn không muốn thêm, đáp câu nào?',
          options: ['はい、そうです。', 'もう けっこうです。', 'だいじょうぶじゃないです。', 'ざんねんです ね。'],
          answerIndex: 1, explanationVi: 'もう けっこうです = "thế là đủ rồi ạ" — từ chối thêm món một cách lịch sự.',
        },
      ],
    },
    {
      code: 'i12-chot-nho-vua',
      title: 'Chốt nhóm 3: câu "cứu nguy" khi giao tiếp bế tắc',
      formation: 'すみません、(1) もういちど おねがいします (2) ゆっくり はなして ください (3) わかりません',
      explanationVi:
        'Bộ ba "phao cứu sinh" khi chưa nghe kịp hoặc không hiểu: (1) もういちど おねがいします — xin nói lại lần nữa; (2) ゆっくり はなして ください — xin nói chậm thôi; (3) すみません、わかりません — xin lỗi, tôi chưa hiểu. Mở đầu bằng すみません để lấy lòng trước khi nhờ. Khi hiểu ra thì đáp ああ、わかりました (à, tôi hiểu rồi) + cảm ơn. Không bao giờ là xấu hổ khi xin nghe lại — người Nhật đánh giá cao sự cố gắng giao tiếp chân thành. Đây chính là "kỹ năng học" quan trọng nhất để bước tiếp sang A2.',
      examples: [
        { ja: 'すみません、もういちど おねがいします。', vi: 'Xin lỗi, làm ơn nói lại một lần nữa.', tokens: ['すみません', 'もういちど', 'おねがいします'] },
        { ja: 'ゆっくり はなして ください。', vi: 'Xin hãy nói chậm rãi.' },
        { ja: 'ああ、わかりました。ありがとうございます。', vi: 'À, tôi hiểu rồi. Cảm ơn bạn.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Nghe quán ăn thông báo mà chưa kịp nghe rõ — câu "cứu" nào đúng?',
          options: ['ゆっくり たべました。', 'もういちど おねがいします。', 'わかりました。', 'いっしょに いきませんか。'],
          answerIndex: 1, explanationVi: 'もういちど おねがいします = "xin một lần nữa" — xin nghe lại mà không cần ghép câu dài.',
        },
        {
          kind: 'error', prompt: 'Muốn nhờ người Nhật nói CHẬM lại — câu nào đúng?',
          options: ['ゆっくり はなして ください。', 'ゆっくり はなします ください。', 'はなして ゆっくり です。', 'ゆっくりですね はなして。'],
          answerIndex: 0, explanationVi: 'Trật tự: [trạng từ] + [động từ て] + ください: ゆっくり はなして ください. Ba câu còn lại sai trật tự hoặc sai mẫu.',
        },
        {
          kind: 'fill', prompt: 'Điền từ còn thiếu (Xin lỗi, tôi không hiểu)',
          sentence: 'すみません、___。',
          options: ['わかりません', 'わかりました', 'おぼえます', 'がんばります'],
          answerIndex: 0, explanationVi: 'わかりません = không hiểu/không biết. Thêm すみません phía trước để lịch sự hơn.',
        },
        {
          kind: 'choice', prompt: 'Sau khi được giải thích, bạn hiểu ra — đáp câu nào?',
          options: ['もういちど おねがいします。', 'ああ、わかりました。', 'ゆっくり おねがいします。', 'しつれいします。'],
          answerIndex: 1, explanationVi: 'ああ、わかりました = "à, hiểu rồi" — nên kèm ありがとうございます cho trọn vẹn.',
        },
      ],
    },
  ],
  dialogue: {
    titleVi: 'Ngày cuối khoá A1',
    situationVi: 'Học kỳ kết thúc — An và Yamada-sensei trò chuyện sau buổi tổng kết.',
    lines: [
      { speaker: 'やまだ', text: 'あんさん、おめでとうございます。A1を しゅうりょうしましたね。', vi: 'An, chúc mừng em. Em đã hoàn thành A1 rồi nhỉ.' },
      { speaker: 'あん', text: 'ありがとうございます。とても うれしいです。', vi: 'Em cảm ơn thầy. Em rất vui ạ.' },
      { speaker: 'やまだ', text: 'さいごの ふくしゅうは どうでしたか。', vi: 'Buổi ôn cuối thì sao hả em?' },
      { speaker: 'あん', text: 'たいへんでした。でも、ことばを おぼえました。', vi: 'Vất vả thật. Nhưng em đã ghi nhớ được nhiều từ.' },
      { speaker: 'やまだ', text: 'これからも べんきょうしますか。', vi: 'Từ nay em vẫn tiếp tục học chứ?' },
      { speaker: 'あん', text: 'はい、これからも がんばります。にほんが だいすきですから。', vi: 'Vâng, em sẽ tiếp tục cố gắng. Vì em rất thích Nhật Bản ạ.' },
      { speaker: 'やまだ', text: 'いいですね。つぎは A2ですよ。', vi: 'Tốt lắm. Bước tiếp theo là A2 đấy.' },
      { speaker: 'あん', text: 'はい。せんせい、どうもありがとうございました。', vi: 'Vâng. Thầy ơi, em thành thật cảm ơn thầy.' },
    ],
    questions: [
      { questionVi: 'Yamada-sensei chúc mừng An vì điều gì?', choices: ['Thi đậu JLPT', 'Hoàn thành khoá A1', 'Được việc ở Nhật', 'Sinh nhật'], answerIndex: 1, explanationVi: 'A1を しゅうりょうしましたね — "em đã hoàn thành A1 rồi nhỉ".' },
      { questionVi: 'An thấy buổi ôn cuối thế nào?', choices: ['Dễ và nhanh', 'Vất vả nhưng nhớ được nhiều từ', 'Khó và chán', 'Không tham dự'], answerIndex: 1, explanationVi: 'たいへんでした。でも、ことばを おぼえました — vất vả nhưng ghi nhớ được từ ngữ.' },
      { questionVi: 'Vì sao An hứa sẽ tiếp tục cố gắng?', choices: ['Vì thầy yêu cầu', 'Vì muốn tiền thưởng', 'Vì rất thích Nhật Bản', 'Vì bạn bè rủ'], answerIndex: 2, explanationVi: 'にほんが だいすきですから — "vì em rất thích Nhật Bản".' },
    ],
  },
  listening: [
    { scriptJa: 'これは いくらですか。', meaningVi: 'Cái này bao nhiêu tiền?', choices: ['Đây là cái gì?', 'Cái này bao nhiêu tiền?', 'Mấy giờ rồi?', 'Còn cái kia không?'], answerIndex: 1 },
    { scriptJa: 'これを おねがいします。', meaningVi: 'Cho tôi cái này.', choices: ['Tôi thích cái này', 'Cho tôi cái này', 'Cái này đắt quá', 'Cái kia là của tôi'], answerIndex: 1 },
    { scriptJa: 'ゆっくり はなして ください。', meaningVi: 'Xin hãy nói chậm rãi.', choices: ['Hãy nói to lên', 'Hãy nói tiếng Anh', 'Xin hãy nói chậm rãi', 'Hãy lặp lại câu hỏi'], answerIndex: 2 },
    { scriptJa: 'もういちど おねがいします。', meaningVi: 'Xin làm ơn một lần nữa.', choices: ['Xin nói lại một lần nữa', 'Xin cho thêm một phần', 'Một người nữa', 'Lần đầu tiên'], answerIndex: 0, dictation: true },
    { scriptJa: 'ごちそうさまでした。', meaningVi: 'Cảm ơn bữa ăn (nói khi ăn xong).', choices: ['Tôi bắt đầu ăn', 'Món ăn ngon quá', 'Cảm ơn bữa ăn', 'Tôi no rồi, không ăn'], answerIndex: 2, dictation: true },
  ],
  reading: {
    titleVi: 'A1の ふりかえり — Nhìn lại hành trình A1',
    lines: [
      { text: '4かげつ まえ、わたしは にほんごが わかりませんでした。', vi: 'Bốn tháng trước, tôi chưa hiểu gì tiếng Nhật.' },
      { text: 'さいしょは あいさつも むずかしかったです。', vi: 'Lúc đầu, ngay cả lời chào cũng khó.' },
      { text: 'でも まいにち べんきょうしました。ことばを おぼえました。', vi: 'Nhưng tôi học mỗi ngày. Tôi ghi nhớ từ ngữ.' },
      { text: 'みせで かいものが できます。レストランで ごはんも たべます。', vi: 'Giờ tôi mua sắm được ở cửa hàng. Ăn uống được ở nhà hàng.' },
      { text: 'みちも きけます。てんきの はなしも できます。', vi: 'Hỏi đường được. Trò chuyện thời tiết được.' },
      { text: 'これからも がんばります。ゆめは A2です。', vi: 'Từ giờ tôi vẫn cố gắng. Giấc mơ tiếp theo là A2.' },
    ],
    questions: [
      { questionVi: 'Bốn tháng trước người viết thế nào?', choices: ['Đã giỏi tiếng Nhật', 'Chưa hiểu gì tiếng Nhật', 'Đang sống ở Nhật', 'Đã học xong A2'], answerIndex: 1, explanationVi: 'Câu đầu: にほんごが わかりませんでした — chưa hiểu gì tiếng Nhật (quá khứ phủ định).' },
      { questionVi: 'Người viết giờ làm được những gì?', choices: ['Chỉ đọc sách', 'Mua sắm, ăn uống, hỏi đường', 'Đi làm ở công ty Nhật', 'Dạy tiếng Nhật'], answerIndex: 1, explanationVi: 'かいものが できます・ごはんも たべます・みちも きけます — mua sắm, ăn uống, hỏi đường đều xoay xở được.' },
      { questionVi: 'Mục tiêu tiếp theo của người viết là gì?', choices: ['N5', 'A2', 'Đi du lịch Nhật', 'Làm thêm toàn thời gian'], answerIndex: 1, explanationVi: 'Câu cuối: ゆめは A2です — giấc mơ tiếp theo là trình độ A2.' },
    ],
  },
  speakSentences: [
    { ja: 'これを おねがいします。', vi: 'Cho tôi cái này.' },
    { ja: 'もういちど おねがいします。', vi: 'Xin làm ơn một lần nữa.' },
    { ja: 'ゆっくり はなして ください。', vi: 'Xin hãy nói chậm rãi.' },
    { ja: 'わかりました。', vi: 'Tôi hiểu rồi.' },
    { ja: 'これからも がんばります。', vi: 'Từ giờ tôi vẫn tiếp tục cố gắng.' },
  ],
  translatePairs: [
    { ja: 'これは いくらですか。', vi: 'Cái này bao nhiêu tiền?', tokens: ['これ', 'は', 'いくら', 'です', 'か'], distractors: ['どこ'] },
    { ja: 'もういちど おねがいします。', vi: 'Xin làm ơn một lần nữa.', tokens: ['もういちど', 'おねがいします'], distractors: ['ゆっくり'] },
    { ja: 'ゆっくり はなして ください。', vi: 'Xin hãy nói chậm rãi.', tokens: ['ゆっくり', 'はなして', 'ください'], distractors: ['もういちど'] },
    { ja: 'これからも がんばります。', vi: 'Từ giờ tôi vẫn tiếp tục cố gắng.', tokens: ['これから', 'も', 'がんばります'], distractors: ['さいご'] },
    { ja: 'にほんが だいすきです。', vi: 'Tôi rất thích Nhật Bản.', tokens: ['にほん', 'が', 'だいすき', 'です'], distractors: ['たいへん'] },
  ],
  translateJaVi: [
    { ja: 'ああ、わかりました。', vi: 'À, tôi hiểu rồi.', wrongVi: ['À, tôi không hiểu.', 'Tôi đã quên rồi.', 'Tôi sẽ hỏi lại sau.'] },
    { ja: 'たいへんでしたが、たのしかったです。', vi: 'Vất vả thật nhưng rất vui.', wrongVi: ['Dễ ơi là dễ.', 'Vất vả và chán.', 'Bình thường thôi.'] },
    { ja: 'さいごの テストは どうでしたか。', vi: 'Bài kiểm tra cuối thế nào rồi?', wrongVi: ['Bài kiểm tra đầu lúc mấy giờ?', 'Đây là bài kiểm tra cuối đấy à?', 'Tôi làm bài rồi.'] },
  ],
  wordBank: [
    { ja: 'すみません、わかりません。', vi: 'Xin lỗi, tôi không hiểu.', tokens: ['すみません', 'わかりません'], distractors: ['わかりました'] },
    { ja: 'ごちそうさまでした。', vi: 'Cảm ơn bữa ăn.', tokens: ['ごちそうさま', 'でした'], distractors: ['いただきます'] },
  ],
  kanji: ['夢', '言'],
  writingKana: ['そ', 'う', 'ま', 'と', 'め'],
}
