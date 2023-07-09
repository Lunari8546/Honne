<template>
  <div class="quill">
    <Heading title="Quill" :description="description" />
    <div class="field" v-if="!wrote">
      <input
        @input="validate" ref="input"
        type="text" maxlength="30" placeholder="a spark of thought."
      />
      <button class="disabled" ref="btn" @click="write">Write.</button>
    </div>
    <div v-else>
      <NuxtLink to="/memoir">Visit Memoir.</NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.field {
  @apply flex flex-col;
}

.field input {
  @apply mb-12 text-center;
}
</style>

<script setup lang="ts">
const client = useSupabaseAuthClient();
const user = useSupabaseUser();

const input: Ref<HTMLInputElement | null> = ref(null);
const btn: Ref<HTMLButtonElement | null> = ref(null);

function validate(event) {
  if (input.value.value != 0) {
    btn.value.classList.remove('disabled');
  } else {
    btn.value.classList.add('disabled');
  };
};

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

  navigateTo('/memoir');
};

let description;

wrote ?
  description = "You've written today already." :
  description = "What's in your mind today?";
</script>
