/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export?utm_source=chatgpt.com */

console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

//Tornando variaveis visivei fora do arquivo
this.a = 1
exports.b = 2
module.exports.c = 3

//Os exemplos abaixo mostram que mesmo dando uma nova referencia o module.export não muda
exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'
}
console.log(module.exports)

//Se precisar atribuir um novo objeto para ser exportado:
module.exports = {publico: true}