const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/template.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            {
              plugins: ["@babel/plugin-proposal-class-properties"],
            },
          ],
        },
      },
    ],
  },
};
