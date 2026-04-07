import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/duck/', // 告訴 Vite 你的 GitHub 專案名稱
  plugins: [react()],
})
