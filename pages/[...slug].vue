<template>
  <main>
    <div class="container max-w-[600px] py-10 mx-auto">
      <ContentDoc>
        <template v-slot="{ doc }">
          <div>
            <article>
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