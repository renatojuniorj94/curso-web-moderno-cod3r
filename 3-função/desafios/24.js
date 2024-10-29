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

//Correto! :D
//Maneira feita no curso:

function helloWorld () {
    let i = 0
     while (i < 11) {
         console.log("Hello World");
         i++
     }   
 }
 
 helloWorld()