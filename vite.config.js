import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Cho phép lắng nghe các địa chỉ IP khác ngoài localhost
    port: 3000, // Bạn có thể chọn cổng, ví dụ: 3000
    open: true, // Tự động mở trình duyệt khi server khởi chạy (tùy chọn)
  },
  build: {
    src: "index.html",
    use: "@vercel/static-build",
    config: { distDir: "dist" },
  },
  resolve: {
    alias: {
      "@": "/src", // Alias để đơn giản hóa việc nhập (import) các file từ thư mục src
    },
  },
});
