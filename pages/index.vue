<template>
  <main>
    <section class="py-10">
      <div class="max-w-[800px] mx-auto flex justify-center max-md:flex-col max-md:items-center gap-10">
        <img class="w-[200px] rounded-2xl border-blue border-10 hover:w-[300px] hover:border-[#0000ff] hover:cursor-pointer" src="@/assets/img/profile.jpg" alt="Lucas">
        <div class="max-md:px-4">
          <p class="text-[28px]"> {{ $t('home.hi') }}<span class="font-bold text-[#4169e1] pl-2">Lucas</span>.</p>
          <p>{{ $t('home.introduce1') }}</p>
          <p>{{ $t('home.introduce2') }}</p>
          <p>{{ $t('home.introduce3') }}</p>
        </div>
      </div>
    </section>
    <section class="py-10">
      <div class="max-w-[800px] mx-auto max-md:px-4">
        <p class="leading-8">{{ $t('home.introduceDetail1', { year: new Date().getFullYear() - 2019 }) }}</p>
        <p class="leading-8">{{ $t('home.introduceDetail2') }}</p>
        <p class="leading-8">{{ $t('home.introduceDetail3') }}</p>
        <p class="leading-8">{{ $t('home.introduceDetail4') }}</p>
      </div>
    </section>
    <section>
      <p class="text-center text-2xl font-bold py-4">{{ $t('home.careerJourney') }}</p>
      <div class="career-container">
        <div class="career-item">
          <img class="w-12"src="@/assets/img/owlting-logo.jpeg" alt="owlting">
          <p class="my-2 text-base text-blue-300">2023-9~2024-08</p>
          <p class="mb-3 font-bold text-lg md:text-2xl text-left">{{ $t('jobInfo.owlting') }}</p>
          <p><span class="font-bold">{{ $t('jobInfo.jobTitle') }}</span>{{ $t('jobInfo.frontend') }}</p>
          <p><span class="font-bold">{{ $t('jobInfo.experienceAt') }}</span>{{ $t('jobInfo.workContentOwlting') }}</p>
          <p><span class="font-bold">{{ $t('jobInfo.skill') }}</span>Nuxt 3、Vue 3、Naive UI、Tailwind、ECharts、Headless UI、ESLint、TypeScript、Nuxt Security、Cypress、VitePress</p>
          <p><span class="font-bold">{{ $t('jobInfo.project') }}</span><a class="text-blue underline" href="https://gateway.paynow.com.tw/">PayNow Official Website</a>、CMS Website 、<a class="text-blue underline" href="https://docs.paynow.com.tw/component/">PayNow SDK</a></p>
        </div>
        <div class="career-item">
          <img class="w-12"src="@/assets/img/envotion-logo.jpeg" alt="envotion">
          <p class="my-2 text-base text-blue-300">2022-6~2023-09</p>
          <p class="mb-3 font-bold text-lg md:text-2xl text-left">{{ $t('jobInfo.envotions') }}</p>
          <p><span class="font-bold">{{ $t('jobInfo.jobTitle') }}</span>{{ $t('jobInfo.frontend') }}</p>
          <p><span class="font-bold">{{ $t('jobInfo.experienceAt') }}</span>{{ $t('jobInfo.workContentEnvotions') }}</p>
          <p><span class="font-bold">{{ $t('jobInfo.skill') }}</span>Vue 3, Nuxt 3、BootStrap</p>
          <p><span class="font-bold">{{ $t('jobInfo.project') }}</span><a class="text-blue underline" href="https://www.1111.com.tw/">1111 Official Website</a>、<a class="text-blue underline" href="https://guide.1111.com.tw/">新職點</a></p>
        </div>
        <div class="career-item">
          <img class="w-12"src="@/assets/img/gigabyte-logo.jpg" alt="gigabyte">
          <p class="my-2 text-base text-blue-300">2019-8~2022-06</p>
          <p class="mb-3 font-bold text-lg md:text-2xl text-left">{{ $t('jobInfo.gigabyte') }}</p>
          <p><span class="font-bold">{{ $t('jobInfo.jobTitle') }}</span>{{ $t('jobInfo.software') }}</p>
          <p><span class="font-bold">{{ $t('jobInfo.experienceAt') }}</span>{{ $t('jobInfo.workContentGigabyte') }}</p>
          <p><span class="font-bold">{{ $t('jobInfo.skill') }}</span>Android、Java、MySQL、Sprint Boot、Vue 2、Nuxt 2、BootStrap</p>
          <p><span class="font-bold">{{ $t('jobInfo.project') }}</span><a class="text-blue underline" href="https://app.gigabyte.com.tw/Gmarket/Portal/">Gigabyte Android App</a>、CMS Website 、<a class="text-blue underline" href="https://www.e7line.com/">e7line</a></p>
        </div>
      </div>
    </section>
    <section class="py-[100px] max-md:py-15 px-4">
      <p class="text-center text-2xl font-bold py-4">{{ $t('home.skillTechical') }}</p>
      <div class="max-w-[800px] py-10 mx-auto flex justify-around flex-wrap gap-15">
        <img class="w-12 h-12" src="@/assets/img/lang/android-logo.svg" alt="android">
        <img class="w-12 h-12" src="@/assets/img/lang/java-logo.svg" alt="java">
        <img class="w-12 h-12" src="@/assets/img/lang/mysql-logo.svg" alt="mysql">
        <img class="w-12 h-12" src="@/assets/img/lang/html-logo.svg" alt="html">
        <img class="w-12 h-12" src="@/assets/img/lang/javascript-logo.svg" alt="javascript">
        <img class="w-12 h-12" src="@/assets/img/lang/css-logo.svg" alt="css">
        <img class="w-12 h-12" src="@/assets/img/lang/vue-logo.svg" alt="vue">
        <img class="w-12 h-12" src="@/assets/img/lang/nuxt-logo.svg" alt="nuxt">
        <img class="w-12 h-12" src="@/assets/img/lang/typescript-logo.svg" alt="typescript">
        <img class="w-12 h-12" src="@/assets/img/lang/naiveui-logo.svg" alt="naive-ui">
        <img class="w-12 h-12" src="@/assets/img/lang/tailwind-logo.svg" alt="tailwind">
        <img class="w-12 h-12" src="@/assets/img/lang/node-logo.svg" alt="node">
        <img class="w-12 h-12" src="@/assets/img/lang/vite-logo.svg" alt="vite">
      </div>
    </section>
    <section class="py-[100px] max-md:py-15">
      <p class="text-center text-2xl font-bold pb-2">{{ $t('home.contact') }}</p>
      <p class="text-center text-base text-[#808080] font-bold">{{ $t('home.contact-text') }}</p>
      <div class="flex justify-center gap-10 py-10">
        <a href="https://www.linkedin.com/in/ming-shen-chen/" target="_blank">
          <UIcon class="w-10 h-10 mr-4 cursor-pointer hover:text-[#0a66c2]" name="i-ri:linkedin-box-fill" />
        </a>
        <a href="https://www.facebook.com/stu1002138?mibextid=JRoKGi" target="_blank">
          <UIcon class="w-10 h-10 mr-4 cursor-pointer hover:text-[#1877F2]" name="i-ri:facebook-box-fill" />
        </a>
        <a href="mailto:stu1002138@gmail.com" target="_blank">
          <UIcon class="w-10 h-10 mr-4 cursor-pointer hover:text-red" name="i-ri:mail-fill" />
        </a>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n()
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
}
</style>