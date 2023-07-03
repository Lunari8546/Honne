<template>
  <button @click="login">Login with Discord</button>
</template>

<style scoped lang="postcss">
</style>

<script setup lang="ts">
const client = useSupabaseAuthClient();
const user = useSupabaseUser();

const login = async() => {
  const { user, error } = await client.auth.signInWithOAuth({
    provider: 'discord'
  });

  if (error) { return console.error(error); };
};

onMounted(() => {
  watchEffect(() => {
    if (user.value) { navigateTo('/write'); };
  });
});
</script>
