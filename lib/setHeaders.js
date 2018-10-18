const { HOST, PROTOCOL } = require('./getConstants');

module.exports = (req, res, next) => {
  // Set headers not covered by Helmet
  res.setHeader('Access-Control-Allow-Origin', `${PROTOCOL}://${HOST}`);
  res.setHeader('X-UA-Compatible', 'IE=edge; chrome=1');
  next();
};
