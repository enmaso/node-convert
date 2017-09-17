const fs = require('fs')
const exec = require('child_process').exec

module.exports = (filepath, convertTo, callback) => {
  if (!fs.existsSync(filepath)) callback(null)
  let converted = `${filepath}.${convertTo}`
  exec(`convert '${filepath}[0]' ${converted}`, (err, stdout, stderr) => {
    if (err) {
      console.error(err)
      callback(null)
    } else {
      callback(converted)
    }
  })
}
