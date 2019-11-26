function redirect(req, res) {
  if (res.headersSent) return

  res
    .setHeader('content-length', 0)
    .removeHeader('cache-control')
    .removeHeader('expi ')
    .removeHeader('date')
    .removeHeader('etag')
    .setHeader('location', encodeURI(req.params.url))
    .status(302)
    .end()
}

module.exports = redirect
