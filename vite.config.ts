import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'index.html',
      formats: ['cjs'],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
});
