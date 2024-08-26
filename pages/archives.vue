<template>
  <main>
    <h2 class="text-center text-2xl font-bold">{{ $t('header.archives') }}</h2>
    <section class="max-w-[800px] mx-auto py-10">
      <ContentList v-slot="{ list }">
        <template v-for="article in list" :key="article._path">
          <nuxt-link v-if="(locale === 'en' && article._path?.includes('/en')) || (locale !== 'en' && !article._path?.includes('/en') && article._path !== '/')" :to="article._path" class="my-5 border border-gray w-full flex flex-col px-4 py-2 rounded-2xl gap-2">
            <h2 class="text-lg max-md:text-base  hover:text-blue" :class="isDark ? 'text-white' : 'text-black'">{{ article.title }}</h2>
            <p class="text-gray">{{ article.description }}</p>
          </nuxt-link>
        </template>
      </ContentList>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
const { locale } = useI18n()
const colorMode = useColorMode()
const isDark = ref(true)

onMounted(() => {
  watch(() => colorMode.value, () => {
    if (colorMode.value === 'dark')isDark.value = true
    else isDark.value = false
  }, { immediate: true })
})
</script>

<style scoped>
.archives-item {
  @apply px-6 py-4 border-2 border-[#808080] rounded-2xl hover:bg-[#dedede];
}
</style>