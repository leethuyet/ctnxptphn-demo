import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getArticleById, getArticlesByCategory } from '../data/news';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Clock, 
  Tag, 
  Printer, 
  AlertCircle, 
  ChevronRight,
  BookOpen
} from 'lucide-react';

export const NewsArticleDetailPage: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const navigate = useNavigate();

  const article = articleId ? getArticleById(articleId) : undefined;
  const relatedArticles = article 
    ? getArticlesByCategory(article.categoryId).filter(a => a.id !== article.id).slice(0, 3)
    : [];

  if (!article) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 text-center border-2 border-slate-200 max-w-2xl mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#fdf0f0] text-[#D5222A] mx-auto flex items-center justify-center">
          <AlertCircle className="w-9 h-9 stroke-[2.2]" />
        </div>
        <h1 className="text-2xl font-black text-slate-900 leading-[1.35]">
          Không tìm thấy bài viết
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Bài viết bạn yêu cầu không tồn tại hoặc đã được cập nhật lại.
        </p>
        <Link
          to="/tin-tuc"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#138348] hover:bg-[#0f6e3c] text-white font-bold text-base shadow min-h-[48px]"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Quay lại trang Tin tức</span>
        </Link>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
      {/* Thanh điều hướng & Breadcrumbs */}
      <div className="flex flex-wrap items-center justify-between gap-3 no-print">
        <div className="flex items-center gap-2 flex-wrap text-sm sm:text-base">
          <button
            type="button"
            onClick={() => navigate('/tin-tuc')}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold border-2 border-slate-300 shadow-sm transition-all min-h-[42px] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
            <span>Quay lại Tin tức</span>
          </button>
          
          <span className="text-slate-400">/</span>
          
          <Link
            to={`/tin-tuc?cat=${article.categoryId}`}
            className="font-bold text-[#138348] hover:underline"
          >
            {article.category}
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm border-2 border-slate-300 shadow-sm transition-all min-h-[42px] cursor-pointer"
            title="In bài viết"
          >
            <Printer className="w-4 h-4 text-slate-600" />
            <span>In</span>
          </button>
        </div>
      </div>

      {/* Thông báo dữ liệu minh họa */}
      <div className="bg-[#fef9e8] border-2 border-[#F4C430] rounded-2xl p-4 text-slate-900 flex items-start gap-3 no-print">
        <AlertCircle className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
        <div className="text-sm sm:text-base leading-relaxed">
          <span className="font-extrabold text-amber-950 uppercase tracking-wide">
            Bài viết minh họa (Bản Demo Cổng thông tin):{' '}
          </span>
          Nội dung dưới đây được biên tập mẫu nhằm mục đích thử nghiệm giao diện đọc, không phải văn bản phát ngôn chính thức của Hội.
        </div>
      </div>

      {/* Nội dung chi tiết bài viết */}
      <article className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        {/* Nhãn chuyên mục & Meta info */}
        <div className="space-y-3 border-b border-slate-200 pb-5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f5ee] text-[#138348] font-bold text-xs sm:text-sm">
              <Tag className="w-3.5 h-3.5" />
              {article.category}
            </span>
            <span className="inline-flex items-center gap-1 text-[#64748B] text-xs sm:text-sm font-medium">
              <Calendar className="w-4 h-4 text-[#64748B]" />
              {article.publishDate}
            </span>
            {article.readTime && (
              <span className="inline-flex items-center gap-1 text-[#64748B] text-xs sm:text-sm font-medium">
                <Clock className="w-4 h-4 text-[#64748B]" />
                {article.readTime}
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111827] leading-[1.35] tracking-tight">
            {article.title}
          </h1>

          {article.author && (
            <p className="text-xs sm:text-sm text-[#64748B] flex items-center gap-1.5 font-semibold">
              <User className="w-4 h-4 text-[#138348]" />
              <span>Nguồn / Tác giả: {article.author}</span>
            </p>
          )}
        </div>

        {/* Tóm tắt mở đầu (Sapo) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#F4F6F5] border-l-4 border-[#138348] text-slate-800 font-bold text-base sm:text-lg leading-relaxed">
          {article.summary}
        </div>

        {/* Các đoạn văn nội dung chi tiết */}
        <div className="space-y-4 text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
          {article.content.map((paragraph, index) => (
            <p key={index} className="whitespace-pre-line leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Chữ ký / Ban biên tập */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-slate-500">
          <div>
            <span className="font-bold text-slate-700">Cổng thông tin điện tử Hội Cựu TNXP TP Hà Nội</span>
            <p className="text-xs text-slate-400 mt-0.5">Dữ liệu thử nghiệm giao diện</p>
          </div>

          <Link
            to="/tin-tuc"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#138348] text-white font-bold text-sm hover:bg-[#0f6e3c] transition-all"
          >
            <span>Xem thêm tin khác</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </article>

      {/* Bài viết liên quan cùng chuyên mục */}
      {relatedArticles.length > 0 && (
        <section className="space-y-4 pt-4 no-print">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-6 h-6 text-[#138348]" />
            <h2 className="text-xl sm:text-2xl font-black text-[#138348] leading-[1.35]">
              Tin liên quan cùng chuyên mục {article.category}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {relatedArticles.map(rel => (
              <Link
                key={rel.id}
                to={`/tin-tuc/${rel.id}`}
                className="bg-white rounded-2xl border-2 border-slate-200 hover:border-[#138348] p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <span className="text-xs text-[#64748B] font-semibold flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#64748B]" />
                    {rel.publishDate}
                  </span>
                  <h3 className="font-bold text-[#111827] group-hover:text-[#138348] transition-colors duration-150 text-base leading-[1.35] line-clamp-2">
                    {rel.title}
                  </h3>
                </div>
                <div className="pt-3 text-[#138348] group-hover:text-[#0B5E34] font-bold text-sm flex items-center gap-1 mt-2 transition-colors duration-150">
                  <span>Đọc tiếp</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
