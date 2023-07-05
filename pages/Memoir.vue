<template>
  <Heading title="Memoir" description="Review the past." />
  <Suspense>
    <template #default>
      <p v-for="thought in thoughts">
        {{ thought.content }} - {{ thought.created_at }}
      </p>
    </template>
    <template #fallback>
      <p>Loading...</p>
    </template>
  </Suspense>
</template>

<style scoped lang="postcss">
</style>

<script setup lang="ts">
const client = useSupabaseAuthClient();
const user = useSupabaseUser();

const { data: thoughts } = await client
  .from('thoughts')
  .select('*');
</script>
