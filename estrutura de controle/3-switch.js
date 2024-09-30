/* 
Switch executa todos os cases de cima para baixo. Se não quiser prosseguir com a execução dos cases seguintes usamos 'break' como flag.
*/


const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) { //.floor > Arrendonda número para baixo / .ceil > Arredonda número para cima.
        case 10:
        case 9:
            console.log('Quadro de honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
    console.log('Fim!')
}

imprimirResultado(8)