const InvalidArgumentError = require('../errors/invalidArgumentError');

const logger = require('../logger');

function errorHandler(err, req, res, next) { // eslint-disable-line no-unused-vars
  logger.error(err);

  if (err instanceof InvalidArgumentError) {
    return res.status(getStatusCodeByError(err)).json(convertErrorIntoMessage(err));
  }

  logger.error('ERROR HANDLED:', err);

  return res.status(getStatusCodeByError(err)).json(convertErrorIntoMessage(err));
}

function convertErrorIntoMessage(error) {
  return {
    errors: [
      error.message || 'An error occurred'
    ],
    statusCode: getStatusCodeByError(error)
  };
}

function getStatusCodeByError(error) {
  if (error instanceof InvalidArgumentError) return 500;

  return 500;
}

module.exports = errorHandler;
