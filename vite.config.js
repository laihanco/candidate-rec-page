import path from 'path';
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
import postcss from './postcss.config.js';

export default defineConfig({
  base: './',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/candidate-rec-page/'
    : '/',
  plugins: [svelte()],
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src'),
    }
  },
  css:{
    postcss
  },
})
