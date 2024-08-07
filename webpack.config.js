const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    // main: "./src/index.ts",
    main: "./src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "game-bundle.js",
    library: "WgSimulator",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
};
