const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  }),
  withMDX = require('@next/mdx')(),
  withOffline = require('next-offline'),
  withPlugins = require('next-compose-plugins'),
  withPreact = require('next-plugin-preact'),
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
