//++
//!

let num1 = 1
let num2 = 2

num1++ //Pósfixado > num1 = 2
console.log(num1)
--num1 //Prefixado > num1 = 1
console.log(num1)

console.log(++num1 === num2--) //true > Pela ordem de precedencia, ++num1 foi executado antes do operador relacional, e a subtração só aconteceu depois por ser pósfixado
console.log(num1 === num2)