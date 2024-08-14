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
          <img class="w-20"src="@/assets/img/owlting-logo.jpeg" alt="owlting">
          <p class="text-lg">{{ $t('jobInfo.owlting') }}</p>
          <p><span>{{ $t('jobInfo.jobTitle') }}</span>{{ $t('jobInfo.frontend') }}</p>
          <p>2023-9~2024-08</p>
        </div>
        <div class="career-item">
          <img class="w-20"src="@/assets/img/envotion-logo.jpeg" alt="envotion">
          <p class="text-lg">{{ $t('jobInfo.envotions') }}</p>
          <p><span>{{ $t('jobInfo.jobTitle') }}</span>{{ $t('jobInfo.frontend') }}</p>
          <p>2022-6~2023-09</p>
        </div>
        <div class="career-item">
          <img class="w-20"src="@/assets/img/gigabyte-logo.jpg" alt="gigabyte">
          <p class="text-lg">{{ $t('jobInfo.gigabyte') }}</p>
          <p><span>{{ $t('jobInfo.jobTitle') }}</span>{{ $t('jobInfo.software') }}</p>
          <p>2019-8~2022-06</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style scoped>
.career-container {
  @apply flex relative container mx-auto flex-col h-auto before:content-[''] before:w-[2px] before:bg-[#808080] before:h-full before:absolute before:left-1/2;
}
.career-item {
  @apply odd:max-md:after:w-0 odd:after:content-[''] odd:after:absolute odd:after:top-1/2 odd:after:right-0 odd:after:w-[20px] odd:after:h-[2px] odd:after:bg-[#808080];
  @apply even:max-md:before:w-0 even:before:content-[''] even:before:absolute even:before:top-1/2 even:before:left-0 even:before:w-[20px] even:before:h-[2px] even:before:bg-[#808080];
  @apply w-1/4 max-lg:w-1/2 odd:ml-[25%] odd:max-lg:ml-0 odd:max-lg:pl-4 even:max-md:ml-[50%] even:ml-[50%] even:max-md:pl-4 even:pl-[100px] even:mr-[25%] relative py-4 ;
}
</style>