<template>
  <main>
    <h2 class="text-center text-2xl font-bold">{{ $t('header.archives') }}</h2>
    <section class="container mx-auto py-10">
      <ul class="pl-[100px] max-md:px-4 flex flex-col gap-3">
        <li class="archives-item">
          <a :href="localePath('/note/2024/08/14/family-first-decision')" class="text-lg max-md:text-base text-black hover:text-blue">
            <p class="text-[#808080]">2024.08.07</p>
            <h3>{{ $t('archives.20240814.title') }}</h3>
          </a>
        </li>
      </ul>
    </section>
  </main>
</template>

<script lang="ts" setup>
const localePath = useLocalePath()

</script>

<style scoped>
.archives-item {
  @apply px-6 py-4 border-2 border-[#808080] rounded-2xl hover:bg-[#dedede];
}
</style>