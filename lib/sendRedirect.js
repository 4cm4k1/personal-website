const { DEV, HOST, PROTOCOL } = require('./getConstants');

module.exports = (req, res, next) => {
  // Redirect away from `www`
  if (!DEV && req.headers.host !== HOST) {
    res.writeHead(301, {
      Location: `${PROTOCOL}://${HOST}/${req.url.substr(1)}`,
    });
    res.end();
  }
  next();
};
