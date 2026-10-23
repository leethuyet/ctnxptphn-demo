/**
 * Tiện ích hỗ trợ tìm kiếm tiếng Việt không phân biệt dấu và chữ hoa/thường
 */

export function removeVietnameseAccents(str: string): string {
  if (!str) return '';
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim();
}

/**
 * Kiểm tra xem chuỗi text có chứa chuỗi tìm kiếm query không
 * Hỗ trợ: 'Kim Mã' tìm được bằng 'kim ma', 'KIM MA', 'mã', 'ma', v.v.
 */
export function matchVietnamese(text: string, query: string): boolean {
  if (!query || !query.trim()) return true;
  const normalizedText = removeVietnameseAccents(text);
  const normalizedQuery = removeVietnameseAccents(query);
  return normalizedText.includes(normalizedQuery);
}
