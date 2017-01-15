# keats-clay
My new website, built in Clay!

# Installing Clay

1. `npm init` in a new github repo (make sure it’s private)
2. `npm install -S amphora` (and kiln, most likely)
3. create `sites` and `components` folders
4. add a site w/ `config.yml`, `index.js`, `bootstrap.yml`
5. add `local.yml` to gitignore, then add `local.yml` file w/ host and path
7. add `app.js` with call to `amphora` (useful to also install health-check, express, etc)
8. add asset directory (e.g. `public/`)
9. run the server!

# Adding components, etc

* after a site is running correctly, start installing and creating components
* you’ll probably want to put a bunch of data in your bootstrap files as you’re doing this, as those will be refreshed on every server restart
