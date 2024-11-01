/* 
38) ​Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números 
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente 
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
*/

function acharImpar(n1 = 0, n2 = 100) {
    let coringa = 0
    if (n1 > n2) {
        coringa = n2
        n2 = n1
        n1 = coringa
    } else if (n1 === n2) {
        console.log('Números identicos tornam a função inválida!')
    }

    for (c = n1; c < n2 + 1; c++) {
        if (c % 2 === 1) {
            console.log(c)
        }
    }
}

/* acharImpar() */
acharImpar(19, 0)