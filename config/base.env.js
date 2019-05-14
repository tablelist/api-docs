const packageJson = require('../package.json');

module.exports = {
  VERSION: `"${packageJson.version}"`,
  AUTH_TOKEN: '"Tablelist-Pro-Auth-Token"',
  FILE_PICKER_API_KEY: process.env.FILE_PICKER_API_KEY || '"Adx3XaWW4QuizZdXzMyYjz"',
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || '"sk_test_yl6dHgrhyKRYQkn5jF8RwlNQ"',
  STRIPE_CLIENT_ID: process.env.STRIPE_CLIENT_ID || '"ca_CHsKmPITvtIkJljdFoQU27gdecH7Bp4a"',
  PUBNUB_SUB_KEY: process.env.PUBNUB_SUB_KEY || '"sub-c-df2f99f4-a2b0-11e5-b8f6-0619f8945a4f"'
};
