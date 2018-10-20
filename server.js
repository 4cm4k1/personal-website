const helmet = require('helmet'); // Imports
const next = require('next');
const polka = require('polka');
const {
  DEV,
  DEV_PROTOCOL,
  HOST,
  PORT,
  PROTOCOL,
  SERVER_OPTIONS,
  STATIC_FILES,
} = require('./lib/getConstants');
const { createServer } = require(DEV_PROTOCOL); // Either 'http' or 'https'
const { join } = require('path');
const nextApp = next({ dev: DEV }); // Instantiate Next.js then start
const nextHandler = nextApp.getRequestHandler(); // Save handler for later
nextApp.prepare().then(() => {
  const { handler: polkaHandler } = polka() // Instantiate Polka
    .use(
      require('./lib/sendRedirect'), // Redirect from `www`
      require('./lib/setHeaders'), // Set headers that Helmet doesn’t
      require('./lib/getNonce'), // Get nonce required for CSP
      helmet(require('./lib/getHelmetConfig')()), // Use Helmet to set headers
      require('shrink-ray-current')(), // Use Shrink Ray for compression
    )
    .get('/service-worker.js', async (
      req,
      res, // Serve from .next/
    ) => nextApp.serveStatic(req, res, join(__dirname, '.next', req.url)))
    .get(
      '*', // Serve everything according to following condition
      async (req, res) =>
        STATIC_FILES.includes(req.url) // If static file, serve from static/
          ? nextApp.serveStatic(req, res, join(__dirname, 'static', req.url))
          : nextHandler(req, res), // Else, let Next.js handle
    );
  createServer(SERVER_OPTIONS, polkaHandler).listen(
    PORT, // Start server at specified port
    _ => (DEV ? require('opn')(`${PROTOCOL}://${HOST}`) : null), // If dev, open
  );
});
