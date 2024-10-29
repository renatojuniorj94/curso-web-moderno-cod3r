/* 
24)​ Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.
*/

function repetir(string, repetições) {
    let contador = 0
    while (0 < repetições) {
        repetições--
        contador++
        console.log(string + `(${contador})`)                
    }
}

repetir('Hello world!', 11)