import path from "../config/path";

const { src, dest } = require("gulp");

export default function html() {
  return src(path.src.html).pipe(dest(path.build.html));
}
