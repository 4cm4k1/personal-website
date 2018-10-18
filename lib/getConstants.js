const { readFileSync } = require('fs');

const DEV = process.env.NODE_ENV !== 'production';
const SERVER_OPTIONS = DEV
  ? {
      key: readFileSync('./key.pem'),
      cert: readFileSync('./cert.pem'),
    }
  : {};

module.exports = {
  DEV,
  HOST: DEV ? 'localhost:4242' : 'anthony.codes',
  PORT: process.env.PORT || 4242,
  PROTOCOL: DEV ? 'https' : 'http',
  SERVER_OPTIONS,
  STATIC_FILES: [
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
  ],
};
