/* 
28) ​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

//Para passar parâmetros infinitos usamos '...'
function paresEImpares(...num) {
    let numeros = num
    let par = []
    let impar = []
    let qtdPar = 0
    let qtdImpar = 0
    for (i = 0; i < numeros.length; i++){
        if (numeros[i] % 2 === 0){
            par.push(numeros[i])
            qtdPar += 1
        } else {
            impar.push(numeros[i])
            qtdImpar += 1
        }
    }
    //Utilizamos '(a,b) => a - b)' para colocar os números em ordem crescente, ja que o metodo sort() transforma os números em strings.
    return `Pares = ${par.sort((a,b) => a - b)} (Total = ${qtdPar}) \nÍmpares = ${impar.sort((a, b) => a - b)} (Total = ${qtdImpar})`
    
}

console.log(paresEImpares(8,6,15,689,1,48))

//Correto! :D
//Maneira feita no curso:

function paresImpares(vetorNumeros) {
    let qtdPares = 0
    let qtdImpares = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] % 2 == 0) {
            qtdPares++
        } else {
            qtdImpares++
        }
    }
    console.log(`${qtdPares} números pares e ${qtdImpares} números ímpares.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
paresImpares(vetor)