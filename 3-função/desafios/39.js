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
            v1[c] = v1[c] + v2[c]
            v2[c] = v1[c] - v2[c]
            v1[c] = v1[c] - v2[c]
        }
        console.log(`Vetor 1 = [${v1}] \nVetor 2 = [${[v2]}]`)
    } else {
        console.log("O tamanhos dos vetores são diferente.")
    }
}

trocaDeVetores(vetorA, vetorB)