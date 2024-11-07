const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

/* console.log(Object.keys(pessoa)) //[ 'nome', 'idade', 'peso' ]
console.log(Object.values(pessoa)) //[ 'Rebeca', 2, 13 ]
console.log(Object.entries(pessoa)) //[ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ] */

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

//Ou destructuring

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //Vai ser listado?
    writable: false, //É uma propriedade que permite ser alterada?
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento) //01/01/2019
console.log(Object.keys(pessoa))

//Object.assign (ES6)
const