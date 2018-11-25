const nanoid = require('nanoid');

module.exports = (req, res, next) => {
  // Polka does not support all Express built-ins yet
  // so we create `locals` then add `.nonce`
  res.locals = {
    nonce: nanoid(),
  };
  next();
};
