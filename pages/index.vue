<template>
  <main>
    <section class="py-12">
      <div class="max-w-[800px] mx-auto flex justify-center max-md:flex-col max-md:items-center gap-10">
        <NuxtImg
          class="w-[200px] rounded-2xl border-blue border-10 hover:w-[260px] hover:border-[#0000ff] hover:cursor-pointer transition-all duration-300 flex-shrink-0"
          src="/img/profile.jpg"
          alt="Lucas"
          loading="eager"
        />
        <div class="max-md:px-4 flex flex-col justify-center space-y-2">
          <p class="text-[28px] leading-tight">{{ $t('home.hi') }}<span class="font-bold text-[#4169e1] pl-2">Lucas</span>.</p>
          <p class="text-lg">{{ $t('home.introduce1') }}</p>
          <p class="text-gray-500">{{ $t('home.introduce2') }}</p>
          <p class="text-gray-500">{{ $t('home.introduce3') }}</p>
        </div>
      </div>
    </section>

    <section class="py-8 border-t border-gray-200 dark:border-gray-700">
      <div class="max-w-[800px] mx-auto max-md:px-4 space-y-3">
        <p class="leading-relaxed">{{ $t('home.introduceDetail1', { year: new Date().getFullYear() - 2019 }) }}</p>
        <p class="leading-relaxed">{{ $t('home.introduceDetail2') }}</p>
        <p class="leading-relaxed">{{ $t('home.introduceDetail3') }}</p>
        <p class="leading-relaxed">{{ $t('home.introduceDetail4') }}</p>
      </div>
    </section>

    <section class="py-10">
      <p class="text-center text-2xl font-bold py-4">{{ $t('home.careerJourney') }}</p>
      <div class="career-container">
        <div class="career-item">
          <NuxtImg class="w-12 rounded-lg" src="/img/yuanta-logo.jpeg" alt="yuanta" loading="lazy" />
          <p class="my-2 text-sm text-blue-300 font-medium">2025-11 ~ Present</p>
          <p class="mb-2 font-bold text-lg md:text-2xl text-left">{{ $t('jobInfo.yuanta') }}</p>
          <div class="flex flex-col gap-1 text-sm leading-relaxed">
            <p><span class="font-semibold">{{ $t('jobInfo.jobTitle') }}</span>{{ $t('jobInfo.fullstack') }}</p>
            <p><span class="font-semibold">{{ $t('jobInfo.experienceAt') }}</span>{{ $t('jobInfo.workContentYuanta') }}</p>
            <p><span class="font-semibold">{{ $t('jobInfo.skill') }}</span>Vue 3、Nuxt 3、Java、Spring Boot、TypeScript</p>
          </div>
        </div>
        <div class="career-item">
          <NuxtImg class="w-12 rounded-lg" src="/img/nextleap-logo.jpg" alt="nextleap" loading="lazy" />
          <p class="my-2 text-sm text-blue-300 font-medium">2024-10 ~ 2025-11</p>
          <p class="mb-2 font-bold text-lg md:text-2xl text-left">{{ $t('jobInfo.nextleap') }}</p>
          <div class="flex flex-col gap-1 text-sm leading-relaxed">
            <p><span class="font-semibold">{{ $t('jobInfo.jobTitle') }}</span>{{ $t('jobInfo.frontend') }}</p>
            <p><span class="font-semibold">{{ $t('jobInfo.experienceAt') }}</span>{{ $t('jobInfo.workContentNextleap') }}</p>
            <p><span class="font-semibold">{{ $t('jobInfo.skill') }}</span>Vue 3、Nuxt 3、TypeScript</p>
          </div>
        </div>
        <div class="career-item">
          <NuxtImg class="w-12 rounded-lg" src="/img/owlting-logo.jpeg" alt="owlting" loading="lazy" />
          <p class="my-2 text-sm text-blue-300 font-medium">2023-09 ~ 2024-08</p>
          <p class="mb-2 font-bold text-lg md:text-2xl text-left">{{ $t('jobInfo.owlting') }}</p>
          <div class="flex flex-col gap-1 text-sm leading-relaxed">
            <p><span class="font-semibold">{{ $t('jobInfo.jobTitle') }}</span>{{ $t('jobInfo.frontend') }}</p>
            <p><span class="font-semibold">{{ $t('jobInfo.experienceAt') }}</span>{{ $t('jobInfo.workContentOwlting') }}</p>
            <p><span class="font-semibold">{{ $t('jobInfo.skill') }}</span>Nuxt 3、Vue 3、Naive UI、Tailwind、ECharts、Headless UI、ESLint、TypeScript、Nuxt Security、Cypress、VitePress</p>
            <p><span class="font-semibold">{{ $t('jobInfo.project') }}</span><a class="text-blue underline" href="https://gateway.paynow.com.tw/">PayNow Official Website</a>、CMS Website、<a class="text-blue underline" href="https://docs.paynow.com.tw/component/">PayNow SDK</a></p>
          </div>
        </div>
        <div class="career-item">
          <NuxtImg class="w-12 rounded-lg" src="/img/envotion-logo.jpeg" alt="envotion" loading="lazy" />
          <p class="my-2 text-sm text-blue-300 font-medium">2022-06 ~ 2023-09</p>
          <p class="mb-2 font-bold text-lg md:text-2xl text-left">{{ $t('jobInfo.envotions') }}</p>
          <div class="flex flex-col gap-1 text-sm leading-relaxed">
            <p><span class="font-semibold">{{ $t('jobInfo.jobTitle') }}</span>{{ $t('jobInfo.frontend') }}</p>
            <p><span class="font-semibold">{{ $t('jobInfo.experienceAt') }}</span>{{ $t('jobInfo.workContentEnvotions') }}</p>
            <p><span class="font-semibold">{{ $t('jobInfo.skill') }}</span>Vue 3、Nuxt 3、BootStrap</p>
            <p><span class="font-semibold">{{ $t('jobInfo.project') }}</span><a class="text-blue underline" href="https://www.1111.com.tw/">1111 Official Website</a>、<a class="text-blue underline" href="https://guide.1111.com.tw/">新職點</a></p>
          </div>
        </div>
        <div class="career-item">
          <NuxtImg class="w-12 rounded-lg" src="/img/gigabyte-logo.jpg" alt="gigabyte" loading="lazy" />
          <p class="my-2 text-sm text-blue-300 font-medium">2019-08 ~ 2022-06</p>
          <p class="mb-2 font-bold text-lg md:text-2xl text-left">{{ $t('jobInfo.gigabyte') }}</p>
          <div class="flex flex-col gap-1 text-sm leading-relaxed">
            <p><span class="font-semibold">{{ $t('jobInfo.jobTitle') }}</span>{{ $t('jobInfo.software') }}</p>
            <p><span class="font-semibold">{{ $t('jobInfo.experienceAt') }}</span>{{ $t('jobInfo.workContentGigabyte') }}</p>
            <p><span class="font-semibold">{{ $t('jobInfo.skill') }}</span>Android、Java、MySQL、Spring Boot、Vue 2、Nuxt 2、BootStrap</p>
            <p><span class="font-semibold">{{ $t('jobInfo.project') }}</span><a class="text-blue underline" href="https://app.gigabyte.com.tw/Gmarket/Portal/">Gigabyte Android App</a>、CMS Website、<a class="text-blue underline" href="https://www.e7line.com/">e7line</a></p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 max-md:py-10 px-4 border-t border-gray-200 dark:border-gray-700">
      <p class="text-center text-2xl font-bold pb-8">{{ $t('home.skillTechical') }}</p>
      <div class="max-w-[800px] mx-auto flex justify-around flex-wrap gap-8">
        <div v-for="skill in skills" :key="skill.alt" class="flex flex-col items-center gap-2 w-16">
          <NuxtImg class="w-12 h-12" :src="skill.src" :alt="skill.alt" loading="lazy" />
          <span class="text-xs text-center capitalize" :class="isDark ? 'text-gray-400' : 'text-gray-500'">{{ skill.alt }}</span>
        </div>
      </div>
    </section>

    <section class="py-16 max-md:py-10 border-t border-gray-200 dark:border-gray-700">
      <p class="text-center text-2xl font-bold pb-2">{{ $t('home.contact') }}</p>
      <p class="text-center text-base text-[#808080] font-bold">{{ $t('home.contact-text') }}</p>
      <div class="flex justify-center gap-10 py-10">
        <a href="https://www.linkedin.com/in/ming-shen-chen/" target="_blank">
          <UIcon class="w-10 h-10 cursor-pointer hover:text-[#0a66c2] transition-colors" name="i-ri:linkedin-box-fill" />
        </a>
        <a href="https://www.facebook.com/stu1002138?mibextid=JRoKGi" target="_blank">
          <UIcon class="w-10 h-10 cursor-pointer hover:text-[#1877F2] transition-colors" name="i-ri:facebook-box-fill" />
        </a>
        <a href="mailto:stu1002138@gmail.com" target="_blank">
          <UIcon class="w-10 h-10 cursor-pointer hover:text-red transition-colors" name="i-ri:mail-fill" />
        </a>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { isDark } = useColorTheme()
