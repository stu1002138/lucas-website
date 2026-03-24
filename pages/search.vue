<template>
  <main>
    <section class="max-w-[800px] mx-auto py-10 max-md:px-4">
      <div class="flex items-center border border-gray rounded-2xl px-4 py-2 gap-2 mb-8">
        <UIcon name="i-heroicons-magnifying-glass-20-solid" class="w-5 h-5 text-gray flex-shrink-0" />
        <input
          ref="inputRef"
          v-model="query"
          type="text"
          :placeholder="$t('search.placeholder')"
          class="w-full bg-transparent outline-none text-base"
        >
      </div>

      <template v-if="query.trim()">
        <div v-if="results.length" class="flex flex-col">
          <nuxt-link
            v-for="article in results"
            :key="article._path"
            :to="article._path"
            class="my-2 border border-gray w-full flex flex-col px-4 py-2 rounded-2xl gap-2"
          >
            <h2 class="text-lg max-md:text-base hover:text-blue" :class="isDark ? 'text-white' : 'text-black'">
              {{ article.title }}
            </h2>
            <p class="text-gray text-sm">{{ article.description }}</p>
            <div v-if="article.keywords?.length" class="flex gap-2 flex-wrap">
              <span
                v-for="key in article.keywords"
                :key="key"
                class="bg-blue rounded-2xl px-2 py-[2px] text-xs text-white"
              >
                {{ key }}
              </span>
            </div>
          </nuxt-link>
        </div>
        <p v-else class="text-center text-gray">{{ $t('search.notFound') }}</p>
      </template>
    </section>
  </main>
</template>

<script lang="ts" setup>
const { isDark } = useColorTheme()
const { query, results } = useSearch()

const inputRef = ref<HTMLInputElement | null>(null)

onMounted(() => {
  inputRef.value?.focus()
})

useSeoMeta({
  title: "Search | Lucas's Blog",
})
</script>
