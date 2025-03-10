/* 
31) ​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor 
e imprime a quantidade no console.
*/

function qtdVetorNegativo(vetorArray) {
    negativo = 0
    for (i = 0; i < vetorArray.length; i++) {
        if (vetorArray[i] < 0) {
            negativo++
        }
    }
    return negativo
}

vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]
console.log(qtdVetorNegativo(vetor))

//Correto! :D
//Maneira feita no curso:

function numerosNegativos (vetor) {
    let qtdNegativos = 0
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] < 0) {
            qtdNegativos++
        }
    }
    return qtdNegativos
}

vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(numerosNegativos(vetor))