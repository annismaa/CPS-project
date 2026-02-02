const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",

  entry: "./src/js/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: "src/images", to: "images" },
        { from: "src/icons", to: "icons" },
      ],
    }),
  ],

  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3000,
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
