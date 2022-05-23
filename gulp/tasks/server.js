import path from "../config/path";

const gulp = require("gulp");
const browsersync = require("browser-sync").create();

import html from "./html";
import style from "./style";
import script from "./script";
import image from "./image";

export default function server() {
  // Init setver
  browsersync.init({
    server: {
      baseDir: path.server,
    },
    port: 3000,
    notify: false,
  });

  // Watch
  gulp.watch(path.watch.html, html).on("change", browsersync.reload);
  gulp.watch(path.watch.css, style).on("change", browsersync.reload);
  gulp.watch(path.watch.js, script).on("change", browsersync.reload);
  gulp.watch(path.watch.img, image);
}
