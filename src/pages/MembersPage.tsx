import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ADMINISTRATIVE_WARDS, DISTRICT_LIST } from '../data/wards';
import { matchVietnamese } from '../utils/vietnamese';
import { 
  Building2, 
  Search, 
  Users, 
  ChevronRight, 
  X, 
  AlertCircle,
  MapPin,
  Filter
} from 'lucide-react';

export const MembersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('all');

  // Lọc địa bàn theo từ khóa tìm kiếm (có dấu / không dấu) và quận/huyện
  const filteredWards = useMemo(() => {
    return ADMINISTRATIVE_WARDS.filter((ward) => {
      const matchDistrict = selectedDistrict === 'all' || ward.district === selectedDistrict;
      if (!matchDistrict) return false;

      if (!searchQuery.trim()) return true;
      const matchName = matchVietnamese(ward.name, searchQuery);
      const matchType = matchVietnamese(ward.unitType, searchQuery);
      const matchDist = matchVietnamese(ward.district, searchQuery);
      return matchName || matchType || matchDist;
    });
  }, [searchQuery, selectedDistrict]);

  const totalMembersCount = useMemo(() => {
    return ADMINISTRATIVE_WARDS.reduce((sum, w) => sum + w.memberCount, 0);
  }, []);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Tiêu đề trang */}
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-2xl bg-[#fdf0f0] text-[#D5222A] shrink-0">
            <Building2 className="w-7 h-7 stroke-[2.2]" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#138348] tracking-tight leading-[1.35]">
              Tra cứu theo Phường / Xã & Hội viên
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-0.5 leading-normal">
              Danh mục địa bàn hành chính TP Hà Nội và hồ sơ hội viên minh họa
            </p>
          </div>
        </div>
      </div>

      {/* Thông báo minh họa dữ liệu chuẩn mực duy nhất */}
      <div className="bg-[#fef9e8] border-2 border-[#F4C430] rounded-2xl p-4 sm:p-5 text-slate-900 flex items-start gap-3.5">
        <AlertCircle className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
        <div className="space-y-1 text-sm sm:text-base">
          <div className="font-extrabold text-amber-950 uppercase tracking-wide leading-tight">
            Dữ liệu minh họa đang chờ đối chiếu chuẩn hóa:
          </div>
          <p className="text-slate-700 leading-relaxed">
            Danh mục địa bàn dưới đây sử dụng tên xác thực của các đơn vị hành chính TP Hà Nội sau sắp xếp năm 2025. Số lượng và hồ sơ hội viên là <strong>dữ liệu giả định phục vụ demo</strong>, chưa kết nối cơ sở dữ liệu và không dùng thông tin cá nhân thật.
          </p>
        </div>
      </div>

      {/* Thanh công cụ tìm kiếm và lọc địa bàn */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border-2 border-slate-200 shadow-sm space-y-4">
        <div>
          <label htmlFor="ward-search" className="block text-base sm:text-lg font-bold text-slate-900 mb-2 leading-[1.35]">
            Tìm kiếm theo tên Phường, Xã hoặc Quận, Huyện (Gõ có dấu hoặc không dấu):
          </label>
          <div className="relative">
            <input
              id="ward-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ví dụ: 'Kim Mã', 'kim ma', 'Bat Trang', 'Hoan Kiem', 'Son Tay'..."
              className="w-full px-4 py-3.5 pl-12 pr-10 rounded-xl border-2 border-slate-300 focus:border-[#138348] focus:ring-4 focus:ring-emerald-100 text-base sm:text-lg font-medium text-slate-900 transition-all outline-none"
            />
            <Search className="w-6 h-6 text-slate-400 absolute left-4 top-4" />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-3.5 p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                title="Xóa ô tìm kiếm"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Bộ lọc nhanh theo Quận / Huyện */}
        <div className="pt-2 border-t border-slate-100 space-y-2">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
            <Filter className="w-4 h-4 text-[#138348]" />
            <span>Lọc nhanh theo Quận / Huyện:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSelectedDistrict('all')}
              className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all min-h-[42px] cursor-pointer ${
                selectedDistrict === 'all'
                  ? 'bg-[#138348] text-white shadow-sm ring-2 ring-[#138348]'
                  : 'bg-[#F4F6F5] text-slate-700 hover:bg-slate-200'
              }`}
            >
              Tất cả ({ADMINISTRATIVE_WARDS.length} địa bàn)
            </button>

            {DISTRICT_LIST.map((dist) => (
              <button
                key={dist}
                type="button"
                onClick={() => setSelectedDistrict(dist)}
                className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all min-h-[42px] cursor-pointer ${
                  selectedDistrict === dist
                    ? 'bg-[#138348] text-white shadow-sm ring-2 ring-[#138348]'
                    : 'bg-[#F4F6F5] text-slate-700 hover:bg-slate-200'
                }`}
              >
                {dist}
              </button>
            ))}
          </div>
        </div>

        {/* Thống kê kết quả */}
        <div className="text-sm font-semibold text-slate-600 pt-1 flex items-center justify-between flex-wrap gap-2">
          <span>
            Đang hiển thị <strong>{filteredWards.length}</strong> / {ADMINISTRATIVE_WARDS.length} địa bàn (tổng {totalMembersCount} hồ sơ hội viên mẫu)
          </span>
          {(searchQuery || selectedDistrict !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedDistrict('all');
              }}
              className="text-[#138348] font-bold hover:underline"
            >
              Đặt lại bộ lọc
            </button>
          )}
        </div>
      </div>

      {/* Danh sách địa bàn Phường / Xã */}
      {filteredWards.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredWards.map((ward) => (
            <Link
              key={ward.id}
              to={`/hoi-vien/phuong/${ward.id}`}
              className="bg-white rounded-2xl border-2 border-slate-200 hover:border-[#138348] p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group focus:outline-none focus:ring-4 focus:ring-emerald-200"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-xs font-black uppercase px-2.5 py-1 rounded-md tracking-wider ${
                      ward.unitType === 'Phường'
                        ? 'bg-[#fdf0f0] text-[#D5222A] border border-[#fee2e2]'
                        : ward.unitType === 'Xã'
                        ? 'bg-[#e8f5ee] text-[#138348] border border-[#dcfce7]'
                        : 'bg-[#fef9e8] text-amber-900 border border-[#fefce8]'
                    }`}
                  >
                    {ward.unitType}
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4F6F5] text-slate-700 text-xs sm:text-sm font-bold">
                    <Users className="w-3.5 h-3.5 text-[#138348]" />
                    <span>{ward.memberCount} hội viên</span>
                  </span>
                </div>

                <div>
                  <h2 className="text-xl font-black text-[#138348] group-hover:text-[#B91C1C] transition-colors duration-150 leading-[1.35]">
                    {ward.unitType} {ward.name}
                  </h2>
                  <p className="text-sm font-semibold text-slate-600 mt-1 flex items-center gap-1.5 leading-normal">
                    <MapPin className="w-4 h-4 text-[#D5222A] shrink-0" />
                    <span>{ward.district}</span>
                  </p>
                </div>

                <div className="text-xs text-amber-900 bg-[#fef9e8] p-2 rounded-lg border border-[#fefce8] leading-tight">
                  {ward.statusNote}
                </div>
              </div>

              {/* Nút bấm chuyển sang danh sách hội viên */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[#138348] group-hover:text-[#0f6e3c] font-bold text-base">
                <span>Xem danh sách hội viên</span>
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
            <Building2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 leading-[1.35]">
            Không tìm thấy địa bàn phù hợp
          </h3>
          <p className="text-slate-600 text-base max-w-md mx-auto">
            Không tìm thấy kết quả nào phù hợp với từ khóa "{searchQuery}".
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedDistrict('all');
            }}
            className="px-5 py-2.5 rounded-xl bg-[#138348] text-white font-bold text-base hover:bg-[#0f6e3c] shadow"
          >
            Hiển thị lại toàn bộ địa bàn
          </button>
        </div>
      )}
    </div>
  );
};
