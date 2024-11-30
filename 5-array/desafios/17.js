/* 
Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
Exemplos:
somarNumeros([10, 10, 10]) // retornará 30 
somarNumeros([15, 15, 15, 15]) // retornará 60
*/

function somarNumeros(array) {
    let resultado = 0
    for(i = 0; i < array.length; i++) {
        resultado += array[i]
    }
    return resultado
}

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))