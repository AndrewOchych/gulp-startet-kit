import path from "../config/path";

const { src, dest } = require("gulp");

const sass = require("gulp-sass")(require("sass"));
const gcmq = require("gulp-group-css-media-queries");
const autoprefixer = require("gulp-autoprefixer");
const avifcss = require("gulp-avif-css");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const cssbeautify = require("gulp-cssbeautify");

export default function style() {
  return src(path.src.css)
    .pipe(sass())
    .pipe(gcmq())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 5 versions"],
      })
    )
    .pipe(avifcss())
    .pipe(
      cssbeautify({
        indent: "  ",
        autosemicolon: true,
      })
    )
    .pipe(dest(path.build.css))
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(dest(path.build.css));
}
