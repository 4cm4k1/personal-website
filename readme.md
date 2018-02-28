# Website [![Build Status](https://img.shields.io/travis/4cm4k1/website/master.svg?style=flat-square)](https://travis-ci.org/4cm4k1/website) [![Greenkeeper](https://img.shields.io/badge/greenkeeper-enabled-brightgreen.svg?style=flat-square)](https://greenkeeper.io/) [![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![GitHub Release](https://img.shields.io/github/release/4cm4k1/website.svg?style=flat-square)](https://github.com/4cm4k1/website/releases) [![Website](https://img.shields.io/website-up-down-green-red/https/anthony.codes.svg?label=website&style=flat-square)](https://anthony.codes) [![License](https://img.shields.io/github/license/4cm4k1/website.svg?style=flat-square)](license)

Source code for [**@4cm4k1**](https://github.com/4cm4k1)'s personal website located at <https://anthony.codes>.

## Table of Contents

* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Contributors](#contributors)
* [Changelog](#changelog)
* [License](#license)

## Prerequisites

* [Homebrew](https://github.com/Homebrew/install) (this guide assumes using macOS): `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
* Code editor, ranked by level of integration with Dart SDK:
  * [WebStorm](https://www.jetbrains.com/webstorm/): `brew cask install webstorm`
  * [VS Code](https://github.com/Microsoft/vscode) (what I am currently using): `brew cask install visual-code-studio`
  * [Atom](https://github.com/atom/atom): `brew cask install atom`
* [Dart v2](https://github.com/dart-lang/sdk): `brew tap dart-lang/dart && brew install dart --devel`
* [Firebase CLI](https://github.com/firebase/firebase-tools) (optional): `brew install firebase-cli`
* [Node](https://github.com/nodejs/node): `brew install node`
* [Now CLI](https://github.com/zeit/now-cli): `brew cask install now`
* [Yarn](https://github.com/yarnpkg/yarn): `brew install yarn`

## Installation

1.  Clone this repo and `cd` in.

    ```shell
    # For HTTPS
    git clone https://github.com/4cm4k1/website.git && cd website
    # For SSH
    git clone git@github.com:4cm4k1/website.git && cd website
    ```

2.  Install dependencies!

    ```shell
    yarn install && yarn run pub-get
    ```

## Usage

* Develop with live rebuilds:

  ```shell
  yarn run watch
  ```

* Build for production:

  ```shell
  yarn run build
  ```

* Serve production build assets:

  ```shell
  yarn run start
  ```

## Contributing

Please note that this project is released with a [Contributor Code of Conduct](code-of-conduct.md). By participating in this project you agree to abide by its terms.

## Contributors

| Name             | Website                 |
| ---------------- | ----------------------- |
| **Anthony Maki** | <https://anthony.codes> |

## [Changelog](changelog.md)

## License

[MIT](license) © [Anthony Maki](https://anthony.codes)
