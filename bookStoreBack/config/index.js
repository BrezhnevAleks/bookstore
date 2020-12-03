const config = require("./config.json");
const defaultConfig = require("./defaultConfig.json");
const localConfig = require("./localConfig.json");
let _ = require("lodash");

module.exports = _.defaultsDeep(localConfig, defaultConfig, config);
//console.log(_.defaultsDeep(localConfig, { defaultConfig, configDb }));
