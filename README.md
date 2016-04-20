Arlin Frontend
==============

[![Snap CI Build Status](https://snap-ci.com/gunadarma-academy/asde-michi-frontend/branch/master/build_image)](https://snap-ci.com/gunadarma-academy/asde-michi-frontend/branch/master)

Introduction
------------

> Frontend app layer for Arlin.

Getting Started
---------------

### Requirements

+ Terminal and shell (bash or zsh)
+ Git v2.0
+ Code editor
+ Modern web browser (Google Chrome or Firefox)
+ Node.js

### Installation

+ Install Node.js from your preferred way, or from http://nodejs.org
  + It's also recommended to [use Node Version Manager (nvm)](https://github.com/creationix/nvm)
+ Install required npm packages/modules with `npm install` within this repo
+ Install and update required CLI globally to make sure:
  + `npm install -g pm2 jshint mocha webpack webpack-dev-server`)

### Usage, Testing, and Deployment

Start the app with `npm start` or use `npm run <script>` for below:

```
start: Start pm2 ecosystem with ES6 and watcher
start:backend: Start backend app
stop: Stop pm2 ecosystem
test: Run jshint and mocha
build: Build the bundled app with Webpack
serve: Serve the public index with live-server
dev: Watch the bundled app with Webpack
deploy:development:setup: Setup the development
deploy:development: Deploy to development
deploy:staging:setup: Setup the staging
deploy:staging: Deploy to staging
deploy:production:setup: Setup the production
deploy:production: Deploy to production
```

Open the app via browser through shown `{host}:{port}`.

Access `http://{host}:{port}/{route}` or that already shown in the prompt to view. Read the complete [routes available here](https://github.com/gunadarma-academy/asde-michi/blob/master/docs/ROUTES.markdown).

_NOTES:_

Notice that for deployment, you should have a proper access to the server. It's recommended to use SSH key that is already added/registered there. You might want to use `ssh-copy-id username@xx.xx.xx.xx` first. SSH into that username, then edit its username's `.bashrc` to comment out:
```
# If not running interactively, don't do anything
case $- in
    *i*) ;;
      *) return;;
esac
```
to resolve non-interactive SSH connection from pm2.

In the middle of the development, it's possible to use Continuous Integration (CI) or even Continuous Delivery (CD) to automate the build and deployment. Currently mainly using [Snap CI here](https://snap-ci.com/gunadarma-academy/asde-michi-frontend).

*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *

References
----------

+ http://vuejs.org
+ http://auth0.com/blog/2015/11/13/build-an-app-with-vuejs

*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *

License
-------

Arlin App by Michi is Copyright (c) 2016 Michi Team and licenced under the MIT licence. All rights not explicitly granted in the MIT license are reserved. See the parent [LICENSE.markdown](https://github.com/gunadarma-academy/asde-michi/blob/master/LICENSE.markdown) file for more details.
