# Changelog

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

## Contributors

| Name             | Website                 |
| ---------------- | ----------------------- |
| **Anthony Maki** | <https://anthony.codes> |
