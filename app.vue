<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="postcss">
::selection {
  @apply bg-secondary;
}

::placeholder {
  @apply text-tertiary;
}

* {
  @apply m-0 p-0 box-border font-sans;
  @apply bg-primary text-secondary;
  @apply outline-none select-none;
}

a, button {
  @apply px-6 py-3 text-lg border-0 border-rd;
  @apply cursor-pointer transition-all decoration-none;
  @apply bg-tertiary text-secondary;
}

a:hover, button:not(.disabled):hover {
  @apply bg-secondary text-primary;
}

input {
  @apply border-0 border-b-2;
  @apply px-6 py-3 text-xl;
}

.disabled {
  @apply text-primary cursor-not-allowed;
}

.quill, .memoir {
  @apply flex flex-col h-screen;
  @apply justify-center items-center text-center;
}
</style>
