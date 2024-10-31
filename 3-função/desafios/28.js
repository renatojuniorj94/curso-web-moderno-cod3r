/* 
28) ​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

function paresEImpares(...num) {
    let numeros = num
    let par = []
    let impar = []
    let qtdPar = 0
    let qtdImpar = 0
    for (i = 0; i < numeros.length; i++){
        if (numeros[i] % 2 === 0){
            par.push(numeros[i])
            qtdPar += 1
        } else {
            impar.push(numeros[i])
            qtdImpar += 1
        }
    }
    return `Pares = ${par.sort((a,b) => a - b)} (Total = ${qtdPar}) \nÍmpares = ${impar.sort((a, b) => a - b)} (Total = ${qtdImpar})`
}

console.log(paresEImpares(8,6,15,689,1,48))