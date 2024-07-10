// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    baseURL: '/news-nuxt-web/'
  },
  devtools: { enabled: false },
  modules: [
    '@element-plus/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // 自动引入 `defineStore()`
          'defineStore',
          // 自动引入 `defineStore()` 并重命名为 `definePiniaStore()`
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon'
  ],
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },
  // 使用css or scss 全局样式 但不支持scss变量
  // css: ['~/assets/styles/globa.scss'],
  css: [
    'element-plus/dist/index.css',
    '~/assets/fonts/iconfont.css',
    '~/assets/styles/variables.css'
  ],
  vite: {
    // 使用全局scss变量方法
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@use "~/assets/styles/globa.scss" as *;', //引入单个
          // additionalData: `@import "~/assets/styles/globa.scss";`, //引入单个
          additionalData: '@use "~/assets/styles/globa.scss" as *; @use "~/assets/styles/creator.scss" as *;'  //引入多个
        }
      }
    }
  }
})
