const NOW = process.env.NODE_ENV === 'production'; // https://github.com/zeit/now-builders/issues/55
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_EXPORT,
  PHASE_PRODUCTION_BUILD,
} = require('next-server/constants');
const { withPlugins, optional } = moduleExists('next-compose-plugins')
  ? require('next-compose-plugins')
  : {};

/**
 * Checks for existence of given module
 * @param {string} name Name of module whose existence to test
 * @returns {(boolean|string)} String representing module path or boolean false
 */
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
  pageExtensions: ['js', 'jsx', 'mdx'],
  publicRuntimeConfig: {
    analytics: NOW ? 'UA-112988450-1' : '',
    assetPath: NOW ? '' : '/static',
    host: NOW ? 'https://anthony.codes' : 'https://localhost',
    primaryTheme: '#424242',
    profile: {
      description:
        'Anthony Maki is a Minneapolis-based software engineer. He codes stuff. Learn more about his interests, projects, and expertise. Contact him to chat, collaborate, and connect.',
      email: '4cm4k1@gmail.com',
      firstName: 'Anthony',
      fullName: 'Anthony Maki',
      jobTitle: 'Software Engineer',
      lastName: 'Maki',
      phone: '+1 612-226-9494',
      title: 'Anthony Maki - Software Engineer',
      username: '4cm4k1',
    },
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => config,
  webpackDevMiddleware: config => config,
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
        // next-offline - for now omit until Now v2 compatibility is sorted
        [optional(() => require('next-offline')), [PHASE_EXPORT]],
        // @zeit/next-source-maps
        [
          optional(() => require('@zeit/next-source-maps')()),
          [PHASE_PRODUCTION_BUILD],
        ],
      ],
      nextConfig,
    )
  : nextConfig;
