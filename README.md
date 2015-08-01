GitHub Repository App
===================

## Setup

To get started:

    $ npm install
    $ bower install
    $ node_modules/protractor/bin/webdriver-manager update

This will get you the necessary node and bower packages to do everything
within this project. It's recommended that you install the grunt-cli globally
(`$ npm install -g grunt-cli`) so you can use `grunt` for the tasks.

## Local Development

Run `grunt serve` to build the app and start the local server at `http://localhost:9000`.

## Tests

Run `grunt test` to run all unit tests.
Run `grunt test:e2e` to run all integration tests.

## Build For Deployment

Run `grunt build` to build the application into the `dist` directory for
distribution.

[Dev App](http://development.github-org-app.divshot.io)