/**
 * NihongoGo — League seed data (4 giải đấu xếp hạng tuần).
 */
import type { SeedLeague } from './types'

export const leagues: SeedLeague[] = [
  {
    key: 'SAKURA',
    name: 'Hoa Anh Đào',
    description:
      'Giải khởi đầu dịu dàng như sắc hồng anh đào — nơi mọi hành trình học tiếng Nhật bắt đầu nở hoa.',
  },
  {
    key: 'FUJI',
    name: 'Núi Phú Sĩ',
    description:
      'Đã qua mùa hoa, giờ là lúc leo núi. Vươn tới đỉnh Phú Sĩ — đứng càng cao, nhìn càng xa.',
  },
  {
    key: 'SAMURAI',
    name: 'Chiến Binh Samurai',
    description:
      'Tinh thần thép và kỹ thuật tinh thông — chỉ những người rèn luyện bền bỉ mới xứng danh chiến binh.',
  },
  {
    key: 'SHOGUN',
    name: 'Tướng Quân',
    description:
      'Đỉnh cao danh vọng — chỉ một vị Tướng Quân đứng đầu bảng. Hãy chứng minh kẻ mạnh nhất chính là bạn.',
  },
]
