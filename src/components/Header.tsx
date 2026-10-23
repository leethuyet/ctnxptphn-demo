import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Home, 
  Users, 
  Newspaper, 
  HeartHandshake, 
  Info, 
  ChevronDown, 
  ScrollText, 
  Sparkles, 
  History, 
  Award, 
  Activity,
  Layers
} from 'lucide-react';
import { LogoPlaceholder } from './LogoPlaceholder';

interface HeaderProps {
  onToggleFontSize?: () => void;
  isLargeFont?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onToggleFontSize, isLargeFont }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Danh mục Chuyên mục cấp 2
  const subCategories = [
    { name: 'Văn bản pháp luật', slug: 'van-ban-phap-luat', icon: ScrollText },
    { name: 'Trang Thơ – Ca', slug: 'trang-tho-ca', icon: Sparkles },
    { name: 'Ký ức TNXP', slug: 'ky-uc-tnxp', icon: History },
    { name: 'Gương sáng', slug: 'guong-sang', icon: Award },
    { name: 'Sống khỏe', slug: 'song-khoe', icon: Activity }
  ];

  // Kiểm tra trạng thái active dựa trên đường dẫn và tham số URL
  const searchParams = new URLSearchParams(location.search);
  const currentCat = searchParams.get('cat');

  const isHomeActive = location.pathname === '/' && !currentCat;
  const isMembersActive = location.pathname.startsWith('/hoi-vien');
  const isLatestNewsActive = location.pathname.startsWith('/tin-tuc') && (currentCat === 'tin-moi' || location.pathname.includes('/chuyen-muc/tin-moi'));
  const isActivitiesActive = location.pathname.startsWith('/tin-tuc') && (currentCat === 'hoat-dong-hoi' || location.pathname.includes('/chuyen-muc/hoat-dong-hoi'));
  const isIntroActive = location.pathname.startsWith('/tin-tuc') && (currentCat === 'gioi-thieu' || location.pathname.includes('/chuyen-muc/gioi-thieu'));
  
  // Menu Chuyên mục active khi đang xem 1 trong 5 chuyên mục con
  const isCategoryDropdownActive = location.pathname.startsWith('/tin-tuc') && subCategories.some(sub => 
    currentCat === sub.slug || location.pathname.includes(`/chuyen-muc/${sub.slug}`)
  );

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setDesktopDropdownOpen(false);
  };

  // Tự động đóng dropdown khi click ra ngoài hoặc nhấn phím Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDesktopDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDesktopDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Đóng dropdown khi chuyển route
  useEffect(() => {
    setDesktopDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname, location.search]);

  return (
    <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-40 no-print">
      {/* Thanh viền đỏ - vàng - xanh biểu trưng thương hiệu Hội */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#D5222A] via-[#F4C430] to-[#138348]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* BỐ CỤC MOBILE (< md): 2 HÀNG RÕ RÀNG, KHÔNG CẮT TÊN HỘI    */}
        {/* ========================================================= */}
        <div className="md:hidden py-2.5 space-y-2">
          {/* HÀNG 1: Logo Hội bên trái, Tên đầy đủ bên phải */}
          <NavLink
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#138348] rounded-xl p-1 min-w-0"
          >
            {/* Logo Hội Cựu TNXP chuẩn tỷ lệ 1:1, không bị co ép */}
            <LogoPlaceholder size="md" className="w-12 h-12 min-w-[3rem] shrink-0" />

            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-[10px] font-bold tracking-wider text-[#D5222A] uppercase leading-tight">
                CỔNG THÔNG TIN ĐIỆN TỬ
              </span>
              {/* Tên Hội đầy đủ, cho phép tự xuống dòng, KHÔNG TRUNCATE */}
              <h1 className="text-sm font-black text-[#138348] group-hover:text-[#0B5E34] group-focus:text-[#0B5E34] transition-colors uppercase leading-[1.35] tracking-tight font-sans break-words">
                HỘI CỰU THANH NIÊN XUNG PHONG TP HÀ NỘI
              </h1>
            </div>
          </NavLink>

          {/* HÀNG 2: Nút A+/A- điều chỉnh cỡ chữ & Nút mở/đóng Menu căn phải */}
          <div className="flex items-center justify-between border-t border-slate-100 pt-2">
            {/* Nút A+/A- trạng thái rõ ràng, không lặp ký hiệu */}
            {onToggleFontSize && (
              <button
                type="button"
                onClick={onToggleFontSize}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#fef9e8] hover:bg-[#fefce8] border border-[#F4C430] text-slate-800 text-xs font-bold transition-all min-h-[38px] cursor-pointer"
                title={isLargeFont ? "Quay về cỡ chữ chuẩn" : "Phóng to cỡ chữ cho dễ đọc"}
                aria-label={isLargeFont ? "Chuyển về cỡ chữ chuẩn" : "Tăng cỡ chữ lớn hơn"}
              >
                <span className="text-sm font-extrabold text-[#D5222A]">
                  {isLargeFont ? 'A−' : 'A+'}
                </span>
                <span>{isLargeFont ? 'Cỡ chữ chuẩn' : 'Chữ lớn hơn'}</span>
              </button>
            )}

            {/* Nút mở/đóng Menu căn phải */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#138348] text-white font-bold text-sm shadow hover:bg-[#0f6e3c] focus:outline-none focus:ring-4 focus:ring-emerald-200 transition-all cursor-pointer min-h-[40px] ml-auto"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Đóng danh mục menu" : "Mở danh mục menu"}
            >
              {mobileMenuOpen ? (
                <>
                  <X className="w-4 h-4 stroke-[2.5]" />
                  <span>Đóng Menu</span>
                </>
              ) : (
                <>
                  <Menu className="w-4 h-4 stroke-[2.5]" />
                  <span>Menu</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* BỐ CỤC DESKTOP (>= md): GIỮ NGUYÊN BỐ CỤC CHUẨN MỰC       */}
        {/* ========================================================= */}
        <div className="hidden md:flex items-center justify-between py-3 gap-4">
          {/* Logo & Tên Hội */}
          <NavLink
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 sm:gap-4 group focus:outline-none focus:ring-2 focus:ring-[#138348] rounded-xl p-1 min-w-0"
          >
            <LogoPlaceholder size="md" className="shrink-0" />

            <div className="flex flex-col min-w-0">
              <span className="text-xs font-bold tracking-wider text-[#D5222A] uppercase leading-tight">
                CỔNG THÔNG TIN ĐIỆN TỬ
              </span>
              <h1 className="text-lg md:text-xl lg:text-2xl font-black text-[#138348] group-hover:text-[#0B5E34] group-focus:text-[#0B5E34] transition-colors uppercase leading-[1.3] tracking-tight font-sans">
                HỘI CỰU THANH NIÊN XUNG PHONG TP HÀ NỘI
              </h1>
              <span className="text-xs text-slate-500 font-medium hidden md:inline-block leading-tight">
                Trung dũng - Quyết thắng - Tình nghĩa đồng đội
              </span>
            </div>
          </NavLink>

          {/* Nút A+ / A- trên Desktop (Không lặp ký hiệu) */}
          {onToggleFontSize && (
            <button
              type="button"
              onClick={onToggleFontSize}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-bold text-slate-800 bg-[#fef9e8] hover:bg-[#fefce8] border border-[#F4C430] rounded-xl transition-colors cursor-pointer shrink-0"
              title={isLargeFont ? "Quay về cỡ chữ chuẩn" : "Phóng to cỡ chữ cho dễ đọc"}
              aria-label={isLargeFont ? "Chuyển về cỡ chữ chuẩn" : "Tăng cỡ chữ lớn hơn"}
            >
              <span className="text-base font-extrabold text-[#D5222A]">
                {isLargeFont ? 'A−' : 'A+'}
              </span>
              <span>{isLargeFont ? 'Cỡ chữ chuẩn' : 'Chữ lớn hơn'}</span>
            </button>
          )}
        </div>

        {/* ========================================================= */}
        {/* THANH NAVIGATION DESKTOP (6 mục theo đúng thứ tự)         */}
        {/* ========================================================= */}
        <nav className="hidden md:flex items-center flex-wrap gap-1 lg:gap-2 border-t border-slate-100 py-2">
          {/* 1. Trang chủ */}
          <NavLink
            to="/"
            end
            className={`flex items-center gap-2 px-3.5 lg:px-4 py-2.5 rounded-xl text-sm lg:text-base font-bold transition-all min-h-[44px] ${
              isHomeActive
                ? 'bg-[#138348] text-white shadow-sm ring-2 ring-[#138348]'
                : 'text-slate-700 hover:text-[#138348] hover:bg-[#F4F6F5]'
            }`}
          >
            <Home className="w-4 h-4 lg:w-5 lg:h-5 stroke-[2.2]" />
            <span>Trang chủ</span>
          </NavLink>

          {/* 2. Thông tin hội viên */}
          <NavLink
            to="/hoi-vien"
            className={`flex items-center gap-2 px-3.5 lg:px-4 py-2.5 rounded-xl text-sm lg:text-base font-bold transition-all min-h-[44px] ${
              isMembersActive
                ? 'bg-[#138348] text-white shadow-sm ring-2 ring-[#138348]'
                : 'text-slate-700 hover:text-[#138348] hover:bg-[#F4F6F5]'
            }`}
          >
            <Users className="w-4 h-4 lg:w-5 lg:h-5 stroke-[2.2]" />
            <span>Thông tin hội viên</span>
          </NavLink>

          {/* 3. Tin mới */}
          <Link
            to="/tin-tuc?cat=tin-moi"
            className={`flex items-center gap-2 px-3.5 lg:px-4 py-2.5 rounded-xl text-sm lg:text-base font-bold transition-all min-h-[44px] ${
              isLatestNewsActive
                ? 'bg-[#138348] text-white shadow-sm ring-2 ring-[#138348]'
                : 'text-slate-700 hover:text-[#138348] hover:bg-[#F4F6F5]'
            }`}
          >
            <Newspaper className="w-4 h-4 lg:w-5 lg:h-5 stroke-[2.2]" />
            <span>Tin mới</span>
          </Link>

          {/* 4. Hoạt động Hội */}
          <Link
            to="/tin-tuc?cat=hoat-dong-hoi"
            className={`flex items-center gap-2 px-3.5 lg:px-4 py-2.5 rounded-xl text-sm lg:text-base font-bold transition-all min-h-[44px] ${
              isActivitiesActive
                ? 'bg-[#138348] text-white shadow-sm ring-2 ring-[#138348]'
                : 'text-slate-700 hover:text-[#138348] hover:bg-[#F4F6F5]'
            }`}
          >
            <HeartHandshake className="w-4 h-4 lg:w-5 lg:h-5 stroke-[2.2]" />
            <span>Hoạt động Hội</span>
          </Link>

          {/* 5. Giới thiệu */}
          <Link
            to="/tin-tuc?cat=gioi-thieu"
            className={`flex items-center gap-2 px-3.5 lg:px-4 py-2.5 rounded-xl text-sm lg:text-base font-bold transition-all min-h-[44px] ${
              isIntroActive
                ? 'bg-[#138348] text-white shadow-sm ring-2 ring-[#138348]'
                : 'text-slate-700 hover:text-[#138348] hover:bg-[#F4F6F5]'
            }`}
          >
            <Info className="w-4 h-4 lg:w-5 lg:h-5 stroke-[2.2]" />
            <span>Giới thiệu</span>
          </Link>

          {/* 6. Chuyên mục (Dropdown mở bằng CLICK và HOVER, có phím Esc) */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setDesktopDropdownOpen(!desktopDropdownOpen);
                }
              }}
              aria-expanded={desktopDropdownOpen}
              aria-controls="desktop-category-dropdown"
              aria-haspopup="true"
              className={`flex items-center gap-2 px-3.5 lg:px-4 py-2.5 rounded-xl text-sm lg:text-base font-bold transition-all min-h-[44px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#138348] ${
                isCategoryDropdownActive || desktopDropdownOpen
                  ? 'bg-[#138348] text-white shadow-sm ring-2 ring-[#138348]'
                  : 'text-slate-700 hover:text-[#138348] hover:bg-[#F4F6F5]'
              }`}
            >
              <Layers className="w-4 h-4 lg:w-5 lg:h-5 stroke-[2.2]" />
              <span>Chuyên mục</span>
              <ChevronDown 
                className={`w-4 h-4 transition-transform duration-200 ${
                  desktopDropdownOpen ? 'rotate-180' : ''
                }`} 
              />
            </button>

            {/* Menu thả xuống (Dropdown Desktop) */}
            {desktopDropdownOpen && (
              <div
                id="desktop-category-dropdown"
                className="absolute left-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-xl border-2 border-slate-200 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                role="menu"
                aria-label="Danh sách chuyên mục"
              >
                <div className="px-3.5 py-1 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 mb-1">
                  Chuyên đề & Tư liệu
                </div>
                {subCategories.map((sub) => {
                  const Icon = sub.icon;
                  const isSubActive = currentCat === sub.slug || location.pathname.includes(`/chuyen-muc/${sub.slug}`);
                  return (
                    <Link
                      key={sub.slug}
                      to={`/tin-tuc?cat=${sub.slug}`}
                      onClick={() => setDesktopDropdownOpen(false)}
                      role="menuitem"
                      className={`flex items-center gap-3 px-4 py-3 text-sm font-bold transition-colors ${
                        isSubActive
                          ? 'bg-[#e8f5ee] text-[#138348] border-l-4 border-[#138348]'
                          : 'text-slate-700 hover:text-[#138348] hover:bg-[#F4F6F5]'
                      }`}
                    >
                      <Icon className="w-4 h-4 text-[#138348] shrink-0" />
                      <span>{sub.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* ========================================================= */}
      {/* MENU DI ĐỘNG KHI MỞ: Thứ tự chuẩn, Accordion Chuyên mục    */}
      {/* ========================================================= */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl space-y-2 animate-in fade-in duration-200 max-h-[calc(100vh-120px)] overflow-y-auto">
          <p className="text-xs font-bold uppercase text-slate-500 tracking-wider px-2 pb-1">
            DANH MỤC ĐIỀU HƯỚNG
          </p>

          {/* 1. Trang chủ */}
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-base font-bold transition-all min-h-[48px] ${
              isHomeActive
                ? 'bg-[#138348] text-white shadow-md'
                : 'text-slate-800 bg-[#F4F6F5] hover:bg-emerald-50 border border-slate-200'
            }`}
          >
            <Home className="w-5 h-5 stroke-[2.2]" />
            <span>Trang chủ</span>
          </NavLink>

          {/* 2. Thông tin hội viên */}
          <NavLink
            to="/hoi-vien"
            onClick={closeMenu}
            className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-base font-bold transition-all min-h-[48px] ${
              isMembersActive
                ? 'bg-[#138348] text-white shadow-md'
                : 'text-slate-800 bg-[#F4F6F5] hover:bg-emerald-50 border border-slate-200'
            }`}
          >
            <Users className="w-5 h-5 stroke-[2.2]" />
            <span>Thông tin hội viên</span>
          </NavLink>

          {/* 3. Tin mới */}
          <Link
            to="/tin-tuc?cat=tin-moi"
            onClick={closeMenu}
            className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-base font-bold transition-all min-h-[48px] ${
              isLatestNewsActive
                ? 'bg-[#138348] text-white shadow-md'
                : 'text-slate-800 bg-[#F4F6F5] hover:bg-emerald-50 border border-slate-200'
            }`}
          >
            <Newspaper className="w-5 h-5 stroke-[2.2]" />
            <span>Tin mới</span>
          </Link>

          {/* 4. Hoạt động Hội */}
          <Link
            to="/tin-tuc?cat=hoat-dong-hoi"
            onClick={closeMenu}
            className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-base font-bold transition-all min-h-[48px] ${
              isActivitiesActive
                ? 'bg-[#138348] text-white shadow-md'
                : 'text-slate-800 bg-[#F4F6F5] hover:bg-emerald-50 border border-slate-200'
            }`}
          >
            <HeartHandshake className="w-5 h-5 stroke-[2.2]" />
            <span>Hoạt động Hội</span>
          </Link>

          {/* 5. Giới thiệu */}
          <Link
            to="/tin-tuc?cat=gioi-thieu"
            onClick={closeMenu}
            className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-base font-bold transition-all min-h-[48px] ${
              isIntroActive
                ? 'bg-[#138348] text-white shadow-md'
                : 'text-slate-800 bg-[#F4F6F5] hover:bg-emerald-50 border border-slate-200'
            }`}
          >
            <Info className="w-5 h-5 stroke-[2.2]" />
            <span>Giới thiệu</span>
          </Link>

          {/* 6. Chuyên mục (Accordion Mobile) */}
          <div className="space-y-1">
            <button
              type="button"
              onClick={() => setMobileAccordionOpen(!mobileAccordionOpen)}
              aria-expanded={mobileAccordionOpen}
              aria-controls="mobile-categories-accordion"
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold transition-all min-h-[48px] cursor-pointer ${
                isCategoryDropdownActive || mobileAccordionOpen
                  ? 'bg-[#e8f5ee] text-[#138348] border-2 border-[#138348]'
                  : 'text-slate-800 bg-[#F4F6F5] border border-slate-200'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <Layers className="w-5 h-5 stroke-[2.2] text-[#138348]" />
                <span>Chuyên mục</span>
              </div>
              <ChevronDown 
                className={`w-5 h-5 transition-transform duration-200 ${
                  mobileAccordionOpen ? 'rotate-180' : ''
                }`} 
              />
            </button>

            {mobileAccordionOpen && (
              <div 
                id="mobile-categories-accordion"
                className="pl-4 pr-1 py-1 space-y-1.5 border-l-2 border-[#138348] ml-4 mt-1 animate-in fade-in duration-150"
              >
                {subCategories.map((sub) => {
                  const Icon = sub.icon;
                  const isSubActive = currentCat === sub.slug || location.pathname.includes(`/chuyen-muc/${sub.slug}`);
                  return (
                    <Link
                      key={sub.slug}
                      to={`/tin-tuc?cat=${sub.slug}`}
                      onClick={closeMenu}
                      className={`flex items-center gap-3 px-3.5 py-3 rounded-lg text-sm font-bold min-h-[44px] transition-colors ${
                        isSubActive
                          ? 'bg-[#138348] text-white shadow-sm'
                          : 'text-slate-700 bg-white hover:bg-[#F4F6F5] border border-slate-200'
                      }`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 ${isSubActive ? 'text-white' : 'text-[#138348]'}`} />
                      <span>{sub.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Nút A+/A- bên trong Menu Mobile */}
          {onToggleFontSize && (
            <div className="pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  onToggleFontSize();
                  closeMenu();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#fef9e8] text-slate-800 border border-[#F4C430] font-bold text-base min-h-[48px] cursor-pointer"
                title={isLargeFont ? "Quay về cỡ chữ chuẩn" : "Phóng to cỡ chữ cho dễ đọc"}
                aria-label={isLargeFont ? "Chuyển về cỡ chữ chuẩn" : "Tăng cỡ chữ lớn hơn"}
              >
                <span className="text-lg font-extrabold text-[#D5222A]">
                  {isLargeFont ? 'A−' : 'A+'}
                </span>
                <span>{isLargeFont ? 'Cỡ chữ chuẩn' : 'Chữ lớn hơn'}</span>
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
