/* 
29) ​Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números 
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos 
deles estão fora do intervalo, escrevendo estas informações.
*/

function numerosNoIntervalor(array) {
    contador = 0
    for (i = 0; i < array.length; i++) {
        if (array[i] >= 10 && array[i] <= 20) {
            contador++
        }
    }
    return `Temos ${contador} números no intervalo`
}


/* let vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21] */
console.log(numerosNoIntervalor([2,8,10,11,14,19,20,28,31]))

//Correto! :D
//Maneira feita no curso:

function observarIntervalo (vetor) {
    qtdNumerosNoIntervalo = 0
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] >= 10 && vetor[i] <= 20){
            qtdNumerosNoIntervalo++
        }
    }
    return `${qtdNumerosNoIntervalo} números dentro do intervalo.`
}

vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

console.log(observarIntervalo(vetor))