import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import federation from '@originjs/vite-plugin-federation';

import { vite } from 'atomizer-plugins';
import atomizerConfig from './atomizer.config.js';

const atomizerPlugin = vite({
  config: atomizerConfig,
  outfile: 'public/atomizer.css',
});

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    server: {
      port: 3030,
      cors: { origin: '*' },
    },
    plugins: [
      react(),
      federation({
        name: 'host-app',
        filename: 'remoteEntry.js',
        remotes: {
          'remote-main': process.env.PROD
            ? '../remote-main/assets/remoteMain.js'
            : 'http://localhost:3031/assets/remoteMain.js',
          // 'remote-main': process.env.PROD ? '../remote-main/assets/remoteMain.js' : 'http://localhost:3031/',
        },
        shared: ['react', 'react-dom'],
      }),
      eslintPlugin(),
      atomizerPlugin,
    ],
    build: {
      // target: 'esnext',
      minify: true,
      // cssCodeSplit: false,
    },
  });
};
