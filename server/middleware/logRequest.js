const performanceNow = require('performance-now');

module.exports = function (req, res, next) {
  const requestLog = `${req.method} request path=${req.path} query=${JSON.stringify(req.query || {})} body=${JSON.stringify(req.body || {})}`;

  const startTime = performanceNow();

  const endFn = res.end;

  res.end = function (chunk, encoding) {
    const endTime = performanceNow();
    const totalTime = (endTime - startTime).toFixed(3);

    const responseLog = `${req.method} response status=${res.statusCode} path=${req.path} time=${totalTime}ms body=${JSON.stringify(res.body || {})}`;

    res.end = endFn;
    res.end(chunk, encoding);

    if (!req.path.startsWith('/static')) { //ignore static assets
      console.log(requestLog);
      console.log(responseLog);
    }
  };

  return next(null);
};
