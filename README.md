# Website

[![Greenkeeper badge](https://badges.greenkeeper.io/4cm4k1/website.svg)](https://greenkeeper.io/)

Source code for [**@4cm4k1**](https://github.com/4cm4k1)'s personal website located at <https://anthony.codes>.


## Table of Contents

* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Contributors](#contributors)
* [License](#license)


## Prerequisites

* [Dart v2](https://github.com/dart-lang/sdk): `brew tap dart-lang/dart && brew install dart --devel`
* [Node](https://github.com/nodejs/node): `brew install node`
* [Yarn](https://github.com/yarnpkg/yarn): `brew install yarn`
* [Firebase CLI](https://github.com/firebase/firebase-tools): `brew install firebase-cli`


## Installation

1. Clone this repo and `cd` in.

   ```shell
   # For HTTPS
   git clone https://github.com/4cm4k1/website.git && cd website
   # For SSH
   git clone git@github.com:4cm4k1/website.git && cd website
   ```

2. Install dependencies!

   ```shell
   yarn install && pub get
   ```


## Usage

* Develop with live rebuilds:

  ```shell
  pub serve
  ```

* Build for production:

  ```shell
  pub build
  ```


## Contributing

Please note that this project is released with a [Contributor Code of Conduct](code-of-conduct.md). By participating in this project you agree to abide by its terms.


## Contributors

| Name             | Website                 |
| ---------------- | ----------------------- |
| **Anthony Maki** | <https://anthony.codes> |


## License

[MIT](LICENSE) © [Anthony Maki](https://anthony.codes)
