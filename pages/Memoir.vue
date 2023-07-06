<template>
  <div class="memoir">
    <Heading title="Memoir" description="Review the past." />
    <p>On {{ selectedThought['created_at'] }}, you wrote:</p>
    <h3>{{ selectedThought['content'] }}</h3>
    <div class="controls">
      <button
        @click="previousThought"
        ref="previousBtn" class="disabled">
        ←
      </button>
      <button
        @click="nextThought"
        ref="nextBtn" class="disabled">
        →
      </button>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.memoir h3 {
  @apply mt-3 text-4xl font-400;
}

.memoir .controls {
  @apply mt-18;
}

.memoir .controls button {
  @apply mx-6;
}
</style>

<script setup lang="ts">
const client = useSupabaseAuthClient();
const user = useSupabaseUser();

const { data: thoughts } = await client
  .from('thoughts')
  .select('*')
  .eq('user_id', user.value.id)
  .order('created_at', { ascending: false });

const selectedData = reactive({
  index: 0,
});

const selectedThought = computed(() => thoughts[selectedData.index]);

const previousBtn: Ref<HTMLButtonElement | null> = ref(null);
const nextBtn: Ref<HTMLButtonElement | null> = ref(null);

function previousThought() {
  if (previousBtn.value.classList.contains('disabled')) { return; };

  selectedData.index += 1;
};

function nextThought() {
  if (nextBtn.value.classList.contains('disabled')) { return; };

  selectedData.index -= 1;
};

onMounted(() => {
  watchEffect(() => {
    if (!thoughts) { navigateTo('/quill'); };

    if (!thoughts[selectedData.index + 1]) {
      previousBtn.value.classList.add('disabled');
    } else {
      previousBtn.value.classList.remove('disabled');
    };

    if (!thoughts[selectedData.index - 1]) {
      nextBtn.value.classList.add('disabled');
    } else {
      nextBtn.value.classList.remove('disabled');
    };
  });
});
</script>
