# Changelog

## 2021-06-23

> TODO: apply Next.js v11 changes to code

- Bumps `next@^11.0.1-canary.8`
- Bumps `devDependencies`:
  - `@next/bundle-analyzer@^11.0.1-canary.8`
  - `@next/mdx@^11.0.1-canary.8`
  - `@types/node@^15.12.4`
  - `@types/react@^17.0.11`
  - `@types/react-dom@^17.0.8`
  - `prettier@^2.3.1`
  - `pretty-quick@^3.1.1`
  - `typescript@^4.3.4`
  - `webpack@^5.40.0`
- Bumps `volta.node@16.4.0`

## 2021-05-31

- Bumps `dependencies` and `devDependencies`

## 2021-05-24

- Bumps `dependencies` and `devDependencies`

## 2021-05-16

- Bumps `dependencies` and `devDependencies`

## 2021-04-27

- Removes `NextConfig.experimental.reactMode` as deprecated
- Adds `NextConfig.experimental.reactRoot` in preparation for React v18 (matching Preact API?)
- Removes `NextConfig.experimental.optimizeFonts` (it is now a default)
- Removes `NextConfig.experimental.plugins` as deprecated
- Bumps `dependencies` and `devDependencies`:
  - `next` packages to `10.1.4-canary.17`
  - `next-plugin-preact@3.0.4`
  - `preact@10.5.13`
  - `preact-render-to-string@5.1.19`
  - `@types` packages to `latest`
  - `critters@0.0.10`
  - `husky@6.0.0`
  - `next-offline@5.0.5`
  - `typescript@4.3.0-beta`
  - `webpack@5.36.0`
- Bumps `volta.node@16.0.0`
- Removes `resolutions` (no longer needed)
- Bumps `engines.node@>=14.x`

## 2021-03-11

- Re-enables `NextConfig.experimental.optimizeCss` with `critters@^0.0.8`
- Adds but keeps disabled `NextConfig.future.webpack5`
- Enables `NextConfig.experimental.stats`
- Hoists hook invocations in `AppLayout`
- Removes `webpack` from `resolutions` in `package.json`
- Bumps `dependencies` and `devDependencies`

## 2021-01-01

