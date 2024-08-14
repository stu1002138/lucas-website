// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: `Home | Lucas's Blog`,
      meta: [
        { name: "description", content: '一名前端工程師的部落格，紀錄著美食旅遊以及學習的技術' },
        { property: 'og:title', content: 'Nuxt 3 Playground' },
        { property: 'og:url', content: 'https://www.lucas-chen.website/' },
        { property: 'og:description', content: '一名前端工程師的部落格，紀錄著美食旅遊以及學習的技術' },
      ],
    },
    baseURL: '/',
    buildAssetsDir: '/static/'
  },
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