/// <reference types="vitest" />
import { defineConfig, type UserConfig } from 'vite'
import type { InlineConfig } from 'vitest';
import { createVuePlugin as Vue2 } from 'vite-plugin-vue2'
import ScriptSetup from 'unplugin-vue2-script-setup/vite'


interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export default defineConfig({
  plugins: [
    Vue2(),
    ScriptSetup({}),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [
      'vitest.setup.ts',
    ],
  },
} as VitestConfigExport)
