//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.49, fragil: false}
]

console.log(produtos.filter(function(p) {
    return p.preco > 2500
}))


//Desafio: Extrair array com preço maior que 500 e fragil === true
console.log(produtos.filter(function(prod) {
    return prod.preco > 500 && prod.fragil === true
}))

//Resolução do desafio:

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))