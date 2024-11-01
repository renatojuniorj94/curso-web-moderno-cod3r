/* 
34)​ Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso 
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

function verificacaoDeString(string1, string2) {
    let estaContido = true;
    for (let i = 0; i < string1.length; i++) {
        let caractereString1 = string1.charAt(i).toLowerCase()
        /* Aninhamento do segundo laço:
        Para cada caractere de string1, o código percorre cada caractere de string2. Se o caractere de string1 é encontrado em string2, estaContido permanece true, e o laço interno para (usando break). Caso contrário, estaContido é definido como false. */
        for (let j = 0; j < string2.length; j++) {
            let caractereString2 = string2.charAt(j).toLowerCase()
            if (caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        //Se algum caractere de string1 não é encontrado em string2, estaContido será false, e a função retorna false imediatamente.
        if (!estaContido) {
            return estaContido
        }
    }
    /* Depois de verificar se string1 está contida em string2, a função faz o processo inverso: verifica se todos os caracteres de string2 estão em string1. O código do laço é similar ao primeiro. */
    for (let i = 0; i < string2.length; i++) {
        let caractereString2 = string2.charAt(i).toLowerCase()

        for (let j = 0; j < string1.length; j++) {
            let caractereString1 = string1.charAt(j).toLowerCase()

            if (caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido
        }
    }
    return estaContido
}

/* Exemplos de Saída
console.log(verificacaoDeString('abcdf', 'dcba'))
Retorna false, pois f não está contido em string2.

console.log(verificacaoDeString('flameNgo', 'FlAMenGo'))
Retorna true, pois todas as letras de ambas as strings estão contidas uma na outra (caso-insensitivo). */
console.log(verificacaoDeString('abcdf', 'dcba'))
console.log(verificacaoDeString('flamenGo', 'FlaMEngO'))

/* Melhorias Possíveis
O código atual usa um duplo laço for aninhado para cada caractere, o que torna a execução menos eficiente. */