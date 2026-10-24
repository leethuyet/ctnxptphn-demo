import { MemberProfile } from '../types';
import { ADMINISTRATIVE_WARDS, LEGACY_ADMINISTRATIVE_WARDS, getWardById } from './wards';

/**
 * Danh sách hội viên giả lập cho các địa bàn trọng điểm demo.
 * Toàn bộ họ tên, ngày sinh, mã thẻ, địa chỉ đều là DỮ LIỆU GIẢ LẬP MINH HỌA.
 * Tuyệt đối không sử dụng thông tin thật của bất kỳ cá nhân nào.
 */
export const CORE_MOCK_MEMBERS: MemberProfile[] = [
  // --- Phường Kim Mã (Quận Ba Đình) ---
  {
    id: 'hv-bd-km-01',
    memberCode: 'HN-BD-01001',
    fullName: 'Nguyễn Văn Bình',
    wardId: 'bd-kim-ma',
    wardName: 'Kim Mã',
    unitType: 'Phường',
    districtName: 'Quận Ba Đình',
    branchName: 'Chi hội 1 (Khu dân cư số 2)',
    positionInAssoc: 'Chi hội trưởng',
    joinDate: '15/07/2005',
    birthDate: '12/03/1948',
    gender: 'Nam',
    hometown: 'Xã Phú Cường, Sóc Sơn, TP Hà Nội',
    currentResidence: 'Số 42 ngõ 290 Kim Mã, Ba Đình, Hà Nội (địa chỉ minh họa)',
    tnxpPeriod: '1967 - 1973',
    tnxpUnit: 'Đại đội 52, Đội 25 TNXP Hà Nội chống Mỹ cứu nước',
    tnxpLocation: 'Tuyến đường 15A - Cụm phà Linh Cảm, tỉnh Hà Tĩnh',
    tnxpMission: 'Mở đường vận tải chiến lược, khắc phục hậu quả bom mìn, bảo đảm giao thông thông suốt',
    postTnxpCareer: 'Năm 1974 chuyển ngành về Công ty Cơ khí Xây dựng Hà Nội; nghỉ hưu năm 2008',
    education: '10/10 phổ thông (hệ cũ), Trung cấp Cơ khí Giao thông',
    awards: [
      'Huy chương Kháng chiến chống Mỹ hạng Nhì',
      'Huy chương Thanh niên xung phong vẻ vang',
      'Kỷ niệm chương Cựu Thanh niên xung phong Việt Nam',
      'Bằng khen Trung ương Đoàn TNCS Hồ Chí Minh (năm 2010)'
    ],
    policyInfo: {
      policyCategory: 'Hưởng chế độ theo Quyết định số 40/2011/QĐ-TTg của Thủ tướng Chính phủ',
      benefitStatus: 'Đã hoàn tất hồ sơ và nhận trợ cấp một lần theo quy định (Dữ liệu mẫu)',
      insuranceStatus: 'Đã cấp thẻ BHYT diện Cựu TNXP mã số mẫu BHYT-79-TNXP',
      note: 'Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế'
    }
  },
  {
    id: 'hv-bd-km-02',
    memberCode: 'HN-BD-01002',
    fullName: 'Trần Thị Thu Hà',
    wardId: 'bd-kim-ma',
    wardName: 'Kim Mã',
    unitType: 'Phường',
    districtName: 'Quận Ba Đình',
    branchName: 'Chi hội 2',
    positionInAssoc: 'Hội viên',
    joinDate: '20/10/2006',
    birthDate: '05/08/1951',
    gender: 'Nữ',
    hometown: 'Xã Đại Mỗ, Nam Từ Liêm, TP Hà Nội',
    currentResidence: 'Khu tập thể Dệt Kim, Kim Mã, Ba Đình, Hà Nội (địa chỉ minh họa)',
    tnxpPeriod: '1969 - 1974',
    tnxpUnit: 'Đại đội 753, Đoàn TNXP 559 Trường Sơn',
    tnxpLocation: 'Trọng điểm đường 20 Quyết Thắng, Quảng Bình',
    tnxpMission: 'Cứu thương, nuôi quân, bảo quản kho hàng trung chuyển phục vụ mặt trận phía Nam',
    postTnxpCareer: 'Chuyển ngành năm 1975 về Nhà máy Dệt kim Hà Nội, nghỉ chế độ năm 2005',
    education: 'Trung học cơ sở, Sơ cấp Y tá cứu thương',
    awards: [
      'Huy chương TNXP vẻ vang',
      'Huy hiệu Chiến sĩ Trường Sơn',
      'Kỷ niệm chương TNXP Việt Nam'
    ],
    policyInfo: {
      policyCategory: 'Chế độ trợ cấp hàng tháng diện TNXP cô đơn không nơi nương tựa (Mô phỏng)',
      benefitStatus: 'Đang hưởng trợ cấp sinh hoạt hàng tháng theo diện ưu đãi xã hội mẫu',
      insuranceStatus: 'Đã cấp thẻ BHYT miễn phí diện bảo trợ cựu TNXP',
      note: 'Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế'
    }
  },
  {
    id: 'hv-bd-km-03',
    memberCode: 'HN-BD-01003',
    fullName: 'Lê Quang Dũng',
    wardId: 'bd-kim-ma',
    wardName: 'Kim Mã',
    unitType: 'Phường',
    districtName: 'Quận Ba Đình',
    branchName: 'Chi hội 1',
    positionInAssoc: 'Chi hội phó',
    joinDate: '19/05/2007',
    birthDate: '22/11/1949',
    gender: 'Nam',
    hometown: 'Xã Cổ Bi, Gia Lâm, TP Hà Nội',
    currentResidence: 'Phố Núi Trúc, Kim Mã, Ba Đình, Hà Nội (địa chỉ minh họa)',
    tnxpPeriod: '1968 - 1975',
    tnxpUnit: 'Tổng đội TNXP giải phóng tuyến Cầu Cấm - Nghệ An',
    tnxpLocation: 'Tuyến quốc lộ 1A qua Nghệ An và Hà Tĩnh',
    tnxpMission: 'Trực chiến bảo vệ trọng điểm cầu Cầu Cấm, đảm bảo mạch máu giao thông chi viện',
    postTnxpCareer: 'Công tác tại Ty Giao thông Hà Sơn Bình, chuyển về Xí nghiệp xe buýt Hà Nội',
    education: 'Hết lớp 10, Sơ cấp Cầu đường bộ',
    awards: [
      'Huy chương Kháng chiến chống Mỹ hạng Ba',
      'Huy chương TNXP vẻ vang',
      'Kỷ niệm chương Vì thế hệ trẻ'
    ],
    policyInfo: {
      policyCategory: 'Hưởng chế độ trợ cấp một lần theo Quyết định 40/2011/QĐ-TTg',
      benefitStatus: 'Đã thanh toán chế độ theo hồ sơ lưu tại phòng LĐ-TB&XH mẫu',
      insuranceStatus: 'Thẻ BHYT cấp theo mã đối tượng người có công',
      note: 'Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế'
    }
  },
  {
    id: 'hv-bd-km-04',
    memberCode: 'HN-BD-01004',
    fullName: 'Phạm Thị Lan Hương',
    wardId: 'bd-kim-ma',
    wardName: 'Kim Mã',
    unitType: 'Phường',
    districtName: 'Quận Ba Đình',
    branchName: 'Chi hội 3',
    positionInAssoc: 'Hội viên',
    joinDate: '15/07/2008',
    birthDate: '18/02/1953',
    gender: 'Nữ',
    hometown: 'Xã Chuyên Mỹ, Phú Xuyên, TP Hà Nội',
    currentResidence: 'Số 15 ngõ Kim Mã, Ba Đình, Hà Nội (địa chỉ minh họa)',
    tnxpPeriod: '1971 - 1975',
    tnxpUnit: 'Đội TNXP Hà Nội tình nguyện tham gia xây dựng kinh tế và tuyến lửa',
    tnxpLocation: 'Tuyến đường sắt Hà Nội - Lào Cai bảo vệ vận chuyển',
    tnxpMission: 'Tu sửa đường ray ray xe lửa, bảo vệ an toàn kho trung chuyển hàng hóa viện trợ',
    postTnxpCareer: 'Công tác tại Ngành Thương nghiệp TP Hà Nội',
    education: 'Phổ thông trung học',
    awards: [
      'Kỷ niệm chương Cựu Thanh niên xung phong Việt Nam',
      'Giấy khen của Hội Cựu TNXP Quận Ba Đình'
    ],
    policyInfo: {
      policyCategory: 'Chế độ trợ cấp một lần theo quy định TNXP sau năm 1975',
      benefitStatus: 'Đã nhận trợ cấp theo quy định chính sách mẫu',
      insuranceStatus: 'BHYT tự nguyện có hỗ trợ một phần theo quy định địa phương',
      note: 'Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế'
    }
  },
  {
    id: 'hv-bd-km-05',
    memberCode: 'HN-BD-01005',
    fullName: 'Hoàng Văn Khiêm',
    wardId: 'bd-kim-ma',
    wardName: 'Kim Mã',
    unitType: 'Phường',
    districtName: 'Quận Ba Đình',
    branchName: 'Chi hội 2',
    positionInAssoc: 'Hội viên',
    joinDate: '26/03/2010',
    birthDate: '09/09/1947',
    gender: 'Nam',
    hometown: 'Xã Tân Hội, Đan Phượng, TP Hà Nội',
    currentResidence: 'Số 8 ngách 15 Kim Mã, Ba Đình, Hà Nội (địa chỉ minh họa)',
    tnxpPeriod: '1965 - 1970',
    tnxpUnit: 'Đại đội 1 Đội TNXP 25 chống Mỹ',
    tnxpLocation: 'Tuyến đường Hưng Hóa - Phù Lỗ - Việt Trì',
    tnxpMission: 'Sửa chữa cầu phà ngầm, chống chiến tranh phá hoại miền Bắc của không quân Mỹ',
    postTnxpCareer: 'Cán bộ Xí nghiệp Vận tải Thủy Hà Nội',
    education: 'Hệ 7/10 bổ túc văn hóa',
    awards: [
      'Huy chương TNXP vẻ vang',
      'Huy hiệu 50 năm tuổi Đảng'
    ],
    policyInfo: {
      policyCategory: 'Chế độ thương binh / chất độc da cam đồng thời là Cựu TNXP (Minh họa)',
      benefitStatus: 'Hưởng phụ cấp trợ cấp ưu đãi người có công',
      insuranceStatus: 'Thẻ BHYT cấp theo mã thương binh',
      note: 'Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế'
    }
  },

  // --- Phường Hàng Mã (Quận Hoàn Kiếm) ---
  {
    id: 'hv-hk-hm-01',
    memberCode: 'HN-HK-02001',
    fullName: 'Vũ Đình Toàn',
    wardId: 'hk-hang-ma',
    wardName: 'Hàng Mã',
    unitType: 'Phường',
    districtName: 'Quận Hoàn Kiếm',
    branchName: 'Chi hội Hàng Mã - Hàng Cót',
    positionInAssoc: 'Chi hội trưởng',
    joinDate: '19/08/2005',
    birthDate: '04/06/1946',
    gender: 'Nam',
    hometown: 'Phường Hàng Đào, Hoàn Kiếm, TP Hà Nội',
    currentResidence: 'Phố Hàng Mã, Hoàn Kiếm, Hà Nội (địa chỉ minh họa)',
    tnxpPeriod: '1965 - 1972',
    tnxpUnit: 'Đội TNXP Thủ đô anh hùng tham gia tuyến lửa Quân khu 4',
    tnxpLocation: 'Cung đường phà Ghép - Thanh Hóa và đường 1A',
    tnxpMission: 'San lấp hố bom, kéo phà, bảo vệ đoàn xe ra tiền tuyến',
    postTnxpCareer: 'Chuyển ngành về Sở Giao thông Công chính Hà Nội; nghỉ hưu 2006',
    education: 'Tốt nghiệp lớp 10, Cử nhân Hành chính tại chức',
    awards: [
      'Huân chương Kháng chiến chống Mỹ hạng Ba',
      'Huy chương TNXP vẻ vang',
      'Kỷ niệm chương Thanh niên xung phong'
    ],
    policyInfo: {
      policyCategory: 'Hưởng chế độ trợ cấp một lần theo Quyết định 40/2011/QĐ-TTg',
      benefitStatus: 'Đã hoàn tất hồ sơ cấp phát trợ cấp một lần mẫu',
      insuranceStatus: 'Thẻ BHYT diện hưu trí kết hợp cựu TNXP',
      note: 'Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế'
    }
  },
  {
    id: 'hv-hk-hm-02',
    memberCode: 'HN-HK-02002',
    fullName: 'Bùi Thị Bích Liên',
    wardId: 'hk-hang-ma',
    wardName: 'Hàng Mã',
    unitType: 'Phường',
    districtName: 'Quận Hoàn Kiếm',
    branchName: 'Chi hội Phùng Hưng',
    positionInAssoc: 'Hội viên',
    joinDate: '22/12/2007',
    birthDate: '14/10/1950',
    gender: 'Nữ',
    hometown: 'Xã Thanh Liệt, Thanh Trì, TP Hà Nội',
    currentResidence: 'Phố Phùng Hưng, Hàng Mã, Hoàn Kiếm, Hà Nội (địa chỉ minh họa)',
    tnxpPeriod: '1968 - 1973',
    tnxpUnit: 'Đại đội 814, Tổng đội TNXP Hải Hưng - Hà Nội chi viện',
    tnxpLocation: 'Trọng điểm Truông Bồn, Nghệ An',
    tnxpMission: 'Bảo đảm giao thông, cứu hộ xe quân sự, trực dẫn đường ban đêm bằng đuốc tiêu',
    postTnxpCareer: 'Cán bộ Công ty Bách hóa tổng hợp Hà Nội',
    education: 'Hệ 10 năm phổ thông',
    awards: [
      'Huy chương TNXP vẻ vang',
      'Kỷ niệm chương Vì sự nghiệp xây dựng Thủ đô'
    ],
    policyInfo: {
      policyCategory: 'Chế độ người hoạt động kháng chiến bị nhiễm chất độc hóa học (Giả lập)',
      benefitStatus: 'Hưởng trợ cấp hàng tháng theo diện chính sách mẫu',
      insuranceStatus: 'Thẻ BHYT cấp đầy đủ theo danh mục người có công',
      note: 'Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế'
    }
  },

  // --- Phường Văn Miếu (Quận Đống Đa) ---
  {
    id: 'hv-dd-vm-01',
    memberCode: 'HN-DD-03001',
    fullName: 'Đỗ Đức Thọ',
    wardId: 'dd-van-mieu',
    wardName: 'Văn Miếu',
    unitType: 'Phường',
    districtName: 'Quận Đống Đa',
    branchName: 'Chi hội Quốc Tử Giám - Văn Miếu',
    positionInAssoc: 'Chi hội trưởng',
    joinDate: '15/07/2005',
    birthDate: '17/04/1947',
    gender: 'Nam',
    hometown: 'Xã Thọ An, Đan Phượng, TP Hà Nội',
    currentResidence: 'Phố Quốc Tử Giám, Văn Miếu, Đống Đa, Hà Nội (địa chỉ minh họa)',
    tnxpPeriod: '1966 - 1974',
    tnxpUnit: 'Đại đội 3, Đội 25 TNXP chống Mỹ cứu nước',
    tnxpLocation: 'Trọng điểm phà Bến Thủy và Nam Đàn, Nghệ An',
    tnxpMission: 'Thông xe thông tuyến qua Bến Thủy, rà phá bom nổ chậm',
    postTnxpCareer: 'Chuyển ngành về Nhà máy Cơ khí Ô tô 1/5 Hà Nội',
    education: '10/10, Thợ bậc 5/7 Cơ khí sửa chữa ô tô',
    awards: [
      'Huy chương Kháng chiến chống Mỹ hạng Nhì',
      'Huy chương TNXP vẻ vang',
      'Kỷ niệm chương TNXP Việt Nam'
    ],
    policyInfo: {
      policyCategory: 'Chế độ theo Quyết định 40/2011/QĐ-TTg',
      benefitStatus: 'Đã hoàn tất thủ tục và hưởng trợ cấp theo quyết định',
      insuranceStatus: 'Thẻ BHYT đã cấp đầy đủ',
      note: 'Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế'
    }
  },

  // --- Xã Bát Tràng (Huyện Gia Lâm) ---
  {
    id: 'hv-gl-bt-01',
    memberCode: 'HN-GL-21001',
    fullName: 'Lê Văn Khang',
    wardId: 'gl-bat-trang',
    wardName: 'Bát Tràng',
    unitType: 'Xã',
    districtName: 'Huyện Gia Lâm',
    branchName: 'Chi hội Thôn Bát Tràng',
    positionInAssoc: 'Chi hội trưởng',
    joinDate: '27/07/2005',
    birthDate: '11/01/1949',
    gender: 'Nam',
    hometown: 'Xã Bát Tràng, Gia Lâm, TP Hà Nội',
    currentResidence: 'Thôn Giang Cao, Xã Bát Tràng, Gia Lâm, Hà Nội (địa chỉ minh họa)',
    tnxpPeriod: '1967 - 1973',
    tnxpUnit: 'Đội TNXP 25 Hà Nội',
    tnxpLocation: 'Đường sắt Yên Viên - Kép và ngã ba Đồng Mỏ',
    tnxpMission: 'Khôi phục đường ray hỏa xa phục vụ tiếp tế chiến trường',
    postTnxpCareer: 'Về địa phương tham gia Hợp tác xã Gốm sứ Bát Tràng; Trưởng ban sản xuất',
    education: 'Hết cấp 2, Nghệ nhân dân gian gốm sứ',
    awards: [
      'Huy chương TNXP vẻ vang',
      'Bằng khen Trung ương Hội Cựu TNXP Việt Nam',
      'Kỷ niệm chương Vì sự nghiệp làng nghề truyền thống'
    ],
    policyInfo: {
      policyCategory: 'Chế độ trợ cấp một lần theo Quyết định 40/2011/QĐ-TTg',
      benefitStatus: 'Đã hoàn thành chi trả trợ cấp',
      insuranceStatus: 'BHYT tự nguyện có hỗ trợ theo chính sách Cựu TNXP',
      note: 'Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế'
    }
  }
];


