<template>
  <main>
    <h2 class="text-center text-2xl font-bold"># {{ route.params.name }}</h2>
    <section class="max-w-[800px] mx-auto py-10 max-md:px-4">
      <div v-if="filteredArticles.length" class="flex flex-col">
        <nuxt-link
          v-for="article in filteredArticles"
          :key="article._path"
          :to="article._path"
          class="my-2 border border-gray w-full flex flex-col px-4 py-2 rounded-2xl gap-2"
        >
          <h2 class="text-lg max-md:text-base hover:text-blue" :class="isDark ? 'text-white' : 'text-black'">{{ article.title }}</h2>
          <p class="text-gray text-sm">{{ article.description }}</p>
        </nuxt-link>
      </div>
      <p v-else class="text-center text-gray">{{ $t('tag.notFound') }}</p>
    </section>
  </main>
</template>

<script lang="ts" setup>
const route = useRoute()
const { isDark } = useColorTheme()
const { locale } = useI18n()

const { data: articles } = await useAsyncData(`tag-${route.params.name}`, () =>
  queryContent()
    .where({ keywords: { $contains: route.params.name as string } })
    .find()
)

const filteredArticles = computed(() =>
  (articles.value ?? []).filter(article =>
    locale.value === 'en'
      ? article._path?.includes('/en')
      : !article._path?.includes('/en') && article._path !== '/'
  )
)
</script>
