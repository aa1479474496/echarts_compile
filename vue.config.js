/*
 * 配置扩展
 */
const webpack = require("webpack");

module.exports = {
  lintOnSave: false,
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null,
    before: app => {}
  },
  configureWebpack: {
    //删除打包后的console文件
    optimization: {
      minimizer: []
    },
    //由于使用jquery ui 中的组件， 这里注册全局jquery对象
    resolve: {
      extensions: [".js"],
      alias: {
        jquery: "jquery/dist/jquery.min.js"
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ]
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/css/mixin.scss";
        `
      }
    }
  },

  // build 输出 地址
  outputDir: "./dist"
};
