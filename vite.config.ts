import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 需要设置 base 路径
  // Vercel 部署使用根路径，GitHub Pages 使用仓库名
  base: process.env.GITHUB_ACTIONS ? '/cyl-personal-homepage/' : '/',
})


