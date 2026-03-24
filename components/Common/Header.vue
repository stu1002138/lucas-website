<template>
  <header>
    <div class="container relative mx-auto py-4 flex justify-between items-center max-md:justify-center">
      <h1 class="text-base">
        <nuxt-link :to="localePath('/')" class="hover:opacity-75 transition-opacity">
          <span class="font-bold text-xl">Lucas</span> |
          <span class="text-lg">{{ $t('header.tech') }}</span> X
          <span class="text-lg">{{ $t('header.travel') }}</span> X
          <span class="text-lg">{{ $t('header.food') }}</span>
        </nuxt-link>
      </h1>
      <div class="max-md:absolute max-md:right-0">
        <UIcon
          class="hidden max-md:block w-5 h-5 mr-4 cursor-pointer"
          name="i-ic:round-menu"
          @click="showNav = !showNav"
        />
        <ul class="flex gap-4 max-md:hidden">
          <li v-for="item in navItems" :key="item.path" class="leading-[32px]">
            <nuxt-link :to="localePath(item.path)">{{ $t(item.label) }}</nuxt-link>
          </li>
          <li class="leading-[32px]">
            <nuxt-link
              class="flex gap-1 items-center hover:bg-accent-cyan"
              :to="locale === 'tw' ? switchLocalePath('en') : switchLocalePath('tw')"
            >
              <UIcon name="i-icon-park-outline:world" class="w-5 h-5" />
              {{ locale === 'tw' ? 'EN' : '中文' }}
            </nuxt-link>
          </li>
          <li>
            <UButton
              icon="i-heroicons-magnifying-glass-20-solid"
              color="gray"
              variant="ghost"
              aria-label="Search"
              :to="localePath('/search')"
            />
          </li>
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
      <div v-if="showNav" class="left-0 top-0 fixed z-2 w-full h-dvh bg-[#1e293bbf]">
        <div :class="isDark ? 'bg-[#000000]' : 'bg-[#FFFFFF]'" class="w-full pt-5 rounded-b-lg">
          <UIcon
            class="hidden max-md:block ml-auto mr-5 w-5 h-5 cursor-pointer"
            name="i-line-md:close"
            @click="showNav = !showNav"
          />
          <ul class="flex flex-col items-center py-10 gap-4">
            <li v-for="item in navItems" :key="item.path" class="leading-[32px]">
              <nuxt-link :to="localePath(item.path)" @click="handleClose">
                {{ $t(item.label) }}
              </nuxt-link>
            </li>
            <li class="leading-[32px]">
              <nuxt-link
                class="flex gap-1 items-center hover:bg-accent-cyan"
                :to="locale === 'tw' ? switchLocalePath('en') : switchLocalePath('tw')"
                @click="handleClose"
              >
                <UIcon name="i-icon-park-outline:world" class="w-5 h-5" />
                {{ locale === 'tw' ? 'EN' : '中文' }}
              </nuxt-link>
            </li>
            <li>
              <UButton
                icon="i-heroicons-magnifying-glass-20-solid"
                color="gray"
                variant="ghost"
                aria-label="Search"
                :to="localePath('/search')"
                @click="handleClose"
              />
            </li>
            <li>
              <ClientOnly>
                <UButton
                  :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
                  color="gray"
                  variant="ghost"
                  aria-label="Theme"
                  @click="isDark = !isDark; handleClose()"
                />
                <template #fallback>
                  <div class="w-8 h-8" />
                </template>
              </ClientOnly>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const { locale } = useI18n()
const showNav = ref(false)
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()
const { isDark } = useColorTheme()

const navItems = [
  { path: '/category/tech-dev', label: 'header.techDev' },
  { path: '/category/travel', label: 'header.travel' },
  { path: '/category/food', label: 'header.food' },
  { path: '/archives', label: 'header.archives' },
  { path: '/', label: 'header.about' }
]

const handleClose = () => {
  setTimeout(() => {
    showNav.value = false
  }, 100)
}
</script>
