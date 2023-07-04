export default defineNuxtConfig({
  app: {
    head: {
      title: 'Honne',
      meta: [
        { name: 'description',
          content: ''
        }
      ]
    }
  },
  modules: [
    '@nuxt/image',
    '@nuxtjs/supabase',
    '@unocss/nuxt'
  ]
});
