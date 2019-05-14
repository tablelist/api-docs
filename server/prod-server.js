const cors = require('cors');
const express = require('express');
const path = require('path');
const compression = require('compression');
const serveStatic = require('serve-static');

const forceHttps = require('./middleware/forceHttps');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');
const logRequest = require('./middleware/logRequest');
const routes = require('./routes/index');

const port = process.env.PORT || 5060;
const staticFilePath = path.join(__dirname, '../dist');
const indexHtmlFilePath = path.join(__dirname, '../dist/index.html');

const app = express();

if (process.env.FORCE_HTTPS) {
  app.use(forceHttps);
}

app.use(compression());

app.use(cors());

app.use(logRequest);

routes(app);

app.use(serveStatic(staticFilePath));

app.use(notFound);

app.use((req, res) => {
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    Pragma: 'no-cache',
    Expires: '0'
  });
  res.sendFile(indexHtmlFilePath);
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Http Server listening on port ${port}`);
});
