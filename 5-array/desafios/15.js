/* 
Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são 
pares e que também tenham índices pares. 
💡Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão da divisão dele por 
2 é zero.
Exemplos: 
receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará [] 
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]
*/

const num = [14, 9, 5, 11, 8, 4]

function receberSomenteOsParesDeIndicesPares(array) {
    const resultado = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0 && i % 2 === 0) {
            resultado.push(array[i])
        }
    }
    return resultado
}

console.log(receberSomenteOsParesDeIndicesPares(num))
console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))

//Correto! :D
//Outra maneira de fazer:

//Resolução 1:
function receberSomenteOsParesDeIndicesPares(numeros) {
    let resultado = []

    for (let i = 0; i < numeros.length; i += 2) {
        const numeroPar = numeros[i] % 2 === 0

        if (numeroPar)
            resultado.push(numeros[i])
    }

    return resultado
}

//Resolução 2:
function receberSomenteOsParesDeIndicesPares(numeros) {
    return numeros.filter((numero, indice) => {
        const numeroPar = numero % 2 === 0
        const indicePar = indice % 2 === 0

        return numeroPar && indicePar
    })
}