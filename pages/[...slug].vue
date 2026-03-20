<template>
  <main>
    <div class="container max-w-[600px] py-10 mx-auto max-md:px-4">
      <ContentDoc>
        <template v-slot="{ doc }">
          <div>
            <article>
              <h1 class="text-xl font-bold">{{ doc.title }}</h1>
              <p v-if="doc.date" class="text-gray text-sm mt-1">{{ formatDate(doc.date) }}</p>
              <div v-if="doc.keywords?.length" class="flex gap-2 my-2 flex-wrap">
                <span v-for="key in doc.keywords" :key="key" class="bg-blue rounded-2xl px-2 py-[2px] text-sm text-white">
                  {{ key }}
                </span>
              </div>
              <hr class="my-4">
              <ContentRenderer :value="doc" />
            </article>
            <div v-if="isDark">
              <Script  src="https://utteranc.es/client.js"
                repo="stu1002138/lucas-website"
                issue-term="url"
                theme="dark-blue"
                crossorigin="anonymous"
                async>
              </Script>
            </div>
            <div v-else>
              <Script src="https://utteranc.es/client.js"
                repo="stu1002138/lucas-website"
                issue-term="url"
                theme="github-light"
                crossorigin="anonymous"
                async>
              </Script>
            </div>
          </div>
        </template>
        <template #empty>
          <h1>此頁面尚未完成</h1>
        </template>
        <template #not-found>
          <h1>無此頁面喔!!</h1>
        </template>
      </ContentDoc>
    </div>
  </main>
</template>

<script setup lang="ts">
const { isDark } = useColorTheme()

const { data: doc } = await useAsyncData('doc', () =>
  queryContent(useRoute().path).findOne()
)

if (doc.value) {
  const blogTitle = doc.value.title ? `${doc.value.title} | Lucas's Blog` : "Lucas's Blog"
  useSeoMeta({
    title: blogTitle,
    ogTitle: blogTitle,
    description: doc.value.description,
    ogDescription: doc.value.description,
    keywords: doc.value.keywords?.join(', '),
  })
}

function formatDate(date: string | Date): string {
  const d = new Date(date)
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}
</script>
