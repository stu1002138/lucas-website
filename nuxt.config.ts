// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: `Lucas Chen | Full-Stack Engineer & Blog`,
      meta: [
        { name: 'author', content: 'Lucas Chen' },
        { name: 'robots', content: 'index, follow' },
        { name: 'description', content: 'Lucas Chen（陳明陞）的個人部落格與作品集。元大銀行全端工程師，擁有 7 年以上開發經驗，專注 Vue 3、Nuxt 3、Java Spring Boot，分享技術開發、美食旅遊文章。' },
        { property: 'og:title', content: `Lucas Chen | Full-Stack Engineer & Blog` },
        { property: 'og:url', content: 'https://www.lucas-chen.website/' },
        { property: 'og:description', content: 'Lucas Chen（陳明陞）的個人部落格與作品集。元大銀行全端工程師，分享 Vue 3、Nuxt 3、Java 技術開發、美食旅遊等文章。' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://www.lucas-chen.website/img/profile.jpg' },
        { property: 'og:image:alt', content: 'Lucas Chen' },
        { property: 'og:locale', content: 'zh_TW' },
        { property: 'og:locale:alternate', content: 'en_US' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: `Lucas Chen | Full-Stack Engineer & Blog` },
        { name: 'twitter:description', content: 'Lucas Chen（陳明陞）的個人部落格。全端工程師，分享 Vue 3、Nuxt 3、Java 技術開發、美食旅遊文章。' },
        { name: 'twitter:image', content: 'https://www.lucas-chen.website/img/profile.jpg' },
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
        'img-src': ["'self'", 'data:'],
      }
    }
  },
  compatibilityDate: '2024-08-03'
})