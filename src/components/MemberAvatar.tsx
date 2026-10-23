import React from 'react';
import { User } from 'lucide-react';

interface MemberAvatarProps {
  fullName: string;
  gender?: 'Nam' | 'Nữ';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const MemberAvatar: React.FC<MemberAvatarProps> = ({
  fullName,
  gender = 'Nam',
  size = 'md',
  className = ''
}) => {
  const sizeMap = {
    sm: 'w-10 h-10 text-xs',
    md: 'w-14 h-14 text-sm',
    lg: 'w-20 h-20 text-base',
    xl: 'w-28 h-28 sm:w-32 sm:h-32 text-lg sm:text-xl'
  };

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-10 h-10',
    xl: 'w-14 h-14'
  };

  // Lấy 2 chữ cái đầu của tên (ví dụ: "Nguyễn Văn Bình" -> "VB" hoặc "NB")
  const words = fullName.trim().split(/\s+/);
  const initials = words.length >= 2 
    ? `${words[words.length - 2][0]}${words[words.length - 1][0]}`.toUpperCase()
    : fullName.substring(0, 2).toUpperCase();

  const isMale = gender === 'Nam';

  return (
    <div
      className={`relative rounded-2xl flex flex-col items-center justify-center font-bold select-none border-2 shadow-sm overflow-hidden shrink-0 print:border-2 print:border-slate-800 print:bg-white print:shadow-none ${
        isMale 
          ? 'bg-gradient-to-b from-slate-100 to-slate-200 border-slate-300 text-slate-800' 
          : 'bg-gradient-to-b from-amber-50 to-orange-100 border-amber-300 text-amber-900'
      } ${sizeMap[size]} ${className}`}
      style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}
      title={`Ảnh chân dung minh họa: ${fullName} (${gender})`}
      role="img"
      aria-label={`Ảnh chân dung minh họa của hội viên ${fullName}`}
    >
      <div className="flex flex-col items-center justify-center">
        <User className={`${iconSizes[size]} text-slate-500 print:text-slate-800 mb-0.5 stroke-[1.8]`} />
        <span className="text-[11px] sm:text-xs font-black tracking-wider text-slate-700 print:text-black uppercase">
          {initials}
        </span>
      </div>
      
      {/* Huy hiệu nhỏ góc ảnh */}
      <span
        className={`absolute bottom-0 inset-x-0 py-0.5 text-[9px] font-extrabold uppercase text-center tracking-tighter print:border-t print:border-slate-800 print:bg-slate-200 print:text-black ${
          isMale ? 'bg-[#138348] text-white' : 'bg-[#D5222A] text-white'
        }`}
      >
        Minh họa
      </span>
    </div>
  );
};
