import { AdministrativeUnit } from '../types';

/**
 * DANH MỤC 126 ĐƠN VỊ HÀNH CHÍNH CẤP XÃ (51 PHƯỜNG VÀ 75 XÃ) TP HÀ NỘI
 * Căn cứ: Nghị quyết số 1656/NQ-UBTVQH15 ngày 16/06/2025 của Ủy ban Thường vụ Quốc hội
 * về việc sắp xếp các đơn vị hành chính cấp xã của thành phố Hà Nội năm 2025.
 * Hiệu lực thi hành: Từ ngày 01 tháng 07 năm 2025.
 *
 * Ghi chú kỹ thuật:
 * - Mã ID được chuẩn hóa dạng slug ổn định độc lập: phuong-[ten] và xa-[ten].
 * - Mã 'areaCode' là mã nội bộ phân định danh mục (chưa phải mã hành chính chính thức).
 * - Không sử dụng tên quận/huyện cũ làm khóa chính.
 * - Danh mục không có tên trùng lặp, đầy đủ 51 phường và 75 xã (Tổng: 126 đơn vị).
 */
export const ADMINISTRATIVE_WARDS: AdministrativeUnit[] = [
  {
    id: 'phuong-hoan-kiem',
    name: 'Hoàn Kiếm',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 5,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P001 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-cua-nam',
    name: 'Cửa Nam',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P002 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-ba-dinh',
    name: 'Ba Đình',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 4,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P003 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-ngoc-ha',
    name: 'Ngọc Hà',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P004 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-giang-vo',
    name: 'Giảng Võ',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P005 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-hai-ba-trung',
    name: 'Hai Bà Trưng',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 4,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P006 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-vinh-tuy',
    name: 'Vĩnh Tuy',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P007 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-bach-mai',
    name: 'Bạch Mai',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P008 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-dong-da',
    name: 'Đống Đa',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 4,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P009 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-kim-lien',
    name: 'Kim Liên',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P010 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-van-mieu-quoc-tu-giam',
    name: 'Văn Miếu - Quốc Tử Giám',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P011 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-lang',
    name: 'Láng',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P012 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-o-cho-dua',
    name: 'Ô Chợ Dừa',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P013 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-hong-ha',
    name: 'Hồng Hà',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P014 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-linh-nam',
    name: 'Lĩnh Nam',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P015 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-hoang-mai',
    name: 'Hoàng Mai',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P016 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-vinh-hung',
    name: 'Vĩnh Hưng',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P017 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-tuong-mai',
    name: 'Tương Mai',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P018 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-dinh-cong',
    name: 'Định Công',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P019 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-hoang-liet',
    name: 'Hoàng Liệt',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P020 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-yen-so',
    name: 'Yên Sở',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P021 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-thanh-xuan',
    name: 'Thanh Xuân',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P022 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-khuong-dinh',
    name: 'Khương Đình',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P023 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-phuong-liet',
    name: 'Phương Liệt',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P024 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-cau-giay',
    name: 'Cầu Giấy',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P025 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-nghia-do',
    name: 'Nghĩa Đô',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P026 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-yen-hoa',
    name: 'Yên Hòa',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P027 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-tay-ho',
    name: 'Tây Hồ',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P028 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-phu-thuong',
    name: 'Phú Thượng',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P029 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-tay-tuu',
    name: 'Tây Tựu',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P030 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-phu-dien',
    name: 'Phú Diễn',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P031 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-xuan-dinh',
    name: 'Xuân Đỉnh',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P032 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-dong-ngac',
    name: 'Đông Ngạc',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P033 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-thuong-cat',
    name: 'Thượng Cát',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P034 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-tu-liem',
    name: 'Từ Liêm',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P035 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-xuan-phuong',
    name: 'Xuân Phương',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P036 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-tay-mo',
    name: 'Tây Mỗ',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P037 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-dai-mo',
    name: 'Đại Mỗ',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P038 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-long-bien',
    name: 'Long Biên',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P039 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-bo-de',
    name: 'Bồ Đề',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P040 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-viet-hung',
    name: 'Việt Hưng',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P041 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-phuc-loi',
    name: 'Phúc Lợi',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P042 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-ha-dong',
    name: 'Hà Đông',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 4,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P043 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-duong-noi',
    name: 'Dương Nội',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P044 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-yen-nghia',
    name: 'Yên Nghĩa',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P045 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-phu-luong',
    name: 'Phú Lương',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P046 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-kien-hung',
    name: 'Kiến Hưng',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P047 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-thanh-liet',
    name: 'Thanh Liệt',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P048 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-chuong-my',
    name: 'Chương Mỹ',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P049 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-son-tay',
    name: 'Sơn Tây',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P050 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'phuong-tung-thien',
    name: 'Tùng Thiện',
    unitType: 'Phường',
    category: 'phuong',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-P051 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-thanh-tri',
    name: 'Thanh Trì',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X052 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-dai-thanh',
    name: 'Đại Thanh',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X053 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-nam-phu',
    name: 'Nam Phù',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X054 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-ngoc-hoi',
    name: 'Ngọc Hồi',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X055 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-thuong-phuc',
    name: 'Thượng Phúc',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X056 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-thuong-tin',
    name: 'Thường Tín',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X057 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-chuong-duong',
    name: 'Chương Dương',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X058 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-hong-van',
    name: 'Hồng Vân',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X059 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-phu-xuyen',
    name: 'Phú Xuyên',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X060 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-phuong-duc',
    name: 'Phượng Dực',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X061 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-chuyen-my',
    name: 'Chuyên Mỹ',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X062 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-dai-xuyen',
    name: 'Đại Xuyên',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X063 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-thanh-oai',
    name: 'Thanh Oai',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X064 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-binh-minh',
    name: 'Bình Minh',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X065 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-tam-hung',
    name: 'Tam Hưng',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X066 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-dan-hoa',
    name: 'Dân Hòa',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X067 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-van-dinh',
    name: 'Vân Đình',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X068 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-ung-thien',
    name: 'Ứng Thiên',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X069 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-hoa-xa',
    name: 'Hòa Xá',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X070 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-ung-hoa',
    name: 'Ứng Hòa',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X071 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-my-duc',
    name: 'Mỹ Đức',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X072 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-hong-son',
    name: 'Hồng Sơn',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X073 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-phuc-son',
    name: 'Phúc Sơn',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X074 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-huong-son',
    name: 'Hương Sơn',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X075 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-phu-nghia',
    name: 'Phú Nghĩa',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X076 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-xuan-mai',
    name: 'Xuân Mai',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X077 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-tran-phu',
    name: 'Trần Phú',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X078 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-hoa-phu',
    name: 'Hòa Phú',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X079 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-quang-bi',
    name: 'Quảng Bị',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X080 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-minh-chau',
    name: 'Minh Châu',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X081 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-quang-oai',
    name: 'Quảng Oai',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X082 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-vat-lai',
    name: 'Vật Lại',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X083 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-co-do',
    name: 'Cổ Đô',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X084 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-bat-bat',
    name: 'Bất Bạt',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X085 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-suoi-hai',
    name: 'Suối Hai',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X086 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-ba-vi',
    name: 'Ba Vì',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 3,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X087 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-yen-bai',
    name: 'Yên Bài',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X088 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-doai-phuong',
    name: 'Đoài Phương',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X089 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-phuc-tho',
    name: 'Phúc Thọ',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X090 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-phuc-loc',
    name: 'Phúc Lộc',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X091 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-hat-mon',
    name: 'Hát Môn',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X092 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-thach-that',
    name: 'Thạch Thất',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X093 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-ha-bang',
    name: 'Hạ Bằng',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X094 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-tay-phuong',
    name: 'Tây Phương',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X095 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-hoa-lac',
    name: 'Hòa Lạc',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X096 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-yen-xuan',
    name: 'Yên Xuân',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X097 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-quoc-oai',
    name: 'Quốc Oai',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X098 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-hung-dao',
    name: 'Hưng Đạo',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X099 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-kieu-phu',
    name: 'Kiều Phú',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X100 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-phu-cat',
    name: 'Phú Cát',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X101 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-hoai-duc',
    name: 'Hoài Đức',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X102 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-duong-hoa',
    name: 'Dương Hòa',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X103 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-son-dong',
    name: 'Sơn Đồng',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X104 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-an-khanh',
    name: 'An Khánh',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X105 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-dan-phuong',
    name: 'Đan Phượng',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X106 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-o-dien',
    name: 'Ô Diên',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X107 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-lien-minh',
    name: 'Liên Minh',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X108 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-gia-lam',
    name: 'Gia Lâm',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X109 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-thuan-an',
    name: 'Thuận An',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X110 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-bat-trang',
    name: 'Bát Tràng',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X111 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-phu-dong',
    name: 'Phù Đổng',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X112 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-thu-lam',
    name: 'Thư Lâm',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X113 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-dong-anh',
    name: 'Đông Anh',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 3,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X114 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-phuc-thinh',
    name: 'Phúc Thịnh',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X115 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-thien-loc',
    name: 'Thiên Lộc',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X116 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-vinh-thanh',
    name: 'Vĩnh Thanh',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X117 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-me-linh',
    name: 'Mê Linh',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X118 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-yen-lang',
    name: 'Yên Lãng',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X119 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-tien-thang',
    name: 'Tiến Thắng',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X120 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-quang-minh',
    name: 'Quang Minh',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X121 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-soc-son',
    name: 'Sóc Sơn',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 3,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X122 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-da-phuc',
    name: 'Đa Phúc',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X123 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-noi-bai',
    name: 'Nội Bài',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X124 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-trung-gia',
    name: 'Trung Giã',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X125 (Mã nội bộ chuẩn hóa)'
  },
  {
    id: 'xa-kim-anh',
    name: 'Kim Anh',
    unitType: 'Xã',
    category: 'xa',
    district: 'TP Hà Nội (NQ 1656/NQ-UBTVQH15)',
    memberCount: 0,
    statusNote: 'Nghị quyết 1656/NQ-UBTVQH15 (Chính thức từ 01/07/2025)',
    areaCode: 'HN2025-X126 (Mã nội bộ chuẩn hóa)'
  },
];

