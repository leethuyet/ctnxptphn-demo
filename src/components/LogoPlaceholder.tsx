import React, { useState } from 'react';
import { Image, AlertCircle } from 'lucide-react';

interface LogoPlaceholderProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showLabel?: boolean;
}

/**
 * Component hiển thị Logo chính thức của Hội.
 * CƠ CHẾ HOẠT ĐỘNG:
 * 1. Tự động tìm nạp file logo từ đường dẫn asset tương thích với Vite và GitHub Pages (kể cả subpath).
 * 2. Ưu tiên 'public/logo-hoi-tnxp.png', sau đó là 'public/logo-hoi-tnxp.webp'.
 * 3. Nếu file tồn tại, hiển thị logo thật, giữ đúng tỷ lệ hình tròn 1:1, không cắt viền hay biến dạng.
 * 4. Nếu file chưa tồn tại, hiển thị thông báo rõ ràng về file còn thiếu và đường dẫn cần đặt; tuyệt đối không tự tạo logo khác.
 */
export const LogoPlaceholder: React.FC<LogoPlaceholderProps> = ({ 
  className = '',
  size = 'md',
  showLabel = true
}) => {
  // Lấy BASE_URL chuẩn hóa từ Vite (tương thích GitHub Pages)
  const rawBase = import.meta.env.BASE_URL || './';
  const baseUrl = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

  // Danh sách ứng viên đường dẫn logo
  const candidateSources = [
    `${baseUrl}logo-hoi-tnxp.png`,
    `${baseUrl}logo-hoi-tnxp.webp`,
    './logo-hoi-tnxp.png',
    './logo-hoi-tnxp.webp',
    '/logo-hoi-tnxp.png'
  ];

  const [candidateIndex, setCandidateIndex] = useState(0);
  const [allFailed, setAllFailed] = useState(false);

  const handleImgError = () => {
    if (candidateIndex + 1 < candidateSources.length) {
      setCandidateIndex(prev => prev + 1);
    } else {
      setAllFailed(true);
    }
  };

  const containerSizes = {
    sm: 'w-10 h-10 min-w-[2.5rem]',
    md: 'w-12 h-12 sm:w-16 sm:h-16 min-w-[3rem] sm:min-w-[4rem]',
    lg: 'w-20 h-20 sm:w-24 sm:h-24 min-w-[5rem]',
    xl: 'w-24 h-24 sm:w-28 sm:h-28 min-w-[6rem]'
  };

  // 1. Trường hợp tải được ảnh thật
  if (!allFailed) {
    return (
      <div 
        className={`relative aspect-square rounded-full bg-white p-0.5 shadow-sm border border-slate-200/80 overflow-hidden flex items-center justify-center shrink-0 print:border print:border-slate-300 print:shadow-none ${containerSizes[size]} ${className}`}
        style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}
        title="Logo chính thức Hội Cựu Thanh niên xung phong TP Hà Nội"
      >
        <img
          src={candidateSources[candidateIndex]}
          alt="Biểu trưng Hội Cựu TNXP TP Hà Nội"
          className="w-full h-full object-contain rounded-full aspect-square block select-none pointer-events-none print:block"
          loading="eager"
          onError={handleImgError}
        />
      </div>
    );
  }

  // 2. Trường hợp chưa có file logo: Hiển thị thông báo rõ ràng về file còn thiếu
  return (
    <div
      className={`relative aspect-square rounded-full bg-[#fdf0f0] border-2 border-dashed border-[#D5222A] p-1 flex flex-col items-center justify-center text-center overflow-hidden shrink-0 select-none group cursor-help transition-all ${containerSizes[size]} ${className}`}
      title="Chưa có file logo! Hãy đặt file ảnh vào: public/logo-hoi-tnxp.png"
      role="img"
      aria-label="Vị trí đặt Logo Hội Cựu TNXP (Chưa có file logo-hoi-tnxp.png)"
    >
      <div className="flex flex-col items-center justify-center text-[#D5222A]">
        {size === 'lg' || size === 'xl' ? (
          <>
            <AlertCircle className="w-6 h-6 sm:w-7 sm:h-7 mb-1 stroke-[2]" />
            <span className="text-[10px] sm:text-xs font-black uppercase leading-tight px-1">
              THIẾU LOGO
            </span>
            <span className="text-[8px] sm:text-[9px] text-slate-600 font-semibold leading-none mt-0.5 max-w-[85px] truncate">
              public/logo...
            </span>
          </>
        ) : (
          <>
            <Image className="w-5 h-5 sm:w-6 sm:h-6 mb-0.5 stroke-[2]" />
            {showLabel && (
              <span className="text-[9px] sm:text-[10px] font-black uppercase leading-tight scale-90">
                CHƯA LOGO
              </span>
            )}
          </>
        )}
      </div>
    </div>
  );
};
