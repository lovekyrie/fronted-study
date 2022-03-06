const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name]_[chunkhash:8].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
      },
      {
        test: /\.tsx?/,
        loader: "ts-loader",
        options: {
          //specify the specific TS complilation configuration to distinguish the TS configuration of the script
          configFile: path.resolve(__dirname, "./tsconfig.json"),
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpeg?|gif)$/i,
        loader: "file-loader",
        options: {
          name: "images/[name].[ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".vue"],
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "Caching",
    }),
    new MiniCssExtractPlugin({
      filename: "[name]_[contenthash:8].css",
    }),
    new VueLoaderPlugin(),
    AutoImport({
      resolvers: [ElementPlusResolver],
    }),
    Components({
      resolvers: [ElementPlusResolver],
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3000,
    compress: true,
  },
};
