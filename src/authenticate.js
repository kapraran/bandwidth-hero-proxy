const auth = require('basic-auth')
const LOGIN = process.env.LOGIN
const PASSWORD = process.env.PASSWORD

function authenticate(req, res, next) {
  if (!(LOGIN && PASSWORD)) return next()

  const credentials = auth(req)
  if (!credentials || credentials.name !== LOGIN || credentials.pass !== PASSWORD) {
    res
      .header('WWW-Authenticate', `Basic realm="Bandwidth-Hero Compression Service"`)
      .status(401)
      .end('Access denied')
  }
}

module.exports = authenticate
