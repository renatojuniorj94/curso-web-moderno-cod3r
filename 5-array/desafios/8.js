/* 
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a 
multiplicação deles. Porém, não utilize o operador de mutiplicação.
Exemplo:
multiplicar(5, 5) // retornará 25 
multiplicar(0, 7) // retornará 0
*/

function multiplicar(n1, n2) {
    let acumulador = 0
    for(let i = 0; i < n2; i++) {
        acumulador += n1
    }
    return acumulador
}

console.log(multiplicar(5, 5)) //25
console.log(multiplicar(0, 5)) //0
console.log(multiplicar(3, 9)) //27
console.log(multiplicar(9, 8)) //72