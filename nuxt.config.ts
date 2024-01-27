// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: '@nuxt-themes/alpine',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxthq/studio',
    'nuxt-gtag',
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/plausible',
    '@nuxt/devtools'
  ],
  site: {
    url: 'https://benji377.netlify.app',
    name: 'Benjis Blog',
    description: 'Welcome to my awesome blog!',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  colorMode: {
    classSuffix: ''
  },
  gtag: {
    id: 'G-P82YK3ZM15'
  }
})
// Maybe: https://nuxt.com/modules/nuxt-feedme
// Maybe: https://nuxt.com/modules/prismic
// Maybe: https://nuxt.com/modules/element-plus for components
// Maybe: https://vite-pwa-org.netlify.app/frameworks/nuxt