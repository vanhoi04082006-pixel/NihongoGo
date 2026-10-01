/**
 * Hướng dẫn viết tay kana — curated cho các ký tự khó (hook, nét liền/tách,
 * lỗi thường gặp). Số nét theo cách dạy phổ biến (giáo trình); KanjiVG đôi khi
 * tách nét chéo thành 2 path nên số nét động hoạ có thể lệch 1 — đã ghi chú.
 */

export interface WritingGuide {
  /** Ghi chú chính: cấu trúc nét, nối/tách, hook. */
  focus: string
  /** Lỗi thường gặp. */
  mistake: string
}

export const WRITING_GUIDES: Record<string, WritingGuide> = {
  さ: {
    focus: '3 nét: ngang → ngang → cong. Nét 2 và nét 3 TÁCH rời nhau, không nối liền. Nét 3 cong xuống rồi quặt ngang lên bên phải.',
    mistake: 'Nối nét 2 với nét 3 thành một nét liền (sai), hoặc quên độ cong của nét cuối.',
  },
  き: {
    focus: '3 nét: 2 nét ngang song song (tách rời) + nét cong chéo có "bướu" nhỏ ở đầu. Nét 3 rẽ xuống rồi kéo cong về phải.',
    mistake: 'Nối 2 nét ngang lại với nhau; quên khúc gãy nhỏ đầu nét 3 làm chữ giống hoá "さ without hook".',
  },
  ふ: {
    focus: '4 nét nhưng cảm giác 3 phần: nét cong trái lớn (1), nét cong nhỏ giữa (2), nét cong phải có móc (3) — các phần TÁCH nhau.',
    mistake: 'Nối cả 3 phần thành 1 nét liền; viết phần giữa to bằng phần hai bên.',
  },
  れ: {
    focus: '2 nét: nét cong dọc bên trái (như nước suối chảy) + cụm 2 nét nhỏ bên phải (ngang gãy + móc). Trái và phải TÁCH rời.',
    mistake: 'Nối cụm phải vào nét trái; viết giống ろ ( thiếu nét móc khép cuối).',
  },
  ろ: {
    focus: '1 nét duy nhất cong liên tục: vòng trái → kéo xuống → vắt ngang qua → cong móc khép vào trong. Viết liền tay, không ngắt.',
    mistake: 'Ngắt nét giữa chừng; móc cuối không khép vào trong khiến chữ giống る thiếu nét.',
  },
  を: {
    focus: '3 nét: cong ngang trên (như nét đầu こ) → ngang → móc chéo xuống trái. Ba phần tách rời, riêng nét 2–3 chạm nhau ở điểm gãy.',
    mistake: 'Nhầm với ろ/る; viết móc cuối hướng sang phải thay vì chéo xuống trái.',
  },
  や: {
    focus: '3 nét: ngang ngắn → móc nhỏ hướng phải (như nét 2 của お) → nét cong dài ôm xuống đáy. Nét 2 và 3 tách nhau.',
    mistake: 'Quên móc ở nét 2; nét 3 thẳng đuột thay vì cong ôm.',
  },
  ゆ: {
    focus: '2 nét: vòng tròn kín phía trên + nét cong cắt ngang qua rồi kéo dài xuống. Nét 2 KHÔNG khép vào vòng tròn.',
    mistake: 'Nối nét 2 vào vòng tròn thành 1 nét; vòng tròn méo thành elip dựng.',
  },
  よ: {
    focus: '2 nét: nét cong có móc ở giữa (viết như số 3 nằm nghiêng) + nét ngang cắt qua. Hai nét tách rời.',
    mistake: 'Nối nét ngang vào nét cong; quên móc cuối nét 1.',
  },
  ち: {
    focus: '2 nét: ngang → cong như chữ 5 (chéo xuống, vắt ngang, móc lên). Nét 2 khởi đầu từ TRÊN nét ngang.',
    mistake: 'Viết giống さ (3 nét, móc sang phải) — ち chỉ 2 nét và móc hướng LÊN.',
  },
  っ: {
    focus: '1 nét nhỏ gọn ở góc trái trên: cong xuống rồi móc sang trái (dạng thu nhỏ của つ). Viết NHỎ bằng nửa ký tự thường.',
    mistake: 'Viết to bằng chữ つ thường — mất chức năng âm kép (っ = ngắt âm).',
  },
  の: {
    focus: '1 nét cong liền mạch từ trên trái: vòng xuống, ôm phải rồi vắt chéo lên. Không ngắt bút, không gãy nét.',
    mistake: 'Gãy nét ở giữa; vòng đầu quá to hoặc quá nhỏ so với đuôi.',
  },
  か: {
    focus: 'Cách dạy phổ biến 2 nét: ngang + nét cong chéo có móc (KanjiVG tách nét chéo thành 2 path nên động hoạ có thể hiện 3 nét).',
    mistake: 'Thêm nét dọc thứ hai (hoá thành き); quên móc cuối nét cong.',
  },
  け: {
    focus: '3 nét: cong dọc bên trái + ngang + móc chéo xuống. Cụm 3 nét bên phải tách rời nét trái.',
    mistake: 'Nối các nét phải vào nét trái; quên móc ở nét cuối.',
  },
  へ: {
    focus: '1 nét gãy: chéo xuống phải rồi gấp chéo xuống trái, như mái nhà. Đỉnh gãy nhọn, hai cánh cân.',
    mistake: 'Làm tròn đỉnh gãy; hai cánh chênh lệch quá lớn.',
  },
  ほ: {
    focus: '4 nét: ngang trên → ngang + dọc giao nhau (như 木 nhỏ) bên trái → cong móc bên phải. THỨ TỰ: ngang trên trước, mới đến bộ 木.',
    mistake: 'Viết bộ 木 trước nét ngang trên (sai thứ tự); quên móc nét cuối.',
  },
  ま: {
    focus: '3 nét: 2 nét ngang song song + nét cong móc lớn bên phải ôm xuống đáy. Nét 3 bắt đầu ngang tầm nét 2.',
    mistake: '2 nét ngang chạm vào nét cong; quên móc khép cuối.',
  },
  も: {
    focus: '3 nét: 2 ngang song song + nét cong móc dưới, bắt đầu cắt qua giữa 2 nét ngang rồi kéo sang phải có móc.',
    mistake: 'Quên móc cuối; 2 nét ngang dài bằng nhau (nét dưới nên ngắn hơn).',
  },
  ら: {
    focus: '2 nét cong tách rời: nét trên cong xuống như dấu phẩy, nét dưới ôm ngược lên. Hai nét KHÔNG chạm nhau.',
    mistake: 'Nối 2 cong thành 1; viết ngược chiều nét dưới.',
  },
  わ: {
    focus: '2 nét: cong dọc bên trái + cụm ngang-móc bên phải. Giống れ/ね nhưng cụm phải đơn giản (ngang + móc, không gãy đôi).',
    mistake: 'Nhầm với れ (thêm nét gãy) hoặc ね; quên móc cuối.',
  },
  ん: {
    focus: '1 nét: chéo xuống phải, gấp rồi cong xuống trái, kết bằng MÓC nhỏ hướng lên ở cuối. Nét liền mạch.',
    mistake: 'Quên móc cuối (thành nét thẳng); gãy cứng ở khúc giữa thay vì cong mềm.',
  },
  シ: {
    focus: '3 nét: 2 nét chấm-phẩy NGHIÊNG SANG PHẢI ở trên + nét cong ôm dưới. Các chấm tách rời, hướng chéo xuống-trái.',
    mistake: 'Nhầm với ツ: シ có chấm nằm NGANG hơn, đặt lệch trái; cong đáy ôm từ dưới lên.',
  },
  ツ: {
    focus: '3 nét: 3 chấm THẲNG DỌC (nghiêng nhẹ xuống) xếp ngang phía trên + nét cong ôm dưới. Chấm hướng từ trên xuống.',
    mistake: 'Nhầm với シ: ツ chấm dọc đều nhau; cong đáy kéo từ trái sang phải.',
  },
  ソ: {
    focus: '2 nét: 1 chấm nghiêng + nét cong kéo dài sang phải. Chấm ở TRÊN, tách rời nét cong.',
    mistake: 'Nhầm với ン: ソ chấm THẲNG hơn, nét cong ngắn hơn.',
  },
  ン: {
    focus: '2 nét: chém chéo ngắn ở TRÊN-TRÁI + nét dài kéo ngang sang phải hơi trượt xuống. Chém ngắn tách rời nét dài.',
    mistake: 'Nhầm với ソ: ン có chém XÉO 45°, đặt cao hơn; nét dài nằm ngang hơn.',
  },
  ク: {
    focus: '2 nét: chém dọc trái + ngang rồi cong xuống có MÓC phải. Nét 2 gãy ở góc trên phải rồi cong.',
    mistake: 'Quên móc cuối (thành 夕 thiếu); góc gãy không rõ.',
  },
  ケ: {
    focus: '3 nét: chém ngắn + chéo xuống (tạo hình 人 mở) + ngang cong xuống phải. Giống ク nhưng nét đầu tách làm hai.',
    mistake: 'Nối 2 chém đầu thành 1 nét gãy (hoá ク); quên độ cong nét cuối.',
  },
  フ: {
    focus: '1 nét liền: ngang ngắn rồi gấp cong xuống trái, kết bằng móc nhỏ. Hình móc câu đặt lệch trái.',
    mistake: 'Gãy cứng ở khúc gấp thay vì cong; quên móc cuối.',
  },
  ワ: {
    focus: '2 nét: chém dọc trái hơi cong + ngang rồi gấp xuống phải. Miệng loe rộng hơn 口, đáy hơi hẹp.',
    mistake: 'Viết như 口 (khép kín 3 cạnh) — ワ mở ở đáy phải; quên góc gãy nét 2.',
  },
  ヲ: {
    focus: '3 nét: ngang trên (tách rời) + chém trái + ngang gấp xuống phải như ワ. Nét ngang trên KHÔNG chạm cụm dưới.',
    mistake: 'Nối nét ngang trên vào thân chữ; nhầm với フ/ワ.',
  },
}

/** Fallback cho ký tự không có trong danh sách curated. */
export const GENERIC_GUIDE: WritingGuide = {
  focus:
    'Viết từ trái sang phải, từ trên xuống dưới. Nét ngang trước nét dọc, nét ngoài trước nét trong. Các nét riêng tách rời trừ khi có móc nối tự nhiên.',
  mistake: 'Nối các nét tách rời thành một nét liền, hoặc viết ngược thứ tự trên-dưới.',
}

export function getWritingGuide(character: string): WritingGuide {
  return WRITING_GUIDES[character] ?? GENERIC_GUIDE
}
