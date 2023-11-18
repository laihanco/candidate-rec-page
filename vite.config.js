import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
import postcss from './postcss.config.js';

export default defineConfig({
  plugins: [svelte()],
  css:{
    postcss
  }
})
