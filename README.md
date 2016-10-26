# anthony.codes [![JavaScript Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) [![GitHub release](https://img.shields.io/github/release/4cm4k1/anthony.codes.svg)](https://github.com/4cm4k1/anthony.codes/releases) [![license](https://img.shields.io/github/license/4cm4k1/anthony.codes.svg)](https://github.com/4cm4k1/anthony.codes/blob/master/LICENSE) [![Twitter Follow](https://img.shields.io/twitter/follow/4cm4k1.svg?style=social&label=Follow)](https://twitter.com/4cm4k1) [![GitHub followers](https://img.shields.io/github/followers/4cm4k1.svg?style=social&label=Follow)](https://github.com/4cm4k1)

> Website located at <https://anthony.codes>

This is the code for my personal website located at [anthony.codes](https://anthony.codes).

If you happen to like it or find anything interesting, feel free to bring the code down onto your system.

Anything amiss? Shoot me a PR! 👊

It runs on [AngularJS](https://github.com/angular) and [Firebase](https://github.com/firebase), deployed via Firebase Hosting and the Firebase CLI. Optionally, you can develop locally with a simple [Node.js](https://github.com/nodejs/node)/[Express.js](https://github.com/expressjs/express) server at `localhost:3000`.

## Install

### Clone with HTTPS

```shell
git clone https://github.com/4cm4k1/anthony.codes.git
npm install || yarn install
```

### Clone with SSH

```shell
git clone git@github.com:4cm4k1/anthony.codes.git
npm install || yarn install
```

## Usage

### Deploy with Firebase Hosting

Assuming you have `firebase-tools` installed, you can deploy by (1) initializing -- this will create the `.firebaserc` file; you will need to change the `package.json`'s `name` property to something other than `anthony.codes` -- and then (2) deploying. This will create the `database.rules.json` and `firebase.json` files as well as deploy your website live to `<your-package-name>.firebaseapp.com`. _See Firebase's docs for more information on configuring the created files._

```shell
firebase init
firebase deploy
```

### Develop Locally

I usually run with `grunt` and `nodemon` as I code in [Atom](https://github.com/atom/atom), but here's a few options...

#### npm

```shell
npm start
```

#### yarn

```shell
yarn run start
```

#### Grunt & Nodemon

If you install the `devDependencies` from the `package.json`, you'll also have the following CLI tools at your disposal:

- `grunt`: Runs the default Grunt tasks (`standard`, `cssmin`, `uglify`, `watch`, and repeat!)
- `grunt copy`: Copies client-side libraries from `node_modules` to `public/assets/vendors/`
- `grunt cssmin`: Combines and minifies CSS files in `client/styles/`, writing to `public/assets/styles/style.min.css`
- `grunt uglify`: Combines and minifies JS files in `client/scripts/`, writing to `public/assets/scripts/client.min.js` (currently, mangling is set to `false`)
- `grunt standard`: Lints JS files according to the [JavaScript Standard Style](https://github.com/feross/standard) (currently, auto-formatting is set to `false`)
- `grunt watch`: Watches files in `client/` and cycles through `standard`, `cssmin`, and `uglify` each time a change is detected
- `nodemon`: Runs `node server.js` to start a local server and restarts the server each time a change is detected

## [License](https://github.com/4cm4k1/anthony.codes/blob/master/LICENSE)
