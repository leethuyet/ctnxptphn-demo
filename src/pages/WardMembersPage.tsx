import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getWardById } from '../data/wards';
import { getMembersByWard } from '../data/members';
import { MemberAvatar } from '../components/MemberAvatar';
import { matchVietnamese } from '../utils/vietnamese';
import { 
  ArrowLeft, 
  Search, 
  Users, 
  MapPin, 
  ChevronRight, 
  X, 
  AlertCircle,
  Building2,
  BadgeCheck,
  History,
  FileQuestion
} from 'lucide-react';

export const WardMembersPage: React.FC = () => {
  const { wardId } = useParams<{ wardId: string }>();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const ward = wardId ? getWardById(wardId) : undefined;
  const members = useMemo(() => {
    return wardId ? getMembersByWard(wardId) : [];
  }, [wardId]);

  // Lọc theo họ tên hoặc mã số hội viên (hỗ trợ có dấu và không dấu)
  const filteredMembers = useMemo(() => {
    if (!searchQuery.trim()) return members;
    return members.filter((member) => {
      const matchName = matchVietnamese(member.fullName, searchQuery);
      const matchCode = matchVietnamese(member.memberCode, searchQuery);
      const matchBranch = matchVietnamese(member.branchName, searchQuery);
      return matchName || matchCode || matchBranch;
    });
  }, [members, searchQuery]);

  if (!ward) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-12 text-center border-2 border-slate-200 max-w-2xl mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#fdf0f0] text-[#D5222A] mx-auto flex items-center justify-center">
          <AlertCircle className="w-9 h-9 stroke-[2.2]" />
        </div>
        <h1 className="text-2xl font-black text-slate-900 leading-[1.35]">
          Không tìm thấy địa bàn hành chính
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Địa bàn bạn yêu cầu không nằm trong danh mục đơn vị hành chính TP Hà Nội.
        </p>
        <Link
          to="/hoi-vien"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#138348] hover:bg-[#0f6e3c] text-white font-bold text-base shadow min-h-[48px]"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Quay lại danh mục 126 Phường/Xã</span>
        </Link>
      </div>
    );
  }

  const hasMembers = members.length > 0;

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Thanh điều hướng quay lại & Tiêu đề địa bàn */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => navigate('/hoi-vien')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm sm:text-base border-2 border-slate-300 shadow-sm transition-all min-h-[44px] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
              <span>Quay lại danh sách Phường/Xã</span>
            </button>
            <span className="text-slate-400">/</span>
            <span className="text-sm sm:text-base font-semibold text-slate-600">
              {ward.unitType} {ward.name}
            </span>
          </div>

          <div className="flex items-center gap-3 pt-1">
            <div className="p-2.5 rounded-2xl bg-[#e8f5ee] text-[#138348] shrink-0">
              <Building2 className="w-7 h-7 stroke-[2.2]" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-[#138348] tracking-tight flex items-center gap-2.5 flex-wrap leading-[1.35]">
                <span>Danh sách hội viên: {ward.unitType} {ward.name}</span>
                {hasMembers ? (
                  <span className="text-xs sm:text-sm font-bold bg-[#138348] text-white px-3 py-1 rounded-full">
                    {members.length} hội viên mẫu
                  </span>
                ) : (
                  <span className="text-xs sm:text-sm font-bold bg-slate-200 text-slate-700 px-3 py-1 rounded-full">
                    Chưa có dữ liệu hội viên minh họa
                  </span>
                )}
              </h1>
              <p className="text-slate-600 text-sm sm:text-base mt-0.5 flex items-center gap-1.5 leading-normal">
                <MapPin className="w-4 h-4 text-[#D5222A]" />
                <span>{ward.statusNote}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Thông báo phân định loại địa bàn (Địa bàn mới NQ 1656 hoặc Địa bàn cũ bảo toàn) */}
      {ward.isLegacy ? (
        <div className="bg-[#fef9e8] border-2 border-[#F4C430] rounded-2xl p-4 sm:p-5 text-slate-900 flex items-start gap-3.5">
          <History className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-sm sm:text-base leading-relaxed space-y-1">
            <span className="font-extrabold text-amber-950 uppercase tracking-wide">
              Hồ sơ mẫu giai đoạn trước sắp xếp (Lớp tương thích bảo toàn dữ liệu):{' '}
            </span>
            <p className="text-slate-700">
              Các hồ sơ hội viên dưới đây thuộc địa bàn cũ trước khi sắp xếp năm 2025. Dữ liệu đang được lưu trữ bảo toàn và chờ Thành hội đối chiếu phân bổ vào 126 đơn vị hành chính mới theo Nghị quyết 1656/NQ-UBTVQH15.
            </p>
          </div>
        </div>
      ) : hasMembers ? (
        <div className="bg-[#fef9e8] border-2 border-[#F4C430] rounded-2xl p-4 text-slate-900 flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-sm sm:text-base leading-relaxed">
            <span className="font-extrabold text-amber-950 uppercase tracking-wide leading-tight">
              Lưu ý bản thử nghiệm:{' '}
            </span>
            Danh sách dưới đây là các hồ sơ hội viên <strong>giả lập phục vụ kiểm tra giao diện</strong>. Bấm vào từng hội viên để xem chi tiết mẫu hồ sơ.
          </div>
        </div>
      ) : null}

      {/* TRƯỜNG HỢP 1: CÓ HỘI VIÊN MẪU -> HIỂN THỊ Ô TÌM KIẾM & DANH SÁCH THẺ */}
      {hasMembers ? (
        <>
          {/* Thanh tìm kiếm hội viên theo tên hoặc mã số (Hỗ trợ tiếng Việt có dấu và không dấu) */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border-2 border-slate-200 shadow-sm space-y-3">
            <label htmlFor="search-member" className="block text-base font-bold text-slate-800 leading-[1.35]">
              Tìm kiếm hội viên theo Họ tên hoặc Mã số (không phân biệt dấu):
            </label>
            
            <div className="relative">
              <input
                id="search-member"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ví dụ: 'Nguyễn Văn Bình', 'Binh', 'HN-BD-01001', 'Chi hội 1'..."
                className="w-full px-4 py-3.5 pl-12 pr-10 rounded-xl border-2 border-slate-300 focus:border-[#138348] focus:ring-4 focus:ring-emerald-100 text-base sm:text-lg font-medium text-slate-900 transition-all outline-none"
              />
              <Search className="w-6 h-6 text-slate-400 absolute left-4 top-4" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-3.5 p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all"
                  title="Xóa tìm kiếm"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {searchQuery && (
              <div className="text-sm text-slate-600 flex items-center justify-between">
                <span>
                  Tìm thấy <strong>{filteredMembers.length}</strong> kết quả cho từ khóa "{searchQuery}"
                </span>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-[#138348] font-bold hover:underline"
                >
                  Hiện tất cả hội viên
                </button>
              </div>
            )}
          </div>

          {/* Danh sách thẻ hội viên */}
          {filteredMembers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {filteredMembers.map((member) => (
                <Link
                  key={member.id}
                  to={`/hoi-vien/ho-so/${member.id}`}
                  className="bg-white rounded-2xl border-2 border-slate-200 hover:border-[#138348] p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group focus:outline-none focus:ring-4 focus:ring-emerald-200"
                >
                  <div className="flex items-start gap-4">
                    {/* Ảnh đại diện minh họa */}
                    <MemberAvatar fullName={member.fullName} gender={member.gender} size="lg" />

                    {/* Thông tin cốt lõi */}
                    <div className="flex-1 space-y-1.5 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-md bg-[#F4F6F5] text-slate-700 border border-slate-300">
                          {member.memberCode}
                        </span>
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-[#fdf0f0] text-[#D5222A] border border-[#fee2e2]">
                          {member.positionInAssoc}
                        </span>
                      </div>

                      <h2 className="text-lg sm:text-xl font-bold text-[#111827] group-hover:text-[#138348] transition-colors duration-150 leading-[1.35] truncate">
                        {member.fullName}
                      </h2>

                      <p className="text-sm text-slate-600 flex items-center gap-1.5 leading-normal">
                        <BadgeCheck className="w-4 h-4 text-[#138348] shrink-0" />
                        <span className="truncate">{member.branchName}</span>
                      </p>

                      <p className="text-xs text-slate-500 leading-normal">
                        Sinh năm: <strong>{member.birthDate.split('/')[2] || member.birthDate}</strong> • Tham gia TNXP: <strong>{member.tnxpPeriod}</strong>
                      </p>
                    </div>
                  </div>

                  {/* Nút Xem chi tiết hồ sơ - Nút lớn, dễ bấm */}
                  <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-[#138348] group-hover:text-[#0B5E34] font-bold text-base">
                    <span>Xem hồ sơ chi tiết</span>
                    <div className="w-9 h-9 rounded-xl bg-[#e8f5ee] group-hover:bg-[#138348] group-hover:text-white flex items-center justify-center transition-all">
                      <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 sm:p-12 text-center border-2 border-slate-200 space-y-4">
              <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 leading-[1.35]">
                Không tìm thấy hội viên phù hợp
              </h3>
              <p className="text-slate-600 text-base max-w-md mx-auto">
                Không có kết quả nào trùng với từ khóa "{searchQuery}". Bạn có thể thử tìm theo họ hoặc tên riêng (không dấu).
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="px-5 py-2.5 rounded-xl bg-[#138348] text-white font-bold text-base hover:bg-[#0f6e3c] shadow cursor-pointer"
              >
                Hiển thị lại toàn bộ danh sách
              </button>
            </div>
          )}
        </>
      ) : (
        /* TRƯỜNG HỢP 2: CHƯA CÓ HỘI VIÊN MẪU (Theo yêu cầu C.7 - Không tạo dữ liệu giả để lấp đầy) */
        <div className="bg-white rounded-3xl p-8 sm:p-14 text-center border-2 border-slate-200 shadow-sm space-y-6 max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-[#e8f5ee] text-[#138348] mx-auto flex items-center justify-center">
            <FileQuestion className="w-9 h-9 stroke-[2.2]" />
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-[1.35]">
              Chưa có dữ liệu hội viên minh họa
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Hiện tại <strong>{ward.unitType} {ward.name}</strong> chưa có hồ sơ hội viên mẫu trong cơ sở dữ liệu thử nghiệm. Dữ liệu hội viên thực tế sẽ được Thành hội cập nhật sau khi hoàn tất công tác tổ chức, rà soát hội viên theo địa bàn hành chính mới năm 2025.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/hoi-vien"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#138348] hover:bg-[#0f6e3c] text-white font-bold text-base shadow transition-all min-h-[48px]"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Về danh mục 126 Phường/Xã</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
