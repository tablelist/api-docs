function jsonFile(filePath) {
  if (!filePath) throw new Error('filePath is required');

  let data;

  try {
    data = require(filePath); //eslint-disable-line
  } catch (err) {
    throw new Error(`file path ${filePath} not found`, err);
  }

  return function(req, res) {
    res
      .set('Content-Type', 'application/json')
      .send(JSON.stringify(data));
  };
}

module.exports = jsonFile;
