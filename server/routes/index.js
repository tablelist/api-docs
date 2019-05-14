const Promise = require('bluebird');
const request = require('superagent');

const config = require('../../config');
const jsonFile = require('../middleware/jsonFile');

const STRIPE_ACCESS_TOKEN_ENDPOINT = 'https://connect.stripe.com/oauth/token';

function getStripeAccessToken(params) {
  if (!params) throw new Error('params');

  return Promise.fromCallback((callback) => {
    request
      .post(STRIPE_ACCESS_TOKEN_ENDPOINT)
      .set('Content-Type', 'application/json')
      .send(params)
      .end(callback);
  });
}

function routes(app) {
  app.get('/favicon', favicon);
  app.get('/favicon.ico', favicon);

  app.get('/timezones', jsonFile('../data/timezones.json'));
  app.get('/countries', jsonFile('../data/countries.json'));
  app.get('/languages', jsonFile('../data/languages.json'));
  app.get('/currencies', jsonFile('../data/currencies.json'));

  app.get('/oauthcallback/stripe', (req, res) => {
    const code = req.query.code;
    const error = req.query.error;
    const errorDescription = req.query.error_description;

    if (!code) return res.redirect('/stripe-connect?error="code is required"');
    if (error) return res.redirect(`/stripe-connect?error=${error}&error_description=${errorDescription}`);

    const params = {
      client_secret: convertConfigStr(config.dev.env.STRIPE_SECRET_KEY),
      code,
      grant_type: 'authorization_code'
    };

    return getStripeAccessToken(params)
      .then(response => {
        if (response.status !== 200 || response.body.error) throw new Error(response.body.error || 'Error authenticating with Stripe');

        res.redirect(`/stripe-connect?stripe_user_id=${response.body.stripe_user_id}`);
      })
      .catch((err) => {
        console.log('ERROR', err);
        res.redirect(`/stripe-connect?error="${err.message}"`);
      });
  });
}

function favicon(req, res) {
  res.status(200).send(null);
}

function convertConfigStr(str) {
  if (!str) return null;
  return str.substring(1, str.length - 1);
}

module.exports = routes;
