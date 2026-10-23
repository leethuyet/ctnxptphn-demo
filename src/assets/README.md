# Hướng dẫn bổ sung file Logo chính thức

Để hiển thị Logo chính thức của Hội Cựu Thanh niên xung phong TP Hà Nội:
1. Sao chép file logo chính thức (định dạng `.png` hoặc `.jpg`) vào thư mục `public/`:
   `public/logo-hoi-tnxp.png`
   (hoặc `src/assets/logo-hoi-tnxp.png`)
2. Component `LogoPlaceholder` trong dự án đã được lập trình để tự động nhận diện file ảnh này và hiển thị ngay trên Header và Hồ sơ hội viên mà không cần sửa code.
3. Nếu chưa có file logo, hệ thống sẽ tự động hiển thị khung vị trí (Placeholder) trang trọng và trang nhã theo đúng quy định.
