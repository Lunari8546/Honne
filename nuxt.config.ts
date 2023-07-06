export default defineNuxtConfig({
  modules: [
    '@nuxtjs/supabase',
    '@unocss/nuxt'
  ],
  plugins: [
    { src: '~/plugins/vercel.ts', mode: 'client' }
  ]
});
