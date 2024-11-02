/* 
39) ​Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o 
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente. 
Faça a troca sem utilizar uma variável auxiliar.
*/

vetorA = [1, 3, 5, 7, 9]
vetorB = [2, 4, 6, 8, 10]

function trocaDeVetores(v1, v2) {
    if (v1.length === v2.length){
        for(c = 0; c < v1.length; c++) {
            v1[c] = v1[c] + v2[c] //[ 3, 7, 11, 15, 19 ]
            v2[c] = v1[c] - v2[c] //[ 1, 3, 5, 7, 9 ]
            v1[c] = v1[c] - v2[c] //[ 2, 4, 6, 8, 10 ]
        }
        console.log(`Vetor 1 = [${v1}] \nVetor 2 = [${[v2]}]`)
    } else {
        console.log("O tamanhos dos vetores são diferente.")
    }
}

trocaDeVetores(vetorA, vetorB)

//Correto! :D
//Maneira feita no curso:

/* function trocaValores(vetorA, vetorB) {
    if (vetorA.length == vetorB.length) {
        for(let i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    } else {
        return 'Vetores de tamanhos diferentes.'
    }

    console.log('Novo vetor A: ' + vetorA)
    console.log('Novo vetor B: ' + vetorB)
}

let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

trocaValores(vetorA, vetorB) */