// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxt/content', '@unocss/nuxt', '@nuxt/ui', '@nuxtjs/i18n'],
  i18n: {
    lazy: true,
    strategy: 'prefix_and_default',
    defaultLocale: 'tw',
    locales: [{
      code: 'en',
      iso: 'en-US',
      file: 'en-US.json'
    },
    {
      code: 'tw',
      iso: 'zh-TW',
      file: 'zh-TW.json'
    }
    ],
    langDir: 'locales'
  },
  content: {
    markdown: {
    },
    highlight: {
      // Theme used in all color schemes.
      theme: 'github-light',
      langs: [
        'c',
        'cpp',
        'java',
        'javascript'
      ]
      // OR
      // theme: {
      //   // Default theme (same as single string)
      //   default: 'github-light',
      //   // Theme used if `html.dark`
      //   dark: 'github-dark',
      //   // Theme used if `html.sepia`
      //   sepia: 'monokai'
      // }
    }
  },
  css: [
    '@/assets/css/main.css',
  ],
  compatibilityDate: '2024-08-03'
})