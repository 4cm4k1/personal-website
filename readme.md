# personal-website

[![Status](https://img.shields.io/website-up-down-green-red/https/anthony.codes.svg?label=status&style=flat-square)](https://anthony.codes) [![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/) [![Renovate](https://img.shields.io/badge/renovate-enabled-1f8ceb.svg?style=flat-square)](https://renovatebot.com/) [![Latest Release](https://img.shields.io/github/release/4cm4k1/personal-website/all.svg?style=flat-square)](https://github.com/4cm4k1/personal-website/releases) [![License](https://img.shields.io/github/license/4cm4k1/personal-website.svg?style=flat-square)](license) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2F4cm4k1%2Fpersonal-website.svg?type=small)](https://app.fossa.io/projects/git%2Bgithub.com%2F4cm4k1%2Fpersonal-website?ref=badge_small)

This repo contains the source code for my personal website located at <https://anthony.codes>, using many awesome technologies such as, but not limited to: [Babel](https://github.com/babel/babel), [EditorConfig](https://github.com/editorconfig/editorconfig), [fibers](https://github.com/laverdet/node-fibers), [FOSSA](https://github.com/fossas/fossa-cli), [http-proxy](https://github.com/nodejitsu/node-http-proxy), [husky](https://github.com/typicode/husky), [Material Components](https://github.com/material-components/material-components-web) ([React](https://github.com/material-components/material-components-web-react)), [MDX](https://github.com/mdx-js/mdx), [modern-normalize](https://github.com/sindresorhus/modern-normalize), [Next.js](https://github.com/zeit/next.js), [Prettier](https://github.com/prettier/prettier), [React](https://github.com/facebook/react), [Renovate](https://github.com/renovatebot/renovate), [Sass](https://github.com/sass/dart-sass), and [webpack](https://github.com/webpack/webpack).

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Code of Conduct](#code-of-conduct)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [Changelog](#changelog)
- [License](#license)

## Prerequisites

- [Git](https://github.com/git/git)
- [mkcert](https://github.com/FiloSottile/mkcert) _(optional, if you want HTTPS with dev mode)_
- [Node](https://github.com/nodejs/node)
- [Now](https://github.com/zeit/now-cli) _(optional, if you want to deploy)_
- [Yarn](https://github.com/yarnpkg/yarn)

## Installation

```shell
git clone https://github.com/4cm4k1/personal-website # clones this repo
cd personal-website # changes directories
yarn # installs dependencies
```

## Usage

```shell
yarn dev # serves in dev mode at http://localhost:3000

yarn gen-dev-certs # generates valid SSL certificates for dev mode (requires `mkcert`)
yarn dev:proxy # serves in dev mode at https://localhost

yarn build # builds in production mode
yarn start # serves in production mode (requires `yarn build` be run first)

yarn prettier # runs `prettier` on source files

yarn analyze:{both|browser|server} # builds in production mode and analyzes bundle sizes

now # deploys to Now (requires Now)
now alias # points `aliases` in `now.json` to deployment (requires Now)
```

## [Code of Conduct](.github/code_of_conduct.md)

## [Contributing](.github/contributing.md)

## Contributors

| Name             | Website                 |
| ---------------- | ----------------------- |
| **Anthony Maki** | <https://anthony.codes> |

## [Changelog](changelog.md)

## [License](license)

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2F4cm4k1%2Fpersonal-website.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2F4cm4k1%2Fpersonal-website?ref=badge_large)
