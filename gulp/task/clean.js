import path from "../config/path";

const del = require("del");

export default function clean() {
  return del(path.clean);
}
