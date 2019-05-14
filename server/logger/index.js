  const winston = require('winston');

  const logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({
        level: 'info',
        colorize: true
      })
    ]
  });

  class Logger {
    log(...args) { //eslint-disable-line
      logger.log(...args);
    }

    debug(...args) { //eslint-disable-line
      logger.info('debug', ...args);
    }

    info(...args) { //eslint-disable-line
      logger.info('info', ...args);
    }

    warn(...args) { //eslint-disable-line
      logger.warn('warn', ...args);
    }

    error(...args) { //eslint-disable-line
      logger.error('error', ...args);
    }
  }

  module.exports = new Logger();
