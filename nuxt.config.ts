// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: `Home | Lucas's Blog`,
      meta: [
        { name: "description", content: '一名前端工程師的部落格，紀錄著美食旅遊以及學習的技術' },
        { property: 'og:title', content: `Home | Lucas's Blog` },
        { property: 'og:url', content: 'https://www.lucas-chen.website/' },
        { property: 'og:description', content: '一名前端工程師的部落格，紀錄著美食旅遊以及學習的技術' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://www.lucas-chen.website/og-image.png' },
        { property: 'og:locale', content: 'zh_TW' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: `Home | Lucas's Blog` },
        { name: 'twitter:description', content: '一名前端工程師的部落格，紀錄著美食旅遊以及學習的技術' },
      ],
      script: process.env.NODE_ENV === 'production' ? [
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-5ZTGLY54CE' },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5ZTGLY54CE');
          `,
          type: 'text/javascript',
          charset: 'utf-8',
        },
        {
          innerHTML: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "noiquocv9p");`,
          type: 'text/javascript',
          charset: 'utf-8',
        }
      ] : [],
    },
    baseURL: '/',
    buildAssetsDir: '/static/'
  },
  ssr: true,
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxt/image',
    'nuxt-security'
  ],
  i18n: {
    lazy: true,
    strategy: 'prefix_except_default',
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
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark'
      },
      langs: [
        'c',
        'cpp',
        'java',
        'javascript',
        'typescript',
        'vue',
        'html',
        'css',
        'json',
        'bash',
        'markdown'
      ]
    }
  },
  css: [
    '@/assets/css/main.css',
  ],
  site: {
    url: 'https://www.lucas-chen.website',
    name: `Lucas's Blog`
  },
  security: {
    headers: {
      contentSecurityPolicy: {
        'img-src': ["'self'", 'data:', 'https://cdn.lucas-chen.website', 'https://scontent.ftpe14-1.fna.fbcdn.net', 'https://*.fbcdn.net'],
      }
    }
  },
  compatibilityDate: '2024-08-03'
})