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

function trocaValores(vetorA, vetorB) {
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

trocaValores(vetorA, vetorB)

//Outra maneira de trocar valores de array:
/* 
Método com bits (XOR):

Para valores numéricos (ou que possam ser convertidos para números), você também pode usar a operação XOR. Ela permite trocar dois valores sem uma variável temporária, operando diretamente sobre os bits. Isso é muito comum em manipulação de dados mais avançada.
Ambos os métodos evitam o uso de uma variável extra e fazem a troca diretamente no lugar!
*/

let array1 = [5];
let array2 = [10];

// Usando XOR para trocar os valores
array1[0] = array1[0] ^ array2[0]; // Passo 1: array1[0] guarda o XOR dos dois valores
console.log(array1, array2)
array2[0] = array1[0] ^ array2[0]; // Passo 2: array2[0] agora é igual ao valor original de array1[0]
console.log(array1, array2)
array1[0] = array1[0] ^ array2[0]; // Passo 3: array1[0] agora é igual ao valor original de array2[0]
console.log(array1, array2)

console.log(array1[0]); // 10
console.log(array2[0]); // 5