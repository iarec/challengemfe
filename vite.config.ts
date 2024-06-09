import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'todo-components',
      filename: 'remoteEntry.js',
      exposes: {
        './TodoApp': './src/components/TodoApp.tsx',
      },
      shared: ['react'],
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  build: {
    target: 'esnext',
  },
});
