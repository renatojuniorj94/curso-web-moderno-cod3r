//ES8: Object.values/Object.entries
const obj = { a:1, b:2, c:3 }
console.log(Object.values(obj)) //[ 1, 2, 3 ]
console.log(Object.keys(obj)) //[ 'a', 'b', 'c' ]
console.log(Object.entries(obj)) //[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

//Melhorias na notação literal
const nome = 'Junior'
const pessoa = {
    nome,
    ola() {
        return 'Seja bem vindo'
    }
}
console.log(pessoa)
console.log(pessoa.nome, pessoa.ola())

//Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!!'
    }
}

console.log(new Cachorro().falar())