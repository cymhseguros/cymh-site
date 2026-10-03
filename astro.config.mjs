// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cymhseguros.com.br',
  build: {
    // keeps the published URLs: /servicos.html, not /servicos/
    format: 'file',
  },
  // keeps the page markup exactly as written
  compressHTML: false,
});
