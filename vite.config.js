import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()], // Use the React plugin
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000, // Customize the development server port
  },
  build: {
    outDir: 'build', // Customize the output directory for production builds
  },
});