const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

console.log(`

  +------------------------------------------+
  |                                          |
    NODE ENVIRONMENT: http://localhost:5000/
  |                                          |
  +------------------------------------------+

`)

module.exports = {
  mode: "development",
  entry: "./src/index.mjs",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".mjs"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
  stats: {
    colors: true,
    assets: true,
    modules: false,
    entrypoints: false,
    builtAt: true,
    hash: false,
    timings: false,
    version: false,
  },
};
