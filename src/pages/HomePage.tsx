import React from 'react';
import { Link } from 'react-router-dom';
import { 
  getFeaturedArticles, 
  NEWS_CATEGORIES, 
  getArticlesByCategory 
} from '../data/news';
import { 
  Newspaper, 
  Users, 
  ChevronRight, 
  Award, 
  Shield, 
  Calendar, 
  BookOpen, 
  ScrollText, 
  HeartHandshake, 
  Activity, 
  Sparkles,
  ArrowRight,
  Search,
  Building2
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { main: featuredMain, recent: featuredRecent } = getFeaturedArticles();

  // Danh mục chuyên mục chọn lọc để hiển thị trên trang chủ
  const showcaseCategories = [
    {
      category: NEWS_CATEGORIES.find(c => c.id === 'hoat-dong-hoi')!,
      icon: HeartHandshake,
      badgeColor: 'bg-[#e8f5ee] text-[#138348]',
      articles: getArticlesByCategory('hoat-dong-hoi')
    },
    {
      category: NEWS_CATEGORIES.find(c => c.id === 'van-ban-phap-luat')!,
      icon: ScrollText,
      badgeColor: 'bg-[#fdf0f0] text-[#D5222A]',
      articles: getArticlesByCategory('van-ban-phap-luat')
    },
    {
      category: NEWS_CATEGORIES.find(c => c.id === 'ky-uc-tnxp')!,
      icon: BookOpen,
      badgeColor: 'bg-[#fef9e8] text-amber-900',
      articles: getArticlesByCategory('ky-uc-tnxp')
    },
    {
      category: NEWS_CATEGORIES.find(c => c.id === 'trang-tho-ca')!,
      icon: Sparkles,
      badgeColor: 'bg-[#e8f5ee] text-[#138348]',
      articles: getArticlesByCategory('trang-tho-ca')
    },
    {
      category: NEWS_CATEGORIES.find(c => c.id === 'guong-sang')!,
      icon: Award,
      badgeColor: 'bg-[#fdf0f0] text-[#D5222A]',
      articles: getArticlesByCategory('guong-sang')
    },
    {
      category: NEWS_CATEGORIES.find(c => c.id === 'song-khoe')!,
      icon: Activity,
      badgeColor: 'bg-[#e8f5ee] text-[#138348]',
      articles: getArticlesByCategory('song-khoe')
    }
  ];

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* 1. Banner Giới thiệu Cổng thông tin (Nền xám sáng #F4F6F5 trang trọng) */}
      <section className="relative overflow-hidden rounded-3xl bg-[#F4F6F5] border-2 border-slate-200/80 p-6 sm:p-10 shadow-sm">
        {/* Dải màu nhận diện thương hiệu đỉnh banner */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#D5222A] via-[#F4C430] to-[#138348]"></div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdf0f0] border border-[#fee2e2] text-[#D5222A] font-extrabold text-xs sm:text-sm uppercase tracking-wide">
            <Award className="w-4 h-4 text-[#D5222A] fill-[#D5222A]" />
            <span>Thanh niên xung phong Thủ đô Anh hùng</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#138348] leading-[1.35]">
            Cổng thông tin điện tử Hội Cựu TNXP TP Hà Nội
          </h1>
          
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            Nơi kết nối nghĩa tình đồng đội, cập nhật kịp thời các hoạt động phong trào, truyền thống hào hùng, chế độ chính sách và tra cứu thông tin sinh hoạt hội viên toàn thành phố.
          </p>

          <div className="pt-2 flex flex-wrap gap-3 sm:gap-4">
            <Link
              to="/hoi-vien"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#138348] hover:bg-[#0f6e3c] text-white font-bold text-base sm:text-lg shadow-sm hover:shadow transition-all focus:ring-4 focus:ring-emerald-200 min-h-[50px]"
            >
              <Search className="w-5 h-5 stroke-[2.5]" />
              <span>Tra cứu Phường/Xã & Hội viên</span>
            </Link>

            <Link
              to="/tin-tuc"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base sm:text-lg border-2 border-slate-300 transition-all focus:ring-4 focus:ring-slate-200 min-h-[50px]"
            >
              <Newspaper className="w-5 h-5 text-[#138348]" />
              <span>Xem Tin tức & Chuyên mục</span>
            </Link>
          </div>
        </div>

        {/* Họa tiết biểu trưng chìm trang nhã */}
        <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none select-none text-slate-900">
          <Shield className="w-72 h-72" />
        </div>
      </section>

      {/* 2. KHU VỰC TIN TỨC NỔI BẬT: 1 Bài chính lớn + 3-4 Bài mới bên cạnh */}
      <section className="space-y-5">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-3.5 h-6 bg-[#D5222A] rounded-sm"></div>
            <h2 className="text-xl sm:text-2xl font-black text-[#138348] uppercase tracking-tight leading-[1.35]">
              Tin tức nổi bật
            </h2>
          </div>

          <Link
            to="/tin-tuc"
            className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-[#138348] hover:text-[#B91C1C] focus:text-[#B91C1C] transition-colors duration-150"
          >
            <span>Tất cả tin tức</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Bài viết chính tiêu điểm (Chiếm 7/12 cột desktop) */}
          <article className="lg:col-span-7 bg-white rounded-3xl border-2 border-slate-200 hover:border-[#138348] p-6 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-[#fdf0f0] border border-[#fee2e2] text-[#D5222A] font-extrabold text-xs uppercase tracking-wider">
                  TIÊU ĐIỂM
                </span>
                <span className="px-3 py-1 rounded-full bg-[#e8f5ee] text-[#138348] font-bold text-xs">
                  {featuredMain.category}
                </span>
                <span className="text-xs text-[#64748B] font-medium flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#64748B]" />
                  {featuredMain.publishDate}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black leading-[1.35]">
                <Link 
                  to={`/tin-tuc/${featuredMain.id}`}
                  className="text-[#111827] hover:text-[#138348] focus:text-[#138348] focus:outline-none transition-colors duration-150"
                >
                  {featuredMain.title}
                </Link>
              </h3>

              {/* Khung minh họa trang trọng */}
              <div className="rounded-2xl bg-[#F4F6F5] border border-slate-200 p-5 text-slate-700 leading-relaxed font-normal">
                <p className="text-base sm:text-lg font-semibold text-slate-800">
                  {featuredMain.summary}
                </p>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                {featuredMain.content[0]}
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-[#64748B] font-medium">
                {featuredMain.readTime || '5 phút đọc'}
              </span>

              <Link
                to={`/tin-tuc/${featuredMain.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#138348] hover:bg-[#0f6e3c] text-white font-bold text-sm sm:text-base shadow-sm transition-all"
              >
                <span>Đọc toàn văn bài viết</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </article>

          {/* Danh sách 3-4 bài viết mới bên cạnh (Chiếm 5/12 cột desktop) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-base font-bold uppercase tracking-wider text-slate-600 px-1">
              Bài viết mới cập nhật
            </h3>

            <div className="space-y-3.5">
              {featuredRecent.map((art) => (
                <article
                  key={art.id}
                  className="bg-white rounded-2xl border-2 border-slate-200 hover:border-[#138348] p-4 sm:p-5 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-bold text-[#138348] bg-[#e8f5ee] px-2.5 py-0.5 rounded-md">
                        {art.category}
                      </span>
                      <span className="text-[#64748B] flex items-center gap-1 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-[#64748B]" />
                        {art.publishDate}
                      </span>
                    </div>

                    <h4 className="font-bold text-base leading-[1.35] line-clamp-2">
                      <Link 
                        to={`/tin-tuc/${art.id}`}
                        className="text-[#111827] hover:text-[#138348] focus:text-[#138348] focus:outline-none transition-colors duration-150"
                      >
                        {art.title}
                      </Link>
                    </h4>

                    <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {art.summary}
                    </p>
                  </div>

                  <div className="pt-2 text-right">
                    <Link
                      to={`/tin-tuc/${art.id}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#138348] hover:text-[#0B5E34] transition-colors duration-150"
                    >
                      <span>Xem tiếp</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. KHU VỰC TRA CỨU HỘI VIÊN NỔI BẬT (Liên kết đến /hoi-vien) */}
      <section className="bg-gradient-to-r from-[#F4F6F5] via-white to-[#F4F6F5] rounded-3xl border-2 border-[#138348]/40 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f5ee] text-[#138348] text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              <span>Quản lý hội viên toàn TP Hà Nội</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-black text-[#138348] leading-[1.35]">
              Tra cứu thông tin sinh hoạt & Hồ sơ hội viên
            </h2>
            
            <p className="text-slate-600 text-base leading-relaxed">
              Hệ thống danh mục 126 đơn vị hành chính cấp xã (51 Phường và 75 Xã) thuộc TP Hà Nội theo Nghị quyết 1656/NQ-UBTVQH15 và cơ sở dữ liệu hồ sơ hội viên mẫu. Giao diện tối ưu chữ lớn, dễ thao tác cho các cô chú hội viên.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              to="/hoi-vien"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#138348] hover:bg-[#0f6e3c] text-white font-black text-base sm:text-lg shadow-md hover:shadow-lg transition-all min-h-[52px]"
            >
              <Users className="w-5 h-5" />
              <span>Vào tra cứu Phường / Xã</span>
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CÁC CHUYÊN MỤC NỘI DUNG (Cấu trúc tương tự cuutnxphanoi.vn) */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
          <div className="w-3.5 h-6 bg-[#D5222A] rounded-sm"></div>
          <h2 className="text-xl sm:text-2xl font-black text-[#138348] uppercase tracking-tight leading-[1.35]">
            Chuyên mục cổng thông tin
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseCategories.map(({ category, icon: Icon, badgeColor, articles }) => (
            <div
              key={category.id}
              className="bg-white rounded-3xl border-2 border-slate-200 hover:border-[#138348] p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Đầu thẻ chuyên mục */}
                <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className={`p-2 rounded-xl ${badgeColor}`}>
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <h3 className="text-lg font-black text-[#138348] leading-[1.35]">
                      {category.name}
                    </h3>
                  </div>

                  <Link
                    to={`/tin-tuc?cat=${category.id}`}
                    className="text-xs font-bold text-[#138348] hover:text-[#0B5E34] transition-colors duration-150 shrink-0"
                  >
                    Xem tất cả
                  </Link>
                </div>

                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {category.description}
                </p>

                {/* Danh sách bài viết mẫu của chuyên mục */}
                <div className="space-y-3 pt-1">
                  {articles.length > 0 ? (
                    articles.map((art) => (
                      <div key={art.id}>
                        <Link
                          to={`/tin-tuc/${art.id}`}
                          className="font-bold text-[#111827] hover:text-[#138348] focus:text-[#138348] focus:outline-none transition-colors duration-150 text-sm leading-[1.35] line-clamp-2 flex items-start gap-1.5"
                        >
                          <span className="text-[#138348] mt-1 shrink-0">•</span>
                          <span>{art.title}</span>
                        </Link>
                        <span className="text-[11px] text-[#64748B] pl-3 font-medium">
                          {art.publishDate}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-slate-400 italic">Đang cập nhật bài viết cho chuyên mục này...</p>
                  )}
                </div>
              </div>

              {/* Nút xem toàn bộ chuyên mục */}
              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link
                  to={`/tin-tuc?cat=${category.id}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#F4F6F5] hover:bg-[#138348] hover:text-white text-slate-700 font-bold text-xs sm:text-sm transition-all"
                >
                  <span>Chuyên mục {category.name}</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Khối 4 mốc truyền thống vẻ vang của Lực lượng TNXP */}
      <section className="bg-[#F4F6F5] rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <h3 className="text-lg sm:text-xl font-bold text-[#138348] uppercase mb-4 text-center sm:text-left leading-[1.35]">
          Truyền thống vẻ vang của Lực lượng Thanh niên xung phong
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center shadow-sm">
            <p className="text-2xl font-black text-[#138348]">1950</p>
            <p className="text-sm font-semibold text-slate-700 mt-1 leading-normal">Năm Bác Hồ sáng lập Đội TNXP công tác đầu tiên</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center shadow-sm">
            <p className="text-2xl font-black text-[#D5222A]">75+ Năm</p>
            <p className="text-sm font-semibold text-slate-700 mt-1 leading-normal">Truyền thống kiên cường, bất khuất, dũng cảm</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center shadow-sm">
            <p className="text-2xl font-black text-amber-700">Thủ Đô</p>
            <p className="text-sm font-semibold text-slate-700 mt-1 leading-normal">Đoàn kết, gương mẫu và sáng tạo trong xây dựng</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center shadow-sm">
            <p className="text-2xl font-black text-slate-800">Nghĩa Tình</p>
            <p className="text-sm font-semibold text-slate-700 mt-1 leading-normal">Sâu nặng tình đồng chí, trọn vẹn nghĩa đồng đội</p>
          </div>
        </div>
      </section>
    </div>
  );
};
