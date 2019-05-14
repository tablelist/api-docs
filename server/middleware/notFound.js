function isFile(req) {
  const fileName = req.path.split('/').pop();
  return fileName.split('.').length > 1;
}

function notFound(req, res, next) {
  if (!isFile(req)) {
    return next(null);
  }

  return res.status(404).send('not found');
}

module.exports = notFound;
