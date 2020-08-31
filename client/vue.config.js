const path = require("path");

module.exports = {
  lintOnSave: false,
  outputDir: path.resolve(__dirname, '../public'),
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      },
    },
  },
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
      },
    },
  },
};
