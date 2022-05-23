const { series, parallel } = require("gulp");

// Import tasks
import clean from "./gulp/task/clean";
import html from "./gulp/task/html";

// Gulp Tasks
exports.clean = clean;

// Default Gulp Task
exports.default = series(clean, html);
