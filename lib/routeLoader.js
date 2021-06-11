const fs = require("fs");
const path_module = require("path");

function LoadModules(path, app) {
  // we have a file: load it
  require("../src/route")(app);
}

exports.module_holder = LoadModules;
