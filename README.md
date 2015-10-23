GitHub Organization App
===================

## Setup

To get started:

    $ npm install
    $ bower install
    $ node_modules/protractor/bin/webdriver-manager update

This will get you the necessary node and bower packages to do everything
within this project.

## Local Development

Run `npm start` to bundle the app with webpack and start the webpack-dev-server at `http://localhost:8080`.

## Tests

Run `npm test` to run all unit tests.

[Dev App](http://development.github-org-app.divshot.io)

## To Do
- [x] Update E2E tests to accommodate webpack changes
- [ ] Add code-splitting by route to ensure minimum asset downloads throughout the app
- [ ] Use `webpack.ensure` to load code-split files as necessary
- [x] Create dynamic webpack configs based on `NODE_ENV` (i.e. uglify JS for production)
- [x] Update webpack build with postCSS or some other way of vendor prefixing the CSS
- [x] Add ngAnnotate loader uglified production code
