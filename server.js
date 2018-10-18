// Constants
const {
  DEV,
  HOST,
  PORT,
  PROTOCOL,
  SERVER_OPTIONS,
  STATIC_FILES,
} = require('./lib/getConstants');
// node_modules imports
const helmet = require('helmet');
const next = require('next');
const polka = require('polka');
const shrinkRay = require('shrink-ray-current');
const { createServer } = require(PROTOCOL);
const { join } = require('path');
const { parse } = require('url');
// Local module imports
const getHelmetConfig = require('./lib/getHelmetConfig');
const getNonce = require('./lib/getNonce');
const sendRedirect = require('./lib/sendRedirect');
const setHeaders = require('./lib/setHeaders');
// Initialize Next.js
const app = next({ dev: DEV });
const handle = app.getRequestHandler();
// Set up Next
app.prepare().then(() => {
  // Set up Polka
  const { handler } = polka()
    // Add redirect, nonce, headers, Helmet, and shrinkRay middleware
    .use(
      sendRedirect,
      setHeaders,
      getNonce,
      helmet(getHelmetConfig()),
      shrinkRay(),
    )
    // Handle all requests
    .get('*', async (req, res) => {
      const parsedUrl = parse(req.url, true);
      const { path } = parsedUrl;

      if (STATIC_FILES.includes(path)) {
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
  createServer(SERVER_OPTIONS, handler).listen(PORT, _ =>
    console.log(`> Ready on ${PROTOCOL}://${HOST}`),
  );
});
