# anthony-codes [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo) [![GitHub release](https://img.shields.io/github/release/4cm4k1/anthony.codes.svg)](https://github.com/4cm4k1/anthony.codes/releases) [![Build Status](https://travis-ci.org/4cm4k1/anthony-codes.svg?branch=master)](https://travis-ci.org/4cm4k1/anthony-codes) [![license](https://img.shields.io/github/license/4cm4k1/anthony.codes.svg)](https://github.com/4cm4k1/anthony.codes/blob/master/LICENSE) [![Twitter Follow](https://img.shields.io/twitter/follow/4cm4k1.svg?style=social&label=Follow)](https://twitter.com/4cm4k1) [![GitHub followers](https://img.shields.io/github/followers/4cm4k1.svg?style=social&label=Follow)](https://github.com/4cm4k1)

> Website located at <https://anthony.codes>

This is the code for my personal website located at [anthony.codes](https://anthony.codes).

If you happen to like it or find anything interesting, feel free to bring the code down onto your system.

Anything amiss? Shoot me a PR! 👊

It uses [AngularJS 2](https://github.com/angular), [Angular Material 2](https://github.com/material2), [AngularFire 2](https://github.com/firebase/angularfire2), and [Firebase](https://github.com/firebase). It's live, deployed via Firebase Hosting and the Firebase CLI.

## Install

### Clone with HTTPS

```shell
git clone https://github.com/4cm4k1/anthony-codes.git
npm install || yarn install
```

### Clone with SSH

```shell
git clone git@github.com:4cm4k1/anthony-codes.git
npm install || yarn install
```

## Usage

### Deploy with Firebase Hosting

Assuming you have `firebase-tools` installed, you can deploy by (1) initializing -- this will create the `.firebaserc` file; you will need to change the `package.json`'s `name` property to something other than `anthony-codes` -- and then (2) deploying. This will create the `database.rules.json` and `firebase.json` files as well as deploy your website live to `<your-package-name>.firebaseapp.com`. _See Firebase's docs for more information on configuring the created files._

```shell
firebase init
firebase deploy
```

### Develop Locally

#### npm

```shell
npm start -> ng serve
```

#### Yarn

```shell
yarn run start -> ng serve
```

## [License](https://github.com/4cm4k1/anthony.codes/blob/master/LICENSE)
