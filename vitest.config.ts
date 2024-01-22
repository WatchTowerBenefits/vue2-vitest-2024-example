/// <reference types="vitest" />
import { defineConfig, type UserConfig } from 'vite'
import type { InlineConfig } from 'vitest';
import vue from '@vitejs/plugin-vue2'

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export default defineConfig({
  plugins: [
    vue()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [
      'vitest.setup.ts',
    ],
  },
} as VitestConfigExport)
