const fiber = require('fibers'),
  sass = require('sass'),
  withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  }),
  withSass = require('@zeit/next-sass'),
  withMDX = require('@next/mdx')(),
  withOffline = require('next-offline'),
  withPlugins = require('next-compose-plugins'),
  withSourceMaps = require('@zeit/next-source-maps')(),
  nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx'],
    target: 'serverless',
    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => config,
    webpackDevMiddleware: config => config,
    workboxOpts: {
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
      fiber: fiber,
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
