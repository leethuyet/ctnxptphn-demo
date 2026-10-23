import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FontSizeProvider, useFontSize } from '../context/FontSizeContext';

const MainLayoutInner: React.FC = () => {
  const { isLargeFont, toggleFontSize } = useFontSize();

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 transition-all overflow-x-hidden">
      <Header onToggleFontSize={toggleFontSize} isLargeFont={isLargeFont} />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <Outlet context={{ isLargeFont, toggleFontSize }} />
      </main>

      <Footer />
    </div>
  );
};

export const MainLayout: React.FC = () => {
  return (
    <FontSizeProvider>
      <MainLayoutInner />
    </FontSizeProvider>
  );
};
