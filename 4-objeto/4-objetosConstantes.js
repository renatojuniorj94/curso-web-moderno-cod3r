//pessoa(const) -> 123(endeço de memoria) -> {...}(objeto)
const pessoa = {nome: 'Renato'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'}
//console.log(pessoa)

Object.freeze(pessoa) //Congelando objeto pessoa

pessoa.nome = 'Maria'
pessoa.endereco = 'Rua ABC'
delete pessoa.nome
console.log(pessoa)

//Tornando um objeto constante já na criação
const pessoaConstante = Object.freeze({nome: 'Maria'})
pessoaConstante.nome = 'Renato'
console.log(pessoaConstante)