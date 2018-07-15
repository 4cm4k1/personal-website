const shrinkRay = require('shrink-ray-current');
const polka = require('polka');
const next = require('next');
const { parse } = require('url');
const { join } = require('path');
const { createServer } = require('https');
const { readFileSync } = require('fs');

const { PORT = 4242, NODE_ENV } = process.env;

const dev = NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const options = {
  key: readFileSync('./localhost+2-key.pem'),
  cert: readFileSync('./localhost+2.pem'),
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

async function setHeaders(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'https://anthony.codes');
  res.setHeader('Cache-Control', 'max-age=31536000');
  res.setHeader(
    'Content-Security-Policy',
    "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net/ https://*.googleapis.com/; " +
      "script-src 'self' 'unsafe-inline' https://*.google-analytics.com/ https://*.googletagmanager.com/ https://cdn.jsdelivr.net/; " +
      "font-src 'self' https://*.gstatic.com/ https://*.googleapis.com/; " +
      "base-uri 'self';",
  );
  res.setHeader(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload',
  );
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-UA-Compatible', 'IE=edge; chrome=1');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
}

// Set up Next
app.prepare().then(() => {
  // Set up Polka
  const { handler } = polka()
    // Use shrinkRay for awesome compression
    .use(setHeaders, shrinkRay())
    // Handle all requests
    .get('*', async (req, res) => {
      const parsedUrl = parse(req.url, true);
      const { path, query } = parsedUrl;

      if (rootStaticFiles.includes(path)) {
        // Handle requests for files in /static/
        app.serveStatic(req, res, join(__dirname, 'static', path));
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
