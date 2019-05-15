const fs = require('fs');
const path = require('path');

function routes(app) {
  app.get('/favicon', favicon);
  app.get('/favicon.ico', favicon);

  app.get('/articles/:id', articleById);
}

function favicon(req, res) {
  res.status(200).send(null);
}

function articleById(req, res, next) {
  const articlePath = req.params.id;
  const fullPath = path.join(__dirname, `../../${articlePath}`);

  console.log('fullPath', fullPath);

  fs.readFile(fullPath, 'utf8', (err, file) => {
    if (err) return next(err);

    return res.status(200).json(file);
  });
}

module.exports = routes;
