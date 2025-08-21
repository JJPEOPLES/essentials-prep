// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-08-20',
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'netlify',
    output: {
      dir: '.output'
    }
  },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  css: ['~/assets/css/main.css'],
  typescript: {
    strict: true
  },
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: ''
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js'
  },
  app: {
    head: {
      title: 'Essentials 3PL - Third Party Logistics Solutions',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professional third-party logistics solutions for your business needs.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' }
      ]
    }
  }
})