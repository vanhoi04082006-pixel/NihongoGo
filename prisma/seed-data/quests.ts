/**
 * NihongoGo — Quest template seed data (8 nhiệm vụ hàng ngày).
 * metric dùng đúng union QuestMetric trong types.ts.
 */
import type { SeedQuestTemplate } from './types'

export const questTemplates: SeedQuestTemplate[] = [
  {
    code: 'EARN_50_XP',
    title: 'Nạp Năng Lượng',
    description: 'Kiếm thêm 50 XP trong hôm nay.',
    icon: 'Zap',
    metric: 'XP_EARNED',
    target: 50,
    rewardXP: 10,
  },
  {
    code: 'EARN_100_XP',
    title: 'Cỗ Máy Tích Lũy',
    description: 'Kiếm 100 XP trong hôm nay — bạn làm được mà!',
    icon: 'Zap',
    metric: 'XP_EARNED',
    target: 100,
    rewardXP: 20,
  },
  {
    code: 'COMPLETE_3_LESSONS',
    title: 'Ba Bài Một Ngày',
    description: 'Hoàn thành 3 bài học trong hôm nay.',
    icon: 'BookOpen',
    metric: 'LESSONS_COMPLETED',
    target: 3,
    rewardXP: 15,
  },
  {
    code: 'ANSWER_20_CORRECT',
    title: 'Chuẩn Xác 20 Câu',
    description: 'Trả lời đúng 20 câu hỏi trong ngày.',
    icon: 'CheckCircle',
    metric: 'CORRECT_ANSWERS',
    target: 20,
    rewardXP: 15,
  },
  {
    code: 'ONE_LISTENING',
    title: 'Lắng Nghe Mỗi Ngày',
    description: 'Hoàn thành 1 bài luyện nghe.',
    icon: 'Headphones',
    metric: 'LISTENING_NODES',
    target: 1,
    rewardXP: 10,
  },
  {
    code: 'REVIEW_10_ITEMS',
    title: 'Ôn Tập Nhẹ Nhàng',
    description: 'Ôn tập lại 10 mục đã học để nhớ lâu hơn.',
    icon: 'RefreshCw',
    metric: 'REVIEWS_DONE',
    target: 10,
    rewardXP: 15,
  },
  {
    code: 'VOCAB_REVIEW_10',
    title: 'Vững Vàng Từ Vựng',
    description: 'Ôn tập 10 từ vựng để không bao giờ quên.',
    icon: 'Layers',
    metric: 'VOCAB_REVIEWS',
    target: 10,
    rewardXP: 15,
  },
  {
    code: 'ONE_PERFECT_LESSON',
    title: 'Một Bài Hoàn Hảo',
    description: 'Hoàn thành 1 bài học với điểm tuyệt đối, không sai câu nào.',
    icon: 'Star',
    metric: 'PERFECT_LESSONS',
    target: 1,
    rewardXP: 20,
  },
]
