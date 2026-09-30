import tailwindcss from '@tailwindcss/postcss';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// macOS Seatbelt blocks FSEvents, so Codex previews need polling for HMR.
const isCodexSeatbeltSandbox = process.env.CODEX_SANDBOX === 'seatbelt';

export default defineConfig({
  // Relative asset URLs work on both the GitHub project path (/rudramsha/)
  // and the custom domain root (rudramsha.com).
  base: './',
  css: { postcss: { plugins: [tailwindcss()] } },
  server: isCodexSeatbeltSandbox
    ? { watch: { useFsEvents: false, usePolling: true } }
    : undefined,
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL('index.html', import.meta.url)),
        catalog: fileURLToPath(new URL('catalog/index.html', import.meta.url)),
      },
    },
  },
});
