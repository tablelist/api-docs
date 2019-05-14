const utils = require('./utils');
const config = require('../config');

module.exports = {
  loaders: utils.cssLoaders({
    extract: config.buildProd,
    sourceMap: config.buildProd ? config.build.productionSourceMap : config.dev.cssSourceMap,
  })
};
