// Định nghĩa các kiểu dữ liệu dùng chung trong hệ thống CTNXPTPHN

export interface NavItem {
  label: string;
  path: string;
  iconName?: string;
  description?: string;
}

export interface NewsArticleDemo {
  id: string;
  title: string;
  summary: string;
  publishDate: string;
  category: string;
  tag?: string;
}

/**
 * Kiểu đơn vị hành chính cấp xã/phường/thị trấn
 */
export type UnitType = 'Phường' | 'Xã' | 'Thị trấn';

/**
 * Đơn vị hành chính cấp xã (Phường / Xã / Thị trấn)
 */
export interface AdministrativeUnit {
  id: string;             // Ví dụ: 'bd-kim-ma'
  name: string;           // Ví dụ: 'Kim Mã'
  unitType: UnitType;     // 'Phường' | 'Xã' | 'Thị trấn'
  district: string;       // Ví dụ: 'Quận Ba Đình'
  memberCount: number;    // Số hội viên mẫu giả lập
  statusNote?: string;    // Ghi chú trạng thái (ví dụ: 'Đang chờ đối chiếu chuẩn hóa')
  areaCode?: string;      // Mã địa bàn minh họa
}

/**
 * Thông tin chế độ chính sách (giả lập phục vụ demo)
 */
export interface PolicyInfo {
  policyCategory: string; // Tên diện chính sách (ví dụ: Quyết định 40/2011/QĐ-TTg)
  benefitStatus: string;  // Tình trạng hưởng chế độ
  insuranceStatus: string;// Thẻ Bảo hiểm y tế
  note: string;           // Khẳng định dữ liệu giả lập
}

/**
 * Hồ sơ hội viên chi tiết
 */
export interface MemberProfile {
  id: string;             // Mã định danh nội bộ (slug), ví dụ: 'hv-bd-01'
  memberCode: string;     // Mã số hội viên giả lập, ví dụ: 'HN-BD-0012'
  fullName: string;       // Họ và tên giả lập
  avatarUrl?: string;     // Ảnh đại diện minh họa
  wardId: string;         // ID phường/xã trực thuộc
  wardName: string;       // Tên phường/xã
  unitType: UnitType;     // Phường | Xã | Thị trấn
  districtName: string;   // Quận / Huyện / Thị xã
  branchName: string;     // Chi hội trực thuộc (ví dụ: 'Chi hội 3')
  positionInAssoc: string;// Chức vụ trong Hội (Hội viên, Chi hội phó, v.v.)
  joinDate: string;       // Ngày vào Hội

  // 1. Thông tin cá nhân
  birthDate: string;      // Ngày tháng năm sinh
  gender: 'Nam' | 'Nữ';   // Giới tính
  hometown: string;       // Quê quán
  currentResidence: string;// Nơi cư trú hiện nay

  // 2. Quá trình TNXP
  tnxpPeriod: string;     // Thời gian tham gia TNXP (ví dụ: '1967 - 1973')
  tnxpUnit: string;       // Đơn vị TNXP (Đại đội, Đội, Tổng đội)
  tnxpLocation: string;   // Địa bàn / Tuyến đường hoạt động
  tnxpMission: string;    // Nhiệm vụ đảm nhiệm trong thời gian TNXP

  // 3. Quá trình công tác và trình độ
  postTnxpCareer: string; // Quá trình công tác sau khi hoàn thành nhiệm vụ TNXP
  education: string;      // Trình độ học vấn / chuyên môn

  // 4. Khen thưởng, danh hiệu
  awards: string[];       // Danh sách huân, huy chương, kỷ niệm chương, bằng khen

  // 5. Thông tin chế độ chính sách
  policyInfo: PolicyInfo;
}
