// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@nuxtjs/google-fonts'],
  nitro: {
    preset: 'node-server' // <-- très important pour Coolify
  },
  googleFonts: {
    families: {
      Inter: [100, 300, 400, 700, 900]
    }
  }
})
