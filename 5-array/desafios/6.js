/* 
Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o 
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for 
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será -1. Se o parâmetro de 
entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo 
...".
Exemplos:
inverso(true) // retornará false 
inverso("6") // retornará "booleano ou número esperados, mas o parâmetro é do tipo string" 
inverso(-2000) // retornará 2000 
inverso("programação") // retornará "booleano ou números, mas o parâmetro é do tipo string"
*/

/* let nome = 'Renato'
console.log(typeof nome) */

function inverso(param) {
    const tipo = typeof param

    if (tipo === "boolean") {
        return !param
    }

    if (tipo === "number") {
        return -param
    } else {
        return `Booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
    }
}

console.log(inverso(true))
console.log(inverso(false))
console.log(inverso(5))
console.log(inverso(-5))
console.log(inverso('Renato'))
console.log(inverso({}))

//Correto! :D
//Outra maneira de fazer...

function inverso(valor) {
    const tipo = typeof valor

    if (tipo == "boolean") return !valor
    else if (tipo == "number") return -valor
    else
        return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
}