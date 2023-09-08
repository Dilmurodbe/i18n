// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n"],
  i18n: {
    /* module options */
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "EN",
        name: "EN",
        file: "EN.json",
      },
      {
        code: "UZ",
        name: "UZ",
        file: "UZ.json",
      },
    
      {
        code: "RU",
        name: "Ru",
        file: "RU.json",
      },
 
    ],
    defaultLocale: "UZ",
    vueI18n: {
      fallbackLocale: "EN",
    },
  },
});
