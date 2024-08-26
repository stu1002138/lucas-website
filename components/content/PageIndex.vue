<template>
  <main>
    <ContentList :path="$route.path" v-slot="{ list }">
      <template v-for="article in list" :key="article._path">
        <nuxt-link v-if="$route.path !== article._path" :to="article._path" class="border border-gray w-full flex flex-col px-4 py-2 rounded-2xl gap-2">
          <h2 class="text-lg font-bold">{{ article.title }}</h2>
          <p class="text-gray">{{ article.description }}</p>
        </nuxt-link>
      </template>
    </ContentList>
  </main>
</template>