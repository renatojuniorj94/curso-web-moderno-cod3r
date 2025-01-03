/* 
Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é 
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está 
desenvolvendo no momento é a de somar o total das despesas. 
Crie uma função que receba um array de produtos e retorne o total das despesas.
Exemplos:
despesasTotais([ 
  {nome: "Jornal online", categoria: "Informação", preco: 89.99}, 
  {nome: "Cinema", categoria: "Entretenimento", preco: 150} 
]) // retornará 239.99 
 
despesasTotais([ 
  {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99}, 
  {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90} 
]) // retornará 34599.89
*/

function despesasTotais(array) {
  let total = 0
  for(let item of array) {
    total += item.preco
  }
  return total
}

console.log(despesasTotais([ 
  {nome: "Jornal online", categoria: "Informação", preco: 89.99}, 
  {nome: "Cinema", categoria: "Entretenimento", preco: 150} 
]))

console.log(despesasTotais([ 
  {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99}, 
  {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90} 
]))

//Correto! :D
//Outra maneira de fazer:

//Resolução 1:
function despesasTotais(itens) { 
  var total = 0 
   
  for (let item of itens) 
    total += item.preco 
   
  return total 
}

//Resolução 2:
function despesasTotais(itens) { 
  return itens 
    .map(item => item.preco) 
    .reduce((acumulador, valorAtual) => acumulador + valorAtual) 
}

//Resolução 3:
function despesasTotais(itens) { 
  return itens.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0) 
}