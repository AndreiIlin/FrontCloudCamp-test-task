import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteSvgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSvgr()],
  resolve: {
    alias: {
      app: '/src/app',
      pages: '/src/pages',
      containers: '/src/containers',
      components: '/src/components',
      shared: '/src/shared',
    },
  },
});
