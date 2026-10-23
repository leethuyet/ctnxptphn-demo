import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { NewsPage } from './pages/NewsPage';
import { NewsArticleDetailPage } from './pages/NewsArticleDetailPage';
import { MembersPage } from './pages/MembersPage';
import { WardMembersPage } from './pages/WardMembersPage';
import { MemberDetailPage } from './pages/MemberDetailPage';

export const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Trang chủ Cổng thông tin */}
          <Route index element={<HomePage />} />
          
          {/* Nhóm route Tin tức & Chuyên mục */}
          <Route path="tin-tuc" element={<NewsPage />} />
          <Route path="tin-tuc/chuyen-muc/:categoryId" element={<NewsPage />} />
          <Route path="tin-tuc/:articleId" element={<NewsArticleDetailPage />} />

          {/* Nhóm route Quản lý & Tra cứu Hội viên (Giữ nguyên không thay đổi) */}
          <Route path="hoi-vien" element={<MembersPage />} />
          <Route path="hoi-vien/phuong/:wardId" element={<WardMembersPage />} />
          <Route path="hoi-vien/ho-so/:memberId" element={<MemberDetailPage />} />
          <Route path="hoi-vien/:memberId" element={<MemberDetailPage />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
