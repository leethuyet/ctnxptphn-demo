import React from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { RefreshCw, X, Sparkles } from 'lucide-react';

/**
 * Component hiển thị thông báo an toàn khi có phiên bản PWA mới.
 * Người dùng chủ động bấm "Cập nhật ngay" để nạp phiên bản mới,
 * tránh tự động reload làm mất dữ liệu hoặc trạng thái người dùng đang đọc.
 */
export const ReloadPrompt: React.FC = () => {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      if (r) {
        // Kiểm tra cập nhật định kỳ mỗi 1 giờ
        setInterval(() => {
          r.update().catch(() => {});
        }, 60 * 60 * 1000);
      }
    },
    onRegisterError(error) {
      console.warn('Lỗi đăng ký Service Worker:', error);
    },
  });

  const close = () => {
    setNeedRefresh(false);
  };

  if (!needRefresh) {
    return null;
  }

  return (
    <div
      role="alert"
      aria-live="polite"
      className="fixed bottom-4 right-4 z-50 max-w-md w-[calc(100vw-2rem)] sm:w-auto bg-white rounded-2xl border-2 border-[#138348] p-4 shadow-2xl animate-in slide-in-from-bottom-4 duration-300 no-print"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#e8f5ee] text-[#138348] flex items-center justify-center shrink-0 mt-0.5">
          <Sparkles className="w-5 h-5 stroke-[2.2]" />
        </div>

        <div className="flex-1 space-y-1">
          <h4 className="text-sm font-black text-slate-900 leading-snug">
            Đã có phiên bản cập nhật mới
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed font-medium">
            Hệ thống cổng thông tin có nội dung mới. Cô chú và anh chị có thể cập nhật để tải phiên bản mới nhất.
          </p>

          <div className="pt-2 flex items-center gap-2">
            <button
              type="button"
              onClick={() => updateServiceWorker(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#138348] hover:bg-[#0f6e3c] text-white text-xs font-bold shadow-sm transition-all cursor-pointer min-h-[36px]"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Cập nhật ngay</span>
            </button>

            <button
              type="button"
              onClick={close}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all cursor-pointer min-h-[36px]"
            >
              <span>Để sau</span>
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={close}
          className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          title="Đóng thông báo"
          aria-label="Đóng thông báo"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
