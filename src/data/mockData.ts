import { NavItem, NewsArticleDemo } from '../types';

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    label: 'Trang chủ',
    path: '/',
    description: 'Trang thông tin chung của Hội'
  },
  {
    label: 'Tin tức',
    path: '/tin-tuc',
    description: 'Tin tức hoạt động phong trào và thông báo'
  },
  {
    label: 'Thông tin hội viên',
    path: '/hoi-vien',
    description: 'Tra cứu và hướng dẫn quản lý hội viên'
  }
];

export const DEMO_NEWS_ITEMS: NewsArticleDemo[] = [
  {
    id: 'news-1',
    title: 'Hội Cựu TNXP TP Hà Nội đẩy mạnh phong trào "Nghĩa tình đồng đội"',
    summary: 'Tổng kết các hoạt động chăm lo đời sống vật chất, tinh thần cho cựu cán bộ, đội viên TNXP Thủ đô có hoàn cảnh khó khăn.',
    publishDate: '20/10/2026',
    category: 'Hoạt động Hội',
    tag: 'Nổi bật'
  },
  {
    id: 'news-2',
    title: 'Kỷ niệm ngày truyền thống Lực lượng Thanh niên xung phong Việt Nam',
    summary: 'Gặp mặt truyền thống, ôn lại chặng đường lịch sử hào hùng và giao lưu thế hệ trẻ với các nhân chứng lịch sử TNXP.',
    publishDate: '15/10/2026',
    category: 'Truyền thống'
  },
  {
    id: 'news-3',
    title: 'Thông báo về việc rà soát và chuẩn hóa dữ liệu hội viên các cấp',
    summary: 'Hướng dẫn các Quận, Huyện hội phối hợp triển khai thu thập và cập nhật thông tin hội viên theo danh mục mới.',
    publishDate: '10/10/2026',
    category: 'Thông báo'
  }
];
