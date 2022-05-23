import path from "../config/path";

const { src, dest } = require("gulp");

const webpack = require("webpack-stream");
const rename = require("gulp-rename");

export default function script() {
  return src(path.src.js)
    .pipe(
      webpack({
        mode: "production",
        performance: { hints: false },
        module: {
          rules: [
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: [
                    "@babel/env",
                    { plugins: ["babel-plugin-root-import"] },
                  ],
                },
              },
            },
          ],
        },
      })
    )
    .on("error", function handleError() {
      this.emit("end");
    })
    .pipe(
      rename({
        extname: ".min.js",
      })
    )
    .pipe(dest(path.build.js));
}
