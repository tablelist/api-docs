const forky = require('forky');

forky({
  path: `${__dirname}/prod-server.js`,
  workers: 1,
  enable_logging: true
});
