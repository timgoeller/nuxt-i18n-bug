import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  builder: 'vite',
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    vueI18n: {
      fallbackLocale: 'de',
      legacy: false,
      messages: {
        en: {
          hello: 'Hello, I am translated',
        },
        de: {
          hello: 'Hallo, ich bin übersetzt',
        }
      },
    },
  }
})
