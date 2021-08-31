const params = require(__dirname + '/params.js')

function cleanUtm (url) {
  // make object
  const obj = new URL(url)
  const keys = Array.from(obj.searchParams.keys())

  // bail if no params
  if (keys.length === 0) {
    return url
  }

  // all single params
  keys.forEach(key => {
    // all single params
    if (params.single[key]) {
      obj.searchParams.delete(key)
    }

    // all prefixed params
    Object.keys(params.prefix).forEach(prefix => {
      if (key.startsWith(prefix)) {
        obj.searchParams.delete(key)
      }
    })
  })

  // return url
  return obj.toString()
}

module.exports = {
  cleanUtm
}
