function copyHeaders(source, target) {
  for (const [key, value] of Object.entries(source.headers)) {
    try {
      target.header(key, value)
    } catch (err) {
      console.log(err.message)
    }
  }
}

module.exports = copyHeaders
