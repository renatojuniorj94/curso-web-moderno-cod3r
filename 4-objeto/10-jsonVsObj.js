// json é um formato de dados
const obj = { a: 1, b: 2, c: 3, soma() {return a + b + c}}

//Convertendo objeto em JSON
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))

//O erro abaixo acontece porque um JSON não pode conter aspas simples ''
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))

console.log(JSON.parse('{ "a": 1.7 , "b": "string", "c": true, "d": {}, "e": [] }'))