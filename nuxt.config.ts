export default defineNuxtConfig({
  app: {
    head: {
      title: 'Honne',
      meta: [
        { name: 'description', content: 'Write your true thoughts daily.' }
      ]
    }
  },
  modules: [
    '@nuxt/image',
    '@nuxtjs/supabase',
    '@unocss/nuxt'
  ]
});