/**
 * Danh sách 30 hồ sơ hội viên giả lập cho 8 đơn vị hành chính mới
 * theo Nghị quyết 1656/NQ-UBTVQH15 (Hoàn thành BƯỚC 3.2C).
 * Dữ liệu phục vụ kiểm tra hiển thị giao diện, danh sách, chi tiết và in ấn hồ sơ.
 * TUYỆT ĐỐI LÀ DỮ LIỆU MINH HỌA - KHÔNG PHẢI THÔNG TIN THẬT CỦA BẤT KỲ CÁ NHÂN NÀO.
 */
export const NEW_MOCK_MEMBERS: MemberProfile[] = [
  {
    "id": "hv-phuong-hoan-kiem-01",
    "memberCode": "HN-HK-25001",
    "fullName": "Đỗ Quang Hưng",
    "wardId": "phuong-hoan-kiem",
    "wardName": "Hoàn Kiếm",
    "unitType": "Phường",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 1 (Khu vực Hàng Bạc - Hàng Gai)",
    "positionInAssoc": "Chi hội trưởng",
    "joinDate": "15/07/2005",
    "birthDate": "18/03/1948",
    "gender": "Nam",
    "hometown": "Phường Hoàn Kiếm, TP Hà Nội",
    "currentResidence": "Tổ dân phố số 2, Phường Hoàn Kiếm, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1967 - 1972",
    "tnxpUnit": "Đại đội 52, Đội 25 TNXP Hà Nội chống Mỹ cứu nước",
    "tnxpLocation": "Trọng điểm phà Linh Cảm và đường 15A, tỉnh Hà Tĩnh",
    "tnxpMission": "San lấp hố bom, ứng trực ngầm tràn, bảo đảm huyết mạch giao thông chi viện miền Nam",
    "postTnxpCareer": "Năm 1973 chuyển ngành về Công ty Thương nghiệp Hoàn Kiếm; nghỉ hưu năm 2008",
    "education": "10/10 phổ thông (hệ cũ), Trung cấp Thương mại",
    "awards": [
      "Huy chương Kháng chiến chống Mỹ hạng Nhì",
      "Huy chương Thanh niên xung phong vẻ vang",
      "Kỷ niệm chương Cựu TNXP Việt Nam",
      "Bằng khen UBND TP Hà Nội"
    ],
    "policyInfo": {
      "policyCategory": "Hưởng chế độ theo Quyết định số 40/2011/QĐ-TTg của Thủ tướng Chính phủ",
      "benefitStatus": "Đã hoàn tất hồ sơ và nhận trợ cấp một lần theo quy định (Dữ liệu mẫu)",
      "insuranceStatus": "Đã được cấp thẻ BHYT diện Cựu TNXP mã số mẫu BHYT-79-TNXP",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  },
  {
    "id": "hv-phuong-hoan-kiem-02",
    "memberCode": "HN-HK-25002",
    "fullName": "Nguyễn Thị Minh Nguyệt",
    "wardId": "phuong-hoan-kiem",
    "wardName": "Hoàn Kiếm",
    "unitType": "Phường",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 2 (Khu vực Hàng Bồ - Hàng Đào)",
    "positionInAssoc": "Chi hội phó",
    "joinDate": "20/10/2006",
    "birthDate": "25/09/1951",
    "gender": "Nữ",
    "hometown": "Phường Hoàn Kiếm, TP Hà Nội",
    "currentResidence": "Tổ dân phố số 5, Phường Hoàn Kiếm, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1969 - 1974",
    "tnxpUnit": "Đại đội 753, Đoàn 559 TNXP Trường Sơn",
    "tnxpLocation": "Tuyến đường 20 Quyết Thắng, tỉnh Quảng Bình",
    "tnxpMission": "Nuôi quân, sơ cứu thương binh và bảo vệ kho trạm trung chuyển tuyến lửa",
    "postTnxpCareer": "Năm 1975 về công tác tại Xí nghiệp Dược phẩm Hà Nội; nghỉ chế độ năm 2006",
    "education": "9/10 phổ thông, Sơ cấp Quân y dược",
    "awards": [
      "Huy chương Kháng chiến chống Mỹ hạng Ba",
      "Huy chương TNXP vẻ vang",
      "Kỷ niệm chương Cựu TNXP Việt Nam"
    ],
    "policyInfo": {
      "policyCategory": "Chế độ theo Quyết định số 40/2011/QĐ-TTg của Thủ tướng Chính phủ",
      "benefitStatus": "Đã giải quyết xong chế độ trợ cấp một lần (Dữ liệu mẫu)",
      "insuranceStatus": "Đã cấp thẻ BHYT diện ưu đãi Cựu TNXP",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  },
  {
    "id": "hv-phuong-hoan-kiem-03",
    "memberCode": "HN-HK-25003",
    "fullName": "Trần Văn Thành",
    "wardId": "phuong-hoan-kiem",
    "wardName": "Hoàn Kiếm",
    "unitType": "Phường",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 1 (Khu vực Hàng Bạc - Hàng Gai)",
    "positionInAssoc": "Hội viên",
    "joinDate": "12/03/2007",
    "birthDate": "14/11/1947",
    "gender": "Nam",
    "hometown": "Phường Hoàn Kiếm, TP Hà Nội",
    "currentResidence": "Tổ dân phố số 1, Phường Hoàn Kiếm, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1966 - 1971",
    "tnxpUnit": "Đại đội 12, Đội 25 TNXP Hà Nội",
    "tnxpLocation": "Khu vực Ngã ba Cầu Cấm, tỉnh Nghệ An",
    "tnxpMission": "Rà phá bom nổ chậm, phá đá mở đường bảo đảm giao thông thông suốt",
    "postTnxpCareer": "Về công tác tại Sở Xây dựng Hà Nội; nghỉ hưu năm 2007",
    "education": "10/10 phổ thông, Sơ cấp Cầu đường",
    "awards": [
      "Huy chương Kháng chiến chống Mỹ hạng Nhất",
      "Huy chương TNXP vẻ vang",
      "Kỷ niệm chương Vì sự nghiệp Giao thông Vận tải"
    ],
    "policyInfo": {
      "policyCategory": "Chế độ theo Quyết định 40/2011/QĐ-TTg của Thủ tướng Chính phủ",
      "benefitStatus": "Đã nhận trợ cấp một lần theo quy định (Dữ liệu mẫu)",
      "insuranceStatus": "BHYT đối tượng hưu trí và Cựu TNXP",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  },
  {
    "id": "hv-phuong-hoan-kiem-04",
    "memberCode": "HN-HK-25004",
    "fullName": "Phạm Thị Bích Liên",
    "wardId": "phuong-hoan-kiem",
    "wardName": "Hoàn Kiếm",
    "unitType": "Phường",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 3 (Khu vực Hàng Gai - Tràng Thi)",
    "positionInAssoc": "Hội viên",
    "joinDate": "19/08/2008",
    "birthDate": "08/06/1953",
    "gender": "Nữ",
    "hometown": "Phường Hoàn Kiếm, TP Hà Nội",
    "currentResidence": "Tổ dân phố số 8, Phường Hoàn Kiếm, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1971 - 1975",
    "tnxpUnit": "Đại đội 804, Tổng đội TNXP Giao thông tuyến lửa",
    "tnxpLocation": "Đường Hồ Chí Minh - đoạn qua đèo Đá Đẽo, Quảng Bình",
    "tnxpMission": "Chỉ dẫn giao thông chiến dịch, hỗ trợ đội pháo cao xạ ngụy trang trận địa",
    "postTnxpCareer": "Công tác tại Xí nghiệp In Công đoàn; nghỉ hưu năm 2008",
    "education": "10/10 phổ thông, Kỹ thuật in ấn",
    "awards": [
      "Huy chương Kháng chiến chống Mỹ hạng Ba",
      "Huy chương TNXP vẻ vang",
      "Kỷ niệm chương Cựu TNXP Việt Nam"
    ],
    "policyInfo": {
      "policyCategory": "Chế độ theo Quyết định 40/2011/QĐ-TTg của Thủ tướng Chính phủ",
      "benefitStatus": "Đã hưởng trợ cấp một lần (Dữ liệu mẫu)",
      "insuranceStatus": "Đã cấp thẻ BHYT Cựu TNXP",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  },
  {
    "id": "hv-phuong-hoan-kiem-05",
    "memberCode": "HN-HK-25005",
    "fullName": "Lê Hoàng Nam",
    "wardId": "phuong-hoan-kiem",
    "wardName": "Hoàn Kiếm",
    "unitType": "Phường",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 2 (Khu vực Hàng Bồ - Hàng Đào)",
    "positionInAssoc": "Hội viên",
    "joinDate": "26/03/2009",
    "birthDate": "03/01/1950",
    "gender": "Nam",
    "hometown": "Phường Hoàn Kiếm, TP Hà Nội",
    "currentResidence": "Tổ dân phố số 4, Phường Hoàn Kiếm, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1968 - 1973",
    "tnxpUnit": "Đại đội 35, Đội 25 TNXP Hà Nội",
    "tnxpLocation": "Tuyến quốc lộ 1A qua Phủ Lý và Ninh Bình",
    "tnxpMission": "Khắc phục hậu quả không kích, đảm bảo cầu phao đường sắt và đường bộ",
    "postTnxpCareer": "Công tác tại Công ty Xe điện Hà Nội; nghỉ chế độ năm 2010",
    "education": "Hết cấp 3, Trung cấp Kỹ thuật Điện",
    "awards": [
      "Huy chương Kháng chiến chống Mỹ hạng Nhì",
      "Huy chương TNXP vẻ vang"
    ],
    "policyInfo": {
      "policyCategory": "Chế độ theo Quyết định 40/2011/QĐ-TTg của Thủ tướng Chính phủ",
      "benefitStatus": "Đã hoàn tất hồ sơ trợ cấp (Dữ liệu mẫu)",
      "insuranceStatus": "BHYT hưu trí có quyền lợi Cựu TNXP",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  },
  {
    "id": "hv-phuong-ba-dinh-01",
    "memberCode": "HN-BD-25001",
    "fullName": "Hoàng Trung Dũng",
    "wardId": "phuong-ba-dinh",
    "wardName": "Ba Đình",
    "unitType": "Phường",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 1 (Khu vực Quán Thánh - Nguyễn Trung Trực)",
    "positionInAssoc": "Chi hội trưởng",
    "joinDate": "15/07/2005",
    "birthDate": "12/10/1946",
    "gender": "Nam",
    "hometown": "Phường Ba Đình, TP Hà Nội",
    "currentResidence": "Tổ dân phố số 3, Phường Ba Đình, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1965 - 1970",
    "tnxpUnit": "Đại đội 1, Đội TNXP chống Mỹ cứu nước Hà Nội",
    "tnxpLocation": "Trọng điểm phà Ghép và cầu Hàm Rồng, Thanh Hóa",
    "tnxpMission": "Trực chiến san lấp đường dẫn phà, bảo vệ an toàn cho các đoàn xe chi viện qua sông",
    "postTnxpCareer": "Về công tác tại Sở Giao thông Công chính Hà Nội; nghỉ hưu năm 2006",
    "education": "10/10 phổ thông, Kỹ sư Cầu đường",
    "awards": [
      "Huân chương Kháng chiến chống Mỹ hạng Ba",
      "Huy chương TNXP vẻ vang",
      "Kỷ niệm chương Cựu TNXP Việt Nam",
      "Huy hiệu 50 năm tuổi Đảng"
    ],
    "policyInfo": {
      "policyCategory": "Chế độ thương binh / người có công và Quyết định 40/2011/QĐ-TTg",
      "benefitStatus": "Đang hưởng chế độ thương tật và trợ cấp ưu đãi (Dữ liệu mẫu)",
      "insuranceStatus": "Đã cấp thẻ BHYT diện Thương binh - Cựu TNXP",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  },
  {
    "id": "hv-phuong-ba-dinh-02",
    "memberCode": "HN-BD-25002",
    "fullName": "Vũ Thị Thanh Tâm",
    "wardId": "phuong-ba-dinh",
    "wardName": "Ba Đình",
    "unitType": "Phường",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 2 (Khu vực Điện Biên - Trúc Bạch)",
    "positionInAssoc": "Chi hội phó",
    "joinDate": "19/05/2006",
    "birthDate": "04/05/1952",
    "gender": "Nữ",
    "hometown": "Phường Ba Đình, TP Hà Nội",
    "currentResidence": "Tổ dân phố số 6, Phường Ba Đình, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1970 - 1975",
    "tnxpUnit": "Đại đội N233, Đội TNXP 23 Hà Nội",
    "tnxpLocation": "Tuyến đường 12 và đèo Mụ Giạ, biên giới Việt - Lào",
    "tnxpMission": "Thông đường chiến dịch, vận chuyển lương thực vũ khí qua đèo",
    "postTnxpCareer": "Về làm việc tại Nhà máy Bánh kẹo Tràng An; nghỉ hưu năm 2007",
    "education": "10/10 phổ thông, Sơ cấp Kế toán",
    "awards": [
      "Huy chương Kháng chiến chống Mỹ hạng Ba",
      "Huy chương TNXP vẻ vang",
      "Kỷ niệm chương Cựu TNXP Việt Nam"
    ],
    "policyInfo": {
      "policyCategory": "Chế độ theo Quyết định 40/2011/QĐ-TTg của Thủ tướng Chính phủ",
      "benefitStatus": "Đã hoàn tất thủ tục trợ cấp một lần (Dữ liệu mẫu)",
      "insuranceStatus": "Đã cấp thẻ BHYT Cựu TNXP đầy đủ",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  },
  {
    "id": "hv-phuong-ba-dinh-03",
    "memberCode": "HN-BD-25003",
    "fullName": "Lương Đình Phúc",
    "wardId": "phuong-ba-dinh",
    "wardName": "Ba Đình",
    "unitType": "Phường",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 1 (Khu vực Quán Thánh - Nguyễn Trung Trực)",
    "positionInAssoc": "Hội viên",
    "joinDate": "27/07/2007",
    "birthDate": "16/08/1949",
    "gender": "Nam",
    "hometown": "Phường Ba Đình, TP Hà Nội",
    "currentResidence": "Tổ dân phố số 2, Phường Ba Đình, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1968 - 1973",
    "tnxpUnit": "Đại đội 55, Đội 25 TNXP Hà Nội",
    "tnxpLocation": "Tuyến đường 15A đoạn ngã ba Đồng Lộc, Hà Tĩnh",
    "tnxpMission": "San lấp mặt đường, rà phá bom từ trường bảo vệ đoàn xe vận tải quân sự",
    "postTnxpCareer": "Chuyển ngành về Bưu điện Trung ương Hà Nội; nghỉ hưu năm 2009",
    "education": "Hết phổ thông cấp 3, Trung cấp Bưu chính Viễn thông",
    "awards": [
      "Huy chương Kháng chiến chống Mỹ hạng Nhì",
      "Huy chương TNXP vẻ vang",
      "Kỷ niệm chương Vì sự nghiệp Thông tin Truyền thông"
    ],
    "policyInfo": {
      "policyCategory": "Chế độ theo Quyết định 40/2011/QĐ-TTg của Thủ tướng Chính phủ",
      "benefitStatus": "Đã hoàn tất chi trả trợ cấp (Dữ liệu mẫu)",
      "insuranceStatus": "BHYT hưu trí gắn quyền lợi người có công",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  },
  {
    "id": "hv-phuong-ba-dinh-04",
    "memberCode": "HN-BD-25004",
    "fullName": "Bùi Thị Ánh Tuyết",
    "wardId": "phuong-ba-dinh",
    "wardName": "Ba Đình",
    "unitType": "Phường",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 3 (Khu vực Kim Mã - Giảng Võ)",
    "positionInAssoc": "Hội viên",
    "joinDate": "15/10/2008",
    "birthDate": "30/12/1954",
    "gender": "Nữ",
    "hometown": "Phường Ba Đình, TP Hà Nội",
    "currentResidence": "Tổ dân phố số 9, Phường Ba Đình, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1972 - 1976",
    "tnxpUnit": "Đại đội 89, Tổng đội TNXP xây dựng kinh tế và hàn gắn vết thương chiến tranh",
    "tnxpLocation": "Tuyến đường sắt Thống Nhất và khu vực cầu Việt Trì",
    "tnxpMission": "Khôi phục nền đường sắt, lắp đặt tà vẹt và vận chuyển vật liệu cầu",
    "postTnxpCareer": "Về công tác tại Xí nghiệp May Thăng Long; nghỉ hưu năm 2010",
    "education": "10/10 phổ thông, Kỹ thuật may công nghiệp",
    "awards": [
      "Huy chương TNXP vẻ vang",
      "Bằng khen Đoàn TNCS Hồ Chí Minh TP Hà Nội",
      "Kỷ niệm chương Cựu TNXP Việt Nam"
    ],
    "policyInfo": {
      "policyCategory": "Chế độ theo Quyết định 40/2011/QĐ-TTg của Thủ tướng Chính phủ",
      "benefitStatus": "Đã nhận trợ cấp một lần theo quy định (Dữ liệu mẫu)",
      "insuranceStatus": "Thẻ BHYT diện Cựu TNXP",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  },
  {
    "id": "hv-phuong-dong-da-01",
    "memberCode": "HN-DD-25001",
    "fullName": "Nguyễn Văn Quang",
    "wardId": "phuong-dong-da",
    "wardName": "Đống Đa",
    "unitType": "Phường",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 1 (Khu vực Văn Miếu - Quốc Tử Giám)",
    "positionInAssoc": "Chi hội trưởng",
    "joinDate": "15/07/2005",
    "birthDate": "11/02/1947",
    "gender": "Nam",
    "hometown": "Phường Đống Đa, TP Hà Nội",
    "currentResidence": "Tổ dân phố số 2, Phường Đống Đa, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1967 - 1972",
    "tnxpUnit": "Đại đội 15, Đội 25 TNXP Hà Nội",
    "tnxpLocation": "Trọng điểm Truông Bồn, Đô Lương, tỉnh Nghệ An",
    "tnxpMission": "Bảo đảm thông tuyến đường 15A chi viện mặt trận, trực chiến cứu hộ xe pháo",
    "postTnxpCareer": "Về công tác tại Công ty Xe khách Hà Nội; nghỉ hưu năm 2007",
    "education": "10/10 phổ thông, Sơ cấp Lái xe & Cơ khí ô tô",
    "awards": [
      "Huân chương Kháng chiến chống Mỹ hạng Ba",
      "Huy chương TNXP vẻ vang",
      "Kỷ niệm chương TNXP Việt Nam"
    ],
    "policyInfo": {
      "policyCategory": "Chế độ theo Quyết định 40/2011/QĐ-TTg của Thủ tướng Chính phủ",
      "benefitStatus": "Đã hoàn tất giải quyết trợ cấp một lần (Dữ liệu mẫu)",
      "insuranceStatus": "Đã cấp thẻ BHYT diện Cựu TNXP",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  },
  {
    "id": "hv-phuong-dong-da-02",
    "memberCode": "HN-DD-25002",
    "fullName": "Đặng Thị Lan Phương",
    "wardId": "phuong-dong-da",
    "wardName": "Đống Đa",
    "unitType": "Phường",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 2 (Khu vực Ô Chợ Dừa - Cát Linh)",
    "positionInAssoc": "Chi hội phó",
    "joinDate": "22/12/2006",
    "birthDate": "19/07/1951",
    "gender": "Nữ",
    "hometown": "Phường Đống Đa, TP Hà Nội",
    "currentResidence": "Tổ dân phố số 7, Phường Đống Đa, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1969 - 1974",
    "tnxpUnit": "Đại đội 751, Binh trạm 12, Đoàn 559 Trường Sơn",
    "tnxpLocation": "Tuyến đường Trường Sơn Tây - khu vực đèo Lò Xo",
    "tnxpMission": "Vận chuyển hàng cứu viện chiến dịch, bảo dưỡng trạm thông tin liên lạc",
    "postTnxpCareer": "Về công tác tại Bệnh viện Đống Đa; nghỉ hưu năm 2006",
    "education": "10/10 phổ thông, Trung cấp Điều dưỡng Y tế",
    "awards": [
      "Huy chương Kháng chiến chống Mỹ hạng Nhì",
      "Huy hiệu Chiến sĩ Trường Sơn anh hùng",
      "Huy chương TNXP vẻ vang"
    ],
    "policyInfo": {
      "policyCategory": "Chế độ người nhiễm chất độc hóa học gián tiếp / QĐ 40/2011/QĐ-TTg",
      "benefitStatus": "Đang hưởng chế độ bảo trợ hàng tháng mẫu theo quy định",
      "insuranceStatus": "BHYT miễn phí diện chính sách người có công",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  },
  {
    "id": "hv-phuong-dong-da-03",
    "memberCode": "HN-DD-25003",
    "fullName": "Trịnh Quốc Tuấn",
    "wardId": "phuong-dong-da",
    "wardName": "Đống Đa",
    "unitType": "Phường",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 1 (Khu vực Văn Miếu - Quốc Tử Giám)",
    "positionInAssoc": "Hội viên",
    "joinDate": "18/04/2008",
    "birthDate": "06/09/1949",
    "gender": "Nam",
    "hometown": "Phường Đống Đa, TP Hà Nội",
    "currentResidence": "Tổ dân phố số 4, Phường Đống Đa, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1968 - 1973",
    "tnxpUnit": "Đại đội 53, Đội 25 TNXP Hà Nội",
    "tnxpLocation": "Tuyến huyết mạch đường số 1 và phà Bến Thủy, Nghệ An",
    "tnxpMission": "San lấp hố bom, hướng dẫn phương tiện vượt bến phà an toàn",
    "postTnxpCareer": "Về làm việc tại Công ty Vận tải Thủy Hà Nội; nghỉ chế độ năm 2009",
    "education": "Hết cấp 3 phổ thông, Sơ cấp Hàng hải",
    "awards": [
      "Huy chương TNXP vẻ vang",
      "Kỷ niệm chương Cựu TNXP Việt Nam",
      "Bằng khen Hội Cựu TNXP TP Hà Nội"
    ],
    "policyInfo": {
      "policyCategory": "Chế độ theo Quyết định 40/2011/QĐ-TTg của Thủ tướng Chính phủ",
      "benefitStatus": "Đã hoàn thành thủ tục trợ cấp một lần (Dữ liệu mẫu)",
      "insuranceStatus": "Đã cấp thẻ BHYT diện Cựu TNXP",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  },
  {
    "id": "hv-phuong-dong-da-04",
    "memberCode": "HN-DD-25004",
    "fullName": "Lê Thị Mai Hương",
    "wardId": "phuong-dong-da",
    "wardName": "Đống Đa",
    "unitType": "Phường",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 3 (Khu vực Láng Thượng - Trung Phụng)",
    "positionInAssoc": "Hội viên",
    "joinDate": "15/07/2009",
    "birthDate": "14/10/1953",
    "gender": "Nữ",
    "hometown": "Phường Đống Đa, TP Hà Nội",
    "currentResidence": "Tổ dân phố số 11, Phường Đống Đa, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1971 - 1975",
    "tnxpUnit": "Đại đội N241, Đội TNXP chống Mỹ bảo vệ Thủ đô",
    "tnxpLocation": "Sân bay Bạch Mai và ga đường sắt Giáp Bát, Hà Nội",
    "tnxpMission": "Khắc phục đường băng sau đợt rải thảm bom B-52, vận chuyển hàng viện trợ",
    "postTnxpCareer": "Công tác tại Ngân hàng Nông nghiệp chi nhánh Hà Nội; nghỉ hưu năm 2008",
    "education": "10/10 phổ thông, Trung cấp Tài chính Kế toán",
    "awards": [
      "Huy chương Chiến công hạng Ba",
      "Huy chương TNXP vẻ vang",
      "Kỷ niệm chương Cựu TNXP Việt Nam"
    ],
    "policyInfo": {
      "policyCategory": "Chế độ theo Quyết định 40/2011/QĐ-TTg của Thủ tướng Chính phủ",
      "benefitStatus": "Đã hoàn tất nhận trợ cấp một lần (Dữ liệu mẫu)",
      "insuranceStatus": "Thẻ BHYT hưu trí gắn quyền lợi Cựu TNXP",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  },
  {
    "id": "hv-phuong-hai-ba-trung-01",
    "memberCode": "HN-HBT-25001",
    "fullName": "Phan Đình Trọng",
    "wardId": "phuong-hai-ba-trung",
    "wardName": "Hai Bà Trưng",
    "unitType": "Phường",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 1 (Khu vực Bạch Mai - Phố Huế)",
    "positionInAssoc": "Chi hội trưởng",
    "joinDate": "15/07/2005",
    "birthDate": "02/04/1947",
    "gender": "Nam",
    "hometown": "Phường Hai Bà Trưng, TP Hà Nội",
    "currentResidence": "Tổ dân phố số 3, Phường Hai Bà Trưng, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1966 - 1971",
    "tnxpUnit": "Đại đội 51, Đội 25 TNXP Hà Nội",
    "tnxpLocation": "Trọng điểm phà Bến Thủy và ga Vinh, Nghệ An",
    "tnxpMission": "Khắc phục hậu quả bom mìn, sửa chữa đường ray và nền đường sắt chi viện",
    "postTnxpCareer": "Về công tác tại Nhà máy Cơ khí Duyên Hải - chi nhánh Hà Nội; nghỉ hưu năm 2007",
    "education": "10/10 phổ thông, Trung cấp Cơ khí Chế tạo",
    "awards": [
      "Huân chương Kháng chiến chống Mỹ hạng Ba",
      "Huy chương TNXP vẻ vang",
      "Kỷ niệm chương Cựu TNXP Việt Nam",
      "Bằng khen UBND TP Hà Nội"
    ],
    "policyInfo": {
      "policyCategory": "Chế độ theo Quyết định 40/2011/QĐ-TTg của Thủ tướng Chính phủ",
      "benefitStatus": "Đã hoàn thành chi trả trợ cấp một lần (Dữ liệu mẫu)",
      "insuranceStatus": "Đã cấp thẻ BHYT diện Cựu TNXP",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  },
  {
    "id": "hv-phuong-hai-ba-trung-02",
    "memberCode": "HN-HBT-25002",
    "fullName": "Ngô Thị Thanh Vân",
    "wardId": "phuong-hai-ba-trung",
    "wardName": "Hai Bà Trưng",
    "unitType": "Phường",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 2 (Khu vực Đồng Nhân - Quỳnh Lôi)",
    "positionInAssoc": "Chi hội phó",
    "joinDate": "18/08/2006",
    "birthDate": "27/05/1952",
    "gender": "Nữ",
    "hometown": "Phường Hai Bà Trưng, TP Hà Nội",
    "currentResidence": "Tổ dân phố số 6, Phường Hai Bà Trưng, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1970 - 1974",
    "tnxpUnit": "Đại đội 754, Đoàn TNXP 559 Trường Sơn",
    "tnxpLocation": "Cung đường Khe Sanh - Hướng Hóa, Quảng Trị",
    "tnxpMission": "Bảo quản kho đạn, chăm sóc thương bệnh binh và vận chuyển nhu yếu phẩm",
    "postTnxpCareer": "Về làm việc tại Nhà máy Dệt 8-3; nghỉ hưu năm 2005",
    "education": "Hết cấp 2, Sơ cấp Y tế - Hộ lý",
    "awards": [
      "Huy chương Kháng chiến chống Mỹ hạng Ba",
      "Huy hiệu Dũng sĩ diệt Mỹ (chiến sĩ hậu cần)",
      "Huy chương TNXP vẻ vang"
    ],
    "policyInfo": {
      "policyCategory": "Chế độ theo Quyết định 40/2011/QĐ-TTg của Thủ tướng Chính phủ",
      "benefitStatus": "Đã hoàn tất nhận trợ cấp một lần (Dữ liệu mẫu)",
      "insuranceStatus": "BHYT hỗ trợ diện Cựu TNXP khó khăn",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  },
  {
    "id": "hv-phuong-hai-ba-trung-03",
    "memberCode": "HN-HBT-25003",
    "fullName": "Tạ Văn Đức",
    "wardId": "phuong-hai-ba-trung",
    "wardName": "Hai Bà Trưng",
    "unitType": "Phường",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 1 (Khu vực Bạch Mai - Phố Huế)",
    "positionInAssoc": "Hội viên",
    "joinDate": "20/11/2007",
    "birthDate": "09/12/1948",
    "gender": "Nam",
    "hometown": "Phường Hai Bà Trưng, TP Hà Nội",
    "currentResidence": "Tổ dân phố số 1, Phường Hai Bà Trưng, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1967 - 1973",
    "tnxpUnit": "Đại đội 52, Đội 25 TNXP Hà Nội",
    "tnxpLocation": "Tuyến quốc lộ 15A qua Nam Đàn, Nghệ An",
    "tnxpMission": "San lấp hố bom, kéo xe pháo ngụy trang qua các đèo cao",
    "postTnxpCareer": "Chuyển ngành về Nhà máy Rượu Hà Nội; nghỉ chế độ năm 2008",
    "education": "10/10 phổ thông, Kỹ thuật Hóa thực phẩm",
    "awards": [
      "Huy chương Kháng chiến chống Mỹ hạng Nhì",
      "Huy chương TNXP vẻ vang",
      "Kỷ niệm chương TNXP Việt Nam"
    ],
    "policyInfo": {
      "policyCategory": "Chế độ theo Quyết định 40/2011/QĐ-TTg của Thủ tướng Chính phủ",
      "benefitStatus": "Đã nhận trợ cấp một lần theo quy định (Dữ liệu mẫu)",
      "insuranceStatus": "Thẻ BHYT hưu trí diện Cựu TNXP",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  },
  {
    "id": "hv-phuong-hai-ba-trung-04",
    "memberCode": "HN-HBT-25004",
    "fullName": "Dương Thị Kim Oanh",
    "wardId": "phuong-hai-ba-trung",
    "wardName": "Hai Bà Trưng",
    "unitType": "Phường",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 3 (Khu vực Minh Khai - Vĩnh Tuy)",
    "positionInAssoc": "Hội viên",
    "joinDate": "26/03/2009",
    "birthDate": "15/08/1954",
    "gender": "Nữ",
    "hometown": "Phường Hai Bà Trưng, TP Hà Nội",
    "currentResidence": "Tổ dân phố số 10, Phường Hai Bà Trưng, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1972 - 1976",
    "tnxpUnit": "Đại đội N235, Đội TNXP tình nguyện Thủ đô",
    "tnxpLocation": "Ga Giáp Bát và tuyến đường sắt Hà Nội - Hải Phòng",
    "tnxpMission": "Bốc dỡ hàng viện trợ quốc tế, sửa chữa đường ray và cứu trợ dân cư bị trúng bom",
    "postTnxpCareer": "Công tác tại Xí nghiệp Da giày Hà Nội; nghỉ hưu năm 2009",
    "education": "Hết cấp 3 phổ thông, Sơ cấp Quản lý Kho bãi",
    "awards": [
      "Huy chương TNXP vẻ vang",
      "Kỷ niệm chương Cựu TNXP Việt Nam",
      "Giấy khen Hội Cựu TNXP quận Hai Bà Trưng"
    ],
    "policyInfo": {
      "policyCategory": "Chế độ theo Quyết định 40/2011/QĐ-TTg của Thủ tướng Chính phủ",
      "benefitStatus": "Đã nhận đầy đủ trợ cấp một lần (Dữ liệu mẫu)",
      "insuranceStatus": "Đã cấp thẻ BHYT Cựu TNXP",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  },
  {
    "id": "hv-phuong-ha-dong-01",
    "memberCode": "HN-HD-25001",
    "fullName": "Nguyễn Tiến Đạt",
    "wardId": "phuong-ha-dong",
    "wardName": "Hà Đông",
    "unitType": "Phường",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 1 (Khu vực Quang Trung - Yết Kiêu)",
    "positionInAssoc": "Chi hội trưởng",
    "joinDate": "15/07/2005",
    "birthDate": "23/06/1946",
    "gender": "Nam",
    "hometown": "Phường Hà Đông, TP Hà Nội",
    "currentResidence": "Tổ dân phố số 2, Phường Hà Đông, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1965 - 1970",
    "tnxpUnit": "Đại đội 814, Đội TNXP Hà Tây (cũ)",
    "tnxpLocation": "Tuyến quốc lộ 1A qua Hàm Rồng, Thanh Hóa và đường 8 Hà Tĩnh",
    "tnxpMission": "Chỉ huy trung đội rà phá bom nổ chậm, bắc cầu phao phục vụ pháo binh",
    "postTnxpCareer": "Về công tác tại Ty Thủy lợi Hà Sơn Bình; nghỉ hưu năm 2006",
    "education": "10/10 phổ thông, Kỹ sư Thủy lợi",
    "awards": [
      "Huân chương Kháng chiến chống Mỹ hạng Nhì",
      "Huy chương TNXP vẻ vang",
      "Kỷ niệm chương Cựu TNXP Việt Nam",
      "Huy hiệu 50 năm tuổi Đảng"
    ],
    "policyInfo": {
      "policyCategory": "Chế độ người có công và Quyết định 40/2011/QĐ-TTg",
      "benefitStatus": "Đang hưởng trợ cấp ưu đãi người có công hàng tháng (Dữ liệu mẫu)",
      "insuranceStatus": "Thẻ BHYT ưu đãi người có công và Cựu TNXP",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  },
  {
    "id": "hv-phuong-ha-dong-02",
    "memberCode": "HN-HD-25002",
    "fullName": "Lê Thị Thu Hoài",
    "wardId": "phuong-ha-dong",
    "wardName": "Hà Đông",
    "unitType": "Phường",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 2 (Khu vực Nguyễn Trãi - Vạn Phúc)",
    "positionInAssoc": "Chi hội phó",
    "joinDate": "19/08/2006",
    "birthDate": "11/09/1952",
    "gender": "Nữ",
    "hometown": "Phường Hà Đông, TP Hà Nội",
    "currentResidence": "Tổ dân phố số 5, Phường Hà Đông, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1970 - 1975",
    "tnxpUnit": "Đại đội 755, Binh trạm 31, Đoàn 559 Trường Sơn",
    "tnxpLocation": "Đường Hồ Chí Minh huyền thoại - trọng điểm Cù Bai, Hướng Hóa",
    "tnxpMission": "Túc trực thông tin đường dây hữu tuyến, vận chuyển thương bệnh binh ra hậu phương",
    "postTnxpCareer": "Về công tác tại Hợp tác xã Dệt lụa Vạn Phúc; nghỉ công tác năm 2007",
    "education": "Hết cấp 2, Nghề dệt truyền thống",
    "awards": [
      "Huy chương Kháng chiến chống Mỹ hạng Ba",
      "Huy hiệu Chiến sĩ Trường Sơn",
      "Huy chương TNXP vẻ vang"
    ],
    "policyInfo": {
      "policyCategory": "Chế độ theo Quyết định 40/2011/QĐ-TTg của Thủ tướng Chính phủ",
      "benefitStatus": "Đã hoàn thành thủ tục hưởng trợ cấp một lần (Dữ liệu mẫu)",
      "insuranceStatus": "Đã cấp thẻ BHYT diện Cựu TNXP",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  },
  {
    "id": "hv-phuong-ha-dong-03",
    "memberCode": "HN-HD-25003",
    "fullName": "Phạm Đức Vinh",
    "wardId": "phuong-ha-dong",
    "wardName": "Hà Đông",
    "unitType": "Phường",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 1 (Khu vực Quang Trung - Yết Kiêu)",
    "positionInAssoc": "Hội viên",
    "joinDate": "27/07/2007",
    "birthDate": "07/04/1948",
    "gender": "Nam",
    "hometown": "Phường Hà Đông, TP Hà Nội",
    "currentResidence": "Tổ dân phố số 1, Phường Hà Đông, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1967 - 1972",
    "tnxpUnit": "Đại đội 812, Đội TNXP Hà Tây",
    "tnxpLocation": "Tuyến đường sắt Hà Nội - Vinh đoạn qua Thanh Hóa",
    "tnxpMission": "Khắc phục sự cố sạt lở nền đường sắt sau các trận mưa bom",
    "postTnxpCareer": "Về công tác tại Xí nghiệp Đầu máy Hà Nội; nghỉ hưu năm 2008",
    "education": "10/10 phổ thông, Trung cấp Lái đầu máy xe lửa",
    "awards": [
      "Huy chương Kháng chiến chống Mỹ hạng Nhì",
      "Huy chương TNXP vẻ vang",
      "Kỷ niệm chương Vì sự nghiệp Đường sắt Việt Nam"
    ],
    "policyInfo": {
      "policyCategory": "Chế độ theo Quyết định 40/2011/QĐ-TTg của Thủ tướng Chính phủ",
      "benefitStatus": "Đã hoàn thành nhận trợ cấp một lần (Dữ liệu mẫu)",
      "insuranceStatus": "BHYT hưu trí gắn quyền lợi Cựu TNXP",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  },
  {
    "id": "hv-phuong-ha-dong-04",
    "memberCode": "HN-HD-25004",
    "fullName": "Đỗ Thị Minh Hạnh",
    "wardId": "phuong-ha-dong",
    "wardName": "Hà Đông",
    "unitType": "Phường",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 3 (Khu vực Mộ Lao - Phúc La)",
    "positionInAssoc": "Hội viên",
    "joinDate": "15/10/2009",
    "birthDate": "18/12/1953",
    "gender": "Nữ",
    "hometown": "Phường Hà Đông, TP Hà Nội",
    "currentResidence": "Tổ dân phố số 8, Phường Hà Đông, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1971 - 1975",
    "tnxpUnit": "Đại đội N233, Đội TNXP bảo vệ hậu phương",
    "tnxpLocation": "Trạm bơm sông Nhuệ và đê bao Hà Đông",
    "tnxpMission": "Hộ đê chống ngập lụt, đào đắp công sự và hầm trú ẩn phòng không cho nhân dân",
    "postTnxpCareer": "Công tác tại Xí nghiệp Len Hà Đông; nghỉ chế độ năm 2008",
    "education": "Hết cấp 2, Sơ cấp Kỹ thuật Dệt len",
    "awards": [
      "Huy chương TNXP vẻ vang",
      "Kỷ niệm chương Cựu TNXP Việt Nam",
      "Giấy khen Hội Cựu TNXP quận Hà Đông"
    ],
    "policyInfo": {
      "policyCategory": "Chế độ theo Quyết định 40/2011/QĐ-TTg của Thủ tướng Chính phủ",
      "benefitStatus": "Đã giải quyết chế độ trợ cấp một lần (Dữ liệu mẫu)",
      "insuranceStatus": "Đã cấp thẻ BHYT diện Cựu TNXP",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  },
  {
    "id": "hv-xa-dong-anh-01",
    "memberCode": "HN-DA-25001",
    "fullName": "Trần Văn Cường",
    "wardId": "xa-dong-anh",
    "wardName": "Đông Anh",
    "unitType": "Xã",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 1 (Thôn Cổ Loa - Uy Nỗ)",
    "positionInAssoc": "Chi hội trưởng",
    "joinDate": "15/07/2005",
    "birthDate": "14/08/1946",
    "gender": "Nam",
    "hometown": "Xã Đông Anh, TP Hà Nội",
    "currentResidence": "Khu dân cư số 2, Xã Đông Anh, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1965 - 1971",
    "tnxpUnit": "Đại đội 3, Đội TNXP Hà Nội chống Mỹ cứu nước",
    "tnxpLocation": "Tuyến quốc lộ 1A qua Phủ Lý và Ninh Bình",
    "tnxpMission": "Đảm bảo cầu phao Đò Lèn, rà phá bom nổ chậm sau mỗi đợt không kích",
    "postTnxpCareer": "Về tham gia công tác chính quyền tại xã Đông Anh, nghỉ hưu năm 2006",
    "education": "10/10 phổ thông, Trung cấp Quản lý Nhà nước",
    "awards": [
      "Huân chương Kháng chiến chống Mỹ hạng Nhì",
      "Huy chương TNXP vẻ vang",
      "Kỷ niệm chương Cựu TNXP Việt Nam",
      "Huy hiệu 50 năm tuổi Đảng"
    ],
    "policyInfo": {
      "policyCategory": "Chế độ theo Quyết định 40/2011/QĐ-TTg của Thủ tướng Chính phủ",
      "benefitStatus": "Đã hoàn tất thủ tục và nhận trợ cấp một lần (Dữ liệu mẫu)",
      "insuranceStatus": "Đã cấp thẻ BHYT diện Cựu TNXP",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  },
  {
    "id": "hv-xa-dong-anh-02",
    "memberCode": "HN-DA-25002",
    "fullName": "Ngô Thị Mai",
    "wardId": "xa-dong-anh",
    "wardName": "Đông Anh",
    "unitType": "Xã",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 2 (Thôn Nguyên Khê - Xuân Canh)",
    "positionInAssoc": "Chi hội phó",
    "joinDate": "20/10/2006",
    "birthDate": "09/03/1951",
    "gender": "Nữ",
    "hometown": "Xã Đông Anh, TP Hà Nội",
    "currentResidence": "Khu dân cư số 5, Xã Đông Anh, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1969 - 1974",
    "tnxpUnit": "Đại đội 804, Tổng đội TNXP Giao thông tuyến lửa",
    "tnxpLocation": "Trọng điểm phà Gianh và ngầm Roòn, tỉnh Quảng Bình",
    "tnxpMission": "Điều hành tín hiệu bến vượt, cấp dưỡng tiếp tế cho lực lượng phá bom",
    "postTnxpCareer": "Về làm việc tại Hợp tác xã Nông nghiệp Đông Anh; nghỉ chế độ năm 2006",
    "education": "7/10 phổ thông, Sơ cấp Trồng trọt",
    "awards": [
      "Huy chương Kháng chiến chống Mỹ hạng Ba",
      "Huy chương TNXP vẻ vang",
      "Kỷ niệm chương Cựu TNXP Việt Nam"
    ],
    "policyInfo": {
      "policyCategory": "Chế độ theo Quyết định 40/2011/QĐ-TTg của Thủ tướng Chính phủ",
      "benefitStatus": "Đã giải quyết xong chế độ trợ cấp (Dữ liệu mẫu)",
      "insuranceStatus": "Đã cấp thẻ BHYT Cựu TNXP",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  },
  {
    "id": "hv-xa-dong-anh-03",
    "memberCode": "HN-DA-25003",
    "fullName": "Hoàng Văn Thắng",
    "wardId": "xa-dong-anh",
    "wardName": "Đông Anh",
    "unitType": "Xã",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 1 (Thôn Cổ Loa - Uy Nỗ)",
    "positionInAssoc": "Hội viên",
    "joinDate": "15/07/2008",
    "birthDate": "28/11/1949",
    "gender": "Nam",
    "hometown": "Xã Đông Anh, TP Hà Nội",
    "currentResidence": "Khu dân cư số 1, Xã Đông Anh, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1968 - 1973",
    "tnxpUnit": "Đại đội 52, Đội 25 TNXP Hà Nội",
    "tnxpLocation": "Tuyến đường 15A qua Đức Thọ và Hương Khê, Hà Tĩnh",
    "tnxpMission": "Phá bom nổ chậm, san gạt mở rộng cua tay áo cho xe tải bánh xích qua đèo",
    "postTnxpCareer": "Chuyển ngành về Nhà máy Cơ khí Đông Anh; nghỉ hưu năm 2009",
    "education": "Hết cấp 3, Trung cấp Luyện kim - Cơ khí",
    "awards": [
      "Huy chương Kháng chiến chống Mỹ hạng Nhì",
      "Huy chương TNXP vẻ vang",
      "Kỷ niệm chương Cựu TNXP Việt Nam"
    ],
    "policyInfo": {
      "policyCategory": "Chế độ theo Quyết định 40/2011/QĐ-TTg của Thủ tướng Chính phủ",
      "benefitStatus": "Đã hoàn tất hồ sơ và nhận chi trả (Dữ liệu mẫu)",
      "insuranceStatus": "Thẻ BHYT hưu trí gắn quyền lợi Cựu TNXP",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  },
  {
    "id": "hv-xa-soc-son-01",
    "memberCode": "HN-SS-25001",
    "fullName": "Nguyễn Văn Tuấn",
    "wardId": "xa-soc-son",
    "wardName": "Sóc Sơn",
    "unitType": "Xã",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 1 (Thôn Tiên Dược - Phù Linh)",
    "positionInAssoc": "Chi hội trưởng",
    "joinDate": "15/07/2005",
    "birthDate": "10/05/1947",
    "gender": "Nam",
    "hometown": "Xã Sóc Sơn, TP Hà Nội",
    "currentResidence": "Khu dân cư số 3, Xã Sóc Sơn, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1966 - 1972",
    "tnxpUnit": "Đại đội 22, Đội TNXP Hà Nội",
    "tnxpLocation": "Trọng điểm đèo Ngang và phà Ròn, Quảng Bình",
    "tnxpMission": "Đảm bảo an toàn thông xe qua đèo, san hố bom dẫn đường xe pháo chi viện",
    "postTnxpCareer": "Về tham gia Ban Chỉ huy Quân sự huyện Sóc Sơn cũ; nghỉ hưu năm 2007",
    "education": "10/10 phổ thông, Sơ cấp Quân sự",
    "awards": [
      "Huân chương Kháng chiến chống Mỹ hạng Ba",
      "Huy chương TNXP vẻ vang",
      "Kỷ niệm chương Cựu TNXP Việt Nam",
      "Huy hiệu 50 năm tuổi Đảng"
    ],
    "policyInfo": {
      "policyCategory": "Chế độ thương binh hạng 4/4 và Quyết định 40/2011/QĐ-TTg",
      "benefitStatus": "Đang hưởng trợ cấp thương binh hàng tháng (Dữ liệu mẫu)",
      "insuranceStatus": "Đã cấp thẻ BHYT diện Thương binh - Cựu TNXP",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  },
  {
    "id": "hv-xa-soc-son-02",
    "memberCode": "HN-SS-25002",
    "fullName": "Dương Thị Loan",
    "wardId": "xa-soc-son",
    "wardName": "Sóc Sơn",
    "unitType": "Xã",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 2 (Thôn Mai Đình - Quang Tiến)",
    "positionInAssoc": "Chi hội phó",
    "joinDate": "19/05/2007",
    "birthDate": "17/12/1951",
    "gender": "Nữ",
    "hometown": "Xã Sóc Sơn, TP Hà Nội",
    "currentResidence": "Khu dân cư số 6, Xã Sóc Sơn, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1969 - 1974",
    "tnxpUnit": "Đại đội 752, Đoàn TNXP 559 Trường Sơn",
    "tnxpLocation": "Tuyến đường Trường Sơn Đông - ngã ba Lùm Bùm, đường 9 Nam Lào",
    "tnxpMission": "Vận chuyển đạn dược, chăm sóc nuôi dưỡng thương binh tại trạm phẫu",
    "postTnxpCareer": "Về làm việc tại Trạm Y tế xã Sóc Sơn; nghỉ chế độ năm 2006",
    "education": "Hết cấp 2 phổ thông, Trung cấp Y sĩ đa khoa",
    "awards": [
      "Huy chương Kháng chiến chống Mỹ hạng Ba",
      "Huy hiệu Dũng sĩ giữ đường",
      "Huy chương TNXP vẻ vang"
    ],
    "policyInfo": {
      "policyCategory": "Chế độ theo Quyết định 40/2011/QĐ-TTg của Thủ tướng Chính phủ",
      "benefitStatus": "Đã hoàn thành nhận trợ cấp một lần theo quy định (Dữ liệu mẫu)",
      "insuranceStatus": "Đã cấp thẻ BHYT Cựu TNXP",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  },
  {
    "id": "hv-xa-soc-son-03",
    "memberCode": "HN-SS-25003",
    "fullName": "Nguyễn Đình Hùng",
    "wardId": "xa-soc-son",
    "wardName": "Sóc Sơn",
    "unitType": "Xã",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 1 (Thôn Tiên Dược - Phù Linh)",
    "positionInAssoc": "Hội viên",
    "joinDate": "27/07/2009",
    "birthDate": "05/02/1950",
    "gender": "Nam",
    "hometown": "Xã Sóc Sơn, TP Hà Nội",
    "currentResidence": "Khu dân cư số 2, Xã Sóc Sơn, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1968 - 1973",
    "tnxpUnit": "Đại đội 53, Đội 25 TNXP Hà Nội",
    "tnxpLocation": "Trọng điểm phà Linh Cảm, tỉnh Hà Tĩnh",
    "tnxpMission": "Trực kéo phà đêm, bắc cầu phao dã chiến cho xe tăng vượt sông",
    "postTnxpCareer": "Về công tác tại Lâm trường Sóc Sơn; nghỉ hưu năm 2010",
    "education": "Hết cấp 3, Trung cấp Lâm nghiệp",
    "awards": [
      "Huy chương Kháng chiến chống Mỹ hạng Nhì",
      "Huy chương TNXP vẻ vang",
      "Kỷ niệm chương Vì sự nghiệp Phát triển Nông nghiệp Nông thôn"
    ],
    "policyInfo": {
      "policyCategory": "Chế độ theo Quyết định 40/2011/QĐ-TTg của Thủ tướng Chính phủ",
      "benefitStatus": "Đã hoàn tất thủ tục trợ cấp một lần (Dữ liệu mẫu)",
      "insuranceStatus": "BHYT hưu trí và Cựu TNXP",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  },
  {
    "id": "hv-xa-ba-vi-01",
    "memberCode": "HN-BV-25001",
    "fullName": "Đinh Công Bằng",
    "wardId": "xa-ba-vi",
    "wardName": "Ba Vì",
    "unitType": "Xã",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 1 (Khu vực trung tâm Ba Vì - Tản Lĩnh)",
    "positionInAssoc": "Chi hội trưởng",
    "joinDate": "15/07/2005",
    "birthDate": "15/09/1945",
    "gender": "Nam",
    "hometown": "Xã Ba Vì, TP Hà Nội",
    "currentResidence": "Thôn Hợp Nhất, Xã Ba Vì, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1965 - 1970",
    "tnxpUnit": "Đại đội 811, Đội TNXP chống Mỹ tỉnh Hà Tây (cũ)",
    "tnxpLocation": "Tuyến quốc lộ 15A qua đèo Đá Đẽo và Cổng Trời, Quảng Bình",
    "tnxpMission": "Phá bom từ trường, mở rộng vách đá taluy dương chống sạt lở mùa mưa lũ",
    "postTnxpCareer": "Về làm cán bộ Hội Nông dân xã Ba Vì; nghỉ chế độ năm 2005",
    "education": "Hết cấp 2, Sơ cấp Trồng trọt chăn nuôi",
    "awards": [
      "Huân chương Kháng chiến chống Mỹ hạng Nhì",
      "Huy chương TNXP vẻ vang",
      "Kỷ niệm chương Cựu TNXP Việt Nam",
      "Huy hiệu 55 năm tuổi Đảng"
    ],
    "policyInfo": {
      "policyCategory": "Chế độ người có công và Quyết định 40/2011/QĐ-TTg",
      "benefitStatus": "Đang hưởng chế độ trợ cấp người có công (Dữ liệu mẫu)",
      "insuranceStatus": "Đã cấp thẻ BHYT diện Cựu TNXP - người có công",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  },
  {
    "id": "hv-xa-ba-vi-02",
    "memberCode": "HN-BV-25002",
    "fullName": "Phùng Thị Thảo",
    "wardId": "xa-ba-vi",
    "wardName": "Ba Vì",
    "unitType": "Xã",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 2 (Khu vực Yên Sơn - Ba Trại)",
    "positionInAssoc": "Chi hội phó",
    "joinDate": "20/10/2007",
    "birthDate": "03/03/1952",
    "gender": "Nữ",
    "hometown": "Xã Ba Vì, TP Hà Nội",
    "currentResidence": "Thôn Hợp Sơn, Xã Ba Vì, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1970 - 1975",
    "tnxpUnit": "Đại đội 756, Binh trạm 14, Đoàn 559 Trường Sơn",
    "tnxpLocation": "Tuyến đường giao liên Trường Sơn Tây - khu vực A Lưới, Thừa Thiên",
    "tnxpMission": "Bảo quản kho quân lương, vận chuyển cáng tải thương binh vượt suối an toàn",
    "postTnxpCareer": "Về công tác tại Nông trường Ba Vì; nghỉ hưu năm 2007",
    "education": "Hết phổ thông cấp 2, Sơ cấp Thú y",
    "awards": [
      "Huy chương Kháng chiến chống Mỹ hạng Ba",
      "Huy hiệu Chiến sĩ Trường Sơn",
      "Huy chương TNXP vẻ vang"
    ],
    "policyInfo": {
      "policyCategory": "Chế độ theo Quyết định 40/2011/QĐ-TTg của Thủ tướng Chính phủ",
      "benefitStatus": "Đã hoàn thành thủ tục và nhận trợ cấp một lần (Dữ liệu mẫu)",
      "insuranceStatus": "Đã cấp thẻ BHYT Cựu TNXP",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  },
  {
    "id": "hv-xa-ba-vi-03",
    "memberCode": "HN-BV-25003",
    "fullName": "Lý A Sáng",
    "wardId": "xa-ba-vi",
    "wardName": "Ba Vì",
    "unitType": "Xã",
    "districtName": "TP Hà Nội (NQ 1656/NQ-UBTVQH15)",
    "branchName": "Chi hội 1 (Khu vực trung tâm Ba Vì - Tản Lĩnh)",
    "positionInAssoc": "Hội viên",
    "joinDate": "27/07/2008",
    "birthDate": "20/07/1949",
    "gender": "Nam",
    "hometown": "Xã Ba Vì, TP Hà Nội",
    "currentResidence": "Bản Miền, Xã Ba Vì, TP Hà Nội (Địa chỉ minh họa)",
    "tnxpPeriod": "1968 - 1973",
    "tnxpUnit": "Đại đội 815, Đội TNXP Hà Tây",
    "tnxpLocation": "Tuyến đường 15B qua ngã ba Đồng Lộc và Hương Khê, Hà Tĩnh",
    "tnxpMission": "Chặt gỗ chống lầy, san lấp hố bom bảo đảm đường xe cơ giới không bị ách tắc",
    "postTnxpCareer": "Về tham gia tổ bảo vệ rừng và sản xuất nông lâm nghiệp; nghỉ công tác năm 2009",
    "education": "Biết đọc biết viết, Sơ cấp Lâm sinh",
    "awards": [
      "Huy chương Kháng chiến chống Mỹ hạng Nhì",
      "Huy chương TNXP vẻ vang",
      "Kỷ niệm chương Vì sự nghiệp Phát triển Nông thôn"
    ],
    "policyInfo": {
      "policyCategory": "Chế độ theo Quyết định 40/2011/QĐ-TTg của Thủ tướng Chính phủ",
      "benefitStatus": "Đã nhận trợ cấp một lần theo quy định (Dữ liệu mẫu)",
      "insuranceStatus": "Thẻ BHYT hỗ trợ người đồng bào dân tộc thiểu số và Cựu TNXP",
      "note": "Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế"
    }
  }
];

/**
 * Tạo dữ liệu hội viên giả lập dự phòng cho bất kỳ địa bàn nào
 * để bảo đảm khi người dùng bấm vào bất kỳ phường/xã nào cũng có 5–8 hồ sơ mẫu hoàn chỉnh.
 */
function generateDynamicMembersForWard(wardId: string): MemberProfile[] {
  const ward = getWardById(wardId);
  if (!ward) return [];

  const sampleSurnames = ['Nguyễn', 'Trần', 'Lê', 'Phạm', 'Hoàng', 'Vũ', 'Đặng', 'Bùi'];
  const sampleMiddleNames = ['Văn', 'Thị', 'Đình', 'Thanh', 'Quang', 'Hồng', 'Minh', 'Ngọc'];
  const sampleGivenNames = ['Hùng', 'Mai', 'Thắng', 'Hoa', 'Dũng', 'Lan', 'Đức', 'Phương'];
  const genders: ('Nam' | 'Nữ')[] = ['Nam', 'Nữ', 'Nam', 'Nữ', 'Nam', 'Nữ', 'Nam', 'Nữ'];
  
  const targetCount = ward.memberCount || 6;
  const list: MemberProfile[] = [];

  for (let i = 0; i < targetCount; i++) {
    const isFemale = genders[i % genders.length] === 'Nữ';
    const surname = sampleSurnames[(i + ward.name.length) % sampleSurnames.length];
    const midName = isFemale ? 'Thị' : sampleMiddleNames[(i * 2 + 1) % sampleMiddleNames.length];
    const givenName = sampleGivenNames[(i + 3) % sampleGivenNames.length];
    const fullName = `${surname} ${midName} ${givenName}`;

    const birthYear = 1945 + (i * 2) % 10;
    const birthMonth = ((i * 3 + 1) % 12) + 1;
    const birthDay = ((i * 5 + 7) % 28) + 1;
    const birthDate = `${birthDay < 10 ? '0' + birthDay : birthDay}/${birthMonth < 10 ? '0' + birthMonth : birthMonth}/${birthYear}`;

    const startYear = birthYear + 18 + (i % 3);
    const endYear = startYear + 4 + (i % 3);

    const codeNum = 1000 + (ward.id.length * 10) + i + 1;
    const memberCode = `HN-${ward.id.substring(0, 2).toUpperCase()}-${codeNum}`;

    list.push({
      id: `hv-${ward.id}-${i + 1}`,
      memberCode,
      fullName,
      wardId: ward.id,
      wardName: ward.name,
      unitType: ward.unitType,
      districtName: ward.district || 'TP Hà Nội',
      branchName: `Chi hội ${((i % 3) + 1)} (${ward.name})`,
      positionInAssoc: i === 0 ? 'Chi hội trưởng' : i === 1 ? 'Chi hội phó' : 'Hội viên',
      joinDate: `15/07/${2005 + (i % 6)}`,
      birthDate,
      gender: isFemale ? 'Nữ' : 'Nam',
      hometown: `${ward.unitType} ${ward.name}, ${ward.district || 'TP Hà Nội'}, TP Hà Nội`,
      currentResidence: `Tổ dân phố ${(i % 10) + 1}, ${ward.unitType} ${ward.name}, ${ward.district || 'TP Hà Nội'}, Hà Nội (Minh họa)`,
      tnxpPeriod: `${startYear} - ${endYear}`,
      tnxpUnit: `Đại đội ${10 + (i % 5) * 10}, Đội TNXP 25 Hà Nội tham gia tuyến lửa`,
      tnxpLocation: i % 2 === 0 ? 'Tuyến huyết mạch đường số 1 và bến phà Ghép' : 'Tuyến đường 15A - Khe Giao, Hà Tĩnh',
      tnxpMission: 'Khắc phục hậu quả bom mìn, bảo đảm an toàn tuyến giao thông vận tải chi viện chiến trường',
      postTnxpCareer: 'Nghỉ chế độ hoàn thành nhiệm vụ TNXP trở về địa phương công tác và sản xuất',
      education: 'Phổ thông cơ sở / Trung học phổ thông',
      awards: [
        'Huy chương TNXP vẻ vang',
        'Kỷ niệm chương Thanh niên xung phong Việt Nam'
      ],
      policyInfo: {
        policyCategory: 'Chế độ theo Quyết định 40/2011/QĐ-TTg của Thủ tướng Chính phủ',
        benefitStatus: 'Đã hoàn tất hồ sơ giải quyết trợ cấp một lần theo quy định (Dữ liệu mẫu)',
        insuranceStatus: 'Đã được cấp thẻ BHYT theo đối tượng Cựu TNXP',
        note: 'Dữ liệu minh họa – không sử dụng làm căn cứ pháp lý hoặc quyền lợi thực tế'
      }
    });
  }

  return list;
}

/**
 * Lấy danh sách hội viên cho một địa bàn cụ thể.
 * TUÂN THỦ NGUYÊN TẮC BƯỚC 3.2B:
 * 1. Với 126 đơn vị hành chính mới theo Nghị quyết 1656/NQ-UBTVQH15:
 *    Nếu chưa có hội viên mẫu ở đơn vị đó, hiển thị trạng thái "Chưa có dữ liệu hội viên minh họa",
 *    tuyệt đối KHÔNG tạo số lượng hội viên giả để lấp đầy.
 * 2. Với các địa bàn thuộc lớp tương thích cũ (để bảo toàn truy cập hồ sơ cũ):
 *    Giữ nguyên các hồ sơ mẫu để tránh làm hỏng route hoặc mất quyền truy cập.
 */
export function getMembersByWard(wardId: string): MemberProfile[] {
  // 1. Ưu tiên tìm trong 30 hồ sơ mẫu của 8 đơn vị hành chính mới (BƯỚC 3.2C)
  const fromNew = NEW_MOCK_MEMBERS.filter((m) => m.wardId === wardId);
  if (fromNew.length > 0) {
    return fromNew;
  }

  // 2. Tìm trong CORE_MOCK_MEMBERS (các hồ sơ thuộc địa bàn lưu trữ cũ)
  const fromCore = CORE_MOCK_MEMBERS.filter((m) => m.wardId === wardId);
  if (fromCore.length > 0) {
    return fromCore;
  }

  // 3. Kiểm tra đơn vị hành chính
  const ward = getWardById(wardId);
  
  // Với 126 đơn vị mới theo Nghị quyết 1656: nếu chưa có hội viên mẫu thì trả về rỗng
  // (để hiển thị đúng trạng thái "Chưa có dữ liệu hội viên minh họa", không sinh số liệu ảo)
  if (!ward || !ward.isLegacy) {
    return [];
  }

  // 4. Chỉ tạo dynamic cho các địa bàn mẫu thuộc lớp tương thích cũ nếu cần
  const dynamic = generateDynamicMembersForWard(wardId);
  return dynamic;
}

/**
 * Tìm hồ sơ hội viên theo mã định danh (id hoặc memberCode)
 */
export function getMemberById(identifier: string): MemberProfile | undefined {
  // 1. Tìm trong 30 hồ sơ mới của 8 đơn vị hành chính NQ 1656
  const inNew = NEW_MOCK_MEMBERS.find(
    (m) => m.id === identifier || m.memberCode.toLowerCase() === identifier.toLowerCase()
  );
  if (inNew) return inNew;

  // 2. Tìm trong CORE_MOCK_MEMBERS cũ
  const inCore = CORE_MOCK_MEMBERS.find(
    (m) => m.id === identifier || m.memberCode.toLowerCase() === identifier.toLowerCase()
  );
  if (inCore) return inCore;

  // Nếu id có định dạng 'hv-[wardId]-[index]'
  const match = identifier.match(/^hv-(.+)-(\d+)$/);
  if (match) {
    const wardId = match[1];
    const wardMembers = getMembersByWard(wardId);
    const foundInWard = wardMembers.find((m) => m.id === identifier);
    if (foundInWard) return foundInWard;
  }

  // Quét toàn bộ các địa bàn (bao gồm cả lớp tương thích cũ để bảo đảm route hồ sơ cũ)
  const allWardsToScan = [...ADMINISTRATIVE_WARDS, ...LEGACY_ADMINISTRATIVE_WARDS];
  for (const ward of allWardsToScan) {
    const members = getMembersByWard(ward.id);
    const found = members.find(
      (m) => m.id === identifier || m.memberCode.toLowerCase() === identifier.toLowerCase()
    );
    if (found) return found;
  }

  return undefined;
}
