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