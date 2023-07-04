<template>
  <div v-if="!wrote">
    <input ref="input" type="text" />
    <button @click="write">Write</button>
  </div>
  <div v-else>
    <p>Wrote today already!</p>
  </div>
</template>

<style scoped lang="postcss">
</style>

<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid';

const client = useSupabaseAuthClient();
const user = useSupabaseUser();

const input: Ref<HTMLInputElement | null> = ref(null);

let { data: wrote } = await client
  .from('stats')
  .select('wrote')
  .eq('user_id', user.value.id);

wrote = wrote[0]['wrote'];

const write = async() => {
  if (!input.value.value || wrote) { return; };

  const { data: thoughts } = await client
    .from('thoughts')
    .insert(
      {
        key: self.crypto.randomUUID(),
        user_id: user.value.id,
        created_at: new Date().toISOString(),
        content: input.value.value
      }
  );

  await client
    .from('stats')
    .update({ 'wrote': true })
    .eq('user_id', user.value.id);

  navigateTo('/past');
};
</script>
