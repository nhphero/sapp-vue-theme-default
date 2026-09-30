import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

/** Library build of the theme (SFCs compiled, styles of SFCs inlined as CSS injection by Vite's lib mode). */
export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: false,
    sourcemap: true,
    cssCodeSplit: false,
    lib: { entry: resolve(__dirname, 'src/index.ts'), formats: ['es'], fileName: () => 'index.js' },
    rollupOptions: {
      external: [
        'vue', 'vue-router', 'pinia', '@vueuse/core', 'radix-vue', 'lucide-vue-next',
        'class-variance-authority', 'clsx', 'tailwind-merge', 'codemirror', /^chart\.js/,
        /^@codemirror\//, /^@nhphero\/vue-sapp/,
      ],
      output: { chunkFileNames: 'chunks/[name]-[hash].js', assetFileNames: 'assets/[name][extname]' },
    },
  },
});
