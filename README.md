# keats-clay
My new website, built in Clay!

# Installing Clay

1. add `local.yml` to gitignore
2. add `sites/<sitename>local.yml` w/ host and path
3. add asset directory (e.g. `public/`)
4. run initial script + style + asset compilation
5. `npm start` to start the server!

# Set Up Env Variables

* `CLAY_ACCESS_KEY` - apikey used for direct api calls to the server
* `TWITTER_CONSUMER_KEY` & `TWITTER_CONSUMER_SECRET` - oauth keys for twitter
* `CLAY_LOG_PRETTY` - `true` to enable readable logs

# Adding components, etc

* after a site is running correctly, start installing and creating components
* you’ll probably want to put a bunch of data in your bootstrap files as you’re doing this, as the default in-memory database will be refreshed on every server restart
* you'll need to add the first oauth user via an api call to begin editing components in kiln
