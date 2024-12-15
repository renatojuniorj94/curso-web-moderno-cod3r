/* 
Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número 
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que 
têm a quantidade de dígitos indicada pelo segundo parâmetro.
Exemplos: 
filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2) // retornará [38, 10, 11] 
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) // retornará [5, 9, 1]
*/

function filtrarPorQuantidadeDeDigitos(array, quantosDigitos) {
    let resultado = []
    for (item of array) {
        const quantidadeDeDigitos = String(item).length

        if (quantidadeDeDigitos === quantosDigitos) {
            resultado.push(item)
        }
    }
    return resultado
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))