import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 以下の esbuild の設定は削除またはコメントアウトしてください
  // esbuild: {
  //   loader: 'jsx',
  //   include: /src\/.*\.js$/,
  // },
})

