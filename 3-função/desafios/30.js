/* 
30) ​Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
*/

function maiorMenor(arrayVetor) {
    let maior = arrayVetor[0]
    let menor = arrayVetor[0]
    for (i = 0; i < arrayVetor.length; i++) {
        if ((arrayVetor[i] > maior)){
            maior = arrayVetor[i]
        }

        if(arrayVetor[i] < menor) {
            menor = arrayVetor[i]
        }
    }
    return `Menor nº do vetor = ${menor} \nMaior nº do vetor = ${maior}`
}

vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]
console.log(maiorMenor(vetor))

//Correto! :D
//Maneira feita no curso:

function maiorMenor (vetor) {
    let maior
    let menor
    for (let i = 0; i < vetor.length; i++){
        if (maior === undefined && menor === undefined){
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if (vetor[i] > maior){
                maior = vetor[i]
            }
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
    }
    return [maior, menor]
}

vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

console.log(maiorMenor(vetor))