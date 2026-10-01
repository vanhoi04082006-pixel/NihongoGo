/**
 * NihongoGo — Irodori A1 · Bài 7: ばしょ (Địa điểm & chỉ đường).
 * Nội dung GỐC 100% — không sao chép dialogue/ví dụ/bài tập có bản quyền.
 * Provenance: ORIGINAL_GENERATED · MACHINE_REVIEWED (validator + audit).
 */
import type { IrodoriLesson } from './types'

export const irodori7: IrodoriLesson = {
  order: 7,
  slug: 'irodori-7',
  title: 'ばしょ — Địa điểm & chỉ đường',
  titleJa: 'ばしょと みち',
  description: 'Hỏi nơi chốn, mô tả vị trí trái phải và chỉ đường cho người lạ — không lo lạc giữa Tokyo nữa.',
  learningObjectives: [
    'Hỏi & chỉ nơi chốn bằng どこ・ここ・そこ・あそこ',
    'Nói sự vật tồn tại với 〜が あります',
    'Chỉ đường mệnh lệnh nhẹ nhàng bằng 〜て ください',
  ],
  grammarTopics: ['どこ・ここ・そこ・あそこ', 'N が あります — có…', '〜て ください — hãy…'],
  vocabularyTopics: ['Địa điểm công cộng', 'Hướng chỉ đường', 'Động từ di chuyển'],
  kanjiTopics: ['Kanji 行・来'],
  difficulty: 'BEGINNER',
  vocabulary: [
    { term: 'えき', romaji: 'eki', meaningVi: 'nhà ga', pos: 'danh từ', exampleJa: 'えきは どこですか。', exampleVi: 'Nhà ga ở đâu?' },
    { term: 'としょかん', romaji: 'toshokan', meaningVi: 'thư viện', pos: 'danh từ', exampleJa: 'としょかんは えきから とおいです。', exampleVi: 'Thư viện xa nhà ga.' },
    { term: 'ゆうびんきょく', romaji: 'yūbinkyoku', meaningVi: 'bưu điện', pos: 'danh từ', exampleJa: 'ゆうびんきょくは あそこです。', exampleVi: 'Bưu điện ở bên kia.' },
    { term: 'バスてい', romaji: 'basutei', meaningVi: 'trạm xe buýt', pos: 'danh từ', exampleJa: 'こうさてんの みぎは バスていです。', exampleVi: 'Bên phải ngã tư là trạm xe buýt.' },
    { term: 'しんごう', romaji: 'shingō', meaningVi: 'đèn giao thông', pos: 'danh từ', exampleJa: 'しんごうの みぎに コンビニが あります。', exampleVi: 'Bên phải đèn giao thông có cửa hàng tiện lợi.' },
    { term: 'こうさてん', romaji: 'kōsaten', meaningVi: 'ngã tư', pos: 'danh từ', exampleJa: 'こうさてんを ひだりに まがります。', exampleVi: 'Tôi rẽ trái ở ngã tư.' },
    { term: 'みぎ', romaji: 'migi', meaningVi: 'bên phải', pos: 'phó từ chỉ hướng', exampleJa: 'みぎに まがって ください。', exampleVi: 'Xin hãy rẽ bên phải.' },
    { term: 'ひだり', romaji: 'hidari', meaningVi: 'bên trái', pos: 'phó từ chỉ hướng', exampleJa: 'ひだりは スーパーです。', exampleVi: 'Bên trái là siêu thị.' },
    { term: 'まっすぐ', romaji: 'massugu', meaningVi: 'thẳng, đi thẳng', pos: 'phó từ chỉ hướng', exampleJa: 'この みちを まっすぐ いきます。', exampleVi: 'Tôi đi thẳng con đường này.' },
    { term: 'わたります', romaji: 'watarimasu', meaningVi: 'băng qua (đường, ngã tư)', pos: 'động từ nhóm 1', exampleJa: 'みちを わたります。', exampleVi: 'Tôi băng qua con đường.' },
    { term: 'まがります', romaji: 'magarimasu', meaningVi: 'rẽ (quanh)', pos: 'động từ nhóm 1', exampleJa: 'みぎに まがります。', exampleVi: 'Tôi rẽ phải.' },
    { term: 'あるきます', romaji: 'arukimasu', meaningVi: 'đi bộ', pos: 'động từ nhóm 1', exampleJa: 'えきまで あるきます。', exampleVi: 'Tôi đi bộ đến nhà ga.' },
    { term: 'とおい', romaji: 'tōi', meaningVi: 'xa', pos: 'tính từ い', exampleJa: 'としょかんは とおいです。', exampleVi: 'Thư viện xa.' },
    { term: 'ここ', romaji: 'koko', meaningVi: 'ở đây (gần tôi)', pos: 'đại từ chỉ nơi', exampleJa: 'ここは えきです。', exampleVi: 'Ở đây là nhà ga.' },
    { term: 'そこ', romaji: 'soko', meaningVi: 'ở đó (gần bạn)', pos: 'đại từ chỉ nơi', exampleJa: 'そこは ゆうびんきょくです。', exampleVi: 'Ở đó là bưu điện.' },
    { term: 'あそこ', romaji: 'asoko', meaningVi: 'bên kia (xa cả hai)', pos: 'đại từ chỉ nơi', exampleJa: 'あそこは としょかんです。', exampleVi: 'Bên kia là thư viện.' },
    { term: 'どこ', romaji: 'doko', meaningVi: 'ở đâu', pos: 'đại từ chỉ nơi', exampleJa: 'スーパーは どこですか。', exampleVi: 'Siêu thị ở đâu?' },
  ],
  grammar: [
    {
      code: 'i7-doko-desu-ka',
      title: 'どこ・ここ・そこ・あそこ — hỏi & chỉ nơi chốn',
      formation: '[nơi] は + どこ + ですか · Trả lời: ここ/そこ/あそこ + です',
      explanationVi:
        'Bộ chỉ nơi giống hệt bộ chỉ đồ (bài 4) nhưng dành cho ĐỊA ĐIỂM: ここ = ở đây (gần tôi), そこ = ở đó (gần bạn), あそこ = bên kia (xa cả hai), どこ = ở đâu. Hỏi: ゆうびんきょくは どこですか. Trả lời ngắn: あそこです. So sánh: これ chỉ VẬT ("cái này"), ここ chỉ NƠI ("ở đây") — đừng lẫn khi hỏi nhà vệ sinh: トイレは どこですか.',
      examples: [
        { ja: 'えきは どこですか。', vi: 'Nhà ga ở đâu?', tokens: ['えき', 'は', 'どこ', 'です', 'か'] },
        { ja: 'としょかんは あそこです。', vi: 'Thư viện ở bên kia.' },
        { ja: 'ここは バスていです。', vi: 'Ở đây là trạm xe buýt.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: 'Hỏi "nhà ga ở đâu" — câu nào đúng?',
          options: ['えきは なんですか。', 'えきは だれですか。', 'えきは どこですか。', 'えきは いくらですか。'],
          answerIndex: 2, explanationVi: 'どこ = ở đâu (chỉ NƠI). なん/だれ/いくら hỏi vật/người/giá — không hỏi chỗ.',
        },
        {
          kind: 'choice', prompt: 'Bạn đứng cạnh tôi, chỉ chỗ gần CHÍNH BẠN — dùng từ nào?',
          options: ['ここ', 'そこ', 'あそこ', 'どこ'],
          answerIndex: 1, explanationVi: 'そこ = gần người NGHE. ここ là gần người nói; あそこ là xa cả hai.',
        },
        {
          kind: 'fill', prompt: 'Điền từ hỏi (nhà vệ sinh ở đâu?)',
          sentence: 'トイレは ___ですか。',
          options: ['だれ', 'なん', 'いくら', 'どこ'],
          answerIndex: 3, explanationVi: 'Hỏi nơi chốn → どこ. Đây là câu sống còn nhất khi đi chơi Nhật!',
        },
        {
          kind: 'error', prompt: 'Câu hỏi nơi chốn nào đúng?',
          options: ['ゆうびんきょくは どこに ですか。', 'ゆうびんきょくは どこですか。', 'ゆうびんきょくが どこ ですか。', 'ゆうびんきょくは どこを ですか。'],
          answerIndex: 1, explanationVi: 'Mẫu chuẩn: [nơi] は どこですか — どこ + です + か liền mạch, không chen trợ từ.',
        },
        {
          kind: 'choice', prompt: 'あそこ dùng để chỉ nơi thế nào?',
          options: ['Gần người nói', 'Gần người nghe', 'Xa cả người nói lẫn người nghe', 'Nơi không có trên bản đồ'],
          answerIndex: 2, explanationVi: 'あそこ = bên kia, xa cả hai — ví dụ tòa nhà phía cuối phố.',
        },
      ],
    },
    {
      code: 'i7-ga-arimasu',
      title: 'N が あります — có… (sự vật, địa điểm)',
      formation: '[nơi] に + [sự vật] + が + あります · Phủ định: ありません',
      explanationVi:
        'Muốn nói "có X ở đâu": [vị trí] に [X] が あります — こうさてんの みぎに コンビニが あります (bên phải ngã tư có cửa hàng tiện lợi). Lưu ý số một: sự vật tồn tại dùng trợ từ が (không phải は). Phủ định là ありません: ちかくに トイレは ありません. Câu này cũng dùng để hỏi có hay không: この みちに バスていが ありますか.',
      examples: [
        { ja: 'こうさてんの みぎに としょかんが あります。', vi: 'Thư viện ở bên phải ngã tư.', tokens: ['こうさてん', 'の', 'みぎ', 'に', 'としょかん', 'が', 'あります'] },
        { ja: 'えきの まえに バスていが あります。', vi: 'Trước nhà ga có trạm xe buýt.' },
        { ja: 'この みちに コンビニは ありません。', vi: 'Con đường này không có cửa hàng tiện lợi.' },
      ],
      drills: [
        {
          kind: 'particle', prompt: 'Điền trợ từ (bên trái có siêu thị)',
          sentence: 'こうさてんの ひだり___ スーパーが あります。',
          options: ['に', 'を', 'で', 'と'],
          answerIndex: 0, explanationVi: 'Vị trí + に đứng trước cụm [sự vật]が あります. を là trợ từ tân ngữ — sai chỗ.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ (có đèn giao thông)',
          sentence: 'しんごう___ あります。',
          options: ['は', 'が', 'を', 'に'],
          answerIndex: 1, explanationVi: 'Sự vật tồn tại làm CHỦ NGỮ của あります → が. Đây là lỗi phổ biến nhất của người mới!',
        },
        {
          kind: 'choice', prompt: '「バスていが あります」 nghĩa là gì?',
          options: ['Có trạm xe buýt', 'Trạm buýt ở bên trái', 'Tôi đến trạm buýt', 'Trạm buýt rất xa'],
          answerIndex: 0, explanationVi: 'あります = "có (sự vật nào đó)" — mô tả sự tồn tại, không phải hành động đi đến.',
        },
        {
          kind: 'error', prompt: 'Câu mô tả vị trí nào đúng?',
          options: ['こうさてんが バスていに あります。', 'こうさてんに バスていは あります。', 'こうさてんに バスていが あります。', 'こうさてんで バスていが あります。'],
          answerIndex: 2, explanationVi: 'Trật tự chuẩn: [vị trí]に + [sự vật]が + あります. Câu 1 đảo vai (ngã tư nằm ở trạm buýt); で là trợ từ nơi diễn ra hành động.',
        },
        {
          kind: 'fill', prompt: 'Điền trợ từ (thư viện ở bên kia)',
          sentence: 'としょかんは あそこ___ あります。',
          options: ['に', 'で', 'を', 'が'],
          answerIndex: 0, explanationVi: 'あそこ là vị trí → に. (Sự vật としょかん đã được は nêu trước nên không lặp が.)',
        },
      ],
    },
    {
      code: 'i7-te-kudasai',
      title: '〜て ください — hãy…',
      formation: '[gốc て] + ください: いって (đi) · まがって (rẽ) · わたって (băng qua) · ちょっと まって (chờ chút)',
      explanationVi:
        'Chỉ đường hoặc nhờ vả nhẹ nhàng: [động từ dạng て] + ください = "xin hãy…". Ba dạng て cần nhớ cho chỉ đường: いってください (hãy đi), まがってください (hãy rẽ), わたってください (hãy băng qua). Dạng て lấy từ động từ nhóm 1 biến âm (いく→いって, まがる→まがって) — ở mức A1 học nguyên cụm là đủ dùng ngay. Cũng đã gặp ふたつ ください (cho tôi 2 cái) — cùng đuôi ください nhưng đằng trước là danh từ.',
      examples: [
        { ja: 'しんごうを わたって ください。', vi: 'Hãy băng qua đèn giao thông.', tokens: ['しんごう', 'を', 'わたって', 'ください'] },
        { ja: 'この みちを まっすぐ いって ください。', vi: 'Hãy đi thẳng con đường này.' },
        { ja: 'みぎに まがって ください。', vi: 'Hãy rẽ bên phải.' },
      ],
      drills: [
        {
          kind: 'choice', prompt: '「まっすぐ いって ください」 nghĩa là gì?',
          options: ['Xin hãy đi thẳng', 'Xin hãy rẽ trái', 'Xin hãy dừng lại', 'Xin hãy đi chậm'],
          answerIndex: 0, explanationVi: 'まっすぐ = thẳng + いって ください = hãy đi → "hãy đi thẳng".',
        },
        {
          kind: 'choice', prompt: '「みぎに まがって ください」 — rẽ hướng nào?',
          options: ['Trái', 'Thẳng', 'Phải', 'Quay lại'],
          answerIndex: 2, explanationVi: 'みぎ = phải, ひだり = trái. まがって ください = hãy rẽ.',
        },
        {
          kind: 'fill', prompt: 'Điền từ (hãy băng qua ngã tư)',
          sentence: 'こうさてんを ___ください。',
          options: ['まがって', 'いって', 'とおい', 'わたって'],
          answerIndex: 3, explanationVi: 'Băng qua đường/ngã tư = わたって. まがって là rẽ; いって là đi.',
        },
        {
          kind: 'error', prompt: 'Câu chỉ đường nào đúng?',
          options: ['みぎを まがって ください。', 'みぎに まがります ください。', 'まがって みぎに ください。', 'みぎに まがって ください。'],
          answerIndex: 3, explanationVi: 'Hướng rẽ dùng に (みぎに), dạng て + ください liền nhau. みぎを sai trợ từ; まがります ください lẫn dạng từ điển.',
        },
        {
          kind: 'particle', prompt: 'Điền trợ từ (đi thẳng con đường này)',
          sentence: 'この みち___ まっすぐ いって ください。',
          options: ['に', 'を', 'で', 'は'],
          answerIndex: 1, explanationVi: 'Con đường là "tân ngữ của chuyển động" → を. Hành động đi QUA một cung đường luôn dùng を.',
        },
      ],
    },
  ],
  dialogue: {
    titleVi: 'Hỏi đường đến bưu điện',
    situationVi: 'Mai lạc đường giữa khu phố, hỏi một ông chú đi bộ gần đó.',
    lines: [
      { speaker: 'まい', text: 'すみません、ゆうびんきょくは どこですか。', vi: 'Xin lỗi ạ, bưu điện ở đâu vậy ạ?' },
      { speaker: 'おとこのひと', text: 'ゆうびんきょくですね。この みちを まっすぐ いって ください。', vi: 'Bưu điện hả. Cô đi thẳng con đường này nhé.' },
      { speaker: 'まい', text: 'まっすぐですね。', vi: 'Đi thẳng đúng không ạ.' },
      { speaker: 'おとこのひと', text: 'はい。しんごうが あります。そこを みぎに まがって ください。', vi: 'Vâng. Có đèn giao thông. Cô rẽ phải ở đó nhé.' },
      { speaker: 'まい', text: 'しんごうを みぎですね。バスていも ありますか。', vi: 'Rẽ phải ở đèn giao thông đúng không ạ. Có trạm xe buýt ở đó không ạ?' },
      { speaker: 'おとこのひと', text: 'はい、こうさてんの ひだりに あります。', vi: 'Có, nó ở bên trái ngã tư.' },
      { speaker: 'まい', text: 'あそこですね。ありがとう ございました。', vi: 'Bên kia đúng không ạ. Cảm ơn ông nhiều ạ.' },
      { speaker: 'おとこのひと', text: 'いいえ、どういたしまして。', vi: 'Không có gì đâu.' },
    ],
    questions: [
      { questionVi: 'Để đến bưu điện, Mai phải làm gì TRƯỚC TIÊN?', choices: ['Đi thẳng con đường', 'Rẽ trái ở ngã tư', 'Băng qua cây cầu', 'Đi qua trạm buýt'], answerIndex: 0, explanationVi: 'Ông chú dặn: この みちを まっすぐ いって ください — đi thẳng trước đã.' },
      { questionVi: 'Mai rẽ hướng nào ở đèn giao thông?', choices: ['Phải', 'Trái', 'Không rẽ', 'Quay đầu'], answerIndex: 0, explanationVi: 'そこを みぎに まがって ください = rẽ phải tại đèn giao thông.' },
      { questionVi: 'Trạm xe buýt nằm ở đâu?', choices: ['Bên trái ngã tư', 'Bên phải đèn giao thông', 'Trước bưu điện', 'Bên phải nhà ga'], answerIndex: 0, explanationVi: 'こうさてんの ひだりに あります = ở bên trái ngã tư.' },
    ],
  },
  listening: [
    { scriptJa: 'えきは どこですか。', meaningVi: 'Nhà ga ở đâu?', choices: ['Nhà ga ở đâu?', 'Đây là nhà ga', 'Nhà ga xa không?', 'Đó là nhà ga'], answerIndex: 0 },
    { scriptJa: 'この みちを まっすぐ いって ください。', meaningVi: 'Hãy đi thẳng con đường này.', choices: ['Hãy đi thẳng đường này', 'Hãy rẽ trái ở ngã tư', 'Hãy băng qua cầu', 'Cửa hàng ở bên trái'], answerIndex: 0 },
    { scriptJa: 'しんごうを みぎに まがって ください。', meaningVi: 'Hãy rẽ phải ở đèn giao thông.', choices: ['Rẽ phải ở đèn giao thông', 'Rẽ trái ở đèn giao thông', 'Đi thẳng qua đèn giao thông', 'Đứng chờ ở đèn giao thông'], answerIndex: 0 },
    { scriptJa: 'バスていは どこですか。', meaningVi: 'Trạm xe buýt ở đâu?', choices: ['Trạm xe buýt ở đâu?', 'Đây là trạm xe buýt', 'Trạm buýt xa không?', 'Trạm tàu ở đâu?'], answerIndex: 0, dictation: true },
    { scriptJa: 'こうさてんを わたって ください。', meaningVi: 'Hãy băng qua ngã tư.', choices: ['Hãy băng qua ngã tư', 'Hãy rẽ trái ở ngã tư', 'Ngã tư ở bên phải', 'Hãy băng qua cây cầu'], answerIndex: 0, dictation: true },
  ],
  reading: {
    titleVi: 'えきの まわり — Xung quanh nhà ga',
    lines: [
      { text: 'えきの みぎは スーパーです。', vi: 'Bên phải nhà ga là siêu thị.' },
      { text: 'えきの ひだりは ゆうびんきょくです。', vi: 'Bên trái nhà ga là bưu điện.' },
      { text: 'ゆうびんきょくの まえに バスていが あります。', vi: 'Trước bưu điện có trạm xe buýt.' },
      { text: 'としょかんは こうさてんの ひだりです。', vi: 'Thư viện ở bên trái ngã tư.' },
      { text: 'としょかんは えきから ちょっと とおいです。', vi: 'Thư viện hơi xa nhà ga.' },
      { text: 'まいさんは あるきます。', vi: 'Mai đi bộ đến đó.' },
    ],
    questions: [
      { questionVi: 'Bên phải nhà ga là gì?', choices: ['Siêu thị', 'Bưu điện', 'Trạm xe buýt', 'Thư viện'], answerIndex: 0, explanationVi: 'Dòng 1: えきの みぎは スーパーです.' },
      { questionVi: 'Trạm xe buýt nằm ở đâu?', choices: ['Trước bưu điện', 'Bên trái ngã tư', 'Bên phải nhà ga', 'Trong siêu thị'], answerIndex: 0, explanationVi: 'Dòng 3: ゆうびんきょくの まえに バスていが あります — まえ = phía trước.' },
      { questionVi: 'Thư viện ở đâu?', choices: ['Bên trái ngã tư', 'Bên phải nhà ga', 'Trước trạm buýt', 'Bên trái bưu điện'], answerIndex: 0, explanationVi: 'Dòng 4: としょかんは こうさてんの ひだりです — và nó hơi xa nhà ga.' },
    ],
  },
  speakSentences: [
    { ja: 'えきは どこですか。', vi: 'Nhà ga ở đâu?' },
    { ja: 'まっすぐ いって ください。', vi: 'Xin hãy đi thẳng.' },
    { ja: 'しんごうを わたって ください。', vi: 'Xin hãy băng qua đèn giao thông.' },
    { ja: 'みぎに まがって ください。', vi: 'Xin hãy rẽ phải.' },
    { ja: 'ここから とおいです。', vi: 'Từ đây đi xa lắm.' },
  ],
  translatePairs: [
    { ja: 'ゆうびんきょくは どこですか。', vi: 'Bưu điện ở đâu?', tokens: ['ゆうびんきょく', 'は', 'どこ', 'です', 'か'], distractors: ['ここ'] },
    { ja: 'この みちを まっすぐ いって ください。', vi: 'Hãy đi thẳng con đường này.', tokens: ['この', 'みち', 'を', 'まっすぐ', 'いって', 'ください'], distractors: ['まがって'] },
    { ja: 'しんごうを みぎに まがります。', vi: 'Tôi rẽ phải ở đèn giao thông.', tokens: ['しんごう', 'を', 'みぎ', 'に', 'まがります'], distractors: ['ひだり'] },
    { ja: 'としょかんは えきから とおいです。', vi: 'Thư viện xa nhà ga.', tokens: ['としょかん', 'は', 'えき', 'から', 'とおい', 'です'], distractors: ['ここ'] },
    { ja: 'こうさてんを わたります。', vi: 'Tôi băng qua ngã tư.', tokens: ['こうさてん', 'を', 'わたります'], distractors: ['まがります'] },
  ],
  translateJaVi: [
    { ja: 'コンビニは えきの みぎです。', vi: 'Cửa hàng tiện lợi ở bên phải nhà ga.', wrongVi: ['Cửa hàng tiện lợi ở bên trái nhà ga.', 'Nhà ga ở bên phải cửa hàng tiện lợi.', 'Cửa hàng tiện lợi đối diện nhà ga.', 'Cửa hàng tiện lợi rất xa nhà ga.'] },
    { ja: 'バスていは しんごうの まえです。', vi: 'Trạm xe buýt ở trước đèn giao thông.', wrongVi: ['Trạm buýt ở sau đèn giao thông.', 'Đèn giao thông ở trước trạm buýt.', 'Trạm buýt ở bên phải đèn giao thông.', 'Trạm buýt ở trước nhà ga.'] },
    { ja: 'としょかんは ちょっと とおいです。', vi: 'Thư viện hơi xa.', wrongVi: ['Thư viện rất gần.', 'Thư viện hơi rẻ.', 'Thư viện ở bên trái.', 'Tôi đi bộ đến thư viện.'] },
  ],
  wordBank: [
    { ja: 'えきは あそこです。', vi: 'Nhà ga ở bên kia.', tokens: ['えき', 'は', 'あそこ', 'です'], distractors: ['どこ'] },
    { ja: 'ひだりに まがって ください。', vi: 'Hãy rẽ bên trái.', tokens: ['ひだり', 'に', 'まがって', 'ください'], distractors: ['みぎ'] },
  ],
  kanji: ['行', '来'],
  writingKana: ['え', 'と', 'し', 'ん', 'ご'],
}
