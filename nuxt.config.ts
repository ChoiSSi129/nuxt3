// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,

  // alias 설정
  alias: {
    components: "/components",
    layouts: "/layouts"
  },

  // sourcemap 설정
  sourcemap: {
    server: process.env.NODE_ENV !== "production" ? true : false,
    client: process.env.NODE_ENV !== "production" ? true : false
  },

  app: {
    // baseURL: "/test/",
    buildAssetsDir: "/nuxt/",
    // cdnURL: "",
    // head 기본 구성 설정
    head: {
      htmlAttrs: {
        lang: "ko"
      },
      title: "NUXT3 테스트",
      meta: [
        { charset: "utf-8" },
        {
          hid: "viewport",
          name: "viewport",
          content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no"
        }
      ],
      link: [],
      style: [],
      script: [],
      noscript: []
    }
  },

  // 전역 CSS 파일/모듈/라이브러리등
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  build: {}
})
