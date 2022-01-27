const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //这里的路径是相对于js-algorithm,下面的模板同理
  entry: "./src/index.js",
  output: {
    filename: "app.js",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.js/i,
        use: [
          {
            loader: "babel-loader",
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/tpl/index.html",
    }),
  ],
};
