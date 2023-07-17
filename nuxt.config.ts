// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,

 
  // mode: 'spa',
  // router: {
  //   mode: 'history',
  //   extendRoutes(routes, resolve) {
  //     routes.push({
  //       name: 'custom',
  //       path: '*',
  //       component: resolve(__dirname, 'pages/index.vue')
  //     })
  //   }
  // },

  // alias 설정
  alias: {
    "@": "/components",
    "@@": "/pages",
    "assets": "/assets",
    "layouts": "/layouts"
  },

  app: {
    // baseURL: "/mrchoissi/test/",
    // buildAssetsDir: "/_nuxt/",
    // cdnURL: "",
    // head 기본 구성 설정
    head: {
      htmlAttrs: {
        lang: 'ko'
      },
      title: 'NUXT3 테스트',
      meta: [
      { charset: 'utf-8' },
      {
        hid: 'viewport',
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no'
      }
      ],
      link: [],
      style: [],
      script: [],
      noscript: []
    }
  },

  // 전역 CSS 파일/모듈/라이브러리등
  css: ['~/assets/css/tailwind.css'],

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  
})