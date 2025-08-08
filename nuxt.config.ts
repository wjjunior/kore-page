import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    prerender: {
      routes: ["/"],
      crawlLinks: false,
    },
    compressPublicAssets: true,
  },
  experimental: {
    payloadExtraction: false,
  },
  app: {
    head: {
      meta: [{ name: "format-detection", content: "telephone=no" }],
    },
  },
  modules: [
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxt/test-utils",
    "@pinia/nuxt",
  ],
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
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            fontawesome: [
              "@fortawesome/fontawesome-svg-core",
              "@fortawesome/vue-fontawesome",
              "@fortawesome/free-solid-svg-icons",
              "@fortawesome/free-brands-svg-icons",
            ],
          },
        },
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
      Roboto: {
        wght: [100, 300, 400, 500, 700, 900],
        ital: [100, 300, 400, 500, 700, 900],
      },
    },
    display: "swap",
    prefetch: true,
    preconnect: true,
  },
  image: {
    quality: 80,
    format: ["webp", "jpg", "png"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
});
