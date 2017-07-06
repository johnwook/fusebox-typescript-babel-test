var path = require("path");
var webpack = require("webpack");

var babelOptions = {
  sourceMaps: true,
  presets: ["es2015"],
  plugins: [["transform-react-jsx"]]
};

module.exports = {
  entry: {
    main: "./src/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "./out"),
    filename: "tsWithWebpack.js"
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: babelOptions
          },
          {
            loader: "ts-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};
