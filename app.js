'use strict';
const amphora = require('amphora'),
  express = require('express'),
  session = require('express-session'),
  logger = require('clay-log'),
  amphoraHtml = require('amphora-html'),
  compression = require('compression'),
  path = require('path'),
  healthCheck = require('@nymdev/health-check'),
  port = process.env.PORT || 3001,
  ip = process.env.IP_ADDRESS || '127.0.0.1',
  log = logger.init({ name: 'keats' });

let app = express();

// enable gzip
app.use(compression());
// configure amphora-html
amphoraHtml.configureRender({
  editAssetTags: {
    styles: true,
    scripts: true
  }
});
amphoraHtml.addRootPath(path.dirname(path.resolve('./package.json')));

// instantiate amphora
return amphora({
  app: app,
  renderers: {
    html: amphoraHtml,
    default: 'html'
  },
  providers: ['apikey', 'twitter']
}).then(function (router) {
  amphora.schedule.startListening();
  router.use(healthCheck());
  router.listen(port, ip);
  log('info', 'Clay listening on ' + ip + ':' + port + ' (process ' + process.pid + ')');
}).error(function (e) {
  log('error', e);
});
