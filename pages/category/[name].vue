<template>
  <main>
    <h2 class="text-center text-2xl font-bold">{{ $t(`header.${route.params.name}`) }}</h2>
    <section class="max-w-[800px] mx-auto py-10">
      <ContentList :path="localePath(`/${route.params.name}`)">
        <template #not-found>
          <p>No articles found.</p>
        </template>
        <template  #default="{ list }">
          <template v-for="article in list" :key="article._path">
            <nuxt-link v-if="localePath(`/${route.params.name}`) !== article._path" :to="article._path" class="border border-gray w-full flex flex-col px-4 py-2 rounded-2xl gap-2">
              <h2 class="text-lg max-md:text-base  hover:text-blue" :class="isDark ? 'text-white' : 'text-black'">{{ article.title }}</h2>
              <p class="text-gray">{{ article.description }}</p>
            </nuxt-link>
          </template>
        </template>
        
      </ContentList>
    </section>
  </main>
</template>
<script lang="ts" setup>
const route = useRoute()
const colorMode = useColorMode()
const isDark = ref(true)

onMounted(() => {
  watch(() => colorMode.value, () => {
    if (colorMode.value === 'dark')isDark.value = true
    else isDark.value = false
  }, { immediate: true })
})
const categoryList = ['tech-dev', 'travel', 'food']

if (!categoryList.includes(route.params.name)) navigateTo('/')
</script>