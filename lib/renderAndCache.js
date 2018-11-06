const LRUCache = require('lru-cache');
const send = require('@polka/send');

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60, // 1hour
});

const contentType = {
  'Content-Type': 'text/html; charset=utf-8',
};

function getCacheKey(req) {
  return `${req.url}`;
}

module.exports = async function renderAndCache(
  req,
  res,
  pagePath,
  app,
  queryParams,
) {
  const key = getCacheKey(req);

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    res.setHeader('X-Cache', 'HIT');
    send(res, res.statusCode, ssrCache.get(key), contentType);
    return;
  }

  try {
    // If not let's render the page into HTML
    const html = await app.renderToHTML(req, res, pagePath, queryParams);

    // Something is wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      send(res, res.statusCode, html, contentType);
      return;
    }

    // Let's cache this page
    ssrCache.set(key, html);

    res.setHeader('X-Cache', 'MISS');
    send(res, res.statusCode, html, contentType);
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams);
  }
};
