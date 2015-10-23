GitHub Organization App
===================

## Setup

To get started:

    $ npm install
    $ bower install
    $ node_modules/protractor/bin/webdriver-manager update

## Local Development

Run `npm start` to build the app and start the local server at `http://localhost:8080/webpack-dev-server/`.

## Tests

Run `npm test` to run all unit tests.
Run `npm run test:watch` to run all unit tests and re-run on changes.
Run `npm run test:e2e` to run all integration tests.

## Build For Deployment

Run `npm run build` to build the application into the `dist` directory for
distribution.

## To Do
- [x] Update E2E tests to accommodate webpack changes
- [ ] Add code-splitting by route to ensure minimum asset downloads throughout the app
- [ ] Use `webpack.ensure` to load code-split files as necessary
- [x] Create dynamic webpack configs based on `NODE_ENV` (i.e. uglify JS for production)
- [x] Update webpack build with postCSS or some other way of vendor prefixing the CSS
- [x] Add ngAnnotate loader uglified production code
