import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxtjs/google-fonts", "@nuxt/test-utils"],
  css: ["./assets/css/main.css"],
  typescript: {
    strict: true,
    typeCheck: true,
    shim: false,
    tsConfig: {
      compilerOptions: {
        allowSyntheticDefaultImports: true,
        esModuleInterop: true,
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  alias: {
    "@": "~/src",
  },
  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },
  // @ts-ignore - Google Fonts configuration
  googleFonts: {
    families: {
      Lato: {
        wght: [100, 300, 400, 700, 900],
        ital: [100, 300, 400, 700, 900],
      },
      "Hanken Grotesk": {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        ital: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
      Inter: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        ital: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
    display: "swap",
    prefetch: true,
    preconnect: true,
  },
});
