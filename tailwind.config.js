/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'Arial', 'sans-serif'],
        heading: ['"Be Vietnam Pro"', 'Arial', 'sans-serif'],
      },
      lineHeight: {
        'heading-tight': '1.3',
        'heading-normal': '1.35',
        'heading-relaxed': '1.4',
      },
      colors: {
        // Hệ màu chuẩn nhận diện thương hiệu CTNXPTPHN theo tỉ lệ 60-20-12-5-3:
        brand: {
          white: '#FFFFFF',      // ~60% Nền chủ đạo
          light: '#F4F6F5',      // ~20% Nền phân khu, xám rất sáng
          green: '#138348',      // ~12% Xanh Hội: nút chính, menu được chọn, tiêu đề nhấn
          'green-hover': '#0f6e3c',
          'green-light': '#e8f5ee',
          red: '#D5222A',        // ~5%  Đỏ: điểm nhấn, nhãn, đường kẻ trang trí
          'red-hover': '#b71820',
          'red-light': '#fdf0f0',
          gold: '#F4C430',       // ~3%  Vàng: chi tiết nhỏ, huy hiệu, sao
          'gold-light': '#fef9e8',
        },
        // Đồng bộ các tiền tố hngreen, hnred, hnyellow để mã nguồn đồng nhất
        hngreen: {
          DEFAULT: '#138348',
          50: '#f0fdf4',
          100: '#e8f5ee',
          600: '#138348',
          700: '#138348',
          800: '#0f6e3c',
          900: '#0c522d',
        },
        hnred: {
          DEFAULT: '#D5222A',
          50: '#fdf0f0',
          100: '#fee2e2',
          600: '#D5222A',
          700: '#b71820',
          800: '#9b141a',
        },
        hnyellow: {
          DEFAULT: '#F4C430',
          50: '#fefce8',
          100: '#fef9e8',
          400: '#F4C430',
          500: '#F4C430',
          600: '#d9a71a',
        }
      },
      fontSize: {
        // Cỡ chữ tối ưu cho người cao tuổi
        'senior-base': ['1.125rem', { lineHeight: '1.75rem' }],
        'senior-lg': ['1.25rem', { lineHeight: '1.875rem' }],
        'senior-xl': ['1.5rem', { lineHeight: '2.1rem' }],
        'senior-2xl': ['1.875rem', { lineHeight: '2.5rem' }],
      }
    },
  },
  plugins: [],
}
