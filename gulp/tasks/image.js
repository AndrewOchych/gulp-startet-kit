import path from "../config/path";

const { src, dest } = require("gulp");

const gulpAvif = require("gulp-avif");
const cwebp = require("gulp-cwebp");
const imagemin = require("gulp-imagemin");

export default function image() {
  return src(path.src.img)
    .pipe(
      gulpAvif({
        quality: 60,
      })
    )
    .pipe(dest(path.build.img))
    .pipe(src(path.src.img))
    .pipe(cwebp())
    .pipe(dest(path.build.img))
    .pipe(src(path.src.img))
    .pipe(
      imagemin({
        interlaced: true,
        progressive: true,
        optimizationLevel: 3, // 0 to 7
        svgoPlugins: [
          {
            removeViewBox: false,
          },
        ],
      })
    )
    .pipe(dest(path.build.img));
}
