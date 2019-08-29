const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  }),
  withSass = require('@zeit/next-sass'),
  withMDX = require('@next/mdx')(),
  withOffline = require('next-offline'),
  withPlugins = require('next-compose-plugins'),
  withSourceMaps = require('@zeit/next-source-maps')(),
  nextConfig = {
    experimental: {
      // cpus: 1,
      // ampBindInitData: false,
      // profiling: false,
      // documentMiddleware: false,
      granularChunks: true,
      publicDirectory: true,
      modern: true,
    },
    future: {
      excludeDefaultMomentLocales: true,
    },
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    target: 'serverless',
    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => config,
    webpackDevMiddleware: config => config,
  },
  sassConfig = {
    sassLoaderOptions: {
      sassOptions: {
        includePaths: ['node_modules'],
      },
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
