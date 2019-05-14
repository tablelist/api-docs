module.exports = function (req, res, next) {
  const https = req.headers['x-forwarded-proto'] === 'https';

  if (!https) {
    const host = req.get('host');
    const url = req.url;

    const secureUrl = `https://${host}${url}`;

    return res.redirect(301, secureUrl);
  }

  return next(null);
};
