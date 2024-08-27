<template>
  <div class="flex gap-2 my-2 flex-wrap">
    <span v-for="key in keywordList" :key="key" class="bg-blue rounded-2xl px-2 py-[2px] text-sm text-white">
      {{ key }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  keywords: {
    type: String,
    default: ''
  },
})

useSeoMeta({
  keywords: props.keywords
})
const keywordList = props.keywords.split(',')
</script>