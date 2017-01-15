'use strict';
const amphora = require('amphora'),
  express = require('express'),
  hbs = require('nymag-handlebars'),
  healthCheck = require('@nymdev/health-check'),
  chalk = require('chalk');

let app = express(),
  port = process.env.PORT || 3001,
  ip = process.env.IP_ADDRESS || '127.0.0.1';

// set app stuff

amphora({
  app: app,
  engines: { handlebars: hbs },
  providers: ['apikey', 'twitter']
  // no session store, using memory for now
}).then(function (router) {
  router.use(healthCheck())

  router.listen(port, ip);
  console.log(`${chalk.green('[SUCCESS]')} Clay listening on port ${port}`);
});
