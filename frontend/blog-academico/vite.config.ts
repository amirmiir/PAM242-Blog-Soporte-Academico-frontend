import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from './node_modules/vite-plugin-svgr/';

export default defineConfig({
  plugins: [
    react(),
    svgr(), 
  ],
});