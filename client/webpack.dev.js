const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const path = require("path")
const webpack = require("webpack")

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    port: 3000,
    publicPath: "http://localhost:3000/",
    hotOnly: true
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ]
})
