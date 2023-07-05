<template>
  <button @click="login">Login with Discord.</button>
</template>

<style scoped lang="postcss">
</style>

<script setup lang="ts">
const client = useSupabaseAuthClient();
const user = useSupabaseUser();

const login = async() => {
  const { user } = await client.auth.signInWithOAuth({
    provider: 'discord'
  });
};

onMounted(() => {
  watchEffect(() => {
    if (user.value) { navigateTo('/quill'); };
  });
});
</script>
