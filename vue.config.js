const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

const mode = process.argv.slice(2)[process.argv.slice(2).length - 1];

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  devServer: {
    setupMiddlewares: require("./setupMiddlewares"),
    proxy: {
      "/api": {
        target:
          mode === "dev" ? "http://localhost:3000" : "http://localhost:8080",
        changeOrigin: true,
        ws: true,
        pathRewrite: function (path) {
          return path.replace(/^\/api/, "");
        },
      },
    },
  },
});
