const { readCsv, writeJson } = require('./file.js')

function buildHash (lines) {
  return lines
    .map(line => line.name)
    .reduce((output, key) => {
      output[key] = 1
      return output
    }, {})
}

function build () {
  const pathInput = './node_modules/tracking-query-params-registry/_data/params.csv'
  const pathOutput = './params.json'
  return readCsv(pathInput)
    .then(buildHash)
    .then(data => writeJson(pathOutput, data))
}

console.log('[clean-utm] building tracking parameters data\n')
return build()
