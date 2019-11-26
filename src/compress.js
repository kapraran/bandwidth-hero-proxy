const sharp = require('sharp')
const redirect = require('./redirect')

function compress(req, res, input) {
  const format = req.params.webp ? 'webp' : 'jpeg'

  sharp(input)
    .grayscale(req.params.grayscale)
    .toFormat(format, {
      quality: req.params.quality,
      progressive: true,
      optimizeScans: true
    })
    .toBuffer((err, output, info) => {
      if (err || !info || res.headersSent) return redirect(req, res)

      res
        .set({
          'content-type': `image/${format}`,
          'content-length': info.size,
          'x-original-size': req.params.originSize,
          'x-bytes-saved': req.params.originSize - info.size
        })
        .status(200)
        .end(output)
    })
}

module.exports = compress
