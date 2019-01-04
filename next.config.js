const fiber = require('fibers'),
  sass = require('sass'),
  withBundleAnalyzer = require('@zeit/next-bundle-analyzer'),
  withSass = require('@zeit/next-sass'),
  withMDX = require('@zeit/next-mdx')(),
  withOffline = require('next-offline'),
  withPlugins = require('next-compose-plugins'),
  withSourceMaps = require('@zeit/next-source-maps')(),
  { BUNDLE_ANALYZE } = process.env;

const bundleAnalyzerConfig = {
  analyzeServer: ['server', 'both'].includes(BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../../bundles/server.html',
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html',
    },
  },
};

const nextConfig = {
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
};

const sassConfig = {
  sassLoaderOptions: {
    fiber: fiber,
    implementation: sass,
    includePaths: ['node_modules'],
  },
};

module.exports = withPlugins(
  [
    // @zeit/next-bundle-analyzer
    [withBundleAnalyzer, bundleAnalyzerConfig],
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
