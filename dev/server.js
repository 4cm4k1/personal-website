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

sleep(5000).then(() =>
  httpProxy
    .createServer({
      target: {
        host: 'localhost',
        port: 3000,
      },
      ssl: {
        key: readFileSync('./dev/key.pem'),
        cert: readFileSync('./dev/cert.pem'),
      },
    })
    .listen(443),
);
