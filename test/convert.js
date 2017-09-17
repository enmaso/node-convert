const assert = require('assert')
const convert = require('../convert')

describe('convert', () => {
  it('returns converted file', (done) => {
    let file = `${__dirname}/sample.pdf`
    convert(file, 'png', (image) => {
      assert(image, `${file}.png`)
      done()
    })
  })
})
