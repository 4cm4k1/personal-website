const sass = require('sass'),
  withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  }),
  withSass = require('@zeit/next-sass'),
  withMDX = require('@next/mdx')(),
  withOffline = require('next-offline'),
  withPlugins = require('next-compose-plugins'),
  withSourceMaps = require('@zeit/next-source-maps')(),
  nextConfig = {
    experimental: {
      terserLoader: true,
      // flyingShuttle: true,
      asyncToPromises: true,
      // documentMiddleware: true,
      publicDirectory: true,
      modern: true,
    },
    generateInDevMode: true,
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    // registerSwPrefix: '_next/static', // TODO: see below
    publicRuntimeConfig: false, // temp workaround
    target: 'serverless',
    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => config,
    webpackDevMiddleware: config => config,
    workboxOpts: {
      // importsDirectory: 'static',
      // importWorkboxFrom: 'local', TODO: use 'local' but without duplicate `_next/static/static/`
      swDest: 'static/service-worker.js',
      runtimeCaching: [
        {
          urlPattern: /^https?.*/,
          handler: 'networkFirst',
          options: {
            cacheName: 'https-calls',
            networkTimeoutSeconds: 15,
            expiration: {
              maxEntries: 150,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
  },
  sassConfig = {
    sassLoaderOptions: {
      implementation: sass,
      includePaths: ['node_modules'],
    },
  };

module.exports = withPlugins(
  [
    // @zeit/next-bundle-analyzer
    [withBundleAnalyzer],
    // @zeit/next-sass
    [withSass, sassConfig],
    // @zeit/next-mdx
    [withMDX],
    // next-offline
    [withOffline],
    // @zeit/next-source-maps
    [withSourceMaps],
  ],
  nextConfig,
);
