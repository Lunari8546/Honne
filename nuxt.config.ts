export default defineNuxtConfig({
  app: {
    head: {
      title: 'Honne',
      meta: [
        { name: 'description',
          content: 'A special kind of diary to compose your true thoughts privately.'
        }
      ]
    }
  },
  modules: [
    '@nuxtjs/supabase',
    '@unocss/nuxt'
  ]
});
