const merge = require('webpack-merge');
const baseEnv = require('./base.env');

module.exports = merge(baseEnv, {
  NODE_ENV: '"local"',
  API_BASE_URL: process.env.API_BASE_URL ? process.env.API_BASE_URL : '"http://localhost:3000"'
});
