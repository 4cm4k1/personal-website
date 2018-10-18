const uuid = require('uuid/v4');

module.exports = (req, res, next) => {
  // Polka does not support all Express built-ins yet
  // so we create `locals` then add `.nonce`
  res.locals = {
    nonce: uuid(),
  };
  next();
};
