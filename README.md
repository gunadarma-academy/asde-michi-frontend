Arlin Front-end Development by Michi
=========================

![Codeship](https://codeship.com/projects/bbcc6840-e8de-0133-344f-226489e381a7/status?branch=master)

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

### Required Installation

+ Install Node.js from your preferred way, or from http://nodejs.org
  + It's also recommended to [use Node Version Manager (nvm)](https://github.com/creationix/nvm)
+ Install required npm packages/modules with `npm install` within this repo

### Running

+ Install gulp and live-server globally (`npm install -g gulp live-server`)
+ Build the defaults assets first (`npm run-script build`)
+ Open `index.html` or any available HTML files via browser through shown host:port.

### Development

+ Fork the repository
+ Create your feature branch (`git checkout -b feature-name`)
+ When needed, clean up the `dist` (`npm run-script clean`)
+ Make your changes
+ Watch the changed assets (`npm run-script watch`)
+ Use `live-server` to live reload the page and assets.
+ Access `localhost:8080` or shown host:port in the prompt to view
+ Commit your changes (`git commit -a`)
+ Push to the branch (`git push origin feature-name`)
+ Create new Pull Request

### Usage, Testing, and Deployment

Start the app with `npm start` or use `npm run <script>` for below:

```
start: Start the app with Webpack
build: Build the bundled app
test: Test the app using <test-runner>
deploy:development:setup: Setup the development
deploy:development: Deploy to development
deploy:staging:setup: Setup the staging
deploy:staging: Deploy to staging
deploy:production:setup: Setup the production
deploy:production: Deploy to production
```

*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *

References
----------

+ http://vuejs.org

*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *

License
-------

Arlin App by Michi is Copyright (c) 2016 Michi Team and licenced under the MIT licence. All rights not explicitly granted in the MIT license are reserved. See the parent [LICENSE.markdown](https://github.com/gunadarma-academy/asde-michi/blob/master/LICENSE.markdown) file for more details.
