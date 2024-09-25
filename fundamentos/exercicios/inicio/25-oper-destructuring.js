/* 
O destructuring em JavaScript é uma maneira concisa de extrair valores de arrays ou propriedades de objetos e atribuí-los a variáveis de uma forma mais simples e legível.

O destructuring é uma ferramenta poderosa que facilita o código ao trabalhar com arrays e objetos. Ele permite extrair dados de forma mais clara, reduzindo a necessidade de código repetitivo e tornando a leitura do código mais simples.
*/

const pessoa = {
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
console.log(logradouro, numero, cep)