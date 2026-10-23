import { AdministrativeUnit } from '../types';

/**
 * Danh mục địa bàn hành chính cấp xã/phường/thị trấn minh họa
 * Dựa trên các đơn vị hành chính xác thực thuộc TP Hà Nội sau sắp xếp giai đoạn 2023 - 2025.
 * 
 * LƯU Ý THEO YÊU CẦU:
 * Đây là tập hợp địa bàn đại diện minh họa có tên xác thực,
 * hiện đang chờ đối chiếu chuẩn hóa với danh mục chính thức đầy đủ của Thành hội.
 */
export const ADMINISTRATIVE_WARDS: AdministrativeUnit[] = [
  // Quận Ba Đình
  {
    id: 'bd-kim-ma',
    name: 'Kim Mã',
    unitType: 'Phường',
    district: 'Quận Ba Đình',
    memberCount: 8,
    statusNote: 'Đang chờ đối chiếu chuẩn hóa',
    areaCode: 'HN-01-KM'
  },
  {
    id: 'bd-giang-vo',
    name: 'Giảng Võ',
    unitType: 'Phường',
    district: 'Quận Ba Đình',
    memberCount: 7,
    statusNote: 'Đang chờ đối chiếu chuẩn hóa',
    areaCode: 'HN-01-GV'
  },
  {
    id: 'bd-doi-can',
    name: 'Đội Cấn',
    unitType: 'Phường',
    district: 'Quận Ba Đình',
    memberCount: 6,
    statusNote: 'Đang chờ đối chiếu chuẩn hóa',
    areaCode: 'HN-01-DC'
  },
  {
    id: 'bd-phuc-xa',
    name: 'Phúc Xá',
    unitType: 'Phường',
    district: 'Quận Ba Đình',
    memberCount: 5,
    statusNote: 'Đang chờ đối chiếu chuẩn hóa',
    areaCode: 'HN-01-PX'
  },

  // Quận Hoàn Kiếm
  {
    id: 'hk-hang-ma',
    name: 'Hàng Mã',
    unitType: 'Phường',
    district: 'Quận Hoàn Kiếm',
    memberCount: 6,
    statusNote: 'Đang chờ đối chiếu chuẩn hóa',
    areaCode: 'HN-02-HM'
  },
  {
    id: 'hk-trang-tien',
    name: 'Tràng Tiền',
    unitType: 'Phường',
    district: 'Quận Hoàn Kiếm',
    memberCount: 5,
    statusNote: 'Đang chờ đối chiếu chuẩn hóa',
    areaCode: 'HN-02-TT'
  },
  {
    id: 'hk-cua-nam',
    name: 'Cửa Nam',
    unitType: 'Phường',
    district: 'Quận Hoàn Kiếm',
    memberCount: 7,
    statusNote: 'Đang chờ đối chiếu chuẩn hóa',
    areaCode: 'HN-02-CN'
  },
  {
    id: 'hk-dong-xuan',
    name: 'Đồng Xuân',
    unitType: 'Phường',
    district: 'Quận Hoàn Kiếm',
    memberCount: 6,
    statusNote: 'Đang chờ đối chiếu chuẩn hóa',
    areaCode: 'HN-02-DX'
  },

  // Quận Đống Đa
  {
    id: 'dd-van-mieu',
    name: 'Văn Miếu',
    unitType: 'Phường',
    district: 'Quận Đống Đa',
    memberCount: 8,
    statusNote: 'Đang chờ đối chiếu chuẩn hóa',
    areaCode: 'HN-03-VM'
  },
  {
    id: 'dd-khuong-thuong',
    name: 'Khương Thượng',
    unitType: 'Phường',
    district: 'Quận Đống Đa',
    memberCount: 7,
    statusNote: 'Đang chờ đối chiếu chuẩn hóa',
    areaCode: 'HN-03-KT'
  },
  {
    id: 'dd-phuong-lien',
    name: 'Phương Liên',
    unitType: 'Phường',
    district: 'Quận Đống Đa',
    memberCount: 6,
    statusNote: 'Đang chờ đối chiếu chuẩn hóa',
    areaCode: 'HN-03-PL'
  },

  // Quận Hai Bà Trưng
  {
    id: 'hbt-bach-mai',
    name: 'Bạch Mai',
    unitType: 'Phường',
    district: 'Quận Hai Bà Trưng',
    memberCount: 8,
    statusNote: 'Đang chờ đối chiếu chuẩn hóa',
    areaCode: 'HN-04-BM'
  },
  {
    id: 'hbt-minh-khai',
    name: 'Minh Khai',
    unitType: 'Phường',
    district: 'Quận Hai Bà Trưng',
    memberCount: 7,
    statusNote: 'Đang chờ đối chiếu chuẩn hóa',
    areaCode: 'HN-04-MK'
  },

  // Quận Cầu Giấy
  {
    id: 'cg-dich-vong-hau',
    name: 'Dịch Vọng Hậu',
    unitType: 'Phường',
    district: 'Quận Cầu Giấy',
    memberCount: 6,
    statusNote: 'Đang chờ đối chiếu chuẩn hóa',
    areaCode: 'HN-05-DV'
  },
  {
    id: 'cg-nghia-tan',
    name: 'Nghĩa Tân',
    unitType: 'Phường',
    district: 'Quận Cầu Giấy',
    memberCount: 8,
    statusNote: 'Đang chờ đối chiếu chuẩn hóa',
    areaCode: 'HN-05-NT'
  },

  // Huyện Gia Lâm
  {
    id: 'gl-bat-trang',
    name: 'Bát Tràng',
    unitType: 'Xã',
    district: 'Huyện Gia Lâm',
    memberCount: 7,
    statusNote: 'Đang chờ đối chiếu chuẩn hóa',
    areaCode: 'HN-21-BT'
  },
  {
    id: 'gl-phu-dong',
    name: 'Phù Đổng',
    unitType: 'Xã',
    district: 'Huyện Gia Lâm',
    memberCount: 6,
    statusNote: 'Đang chờ đối chiếu chuẩn hóa',
    areaCode: 'HN-21-PD'
  },
  {
    id: 'gl-trau-quy',
    name: 'Trâu Quỳ',
    unitType: 'Thị trấn',
    district: 'Huyện Gia Lâm',
    memberCount: 8,
    statusNote: 'Đang chờ đối chiếu chuẩn hóa',
    areaCode: 'HN-21-TQ'
  },

  // Huyện Đông Anh
  {
    id: 'da-co-loa',
    name: 'Cổ Loa',
    unitType: 'Xã',
    district: 'Huyện Đông Anh',
    memberCount: 7,
    statusNote: 'Đang chờ đối chiếu chuẩn hóa',
    areaCode: 'HN-22-CL'
  },
  {
    id: 'da-uy-no',
    name: 'Uy Nỗ',
    unitType: 'Xã',
    district: 'Huyện Đông Anh',
    memberCount: 6,
    statusNote: 'Đang chờ đối chiếu chuẩn hóa',
    areaCode: 'HN-22-UN'
  },

  // Thị xã Sơn Tây
  {
    id: 'st-quang-trung',
    name: 'Quang Trung',
    unitType: 'Phường',
    district: 'Thị xã Sơn Tây',
    memberCount: 6,
    statusNote: 'Đang chờ đối chiếu chuẩn hóa',
    areaCode: 'HN-30-QT'
  },
  {
    id: 'st-duong-lam',
    name: 'Đường Lâm',
    unitType: 'Xã',
    district: 'Thị xã Sơn Tây',
    memberCount: 5,
    statusNote: 'Đang chờ đối chiếu chuẩn hóa',
    areaCode: 'HN-30-DL'
  }
];

/**
 * Lấy danh sách tất cả các quận/huyện duy nhất để lọc
 */
export const DISTRICT_LIST: string[] = Array.from(
  new Set(ADMINISTRATIVE_WARDS.map((w) => w.district))
);

export function getWardById(wardId: string): AdministrativeUnit | undefined {
  return ADMINISTRATIVE_WARDS.find((w) => w.id === wardId);
}
