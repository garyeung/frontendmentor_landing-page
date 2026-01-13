import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from "vite-plugin-svgr";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    preprocessorOptions: {
      less: {
        math: "always",
        relativeUrls: true,
        javascriptEnabled: true,
        additionalData: `@import url("src/index.less");`
      },
    },
  },
  base: "",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    },
  },
})
