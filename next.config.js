const { withPlugins, optional } = moduleExists('next-compose-plugins')
  ? require('next-compose-plugins')
  : {};

const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next-server/constants');

function moduleExists(name) {
  try {
    return require.resolve(name);
  } catch (error) {
    return false;
  }
}

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

module.exports = moduleExists('next-compose-plugins')
  ? withPlugins(
      [
        [
          optional(() =>
            require('@zeit/next-bundle-analyzer')(bundleAnalyzerConfig),
          ),
          [PHASE_PRODUCTION_BUILD],
        ],
        [
          optional(() => require('@zeit/next-mdx')()),
          [PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD],
        ],
        [optional(() => require('next-offline')), [PHASE_PRODUCTION_BUILD]],
        [
          optional(() => require('next-optimized-images')),
          [PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD],
        ],
        [
          optional(() => require('@zeit/next-source-maps')()),
          [PHASE_PRODUCTION_BUILD],
        ],
      ],
      nextConfig,
    )
  : nextConfig;
