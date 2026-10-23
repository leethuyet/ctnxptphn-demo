import React, { createContext, useContext, useState, useEffect } from 'react';

interface FontSizeContextType {
  isLargeFont: boolean;
  toggleFontSize: () => void;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

const STORAGE_KEY = 'ctnxptphn_font_size';

export const FontSizeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLargeFont, setIsLargeFont] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === 'large';
    } catch {
      return false;
    }
  });

  // Áp dụng lớp và biến CSS lên thẻ <html> mỗi khi trạng thái thay đổi
  useEffect(() => {
    const root = document.documentElement;
    if (isLargeFont) {
      root.classList.add('font-size-large');
      root.setAttribute('data-font-size', 'large');
      try {
        localStorage.setItem(STORAGE_KEY, 'large');
      } catch {
        // bỏ qua lỗi nếu storage bị chặn
      }
    } else {
      root.classList.remove('font-size-large');
      root.setAttribute('data-font-size', 'normal');
      try {
        localStorage.setItem(STORAGE_KEY, 'normal');
      } catch {
        // bỏ qua lỗi nếu storage bị chặn
      }
    }
  }, [isLargeFont]);

  const toggleFontSize = () => {
    setIsLargeFont(prev => !prev);
  };

  return (
    <FontSizeContext.Provider value={{ isLargeFont, toggleFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = (): FontSizeContextType => {
  const context = useContext(FontSizeContext);
  if (!context) {
    throw new Error('useFontSize phải được sử dụng bên trong FontSizeProvider');
  }
  return context;
};
