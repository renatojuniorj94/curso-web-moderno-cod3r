/* 
Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por 
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
Exemplos:
receberNomeDoMes(1) // retornará "janeiro" 
receberNomeDoMes(4) // retornará "abril"
*/

function mes(num) {
    switch (num) {
        case 1:
            console.log('Janeiro')
            break
        case 2:
            console.log('Fevereiro')
            break
        case 3:
            console.log('Março')
            break
        case 4:
            console.log('Abril')
            break
        case 5:
            console.log('Maio')
            break
        case 6:
            console.log('Junho')
            break
        case 7:
            console.log('Julho')
            break
        case 8:
            console.log('Agosto')
            break
        case 9:
            console.log('Setembro')
            break
        case 10:
            console.log('Outubro')
            break
        case 11:
            console.log('Novembro')
            break
        case 12:
            console.log('Dezembro')
            break
        default:
            console.log('Mês inválido!')
    }
}

mes(3)
mes(7)

//Correto! :D
//Outra maneira de fazer...

//Resolução 1
function receberNomeDoMes(numero) {
    switch (numero) {
        case 1:
            return "janeiro";
        case 2:
            return "fevereiro";
        case 3:
            return "março";
        case 4:
            return "abril";
        case 5:
            return "maio";
        case 6:
            return "junho";
        case 7:
            return "julho";
        case 8:
            return "agosto";
        case 9:
            return "setembro";
        case 10:
            return "outubro";
        case 11:
            return "novembro";
        case 12:
            return "dezembro";
    }
}

//Resolução 2
function receberNomeDoMes(numero) {
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho','agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

    return mapeamento[--numero];
}