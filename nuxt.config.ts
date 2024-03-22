// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  components: [
    {
      path: "~/components/",
      pathPrefix: false,
    },
  ],
  router: {
    base: '/',
    history: true,
    // 定义 404 路由
    notFound: '404',
  },
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/global.scss";',
        },
      },
    },
  },
  app: {
    buildAssetsDir: 'static',   //修改站点资产的文件夹名称，默认是_nuxt
  },
  experimental: {
    payloadExtraction: false   //启用此选项时（默认情况下）提取使用nuxt generate生成的页面的有效负载
  },
});
