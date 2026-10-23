import { MemberProfile } from '../types';
import { ADMINISTRATIVE_WARDS, getWardById } from './wards';

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
      districtName: ward.district,
      branchName: `Chi hội ${((i % 3) + 1)} (${ward.name})`,
      positionInAssoc: i === 0 ? 'Chi hội trưởng' : i === 1 ? 'Chi hội phó' : 'Hội viên',
      joinDate: `15/07/${2005 + (i % 6)}`,
      birthDate,
      gender: isFemale ? 'Nữ' : 'Nam',
      hometown: `${ward.unitType} ${ward.name}, ${ward.district}, TP Hà Nội`,
      currentResidence: `Tổ dân phố ${(i % 10) + 1}, ${ward.unitType} ${ward.name}, ${ward.district}, Hà Nội (Minh họa)`,
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
 * Lấy danh sách hội viên cho một địa bàn cụ thể
 */
export function getMembersByWard(wardId: string): MemberProfile[] {
  const fromCore = CORE_MOCK_MEMBERS.filter((m) => m.wardId === wardId);
  if (fromCore.length >= 5) {
    return fromCore;
  }
  // Nếu chưa có đủ trong core, bổ sung hoặc sinh từ dynamic generator
  const dynamic = generateDynamicMembersForWard(wardId);
  // Ưu tiên các profile đã khai báo tay trong CORE
  const mergedMap = new Map<string, MemberProfile>();
  dynamic.forEach((m) => mergedMap.set(m.id, m));
  fromCore.forEach((m) => mergedMap.set(m.id, m));
  return Array.from(mergedMap.values());
}

/**
 * Tìm hồ sơ hội viên theo mã định danh (id hoặc memberCode)
 */
export function getMemberById(identifier: string): MemberProfile | undefined {
  // Tìm trong CORE trước
  const inCore = CORE_MOCK_MEMBERS.find(
    (m) => m.id === identifier || m.memberCode.toLowerCase() === identifier.toLowerCase()
  );
  if (inCore) return inCore;

  // Nếu id có định dạng 'hv-[wardId]-[index]'
  const match = identifier.match(/^hv-(.+)-(\d+)$/);
  if (match) {
    const wardId = match[1];
    const wardMembers = getMembersByWard(wardId);
    return wardMembers.find((m) => m.id === identifier);
  }

  // Quét toàn bộ các địa bàn
  for (const ward of ADMINISTRATIVE_WARDS) {
    const members = getMembersByWard(ward.id);
    const found = members.find(
      (m) => m.id === identifier || m.memberCode.toLowerCase() === identifier.toLowerCase()
    );
    if (found) return found;
  }

  return undefined;
}
