/* 
40) ​Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de 
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o 
conceito B e de 9,0 a 10,0 o conceito A.
*/

let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]

function avaliacaoDeNotas(vetorNotas) {
    let conceitos = []
    for (let c = 0; c < vetorNotas.length; c++) {
        if (vetorNotas[c] >= 0 && vetorNotas[c] <= 4.9) {
            conceitos.push('D')
            console.log(`Nota ${vetorNotas[c]} tem conceito ${conceitos[c]}`)
        } else if (vetorNotas[c] >= 5 && vetorNotas[c] <= 6.9) {
            conceitos.push('C')
            console.log(`Nota ${vetorNotas[c]} tem conceito ${conceitos[c]}`)
        } else if (vetorNotas[c] >= 7 && vetorNotas[c] <= 8.9) {
            conceitos.push('B')
            console.log(`Nota ${vetorNotas[c]} tem conceito ${conceitos[c]}`)
        } else if (vetorNotas[c] >= 9 && vetorNotas[c] <= 10) {
            conceitos.push('A')
            console.log(`Nota ${vetorNotas[c]} tem conceito ${conceitos[c]}`)
        } else {
            conceitos.push('Nota inválida!')
        }
    }
    console.log(conceitos)
    /* return conceitos */
}

avaliacaoDeNotas(notas)

//Correto! :D
//Maneira feita no curso:

/*
function conceituarNotas(notas) {
    let conceitos = []
    for(let i = 0; i < notas.length; i++) {
        if(notas[i]>=0 && notas[i]<=4.9){
            conceitos.push('D')
        } else if(notas[i]>=5 && notas[i]<=6.9) {
            conceitos.push('C')            
        } else if(notas[i]>=7 && notas[i]<=8.9) {
            conceitos.push('B')
        } else if(notas[i]>=9 && notas[i]<=10){
            conceitos.push('A')
        } else {
            conceitos.push('Nota inválida')       
       }
    }
    return conceitos
}

let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
let vetorConceitos = conceituarNotas(notas)

console.log(vetorConceitos) 
*/