import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: 'REACT_APP_',
  server: {
    port: 3000,
  },
  define: {
    'process.env': process.env,
  },
  resolve: {
    alias: {
      src: '/src',
      app: '/src/app',
      assets: '/src/assets',
      'design-system': '/src/design-system',
      locales: '/src/locales',
      styles: '/src/styles',
      store: '/src/store',
      utils: '/src/utils',
    },
  },
  build: {
    outDir: 'build',
  },
  plugins: [
    reactRefresh(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
});
