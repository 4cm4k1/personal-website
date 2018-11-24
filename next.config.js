const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const withMDX = require('@zeit/next-mdx')(); // see https://github.com/zeit/next-plugins/issues/231#issuecomment-433587758
const withOffline = require('next-offline');
const withOptimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');
const withSourceMaps = require('@zeit/next-source-maps');

const bundleAnalyzerConfig = {
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
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
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => config,
  webpackDevMiddleware: config => config,
  publicRuntimeConfig: {
    hostname: process.env.NOW
      ? 'https://anthony.codes'
      : 'https://localhost:3000',
  },
};

module.exports = withPlugins(
  [
    withBundleAnalyzer(bundleAnalyzerConfig),
    withMDX,
    withOffline,
    withOptimizedImages,
    withSourceMaps,
  ],
  nextConfig,
);
