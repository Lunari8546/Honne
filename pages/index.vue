<template>
  <div class="landing">
    <h1>Honne</h1>
    <div>
      <div class="btns">
        <button @click="login">Login with Discord.</button>
        <NuxtLink
          to="https://github.com/users/Lunari8546/projects/4"
          target="_blank"
        >
          Roadmap.
        </NuxtLink>
      </div>
      <p>Note: UI is subject to change.</p>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.landing {
  @apply flex flex-col justify-between;
  @apply p-24 h-screen;
}

.landing h1 {
  @apply text-66 font-400;

  line-height: 0.8;
  letter-spacing: -1.5rem;
}

.landing .btns button {
  @apply w-60 mr-12;
}

.landing .btns button:last-child {
  @apply mr-0;
}

.landing p {
  @apply text-2xl text-tertiary mt-12;
}

@screen lt-xl {
  .landing {
    @apply justify-center items-center text-center;
  }

  .landing h1 {
    @apply text-36 mb-36;

    letter-spacing: -1rem;
  }
}

@screen lt-md {
  .landing h1 {
    @apply text-24 mb-24;

    letter-spacing: -0.5rem;
  }

  .landing .btns button {
    @apply mr-0 mb-6;
  }
}
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
