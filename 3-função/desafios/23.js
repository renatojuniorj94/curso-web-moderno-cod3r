/* 
23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do 
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do 
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e 
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function mediaAluno(codigo, n1, n2, n3) {
    let media = []
    media.push(n1)
    media.push(n2)
    media.push(n3)
    media.sort((a, b) => a < b ? 1 : -1) //.sort() coloca os itens da variavel media em ordem crescente, a arrow function interna faz uma comparação entre os valores e ordena em ordem descrescente

    let mediaPonderada = ((media[0] * 4 + media[1] * 3 + media[2] * 3) / 10).toString().replace(".", ",")

    return `Código do aluno: ${codigo}. \nNotas: (${n1}), (${n2}) e (${n3}) = Média (${mediaPonderada}). \n${mediaPonderada >= 5 ? 'Aprovado' : 'Reprovado'}`
}

console.log(mediaAluno(65, 2, 8, 3))
console.log(mediaAluno(33, 9.2, 7, 8.5))
console.log(mediaAluno(71, 5, 5, 4.99))

//Correto! :D
//Maneira feita no curso:

function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNotaFinal(123, 2.8, 6, 3.5)