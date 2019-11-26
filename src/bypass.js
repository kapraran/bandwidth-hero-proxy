function bypass(req, res, buffer) {
  res
    .set({
      'x-proxy-bypass': 1,
      'content-length': buffer.length
    })
    .status(200)
    .end(buffer)
}

module.exports = bypass