const { locale } = useI18n()

const title = locale.value === 'en'
  ? "Lucas Chen | Full-Stack Engineer & Blog"
  : "Lucas Chen | 全端工程師・個人部落格"

const description = locale.value === 'en'
  ? "Personal portfolio and blog of Lucas Chen, Full-Stack Engineer at Yuanta Bank with 7+ years of experience in Vue 3, Nuxt 3, and Java Spring Boot."
  : "Lucas Chen（陳明陞）的個人作品集與部落格。元大銀行全端工程師，7 年以上開發經驗，專注 Vue 3、Nuxt 3、Java Spring Boot，分享技術開發、美食旅遊文章。"

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogUrl: locale.value === 'en' ? 'https://www.lucas-chen.website/en/' : 'https://www.lucas-chen.website/',
  ogImage: 'https://www.lucas-chen.website/img/profile.jpg',
  ogImageAlt: 'Lucas Chen',
})

useHead({
  link: [
    { rel: 'alternate', hreflang: 'zh-TW', href: 'https://www.lucas-chen.website/' },
    { rel: 'alternate', hreflang: 'en-US', href: 'https://www.lucas-chen.website/en/' },
    { rel: 'canonical', href: locale.value === 'en' ? 'https://www.lucas-chen.website/en/' : 'https://www.lucas-chen.website/' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Lucas Chen',
        alternateName: '陳明陞',
        url: 'https://www.lucas-chen.website',
        image: 'https://www.lucas-chen.website/img/profile.jpg',
        jobTitle: 'Full-Stack Engineer',
        worksFor: { '@type': 'Organization', name: 'Yuanta Bank' },
        knowsAbout: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Java', 'Spring Boot', 'Frontend Development', 'Full-Stack Development'],
        sameAs: [
          'https://www.linkedin.com/in/ming-shen-chen/',
          'https://www.facebook.com/stu1002138',
        ],
      }),
    },
  ],
})

