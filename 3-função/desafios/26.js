/* 
26)​ Fazer um programa para encontrar todos os pares entre 1 e 100.
*/

function exibirPares() {
    for (i = 1; i < 101; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

exibirPares()

//Correto! :D
//Maneira feita no curso:

function acharPares () {
    for (let i = 1; i <= 100; i++){
        if (i%2==0) {
            console.log(i)
        }
    }
}

acharPares()