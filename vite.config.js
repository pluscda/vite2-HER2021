import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const { resolve } = require('path');
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:"./",//打包路徑
  server: {
    port: 2000, // 配置启用的端口号
    open: true,
    proxy: {
      // 選項寫法
      '/api': 'http://123.56.85.24:5000'//代理網址
    },
    cors:true
  },
  resolve: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),//設置別名
      '@/views': resolve(__dirname, 'src/views/'),
      '@/styles': resolve(__dirname, 'src/styles/'),
    },
  },
  css: {
    preprocessorOptions: {
      // 引入公用的样式
      scss: {
        additionalData: '@import "@/styles/common.scss";',
      },
    },
  },
});
