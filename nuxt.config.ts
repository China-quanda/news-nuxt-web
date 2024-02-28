// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // 使用css or scss 全局样式 但不支持scss变量
  // css: ['~/assets/styles/globa.scss'],
  vite: {
    // 使用全局scss变量方法
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/globa.scss" as *;'
        }
      }
    }
  }
})
