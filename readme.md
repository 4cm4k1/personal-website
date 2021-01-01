# personal-website

[![Status](https://img.shields.io/website-up-down-green-red/https/anthony.app.svg?label=status&style=flat-square)](https://anthony.app) [![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/) [![Dependabot](https://img.shields.io/badge/dependabot-enabled-1f8ceb.svg?style=flat-square)](https://dependabot.com/) [![Latest Release](https://img.shields.io/github/release/4cm4k1/personal-website/all.svg?style=flat-square)](https://github.com/4cm4k1/personal-website/releases) [![License](https://img.shields.io/github/license/4cm4k1/personal-website.svg?style=flat-square)](license) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2F4cm4k1%2Fpersonal-website.svg?type=small)](https://app.fossa.io/projects/git%2Bgithub.com%2F4cm4k1%2Fpersonal-website?ref=badge_small)

This repo contains the source code for my personal website located at <https://anthony.app>, using many awesome technologies such as, but not limited to:

- [Dependabot](https://dependabot.com/)
- [EditorConfig](https://github.com/editorconfig/editorconfig)
- [FOSSA](https://github.com/fossas/fossa-cli)
- [husky](https://github.com/typicode/husky)
- [MDX](https://github.com/mdx-js/mdx)
- [modern-normalize](https://github.com/sindresorhus/modern-normalize)
- [Next.js](https://github.com/vercel/next.js)
- [next-offline](https://github.com/hanford/next-offline)
- [Prettier](https://github.com/prettier/prettier)
- [Preact](https://github.com/preactjs/preact)
- [RMWC](https://github.com/jamesmfriedman/rmwc)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [Vercel](https://github.com/vercel/vercel)

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
- [Node](https://github.com/nodejs/node)
- [npm](https://github.com/npm/cli)
- [Vercel](https://github.com/vercel/vercel) _(optional deployment location)_
- [Volta](https://github.com/volta-cli/volta)

## Installation

```shell
# clone this repo
git clone https://github.com/4cm4k1/personal-website

# change directories
cd personal-website

# install dependencies
npm i
```

## Usage

```shell
# run in dev mode
 npm run dev

# if using Vercel, Vercel's dev mode simulates their servers
volta run vc dev

# build in prod mode
 npm run build

# serve built assets in prod mode
 npm run start

# run `prettier` linter
 npm run prettier

# run webpack analyzer
 npm run analyze

# run in dev mode with profiling on
 npm run profile

# type-check TypeScript files
npm run runtype-check

# deploy to Vercel
volta run vc --prod

# …or just push to configured branch on GitHub for auto-deploy
```

## [Code of Conduct](.github/code_of_conduct.md)

## [Contributing](.github/contributing.md)

## Contributors

| Name             | Website               |
| ---------------- | --------------------- |
| **Anthony Maki** | <https://anthony.app> |

## [Changelog](changelog.md)

## [License](license)

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2F4cm4k1%2Fpersonal-website.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2F4cm4k1%2Fpersonal-website?ref=badge_large)
