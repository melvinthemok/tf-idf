const path = require("path")
// for HtmlWebpackPlugin access to process.env in this file 
require("dotenv").config({ path: path.resolve(__dirname, "./.env") })
// for access to process.env in code
const Dotenv = require("dotenv-webpack")

const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, "./src"),
        exclude: /(node_modules)/,
        loader: "ts-loader"
      },
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "source-map-loader"
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: process.env.NODE_ENV === 'development' }
          },
          "css-loader"
        ]
      }
    ]
  },
  resolve: { extensions: [".ts", ".tsx", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "./",
    filename: "bundle.js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv({ path: path.resolve(__dirname, "./.env") }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: process.env.TITLE,
      gtagId: process.env.GTAG_ID
    }),
    new MiniCssExtractPlugin()
  ]
}
