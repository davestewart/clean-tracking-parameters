const csv = require('csv-parser')
const fs = require('fs')

function readCsv (path) {
  const lines = []
  return new Promise(function (resolve, reject) {
    fs.createReadStream(path)
      .pipe(csv())
      .on('data', (data) => lines.push(data))
      .on('end', () => resolve(lines))
      .on('error', reject)
  })
}

function writeJson (path, data) {
  const content = JSON.stringify(data, null, '  ')
  fs.writeFile(path, content, err => {
    if (err) {
      console.error(err)
      return
    }
  })
}

module.exports = {
  readCsv,
  writeJson,
}
