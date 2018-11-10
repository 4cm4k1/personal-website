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
const renderAndCache = require('./lib/renderAndCache');
const nextApp = next({ dev: DEV }); // Instantiate Next.js then start
const nextHandler = nextApp.getRequestHandler(); // Save handler for later
nextApp.prepare().then(() => {
  const { handler: polkaHandler } = polka() // Instantiate Polka
    .use(
      require('./lib/sendRedirect'),
      require('./lib/setHeaders'),
      require('./lib/getNonce'),
      helmet(require('./lib/getHelmetConfig')()),
      require('shrink-ray-current')(),
    ) // Use various middleware
    .get('/service-worker.js', async (req, res) =>
      nextApp.serveStatic(req, res, join(__dirname, '.next', req.url)),
    ) // Serve generated service worker from .next/
    .get('/', async (req, res) => renderAndCache(req, res, '/', nextApp))
    .get('*', async (req, res) =>
      STATIC_FILES.includes(req.url)
        ? nextApp.serveStatic(req, res, join(__dirname, 'static', req.url))
        : nextHandler(req, res),
    ); // If static file, serve from static/ - Else, let Next.js handle
  createServer(SERVER_OPTIONS, polkaHandler).listen(PORT, _ =>
    DEV ? require('opn')(`${PROTOCOL}://${HOST}`) : null,
  ); // Start server at specified port - If dev, open default browser
});
