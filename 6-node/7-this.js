//This dentro de uma função é global, fora da função e dentro do módulo você está acessando module.exports

console.log(this === global) //false
console.log(this === module) //false
console.log(this === module.exports) //true
console.log(this === exports) //true

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports) //false
    console.log(this === module.exports) //false
    console.log(this === global) //true
}


logThis()