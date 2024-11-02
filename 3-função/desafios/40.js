/* 
40) ​Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de 
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o 
conceito B e de 9,0 a 10,0 o conceito A.
*/

let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]

function avaliacaoDeNotas(vetorNotas) {
    for(c = 0; c < vetorNotas.length; c++) {
        if (vetorNotas[c] <= 4.9) {
            console.log(`Nota ${c} tem conceito D`)
        }
        if (vetorNotas[c] >= 5 && vetorNotas <= 6.9) {
            console.log(`Nota ${c} tem conceito C`)
        } 
        if (vetorNotas[c] >= 7 && vetorNotas <= 8.9) {
            console.log(`Nota ${c} tem conceito B`)
        }
        if (vetorNotas[c] >= 9 && vetorNotas <= 10) {
            console.log(`Nota ${c} tem conceito A`)
        }
    }
}

avaliacaoDeNotas(notas)