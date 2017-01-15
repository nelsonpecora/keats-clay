'use strict';
const amphora = require('amphora'),
  express = require('express'),
  hbs = require('nymag-handlebars')(),
  healthCheck = require('@nymdev/health-check'),
  chalk = require('chalk'),
  _ = require('lodash'),
  fs = require('fs'),
  njk = require('nunjucks-filters')();

let app = express(),
  port = process.env.PORT || 3001,
  ip = process.env.IP_ADDRESS || '127.0.0.1';

// set app stuff
_.each(amphora.components.list(), function (component) {
  const tpl = amphora.components.getTemplate(component, 'template');

  hbs.registerPartial(component, fs.readFileSync(tpl, 'utf8'));
});

// set up temporary helper to embed kiln in handlebars
hbs.registerHelper('embed', function (file, data) {
  console.log('embed ', file, data)
  return this.embed(file, _.cloneDeep(data)); // call "embed" added by multiplex templates
});

amphora({
  app: app,
  engines: { handlebars: hbs, nunjucks: njk },
  providers: ['apikey', 'twitter']
  // no session store, using memory for now
}).then(function (router) {
  router.use(healthCheck())

  router.listen(port, ip);
  console.log(`${chalk.green('[SUCCESS]')} Clay listening on port ${port}`);
});
