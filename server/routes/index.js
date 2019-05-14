function routes(app) {
  app.get('/favicon', favicon);
  app.get('/favicon.ico', favicon);
}

function favicon(req, res) {
  res.status(200).send(null);
}

module.exports = routes;
