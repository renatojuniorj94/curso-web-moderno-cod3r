/* 
25) ​Escrever um programa para exibir os números de 1 até 50 na tela.
*/

function repetir(numeroDeRepetições) {
    contador = 1
    while (contador < numeroDeRepetições + 1) {
        console.log(contador)
        contador++
    }
}

repetir(50)

//Correto! :D
//Maneira feita no curso:

function contador () {
    for (let i = 1; i<=50; i++) {
        console.log(i);
    }
}
contador()