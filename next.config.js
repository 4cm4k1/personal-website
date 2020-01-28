const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  }),
  withMDX = require('@next/mdx')(),
  withOffline = require('next-offline'),
  withPlugins = require('next-compose-plugins'),
  withPreact = (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
      webpack(config, options) {
        if (!options.defaultLoaders) {
          throw new Error(
            'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade',
          );
        }

        if (options.isServer) {
          config.externals = [
            'react',
            'react-dom',
            'react-dom/test-utils',
            'react-ssr-prepass',
            ...config.externals,
          ];
        }

        config.resolve.alias = Object.assign({}, config.resolve.alias, {
          react: 'preact/compat',
          react$: 'preact/compat',
          'react-dom': 'preact/compat',
          'react-dom$': 'preact/compat',
          'react-dom/test-utils': 'preact/test-utils',
          'react-dom/test-utils$': 'preact/test-utils',
          'react-ssr-prepass': 'preact-ssr-prepass',
          'react-ssr-prepass$': 'preact-ssr-prepass',
        });

        if (typeof nextConfig.webpack === 'function') {
          return nextConfig.webpack(config, options);
        }

        return config;
      },
    });
  },
  withSourceMaps = require('@zeit/next-source-maps')(),
  nextConfig = {
    experimental: {
      modern: true,
      plugins: true,
      workerThreads: true,
    },
    future: {
      excludeDefaultMomentLocales: true,
    },
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    target: 'serverless',
    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => config,
    webpackDevMiddleware: config => config,
  };

module.exports = withPlugins(
  [
    // custom plugin above
    [withPreact],
    // @zeit/next-bundle-analyzer
    [withBundleAnalyzer],
    // @zeit/next-mdx
    [withMDX],
    // next-offline
    [withOffline],
    // @zeit/next-source-maps
    [withSourceMaps],
  ],
  nextConfig,
);
