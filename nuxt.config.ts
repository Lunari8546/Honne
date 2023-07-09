export default defineNuxtConfig({
  buildModules: [
    '@nuxtjs/pwa'
  ],
  modules: [
    '@nuxtjs/supabase',
    '@unocss/nuxt'
  ],
  plugins: [
    { src: '~/plugins/vercel.ts', mode: 'client' }
  ]
});
