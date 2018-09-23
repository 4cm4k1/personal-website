const shrinkRay = require('shrink-ray-current');
const polka = require('polka');
const next = require('next');
const helmet = require('helmet');
const uuid = require('uuid/v4');
const { parse } = require('url');
const { join } = require('path');
const { createServer } = require('https');
const { readFileSync } = require('fs');

const { PORT = 4242, NODE_ENV } = process.env;

const dev = NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const options = {
  key: readFileSync('./key.pem'),
  cert: readFileSync('./cert.pem'),
};

const rootStaticFiles = [
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
  '/apple-touch-icon.png',
  '/browserconfig.xml',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/favicon.ico',
  '/keybase.txt',
  '/manifest.json',
  '/metadata.html',
  '/mstile-150x150.png',
  '/og-image.jpg',
  '/resume-anthony-maki.pdf',
  '/robots.txt',
  '/safari-pinned-tab.svg',
  '/sitemap.xml',
];

function createNonce(req, res, next) {
  // Polka does not support all Express built-ins yet
  // so we create `locals` then add `.nonce`
  res.locals = {
    nonce: Buffer.from(uuid()).toString('base64'),
  };
  next();
}

function getNonce(req, res) {
  return `'nonce-${res.locals.nonce}'`;
}

function getDirectives() {
  const self = "'self'";
  const none = "'none'";
  const unsafeInline = "'unsafe-inline'";
  const unsafeEval = "'unsafe-eval'";
  const strictDynamic = "'strict-dynamic'";
  const scripts = ['https:'];
  const styles = ['https:', 'fonts.googleapis.com'];
  const fonts = ['https:', 'fonts.gstatic.com'];
  const images = ['https:', 'data:'];
  const connect = ['https:'];

  return {
    defaultSrc: [none],
    scriptSrc: [
      self,
      getNonce,
      strictDynamic,
      // unsafeInline,
      ...scripts,
      unsafeEval,
    ],
    styleSrc: [self, unsafeInline, ...styles],
    fontSrc: [self, ...fonts],
    imgSrc: [self, ...images],
    baseUri: [none],
    objectSrc: [none],
    connectSrc: dev ? [self, ...connect] : [...connect],
    upgradeInsecureRequests: dev ? false : true,
  };
}

function getHelmetConfig() {
  // Configure Helmet
  return {
    contentSecurityPolicy: {
      directives: getDirectives(),
    },
    frameguard: {
      action: 'deny',
    },
    hsts: {
      maxAge: 63072000,
      includeSubDomains: true,
      preload: true,
    },
    referrerPolicy: {
      policy: 'no-referrer-when-downgrade',
    },
  };
}

function setHeaders(req, res, next) {
  // Set headers not covered by Helmet
  res.setHeader('Access-Control-Allow-Origin', 'https://anthony.codes');
  res.setHeader(
    'Feature-Policy',
    "accelerometer 'none'; ambient-light-sensor 'none'; autoplay 'none'; camera 'none'; encrypted-media 'none'; fullscreen 'none'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; midi 'none'; payment 'none'; picture-in-picture 'none'; speaker 'none'; usb 'none'; vr 'none'",
  );
  res.setHeader('X-UA-Compatible', 'IE=edge; chrome=1');
  next();
}

// async function setHeaders(req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'https://anthony.codes');
//   res.setHeader('Cache-Control', 'max-age=31536000');
//   res.setHeader(
//     'Content-Security-Policy',
//     "style-src 'self' 'unsafe-inline' data: https://cdn.jsdelivr.net/ https://*.googleapis.com/; " +
//       "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.google-analytics.com/ https://*.googletagmanager.com/ https://cdn.jsdelivr.net/; " +
//       "font-src 'self' https://*.gstatic.com/ https://*.googleapis.com/; " +
//       "base-uri 'self';",
//   );
//   res.setHeader(
//     'Strict-Transport-Security',
//     'max-age=63072000; includeSubDomains; preload',
//   );
//   res.setHeader('X-Content-Type-Options', 'nosniff');
//   res.setHeader('X-Frame-Options', 'DENY');
//   res.setHeader('X-UA-Compatible', 'IE=edge; chrome=1');
//   res.setHeader('X-XSS-Protection', '1; mode=block');
//   next();
// }

// Set up Next
app.prepare().then(() => {
  // Set up Polka
  const { handler } = polka()
    // Add nonce, header, Helmet, and shrinkRay middleware
    .use(setHeaders, createNonce, helmet(getHelmetConfig()), shrinkRay())
    // Handle all requests
    .get('*', async (req, res) => {
      const parsedUrl = parse(req.url, true);
      const { path, query } = parsedUrl;

      if (rootStaticFiles.includes(path)) {
        // Handle requests for files in /static/
        app.serveStatic(req, res, join(__dirname, 'static', path));
      } else if (path === '/service-worker.js') {
        // Serve service worker
        app.serveStatic(req, res, join(__dirname, '.next', path));
      } else {
        // Handle everything else
        handle(req, res);
      }
    });

  // Start server
  createServer(options, handler).listen(PORT, _ =>
    console.log(`> Ready on https://localhost:${PORT}`),
  );
});
