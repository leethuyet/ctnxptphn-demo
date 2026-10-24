import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams, useParams, useNavigate } from 'react-router-dom';
import { NEWS_CATEGORIES, getAllArticles } from '../data/news';
import { matchVietnamese } from '../utils/vietnamese';
import { 
  Newspaper, 
  Calendar, 
  Tag, 
  ArrowRight, 
  Bell, 
  Search, 
  X, 
  Filter, 
  User 
} from 'lucide-react';

export const NewsPage: React.FC = () => {
  const { categoryId: routeCategory } = useParams<{ categoryId?: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const queryCategory = searchParams.get('cat');
  const activeCategory = routeCategory || queryCategory || 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(activeCategory);

  const allArticles = useMemo(() => getAllArticles(), []);

  // Cập nhật selectedCategory khi routeCategory hoặc searchParams thay đổi
  useEffect(() => {
    setSelectedCategory(activeCategory);
  }, [activeCategory]);

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    if (routeCategory) {
      if (catId === 'all') {
        navigate('/tin-tuc');
      } else {
        navigate(`/tin-tuc/chuyen-muc/${catId}`);
      }
    } else {
      if (catId === 'all') {
        searchParams.delete('cat');
        setSearchParams(searchParams);
      } else {
        setSearchParams({ cat: catId });
      }
    }
  };

  // Lọc bài viết theo chuyên mục và từ khóa tìm kiếm (tiếng Việt có dấu/không dấu)
  const filteredArticles = useMemo(() => {
    const matched = allArticles.filter(art => {
      // Khi chọn 'tin-moi', tổng hợp các bài viết mới nhất từ tất cả chuyên mục
      const matchCat =
        selectedCategory === 'all' ||
        selectedCategory === 'tin-moi' ||
        art.categoryId === selectedCategory;
      if (!matchCat) return false;

      if (!searchQuery.trim()) return true;
      const matchTitle = matchVietnamese(art.title, searchQuery);
      const matchSummary = matchVietnamese(art.summary, searchQuery);
      const matchCategory = matchVietnamese(art.category, searchQuery);
      return matchTitle || matchSummary || matchCategory;
    });

    // Luôn sắp xếp theo ngày đăng giảm dần (mới nhất lên đầu)
    return [...matched].sort((a, b) => {
      const parseDate = (d: string) => {
        const parts = d.split('/');
        return parts.length === 3 ? new Date(+parts[2], +parts[1] - 1, +parts[0]).getTime() : 0;
      };
      return parseDate(b.publishDate) - parseDate(a.publishDate);
    });
  }, [allArticles, selectedCategory, searchQuery]);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Tiêu đề trang */}
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-2xl bg-[#e8f5ee] text-[#138348] shrink-0">
            <Newspaper className="w-7 h-7 stroke-[2.2]" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#138348] tracking-tight leading-[1.35]">
              Tin tức & Hoạt động phong trào
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-0.5 leading-normal">
              Cổng thông tin chuyên mục, hoạt động truyền thống và thông tri của Hội Cựu TNXP TP Hà Nội
            </p>
          </div>
        </div>
      </div>

      {/* Thông báo minh họa */}
      <div className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl bg-[#fef9e8] border-2 border-[#F4C430] text-slate-900 text-base">
        <Bell className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <span className="font-extrabold text-amber-950 uppercase tracking-wide leading-tight">
            Lưu ý bản thử nghiệm:{' '}
          </span>
          Các tin bài dưới đây là dữ liệu minh họa thử nghiệm giao diện các chuyên mục (Giới thiệu, Hoạt động Hội, Văn bản pháp luật, Ký ức TNXP, Thơ - Ca, Gương sáng, Sống khỏe). Bấm vào từng bài viết để xem nội dung đầy đủ.
        </div>
      </div>

      {/* Thanh tìm kiếm & Bộ lọc Chuyên mục */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border-2 border-slate-200 shadow-sm space-y-4">
        {/* Ô tìm kiếm */}
        <div>
          <label htmlFor="search-news" className="block text-base font-bold text-slate-800 mb-2 leading-[1.35]">
            Tìm kiếm bài viết theo tiêu đề hoặc nội dung (không phân biệt dấu):
          </label>
          <div className="relative">
            <input
              id="search-news"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ví dụ: 'Nghĩa tình đồng đội', 'dong doi', 'Bác sĩ', 'Truông Bồn'..."
              className="w-full px-4 py-3.5 pl-12 pr-10 rounded-xl border-2 border-slate-300 focus:border-[#138348] focus:ring-4 focus:ring-emerald-100 text-base sm:text-lg font-medium text-slate-900 transition-all outline-none"
            />
            <Search className="w-6 h-6 text-slate-400 absolute left-4 top-4" />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-3.5 p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                title="Xóa tìm kiếm"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Danh sách các tab chuyên mục */}
        <div className="pt-2 border-t border-slate-100 space-y-2">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
            <Filter className="w-4 h-4 text-[#138348]" />
            <span>Chọn theo chuyên mục:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => handleSelectCategory('all')}
              className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all min-h-[42px] cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#138348] text-white shadow-sm ring-2 ring-[#138348]'
                  : 'bg-[#F4F6F5] text-slate-700 hover:bg-slate-200'
              }`}
            >
              Tất cả bài viết ({allArticles.length})
            </button>

            {NEWS_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleSelectCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all min-h-[42px] cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#138348] text-white shadow-sm ring-2 ring-[#138348]'
                    : 'bg-[#F4F6F5] text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Thống kê kết quả */}
        <div className="text-sm font-semibold text-slate-600 pt-1 flex items-center justify-between flex-wrap gap-2">
          <span>
            Đang hiển thị <strong>{filteredArticles.length}</strong> bài viết
          </span>
          {(searchQuery || selectedCategory !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                handleSelectCategory('all');
              }}
              className="text-[#138348] font-bold hover:underline"
            >
              Đặt lại bộ lọc
            </button>
          )}
        </div>
      </div>

      {/* Danh sách bài viết */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-3xl border-2 border-slate-200 hover:border-[#138348] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="p-6 space-y-3.5">
                <div className="flex items-center justify-between gap-2 flex-wrap text-sm">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f5ee] text-[#138348] font-bold text-xs">
                    <Tag className="w-3.5 h-3.5" />
                    {article.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[#64748B] text-xs font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#64748B]" />
                    {article.publishDate}
                  </span>
                </div>

                <h2 className="text-xl font-bold leading-[1.35] line-clamp-2">
                  <Link 
                    to={`/tin-tuc/${article.id}`}
                    className="text-[#111827] hover:text-[#138348] focus:text-[#138348] focus:outline-none transition-colors duration-150"
                  >
                    {article.title}
                  </Link>
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                  {article.summary}
                </p>

                {article.author && (
                  <p className="text-xs text-[#64748B] flex items-center gap-1 pt-1">
                    <User className="w-3.5 h-3.5 text-[#64748B]" />
                    <span className="truncate">{article.author}</span>
                  </p>
                )}
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                <Link
                  to={`/tin-tuc/${article.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#F4F6F5] hover:bg-[#138348] hover:text-white text-slate-800 font-bold text-base transition-all min-h-[48px]"
                >
                  <span>Đọc bài viết</span>
                  <ArrowRight className="w-5 h-5 stroke-[2]" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-8 sm:p-12 text-center border-2 border-slate-200 space-y-4">
          <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
            <Newspaper className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 leading-[1.35]">
            Không tìm thấy bài viết phù hợp
          </h3>
          <p className="text-slate-600 text-base max-w-md mx-auto">
            {searchQuery.trim()
              ? `Không tìm thấy kết quả nào phù hợp với từ khóa "${searchQuery}".`
              : 'Hiện tại chuyên mục này đang được cập nhật các bài viết mới nhất.'}
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              handleSelectCategory('all');
            }}
            className="px-5 py-2.5 rounded-xl bg-[#138348] text-white font-bold text-base hover:bg-[#0f6e3c] shadow"
          >
            Hiển thị lại toàn bộ tin tức
          </button>
        </div>
      )}
    </div>
  );
};
