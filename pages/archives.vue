<template>
  <main>
    <h2 class="text-center text-2xl font-bold">{{ $t('header.archives') }}</h2>
    <section class="max-w-[800px] mx-auto py-10 max-md:px-4">
      <ContentList v-slot="{ list }">
        <template v-for="article in list" :key="article._path">
          <nuxt-link v-if="(locale === 'en' && article._path?.includes('/en')) || (locale !== 'en' && !article._path?.includes('/en') && article._path !== '/')" :to="article._path" class="my-5 border border-gray w-full flex flex-col px-4 py-2 rounded-2xl gap-2">
            <h2 class="text-lg max-md:text-base  hover:text-blue" :class="isDark ? 'text-white' : 'text-black'">{{ article.title }}</h2>
            <p class="text-gray text-sm">{{ article.date ? formatDate(article.date) : article.description }}</p>
          </nuxt-link>
        </template>
      </ContentList>
    </section>
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const { isDark } = useColorTheme()

function formatDate(date: string | Date): string {
  const d = new Date(date)
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}
</script>

<style scoped>
.archives-item {
  @apply px-6 py-4 border-2 border-[#808080] rounded-2xl hover:bg-[#dedede];
}
</style>
