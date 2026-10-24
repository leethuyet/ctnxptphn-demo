import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ADMINISTRATIVE_WARDS, LEGACY_ADMINISTRATIVE_WARDS, getWardCounts } from '../data/wards';
import { getMembersByWard } from '../data/members';
import { matchVietnamese } from '../utils/vietnamese';
import { 
  Building2, 
  Search, 
  Users, 
  ChevronRight, 
  X, 
  AlertCircle,
  Filter,
  History,
  Sparkles
} from 'lucide-react';

export const MembersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<'all' | 'phuong' | 'xa'>('all');
  const [showLegacyArchive, setShowLegacyArchive] = useState(false);

  const wardCounts = useMemo(() => getWardCounts(), []);

  // Lọc 126 địa bàn theo từ khóa tìm kiếm (có dấu / không dấu) và loại đơn vị (Phường / Xã)
  const filteredWards = useMemo(() => {
    return ADMINISTRATIVE_WARDS.filter((ward) => {
      // 1. Lọc theo Phường / Xã
      if (selectedType === 'phuong' && ward.unitType !== 'Phường') return false;
      if (selectedType === 'xa' && ward.unitType !== 'Xã') return false;

      // 2. Lọc theo từ khóa tìm kiếm (hỗ trợ có dấu và không dấu)
      if (!searchQuery.trim()) return true;
      const matchName = matchVietnamese(ward.name, searchQuery);
      const matchType = matchVietnamese(ward.unitType, searchQuery);
      const matchFullName = matchVietnamese(`${ward.unitType} ${ward.name}`, searchQuery);
      const matchCode = ward.areaCode ? matchVietnamese(ward.areaCode, searchQuery) : false;
      return matchName || matchType || matchFullName || matchCode;
    });
  }, [searchQuery, selectedType]);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Tiêu đề trang */}
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-2xl bg-[#e8f5ee] text-[#138348] shrink-0">
            <Building2 className="w-7 h-7 stroke-[2.2]" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#138348] tracking-tight leading-[1.35]">
              Tra cứu theo Phường / Xã & Hội viên
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-0.5 leading-normal">
              Danh mục 126 đơn vị hành chính cấp xã (51 Phường và 75 Xã) TP Hà Nội theo Nghị quyết 1656/NQ-UBTVQH15
            </p>
          </div>
        </div>
      </div>

      {/* Thông báo căn cứ pháp lý & Chuẩn hóa dữ liệu minh họa */}
      <div className="bg-[#fef9e8] border-2 border-[#F4C430] rounded-2xl p-4 sm:p-5 text-slate-900 flex items-start gap-3.5">
        <AlertCircle className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
        <div className="space-y-1.5 text-sm sm:text-base leading-relaxed">
          <div className="font-extrabold text-amber-950 uppercase tracking-wide leading-tight">
            Danh mục đơn vị hành chính TP Hà Nội năm 2025:
          </div>
          <p className="text-slate-800">
            Căn cứ <strong>Nghị quyết số 1656/NQ-UBTVQH15</strong> của Ủy ban Thường vụ Quốc hội về việc sắp xếp các đơn vị hành chính cấp xã của thành phố Hà Nội năm 2025 (có hiệu lực từ ngày 01/07/2025), toàn thành phố có <strong>126 đơn vị hành chính cấp xã</strong>, gồm <strong>51 phường</strong> và <strong>75 xã</strong>.
          </p>
          <p className="text-slate-600 text-xs sm:text-sm italic">
            * Lưu ý: Hệ thống chỉ hiển thị dữ liệu hội viên mẫu đã có; các đơn vị chưa có hội viên mẫu sẽ hiển thị trạng thái "Chưa có dữ liệu hội viên minh họa", tuyệt đối không tạo số lượng hội viên giả để lấp đầy.
          </p>
        </div>
      </div>

      {/* Thanh công cụ tìm kiếm và bộ lọc Phường / Xã */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border-2 border-slate-200 shadow-sm space-y-5">
        {/* Ô tìm kiếm */}
        <div>
          <label htmlFor="ward-search" className="block text-base sm:text-lg font-bold text-slate-900 mb-2 leading-[1.35]">
            Tìm kiếm theo tên Phường hoặc Xã (hỗ trợ tiếng Việt có dấu và không dấu):
          </label>
          <div className="relative">
            <input
              id="ward-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ví dụ: 'Hoàn Kiếm', 'Ba Đình', 'Bat Trang', 'Soc Son', 'Chương Mỹ'..."
              className="w-full px-4 py-3.5 pl-12 pr-10 rounded-xl border-2 border-slate-300 focus:border-[#138348] focus:ring-4 focus:ring-emerald-100 text-base sm:text-lg font-medium text-slate-900 transition-all outline-none"
            />
            <Search className="w-6 h-6 text-slate-400 absolute left-4 top-4" />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-3.5 p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                title="Xóa ô tìm kiếm"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Bộ lọc Phường / Xã (Đã loại bỏ bộ lọc quận/huyện cũ theo đúng yêu cầu) */}
        <div className="pt-2 border-t border-slate-100 space-y-2">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
            <Filter className="w-4 h-4 text-[#138348]" />
            <span>Lọc theo loại đơn vị hành chính:</span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => setSelectedType('all')}
              className={`px-4 py-2.5 rounded-xl text-sm sm:text-base font-bold transition-all min-h-[44px] cursor-pointer ${
                selectedType === 'all'
                  ? 'bg-[#138348] text-white shadow-sm ring-2 ring-[#138348]'
                  : 'bg-[#F4F6F5] text-slate-700 hover:bg-slate-200'
              }`}
            >
              Tất cả ({wardCounts.total})
            </button>

            <button
              type="button"
              onClick={() => setSelectedType('phuong')}
              className={`px-4 py-2.5 rounded-xl text-sm sm:text-base font-bold transition-all min-h-[44px] cursor-pointer ${
                selectedType === 'phuong'
                  ? 'bg-[#D5222A] text-white shadow-sm ring-2 ring-[#D5222A]'
                  : 'bg-[#fdf0f0] text-[#D5222A] hover:bg-red-100 border border-red-200'
              }`}
            >
              Phường ({wardCounts.phuong})
            </button>

            <button
              type="button"
              onClick={() => setSelectedType('xa')}
              className={`px-4 py-2.5 rounded-xl text-sm sm:text-base font-bold transition-all min-h-[44px] cursor-pointer ${
                selectedType === 'xa'
                  ? 'bg-[#138348] text-white shadow-sm ring-2 ring-[#138348]'
                  : 'bg-[#e8f5ee] text-[#138348] hover:bg-emerald-100 border border-emerald-200'
              }`}
            >
              Xã ({wardCounts.xa})
            </button>
          </div>
        </div>

        {/* Thống kê kết quả */}
        <div className="text-sm font-semibold text-slate-600 pt-1 flex items-center justify-between flex-wrap gap-2">
          <span>
            Đang hiển thị <strong>{filteredWards.length}</strong> / {ADMINISTRATIVE_WARDS.length} đơn vị hành chính cấp xã
          </span>
          {(searchQuery || selectedType !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedType('all');
              }}
              className="text-[#138348] font-bold hover:underline"
            >
              Đặt lại bộ lọc
            </button>
          )}
        </div>
      </div>

      {/* Danh sách 126 địa bàn Phường / Xã */}
      {filteredWards.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredWards.map((ward) => {
            const memberCount = getMembersByWard(ward.id).length;
            const hasMembers = memberCount > 0;

            return (
              <Link
                key={ward.id}
                to={`/hoi-vien/phuong/${ward.id}`}
                className="bg-white rounded-2xl border-2 border-slate-200 hover:border-[#138348] p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group focus:outline-none focus:ring-4 focus:ring-emerald-200"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span
                      className={`text-xs font-black uppercase px-2.5 py-1 rounded-md tracking-wider ${
                        ward.unitType === 'Phường'
                          ? 'bg-[#fdf0f0] text-[#D5222A] border border-[#fee2e2]'
                          : 'bg-[#e8f5ee] text-[#138348] border border-[#dcfce7]'
                      }`}
                    >
                      {ward.unitType}
                    </span>

                    {hasMembers ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4F6F5] text-slate-700 text-xs sm:text-sm font-bold">
                        <Users className="w-3.5 h-3.5 text-[#138348]" />
                        <span>{memberCount} hội viên mẫu</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-medium">
                        <span className="sm:hidden">Chưa có dữ liệu mẫu</span>
                        <span className="hidden sm:inline">Chưa có dữ liệu hội viên minh họa</span>
                      </span>
                    )}
                  </div>

                  <div>
                    <h2 className="text-xl font-black text-[#138348] group-hover:text-[#0B5E34] transition-colors duration-150 leading-[1.35]">
                      {ward.unitType} {ward.name}
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1 flex items-center gap-1.5 leading-normal">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{ward.areaCode}</span>
                    </p>
                  </div>

                  <div className="text-xs text-slate-600 bg-[#F4F6F5] p-2 rounded-lg border border-slate-200 leading-tight">
                    {ward.statusNote}
                  </div>
                </div>

                {/* Nút bấm chuyển sang trang chi tiết địa bàn */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[#138348] group-hover:text-[#0B5E34] font-bold text-base">
                  <span>Xem chi tiết địa bàn & hội viên</span>
                  <div className="w-9 h-9 rounded-xl bg-[#e8f5ee] group-hover:bg-[#138348] group-hover:text-white flex items-center justify-center transition-all">
                    <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-8 sm:p-12 text-center border-2 border-slate-200 space-y-4">
          <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
            <Building2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 leading-[1.35]">
            Không tìm thấy địa bàn phù hợp
          </h3>
          <p className="text-slate-600 text-base max-w-md mx-auto">
            Không tìm thấy kết quả nào phù hợp với từ khóa "{searchQuery}". Bạn có thể thử tìm theo tên tiếng Việt không dấu.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedType('all');
            }}
            className="px-5 py-2.5 rounded-xl bg-[#138348] text-white font-bold text-base hover:bg-[#0f6e3c] shadow cursor-pointer"
          >
            Hiển thị lại toàn bộ 126 địa bàn
          </button>
        </div>
      )}

      {/* LỚP TƯƠNG THÍCH BẢO TOÀN DỮ LIỆU CŨ (Collapsible) */}
      <div className="mt-10 rounded-2xl border-2 border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
        <button
          type="button"
          onClick={() => setShowLegacyArchive(!showLegacyArchive)}
          className="w-full flex items-center justify-between text-left cursor-pointer group"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-slate-100 text-slate-600 group-hover:text-[#138348] transition-colors">
              <History className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#138348] transition-colors">
                Lớp tương thích & Kho hồ sơ mẫu giai đoạn trước sắp xếp (22 địa bàn cũ)
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Bảo đảm các hồ sơ hội viên mẫu cũ vẫn truy cập được nguyên vẹn bằng ID cũ, không làm hỏng route
              </p>
            </div>
          </div>
          <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 shrink-0">
            {showLegacyArchive ? 'Thu gọn ▲' : 'Xem danh mục ▼'}
          </span>
        </button>

        {showLegacyArchive && (
          <div className="pt-4 mt-4 border-t border-slate-100 space-y-3 animate-in fade-in duration-200">
            <p className="text-xs sm:text-sm text-amber-900 bg-[#fef9e8] p-3 rounded-xl border border-amber-200">
              <strong>Ghi chú bảo toàn dữ liệu:</strong> Toàn bộ hồ sơ hội viên mẫu được lập trước sắp xếp 2025 được bảo toàn nguyên vẹn tại đây để kiểm tra đối chiếu. Hệ thống không tự ý suy diễn gán hồ sơ cũ sang địa bàn mới khi chưa có quyết định phân bổ chính thức của Thành hội.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {LEGACY_ADMINISTRATIVE_WARDS.map((lw) => (
                <Link
                  key={lw.id}
                  to={`/hoi-vien/phuong/${lw.id}`}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#F4F6F5] hover:bg-emerald-50 text-slate-700 hover:text-[#138348] border border-slate-200 text-xs sm:text-sm font-semibold transition-colors"
                >
                  <span>{lw.unitType} {lw.name}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 text-slate-600 font-bold">
                    {getMembersByWard(lw.id).length} mẫu
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
