<template>
  <div class="title">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped lang="postcss">
.title {
  @apply mb-18;
}

.title h2 {
  @apply text-6xl font-400 mb-3;
}

.title p {
  @apply text-xl;
}
</style>

<script setup lang="ts">
const props = defineProps<{
  'title': string,
  'description': string
}>();
</script>
