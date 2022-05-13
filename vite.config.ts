import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  server: {
    port: 5619,
    // open: true,
  },
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => {
            return `vant/es/${name}/style`;
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, "src") //设置别名
    }
  },
  css: {
    preprocessorOptions: {
      sass: {
        javascriptEnabled: true,
        //引用公共样式，使用vite搭建项目只安装sass即可，不需要安装node-sass,sass-loader
        //additionalData: `@import "./src/assets/common/common.scss";`
      },
    },
  },
})
