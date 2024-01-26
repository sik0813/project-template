import { defineConfig } from 'vite';
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
export default () => {
  return defineConfig({
    server: {
      port: 3031,
      cors: { origin: '*' },
    },
    plugins: [
      react(),
      federation({
        name: 'remote-main',
        filename: 'remoteEntry.js',
        exposes: {
          './Home': './src/Pages/Home',
        },
        shared: ['react', 'react-dom'],
      }),
      eslintPlugin(),
      atomizerPlugin,
    ],
    build: {
      target: 'esnext',
      minify: false,
      cssCodeSplit: false,
    },
  });
};
