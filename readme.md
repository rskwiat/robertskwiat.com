# Personal Website 2016.2 Edition

Refactoring, code + cleanup with adding in and removing features such as eslint.

## Isomorphic React + Express

## Development / Production

### Dev scripts

    npm run copy

This will copy the index.ejs file to the public folder and rename the file index.html for local development purposes. `public/index.html` is not tracked in git.

    npm run dev

This will run `npm run copy` and start up the `webpack-dev-server` with  reloading for development purposes.

    npm run compile:js

This will compile and *minify* the react scripts into the bundle.js file which will be read via the server / frontend.

    npm run compile:sass:dev

This script will watch and compile the SCSS file, found in public/scss folder for development only. The compiled CSS will be unminified with comments.

    npm run compile:sass:production

This script will just compile and minify the SCSS file, found in public/scss folder.

    npm run preproduction

Will run both the `compile:js` scripts and the `compile:sass:production` scripts for testing before running the production server.

    npm run production

Will start the node server on `http://localhost:3000`. By viewing source you will be able to see the outputed content from react. The script `preproduction` will run before this process starts.

*To do:* create a script for running forever on actual production environment.

## Structure

All reusable components are found in the `app` folder and seperated out. All data is handled by redux and is stored in page specific reducer files.

### Data Storage - Redux

All data handled currently is static. No need for actions but using the Redux pattern to handle and serve all the data.

## Routing

React Router handles the client side rendering. All data is passed to


## Todos

Add Redux back in - fix server side rendering
