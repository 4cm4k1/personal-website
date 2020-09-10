const NextBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  }),
  NextComposePlugins = require('next-compose-plugins'),
  NextConfig = {
    /**
     * https://github.com/vercel/next.js/blob/canary/packages/next/next-server/server/config.ts#L12-L64
     */
    env: [],
    experimental: {
      modern: false, // `next-esm-plugin` currently does not support this with `webpack@5`
      optimizeFonts: false, // see https://github.com/vercel/next.js/issues/16566
      optimizeImages: true,
      pageEnv: true,
      plugins: true,
      productionBrowserSourceMaps: true,
      profiling: process.env.PROFILE === 'true',
      scrollRestoration: true,
      workerThreads: true,
    },
    async redirects() {
      return [
        {
          source: '/logs{/}?',
          statusCode: 301,
          destination: '/_logs',
        },
        {
          source: '/source{/}?',
          statusCode: 301,
          destination: '/_src',
        },
      ];
    },
    async rewrites() {
      return [
        {
          source: '/feed.atom',
          destination: '/_next/static/feed.atom',
        },
        {
          source: '/feed.json',
          destination: '/_next/static/feed.json',
        },
        {
          source: '/feed.xml',
          destination: '/_next/static/feed.xml',
        },
        {
          source: '/keybase.txt',
          destination: '/.well-known/keybase.txt',
        },
        {
          source: '/sw.js',
          destination: '/_next/static/sw.js',
        },
        {
          source: '/sw.js.map',
          destination: '/_next/static/sw.js.map',
        },
      ];
    },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: 'https://anthony.app',
            },
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
            {
              key: 'Expect-CT',
              value: 'enforce, max-age=0, report-uri=/report-ct-violation',
            },
            {
              key: 'Feature-Policy',
              value: `accelerometer 'none'; autoplay 'none'; camera 'none'; document-domain 'none'; encrypted-media 'none'; fullscreen 'self'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; midi 'none'; payment 'none'; picture-in-picture 'none'; publickey-credentials-get 'none'; sync-xhr 'self'; usb 'none'; xr-spatial-tracking 'none'`,
            },
            {
              key: 'Referrer-Policy',
              value: 'strict-origin-when-cross-origin',
            },
            {
              key: 'Strict-Transport-Security',
              value: 'max-age=63072000; includeSubDomains; preload',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'X-DNS-Prefetch-Control',
              value: 'on',
            },
            {
              key: 'X-Download-Options',
              value: 'noopen',
            },
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-Permitted-Cross-Domain-Policies',
              value: 'none',
            },
            {
              key: 'X-UA-Compatible',
              value: 'IE=edge; chrome=1',
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block; report=/report-xss-violation',
            },
          ],
        },
        {
          source: '/sw.js',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=43200, immutable',
            },
            {
              key: 'Service-Worker-Allowed',
              value: '/',
            },
          ],
        },
        {
          source: '/sw.js.map',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=43200, immutable',
            },
          ],
        },
      ];
    },
    future: {
      excludeDefaultMomentLocales: true,
    },
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    publicRuntimeConfig: {},
    serverRuntimeConfig: {},
    reactStrictMode: true,
    target: 'serverless',
    webpack: (config, { dev, isServer }) => {
      // Copied from: https://github.com/vercel/next.js/blob/canary/examples/using-preact/next.config.js
      // Move `preact` into the framework chunk instead of duplicating in routes:
      const splitChunks =
        config.optimization && config.optimization.splitChunks;
      if (splitChunks) {
        const cacheGroups = splitChunks.cacheGroups;
        const test = /(?<!node_modules.*)[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/;
        if (cacheGroups.framework) {
          cacheGroups.preact = Object.assign({}, cacheGroups.framework, {
            test,
          });
          // If you want to merge the 2 small commons+framework chunks:
          // cacheGroups.commons.name = 'framework';
        }
      }

      if (isServer) {
        // Mark `preact` stuff as external for server bundle to prevent duplicate copies of `preact`:
        config.externals.push(
          /^(preact|preact-render-to-string|preact-context-provider)([\\/]|$)/,
        );
      }

      // Install `webpack` aliases:
      const aliases = config.resolve.alias || (config.resolve.alias = {});
      aliases.react = aliases['react-dom'] = 'preact/compat';

      // Automatically inject `preact/debug` in dev environment:
      if (dev && !isServer) {
        const entry = config.entry;
        config.entry = () =>
          entry().then(entries => {
            entries['main.js'] = ['preact/debug'].concat(
              entries['main.js'] || [],
            );
            return entries;
          });
      }

      return config;
    },
  },
  NextMDX = require('@next/mdx')(),
  NextOffline = require('next-offline'),
  NextPrefresh = require('@prefresh/next');

module.exports = NextComposePlugins(
  [
    [NextBundleAnalyzer],
    [NextMDX],
    [
      NextOffline,
      {
        // `next-offline`-specific config
        dontAutoRegisterSw: true,
        transformManifest: manifest => ['/'].concat(manifest),
        workboxOpts: {
          swDest: 'static/sw.js',
        },
      },
    ],
    [NextPrefresh],
  ],
  NextConfig,
);