const skills = [
  { src: '/img/lang/android-logo.svg', alt: 'android' },
  { src: '/img/lang/java-logo.svg', alt: 'java' },
  { src: '/img/lang/mysql-logo.svg', alt: 'mysql' },
  { src: '/img/lang/html-logo.svg', alt: 'html' },
  { src: '/img/lang/javascript-logo.svg', alt: 'javascript' },
  { src: '/img/lang/css-logo.svg', alt: 'css' },
  { src: '/img/lang/vue-logo.svg', alt: 'vue' },
  { src: '/img/lang/nuxt-logo.svg', alt: 'nuxt' },
  { src: '/img/lang/typescript-logo.svg', alt: 'typescript' },
  { src: '/img/lang/naiveui-logo.svg', alt: 'naive-ui' },
  { src: '/img/lang/tailwind-logo.svg', alt: 'tailwind' },
  { src: '/img/lang/node-logo.svg', alt: 'node' },
  { src: '/img/lang/vite-logo.svg', alt: 'vite' }
]
</script>

<style scoped>
.career-container {
  @apply flex relative flex-col h-auto before:content-[''] before:w-[2px] before:bg-[#808080] before:h-full before:absolute before:left-1/2;
  @apply w-1/2 mx-auto max-lg:w-2/3 max-md:w-full max-md:before:left-10 max-md:pl-10 max-md:before:right-auto gap-10;
}
.career-item {
  @apply odd:after:content-[''] odd:after:absolute odd:after:top-1/2 odd:after:right-0 odd:after:w-[20px] odd:after:h-[2px] odd:after:bg-[#808080];
  @apply even:before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-[20px] before:h-[2px] before:bg-[#808080];
  @apply w-1/2 max-md:w-full relative even:ml-auto even:pl-6 odd:pr-6 max-md:odd:pr-0 max-md:odd:pl-6 max-md:odd:after:w-[0px] odd:before:w-[0px] max-md:odd:before:w-[20px];
  @apply rounded-xl p-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200;
}
</style>
