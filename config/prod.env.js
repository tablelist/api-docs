'use strict'

const merge = require('webpack-merge');
const baseEnv = require('./base.env');

module.exports = merge(baseEnv, {
  NODE_ENV: '"production"',
  API_BASE_URL: process.env.API_BASE_URL ? process.env.API_BASE_URL : '"https://api.tablelist.com"',
  STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY || '"pk_live_ESra0BOFxC0K6C5PfH4RO3Zh"',
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || '"sk_live_xCyQoGGvsfOEcWjISx0tORdj"',
  STRIPE_CLIENT_ID: process.env.STRIPE_CLIENT_ID || '"ca_CHsKVorYXJqTcJ09NObkk3oWUXuXnNtm"',
  PUBNUB_SUB_KEY: process.env.PUBNUB_SUB_KEY || '"sub-c-577cc764-71cf-11e5-a05b-02ee2ddab7fe"'
});
