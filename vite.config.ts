import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        math: "always",
        relativeUrls: true,
        javascriptEnabled: true,
        additionalData: `@import url("src/main.less");`
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
