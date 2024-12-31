const moduloA = require('./1-moduloA') //Podemos colocar mas é obrigatorio > './1-moduloA.js'

const moduloB = require('./1-moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)