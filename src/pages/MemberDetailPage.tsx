import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getMemberById } from '../data/members';
import { LogoPlaceholder } from '../components/LogoPlaceholder';
import { MemberAvatar } from '../components/MemberAvatar';
import { 
  ArrowLeft, 
  MapPin, 
  Building2, 
  Award, 
  ShieldCheck, 
  BookOpen, 
  History, 
  Printer, 
  AlertCircle,
  FileText
} from 'lucide-react';

export const MemberDetailPage: React.FC = () => {
  const { memberId } = useParams<{ memberId: string }>();
  const navigate = useNavigate();

  const member = memberId ? getMemberById(memberId) : undefined;

  if (!member) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 text-center border-2 border-slate-200 max-w-2xl mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#fdf0f0] text-[#D5222A] mx-auto flex items-center justify-center">
          <AlertCircle className="w-9 h-9 stroke-[2.2]" />
        </div>
        <h1 className="text-2xl font-black text-slate-900 leading-[1.35]">
          Không tìm thấy hồ sơ hội viên
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Mã định danh hồ sơ không tồn tại hoặc dữ liệu minh họa đã được làm mới. Vui lòng quay lại danh sách để chọn hồ sơ hội viên khác.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/hoi-vien"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#138348] hover:bg-[#0f6e3c] text-white font-bold text-base shadow min-h-[48px]"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Về danh sách Phường/Xã</span>
          </Link>
        </div>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto">
      {/* Thanh điều hướng quay lại & Công cụ in ấn */}
      <div className="flex flex-wrap items-center justify-between gap-3 no-print">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border-2 border-slate-300 shadow-sm transition-all min-h-[44px] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
            <span>Quay lại</span>
          </button>

          <Link
            to={`/hoi-vien/phuong/${member.wardId}`}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#e8f5ee] hover:bg-emerald-100 text-[#138348] font-bold text-sm sm:text-base border border-emerald-200 transition-all min-h-[44px]"
          >
            <span>DS Hội viên {member.unitType} {member.wardName}</span>
          </Link>

          <Link
            to="/hoi-vien"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#F4F6F5] hover:bg-slate-200 text-slate-700 font-semibold text-sm sm:text-base transition-all min-h-[44px]"
          >
            <span>Tất cả Phường/Xã</span>
          </Link>
        </div>

        <button
          type="button"
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#138348] hover:bg-[#0f6e3c] text-white font-bold text-sm sm:text-base shadow-sm transition-all min-h-[44px] cursor-pointer"
          title="In hồ sơ hội viên ra giấy A4 hoặc lưu PDF"
        >
          <Printer className="w-4 h-4 stroke-[2.2]" />
          <span>In hồ sơ</span>
        </button>
      </div>

      {/* Thông báo dữ liệu giả lập minh họa duy nhất, rõ ràng */}
      <div className="bg-[#fef9e8] border-2 border-[#F4C430] rounded-2xl p-4 text-slate-900 flex items-start gap-3 no-print">
        <AlertCircle className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
        <div className="text-sm sm:text-base leading-relaxed">
          <span className="font-extrabold text-amber-950 uppercase tracking-wide">
            Hồ sơ mẫu giả lập (Bản Demo Bước 2.2):{' '}
          </span>
          Toàn bộ thông tin hội viên dưới đây là dữ liệu mẫu giả định để kiểm tra giao diện hiển thị, không phải dữ liệu thật của bất kỳ cá nhân nào.
        </div>
      </div>

      {/* Khung Hồ Sơ Trang Trọng (Chuẩn hóa mẫu hồ sơ Hội Cựu TNXP) */}
      <article className="bg-white rounded-3xl border-2 border-slate-300 shadow-md p-6 sm:p-10 space-y-8 print:p-0 print:border-none print:shadow-none">
        
        {/* PHẦN ĐẦU HỒ SƠ: Logo Hội bên trái cụm Tên Hội (Luôn hiển thị khi in) */}
        <header className="profile-header border-b-2 border-[#D5222A] pb-6 sm:pb-8 space-y-6 print:pb-4 print:space-y-4 print:border-b-2 print:border-red-600">
          
          {/* Logo Hội và Cụm Tên Hội trên cùng một hàng (Desktop & Print) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center print:flex-row print:gap-6">
            {/* 1. Logo Hội giữ ở phía bên trái cụm tên Hội, bảo đảm tỷ lệ hình tròn 1:1 */}
            <div className="shrink-0 flex items-center justify-center">
              <LogoPlaceholder 
                size="lg" 
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 shadow-sm print:w-20 print:h-20" 
              />
            </div>

            {/* 2. Cụm Quốc hiệu và Tên Hội - Căn giữa toàn bộ dòng chữ trong vùng chứa linh hoạt */}
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-1 min-w-0 max-w-2xl">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600 leading-normal text-center print:text-black">
                CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 leading-normal text-center print:text-black">
                Độc lập - Tự do - Hạnh phúc
              </p>
              <div className="w-28 border-b-2 border-[#D5222A] my-1 mx-auto print:border-red-600"></div>
              
              <p className="text-sm sm:text-base font-extrabold text-[#D5222A] uppercase tracking-wide leading-normal text-center print:text-[#D5222A]">
                HỘI CỰU THANH NIÊN XUNG PHONG VIỆT NAM
              </p>
              <h1 className="text-lg sm:text-xl md:text-2xl font-black text-[#138348] uppercase tracking-tight leading-[1.35] text-center print:text-[#138348]">
                HỘI CỰU THANH NIÊN XUNG PHONG TP HÀ NỘI
              </h1>
            </div>
          </div>

          {/* Tiêu đề Hồ sơ thông tin hội viên */}
          <div className="pt-2 text-center print:pt-1">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#fdf0f0] border border-[#fee2e2] text-[#D5222A] text-xs sm:text-sm font-black uppercase tracking-wider mb-2 print:border-slate-400 print:bg-white print:text-black">
              HỘI VIÊN CHÍNH THỨC
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase leading-[1.35] print:text-2xl print:text-black">
              HỒ SƠ THÔNG TIN HỘI VIÊN
            </h2>
            <p className="text-slate-500 text-sm font-medium mt-1 leading-normal print:text-slate-600">
              (Lưu trữ phục vụ sinh hoạt Hội và công tác nghĩa tình đồng đội)
            </p>
          </div>

          {/* Khối định danh: Ảnh chân dung + Họ tên & Mã số */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-[#F4F6F5] p-6 rounded-2xl border border-slate-200 print:flex-row print:bg-white print:border-slate-300 print:p-4 print:gap-5 print:rounded-xl">
            {/* Ảnh chân dung hội viên */}
            <div className="flex flex-col items-center text-center shrink-0">
              <MemberAvatar fullName={member.fullName} gender={member.gender} size="xl" />
              <span className="text-xs text-slate-500 font-semibold mt-1.5 leading-tight print:text-black">
                Ảnh chân dung 4x6
              </span>
            </div>

            {/* Tên và Mã hội viên nổi bật */}
            <div className="flex-1 text-center sm:text-left space-y-2.5 print:text-left">
              <div className="text-xs uppercase font-bold tracking-wider text-slate-500 leading-tight print:text-slate-600">
                Đồng chí:
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 leading-[1.35] print:text-2xl print:text-black">
                {member.fullName}
              </div>
              
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 print:justify-start">
                <span className="inline-flex items-center px-3 py-1 rounded-lg bg-[#e8f5ee] text-[#138348] font-bold text-sm border border-emerald-200 print:bg-white print:border-slate-400 print:text-black">
                  Mã số: {member.memberCode}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-lg bg-[#fdf0f0] text-[#D5222A] font-bold text-sm border border-red-200 print:bg-white print:border-slate-400 print:text-black">
                  {member.unitType} {member.wardName}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-lg bg-white text-slate-800 font-semibold text-sm border border-slate-200 print:border-slate-400 print:text-black">
                  {member.districtName}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-lg bg-[#fef9e8] text-amber-900 font-semibold text-sm border border-amber-200 print:bg-white print:border-slate-400 print:text-black">
                  {member.positionInAssoc}
                </span>
              </div>

              <p className="text-sm text-slate-600 pt-1 leading-normal print:text-black">
                Sinh hoạt tại: <strong>{member.branchName}</strong>
              </p>
            </div>
          </div>
        </header>

        {/* 6 NHÓM THÔNG TIN CHI TIẾT (Desktop & Print: 2 cột; Mobile: 1 cột) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 print:grid-cols-2 print:gap-4">
          
          {/* NHÓM 1: THÔNG TIN CÁ NHÂN */}
          <section className="profile-section print-avoid-break bg-[#F4F6F5] rounded-2xl p-5 sm:p-6 border border-slate-200 space-y-4 print:bg-white print:border-slate-300 print:p-4 print:rounded-xl">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200 print:border-slate-300">
              <div className="w-3 h-5 bg-[#D5222A] rounded-sm print:border print:border-slate-700"></div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-[1.35] print:text-base print:text-black">
                1. Thông tin cá nhân
              </h3>
            </div>
            
            <dl className="space-y-3 text-base print:space-y-2 print:text-sm">
              <div>
                <dt className="text-sm font-semibold text-slate-500 print:text-xs print:text-slate-600">Họ và tên khai sinh:</dt>
                <dd className="font-bold text-slate-900 text-lg leading-normal print:text-base print:text-black">{member.fullName}</dd>
              </div>
              <div className="grid grid-cols-2 gap-4 print:gap-2">
                <div>
                  <dt className="text-sm font-semibold text-slate-500 print:text-xs print:text-slate-600">Ngày sinh:</dt>
                  <dd className="font-bold text-slate-900 leading-normal print:text-black">{member.birthDate}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-500 print:text-xs print:text-slate-600">Giới tính:</dt>
                  <dd className="font-bold text-slate-900 leading-normal print:text-black">{member.gender}</dd>
                </div>
              </div>
              <div>
                <dt className="text-sm font-semibold text-slate-500 print:text-xs print:text-slate-600">Quê quán:</dt>
                <dd className="font-semibold text-slate-800 leading-normal print:text-black">{member.hometown}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-slate-500 print:text-xs print:text-slate-600">Nơi cư trú hiện nay:</dt>
                <dd className="font-semibold text-slate-800 flex items-start gap-1.5 mt-0.5 leading-normal print:text-black">
                  <MapPin className="w-4 h-4 text-[#D5222A] shrink-0 mt-1 print:text-black" />
                  <span>{member.currentResidence}</span>
                </dd>
              </div>
            </dl>
          </section>

          {/* NHÓM 2: THÔNG TIN HỘI */}
          <section className="profile-section print-avoid-break bg-[#F4F6F5] rounded-2xl p-5 sm:p-6 border border-slate-200 space-y-4 print:bg-white print:border-slate-300 print:p-4 print:rounded-xl">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200 print:border-slate-300">
              <div className="w-3 h-5 bg-[#138348] rounded-sm print:border print:border-slate-700"></div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-[1.35] print:text-base print:text-black">
                2. Thông tin sinh hoạt Hội
              </h3>
            </div>

            <dl className="space-y-3 text-base print:space-y-2 print:text-sm">
              <div>
                <dt className="text-sm font-semibold text-slate-500 print:text-xs print:text-slate-600">Mã số thẻ hội viên:</dt>
                <dd className="font-bold text-[#138348] text-lg font-mono leading-normal print:text-base print:text-black">{member.memberCode}</dd>
              </div>
              <div className="grid grid-cols-2 gap-4 print:gap-2">
                <div>
                  <dt className="text-sm font-semibold text-slate-500 print:text-xs print:text-slate-600">Ngày vào Hội:</dt>
                  <dd className="font-bold text-slate-900 leading-normal print:text-black">{member.joinDate}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-500 print:text-xs print:text-slate-600">Chức vụ trong Hội:</dt>
                  <dd className="font-bold text-[#D5222A] leading-normal print:text-black">{member.positionInAssoc}</dd>
                </div>
              </div>
              <div>
                <dt className="text-sm font-semibold text-slate-500 print:text-xs print:text-slate-600">Chi hội trực thuộc:</dt>
                <dd className="font-bold text-slate-900 leading-normal print:text-black">{member.branchName}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-slate-500 print:text-xs print:text-slate-600">Địa bàn hành chính:</dt>
                <dd className="font-semibold text-slate-800 flex items-center gap-1.5 mt-0.5 leading-normal print:text-black">
                  <Building2 className="w-4 h-4 text-[#138348] shrink-0 print:text-black" />
                  <span>{member.unitType} {member.wardName}, {member.districtName}</span>
                </dd>
              </div>
            </dl>
          </section>

          {/* NHÓM 3: QUÁ TRÌNH TNXP */}
          <section className="profile-section print-avoid-break bg-[#F4F6F5] rounded-2xl p-5 sm:p-6 border border-slate-200 space-y-4 md:col-span-2 print:col-span-2 print:bg-white print:border-slate-300 print:p-4 print:rounded-xl">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200 print:border-slate-300">
              <div className="w-3 h-5 bg-[#F4C430] rounded-sm print:border print:border-slate-700"></div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-[1.35] print:text-base print:text-black">
                3. Quá trình tham gia Thanh niên xung phong
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2 print:gap-4 print:text-sm">
              <div className="space-y-3 print:space-y-2">
                <div>
                  <dt className="text-sm font-semibold text-slate-500 print:text-xs print:text-slate-600">Thời gian tham gia TNXP:</dt>
                  <dd className="font-black text-amber-900 text-lg flex items-center gap-2 mt-0.5 leading-normal print:text-base print:text-black">
                    <History className="w-5 h-5 text-amber-700 print:text-black" />
                    <span>{member.tnxpPeriod}</span>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-500 print:text-xs print:text-slate-600">Đơn vị TNXP:</dt>
                  <dd className="font-bold text-slate-900 leading-normal print:text-black">{member.tnxpUnit}</dd>
                </div>
              </div>

              <div className="space-y-3 print:space-y-2">
                <div>
                  <dt className="text-sm font-semibold text-slate-500 print:text-xs print:text-slate-600">Địa bàn / Tuyến đường hoạt động:</dt>
                  <dd className="font-semibold text-slate-800 leading-normal print:text-black">{member.tnxpLocation}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-500 print:text-xs print:text-slate-600">Nhiệm vụ đảm nhiệm:</dt>
                  <dd className="font-semibold text-slate-800 leading-normal print:text-black">{member.tnxpMission}</dd>
                </div>
              </div>
            </div>
          </section>

          {/* NHÓM 4: QUÁ TRÌNH CÔNG TÁC & TRÌNH ĐỘ */}
          <section className="profile-section print-avoid-break bg-[#F4F6F5] rounded-2xl p-5 sm:p-6 border border-slate-200 space-y-4 print:bg-white print:border-slate-300 print:p-4 print:rounded-xl">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200 print:border-slate-300">
              <div className="w-3 h-5 bg-slate-600 rounded-sm print:border print:border-slate-700"></div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-[1.35] print:text-base print:text-black">
                4. Quá trình công tác & Trình độ
              </h3>
            </div>

            <dl className="space-y-3 text-base print:space-y-2 print:text-sm">
              <div>
                <dt className="text-sm font-semibold text-slate-500 print:text-xs print:text-slate-600">Trình độ học vấn & Chuyên môn:</dt>
                <dd className="font-semibold text-slate-800 flex items-center gap-1.5 mt-0.5 leading-normal print:text-black">
                  <BookOpen className="w-4 h-4 text-slate-600 shrink-0 print:text-black" />
                  <span>{member.education}</span>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-slate-500 print:text-xs print:text-slate-600">Quá trình sau khi hoàn thành TNXP:</dt>
                <dd className="font-semibold text-slate-800 leading-relaxed mt-0.5 print:text-black">
                  {member.postTnxpCareer}
                </dd>
              </div>
            </dl>
          </section>

          {/* NHÓM 5: KHEN THƯỞNG, DANH HIỆU */}
          <section className="profile-section print-avoid-break bg-[#F4F6F5] rounded-2xl p-5 sm:p-6 border border-slate-200 space-y-4 print:bg-white print:border-slate-300 print:p-4 print:rounded-xl">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200 print:border-slate-300">
              <div className="w-3 h-5 bg-[#F4C430] rounded-sm print:border print:border-slate-700"></div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-[1.35] print:text-base print:text-black">
                5. Khen thưởng & Danh hiệu
              </h3>
            </div>

            <ul className="space-y-2.5 print:space-y-1.5 print:text-sm">
              {member.awards.map((award, idx) => (
                <li key={idx} className="flex items-start gap-2.5 font-bold text-slate-800 text-base leading-normal print:text-sm print:text-black">
                  <Award className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5 print:text-black" />
                  <span>{award}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* NHÓM 6: THÔNG TIN CHẾ ĐỘ CHÍNH SÁCH */}
          <section className="profile-section print-avoid-break bg-[#fef9e8] rounded-2xl p-5 sm:p-6 border-2 border-[#F4C430] space-y-4 md:col-span-2 print:col-span-2 print:bg-white print:border-slate-300 print:p-4 print:rounded-xl">
            <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-amber-200 print:border-slate-300">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-5 bg-[#D5222A] rounded-sm print:border print:border-slate-700"></div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-[1.35] print:text-base print:text-black">
                  6. Thông tin chế độ chính sách (Dữ liệu mô phỏng)
                </h3>
              </div>
              <span className="text-xs font-bold uppercase text-amber-900 bg-amber-200 px-3 py-1 rounded-full print:bg-slate-100 print:border print:border-slate-300 print:text-black">
                Dữ liệu minh họa
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base print:grid-cols-2 print:gap-3 print:text-sm">
              <div>
                <span className="text-sm font-semibold text-slate-500 block leading-tight print:text-xs print:text-slate-600">Diện chính sách áp dụng:</span>
                <span className="font-bold text-slate-900 leading-normal print:text-black">{member.policyInfo.policyCategory}</span>
              </div>
              <div>
                <span className="text-sm font-semibold text-slate-500 block leading-tight print:text-xs print:text-slate-600">Tình trạng thực hiện:</span>
                <span className="font-bold text-[#138348] flex items-center gap-1.5 mt-0.5 leading-normal print:text-black">
                  <ShieldCheck className="w-5 h-5 text-[#138348] shrink-0 print:text-black" />
                  {member.policyInfo.benefitStatus}
                </span>
              </div>
              <div>
                <span className="text-sm font-semibold text-slate-500 block leading-tight print:text-xs print:text-slate-600">Bảo hiểm y tế:</span>
                <span className="font-semibold text-slate-800 leading-normal print:text-black">{member.policyInfo.insuranceStatus}</span>
              </div>
              <div>
                <span className="text-sm font-semibold text-slate-500 block leading-tight print:text-xs print:text-slate-600">Ghi chú xác nhận:</span>
                <span className="font-semibold text-amber-950 italic leading-normal print:text-black">{member.policyInfo.note}</span>
              </div>
            </div>

            <div className="mt-2 pt-3 border-t border-amber-200 text-xs sm:text-sm text-slate-600 flex items-center gap-2 leading-normal print:border-slate-300 print:text-xs print:text-slate-600">
              <FileText className="w-4 h-4 text-slate-500 shrink-0 print:text-black" />
              <span>Chỉ hiển thị dữ liệu giả định phục vụ kiểm tra bố cục hồ sơ, không suy diễn điều kiện thực tế.</span>
            </div>
          </section>

        </div>

        {/* Chữ ký xác thực cuối mẫu hồ sơ (Luôn hiển thị khi in) */}
        <footer className="profile-footer pt-8 border-t-2 border-slate-300 grid grid-cols-1 sm:grid-cols-2 gap-8 text-center text-sm sm:text-base print:grid-cols-2 print:gap-8 print:pt-6 print:border-slate-400">
          <div>
            <p className="font-bold uppercase text-slate-700 leading-normal print:text-black">NGƯỜI LẬP HỒ SƠ</p>
            <p className="text-xs text-slate-400 italic leading-normal print:text-slate-500">(Ký, ghi rõ họ tên)</p>
            <div className="h-16 print:h-12"></div>
            <p className="font-bold text-slate-900 leading-normal print:text-black">Ban Kiểm tra & Dữ liệu Hội viên</p>
          </div>
          <div>
            <p className="font-bold uppercase text-slate-700 leading-normal print:text-black">TM. THƯỜNG TRỰC THÀNH HỘI</p>
            <p className="text-xs text-slate-400 italic leading-normal print:text-slate-500">(Ký tên và đóng dấu)</p>
            <div className="h-16 print:h-12"></div>
            <p className="font-bold text-slate-900 leading-normal print:text-black">Hội Cựu TNXP TP Hà Nội</p>
          </div>
        </footer>

      </article>
    </div>
  );
};
