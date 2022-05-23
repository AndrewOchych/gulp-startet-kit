const { series, parallel } = require("gulp");

// Import tasks
import clean from "./gulp/tasks/clean";
import html from "./gulp/tasks/html";
import style from "./gulp/tasks/style";
import script from "./gulp/tasks/script";
import image from "./gulp/tasks/image";
import server from "./gulp/tasks/server";

// Gulp Tasks
exports.clean = clean;
exports.html = html;
exports.style = style;
exports.script = script;
exports.image = image;

// Default Gulp Task

const build = series(clean, parallel(html, style, script, image));
const watch = series(build, server);

exports.default = watch;
