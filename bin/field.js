const path = require('path')
const fs = require('fs')

function resolve (...args) {
  return path.resolve(__dirname, ...args)
}

const fieldDir = resolve('../fields')

const fields = process.argv.slice(2)
console.log(fields)

const tpl = name => `import { IFormField } from '../../src/interface'
import { mkField } from '../../src/tools/utils'

const field = {
  name: '${name}'
}

export default mkField(IFormField, field)
`

fields.forEach(field => {
  makeField(field, tpl(field))
})

function isExist (name) {
  return fs.existsSync(name)
}

function makeField (name, cont) {
  const dir = resolve(fieldDir, name)

  if (isExist(dir)) {
    return console.log(`Error: ${dir} is exist.`)
  }

  fs.mkdir(dir, err => {
    if (err) throw err

    const file = resolve(dir, 'index.js')

    fs.writeFile(file, cont, err => {
      if (err) throw err

      console.log(`${file} was saved!`)
    })
  })
}
