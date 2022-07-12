import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {

    proxy: {
      '/api': {
           target: 'https://127.0.0.1:3001/api',
           changeOrigin: true,
           secure: false,      
           ws: true,
           rewrite: (path) => path.replace(/^\/app/, ''),
       }
  }
  }
})
