/* 
28) ​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

function paresEImpares(...num) {
    let numeros = num
    let par = []
    let impar = []
    let qtdPar = 0
    let qtdImpar = 0
    /* let contArray = length(numeros) */
    for (i = 0; i < numeros.length; i++){
        if (numeros[i] % 2 === 0){
            par.push(numeros[i])
            qtdPar += 1
        } else {
            impar.push(numeros[i])
            qtdImpar += 1
        }
    }
    return `Pares = ${par} (Total = ${qtdPar}) \nÍmpares = ${impar} (Total = ${qtdImpar})`
}

console.log(paresEImpares(8,6,15,689,1,48))