const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Exclui o último valor do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // Exclui o primeiro valor do array
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona o valor a primeira posição
console.log(pilotos)

//Adicionando com splice, como foi visto acima
pilotos.splice(2, 0, 'Botton', 'Massa')
console.log(pilotos)

// Remover com splice
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Pega a partir do valor 2 até o final
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Pega do índice 1 até o 3
console.log(algunsPilotos2)