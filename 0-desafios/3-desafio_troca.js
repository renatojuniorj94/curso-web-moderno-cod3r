/* var a = 7;
var b = 94;

var a = b;
var b = a;

console.log(a)
console.log(b) */

//Errado!
//Maneira correta de fazer...

let a = 7;
let b = 94;

let temp = a;

a = b;
b = temp;

console.log(a)
console.log(b)

function Flamengo(libertadores, brasileiro, cb) {
    libertadores = 3
    brasileiro = 8
    cb = 4
    soma = libertadores + brasileiro + cb
    if (soma >= 10) {
        console.log(`O Flamengo tem ${soma} título!`)
    }
    else {
        console.log(`Vamos em busca de mais titulos!`)
    }
}

Flamengo()