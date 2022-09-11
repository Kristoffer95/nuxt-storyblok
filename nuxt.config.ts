import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/scss/app.scss"],
  modules: [
    ['@storyblok/nuxt', { accessToken: '3G11Qcv4ewKvEYQ10jkh7Att' }],
    '@nuxtjs/tailwindcss',
  ],
})
