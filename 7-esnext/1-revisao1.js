//let e const
{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)
//console.log(b) > Erro

//Template string
const produto = 'iPad'
console.log(`${produto} é caro!
    Template string
    considera
    quebra
    de
    linhas e indentações\n`)

//Destructuring (é a forma de tira algo de dentro de uma estrutura)
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras) //C o [ 'd', '3', 'r' ]

const [n, o, ...me] = "Renato"
console.log(n, o, me) //R e [ 'n', 'a', 't', 'o' ]

const [x, , y] = [1, 2, 3]
console.log(x, y) //1 3

const { idade, nome } = { nome: 'Ana', idade: 9}
console.log(idade, nome) //9 Ana

const { time: i, cpf } = { cpf: 84615624865, time: 'Flamengo'} //Renomeando 'time'
console.log(cpf, i) //84615624865 Flamengo