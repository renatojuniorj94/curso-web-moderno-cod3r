/* 
O destructuring em JavaScript é uma maneira concisa de extrair valores de arrays ou propriedades de objetos e atribuí-los a variáveis de uma forma mais simples e legível.

O destructuring é uma ferramenta poderosa que facilita o código ao trabalhar com arrays e objetos. Ele permite extrair dados de forma mais clara, reduzindo a necessidade de código repetitivo e tornando a leitura do código mais simples.
*/

//Parte 1 - Objetos

/* const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

console.log(pessoa)

//Operador destructuring
const {nome, idade} = pessoa //Tire nome e idade de pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa //Tire nome e idade e atribua as respectivas variaveis (n, i)
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa //undefined true (Se não houver nenhuma valor atribuido a variavel 'bemHumorada' será 'true')
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep) */

//Parte 2 - Array

/* const [a] = [10] //Criando um array 'a'com valor '10'
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] //n1 = 10, n3 =9, n5 = undefined, n6 = 0
console.log(n1, n3, n5, n6)

const [, [, nota, valor]] = [[, 8, 8], [9, 6, 8]]
console.log(nota, valor) */

//Parte 3 - Function

/* function rand({min = 0, max = 1001}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 51, min: 40}
console.log(rand(obj)) //Entre 40 e 50
console.log(rand({min: 995})) //Entre 995 e 1000
console.log(rand({})) //Entre 0 e 1000
console.log(rand()) */

//Parte 4 - Array dentro de function

function rand([min = 0, max = 1001]) {
    if (min > max) [min, max] = [max, min] // Condicional 'if' / Operador destructuring // Acesssando e invertendo a array
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) //Sorteia 1 número entre 40 e 49
console.log(rand([990])) //min = 990, max = 1000 (padrão)
console.log(rand([, 50])) //min = 0 (padrão), max = 50
console.log(rand([])) //min = 0 (padrão), max = 1000 (padrão)
console.log(rand()) //Apresenta erro porque a array está 'undefined'