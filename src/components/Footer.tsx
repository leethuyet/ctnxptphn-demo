import React from 'react';
import { AlertTriangle, MapPin, Phone, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-200 mt-auto border-t-4 border-[#F4C430] no-print">
      {/* Banner cảnh báo Bản Demo - Dữ liệu minh họa */}
      <div className="bg-[#F4C430] text-slate-950 font-bold py-3 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-sm sm:text-base">
          <div className="flex items-center gap-2 bg-amber-600/20 px-3 py-1 rounded-full">
            <AlertTriangle className="w-5 h-5 text-[#D5222A] shrink-0" />
            <span className="tracking-wide uppercase font-black text-slate-950">
              BẢN DEMO – DỮ LIỆU MINH HỌA
            </span>
          </div>
          <span className="font-semibold text-slate-900 leading-normal">
            Hệ thống đang trong giai đoạn thử nghiệm giao diện. Không có dữ liệu cá nhân thật, không lưu trữ thông tin nhạy cảm.
          </span>
        </div>
      </div>

      {/* Nội dung chính của Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cột 1: Thông tin Hội */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white uppercase mb-3 flex items-center gap-2 leading-[1.35]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D5222A] inline-block"></span>
              Hội Cựu TNXP TP Hà Nội
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              Cổng thông tin thử nghiệm và hỗ trợ quản lý hội viên Lực lượng Cựu Thanh niên xung phong Thành phố Hà Nội.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#138348]/20 border border-[#138348] text-emerald-300 text-xs sm:text-sm font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Giao diện chuẩn hóa cho người cao tuổi</span>
            </div>
          </div>

          {/* Cột 2: Thông tin liên hệ mẫu */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[#F4C430] uppercase mb-3 leading-[1.35]">
              Thông tin liên hệ (Mẫu)
            </h3>
            <ul className="space-y-2.5 text-slate-300 text-sm sm:text-base">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Trụ sở: TP. Hà Nội, Việt Nam</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Đường dây hỗ trợ hội viên: (Đang cập nhật)</span>
              </li>
            </ul>
          </div>

          {/* Cột 3: Ghi chú kỹ thuật & mục tiêu */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[#F4C430] uppercase mb-3 leading-[1.35]">
              Mục tiêu phát triển
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-3">
              Giao diện trực quan, cỡ chữ lớn, thao tác đơn giản, tương thích điện thoại di động và máy tính bảng giúp các cô chú hội viên dễ dàng sử dụng.
            </p>
            <p className="text-xs text-slate-400 flex items-center gap-1.5">
              <span>Được xây dựng với tinh thần tri ân</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            </p>
          </div>
        </div>

        {/* Bản quyền và phân cách chân trang */}
        <div className="mt-8 pt-6 border-t border-slate-800 text-center text-xs sm:text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Hội Cựu Thanh niên xung phong TP Hà Nội. Tất cả quyền được bảo lưu.</p>
          <p className="mt-1 font-semibold text-[#F4C430]/90">
            BẢN THỬ NGHIỆM GIAO DIỆN (FRONTEND DEMO)
          </p>
        </div>
      </div>
    </footer>
  );
};
