const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
        presets: ["react", "stage-2"]
      }
    },
    {
      test: /\.css$/,
      loader: "style-loader"
    },
    {
      test: /\.css$/,
      loader: "css-loader",
      query: {
        modules: true,
        localIdentName: "[name]__[local]___[hash:base64:5]"
      }
    }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist")
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
      _redux: path.resolve(__dirname, 'src/redux/'),
      srcAlias: path.resolve(__dirname, 'src'),
      style: path.resolve(__dirname, 'src/style'),
      helpers: path.resolve(__dirname, 'src/helpers')


    }
  }
};
