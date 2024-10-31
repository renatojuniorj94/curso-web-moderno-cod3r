/* 
32)​ Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/

function mediaAritmetica(vetorArray) {
    let somaVetorArray = 0
    for (i = 0; i < vetorArray.length; i++) {
        somaVetorArray += vetorArray[i]
    }
    return somaVetorArray / vetorArray.length
}

vetor = [7, 11, 4, 3, 22, 25, 1, 9]
console.log(mediaAritmetica(vetor))