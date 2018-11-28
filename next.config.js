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

const sassConfig = {
  sassLoaderOptions: {
    fiber: moduleExists('fibers') ? require('fibers') : {},
    implementation: moduleExists('sass') ? require('sass') : {},
    includePaths: ['node_modules'],
  },
};

module.exports = moduleExists('next-compose-plugins')
  ? withPlugins(
      [
        // @zeit/next-bundle-analyzer
        [
          optional(() => require('@zeit/next-bundle-analyzer')),
          bundleAnalyzerConfig,
          [PHASE_PRODUCTION_BUILD],
        ],
        // TODO: not clear on how to use this with 3rd-party libs
        // [optional(() => require('next-purgecss')), [PHASE_PRODUCTION_BUILD]],
        // @zeit/next-sass
        [
          optional(() => require('@zeit/next-sass')),
          sassConfig,
          [PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD],
        ],
        // @zeit/next-mdx
        [
          optional(() => require('@zeit/next-mdx')()),
          [PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD],
        ],
        // next-offline
        [optional(() => require('next-offline')), [PHASE_PRODUCTION_BUILD]],
        // @zeit/next-source-maps
        [
          optional(() => require('@zeit/next-source-maps')()),
          [PHASE_PRODUCTION_BUILD],
        ],
      ],
      nextConfig,
    )
  : nextConfig;
