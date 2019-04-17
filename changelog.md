# Changelog

## Master

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
