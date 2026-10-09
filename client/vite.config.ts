import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// In development the Express API runs on :4000 and Vite proxies /api to it.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: { '/api': 'http://localhost:4000' }
  }
});
