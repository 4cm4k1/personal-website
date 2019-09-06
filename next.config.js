const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  }),
  withCss = require('@zeit/next-css'),
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
  };

module.exports = withPlugins(
  [
    // @zeit/next-bundle-analyzer
    [withBundleAnalyzer],
    // @zeit/next-css
    [withCss],
    // @zeit/next-mdx
    [withMDX],
    // next-offline
    [withOffline],
    // @zeit/next-source-maps
    [withSourceMaps],
  ],
  nextConfig,
);
