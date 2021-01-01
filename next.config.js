const NextBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  }),
  NextComposePlugins = require('next-compose-plugins'),
  NextConfig = {
    /**
     * https://github.com/vercel/next.js/blob/canary/packages/next/next-server/server/config.ts#L12-L64
     */
    amp: {
      // default
      canonicalBase: '',
    },
    env: [], // default
    experimental: {
      optimizeCss: false, // default
      optimizeFonts: true,
      optimizeImages: true,
      pageEnv: true,
      plugins: true,
      profiling: process.env.PROFILE === 'true',
      reactMode: 'legacy', // default
      scriptLoader: false, // default
      scrollRestoration: true,
      workerThreads: true,
    },
    future: {
      excludeDefaultMomentLocales: true,
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
    i18n: null, // default
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    productionBrowserSourceMaps: true,
    publicRuntimeConfig: {}, // default
    sassOptions: {}, // default
    serverRuntimeConfig: {}, // default
    reactStrictMode: true,
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
    target: 'serverless',
  },
  NextMDX = require('@next/mdx')(),
  NextOffline = require('next-offline'),
  NextPreact = require('next-plugin-preact');

module.exports = NextComposePlugins(
  [
    [NextBundleAnalyzer],
    [NextMDX],
    [
      NextOffline,
      {
        // `next-offline`-specific config
        dontAutoRegisterSw: true,
        // transformManifest: manifest => ['/'].concat(manifest), // obsolete: fix with PR for https://github.com/hanford/next-offline/issues/209?
        workboxOpts: {
          swDest: 'static/sw.js',
        },
      },
    ],
    [NextPreact],
  ],
  NextConfig,
);
