/**
 * Định nghĩa kiểu dữ liệu cho Chuyên mục và Bài viết Cổng thông tin Hội Cựu TNXP TP Hà Nội
 */

export type NewsCategorySlug = 
  | 'gioi-thieu'
  | 'hoat-dong-hoi'
  | 'tin-moi'
  | 'van-ban-phap-luat'
  | 'trang-tho-ca'
  | 'ky-uc-tnxp'
  | 'guong-sang'
  | 'song-khoe';

export interface NewsCategory {
  id: NewsCategorySlug;
  name: string;
  description: string;
  iconName?: string;
}

export interface NewsArticle {
  id: string;               // slug duy nhất, ví dụ: 'dai-hoi-thi-dua-yeu-nuoc'
  title: string;            // Tiêu đề bài viết
  category: string;         // Tên chuyên mục hiển thị (ví dụ: 'Hoạt động Hội')
  categoryId: NewsCategorySlug; // Mã chuyên mục
  publishDate: string;      // Ngày đăng minh họa (ví dụ: '22/10/2026')
  summary: string;          // Đoạn tóm tắt / trích dẫn mở đầu
  content: string[];        // Các đoạn văn nội dung chi tiết
  author?: string;          // Tác giả / Nguồn tin minh họa
  imageUrl?: string;        // Ảnh minh họa hoặc placeholder
  isFeatured?: boolean;     // Bài viết tiêu điểm nổi bật trang chủ
  readTime?: string;        // Thời gian đọc ước tính (ví dụ: '4 phút')
}
