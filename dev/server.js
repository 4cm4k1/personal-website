const { readFileSync } = require('fs');
const httpProxy = require('http-proxy');

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
  .listen(443);
