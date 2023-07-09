<template>
  <div class="landing">
    <h1>Honne</h1>
    <div class="btns">
      <button @click="loginDialog.showModal()">Login.</button>
      <NuxtLink
        to="https://github.com/users/Lunari8546/projects/4"
        target="_blank"
      >
        Roadmap.
      </NuxtLink>
      <NuxtLink
        to="https://github.com/Lunari8546/Honne"
        target="_blank"
      >
        Source code.
      </NuxtLink>
    </div>
  </div>
  <dialog ref="loginDialog">
    <h2>Login method:</h2>
    <div class="methods">
      <button @click="loginDiscord">
        <div class="i-carbon-logo-discord"></div>
        Discord.
      </button>
      <button @click="loginGithub">
        <div class="i-carbon-logo-github"></div>
        Github.
      </button>
    </div>
  </dialog>
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

.landing .btns {
  @apply w-full;
}

.landing .btns *:not(:last-child) {
  @apply mr-12;
}

.methods button {
  @apply inline-flex;
}

.methods button div {
  @apply mr-3 text-3xl;
}

.methods button:not(:last-child) {
  @apply mr-6;
}

@screen lt-xl {
  .landing {
    @apply p-18 justify-center items-center text-center;
  }

  .landing h1 {
    @apply text-36 mb-36;

    letter-spacing: -1rem;
  }

  .methods button {
    @apply w-full;
  }

  .methods button:not(:last-child) {
    @apply mb-3;
  }
}

@screen lt-md {
  .landing {
    @apply p-12;
  }

  .landing .btns {
    @apply flex flex-col;
  }

  .landing h1 {
    @apply text-24 mb-24;

    letter-spacing: -0.5rem;
  }

  .landing .btns *:not(:last-child) {
    @apply mr-0 mb-6;
  }
}
</style>

<script setup lang="ts">
const client = useSupabaseAuthClient();
const user = useSupabaseUser();

const loginDialog: Ref<HTMLDialogElement | null> = ref(null);

const loginDiscord = async() => {
  const { user } = await client.auth.signInWithOAuth({
    provider: 'discord',
    redirectTo: window.location.origin
  });
};

const loginGithub = async() => {
  const { user } = await client.auth.signInWithOAuth({
    provider: 'github',
    redirectTo: window.location.origin
  });
};

onMounted(() => {
 watchEffect(() => {
    if (user.value) { navigateTo('/quill'); };
  });
});
</script>
