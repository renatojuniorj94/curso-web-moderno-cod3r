/*
13) ​Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao 
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function diaUtil(dia) {
    switch (dia) {
        case 1:
            console.log('Hoje é domingo e estamos no final de semana.')
            break
        case 2: case 3: case 4: case 5: case 6:
            console.log('Hoje é dia útil, VAI TRABALHAR!')
            break
        case 7:
            console.log('Hoje é sábado e estamos no final de semana.')
            break
        }
}

diaUtil(7)

//Correto! :D
//Outra maneira de fazer...

function classificaDia(numero) {
    switch (numero) {
        case 1:
            return "Fim de semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: 
            return "Dia útil"
        case 7:
            return "Fim de semana"
        default: 
            return "Dia inválido"
    }
}

console.log(classificaDia(1));
console.log(classificaDia(2));
console.log(classificaDia(3));
console.log(classificaDia(4));
console.log(classificaDia(5));
console.log(classificaDia(6));
console.log(classificaDia(7));
console.log(classificaDia('a'));