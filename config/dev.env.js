'use strict'

const merge = require('webpack-merge');
const baseEnv = require('./base.env');

module.exports = merge(baseEnv, {
  NODE_ENV: '"development"',
  API_BASE_URL: process.env.API_BASE_URL ? process.env.API_BASE_URL : '"https://api-dev.tablelist.com"'
});
