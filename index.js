const params = require(__dirname + '/params.json')

function cleanUtm (url) {
  const obj = new URL(url)
  const keys = Array.from(obj.searchParams.keys())
  if (keys.length === 0) {
    return url
  }
  keys.forEach(key => {
    if (params[key]) {
      obj.searchParams.delete(key)
    }
  })
  return obj.toString()
}

module.exports = {
  cleanUtm
}
