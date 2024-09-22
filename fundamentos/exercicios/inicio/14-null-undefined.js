/* const a = {name: 'Teste'}
const b = a //atribuição por referencia
console.log(a)

let c = 3
let d = c
d++
console.log(c, d) */

let valor //declarado mas não inicializado
console.log(valor) //undefined

valor = null // null = ausência de valor
//Deixar a linguagem definir quando for 'undefined'
console.log(valor)
//console.log(valor.toString()) //Erro

const produto = {}
console.log(produto.preco) //undefined
console.log(produto) //{}

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(produto.preco)
console.log(!!produto.preco)