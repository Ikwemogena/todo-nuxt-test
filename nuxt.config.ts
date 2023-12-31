// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@formkit/nuxt",
    "@nuxtjs/supabase",
  ],
  // supabase: {
  runtimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,
  },
  // supabase: {
  //   url: process.env.SUPABASE_URL,
  //   key: process.env.SUPABASE_KEY,

  // }
})