- Adds `next-plugin-preact` to `dependencies`
- Changes `react` `npm` aliases
- Removes custom `webpack` config from `next.config.js`
- Adds `critters` to `devDependencies`
- Removes `@prefresh/next`
- Disables `experimental.optimizeCss` (see https://vercel.com/4cm4k1/personal-website/px3rlc9t7)
- Fixes/updates strict CSP implementation with `nonce` and `strict-dynamic`
- Adds `Report-To` HTTP header
- Renames `Feature-Policy` to `Permissions-Policy`

## 2020-12-31

- Updates `code_of_conduct.md` to Contributor Covenant Code of Conduct v2.0
- Updates `license` to Hippocratic v2.1
- Updates `.prettierrc.json`
- Updates `prettier` script in `package.json`
- Upgrades `dependencies`, `devDependencies`, and `resolutions`
- Adds `pre-commit` script to `package.json`
- Uses `pre-commit` script in `.husky/pre-commit`
- Edits `.ignore` files
- Adds `overrides` to `.prettierrc.json`

## Previously Master

- Refines route rewrites in `now.json`
- Adds `*.doubleclick.net` and `*.google.com` to CSP since Google Analytics sometimes requests a 1x1 image from there
- Adds additional headers to assets in `now.json`
- Removes `@now/static` from `builds` in `now.json`
- Updates `readme.md` and `contributing.md`
- Renames this project from `website` to `personal-website`
- Adds [FOSSA](https://github.com/fossas/fossa-cli) integration
- Upgrades `@material/react-layout-grid`, `@material/react-material-icon`, `@material/react-top-app-bar`, `@mdx-js/loader`, `@mdx-js/mdx`, `@rmwc/list`, `@types/copy-webpack-plugin`, `@types/next`, `@types/node`, `@types/optimize-css-assets-webpack-plugin`, `@types/prettier`, `@types/react`, `@types/react-dom`, `@types/sass`, `@types/webpack`, `@types/webpack-bundle-analyzer`, `clean-webpack-plugin`, `copy-webpack-plugin`, `css-loader`, `extract-css-chunks-webpack-plugin`, `husky`, `next`, `next-offline`, `next-server`, `prettier`, `pretty-quick`, `react`, `react-dom`, `sass`, `webpack`, and `webpack-bundle-analyzer` to latest versions
- Adds `@types` for `clean-webpack-plugin`, `copy-webpack-plugin`, `fibers`, `http-proxy`, `node`, `optimize-css-assets-webpack-plugin`, `prettier`, `sass`, `webpack`, and `webpack-bundle-analyzer`
- Adds `github.autoJobCancelation` in `now.json`
- Replaces app logos, including favicons and platform-specific assets, with a brand-new version
- Tweaks `background_color` in `manifest.json`
- Changes `title` in `next.config.js`
- Adds some `<link>` and `<meta>` tags to `_document.jsx`
- Removes `@types/material-components-web` and `@types/next-server`
- Enables Serverless Next.js! (see https://github.com/zeit/next.js/pull/5927, https://github.com/zeit/now-builders/pull/150, and https://github.com/zeit/now-examples/pull/214)
  - Moves `publicRuntimeConfig` (deprecated) constants to `lib/constants.js`
  - Adds `target: 'serverless'` to `next.config.js`
  - Changes headers and routing in `now.json`
  - Removes `--lambdas` in `now-build` in `package.json`
  - Preserves root-level access to `favicon.ico`, `keybase.txt`, `resume-anthony-maki.pdf`, `robots.txt`, and `sitemap.xml`, and sets `Access-Control-Allow-Origin: *` for only them to allow external linking
  - Sets all other static assets to again be behind `/static/`
- Removes unnecessary code now that serverless is live
- Serves Material Icons from `static/` instead of from Google
- Modifies copy in `index.mdx`
- Creates new page `colophon.mdx` and moves part of `index.mdx` to it
- Removes `prefetch` directives from site links
- Adds `<link rel='preload' />` for webfont
- Replaces `@zeit/next-bundle-analyzer` and `@zeit/next-mdx` with `@next/bundle-analyzer` and `@next/mdx` respectively
- Adds initial unstyled, sorta broken AMP support!

### Known Issues

- Upgrading `@material/react-drawer` beyond `0.6.2` causes an SSR error (https://github.com/material-components/material-components-web-react/issues/561)
- Upgrading `@material/react-material-icon` to `0.8.0` causes an SSR error (possible workaround: add `var HTMLElement = typeof HTMLElement === 'undefined' ? function () {} : HTMLElement;` just before https://github.com/material-components/material-components-web-react/blob/master/packages/ripple/index.tsx#L29)
- List is still using `@rmwc/list`, though changing to `@material/react-list` is in progress on `material-list-switch` branch

## 0.9.3

- Simplifies Content Security Policy (CSP) headers in `now.json` to use `default-src` directive with just `'self'`, `webpack:`, hostnames (e.g. `*.gstatic.com`), and `upgrade-insecure-requests` directive (**note:** for better security, change `'unsafe-inline'` to `'strict-dynamic'` as soon as https://github.com/zeit/next.js/pull/4943 lands)
- Upgrades dependencies to latest versions

## 0.9.2

- Reimplements [`next-offline`](https://github.com/hanford/next-offline), sans `static/**/*` assets, which will be cached at runtime (see [discussion](https://github.com/hanford/next-offline/issues/90))

## 0.9.1

- Updates [`readme.md`](readme.md) and other Markdown files
- Removes some `aliases` from [`now.json`](now.json), which have been moved to [`redirects`](https://github.com/4cm4k1/redirects)
- Adjusts `prettier` configuration

## 0.9.0

- Initial release
