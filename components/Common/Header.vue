<template>
  <header>
    <div class="container relative mx-auto py-4 flex justify-between items-center  max-md:justify-center">
      <h1 class="text-base"><span class="font-bold text-xl">Lucas</span> | <span class="text-lg">{{ $t('header.tech') }}</span> X <span class="text-lg">{{ $t('header.travel') }}</span> X <span class="text-lg">{{ $t('header.food') }}</span></h1>
      <div class="max-md:absolute max-md:right-0 ">
        <UIcon class="hidden max-md:block w-5 h-5 mr-4 cursor-pointer" name="i-ic:round-menu" @click="showNav = !showNav" />
        <ul class="flex gap-4 max-md:hidden">
          <li class="leading-[32px]"><a href="/tech-dev">{{ $t('header.techDev') }}</a></li>
          <li class="leading-[32px]"><a href="/travel">{{ $t('header.travel') }}</a></li>
          <li class="leading-[32px]"><a href="/food">{{ $t('header.food') }}</a></li>
          <li class="leading-[32px]"><a href="/archives">{{ $t('header.archives') }}</a></li>
          <li class="leading-[32px]"><a href="/">{{ $t('header.about') }}</a></li>
          <li class="leading-[32px]"><nuxt-link class="flex gap-1 items-center hover:bg-accent-cyan" :to="locale === 'tw' ? switchLocalePath('en') : switchLocalePath('tw')"><UIcon name="i-icon-park-outline:world" class="w-5 h-5" />{{ locale === 'tw' ? 'EN' : '中文' }}</nuxt-link></li>
          <li>
            <ClientOnly>
              <UButton
                :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
                color="gray"
                variant="ghost"
                aria-label="Theme"
                @click="isDark = !isDark"
              />
              <template #fallback>
                <div class="w-8 h-8" />
              </template>
            </ClientOnly>
          </li>
        </ul>
      </div>
      <div v-if="showNav" :class="isDark ? 'bg-[#000000]' : 'bg-[#FFFFFF]'" class="left-0 top-0 fixed z-2 w-full">
        <UIcon class="hidden max-md:block ml-auto mr-5 mt-5 w-5 h-5 mr-4 cursor-pointer" name="i-line-md:close" @click="showNav = !showNav" />
        <ul class="flex flex-col items-center py-10 gap-4">
          <li class="leading-[32px]"><a href="/tech-dev">{{ $t('header.techDev') }}</a></li>
          <li class="leading-[32px]"><a href="/travel">{{ $t('header.travel') }}</a></li>
          <li class="leading-[32px]"><a href="/food">{{ $t('header.food') }}</a></li>
          <li class="leading-[32px]"><a href="/archives">{{ $t('header.archives') }}</a></li>
          <li class="leading-[32px]"><a href="/">{{ $t('header.about') }}</a></li>
          <li class="leading-[32px]"><nuxt-link class="flex gap-1 items-center hover:bg-accent-cyan" :to="locale === 'tw' ? switchLocalePath('en') : switchLocalePath('tw')"><UIcon name="i-icon-park-outline:world" class="w-5 h-5" />{{ locale === 'tw' ? 'EN' : '中文' }}</nuxt-link></li>
          <li>
            <ClientOnly>
              <UButton
                :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
                color="gray"
                variant="ghost"
                aria-label="Theme"
                @click="isDark = !isDark"
              />
              <template #fallback>
                <div class="w-8 h-8" />
              </template>
            </ClientOnly>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
const { locale, locales } = useI18n()
const showNav = ref(false)
const switchLocalePath = useSwitchLocalePath()
const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

</script>
<style>

</style>