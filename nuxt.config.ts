export default defineNuxtConfig({
  app: {
    head: {
      title: 'App',
      meta: [
        { name: 'description', content: 'app description...' }
      ]
    }
  },
  modules: [
    '@nuxt/image',
    '@unocss/nuxt'
  ]
});
