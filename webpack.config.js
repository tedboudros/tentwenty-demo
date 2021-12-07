const path = require("path");
const webpack = require("webpack");

const HTMLWebpackPlugin = require("html-webpack-plugin");

const module = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: "babel-loader",
    },
    {
      test: /\.html$/,
      use: "html-loader",
    },
    /*Choose only one of the following two: if you're using 
          plain CSS, use the first one, and if you're using a
          preprocessor, in this case SASS, use the second one*/
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    },
  ],
};

const plugins = [
  new HTMLWebpackPlugin({
    template: "index.html",
  }),
];

const output = {
  filename: "bundle.js",
  path: path.resolve("dist"),
  publicPath: "/",
};

const entry = "./index.js";

module.exports = {
  entry,
  output,
  module,
  plugins,
};
