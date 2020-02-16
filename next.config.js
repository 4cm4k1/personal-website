const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  }),
  withMDX = require('@next/mdx')(),
  withOffline = require('next-offline'),
  withPlugins = require('next-compose-plugins'),
  withSourceMaps = require('@zeit/next-source-maps')(),
  nextConfig = {
    experimental: {
      catchAllRouting: true,
      deferScripts: true,
      granularChunks: true,
      modern: true,
      pages404: true,
      plugins: true,
      polyfillsOptimization: true,
      prefetchPreload: true,
      workerThreads: true,
      async redirects() {
        return [
          {
            source: '/logs{/}?',
            statusCode: 301,
            destination: '/_logs',
          },
          {
            source: '/source{/}?',
            statusCode: 301,
            destination: '/_src',
          },
        ];
      },
      async rewrites() {
        return [
          {
            source: '/feed.atom',
            destination: '/_next/static/feed.atom',
          },
          {
            source: '/feed.json',
            destination: '/_next/static/feed.json',
          },
          {
            source: '/feed.xml',
            destination: '/_next/static/feed.xml',
          },
          {
            source: '/keybase.txt',
            destination: '/.well-known/keybase.txt',
          },
          {
            source: '/service-worker.js',
            destination: '/_next/static/service-worker.js',
          },
          {
            source: '/service-worker.js.map',
            destination: '/_next/static/service-worker.js.map',
          },
        ];
      },
      async headers() {
        return [
          {
            source: '/(.*)',
            headers: [
              {
                key: 'Access-Control-Allow-Origin',
                value: 'https://anthony.codes',
              },
              {
                key: 'Cache-Control',
                value: 'public, max-age=31536000, immutable',
              },
              {
                key: 'Expect-CT',
                value: 'enforce, max-age=0, report-uri=/report-ct-violation',
              },
              {
                key: 'Feature-Policy',
                value: `accelerometer 'none'; autoplay 'none'; camera 'none'; fullscreen 'self'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; midi 'none'; payment 'none'; speaker 'self'; sync-xhr 'self'; usb 'none'; vr 'none'`,
              },
              {
                key: 'Referrer-Policy',
                value: 'strict-origin-when-cross-origin',
              },
              {
                key: 'Strict-Transport-Security',
                value: 'max-age=63072000; includeSubDomains; preload',
              },
              {
                key: 'X-Content-Type-Options',
                value: 'nosniff',
              },
              {
                key: 'X-DNS-Prefetch-Control',
                value: 'on',
              },
              {
                key: 'X-Download-Options',
                value: 'noopen',
              },
              {
                key: 'X-Frame-Options',
                value: 'DENY',
              },
              {
                key: 'X-Permitted-Cross-Domain-Policies',
                value: 'none',
              },
              {
                key: 'X-UA-Compatible',
                value: 'IE=edge; chrome=1',
              },
              {
                key: 'X-XSS-Protection',
                value: '1; mode=block; report=/report-xss-violation',
              },
            ],
          },
          {
            source: '/service-worker.js',
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=43200, immutable',
              },
              {
                key: 'Service-Worker-Allowed',
                value: '/',
              },
            ],
          },
          {
            source: '/service-worker.js.map',
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=43200, immutable',
              },
            ],
          },
        ];
      },
    },
    future: {
      excludeDefaultMomentLocales: true,
    },
    generateInDevMode: false,
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    reactStrictMode: true,
    target: 'serverless',
    transformManifest: manifest => ['/'].concat(manifest),
    webpack: (config, { dev, isServer }) => {
      const splitChunks =
        config.optimization && config.optimization.splitChunks;
      if (splitChunks) {
        const cacheGroups = splitChunks.cacheGroups;
        const preactModules = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/;
        if (cacheGroups.framework) {
          cacheGroups.preact = Object.assign({}, cacheGroups.framework, {
            test: preactModules,
          });
          cacheGroups.commons.name = 'framework';
        } else {
          cacheGroups.preact = {
            name: 'commons',
            chunks: 'all',
            test: preactModules,
          };
        }
      }

      return config;
    },
    webpackDevMiddleware: config => config,
    workboxOpts: {
      swDest: 'static/service-worker.js',
    },
  };

module.exports = withPlugins(
  [
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
