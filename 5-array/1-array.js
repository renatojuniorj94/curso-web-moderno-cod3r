console.log(typeof Array, typeof new Array, typeof []) // function object object

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

//Redeclarando com notação literal
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]) // Bia
console.log(aprovados[1]) // Carlos
console.log(aprovados[2]) // Ana
console.log(aprovados[3]) // undefined

//Adicionando elementos em um array
aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length) // 5

aprovados[9] = 'Rafael'
console.log(aprovados.length) // 10
console.log(aprovados[8] === null) // true

console.log(aprovados)
aprovados.sort() // Ordena o array em ordem crescente, se string, ordena por ordem alfabetica
console.log(aprovados)

//Formas de excluir
delete aprovados[1]
console.log(aprovados[1]) // undefined
console.log(aprovados[2]) // Bia

aprovados = ['Bia', 'Carlos', 'Ana']
/* aprovados.splice(1, 1) */ //Começar a excluir no índice 1 e parar no 1
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // Exclui elemento 1 e 2 e substitui por o 'Elemento1' e 'Elemento2'
/* aprovados.splice(1, 1, 'Elemento1', 'Elemento2') */
console.log(aprovados)



/* for (c = 0; c < aprovados.length; c++) {
    console.log(`${c + 1} - ${aprovados[c]}`)
} */