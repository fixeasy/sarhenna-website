import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/sarhenna-website",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Définit l'alias "@/"
    },
  },
});
