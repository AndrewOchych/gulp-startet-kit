import path from "../config/path";

const { src, dest } = require("gulp");

const fileinclude = require("gulp-file-include");
const webpAvifHTML = require("gulp-webp-avif-html");
const htmlmin = require("gulp-htmlmin");

export default function html() {
  return src(path.src.html)
    .pipe(fileinclude())
    .pipe(webpAvifHTML())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(path.build.html));
}
