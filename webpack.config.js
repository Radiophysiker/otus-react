const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: ["./src/index.ts"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "./index.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: [/\.(js|ts)x?$/],
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
module.exports = config;
