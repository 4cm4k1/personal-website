const NextBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  }),
  NextComposePlugins = require('next-compose-plugins'),
  NextConfig = {
    /**
     * NOTE: this config omits default values that are desired
     * e.g. experimental.granularChunks = true
     */
    env: [],
    experimental: {
      catchAllRouting: true, // does this exist & do I want it?
      deferScripts: true, // same question
      documentMiddleware: false, // same question
      modern: true,
      plugins: true,
      prefetchPreload: true, // same question
      profiling: process.env.PROFILE === 'true',
      reactMode: 'legacy', // same question
      workerThreads: true,
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
            source: '/service-worker.js',
            destination: '/_next/static/service-worker.js',
          },
          {
            source: '/service-worker.js.map',
            destination: '/_next/static/service-worker.js.map',
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
                value: 'https://anthony.codes',
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
                value: `accelerometer 'none'; autoplay 'none'; camera 'none'; fullscreen 'self'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; midi 'none'; payment 'none'; speaker 'self'; sync-xhr 'self'; usb 'none'; vr 'none'`,
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
            source: '/service-worker.js',
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
            source: '/service-worker.js.map',
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=43200, immutable',
              },
            ],
          },
        ];
      },
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
      // TODO: contribute this to `next-plugin-preact`
      const splitChunks =
        config.optimization && config.optimization.splitChunks;
      if (splitChunks) {
        const cacheGroups = splitChunks.cacheGroups;
        const preactModules = /(?<!node_modules.*)[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/;
        if (cacheGroups.framework) {
          cacheGroups.preact = Object.assign({}, cacheGroups.framework, {
            test: preactModules,
          });
          cacheGroups.commons.name = 'framework';
        } else {
          cacheGroups.preact = {
            name: 'commons',
            chunks: 'all',
            test: preactModules,
          };
        }
      }
      return config;
    },
  },
  NextMDX = require('@next/mdx')(),
  NextOffline = require('next-offline'),
  NextSourceMaps = require('@zeit/next-source-maps')();

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
          swDest: 'static/service-worker.js',
        },
      },
    ],
    [NextSourceMaps],
  ],
  NextConfig,
);
