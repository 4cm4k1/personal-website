// const shrinkRay = require('shrink-ray-current');
const polka = require('polka');
const next = require('next');
const { parse } = require('url');
const { join } = require('path');

const { PORT = 4242, NODE_ENV } = process.env;

const dev = NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const rootStaticFiles = [
  '/favicon.ico',
  '/keybase.txt',
  '/robots.txt',
  '/sitemap.xml',
];

app.prepare().then(() => {
  polka()
    // Have Polka handle all requests
    .get('*', (req, res) => {
      const parsedUrl = parse(req.url, true);
      const { path, query } = parsedUrl;
      // IF: request is for one of the root static files,
      // then serve from /static/ as if root /
      // ELSE: handle and render request with Next.js
      // or by actual request path
      if (rootStaticFiles.includes(path)) {
        app.serveStatic(req, res, join(__dirname, 'static', path));
      } else {
        handle(req, res);
      }
    })
    .listen(PORT)
    .then(() => console.log(`> Ready on http://localhost:${PORT}`));
});

// const configuration = {
//   port: 4242,
//   config: {
//     cleanUrls: true,
//     headers: [
//       {
//         source: '**',
//         headers: [
//           {
//             key: 'Access-Control-Allow-Origin',
//             value: 'https://anthony.codes',
//           },
//           {
//             key: 'Cache-Control',
//             value: 'max-age=31536000',
//           },
//           {
//             key: 'Content-Security-Policy',
//             value:
//               "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net/ https://*.googleapis.com/; " +
//               "script-src 'self' 'unsafe-inline' https://*.google-analytics.com/ https://*.googletagmanager.com/ https://cdn.jsdelivr.net/; " +
//               "font-src 'self' https://*.gstatic.com/ https://*.googleapis.com/; " +
//               "base-uri 'self';",
//           },
//           {
//             key: 'Strict-Transport-Security',
//             value: 'max-age=63072000; includeSubDomains; preload',
//           },
//           {
//             key: 'X-Content-Type-Options',
//             value: 'nosniff',
//           },
//           {
//             key: 'X-Frame-Options',
//             value: 'DENY',
//           },
//           {
//             key: 'X-UA-Compatible',
//             value: 'IE=edge; chrome=1',
//           },
//           {
//             key: 'X-XSS-Protection',
//             value: '1; mode=block',
//           },
//         ],
//       },
//     ],
//     public: './build/web',
//     rewrites: [
//       {
//         source: '**',
//         destination: '/index.html',
//       },
//     ],
//   },
//   cwd: __dirname,
//   compression: shrinkRay(),
//   debug: false,
// };
