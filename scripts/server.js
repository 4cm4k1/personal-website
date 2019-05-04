const { readFileSync } = require('fs');
const httpProxy = require('http-proxy');

/**
 * Idles main thread for given amount of time
 * @param {number} time Time to pause in milliseconds
 * @returns {Promise} Promise that resolves after setTimeout
 */
function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

sleep(5000).then(() => {
  let proxy = httpProxy.createServer({
    target: {
      host: 'localhost',
      port: 3000,
    },
    ssl: {
      key: readFileSync('./scripts/key.pem'),
      cert: readFileSync('./scripts/cert.pem'),
    },
  });
  proxy.on('proxyReq', (proxyReq, req, res) =>
    // This approximates the routing in `now.json`
    req.url.match(/^(\/service-worker\.js)$/)
      ? (proxyReq.path = '/_next/static/service-worker.js')
      : null,
  );
  proxy.on('proxyRes', (proxyRes, req, res) =>
    // Same as above
    res.setHeader('Service-Worker-Allowed', '/'),
  );
  proxy.listen(443);
});