/**
 * LỚP TƯƠNG THÍCH BẢO TOÀN DỮ LIỆU (LEGACY COMPATIBILITY LAYER)
 * Lưu giữ 22 địa bàn minh họa giai đoạn trước sắp xếp để bảo đảm:
 * 1. Các hồ sơ hội viên mẫu cũ (truy cập bằng ID hoặc URL cũ) không bị lỗi hoặc biến mất.
 * 2. Không tự động suy diễn gán hồ sơ cũ sang địa bàn mới khi chưa có phân bổ chính thức từ Hội.
 */
export const LEGACY_ADMINISTRATIVE_WARDS: AdministrativeUnit[] = [
  {
    id: 'bd-kim-ma',
    name: 'Kim Mã',
    unitType: 'Phường',
    district: 'Quận Ba Đình (Địa bàn cũ trước sắp xếp)',
    memberCount: 5,
    statusNote: 'Địa bàn cũ trước sắp xếp 2025 – Hồ sơ mẫu đang chờ đối chiếu phân bổ mới',
    areaCode: 'HN-01-KM',
    isLegacy: true
  },
  {
    id: 'bd-giang-vo',
    name: 'Giảng Võ',
    unitType: 'Phường',
    district: 'Quận Ba Đình (Địa bàn cũ trước sắp xếp)',
    memberCount: 7,
    statusNote: 'Địa bàn cũ trước sắp xếp 2025 – Hồ sơ mẫu đang chờ đối chiếu phân bổ mới',
    areaCode: 'HN-01-GV',
    isLegacy: true
  },
  {
    id: 'bd-doi-can',
    name: 'Đội Cấn',
    unitType: 'Phường',
    district: 'Quận Ba Đình (Địa bàn cũ trước sắp xếp)',
    memberCount: 6,
    statusNote: 'Địa bàn cũ trước sắp xếp 2025 – Hồ sơ mẫu đang chờ đối chiếu phân bổ mới',
    areaCode: 'HN-01-DC',
    isLegacy: true
  },
  {
    id: 'bd-phuc-xa',
    name: 'Phúc Xá',
    unitType: 'Phường',
    district: 'Quận Ba Đình (Địa bàn cũ trước sắp xếp)',
    memberCount: 5,
    statusNote: 'Địa bàn cũ trước sắp xếp 2025 – Hồ sơ mẫu đang chờ đối chiếu phân bổ mới',
    areaCode: 'HN-01-PX',
    isLegacy: true
  },
  {
    id: 'hk-hang-ma',
    name: 'Hàng Mã',
    unitType: 'Phường',
    district: 'Quận Hoàn Kiếm (Địa bàn cũ trước sắp xếp)',
    memberCount: 2,
    statusNote: 'Địa bàn cũ trước sắp xếp 2025 – Hồ sơ mẫu đang chờ đối chiếu phân bổ mới',
    areaCode: 'HN-02-HM',
    isLegacy: true
  },
  {
    id: 'hk-trang-tien',
    name: 'Tràng Tiền',
    unitType: 'Phường',
    district: 'Quận Hoàn Kiếm (Địa bàn cũ trước sắp xếp)',
    memberCount: 5,
    statusNote: 'Địa bàn cũ trước sắp xếp 2025 – Hồ sơ mẫu đang chờ đối chiếu phân bổ mới',
    areaCode: 'HN-02-TT',
    isLegacy: true
  },
  {
    id: 'hk-cua-nam',
    name: 'Cửa Nam',
    unitType: 'Phường',
    district: 'Quận Hoàn Kiếm (Địa bàn cũ trước sắp xếp)',
    memberCount: 7,
    statusNote: 'Địa bàn cũ trước sắp xếp 2025 – Hồ sơ mẫu đang chờ đối chiếu phân bổ mới',
    areaCode: 'HN-02-CN',
    isLegacy: true
  },
  {
    id: 'hk-dong-xuan',
    name: 'Đồng Xuân',
    unitType: 'Phường',
    district: 'Quận Hoàn Kiếm (Địa bàn cũ trước sắp xếp)',
    memberCount: 6,
    statusNote: 'Địa bàn cũ trước sắp xếp 2025 – Hồ sơ mẫu đang chờ đối chiếu phân bổ mới',
    areaCode: 'HN-02-DX',
    isLegacy: true
  },
  {
    id: 'dd-van-mieu',
    name: 'Văn Miếu',
    unitType: 'Phường',
    district: 'Quận Đống Đa (Địa bàn cũ trước sắp xếp)',
    memberCount: 1,
    statusNote: 'Địa bàn cũ trước sắp xếp 2025 – Hồ sơ mẫu đang chờ đối chiếu phân bổ mới',
    areaCode: 'HN-03-VM',
    isLegacy: true
  },
  {
    id: 'dd-khuong-thuong',
    name: 'Khương Thượng',
    unitType: 'Phường',
    district: 'Quận Đống Đa (Địa bàn cũ trước sắp xếp)',
    memberCount: 7,
    statusNote: 'Địa bàn cũ trước sắp xếp 2025 – Hồ sơ mẫu đang chờ đối chiếu phân bổ mới',
    areaCode: 'HN-03-KT',
    isLegacy: true
  },
  {
    id: 'dd-phuong-lien',
    name: 'Phương Liên',
    unitType: 'Phường',
    district: 'Quận Đống Đa (Địa bàn cũ trước sắp xếp)',
    memberCount: 6,
    statusNote: 'Địa bàn cũ trước sắp xếp 2025 – Hồ sơ mẫu đang chờ đối chiếu phân bổ mới',
    areaCode: 'HN-03-PL',
    isLegacy: true
  },
  {
    id: 'hbt-bach-mai',
    name: 'Bạch Mai',
    unitType: 'Phường',
    district: 'Quận Hai Bà Trưng (Địa bàn cũ trước sắp xếp)',
    memberCount: 8,
    statusNote: 'Địa bàn cũ trước sắp xếp 2025 – Hồ sơ mẫu đang chờ đối chiếu phân bổ mới',
    areaCode: 'HN-04-BM',
    isLegacy: true
  },
  {
    id: 'hbt-minh-khai',
    name: 'Minh Khai',
    unitType: 'Phường',
    district: 'Quận Hai Bà Trưng (Địa bàn cũ trước sắp xếp)',
    memberCount: 7,
    statusNote: 'Địa bàn cũ trước sắp xếp 2025 – Hồ sơ mẫu đang chờ đối chiếu phân bổ mới',
    areaCode: 'HN-04-MK',
    isLegacy: true
  },
  {
    id: 'cg-dich-vong-hau',
    name: 'Dịch Vọng Hậu',
    unitType: 'Phường',
    district: 'Quận Cầu Giấy (Địa bàn cũ trước sắp xếp)',
    memberCount: 6,
    statusNote: 'Địa bàn cũ trước sắp xếp 2025 – Hồ sơ mẫu đang chờ đối chiếu phân bổ mới',
    areaCode: 'HN-05-DV',
    isLegacy: true
  },
  {
    id: 'cg-nghia-tan',
    name: 'Nghĩa Tân',
    unitType: 'Phường',
    district: 'Quận Cầu Giấy (Địa bàn cũ trước sắp xếp)',
    memberCount: 8,
    statusNote: 'Địa bàn cũ trước sắp xếp 2025 – Hồ sơ mẫu đang chờ đối chiếu phân bổ mới',
    areaCode: 'HN-05-NT',
    isLegacy: true
  },
  {
    id: 'gl-bat-trang',
    name: 'Bát Tràng',
    unitType: 'Xã',
    district: 'Huyện Gia Lâm (Địa bàn cũ trước sắp xếp)',
    memberCount: 1,
    statusNote: 'Địa bàn cũ trước sắp xếp 2025 – Hồ sơ mẫu đang chờ đối chiếu phân bổ mới',
    areaCode: 'HN-21-BT',
    isLegacy: true
  },
  {
    id: 'gl-phu-dong',
    name: 'Phù Đổng',
    unitType: 'Xã',
    district: 'Huyện Gia Lâm (Địa bàn cũ trước sắp xếp)',
    memberCount: 6,
    statusNote: 'Địa bàn cũ trước sắp xếp 2025 – Hồ sơ mẫu đang chờ đối chiếu phân bổ mới',
    areaCode: 'HN-21-PD',
    isLegacy: true
  },
  {
    id: 'gl-trau-quy',
    name: 'Trâu Quỳ',
    unitType: 'Thị trấn',
    district: 'Huyện Gia Lâm (Địa bàn cũ trước sắp xếp)',
    memberCount: 8,
    statusNote: 'Địa bàn cũ trước sắp xếp 2025 – Hồ sơ mẫu đang chờ đối chiếu phân bổ mới',
    areaCode: 'HN-21-TQ',
    isLegacy: true
  },
  {
    id: 'da-co-loa',
    name: 'Cổ Loa',
    unitType: 'Xã',
    district: 'Huyện Đông Anh (Địa bàn cũ trước sắp xếp)',
    memberCount: 7,
    statusNote: 'Địa bàn cũ trước sắp xếp 2025 – Hồ sơ mẫu đang chờ đối chiếu phân bổ mới',
    areaCode: 'HN-22-CL',
    isLegacy: true
  },
  {
    id: 'da-uy-no',
    name: 'Uy Nỗ',
    unitType: 'Xã',
    district: 'Huyện Đông Anh (Địa bàn cũ trước sắp xếp)',
    memberCount: 6,
    statusNote: 'Địa bàn cũ trước sắp xếp 2025 – Hồ sơ mẫu đang chờ đối chiếu phân bổ mới',
    areaCode: 'HN-22-UN',
    isLegacy: true
  },
  {
    id: 'st-quang-trung',
    name: 'Quang Trung',
    unitType: 'Phường',
    district: 'Thị xã Sơn Tây (Địa bàn cũ trước sắp xếp)',
    memberCount: 6,
    statusNote: 'Địa bàn cũ trước sắp xếp 2025 – Hồ sơ mẫu đang chờ đối chiếu phân bổ mới',
    areaCode: 'HN-30-QT',
    isLegacy: true
  },
  {
    id: 'st-duong-lam',
    name: 'Đường Lâm',
    unitType: 'Xã',
    district: 'Thị xã Sơn Tây (Địa bàn cũ trước sắp xếp)',
    memberCount: 5,
    statusNote: 'Địa bàn cũ trước sắp xếp 2025 – Hồ sơ mẫu đang chờ đối chiếu phân bổ mới',
    areaCode: 'HN-30-DL',
    isLegacy: true
  },
];

/**
 * Tra cứu thông tin địa bàn theo ID (hỗ trợ cả 126 đơn vị mới và lớp tương thích địa bàn cũ)
 */
export function getWardById(wardId: string): AdministrativeUnit | undefined {
  const current = ADMINISTRATIVE_WARDS.find((w) => w.id === wardId);
  if (current) return current;
  return LEGACY_ADMINISTRATIVE_WARDS.find((w) => w.id === wardId);
}

/**
 * Thống kê số lượng đơn vị hành chính cấp xã chuẩn hóa theo Nghị quyết 1656
 */
export function getWardCounts() {
  const total = ADMINISTRATIVE_WARDS.length;
  const phuong = ADMINISTRATIVE_WARDS.filter((w) => w.unitType === 'Phường').length;
  const xa = ADMINISTRATIVE_WARDS.filter((w) => w.unitType === 'Xã').length;
  return { total, phuong, xa };
}
