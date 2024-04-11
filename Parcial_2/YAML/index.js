const fs = require('fs')
const yaml = require('yaml')

const file = fs.readFileSync('./file.yaml','utf-8')
const array = fs.readFileSync('./array.yaml','utf-8')

console.log(yaml.parse(file))
console.log(yaml.parse(array))
