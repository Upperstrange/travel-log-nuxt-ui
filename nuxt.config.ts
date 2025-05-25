import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@nuxt/ui", "@nuxt/image"],
  fonts: {
    families: [
      { name: "Roboto", provider: "google" },
      // You can add more font families here
      // { name: 'MyCustomFont', src: '/path/to/font.woff2' } // Example for local fonts
    ],
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
});
